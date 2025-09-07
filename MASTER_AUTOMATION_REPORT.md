# Master Automation Report

**Generated:** 2025-09-07T03:38:18.337Z
**Duration:** 171s
**Status:** ❌ FAILED

## Summary
- **Steps Completed:** 18
- **Errors:** 6
- **Warnings:** 3

## Steps
- ✅ **INSTALL**: Installing dependencies...
- ❌ **INSTALL**: Command failed: Command failed: npm install
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.

<--- Last few GCs --->

[3452:0x1a2f2000]    45725 ms: Mark-Compact 4043.8 (4129.8) -> 4039.4 (4142.9) MB, pooled: 0 MB, 807.96 / 0.00 ms  (average mu = 0.529, current mu = 0.336) allocation failure; scavenge might not succeed
[3452:0x1a2f2000]    47902 ms: Mark-Compact 4055.4 (4142.9) -> 4044.8 (4148.2) MB, pooled: 0 MB, 2099.89 / 0.00 ms  (average mu = 0.286, current mu = 0.036) allocation failure; scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
----- Native stack trace -----

 1: 0xe13fde node::OOMErrorHandler(char const*, v8::OOMDetails const&) [node]
 2: 0x11d5070 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
 3: 0x11d5347 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
 4: 0x1402c05  [node]
 5: 0x141c499 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 6: 0x13f0b48 v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 7: 0x13f1a75 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 8: 0x13ca74e v8::internal::Factory::NewFillerObject(int, v8::internal::AllocationAlignment, v8::internal::AllocationType, v8::internal::AllocationOrigin) [node]
 9: 0x182bd6c v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [node]
10: 0x7fb017eac476 
Aborted (core dumped)
npm error code 134
npm error path /workspace
npm error command failed
npm error command sh -c npm run clean && npm run type-check
npm error A complete log of this run can be found in: /home/ubuntu/.npm/_logs/2025-09-07T03_35_26_908Z-debug-0.log

- ✅ **SYNTAX**: Fixing syntax errors...
- ✅ **SYNTAX**: Command executed successfully
- ✅ **LINT**: Running linting...
- ❌ **LINT**: Command failed: Command failed: npm run lint:fix
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.

Oops! Something went wrong! :(

ESLint: 8.57.1

SyntaxError: Unexpected token '<<'
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:116:19)

- ✅ **TYPES**: Running type checking...
- ❌ **TYPES**: Command failed: Command failed: npm run type-check
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.

<--- Last few GCs --->

[3847:0x1db9f000]    43469 ms: Mark-Compact 4043.7 (4129.2) -> 4039.4 (4142.7) MB, pooled: 0 MB, 985.47 / 0.00 ms  (average mu = 0.531, current mu = 0.283) allocation failure; scavenge might not succeed
[3847:0x1db9f000]    45860 ms: Mark-Compact 4055.3 (4142.7) -> 4044.7 (4147.7) MB, pooled: 0 MB, 2307.04 / 0.00 ms  (average mu = 0.263, current mu = 0.035) allocation failure; scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
----- Native stack trace -----

 1: 0xe13fde node::OOMErrorHandler(char const*, v8::OOMDetails const&) [node]
 2: 0x11d5070 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
 3: 0x11d5347 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
 4: 0x1402c05  [node]
 5: 0x141c499 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 6: 0x13f0b48 v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 7: 0x13f1a75 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 8: 0x13ca74e v8::internal::Factory::NewFillerObject(int, v8::internal::AllocationAlignment, v8::internal::AllocationType, v8::internal::AllocationOrigin) [node]
 9: 0x182bd6c v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [node]
10: 0x7f5befeac476 
Aborted (core dumped)

