<<<<<<< HEAD
'use client';;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const EnhancedLoadingSkeletonPage: React.FC = () => {
    const features = [
    {
      icon: Brain
      ,
      title: 'AI-Powered Solutions'
      ,
      description: 'Advanced AI technology to transform your business operations and improve efficiency',}
    ,
    { icon: Zap
      ,
      title: 'High Performance'
      ,
      description: 'Lightning-fast processing and real-time analytics for optimal results',}
    ,
    { icon: Shield
      ,
      title: 'Enterprise Security'
      ,
      description: 'Bank-level security with encryption and compliance standards',}
    ,
    { icon: Globe
      ,
      title: 'Global Reach'
      ,
      description: 'Worldwide deployment and support for international businesses'
    }
  ];
=======
'use client';

import React from 'react';
>>>>>>> 95f63d1bffe2d416304750c17f0532b44f8a7886

interface EnhancedLoadingSkeletonProps {
  lines?: number;
  showAvatar?: boolean;
  showImage?: boolean;
  height?: string;
  className?: string;
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({
  lines = 3
  showAvatar = false
  showImage = false
  height = 'auto'
  className = ''
}) => {
  return (
    <div className={`animate-pulse ${className}`} style={{ height }}>
      <div className="space-y-4">
        {showAvatar && (
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        )}
        
        ,
    { showImage && (
          <div className="w-full h-48 bg-gray-300 rounded-lg"></div>
        )}
        
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={`h-4 bg-gray-300 rounded ${
                index === lines - 1 ? 'w-3/4' : 'w-full'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoadingSkeleton;