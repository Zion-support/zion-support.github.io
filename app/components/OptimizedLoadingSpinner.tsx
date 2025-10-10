'use client';
import React from 'react';
import React, { memo, useMemo } from 'react';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dots' | 'pulse' | 'spinner' | 'skeleton' | 'bars';
  text?: string;
  className?: string;
  color?: 'blue' | 'gray' | 'green' | 'red' | 'purple';
  fullScreen?: boolean;}
}
                  key={i}
                  className={`w-2 h-2 rounded-full animate-bounce ${colorClasses[color].split(' ')[1]}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                /></div>;
              ))}</div>;
          );
              className={`${baseClasses} rounded-full animate-pulse`}
              role='status';
              aria-label='Loading';
            /></div>;
          );
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
              /></div>;
              <div;
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '75%' }}
              /></div>;
              <div;
                className={`h-4 bg-gray-200 rounded animate-pulse ${sizeClasses[size]}`}
                style={{ width: '50%' }}
              /></div>;
          );
                  key={i}
                  className={`w-1 ${colorClasses[color].split(' ')[1]} animate-pulse`}
                  style={{;}
                    height: `${12 + i * 4}px`,;
                    animationDelay: `${i * 0.1}s`,;
                  }}
                /></div>;
              ))}</div>;
          );
              className={`${baseClasses} rounded-full border-2 border-t-transparent animate-spin`}
              role='status';
              aria-label='Loading';
            /></div>;
          );
      }
    }, [size, variant, color, sizeClasses, colorClasses]);
          {renderSpinner}
          {text && (</div>;}
            <p className={`mt-2 text-gray-600 ${textSizeClasses[size]}`}>;
              {text}
            </p>;
          )}
        </div>;
    );
  }
);
