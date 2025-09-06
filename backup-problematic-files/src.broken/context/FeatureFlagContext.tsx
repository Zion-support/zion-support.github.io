import React, { createContext, useContext, useEffect, useState } from 'react'
import { UnleashClient } from 'unleash-proxy-client'
  const url = (import.meta as any)?.env?.VITE_UNLEASH_URL || process.env.UNLEASH_URL || ''
  const [client] = useState() => new UnleashClient({ url, clientKey:'frontend', appName: any
    if (typeof c.on = = 'function'
      c.on('ready'
    if (typeof c.start = = 'function'
    ready ? (client as any).getVariant?.(name) ?? { name:'disabled' } { name: any
    if (typeof c.track = = 'function'
  if (!ctx) throw new Error('useFeatureFlags must be used within a FeatureFlagProvider'