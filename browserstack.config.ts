<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';
<<<<<<< HEAD
=======
import { defineConfig, devices } from "@playwright/test";
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default defineConfig({
  testDir: 'tests/e2e';
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000';
    trace: 'on-first-retry'},
  projects: [
    {
      name: 'Desktop Chrome';
      use: {
        browserName: 'chromium';
        channel: 'chrome'}
    },
    {
<<<<<<< HEAD
      name: 'Desktop Firefox';
=======
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({testDir:'tests/e2e';
  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace:'on-first-retry'}
  projects:[;
    {name:'Desktop Chrome';
      use:{;
        browserName:'chromium';
        channel:'chrome'}
    }
    {name:'Desktop Firefox';
      use:{;
        browserName:'firefox'}
    }
    {name:'Desktop Safari';
      use:{;
        browserName:'webkit'}
    }
    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
        ...devices['Pixel 5']}
    }
    {name:'Mobile Safari';
      use:{;
        browserName:'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter:[;
    ['list'];
    ['html', { outputFolder:'playwright-logs/html-report', open:'never' }]];
});import { defineConfig, devices } from "@playwright/test";
import { defineConfig, devices } from '@playwright/test';
    baseURL: process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000'
    trace: 'on-first-retry'
  }
  projects: [
    {
      name: "Desktop Chrome"
      use: {
        browserName: 'chromium'
        channel: 'chrome'
}
    }
    {
      name: "Desktop Firefox"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      use: {
        browserName: 'firefox'
}
    }
    {
<<<<<<< HEAD
      name: 'Desktop Safari';
=======
      name: "Desktop Safari"
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
      use: {
        browserName: 'webkit'
}
    }
    {
<<<<<<< HEAD
      name: 'Mobile Chrome';
      use: {
        browserName: 'chromium';
        ...devices['Pixel 5']}
    },
    {
      name: 'Mobile Safari';
      use: {
        browserName: 'webkit';
        ...devices['iPhone 12']}
=======
      name: "Mobile Chrome"
      use: {
        browserName: 'chromium'
        ...devices['Pixel 5']
}
    }
    {
      name: "Mobile Safari"
      use: {
        browserName: 'webkit'
        ...devices['iPhone 12']
      }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
    }
  ]
  reporter: [
<<<<<<< HEAD
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
=======
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox',
      },
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit',
      },
    },
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5'],
      },
    },
    {
      name: "Mobile Safari",
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12'],
      },
    },
  ],
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }],
  ],
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
});
=======
    ['list']
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]
]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
