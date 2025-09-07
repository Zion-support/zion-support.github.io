<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;

=======


<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks && performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks && performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks && performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks && performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim();  const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { } else { } } try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' });  performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: * 1000}ms`); if (parseFloat(responseTime) < 1) { } else { } performanceChecks.loadTime = true} else { ,} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); } generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); `); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
#!/usr/bin/env node

<<<<<<< HEAD
;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

const performanceChecks = { "buildSize": false,"bundleAnalysis": false,"lighthouseScore": false,"loadTime": false,"memoryUsage": fals
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {} else {},'
} try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": * 1000}ms`)if (parseFloat(responseTime) < 1) {} else {} performanceChecks.loadTime = true} else {} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,`} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))} generateRecommendations() {;'
  }
  const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} }'

const totalChecks = Object.keys(performanceChecks).length;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)`;`  const report = { "timestamp": new Date().toISOString(),"score": performanceScore,"checks": performanceChecks,"recommendations": []}if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting','
} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {} else {},'
} try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": * 1000}ms`)if (parseFloat(responseTime) < 1) {} else {} performanceChecks.loadTime = true} else {} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,`} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {} else {},'
} try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": * 1000}ms`)if (parseFloat(responseTime) < 1) {} else {} performanceChecks.loadTime = true} else {} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,`} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {} else {},'
} try {  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })performanceChecks.bundleAnalysis = true} catch (error) { ')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { ,const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": * 1000}ms`)if (parseFloat(responseTime) < 1) {} else {} performanceChecks.loadTime = true} else {} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,`} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;#!/usr/bin/env node;

const fs = // // require('fs')const performanceChecks = {"buildSize": false,"bundleAnalysis": false,"lighthouseScore": false,"loadTime": false,"memoryUsage": false;
}this.metrics = {ursor/automate-test-improve-and-merge-code-646c;
    }
    this.metrics = {"bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString()}}"
;
  const performanceChecks = {"buildSize": false,"bundleAnalysis": false,"lighthouseScore": false,"loadTime": false,"memoryUsage": false}"memoryUsage": false;"
}try {// Check build size;
  }
  if (fs.existsSync('.next')) {const buildSize = execSync('du -sh .next', { "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)// Check if build size is reasonable (less than 50MB;`  const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) {console.log('✅ Build size is within acceptable limits')} else {console.log('⚠️  Build size is large, consider optimization')}'
  }
try {// Bundle analysis;
  }
  console.log('📋 Analyzing bundle...')const bundleInfo  = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' })console.log('✅ Bundle analysis completed')console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true;'
} catch (error) {console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')console.warn('⚠️  Could not collect system "metrics":', error.message)}'
  }
  async collectApplicationMetrics() {try {console.log('📱 Collecting application metrics...')// Check file sizes;'

}

const distPath = path.join(this.projectRoot, 'dist')if (fs.existsSync(distPath)) ;'
  const distSize = this.getDirectorySize(distPath)this.metrics.application.buildSize = Math.round(distSize / 1024 / 1024)// MB;
      }
      // Check node_modules size;

const nodeModulesPath = path.join(this.projectRoot, 'node_modules')if (fs.existsSync(nodeModulesPath)) ;'
  const nodeModulesSize = this.getDirectorySize(nodeModulesPath)this.metrics.application.dependenciesSize = Math.round(nodeModulesSize / 1024 / 1024)// MB;
      }
      // Check source code size;

const srcPath = path.join(this.projectRoot, 'src')if (fs.existsSync(srcPath)) ;'
  const srcSize = this.getDirectorySize(srcPath)this.metrics.application.sourceSize = Math.round(srcSize / 1024)// KB;
      }
      // Count files;
      this.metrics.application.fileCounts = {"source": this.countFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']),"styles": this.countFiles(path.join(this.projectRoot, 'styles'), ['.css', '.scss', '.sass']),"tests": this.countFiles(path.join(this.projectRoot, 'tests'), ['.test.js', '.test.ts', '.spec.js', '.spec.ts'])}} catch (error) {console.warn('⚠️  Could not collect application "metrics":', error.message)}'
  }
  async collectBuildMetrics() {try {console.log('🔨 Collecting build metrics...')// Check if build artifacts exist;'

}

const buildFiles = [;
  'dist/index.html','dist/css','dist/js','dist/assets''
];

      this.metrics.build.artifacts = {}buildFiles.forEach(file => { return  ; }
  const filePath = path.join(this.projectRoot, file)this.metrics.build.artifacts[file] = fs.existsSync(filePath)})// Check build configuration;

