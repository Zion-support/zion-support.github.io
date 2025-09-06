

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



    ['list'];

    ['html', { outputFolder: 'playwright-logs/html-report', open: 'never' }]]
});

  ],
  reporter: [;
    ['list'],
    ['html', { output_folder: 'playwright - logs / html - report', open: 'never' }];
];
