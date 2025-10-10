'use client';
import React from 'react';
import React, { useEffect } from 'react';
  enableGoogleAnalytics?: boolean;
  enablePerformanceMonitoring?: boolean;
  enableErrorTracking?: boolean;
  enableUserBehaviorTracking?: boolean;}
}
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script);
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {;) => {
  return (
    $3
  );
};
      (window as any).dataLayer.push(args);}
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID', {;
      page_title: document.title,;
      page_location: window.location.href,;
      send_page_view: true;}
    });
  };
            const fid = (entry as any).processingStart - entry.startTime;
            trackEvent('web_vitals', 'FID', Math.round(fid));}
          } else if (entry.entryType === 'layout-shift') {;
            if (!(entry as any).hadRecentInput) {;
              trackEvent('web_vitals', 'CLS', (entry as any).value);}
            }
          }
        }
      });
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {;
          trackEvent('performance', 'page_load_time', Math.round(navigation.loadEventEnd - navigation.fetchStart));}
        }
      });
    }
  };
        });
      }
    }, true);
  };
    let maxScroll = 0;
    window.addEventListener('scroll', () => {;
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {;
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%;
          trackEvent('engagement', 'scroll_depth', maxScroll);}
        }
      }
    });
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {;
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('engagement', 'time_on_page', timeOnPage);}
    });
        const href = (target as HTMLAnchorElement).href;
        trackEvent('engagement', 'link_click', {;
          link_url: href,;
          link_text: target.textContent?.trim();}
        });
      } else if (tagName === 'button') {;
        trackEvent('engagement', 'button_click', {;
          button_text: target.textContent?.trim(),;
          button_class: target.className;}
        });
      }
    });
      const form = event.target as HTMLFormElement;
      trackEvent('engagement', 'form_submit', {;
        form_id: form.id,;
        form_class: form.className,;
        form_action: form.action;}
      });
    });
  };
    dataLayer: any[];
    gtag: (...args: any[]) => void;}
  }
}
