'useclient';
import React from 'react';
;
interfaceLoadingSkeletonProps {lines?: number;
  className?: string;
}
;
constLoadingSkeleton: React.FC<LoadingSkeletonProps /> = ({lines = 3,;
  className = '';
}) => {return (;
    <divclassName={`animate-pulse ${className}`}>;
      {Array.from({ length: lines }).map((_, index) => (;
        <divkey={index}
          className="h-4 b g-gray-300 roundedmb-2";
        />;
      ))}
    </div>;
  );
};
;
exportdefaultLoadingSkeleton;
;
