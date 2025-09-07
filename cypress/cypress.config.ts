<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
=======
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910

    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {import { define_config  } from 'cypress';
export default define_config ({e2e: {baseUrl: 'http://localhost:3000', // Standard Next && Next.js port;
    supportFile: 'cypress/support/e2e && e2e.ts',experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {on('before:browser:launch', (browser = {}, launchOptions) => {if (browser && browser.family === 'chromium') {launchOptions && launchOptions.args.push('--disable-ipv6')base_url: 'http://localhost:3000', // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts',experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {on ('before:browser:launch', (browser = {}, launch_options) => {// Check condition;
if ( {) {$2;
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
    experimentalModifyObstructiveThirdPartyCode: true;,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before: browser:launch';, (browser = {}, launchOptions) => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

import { define_config } from 'cypress';
export default define_config ({

  e2e: {

    baseUrl: 'http://localhost:3000';, // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';,

<<<<<<< HEAD
    experimentalModifyObstructiveThirdPartyCode: true,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
=======
    experimentalModifyObstructiveThirdPartyCode: true;,    // Disable IPv6 in Chromium-based browsers to avoid socket errors
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
      on('before: browser:launch';, (browser = {}, launchOptions) => {
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
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
=======
    experimentalModifyObstructiveThirdPartyCode: true;,    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {
      on('before: browser:launch';, (browser = {}, launchOptions) => {
pr-12325
        if (browser && browser.family === 'chromium') {
          launchOptions && launchOptions.args.push('--disable-ipv6');
    base_url: 'http://localhost:3000';, // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts';,
    experimentalModifyObstructiveThirdPartyCode: true;,    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {
      on ('before: browser:launch';, (browser = {}, launch_options) => {
        // Check condition
if ( {) {
  $2
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          launch_options.args.push ('--disable - ipv6');
        }
        return launch_options;
<<<<<<< HEAD
      });export default define_config ({
  e2e: {

<<<<<<< HEAD

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { defineConfig } from 'cypress',;

import { defineConfig } from 'cypress';
export default defineConfig({;
  e2e: {;
    baseUrl: 'http://localhost:3000';, // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts';,;
    experimentalModifyObstructiveThirdPartyCode: true;,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {;
      on('before: browser:launch';, (browser = {}, launchOptions) => {;

        if (browser.family === 'chromium') {;
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;

    baseUrl: 'http://localhost:3000', // Standard Next.js port;

    baseUrl: 'http://localhost:3000', // Standard Next.js port;
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
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
=======
    baseUrl: 'http://localhost:3000';, // Standard Next.js port;


    baseUrl: 'http://localhost:3000';, // Standard Next.js port;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000';, // Standard Next.js port
origin/cursor/automate-test-improve-and-merge-code-2533
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000';, // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000';, // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
<<<<<<< HEAD
    supportFile: 'cypress/support/e2e.ts';
    baseUrl: 'http://localhost:3000', // Standard Next && Next.js port
    supportFile: 'cypress/support/e2e && e2e.ts';
    supportFile: 'cypress/support/e2e.ts';
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
'
    supportFile: 'cypress/support/e2e.ts';


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    supportFile: 'cypress/support/e2e.ts';
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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


<<<<<<< HEAD
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
<<<<<<< HEAD
      on('before:browser:launch', (browser = {}, launchOptions) => {
=======
      on('before: browser:launch';, (browser = {}, launchOptions) => {
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
        if (browser && browser.family === 'chromium') {
          launchOptions && launchOptions.args.push('--disable-ipv6');        }
        return launchOptions
      })
    }
    env: {
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    defaultCommandTimeout: 10000
  }
  reporter: 'junit'
  reporterOptions: {
<<<<<<< HEAD

    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true
=======

    defaultCommandTimeout: 10000

origin/cursor/expand-services-advertise-and-build-project-c28b
    defaultCommandTimeout: 10000;
  }
  reporter: 'junit'
  reporterOptions: {

    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true;
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
  }
    }

    env: {
<<<<<<< HEAD
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
=======
      CYPRESS_TEST_USER_EMAIL: process && process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example && example.com';,
      CYPRESS_TEST_USER_PASSWORD: process && process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';,
      CYPRESS_TEST_USER_DISPLAY_NAME: process && process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';,
      EXISTING_USER_EMAIL: process && process.env.EXISTING_USER_EMAIL || 'existing@test && test.com';,
      EXISTING_USER_PASSWORD: process && process.env.EXISTING_USER_PASSWORD || 'password123';,
      TEST_USER_NAME: process && process.env.TEST_USER_NAME || 'Test User';,
      STRIPE_TEST_CARD: process && process.env.STRIPE_TEST_CARD || '4242424242424242';,
    },
    defaultCommandTimeout: 10000;,
  },
  reporter: 'junit';,

origin/cursor/expand-services-advertise-and-build-project-c28b
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml'
    toConsole: true;
  },});    mochaFile: 'cypress/results/junit-[hash].xml';
    baseUrl: 'http://localhost:3000';, // Standard Next.js port
    supportFile: 'cypress/support/e2e.ts';, experimentalModifyObstructiveThirdPartyCode: true;,
    // Disable IPv6 in Chromium-based browsers to avoid socket errors
    setupNodeEvents(on, config) {
      on('before: browser:launch';, (browser = {}, launchOptions) => {
        if (browser.family === 'chromium') {
          launchOptions.args.push('--disable-ipv6')
        }
        return launchOptions
      })
    };
    env: {
      CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com';, CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';,
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';, EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com';,
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123';, TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User';,
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242';
    },
    defaultCommandTimeout: 10000;
  };
  reporter: 'junit';,
  reporterOptions: {
    mochaFile: 'cypress/results/junit-[hash].xml',

    toConsole: true
  }
});

    base_url: 'http://localhost:3000', // Standard Next.js port;
    mochaFile: 'cypress/results/junit-[hash].xml';,


origin/cursor/expand-services-advertise-and-build-project-c28b
    toConsole: true;
  }
});


    base_url: 'http://localhost:3000';, // Standard Next.js port;
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
    support_file: 'cypress / support / e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {
<<<<<<< HEAD
      on ('before:browser:launch', (browser = {}, launch_options) => {
=======
      on ('before: browser:launch';, (browser = {}, launch_options) => {
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
        // Check condition
if ( {) {
  $2
}
          launch_options.args.push ('--disable - ipv6');        }
        return launch_options;
<<<<<<< HEAD
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
=======
import { defineConfig } from 'cypress',;
origin/cursor/expand-services-advertise-and-build-project-c28b
export default defineConfig({;
  e2e: {;
    baseUrl: 'http://localhost:3000';, // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts';,;
    experimentalModifyObstructiveThirdPartyCode: true;,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
        // Check condition;
if ( {) {
  $2;
}
          launch_options.args.push ('--disable - ipv6');
        return launch_options;
      });export default define_config ({
  e2e: {;,
  baseUrl: 'http://localhost:3000';, // Standard Next.js port;
    supportFile: 'cypress/support/e2e.ts';',
  baseUrl: 'http://localhost:3000';, // Standard Next && Next.js port;
    supportFile: 'cypress/support/e2e && e2e.ts';',
  supportFile: 'cypress/support/e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;)
          launchOptions && launchOptions.args.push('--disable-ipv6');        }
        return launchOptions;
      })
    env: {;,
  defaultCommandTimeout: 10000;
  reporter: 'junit;,
  reporterOptions: {
  reporterOptions: {;,
  mochaFile: 'cypress/results/junit-[hash].xml
    toConsole: true;
  },});    mochaFile: 'cypress/results/junit-[hash].xml';',
    supportFile: 'cypress/support/e2e.ts';, experimentalModifyObstructiveThirdPartyCode: true;,
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
        if (browser.family === 'chromium') {
          launchOptions.args.push('--disable-ipv6')
    };
  CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com';, CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';,
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';, EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com';,
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123';, TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User';,
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242;
    },
  reporter: 'junit';,
  mochaFile: 'cypress/results/junit-[hash].xml';,
});

export default defineConfig({;
  e2e: {;,
    supportFile: 'cypress/support/e2e.ts';,;
    experimentalModifyObstructiveThirdPartyCode: true;,;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;)
pr-12325
    setupNodeEvents(on, config) {;
      on('before: browser:launch';, (browser = {}, launchOptions) => {;
        if (browser.family === 'chromium') {;
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
          launchOptions.args.push('--disable-ipv6');
        }
        return launchOptions;

<<<<<<< HEAD

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
=======
    base_url: 'http://localhost:3000';, // Standard Next.js port;
    support_file: 'cypress / support / e2e.ts';
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {
      on ('before: browser:launch';, (browser = {}, launch_options) => {
        // Check condition
if ( {) {
  $2
}
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
          launch_options.args.push ('--disable - ipv6');        }
        return launch_options;
      });
    }
<<<<<<< HEAD
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
=======
    env: {
      CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com';
      CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';
      EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com';
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123';
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User';,
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242';}
    defaultCommandTimeout: 10000;
  }
  reporter: 'junit';,
  reporter_options: {
    mocha_file: 'cypress / results / junit-[hash].xml';,
    to_console: true;,
  },
    },
    env: {
      CYPRESS_TEST_USER_EMAIL:;

    support_file: 'cypress / support / e2e.ts';',
    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
        // Check condition;
          launch_options.args.push ('--disable - ipv6');        }
  CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com';
      CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';',
  CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';
      EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com';',
  EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123';
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User';,
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242';}
  reporter_options: {;,
  mocha_file: 'cypress / results / junit-[hash].xml';,
    to_console: true;,
  CYPRESS_TEST_USER_EMAIL:;
pr-12325
        process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com',
      CYPRESS_TEST_USER_PASSWORD:;
        process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123',
      CYPRESS_TEST_USER_DISPLAY_NAME:;
        process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User',
      EXISTING_USER_EMAIL:;
        process.env.EXISTING_USER_EMAIL || 'existing@test.com',
      EXISTING_USER_PASSWORD:;
        process.env.EXISTING_USER_PASSWORD || 'password123',
      TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User';,
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242';,
    },
    defaultCommandTimeout: 10000;,
  },
  reporter: 'junit';,
  reporter_options: {
    mocha_file: 'cypress / results / junit-[hash].xml';,
    to_console: true;,
  }, });    mocha_file: 'cypress / results / junit-[hash].xml';
    to_console: true;

    experimentalModifyObstructiveThirdPartyCode: true;,    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {
      on('before: browser:launch';, (browser = {}, launchOptions) => {''
        if (browser && browser.family === 'chromium') {''
          launchOptions && launchOptions.args.push('--disable-ipv6');''
    base_url: 'http://localhost:3000';, // Standard Next.js port;''
    support_file: 'cypress / support / e2e.ts';,'
    experimentalModifyObstructiveThirdPartyCode: true;,    // Disable IPv6 in Chromium - based browsers to avoid socket errors;
    setupNodeEvents (on, config) {'
      on ('before: browser:launch';, (browser = {}, launch_options) => {'
        // Check condition;
if ( {) {
  $2;
}'
          launch_options.args.push ('--disable - ipv6');'
        }
        return launch_options;
      });export default define_config ({
  e2e: {;,'
  baseUrl: 'http://localhost:3000';, // Standard Next.js port;''
    baseUrl: 'http://localhost:3000';, // Standard Next.js port;''
    supportFile: 'cypress/support/e2e.ts';','
  baseUrl: 'http://localhost:3000';, // Standard Next && Next.js port;''
    supportFile: 'cypress/support/e2e && e2e.ts';','
  supportFile: 'cypress/support/e2e.ts';'
    experimentalModifyObstructiveThirdPartyCode: true;
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;)
    setupNodeEvents(on, config) {'
      on('before: browser:launch';, (browser = {}, launchOptions) => {''
        if (browser && browser.family === 'chromium') {''
          launchOptions && launchOptions.args.push('--disable-ipv6');        }'
        return launchOptions;
      })
    }
    env: {;,
  defaultCommandTimeout: 10000;
  }'
  reporter: 'junit'';,
  reporterOptions: {
  reporterOptions: {;,'
  mochaFile: 'cypress/results/junit-[hash].xml''
    toConsole: true;'
  },});    mochaFile: 'cypress/results/junit-[hash].xml';','
  baseUrl: 'http://localhost:3000';, // Standard Next.js port;''
    supportFile: 'cypress/support/e2e.ts';, experimentalModifyObstructiveThirdPartyCode: true;,'
    // Disable IPv6 in Chromium-based browsers to avoid socket errors;
    setupNodeEvents(on, config) {'
      on('before: browser:launch';, (browser = {}, launchOptions) => {''
        if (browser.family === 'chromium') {''
          launchOptions.args.push('--disable-ipv6')'
        }
        return launchOptions;
      })
    };
    env: {;,'
  CYPRESS_TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || 'localtest@example.com';, CYPRESS_TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || 'localpassword123';,''
      CYPRESS_TEST_USER_DISPLAY_NAME: process.env.CYPRESS_TEST_USER_DISPLAY_NAME || 'Local Test User';, EXISTING_USER_EMAIL: process.env.EXISTING_USER_EMAIL || 'existing@test.com';,''
      EXISTING_USER_PASSWORD: process.env.EXISTING_USER_PASSWORD || 'password123';, TEST_USER_NAME: process.env.TEST_USER_NAME || 'Test User';,''
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242'';
    },
    defaultCommandTimeout: 10000;
  };'
  reporter: 'junit';,'
  reporterOptions: {;,'
  mochaFile: 'cypress/results/junit-[hash].xml';,'
    toConsole: true;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
      on('before:browser:launch', (browser;
})
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
});
      STRIPE_TEST_CARD: process.env.STRIPE_TEST_CARD || '4242424242424242';,
    defaultCommandTimeout: 10000;,
  }, });    mocha_file: 'cypress / results / junit-[hash].xml';',
  to_console: true;
pr-12325

  }

>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
});




<<<<<<< HEAD
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
      on('before: browser:launch';, (browser;
});
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12325

'

>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
