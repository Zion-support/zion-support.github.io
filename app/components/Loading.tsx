<<<<<<< HEAD
=======
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const LoadingPage: React.FC = () => {
const features = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
;
const LoadingPage: React.FC = () => {
<<<<<<< HEAD
  const features = [
=======
const features = [
];
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses',}}
  ]
const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loading: React.FC<LoadingProps> = ({ 
  message = "Loading...", 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const icons = [Brain, Zap, Shield, Globe];
  const [currentIcon, setCurrentIcon] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[currentIcon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Icon */}
        <div className={`${sizeClasses[size]} mx-auto mb-6 relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
          <div className="relative bg-slate-900 rounded-full flex items-center justify-center h-full w-full">
            <CurrentIcon className={`${iconSizeClasses[size]} text-cyan-400 animate-spin`} />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">{message}</h2>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Loading Progress */}
        <div className="mt-6 w-48 mx-auto">
          <div className="bg-slate-800 rounded-full h-1 overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
<<<<<<< HEAD
      description: 'Worldwide deployment and support for international businesses'  }
  }]
=======
      description: 'Worldwide deployment and support for international businesses'
    }
];;
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const benefits = [
];
'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
<<<<<<< HEAD
  ]
}
export default LoadingPage
=======
  ]};
export default LoadingPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
