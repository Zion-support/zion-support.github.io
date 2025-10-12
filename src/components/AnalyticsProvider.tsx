export default AnalyticsProvider;
  
    // Initialize Google Analytics;
      
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id="${GA_TRACKING_ID}`;"
      document.head.appendChild(script);
      // Initialize gtag;
      (window as { dataLayer: unknown[] }).dataLayer = (window as { dataLayer: unknown[] }).dataLayer || [];
        (window as { dataLayer: unknown[] }).dataLayer.push(args);
      (window as { gtag: typeof gtag }).gtag = gtag;
      gtag('js', new Date());
        send_page_view: true;
      });
    };
    // Track page views;
        });
    };

    // Handle route changes;
        });
    };
    // Track user interactions;

              value: href;
            });
      });
      // Track form submissions;
        
            event_label: form.id || 'contact_form'
          });
      });
      // Track phone number clicks;
        
              value: target.getAttribute('href')
            });
      });
    };
    // Initialize analytics;
    initAnalytics();
    trackPageView();
    trackInteractions();
    window.addEventListener('popstate', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [GA_TRACKING_ID]);
  return <>{children}</>;
};
