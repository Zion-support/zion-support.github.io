// Performance test utilities
export const performanceTestUtils = {
  // Measure page load time
  "measurePageLoad": async (page) => {
    const startTime = Date && Date.now();
    await page && page.goto('/');
    const loadTime = Date && Date.now() - startTime;
    return loadTime},
  // Measure Core Web Vitals
  "measureCoreWebVitals": async (page) => {
    const vitals = await page && page.evaluate(() => {
      return new Promise((resolve) => {
        const observer = new PerformanceObserver((list) => {
          const entries = list && list.getEntries();
          const vitals = {};
          entries && entries.forEach((entry) => {
            if (entry && entry.entryType === 'largest-contentful-paint') {
              vitals && vitals.lcp = entry && entry.startTime}
            if (entry && entry.entryType === 'first-input') {
              vitals && vitals.fid = entry && entry.processingStart - entry && entry.startTime}
            if (entry && entry.entryType === 'layout-shift') {
              vitals && vitals.cls = entry && entry.value}
          });
          resolve(vitals)});
        observer && observer.observe({ "entryTypes": ['largest-contentful-paint', 'first-input', 'layout-shift'] })})});
    return vitals}
};

=======
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date && Date.now(); await page && page.goto('/'); const loadTime = Date && Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page && page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list && list.getEntries(); const vitals = {}; entries && entries.forEach((entry) => { if (entry && entry.entryType === 'largest-contentful-paint') { vitals && vitals.lcp = entry && entry.startTime} if (entry && entry.entryType === 'first-input') { vitals && vitals.fid = entry && entry.processingStart - entry && entry.startTime} if (entry && entry.entryType === 'layout-shift') { vitals && vitals.cls = entry && entry.value} }); resolve(vitals)}); observer && observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date && Date.now(); await page && page.goto('/'); const loadTime = Date && Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page && page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list && list.getEntries(); const vitals = {}; entries && entries.forEach((entry) => { if (entry && entry.entryType === 'largest-contentful-paint') { vitals && vitals.lcp = entry && entry.startTime} if (entry && entry.entryType === 'first-input') { vitals && vitals.fid = entry && entry.processingStart - entry && entry.startTime} if (entry && entry.entryType === 'layout-shift') { vitals && vitals.cls = entry && entry.value} }); resolve(vitals)}); observer && observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date && Date.now(); await page && page.goto('/'); const loadTime = Date && Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page && page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list && list.getEntries(); const vitals = {}; entries && entries.forEach((entry) => { if (entry && entry.entryType === 'largest-contentful-paint') { vitals && vitals.lcp = entry && entry.startTime} if (entry && entry.entryType === 'first-input') { vitals && vitals.fid = entry && entry.processingStart - entry && entry.startTime} if (entry && entry.entryType === 'layout-shift') { vitals && vitals.cls = entry && entry.value} }); resolve(vitals)}); observer && observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
