<<<<<<< HEAD

<<<<<<< HEAD
=======
import { define_config } from 'cypress';
export default define_config ({

  e2e: {

    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts',

=======
<<<<<<< HEAD
import { define_config } from 'cypress';
export default define_config ({
=======
<<<<<<< HEAD
import { defineConfig } from 'cypress';
export default defineConfig({
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
<<<<<<< HEAD
        if (browser && browser.family === 'chromium') {
          launchOptions && launchOptions.args.push('--disable-ipv6');
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
        }
        return launch_options;
      });export default define_config ({
  e2e: {
<<<<<<< HEAD


import { defineConfig } from 'cypress',;
export default defineConfig({;
  e2e: {;
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts',;
    experimentalModifyObstructiveThirdPartyCode: true,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {;
      on('before:browser:launch', (browser = {}, launchOptions) => {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        if (browser.family === 'chromium') {;
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;

<<<<<<< HEAD
=======
    baseUrl: 'http://localhost:3000', // Standard Next.js port;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    supportFile: 'cypress/support/e2e.ts';
=======
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
=======
=======
import { defineConfig } from 'cypress',;
export default defineConfig({;
  e2e: {;
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts',;
    experimentalModifyObstructiveThirdPartyCode: true,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {;
      on('before:browser:launch', (browser = {}, launchOptions) => {;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        if (browser.family === 'chromium') {;
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;
<<<<<<< HEAD
      });export default defineConfig({
  e2e: {
<<<<<<< HEAD
    baseUrl: 'http://localhost:3000', // Standard Next.js port

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    supportFile: 'cypress/support/e2e.ts';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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


=======
      CYPRESS_TEST_USER_EMAIL: process && process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example && example.com';
      CYPRESS_TEST_USER_PASSWORD: process && process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';
      CYPRESS_TEST_USER_DISPLAY_NAME: process && process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';
      EXISTING_USER_EMAIL: process && process.env.EXISTING_USER_EMAIL || 'existing@test && test.com';
      EXISTING_USER_PASSWORD: process && process.env.EXISTING_USER_PASSWORD || 'password123';
      TEST_USER_NAME: process && process.env.TEST_USER_NAME || 'Test User',
      STRIPE_TEST_CARD: process && process.env.STRIPE_TEST_CARD || '4242424242424242'};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    defaultCommandTimeout: 10000
  }
  reporter: 'junit'
  reporterOptions: {

    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true
  }
    }

    env: {
      CYPRESS_TEST_USER_EMAIL:
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true
  },});    mochaFile: 'cypress/results/junit-[hash].xml';
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


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    toConsole: true
  }
});

<<<<<<< HEAD
=======

=======
    toConsole: true
  }
});
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
=======
<<<<<<< HEAD

=======
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
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
