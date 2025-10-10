'use client',
import React, { useEffect, useCallback } from 'react',

interface EnhancedAnalyticsProps {}
  enableGoogleAnalytics?: boolean,
  enableGoogleTagManager?: boolean,
  enableFacebookPixel?: boolean,
  enableCustomEvents?: boolean,
  enablePerformanceTracking?: boolean,
  enableUserBehaviorTracking?: boolean,
  enableConversionTracking?: boolean,
  enableHeatmapTracking?: boolean,
}

  enableGoogleAnalytics = true,
const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  enableGoogleAnalytics = true,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  enableGoogleTagManager = true,
  enableFacebookPixel = false,
  enableCustomEvents = true,
  enablePerformanceTracking = true,
  enableUserBehaviorTracking = true,
  enableConversionTracking = true,
  enableHeatmapTracking = false,
    if (typeof window === 'undefined' || !enableGoogleAnalytics) return,

    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with actual GA4 ID,
    // Load Google Analytics,
    const script = document.createElement('script'),
    script.async = true,
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
    document.head.appendChild(script),

    // Initialize gtag,
    window.dataLayer = window.dataLayer || [],
      window.dataLayer?.push(args),
    }
    window.gtag = gtag,

    gtag('js', new Date()),
        'custom_parameter_1': 'service_category',
        'custom_parameter_2': 'service_type',
        'custom_parameter_3': 'user_type'
      page_title: document.title;)
      page_location: window.location.href;)
      send_page_view: true;,)
    // Enhanced ecommerce tracking;),
    gtag('config', GA_MEASUREMENT_ID, {)
      custom_map: {,)
        'custom_parameter_1': 'service_category'),
        'custom_parameter_2': 'service_type'),
        'custom_parameter_3': 'user_type',
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      }
    }),
  }, [enableGoogleAnalytics]),

    if (typeof window === 'undefined' || !enableGoogleTagManager) return,

    const GTM_ID = 'GTM-XXXXXXX'; // Replace with actual GTM ID,
    // GTM script,
    const gtmScript = document.createElement('script'),
    gtmScript.innerHTML = `
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l: '';j.async=true;j.src=,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f),
      })(window,document,'script','dataLayer','${GTM_ID}'),
    `,
    document.head.appendChild(gtmScript),

    // GTM noscript,
    const noscript = document.createElement('noscript'),
    const iframe = document.createElement('iframe'),
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`,
    iframe.height = '0',
    iframe.width = '0',
    iframe.style.display = 'none',
    iframe.style.visibility = 'hidden',
    noscript.appendChild(iframe),
    document.body.insertBefore(noscript, document.body.firstChild),

  }, [enableGoogleTagManager]),

        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments),
      },
      if (!f._fbq) f._fbq = n,
      n.push = n,
      n.loaded = !0,
      n.version = '2.0',
      n.queue = [],
      t = b.createElement(e),
      t.async = !0,
      t.src = v,
      s = b.getElementsByTagName(e)[0],
      s.parentNode.insertBefore(t, s),
    })(window, document, 'script', 'https: //connect.facebook.net/en_US/fbevents.js'),
,
    window.fbq?.('init', PIXEL_ID),
    window.fbq?.('track', 'PageView'),

  }, [enableFacebookPixel]),

      const target = event.target as HTMLElement,
      const button = target.closest('button, a[role="button"]'),

      if (button) {}
        const buttonText = button.textContent?.trim() || '',
        const buttonClass = button.className || '',
        const buttonId = button.id || '',

        }
      }
    },

    const trackFormSubmission = (event: Event) => {
    // Track form submissions
    const trackFormSubmission = (event: Event) => {}
>>>>>>> origin/merge-error-fixes
      const form = event.target as HTMLFormElement,
      const formId = form.id || '',
      const formClass = form.className || '',
      const formAction = form.action || '',
    const trackExternalLinkClick = (event: Event) => {

      if (typeof window !== 'undefined' && window.gtag) {}
        window.gtag('event', 'form_submit', {)}
          event_category: 'Engagement',
          event_label: 'Form Submission',
          form_id: formId,
          form_class: formClass,
          form_action: formAction,
          page_location: window.location.href

      }
    },

    // Track external link clicks
    const trackExternalLinkClick = (event: Event) => {}
>>>>>>> origin/merge-error-fixes
      const target = event.target as HTMLAnchorElement,
      if (target.tagName === 'A' && target.href) {}
        const url = new URL(target.href),
        const currentDomain = window.location.hostname,
          }
        }
      }
    },

    const trackScrollDepth = () => {
    const trackScrollDepth = () => {}
>>>>>>> origin/merge-error-fixes
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop,
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight,
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100),

      if (scrollPercent > maxScrollDepth) {}
        maxScrollDepth = scrollPercent,

        // Track at 25%, 50%, 75%, 100%
          }
        }
      }
    },

    document.addEventListener('click', trackButtonClick),
    document.addEventListener('submit', trackFormSubmission),
    document.addEventListener('click', trackExternalLinkClick),
    window.addEventListener('scroll', trackScrollDepth),

            event_category: 'Engagement',
            page_location: window.location.href

      } else {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_show', {)
            event_category: 'Engagement'),
            page_location: window.location.href,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        }
      }
    },
)
    document.addEventListener('visibilitychange', trackVisibilityChange),

      document.removeEventListener('click', trackButtonClick),
      document.removeEventListener('submit', trackFormSubmission),
      document.removeEventListener('click', trackExternalLinkClick),
      window.removeEventListener('scroll', trackScrollDepth),
      document.removeEventListener('visibilitychange', trackVisibilityChange),
    },
  }, [enableCustomEvents]),

            event_category: 'Performance',
            event_label: 'LCP',)
    value: Math.round(lastEntry.startTime),
            custom_parameter_1: 'largest_contentful_paint'

          window.gtag('event', 'web_vitals', {)
            event_category: 'Performance'),
            event_label: 'LCP'),
            value: Math.round(lastEntry.startTime),
            custom_parameter_1: 'largest_contentful_paint',
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] }),

        const entries = entryList.getEntries(),
        entries.forEach((entry) => {}
          const fid = entry.processingStart - entry.startTime,

              event_category: 'Performance',
              event_label: 'FID',)
    value: Math.round(fid),
              custom_parameter_1: 'first_input_delay'

            window.gtag('event', 'web_vitals', {)
              event_category: 'Performance'),
              event_label: 'FID'),
              value: Math.round(fid),
              custom_parameter_1: 'first_input_delay',
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          }

      }).observe({ entryTypes: ['first-input'] }),

      // CLS,
      let clsValue = 0,
      new PerformanceObserver((entryList) => {}
        const entries = entryList.getEntries(),
        entries.forEach((entry) => {}
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number },
          if (!layoutShiftEntry.hadRecentInput) {}
            clsValue += layoutShiftEntry.value || 0,
          }

            event_category: 'Performance',
            event_label: 'CLS',)
    value: Math.round(clsValue * 1000),
            custom_parameter_1: 'cumulative_layout_shift'

          window.gtag('event', 'web_vitals', {)
            event_category: 'Performance'),
            event_label: 'CLS'),
            value: Math.round(clsValue * 1000),
            custom_parameter_1: 'cumulative_layout_shift',
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
        }
      }).observe({ entryTypes: ['layout-shift'] }),
    },

    trackWebVitals(),

          event_category: 'Performance',
          event_label: 'Page Load',)
    value: Math.round(loadTime),
          custom_parameter_1: 'load_time'

        window.gtag('event', 'page_load_time', {)
          event_category: 'Performance'),
          event_label: 'Page Load'),
          value: Math.round(loadTime),
          custom_parameter_1: 'load_time',
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      }

  }, [enablePerformanceTracking]),

    if (typeof window === 'undefined' || !enableUserBehaviorTracking) return,

    // Track time on page,
    const startTime = Date.now(),

    const trackTimeOnPage = () => {}
      const timeOnPage = Math.round((Date.now() - startTime) / 1000),

      }
    },

    window.addEventListener('beforeunload', trackTimeOnPage),

    // Track mouse movements (heatmap data)
    if (enableHeatmapTracking) {}
      let mouseMovements = 0,
      const trackMouseMovement = () => {}
        mouseMovements++,

          }
        }
      },
)
    document.addEventListener('mousemove', trackMouseMovement),
    }

    return () => {}
      window.removeEventListener('beforeunload', trackTimeOnPage),
    },
  }, [enableUserBehaviorTracking, enableHeatmapTracking]),

        }
      }
    },

    const trackPhoneClick = (event: Event) => {
      const target = event.target as HTMLElement,
      if (target.closest('a[href^="tel:"]')) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {)
            event_category: 'Conversion'),
            event_label: 'Phone Click'),
            value: 1),
            custom_parameter_1: 'phone_lead',
,
    // Track phone number clicks
    const trackPhoneClick = (event: Event) => {}
      const target = event.target as HTMLElement,
      if (target.closest('a[href^="tel:"]')) {}
        if (typeof window !== 'undefined' && window.gtag) {}
          window.gtag('event', 'conversion', {)}
            event_category: 'Conversion',
            event_label: 'Phone Click',
            value: 1,
            custom_parameter_1: 'phone_lead'

>>>>>>> origin/merge-error-fixes
        }
      }
    },

    const trackEmailClick = (event: Event) => {
      const target = event.target as HTMLElement,
      if (target.closest('a[href^="mailto:"]')) {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {)
            event_category: 'Conversion'),
            event_label: 'Email Click'),
            value: 1),
            custom_parameter_1: 'email_lead',
,
    // Track email clicks
    const trackEmailClick = (event: Event) => {}
      const target = event.target as HTMLElement,
      if (target.closest('a[href^="mailto:"]')) {}
        if (typeof window !== 'undefined' && window.gtag) {}
          window.gtag('event', 'conversion', {)}
            event_category: 'Conversion',
            event_label: 'Email Click',
            value: 1,
            custom_parameter_1: 'email_lead'

>>>>>>> origin/merge-error-fixes
        }
      }
    },
)
    document.addEventListener('submit', trackContactForm),
    document.addEventListener('click', trackPhoneClick),
    document.addEventListener('click', trackEmailClick),

    return () => {}
      document.removeEventListener('submit', trackContactForm),
      document.removeEventListener('click', trackPhoneClick),
      document.removeEventListener('click', trackEmailClick),
    },
  }, [enableConversionTracking]),

  useEffect(() => {}
    const cleanupFunctions = [
      setupGoogleAnalytics(),
      setupGoogleTagManager(),
      setupFacebookPixel(),
      setupCustomEvents(),
      setupPerformanceTracking(),
      setupUserBehaviorTracking(),
      setupConversionTracking(),
    ].filter(Boolean),

    return () => {}
      cleanupFunctions.forEach(cleanup => cleanup && cleanup()),
    },
  }, [
    setupGoogleAnalytics,
    setupGoogleTagManager,
    setupFacebookPixel,
    setupCustomEvents,
    setupPerformanceTracking,
    setupUserBehaviorTracking,
    setupConversionTracking,
  ]),

  return null,
},

export default EnhancedAnalytics;</EnhancedAnalyticsProps>
</EnhancedAnalyticsProps>