<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
'use client''
import React from 'react';
<<<<<<< HEAD
import { Loader2, Brain, Shield, Zap, Globe, BarChart3 } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
  variant?: 'default' | 'futuristic' | 'minimal';
=======
import { Helmet } from 'react-helmet-async';
"use client"
export default function Page() {return (
    <div className="min-h-screen bg-white">"
      <Helmet>
        <title>LoadingStates - Zion Tech Group</title>
        <meta name="description" content="Professional loadingstates services by Zion Tech Group." />"
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8">"
            LoadingStates;
          </h1>
          <p className="text-xl text-gray-600 mb-8">"
            Professional loadingstates solutions tailored to your business needs.;
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                Expert Solutions;
              </h3>
              <p className="text-blue-700">"
                Our team of experts delivers cutting-edge loadingstates solutions.;
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-green-900 mb-2">"
                Custom Implementation;
              </h3>
              <p className="text-green-700">"
                Tailored loadingstates implementations for your specific requirements.;
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                24/7 Support;
              </h3>
              <p className="text-purple-700">"
                Round-the-clock support for all your loadingstates needs.;
              </p>
=======
import React from 'react';
<<<<<<< HEAD
import { Loader2, Brain, Zap, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
>>>>>>> origin/main
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '' 
=======
import { Loader2, Brain, Shield, Cloud, Zap } from 'lucide-react';

interface LoadingStatesProps {
  type?: 'default' | 'page' | 'component' | 'skeleton';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingStates: React.FC<LoadingStatesProps> = ({
  type = 'default',
  message,
  size = 'md'
>>>>>>> origin/main
}) => {
<<<<<<< HEAD
  if (variant === 'minimal') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-white">{message}</span>
        </div>
      </div>
    );
  }

  if (variant === 'default') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">{message}</h2>
          <p className="text-gray-400">Please wait while we load the content</p>
        </div>
      </div>
    );
  }

  // Futuristic variant (default)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-spin"></div>
          <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
            <Brain className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {message}
        </h2>
        
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Initializing advanced AI systems and preparing your experience...
        </p>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Feature icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <div className="flex flex-col items-center space-y-2">
            <Shield className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-xs text-gray-400">Security</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Zap className="w-6 h-6 text-purple-400 animate-pulse delay-200" />
            <span className="text-xs text-gray-400">AI Power</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Globe className="w-6 h-6 text-blue-400 animate-pulse delay-400" />
            <span className="text-xs text-gray-400">Global</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <BarChart3 className="w-6 h-6 text-green-400 animate-pulse delay-600" />
            <span className="text-xs text-gray-400">Analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AILoadingPage: React.FC<{ message?: string }> = ({ message = "AI is thinking..." }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
          <Brain className="w-8 h-8 text-cyan-400 animate-pulse" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
      <p className="text-gray-300">Processing with advanced AI algorithms...</p>
    </div>
  </div>
);

export const SecurityLoadingPage: React.FC<{ message?: string }> = ({ message = "Securing connection..." }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
          <Shield className="w-8 h-8 text-red-400 animate-pulse" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
      <p className="text-gray-300">Establishing secure connection...</p>
    </div>
  </div>
);

export const PerformanceLoadingPage: React.FC<{ message?: string }> = ({ message = "Optimizing performance..." }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
          <Zap className="w-8 h-8 text-green-400 animate-pulse" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
      <p className="text-gray-300">Optimizing for maximum performance...</p>
    </div>
  </div>
);

export const GlobalLoadingPage: React.FC<{ message?: string }> = ({ message = "Connecting globally..." }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
          <Globe className="w-8 h-8 text-blue-400 animate-pulse" />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
      <p className="text-gray-300">Connecting to global network...</p>
    </div>
  </div>
);
=======
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const getDefaultMessage = () => {
    switch (type) {
      case 'page':
        return 'Loading page...';
      case 'component':
        return 'Loading component...';
      case 'skeleton':
        return 'Loading content...';
      default:
        return 'Loading...';
    }
  };

  if (type === 'skeleton') {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    );
  }

  if (type === 'page') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-10 h-10 text-white animate-pulse" />
