<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

=======
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

import React from 'react'
import Link from 'next/link'
import {
  AlertTriangle
  ExternalLink
  RefreshCw
  Settings
  CheckCircle
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Settings,;
  CheckCircle;
} from 'lucide-react'; import { Button } from '@/components/ui/button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
interface AuthConfigurationErrorProps {
  onRetry?: () => void;
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
      window.location.reload();
    }
  },

export function AuthConfigurationError(): any ({;
  onRetry,;
  showSetupButton = true,;
}: AuthConfigurationErrorProps) {;
  const handleRefresh = () => {;
    if (onRetry) {;
      onRetry();
    } else {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    }
  };

  return (
<<<<<<< HEAD



=======
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
ursor/fix-website-loading-errors-and-merge-6662
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">

=======
    }
  },

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured.



=======












>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
<<<<<<< HEAD
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>
            <h3 className='font-semibold text-gray-900 mb-2'>
              Missing Configuration:
            </h3>
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>
          {/* Technical Details */}



<<<<<<< HEAD

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li> AUTH0_SECRET</li>
              <li> AUTH0_BASE_URL</li>
              <li> AUTH0_ISSUER_BASE_URL</li>
              <li> AUTH0_CLIENT_ID</li>
              <li> AUTH0_CLIENT_SECRET</li>
            </ul>
          </div>
<<<<<<< HEAD
          {/* Action Buttons */}
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className='bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6'>;
          <div className='text-center mb-6'>;
            <div className='mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center'>;
              <AlertTriangle className='h-8 w-8 text-red-600' />;
            </div>;
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>;
              Authentication Service Unavailable;
            </h1>;
            <p className='text-gray-600'>;
              The sign-up system needs to be configured before users can create;
              accounts;
            </p>;
          </div>;

          <Alert variant='destructive' className='mb-6'>;
            <AlertTriangle className='h-4 w-4' />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables;
              are not configured. New users cannot sign up until this is;
              resolved.            </AlertDescription>;
          </Alert>;

          {/* Technical Details */}        {/* Main Error Card */}

<<<<<<< HEAD
=======
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {showSetupButton && (
              <Button 
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}


                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  };
  return (;
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">;
      <div className="max-w-2xl w-full">;
        {/* Main Error Card */}
<<<<<<< HEAD

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
=======
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
            <ul className='text-sm text-gray-700 space-y-1'>              <li> AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">;
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
            <ul className='text - sm text - gray - 700 space - y-1'>              <li> AUTH0_SECRET</li>          <div className="bg - gray - 50 rounded - lg p - 4 mb - 6">;
            <h3 className="font - semibold text - gray - 900 mb - 2">Missing Configuration:</h3>;
            <ul className="text - sm text - gray - 700 space - y-1">;
<<<<<<< HEAD
import React from 'react',;
import Link from 'next/link',;
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Alert, AlertDescription } from '@/components/ui/alert',;
;
interface AuthConfigurationErrorProps {;
  onRetry?:() => void,;
  showSetupButton?:boolean,;
}
;
export function AuthConfigurationError({ onRetry, showSetupButton = true } AuthConfigurationErrorProps) {;
  const handleRefresh = () => {;
    if (onRetry) {;
      onRetry(),;
    } else {;
      window.location.reload(),;
    }
  },;
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            )}
            <Button
              onClick={handleRefresh}
              variant='outline'
<<<<<<< HEAD
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
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured.;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;
          {/* Technical Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">;
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>;
            <ul className="text-sm text-gray-700 space-y-1">;
              <li>• AUTH0_SECRET</li>;
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;
          </div>;
;
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">;
            {showSetupButton && (;
              <Button ;
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">;
            {showSetupButton && (;
              <Button;
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1";
              >;
                <Settings className="w-4 h-4 mr-2" />;
                Setup Guide;
              </Button>;
            )}
;
            <Button;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              onClick={handleRefresh}
              variant="outline" 
              className="flex-1"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD

=======
              Check Again
            </Button>
          </div>
          {/* Quick Setup Steps */}
          <div className='border-t pt-6'>
            <h3 className='font-semibold text-gray-900 mb-3'>
              Quick Setup Steps:
            </h3>
            <ol className='space-y-3 text-sm'>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
            )}
            ;
            <Button ;
              onClick={handleRefresh}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

              Check Again
            </Button>
          </div>
          {/* Quick Setup Steps */}
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Setup Steps:</h3>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">1</span>
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  2
                </span>                <div>                <div>
                  <strong>Create Auth0 Account:</strong>
                  <br />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <a
                    href="https://manage.auth0.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />
