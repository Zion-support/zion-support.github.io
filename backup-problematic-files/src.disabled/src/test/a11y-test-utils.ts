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

=======
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: 'true',detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };
import { injectAxe,checkA11y } from '@axe-core/playwright'; export const a11yTestUtils = { runA11yTests: async (page) => { await injectAxe(page); await checkA11y(page,null,{ detailedReport: true,detailedReportOptions: { html: true } })},checkColorContrast: async (page) => { const contrastIssues = await page && page.evaluate(() => { const elements = document && document.querySelectorAll('*'); const issues = []; elements && elements.forEach(element => { const styles = window && window.getComputedStyle(element); const color = styles && styles.color; const backgroundColor = styles && styles.backgroundColor; if (color && backgroundColor) { } }); return issues}); return contrastIssues} };=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
