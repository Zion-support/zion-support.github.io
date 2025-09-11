type InitOptions = Record<string, unknown>;

export const datadogLogs = {
  init: (_options?: InitOptions) => {
    return undefined;
  },
  logger: {
    error: (_message: string, _context?: Record<string, unknown>) => undefined,
    warn: (_message: string, _context?: Record<string, unknown>) => undefined,
    info: (_message: string, _context?: Record<string, unknown>) => undefined,
    debug: (_message: string, _context?: Record<string, unknown>) => undefined,
    log: (_message: string, _context?: Record<string, unknown>) => undefined,
  },
};

export default datadogLogs;