<<<<<<< HEAD
                  </a>
                </div>
              </li>
<<<<<<< HEAD
=======
              
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                <div>
                  <strong>Create Application:</strong>
                  <br />
                  Create a "Regular Web Application" named "Zion AI Marketplace"
                </div>
              </li>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
<<<<<<< HEAD
=======
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  4
                </span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

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
<<<<<<< HEAD
              variant="outline" ;
              className="flex-1";
            >;
              <RefreshCw className="w-4 h-4 mr-2" />;
              Check Again;
            </Button>;
          </div>;
;
          {/* Quick Setup Steps */}
          <div className="border-t pt-6">;
            <h3 className="font-semibold text-gray-900 mb-3">Quick Setup Steps:</h3>;
            <ol className="space-y-3 text-sm">;
              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">1</span>;
                <div>;
                  <strong>Create Auth0 Account:</strong>;
                  <br />;
                  <a ;
                    href="https://manage.auth0.com/" ;
                    target="_blank" ;
                    rel="noopener noreferrer";
                    className="text-blue-600 hover:underline inline-flex items-center gap-1";
                  >;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />;
                  </a>;
                </div>;
              </li>;
<<<<<<< HEAD
              ;
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>;
                    npm run dev;
                  </code>{' '}
<<<<<<< HEAD
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                <div>
                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>
                    npm run dev
                  </code>{' '}
                  to apply changes                </div>                <div>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                </div>
              </li>
              <li className="flex items-start gap-3">
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

              
              <li className="flex items-start gap-3">
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />



<<<<<<< HEAD
<<<<<<< HEAD
            <Link
              href="/help"
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"

=======
=======
                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                </div>
              </li>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
                </div>
              </li>
            </ol>
          </div>
        </div>
