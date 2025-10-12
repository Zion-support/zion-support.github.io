  GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';
  
    // Initialize Google Analytics
    
      script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);
      // Initialize gtag
      (window as { dataLayer: unknown[] }).dataLayer = (window as { dataLayer: unknown[] }).dataLayer || [];
        (window as { dataLayer: unknown[] }).dataLayer.push(args);
      }
      (window as { gtag: typeof gtag }).gtag = gtag;
      gtag('js', new Date());
        send_page_view: true
      });
    };
    // Track page views
    
        });
      }
    };

    // Handle route changes
    
        });
      }
    };
    // Track user interactions
    
        target = e.target as HTMLElement;
          text = target.textContent?.trim() || '';
          href = target.getAttribute('href') || '';
              value: href
            });
          }
        }
      });
      // Track form submissions
        form = e.target as HTMLFormElement;
            event_label: form.id || 'contact_form'
          });
        }
      });
      // Track phone number clicks
        target = e.target as HTMLElement;
              value: target.getAttribute('href')
            });
          }
        }
      });
    };
    // Initialize analytics
    initAnalytics();
    trackPageView();
    trackInteractions();
    window.addEventListener('popstate', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [GA_TRACKING_ID]);
  return <>{children}</>;
};
export default AnalyticsProvider;
