
<<<<<<< HEAD
<<<<<<< HEAD
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import { motion } from 'framer-motion';

=======
  className?: string;
  height?: string;
  width?: string;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  rounded?: string;
interface SkeletonProps {
  class_name?: string;
  height?: string;
  width?: string;
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

    />);
}
=======
  return (

    <motion.div;
      className={`bg - white / 10 animate - pulse ${height} ${width} ${rounded} ${class_name}`}

      animate={{
        opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
      transition={{

    />);
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;

interface ServiceCardSkeletonProps {
  class_name?: string;
}

<<<<<<< HEAD
export const ServiceCardSkeleton: React.FC < ServiceCardSkeletonProps> = ({ class_name = '' }) => {
  return (
=======
interface ServiceCardSkeletonProps {
  class_name?: string;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className={`p - 8 rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl ${class_name}`}>;
      <div className="flex items - center space - x-4 mb - 6">;
        <Skeleton className="w - 16 h - 16 rounded - 2xl" />;
        <div className="flex - 1">;
          <Skeleton className="h - 6 w - 3/4 mb - 2" />;
          <Skeleton className="h - 4 w - 1/2" />;
        </div>;
      </div>;
      <Skeleton className="h - 4 w - full mb - 2" />;
      <Skeleton className="h - 4 w - 5/6 mb - 2" />;
      <Skeleton className="h - 4 w - 4/6" />;
    </div>);
<<<<<<< HEAD
=======
=======
const Skeleton: React.FC<SkeletonProps> = ({ ;
  className = '',;
  height = 'h-4', ;
  width = 'w-full', ;
  rounded = 'rounded' ;
}) => {;
import React from 'react';
import { motion } from 'framer-motion';
interface SkeletonProps {
  class_name?: string;
  height?: string;
  width?: string;
  rounded?: string;
const Skeleton: React.FC<SkeletonProps> = ({
  className = ''
  height = 'h-4'
  width = 'w-full'
  rounded = 'rounded'
}) => {
  return (
    <motion.div;
      className={`bg - white / 10 animate - pulse ${height} ${width} ${rounded} ${class_name}`}
      animate={{
        opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
      transition={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  );
};


interface HeroSkeletonProps {
  className?: string

}
<<<<<<< HEAD
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface HeroSkeletonProps {
  class_name?: string;
}
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const HeroSkeleton: React.FC < HeroSkeletonProps> = ({ class_name = '' }) => {
  return (
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className={`min - h-screen flex items - center justify - center px - 6 py - 20 ${class_name}`}>;
      <div className="text - center max - w-6xl mx - auto">;
        <Skeleton className="h - 20 w - 96 mx - auto mb - 6" />;
        <Skeleton className="h - 8 w - 2/3 mx - auto mb - 8" />;
        <Skeleton className="h - 6 w - 1/2 mx - auto mb - 12" />;
        <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
          <Skeleton className="h - 14 w - 32" />;
          <Skeleton className="h - 14 w - 32" />;
        </div>;
      </div>;
    </div>);

  );
};


interface StatsSkeletonProps {
  className?: string

}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
interface StatsSkeletonProps {
  class_name?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD

            </div>

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          ))}
        </div>
      </div>
    </div>
<<<<<<< HEAD

        duration: 1 && 1.5,
        repeat: Infinity,
        ease: "easeInOut"}}
    />;
=======
    />
  )
},

interface ServiceCardSkeletonProps {
  className?: string
}

export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = (_{_className = ''}) => {_return (
    <div className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl ${className}`}>
      <div className=&quot;flex items-center space-x-4 mb-6&quot;>
        <Skeleton className=&quot;w-16 h-16 rounded-2xl&quot; />
        <div className=&quot;flex-1&quot;>
          <Skeleton className=&quot;h-6 w-3/4 mb-2&quot; />
          <Skeleton className=&quot;h-4 w-1/2&quot; />
        </div>
      </div>
      <Skeleton className=&quot;h-4 w-full mb-2&quot; />
      <Skeleton className=&quot;h-4 w-5/6 mb-2&quot; />
      <Skeleton className=&quot;h-4 w-4/6&quot; />
    </div>
  )
},

interface HeroSkeletonProps {
  className?: string
}

export const HeroSkeleton: React.FC<HeroSkeletonProps> = (_{_className = ''}) => {_return (
        duration: 1.5
        repeat: Infinity
        ease: "easeInOut"}}
    />
  )
}
interface ServiceCardSkeletonProps {
  className?: string
}
export const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({ className = '' }) => {
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

interface HeroSkeletonProps {
  className?: string
}
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
        </div>
      </div>
    </div>
  )
}
  );
};

interface StatsSkeletonProps {
  className?: string
}
export const StatsSkeleton: React.FC<StatsSkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`py-20 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
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
    </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  );
};

interface ServiceCardSkeletonProps {;
  className?: string;
}

=======
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
=======
  )

<<<<<<< HEAD
<<<<<<< HEAD
=======
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
};

interface HeroSkeletonProps {;
  className?: string;
}

export const HeroSkeleton: React.FC<HeroSkeletonProps> = ({ className = '' }) => {;
  return (
    <div className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}>;
      <div className="text-center max-w-6xl mx-auto">;
        <Skeleton className="h-20 w-96 mx-auto mb-6" />;
        <Skeleton className="h-8 w-2/3 mx-auto mb-8" />;
        <Skeleton className="h-6 w-1/2 mx-auto mb-12" />;
        <div className="flex flex-col sm: flex-row gap-4 justify-center">;
          <Skeleton className="h-14 w-32" />;
          <Skeleton className="h-14 w-32" />;
        </div>;
      </div>;
    </div>;
  );
};

interface StatsSkeletonProps {;
  className?: string;
=======
interface HeroSkeletonProps {;
  className?: string;
}
export default Skeleton;  )
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
  );
};

export default Skeleton;  );
};

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default Skeleton;



<<<<<<< HEAD
=======
=======
export default Skeleton;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export const StatsSkeleton: React.FC < StatsSkeletonProps> = ({ class_name = '' }) => {
  return (
    <div className={`py - 20 px - 6 ${class_name}`}>;
      <div className="max - w-7xl mx - auto">;
        <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8">;
          {[...Array (4)].map ((_, index) => (
            <div key={index} className='text - center'>;
              <Skeleton className='w - 16 h - 16 rounded - full mx - auto mb - 4' />;
              <Skeleton className='h - 10 w - 20 mx - auto mb - 2' />;
              <Skeleton className='h - 5 w - 24 mx - auto' />            <div key={index} className="text - center">;
              <Skeleton className="w - 16 h - 16 rounded - full mx - auto mb - 4" />;
              <Skeleton className="h - 10 w - 20 mx - auto mb - 2" />;
              <Skeleton className="h - 5 w - 24 mx - auto" />))}
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

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
