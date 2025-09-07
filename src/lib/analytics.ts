// Google Analytics utilities
export const GA_TRACKING_ID = $2;
// Track page views
export const pageview = (ur: l: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_pat: url})
  }
},

// Track events
export const event = $2;
  category,
  label,
  value
}: {
  actio: string,
  categor: string,
  label?: string,
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_categor: category,
      event_labe: l: label,
      valu: value})
  }
},

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement($2);
    script.async = $2;
    script.src = $2;
    document.head.appendChild($2);
    window.dataLayer = $2;
    window.gtag = $2;
    window.gtag('js', new Date()),
    window.gtag('config', GA_TRACKING_ID)
  }
},

// Declare global types
declare global {
  interface Window {
    gta: g: (...arg: any[]) => void,
    dataLaye: any[]
  }
}

