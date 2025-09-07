class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;

    return this.props.children;
import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

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
interface AuthConfigurationErrorProps {;
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
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full'>
export function AuthConfigurationError({ onRetry, showSetupButton = true }: AuthConfigurationErrorProps) {
      window.location.reload()
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
  onRetry?: () => void,;
  showSetupButton?: boolean;
;
export function AuthConfigurationError({ onRetry, showSetupButton = true }: AuthConfigurationErrorProps) {;
  const handleRefresh = () => {;
    if (onRetry) {;
      onRetry();
    } else {;

          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. 
              New users cannot sign up until this is resolved.
            </AlertDescription>
          {/* Technical Details */}
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>
            <h3 className='font-semibold text-gray-900 mb-2'>
              Missing Configuration:
            </h3>
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 mb-6">

            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• AUTH0_SECRET</li>
              <li>• AUTH0_BASE_URL</li>
              <li>• AUTH0_ISSUER_BASE_URL</li>
              <li>• AUTH0_CLIENT_ID</li>
              <li>• AUTH0_CLIENT_SECRET</li>
            </ul>

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

          <Alert variant='destructive' className='mb-6'>;
            <AlertTriangle className='h-4 w-4' />;
            <AlertDescription>;
              <strong>Critical Issue #1:</strong> Auth0 environment variables;
              are not configured. New users cannot sign up until this is;
              resolved.            </AlertDescription>;
          </Alert>;

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mb-6'>
            {showSetupButton && (
              <Button
                onClick={() =>
                  window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank')
                className='bg-blue-600 hover:bg-blue-700 text-white flex-1'              <Button
                onClick = {(,) => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
                onClick={() => window.open('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank')}

                className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
              >
                <Settings className="w-4 h-4 mr-2" />
                Setup Guide
              </Button>
            )}
              onClick={handleRefresh}
              variant='outline'
              className='flex-1'            >
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />
  };
  return (;
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">;
      <div className="max-w-2xl w-full">;
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8 mb-6">;
          <div className="text-center mb-6">;
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">;
              <AlertTriangle className="h-8 w-8 text-red-600" />;
            <h1 className="text-3xl font-bold text-gray-900 mb-2">;
            <p className="text-gray-600">;
              The sign-up system needs to be configured before users can create accounts;

          <Alert variant="destructive" className="mb-6">;
            <AlertTriangle className="h-4 w-4" />;
              <strong>Critical Issue #1:</strong> Auth0 environment variables are not configured. ;
              New users cannot sign up until this is resolved.;
            </AlertDescription>;

          <div className='bg-gray-50 rounded-lg p-4 mb-6'>;
            <h3 className='font-semibold text-gray-900 mb-2'>;
              Missing Configuration:;
            </h3>;
            <ul className='text-sm text-gray-700 space-y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg-gray-50 rounded-lg p-4 mb-6">;
            <h3 className="font-semibold text-gray-900 mb-2">Missing Configuration:</h3>;
            <ul className="text-sm text-gray-700 space-y-1">;
    <div className='min - h-screen bg - gradient - to - br from - red - 50 via - orange - 50 to - yellow - 50 flex items - center justify - center p - 4'>;
      <div className='max - w-2xl w - full'>;
        <div className='bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6'>;
          <div className='text - center mb - 6'>;
            <div className='mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center'>;
              <AlertTriangle className='h - 8 w - 8 text - red - 600' />;
            <h1 className='text - 3xl font - bold text - gray - 900 mb - 2'>;
            <p className='text - gray - 600'>;
              The sign - up system needs to be configured before users can create;
          <Alert variant='destructive' className='mb - 6'>;
            <AlertTriangle className='h - 4 w - 4' />;
              <strong > Critical Issue #1:</strong> Auth0 environment variables;
        <div className="bg - white rounded - 2xl shadow - xl border border - red - 200 p - 8 mb - 6">;
          <div className="text - center mb - 6">;
            <div className="mx - auto mb - 4 h - 16 w - 16 rounded - full bg - red - 100 flex items - center justify - center">;
              <AlertTriangle className="h - 8 w - 8 text - red - 600" />;
            <h1 className="text - 3xl font - bold text - gray - 900 mb - 2">;
            <p className="text - gray - 600">;
              The sign - up system needs to be configured before users can create accounts;
          <Alert variant="destructive" className="mb - 6">;
            <AlertTriangle className="h - 4 w - 4" />;
              <strong > Critical Issue #1:</strong> Auth0 environment variables are not configured.;
          <div className='bg - gray - 50 rounded - lg p - 4 mb - 6'>;
            <h3 className='font - semibold text - gray - 900 mb - 2'>;
            <ul className='text - sm text - gray - 700 space - y-1'>              <li>• AUTH0_SECRET</li>          <div className="bg - gray - 50 rounded - lg p - 4 mb - 6">;
            <h3 className="font - semibold text - gray - 900 mb - 2">Missing Configuration:</h3>;
            <ul className="text - sm text - gray - 700 space - y-1">;
              <li>• AUTH0_SECRET</li>;
              <li>• AUTH0_BASE_URL</li>;
              <li>• AUTH0_ISSUER_BASE_URL</li>;
              <li>• AUTH0_CLIENT_ID</li>;
              <li>• AUTH0_CLIENT_SECRET</li>;
            </ul>;

                onClick = {(,) => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}
                className="bg-blue-600 hover:bg-blue-700 text-white flex-1";
              >;
                <Settings className='w-4 h-4 mr-2' />;
                Setup Guide;
              </Button>;

              variant="outline" 
              className="flex-1"
              <RefreshCw className="w-4 h-4 mr-2" />

              Check Again
              className='flex-1'>;
              <RefreshCw className='w-4 h-4 mr-2' />              Check Again              <RefreshCw className="w-4 h-4 mr-2" />;
              Check Again;

          {/* Quick Setup Steps */}

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
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />

                  </Link>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>
                  2
                </span>                <div>                <div>
                  </a>

                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>
                  <strong>Create Application:</strong>
                  Create a "Regular Web Application" named "Zion AI Marketplace"
                  3
                </span>

                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">3</span>

                  <strong>Configure Environment:</strong>
                    className='text-blue-600 hover:underline inline-flex items-center gap-1'>;
                    Visit Auth0 Dashboard <ExternalLink className='w-3 h-3' />;
                  </a>;
              </li>;

              <li className='flex items-start gap-3'>;
                <span className='flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold'>;
                  2;
                </span>                <div>                <div>;
                  <strong>Create Auth0 Account:</strong>;
                  <br />;
                    href="https://manage && manage.auth0.com/" 
                    className="text-blue-600 hover:underline inline-flex items-center gap-1">;
                    Visit Auth0 Dashboard <ExternalLink className="w-3 h-3" />;

              <li className="flex items-start gap-3">;
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">2</span>;
                <div>;
                  <strong>Create Application:</strong>;
          <div className='flex flex - col sm:flex - row gap - 3 mb - 6'>;
              <Button;
                on_click={() =>;
                  window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md', '_blank');
                className='bg - blue - 600 hover:bg - blue - 700 text - white flex - 1'              <Button;
                on_click = {(, ) => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'), }
                className="bg - blue - 600 hover:bg - blue - 700 text - white flex - 1";
                <Settings className='w - 4 h - 4 mr - 2' />;
              </Button>)}
              on_click={handle_refresh}
              variant='outline';
              className='flex - 1'            >;
              <RefreshCw className='w - 4 h - 4 mr - 2' />              Check Again              <RefreshCw className="w - 4 h - 4 mr - 2" />;
          <div className='border - t pt - 6'>;
            <h3 className='font - semibold text - gray - 900 mb - 3'>;
              Quick Setup Steps:;
            <ol className='space - y-3 text - sm'>;
              <li className='flex items - start gap - 3'>;
                <span className='flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold'>;
                  1;
                </span>;
                  <strong > Create Auth0 Account:</strong>;
                  <a;
                    href='https://manage.auth0.com/';
                    target='_blank';
                    rel='noopener noreferrer';
                    className='text - blue - 600 hover:underline inline - flex items - center gap - 1';
                    Visit Auth0 Dashboard <ExternalLink className='w - 3 h - 3' />;
                    href="https://manage.auth0.com/";
                    target="_blank";
                    rel="noopener noreferrer";
                    className="text - blue - 600 hover:underline inline - flex items - center gap - 1";
                    Visit Auth0 Dashboard <ExternalLink className="w - 3 h - 3" />;
              <li className="flex items - start gap - 3">;
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold">2</span>;
                  <strong > Create Application:</strong>;
                  Create a "Regular Web Application" named "Zion AI Marketplace";

                  file;

                  4;
                  <strong>Restart Application:</strong>;

                  Run{' '}
                  <code className='bg-gray-100 px-1 rounded'>;
                    npm run dev;
                  </code>{' '}
                  to apply changes                </div>                <div>
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env.local</code> file
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>
                  <strong>Restart Application:</strong>

                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes
            </ol>
                  to apply changes                </div>                <div>;
                  <strong>Configure Environment:</strong>;
                  Copy credentials to <code className="bg-gray-100 px-1 rounded">.env && env.local</code> file;

                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">4</span>;
                  Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to apply changes;
                  3;
                  <strong > Configure Environment:</strong>;
                  Copy credentials to{' '}
                  <code className='bg - gray - 100 px - 1 rounded'>;
                    .env.local;
                  <strong > Restart Application:</strong>;
                  Copy credentials to <code className="bg - gray - 100 px - 1 rounded">.env.local</code> file;
                <span className="flex - shrink - 0 w - 6 h - 6 bg - blue - 100 text - blue - 600 rounded - full flex items - center justify - center text - xs font - semibold">4</span>;
                  Run <code className="bg - gray - 100 px - 1 rounded">npm run dev</code> to apply changes;
            </ol>;

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Alternative Actions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link 
              href="/marketplace" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800"
              <span>Browse Marketplace</span>
              <ExternalLink className="w-4 h-4" />

              <span>View Talent Pool</span>

              href="/help" 
              <span>Contact Support</span>

              className='flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800'>;
              <span>Browse Marketplace</span>            >;
              <span>Browse Marketplace</span>;
              <ExternalLink className="w-4 h-4" />;
            </Link>;

              href="/status" 
              <span>System Status</span>

        {/* Setup Script Info */}
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

              <p className="text-sm text-green-600 mb-3">
                Run the setup script to configure Auth0 interactively:

              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                npm run setup:auth0
              </code>

              href="/talent" 
              className="flex items-center gap-2 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors text-blue-700 hover:text-blue-800">;
              <span>View Talent Pool</span>;

              <span>Contact Support</span>;

              <span>System Status</span>;
              <ExternalLink className='w-4 h-4' />;

              href='/talent'

              href='/help'

              href='/status'
              <ExternalLink className='w-4 h-4' />            </Link>              <ExternalLink className="w-4 h-4" />;

        {showSetupButton && (;
          <div className='mt-6 text-center'>;
            <div className='bg-green-50 rounded-lg border border-green-200 p-4'>;
              <div className='flex items-center justify-center gap-2 text-green-700 mb-2'>;
                <CheckCircle className='w-5 h-5' />;
                <span className='font-semibold'>Automated Setup Available</span>;
              <p className='text-sm text-green-600 mb-3'>;
                Run the setup script to configure Auth0 interactively:;
              <code className='bg-green-100 text-green-800 px-3 py-1 rounded text-sm'>                npm run setup:auth0              </div>;
              <p className="text-sm text-green-600 mb-3">;
              <code className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">;
                npm run setup:auth0;
              </code>;
        {/* Footer */}

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            For detailed instructions, see{' '}

            <button 
              className="text-blue-600 hover: underline"

              AUTH0_SETUP_GUIDE_ISSUE_1.md
            </button>

              onClick = {() => window && window.open('/AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'),}

export default AuthConfigurationError };
export default AuthConfigurationError;

        <div className="mt-6 text-center text-sm text-gray-500">;
          <p>;
            <button;

              className="text-blue-600 hover: underline";
              AUTH0_SETUP_GUIDE_ISSUE_1 && AUTH0_SETUP_GUIDE_ISSUE_1.md;
            </button>;
  );

export default AuthConfigurationError;}

        {/* Alternative Actions Card */}
        <div className='bg - blue - 50 rounded - xl border border - blue - 200 p - 6'>;
          <h3 className='font - semibold text - blue - 900 mb - 3'>;
            Alternative Actions:;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 gap - 3'>;
            <Link;
              href='/marketplace';
              className='flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800';
              <span > Browse Marketplace</span>            >;
              <span > Browse Marketplace</span>;
              <ExternalLink className="w - 4 h - 4" />;
              href="/talent";
              className="flex items - center gap - 2 p - 3 bg - white rounded - lg hover:bg - blue - 50 transition - colors text - blue - 700 hover:text - blue - 800";
              <span > View Talent Pool</span>;
              href="/help";
              <span > Contact Support</span>;
              href="/status";
              <span > System Status</span>;
              <ExternalLink className='w - 4 h - 4' />;
              href='/talent';
              href='/help';
              href='/status';
              <ExternalLink className='w - 4 h - 4' />            </Link>              <ExternalLink className="w - 4 h - 4" />;
          <div className='mt - 6 text - center'>;
            <div className='bg - green - 50 rounded - lg border border - green - 200 p - 4'>;
              <div className='flex items - center justify - center gap - 2 text - green - 700 mb - 2'>;
                <CheckCircle className='w - 5 h - 5' />;
                <span className='font - semibold'>Automated Setup Available</span>;
              <p className='text - sm text - green - 600 mb - 3'>;
              <code className='bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm'>                npm run setup:auth0              </div>;
              <p className="text - sm text - green - 600 mb - 3">;
              <code className="bg - green - 100 text - green - 800 px - 3 py - 1 rounded text - sm">;
          </div>)}
        <div className='mt - 6 text - center text - sm text - gray - 500'>;
              className='text - blue - 600 hover:underline'            >        <div className="mt - 6 text - center text - sm text - gray - 500">;
              on_click = {() => window.open ('/AUTH0_SETUP_GUIDE_ISSUE_1.md_blank'), }
              className="text - blue - 600 hover: underline";
              AUTH0_SETUP_GUIDE_ISSUE_1.md;
    </div>);
export default AuthConfigurationError }
export default AuthConfigurationError,