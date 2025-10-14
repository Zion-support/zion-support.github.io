import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingStatesProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

const LoadingStates: React.FC<LoadingStatesProps> = ({ 
  message = "Loading...", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className={`${sizeClasses[size]} text-cyan-500 animate-spin mx-auto mb-2`} />
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default LoadingStates;