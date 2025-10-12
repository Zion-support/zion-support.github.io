  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
}
    fullScreen = false
    // Note: fullScreen parameter is used in containerClasses calculation below
    
    );
    
    );
    
    );
    
    );

    );

          );
        case 'pulse':
            
            />
          );
        case 'skeleton':
            <div className='space-y-2' role='status' aria-label='Loading'>
              
              />
              
              />
              
              />
            </div>
  );
        case 'bars':
            <div className='flex space-x-1' role='status' aria-label='Loading'>
                
                />
              ))}
            </div>
  );
        case 'spinner':
        default:
            
            />
          );
      }
    }, [size, variant, color, sizeClasses, colorClasses, baseClasses]);
    
      return `${baseClasses} ${fullScreen ? fullScreenClasses : ''} ${className}`;
    }, [baseClasses, fullScreen, fullScreenClasses, className]);
      <div className={containerClasses}>
        <div className='text-center'>
          {renderSpinner}
            <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>
              {text}
            </p>
          )}
        </div>
  );
  }
);
    </div>
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';
export default OptimizedLoadingSpinner;
