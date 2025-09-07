import React from 'react';

interface SkeletonProps {
<<<<<<< HEAD
  className?: string;
  lines?: number;
=======
  className?: string;}
  lines?: number}
>>>>>>> cursor/automate-test-improve-and-merge-code-064d
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', lines = 1 }) => {
  return (
<<<<<<< HEAD
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-200 rounded mb-2"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
};

export default Skeleton;
=======
    <div;}
className={cn('animate-pulse bg-gray-200 rounded', className;}
        )}
      /\"  />\";
    )}return (\"\";
    <div className=\"space-y-2\" />;
      {Array.from({ length: lines,}
}).map((_, i) => (<div;
          key={i}
          className={cn('animate-pulse bg-gray-200 rounded h-4', i === lines - 1 ? 'w-3/4' : 'w-full';}
          )}
        /\"  />\";
      ))}
    </div>;
  )}\"\";
>>>>>>> cursor/automate-test-improve-and-merge-code-064d
