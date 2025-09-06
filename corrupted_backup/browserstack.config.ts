<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test',;
;
export default defineConfig({;
  testDir:'tests/e2e',;
  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;
    trace:'on-first-retry'},;
  projects:[;
    {;
      name:'Desktop Chrome',;
      use:{;
        browserName:'chromium',;
        channel:'chrome'}
    },;
    {;
      name:'Desktop Firefox',;
      use:{;
        browserName:'firefox'}
    },;
    {;
      name:'Desktop Safari',;
      use:{;
        browserName:'webkit'}
    },;
    {;
      name:'Mobile Chrome',;
      use:{;
        browserName:'chromium',;
        ...devices['Pixel 5']}
    },;
    {;
      name:'Mobile Safari',;
      use:{;
        browserName:'webkit',;
        ...devices['iPhone 12']}
    }
  ],;
  reporter:[;
    ['list'],;
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
}),;import { defineConfig, devices } from "@playwright/test";
=======
<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
=======
import { defineConfig, devices } from "@playwright/test";
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb

export default defineConfig({
  testDir: "tests/e2e",
  use: {
<<<<<<< HEAD:corrupted_backup/browserstack.config.ts
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
=======
<<<<<<< HEAD
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry'
=======
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:browserstack.config.ts
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
<<<<<<< HEAD:corrupted_backup/browserstack.config.ts
        browserName: 'chromium',
        channel: 'chrome',
=======
<<<<<<< HEAD
        browserName: 'chromium',
        channel: 'chrome'
      }
=======
        browserName: "chromium",
        channel: "chrome",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:browserstack.config.ts
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Desktop Firefox",
      use: {
<<<<<<< HEAD:corrupted_backup/browserstack.config.ts
        browserName: 'firefox',
=======
<<<<<<< HEAD
        browserName: 'firefox'
      }
=======
        browserName: "firefox",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:browserstack.config.ts
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Desktop Safari",
      use: {
<<<<<<< HEAD:corrupted_backup/browserstack.config.ts
        browserName: 'webkit',
=======
<<<<<<< HEAD
        browserName: 'webkit'
      }
=======
        browserName: "webkit",
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:browserstack.config.ts
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Mobile Chrome",
      use: {
<<<<<<< HEAD:corrupted_backup/browserstack.config.ts
        browserName: 'chromium',
        ...devices['Pixel 5'],
=======
<<<<<<< HEAD
        browserName: 'chromium',
        ...devices['Pixel 5']
      }
=======
        browserName: "chromium",
        ...devices["Pixel 5"],
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:browserstack.config.ts
      },
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
    },
    {
      name: "Mobile Safari",
      use: {
<<<<<<< HEAD:corrupted_backup/browserstack.config.ts
        browserName: 'webkit',
        ...devices['iPhone 12'],
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5:browserstack.config.ts
      },
    },
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
});
