'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, AlertTriangle, Wifi, WifiOff, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

              Retry {retryCount}/{maxRetries}
            </p>;
          )}
        </div>;
        {retryCount < maxRetries && (;

  importFn,;
  fallback,;
  errorFallback,;
  loadingComponent,;
  enableRetry = true,;
  maxRetries = 3,;
  prefetch = false,;
  className,;
  children,;
  ...props;

    if (prefetch) {;
      const prefetchTimer = setTimeout(() => {;
        loadComponent();
      }, 100);

  // Update online status;
  useEffect(() => {;
    setLoadingState(prev => ({ ...prev, isOnline }));
  }, [isOnline]);

        </AnimatePresence>;
      </Suspense>;
    );
  }

