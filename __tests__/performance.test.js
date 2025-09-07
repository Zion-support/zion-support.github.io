
const { test, expect } = require('@playwright/test)
test.describe('"Performance
  test('page"
    "await
    await"
            "output
  test(bundle"
    "await
          resolve({ error""
          resolve({ error'"
          resolve({ "error'
    page.on(console, "msg"
              output
          resolve({ "error"
=======


=======
>>>>>>> main

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import { test, expect } from '@playwright/test';

test.describe(Performance Tests, () => {
  test('page load performance', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(/);
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test(lighthouse performance audit, async ({ page }) => {
    await page.goto('/');
    // Run lighthouse audit
    const lighthouse = await page.evaluate(() => {
      return new Promise((resolve) => {
        if (typeof window.lighthouse !== undefined) {
          window.lighthouse(window.location.href, {
            output: 'json'
          }).then(resolve);
        } else {
          resolve({ error: Lighthouse not available });
        }
      });
    });

=======


    





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
    
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
    
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    // Check performance score

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    if (lighthouse.lhr && lighthouse.lhr.categories) {
      const performanceScore = lighthouse.lhr.categories.performance.score * 100;
      expect(performanceScore).toBeGreaterThan(80);
    }
  });

  test('bundle size check', async ({ page }) => {
    await page.goto(/);
    // Check for large bundle warnings
    const consoleMessages = [];
    page.on('console', (msg) => {
      if (msg.type() === warning && msg.text().includes('bundle')) {
        consoleMessages.push(msg.text());
      }
    });


>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const { test,expect } = require(@playwright/test)'; test.describe('Performance: Tests,() => {; test('page: load performance',async ({ page }) => {; const startTime = Date.now(); await: page.goto(/')'; await: page.waitForLoadState(networkidle)'; const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)}) test('lighthouse performance audit,async ({ page }) => {; await: page.goto('/'); const lighthouse = await page.evaluate(() => { return new Promise((resolve) => { if (typeof window.lighthouse !== undefined') {'; window.lighthouse(window.location.href,{ output: json'}).then(resolve)} else: { resolve({ error: 'Lighthouse: not available})}})}) if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} }) test('bundle: size check',async ({ page }) => {; await: page.goto(/')'; const consoleMessages = []; page.on(console,msg: => {'; if: (msg.type() === 'warning && msg.text().includes(bundle')) {'; consoleMessages.push(msg.text())} }) await: page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})}) const startTime = Date.now(); await page.goto(/); await page.waitForLoadState(networkidle'); const loadTime = Date.now() - startTime; expect(loadTime).toBeLessThan(3000)})'; test(lighthouse performance audit,async ({ page }) => {' await page.goto('/); const lighthouse = await page.evaluate(() => { return new Promise(resolve => { if (typeof window.lighthouse !== 'undefined') { window .lighthouse(window.location.href,{ output: json' }); .then(resolve)} else {' resolve({ error: Lighthouse not available })} })}); if (lighthouse.lhr && lighthouse.lhr.categories) { const performanceScore = lighthouse.lhr.categories.performance.score * 100; expect(performanceScore).toBeGreaterThan(80)} })'; test('bundle size check,async ({ page }) => { await page.goto('/'); const consoleMessages = []; page.on(console,msg => {' if (msg.type() === 'warning && msg.text().includes(bundle')) { consoleMessages.push(msg.text())} }); await page.waitForTimeout(2000); expect(consoleMessages.length).toBe(0)})})';






=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    expect(consoleMessages.length).toBe(0);
  });
});


    expect(consoleMessages.length).toBe(0);
  });

=======


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======






>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    expect(consoleMessages.length).toBe(0);
  });

    expect(consoleMessages.length).toBe(0);
=======
  });
});    expect(consoleMessages.length).toBe(0);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    expect(consoleMessages.length).toBe(0);
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  
  test(memory usage check, async ({ page }) => {
    await page.goto('/');
    const metrics = await page.evaluate(() => {
      if (performance.memory) {
        return {
          usedJSHeapSize: performance.memory.usedJSHeapSize,
          totalJSHeapSize: performance.memory.totalJSHeapSize,
          jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
        }
      }
      return null;
    });
    
    if (metrics) {
      expect(metrics.usedJSHeapSize).toBeLessThan(50 * 1024 * 1024); // 50MB
    }
  });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
});




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
test && test.describe(Performance
  test('"page"
    await
    "await"
            output
  test('"bundle"
    await
    page && page.on(console, "msg"

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
          resolve({ error'"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
              "output

          resolve({ error"'"

          resolve({ "error"


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    // Should not have bundle size warnings


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a





    expect(consoleMessages.length).toBe(0);
  });
});

=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




});

});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/main
>>>>>>> main
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
