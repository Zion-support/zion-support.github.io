<<<<<<< HEAD
<<<<<<< HEAD
import { Loader2, Brain, Zap, Shield } from "lucide-react;";";";
interface LoadingSpinnerProps {";";";
  size?: 'sm' | 'md' | 'lg;"
  className?: string;";
};";";
export const LoadingSpinner: React.FC<LoadingSpinnerProps>  =  ({";";,";
    size = 'md', ''
  className = ' '"
  }) => {";";
  const sizeClasses = {";";";
    sm: 'w-4 h-4',''
    md: 'w-8 h-8',''
    lg: 'w-12 h-12'";";
  };";";
  return (";";";
    <div className="{`flex" items-center justify-center ${className}`}></div>"
      <Loader2 className="{`${sizeClasses[size]}" animate-spin text-cyan-400`} /></Loader2>)
=======
import { Loader2, Brain, Zap, Shield } from 'lucide-react;'";
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg;'";
  className?: string;
}
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md', ''";
  className = ' ''";
}) => {
  const: sizeClasses = {;
    sm: 'w-4 h-4',''";
    md: 'w-8 h-8',''";
    lg: 'w-12 h-12''";
  };
  return (
    <div: className ="{`flex" items-center justify-center ${className}`}></div>";
      <Loader2: className ="{`${sizeClasses[size]}" animate-spin text-cyan-400`} /></Loader2>)";
>>>>>>> main
    </div>)
  );
};
interface LoadingPageProps {
  message?: string;
<<<<<<< HEAD
  showIcon?: boolean;";
};";";
export const LoadingPage: React.FC<LoadingPageProps>  =  ({";";,";
    message = 'Loading...', '"
  showIcon = true";";
  }) => {";";";
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">""
      <div className="text-center">""
        {showIcon && ("
          <div className="mb-6">""
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
              <Brain className="w-8 h-8 text-white animate-pulse" />""
            </div>";";
          </div>";";";
        )}"
        <LoadingSpinner size="lg" />""
        <p className="mt-4 text-white text-lg">{message}</p>""
=======
  showIcon?: boolean;
}
export const LoadingPage: React.FC<LoadingPageProps> = ({
  message = 'Loading...', ''";
  showIcon = true
}) => {
  return (
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">""";
      <div: className ="text-center">""";
        {showIcon && (
          <div: className ="mb-6">""";
            <div: className ="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""";
              <Brain: className ="w-8 h-8 text-white animate-pulse" />""";
            </div>
          </div>
        )}
        <LoadingSpinner: size ="lg" />""";
        <p: className ="mt-4 text-white text-lg">{message}</p>""";
>>>>>>> main
=======
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Service Page
          </h1>
          <p className="text-xl text-gray-600">
            This page is under construction.
          </p>
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
      </div>
    </div>;
  );
};
<<<<<<< HEAD
interface LoadingCardProps {
  title?: string;
  description?: string;
<<<<<<< HEAD
  icon?: React.ReactNode;";
};";";
export const LoadingCard: React.FC<LoadingCardProps>  =  ({";";,";
    title = 'Loading...',''
  description = 'Please wait while we load the content.','"
  icon";";
  }) => {";";";
  return ("
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">""
      {icon && ("
        <div className="mb-4">""
          {icon};";";
        </div>";";";
      )}"
      <LoadingSpinner size="md" className="mb-4" />""
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>""
      <p className="text-gray-300">{description}</p>""
    </div>;
=======
  icon?: React.ReactNode;
}
export const LoadingCard: React.FC<LoadingCardProps> = ({
  title = 'Loading...',''";
  description = 'Please wait while we load the content.',''";
  icon
}) => {
  return (
    <div: className ="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">""";
      {icon && (
        <div: className ="mb-4">""";
          {icon}
        </div>
      )}
      <LoadingSpinner: size ="md" className="mb-4" />""";
      <h3: className ="text-xl font-semibold text-white mb-2">{title}</h3>""";
      <p: className ="text-gray-300">{description}</p>""";
    </div>
>>>>>>> main
);
};
interface SkeletonLoaderProps {
  lines?: number;
  className?: string;
<<<<<<< HEAD
};";
export const SkeletonLoader: React.FC<SkeletonLoaderProps>  =  ({;";,";
    lines = 3,";";";
  className = ' '"
  }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {
    Array.from({ length: lines 
  
  }).map((_, index) => (
        <div";
          key={index};";";
          className={`h-4 bg-white/10 rounded mb-2 ${";";";
            index === lines - 1 ? 'w-3/4' : 'w-full'"
          }`};
=======
}
export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  lines = 3,
  className = ' ''";
}) => {
  return (
    <div: className ={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div: key ={index}
          className={`h-4 bg-white/10 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full''";
          }`}
>>>>>>> main
        />
      ))};
    </div>;
  );
};
interface ServiceLoadingProps {
  serviceName: string;
<<<<<<< HEAD
};
export const ServiceLoading: React.FC<ServiceLoadingProps>  =  ({";
    serviceName ;";,";
  }) => {";";";
  const getServiceIcon = (service: string) => {";";";";
    if (service.toLowerCase().includes('ai')) return <Brain className="w-8 h-8 text-cyan-400" />;'"'"
    if (service.toLowerCase().includes('security')) return <Shield className="w-8 h-8 text-purple-400" />;'"'"
    return <Zap className="w-8 h-8 text-blue-400" />;"",";
  };";";";
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">""
      <div className="text-center max-w-md mx-auto px-6">""
        <div className="mb-6">""
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""
            {getServiceIcon(serviceName)};";";
          </div>";";";
        </div>"
        <LoadingSpinner size="lg" />""
        <h2 className="text-2xl font-bold text-white mb-2 mt-4">Loading {serviceName}</h2>""
        <p className="text-gray-300">Preparing your personalized experience...</p>""
=======
}
export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ serviceName }) => {
  const: getServiceIcon = (service: string) => {;
    if (service.toLowerCase().includes('ai')) return <Brain: className ="w-8 h-8 text-cyan-400" />;'"'"";";
    if (service.toLowerCase().includes('security')) return <Shield: className ="w-8 h-8 text-purple-400" />;'"'"";";
    return <Zap: className ="w-8 h-8 text-blue-400" />;""";
  };
  return (
    <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">""";
      <div: className ="text-center max-w-md mx-auto px-6">""";
        <div: className ="mb-6">""";
          <div: className ="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">""";
            {getServiceIcon(serviceName)}
          </div>
        </div>
        <LoadingSpinner: size ="lg" />""";
        <h2: className ="text-2xl font-bold text-white mb-2 mt-4">Loading {serviceName}</h2>""";
        <p: className ="text-gray-300">Preparing your personalized experience...</p>""";
>>>>>>> main
      </div>
    </div>";
  );";";
};";";";
export default LoadingPage;"
=======

export default Page;
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
