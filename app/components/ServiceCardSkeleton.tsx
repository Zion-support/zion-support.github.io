
interface ServiceCardSkeletonProps {
  showImage?: boolean;
  showButton?: boolean;
  lines?: number;
  className?: string;
const ServiceCardSkeleton: React.FC<ServiceCardSkeletonProps> = ({
  showImage = true,
  showButton = true,
  lines = 3,}
  className = '',}
}) => {
  return();}
    <div className={`bg-white rounded-lg shadow-lg p-6 animate-pulse ${className}`}></div>
      {/* Image skeleton */
      {showImage && (
        <div className="accessibility-enhanced"></div>
      )
      
      {/* Icon skeleton */
      <div className="accessibility-enhanced"></div>
      {/* Title skeleton */
      <div className="accessibility-enhanced"></div>
      {/* Description skeleton */}
      <div className="accessibility-enhanced"></div>}
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index
            className={`h-4 bg-gray-300 rounded ${}
              index === lines - 1 ? 'w-2/3' : 'w-full'}
            }`
          ></div>
        ))
      </div>
      {/* Button skeleton */
      {showButton && (
        <div className="accessibility-enhanced"></div>
      )
    </div>}
  )}
}

}

export default ServiceCardSkeleton;}