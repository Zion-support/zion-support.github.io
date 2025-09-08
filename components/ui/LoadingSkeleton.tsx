<<<<<<< HEAD



    <div className={`min - h-screen flex items - center justify - center px - 6 py - 20 ${class_name}`}>;
      <div className="text - center max-w-6xl mx-auto">;
        <Skeleton className="h - 20 w - 96 mx-auto mb-6" />;
        <Skeleton className="h - 8 w - 2/3 mx-auto mb-8" />;
        <Skeleton className="h - 6 w - 1/2 mx-auto mb-12" />;
        <div className="flex flex - col sm: flex - row gap-4 justify-center">;
          <Skeleton className="h-14 w-32" />;
          <Skeleton className="h-14 w-32" />;
        </div>;
      </div>;
    </div>))}interface StatsSkeletonProps  {className?: string;
}interface StatsSkeletonProps  {class_name?: string;
}import React from 'react';
import { motion  } from 'framer-motion';
  rounded?: string;
}const Skeleton: React.FC<SkeletonProps> = ({className;))}
        </div>;
      </div>;
    </div>;
}export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '' }) => {return (<div className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl ${className}`}>;
    </div>);



  height?: string;
  width?: string;
  width?: string;)}export default Skeleton;

=======
import React from 'react';
import { motion } from 'framer-motion';
interface SkeletonProps {
  className?: string,
  height?: string,
  width?: string,
  rounded?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = $2;
  height = $2;
  width = $2;
  rounded = 'rounded' 
}) => {
  return (
    <motion.div
      className={`bg-white/10 animate-pulse ${height} ${width} ${rounded} ${className}`}
      animate={{
        opacity: [0.3, 0.6, 0.3]}}
      transition = $2;
        repeat: Infinity,
        ease: "easeInOut"}}
    />
  )
},

interface ServiceCardSkeletonProps {
  className?: string
}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = $2;
interface HeroSkeletonProps {
  className?: string
}

export const HeroSkeleton: React.FC<HeroSkeletonProps> = ({ className = $2;
interface StatsSkeletonProps {
  className?: string
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

export const StatsSkeleton: React.FC<StatsSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
<<<<<<< HEAD
            <div key={index} className='text-center'>
              <Skeleton className='w-16 h-16 rounded-full mx-auto mb-4' />
              <Skeleton className='h-10 w-20 mx-auto mb-2' />
              <Skeleton className='h-5 w-24 mx-auto' />            <div key={index} className="text-center">
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
              <Skeleton className="h-10 w-20 mx-auto mb-2" />
              <Skeleton className="h-5 w-24 mx-auto" />
          ))}
        </div>
      </div>

    </div>

)
};






=======
            <div key = $2;
export default Skeleton,
>>>>>>> origin/cursor/delete-old-data-records-6bba
