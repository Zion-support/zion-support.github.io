import React from "react";
import { Loader2 } from "lucide-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
  color?: string;
  className?: string;
}

const EnhancedLoading: React.FC<LoadingProps> = ({
  size = "md",
  text = "Loading...",
  fullScreen = false,
  color = "cyan",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorClasses = {
    cyan: "text-cyan-500",
    purple: "text-purple-500",
    green: "text-green-500",
    blue: "text-blue-500",
    white: "text-white",
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2
        className={`${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses]} animate-spin`}
      />
      {text && (
        <p
          className={`mt-2 text-sm ${colorClasses[color as keyof typeof colorClasses]}`}
        >
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default EnhancedLoading;
