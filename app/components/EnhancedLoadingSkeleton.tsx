import React from "react";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: boolean;
  animated?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "1rem",
  className = "",
  rounded = true,
  animated = true,
}) => {
  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={`bg-gray-700 ${rounded ? "rounded" : ""} ${animated ? "animate-pulse" : ""} ${className}`}
      style={style}
    />
  );
};

interface EnhancedLoadingSkeletonProps {
  type?: "card" | "list" | "text" | "image" | "button";
  count?: number;
  className?: string;
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({
  type = "card",
  count = 1,
  className = "",
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case "card":
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Skeleton width={60} height={20} className="mb-4" />
            <Skeleton width="100%" height={24} className="mb-2" />
            <Skeleton width="80%" height={16} className="mb-4" />
            <div className="space-y-2">
              <Skeleton width="100%" height={12} />
              <Skeleton width="90%" height={12} />
              <Skeleton width="75%" height={12} />
            </div>
            <div className="flex gap-2 mt-6">
              <Skeleton width={80} height={32} rounded />
              <Skeleton width={100} height={32} rounded />
            </div>
          </div>
        );

      case "list":
        return (
          <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Skeleton width={40} height={40} rounded />
                <div className="flex-1 space-y-2">
                  <Skeleton width="60%" height={16} />
                  <Skeleton width="40%" height={12} />
                </div>
              </div>
            ))}
          </div>
        );

      case "text":
        return (
          <div className="space-y-2">
            <Skeleton width="100%" height={20} />
            <Skeleton width="95%" height={16} />
            <Skeleton width="90%" height={16} />
            <Skeleton width="85%" height={16} />
            <Skeleton width="80%" height={16} />
          </div>
        );

      case "image":
        return <Skeleton width="100%" height={200} rounded />;

      case "button":
        return <Skeleton width={120} height={40} rounded />;

      default:
        return <Skeleton width="100%" height={100} />;
    }
  };

  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={count > 1 ? "mb-4" : ""}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

export default EnhancedLoadingSkeleton;
