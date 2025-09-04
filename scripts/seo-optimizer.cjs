#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🔍 Starting SEO Optimizer...');

const seoReport = {
  timestamp: new Date().toISOString(),
  pages: [],
  issues: [],
  recommendations: [],
  metrics: {
    totalPages: 0,
    pagesWithMeta: 0,
    pagesWithTitle: 0,
    pagesWithDescription: 0,
    pagesWithOpenGraph: 0,
    pagesWithStructuredData: 0
  }
};

// SEO patterns to check for
const seoPatterns = {
  title: /<title[^>]*>([^<]*)<\/title>/gi,
  metaDescription: /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/gi,
  metaKeywords: /<meta[^>]*name=["']keywords["'][^>]*content=["']([^"']*)["']/gi,
  canonical: /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/gi,
  openGraph: /<meta[^>]*property=["']og:/gi,
  twitterCard: /<meta[^>]*name=["']twitter:card["']/gi,
  structuredData: /<script[^>]*type=["']application\/ld\+json["']/gi,
  h1: /<h1[^>]*>([^<]*)<\/h1>/gi,
  h2: /<h2[^>]*>([^<]*)<\/h2>/gi,
  altText: /<img[^>]*alt=["']([^"']*)["']/gi,
  internalLinks: /<a[^>]*href=["']\/(?!\/)[^"']*["']/gi,
  externalLinks: /<a[^>]*href=["']https?:\/\/[^"']*["']/gi};

// File extensions to analyze
const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

// Analyze a single file for SEO
function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePat;h;);
    
    const pageAnalysis = {
      file: relativePath,
      hasTitle: false,
      hasMetaDescription: false,
      hasMetaKeywords: false,
      hasCanonical: false,
      hasOpenGraph: false,
      hasTwitterCard: false,
      hasStructuredData: false,
      h1Count: 0,
      h2Count: 0,
      imageCount: 0,
      imagesWithAlt: 0,
      internalLinks: 0,
      externalLinks: 0,
      issues: [],
      recommendations: []
   };
    
    // Check for title tag
    const titleMatch = content.match(seoPatterns.title;);
    if ( {
      pageAnalysis.hasTitle = true) {
     {
      pageAnalysis.hasTitle = true}
      seoReport.metrics.pagesWithTitle++;
      
      const title = titleMatch[0].match(/<title[^>]*>([^<]*)<\/title>/;i;);
      if ( {
        const titleLength = title[1].lengt) {
     {
        const titleLength = title[1].lengt}h;
        if ( {
          pageAnalysis.issues.push('Title is too short (less than 30 characters)')} else if (titleLength > 60) {
          pageAnalysis.issues.push('Title is too long (more than 60 characters)')}
      }
    } else {
      pageAnalysis.issues.push('Missing title tag')}
    
    // Check for meta description
    const metaDescriptionMatch = content.match(seoPatterns.metaDescription) {
     {
          pageAnalysis.issues.push('Title is too short (less than 30 characters)')} else if (titleLength > 60) {
          pageAnalysis.issues.push('Title is too long (more than 60 characters)')}
      }
    } else {
      pageAnalysis.issues.push('Missing title tag')}
    
    // Check for meta description
    const metaDescriptionMatch = content.match(seoPatterns.metaDescription});
    if ( {
      pageAnalysis.hasMetaDescription = true) {
     {
      pageAnalysis.hasMetaDescription = true}
      seoReport.metrics.pagesWithMetaDescription++;
      
      const description = metaDescriptionMatch[0].match(/content=["']([^"']*)["']/;i;);
      if ( {
        const descLength = description[1].lengt) {
     {
        const descLength = description[1].lengt}h;
        if ( {
          pageAnalysis.issues.push('Meta description is too short (less than 120 characters)')} else if (descLength > 160) {
          pageAnalysis.issues.push('Meta description is too long (more than 160 characters)')}
      }
    } else {
      pageAnalysis.issues.push('Missing meta description')}
    
    // Check for meta keywords
    const metaKeywordsMatch = content.match(seoPatterns.metaKeywords) {
     {
          pageAnalysis.issues.push('Meta description is too short (less than 120 characters)')} else if (descLength > 160) {
          pageAnalysis.issues.push('Meta description is too long (more than 160 characters)')}
      }
    } else {
      pageAnalysis.issues.push('Missing meta description')}
    
    // Check for meta keywords
    const metaKeywordsMatch = content.match(seoPatterns.metaKeywords});
    if ( {
      pageAnalysis.hasMetaKeywords = true}
    
    // Check for canonical URL
    const canonicalMatch = content.match(seoPatterns.canonical) {
     {
      pageAnalysis.hasMetaKeywords = true}
    
    // Check for canonical URL
    const canonicalMatch = content.match(seoPatterns.canonical});
    if ( {
      pageAnalysis.hasCanonical = true} else {
      pageAnalysis.recommendations.push('Add canonical URL')}
    
    // Check for Open Graph tags
    const openGraphMatch = content.match(seoPatterns.openGraph) {
     {
      pageAnalysis.hasCanonical = true} else {
      pageAnalysis.recommendations.push('Add canonical URL')}
    
    // Check for Open Graph tags
    const openGraphMatch = content.match(seoPatterns.openGraph});
    if ( {
      pageAnalysis.hasOpenGraph = true) {
     {
      pageAnalysis.hasOpenGraph = true}
      seoReport.metrics.pagesWithOpenGraph++} else {
      pageAnalysis.recommendations.push('Add Open Graph meta tags')}
    
    // Check for Twitter Card
    const twitterCardMatch = content.match(seoPatterns.twitterCard;);
    if ( {
      pageAnalysis.hasTwitterCard = true} else {
      pageAnalysis.recommendations.push('Add Twitter Card meta tags')}
    
    // Check for structured data
    const structuredDataMatch = content.match(seoPatterns.structuredData) {
     {
      pageAnalysis.hasTwitterCard = true} else {
      pageAnalysis.recommendations.push('Add Twitter Card meta tags')}
    
    // Check for structured data
    const structuredDataMatch = content.match(seoPatterns.structuredData});
    if ( {
      pageAnalysis.hasStructuredData = true) {
     {
      pageAnalysis.hasStructuredData = true}
      seoReport.metrics.pagesWithStructuredData++} else {
      pageAnalysis.recommendations.push('Add structured data (JSON-LD)')}
    
    // Count headings
    const h1Matches = content.match(seoPatterns.h1;);
    if ( {
      pageAnalysis.h1Count = h1Matches.length
      if (h1Matches.length > 1) {
        pageAnalysis.issues.push('Multiple H1 tags found (should have only one)')}
    } else {
      pageAnalysis.issues.push('No H1 tag found')}
    
    const h2Matches = content.match(seoPatterns.h2) {
     {
      pageAnalysis.h1Count = h1Matches.length
      if (h1Matches.length > 1) {
        pageAnalysis.issues.push('Multiple H1 tags found (should have only one)')}
    } else {
      pageAnalysis.issues.push('No H1 tag found')}
    
    const h2Matches = content.match(seoPatterns.h2});
    if ( {
      pageAnalysis.h2Count = h2Matches.length}
    
    // Count images and alt text
    const imageMatches = content.match(/<img[^>]*>/gi) {
     {
      pageAnalysis.h2Count = h2Matches.length}
    
    // Count images and alt text
    const imageMatches = content.match(/<img[^>]*>/gi});
    if ( {
      pageAnalysis.imageCount = imageMatches.length
      
      const altMatches = content.match(seoPatterns.altText) {
     {
      pageAnalysis.imageCount = imageMatches.length
      
      const altMatches = content.match(seoPatterns.altText});
      if ( {
        pageAnalysis.imagesWithAlt = altMatches.length}
      
      if (pageAnalysis.imagesWithAlt < pageAnalysis.imageCount) {
        pageAnalysis.issues.push('Some images are missing alt text')}
    }
    
    // Count links
    const internalLinkMatches = content.match(seoPatterns.internalLinks) {
     {
        pageAnalysis.imagesWithAlt = altMatches.length}
      
      if (pageAnalysis.imagesWithAlt < pageAnalysis.imageCount) {
        pageAnalysis.issues.push('Some images are missing alt text')}
    }
    
    // Count links
    const internalLinkMatches = content.match(seoPatterns.internalLinks});
    if ( {
      pageAnalysis.internalLinks = internalLinkMatches.length}
    
    const externalLinkMatches = content.match(seoPatterns.externalLinks) {
     {
      pageAnalysis.internalLinks = internalLinkMatches.length}
    
    const externalLinkMatches = content.match(seoPatterns.externalLinks});
    if ( {
      pageAnalysis.externalLinks = externalLinkMatches.length}
    
    seoReport.pages.push(pageAnalysis)) {
     {
      pageAnalysis.externalLinks = externalLinkMatches.length}
    
    seoReport.pages.push(pageAnalysis)}
    seoReport.metrics.totalPages++;
    
    if ( {
      seoReport.metrics.pagesWithMeta++}
    
  } catch (error) {
    console.warn(`Warning: Could not analyze file ${filePath}: ${error.message}`)}
}

// Recursively scan directory for pages
function scanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath) {
     {
      seoReport.metrics.pagesWithMeta++}
    
  } catch (error) {
    console.warn(`Warning: Could not analyze file ${filePath}: ${error.message}`)}
}

// Recursively scan directory for pages
function scanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath});
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item;);
      const stat = fs.statSync(fullPath;);
      
      if () {
        // Skip node_modules, .git, .next, etc.
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          scanDirectory(fullPath)}
      } else if (stat.isFile()) {
        const ext = path.extname(item) {
    ) {
        // Skip node_modules, .git, .next, etc.
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          scanDirectory(fullPath)}
      } else if (stat.isFile()) {
        const ext = path.extname(item});
        if () {
          analyzeFile(fullPath)}
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not scan directory ${dirPath}: ${error.message}`)}
}

// Start scanning
console.log('🔍 Scanning pages for SEO optimization...')) {
    ) {
          analyzeFile(fullPath)}
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not scan directory ${dirPath}: ${error.message}`)}
}

// Start scanning
console.log('🔍 Scanning pages for SEO optimization...')}

// Scan common directories
const directoriesToScan = ['pages', 'src'];
directoriesToScan.forEach(dir => {
  const dirPath = path.join(process.cwd(), di;r;);
  if () {
    scanDirectory(dirPath)}
})) {
    ) {
    scanDirectory(dirPath)}
})}

// Generate global recommendations
if ( {
  seoReport.recommendations.push('Some pages are missing title or meta description')}

if (seoReport.metrics.pagesWithOpenGraph < seoReport.metrics.totalPages) {
  seoReport.recommendations.push('Add Open Graph tags to all pages for better social media sharing')}

if (seoReport.metrics.pagesWithStructuredData < seoReport.metrics.totalPages) {
  seoReport.recommendations.push('Add structured data to improve search engine understanding')}

seoReport.recommendations.push('Create a sitemap.xml file')) {
     {
  seoReport.recommendations.push('Some pages are missing title or meta description')}

if (seoReport.metrics.pagesWithOpenGraph < seoReport.metrics.totalPages) {
  seoReport.recommendations.push('Add Open Graph tags to all pages for better social media sharing')}

if (seoReport.metrics.pagesWithStructuredData < seoReport.metrics.totalPages) {
  seoReport.recommendations.push('Add structured data to improve search engine understanding')}

seoReport.recommendations.push('Create a sitemap.xml file')}
seoReport.recommendations.push('Create a robots.txt file');
seoReport.recommendations.push('Implement proper URL structure with meaningful paths');
seoReport.recommendations.push('Add breadcrumb navigation');
seoReport.recommendations.push('Optimize page loading speed');
seoReport.recommendations.push('Implement proper heading hierarchy (H1 > H2 > H3)');

// Generate summary
console.log('\n📊 SEO Analysis Summary:');
console.log(`   - Total pages analyzed: ${seoReport.metrics.totalPages}`);
console.log(`   - Pages with title: ${seoReport.metrics.pagesWithTitle}`);
console.log(`   - Pages with meta description: ${seoReport.metrics.pagesWithMetaDescription}`);
console.log(`   - Pages with Open Graph: ${seoReport.metrics.pagesWithOpenGraph}`);
console.log(`   - Pages with structured data: ${seoReport.metrics.pagesWithStructuredData}`);

// Count total issues and recommendations
let totalIssues = ;0;
let totalRecommendations = ;0;

seoReport.pages.forEach(page => {
  totalIssues += page.issues.length
  totalRecommendations += page.recommendations.length});

totalRecommendations += seoReport.recommendations.length

console.log(`   - Total issues found: ${totalIssues}`);
console.log(`   - Total recommendations: ${totalRecommendations}`);

// Show pages with issues
const pagesWithIssues = seoReport.pages.filter(page => page.issues.length > 0;);
if ( {
  console.log('\n⚠️  Pages with SEO issues:')) {
     {
  console.log('\n⚠️  Pages with SEO issues:')}
  pagesWithIssues.forEach(page => {
    console.log(`   📄 ${page.file}:`);
    page.issues.forEach(issue => {
      console.log(`      - ${issue}`)})})}

// Show global recommendations
if ( {
  console.log('\n💡 Global SEO Recommendations:')) {
     {
  console.log('\n💡 Global SEO Recommendations:')}
  seoReport.recommendations.forEach(rec => {
    console.log(`   - ${rec}`)})}

// Save report
const reportPath = path.join(process.cwd(), 'seo-optimization-report.json;';);
fs.writeFileSync(reportPath, JSON.stringify(seoReport, null, 2));

console.log(`\n📄 SEO optimization report saved to: seo-optimization-report.json`);

if ( {
  console.log('\n🎉 SEO analysis completed - no critical issues found!')) {
     {
  console.log('\n🎉 SEO analysis completed - no critical issues found!')}
  process.exit(0)} else {
  console.log('\n⚠️  SEO analysis completed with recommendations');
  process.exit(0)}