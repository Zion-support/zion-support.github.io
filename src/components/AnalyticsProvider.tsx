  const G A_ TR AC KI NG_ ID = process.env.R EA CT_ AP P_ GA_ TR AC KI NG_ ID || 'G-X XX XX XX XX X';
  
    // Initialize Google Analytics
    
      const script = document.create Element('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${G A_ TR AC KI NG_ ID}`;
      document.head.append Child(script);
      // Initialize gtag
      (window as { data Layer: unknown[] }).data Layer = (window as { data Layer: unknown[] }).data Layer || [];
        (window as { data Layer: unknown[] }).data Layer.push(args);
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
    
        const target = e.target as H TM LElement;
          const text = target.text Content?.trim() || '';
          const href = target.get Attribute('href') || '';
              value: href
            });
          }
        }
      });
      // Track form submissions
        const form = e.target as H TM LForm Element;
            event_label: form.id || 'contact_form'
          });
        }
      });
      // Track phone number clicks
        const target = e.target as H TM LElement;
              value: target.get Attribute('href')
            });
          }
        }
      });
    };
    // Initialize analytics
    init Analytics();
    track Page View();
    track Interactions();
    window.add Event Listener('popstate', handle Route Change);
      window.remove Event Listener('popstate', handle Route Change);
    };
  }, [G A_ TR AC KI NG_ ID]);
  return <>{children}</>;
};
export default AnalyticsProvider;
