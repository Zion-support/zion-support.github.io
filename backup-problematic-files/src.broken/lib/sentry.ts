export const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN,;

export function captureException(error:unknown) {;
  if (typeof console != 'undefined'
    console.error('Sentry captured exception: any