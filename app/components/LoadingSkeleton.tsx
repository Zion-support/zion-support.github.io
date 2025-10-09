'use client'
interface LoadingSkeletonProps {
  className?: string
  lines?: number
  height?: string
}
const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ 
  className = '', 
  lines = 1, 
  height = 'h-4' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-gray-200 rounded mb-2 ${height} ${
            index === lines - 1 ? 'w-3/4' : 'w-full'`}
          }`}
        />
      ))}
    </div>
  )
}
export const ServiceCardSkeleton: React.FC = () => (
  <div className="cyber-card p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    <div className="mt-4">
      <div className="h-3 bg-gray-200 rounded mb-1"></div>
      <div className="h-3 bg-gray-200 rounded mb-1"></div>
      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
    </div>
  </div>
)
export const HeroSkeleton: React.FC = () => (
  <div className="text-center mb-16 animate-pulse">
    <div className="h-16 bg-gray-200 rounded mb-6 mx-auto w-3/4"></div>
    <div className="h-6 bg-gray-200 rounded mb-8 mx-auto w-1/2"></div>
    <div className="h-4 bg-gray-200 rounded mb-4 mx-auto w-2/3"></div>
    <div className="h-4 bg-gray-200 rounded mb-8 mx-auto w-1/2"></div>
    <div className="flex justify-center gap-4">
      <div className="h-12 bg-gray-200 rounded w-32"></div>
      <div className="h-12 bg-gray-200 rounded w-32"></div>
    </div>
  </div>
)
export default LoadingSkeleton