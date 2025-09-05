import * as Sentry from '@sentry/nextjs',
// Use environment variables directly instead of runtime config
<<<<<<< HEAD
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN,

// Only initialize if DSN is available
if (SENTRY_DSN && !SENTRY_DSN.includes('dummy') && !SENTRY_DSN.startsWith('YOUR_')) {
  Sentry.init({
    dsn: SENTRY_DSN,
    // We recommend adjusting this value in production, or using tracesSampler for finer control
    tracesSampleRate: 0.1,
    // ...
    // Note: if you want to override the automatic release value, do so here
    //   release: process.env.npm_package_version})
=======
const _SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

// Only initialize if DSN is available
if (SENTRY_DSN && !SENTRY_DSN.includes('dummy') && !SENTRY_DSN.startsWith('YOUR_')) {_Sentry.init({
    dsn: SENTRY_DSN, _// We recommend adjusting this value in production, _or using tracesSampler for finer control
    tracesSampleRate: 0.1, _// ...
    // Note: if you want to override the automatic release value, _do so here
    //   release: process.env.npm_package_version});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export function captureException(_error: unknown, _context?: unknown): void {_// Added context capability
  // The @sentry/nextjs SDK handles initialization.
  // We can directly call captureException.
  if (context) {
<<<<<<< HEAD
    return Sentry.captureException(error, context)
  }
  return Sentry.captureException(error)
}

// It's good practice to also export Sentry itself if you need to use other Sentry methods elsewhere.
export { Sentry },
=======
    return Sentry.captureException(error, _context);}
  return Sentry.captureException(error);
}

// It's good practice to also export Sentry itself if you need to use other Sentry methods elsewhere.
export {_Sentry};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
