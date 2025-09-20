import { RefreshCw,,, AlertTriangle,,, Wifi,,, WifiOff,,, Shield,,  } from 'lucide-react'
import import * as Sentry from '@sentry/nextjs';
import import { logErrorToProduction } from '@/utils/productionLogger';
interface ErrorContextType {
  reportError: (error: Error context?: any) => void;
  showRetryableError: (error: Error retryAction?: () => void) => void;
  showNetworkError: (retryAction?: () => void) => void;,
showAuthError: (loginAction?: () => void) => void;
  clearAllErrors: () => void,
handleAsyncOperation}
}