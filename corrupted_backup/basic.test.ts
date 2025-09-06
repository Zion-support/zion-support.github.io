// Basic test to verify Jest is working
describe('Basic Test Suite', () => {
  test('should pass a simple test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should handle basic math', () => {
    expect(2 * 3).toBe(6);
    expect(10 - 5).toBe(5);
    expect(15 / 3).toBe(5);
  });

  test('should handle strings', () => {
    expect('hello' + ' world').toBe('hello world');
    expect('test').toHaveLength(4);
  });
});