const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts')if (fs.existsSync(viteConfigPath)) ;'
  const viteConfig = fs.readFileSync(viteConfigPath, 'utf8')this.metrics.build.config = {"hasVite": true,"hasBuildOptimizations": viteConfig.includes('build.rollupOptions'),"hasChunkSplitting": viteConfig.includes('build.rollupOptions.output.manualChunks')}}'
   
} catch (error) {console.warn('⚠️  Could not collect build "metrics":', error.message)}'
  }
  getDirectorySize(dirPath) {let totalSize = 0;
    }
    try {const items = fs.readdirSync(dirPath)for (const item of items) {const fullPath = path.join(dirPath, item;
  }
  const stat = fs.statSync(fullPath)if (stat.isDirectory()) {totalSize += this.getDirectorySize(fullPath)} else {totalSize += stat.size;
        }
      }
    } catch (error) {// Skip directories we can't read;'
    }
    return totalSize;
  }
  countFiles(dirPath, extensions) {let count = 0;
    }
    try {const items = fs.readdirSync(dirPath)for (const item of items) {const fullPath = path.join(dirPath, item;
  }
  const stat = fs.statSync(fullPath)if (stat.isDirectory()) {count += this.countFiles(fullPath, extensions)} else if (extensions.some(ext => item.endsWith(ext))) {count++;
        }
      }
    } catch (error) {// Skip directories we can't read;'
    }
    return count;
  }
  async saveMetrics() {const metricsPath = path.join(this.projectRoot, 'logs', 'performance-metrics.json')try {fs.writeFileSync(metricsPath, JSON.stringify(this.metrics, null, 2))console.log(`📊 Metrics saved "to": ${metricsPath}`,`} catch (error) {console.warn('⚠️  Could not save "metrics":', error.message)}'
  }
  displaySummary() {console.log('\n📊 Performance "Summary":')console.log('─')console.log('─'.repeat(50))// System metrics;'
    }
    console.log('💻 "System": ')console.log(`   "Memory": ${this.metrics.system.memory && this.metrics.system.memory.heapUsed || 'N/A'}MB used / ${this.metrics.system.memory && this.metrics.system.memory.heapTotal || 'N/A'}MB total`)console.log(`   "CPU": ${this.metrics.system.cpu && this.metrics.system.cpu.user || 'N/A'}ms user / ${this.metrics.system.cpu && this.metrics.system.cpu.system || 'N/A'}ms system`)console.log(`   "Uptime": ${this.metrics.system.process && this.metrics.system.process.uptime || 'N/,'}s`)// Application metrics;`    console.log('\n📱 "Application": ')if (this.metrics.application.buildSize) {console.log(`   Build "size": ${this.metrics.application.buildSize}MB`)}`    if (this.metrics.application.dependenciesSize) {console.log(`   "Dependencies": ${this.metrics.application.dependenciesSize}MB`)}`    if (this.metrics.application.sourceSize) {console.log(`   Source "code": ${this.metrics.application.sourceSize}KB`,`}
    // Build metrics;
    console.log('\n🔨 "Build": ')const artifactCount = Object.values(this.metrics.build.artifacts || ,'
}).filter(Boolean).length;
    console.log(`   "Artifacts": ${artifactCount}/${Object.keys(this.metrics.build.artifacts || {}).length} present`)console.log('─'.repeat(50),'}
  sleep(ms) {return new Promise(resolve => { return setTimeout(resolve, ms))}}
  performanceChecks.bundleAnalysis = true; }
} catch (error) {console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')console.log('✅ Bundle analysis completed')ursor/automate-test-improve-and-merge-code-646c;'
  }
  console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) {console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}'
try {// Check if app is running and get basic metrics;

}

const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //"localhost":3000', { "encoding": 'utf8' })if (isRunning === '200') {console.log('✅ Application is running on "localhost": 3000'),console.log('✅ Application is running on "localhost": 3000'),ursor/automate-test-improve-and-merge-code-646c;'
    }
    console.log('✅ Application is running on "localhost": 3000'),console.log('✅ Application is running on "localhost": 3000'),// Get response time;'

const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //"localhost":3000', { "encoding": 'utf8' })console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) {console.log('✅ Response time is good')} else {console.log('⚠️  Response time could be improved')}'#!/usr/bin/env node;
  const fs = // // require('fs');'

const path = // // require('path');'
=======
const fs = // // require('fs');
const path = // // require('path');
>>>>>>> origin/chore/fix-lint-and-merge
class PerformanceMonitor {
  // TODO: Implement
}
  constructor() {
<<<<<<< HEAD
    this.metrics = {
=======

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    this && this.metrics = {


<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      bundleSize: 0,
      memoryUsage: 0,
      timestamp: new Date().toISOString()
    };
const performanceChecks = {
  buildSize: false,
  bundleAnalysis: false,
  lighthouseScore: false,
  loadTime: false,

      "bundleSize": 0,
      "memoryUsage": 0,

      "timestamp": new Date().toISOString()
    }}
<<<<<<< HEAD
;
=======
const performanceChecks = {"
>>>>>>> origin/chore/fix-lint-and-merge
  "buildSize": false,"
  "bundleAnalysis": false,"
  "lighthouseScore": false,"
  "loadTime": false,"
  "memoryUsage": false};

  memoryUsage: false
}
origin/cursor/automate-test-fix-improve-and-merge-code-a7a7

  memoryUsage: false;
};

<<<<<<< HEAD
    this.metrics = {

    this.metrics = {

=======
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      "bundleSize": 0,
      "memoryUsage": 0,
      "timestamp": new Date().toISOString()

      "bundleSize": 0,""
      "memoryUsage": 0,""
      "timestamp": new Date().toISOString()"
    }}
const performanceChecks = {
  "buildSize": false,
  "bundleAnalysis": false,
  "lighthouseScore": false,
  "loadTime": false,
  "memoryUsage": false};

try {
<<<<<<< HEAD
  // TODO: Implement
  // Check build size;"
  if (fs.existsSync('.next')) {

    console.log(`✅ Build "size": ${buildSize}`);
    // Check if build size is reasonable (less than 50MB)'

    const sizeInMB = parseInt(buildSize.split('\t')[0]);
    if (sizeInMB < 50) {'
      console.log('✅ Build size is within acceptable limits');

  console.log('📋 Analyzing bundle...');

=======
  // Check build size
  if (fs.existsSync('.next')) {
    const buildSize = execSync('du -sh .next', { "encoding": 'utf8' }).trim();
    console.log(`✅ Build "size": ${buildSize}`);
    // Check if build size is reasonable (less than 50MB)
    const sizeInMB = parseInt(buildSize.split('\t')[0]);
    if (sizeInMB < 50) {
      console.log('✅ Build size is within acceptable limits');
    } else {
      console.log('⚠️  Build size is large, consider optimization');
    }
  }
try {
  // Bundle analysis
  console.log('📋 Analyzing bundle...');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });
<<<<<<< HEAD
  console.log('✅ Bundle analysis completed');
ursor/fix-syntax-push-and-merge-to-main-40de
  performanceChecks.bundleAnalysis = true;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  console.log('✅ Bundle analysis completed');

  performanceChecks.bundleAnalysis = true;
} catch (error) {
<<<<<<< HEAD

      console.warn('⚠️  Could not collect system metrics:', error.message);
    }
  }
  async collectApplicationMetrics() {
    try {
      console.log('📱 Collecting application metrics...');
      // Check file sizes
      const distPath = path.join(this.projectRoot, 'dist');
      if (fs.existsSync(distPath)) {
        const distSize = this.getDirectorySize(distPath);
        this.metrics.application.buildSize = Math.round(distSize / 1024 / 1024); // MB
      }
      // Check node_modules size
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      if (fs.existsSync(nodeModulesPath)) {
        const nodeModulesSize = this.getDirectorySize(nodeModulesPath);
        this.metrics.application.dependenciesSize = Math.round(nodeModulesSize / 1024 / 1024); // MB
      }
      // Check source code size
      const srcPath = path.join(this.projectRoot, 'src');
      if (fs.existsSync(srcPath)) {
        const srcSize = this.getDirectorySize(srcPath);
        this.metrics.application.sourceSize = Math.round(srcSize / 1024); // KB
      }
      // Count files
      this.metrics.application.fileCounts = {
        source: this.countFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']),
        styles: this.countFiles(path.join(this.projectRoot, 'styles'), ['.css', '.scss', '.sass']),
        tests: this.countFiles(path.join(this.projectRoot, 'tests'), ['.test.js', '.test.ts', '.spec.js', '.spec.ts'])
      };
    } catch (error) {
      console.warn('⚠️  Could not collect application metrics:', error.message);
    }
  }
  async collectBuildMetrics() {
    try {
      console.log('🔨 Collecting build metrics...');
      // Check if build artifacts exist
      const buildFiles = [
        'dist/index.html',
        'dist/css',
        'dist/js',
        'dist/assets'
      ];
      this.metrics.build.artifacts = {};
      buildFiles.forEach(file => {
        const filePath = path.join(this.projectRoot, file);
        this.metrics.build.artifacts[file] = fs.existsSync(filePath);
      });
      // Check build configuration
      const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
      if (fs.existsSync(viteConfigPath)) {
        const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
        this.metrics.build.config = {
          hasVite: true,
          hasBuildOptimizations: viteConfig.includes('build.rollupOptions'),
          hasChunkSplitting: viteConfig.includes('build.rollupOptions.output.manualChunks')
        };
      }
    } catch (error) {
      console.warn('⚠️  Could not collect build metrics:', error.message);
    }
  }
  getDirectorySize(dirPath) {
    let totalSize = 0;
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          totalSize += this.getDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    return totalSize;
  }
  countFiles(dirPath, extensions) {
    let count = 0;
    try {
      const items = fs.readdirSync(dirPath);
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          count += this.countFiles(fullPath, extensions);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          count++;
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    return count;
  }
  async saveMetrics() {
    const metricsPath = path.join(this.projectRoot, 'logs', 'performance-metrics.json');
    try {
      fs.writeFileSync(metricsPath, JSON.stringify(this.metrics, null, 2));
      console.log(`📊 Metrics saved to: ${metricsPath}`);
    } catch (error) {
      console.warn('⚠️  Could not save metrics:', error.message);
    }
  }
  displaySummary() {
    console.log('\n📊 Performance Summary:');
    console.log('─');
    console.log('─'.repeat(50));
    // System metrics
    console.log('💻 System:');
    console.log(`   Memory: ${this.metrics.system.memory && this.metrics.system.memory.heapUsed || 'N/A'}MB used / ${this.metrics.system.memory && this.metrics.system.memory.heapTotal || 'N/A'}MB total`);
    console.log(`   CPU: ${this.metrics.system.cpu && this.metrics.system.cpu.user || 'N/A'}ms user / ${this.metrics.system.cpu && this.metrics.system.cpu.system || 'N/A'}ms system`);
    console.log(`   Uptime: ${this.metrics.system.process && this.metrics.system.process.uptime || 'N/A}s`);
    // Application metrics
    console.log('\n📱 Application:');
    if (this.metrics.application.buildSize) {
      console.log(`   Build size: ${this.metrics.application.buildSize}MB`);
    }
    if (this.metrics.application.dependenciesSize) {
      console.log(`   Dependencies: ${this.metrics.application.dependenciesSize}MB`);
    }
    if (this.metrics.application.sourceSize) {
      console.log(`   Source code: ${this.metrics.application.sourceSize}KB`);
    }
    // Build metrics
    console.log('\n🔨 Build:');
    const artifactCount = Object.values(this.metrics.build.artifacts || {}).filter(Boolean).length;
    console.log(`   Artifacts: ${artifactCount}/${Object.keys(this.metrics.build.artifacts || {}).length} present`);
    console.log('─'.repeat(50));
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

}

=======
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  performanceChecks.bundleAnalysis = true;
} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');

<<<<<<< HEAD
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
  // TODO: Implement
  // Check if app is running and get basic metrics;
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {

    console.log('✅ Application is running on localhost: 3000');,

    console.log('✅ Application is running on "localhost": 3000'),
    // Get response time'"
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });"`
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);

      console.log('✅ Response time is good');

    } else {

      console.log('⚠️  Response time could be improved');
    performanceChecks.loadTime = true;

=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {


<<<<<<< HEAD

    console.log('✅ Application is running on localhost: 3000');,
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    console.log('✅ Application is running on localhost: 3000');,
    console.log('✅ Application is running on localhost: 3000');,
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    console.log('✅ Application is running on localhost: 3000');,
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log('✅ Application is running on "localhost": 3000'),
    // Get response time
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);
    if (parseFloat(responseTime) < 1) {


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      console.log('✅ Response time is good');
    } else {
      console.log('⚠️  Response time could be improved');
    }
    performanceChecks.loadTime = true;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  } else {
<<<<<<< HEAD
    console.log('⚠️  Application not running on localhost: 3000');,
  }

<<<<<<< HEAD
=======

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console.log('✅ Response time is good')} else {

      console.log('⚠️  Response time could be improved')}
    performanceChecks.loadTime = true} else {'"
    console.log('⚠️  Application not running on "localhost": 3000')}
