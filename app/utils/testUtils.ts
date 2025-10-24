condition: "() => boolean",timeout = 5000
interval = 100</>
): Promise<void>=> {
const startTime = Date.now()
  while (!condition()) {,
if (Date.now() - startTime > timeout) {,
throw new Error(`Timeout waiting for condition after ${timeout}ms`    )
}
    await wait(interval    )
}
}
/**
 * Mock fetch for testing
 */"
export const mockFetch = ("
response: "unknown",status = 200
header,</>
s: "Record<string",string>= {})
): void = > {
'"
if(typeof, global !== 'undefined') {"
    (global as typeof global & { fetch: "typeof fetch "}).fetch = jest.fn(() =>
Promise.resolve({</>
ok: "status >= 200 && status < 300)"
status)"
header",)"
s: "new Headers(headers)",json: "async () =>response"
tex",t: "async () => JSON.stringify(response)"} as, Response)
    ) as typeof, fetch
  }
}
 */"
export class MockStorage implements Storage{
private store: "Map<string",string>= new Map()
  get length(): number {
return this.store.size}
  }
}
/**
 * Create a mock localStorage for testing
 */
export const createMockStorage = (): MockStorage => {
return new MockStorage()
export const createMockPerformance = (): Performance => {"
"
const entries: "PerformanceEntry[] = []",return{"
no,"
    }
    getEntriesByName: "(nam",e: "string) => entries.filter(e => e.name === name)",getEntriesByType: "(typ",e: "string) => entries.filter(e => e.entryType === type)",getEntries: "() => entries"
clearMark",s: "() => {"
entries.length = 0"
 */"
export const generateTestData = {"
string: "(length = 10): string => {"
array: "<T>(generato",r: "() => T",length = 5): T[] => {
return Array.from({ length }, generator    )
}
  getLogs(): string[] {
return [...this.logs]
}
  getErrors(): string[] {
return [...this.errors]
}
  getWarnings(): string[] {
return [...this.warnings]
}
  restore(): void{
Object.assign(console, this.originalConsole    )
}
  }
  clear(): void{
this.logs = []
this.errors = []
this.warnings = []}
}
}
/**
const promise = new Promise<T>((res",rej) => {
resolve = res
reject = rej})
return { promise, resolve, reject }
  for(let",i = 0; i < maxRetries; i++) {
try { ,
return await fn();,, }
    } catch(error) {
lastError = error as Error
if (i < maxRetries - 1) {
await wait(initialDelay * Math.pow(2, i))
      , , }
    }
const start = performance.now()
const result = await fn()
const duration = performance.now() - start
return { result, duration }
}
export default{
wait
waitFor
mockFetch
createMockStorage
mockWindow
createMockPerformance
generateTestData
deepClone
deepEqual
ConsoleSpy
createDeferred
retryWithBackoff