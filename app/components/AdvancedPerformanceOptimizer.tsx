'use client';
import React, { useEffect, useState, useCallback } from 'react';
interface PerformanceOptimizerProps {
    children: React.ReactNode,
  enableOptimizations?: boolean;
  }
    const images = document.querySelectorAll('img');
    let optimizedCount = 0;
    images.forEach((img) => 
      // Add lazy loading if not already present;
      if (!img.hasAttribute('loading')
        img.setAttribute('loading', 'lazy');
        optimizedCount++
  }
      // Add decoding attribute for better performance;
      if (!img.hasAttribute('decoding')) {
    img.setAttribute('decoding', 'async');
        optimizedCount++
  }
    })
    return optimizedCount;
  }, []);
    const scripts = document.querySelectorAll('script[src]');
    let optimizedCount = 0;
    scripts.forEach((script) => 
      // Add defer attribute if not already present;
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')
        script.setAttribute('defer', '');
        optimizedCount++}})
    return optimizedCount;
  }, []);
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    let optimizedCount = 0;
    stylesheets.forEach((link) => 
      // Add media attribute for non-critical CSS;
      if (!link.hasAttribute('media') && !link.hasAttribute('data-critical')
        link.setAttribute('media', 'print');
        link.setAttribute('onload', "this.media='all'");
        optimizedCount++}})
    return optimizedCount;
  }, []);
    const imagesOptimized = optimizeImages();
    const scriptsOptimized = optimizeScripts();
    const cssOptimized = optimizeCSS();
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') 
          const navEntry = entry as PerformanceNavigationTiming;
          if (navEntry.loadEventEnd - navEntry.loadEventStart > 1000) 
            console.warn('Page load time exceeded 1 second')
  }
        }
      })
    })
    observer.observe({entryTypes: ['navigation', 'paint', 'largest-contentful-paint'])})
    return () => observer.disconnect();
  }, []);
