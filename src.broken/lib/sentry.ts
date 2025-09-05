<<<<<<< HEAD
export const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN,

export function captureException(error: unknown) {
  if (typeof console !== 'undefined') {
    console.error('Sentry captured exception:', error)
  }
=======
export const _SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

export function captureException(_error: unknown) {_if (typeof console !== 'undefined') {}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  // Here you would send the error to Sentry using the DSN
}
