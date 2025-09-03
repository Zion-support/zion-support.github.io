
// Error tracking configuration
export const errorTracking = {
  sentry: {
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0
  },
  logging: {
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    format: 'json'
  }
};

export default errorTracking;
