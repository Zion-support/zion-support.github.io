import React, { createContext, useContext, useEffect, useState } from 'react';
import { UnleashClient } from 'unleash-proxy-client';
// Variant type is not exported from the client typings
export interface Variant {
  name: string,
  enabled?: boolean,
  payload?: {
    type: string,
    value: string}
}

interface FeatureFlagContextValue {
  isEnabled: (name: string) => boolean,
  getVariant: (name: string) => Variant,
  track: (event: string) => void
}

const FeatureFlagContext = $2;
export function FeatureFlagProvider({ children }: { children: React.ReactNode }) {
  const url = $2;
  const [client] = useState(() => new UnleashClient({ url, clientKey: 'frontend', appName: 'zion-app' })),
  const [ready, setReady] = useState($2);
  useEffect(() => {
    const c: any = $2;
    if (typeof c.on === 'function') {
      c.on('ready', () => setReady(true))
    } else {
      setReady(true)
    }
    if (typeof c.start === 'function') {
      c.start()
    }
  }, [client]),

  const isEnabled = $2;
  const getVariant = $2;
  const track = $2;
    if (typeof c.track = $2;
  return (
    <FeatureFlagContext.Provider value={ isEnabled, getVariant, track }>
      {children}
    </FeatureFlagContext.Provider>
  )
}

export function useFeatureFlags() {
  const ctx = useContext($2);
  if (!ctx) throw new Error($2);
  return ctx
}
}> {
  children 
}</FeatureFlagContext.Provider>) 
