<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
=======
<<<<<<< HEAD

=======
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:src.disabled/src/test/a11y-test-utils.ts
// Accessibility test utilities
import { injectAxe, checkA11y } from '@axe-core/playwright';
export const a11yTestUtils = {
  // Run accessibility tests
  "runA11yTests": async (page) => {
    await injectAxe(page);
    await checkA11y(page, null, {
      "detailedReport": true,
      "detailedReportOptions": { html: true }
    })},
  // Check color contrast
  "checkColorContrast": async (page) => {
    const contrastIssues = await page && page.evaluate(() => {
      const elements = document && document.querySelectorAll('*');
      const issues = [];
      elements && elements.forEach(element => {
        const styles = window && window.getComputedStyle(element);
        const color = styles && styles.color;
        const backgroundColor = styles && styles.backgroundColor;
        // Simple contrast check (would need more sophisticated implementation)
        if (color && backgroundColor) {
          // Add contrast calculation logic here
        }
      });
      return issues});
    return contrastIssues}
};
<<<<<<< HEAD
<<<<<<< HEAD
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: 'true',detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
<<<<<<< HEAD:backup-problematic-files/src.disabled/src/test/a11y-test-utils.ts
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
=======
<<<<<<< HEAD

=======


import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: 'true',detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };


import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page.evaluate(() => { const elements = document.querySelectorAll('*'); const issues = []; elements.forEach(element => { const styles = window.getComputedStyle(element); const color = styles.color; const backgroundColor = styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc:src.disabled/src/test/a11y-test-utils.ts
