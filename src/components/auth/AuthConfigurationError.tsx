<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

import React from 'react'
import Link from 'next/link'
import {
<<<<<<< HEAD
  AlertTriangle
  ExternalLink
  RefreshCw
  Settings
  CheckCircle
import React from 'react'
import Link from 'next/link'
import {
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Settings,;
  CheckCircle;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
} from 'lucide-react'; import { Button } from '@/components/ui/button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
interface AuthConfigurationErrorProps {
  onRetry?: () => void;
  showSetupButton?: boolean

export function AuthConfigurationError({
  onRetry
  showSetupButton = true
}: AuthConfigurationErrorProps) {
  const handleRefresh = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload() }
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
export function AuthConfigurationError({ onRetry, showSetupButton = true }: AuthConfigurationErrorProps) {
  const handleRefresh = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload()
    }
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
        {/* Main Error Card */}
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>
          <div className='text-center mb-6'>
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>
              <AlertTriangle className='h-8 w-8 text-red-600' />
            </div>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>
              Authentication Service Unavailable
            </h1>
            <p className='text-gray-600'>
              The sign-up system needs to be configured before users can create
              accounts
            </p>
          </div>
          <Alert variant='destructive' className='mb-6'>
            <AlertTriangle className='h-4 w-4' />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables
              are not configured. New users cannot sign up until this is
              resolved.            </AlertDescription>
          </Alert>
          {/* Technical Details */}        {/* Main Error Card */}
<<<<<<< HEAD
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import React from 'react',;
import Link from 'next/link',;
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
interface AuthConfigurationErrorProps {;
  onRetry?: () => void,;
  showSetupButton?: boolean;
}
;
export function AuthConfigurationError({ onRetry, showSetupButton = true }: AuthConfigurationErrorProps) {;
  const handleRefresh = () => {;
    if (onRetry) {;
      onRetry();
    } else {;
<<<<<<< HEAD
<<<<<<< HEAD
      window && window.location.reload();    }
      window.location.reload()
import React from 'react';
import Link from 'next / link';
import {
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Settings,
  CheckCircle,
} from 'lucide-react'; import { Button } from '@/components / ui / button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { Alert, AlertDescription } from '@/components / ui / alert';
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react';
interface AuthConfigurationErrorProps {
  on_retry?: () => void;
  showSetupButton?: boolean;
export /**
 * AuthConfigurationError - Function description
 */
function AuthConfigurationError() {
  const handle_refresh = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_retry ();
    } else {
      window.location.reload () }
  }
  return (
    <div className='min - h-screen bg - gradient - to - br from - red - 50 via - orange - 50 to - yellow - 50 flex items - center justify - center p - 4'>;
      <div className='max - w-2xl w - full'>;
export /**
 * AuthConfigurationError - Function description
 */
function AuthConfigurationError() {
  const handle_refresh = () =>: any {
    // Check condition
if ( {) {
  $2
}
      on_retry ();
    } else {
      window.location.reload ();

=======
      window.location.reload();
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    }
  },

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Authentication Service Unavailable
            </h1>
            <p className="text-gray-600">
              The sign-up system needs to be configured before users can create accounts
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD






=======
<<<<<<< HEAD
<<<<<<< HEAD
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured.
=======

=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======






>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>
          {/* Technical Details */}
<<<<<<< HEAD
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>
            <h3 className='font-semibold text-gray-900 mb-2'>
              Missing Configuration:
            </h3>
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• AUTH0_SECRET</li>
              <li>• AUTH0_BASE_URL</li>
              <li>• AUTH0_ISSUER_BASE_URL</li>
              <li>• AUTH0_CLIENT_ID</li>
              <li>• AUTH0_CLIENT_SECRET</li>
            </ul>
          </div>
          {/* Action Buttons */}
<<<<<<< HEAD
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>
            {showSetupButton && (
              <Button
                onClick={() =>
                  window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')
                }
                className='bg-blue-600 hover:bg-blue-700 text-white flex-1'              <Button
                onClick = {(,) => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {showSetupButton && (
              <Button 
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
<<<<<<< HEAD
            )}
            <Button
              onClick={handleRefresh}
              variant='outline'
              className='flex-1'            >
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />
  };
  return (;
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">;
      <div className="max-w-2xl w-full">;
        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">;
          <div className="text-center mb-6">;
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">;
              <AlertTriangle className="h-8 w-8 text-red-600" />;
            </div>;
            <h1 className="text-3xl font-bold text-gray-900 mb-2">;
              Authentication Service Unavailable;
            </h1>;
            <p className="text-gray-600">;
              The sign-up system needs to be configured before users can create accounts;
            </p>;
          </div>;

          <Alert variant="destructive" className="mb-6">;
            <AlertTriangle className="h-4 w-4" />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. ;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;

          {/* Technical Details */}
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>;
            <h3 className='font-semibold text-gray-900 mb-2'>;
              Missing Configuration:;
            </h3>;
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">;
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>;
            <ul className="text-sm text-gray-700 space-y-1">;
    <div className='min - h-screen bg - gradient - to - br from - red - 50 via - orange - 50 to - yellow - 50 flex items - center justify - center p - 4'>;
      <div className='max - w-2xl w - full'>;
        {/* Main Error Card */}
        <div className='bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6'>;
          <div className='text - center mb - 6'>;
            <div className='mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center'>;
              <AlertTriangle className='h - 8 w - 8 text - red - 600' />;
            </div>;
            <h1 className='text - 3xl font - bold text - gray - 900 mb - 2'>;
              Authentication Service Unavailable;
            </h1>;
            <p className='text - gray - 600'>;
              The sign - up system needs to be configured before users can create;
              accounts;
            </p>;
          </div>;
          <Alert variant='destructive' className='mb - 6'>;
            <AlertTriangle className='h - 4 w - 4' />;
            <AlertDescription>;
              <strong > Critical Issue #1:</strong> Auth0 environment variables;
              are not configured. New users cannot sign up until this is;
              resolved.            </AlertDescription>;
          </Alert>;
          {/* Technical Details */}        {/* Main Error Card */}
        <div className="bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6">;
          <div className="text - center mb - 6">;
            <div className="mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center">;
              <AlertTriangle className="h - 8 w - 8 text - red - 600" />;
            </div>;
            <h1 className="text - 3xl font - bold text - gray - 900 mb - 2">;
              Authentication Service Unavailable;
            </h1>;
            <p className="text - gray - 600">;
              The sign - up system needs to be configured before users can create accounts;
            </p>;
          </div>;
          <Alert variant="destructive" className="mb - 6">;
            <AlertTriangle className="h - 4 w - 4" />;
            <AlertDescription>;
              <strong > Critical Issue #1:</strong> Auth0 environment variables are not configured.;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;
          {/* Technical Details */}
          <div className='bg - gray - 50 rounded - lg p - 4 mb - 6'>;
            <h3 className='font - semibold text - gray - 900 mb - 2'>;
              Missing Configuration:;
            </h3>;
            <ul className='text - sm text - gray - 700 space - y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg - gray - 50 rounded - lg p - 4 mb - 6">;
            <h3 className="font - semibold text - gray - 900 mb - 2">Missing Configuration:</h3>;
            <ul className="text - sm text - gray - 700 space - y-1">;
              <li>• AUTH0_SECRET</li>;
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;
          </div>;

                onClick = {(,) => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1";
              >;
                <Settings className='w-4 h-4 mr-2' />;
                Setup Guide;
              </Button>;

            )}
            <Button
              onClick={handleRefresh}
              variant='outline'

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {showSetupButton && (
              <Button 
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
            )}
            
            <Button 
              onClick={handleRefresh}
              variant="outline" 
              className="flex-1"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              Check Again
            </Button>
          </div>
          {/* Quick Setup Steps */}
<<<<<<< HEAD



          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Setup Steps:</h3>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">1</span>
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                <div>
                  <strong>Create Auth0 Account:</strong>
                  <br />
                  <a 
                    href="https://manage.auth0.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </li>
<<<<<<< HEAD
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  2
                </span>                <div>                <div>
                  <strong>Create Auth0 Account:</strong>
                  <br />
                  <a
                    href="https://manage.auth0.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                <div>
                  <strong>Create Application:</strong>
                  <br />
                  Create a "Regular Web Application" named "Zion AI Marketplace"
                </div>
              </li>
<<<<<<< HEAD
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                    className='text-blue-600 hover:underline inline-flex items-center gap-1'>;
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;
                  </a>;
                </div>;
              </li>;

              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;
                  2;
                </span>                <div>                <div>;
                  <strong>Create Auth0 Account:</strong>;
                  <br />;
                  <a
                    href="https://manage && manage.auth0.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1">;
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />;
                  </a>;
                </div>;
              </li>;

              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>;
                <div>;
                  <strong>Create Application:</strong>;
          {/* Action Buttons */}
          <div className='flex flex - col sm:flex - row gap - 3 mb - 6'>;
            {showSetupButton && (
              <Button;
                on_click={() =>;
                  window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank');
                }
                className='bg - blue - 600 hover:bg - blue - 700 text - white flex - 1'              <Button;
                on_click = {(, ) => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'), }
                className="bg - blue - 600 hover:bg - blue - 700 text - white flex - 1";
              >;
                <Settings className='w - 4 h - 4 mr - 2' />;
                Setup Guide;
              </Button>)}
            <Button;
              on_click={handle_refresh}
              variant='outline';
              className='flex - 1'            >;
              <RefreshCw className='w - 4 h - 4 mr - 2' />              Check Again              <RefreshCw className="w - 4 h - 4 mr - 2" />;
              Check Again;
            </Button>;
          </div>;
          {/* Quick Setup Steps */}
          <div className='border - t pt - 6'>;
            <h3 className='font - semibold text - gray - 900 mb - 3'>;
              Quick Setup Steps:;
            </h3>;
            <ol className='space - y-3 text - sm'>;
              <li className='flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  1;
                </span>;
                <div>;
                  <strong > Create Auth0 Account:</strong>;
                  <br />;
                  <a;
                    href='https://manage.auth0.com/';
                    target='_blank';
                    rel='noopener noreferrer';
                    className='text - blue - 600 hover:underline inline - flex items - center gap - 1';
                  >;
                    Visit Auth0 Dashboard <ExternalLink className='w - 3 h - 3' />;
                  </a>;
                </div>;
              </li>;
              <li className='flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  2;
                </span>                <div>                <div>;
                  <strong > Create Auth0 Account:</strong>;
                  <br />;
                  <a;
                    href="https://manage.auth0.com/";
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text - blue - 600 hover:underline inline - flex items - center gap - 1";
                  >;
                    Visit Auth0 Dashboard <ExternalLink className="w - 3 h - 3" />;
                  </a>;
                </div>;
              </li>;
              <li className="flex items - start gap - 3">;
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold">2</span>;
                <div>;
                  <strong > Create Application:</strong>;
                  <br />;
                  Create a "Regular Web Application" named "Zion AI Marketplace";
                </div>;
              </li>;

                  file;
                </div>;
              </li>;

              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;
                  4;
                </span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;

                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>;
                    npm run dev;
                  </code>{' '}
                  to apply changes                </div>                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                <div>

                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                </div>
              </li>
              <li className="flex items-start gap-3">

              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                </div>
              </li>
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* Alternative Actions Card */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Alternative Actions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link 
              href="/marketplace" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>Browse Marketplace</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
            <Link
              href="/talent"
            
            <Link 
              href="/talent" 
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
            
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            <Link 
              href="/talent" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>View Talent Pool</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
            <Link 
              href="/help" 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>Contact Support</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            

            


=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            <Link 
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
              <ExternalLink className='w-4 h-4' />
            </Link>
            <Link
              href='/talent'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>View Talent Pool</span>
              <ExternalLink className='w-4 h-4' />
            </Link>
            <Link
              href='/help'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>Contact Support</span>
              <ExternalLink className='w-4 h-4' />
            </Link>
            <Link
              href='/status'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'
            >
              <span>System Status</span>
              <ExternalLink className='w-4 h-4' />            </Link>              <ExternalLink className="w-4 h-4" />
            </Link>
=======
=======
              <ExternalLink className="w-4 h-4" />
            </Link>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          </div>
        </div>
        {/* Setup Script Info */}
        {showSetupButton && (
<<<<<<< HEAD
          <div className='mt-6 text-center'>
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>
                <CheckCircle className='w-5 h-5' />
                <span className='font-semibold'>Automated Setup Available</span>
          <div className="mt-6 text-center">
            <div className="bg-green-50 rounded-lg border border-green-200 p-4">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Automated Setup Available</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                npm run setup:auth0
              </code>
            </div>
          </div>
        )}
        {/* Footer */}
<<<<<<< HEAD



        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}

            >

            <button 
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className="text-blue-600 hover: underline"
            >
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              AUTH0_SETUP_GUIDE_ISSUE_1.md
            </button>
          </p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
export default AuthConfigurationError }
export default AuthConfigurationError
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default AuthConfigurationError };
;
export default AuthConfigurationError;
}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
  )
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        <div className="mt-6 text-center text-sm text-gray-500">;
          <p>;
            For detailed instructions, see{' '}
            <button;
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className="text-blue-600 hover: underline";
            >;
              AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
          </p>;
        </div>;
      </div>;
    </div>;
  );
}
;
export default AuthConfigurationError;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
