interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  animated?: boolean;
}
const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width,
  height,
  rounded = false,
  animated = true
}) => {
  const roundedClasses = rounded ? 'rounded' : '';
  const animatedClasses = animated ? 'animate-pulse' : '';
  return (
    <div
      className={`${baseClasses} ${roundedClasses} ${animatedClasses} ${className}`}
      style={{ width, height }}
      role="status"
      aria-label="Loading content"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
// Predefined skeleton components for common use cases