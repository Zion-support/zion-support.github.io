<<<<<<< HEAD
// Re-export Jest globals so tests written for Vitest compile under Jest // eslint-disable-next-line @typescript-eslint/no-require-imports module.exports = {
  {

=======
// Re-export Jest globals so tests written for Vitest compile under Jest;
// eslint-disable-next-line @typescript-eslint/no-require-imports;
const jestGlobals = require('@jest/globals'),;
module.exports = {;
  vi: {;
    fn: jest.fn,;
    spyOn: jest.spyOn,;
    mock: jest.mock,;
    mockImplementation: jest.fn,;
    mockResolvedValue: (...args) => jest.fn().mockResolvedValue(...args),;
    // Provide any other helpers as needed;
  },;
  expect: jestGlobals.expect,;
  test: jestGlobals.test,;
  describe: jestGlobals.describe,;
  beforeEach: jestGlobals.beforeEach,;
  afterEach: jestGlobals.afterEach};
// Re-export Jest globals so tests written for Vitest compile under Jest // eslint-disable-next-line @typescript-eslint/no-require-imports module.exports = {
  vi: {
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
  fn: jest.fn, spyOn: jest.spyOn, mock: jest.mock, mockImplementation: jest.fn, mockResolvedValue: (...args) => jest.fn () .mockResolvedValue (...args), // Provide any other helpers as needed 
};
expect: jestGlobals.expect;
test: jestGlobals.test;
describe: jestGlobals.describe;
beforeEach: jestGlobals.beforeEach;
afterEach: jestGlobals.afterEach 
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
};
