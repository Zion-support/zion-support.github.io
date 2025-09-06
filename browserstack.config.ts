
import { defineConfig, devices } from '@playwright/test';  },

  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: 'chromium',
        channel: 'chrome'

import { defineConfig, devices } from '@playwright/test';
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
=======
      }    },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
    {

      name: 'Desktop Firefox';

      use: {
        browserName: 'firefox'

      }    },

    {

      name: 'Desktop Safari';

      use: {
        browserName: 'webkit'

      }    },

    {

      name: 'Mobile Chrome';
      use: {
        browserName: 'chromium';
        ...devices['Pixel 5']}

    },
=======
      }    },
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
    {

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

=======
      name: 'Mobile Safari';
      use: {
        browserName: 'webkit';
        ...devices['iPhone 12']}
    }
  ],
  reporter: [
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-e9d8
