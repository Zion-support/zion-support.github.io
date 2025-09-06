<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx

=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
========
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react'
import Link from 'next/link'
import {
  AlertTriangle
  ExternalLink
  RefreshCw
  Settings
  CheckCircle
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from 'lucide-react'; import { Button } from '@/components/ui/button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
interface AuthConfigurationErrorProps {;
  onRetry?: () => void;

  showSetupButton?: boolean
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  showSetupButton?: boolean
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
      window.location.reload();
    }
  },

<<<<<<< HEAD
========
export function AuthConfigurationError(): any ({;
  onRetry,;
  showSetupButton = true,;
}: AuthConfigurationErrorProps) {;
  const handleRefresh = () => {;
    if (onRetry) {;
      onRetry();
    } else {;
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
    }
  };
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>>         <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
>>>>>>>           <div className="text-center mb-6">
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">
          <div className="text-center mb-6">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 

              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>
          {/* Technical Details */}
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured.
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
>>>>>>>               New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>
          {/* Technical Details */}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2


          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
<<<<<<< HEAD
              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>
          {/* Technical Details */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>
            <h3 className='font-semibold text-gray-900 mb-2'>
              Missing Configuration:
            </h3>
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>
          {/* Technical Details */}

          <div className="bg-gray-50 rounded-lg p-4 mb-6">



<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
>>>>>>>             <ul className="text-sm text-gray-700 space-y-1">
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <li>• AUTH0_SECRET</li>
              <li>• AUTH0_BASE_URL</li>
              <li>• AUTH0_ISSUER_BASE_URL</li>
              <li>• AUTH0_CLIENT_ID</li>
              <li>• AUTH0_CLIENT_SECRET</li>
            </ul>
          </div>
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
          {/* Action Buttons */}
<<<<<<< HEAD
<<<<<<< HEAD

                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
=======
=======
          {/* Action Buttons */}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>
            {showSetupButton && (
              <Button
                onClick={() =>
                  window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')
                }
                className='bg-blue-600 hover:bg-blue-700 text-white flex-1'              <Button
                onClick = {(,) => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {showSetupButton && (
              <Button 
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              Check Again
            </Button>
          </div>
          {/* Quick Setup Steps */}
=======
ursor/fix-website-loading-errors-and-merge-6662
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
          {/* Action Buttons */}

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {showSetupButton && (
              <Button 
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}


                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>

  };
  return (;
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">;
      <div className="max-w-2xl w-full">;
        {/* Main Error Card */}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            )}
            <Button
              onClick={handleRefresh}
              variant='outline'
              className='flex-1'            >
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />
  };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
;
          <Alert variant="destructive" className="mb-6">;
            <AlertTriangle className="h-4 w-4" />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. ;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;
;
=======
          <Alert variant="destructive" className="mb-6">;
            <AlertTriangle className="h-4 w-4" />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured.;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Technical Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">;
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>;
            <ul className="text-sm text-gray-700 space-y-1">;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <li>• AUTH0_SECRET</li>;
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;
          </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
                onClick = {(,) => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1";
              >;
                <Settings className='w-4 h-4 mr-2' />;
=======
;
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">;
            {showSetupButton && (;
              <Button ;
=======
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">;
            {showSetupButton && (;
              <Button;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1";
              >;
                <Settings className="w-4 h-4 mr-2" />;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                Setup Guide;
              </Button>;
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx

>>>>>>>             )}
            <Button
              onClick={handleRefresh}
              variant='outline'
              className='flex-1'            >
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />
>>>>>>>               Check Again
            </Button>
          </div>
          {/* Quick Setup Steps */}
=======
                Setup Guide;
              </Button>;
            )}
;
            <Button;
              onClick={handleRefresh}
              variant="outline" 
              className="flex-1"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Check Again
            </Button>
          </div>
          {/* Quick Setup Steps */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='border-t pt-6'>
            <h3 className='font-semibold text-gray-900 mb-3'>
              Quick Setup Steps:
            </h3>
            <ol className='space-y-3 text-sm'>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <div>
ursor/fix-website-loading-errors-and-merge-6662
========
            )}
            ;
            <Button ;
              onClick={handleRefresh}
<<<<<<< HEAD
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              Check Again
            </Button>
          </div>
              className='flex-1'>;
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />;
              Check Again;
            </Button>;
          </div>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          {/* Quick Setup Steps */}
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx


<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Setup Steps:</h3>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">1</span>
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

                <div>
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
>>>>>>>                   <strong>Create Auth0 Account:</strong>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                <div>
                  <strong>Create Auth0 Account:</strong>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <br />
                  <a 
                    href="https://manage.auth0.com/" 
                    target="_blank" 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </Link>
                </div>
              </li>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  2
                </span>                <div>                <div>
<<<<<<< HEAD
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>>               <li className="flex items-start gap-3">
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <li className="flex items-start gap-3">
>>>>>>>                 <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <div>
                  <strong>Create Application:</strong>
                  <br />
                  Create a "Regular Web Application" named "Zion AI Marketplace"
                </div>
              </li>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
<<<<<<< HEAD

                <div>
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>                 <div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                </div>
              </li>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  4
                </span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
                <div>
                  <strong>Configure Environment:</strong>
                  <br />
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======

                <div>
                  <strong>Configure Environment:</strong>
                  <br />
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />;
                  </a>;
                </div>;
              </li>;
<<<<<<< HEAD
=======
              ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>;
                <div>;
                  <strong>Create Application:</strong>;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  <br />;
                  Create a "Regular Web Application" named "Zion AI Marketplace";
                </div>;
              </li>;
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
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
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx

>>>>>>>                   Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>;
                    npm run dev;
                  </code>{' '}
                  to apply changes                </div>                <div>
========
                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>;
                    npm run dev;
                  </code>{' '}
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                <div>
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>
                    npm run dev
                  </code>{' '}
                  to apply changes                </div>                <div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <strong>Configure Environment:</strong>
                  <br />
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                </div>
              </li>
              <li className="flex items-start gap-3">
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>                 <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
>>>>>>>                   Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
>>>>>>>                 </div>
=======
=======

              
              <li className="flex items-start gap-3">
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
<<<<<<< HEAD
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                <div>
                  <strong>Restart Application:</strong>
                  <br />
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
                </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </li>
            </ol>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                  to apply changes                </div>                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env && env.local</code> file;
                </div>;
              </li>;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>;
                <div>;
                  <strong>Restart Application:</strong>;
                  <br />;
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes;
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                </div>;
              </li>;
            </ol>;
          </div>;
        </div>;
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
        {/* Alternative Actions Card */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
<<<<<<< HEAD

            <Link 
              href="/talent" 

========
            <Link 
              href="/talent" 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
=======
            <Link
              href="/talent"
            
>>>>>>>             <Link 
              href="/talent" 
>>>>>>>               className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Link
              href="/talent"
            
            <Link 
              href="/talent" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >
              <span>View Talent Pool</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
<<<<<<< HEAD

            <Link 
              href="/help" 

<<<<<<< HEAD
========
            <Link 
              href="/help" 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
=======
            <Link
              href="/help"
            
>>>>>>>             <Link 
              href="/help" 
>>>>>>>               className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Link
              href="/help"
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            
            <Link 
              href="/help" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            >
              <span>Contact Support</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Link
              href="/status"
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
            
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <Link 
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              <ExternalLink className="w-4 h-4" />
            </Link>

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
            
========
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Link 
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>           </div>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </div>
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
>>>>>>>         </div>

========
        </div>
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
        {/* Setup Script Info */}
        {showSetupButton && (
<<<<<<< HEAD

<<<<<<< HEAD
=======


          <div className="mt-6 text-center">
            <div className="bg-green-50 rounded-lg border border-green-200 p-4">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Automated Setup Available</span>



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Setup Script Info */}
        {showSetupButton && (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='mt-6 text-center'>
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>
                <CheckCircle className='w-5 h-5' />
                <span className='font-semibold'>Automated Setup Available</span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>               </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
>>>>>>>               <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className="mt-6 text-center">
            <div className="bg-green-50 rounded-lg border border-green-200 p-4">
              <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Automated Setup Available</span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
<<<<<<< HEAD
<<<<<<< HEAD



<<<<<<< HEAD

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
>>>>>>>                 npm run setup:auth0
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                npm run setup:auth0
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </code>
            </div>
          </div>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <p className="text-sm text-green-600 mb-3">;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">;
                npm run setup:auth0;
              </code>;
            </div>;
<<<<<<< HEAD
          </div>;
        )}
        {/* Footer */}
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
        {/* Footer */}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>>               AUTH0_SETUP_GUIDE_ISSUE_1.md
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}
            <button
            >
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
              AUTH0_SETUP_GUIDE_ISSUE_1.md
>>>>>>>             </button>
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            <button 
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className="text-blue-600 hover: underline"
            >
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
              AUTH0_SETUP_GUIDE_ISSUE_1.md
            </button>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
  )
<<<<<<< HEAD
=======
export default AuthConfigurationError }
export default AuthConfigurationError
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}

export default AuthConfigurationError };
;
export default AuthConfigurationError;
}
}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="mt-6 text-center text-sm text-gray-500">;
          <p>;
            For detailed instructions, see{' '}
            <button;
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}

========
              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
              className="text-blue-600 hover: underline";
              AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
          </p>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx

  );
}


export default AuthConfigurationError;}



export default AuthConfigurationError;

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
========
  );
}
export default AuthConfigurationError;}
export default AuthConfigurationError;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  )
export default AuthConfigurationError }
export default AuthConfigurationError

export default AuthConfigurationError };
;
export default AuthConfigurationError;
}
}
        <div className="mt-6 text-center text-sm text-gray-500">;
          <p>;
            For detailed instructions, see{' '}
            <button;
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className="text-blue-600 hover: underline";
            >;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
          </p>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </div>);
export default AuthConfigurationError }
export default AuthConfigurationError,
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/auth/AuthConfigurationError.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> }
;
export default AuthConfigurationError;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/auth/AuthConfigurationError.tsx
=======
    </div>;
  );
}
;
export default AuthConfigurationError;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
;
export default AuthConfigurationError;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
