import React from 'react';

interface AdvancedLoadingStatesProps {
  type?: string;
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ 
  type: _type = 'spinner', 
  fullScreen = false, 
  message = 'Loading...' 
}) => {
  return (
    <div className={`flex items-center justify-center ${fullScreen ? 'min-h-screen' : 'p-8'}`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default AdvancedLoadingStates;