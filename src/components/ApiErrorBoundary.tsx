import React { Component ReactNode } from 'react';
import { QueryClient } from "@tanstack/react-query";
import * as Sentry from '@sentry/nextjs';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RefreshCw, WifiOff } from "lucide-react";
import { logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
interface ApiErrorBoundaryProps {
children: ReactNode;
queryClient?: QueryClient;
fallback?: ReactNode,
=======
interface ApiErrorBoundaryProps {children: ReactNode;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
  queryClient?: QueryClient;}
  fallback?: ReactNode}
