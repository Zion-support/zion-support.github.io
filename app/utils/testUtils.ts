<<<<<<< HEAD
'use client";

/**
 * Testing Utilities
 * Provides helper functions and utilities for testing
 */
/**"
 * Wait for a specified amount of time"
 */;"
export const wait = (ms: "number): Promise<void> => {",return new Promise(resolve => setTimeout(resolve, ms))
;}
/**;
 * Wait for a condition to be true;"
 */;"
export const waitFor = async(;)"
=======
'use client'
;
/**;
 * Testing Utilities;
 * Provides helper functions and utilities for testing;
 */;
/**;
 * Wait for a specified amount of time;
 */;
export const wait = (ms: "number): Promise<void> => {",return new Promise(resolve => setTimeout(resolve, ms));
}
/**;
 * Wait for a condition to be true;
 */;"
export const waitFor = async()"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
condition: "() => boolean",timeout = 5000;
interval = 100</>;
): Promise<void> => {;
const startTime = Date.now();
  while (!condition()) {,;
if (Date.now() - startTime > timeout) {,;
throw new Error(`Timeout waiting for condition after ${timeout}ms`)}
    await wait(interval)}
}
/**;
 * Mock fetch for testing;
 */;"
export const mockFetch = (;"
response: "unknown",status = 200;"
header,</>"
s: "Record<string",string> = {});
): void = > {;
'"
if(typeof, global !== 'undefined') {"
    (global as typeof global & { fetch: "typeof fetch "}).fetch = jest.fn(() =>;"
Promise.resolve({</>"
ok: "status >= 200 && status < 300);"
status)"
header",);"
s: "new Headers(headers)",json: "async () => response;"
tex",t: "async () => JSON.stringify(response)"} as, Response);
    ) as typeof, fetch;
  }
}
<<<<<<< HEAD
/**
 * Mock fetch for testing"
 */;"
export const mockFetch = (;"
response: "unknown",status = 200;"
header,</void>;"
s: "Record<string",string> = {}"
): void = > {;"
;"
if(typeof, global !== 'undefined") {"
    (global as typeof global & { fetch: "typeof fetch ","
;}).fetch = jest.fn(() =>;"
Promise.resolve({</string>;"
ok: "status >= 200 && status < 300;"
status;)"
header",);"
s: "new Headers(headers)",json: "async () => response;"
tex",t: "async () => JSON.stringify(response)",} as, Response)

    ) as typeof, fetch
  ;}
;}
/**
 * Mock local storage"
=======
/**;
 * Mock local storage;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
 */;"
export class MockStorage implements Storage{;"
private store: "Map<string",string> = new Map();
  get length(): number {;
return this.store.size}
<<<<<<< HEAD
;}
  clear(): void{;"
this.store.clear();}"
  }"
  getItem(key: "string): string | null{",return this.store.get(key) || null,}"
;}"
  key(index: "number): string | null{;"
const keys = Array.from(this.store.keys())",return keys[index,] || null,;};"
};"
  removeItem(key: "string): void{",this.store.delete(key);,}"
  }"
  setItem(key: "string",value: "string): void{",this.store.set(key, value);
}
=======
}
  clear(): void{;
this.store.clear()}"
  }"
  getItem(key: "string): string | null{",return this.store.get(key) || null}"
}"
  key(index: "number): string | null{;"
const keys = Array.from(this.store.keys())",return keys[index] || null}"
}"
  removeItem(key: "string): void{",this.store.delete(key)}"
  }"
  setItem(key: "string",value: "string): void{",this.store.set(key, value)}
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  }
}
/**;
 * Create a mock localStorage for testing;
 */;
export const createMockStorage = (): MockStorage => {;

return new MockStorage();
<<<<<<< HEAD

,}
/**"
 * Mock window object"
 */</string>;"
export const mockWindow = (overrides: "Partial<Window> = {",;}): void => {;"
;"
if(typeof, global !== 'undefined") {;"
Object.defineProperty(global, 'window", {;"
value: "{",...global.window
        ...overrides)"
"
});"
writable: "true",})
  }
}
/**
 * Create a mock performance API
 */;"
=======
}
/**;
 * Mock window object;"
 */</>"
export const mockWindow = (overrides: "Partial<Window> = {"}): void => {;

if(typeof, global !== 'undefined') {;'"
Object.defineProperty(global, 'window', {;"
value: "{",...global.window);
        ...overrides);"
});"
writable: "true"});
  }
}
/**;
 * Create a mock performance API;
 */;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
