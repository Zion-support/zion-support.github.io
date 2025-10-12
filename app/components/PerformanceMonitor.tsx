
    // Monitor Core Web Vitals
      // Monitor Largest Contentful Paint (LCP)
      
            console.log('LCP:', entry.startTime);
            // Send to analytics
                event_category: 'Web Vitals'
              });
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor First Input Delay (FID)
      
          console.log('FID:', entry.processingStart - entry.startTime);
              event_category: 'Web Vitals'
            });
          }
        }
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
            event_category: 'Web Vitals'
          });
        }
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Cleanup observers
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
