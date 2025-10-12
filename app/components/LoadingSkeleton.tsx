'use client'

interface LoadingSkeletonProps {
  className?: string
  height?: string
  width?: string
  lines?: number
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  height = 'h-4',
  width = 'w-full',
  lines = 1
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

export default LoadingSkeleton