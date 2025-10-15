<<<<<<< HEAD
import { createContext, useContext, useState, useEffect   } from '''react;
use client;
interface AnalyticsContextType {;
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
const  ({ children }) => {;
  const [isEnabled, setIsEnabled] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
// if analytics is enabled;
    setIsEnabled(true)}, []);
  const trackEvent = (eventName: 'string', properties?: Record<string, any>) => {;
if (!isEnabled) return;
    // Track event logic here;
    console.log(Analytics Event:, eventName, properties);
  }
  const trackPageView = (pageName: string) => {;
    if (!isEnabled) return,;
    // Track page view logic here,;
    console.log(Page View:, pageName);
  }
  const setUser = (newUserId: 'string', properties?: Record<string, any>) => {';
    setUserId(newUserId);';
    console.log('User Set:, newUserId, properties);
  }
    // Track event logic here;
    console.log(Analytics Event:', eventName, properties);}
  };
  const trackPageView = (pageName: string) => {;
    if (!isEnabled) return,;
    // Track page view logic here,;
    console.log('Page View:, pageName);}
  };
  const setUser = (newUserId: 'string', properties?: Record<string, any>) => {;
    setUserId(newUserId);
    console.log(User Set:', newUserId, properties);}
  }  const value: 'AnalyticsContextType = {;
    trackEvent',;
    trackPageView,;
    setUser,;
isEnabled,;
  }
  return (
<AnalyticsContext.Provider value={value}>;
      {children}
    </AnalyticsContext.Provider>;
  );
}
export { AnalyticsContext }
};
=======
import React, { createContext, ReactNode, useState, useCallback } from 'react'

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (pageName: string, properties?: Record<string, any>) => void
  identifyUser: (userId: string, properties?: Record<string, any>) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

interface AnalyticsProviderProps {
  children: ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    console.log('Event tracked:', eventName, properties)
    // Add your analytics tracking logic here
  }, [])

  const trackPageView = useCallback((pageName: string, properties?: Record<string, any>) => {
    console.log('Page view tracked:', pageName, properties)
    // Add your page view tracking logic here
  }, [])

  const identifyUser = useCallback((userId: string, properties?: Record<string, any>) => {
    console.log('User identified:', userId, properties)
    // Add your user identification logic here
  }, [])

  const value = {
    trackEvent,
    trackPageView,
    identifyUser
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
export { AnalyticsContext }