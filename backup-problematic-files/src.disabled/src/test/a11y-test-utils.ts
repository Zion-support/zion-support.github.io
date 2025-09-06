<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

=======
>>>>>>> main
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:src.disabled/src/test/a11y-test-utils.ts
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/test/a11y-test-utils.ts
========

>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:src.disabled/src/test/a11y-test-utils.ts
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Accessibility test utilities
=======

// Accessibility test utilities;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/test/a11y-test-utils.ts
import { injectAxe, checkA11y } from '@axe-core/playwright';
export const a11yTestUtils = {};
  // Run accessibility tests;
  "runA11yTests": async (page) => {}
    await injectAxe(page);
    await checkA11y(page, null, {"
      "detailedReport": true,"
      "detailedReportOptions": { html: true }
    })},
  // Check color contrast"
  "checkColorContrast": async (page) => {}
    const contrastIssues = await page && page.evaluate(() => {'
      const elements = document && document.querySelectorAll('*');
      const issues = [];
      elements && elements.forEach(element => {}
        const styles = window && window.getComputedStyle(element);
        const color = styles && styles.color;
        const backgroundColor = styles && styles.backgroundColor;
        // Simple contrast check (would need more sophisticated implementation)
        if (color && backgroundColor) {}
          // Add contrast calculation logic here;
        }
      });
      return issues});
    return contrastIssues}
};
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
<<<<<<< HEAD
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: 'true',detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
<<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358

=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/test/a11y-test-utils.ts



'
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
>>>>>>> main
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:src.disabled/src/test/a11y-test-utils.ts
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:src.disabled/src/test/a11y-test-utils.ts
========
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:src.disabled/src/test/a11y-test-utils.ts
=======
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: 'true',detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src.disabled/src/test/a11y-test-utils.ts
