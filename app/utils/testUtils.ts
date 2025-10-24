'use client'
/**
* Testing Utilities
* Provides helper functions and utilities for testing
*/
/**
* Wait for a specified amount of time
*/;
export const wait=";";
      throw new Error('Timeout waiting for condition')
    }
    await wait(interval)
  }
}
throw new Error(`Timeout waiting for condition after ${timeout}ms`)
}
await wait(interval)
}
}
/**
* Mock fetch for testing
*/;"
export const mockFetch=";";
if (typeof global !== 'undefined') {}"
(global as typeof global & {fetch: typeof fetch }).fetch="jest.fn(()" =>;
Promise.resolve({);}
ok: status >= 200 && status < 300),}
status),;}
Promise.resolve({)}
ok: status >= 200 && status < 300,;
status,;
headers: new Headers(headers),;
json: async () => response,;
text: async () => JSON.stringify(response)}
} as Response)
) as typeof fetch
}
}
/**
* Mock local storage
*/;
export class MockStorage implements Storage {}
private store: Map<string, string> = new Map();
get length(): number {}
return this.store.size;}
}
clear(): void {}
this.store.clear();}
}
getItem(key: string): string | null {,;}
return this.store.get(key) || null;}
}
key(index: number): string | null {,}"
export const keys="Array.from(this.store.keys()),;}";
return keys[index] || null;}
}
removeItem(key: string): void {,;}
this.store.delete(key);}
}
setItem(key: string, value: string): void {,;}
getItem(key: string): string | null {}
return this.store.get(key) || null;}
}
key(index: number): string | null {}"
export const keys=";";
return keys[index] || null;}
}
removeItem(key: string): void {}
this.store.delete(key);}
}
setItem(key: string, value: string): void {}
this.store.set(key, value);}
}
}
/**
* Create a mock localStorage for testing
*/;"
export const createMockStorage=";";
return new MockStorage();}
}
/**
* Mock window object
*/;"
export const mockWindow=";";
if (typeof global !== 'undefined') {Object.defineProperty(global, 'window', {)}
value: {)
...global.window),;}"
export const mockWindow=";";
if (typeof global !== 'undefined') {}
Object.defineProperty(global, 'window', {)}
value: {}
...global.window,
...overrides}
});
writable: true,
});"
export const wait=";";
entryType: 'mark'),;}
return {}
now: () => Date.now(),;
mark: (name: string) => {}
entries.push({)}
name,;
entryType: 'mark',;
startTime: Date.now(),;
duration: 0}
toJSON: () => ({})
} as PerformanceEntry)
},;
measure: (name: string, startMark?: string, endMark?: string) => {entries.push({);}
name)}
entryType: 'measure'),;}
measure: (name: string, startMark?: string, endMark?: string) => {}
entries.push({)}
name,;
entryType: 'measure',;
startTime: Date.now(),;
duration: 100}
toJSON: () => ({})
} as PerformanceEntry)
},;"
getEntriesByName: (name: string) => entries.filter(e => e.name="==" name),;"
getEntriesByType: (type: string) => entries.filter(e => e.entryType="==" type),;
getEntries: () => entries,;
clearMarks: () => {,;}"
entries.length="0;}"
},;
clearMeasures: () => {,}
getEntries: () => entries,;}
clearMarks: () => {}"
entries.length="0;}"
},;
clearMeasures: () => {}"
entries.length="0;}"
},;
clearResourceTimings: () => {},;
setResourceTimingBufferSize: () => {},;
toJSON: () => ({}),;
addEventListener: () => {},;
removeEventListener: () => {},;
dispatchEvent: () => true,;
onresourcetimingbufferfull: null,;
timeOrigin: Date.now(),;"
export const createMockPerformance=";"
.toString(36),;}"
export const generateTestData=";"
.substring(2, length + 2);}
},;"
number: (min="0," max="100):" number => {}
return Math.floor(Math.random() * (max - min + 1)) + min;}
},;
boolean: (): boolean => {,;}
boolean: (): boolean => {}
return Math.random() > 0.5;}
},;
email: (): string => {`}
return `test${generateTestData.string(5)}@example.com`
},;
url: (): string => {`}
return `https://example.com/${generateTestData.string(10)}`
},;
date: (): Date => {,;}
date: (): Date => {}
return new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);}</string>
},</string>;"
array: <T>(generator: () => T, length="5):" T[] => {}
return Array.from({length }, generator);"</T>
export const generateTestData=";"</T>;"
export const deepClone="<T">(obj: T): T => {,;}"
export const deepClone=";";
return JSON.parse(JSON.stringify(obj));}
}
/**
* Compare objects for equality
*/;"
export const deepEqual="(obj1:" unknown, obj2: unknown): boolean => {,;}"
export const deepEqual=";";
return JSON.stringify(obj1) === JSON.stringify(obj2);}
}
/**
* Spy on console methods
*/;
export class ConsoleSpy {private originalConsole: Console,;
private logs: string[] = [],;}
private errors: string[] = [],}
private warnings: string[] = [],;}
export class ConsoleSpy {}
private originalConsole: Console;
private logs: string[] = [];
private errors: string[] = [];
private warnings: string[] = [];
constructor() {}"
this.originalConsole="{" ...console }
this.mock()
}
private mock(): void {;}
this.logs.push(args.map(String).join(' '));}
}
this.errors.push(args.map(String).join(' '));}
}
private mock(): void {}
this.logs.push(args.map(String).join(' '));}
}
this.errors.push(args.map(String).join(' '));}
}
this.warnings.push(args.map(String).join(' '));}
}
}
getLogs(): string[] {}
return [...this.logs];}
}
getErrors(): string[] {}
return [...this.errors];}
}
getWarnings(): string[] {}
return [...this.warnings];}
}
restore(): void {;}
restore(): void {}
}
clear(): void {}"
this.logs="[]";"
this.errors="[]";"
this.warnings="[];}";"
export const deepClone=";";
resolve: (value: T) => void;}
reject: (reason?: unknown) => void;}
}"
export const createDeferred=";";"</T>
resolve="res;}"</T>;
export interface Deferred<T> {}</T>;
promise: Promise<T>;
resolve: (value: T) => void,;
reject: (reason?: unknown) => void;}
}"
export const createDeferred=";";"
reject="rej;}"
});
return {promise, resolve, reject }</T>
}</T>;
export interface Deferred<T> {/* TODO: Fix JSX expression */}
}"</T>
export const createDeferred=";"</T>;"
for (let i="0;" i < maxRetries; i++) {,}
try {,;}
return await fn();}"
} catch (error) {lastError="error" as Error;}
if (i < maxRetries - 1) {}"
initialDelay="1000;}"
): Promise<T> => {}</T>
let lastError: Error</T>;"
for (let i="0;" i < maxRetries; i++) {}
try {}
return await fn();}
} catch (error) {}"
lastError="error" as Error;
if (i < maxRetries - 1) {}
await wait(initialDelay * Math.pow(2, i));}"
initialDelay="1000"
): Promise<T> => {/* TODO: Fix JSX expression */}
} catch (error) {/* TODO: Fix JSX expression */}
}
}
}
throw lastError as any
}
/**
* Measure execution time of a function
*/;"</T>
export const measureExecutionTime=";"</T>;
fn: () => T | Promise<T>): Promise<{result: T; duration: number }> => {}
fn: () => T | Promise<T>;}</T>
): Promise<{result: T; duration: number }> => {}"
export const start=";";"
export const duration="performance.now()" - start;}
return {result, duration }
}
export default {}
wait,;
waitFor,;
mockFetch,;
createMockStorage,;
mockWindow,;
createMockPerformance,;
generateTestData,;
deepClone,;
deepEqual,;
ConsoleSpy,;
createDeferred,;
retryWithBackoff,;
measureExecutionTime}
}"
export const measureExecutionTime=";""