>>>>>>> origin/main
            </div>
            <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto animate-ping opacity-20"></div>
          </div>
<<<<<<< HEAD
          <div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
              Get Started Today;
            </button>
=======
          <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
          <p className="text-gray-300 mb-6">{message || getDefaultMessage()}</p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
>>>>>>> origin/main
          </div>
        </div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
=======
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className={`${sizeClasses[size]} text-cyan-500 animate-spin mx-auto mb-2`} />
        <p className="text-gray-600 text-sm">{message || getDefaultMessage()}</p>
      </div>
>>>>>>> origin/main
    </div>
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD
  ); }
>>>>>>> origin/main
            LoadingStates</h1>
          <p className="text-xl text-gray-600 mb-8">"
            Professional loadingstates solutions tailored to your business needs.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">"
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-blue-900 mb-2">"
                Expert Solutions</h3>
              <p className="text-blue-700">"
                Our team of experts delivers cutting-edge loadingstates solutions.</p></div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-green-900 mb-2">"
                Custom Implementation</h3>
              <p className="text-green-700">"
                Tailored loadingstates implementations for your specific requirements.</p></div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">"
              <h3 className="text-lg font-semibold text-purple-900 mb-2">"
                24/7 Support</h3>
              <p className="text-purple-700">"
                Round-the-clock support for all your loadingstates needs.</p></div></div>
          <div className="mt-12">"
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">"
              Get Started Today</button></div></div></div></div>
  )
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
<<<<<<< HEAD
}''
=======
            </button>;
          </div>
        </div>
      </div>
    </div>
  );}
}'
=======
  );
};

<<<<<<< HEAD
interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = 'Loading...', 
  showIcon = true 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {showIcon && (
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        )}
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-white text-lg">{message}</p>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  title = 'Loading...',
  description = 'Please wait while we load the content.',
  icon
}) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
      {icon && (
        <div className="mb-4">
          {icon}
        </div>
      )}
      <LoadingSpinner size="md" className="mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  lines = 3, 
  className = '' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-white/10 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  );
};

interface ServiceLoadingProps {
  serviceName: string;
}

export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ serviceName }) => {
  const getServiceIcon = (service: string) => {
    if (service.toLowerCase().includes('ai')) return <Brain className="w-8 h-8 text-cyan-400" />;
    if (service.toLowerCase().includes('security')) return <Shield className="w-8 h-8 text-purple-400" />;
    return <Zap className="w-8 h-8 text-blue-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            {getServiceIcon(serviceName)}
          </div>
        </div>
        <LoadingSpinner size="lg" />
        <h2 className="text-2xl font-bold text-white mb-2 mt-4">Loading {serviceName}</h2>
        <p className="text-gray-300">Preparing your personalized experience...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
=======
// Specialized loading components for different sections
export const AILoadingState: React.FC<{ message?: string }> = ({ message = 'AI is thinking...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center">
      <Brain className="w-8 h-8 text-cyan-500 animate-pulse mx-auto mb-2" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  </div>
);

export const SecurityLoadingState: React.FC<{ message?: string }> = ({ message = 'Securing your data...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center">
      <Shield className="w-8 h-8 text-green-500 animate-pulse mx-auto mb-2" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  </div>
);

export const CloudLoadingState: React.FC<{ message?: string }> = ({ message = 'Connecting to cloud...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center">
      <Cloud className="w-8 h-8 text-blue-500 animate-pulse mx-auto mb-2" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  </div>
);

export const PerformanceLoadingState: React.FC<{ message?: string }> = ({ message = 'Optimizing performance...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="text-center">
      <Zap className="w-8 h-8 text-yellow-500 animate-pulse mx-auto mb-2" />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  </div>
);

export default LoadingStates;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
