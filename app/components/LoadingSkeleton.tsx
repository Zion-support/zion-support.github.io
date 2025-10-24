'use client';;
import React from 'react';

interface LoadingSkeletonProps {
  // Add props here
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = (_props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default LoadingSkeletonPage;
'use client';
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
