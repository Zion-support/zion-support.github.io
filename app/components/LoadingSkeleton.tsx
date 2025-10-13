const LoadingSkeletonPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  width = '100%',
  height = '1rem',
  rounded = false,
  animate = true
}) => {
  const baseClasses = 'bg-gray-300 dark:bg-gray-700';
  const roundedClasses = rounded ? 'rounded-full' : 'rounded';
  const animateClasses = animate ? 'animate-pulse' : '';
  
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function LoadingSkeleton() {
  return (
    <div
      className={`${baseClasses} ${roundedClasses} ${animateClasses} ${className}`}
      style={{ width, height }}
      aria-hidden="true"
export default LoadingSkeletonPage;
import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width, 
  height, 
  rounded = false 
}) => {
  const style: React.CSSProperties = {};
  
  if (width) style.width = typeof width === 'number' ? `${width}px` : width;
  if (height) style.height = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={`bg-gradient-to-r from-slate-700/50 to-slate-600/50 animate-pulse ${
        rounded ? 'rounded-lg' : ''
      } ${className}`}
      style={style}
    />
  );
};

export const PageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    {/* Navigation Skeleton */}
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton width={32} height={32} rounded />
            <Skeleton width={120} height={24} />
          </div>
          <div className="hidden lg:flex space-x-8">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} width={80} height={20} />
            ))}
          </div>
          <Skeleton width={100} height={40} rounded />
        </div>
      </div>
    </div>

    {/* Hero Section Skeleton */}
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Skeleton width={600} height={72} className="mx-auto mb-6" />
          <Skeleton width={800} height={32} className="mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Skeleton width={200} height={56} rounded />
            <Skeleton width={200} height={56} rounded />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton width={64} height={64} rounded className="mx-auto mb-4" />
                <Skeleton width={80} height={32} className="mx-auto mb-2" />
                <Skeleton width={120} height={16} className="mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Content Sections Skeleton */}
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Skeleton width={400} height={48} className="mx-auto mb-6" />
          <Skeleton width={600} height={24} className="mx-auto mb-8" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <Skeleton width={48} height={48} rounded className="mb-4" />
              <Skeleton width={200} height={24} className="mb-3" />
              <Skeleton width="100%" height={60} className="mb-4" />
              <Skeleton width={100} height={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const CardSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(count)].map((_, i) => (
      <div key={i} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
        <Skeleton width={48} height={48} rounded className="mb-4" />
        <Skeleton width="80%" height={24} className="mb-3" />
        <Skeleton width="100%" height={60} className="mb-4" />
        <Skeleton width={100} height={20} />
      </div>
    ))}
  </div>
);

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div className="space-y-2">
    {[...Array(lines)].map((_, i) => (
      <Skeleton 
        key={i} 
        width={`${Math.random() * 40 + 60}%`} 
        height={16} 
        className={i === lines - 1 ? 'w-3/4' : ''}
      />
    ))}
  </div>
);

export default Skeleton;
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
