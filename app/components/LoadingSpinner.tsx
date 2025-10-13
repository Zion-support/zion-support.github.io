import React from 'react'
import { Zap } from 'lucide-react'
 origin/cursor/analyze-improve-and-deploy-application-13a2

const LoadingSpinner: React.FC = () => {
  return (
lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center">
      <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
      {text && (
        <p className="mt-4 text-gray-300 text-sm font-medium">{text}</p> origin/cursor/analyze-improve-and-deploy-application-139b
      )}
    white: 'text-white',}return(<div className="flex flex-col items-center justify-center space-y-2" role="status" aria-label="Loading">)</div>
      <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-transparent ${sizeClasses[size]}${colorClasses[color]}`}></div>
      {text && (
        <p className={`text-sm ${colorClasses[color]}animate-pulse`}>{text</p>} </p>
 origin/cursor/analyze-improve-and-deploy-application-13a2
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {content}
      </div>
    )
  }

  return content
}

export default LoadingSpinner
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
 origin/cursor/analyze-improve-and-deploy-application-1247
    </div>
    </>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
 origin/cursor/analyze-improve-and-deploy-application-1247
