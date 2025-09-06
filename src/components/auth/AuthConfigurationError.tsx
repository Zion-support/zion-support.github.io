import React from 'react',
import Link from 'next/link';
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
interface AuthConfigurationErrorProps {
  onRetry?: () => void;
  showSetupButton?: boolean
}

export function AuthConfigurationError({ onRetry, showSetupButton;
