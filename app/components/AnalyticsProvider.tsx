interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}
;
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);


        page_location: window.location.href,
        ...properties;
=======
    page;
  };


