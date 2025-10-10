'use client';
import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the page</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex items-center space-x-2">
        <Loader2 className="w-5 h-5 animate-spin text-purple-500" />
        <span className="text-gray-600">Loading component...</span>
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse">
      <div className="w-16 h-16 bg-gray-700 rounded-2xl mb-6"></div>
      <div className="h-6 bg-gray-700 rounded mb-4"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
    </div>
  );
};

export const StatsSkeleton: React.FC = () => {
  return (
    <div className="text-center animate-pulse">
      <div className="w-16 h-16 bg-gray-700 rounded-2xl mx-auto mb-4"></div>
      <div className="h-8 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
    </div>
  );
};

export const TableSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex space-x-4">
            <div className="h-4 bg-gray-700 rounded w-1/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChartSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-64 bg-gray-700 rounded-lg"></div>
    </div>
  );
};

export const FormSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
      <div className="h-10 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
      <div className="h-10 bg-gray-700 rounded"></div>
      <div className="h-4 bg-gray-700 rounded w-1/4"></div>
      <div className="h-24 bg-gray-700 rounded"></div>
      <div className="h-10 bg-gray-700 rounded w-1/3"></div>
    </div>
  );
};

export const ListSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse space-y-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-700 rounded mb-1"></div>
            <div className="h-3 bg-gray-700 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 animate-pulse">
      <div className="h-6 bg-gray-700 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export const ButtonSkeleton: React.FC = () => {
  return (
    <div className="h-10 bg-gray-700 rounded animate-pulse w-32"></div>
  );
};

export const ImageSkeleton: React.FC = () => {
  return (
    <div className="w-full h-48 bg-gray-700 rounded-lg animate-pulse"></div>
  );
};

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse space-y-2">
      {[...Array(lines)].map((_, i) => (
        <div key={i} className={`h-4 bg-gray-700 rounded ${i === lines - 1 ? 'w-3/4' : ''}`}></div>
      ))}
    </div>
  );
};