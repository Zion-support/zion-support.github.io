import React from 'react';
interface EnhancedLoadingProps 
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = (
}) => 
        {/* Animated Logo/Icon */}
        <div className="mb-8" />
          <div className="w-20 h-20 mx-auto relative" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-spin" />
            <div className="absolute inset-2 rounded-full bg-slate-900 flex items-center justify-center" />
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Message */}
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse" />
          {message}
        </h2>

        {/* Progress Bar */}
        
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-2" />
              {Math.round(progress)}% Complete
            </p>
          </div>
        )}

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2" />
          
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-bounce"
              style=
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            ></div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-gray-400 text-sm mt-6 max-w-md mx-auto" />
          Preparing your experience with cutting-edge technology...
        </p>
      </div>
    </div>
  );
};

export default EnhancedLoading;
