<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
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
import { defineConfig, devices } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry'
  },
=======
import { defineConfig, devices } from '@playwright/test';  },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: 'chromium',
        channel: 'chrome'
<<<<<<< HEAD
      }
    },
=======
      }    },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'
<<<<<<< HEAD
      }
    },
=======
      }    },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'
<<<<<<< HEAD
      }
    },
=======
      }    },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']
<<<<<<< HEAD
      }
    },
=======
      }    },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
    {
      name: "Mobile Safari",
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12']
      }
    }
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
<<<<<<< HEAD
  ]
=======
  ]
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