- ✅ **TESTS**: Running tests...
- ❌ **TESTS**: Command failed: Command failed: npm run test:smoke
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
PASS ./App.test.tsx
PASS ./App.smoke.test.tsx
FAIL temp-disabled/src/__tests__/App.test.jsx
  ● Test suite failed to run

      [31mx[0m Unterminated string constant
       ,-[[36;1;4m/workspace/temp-disabled/src/__tests__/App.test.jsx[0m:2:1]
     [2m1[0m | import { render, screen  } from '@testing-library/react';
     [2m2[0m | import { BrowserRouter } from 'react-router-dom';\"\";
       : [35;1m                                                  ^^^^[0m
     [2m3[0m | import App from '../App';\"\";
     [2m4[0m | // Mock the pages to avoid complex dependencies'';\"\";
     [2m5[0m | jest.mock('../pages/Index', () => {}
       `----
      [31mx[0m Expected unicode escape
       ,-[[36;1;4m/workspace/temp-disabled/src/__tests__/App.test.jsx[0m:2:1]
     [2m1[0m | import { render, screen  } from '@testing-library/react';
     [2m2[0m | import { BrowserRouter } from 'react-router-dom';\"\";
       : [35;1m                                                 ^[0m
     [2m3[0m | import App from '../App';\"\";
     [2m4[0m | // Mock the pages to avoid complex dependencies'';\"\";
     [2m5[0m | jest.mock('../pages/Index', () => {}
       `----


    Caused by:
        Syntax Error

      at Object.transformSync (node_modules/next/src/build/swc/index.ts:1396:25)
      at transformSync (node_modules/next/src/build/swc/index.ts:1516:19)
      at Object.process (node_modules/next/src/build/swc/jest-transformer.ts:105:25)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:545:31)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:674:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:726:19)

FAIL ./AppMinimal.test.tsx
  ● Test suite failed to run

    Cannot find module './AppMinimal' from 'AppMinimal.test.tsx'

    However, Jest was able to find:
    	'./AppMinimal.test.tsx'

    You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'].

    See https://jestjs.io/docs/configuration#modulefileextensions-arraystring

       6 |   it('renders without crashing', () => {
       7 |     render(<AppMinimal />);
    >  8 |     expect(screen.getByRole('main')).toBeInTheDocument();
         |                                                          ^
       9 |   });
      10 |
      11 |   it('displays correct content', () => {

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (AppMinimal.test.tsx:8:60)

FAIL ./App.test.ts
  ● Test suite failed to run

      [31mx[0m Expression expected
       ,-[[36;1;4m/workspace/App.test.ts[0m:7:1]
     [2m4[0m | 
     [2m5[0m | describe('App', () => {
     [2m6[0m |   it('renders without crashing', () => {
     [2m7[0m |     render(<App />);
       : [35;1m                ^[0m
     [2m8[0m |     expect(screen.getByRole('main')).toBeInTheDocument();
     [2m9[0m |   });
       `----
      [31mx[0m Expression expected
       ,-[[36;1;4m/workspace/App.test.ts[0m:7:1]
     [2m4[0m | 
     [2m5[0m | describe('App', () => {
     [2m6[0m |   it('renders without crashing', () => {
     [2m7[0m |     render(<App />);
       : [35;1m                 ^[0m
     [2m8[0m |     expect(screen.getByRole('main')).toBeInTheDocument();
     [2m9[0m |   });
       `----
      [31mx[0m Expression expected
       ,-[[36;1;4m/workspace/App.test.ts[0m:7:1]
     [2m4[0m | 
     [2m5[0m | describe('App', () => {
     [2m6[0m |   it('renders without crashing', () => {
     [2m7[0m |     render(<App />);
       : [35;1m                  ^[0m
     [2m8[0m |     expect(screen.getByRole('main')).toBeInTheDocument();
     [2m9[0m |   });
       `----


    Caused by:
        Syntax Error

      at Object.transformSync (node_modules/next/src/build/swc/index.ts:1396:25)
      at transformSync (node_modules/next/src/build/swc/index.ts:1516:19)
      at Object.process (node_modules/next/src/build/swc/jest-transformer.ts:105:25)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:545:31)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:674:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:726:19)

Test Suites: 3 failed, 2 passed, 5 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.82 s, estimated 1 s
Ran all test suites.

- ✅ **OPTIMIZE**: Optimizing build...
- ✅ **OPTIMIZE**: Command executed successfully
- ✅ **BUILD**: Building application...
- ❌ **BUILD**: Command failed: Command failed: npm run build
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
 ⨯ Failed to load next.config.js, see more info here https://nextjs.org/docs/messages/next-config-error

> Build error occurred
ReferenceError: module is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and '/workspace/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at <unknown> (next.config.js:74:1)

- ✅ **PERFORMANCE**: Running performance check...
- ✅ **PERFORMANCE**: Command executed successfully
- ✅ **SCRIPTS**: Creating additional automation scripts...
- ✅ **SCRIPTS**: Additional scripts created successfully

## Errors
- INSTALL: Command failed: npm install
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.

<--- Last few GCs --->

[3452:0x1a2f2000]    45725 ms: Mark-Compact 4043.8 (4129.8) -> 4039.4 (4142.9) MB, pooled: 0 MB, 807.96 / 0.00 ms  (average mu = 0.529, current mu = 0.336) allocation failure; scavenge might not succeed
[3452:0x1a2f2000]    47902 ms: Mark-Compact 4055.4 (4142.9) -> 4044.8 (4148.2) MB, pooled: 0 MB, 2099.89 / 0.00 ms  (average mu = 0.286, current mu = 0.036) allocation failure; scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
----- Native stack trace -----

 1: 0xe13fde node::OOMErrorHandler(char const*, v8::OOMDetails const&) [node]
 2: 0x11d5070 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
 3: 0x11d5347 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
 4: 0x1402c05  [node]
 5: 0x141c499 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 6: 0x13f0b48 v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 7: 0x13f1a75 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 8: 0x13ca74e v8::internal::Factory::NewFillerObject(int, v8::internal::AllocationAlignment, v8::internal::AllocationType, v8::internal::AllocationOrigin) [node]
 9: 0x182bd6c v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [node]
10: 0x7fb017eac476 
Aborted (core dumped)
npm error code 134
npm error path /workspace
npm error command failed
npm error command sh -c npm run clean && npm run type-check
npm error A complete log of this run can be found in: /home/ubuntu/.npm/_logs/2025-09-07T03_35_26_908Z-debug-0.log

- LINT: Command failed: npm run lint:fix
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.

Oops! Something went wrong! :(

ESLint: 8.57.1

SyntaxError: Unexpected token '<<'
    at compileSourceTextModule (node:internal/modules/esm/utils:344:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:105:18)
    at #translate (node:internal/modules/esm/loader:534:12)
    at ModuleLoader.loadAndTranslate (node:internal/modules/esm/loader:581:27)
    at async ModuleJob._link (node:internal/modules/esm/module_job:116:19)

- TYPES: Command failed: npm run type-check
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.

<--- Last few GCs --->

[3847:0x1db9f000]    43469 ms: Mark-Compact 4043.7 (4129.2) -> 4039.4 (4142.7) MB, pooled: 0 MB, 985.47 / 0.00 ms  (average mu = 0.531, current mu = 0.283) allocation failure; scavenge might not succeed
[3847:0x1db9f000]    45860 ms: Mark-Compact 4055.3 (4142.7) -> 4044.7 (4147.7) MB, pooled: 0 MB, 2307.04 / 0.00 ms  (average mu = 0.263, current mu = 0.035) allocation failure; scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
----- Native stack trace -----

 1: 0xe13fde node::OOMErrorHandler(char const*, v8::OOMDetails const&) [node]
 2: 0x11d5070 v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
 3: 0x11d5347 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, v8::OOMDetails const&) [node]
 4: 0x1402c05  [node]
 5: 0x141c499 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
 6: 0x13f0b48 v8::internal::HeapAllocator::AllocateRawWithLightRetrySlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 7: 0x13f1a75 v8::internal::HeapAllocator::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
 8: 0x13ca74e v8::internal::Factory::NewFillerObject(int, v8::internal::AllocationAlignment, v8::internal::AllocationType, v8::internal::AllocationOrigin) [node]
 9: 0x182bd6c v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [node]
10: 0x7f5befeac476 
Aborted (core dumped)

- TESTS: Command failed: npm run test:smoke
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
PASS ./App.test.tsx
PASS ./App.smoke.test.tsx
FAIL temp-disabled/src/__tests__/App.test.jsx
  ● Test suite failed to run

      [31mx[0m Unterminated string constant
       ,-[[36;1;4m/workspace/temp-disabled/src/__tests__/App.test.jsx[0m:2:1]
     [2m1[0m | import { render, screen  } from '@testing-library/react';
     [2m2[0m | import { BrowserRouter } from 'react-router-dom';\"\";
       : [35;1m                                                  ^^^^[0m
     [2m3[0m | import App from '../App';\"\";
     [2m4[0m | // Mock the pages to avoid complex dependencies'';\"\";
     [2m5[0m | jest.mock('../pages/Index', () => {}
       `----
      [31mx[0m Expected unicode escape
       ,-[[36;1;4m/workspace/temp-disabled/src/__tests__/App.test.jsx[0m:2:1]
     [2m1[0m | import { render, screen  } from '@testing-library/react';
     [2m2[0m | import { BrowserRouter } from 'react-router-dom';\"\";
       : [35;1m                                                 ^[0m
     [2m3[0m | import App from '../App';\"\";
     [2m4[0m | // Mock the pages to avoid complex dependencies'';\"\";
     [2m5[0m | jest.mock('../pages/Index', () => {}
       `----


    Caused by:
        Syntax Error

      at Object.transformSync (node_modules/next/src/build/swc/index.ts:1396:25)
      at transformSync (node_modules/next/src/build/swc/index.ts:1516:19)
      at Object.process (node_modules/next/src/build/swc/jest-transformer.ts:105:25)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:545:31)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:674:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:726:19)

FAIL ./AppMinimal.test.tsx
  ● Test suite failed to run

    Cannot find module './AppMinimal' from 'AppMinimal.test.tsx'

    However, Jest was able to find:
    	'./AppMinimal.test.tsx'

    You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'].

    See https://jestjs.io/docs/configuration#modulefileextensions-arraystring

       6 |   it('renders without crashing', () => {
       7 |     render(<AppMinimal />);
    >  8 |     expect(screen.getByRole('main')).toBeInTheDocument();
         |                                                          ^
       9 |   });
      10 |
      11 |   it('displays correct content', () => {

      at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:427:11)
      at Object.<anonymous> (AppMinimal.test.tsx:8:60)

FAIL ./App.test.ts
  ● Test suite failed to run

      [31mx[0m Expression expected
       ,-[[36;1;4m/workspace/App.test.ts[0m:7:1]
     [2m4[0m | 
     [2m5[0m | describe('App', () => {
     [2m6[0m |   it('renders without crashing', () => {
     [2m7[0m |     render(<App />);
       : [35;1m                ^[0m
     [2m8[0m |     expect(screen.getByRole('main')).toBeInTheDocument();
     [2m9[0m |   });
       `----
      [31mx[0m Expression expected
       ,-[[36;1;4m/workspace/App.test.ts[0m:7:1]
     [2m4[0m | 
     [2m5[0m | describe('App', () => {
     [2m6[0m |   it('renders without crashing', () => {
     [2m7[0m |     render(<App />);
       : [35;1m                 ^[0m
     [2m8[0m |     expect(screen.getByRole('main')).toBeInTheDocument();
     [2m9[0m |   });
       `----
      [31mx[0m Expression expected
       ,-[[36;1;4m/workspace/App.test.ts[0m:7:1]
     [2m4[0m | 
     [2m5[0m | describe('App', () => {
     [2m6[0m |   it('renders without crashing', () => {
     [2m7[0m |     render(<App />);
       : [35;1m                  ^[0m
     [2m8[0m |     expect(screen.getByRole('main')).toBeInTheDocument();
     [2m9[0m |   });
       `----


    Caused by:
        Syntax Error

      at Object.transformSync (node_modules/next/src/build/swc/index.ts:1396:25)
      at transformSync (node_modules/next/src/build/swc/index.ts:1516:19)
      at Object.process (node_modules/next/src/build/swc/jest-transformer.ts:105:25)
      at ScriptTransformer.transformSource (node_modules/@jest/transform/build/ScriptTransformer.js:545:31)
      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:674:40)
      at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:726:19)

Test Suites: 3 failed, 2 passed, 5 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.82 s, estimated 1 s
Ran all test suites.

- BUILD: Command failed: npm run build
npm warn config optional Use `--omit=optional` to exclude optional dependencies, or
npm warn config `--include=optional` to include them.
npm warn config
npm warn config       Default value does install optional deps unless otherwise omitted.
 ⨯ Failed to load next.config.js, see more info here https://nextjs.org/docs/messages/next-config-error

> Build error occurred
ReferenceError: module is not defined in ES module scope
This file is being treated as an ES module because it has a '.js' file extension and '/workspace/package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at <unknown> (next.config.js:74:1)

- Build failed

## Warnings
- Linting had issues
- Type checking had issues
- Some tests failed
