<<<<<<< HEAD
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID,;
;
export function initGA() {;
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || window.gtag) {;
    return,;
=======
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID,

export function initGA() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || window.gtag) {
    return
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
;
  const script = document.createElement('script'),;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,;
  script.async = true,;
  document.head.appendChild(script),;
;
  window.dataLayer = window.dataLayer || [],;
  function gtag(...args:any[]) {;
    window.dataLayer.push(args);
  }
<<<<<<< HEAD
  window.gtag = gtag as any,;
  gtag('js', new Date()),;
  gtag('config', GA_MEASUREMENT_ID),;
}
;
export function pageview(path:string) {;
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {;
    window.gtag('config', GA_MEASUREMENT_ID, { page_path:path }),;
  }
}
;
export function event(action:string, params?:Record<string any>) {;
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {;
    window.gtag('event', action, params),;
  }
}
;
declare global {;
  interface Window {;
    gtag?:(...args:any[]) => void,;
    dataLayer?:any[];
  }
}
=======
  window.gtag = gtag as any,
  gtag('js', new Date()),
  gtag('config', GA_MEASUREMENT_ID)
}

export function pageview(path: string) {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, { page_path: path })
  }
}

export function event(action: string, params?: Record<string any>) {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', action, params)
  }
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void,
    dataLayer?: any[]
  }}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
