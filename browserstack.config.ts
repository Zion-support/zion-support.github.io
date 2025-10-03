import { defineConfig, devices } from "@playwright/test";

export default defineConfig({/* content */}
  testDir: "tests/e2e",
  use: {/* content */}
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {/* content */}
      name: "Desktop Chrome",
      use: {/* content */}
        browserName: "chromium",
        channel: "chrome",
      },
    },
    {/* content */}
      name: "Desktop Firefox",
      use: {/* content */}
        browserName: "firefox",
      },
    },
    {/* content */}
      name: "Desktop Safari",
      use: {/* content */}
        browserName: "webkit",
      },
    },
    {/* content */}
      name: "Mobile Chrome",
      use: {/* content */}
        browserName: "chromium",
        ...devices["Pixel 5"],
      },
    },
    {/* content */}
      name: "Mobile Safari",
      use: {/* content */}
        browserName: "webkit",
        ...devices["iPhone 12"],
      },
    },
  ],
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-logs/html-report", open: "never" }],
  ],
});
