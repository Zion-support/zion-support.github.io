import React, { ReactNode } from "react";

interface AdvancedLoadingStatesProps {
  children?: ReactNode;
  type?: string;
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ 
  children, 
  fullScreen = false, 
  message = "Loading..." 
}) => {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">{message}</p>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};

export default AdvancedLoadingStates;
