export const GA_MEASUREMENT_ID = $2;
export function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || window.gtag) {
    return
  }

  const script = document.createElement($2);
  script.src = $2;
  script.async = $2;
  document.head.appendChild($2);
  window.dataLayer = $2;
  function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }
  window.gtag = $2;
  gtag('js', new Date()),
  gtag('config', GA_MEASUREMENT_ID)
}

export function pageview(path: string) {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: path})
  }
}

export function event(action: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, params)
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void,
    dataLayer?: any[]
  }
}
