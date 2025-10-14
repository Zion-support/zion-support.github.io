import React from "react";

type ServiceCardSkeletonProps = Record<string, unknown>;

const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = () => {
  return (
    <div className="servicecardskeleton">
      {/* Component content */}
    </div>
  );
};

export default ServiceCardSkeleton;