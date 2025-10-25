
interface LoadingSkeletonProps {
  className?: string
  lines?: number
  height?: string
  width?: string
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  lines = 1,
  height = 'h-4',
  width = 'w-full'
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-gray-300 rounded ${height} ${width} ${
            index < lines - 1 ? 'mb-2' : ''
          }`}
        />
      ))}
    </div>
  )
}

