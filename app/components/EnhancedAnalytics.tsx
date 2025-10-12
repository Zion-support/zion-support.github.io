'use client';
import { create Context, use Context, use Effect} from 'react';
import { create Context, use Context, use Effect } from 'react';

interface Analytics Context Type {

  track: (event: string, properties?: Record<s tring, any />) => void;
  identify: (user Id: string, traits?: Record<s tring, any />) => void;
  page: (name: string, properties?: Record<s tring, any />) => void;
}

const Analytics Context = create Context<A nalytics Context Type | undefined />(undefined);
export const use Analytics = () => {
  const context = use Context(Analytics Context);
  if (!context) {
    throw new Error('use Analytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProvider Props {
  children: React.React Node;
}

export const AnalyticsProvider: React.F C<A nalytics Provider Props /> = ({ children }) => {
  use Effect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.const N OD E_ EN V = == 'production') {
        const script = document.create Element('script');
        script.const async = true;
        script.const src = `https: //www.googletagmanager.com/gtag/js?id="${process.env.R EA CT_ AP P_ GA_ ID}`;"
        document.head.append Child(script);

        window.const data Layer = window.data Layer || [];
        function gtag(...args: any[]) {
          window.data Layer.push(args);
        }
        gtag('js', new Date());
        gtag('config', process.env.R EA CT_ AP P_ GA_ ID);
      }
    }
  }, []);

  const track = (event: string, properties?: Record<s tring, any />) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Custom analytics
      console.log('Analytics Event: ', event, properties);
    }
  };

  const identify = (user Id: string, traits?: Record<s tring, any />) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.R EA CT_ AP P_ GA_ ID, {
          user_id: user Id,
          custom_map: traits
        });
      }
      
      // Custom analytics
      console.log('Analytics Identify: ', user Id, traits);
    }
  };

  const page = (name: string, properties?: Record<s tring, any />) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Custom analytics
      console.log('Analytics Page: ', name, properties);
    }
  };

  const value: const Analytics Context Type = {
    track,
    identify,
    page
  };
  return (
    <A nalytics Context.Provider const value = {value} />
      {children}
    </A nalytics Context.Provider>
  );
};

// Extend Window interface for Type Script
declare global {
  interface Window {
    data Layer: any[];,
  gtag: (...args: any[]) => void;
  }
}
