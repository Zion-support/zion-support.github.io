import { defineConfig, devices } from @playwright/test';
default defineConfig({
  testDir: tests/e2e',  use: {
<<<<<<< HEAD
    baseURL: process.env.PLAYWRIGHT_BASE_URL |http://localhost:3000',    trace: on-first-retry'}
=======
    baseURL: process && process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry'};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
    }
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices['iPhone 12']}
    }
  ];
  reporter: [
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]]
});