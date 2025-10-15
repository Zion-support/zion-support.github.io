export default OptimizedLoadingSpinner;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
    fullScreen = false;
    // Note: fullScreen parameter is used in containerClasses calculation below;
    );
    );
    );
    );
    );
          );
        case 'pulse':
          );
        case 'skeleton':
  );
        case 'bars':
              ))}
  );
        case 'spinner':
        default:
          );
    }, [size, variant, color, sizeClasses, colorClasses, baseClasses]);
      return `${baseClasses} ${fullScreen ? fullScreenClasses : ''} ${className}`;
    }, [baseClasses, fullScreen, fullScreenClasses, className]);
          {renderSpinner}
              {text}
          )}
  );
);
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';