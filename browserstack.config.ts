<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
=======
import { defineConfig, devices } from "@playwright/test";
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55

export default defineConfig({
  testDir: "tests/e2e",
  use: {
<<<<<<< HEAD
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry'
=======
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
<<<<<<< HEAD
        browserName: 'chromium',
        channel: 'chrome'
      }
=======
        browserName: "chromium",
        channel: "chrome",
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Desktop Firefox",
      use: {
<<<<<<< HEAD
        browserName: 'firefox'
      }
=======
        browserName: "firefox",
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Desktop Safari",
      use: {
<<<<<<< HEAD
        browserName: 'webkit'
      }
=======
        browserName: "webkit",
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Mobile Chrome",
      use: {
<<<<<<< HEAD
        browserName: 'chromium',
        ...devices['Pixel 5']
      }
=======
        browserName: "chromium",
        ...devices["Pixel 5"],
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Mobile Safari",
      use: {
<<<<<<< HEAD
        browserName: 'webkit',
        ...devices['iPhone 12']
      }
    }
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
  ]
=======
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
});
