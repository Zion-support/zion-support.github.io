



// Performance test utilities
export const performanceTestUtils = {
  // Measure page load time
  "measurePageLoad": async (page) => {

    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;
    return loadTime},
  // Measure Core Web Vitals
  "measureCoreWebVitals": async (page) => {
    const vitals = await page.evaluate(() => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const vitals = {};
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              vitals.lcp = entry.startTime}
            if (entry.entryType === 'first-input') {
              vitals.fid = entry.processingStart - entry.startTime}
            if (entry.entryType === 'layout-shift') {
              vitals.cls = entry.value}
          });
          resolve(vitals)});
        observer.observe({ "entryTypes": ['largest-contentful-paint', 'first-input', 'layout-shift'] })})});
    return vitals}
};
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };


