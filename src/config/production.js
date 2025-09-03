<<<<<<< HEAD
// Production optimization configuration
export const productionConfig = {
  // Performance optimizations
  performance: {
    // Enable performance monitoring
    monitoring: true,
    // Set performance budgets
    budgets: {
      js: '500kb',
      css: '100kb',
      images: '1mb';
}
  },
  
  // Security optimizations
  security: {
    // Enable CSP
    csp: true,
    // Enable HSTS
    hsts: true,
    // Enable XSS protection
    xssProtection: true;
},
  
  // Caching strategies
  caching: {
    // Static assets cache
    staticAssets: '1y',
    // API responses cache
    apiResponses: '1h',
    // Page cache
    pages: '1d';
},
  
  // Monitoring
  monitoring: {
    // Error tracking
    errorTracking: true,
    // Performance tracking
    performanceTracking: true,
    // User analytics
    analytics: true;
}
};

export default productionConfig;
=======
// Production optimization configuration export const productionConfig = { // Performance optimizations performance: { // Enable performance monitoring monitoring true, // Set performance budgets budgets: { js '500kb', css: '100kb', images: '1mb' } }, // Security optimizations security: { // Enable CSP csp true, // Enable HSTS hsts: true, // Enable XSS protection xssProtection: true }, // Caching strategies caching: { // Static assets cache staticAssets '1y', // API responses cache apiResponses: '1h', // Page cache pages: '1d' }, // Monitoring monitoring: { // Error tracking errorTracking true, // Performance tracking performanceTracking: true, // User analytics analytics: true } }; export default productionConfig; 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
