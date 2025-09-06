// Re-export Jest globals so tests written for Vitest compile under Jest // eslint-disable-next-line @typescript-eslint/no-require-imports module.exports = {
  vi: {
<<<<<<< HEAD
    fn: jest.fn,
    spyOn: jest.spyOn,
    mock: jest.mock,
    mockImplementation: jest.fn,
    mockResolvedValue: (...args) => jest.fn().mockResolvedValue(...args),
    // Provide any other helpers as needed
  },
  expect: jestGlobals.expect,
  test: jestGlobals.test,
  describe: jestGlobals.describe,
  beforeEach: jestGlobals.beforeEach,
  afterEach: jestGlobals.afterEach,
=======
  fn: jest.fn, spyOn: jest.spyOn, mock: jest.mock, mockImplementation: jest.fn, mockResolvedValue: (...args) => jest.fn () .mockResolvedValue (...args), // Provide any other helpers as needed 
};
expect: jestGlobals.expect;
test: jestGlobals.test;
describe: jestGlobals.describe;
beforeEach: jestGlobals.beforeEach;
afterEach: jestGlobals.afterEach 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
