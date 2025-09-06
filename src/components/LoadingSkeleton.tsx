import React from 'react';'
import { motion } from 'framer-motion';

interface SkeletonProps {}
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ '
  className = '', '
  height = 'h-4', '
  width = 'w-full', 
  rounded = true;
}) => {}
  return (
    <motion.div'
      className={`bg-gray-700/50 ${height} ${width} ${rounded ? 'rounded' : ''} ${className}`}
      animate={{}
        opacity: [0.5, 1, 0.5],
      }}
      transition={{}
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export const CardSkeleton: React.FC = () => ("
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">"
    <Skeleton height="h-8" width="w-16" className="mb-4" />"
    <Skeleton height="h-6" width="w-3/4" className="mb-4" />"
    <Skeleton height="h-4" width="w-full" className="mb-2" />"
    <Skeleton height="h-4" width="w-5/6" className="mb-4" />"
    <Skeleton height="h-10" width="w-full" className="rounded-lg" />
  </div>;
);

export const ServiceCardSkeleton: React.FC = () => ("
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">"
    <Skeleton height="h-12" width="w-12" className="mb-6 rounded-full" />"
    <Skeleton height="h-6" width="w-3/4" className="mb-4" />"
    <Skeleton height="h-4" width="w-full" className="mb-2" />"
    <Skeleton height="h-4" width="w-5/6" className="mb-4" />"
    <div className="space-y-2 mb-6">"
      <Skeleton height="h-4" width="w-full" />"
      <Skeleton height="h-4" width="w-4/5" />"
      <Skeleton height="h-4" width="w-3/4" />
    </div>"
    <Skeleton height="h-10" width="w-full" className="rounded-lg" />
  </div>;
);

export const TestimonialSkeleton: React.FC = () => ("
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">"
    <div className="flex items-center mb-6">"
      <Skeleton height="h-12" width="w-12" className="rounded-full mr-4" />"
      <div className="flex-1">"
        <Skeleton height="h-5" width="w-32" className="mb-2" />"
        <Skeleton height="h-4" width="w-24" />
      </div>
    </div>"
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => ("
        <Skeleton key={i} height="h-5" width="w-5" className="mr-1" />
      ))}
    </div>"
    <div className="space-y-2">"
      <Skeleton height="h-4" width="w-full" />"
      <Skeleton height="h-4" width="w-5/6" />"
      <Skeleton height="h-4" width="w-4/5" />
    </div>
  </div>;
);

export const BlogPostSkeleton: React.FC = () => ("
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">"
    <Skeleton height="h-48" width="w-full" className="rounded-none" />"
    <div className="p-6">"
      <div className="flex items-center text-sm mb-4">"
        <Skeleton height="h-4" width="w-20" className="mr-4" />"
        <Skeleton height="h-4" width="w-16" className="mr-4" />"
        <Skeleton height="h-4" width="w-12" />
      </div>"
      <Skeleton height="h-6" width="w-3/4" className="mb-3" />"
      <div className="space-y-2 mb-4">"
        <Skeleton height="h-4" width="w-full" />"
        <Skeleton height="h-4" width="w-5/6" />"
        <Skeleton height="h-4" width="w-4/5" />
      </div>"
      <Skeleton height="h-4" width="w-20" />
    </div>
  </div>;
);

export const HeroSkeleton: React.FC = () => ("
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">"
    <div className="max-w-4xl mx-auto text-center px-4">"
      <Skeleton height="h-16" width="w-3/4" className="mx-auto mb-6" />"
      <Skeleton height="h-8" width="w-5/6" className="mx-auto mb-8" />"
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">"
        <Skeleton height="h-12" width="w-48" className="rounded-lg" />"
        <Skeleton height="h-12" width="w-48" className="rounded-lg" />
      </div>"
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => ("
          <div key={i} className="text-center">"
            <Skeleton height="h-12" width="w-20" className="mx-auto mb-2" />"
            <Skeleton height="h-4" width="w-24" className="mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </div>;
);

export default Skeleton;'"`