// Mock Sentry implementation for development and testing
const mockSentry = {
  init: (options: any) => {
    console.log('Mock Sentry initialized with options:', options);
  },
  captureException: (error: Error) => {
    console.log('Mock Sentry captured exception:', error);
  },
  captureMessage: (message: string) => {
    console.log('Mock Sentry captured message:', message);
  },
  setTag: (key: string, value: string) => {
    console.log('Mock Sentry set tag:', key, value);
  },
  setUser: (user: any) => {
    console.log('Mock Sentry set user:', user);
  },
  addBreadcrumb: (breadcrumb: any) => {
    console.log('Mock Sentry added breadcrumb:', breadcrumb);
  }
};

export const onRequestError = (error: Error, request: any) => {
  console.log('Mock Sentry onRequestError:', error, request);
};

export default mockSentry;