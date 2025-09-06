<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
<<<<<<< HEAD
      on('before:browser:launch', (browser = {}, launchOptions) => {
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

=======
import { define_config } from 'cypress';
export default define_config ({

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  e2e: {

    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts',

<<<<<<< HEAD
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      on('before:browser:launch', (browser = {}, launchOptions) => {    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======
=======

    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

import { defineConfig } from 'cypress',;
export default defineConfig({;
  e2e: {;
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts',;
    experimentalModifyObstructiveThirdPartyCode: true,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {;
      on('before:browser:launch', (browser = {}, launchOptions) => {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        if (browser.family === 'chromium') {;
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;
<<<<<<< HEAD
      });export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next.js port
=======
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    baseUrl: 'http://localhost:3000', // Standard Next.js port;

    baseUrl: 'http://localhost:3000', // Standard Next.js port;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next.js port
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
<<<<<<< HEAD
    supportFile: 'cypress/support/e2e && e2e.ts';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    supportFile: 'cypress/support/e2e.ts';
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    supportFile: 'cypress/support/e2e && e2e.ts';    supportFile: 'cypress/support/e2e.ts';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
<<<<<<< HEAD
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser && browser.family === 'chromium') {
          launchOptions && launchOptions.args.push('--disable-ipv6');        }
        return launchOptions
      })
    }
    env: {    toConsole: true
  }
});
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
origin/cursor/automate-test-improve-and-merge-code-2533
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';

    supportFile: 'cypress/support/e2e.ts';

origin/cursor/expand-services-advertise-and-build-project-c28b

    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {


origin/cursor/expand-services-advertise-and-build-project-c28b

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



origin/cursor/expand-services-advertise-and-build-project-c28b

    toConsole: true
  }
});


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

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
      on('before:browser:launch', (browser;
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

      on('before:browser:launch', (browser;
});
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
