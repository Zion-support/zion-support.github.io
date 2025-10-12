'use client';


  eventName?: string;
  eventData?: Record<string, unknown>;
}

    // Track page views and events
        window.gtag('event', eventName, eventData);
        window.gtag('config', 'GA_MEASUREMENT_ID');
      }
    }

    // Track clicks
    
      const target = event.target as HTMLElement;
            event_label: target.dataset.track
          });
        }
      }
    };

    // Track scroll depth
    
      );
      
            event_label: `${scrollDepth}%`
          });
        }
      }
    };

    // Add event listeners
    document.addEventListener('click', trackClick);
    window.addEventListener('scroll', trackScroll);

    // Cleanup
      document.removeEventListener('click', trackClick);
      window.removeEventListener('scroll', trackScroll);
    };
  }, [eventName, eventData]);

  return null;
};

export default Analytics;
