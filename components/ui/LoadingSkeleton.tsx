<<<<<<< HEAD

<<<<<<< HEAD
interface SkeletonProps {
  class_name?: string;
=======
  className?: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  height?: string;
  width?: string;
  rounded?: string;

<<<<<<< HEAD
=======
  rounded?: string;
interface SkeletonProps {
  class_name?: string;
  height?: string;
  width?: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}) => {
  return (
    <motion&& motion.div
      className={`bg-white/10 animate-pulse ${height} ${width} ${rounded} ${className}`}
    <motion.div;
      className={`bg - white / 10 animate - pulse ${height} ${width} ${rounded} ${class_name}`}
      animate={{
        opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
      transition={{
<<<<<<< HEAD

=======
    />);
}
;

interface ServiceCardSkeletonProps {
  class_name?: string;
}

export const ServiceCardSkeleton: React.FC < ServiceCardSkeletonProps> = ({ class_name = '' }) => {
  return (
    <div className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl ${className}`}>
      <div className="flex items-center space-x-4 mb-6">
        <Skeleton className="w-16 h-16 rounded-2xl" />
        <div className="flex-1">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-2" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  )
}
  );
};

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
interface ServiceCardSkeletonProps {
  class_name?: string;
}
    <div className={`p - 8 rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl ${class_name}`}>;
      <div className="flex items - center space-x-4 mb-6">;
        <Skeleton className="w - 16 h-16 rounded-2xl" />;
        <div className="flex-1">;
          <Skeleton className="h - 6 w-3/4 mb-2" />;
          <Skeleton className="h-4 w-1/2" />;
        </div>;
      </div>;
      <Skeleton className="h - 4 w-full mb-2" />;
      <Skeleton className="h - 4 w-5/6 mb-2" />;
      <Skeleton className="h-4 w-4/6" />;
    </div>);

  )
};

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface HeroSkeletonProps {
  className?: string
}
<<<<<<< HEAD
export const HeroSkeleton: React.FC<HeroSkeletonProps> = ({ className = '' }) => {
  return (

    <div className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}>
      <div className="text-center max-w-6xl mx-auto">
        <Skeleton className="h-20 w-96 mx-auto mb-6" />
        <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />
        <div className="flex flex-col sm: flex-row gap-4 justify-center">
          <Skeleton className="h-14 w-32" />
          <Skeleton className="h-14 w-32" />
=======
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
    </div>);

  )
};

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
interface StatsSkeletonProps {
  className?: string

}
;
interface StatsSkeletonProps {
  class_name?: string;
}
=======
import React from 'react';
import { motion } from 'framer-motion';
  rounded?: string
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
          ))}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD

}

  );
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '' }) => {;
  return (
    <div className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl ${className}`}>;
      <div className="flex items-center space-x-4 mb-6">;
        <Skeleton className="w-16 h-16 rounded-2xl" />;
        <div className="flex-1">;
          <Skeleton className="h-6 w-3/4 mb-2" />;
          <Skeleton className="h-4 w-1/2" />;
        </div>;
      </div>;
      <Skeleton className="h-4 w-full mb-2" />;
      <Skeleton className="h-4 w-5/6 mb-2" />;
      <Skeleton className="h-4 w-4/6" />;
    </div>;
  );
<<<<<<< HEAD
=======
  )

interface HeroSkeletonProps {;
  className?: string;
}
export default Skeleton;  )
}
export const StatsSkeleton: React.FC<StatsSkeletonProps> = ({ className = '' }) => {;
  return (
    <div className={`py-20 px-6 ${className}`}>;
      <div className="max-w-7xl mx-auto">;
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
          {[...Array(4)].map((_, index) => (;
            <div key={index} className='text-center'>;
              <Skeleton className='w-16 h-16 rounded-full mx-auto mb-4' />;
              <Skeleton className='h-10 w-20 mx-auto mb-2' />;
              <Skeleton className='h-5 w-24 mx-auto' />            <div key={index} className="text-center">;
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />;
              <Skeleton className="h-10 w-20 mx-auto mb-2" />;
              <Skeleton className="h-5 w-24 mx-auto" />;
          ))}
        </div>;
      </div>;
    </div>;
  )
};

export default Skeleton;  )
};

export default Skeleton;
export const StatsSkeleton: React.FC < StatsSkeletonProps> = ({ class_name = '' }) => {
  return (
    <div className={`py - 20 px - 6 ${class_name}`}>;
      <div className="max-w-7xl mx-auto">;
        <div className="grid grid - cols - 2 md:grid - cols-4 gap-8">;
          {[...Array (4)].map ((_, index) => (
            <div key={index} className='text - center'>;
              <Skeleton className='w - 16 h - 16 rounded - full mx - auto mb - 4' />;
              <Skeleton className='h - 10 w - 20 mx - auto mb - 2' />;
              <Skeleton className='h - 5 w - 24 mx - auto' />            <div key={index} className="text-center">;
              <Skeleton className="w - 16 h - 16 rounded - full mx-auto mb-4" />;
              <Skeleton className="h - 10 w - 20 mx-auto mb-2" />;
              <Skeleton className="h - 5 w-24 mx-auto" />))}
        </div>;
      </div>;
    </div>);
}
;
export default Skeleton);
}
;
export default Skeleton;
;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
);
};

export default Skeleton;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
