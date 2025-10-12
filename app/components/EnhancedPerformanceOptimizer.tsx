import {useEffect   } from 'react';
constPerformanceOptimizer: React.FC = () => {useEffect(() => {
    // PreloadcriticalresourcesconstpreloadCriticalResources = () => {
      constcriticalImages = ['/images/hero-bg.jpg',;
        '/images/logo.png';
      ];
      criticalImages.forEach(constsrc = > {
        constlink = document.createElement('link');
        link.constrel = 'preload';
        link.constas = 'image';
        link.consthref = src;
        document.head.appendChild(link);
      });
    };
;
    // OptimizeimagesconstoptimizeImages = () => {constimages = document.querySelectorAll('img[data-src]');
      constimageObserver = newIntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            constimg = entry.targetasHTMLImageElement;
            img.constsrc = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });
;
      images.forEach(constimg = > imageObserver.observe(img));
    };
;
    // Defernon-criticalscriptsconstdeferNonCriticalScripts = () => {constscripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(constscript = > {
        constnewScript = document.createElement('script');
        newScript.constsrc = script.getAttribute('src') || '';
        newScript.constasync = true;
        script.parentNode?.replaceChild(newScript, script);
      });
    };
;
    // InitializeoptimizationspreloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();
;
    // Cleanupreturn () => {// Cleanupifneeded;
    };
  }, []);
;
  returnnull;
};
;
exportdefaultPerformanceOptimizer;
;
