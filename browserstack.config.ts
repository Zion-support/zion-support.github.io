import { defineConfig, devices } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test',;
;
export default defineConfig({;
<<<<<<< HEAD
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
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: 'chromium',
        channel: 'chrome'
}
    },
    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'
}
    },
    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'
}
    },
    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']
}
    },
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
]
=======
  testDir: 'tests/e2e',;
  use: {;
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',;
    trace: 'on-first-retry'},;
  projects: [;
    {;
      name: 'Desktop Chrome',;
      use: {;
        browserName: 'chromium',;
        channel: 'chrome'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;
      name: 'Desktop Firefox',;
      use: {;
        browserName: 'firefox'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;
      name: 'Desktop Safari',;
      use: {;
        browserName: 'webkit'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;
      name: 'Mobile Chrome',;
      use: {;
        browserName: 'chromium',;
        ...devices['Pixel 5']  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },;
    {;
      name: 'Mobile Safari',;
      use: {;
        browserName: 'webkit',;
        ...devices['iPhone 12']  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  reporter: [;
    ['list'];
    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]];
});
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
