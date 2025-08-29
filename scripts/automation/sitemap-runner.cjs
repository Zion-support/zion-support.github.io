#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🗺️  Starting Sitemap Runner Automation...');

// Function to check if sitemap exists and is valid
function checkExistingSitemap() {
  try {
    console.log('🔍 Checking existing sitemap...');
    
    const sitemapFiles = [
      './public/sitemap.xml',
      './dist/sitemap.xml',
      './sitemap.xml'
    ];
    
    for (const sitemapFile of sitemapFiles) {
      if (fs.existsSync(sitemapFile)) {
        const stats = fs.statSync(sitemapFile);
        const content = fs.readFileSync(sitemapFile, 'utf8');
        
        return {
          exists: true,
          file: sitemapFile,
          size: stats.size,
          sizeKB: Math.round(stats.size / 1024 * 100) / 100,
          lastModified: stats.mtime,
          isValid: content.includes('<?xml') && content.includes('<urlset'),
          urlCount: (content.match(/<url>/g) || []).length
        };
      }
    }
    
    return {
      exists: false,
      file: null,
      size: 0,
      sizeKB: 0,
      lastModified: null,
      isValid: false,
      urlCount: 0
    };
  } catch (error) {
    console.log('⚠️  Could not check existing sitemap:', error.message);
    return {
      exists: false,
      file: null,
      size: 0,
      sizeKB: 0,
      lastModified: null,
      isValid: false,
      urlCount: 0
    };
  }
}

// Function to generate sitemap from build output
function generateSitemapFromBuild() {
  try {
    console.log('🏗️  Generating sitemap from build output...');
    
    if (!fs.existsSync('./dist')) {
      console.log('⚠️  Dist directory not found. Building project first...');
      execSync('npm run build', { stdio: 'inherit' });
    }
    
    const sitemapUrls = [];
    
    function scanDirectory(dir, basePath = '') {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const relativePath = path.join(basePath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath, relativePath);
        } else if (item.endsWith('.html')) {
          // Convert file path to URL
          let url = relativePath.replace(/\.html$/, '');
          if (url === 'index') {
            url = '/';
          } else {
            url = `/${url}`;
          }
          
          sitemapUrls.push({
            url: url,
            lastmod: stat.mtime.toISOString().split('T')[0],
            changefreq: 'weekly',
            priority: url === '/' ? '1.0' : '0.8'
          });
        }
      }
    }
    
    scanDirectory('./dist');
    
    return sitemapUrls;
  } catch (error) {
    console.log('⚠️  Could not generate sitemap from build:', error.message);
    return [];
  }
}

// Function to generate sitemap from package.json scripts
function generateSitemapFromScripts() {
  try {
    console.log('📜 Checking for sitemap generation scripts...');
    
    if (fs.existsSync('./package.json')) {
      const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
      const scripts = packageJson.scripts || {};
      
      // Look for sitemap-related scripts
      const sitemapScripts = Object.keys(scripts).filter(script => 
        script.includes('sitemap') || script.includes('generate')
      );
      
      if (sitemapScripts.length > 0) {
        console.log(`Found sitemap scripts: ${sitemapScripts.join(', ')}`);
        
        for (const script of sitemapScripts) {
          try {
            console.log(`Running script: ${script}`);
            execSync(`npm run ${script}`, { stdio: 'inherit' });
            return true;
          } catch (error) {
            console.log(`Script ${script} failed:`, error.message);
          }
        }
      }
    }
    
    return false;
  } catch (error) {
    console.log('⚠️  Could not check package.json scripts:', error.message);
    return false;
  }
}

// Function to create XML sitemap
function createXMLSitemap(urls) {
  try {
    console.log('📝 Creating XML sitemap...');
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    for (const url of urls) {
      xml += '  <url>\n';
      xml += `    <loc>https://yourdomain.com${url.url}</loc>\n`;
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      xml += `    <priority>${url.priority}</priority>\n`;
      xml += '  </url>\n';
    }
    
    xml += '</urlset>';
    
    return xml;
  } catch (error) {
    console.log('⚠️  Could not create XML sitemap:', error.message);
    return null;
  }
}

