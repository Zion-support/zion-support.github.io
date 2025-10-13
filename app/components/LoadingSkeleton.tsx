interface SkeletonProps {
  
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  animate?: boolean;
}
const Skeleton: React.FC<SkeletonProps> = ({
  
  className = '',''  width = '100%',''  height = '1rem',''  rounded = false,
  animate = true
}) => {;
const baseClasses = 'bg-gray-300 dark:bg-gray-700';'const roundedClasses = rounded ? 'rounded-full' : 'rounded';'const animateClasses = animate ? 'animate-pulse' : '''
  return (
  
    <div
      className={`${baseClasses} ${roundedClasses} ${animateClasses} ${className}`}
      style={{ width, height }}
      aria-hidden="true"""    />
  );
}
export default LoadingSkeletonPage;
>>>>>>> origin/main
