
              <li>• AUTH0_SECRET</li>;
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;
          </div>;
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
;
interface AuthConfigurationErrorProps {;
  onRetry?:() => void,;
  showSetupButton?:boolean,;
}
export function AuthConfigurationError({ onRetry, showSetupButton = true } AuthConfigurationErrorProps) {;
  const handleRefresh = () => {;
    if (onRetry) {;
      onRetry(),;
    } else {;
      window.location.reload(),;
  },;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">;"
</div>"
      <div className="max-w-2xl w-full">;"
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">;"
          <div className="text-center mb-6">;"
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">;"
              <AlertTriangle className="h-8 w-8 text-red-600" />;"

            </div>;"
            <h1 className="text-3xl font-bold text-gray-900 mb-2">;"
</h1>
            </h1>;"
            <p className="text-gray-600">;"
</p>
            </p>;
          <Alert variant="destructive" className="mb-6">;"
"
            <AlertTriangle className="h-4 w-4" />;"

            <AlertDescription>;

              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. ;
          ;"
          <div className="bg-gray-50 rounded-lg p-4 mb-6">;"
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>;""
            <ul className="text-sm text-gray-700 space-y-1">;"
</ul>
            </ul>;
          <div className="flex flex-col sm:flex-row gap-3 mb-6">;"
</div>
              <Button ;)"
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
className="bg-blue-600 hover:bg-blue-700 text-white flex-1";
              >;
                <Settings className="w-4 h-4 mr-2" />;
                Setup Guide;
              </Button>;
            )}
            ;
            <Button ;
              onClick={handleRefresh}
            >;
              <RefreshCw className="w-4 h-4 mr-2" />;"

          <div className="border-t pt-6">;"
            <h3 className="font-semibold text-gray-900 mb-3">Quick Setup Steps:</h3>;""
            <ol className="space-y-3 text-sm">;"
</ol>"
              <li className="flex items-start gap-3">;"
</li>"
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">1</span>;"
                <div>;
                  <strong>Create Auth0 Account:</strong>;
                  <br />;
<a ;
                    href="https://manage.auth0.com/" ;
                    target="_blank" ;
                    rel="noopener noreferrer";
                    className="text-blue-600 hover:underline inline-flex items-center gap-1";
                  >;
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />;
                  </a>;
                </div>;
              </li>;
              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>;
                <div>;
                  <strong>Create Application:</strong>;

              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes;

              <p className="text-sm text-green-600 mb-3">;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">;
                npm run setup:auth0;
              </code>;
            </div>;

              AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
          </p>;
        </div>;
      </div>;

}<p> For detailed instructions, see {;
}<button ;
}export default AuthConfigurationError;
'"
