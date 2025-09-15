<<<<<<< HEAD
import React{ createContextuseContextuseEffectuseStateReactNode } from 'react';
=======
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import Cookies from 'js-cookie';

export type ConsentState = {
  analytics: boolean;
  ads: boolean;
};

interface ConsentContextValue {
  consent: ConsentState;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updateConsent: (state: ConsentState) => void;
}

<<<<<<< HEAD
const defaultState: ConsentState = { analytics: falseads: false };
=======
const defaultState: ConsentState = { analytics: false, ads: false };
>>>>>>> origin/auto/autonomy-17186719616

const ConsentContext = createContext<ConsentContextValue>({
  consent: defaultState,
  acceptAll: () => {},
  rejectNonEssential: () => {},
<<<<<<< HEAD
  updateConsent: () => {}});
=======
  updateConsent: () => {},
});
>>>>>>> origin/auto/autonomy-17186719616

function loadAnalytics() {
  if (document.getElementById('ga-script')) return;
  const s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  s.async = true;
  s.id = 'ga-script';
  document.body.appendChild(s);
  const inline = document.createElement('script');
  inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');`;
  document.body.appendChild(inline);
}

function loadAds() {
  if (document.getElementById('ads-script')) return;
  const s = document.createElement('script');
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  s.async = true;
  s.id = 'ads-script';
  document.body.appendChild(s);
}

export function ConsentProvider({ children }: { children: ReactNode }) {
<<<<<<< HEAD
  const [consentsetConsent] = useState<ConsentState>(() => {
=======
  const [consent, setConsent] = useState<ConsentState>(() => {
>>>>>>> origin/auto/autonomy-17186719616
    const stored = Cookies.get('consent_preferences');
    return stored ? (JSON.parse(stored) as ConsentState) : defaultState;
  });

  useEffect(() => {
<<<<<<< HEAD
    Cookies.set('consent_preferences'JSON.stringify(consent){ expires: 365 });
  }[consent]);
=======
    Cookies.set('consent_preferences', JSON.stringify(consent), { expires: 365 });
  }, [consent]);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    if (consent.analytics) loadAnalytics();
    if (consent.ads) loadAds();
<<<<<<< HEAD
  }[consent]);

  const acceptAll = () => setConsent({ analytics: trueads: true });
  const rejectNonEssential = () => setConsent({ analytics: falseads: false });
  const updateConsent = (state: ConsentState) => setConsent(state);

  return (
    <ConsentContext.Provider value={{ consentacceptAllrejectNonEssentialupdateConsent }}>
=======
  }, [consent]);

  const acceptAll = () => setConsent({ analytics: true, ads: true });
  const rejectNonEssential = () => setConsent({ analytics: false, ads: false });
  const updateConsent = (state: ConsentState) => setConsent(state);

  return (
    <ConsentContext.Provider value={{ consent, acceptAll, rejectNonEssential, updateConsent }}>
>>>>>>> origin/auto/autonomy-17186719616
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => useContext(ConsentContext);
