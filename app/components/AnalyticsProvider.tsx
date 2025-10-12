'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

  const context = useContext(AnalyticsContext);
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

  children: ReactNode;
}

    // Initialize Google Analytics if available
      const gtag = (window as { gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag;
      
      // Configure Google Analytics
      });
    }
  }, []);

    if (typeof window === 'undefined') return;

    // Google Analytics
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      });
    }

    // Console logging for development
      console.log('Analytics Event:', eventName, parameters);
    }
  };

    if (typeof window === 'undefined') return;

    // Google Analytics
      const gtag = (window as { gtag: (command: string, targetId: string, config: Record<string, unknown>) => void }).gtag;
      });
    }

    // Console logging for development
      console.log('Page View:', pageName, pagePath);
    }
  };

  };

    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
