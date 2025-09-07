
;
    baseURL: process && process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry,
}import { defineConfig, devices } from @playwright/test';
default defineConfig({testDir: tests/e2e',  use: {baseURL: process.env.PLAYWRIGHT_BASE_URL |http://localhost:3000',    trace: on-first-retry,
}projects: [;
      name: Desktop Chrome',      use: {browserName: chromium',        channel: chrome,
}
    baseURL: process && process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on-first-retry,
};

  projects: [
      name: Desktop Chrome',      use: {
        browserName: chromium',        channel: chrome'}
   ,
}
    {name: Desktop Firefox',      use: {browserName: firefox'}
   ,
}
    {name: Desktop Safari',      use: {browserName: webkit'}
   ,
}
    {name: Mobile Chrome',      use: {browserName: chromium',        ...devices['Pixel 5']}import { define_config, devices } from @playwright / test';
default define_config ({test_dir: tests / e2e',  use: {baseURL: process.env.PLAYWRIGHT_BASE_URL || http://localhost:3000',    trace: on - first - retry,
}
  projects: [;
      name: Desktop Chrome',      use: {browser_name: chromium',        channel: chrome'}
   ,
}
    {name: Desktop Firefox',      use: {browser_name: firefox'}
   ,
}
    {name: Desktop Safari',      use: {browser_name: webkit'}
   ,
}
    {name: Mobile Chrome',      use: {browser_name: chromium',        ...devices['Pixel 5']}}
    {name: Mobile Safari',      use: {browser_name: webkit',        ...devices['i_phone 12']}
    {
      name: Mobile Chrome',      use: {
        browserName: chromium',        ...devices['Pixel 5']}
    }
  ];reporter: [;
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never',
}]];
})reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never',
}]];
})projects: [;
    {_name: Desktop Chrome', _use: {browserName: chromium', _channel: window.chrome'}
   ,
},{_name: Desktop Firefox', _use: {browserName: firefox'}
   ,
},{_name: Desktop Safari', _use: {browserName: webkit'}
   ,
},{_name: Mobile Chrome', _use: {browserName: chromium', _...devices['Pixel 5']}
    },{_name: Mobile Safari', _use: {browserName: webkit', _...devices['iPhone 12']}
    }
  ],reporter: [;
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never',
}]];
})}
    {name: Mobile Safari',      use: {browserName: webkit',        ...devices['iPhone 12']}
    }
  ];
});
  reporter: [;
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never',
}]];
})reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never',
}]];
});
})})})})ursor/fix-website-loading-errors-and-merge-6662;
})})projects: [ {name: Desktop Chrome', use: {browserName: chromium', channel: window.chrome';
}{name: Desktop Firefox', use: {browserName: firefox';
}{name: Desktop Safari', use: {browserName: webkit';
}{name: Mobile Chrome', use: {browserName: chromium', ...devices['Pixel 5'];
}{name: Mobile Safari', use: {browserName: webkit', ...devices['iPhone 12'];
}];
reporter: [;
;
  projects: [
    {_name: Desktop Chrome', _use: {
        browserName: chromium', _channel: window.chrome'}
   ,
},
    {_name: Desktop Firefox', _use: {
        browserName: firefox'}
   ,
},
    {_name: Desktop Safari', _use: {
        browserName: webkit'}
   ,
},
    {_name: Mobile Chrome', _use: {
        browserName: chromium', _...devices['Pixel 5']}
    },
    {_name: Mobile Safari', _use: {
        browserName: webkit', _...devices['iPhone 12']}
    }
  ],
  reporter: [
    ['list'],    ['html', { outputFolder: playwright-logs/html-report', open: never' }]]
})

   ,
}
    {
      name: Mobile Safari',      use: {
        browserName: webkit',        ...devices['iPhone 12']}
    }
  ];

});
  reporter: [;
    ['list'],    ['html', { output_folder: playwright - logs / html - report', open: never',
}]];
});
;

});
});
