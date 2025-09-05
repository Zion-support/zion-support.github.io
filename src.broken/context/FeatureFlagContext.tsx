<<<<<<< HEAD
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
}

interface FeatureFlagContextValue {
  isEnabled: (name: string) => boolean,
  getVariant: (name: string) => Variant,
  track: (event: string) => void
}

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
    }
  }, [client]),

  const isEnabled = (name: string) => (ready ? client.isEnabled(name) : false),
  const getVariant = (name: string) =>
    ready ? (client as any).getVariant?.(name) ?? { name: 'disabled' } : { name: 'disabled' },
  const track = (event: string) => {
    const c: any = client,
    if (typeof c.track === 'function') {
      c.track(event)
    }
  },
=======
import React, {_createContext, _useContext, _useEffect, _useState} from 'react';

// Variant type is not exported from the client typings
export interface Variant {_name: string;
  enabled?: boolean;
  payload?: {
    type: string;
    value: string;};
}

interface FeatureFlagContextValue {_isEnabled: (_name: string) => boolean;
  getVariant: (_name: string) => Variant;
  track: (_event: string) => void;}

const _FeatureFlagContext = createContext<FeatureFlagContextValue | undefined>(undefined);

export function FeatureFlagProvider(_{_children}: {_children: React.ReactNode}) {_const _url = (import.meta as any)?.env?.VITE_UNLEASH_URL || process.env.UNLEASH_URL || '';
  const [client] = useState__(() => new UnleashClient({ url, _clientKey: 'frontend', _appName: 'zion-app'}));
  const [ready, setReady] = useState(false);

  useEffect__(() => {_const c: unknown = client;
    if (typeof c.on === 'function') {
      c.on(_'ready', _() => setReady(true));} else {_setReady(true);}
    if (typeof c.start === 'function') {_c.start();}
  }, [client]);

  const _isEnabled = (_name: string) => (ready ? client.isEnabled(name) : false);
  const _getVariant = (_name: string) =>
    ready ? (client as any).getVariant?.(name) ?? {_name: 'disabled'} : {_name: 'disabled'};
  const _track = (_event: string) => {_const c: unknown = client;
    if (typeof c.track === 'function') {
      c.track(event);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <FeatureFlagContext.Provider value={_{ isEnabled, _getVariant, _track}}>
      {_children}
    </FeatureFlagContext.Provider>
  )
}

<<<<<<< HEAD
export function useFeatureFlags() {
  const ctx = useContext(FeatureFlagContext),
  if (!ctx) throw new Error('useFeatureFlags must be used within a FeatureFlagProvider'),
  return ctx
}
=======
export function useFeatureFlags() {_const _ctx = useContext(FeatureFlagContext);
  if (!ctx) throw new Error('useFeatureFlags must be used within a FeatureFlagProvider');
  return ctx;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
