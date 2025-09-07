# Automation Report
<<<<<<< HEAD
**Timestamp:** 2025-09-07T05:23:29.906Z
**Duration:** NaNms
=======

<<<<<<< HEAD
**Timestamp:** 2025-09-07T02:53:54.838Z
**Duration:** 23172ms

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
## Summary
- ✅ Successful: 5
- ❌ Errors: 4
=======
**Timestamp:** 2025-09-07T02:51:20.034Z
**Duration:** 9764ms

## Summary
- ✅ Successful: 1
- ❌ Errors: 8
>>>>>>> fc9e555998eb59b8e7a598af5aaae6093b04ae4e
- ⚠️ Warnings: 0
## Successful Operations
- Operation
<<<<<<< HEAD
- scripts/auto-fixer.js
- scripts/advanced-build-optimizer.js
- scripts/performance-monitor-enhanced.js
<<<<<<< HEAD
- scripts/auto-fixer.js
=======
- scripts/performance-optimizer.js

## Errors
- scripts/comprehensive-error-fixer.cjs: Command failed: node scripts/comprehensive-error-fixer.cjs
/workspace/scripts/comprehensive-error-fixer.cjs:62
    content = content.replace(/#!/usr/bin/env node;/g, '#!/usr/bin/env node');
                              ^

SyntaxError: Invalid regular expression flags
    at wrapSafe (node:internal/modules/cjs/loader:1662:18)
    at Module._compile (node:internal/modules/cjs/loader:1704:20)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
## Errors
- scripts/comprehensive-error-fixer.cjs: Command failed: node scripts/comprehensive-error-fixer.cjs,
  Error fixing failed: Error: ENOENT: no such file or directory, stat '/workspace/media/docu-script/requirements.txt'
    at Object.statSync (node:fs:1740:25)
    at scanDirectory (/workspace/scripts/comprehensive-error-fixer.cjs:86:25)
    at scanDirectory (/workspace/scripts/comprehensive-error-fixer.cjs:91:13)
    at scanDirectory (/workspace/scripts/comprehensive-error-fixer.cjs:91:13)
    at ComprehensiveErrorFixer.getAllJSFiles (/workspace/scripts/comprehensive-error-fixer.cjs:99:5)
    at ComprehensiveErrorFixer.fixSyntaxErrors (/workspace/scripts/comprehensive-error-fixer.cjs:26:24)
    at ComprehensiveErrorFixer.run (/workspace/scripts/comprehensive-error-fixer.cjs:157:18)
    at Object.<anonymous> (/workspace/scripts/comprehensive-error-fixer.cjs:177:9)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10) {
  errno: -2,
  code: 'ENOENT',
  syscall: 'stat',
  path: '/workspace/media/docu-script/requirements.txt'
}
<<<<<<< HEAD
- ESLint: Command failed: npm run lint,
  npm warn config optional Use `--omit=optional` to exclude optional dependencies, or,
  npm warn config `--include=optional` to include them.
npm warn config,
  npm warn config       Default value does install optional deps unless otherwise omitted.
(node:3185) ESLintIgnoreWarning: The ".eslintignore" file is no longer supported. Switch to using the "ignores" property in "eslint.config.js": https://eslint.org/docs/latest/use/configure/migration-guide#ignoring-files
(Use `node --trace-warnings ...` to show where the warning was created)
(node:3185) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///workspace/eslint.config.js?mtime=1757222491864 is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /workspace/package.json.
- TypeScript: Command failed: npm run type-check,
  npm warn config optional Use `--omit=optional` to exclude optional dependencies, or,
  npm warn config `--include=optional` to include them.
npm warn config,
  npm warn config       Default value does install optional deps unless otherwise omitted.
- Build: Command failed: npm run build,
  npm warn config optional Use `--omit=optional` to exclude optional dependencies, or,
  npm warn config `--include=optional` to include them.
npm warn config,
  npm warn config       Default value does install optional deps unless otherwise omitted.
 ⚠ Invalid next.config.js options detected: 
 ⚠     Unrecognized key(s) in object: 'swcMinify'
 ⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config,
  Failed to compile.
