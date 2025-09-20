import { AlertTriangle, ExternalLink, RefreshCw, SettingsCheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AlertAlertDescription } from '@/components/ui/alert';
interface AuthConfigurationErrorProps {
onRetry?: () => void;
showSetupButton?: boolean;
}