export const createMockPerformance = (): Performance => {;"
;"
const entries: "PerformanceEntry[] = []",return{;"
no,;"
<<<<<<< HEAD
w: "() => Date.now()",mark: "(name: string) => {;"
entries.push({;"
name;)"
entryTyp",e: 'mark'",);"
startTime: "Date.now();"
",}"
duratio,n: "0",toJSON: "() => ({",})"
      } as, PerformanceEntry)"
    }"
    measure: "(nam",e: "string",startMark?: string, endMark?: string) => {;"
entries.push({;"
name;)"
entryType: 'measure'",);"
startTime: "Date.now();"
duratio",n: "100",toJSON: "() => ({",})"
      } as, PerformanceEntry)"
=======
w: "() => Date.now()",mark: "(name: string) => {;
entries.push({);"
name)";'"
entryTyp",e: 'mark'",);"
startTime: "Date.now()"}"
duratio,n: "0",toJSON: "() => ({"});
      } as, PerformanceEntry);"
    }"
    measure: "(nam",e: "string",startMark?: string, endMark?: string) => {;
entries.push({);"
name)";'"
entryType: 'measure'",);"
startTime: "Date.now()"
duratio",n: "100",toJSON: "() => ({"});
      } as, PerformanceEntry);"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
    }"
    getEntriesByName: "(nam",e: "string) => entries.filter(e => e.name === name)",getEntriesByType: "(typ",e: "string) => entries.filter(e => e.entryType === type)",getEntries: "() => entries;"
clearMark",s: "() => {;"
entries.length = 0"
<<<<<<< HEAD
",}"
    clearMeasures: "() => {",entries.length = 0,"
"
}"
    clearResourceTimings: "() => {",};"
    setResourceTimingBufferSize: "() => {",};"
    toJSON: "() => ({",});"
addEventListener: "() => {",}"
    removeEventListener: "() => {",}"
    dispatchEvent: "() => true",onresourcetimingbufferfull: "null;"
timeOrigi",n: "Date.now()",} as unknown as, Performance

;}
/**
 * Generate random test data"
=======
"}"
    clearMeasures: "() => {",entries.length = 0}"
    clearResourceTimings: "() => {"}"
    setResourceTimingBufferSize: "() => {"}"
    toJSON: "() => ({"});"
addEventListener: "() => {"}"
    removeEventListener: "() => {"}"
    dispatchEvent: "() => true",onresourcetimingbufferfull: "null;"
timeOrigi",n: "Date.now()"} as unknown as, Performance;
}
/**;
 * Generate random test data;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
 */;"
export const generateTestData = {;"
string: "(length = 10): string => {;"
;"
<<<<<<< HEAD
return Math.random();",.toString(36);,
      .substring(2, length + 2);

"
};"
;"
number: "(min = 0",max = 100): number => {;

return Math.floor(Math.random() * (max - min + 1)) + min"
"
,}"
  boolean: "(): boolean = > {",return Math.random() > 0.5,"
"
}"
  email: "(): string => {"
",return `test${generateTestData.string(5)"
;}@example.com`;"
  };"
url: "(): string = > {;"
;"
return `http",s: "//example.com/${generateTestData.string(10)",
}`"
"
  ;}"
  date: "(): Date = > {",return new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);"
  }</Window>;"
=======
return Math.random()",.toString(36);,;"
      .substring(2, length + 2)}"
number: "(min = 0",max = 100): number => {;

return Math.floor(Math.random() * (max - min + 1)) + min;"
}"
  boolean: "(): boolean = > {",return Math.random() > 0.5}"
  email: "(): string => {";`"
",return `test${generateTestData.string(5);`"
}@example.com`}"
url: "(): string = > {;"
;";`"
return `http",s: "//example.com/${generateTestData.string(10)"}`;"
  }"
  date: "(): Date = > {",return new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)}</>"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
array: "<T>(generato",r: "() => T",length = 5): T[] => {;
return Array.from({ length }, generator);
  }
<<<<<<< HEAD
;}
/**"
 * Deep clone an object"
*/</T>;"
export const deepClone = <T>(obj: "T): T => {;"
;"
return JSON.parse(JSON.stringify(obj))"
",
;}
/**"
 * Compare objects for equality"
 */;"
export const deepEqual = (obj1: "unknown",obj2: "unknown): boolean => {;"
",return JSON.stringify(obj1) === JSON.stringify(obj2);,


}
/**
 * Spy on console methods"
 */;"
