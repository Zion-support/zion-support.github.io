import React, { useEffect, useCallback } from 'react';

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, []);

          ticking = false;
        });
        ticking = true;
      }
    };
