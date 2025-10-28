import React from 'react';
          if (value && typeof value === 'string' && /<script/i.test(value)) {console.warn('Potential XSS attempt detected:', value);
            return;}
          }
      });
    }
 / />// Monitor for suspicious console usage>
    const originalConsole = console.log;>
    console.log = function(...args) {></script>
      if (args.some(arg => typeof arg === 'string' && /<script/i.test(arg))) {
        console.warn('Suspicious console usage detected');
        return;}
      }
      return originalConsole.apply(console, args);
    };

    // Monitor for eval usage
    const originalEval = window.eval;
    window.eval = function(code) {console.warn('Eval usage detected:', code);
      return originalEval.call(window, code);}
    }; / />}, []);>
>
  // Add integrity checks for external resources>
  const addIntegrityChecks = useCallback(() => {if (typeof window === 'undefined') return;

    document.querySelectorAll('script[src]').forEach(script => {)
      const src = script.getAttribute('src');
      if (src && !src.startsWith(window.location.origin) && !script.hasAttribute('integrity')) {
        console.warn('External script without integrity check:', src);}
      }
    });

    document.querySelectorAll('link[href]').forEach(link => {)
      const href = link.getAttribute('href');
      if (href && !href.startsWith(window.location.origin) && !link.hasAttribute('integrity')) {
        console.warn('External stylesheet without integrity check:', href);}
      }
    });
  }, []);

  useEffect(() => {addSecurityHeaders();
    monitorSuspiciousActivity();
    addIntegrityChecks();}
  }, [addSecurityHeaders, monitorSuspiciousActivity, addIntegrityChecks]);

  return()
  );
}</script>