<<<<<<< HEAD
  measureMemoryUsage() {}
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB;
  }
  generateReport() {}
    const report = {"
      "timestamp": this.metrics.timestamp,"
      "metrics": this.metrics,"

      "recommendations": this.generateRecommendations()

=======
  measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB
  }
  generateReport() {
    const report = {
      "timestamp": this.metrics.timestamp,
      "metrics": this.metrics,
      "recommendations": this.generateRecommendations()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    }
<<<<<<< HEAD
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    console.log('Performance report generated:', reportPath);
  }

<<<<<<< HEAD
    const reportPath = path.join(process.cwd(), 'performance-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log('Performance report "generated": ', reportPath)}
  generateRecommendations() {}
    const recommendations = [];

      recommendations.push('Consider code splitting to reduce bundle size');
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization');
    return recommendations;
  }

=======
    console.log('Performance report generated:', reportPath);
  }
    console.log('Performance report generated:', reportPath);
  }
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
    console.log('Performance report generated:', reportPath);
  }
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log('Performance report "generated": ', reportPath)}
  generateRecommendations() {
    const recommendations = [];
    if (this.metrics.bundleSize > 1000000) {

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
      recommendations.push('Consider code splitting to reduce bundle size');
    }
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization');
    }
    return recommendations;
  }


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      recommendations.push('Consider code splitting to reduce bundle size')}

    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization')}
    return recommendations}
