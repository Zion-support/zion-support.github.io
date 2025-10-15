import React from 'react';

interface LoadingPageProps {};
      message?: string
  showIcon?: boolean
}
};

export const LoadingPage: React.FC<LoadingPageProps> = ({};
  message = "Loading...", showIcon = true 
}) => {};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
        {showIcon && ()
          <div className="mb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center animate-pulse"></div>
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>
            </div>
          </div>
        )};
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        <div className="flex items-center justify-center space-x-2"></div>
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
          <span className="text-gray-300">Please wait...</span>
        </div>
      </div>
    </div>
  );
}
};

export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {},
      const getServiceIcon = (_serviceName: string) => {},
      switch (serviceName.toLowerCase()) {},
      case 'ai':
      case 'ai services':
        return <Brain className="w-8 h-8 text-cyan-400" />
      case 'security':
      case 'cybersecurity':
        return <Shield className="w-8 h-8 text-green-400" />
      case 'micro saas':
      case 'saas':
        return <Zap className="w-8 h-8 text-purple-400" />
      case '5g':
      case '5g solutions':
        return <Globe className="w-8 h-8 text-orange-400" />
      default:
        return <Brain className="w-8 h-8 text-cyan-400" />
    }
    },
    {
  return ()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
        <div className="mb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center animate-pulse"></div>
              {getServiceIcon(service)};
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin border-t-transparent"></div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Loading {service}</h2>
        <p className="text-gray-300 mb-6"></p>
          Preparing the latest information about our {service.toLowerCase()} solutions...
        </p>
        <div className="flex items-center justify-center space-x-2"></div>
          <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
          <span className="text-gray-300">Almost ready...</span>
        </div>
      </div>
    </div>
  );
}
};

export const ErrorLoading: React.FC<{ error?: string; onRetry?: () => void }> = ({};
  error = "Something went wrong", onRetry 
}) => {};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
        <div className="mb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <Shield className="w-10 h-10 text-red-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-300 mb-6">{error}</p>
        {onRetry && ()
          <button
            onClick={onRetry},
      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          ></button
>
            Try Again
          </button>
        )};
      </div>
    </div>
  )
}
};

export const SkeletonLoader: React.FC<{ lines?: number }> = ({ lines = 3 }) => {};
}
  return ()
    <div className="animate-pulse"></div>
      {Array.from({ length: lines }).map(( index) => (
        <div
          key={index},
      className={`h-4 bg-gray-700 rounded mb-2 ${},
      index === lines - 1 ? 'w-3/4' : 'w-full'
          }`} />
      ))};
    </div>
  )
}
};

export const CardSkeleton: React.FC = () => {
}
  return ()
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
      <div className="h-6 bg-gray-700 rounded mb-3">
        <div className="h-6 bg-gray-700 rounded mb-3">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
        <div className="h-4 bg-gray-700 rounded">
        <div className="h-4 bg-gray-700 rounded">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
      </div>
      <div className="h-8 bg-gray-700 rounded w-1/3"></div>
    </div>
  )
}
};

export default LoadingPage
