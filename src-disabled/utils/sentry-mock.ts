// Mock implementation for Sentry to prevent Node.js module import issues during build
// This mock provides all the necessary Sentry APIs without importing any Node.js modules

const noop = () => {};
const noopReturn = () => null;

// Mock Sentry instance with all common methods
const mockSentry = {
  // Core Sentry methods
  init: noop,
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  addBreadcrumb: noop,
  configureScope: noop,
  withScope: (callback: (...args: any[]) => any) => callback(mockScope),
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setContext: noop,
  setLevel: noop,
  setFingerprint: noop,
  setExtra: noop,
  setExtras: noop,
  clearBreadcrumbs: noop,
  getCurrentHub: () => mockHub,
  getClient: () => mockClient,
  close: noop,
  flush: noopReturn,
  lastEventId: () => null,
  getCurrentScope: () => mockScope,
  getIsolationScope: () => mockScope,
  getGlobalScope: () => mockScope,
  withIsolationScope: (callback: (...args: any[]) => any) => callback(mockScope),
  withScope: (callback: (...args: any[]) => any) => callback(mockScope),
  withActiveSpan: (callback: (...args: any[]) => any) => callback(null),
  startTransaction: noopReturn,
  startSpan: (options: any, callback: (...args: any[]) => any) => callback(null),
  startInactiveSpan: noopReturn,
  startSpanManual: noopReturn,
  startNewTrace: noopReturn,
  continueTrace: noopReturn,
  trace: (callback: (...args: any[]) => any) => callback(),
  metrics: {
    increment: noop,
    decrement: noop,
    gauge: noop,
    distribution: noop,
    set: noop,
    timing: noop,
    histogram: noop,
    flush: noopReturn
  },
  // Browser-specific methods
  showReportDialog: noop,
  close: noop,
  flush: noopReturn,
  lastEventId: () => null,
  // Node.js specific methods (mocked for browser compatibility)
  requestHandler: () => (req: any, res: any, next: any) => next(),
  errorHandler: () => (err: any, req: any, res: any, next: any) => next(err),
  tracingHandler: () => (req: any, res: any, next: any) => next(),
  setupExpressErrorHandler: noop,
  setupFastifyErrorHandler: noop,
  setupKoaErrorHandler: noop,
  setupHapiErrorHandler: noop,
  setupBunErrorHandler: noop,
  // Additional utility methods
  wrap: (fn: any) => fn,
  wrapAsync: (fn: any) => fn,
  addIntegration: noop,
  getIntegrations: () => ({}),
  // Performance monitoring
  startTransaction: noopReturn,
  startSpan: (options: any, callback: (...args: any[]) => any) => callback(null),
  startInactiveSpan: noopReturn,
  startSpanManual: noopReturn,
  startNewTrace: noopReturn,
  continueTrace: noopReturn,
  trace: (callback: (...args: any[]) => any) => callback(),
  // Breadcrumbs
  addBreadcrumb: noop,
  // User context
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setContext: noop,
  setLevel: noop,
  setFingerprint: noop,
  setExtra: noop,
  setExtras: noop,
  clearBreadcrumbs: noop,
  // Scope management
  configureScope: noop,
  withScope: (callback: (...args: any[]) => any) => callback(mockScope),
  getCurrentScope: () => mockScope,
  getIsolationScope: () => mockScope,
  getGlobalScope: () => mockScope,
  withIsolationScope: (callback: (...args: any[]) => any) => callback(mockScope),
  // Hub and client
  getCurrentHub: () => mockHub,
  getClient: () => mockClient,
  // Lifecycle
  close: noop,
  flush: noopReturn,
  lastEventId: () => null
};

// Mock scope object
const mockScope = {
  setUser: noop,
  setTag: noop,
  setTags: noop,
  setContext: noop,
  setLevel: noop,
  setFingerprint: noop,
  setExtra: noop,
  setExtras: noop,
  addBreadcrumb: noop,
  clearBreadcrumbs: noop,
  setSpan: noop,
  getSpan: () => null,
  getTransaction: () => null,
  setTransactionName: noop,
  setTransactionTag: noop,
  setTransactionData: noop,
  setPropagationContext: noop,
  getPropagationContext: () => ({}),
  clone: () => mockScope,
  clear: noop,
  update: noop,
  setScope: noop,
  getScope: () => mockScope
};