./app/layout.tsx,
  Error:   [31mx[0m Merge conflict marker encountered.
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:12:1]
 [2m 9[0m | export const metadata: Metadata = {
 [2m10[0m |   title: 'Zion Tech Group - Leading AI and Technology Solutions',
 [2m11[0m |   description: 'Zion Tech Group is a leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
 [2m12[0m | 
 [2m17[0m |   authors: [{ name: 'Zion Tech Group' }],
    `----
  [31mx[0m Merge conflict marker encountered.
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:16:1]
 [2m13[0m |   keywords: 'AI, artificial intelligence, technology solutions, cloud computing, cybersecurity, data analytics, digital transformation',
 [2m14[0m | 
    : [35;1m^^^^^^^[0m
 [2m17[0m |   authors: [{ name: 'Zion Tech Group' }],
 [2m18[0m |   viewport: 'width=device-width, initial-scale=1',
 [2m19[0m |   robots: 'index, follow',
    `----
  [31mx[0m Merge conflict marker encountered.
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:22:1]
 [2m19[0m |   robots: 'index, follow',
 [2m20[0m |   openGraph: {
 [2m21[0m |     title: 'Zion Tech Group - Leading AI and Technology Solutions',
 [2m22[0m | 
 [2m27[0m |     type: 'website',
    `----
  [31mx[0m Merge conflict marker encountered.
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:26:1]
 [2m23[0m |     description: 'Leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
 [2m24[0m | 
    : [35;1m^^^^^^^[0m
 [2m27[0m |     type: 'website',
 [2m28[0m |     locale: 'en_US',
 [2m29[0m |   },
    `----
  [31mx[0m Merge conflict marker encountered.
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:33:1]
 [2m30[0m |   twitter: {
 [2m31[0m |     card: 'summary_large_image',
 [2m32[0m |     title: 'Zion Tech Group - Leading AI and Technology Solutions',
 [2m33[0m | 
 [2m38[0m |   },
    `----
  [31mx[0m Merge conflict marker encountered.
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:37:1]
 [2m34[0m |     description: 'Leading technology company specializing in AI, autonomous systems, quantum computing, and innovative business solutions.',
 [2m35[0m | 
    : [35;1m^^^^^^^[0m
 [2m38[0m |   },
 [2m39[0m | };
    `----
  [31mx[0m Merge conflict marker encountered.
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:47:1]
 [2m44[0m |   children: React.ReactNode;
 [2m45[0m | }) {
 [2m46[0m |   return (
 [2m47[0m | 
    : [35;1m^^^^^^^[0m
 [2m48[0m |     <html lang="en" className={inter.className}>
 [2m49[0m |       <body className="antialiased">
 [2m50[0m |         <div className="min-h-screen flex flex-col">
    `----
  [31mx[0m Unexpected token. Did you mean `{'>'}` or `&gt;`?
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:70:1]
 [2m67[0m |       <body className="font-sans antialiased">
 [2m68[0m |         {children}
 [2m69[0m |         <PerformanceMonitor />
 [2m70[0m | 
    : [35;1m^[0m
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
    `----
  [31mx[0m Unexpected token. Did you mean `{'>'}` or `&gt;`?
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:70:1]
 [2m67[0m |       <body className="font-sans antialiased">
 [2m68[0m |         {children}
 [2m69[0m |         <PerformanceMonitor />
 [2m70[0m | 
    : [35;1m ^[0m
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
    `----
  [31mx[0m Unexpected token. Did you mean `{'>'}` or `&gt;`?
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:70:1]
 [2m67[0m |       <body className="font-sans antialiased">
 [2m68[0m |         {children}
 [2m69[0m |         <PerformanceMonitor />
 [2m70[0m | 
    : [35;1m  ^[0m
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
    `----
  [31mx[0m Unexpected token. Did you mean `{'>'}` or `&gt;`?
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:70:1]
 [2m67[0m |       <body className="font-sans antialiased">
 [2m68[0m |         {children}
 [2m69[0m |         <PerformanceMonitor />
 [2m70[0m | 
    : [35;1m   ^[0m
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
    `----
  [31mx[0m Unexpected token. Did you mean `{'>'}` or `&gt;`?
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:70:1]
 [2m67[0m |       <body className="font-sans antialiased">
 [2m68[0m |         {children}
 [2m69[0m |         <PerformanceMonitor />
 [2m70[0m | 
    : [35;1m    ^[0m
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
    `----
  [31mx[0m Unexpected token. Did you mean `{'>'}` or `&gt;`?
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:70:1]
 [2m67[0m |       <body className="font-sans antialiased">
 [2m68[0m |         {children}
 [2m69[0m |         <PerformanceMonitor />
 [2m70[0m | 
    : [35;1m     ^[0m
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
    `----
  [31mx[0m Unexpected token. Did you mean `{'>'}` or `&gt;`?
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:70:1]
 [2m67[0m |       <body className="font-sans antialiased">
 [2m68[0m |         {children}
 [2m69[0m |         <PerformanceMonitor />
 [2m70[0m | 
    : [35;1m      ^[0m
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
    `----
  [31mx[0m Unexpected token. Did you mean `{'}'}` or `&rbrace;`?
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:74:1]
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
 [2m74[0m | }
    : [35;1m^[0m
    `----
  [31mx[0m Unexpected eof
    ,-[[36;1;4m/workspace/app/layout.tsx[0m:74:1]
 [2m71[0m |       </body>
 [2m72[0m |     </html>
 [2m73[0m |   );
 [2m74[0m | }
    `----
Caused by:
    Syntax Error,
  Import trace for requested module:
./app/layout.tsx
> Build failed because of webpack errors
=======

<<<<<<< HEAD
- scripts/auto-fixer.js: Command failed: node scripts/auto-fixer.js
<<<<<<< HEAD
/workspace/scripts/auto-fixer.js:3
=======
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
file:///workspace/scripts/auto-fixer.js:3
>>>>>>> main
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; import { fileURLToPath } from 'url';
^

SyntaxError: Invalid or unexpected token
    at wrapSafe (node:internal/modules/cjs/loader:1662:18)
    at Module._compile (node:internal/modules/cjs/loader:1704:20)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.16.0

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
<<<<<<< HEAD
- syntax-fixer.cjs failed: Command failed: node scripts/syntax-fixer.cjs
/workspace/scripts/syntax-fixer.cjs:9
  async log(message, level = "INFO")
        ^^^

SyntaxError: Unexpected identifier 'log'
    at wrapSafe (node:internal/modules/cjs/loader:1662:18)
    at Module._compile (node:internal/modules/cjs/loader:1704:20)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.16.0

- fix-all-syntax-errors.cjs failed: Command failed: node scripts/fix-all-syntax-errors.cjs
/workspace/scripts/fix-all-syntax-errors.cjs:6
        search: "
                ^

SyntaxError: Invalid or unexpected token
    at wrapSafe (node:internal/modules/cjs/loader:1662:18)
    at Module._compile (node:internal/modules/cjs/loader:1704:20)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.16.0

- advanced-build-optimizer.js failed: Command failed: node scripts/advanced-build-optimizer.js
=======
- scripts/advanced-build-optimizer.js: Command failed: node scripts/advanced-build-optimizer.js
<<<<<<< HEAD
/workspace/scripts/advanced-build-optimizer.js:3
=======
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
file:///workspace/scripts/advanced-build-optimizer.js:3
>>>>>>> main
ursor/integrate-build-improve-and-re-verify-8f7d;
                                            ^

SyntaxError: Invalid or unexpected token
    at wrapSafe (node:internal/modules/cjs/loader:1662:18)
    at Module._compile (node:internal/modules/cjs/loader:1704:20)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.16.0

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
<<<<<<< HEAD
- build-optimizer.cjs failed: Command failed: node scripts/build-optimizer.cjs
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
sh: 1: next: not found
❌ Build optimization failed: Command failed: npm run build

- optimize-performance.js failed: Command failed: node scripts/optimize-performance.js
file:///workspace/scripts/optimize-performance.js:3
const OPTIMIZATIONS = { images: { enabled: true,formats: ['webp','avif'],quality: 85,sizes: [640,750,828,1080,1200,1920,2048,3840]},bundle: { enabled: true,chunkSize: 244000,maxChunks:  ,}
                                                                                                                                                                                          ^

SyntaxError: Unexpected token ','
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:116:19)

Node.js v22.16.0

- performance-monitor-enhanced.js failed: Command failed: node scripts/performance-monitor-enhanced.js
=======
- scripts/performance-monitor-enhanced.js: Command failed: node scripts/performance-monitor-enhanced.js
<<<<<<< HEAD
/workspace/scripts/performance-monitor-enhanced.js:3
=======
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
file:///workspace/scripts/performance-monitor-enhanced.js:3
>>>>>>> main
ursor/fix-syntax-push-and-merge-to-main-40de;
                                        ^^

SyntaxError: Invalid or unexpected token
<<<<<<< HEAD
    at wrapSafe (node:internal/modules/cjs/loader:1662:18)
    at Module._compile (node:internal/modules/cjs/loader:1704:20)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49
=======
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:116:19)

Node.js v22.16.0

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
<<<<<<< HEAD
- performance-optimizer.js failed: Command failed: node scripts/performance-optimizer.js
file:///workspace/scripts/performance-optimizer.js:2
ursor/automate-test-improve-and-merge-code-646c;
                                           ^^^

SyntaxError: Invalid or unexpected token
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:116:19)

Node.js v22.16.0

- security-auditor.js failed: Command failed: node scripts/security-auditor.js
file:///workspace/scripts/security-auditor.js:2
ursor/automate-test-improve-and-merge-code-646c;
                                           ^^^

SyntaxError: Invalid or unexpected token
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:116:19)

Node.js v22.16.0

- security-enhancer.js failed: Command failed: node scripts/security-enhancer.js
file:///workspace/scripts/security-enhancer.js:2
ursor/automate-test-improve-and-merge-code-646c;
                                           ^^^

SyntaxError: Invalid or unexpected token
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:116:19)

Node.js v22.16.0

- seo-optimizer.js failed: Command failed: node scripts/seo-optimizer.js
file:///workspace/scripts/seo-optimizer.js:3
ursor/fix-syntax-push-and-merge-to-main-40de;
                                        ^^

SyntaxError: Invalid or unexpected token
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:116:19)

Node.js v22.16.0

- scripts/performance-optimizer.js: Command failed: node scripts/performance-optimizer.js
file:///workspace/scripts/performance-optimizer.js:2
const fs = require('fs');
           ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and '/workspace/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///workspace/scripts/performance-optimizer.js:2:12
    at ModuleJob.run (node:internal/modules/esm/module_job:274:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:644:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)
>>>>>>> fc9e555998eb59b8e7a598af5aaae6093b04ae4e

Node.js v22.16.0

- ESLint: Command failed: npm run lint
<<<<<<< HEAD
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
node:internal/modules/cjs/loader:1404
  throw err;
  ^

Error: Cannot find module '/workspace/node_modules/.bin/eslint'
    at Function._resolveFilename (node:internal/modules/cjs/loader:1401:15)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1057:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1062:22)
    at Function._load (node:internal/modules/cjs/loader:1211:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v22.16.0

- TypeScript: Command failed: npm run type-check
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
node:internal/modules/cjs/loader:1404
  throw err;
  ^

Error: Cannot find module '/workspace/node_modules/.bin/tsc'
    at Function._resolveFilename (node:internal/modules/cjs/loader:1401:15)
    at defaultResolveImpl (node:internal/modules/cjs/loader:1057:19)
    at resolveForCJSWithHooks (node:internal/modules/cjs/loader:1062:22)
    at Function._load (node:internal/modules/cjs/loader:1211:37)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49 {
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v22.16.0

- Build: Command failed: npm run build
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
sh: 1: next: not found

>>>>>>> b547502a01c5baa88ddb8f82513787a696ec0950

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
## Warnings
<<<<<<< HEAD
- ESLint had issues
- TypeScript had issues
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
## Recommendations
- Address all errors before deployment
- Review and address warnings for better code quality
- Implement continuous integration for automated testing
- Set up automated deployment pipeline
- Monitor performance metrics in production
- Regular security audits and dependency updates
## Next Steps
- Review the comprehensive automation report
- Address any critical errors identified
- Implement recommended optimizations
- Set up monitoring for production environment
- Schedule regular automation runs
- Document any custom automation workflows
*Generated on 2025-09-07T09:42:29.025Z*