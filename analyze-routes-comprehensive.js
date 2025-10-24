import https from 'https'
import http from 'http'
import { JSDOM } from 'jsdom'
import fs from 'fs'
// Configuration
const BASE_URL = 'https: //ziontechgroup.com'
const TIMEOUT = 10000
const USER_AGENT = 'Mozilla/5.0 (compatible; ZionTechBot/1.0)'
// All routes defined in the app
const definedRoutes = [,
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/ai-services',
  '/it-services',
  '/micro-saas',
  '/blog',
  '/case-studies',
  '/team',
  '/careers',
  '/privacy',
  '/terms',
  '/cookies',
  '/docs',
  '/api-docs',
  '/support',
  '/status',
  '/demo',
  '/consultation',
  '/services',
  '/ai-ops',
  '/healthcare-it',
  '/financial-it',
  '/edge-computing',
  '/5 g-implementation',
  '/iot-platform',
  // AI Services
  '/ai-quantum-financial-oracle',
  '/ai-neural-memory-assistant',
  '/ai-holographic-workspace',
  '/ai-project-manager',
  '/ai-social-media-manager',
  '/ai-analytics-dashboard',
  '/ai-email-marketing',
  '/ai-smart-calendar',
  '/ai-content-writer',
  '/ai-video-generator',
  '/ai-crm-assistant',
  '/ai-customer-support-bot',
  '/ai-content-studio',
  '/ai-financial-advisor',
  '/ai-workflow-automation',
  '/ai-logo-designer',
  '/ai-quantum-computing',
  '/ai-autonomous-systems',
  '/ai-blockchain-solutions',
  '/ai-space-technology-pro',
  '/ai-climate-solutions-pro',
  '/ai-drug-discovery-pro',
  '/ai-financial-crime-detection-pro',
  '/ai-agricultural-intelligence-pro',
  '/ai-energy-grid-management-pro',
  '/ai-legal-research-pro',
  '/ai-fashion-design',
  '/ai-music-composition',
  '/ai-infrastructure-monitoring',
  '/ai-security-operations',
  '/ai-cloud-optimization',
  '/ai-data-center',
  '/blockchain-integration-services',
  '/smart-contract-security-audit',
  '/ai-business-intelligence',
  '/data-warehouse',
  '/real-time-analytics',
  '/smart-cities',
  '/ai-3 d-generation',
  '/ai-analytics',
  '/ai-api-management',
  '/ai-api-manager',
  '/ai-automation',
  '/ai-blockchain-solutions',
  '/ai-business-intelligence',
  '/ai-chatbot-builder',
  '/ai-climate-solutions-pro',
  '/ai-cloud-infrastructure',
  '/ai-code-assistant',
  '/ai-code-generation',
  '/ai-code-security-auditor',
  '/ai-computer-vision',
  '/ai-content-delivery-network',
  '/ai-content-generation',
  '/ai-content-studio',
  '/ai-content-writer',
  '/ai-crm',
  '/ai-crm-assistant',
  '/ai-customer-service',
  '/ai-customer-support',
  '/ai-customer-support-bot',
  '/ai-customer-support-chatbot',
  '/ai-cybersecurity',
  '/ai-cybersecurity-monitor',
  '/ai-data-analytics',
  '/ai-data-visualization',
  '/ai-design-studio',
  '/ai-document-processing',
  '/ai-document-processor',
  '/ai-drug-discovery-pro',
  '/ai-ecommerce-optimizer',
  '/ai-ecommerce-solutions',
  '/ai-education',
  '/ai-email-assistant',
  '/ai-email-marketing-automation',
  '/ai-energy',
  '/ai-energy-grid-management-pro',
  '/ai-enterprise-solutions',
  '/ai-expense-tracker',
  '/ai-fashion-design',
  '/ai-financial-advisor',
  '/ai-financial-analyzer',
  '/ai-financial-crime-detection-pro',
  '/ai-fintech',
  '/ai-fitness-coach',
  '/ai-fraud-detection',
  '/ai-healthcare',
  '/ai-healthcare-solutions',
  '/ai-holographic-workspace',
  '/ai-hr',
  '/ai-hr-assistant',
  '/ai-image-recognition',
  '/ai-infrastructure-monitoring',
  '/ai-insurance',
  '/ai-inventory-management',
  '/ai-inventory-manager',
  '/ai-investment-optimizer',
  '/ai-invoice-generator',
  '/ai-lead-generation',
  '/ai-legal',
  '/ai-legal-assistant',
  '/ai-legal-research-pro',
  '/ai-load-testing',
  '/ai-logo-designer',
  '/ai-ml-platform',
  '/ai-nlp-platform',
  '/ai-predictive-analytics',
  '/ai-project-management',
  '/ai-quantum-computing',
  '/ai-recommendation-engine',
  '/ai-robotics',
  '/ai-sales-automation',
  '/ai-security',
  '/ai-smart-home',
  '/ai-supply-chain',
  '/ai-testing',
  '/ai-video-editing',
  '/ai-voice-assistant',
  '/ai-web-scraping',
  '/ai-workflow-automation',
  '/ai-xr-platform',
  '/ai-youtube-optimizer',
  '/ai-zendesk-integration',
  '/ai-zoom-integration',
  '/ai-accounting',
  '/ai-advertising',
  '/ai-agriculture',
  '/ai-automotive',
  '/ai-banking',
  '/ai-blockchain',
  '/ai-clean-energy',
  '/ai-construction',
  '/ai-cryptocurrency',
  '/ai-defense',
  '/ai-education-platform',
  '/ai-energy-management',
  '/ai-environmental',
  '/ai-finance',
  '/ai-gaming',
  '/ai-government',
  '/ai-healthcare-platform',
  '/ai-hotel',
  '/ai-insurance-platform',
  '/ai-logistics',
  '/ai-manufacturing',
  '/ai-media',
  '/ai-mining',
  '/ai-nonprofit',
  '/ai-oil-gas',
  '/ai-pharmaceutical',
  '/ai-real-estate',
  '/ai-retail',
  '/ai-sports',
  '/ai-telecommunications',
  '/ai-transportation',
  '/ai-travel',
  '/ai-utilities',
  '/ai-warehouse',
  '/ai-weather',
  '/ai-workforce',
  '/ai-zoo',
  // Additional routes from footer
  '/cloud-migration',
  '/cybersecurity',
  '/it-infrastructure',
  '/it-support',
  '/custom-development',
  '/devops-cicd',
  '/database-management',
  '/network-design',
  '/autonomous-systems',
  '/blockchain-web3',
  '/iot-edge-computing',
  '/ar-vr-solutions',
  '/digital-transformation',
  '/innovation-labs',
  '/business-intelligence',
  '/robotics',
  '/news',
  '/partners',
  '/investors',
  '/health',
  '/help',
  '/community',
  '/training',
  '/gdpr',
  '/security',
  '/compliance',
  '/data-protection',
  '/accessibility',
  '/sitemap'
]
// Track results
const results = {
  working: [],
  broken: [],
  errors: [],
  total: 0
};
// Helper function to make HTTP requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url)
    const isHttps = urlObj.protocol === 'https: '
    const client = isHttps ? https : http
    const requestOptions = {
      hostname: urlObj.hostname
      port: urlObj.port || (isHttps ? 443 : 80)
      path: urlObj.pathname + urlObj.search
      method: 'GET',
      headers: {,
        'User-Agent': USER_AGENT
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      },
      timeout: TIMEOUT
    }
    const req = client.request(requestOptions, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve({)
          statusCode: res.statusCode;)
          headers: res.headers),
          body: data),
          url: url
        })
      })
    })
    req.on('error', (error) => {
      reject(error)
    })
    req.on('timeout', () => {
      req.destroy()
      reject(new Error('Request timeout'))
    })
    req.setTimeout(TIMEOUT)
    req.end()
  })
}