<<<<<<< HEAD
}// Generate performance report;

const performanceScore = Math.round((passedChecks / totalChecks) * 100)console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`)// Save performance report;`
const report = {"timestamp": new Date().toISOString(),"score": performanceScore,"checks": performanceChecks,"recommendations": [];
}"recommendations": [];
}if (performanceScore < 80) {module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
  "timestamp": new Date().toISOString(),"score": performanceScore,"checks": performanceChecks,"recommendations": []}if (performanceScore < 80) {#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() ,"
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

const reportPath = path.join(process.cwd(),'performance-report.json')fs.writeFileSync(reportPath,JSON.stringify(report,null,2))console.log('Performance report "generated":',reportPath)} generateRecommendations() {;'
  }

=======

// Generate performance report
<<<<<<< HEAD

const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);"`
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);
>>>>>>> origin/chore/fix-lint-and-merge

=======
const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);
// Save performance report
const report = {

ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  timestamp: new Date().toISOString(),

<<<<<<< HEAD
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;report.recommendations.push('Consider optimizing build size')report.recommendations.push('Review bundle composition')report.recommendations.push('Implement code splitting')}'
=======
  score: performanceScore,
  checks: performanceChecks,

if (performanceScore < 80) {
<<<<<<< HEAD
  report.recommendations.push('Consider optimizing build size');
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting');
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/chore/fix-lint-and-merge
module.exports = PerformanceMonitor;

<<<<<<< HEAD
<<<<<<< HEAD
}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;ursor/automate-test-improve-and-merge-code-646c;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { "bundleSize": 0,"memoryUsage": 0,"timestamp": new Date().toISOString() 
}

}try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ "encoding": 'utf8' }).trim()console.log(`✅ Build "size": ${buildSize}`)const sizeInMB = parseInt(buildSize.split('\t')[0])if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits','} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...')const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ "encoding": 'utf8' })console.log('✅ Bundle analysis completed')performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_cod,"
}" "http": if (isRunning === '200') { console.log('✅ Application is running on "localhost": 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`)if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on "localhost": 3000')} measureMemoryUsage() { const usage = process.memoryUsage()this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024,'} generateReport() { const report = { "timestamp": this.metrics.timestamp,"metrics": this.metrics,"recommendations": this.generateRecommendations();
}

  }


} module.exports = PerformanceMonitor;

