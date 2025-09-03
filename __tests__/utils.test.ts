<<<<<<< HEAD
describe('Utility Functions', () => {'
  it('should format date correctly', () => {'
=======
<<<<<<< HEAD
describe('Utility Functions, () => {
  it('should format date correctly', () => {
    const date = new Date(2024-01-01');
    const formatted = date.toISOString().split('T)[0];
=======
<<<<<<< HEAD
describe('Utility Functions', () => {
  it('should format date correctly', () => {';
    const date = new Date('2024-01-01');';
    const formatted = date.toISOString().split('T')[0];';
=======
<<<<<<< HEAD
describe('Utility Functions', () => {
  it('should format date correctly', () => {
>>>>>>> main
    const date = new Date('2024-01-01');
    const formatted = date.toISOString().split('T')[0];
>>>>>>> main
>>>>>>> main
    expect(formatted).toBe('2024-01-01');
  });
<<<<<<< HEAD
'
  it('should validate email format', () => {'
=======

  it(should validate email format', () => {
>>>>>>> main
    const validEmail = 'test@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(validEmail)).toBe(true);
  });
});
<<<<<<< HEAD
'
=======
=======
describe('Utility Functions', () => {'
  it('should format date correctly', () => {'
    const date = new Date('2024-01-01');'
    const formatted = date.toISOString().split('T')[0];'
    expect(formatted).toBe('2024-01-01');'
  })
  it('should validate email format', () => {'
    const validEmail = 'test@example.com
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    expect(emailRegex.test(validEmail)).toBe(true)
  })
})
>>>>>>> main
>>>>>>> main
