import { defineConfig, devices } from "@playwright/test";"
export default defineConfig({"
  testDir: "tests/e2e","
  use: {,"
  baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",""
    trace: "on-first-retry","
  },
  projects: [
    {"
      name: "Desktop Chrome","
  browserName: "chromium",""
        channel: "chrome","
      name: "Desktop Firefox","
  browserName: "firefox","
      name: "Desktop Safari","
  browserName: "webkit","
      name: "Mobile Chrome","
  browserName: "chromium","]"
        ...devices["Pixel 5"],"
      name: "Mobile Safari","
  browserName: "webkit",""
        ...devices["iPhone 12"],"
  ],
  reporter: []"
    ["list"],""
    ["html", { outputFolder: "playwright-logs/html-report", open: "never" }],"
  ],)
});
"