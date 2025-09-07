

trace: on-first-retry' }
reporter: [ ['list'], ['json', {

  outputFile: playwright-logs/test-results && results.json' }
,}
}], ['html', {
  outputFolder: playwright-logs/html-report', open: never'}
,}
}]];
// Configure the web server to be started by Playwright webServer: {// Optional: Define projects for different browsers // projects: [ // {// name: chromium', // use: {...devices['Desktop Chrome'];}
}, //;
}
// {// name: firefox', // use: {...devices['Desktop Firefox'];}
}, //;
}

// {
  // name: webkit', // use: {
}
  //     name: webkit',  //     use: { ...devices['Desktop Safari'],}
},  //   };
  // ]
});
  //     name: webkit',  //     use: { ...devices['Desktop Safari'],}
},  //   }
  // ]

