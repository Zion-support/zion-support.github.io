
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { toast  } from '@/hooks/use-toast';
import { Button  } from '@/components/ui/button';
import React, {
  createContext
  useContext
  useState
  useCallback
  ReactNode
} from 'react'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from 'lucide-react'
import * as Sentry from '@sentry/nextjs';
import {logErrorToProduction} from '@/utils/productionLogger';

interface ErrorContextType {
  reportError: (error: Error, context?: any) => void;
origin/cursor/automate-test-improve-and-merge-code-2533
  showRetryableError: (error: Error, retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;
  showAuthError: (loginAction?: () => void) => void;

  clearAllErrors: () => void



    handleAsyncOperation}
}
origin/cursor/automate-test-improve-and-merge-code-2533

    ): Promise<T | null> => {;

const ErrorContext = createContext<ErrorContextType | null>(null),;

  const [retryCount, setRetryCount] = useState<Record<string number>>({}),;
pr-12325
