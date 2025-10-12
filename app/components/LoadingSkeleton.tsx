import React from 'react';

'use client';

interface LoadingSkeletonProps {}
lines?: number;
className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ }
const LoadingSkeleton: React.FC<LoadingSkeletonProps /> = ({ }
lines = 3,
className = '';
}) => {}
return (
<div className={`animate-pulse ${className}`}></div>;
{Array.from({ length: lines }).map((_, index) => (;
<div;
key={index}
className="h-4bg-gray-300 rounded mb-2";
/></div>
))}
</div>
);
};

key="{index}";
;

(

key="{index}";
;

))