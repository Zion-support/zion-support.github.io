<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

import { define_config } from 'cypress';
export default define_config ({

  e2e: {

    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts',


    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {import { define_config  } from 'cypress';
export default define_config ({e2e: {baseUrl: 'http://localhost:3000', // Standard Next && Next.js port;
    supportFile: 'cypress/support/e2e && e2e.ts',experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {if (browser && browser.family === 'chromium') {launchOptions && launchOptions.args.push('--disable-ipv6')base_url: 'http://localhost:3000', // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts',experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {on ('before:browser:launch', (browser = {}, launch_options) => {// Check condition;
if ( {) {$2;
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
          launch_options.args.push ('--disable - ipv6')}
        return launch_options;
      })export default define_config ({e2e: {import { defineConfig } from 'cypress',export default defineConfig({e2e: {baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts',experimentalModifyObstructiveThirdPartyCode: true,// Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {if (browser.family === 'chromium') {launchOptions.args.push('--disable-ipv6')}
        return launchOptions;baseUrl: 'http://localhost:3000', // Standard Next.js port;baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {import { defineConfig  } from 'cypress';
export default defineConfig({e2e: {baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port;
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port;
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {if (browser && browser.family === 'chromium') {launchOptions && launchOptions.args.push('--disable-ipv6')}
        return launchOptions;
      })}
    env: {defaultCommandTimeout: 10000;
  }
  reporter: 'junit';
  reporterOptions: {reporterOptions: {mochaFile: 'cypress/results/junit-[hash].xml';
    toConsole: true;
  }})mochaFile: 'cypress/results/junit-[hash].xml';mochaFile: 'cypress/results/junit-[hash].xml';
    toConsole: true;
  }
    }env: {CYPRESS_TEST_USER_EMAIL:;
        process && process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example && example.com',CYPRESS_TEST_USER_PASSWORD:;
        process && process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',CYPRESS_TEST_USER_DISPLAY_NAME:;
        process && process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',EXISTING_USER_EMAIL:;
        process && process.env.EXISTING_USER_EMAIL || 'existing@test && test.com',EXISTING_USER_PASSWORD:;
        process && process.env.EXISTING_USER_PASSWORD || 'password123',TEST_USER_NAME: process && process.env.TEST_USER_NAME || 'Test User',STRIPE_TEST_CARD: process && process.env.STRIPE_TEST_CARD || '4242424242424242';
    },defaultCommandTimeout: 10000;
  },reporter: 'junit',reporterOptions: {mochaFile: 'cypress/results/junit-[hash].xml';
    toConsole: true;
  }})mochaFile: 'cypress/results/junit-[hash].xml';
    baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts', experimentalModifyObstructiveThirdPartyCode: true,// Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {if (browser.family === 'chromium') {launchOptions.args.push('--disable-ipv6')}
        return launchOptions;
      })}env: {CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com', CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User', EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com',EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123', TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User',STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242';
    },defaultCommandTimeout: 10000;
  }reporter: 'junit',reporterOptions: {mochaFile: 'cypress/results/junit-[hash].xml',toConsole: true;
  }
})base_url: 'http://localhost:3000', // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {on ('before:browser:launch', (browser = {}, launch_options) => {// Check condition;
if ( {) {$2;
}
          launch_options.args.push ('--disable - ipv6')}
        return launch_options;export default defineConfig({e2e: {baseUrl: 'http://localhost:3000', // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts',experimentalModifyObstructiveThirdPartyCode: true,// Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {if (browser.family === 'chromium') {launchOptions.args.push('--disable-ipv6')}
        return launchOptions;base_url: 'http://localhost:3000', // Standard Next.js port;
      });export default define_config ({
  e2e: {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    baseUrl: 'http://localhost:3000', // Standard Next.js port;


    baseUrl: 'http://localhost:3000', // Standard Next.js port;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Standard Next.js port
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

    supportFile: 'cypress/support/e2e.ts';

origin/cursor/expand-services-advertise-and-build-project-c28b

    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    defaultCommandTimeout: 10000
  }
  reporter: 'junit'
  reporterOptions: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
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

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true
  }});    mochaFile: 'cypress/results/junit-[hash].xml';
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======



origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    toConsole: true
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

    base_url: 'http://localhost:3000', // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {on ('before:browser:launch', (browser = {}, launch_options) => {// Check condition;
if ( {) {$2;
}
          launch_options.args.push ('--disable - ipv6')}
        return launch_options;
      })}
    env: {CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com';
      CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';
      EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com';
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123';
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User',STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242'}
    defaultCommandTimeout: 10000;
  }
  reporter: 'junit',reporter_options: {mocha_file: 'cypress / results / junit-[hash].xml',to_console: true;
  }
    to_console: true;
  }
<<<<<<< HEAD
});




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
    },env: {CYPRESS_TEST_USER_EMAIL:;
        process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com',CYPRESS_TEST_USER_PASSWORD:;
        process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',CYPRESS_TEST_USER_DISPLAY_NAME:;
        process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',EXISTING_USER_EMAIL:;
        process.env.EXISTING_USER_EMAIL || 'existing@test.com',EXISTING_USER_PASSWORD:;
        process.env.EXISTING_USER_PASSWORD || 'password123',TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User',STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242';
    },defaultCommandTimeout: 10000;
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242';
    },defaultCommandTimeout: 10000;
  },reporter: 'junit',reporter_options: {mocha_file: 'cypress / results / junit-[hash].xml',to_console: true;
  } })mocha_file: 'cypress / results / junit-[hash].xml';
    to_console: true;
  } })mocha_file: 'cypress / results / junit-[hash].xml';
    to_console: true;
  }
})ursor/fix-website-loading-errors-and-merge-6662;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
      on('before:browser:launch', (browser;
})
});
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

      on('before:browser:launch', (browser;
});
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======




>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



      on('before:browser:launch', (browser;
});

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