// Mock hub object
const mockHub = {
  getClient: () => mockClient,
  getScope: () => mockScope,
  getIsolationScope: () => mockScope,
  getStack: () => [],
  getStackTop: () => ({ scope: mockScope, client: mockClient }),
  pushScope: () => mockScope,
  popScope: () => true,
  withScope: (callback: (...args: any[]) => any) => callback(mockScope),
  withIsolationScope: (callback: (...args: any[]) => any) => callback(mockScope),
  withActiveSpan: (callback: (...args: any[]) => any) => callback(null),
  configureScope: noop,
  bindClient: noop,
  run: (callback: (...args: any[]) => any) => callback(),
  getCurrentScope: () => mockScope,
  getIsolationScope: () => mockScope,
  getGlobalScope: () => mockScope
};

// Mock client object
const mockClient = {
  getOptions: () => ({}),
  getDsn: () => null,
  getTransport: () => null,
  getIntegrations: () => ({}),
  getIntegration: () => null,
  getOptions: () => ({}),
  captureException: noop,
  captureMessage: noop,
  captureEvent: noop,
  captureSession: noop,
  getTransport: () => null,
  flush: noopReturn,
  close: noopReturn,
  setupIntegrations: noop,
  getIntegration: () => null,
  getIntegrationById: () => null,
  getIntegrationByName: () => null,
  isClient: true
};

// Mock Handlers object for Node.js compatibility
const Handlers = {
  requestHandler: () => (req: any, res: any, next: any) => next(),
  errorHandler: () => (err: any, req: any, res: any, next: any) => next(err),
  tracingHandler: () => (req: any, res: any, next: any) => next(),
  setupExpressErrorHandler: noop,
  setupFastifyErrorHandler: noop,
  setupKoaErrorHandler: noop,
  setupHapiErrorHandler: noop,
  setupBunErrorHandler: noop
};

// Export the mock as default and named exports
export default mockSentry;
export { Handlers };
export const init = mockSentry.init;
export const captureException = mockSentry.captureException;
export const captureMessage = mockSentry.captureMessage;
export const captureEvent = mockSentry.captureEvent;
export const addBreadcrumb = mockSentry.addBreadcrumb;
export const configureScope = mockSentry.configureScope;
export const withScope = mockSentry.withScope;
export const setUser = mockSentry.setUser;
export const setTag = mockSentry.setTag;
export const setTags = mockSentry.setTags;
export const setContext = mockSentry.setContext;
export const setLevel = mockSentry.setLevel;
export const setFingerprint = mockSentry.setFingerprint;
export const setExtra = mockSentry.setExtra;
export const setExtras = mockSentry.setExtras;
export const clearBreadcrumbs = mockSentry.clearBreadcrumbs;
export const getCurrentHub = mockSentry.getCurrentHub;
export const getClient = mockSentry.getClient;
export const close = mockSentry.close;
export const flush = mockSentry.flush;
export const lastEventId = mockSentry.lastEventId;
export const getCurrentScope = mockSentry.getCurrentScope;
export const getIsolationScope = mockSentry.getIsolationScope;
export const getGlobalScope = mockSentry.getGlobalScope;
export const withIsolationScope = mockSentry.withIsolationScope;
export const withActiveSpan = mockSentry.withActiveSpan;
export const startTransaction = mockSentry.startTransaction;
export const startSpan = mockSentry.startSpan;
export const startInactiveSpan = mockSentry.startInactiveSpan;
export const startSpanManual = mockSentry.startSpanManual;
export const startNewTrace = mockSentry.startNewTrace;
export const continueTrace = mockSentry.continueTrace;
export const trace = mockSentry.trace;
export const metrics = mockSentry.metrics;
export const showReportDialog = mockSentry.showReportDialog;
export const wrap = mockSentry.wrap;
export const wrapAsync = mockSentry.wrapAsync;
export const addIntegration = mockSentry.addIntegration;
export const getIntegrations = mockSentry.getIntegrations;