import React, {_createContext, _useContext, _useEffect, _useState, _ReactNode} from 'react';
import Cookies from 'js-cookie';

export type ConsentState = {_analytics: boolean;
  ads: boolean;};

interface ConsentContextValue {_consent: ConsentState;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updateConsent: (_state: ConsentState) => void;}

const defaultState: ConsentState = {_analytics: false, _ads: false};

const _ConsentContext = createContext<ConsentContextValue>(_{_consent: defaultState, _acceptAll: () => {},
  rejectNonEssential: () => {},
  updateConsent: () => {}});

function loadAnalytics() {_if (document.getElementById('ga-script')) return;
  const _s = document.createElement('script');
  s.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
  s.async = true;
  s.id = 'ga-script';
  document.body.appendChild(s);
  const _inline = document.createElement('script');
  inline.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');`;
  document.body.appendChild(inline);
}

function loadAds() {_if (document.getElementById('ads-script')) return;
  const _s = document.createElement('script');
  s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  s.async = true;
  s.id = 'ads-script';
  document.body.appendChild(s);}

export function ConsentProvider(_{_children}: {_children: ReactNode}) {_const [consent, _setConsent] = useState<ConsentState>__(() => {
    const _stored = Cookies.get('consent_preferences');
    return stored ? (JSON.parse(stored) as ConsentState) : defaultState;});

  useEffect__(() => {_Cookies.set('consent_preferences', _JSON.stringify(consent), _{ expires: 365});
  }, [consent]);

  useEffect__(() => {_if (consent.analytics) loadAnalytics();
    if (consent.ads) loadAds();}, [consent]);

  const _acceptAll = () => setConsent({_analytics: true, _ads: true});
  const _rejectNonEssential = () => setConsent({_analytics: false, _ads: false});
  const _updateConsent = (_state: ConsentState) => setConsent(state);

  return (
    <ConsentContext.Provider value={_{ consent, _acceptAll, _rejectNonEssential, _updateConsent}}>
      {_children}
    </ConsentContext.Provider>
  );
}

export const _useConsent = () => useContext(ConsentContext);
