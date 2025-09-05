<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react',;
import { UnleashClient } from 'unleash-proxy-client',;
;
// Variant type is not exported from the client typings;
export interface Variant {;
  name:string,;
  enabled?:boolean,;
  payload?:{;
    type:string,;
    value:string;
  },;
=======
import React, { createContext, useContext, useEffect, useState } from 'react',
import { UnleashClient } from 'unleash-proxy-client',
// Variant type is not exported from the client typings
export interface Variant {
  name: string,
  enabled?: boolean,
  payload?: {
    type: string,
    value: string
  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
interface FeatureFlagContextValue {;
  isEnabled:(name:string) => boolean,;
  getVariant:(name:string) => Variant,;
  track:(event:string) => void;
}
<<<<<<< HEAD
;
const FeatureFlagContext = createContext<FeatureFlagContextValue | undefined>(undefined),;
;
export function FeatureFlagProvider({ children } { children:React.ReactNode }) {;
  const url = (import.meta as any)?.env?.VITE_UNLEASH_URL || process.env.UNLEASH_URL || '',;
  const [client] = useState(() => new UnleashClient({ url, clientKey:'frontend', appName:'zion-app' })),;
  const [ready, setReady] = useState(false),;
;
  useEffect(() => {;
    const c:any = client,;
    if (typeof c.on === 'function') {;
      c.on('ready', () => setReady(true)),;
    } else {;
      setReady(true),;
    }
    if (typeof c.start === 'function') {;
      c.start(),;
=======

const FeatureFlagContext = createContext<FeatureFlagContextValue | undefined>(undefined),

export function FeatureFlagProvider({ children }: { children: React.ReactNode }) {
  const url = (import.meta as any)?.env?.VITE_UNLEASH_URL || process.env.UNLEASH_URL || '',
  const [client] = useState(() => new UnleashClient({ url, clientKey: 'frontend', appName: 'zion-app' })),
  const [ready, setReady] = useState(false),

  useEffect(() => {
    const c: any = client,
    if (typeof c.on === 'function') {
      c.on('ready', () => setReady(true))
    } else {
      setReady(true)
    }
    if (typeof c.start === 'function') {
      c.start()
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
    }
  }, [client]),;
;
  const isEnabled = (name:string) => (ready ? client.isEnabled(name) :false),;
  const getVariant = (name:string) =>;
    ready ? (client as any).getVariant?.(name) ?? { name:'disabled' } { name:'disabled' },;
  const track = (event:string) => {;
    const c:any = client,;
    if (typeof c.track === 'function') {;
      c.track(event);
    }
<<<<<<< HEAD
  },;
;
  return (;
    <FeatureFlagContext.Provider value={{ isEnabled, getVariant, track }}>;
      {children}
    </FeatureFlagContext.Provider>;
  ),;
}
;
export function useFeatureFlags() {;
  const ctx = useContext(FeatureFlagContext),;
  if (!ctx) throw new Error('useFeatureFlags must be used within a FeatureFlagProvider'),;
  return ctx,;
}
=======
  },
  return (
    <FeatureFlagContext.Provider value={_{ isEnabled, _getVariant, _track}}>
      {_children}
    </FeatureFlagContext.Provider>
  )
}

export function useFeatureFlags() {
  const ctx = useContext(FeatureFlagContext),
  if (!ctx) throw new Error('useFeatureFlags must be used within a FeatureFlagProvider'),
  return ctx
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
