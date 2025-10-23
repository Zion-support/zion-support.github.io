// Test utilities
export interface TestConfig {
  timeout?: number
  retries?: number
  verbose?: boolean
}

export class TestUtils {
  private config: TestConfig

  constructor(config: TestConfig = {}) {
    this.config = {
      timeout: 5000,
      retries: 0,
      verbose: false,
      ...config
    }
  }

  async waitFor(condition: () => boolean, timeout?: number): Promise<void> {
    const actualTimeout = timeout || this.config.timeout!
    const startTime = Date.now()

    return new Promise((resolve, reject) => {
      const checkCondition = () => {
        if (condition()) {
          resolve()
        } else if (Date.now() - startTime > actualTimeout) {
          reject(new Error('Timeout waiting for condition'))
        } else {
          setTimeout(checkCondition, 100)
        }
      }

      checkCondition()
    })
  }

  async retry<T>(fn: () => Promise<T>, retries?: number): Promise<T> {
    const actualRetries = retries ?? this.config.retries!
    let lastError: Error

    for (let i = 0; i <= actualRetries; i++) {
      try {
        return await fn()
      } catch (error) {
        lastError = error as Error
        if (this.config.verbose) {
          console.log(`Attempt ${i + 1} failed:`, error)
        }
      }
    }

    throw lastError!
  }

  mockFunction<T extends (...args: any[]) => any>(fn: T): jest.MockedFunction<T> {
    return fn as jest.MockedFunction<T>
  }

  createMockData<T>(template: Partial<T>, count: number = 1): T[] {
    return Array.from({ length: count }, (_, index) => ({
      ...template,
      id: index + 1
    } as T))
  }

  generateRandomString(length: number = 10): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  generateRandomEmail(): string {
    const username = this.generateRandomString(8)
    const domain = this.generateRandomString(6)
    return `${username}@${domain}.com`
  }

  generateRandomNumber(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

export default TestUtils