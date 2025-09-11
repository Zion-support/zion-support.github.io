<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

import React from 'react'
import Link from 'next/link'
import {
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Settings,;
  CheckCircle;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
} from 'lucide-react'; import { Button } from '@/components/ui/button'; import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

import { AlertTriangle, ExternalLink, RefreshCw, Settings, CheckCircle } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
<<<<<<< HEAD
<<<<<<< HEAD
interface AuthConfigurationErrorProps {
  onRetry?: () => void;
=======
interface AuthConfigurationErrorProps {;
  onRetry?: () => void;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
interface AuthConfigurationErrorProps {;
  onRetry?: () => void;

  showSetupButton?: boolean


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Error Card */}
ursor/fix-website-loading-errors-and-merge-6662
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======






<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
<<<<<<< HEAD
<<<<<<< HEAD
=======
              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>
          {/* Technical Details */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>
            <h3 className='font-semibold text-gray-900 mb-2'>
              Missing Configuration:
            </h3>
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              New users cannot sign up until this is resolved.
            </AlertDescription>
          </Alert>
          {/* Technical Details */}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="bg-gray-50 rounded-lg p-4 mb-6">



<<<<<<< HEAD
<<<<<<< HEAD
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• AUTH0_SECRET</li>
              <li>• AUTH0_BASE_URL</li>
              <li>• AUTH0_ISSUER_BASE_URL</li>
              <li>• AUTH0_CLIENT_ID</li>
              <li>• AUTH0_CLIENT_SECRET</li>
            </ul>
          </div>
<<<<<<< HEAD
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
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Alert variant='destructive' className='mb-6'>;
            <AlertTriangle className='h-4 w-4' />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables;
              are not configured. New users cannot sign up until this is;
              resolved.            </AlertDescription>;
          </Alert>;
<<<<<<< HEAD
          {/* Technical Details */}        {/* Main Error Card */}
          {/* Action Buttons */}

=======

          {/* Technical Details */}        {/* Main Error Card */}
          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>
            {showSetupButton && (
              <Button
                onClick={() =>
                  window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')
                }
                className='bg-blue-600 hover:bg-blue-700 text-white flex-1'              <Button
                onClick = {(,) => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {showSetupButton && (
              <Button 
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}


                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
<<<<<<< HEAD

=======
            )}
            <Button
              onClick={handleRefresh}
              variant='outline'
              className='flex-1'            >
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <Alert variant="destructive" className="mb-6">;
            <AlertTriangle className="h-4 w-4" />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. ;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured.;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;
          </Alert>;
          {/* Technical Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">;
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>;
            <ul className="text-sm text-gray-700 space-y-1">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <li>• AUTH0_SECRET</li>;
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onClick={handleRefresh}
              variant="outline" 
              className="flex-1"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              Check Again
            </Button>
          </div>
              className='flex-1'>;
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />;
              Check Again;
            </Button>;
          </div>;

          {/* Quick Setup Steps */}

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Quick Setup Steps:</h3>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">1</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Link>
                </div>
              </li>
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
=======

                  </Link>
                </div>
              </li>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              


              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                <div>
                  <strong>Create Application:</strong>
                  <br />
                  Create a "Regular Web Application" named "Zion AI Marketplace"
                </div>
              </li>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
<<<<<<< HEAD
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


              
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div>
                  <strong>Configure Environment:</strong>
                  <br />
                    className='text-blue-600 hover:underline inline-flex items-center gap-1'>;
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;
                  </a>;
                </div>;
              </li>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />;
                  </a>;
                </div>;
              </li>;
<<<<<<< HEAD
              ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>;
                    npm run dev;
                  </code>{' '}
<<<<<<< HEAD
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>
                <div>
<<<<<<< HEAD
                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>
                    npm run dev
                  </code>{' '}
                  to apply changes                </div>                <div>
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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



                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
                </div>
              </li>
            </ol>
          </div>
        </div>
                  to apply changes                </div>                <div>;
                  <strong>Configure Environment:</strong>;
                  <br />;
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env && env.local</code> file;
                </div>;
              </li>;
<<<<<<< HEAD
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Alternative Actions Card */}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            <Link
              href="/talent"
            
              href="/talent" 
            <Link
              href="/talent"
            
            <Link 
              href="/talent" 
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>View Talent Pool</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


            
            <Link 
              href="/help" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>Contact Support</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
<<<<<<< HEAD
<<<<<<< HEAD
            <Link
              href="/status"
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
            
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            

            
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link 
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
<<<<<<< HEAD
<<<<<<< HEAD
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
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
            
            <Link 
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
            >
              <span>System Status</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          </div>
        </div>
<<<<<<< HEAD
        {/* Setup Script Info */}
        {showSetupButton && (


<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Setup Script Info */}
        {showSetupButton && (
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
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
<<<<<<< HEAD
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0              </div>
              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:
              </p>
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======




>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                npm run setup:auth0
              </code>
            </div>
          </div>
        )}

            <Link
              href="/talent" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;
              <span>View Talent Pool</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link
              href="/help" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;
              <span>Contact Support</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link
              href="/status" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;
              <span>System Status</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link
              href='/talent'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>View Talent Pool</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Link
              href='/help'
              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Contact Support</span>;
              <ExternalLink className='w-4 h-4' />;
            </Link>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <p className="text-sm text-green-600 mb-3">;
                Run the setup script to configure Auth0 interactively:;
              </p>;
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">;
                npm run setup:auth0;
              </code>;
            </div>;
<<<<<<< HEAD
        {/* Footer */}
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
=======
          </div>;
        )}
        {/* Footer */}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}
<<<<<<< HEAD
            <button
            >
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}
=======

            >
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <button 
              onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}
              className="text-blue-600 hover: underline"
            >

              AUTH0_SETUP_GUIDE_ISSUE_1.md
            </button>
          </p>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
export default AuthConfigurationError }
export default AuthConfigurationError

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}

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

<<<<<<< HEAD
              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className="text-blue-600 hover: underline";
              AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
          </p>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
}
export default AuthConfigurationError;}
export default AuthConfigurationError;
=======

  );
}


export default AuthConfigurationError;}



export default AuthConfigurationError;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              AUTH0_SETUP_GUIDE_ISSUE_1.md;
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
}
;
<<<<<<< HEAD
export default AuthConfigurationError;
=======
export default AuthConfigurationError;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </div>);
export default AuthConfigurationError }
export default AuthConfigurationError,
}
;
export default AuthConfigurationError;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
