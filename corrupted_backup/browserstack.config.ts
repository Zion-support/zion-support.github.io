import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  use: {
<<<<<<< HEAD
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
=======
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
<<<<<<< HEAD
        browserName: 'chromium',
        channel: 'chrome',
=======
        browserName: "chromium",
        channel: "chrome",
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
    {
      name: "Desktop Firefox",
      use: {
<<<<<<< HEAD
        browserName: 'firefox',
=======
        browserName: "firefox",
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
    {
      name: "Desktop Safari",
      use: {
<<<<<<< HEAD
        browserName: 'webkit',
=======
        browserName: "webkit",
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
    {
      name: "Mobile Chrome",
      use: {
<<<<<<< HEAD
        browserName: 'chromium',
        ...devices['Pixel 5'],
=======
        browserName: "chromium",
        ...devices["Pixel 5"],
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
    {
      name: "Mobile Safari",
      use: {
<<<<<<< HEAD
        browserName: 'webkit',
        ...devices['iPhone 12'],
=======
        browserName: "webkit",
        ...devices["iPhone 12"],
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
  ],
  reporter: [
<<<<<<< HEAD
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
=======
    ["list"],
    ["html", { outputFolder: "playwright-logs/html-report", open: "never" }],
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  ],
});
