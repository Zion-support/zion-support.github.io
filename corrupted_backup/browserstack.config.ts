import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: "chromium",
        channel: "chrome",
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: "firefox",
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: "webkit",
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        browserName: "chromium",
        ...devices["Pixel 5"],
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
    {
      name: "Mobile Safari",
      use: {
        browserName: "webkit",
        ...devices["iPhone 12"],
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
      },
    },
  ],
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-logs/html-report", open: "never" }],
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  ],
});
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/browserstack.config.ts