<<<<<<< HEAD
                  to apply changes                </div>                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env && env.local</code> file;
                </div>;
              </li>;
              ;
              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>;
                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file;
                </div>;
              </li>;
              ;
              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes;
              <li className='flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  3;
                </span>;
                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;
                  Copy credentials to{' '}
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    .env.local;
                  </code>{' '}
                  file;
                </div>;
              </li>;
              <li className='flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  4;
                </span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;
                  Run{' '}
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    npm run dev;
                  </code>{' '}
                  to apply changes                </div>                <div>;
                  <strong > Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className="bg - gray - 100 px - 1 rounded">.env.local</code> file;
                </div>;
              </li>;
              <li className="flex items - start gap - 3">;
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold">4</span>;
                <div>;
                  <strong > Restart Application:</strong>;
                  <br />;
                  Run <code className="bg - gray - 100 px - 1 rounded">npm run dev</code> to apply changes;
                </div>;
              </li>;
            </ol>;
          </div>;
        </div>;
        {/* Alternative Actions Card */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Alternative Actions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link 
              href="/marketplace" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            >
              <span>Browse Marketplace</span>            >
              <span>Browse Marketplace</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
            <Link 
              href="/talent" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            <Link
              href="/talent"
            
              href="/talent" 
            <Link
              href="/talent"
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            
            <Link 
              href="/talent" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>View Talent Pool</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
            <Link 
              href="/help" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            <Link
              href="/help"
            
              href="/help" 
            <Link
              href="/help"
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


            
            <Link 
              href="/help" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>Contact Support</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
            <Link
              href="/status"
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
            
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            

            
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            <Link 
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            
            <Link 
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
=======


=======
              <ExternalLink className="w-4 h-4" />
            </Link>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          </div>
        </div>
        {/* Setup Script Info */}
        {showSetupButton && (
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <div className="mt-6 text-center">
            <div className="bg-green-50 rounded-lg border border-green-200 p-4">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Automated Setup Available</span>



              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>

<<<<<<< HEAD
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Setup Script Info */}
        {showSetupButton && (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <div className='mt-6 text-center'>
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>
                <CheckCircle className='w-5 h-5' />
                <span className='font-semibold'>Automated Setup Available</span>
<<<<<<< HEAD
=======
          <div className="mt-6 text-center">
            <div className="bg-green-50 rounded-lg border border-green-200 p-4">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Automated Setup Available</span>
              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                npm run setup:auth0
              </code>
            </div>
          </div>
        )}

<<<<<<< HEAD
            <Link
              href="/talent" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;
              <span>View Talent Pool</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            <Link
              href="/help" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;
              <span>Contact Support</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            <Link
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;
              <span>System Status</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
            <Link
              href='/talent'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>View Talent Pool</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
            <Link
              href='/help'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Contact Support</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
            <Link
              href='/status'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>System Status</span>;
              <ExternalLink className='w-4 h-4' />            </Link>              <ExternalLink className="w-4 h-4" />;
            </Link>;
          </div>;
        </div>;

        {/* Setup Script Info */}
        {showSetupButton && (;
          <div className='mt-6 text-center'>;
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>;
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>;
                <CheckCircle className='w-5 h-5' />;
                <span className='font-semibold'>Automated Setup Available</span>;
              </div>;
              <p className='text-sm text-green-600 mb-3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0              </div>;
;
        {/* Alternative Actions Card */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">;
          <h3 className="font-semibold text-blue-900 mb-3">Alternative Actions:</h3>;
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">;
            <Link ;
              href="/marketplace" ;
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800";
            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            ;
            <Link ;
              href="/talent" ;
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800";
            >;
              <span>View Talent Pool</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            ;
            <Link ;
              href="/help" ;
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800";
            >;
              <span>Contact Support</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            ;
            <Link ;
              href="/status" ;
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800";
            >;
              <span>System Status</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
          </div>;
        </div>;
;
        {/* Setup Script Info */}
        {showSetupButton && (;
          <div className="mt-6 text-center">;
            <div className="bg-green-50 rounded-lg border border-green-200 p-4">;
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">;
                <CheckCircle className="w-5 h-5" />;
                <span className="font-semibold">Automated Setup Available</span>;
              </div>;
              <p className="text-sm text-green-600 mb-3">;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">;
                npm run setup:auth0;
              </code>;
            </div>;
        {/* Footer */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className='mt-6 text-center text-sm text-gray-500'>
          <p>
            For detailed instructions, see{' '}
            <button
              onClick={() =>
                window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')
              }
              className='text-blue-600 hover:underline'            >        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}
            <button
              onClick = {() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
              className="text-blue-600 hover: underline"
<<<<<<< HEAD
=======


        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}
            <button
            >
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}

            <button 
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className="text-blue-600 hover: underline"
            >

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
              AUTH0_SETUP_GUIDE_ISSUE_1.md
            </button>
          </p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
export default AuthConfigurationError }
export default AuthConfigurationError

=======

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}

export default AuthConfigurationError };
;
export default AuthConfigurationError;
}
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div className="mt-6 text-center text-sm text-gray-500">;
          <p>;
            For detailed instructions, see{' '}
            <button;
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
              className="text-blue-600 hover: underline";
              AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
          </p>;
        </div>;
      </div>;
    </div>;
  );
  );
}
export default AuthConfigurationError;}
export default AuthConfigurationError;
        {/* Alternative Actions Card */}
        <div className='bg - blue - 50 rounded - xl border border - blue - 200 p - 6'>;
          <h3 className='font - semibold text - blue - 900 mb - 3'>;
            Alternative Actions:;
          </h3>;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 gap - 3'>;
            <Link;
              href='/marketplace';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > Browse Marketplace</span>            >;
              <span > Browse Marketplace</span>;
              <ExternalLink className="w - 4 h - 4" />;
            </Link>;
            <Link;
              href="/talent";
              className="flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800";
            >;
              <span > View Talent Pool</span>;
              <ExternalLink className="w - 4 h - 4" />;
            </Link>;
            <Link;
              href="/help";
              className="flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800";
            >;
              <span > Contact Support</span>;
              <ExternalLink className="w - 4 h - 4" />;
            </Link>;
            <Link;
              href="/status";
              className="flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800";
            >;
              <span > System Status</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/talent';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > View Talent Pool</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/help';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > Contact Support</span>;
              <ExternalLink className='w - 4 h - 4' />;
            </Link>;
            <Link;
              href='/status';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
            >;
              <span > System Status</span>;
              <ExternalLink className='w - 4 h - 4' />            </Link>              <ExternalLink className="w - 4 h - 4" />;
            </Link>;
          </div>;
        </div>;
        {/* Setup Script Info */}
        {showSetupButton && (
          <div className='mt - 6 text - center'>;
            <div className='bg - green - 50 rounded - lg border border - green - 200 p - 4'>;
              <div className='flex items - center justify - center gap - 2 text - green - 700 mb - 2'>;
                <CheckCircle className='w - 5 h - 5' />;
                <span className='font - semibold'>Automated Setup Available</span>;
              </div>;
              <p className='text - sm text - green - 600 mb - 3'>;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className='bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm'>                npm run setup:auth0              </div>;
              <p className="text - sm text - green - 600 mb - 3">;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className="bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm">;
                npm run setup:auth0;
              </code>;
            </div>;
          </div>)}
        {/* Footer */}
        <div className='mt - 6 text - center text - sm text - gray - 500'>;
          <p>;
            For detailed instructions, see{' '}
            <button;
              on_click={() =>;
                window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank');
              }
              className='text - blue - 600 hover:underline'            >        <div className="mt - 6 text - center text - sm text - gray - 500">;
          <p>;
            For detailed instructions, see{' '}
            <button;
              on_click = {() => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'), }
              className="text - blue - 600 hover: underline";
          </div>;        )}
