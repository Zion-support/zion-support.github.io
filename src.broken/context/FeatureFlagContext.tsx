<<<<<<< HEAD
import React{ createContextuseContextuseEffectuseState } from 'react';
=======
import React, { createContext, useContext, useEffect, useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import { UnleashClient } from 'unleash-proxy-client';

// Variant type is not exported from the client typings
export interface Variant {
  name: string;
  enabled?: boolean;
  payload?: {
    type: string;
    value: string;
  };
}

interface FeatureFlagContextValue {
  isEnabled: (name: string) => boolean;
  getVariant: (name: string) => Variant;
  track: (event: string) => void;
}

const FeatureFlagContext = createContext<FeatureFlagContextValue | undefined>(undefined);

export function FeatureFlagProvider({ children }: { children: React.ReactNode }) {
  const url = (import.meta as any)?.env?.VITE_UNLEASH_URL || process.env.UNLEASH_URL || '';
<<<<<<< HEAD
  const [client] = useState(() => new UnleashClient({ urlclientKey: 'frontend'appName: 'zion-app' }));
  const [readysetReady] = useState(false);
=======
  const [client] = useState(() => new UnleashClient({ url, clientKey: 'frontend', appName: 'zion-app' }));
  const [ready, setReady] = useState(false);
>>>>>>> origin/auto/autonomy-17186719616

  useEffect(() => {
    const c: any = client;
    if (typeof c.on === 'function') {
<<<<<<< HEAD
      c.on('ready'() => setReady(true));
=======
      c.on('ready', () => setReady(true));
>>>>>>> origin/auto/autonomy-17186719616
    } else {
      setReady(true);
    }
    if (typeof c.start === 'function') {
      c.start();
    }
<<<<<<< HEAD
  }[client]);
=======
  }, [client]);
>>>>>>> origin/auto/autonomy-17186719616

  const isEnabled = (name: string) => (ready ? client.isEnabled(name) : false);
  const getVariant = (name: string) =>
    ready ? (client as any).getVariant?.(name) ?? { name: 'disabled' } : { name: 'disabled' };
  const track = (event: string) => {
    const c: any = client;
    if (typeof c.track === 'function') {
      c.track(event);
    }
  };

  return (
<<<<<<< HEAD
    <FeatureFlagContext.Provider value={{ isEnabledgetVariantrack }}>
=======
    <FeatureFlagContext.Provider value={{ isEnabled, getVariant, track }}>
>>>>>>> origin/auto/autonomy-17186719616
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureFlags() {
  const ctx = useContext(FeatureFlagContext);
  if (!ctx) throw new Error('useFeatureFlags must be used within a FeatureFlagProvider');
  return ctx;
}
