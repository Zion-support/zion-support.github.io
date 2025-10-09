
// Bundle optimization and analysis
export const bundleOptimizer = {
  // Analyze bundle size
  analyzeBundle: () => {
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    
    const analysis = {
      scripts: scripts.length,
      stylesheets: stylesheets.length,
      totalSize: 0,
      recommendations: []
    };
    
    // Check for large bundles
    if (analysis.scripts > 5) {
      analysis.recommendations.push('Consider code splitting to reduce initial bundle size');
    }
    
    if (analysis.stylesheets > 3) {
      analysis.recommendations.push('Consider consolidating CSS files');
    }
    
    console.log('Bundle Analysis:', analysis);
    return analysis;
  },
  
  // Optimize third-party scripts
  optimizeThirdPartyScripts: () => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  },
  
  // Initialize bundle optimizations
  init: () => {
    if (typeof window !== 'undefined') {
      bundleOptimizer.analyzeBundle();
      bundleOptimizer.optimizeThirdPartyScripts();
    }
  }
};

// Auto-initialize
if (typeof window !== 'undefined') {
  bundleOptimizer.init();
}
