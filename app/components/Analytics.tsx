    document.head.appendChild(script)
// Initialize gtag;
    (window as any).dataLayer = (window as any).dataLayer || [],
    function gtag(...args: any[]) {,
    ) => {
  )
  }
            trackEvent('web_vitals', 'LCP', Math.round(entry.startTime));}
          } else if (entry.entryType === 'first-input') {
    const fid = (entry as any).processingStart - entry.startTime
            trackEvent('web_vitals', 'FID', Math.round(fid))
  }
          } else if (entry.entryType === 'layout-shift') {
    if (!(entry as any).hadRecentInput) {
              trackEvent('web_vitals', 'CLS', (entry as any).value)
  }
            }
          }
        }
      })
        if (navigation) {
          trackEvent('performance', 'page_load_time', Math.round(navigation.loadEventEnd - navigation.fetchStart))}}
      })
    }
  }
          type: (event.target as any).tagName,
          src: (event.target as any).src || (event.target as any).href,
          error: event.type;,}})
      }
    }, true)
  }
          button_text: target.textContent?.trim(),
          button_class: target.className;,}})
      }
    })
      })
    }
  }
return null
}
    </>
  );
// Extend Window interface for gtag
declare global {
    interface Window {

    dataLayer: any[],
    gtag: (...args: any[]) => void
  }
  }
}
export default Analytics
// Analytics Provider for context
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return ()
  )
}
