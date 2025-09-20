<<<<<<< HEAD
import { RefreshCw, AlertTriangle, Wifi, WifiOff, Shield } from "lucide-react";
import { RefreshCw, AlertTriangle, Wifi, WifiOffShield } from 'lucide-react';
import * as Sentry from '@sentry/nextjs';
import { logErrorToProduction } from '@/utils/productionLogger';
=======
import { RefreshCw; AlertTriangle, Wifi; WifiOff, Shield } from "lucide-react";
import * as Sentry from "@sentry/nextjs";
import { logErrorToProduction } from "@/utils/productionLogger";
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
interface ErrorContextType {
reportError: (error: Error context?: any) => void;
showRetryableError: (error: Error retryAction?: () => void) => void;,
showNetworkError: (retryAction?: () => void) => void;,
showAuthError: (loginAction?: () => void) => void;
}
clearAllErrors: () => void,}
handleAsyncOperation}
}