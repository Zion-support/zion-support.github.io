import React from 'react';

interface AdvancedLoadingStatesProps {
  type: 'skeleton' | 'spinner' | 'dots';
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ 
  type: _type, 
  fullScreen = false, 
  message = 'Loading...' 
}) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-white text-lg">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
      <span className="ml-2 text-slate-600">{message}</span>
    </div>
  );
};

export default AdvancedLoadingStates;