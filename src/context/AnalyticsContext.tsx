import React, { createContext, PropsWithChildren } from 'react';

export const AnalyticsContext = createContext<{ track: (event: string, data?: Record<string, unknown>) => void }>({
  track: () => {},
});

export function AnalyticsProvider({ children }: PropsWithChildren): JSX.Element {
  const value = {
    track: (_event: string, _data?: Record<string, unknown>) => {
      // no-op in minimal build
    },
  };
  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
}

