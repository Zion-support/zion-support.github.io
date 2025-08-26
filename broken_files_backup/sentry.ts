<<<<<<< HEAD:src/utils/sentry.ts
import * as Sentry from '@sentry/browser';

const DSN = import.meta.env.VITE_SENTRY_DSN;

if (DSN) {
  Sentry.init({ dsn: DSN });
}

=======
import * as Sentry from '@sentry/react';
Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/sentry.ts
export function captureException(error: unknown) {
  if (DSN) {
    Sentry.captureException(error);
  }
  if (typeof console !== 'undefined') {
    console.error('Sentry captured exception:', error);
  }
}
