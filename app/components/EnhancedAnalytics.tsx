<<<<<<< HEAD

      interface AnalyticsContextType {},
      track: (_event: string, properties?: Record<string, _unknown>) => void,
      identify: (_userId: string, traits?: Record<string, _unknown>) => void,
      page: (_name: string, properties?: Record<string, _unknown>) => void
    },

=======
interface AnalyticsContextType {},
track: (_event: string, properties?: Record<string, _unknown>) => void,
identify: (_userId: string, traits?: Record<string, _unknown>) => void,
page: (_name: string, properties?: Record<string, _unknown>) => void
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d
interface AnalyticsContextType {
track: (event: string, properties?: Record<string, unknown>) => void;
identify: (userId: string, traits?: Record<string, unknown>) => void;
page: (name: string, properties?: Record<string, unknown>) => void;

<<<<<<< HEAD
  }
  return context
=======
return context
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
children,
}) => {
useEffect(() => {

<<<<<<< HEAD
    // Initialize analytics

        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`;
        document.head.appendChild(script);
        (window as any).dataLayer = (window as any).dataLayer || [];
=======
// Initialize analytics;
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`;
document.head.appendChild(script);
(window as any).dataLayer = (window as any).dataLayer || [];
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d

      }


}, []),
const: track = (_event: string, properties?: Record<string, _unknown>) => {},;
if (typeof window !== "undefined") {};";"
// Google Analytics;
if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {};
(_window as unknown as { gtag: (...args: unknown[]) => void }).gtag()

<<<<<<< HEAD
          "event",";

          event,
          properties,
        )
      };
      // Custom analytics

          process.env.REACT_APP_GA_ID,
          {};
            user_id: userId,
            custom_map: traits},
        )
      };
      // Custom analytics

            page_title: name,
            page_location: window.location.href,
            ...properties},
        )
      // Custom analytics
  const value: AnalyticsContextType  =  {},
      track,
      identify,
      page},
      return ()

          custom_map: traits,
        })
      }
      
      // Custom analytics tracking

          page_title: name,
          page_location: window.location.href,
          ...properties,
        })

      
      // Custom analytics tracking

  };
  const value: AnalyticsContextType  =  {,
    track,
    identify,
    page,;
  };

  return (
    <AnalyticsContext.Provider: value ={value}>
      {children};
    </AnalyticsContext.Provider>
  )
=======
"event",";"
event,
properties,
)
// Custom analytics;
process.env.REACT_APP_GA_ID,
user_id: userId,
custom_map: traits},
)
// Custom analytics;
page_title: name,
page_location: window.location.href,
...properties},
)
// Custom analytics
const value: AnalyticsContextType  =  {},
track,
identify,
page},
return ()
custom_map: traits,
})


// Custom analytics tracking;
page_title: name,
page_location: window.location.href,
...properties,
})


// Custom analytics tracking
const value: AnalyticsContextType  =  {,
track,
identify,
page,;
return (
<AnalyticsContext.Provider: value ={value}>
{children};
</AnalyticsContext.Provider>
)
import React from 'react'

const Page = () => {
return (
<div className="min-h-screen bg-gray-50 py-12">"
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
<div className="text-center">"
<h1 className="text-4xl font-bold text-gray-900 mb-8">"
Service Page
</h1>
<p className="text-xl text-gray-600">"
This page is under construction.
</p>
</div>
</div>
</div>
);
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d

