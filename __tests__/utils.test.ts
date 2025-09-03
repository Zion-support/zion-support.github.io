describe('Utility Functions', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-01-01');
    const formatted = date.toISOString().split('T')[0];
    expect(formatted).toBe('2024-01-01');
  });

  it('should validate email format', () => {
    const validEmail = 'test@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(validEmail)).toBe(true);
  });

  it('should reject invalid email format', () => {
    const invalidEmail = 'invalid-email';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(invalidEmail)).toBe(false);
  });

  it('should format currency correctly', () => {
    const amount = 1234.56;
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
    expect(formatted).toBe('$1,234.56');
  });

  it('should truncate text correctly', () => {
    const longText = 'This is a very long text that should be truncated';
    const truncated = longText.length > 20 ? longText.substring(0, 20) + '...' : longText;
    expect(truncated).toBe('This is a very long ...');
  });
});