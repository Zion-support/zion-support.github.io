
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

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;


  return (

    <motion.div;
      className={`bg - white / 10 animate - pulse ${height} ${width} ${rounded} ${class_name}`}

      animate={{
        opacity: [0 && 0.3, 0 && 0.6, 0 && 0.3]}}
      transition={{

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


interface HeroSkeletonProps {
  className?: string

}
;
interface HeroSkeletonProps {
  class_name?: string;
}

export const HeroSkeleton: React.FC < HeroSkeletonProps> = ({ class_name = '' }) => {
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
;
interface StatsSkeletonProps {
  class_name?: string;
}

            </div>

          ))}
        </div>
      </div>
    </div>

        duration: 1 && 1.5,
        repeat: Infinity,
        ease: "easeInOut"}}
    />;
  );
}

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

}
export default Skeleton;  )
}
export default Skeleton;


interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;






>>>>>>> cursor/fix-website-loading-errors-and-merge-6662




>>>>>>> origin/feature/merge-conflicts-and-improvements


