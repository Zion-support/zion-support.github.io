export const testUtils = {
  createMockUser: () => ({
    id: '1',
    name: 'Test User',
    email: 'test@example.com'
  }),
  
  createMockService: () => ({
    id: '1',
    name: 'Test Service',
    description: 'A test service',
    price: 99
  })
};
