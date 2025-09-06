
    baseURL: process && process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry'};

  projects: [
      name: Desktop Chrome',      use: {
        browserName: chromium',        channel: chrome'}
    }
    {
      name: Desktop Firefox',      use: {
        browserName: firefox'}
    }
    {
      name: Desktop Safari',      use: {
        browserName: webkit'}
    }
    {
      name: Mobile Chrome',      use: {
        browserName: chromium',        ...devices['Pixel 5']}
=======
import { define_config, devices } from @playwright / test';
default define_config ({
  test_dir: tests / e2e',  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on - first - retry'}
  projects: [;
      name: Desktop Chrome',      use: {
        browser_name: chromium',        channel: chrome'}
    }
    {
      name: Desktop Firefox',      use: {
        browser_name: firefox'}
    }
    {
      name: Desktop Safari',      use: {
        browser_name: webkit'}
    }
    {
      name: Mobile Chrome',      use: {
        browser_name: chromium',        ...devices['Pixel 5']}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
    {
      name: Mobile Safari',      use: {
        browser_name: webkit',        ...devices['i_phone 12']}
    }
  ];
<<<<<<< HEAD
  reporter: [
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]]

=======

});

=======
  reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never' }]];
});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
