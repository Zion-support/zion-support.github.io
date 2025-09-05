
// Mock web-vitals
jest.mock(\'web-vitals\', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn()
}));

const TestComponent = () => {
  usePerformanceMonitor();
  return <div>Test Component</div>;
};

describe(\'Performance Tests\', () => {
  test(\'performance monitor hook renders without errors\', () => {
    expect(() => render(<TestComponent />)).not.toThrow();
  });
});