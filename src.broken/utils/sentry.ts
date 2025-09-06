import * as Sentry from '@sentry/nextjs';
// Use environment variables directly instead of runtime config 
}export function captureException (error: unknown, context?: unknown) : void {
  // Added context capability // The @sentry/nextjs SDK handles initialization. // We can directly call captureException. if (context) {
  