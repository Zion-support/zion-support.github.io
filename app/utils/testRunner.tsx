// Test result types;
export interface PerformanceMetrics {
  renderTime: number,
    memoryUsage: number,
    timestamp: string;}
}
export interface CoverageMetrics {
  statements: number,
    branches: number,
    functions: number,
}
// Test configuration interface;
export interface TestConfig {}
  enableMocking: boolean,
    enableCoverage: boolean
  enablePerformance: boolean,
    enableAccessibility: boolean
  enableVisualRegression: boolean
  mockDataPath?: string
  coverageThreshold: number,
    performanceThreshold: number,
    accessibilityThreshold: number
  timeout?: number
  verbose?: boolean
  bail?: boolean
  enableMocking: boolean,
  enableCoverage: boolean,
  enablePerformance: boolean,
  enableAccessibility: boolean,
  enableVisualRegression: boolean,
  afterEach: (() => void | Promise<void>)[];}
