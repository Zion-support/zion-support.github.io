import React from 'react'
// import { createContext } from 'react'

export interface AnalyticsContextType {
  
}

  trackEvent: (eventName: string, properties?: Record<string, unknown>
    </string>) => voi,d;
  trackPageView: (page: string) => voi,d;
  setUser: (userId: string, properties?: Record<string, unknown>
    </string>) => voi,d;
}

export interface AnalyticsProviderProps {
  
}

  children: React.ReactNod,e;
}

export interface AnalyticsEvent {
  
}

  name: strin,g;
  properties?: Record<string, unknown>
    </string>
  timestamp: numbe,r;
}
