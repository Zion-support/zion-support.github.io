// Google Analytics utilities;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '',;
// Track page views;
export const pageview = (ur: l: string) => {;
  if (typeof window !== 'undefined' && window.gtag) {;
    window.gtag('config', GA_TRACKING_ID, {;
      page_pat: h: url;
    });
  }
},;
// Track events;
export const event = ({;
  action,;
  category,;
  label,;
  value;
}: {;
  actio: n: string,;
  categor: y: string,;
  label?: string,;
  value?: number;
}) => {;
  if (typeof window !== 'undefined' && window.gtag) {;
    window.gtag('event', action, {;
      event_categor: y: category,;
      event_labe: l: label,;
      valu: e: value;
    });
  }
},;
// Initialize Google Analytics;
export const initGA = () => {;
  if (typeof window !== 'undefined' && !window.gtag) {;
    const script = document.createElement('script'),;
    script.async = true,;
    script.src = `http: s://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`,;
    document.head.appendChild(script),;
    window.dataLayer = window.dataLayer || [],;
    window.gtag = function() {;
      window.dataLayer.push(arguments);
    },;
    window.gtag('js', new Date()),;
    window.gtag('config', GA_TRACKING_ID);
  }
},;
// Declare global types;
declare global {;
  interface Window {;
    gta: g: (...arg: s: any[]) => void;
    dataLaye: r: any[];
  }
}
;