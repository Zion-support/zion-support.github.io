<<<<<<< HEAD
import { defineConfig, devices } from @playwright/test';
default defineConfig({
  testDir: tests/e2e',  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL |http://localhost:3000',    trace: on-first-retry'}
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
<<<<<<< HEAD
});
=======
 projects: [ {
  name: Desktop Chrome', use: {
  browserName: chromium', channel: window.chrome'

};
{
  name: Desktop Firefox', use: {
  browserName: firefox'

};
{
  name: Desktop Safari', use: {
  browserName: webkit'

};
{
  name: Mobile Chrome', use: {
  browserName: chromium', ...devices['Pixel 5']

};
{
  name: Mobile Safari', use: {
  browserName: webkit', ...devices['iPhone 12']

}];
reporter: [
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
});
=======
});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
