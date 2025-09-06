
import { defineConfig, devices } from '@playwright/test',;
;
export default defineConfig({;
  testDir:'tests/e2e',;
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
    }}
    }
    {
      name: "Desktop Firefox"

      use: {        browser_name: 'webkit';
}
    }
    {

      name: "Mobile Chrome"
      use: {

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

