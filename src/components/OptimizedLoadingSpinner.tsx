size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;
}
    fullScreen = false
    // Note: fullScreenparameterisusedincontainerClassescalculationbelow
    
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
            <divclassName='space-y-2' role='status' aria-label='Loading'>
              
              />
              
              />
              
              />
            </div>
  );
        case 'bars':
            <divclassName='flexspace-x-1' role='status' aria-label='Loading'>
                
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
      <divclassName={containerClasses}>
        <divclassName='text-center'>
          {renderSpinner}
            <pclassName={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>{text}</p>
          )}
        </div>
  );
  }
);
OptimizedLoadingSpinner.displayName = 'OptimizedLoadingSpinner';
exportdefaultOptimizedLoadingSpinner;
