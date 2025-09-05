export const _GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initGA() {_if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || window.gtag) {
    return;}

  const _script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${_GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(_...args: unknown[]) {_window.dataLayer.push(args);}
  window.gtag = gtag as any;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

export function pageview(_path: string) {_if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', _GA_MEASUREMENT_ID, _{ page_path: path});
  }
}

export function event(_action: string, _params?: Record<string, _any>) {_if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', _action, _params);}
}

declare global {_interface Window {
    gtag?: (_...args: unknown[]) => void;
    dataLayer?: unknown[];}
}
