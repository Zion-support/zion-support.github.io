export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID,;

export function initGA() {;
  if (!GA_MEASUREMENT_ID || typeof window = = 'undefined'
  const script = document.createElement('script'
  gtag('js'
  gtag('config'
  if (typeof window != 'undefined'
    window.gtag('config'
  if (typeof window != 'undefined'
    window.gtag('event'