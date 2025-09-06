<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/performance-utils.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

=======
>>>>>>> main
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/performance-utils.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:src.disabled/src/test/performance-utils.ts
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/test/performance-utils.ts
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
<<<<<<< HEAD
<<<<<<< HEAD
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/performance-utils.ts
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
=======
<<<<<<< HEAD
<<<<<<< HEAD
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

=======


export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date && Date.now(); await page && page.goto('/'); const loadTime = Date && Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page && page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list && list.getEntries(); const vitals = {}; entries && entries.forEach((entry) => { if (entry && entry.entryType === 'largest-contentful-paint') { vitals && vitals.lcp = entry && entry.startTime} if (entry && entry.entryType === 'first-input') { vitals && vitals.fid = entry && entry.processingStart - entry && entry.startTime} if (entry && entry.entryType === 'layout-shift') { vitals && vitals.cls = entry && entry.value} }); resolve(vitals)}); observer && observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date && Date.now(); await page && page.goto('/'); const loadTime = Date && Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page && page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list && list.getEntries(); const vitals = {}; entries && entries.forEach((entry) => { if (entry && entry.entryType === 'largest-contentful-paint') { vitals && vitals.lcp = entry && entry.startTime} if (entry && entry.entryType === 'first-input') { vitals && vitals.fid = entry && entry.processingStart - entry && entry.startTime} if (entry && entry.entryType === 'layout-shift') { vitals && vitals.cls = entry && entry.value} }); resolve(vitals)}); observer && observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date && Date.now(); await page && page.goto('/'); const loadTime = Date && Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page && page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list && list.getEntries(); const vitals = {}; entries && entries.forEach((entry) => { if (entry && entry.entryType === 'largest-contentful-paint') { vitals && vitals.lcp = entry && entry.startTime} if (entry && entry.entryType === 'first-input') { vitals && vitals.fid = entry && entry.processingStart - entry && entry.startTime} if (entry && entry.entryType === 'layout-shift') { vitals && vitals.cls = entry && entry.value} }); resolve(vitals)}); observer && observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };


export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
export const performanceTestUtils = { measurePageLoad: async (page) => { const startTime = Date.now(); await page.goto('/'); const loadTime = Date.now() - startTime; return loadTime},measureCoreWebVitals: async (page) => { const vitals = await page.evaluate(() => { return new Promise((resolve) => { const observer = new PerformanceObserver((list) => { const entries = list.getEntries(); const vitals = {}; entries.forEach((entry) => { if (entry.entryType === 'largest-contentful-paint') { vitals.lcp = entry.startTime} if (entry.entryType === 'first-input') { vitals.fid = entry.processingStart - entry.startTime} if (entry.entryType === 'layout-shift') { vitals.cls = entry.value} }); resolve(vitals)}); observer.observe({ entryTypes: ['largest-contentful-paint','first-input','layout-shift'] })})}); return vitals} };
>>>>>>> main
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/performance-utils.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:src.disabled/src/test/performance-utils.ts
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/test/performance-utils.ts
