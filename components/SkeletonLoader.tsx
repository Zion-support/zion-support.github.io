
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
interface SkeletonLoaderProps {
<<<<<<< HEAD
  lines?: number;
  className?: string;
}
const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({

<<<<<<< HEAD
    lines = 3
    className = ''
  }) => {

=======
const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  lines = 3,
  className = '',
}) => {
  return (
=======
  lines?: number, className?: string;
}

    lines = 3
    className = ''
  }) => {
<<<<<<< HEAD

=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-200 rounded mb-2 ${
<<<<<<< HEAD
            index === lines - 1 ? 'w-3/4' : 'w-full'
=======
            index === lines - 1 ? 'w-3/4' : 'w-full';
>>>>>>> origin/main
          }`}
        />;
      ))}
    </div>;
  );
}
const SkeletonLoader: React.FC < SkeletonLoaderProps> = ({
    lines = 3,
    class_name = '';
  }) => {
    <div className={`animate - pulse ${class_name}`}>;
      {Array.from ({ length: lines }).map ((_, index) => (
        <div;
          key={index}
          className={`h - 4 bg - gray - 200 rounded mb - 2 ${
            index === lines - 1 ? 'w - 3/4' : 'w - full';
          }`}
        />))}
    </div>);
}
;
export default SkeletonLoader;