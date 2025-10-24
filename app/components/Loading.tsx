import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const LoadingPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
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

const Loading: React.FC = () => {
interface LoadingProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Loading({ className = '', children, ...props }: LoadingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we load the content</p>
import { Loader2, Zap } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  text = 'Loading...',
  fullScreen = false;
'use client'
import React from 'react'
import { Loader2 } from 'lucide-react'

interface LoadingProps {
  message?: string
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
  className?: string
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  size = 'md',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
import React  from 'react';
const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-centerjustify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-automb-4"></div>
        <p className="text-whitetext-lg">Loading...</p>
      </div>
    </div>
  );

  if (fullScreen) {
    return(<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">)
        {content})
      </div>)
    );
  }

  return content;
};

export default Loading;
}
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import React from 'react';

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="loading">
      <h2>Loading</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

    lg: 'w-12 h-12'
  }

  const containerClasses = fullScreen
    ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-8'

  return (
    <div className={`${containerClasses} ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        <Loader2 className={`animate-spin text-blue-500 ${sizeClasses[size]}`} />
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  )
}

export default Loading
export default Loading;
