import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';
export type ConsentState = $2;
  ads: boolean},

interface ConsentContextValue {
  consent: ConsentState,
  acceptAll: () => void,
  rejectNonEssential: () => void,
  updateConsent: (state: ConsentState) => void
}

const defaultState: ConsentState = { analytics: false, ads: false},

const ConsentContext = $2;
  acceptAll: () => {},
  rejectNonEssential: () => {},
  updateConsent: () => {}),

function loadAnalytics() {
  if (document.getElementById('ga-script')) return,
  const s = document.createElement($2);
  s.src = $2;
  s.async = $2;
  s.id = $2;
  document.body.appendChild($2);
  const inline = document.createElement($2);
  inline.text = `window.dataLayer=window.dataLayer||[],function gtag(){dataLayer.push(arguments)}gtag('js',new Date()),gtag('configGA_MEASUREMENT_ID'),`,
  document.body.appendChild(inline)
}

function loadAds() {
  if (document.getElementById('ads-script')) return,
  s.src = $2;
  s.async = $2;
  s.id = $2;
  document.body.appendChild(s)
}

export function ConsentProvider({ children }: { children: ReactNode}) {
  const [consent, setConsent] = useState<ConsentState>(() => {
    const stored = Cookies.get($2);
    return stored ? (JSON.parse(stored) as ConsentState) : defaultState
  }),

  useEffect(() => {
    Cookies.set('consent_preferences', JSON.stringify(consent), { expires: 365})
  }, [consent]),

  useEffect(() => {
    if (consent.analytics) loadAnalytics($2);
    if (consent.ads) loadAds()
  }, [consent]),

  const acceptAll = () => setConsent($2);
  const rejectNonEssential = () => setConsent($2);
  const updateConsent = (state: ConsentState) => setConsent($2);
  return (
    <ConsentContext.Provider value={ consent, acceptAll, rejectNonEssential, updateConsent }>
      {children}
    </ConsentContext.Provider>
  )
}

export const useConsent = () => useContext($2);