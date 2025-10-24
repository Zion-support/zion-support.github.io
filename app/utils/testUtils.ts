// TestUtils utilities
export interface TestUtilsConfig {
  enabled: boolean;
  options?: Record<string, any>;
}

export const defaultTestUtilsConfig: TestUtilsConfig = {
  enabled: true,
  options: {}
};