;
        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">;
          <p>;
            For detailed instructions, see{' '}
            <button ;
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className="text-blue-600 hover:underline";
            >;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  )
        <div className="mt-6 text-center text-sm text-gray-500">;
          <p>;
            For detailed instructions, see{' '}
            <button;
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
              className="text-blue-600 hover: underline";
<<<<<<< HEAD
            >;
              AUTH0_SETUP_GUIDE_ISSUE_1.md;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            </button>;
          </p>;
        </div>;
      </div>;
<<<<<<< HEAD
    </div>;
  );}
;
export default AuthConfigurationError, 
 export function AuthConfigurationError ({;
  onRetry, showSetupButton = true ;
}: AuthConfigurationErrorProps) {;
  const handleRefresh = () => {;
  if (onRetry) {;
  </div> <h1 className="text-3xl font-bold text-gray-900 mb-2" > Authentication Service Unavailable </h1> <p className="text-gray-600" > The sign-up system needs to be configured before users can create accounts </p> </div> <Alert variant="destructive" className="mb-6" > <AlertTriangle className="h-4 w-4" /> <AlertDescription> <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. New users cannot sign up until this is resolved. </AlertDescription> </Alert> <li>• AUTH0 SECRET</li> <li>• AUTH0 BASE URL</li> <li>• AUTH0 ISSUER BASE URL</li> <li>• AUTH0 CLIENT ID</li> <li>• AUTH0 CLIENT SECRET</li> </ul> </div> className="bg-blue-600 hover:bg-blue-700 text-white flex-1" w-4 h-4 mr-2"/> Setup Guide </Button>) ";
}<Button > <RefreshCw className=" w-4 h-4 mr-2"/> Check Again </Button> </div> <div> <strong>Create Auth0 Account:</strong> <br /> <a href=" https://manage.auth0.com/"target=" blank"rel=" noopener noreferrer"className=" text-blue-600 hover:underline inline-flex items-center gap-1"> Visit Auth0 Dashboard <ExternalLink className=" w-3 h-3"/> </Link> </div> </li> <li className=" flex items-start gap-3"> <span className=" flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span> <div> <strong>Create Application:</strong> <br /> Create a " Regular Web Application"named " Zion AI Marketplace"</div> </li> <li className=" flex items-start gap-3"> <span className=" flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span> <div> <strong>Configure Environment:</strong> <br /> Copy credentials to <code className=" bg-gray-100 px-1 rounded">.env.local</code> file </div> </li> <li className=" flex items-start gap-3"> <span className=" flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span> <div> <strong>Restart Application:</strong> <br /> Run <code className=" bg-gray-100 px-1 rounded">npm run dev</code> to apply changes </div> </li> </ol> </div> </div> <Link href=" /marketplace"className=" flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"> <span>Browse Marketplace</span> <ExternalLink className=" w-4 h-4"/> </Link> <Link href=" /talent"className=" flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"> <span>View Talent Pool</span> <ExternalLink className=" w-4 h-4"/> </Link> <Link href=" /help"className=" flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"> <span>Contact Support</span> <ExternalLink className=" w-4 h-4"/> </Link> <Link href=" /status"className=" flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"> <span>System Status</span> <ExternalLink className=" w-4 h-4"/> </Link> </div> </div> </div> <p className=" text-sm text-green-600 mb-3"> Run the setup script to configure Auth0 interactively: </p> <code className=" bg-green-100 text-green-800 px-3 py-1 rounded text-sm" > npm run setup:auth0 </code> </div> </div>) ;
}<p> For detailed instructions, see {;
  ' ' ;
}<button ;
}export default AuthConfigurationError;
'"
    </div>;
  );
}
;
export default AuthConfigurationError;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
;
export default AuthConfigurationError;
=======
    </div>;
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
