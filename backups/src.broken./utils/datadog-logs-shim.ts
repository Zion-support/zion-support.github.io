// Datadog browser logs shim for Vite compatibility
export const datadogLogs = {
  init: () => {},
  logger: {
    debug: () => {},
    info: () => {},
    warn: () => {},
    error: () => {},
  },
};

export default datadogLogs;