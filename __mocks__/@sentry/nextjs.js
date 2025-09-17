/* global jest */
// __mocks__/@sentry/nextjs.js
const Sentry = {
  init: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
  addBreadcrumb: jest.fn(),
  setContext: jest.fn(),
  setUser: jest.fn(),
  setTag: jest.fn(),
  setExtra: jest.fn(),
  withScope: jest.fn((callback) =>
    callback({
      setTag: jest.fn(),
      setContext: jest.fn(),
      setUser: jest.fn(),
      setExtra: jest.fn(),
      setLevel: jest.fn(),
      addBreadcrumb: jest.fn(),
      captureException: jest.fn(),
      captureMessage: jest.fn()
    }),
  ),
  // Add any other Sentry methods you use in your application
  // For example, if you use Performance HOCs or other specific functions:
  withSentryConfig: jest.fn((config) => config),
  wrapApiHandlerWithSentry: jest.fn((handler) => handler),
  wrapGetServerSidePropsWithSentry: jest.fn((handler) => handler),
  wrapGetStaticPropsWithSentry: jest.fn((handler) => handler),
  wrapAppGetInitialPropsWithSentry: jest.fn((handler) => handler),
  wrapErrorGetInitialPropsWithSentry: jest.fn((handler) => handler),
  // If you use any specific Sentry integrations or features, mock them as needed
};

export default Sentry;
