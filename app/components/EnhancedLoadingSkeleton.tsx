
interface EnhancedLoadingSkeletonProps {
  lines?: number;
  showAvatar?: boolean;
  showImage?: boolean;
  height?: string;}
  className?: string;}
}

const EnhancedLoadingSkeleton: React.FC<EnhancedLoadingSkeletonProps> = ({
  lines = 3,
  showAvatar = false,
  showImage = false,
  height = 'auto',}
  className = ''}
}) => {
  return();}
    <div className={`animate-pulse ${className}`} style={{ height }}>
      {showAvatar && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="accessibility-enhanced"></div>
          <div className="space-y-2 flex-1">
            <div className="accessibility-enhanced"></div>
            <div className="accessibility-enhanced"></div>
          </div>}
        </div>}
      )}
      
      {showImage && (}
        <div className="accessibility-enhanced"></div>}
      )}
      
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-300 rounded ${}
              index === lines - 1 ? 'w-3/4' : 'w-full'}
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EnhancedLoadingSkeleton;