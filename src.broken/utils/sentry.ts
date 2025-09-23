import * as Sentry from '@sentry/nextjs';

// Use environment variables directly instead of runtime config
const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

// Only initialize if DSN is available
if (SENTRY_DSN && !SENTRY_DSN.includes('dummy') && !SENTRY_DSN.startsWith('YOUR_')) {
  Sentry.init({
    dsn: SENTRY_DSN,
    // We recommend adjusting this value in production, or using tracesSampler for finer control
    tracesSampleRate: 0.1,
    // ...
    // Note: if you want to override the automatic release value, do so here
