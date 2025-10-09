
interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  animated?: boolean;
}
const Skeleton: React.FC<SkeletonProps>= ({
  className = '',
  width,
  height,
  rounded = false,
  animated = true
}) => {
        return (
    <div>
      <span className="sr-only">Loading...</span>
    </div>);
}
// Predefined skeleton components for common use cases
export const CardSkeleton: React.FC = () => (
  <div>
    <Skeleton height="24px" width="75%" className="mb-4" />
    <Skeleton height="16px" width="100%" className="mb-2" />
    <Skeleton height="16px" width="90%" className="mb-4" />
    <Skeleton height="40px" width="120px" rounded />
  </div>)
export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => (
  <div>
    {Array.from({ length: lines }).map((_, index) => (
      <Skeleton
        key={index}
        height="16px"
        width={index === lines - 1 ? '75%' : '100%'}
      />
    ))}
  </div>)
export const ImageSkeleton: React.FC<{ aspectRatio?: string }> = ({ 
  aspectRatio = '16/9' 
}) => (
  <div>
    <span className="sr-only">Loading image...</span>
  </div>)
export const ListSkeleton: React.FC<{ items?: number }> = ({ items = 5 }) => (
  <div>
    {Array.from({ length: items }).map((_, index) => (
      <div>
        <Skeleton height="40px" width="40px" rounded />
        <div>
          <Skeleton height="16px" width="80%" />
          <Skeleton height="14px" width="60%" />
        </div>
      </div>
    ))}
  </div>)
export const TableSkeleton: React.FC<{ rows?: number; columns?: number }>= ({ 
  rows = 5, 
  columns = 4
}) => (
  <div>
    <div>
      {Array.from({ length: columns }).map((_, index) => (
        <Skeleton key={index} height="20px" />
      ))}
    </div>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <Skeleton key={colIndex} height="16px" />
        ))}
      </div>
    ))}
  </div>);
export default Skeleton