// Function to create robots.txt
function createRobotsTxt(sitemapUrl) {
  try {
    console.log('🤖 Creating robots.txt...');
    
    const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${sitemapUrl}

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /node_modules/

# Allow important files
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /fonts/`;
    
    return robotsContent;
  } catch (error) {
    console.log('⚠️  Could not create robots.txt:', error.message);
    return null;
  }
}

// Function to validate sitemap
function validateSitemap(sitemapContent) {
  try {
    console.log('✅ Validating sitemap...');
    
    // Basic XML validation
    if (!sitemapContent.includes('<?xml')) {
      return { isValid: false, error: 'Missing XML declaration' };
    }
    
    if (!sitemapContent.includes('<urlset')) {
      return { isValid: false, error: 'Missing urlset element' };
    }
    
    if (!sitemapContent.includes('</urlset>')) {
      return { isValid: false, error: 'Missing closing urlset tag' };
    }
    
    // Count URLs
    const urlCount = (sitemapContent.match(/<url>/g) || []).length;
    if (urlCount === 0) {
      return { isValid: false, error: 'No URLs found in sitemap' };
    }
    
    return { isValid: true, urlCount: urlCount };
  } catch (error) {
    return { isValid: false, error: error.message };
  }
}

// Function to generate sitemap report
function generateSitemapReport(existingSitemap, generatedUrls, sitemapContent, robotsContent, validation) {
  const report = {
    timestamp: new Date().toISOString(),
    existingSitemap: existingSitemap,
    generatedUrls: generatedUrls,
    sitemapContent: sitemapContent ? 'Generated successfully' : 'Failed to generate',
    robotsContent: robotsContent ? 'Generated successfully' : 'Failed to generate',
    validation: validation,
    summary: {
      totalUrls: generatedUrls.length,
      sitemapGenerated: !!sitemapContent,
      robotsGenerated: !!robotsContent,
      isValid: validation.isValid,
      urlCount: validation.urlCount || 0
    }
  };
  
  return report;
}

// Main function
async function runSitemapRunner() {
  try {
    console.log('🚀 Starting comprehensive sitemap generation...');
    
    // Check existing sitemap
    const existingSitemap = checkExistingSitemap();
    
    if (existingSitemap.exists) {
      console.log(`📄 Found existing sitemap: ${existingSitemap.file}`);
      console.log(`Size: ${existingSitemap.sizeKB}KB, URLs: ${existingSitemap.urlCount}`);
      console.log(`Last modified: ${existingSitemap.lastModified}`);
      console.log(`Valid: ${existingSitemap.isValid ? 'Yes' : 'No'}`);
    }
    
    // Generate sitemap from build output
    const generatedUrls = generateSitemapFromBuild();
    console.log(`🔗 Found ${generatedUrls.length} URLs to include in sitemap`);
    
    // Try to generate sitemap from scripts first
    let sitemapGenerated = generateSitemapFromScripts();
    
    let sitemapContent = null;
    let robotsContent = null;
    
    if (!sitemapGenerated) {
      // Create XML sitemap manually
      sitemapContent = createXMLSitemap(generatedUrls);
      
      if (sitemapContent) {
        // Save sitemap
        const sitemapPath = './dist/sitemap.xml';
        fs.writeFileSync(sitemapPath, sitemapContent);
        console.log(`💾 Sitemap saved to: ${sitemapPath}`);
      }
    }
    
    // Create robots.txt
    robotsContent = createRobotsTxt('https://yourdomain.com/sitemap.xml');
    
    if (robotsContent) {
      const robotsPath = './dist/robots.txt';
      fs.writeFileSync(robotsPath, robotsContent);
      console.log(`🤖 Robots.txt saved to: ${robotsPath}`);
    }
    
    // Validate sitemap
    const validation = validateSitemap(sitemapContent || '');
    
    // Generate comprehensive report
    const sitemapReport = generateSitemapReport(
      existingSitemap,
      generatedUrls,
      sitemapContent,
      robotsContent,
      validation
    );
    
    // Save detailed report
    fs.writeFileSync('./sitemap-runner-report.json', JSON.stringify(sitemapReport, null, 2));
    
    // Display summary
    console.log('\n📊 Sitemap Generation Summary:');
    console.log(`Total URLs found: ${sitemapReport.summary.totalUrls}`);
    console.log(`Sitemap generated: ${sitemapReport.summary.sitemapGenerated ? 'Yes' : 'No'}`);
    console.log(`Robots.txt generated: ${sitemapReport.summary.robotsGenerated ? 'Yes' : 'No'}`);
    console.log(`Sitemap valid: ${sitemapReport.summary.isValid ? 'Yes' : 'No'}`);
    console.log(`URLs in sitemap: ${sitemapReport.summary.urlCount}`);
    
    if (validation.isValid) {
      console.log('\n✅ Sitemap generated successfully and is valid!');
    } else {
      console.log(`\n❌ Sitemap validation failed: ${validation.error}`);
    }
    
    // Display URLs
    if (generatedUrls.length > 0) {
      console.log('\n🔗 URLs included in sitemap:');
      generatedUrls.forEach(url => {
        console.log(`  - ${url.url} (Priority: ${url.priority}, Change: ${url.changefreq})`);
      });
    }
    
    console.log('\n🗺️  Sitemap Runner Automation completed successfully!');
    console.log('📄 Detailed report saved to: sitemap-runner-report.json');
    
    // Provide recommendations
    console.log('\n📋 Recommendations:');
    console.log('1. Update the domain in sitemap.xml and robots.txt');
    console.log('2. Submit sitemap to search engines');
    console.log('3. Set up automatic sitemap generation on build');
    console.log('4. Consider adding image and video sitemaps if applicable');
    
  } catch (error) {
    console.error('❌ Error in Sitemap Runner Automation:', error);
    process.exit(1);
  }
}

// Run the automation
runSitemapRunner();