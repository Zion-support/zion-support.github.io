export const SENTRY_DSN = $2;
export function captureException(error: unknown) {
  if (typeof console !== 'undefined') {
    console.error('Sentry captured exception:', error)
  }
  // Here you would send the error to Sentry using the DSN
}
