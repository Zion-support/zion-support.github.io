<<<<<<< HEAD
export const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN,;
;
export function captureException(error:unknown) {;
  if (typeof console !== 'undefined') {;
    console.error('Sentry captured exception:', error),;
  }
  // Here you would send the error to Sentry using the DSN;
=======
export const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN,

export function captureException(error: unknown) {
  if (typeof console !== 'undefined') {
    console.error('Sentry captured exception:', error)
  }  // Here you would send the error to Sentry using the DSN
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
