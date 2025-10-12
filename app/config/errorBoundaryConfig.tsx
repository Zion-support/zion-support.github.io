'use client';
import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface ErrorBoundaryConfig {
  customMessages: Record<string, string>;
  fallbackComponents: {
    default: React.ComponentType<{ error: Error; resetError: () => void }>;
    network: React.ComponentType<{ error: Error; resetError: () => void }>;
    notFound: React.ComponentType<{ error: Error; resetError: () => void }>;
  };
}

/**
 * Default error messages
 */
const defaultMessages = {
  default: 'Something went wrong. Please try again.',
  network: 'Network error. Please check your connection and try again.',
  notFound: 'The page you are looking for could not be found.',
  timeout: 'Request timed out. Please try again.',
  unauthorized: 'You are not authorized to access this resource.',
  forbidden: 'Access to this resource is forbidden.',
  serverError: 'Server error. Please try again later.',
  unknown: 'An unknown error occurred. Please contact support.'
};

/**
 * Default fallback components
 */
const DefaultErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({ error, resetError }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
        <AlertTriangle className="w-6 h-6 text-red-600" />
      </div>
      <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
        Oops! Something went wrong
      </h2>
      <p className="mt-2 text-sm text-gray-600 text-center">
        {error.message || defaultMessages.default}
      </p>
      <div className="mt-6 flex space-x-3">
        <button
          onClick={resetError}
          className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </button>
      </div>
    </div>
  </div>
);

const NetworkErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({ error, resetError }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full">
        <AlertTriangle className="w-6 h-6 text-yellow-600" />
      </div>
      <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
        Network Error
      </h2>
      <p className="mt-2 text-sm text-gray-600 text-center">
        {error.message || defaultMessages.network}
      </p>
      <div className="mt-6 flex space-x-3">
        <button
          onClick={resetError}
          className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retry
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </button>
      </div>
    </div>
  </div>
);

const NotFoundErrorFallback: React.FC<{ error: Error; resetError: () => void }> = ({ error, resetError }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
        <AlertTriangle className="w-6 h-6 text-blue-600" />
      </div>
      <h2 className="mt-4 text-2xl font-bold text-center text-gray-900">
        Page Not Found
      </h2>
      <p className="mt-2 text-sm text-gray-600 text-center">
        {error.message || defaultMessages.notFound}
      </p>
      <div className="mt-6 flex space-x-3">
        <button
          onClick={resetError}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </button>
      </div>
    </div>
  </div>
);

/**
 * Error boundary configuration
 */
export const errorBoundaryConfig: ErrorBoundaryConfig = {
  customMessages: defaultMessages,
  fallbackComponents: {
    default: DefaultErrorFallback,
    network: NetworkErrorFallback,
    notFound: NotFoundErrorFallback
  }
};

export default errorBoundaryConfig;