// Analyze a single route
async function analyzeRoute(route) {
  const url = BASE_URL + route
  results.total++
  try {
    console.log(`Checking: ${url}`)
    const response = await makeRequest(url)
    if (response.statusCode >= 200 && response.statusCode < 300) {
      results.working.push({)
        route: route),
        url: url),
        statusCode: response.statusCode
      })
      console.log(`✅ ${route} - ${response.statusCode}`)
    } else {
      results.broken.push({)
        route: route;),
        url: url),
        statusCode: response.statusCode),
        reason: `HTTP ${response.statusCode}`
      })
      console.log(`❌ ${route} - ${response.statusCode}`)
    }
  } catch (error) {
    results.errors.push({)
      route: route),
      url: url),
      error: error.message
    })
    console.log(`⚠️  ${route} - Error: ${error.message}`)
  }
}

// Main analysis function
async function analyzeAllRoutes() {
  console.log('Starting comprehensive route analysis...')
  console.log(`Base URL: ${BASE_URL}`)
  console.log(`Total routes to check: ${definedRoutes.length}`)
  console.log('---')
  // Process routes in batches to avoid overwhelming the server
  const batchSize = 10
  for (let i = 0; i < definedRoutes.length; i += batchSize) {
    const batch = definedRoutes.slice(i, i + batchSize)
    const promises = batch.map(route => analyzeRoute(route))
    try {
      await Promise.all(promises)
    } catch (error) {
      console.log(`Batch error: ${error.message}`)
    }
    
    // Small delay between batches
    if (i + batchSize < definedRoutes.length) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  // Generate report
  const report = {
    timestamp: new Date().toISOString()
    baseUrl: BASE_URL
    summary: {
      total: results.total
      working: results.working.length
      broken: results.broken.length
      errors: results.errors.length
    },
    working: results.working
    broken: results.broken
    errors: results.errors
  }
  // Save detailed report
  fs.writeFileSync('route-analysis-report.json', JSON.stringify(report, null, 2))
  // Generate summary
  console.log('\n=== ROUTE ANALYSIS SUMMARY ===')
  console.log(`Total Routes Checked: ${results.total}`)
  console.log(`Working Routes: ${results.working.length}`)
  console.log(`Broken Routes: ${results.broken.length}`)
  console.log(`Error Routes: ${results.errors.length}`)
  if (results.broken.length > 0) {
    console.log('\n=== BROKEN ROUTES ===')
    results.broken.forEach(route => {)
      console.log(`❌ ${route.route} - ${route.reason}`)
    })
  }

  if (results.errors.length > 0) {
    console.log('\n=== ERROR ROUTES ===')
    results.errors.forEach(route => {)
      console.log(`⚠️  ${route.route} - ${route.error}`)
    })
  }

  console.log('\nDetailed report saved to: route-analysis-report.json')
}

// Run the analysis
analyzeAllRoutes()