<<<<<<< HEAD
'use client';;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const ServiceCardSkeletonPage: React.FC = () => {
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',}}
  ]
  ];];];
const benefits = [
  ]
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
=======
'use client';

import React from 'react';
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

interface ServiceCardSkeletonProps {
  showImage?: boolean;
  showButton?: boolean;
  lines?: number;
  className?: string;
}

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  showImage = true,
  showButton = true,
  lines = 3,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 animate-pulse ${className}`}>
      {/* Image skeleton */}
      {showImage && (
        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>
      )}
      
      {/* Icon skeleton */}
      <div className="w-12 h-12 bg-gray-300 rounded-lg mb-4"></div>
      
      {/* Title skeleton */}
      <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
      
      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-300 rounded ${
              index === lines - 1 ? 'w-2/3' : 'w-full'
            }`}
          ></div>
        ))}
      </div>
      
      {/* Button skeleton */}
      {showButton && (
        <div className="h-10 bg-gray-300 rounded w-full"></div>
      )}
    </div>
  );
};

export default ServiceCardSkeleton;