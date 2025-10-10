
// Performance monitoring script;
<<<<<<< HEAD
(function() {}
  'use strict';
  // Monitor Core Web Vitals;
  function observeWebVitals() {}
    if ('PerformanceObserver' in window) {}
=======

(function() {
  'use strict;

  // Monitor Core Web Vitals;

  function observeWebVitals() {
    if ('PerformanceObserver' in window) {
>>>>>>> origin/main
      // LCP;

      new PerformanceObserver((list) => {;
<<<<<<< HEAD
const _entries="list.getEntries();"
        const _lastEntry = "entries[entries.length - 1];"
//         }).observe({ entryTypes: ['largest-contentful-paint'] });
=======

const _entries = list.getEntries();;

        const _lastEntry = entries[entries.length - 1];;

//         }).observe({ entryTypes: ['largest-contentful-paint] });

>>>>>>> origin/main
      // FID;

      new PerformanceObserver((list) => {;
<<<<<<< HEAD
const _entries="list.getEntries();"
        entries.forEach((entry) => {}
=======

const _entries = list.getEntries();;

        entries.forEach((entry) => {
>>>>>>> origin/main
(function() {/* TODO: Fix JSX expression */}

}

    if ('PerformanceObserver' in window) {/* TODO: Fix JSX expression */}

//         }).observe({/* TODO: Fix JSX expression */})
<<<<<<< HEAD
  s: ['largest-contentful-paint'] });
=======
  s: ['largest-contentful-paint] });

>>>>>>> origin/main
      // FID;

      new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}

//           })}).observe({/* TODO: Fix JSX expression */})
<<<<<<< HEAD
  s: ['first-input'] });
      // CLS;
      let _clsValue="0;"
=======
  s: ['first-input] });

      // CLS;

      let _clsValue = 0;;

>>>>>>> origin/main
      new PerformanceObserver((list) => {/* TODO: Fix JSX expression */}

          }

        });

//         }).observe({/* TODO: Fix JSX expression */})
  s: ['layout-shift'] })}

  }

  // Start monitoring when DOM is ready;
<<<<<<< HEAD
  if (document.readyState === 'loading') {}
    document.addEventListener('DOMContentLoaded', observeWebVitals)} else {}
=======

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeWebVitals)} else {
>>>>>>> origin/main
    observeWebVitals();

  if (document.readyState === 'loading') {/* TODO: Fix JSX expression */}

  } else {/* TODO: Fix JSX expression */}

  }
<<<<<<< HEAD
})();
=======

})();
>>>>>>> origin/main
