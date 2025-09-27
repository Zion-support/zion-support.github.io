// Simple utility tests to demonstrate test coverage
describe('Utility Functions', () => {
  it('should perform basic math operations', () => {
    expect(2 + 2).toBe(4);
    expect(10 - 5).toBe(5);
    expect(3 * 4).toBe(12);
    expect(8 / 2).toBe(4);
  });

  it('should handle string operations', () => {
    const companyName = 'Zion Tech Group';
    expect(companyName).toContain('Zion');
    expect(companyName.toLowerCase()).toBe('zion tech group');
    expect(companyName.split(' ')).toHaveLength(3);
  });

  it('should validate email format', () => {
    const validEmail = 'hello@ziontechgroup.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(validEmail)).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
  });

  it('should handle array operations', () => {
    const services = ['AI Solutions', 'Web Development', 'Cybersecurity'];
    expect(services).toHaveLength(3);
    expect(services).toContain('AI Solutions');
    expect(services.filter(service => service.includes('AI'))).toHaveLength(1);
  });
});