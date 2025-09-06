<<<<<<< HEAD
<<<<<<< HEAD
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import { define_config } from 'cypress';
export default define_config ({

  e2e: {

    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts',

    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
origin/cursor/expand-services-advertise-and-build-project-c28b
        if (browser && browser.family === 'chromium') {
          launchOptions && launchOptions.args.push('--disable-ipv6');
    base_url: 'http://localhost:3000', // Standard Next.js port;
=======

        if (browser && browser.family === 'chromium') {'
          launchOptions && launchOptions.args.push('--disable-ipv6');'
    base_url: 'http://localhost:3000', // Standard Next.js port;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    support_file: 'cypress / support / e2e.ts',
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {'
      on ('before:browser:launch', (browser = {}, launch_options) => {}
        // Check condition;
if ( {) {}
  $2;
}'
          launch_options.args.push ('--disable - ipv6');
        }
        return launch_options;
<<<<<<< HEAD
      });export default define_config ({
  e2e: {


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

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
      });export default define_config ({}
  e2e: {}
';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    baseUrl: 'http://localhost:3000', // Standard Next.js port;

'
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
<<<<<<< HEAD
import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next.js port
origin/cursor/automate-test-improve-and-merge-code-2533
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
'
    supportFile: 'cypress/support/e2e.ts';


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {'
      on('before:browser:launch', (browser = {}, launchOptions) => {'
        if (browser && browser.family === 'chromium') {'
          launchOptions && launchOptions.args.push('--disable-ipv6');        }
        return launchOptions;
      })
    }
<<<<<<< HEAD
    env: {


origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';
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
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true
  },});    mochaFile: 'cypress/results/junit-[hash].xml';
    baseUrl: 'http://localhost:3000', // Standard Next.js port
=======
    env: {}
    defaultCommandTimeout: 10000;
  }'
  reporter: 'junit'
  reporterOptions: {}
  reporterOptions: {'
    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true'
  },});    mochaFile: 'cypress/results/junit-[hash].xml';'
    baseUrl: 'http://localhost:3000', // Standard Next.js port'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    supportFile: 'cypress/support/e2e.ts', experimentalModifyObstructiveThirdPartyCode: true,
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {'
      on('before:browser:launch', (browser = {}, launchOptions) => {'
        if (browser.family === 'chromium') {'
          launchOptions.args.push('--disable-ipv6')
        }
        return launchOptions;
      })
    };
    env: {'
      CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com', CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123','
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User', EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com','
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123', TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User','
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242'
    },
    defaultCommandTimeout: 10000;
  };'
  reporter: 'junit',
  reporterOptions: {'
    mochaFile: 'cypress/results/junit-[hash].xml',
<<<<<<< HEAD


<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    toConsole: true;
  }
});

<<<<<<< HEAD
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { defineConfig } from 'cypress',;
export default defineConfig({;
  e2e: {;'
    baseUrl: 'http://localhost:3000', // Standard Next.js port;'
    supportFile: 'cypress/support/e2e.ts',;
    experimentalModifyObstructiveThirdPartyCode: true,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {;'
      on('before:browser:launch', (browser = {}, launchOptions) => {;'
        if (browser.family === 'chromium') {;'
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;


'
    base_url: 'http://localhost:3000', // Standard Next.js port;'
    support_file: 'cypress / support / e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {'
      on ('before:browser:launch', (browser = {}, launch_options) => {}
        // Check condition;
if ( {) {}
  $2;
}'
          launch_options.args.push ('--disable - ipv6');        }
        return launch_options;
      });
    }
    env: {'
      CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com';'
      CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';'
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';'
      EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com';'
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123';'
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User','
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242'}
    defaultCommandTimeout: 10000;
  }'
  reporter: 'junit',
  reporter_options: {'
    mocha_file: 'cypress / results / junit-[hash].xml',
    to_console: true,
  },
    },
    env: {}
      CYPRESS_TEST_USER_EMAIL:;'
        process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com',
      CYPRESS_TEST_USER_PASSWORD:;'
        process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',
      CYPRESS_TEST_USER_DISPLAY_NAME:;'
        process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',
      EXISTING_USER_EMAIL:;'
        process.env.EXISTING_USER_EMAIL || 'existing@test.com',
      EXISTING_USER_PASSWORD:;'
        process.env.EXISTING_USER_PASSWORD || 'password123','
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User','
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242',
    },
    defaultCommandTimeout: 10000,
  },'
  reporter: 'junit',
  reporter_options: {'
    mocha_file: 'cypress / results / junit-[hash].xml',
    to_console: true,'
  }, });    mocha_file: 'cypress / results / junit-[hash].xml';
    to_console: true;
  }
});




<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
      on('before:browser:launch', (browser;
});
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD


'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
