<<<<<<< HEAD
import * as Sentry from '@sentry/react';

if (typeof window !== 'undefined') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    tracesSampleRate: 0.1,
    integrations: [],
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
  });
}
=======
 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
