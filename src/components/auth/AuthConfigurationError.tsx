import React from 'react',
import Link from 'next/link',
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { Alert, AlertDescription } from '@/components/ui/alert',

interface AuthConfigurationErrorProps {
  onRetry?: () => void,
  showSetupButton?: boolean
}

export function AuthConfigurationError({ onRetry, showSetupButton = true }: AuthConfigurationErrorProps) {
  const handleRefresh = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload()
    }
  },

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4&quot;>
      <div className=&quot;max-w-2xl w-full&quot;>
        {/* Main Error Card */}
        <div className=&quot;bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6&quot;>
          <div className=&quot;text-center mb-6&quot;>
            <div className=&quot;mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center&quot;>
              <AlertTriangle className=&quot;h-8 w-8 text-red-600&quot; />
            </div>
            <h1 className=&quot;text-3xl font-bold text-gray-900 mb-2&quot;>
              Authentication Service Unavailable
            </h1>
            <p className=&quot;text-gray-600&quot;>
              The sign-up system needs to be configured before users can create accounts
            </p>
          </div>

          <Alert variant=&quot;destructive&quot; className=&quot;mb-6&quot;>
            <AlertTriangle className=&quot;h-4 w-4&quot; />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>

          {/* Technical Details */}
          <div className=&quot;bg-gray-50 rounded-lg p-4 mb-6&quot;>
            <h3 className=&quot;font-semibold text-gray-900 mb-2&quot;>Missing Configuration:</h3>
            <ul className=&quot;text-sm text-gray-700 space-y-1&quot;>
              <li>• AUTH0_SECRET</li>
              <li>• AUTH0_BASE_URL</li>
              <li>• AUTH0_ISSUER_BASE_URL</li>
              <li>• AUTH0_CLIENT_ID</li>
              <li>• AUTH0_CLIENT_SECRET</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className=&quot;flex flex-col sm:flex-row gap-3 mb-6&quot;>
            {showSetupButton && (
              <Button 
<<<<<<< HEAD
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
=======
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')}
                className=&quot;bg-blue-600 hover:bg-blue-700 text-white flex-1&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              >
                <Settings className=&quot;w-4 h-4 mr-2&quot; />
                Setup Guide
              </Button>
            )}
            
            <Button 
              onClick={handleRefresh}
              variant=&quot;outline&quot; 
              className=&quot;flex-1&quot;
            >
              <RefreshCw className=&quot;w-4 h-4 mr-2&quot; />
              Check Again
            </Button>
          </div>

          {/* Quick Setup Steps */}
          <div className=&quot;border-t pt-6&quot;>
            <h3 className=&quot;font-semibold text-gray-900 mb-3&quot;>Quick Setup Steps:</h3>
            <ol className=&quot;space-y-3 text-sm&quot;>
              <li className=&quot;flex items-start gap-3&quot;>
                <span className=&quot;flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold&quot;>1</span>
                <div>
                  <strong>Create Auth0 Account:</strong>
                  <br />
                  <a 
                    href=&quot;https://manage.auth0.com/&quot; 
                    target=&quot;_blank&quot; 
                    rel=&quot;noopener noreferrer&quot;
                    className=&quot;text-blue-600 hover:underline inline-flex items-center gap-1&quot;
                  >
                    Visit Auth0 Dashboard <ExternalLink className=&quot;w-3 h-3&quot; />
                  </Link>
                </div>
              </li>
              
              <li className=&quot;flex items-start gap-3&quot;>
                <span className=&quot;flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold&quot;>2</span>
                <div>
                  <strong>Create Application:</strong>
                  <br />
                  Create a &quot;Regular Web Application&quot; named &quot;Zion AI Marketplace&quot;
                </div>
              </li>
              
              <li className=&quot;flex items-start gap-3&quot;>
                <span className=&quot;flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold&quot;>3</span>
                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className=&quot;bg-gray-100 px-1 rounded&quot;>.env.local</code> file
                </div>
              </li>
              
              <li className=&quot;flex items-start gap-3&quot;>
                <span className=&quot;flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold&quot;>4</span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
                  Run <code className=&quot;bg-gray-100 px-1 rounded&quot;>npm run dev</code> to apply changes
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Alternative Actions Card */}
        <div className=&quot;bg-blue-50 rounded-xl border border-blue-200 p-6&quot;>
          <h3 className=&quot;font-semibold text-blue-900 mb-3&quot;>Alternative Actions:</h3>
          <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;>
            <Link 
              href=&quot;/marketplace&quot; 
              className=&quot;flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800&quot;
            >
              <span>Browse Marketplace</span>
              <ExternalLink className=&quot;w-4 h-4&quot; />
            </Link>
            
            <Link 
              href=&quot;/talent&quot; 
              className=&quot;flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800&quot;
            >
              <span>View Talent Pool</span>
              <ExternalLink className=&quot;w-4 h-4&quot; />
            </Link>
            
            <Link 
              href=&quot;/help&quot; 
              className=&quot;flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800&quot;
            >
              <span>Contact Support</span>
              <ExternalLink className=&quot;w-4 h-4&quot; />
            </Link>
            
            <Link 
              href=&quot;/status&quot; 
              className=&quot;flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800&quot;
            >
              <span>System Status</span>
              <ExternalLink className=&quot;w-4 h-4&quot; />
            </Link>
          </div>
        </div>

        {/* Setup Script Info */}
        {showSetupButton && (
          <div className=&quot;mt-6 text-center&quot;>
            <div className=&quot;bg-green-50 rounded-lg border border-green-200 p-4&quot;>
              <div className=&quot;flex items-center justify-center gap-2 text-green-700 mb-2&quot;>
                <CheckCircle className=&quot;w-5 h-5&quot; />
                <span className=&quot;font-semibold&quot;>Automated Setup Available</span>
              </div>
              <p className=&quot;text-sm text-green-600 mb-3&quot;>
                Run the setup script to configure Auth0 interactively:
              </p>
              <code className=&quot;bg-green-100 text-green-800 px-3 py-1 rounded text-sm&quot;>
                npm run setup:auth0
              </code>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className=&quot;mt-6 text-center text-sm text-gray-500&quot;>
          <p>
            For detailed instructions, see{' '}
            <button 
<<<<<<< HEAD
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className="text-blue-600 hover: underline"
=======
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')}
              className=&quot;text-blue-600 hover:underline&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            >
              AUTH0_SETUP_GUIDE_ISSUE_1.md
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthConfigurationError, 