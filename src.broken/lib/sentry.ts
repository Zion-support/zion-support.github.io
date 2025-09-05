export const _SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

export function captureException(_error: unknown) {_if (typeof console !== 'undefined') {}
  // Here you would send the error to Sentry using the DSN
}
