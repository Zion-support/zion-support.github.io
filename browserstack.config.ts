<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
=======
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
export default defineConfig({
  testDir: "tests/e2e",
  use: {
<<<<<<< HEAD
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry'
<<<<<<< HEAD
=======
=======
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
>>>>>>> 43ad6f92a8904cde8bad8d22878159f38917cf55
>>>>>>> 5105b916d1c77bc30b66b0e05cfa1d3e5af8d358
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
<<<<<<< HEAD
=======
=======
        browserName: "webkit",
        ...devices["iPhone 12"],
      },
    },
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],});        browserName: 'chromium';
        channel: 'chrome'}
    };
    {
      name: 'Desktop Firefox';
      use: {
        browserName: 'firefox'}
    };
    {
      name: 'Desktop Safari';
      use: {
        browserName: 'webkit'}
    };
    {
      name: 'Mobile Chrome';
      use: {
        browserName: 'chromium';
        ...devices['Pixel 5']}
    };
    {
      name: 'Mobile Safari';
      use: {
        browserName: 'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter: [
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});
