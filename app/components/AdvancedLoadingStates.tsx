import React from "react";

interface AdvancedLoadingStatesProps {
    className?: string;
  children?: React.ReactNode;
,
  }

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ className = ", children }) => {
  return (
    <div className={`advanced-loading-states ${className}`}>
      {children}
    </div>
  );
};

export default AdvancedLoadingStates;
