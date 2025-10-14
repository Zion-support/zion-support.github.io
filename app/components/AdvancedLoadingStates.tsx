import React from "react";

interface AdvancedLoadingStatesProps {
  type?: string;
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ type, fullScreen, message }) => {
  return (
    <div className={`${fullScreen ? 'fixed inset-0' : ''} flex items-center justify-center bg-slate-900 text-white`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>{message || 'Loading...'}</p>
      </div>
    </div>
  );
};

export default AdvancedLoadingStates;
