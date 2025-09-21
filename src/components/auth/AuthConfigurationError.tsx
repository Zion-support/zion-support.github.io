import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react',
import { Button } from '@/components/ui/button',
import { Alert, AlertDescription } from '@/components/ui/alert',
interface AuthConfigurationErrorProps {
  onRetry?: () => void;
  showSetupButton?: boolean;
  error?: string;
  onSetup?: () => void, }

export function AuthConfigurationError({ 
  onRetry, 
  showSetupButton = true, 
  error = "Authentication configuration is missing or invalid",
  onSetup 
}: AuthConfigurationErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Authentication Configuration Error
          </h2>
          <p className="text-gray-600 mb-6">
            {error}
          </p>
        </div>

        <Alert className="border-destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Please check your authentication configuration and ensure all required environment variables are set correctly.
          </AlertDescription>
        </Alert>

        <div className="space-y-3">
          {onRetry && (
            <Button 
              onClick={onRetry} 
              className="w-full"
              
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry Configuration
            </Button>
          )}

          {showSetupButton && onSetup && (
            <Button 
              onClick={onSetup} 
              className="w-full"
            >
              <Settings className="h-4 w-4 mr-2" />
              Open Setup Guide
            </Button>
          )}

          <Button 
             
            className="w-full"
            onClick={() => window.open('https://docs.ziontechgroup.com/auth-setup', '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Documentation
          </Button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Quick Setup Checklist: </p>
              <ul className="list-disc list-inside space-y-1 text-blue-700">
                <li>Verify environment variables are set</li>
                <li>Check authentication provider configuration</li>
                <li>Ensure API keys are valid and not expired</li>
                <li>Test authentication endpoints</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
