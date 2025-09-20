import import React { Component ReactNode } from 'react';
import import { QueryClient,,, ,,  } from '@tanstack/react-query';
import import * as Sentry from '@sentry/nextjs';
import import { Button,,, ,,  } from '@/components/ui/button';
import import { Alert,,, AlertDescription,,, AlertTitle,,, ,,  } from '@/components/ui/alert';
import { RefreshCw,,, WifiOff,,  } from 'lucide-react'
import import { logErrorToProduction } from '@/utils/productionLogger';
interface ApiErrorBoundaryProps {
  children: ReactNode;
  queryClient?: QueryClient;
  fallback?: ReactNode,
}
