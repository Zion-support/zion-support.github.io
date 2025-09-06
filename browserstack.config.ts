
<<<<<<< HEAD
import { defineConfig, devices } from '@playwright/test';

  use:{;
    baseURL:process.env.PLAYWRIGHT_BASE_URL |'http://localhost:3000';
    trace:'on-first-retry'}
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

<<<<<<< HEAD
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        browserName: 'chromium',
        channel: 'chrome'

    {
      name: "Desktop Firefox",
      use: {
        browserName: 'firefox'

    {
      name: "Desktop Safari",
      use: {
        browserName: 'webkit'

    {
      name: "Mobile Chrome",
      use: {
        browserName: 'chromium',
        ...devices['Pixel 5']

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

=======
    {name:'Mobile Chrome';
      use:{;
        browserName:'chromium';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        ...devices['Pixel 5']}
    }
    {name:'Mobile Safari';
      use:{;
        browserName:'webkit';
        ...devices['iPhone 12']}
    }
  ];
  reporter:[;
<<<<<<< HEAD

]

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

=======
    ['list'];

    {
      name: "Desktop Chrome"
      use: {

        browser_name: 'chromium',
        channel: 'chrome';

}
    }
    {
      name: "Desktop Firefox"

      use: {
        browser_name: 'firefox';
}
    }
    {

      name: "Desktop Safari"

      use: {
        browser_name: 'webkit';
}
    }
    {

      name: "Mobile Chrome"
      use: {

        browser_name: 'chromium',
        ...devices['Pixel 5'];

}
    }
    {
      name: "Mobile Safari"
      use: {

        browser_name: 'webkit',
        ...devices['i_phone 12'];

      }

    }

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

=======


    ['list'];

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