export class ConsoleSpy{;"
private originalConsole: "Console;"
private logs: string[] = [];"
private errors: string[] = [];"
private warning",s: "string[] = [];"
constructor() {;",}
this.originalConsole = { ...console ,;}
    this.mock()
  ;};"
  private mock(): void{;"
    // eslint-disable-next-line no-console;"
console.log = (...args: "unknown[]) => {",this.logs.push(args.map(String).join(' ")),};"
    };"
    // eslint-disable-next-line no-console;"
console.error = (...args: "unknown[]) => {",this.errors.push(args.map(String).join(' ")),;"
    };"
    // eslint-disable-next-line no-console;"
console.warn = (...args: "unknown[]) => {",this.warnings.push(args.map(String).join(' ")),
    }
;
  };
=======
}
/**;
 * Deep clone an object;"
*/</>"
export const deepClone = <T>(obj: "T): T => {;
"
return JSON.parse(JSON.stringify(obj))"
"}
/**;
 * Compare objects for equality;"
 */;"
export const deepEqual = (obj1: "unknown",obj2: "unknown): boolean => {",return JSON.stringify(obj1) === JSON.stringify(obj2)}
/**;
 * Spy on console methods;
 */;"
export class ConsoleSpy{;"
private originalConsole: "Console;
private logs: string[] = [];"
private errors: string[] = [];"
private warning",s: "string[] = [];"
constructor() {"}
this.originalConsole = { ...console }
    this.mock();
  }
  private mock(): void{;"
    // eslint-disable-next-line no-console;";'"
console.log = (...args: "unknown[]) => {",this.logs.push(args.map(String).join(' '))}
    }"
    // eslint-disable-next-line no-console;";'"
console.error = (...args: "unknown[]) => {",this.errors.push(args.map(String).join(' '))}"
    // eslint-disable-next-line no-console;";'"
console.warn = (...args: "unknown[]) => {",this.warnings.push(args.map(String).join(' '))}
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  getLogs(): string[] {;
return [...this.logs];
}
  getErrors(): string[] {;
return [...this.errors];
}
  getWarnings(): string[] {;
return [...this.warnings];
}
  restore(): void{;
Object.assign(console, this.originalConsole)}
  }
  clear(): void{;
this.logs = [];
this.errors = [];
this.warnings = []}
}
}
/**;
<<<<<<< HEAD
 * Create a deferred promise;"
 */</T>;"
export interface Deferred<T> {</T>;"
promise: "Promise<T>",resolve: "(valu",e: "T) => void",reject: "(reason?: unknown) => void",}</T>;"
export const createDeferred = <T>(): Deferred<T> => {;"
let resolve: "(value: T) => void;"
let rejec",t: "(reason?: unknown) => void</T>;"
=======
 * Create a deferred promise;
 */</>;"
export interface Deferred<T> {</>"
promise: "Promise<T>",resolve: "(valu",e: "T) => void",reject: "(reason?: unknown) => void"}</>;"
export const createDeferred = <T>(): Deferred<T> => {;"
let resolve: "(value: T) => void;"
let rejec",t: "(reason?: unknown) => void</>"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const promise = new Promise<T>((res",rej) => {;
resolve = res;
reject = rej});
return { promise, resolve, reject }
<<<<<<< HEAD
;}
/**
 * Retry a function with exponential backoff"
*/</T>;"
export const retryWithBackoff = async <T>(</T>;"
fn: "() => Promise<T>;
maxRetries = 3;"
initialDelay = 1000</T>;"
): Promise<T> => {;"
let lastErro",r: "Error</T>;"
=======
}
/**;
 * Retry a function with exponential backoff;
*/</>;"
export const retryWithBackoff = async <T>(</>");"
fn: "() => Promise<T>;
maxRetries = 3;
initialDelay = 1000</>;"
): Promise<T> => {;"
let lastErro",r: "Error</>"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
  for(let",i = 0; i < maxRetries; i++) {  ;
try { ,;
return await fn();,, }
    } catch(error) {   ;
lastError = error as Error;
if (i < maxRetries - 1) { ;
await wait(initialDelay * Math.pow(2, i));
      , , }
    }
<<<<<<< HEAD
  ;}
  throw lastError!
;}
/**
 * Measure execution time of a function"
 */;"
export const measureExecutionTime = async <T>(</T>;"
fn: "() => T | Promise<T />;"
): Promise<{ result: T; duratio",n: "number ",}> => {;
=======
  }
  throw lastError!;
}
/**;
 * Measure execution time of a function;
 */;"
export const measureExecutionTime = async <T>(</>");"
fn: "() => T | Promise<T />): Promise<{ result: T; duratio",n: "number "}> => {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
const start = performance.now();
const result = await fn();
const duration = performance.now() - start;
return { result, duration }
}
export default{;
wait;
waitFor;
mockFetch;
createMockStorage;
mockWindow;
createMockPerformance;
generateTestData;
deepClone;
deepEqual;
ConsoleSpy;
createDeferred;
retryWithBackoff;
<<<<<<< HEAD
measureExecutionTime}"
};"
}"
=======
measureExecutionTime}
}"
}";`'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