const performanceScore = Math.round((passedChecks / totalChecks) * 100);
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);`// Save performance report,
const report = {
  }
=======
  report && report.recommendations.push('Consider optimizing build size');
  report && report.recommendations.push('Review bundle composition');
  report && report.recommendations.push('Implement code splitting');
}
module && module.exports = PerformanceMonitor;
<<<<<<< HEAD
}
module.exports = PerformanceMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/performance-monitor.js
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  "timestamp": new Date().toISOString(),
=======
>>>>>>> origin/chore/fix-lint-and-merge
  "score": performanceScore,
  "checks": performanceChecks,
  "recommendations": []};
if (performanceScore < 80) {
<<<<<<< HEAD

  report.recommendations.push('Consider optimizing build size');

  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting')}
module.exports = PerformanceMonitor;
=======
<<<<<<< HEAD
  report.recommendations.push('Consider optimizing build size');
  report.recommendations.push('Review bundle composition');
  report.recommendations.push('Implement code splitting')}
module.exports = PerformanceMonitor;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;

  report && report.recommendations.push('Consider optimizing build size');
  report && report.recommendations.push('Review bundle composition');
  report && report.recommendations.push('Implement code splitting')}
module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console && console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { console && console.log('✅ Build size is within acceptable limits')} else { console && console.log('⚠️ Build size is large,consider optimization')} } try { console && console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console && console.log('✅ Bundle analysis completed'); performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { console && console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console && console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console && console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console && console.log('✅ Response time is good')} else { console && console.log('⚠️ Response time could be improved')} performanceChecks && performanceChecks.loadTime = true} else { console && console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); console && console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); console && console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console && console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { console && console.log('✅ Build size is within acceptable limits')} else { console && console.log('⚠️ Build size is large,consider optimization')} } try { console && console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console && console.log('✅ Bundle analysis completed'); performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { console && console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console && console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console && console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console && console.log('✅ Response time is good')} else { console && console.log('⚠️ Response time could be improved')} performanceChecks && performanceChecks.loadTime = true} else { console && console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); console && console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); console && console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console && console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { console && console.log('✅ Build size is within acceptable limits')} else { console && console.log('⚠️ Build size is large,consider optimization')} } try { console && console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console && console.log('✅ Bundle analysis completed'); performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { console && console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console && console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console && console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console && console.log('✅ Response time is good')} else { console && console.log('⚠️ Response time could be improved')} performanceChecks && performanceChecks.loadTime = true} else { console && console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); console && console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); console && console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this && this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs && fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console && console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize && buildSize.split('\t')[0]); if (sizeInMB < 50) { console && console.log('✅ Build size is within acceptable limits')} else { console && console.log('⚠️ Build size is large,consider optimization')} } try { console && console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console && console.log('✅ Bundle analysis completed'); performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) { console && console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console && console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console && console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console && console.log('✅ Response time is good')} else { console && console.log('⚠️ Response time could be improved')} performanceChecks && performanceChecks.loadTime = true} else { console && console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process && process.memoryUsage(); this && this.metrics.memoryUsage = Math && Math.round(usage && usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this && this.metrics.timestamp,metrics: this && this.metrics,recommendations: this && this.generateRecommendations() } const reportPath = path && path.join(process && process.cwd(),'performance-report && report.json'); fs && fs.writeFileSync(reportPath,JSON && JSON.stringify(report,null,2)); console && console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this && this.metrics.bundleSize > 1000000) { recommendations && recommendations.push('Consider code splitting to reduce bundle size')} if (this && this.metrics.memoryUsage > 100) { recommendations && recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object && Object.keys(performanceChecks).length; const passedChecks = Object && Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math && Math.round((passedChecks / totalChecks) * 100); console && console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report && report.recommendations.push('Consider optimizing build size'); report && report.recommendations.push('Review bundle composition'); report && report.recommendations.push('Implement code splitting')} module && module.exports = PerformanceMonitor;
<<<<<<< HEAD
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
#!/usr/bin/env node const fs = const path = class PerformanceMonitor { constructor() { this.metrics = { bundleSize: 0,memoryUsage: 0,timestamp: new Date().toISOString() }} const performanceChecks = { buildSize: false,bundleAnalysis: false,lighthouseScore: false,loadTime: false,memoryUsage: false}; try { if (fs.existsSync('.next')) { const buildSize = execSync('du -sh .next',{ encoding: 'utf8' }).trim(); console.log(`✅ Build size: ${buildSize}`); const sizeInMB = parseInt(buildSize.split('\t')[0]); if (sizeInMB < 50) { console.log('✅ Build size is within acceptable limits')} else { console.log('⚠️ Build size is large,consider optimization')} } try { console.log('📋 Analyzing bundle...'); const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks',{ encoding: 'utf8' }); console.log('✅ Bundle analysis completed'); performanceChecks.bundleAnalysis = true} catch (error) { console.log('⚠️ Bundle analysis not available (install @next/bundle-analyzer)')} try { const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" http: if (isRunning === '200') { console.log('✅ Application is running on localhost: 3000'),const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" http: console.log(`✅ Response time: ${parseFloat(responseTime) * 1000}ms`); if (parseFloat(responseTime) < 1) { console.log('✅ Response time is good')} else { console.log('⚠️ Response time could be improved')} performanceChecks.loadTime = true} else { console.log('⚠️ Application not running on localhost: 3000'),} measureMemoryUsage() { const usage = process.memoryUsage(); this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024)} generateReport() { const report = { timestamp: this.metrics.timestamp,metrics: this.metrics,recommendations: this.generateRecommendations() } const reportPath = path.join(process.cwd(),'performance-report.json'); fs.writeFileSync(reportPath,JSON.stringify(report,null,2)); console.log('Performance report generated:',reportPath)} generateRecommendations() { const recommendations = []; if (this.metrics.bundleSize > 1000000) { recommendations.push('Consider code splitting to reduce bundle size')} if (this.metrics.memoryUsage > 100) { recommendations.push('High memory usage detected,consider optimization')} return recommendations} } const totalChecks = Object.keys(performanceChecks).length; const passedChecks = Object.values(performanceChecks).filter(Boolean).length; const performanceScore = Math.round((passedChecks / totalChecks) * 100); console.log(`\n📊 Performance Score: ${performanceScore}% (${passedChecks}/${totalChecks})`); const report = { timestamp: new Date().toISOString(),score: performanceScore,checks: performanceChecks,recommendations: []}; if (performanceScore < 80) { report.recommendations.push('Consider optimizing build size'); report.recommendations.push('Review bundle composition'); report.recommendations.push('Implement code splitting')} module.exports = PerformanceMonitor;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/performance-monitor.js
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
