<<<<<<< HEAD
import * as Sentry from '@sentry/node';

if (!Sentry.getCurrentHub().getClient()) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
    enabled: Boolean(
      process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN
    ),
  });
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
