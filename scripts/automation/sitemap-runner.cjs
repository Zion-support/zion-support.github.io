#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🗺️ Sitemap Runner Automation Started');

function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed:`, error.message);
    return null;
  }
}

function runSitemapGeneration() {
  console.log('🗺️ Starting sitemap generation process...');
  
  // Build project first
  console.log('🏗️ Building project for sitemap generation...');
  const buildResult = runCommand('npm run build', 'Project build');
  
  if (buildResult) {
    console.log('✅ Build successful! Generating sitemap...');
    
    if (fs.existsSync('dist')) {
      // Check if sitemap generation script exists
      const sitemapScripts = [
        'scripts/generate-sitemap.js',
        'scripts/generate-sitemap.mjs',
        'scripts/generate-sitemap.cjs'
      ];
      
      let sitemapScript = null;
      for (const script of sitemapScripts) {
        if (fs.existsSync(script)) {
          sitemapScript = script;
          break;
        }
      }
      
      if (sitemapScript) {
        console.log(`📜 Found sitemap script: ${sitemapScript}`);
        
        // Run sitemap generation
        const sitemapResult = runCommand(`node ${sitemapScript}`, 'Sitemap generation');
        
        if (sitemapResult) {
          console.log('✅ Sitemap generated successfully!');
          
          // Check for generated sitemap files
          const sitemapFiles = [
            'dist/sitemap.xml',
            'dist/sitemap-index.xml',
            'sitemap.xml',
            'public/sitemap.xml'
          ];
          
          let sitemapFound = false;
          sitemapFiles.forEach(file => {
            if (fs.existsSync(file)) {
              sitemapFound = true;
              const stats = fs.statSync(file);
              const sizeKB = (stats.size / 1024).toFixed(2);
              console.log(`  📄 ${file}: ${sizeKB} KB`);
              
              // Validate sitemap content
              try {
                const content = fs.readFileSync(file, 'utf8');
                if (content.includes('<?xml') && content.includes('<urlset')) {
                  console.log(`    ✅ Valid XML sitemap format`);
                  
                  // Count URLs
                  const urlMatches = content.match(/<url>/g);
                  if (urlMatches) {
                    console.log(`    📊 Contains ${urlMatches.length} URLs`);
                  }
                } else {
                  console.log(`    ⚠️ May not be a valid XML sitemap`);
                }
              } catch (error) {
                console.log(`    ❌ Error reading sitemap file`);
              }
            }
          });
          
          if (!sitemapFound) {
            console.log('⚠️ No sitemap files found in expected locations');
          }
          
        } else {
          console.log('❌ Sitemap generation failed');
        }
        
      } else {
        console.log('⚠️ No sitemap generation script found');
        console.log('💡 Consider creating a sitemap generation script');
        
        // Create a basic sitemap manually
        console.log('🔧 Creating basic sitemap manually...');
        createBasicSitemap();
      }
      
      // Check for robots.txt
      const robotsFiles = [
        'dist/robots.txt',
        'public/robots.txt',
        'robots.txt'
      ];
      
      let robotsFound = false;
      robotsFiles.forEach(file => {
        if (fs.existsSync(file)) {
          robotsFound = true;
          console.log(`  🤖 Found robots.txt: ${file}`);
          
          // Check if sitemap is referenced in robots.txt
          try {
            const content = fs.readFileSync(file, 'utf8');
            if (content.includes('sitemap')) {
              console.log(`    ✅ Sitemap referenced in robots.txt`);
            } else {
              console.log(`    ⚠️ Sitemap not referenced in robots.txt`);
            }
          } catch (error) {
            console.log(`    ❌ Error reading robots.txt`);
          }
        }
      });
      
      if (!robotsFound) {
        console.log('⚠️ No robots.txt file found');
        console.log('💡 Consider creating a robots.txt file');
      }
      
    } else {
      console.log('❌ Build directory not found');
    }
    
  } else {
    console.log('❌ Build failed, cannot generate sitemap');
  }
  
  console.log('✅ Sitemap generation process completed');
}

function createBasicSitemap() {
  try {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    
    fs.writeFileSync('dist/sitemap.xml', sitemapContent);
    console.log('  ✅ Basic sitemap.xml created in dist/');
    
  } catch (error) {
    console.log(`  ❌ Failed to create basic sitemap: ${error.message}`);
  }
}

// Main execution
runSitemapGeneration();

// Set up interval for daily execution
const interval = process.env.AUTOMATION_INTERVAL || 86400000; // 24 hours default
setInterval(runSitemapGeneration, interval);

console.log(`⏰ Sitemap Runner will run every ${interval / 3600000} hours`);