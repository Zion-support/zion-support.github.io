import React from "react";

interface AdvancedLoadingStatesProps {
  type?: string;
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates = ({ fullScreen, message }: AdvancedLoadingStatesProps) => {
  return (
    <div className={`loading-states ${fullScreen ? 'full-screen' : ''}`}>
      <div className="loading-content">
        <div className="spinner"></div>
        {message && <p className="loading-message">{message}</p>}
      </div>
    </div>
  );
};

export default AdvancedLoadingStates;
