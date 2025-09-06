<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { define_config } from 'cypress';
export default define_config ({

  e2e: {

    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts',

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser && browser.family === 'chromium') {
          launchOptions && launchOptions.args.push('--disable-ipv6');
=======
    base_url: 'http://localhost:3000', // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts',
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {
      on ('before:browser:launch', (browser = {}, launch_options) => {
        // Check condition
if ( {) {
  $2
}
          launch_options.args.push ('--disable - ipv6');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        }
        return launch_options;
      });export default define_config ({
  e2e: {

<<<<<<< HEAD

=======
import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts',
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
    baseUrl: 'http://localhost:3000', // Standard Next.js port;


    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { defineConfig } from 'cypress',;
export default defineConfig({;
  e2e: {;
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts',;
    experimentalModifyObstructiveThirdPartyCode: true,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {;
      on('before:browser:launch', (browser = {}, launchOptions) => {;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        if (browser.family === 'chromium') {;
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;
<<<<<<< HEAD

    baseUrl: 'http://localhost:3000', // Standard Next.js port;


    supportFile: 'cypress/support/e2e.ts';
=======
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      });export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next.js port

    baseUrl: 'http://localhost:3000', // Standard Next.js port;
=======
    baseUrl: 'http://localhost:3000', // Standard Next.js port;


    baseUrl: 'http://localhost:3000', // Standard Next.js port;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    supportFile: 'cypress/support/e2e.ts';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser && browser.family === 'chromium') {
          launchOptions && launchOptions.args.push('--disable-ipv6');        }
        return launchOptions
      })
    }
    env: {
<<<<<<< HEAD
<<<<<<< HEAD


=======
      CYPRESS_TEST_USER_EMAIL: process && process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example && example.com';
      CYPRESS_TEST_USER_PASSWORD: process && process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';
      CYPRESS_TEST_USER_DISPLAY_NAME: process && process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';
      EXISTING_USER_EMAIL: process && process.env.EXISTING_USER_EMAIL || 'existing@test && test.com';
      EXISTING_USER_PASSWORD: process && process.env.EXISTING_USER_PASSWORD || 'password123';
      TEST_USER_NAME: process && process.env.TEST_USER_NAME || 'Test User',
      STRIPE_TEST_CARD: process && process.env.STRIPE_TEST_CARD || '4242424242424242'};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    defaultCommandTimeout: 10000
  }
  reporter: 'junit'
  reporterOptions: {
<<<<<<< HEAD

    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true
  }
    }

    env: {
      CYPRESS_TEST_USER_EMAIL:
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        process && process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example && example.com',
      CYPRESS_TEST_USER_PASSWORD:
        process && process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',
      CYPRESS_TEST_USER_DISPLAY_NAME:
        process && process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',
      EXISTING_USER_EMAIL:
        process && process.env.EXISTING_USER_EMAIL || 'existing@test && test.com',
      EXISTING_USER_PASSWORD:
        process && process.env.EXISTING_USER_PASSWORD || 'password123',
      TEST_USER_NAME: process && process.env.TEST_USER_NAME || 'Test User',
      STRIPE_TEST_CARD: process && process.env.STRIPE_TEST_CARD || '4242424242424242',
    },
    defaultCommandTimeout: 10000,
  },
  reporter: 'junit',
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true
  },});    mochaFile: 'cypress/results/junit-[hash].xml';
=======
    baseUrl: 'http://localhost:3000', // Standard Next.js port
    supportFile: 'cypress/support/e2e.ts', experimentalModifyObstructiveThirdPartyCode: true,
    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--disable-ipv6')
        }
        return launchOptions
      })
    };
    env: {
      
      CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com', CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User', EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com',
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123', TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User',
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242'
    },
    defaultCommandTimeout: 10000
  };
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml',
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    toConsole: true
  }
});

<<<<<<< HEAD

    base_url: 'http://localhost:3000', // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {
      on ('before:browser:launch', (browser = {}, launch_options) => {
        // Check condition
if ( {) {
  $2
}
          launch_options.args.push ('--disable - ipv6');        }
        return launch_options;
=======
=======
    toConsole: true
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { defineConfig } from 'cypress',;
export default defineConfig({;
  e2e: {;
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts',;
    experimentalModifyObstructiveThirdPartyCode: true,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {;
      on('before:browser:launch', (browser = {}, launchOptions) => {;
        if (browser.family === 'chromium') {;
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;

    base_url: 'http://localhost:3000', // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {
      on ('before:browser:launch', (browser = {}, launch_options) => {
        // Check condition
if ( {) {
  $2
}
          launch_options.args.push ('--disable - ipv6');        }
        return launch_options;
      });
    }
    env: {
      CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com';
      CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';
      EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com';
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123';
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User',
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242'}
    defaultCommandTimeout: 10000;
  }
  reporter: 'junit',
  reporter_options: {
    mocha_file: 'cypress / results / junit-[hash].xml',
    to_console: true,
  },
    },
    env: {
      CYPRESS_TEST_USER_EMAIL:;
        process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com',
      CYPRESS_TEST_USER_PASSWORD:;
        process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',
      CYPRESS_TEST_USER_DISPLAY_NAME:;
        process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',
      EXISTING_USER_EMAIL:;
        process.env.EXISTING_USER_EMAIL || 'existing@test.com',
      EXISTING_USER_PASSWORD:;
        process.env.EXISTING_USER_PASSWORD || 'password123',
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User',
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242',
    },
    defaultCommandTimeout: 10000,
  },
  reporter: 'junit',
  reporter_options: {
    mocha_file: 'cypress / results / junit-[hash].xml',
    to_console: true,
  }, });    mocha_file: 'cypress / results / junit-[hash].xml';
    to_console: true;
  }
});



<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;

import { defineConfig } from 'cypress',;
export default defineConfig({;
  e2e: {;
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts',;
    experimentalModifyObstructiveThirdPartyCode: true,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {;
      on('before:browser:launch', (browser = {}, launchOptions) => {;
        if (browser.family === 'chromium') {;
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;
      });
    },;
    env: {;
      CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com',;
      CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',;
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',;
      EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com',;
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123',;
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User',;
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242'},;
    defaultCommandTimeout: 10000;
  },;
  reporter: 'junit',;
  reporterOptions: {;
    mochaFile: 'cypress/results/junit-[hash].xml';
    toConsole: true;
  }
});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
