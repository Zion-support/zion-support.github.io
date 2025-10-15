import React from 'react';
import { Loader2, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface EnhancedLoadingStatesProps {
  state: 'loading' | 'success' | 'error' | 'warning';
  message: string;
  className?: string;
}

const EnhancedLoadingStates: React.FC<EnhancedLoadingStatesProps> = ({
  state,
  message,
  className = ''
}) => {
  const getStateConfig = () => {
    switch (state) {
      case 'loading':
        return {
          icon: <Loader2 className="w-6 h-6 animate-spin" />,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200'
        };
      case 'success':
        return {
          icon: <CheckCircle className="w-6 h-6" />,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200'
        };
      case 'error':
        return {
          icon: <XCircle className="w-6 h-6" />,
          color: 'text-red-600',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200'
        };
      case 'warning':
        return {
          icon: <AlertCircle className="w-6 h-6" />,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200'
        };
      default:
        return {
          icon: <Loader2 className="w-6 h-6 animate-spin" />,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200'
        };
    }
  };

  const config = getStateConfig();

  return (
    <div className={`flex items-center p-4 rounded-lg border ${config.bgColor} ${config.borderColor} ${className}`}>
      <div className={`${config.color} mr-3`}>
        {config.icon}
      </div>
      <p className={`text-sm font-medium ${config.color}`}>
        {message}
      </p>
    </div>
  );
};

export default EnhancedLoadingStates;
