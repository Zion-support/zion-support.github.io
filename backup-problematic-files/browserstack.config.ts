import { defineConfig, devices } from "@playwright/test";
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
>>>>>>> 5105b916d1c77bc30b66b0e05cfa1d3e5af8d358

export default defineConfig({
  testDir: "tests/e2e",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
>>>>>>> 5105b916d1c77bc30b66b0e05cfa1d3e5af8d358
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: "chromium",
        channel: "chrome",
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: "firefox",
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: "webkit",
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Mobile Chrome",
      use: {
        browserName: "chromium",
        ...devices["Pixel 5"],
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Mobile Safari",
      use: {
        browserName: "webkit",
        ...devices["iPhone 12"],
      },
    },
  ],
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-logs/html-report", open: "never" }],
  ],
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
>>>>>>> 5105b916d1c77bc30b66b0e05cfa1d3e5af8d358
});
