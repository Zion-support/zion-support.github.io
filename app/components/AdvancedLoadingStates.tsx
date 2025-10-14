import React from 'react';

interface AdvancedLoadingStatesProps {
  type?: string;
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-xl">{message}</p>
      </div>
    </div>
  );
};

export default AdvancedLoadingStates;