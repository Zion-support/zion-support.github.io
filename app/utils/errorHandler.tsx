import React from "react";

interface ErrorhandlerxProps {
  className?: string;
}

const Errorhandlerx: React.FC<ErrorhandlerxProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Errorhandlerx</h2>
  );
};

export default Errorhandlerx;
