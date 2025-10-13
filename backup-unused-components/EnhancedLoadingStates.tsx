import React from 'react';
interface EnhancedLoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedLoadingStates({ className = '', children }: EnhancedLoadingStatesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="relative mb-8">
            <Loader2 className="w-12 h-12 text-white animate-spin"></div>
</div>

        <h2 className="text-2 xl font-bold text-white mb-4">
            <div className="bg-gray-700 rounded-full h-2"
                style={{ width: `${progress}%` }
//               ></div>
</div>
            <p className="text-sm text-gray-300 mt-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1 s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" />;
//       case 'it':
        return <Shield className="w-16 h-16 text-green-400" />;
//       case '5 g':
        return <Globe className="w-16 h-16 text-orange-400" />;
    }
  };

  const getServiceMessage = () => {
    if (message) return message;

    switch (serviceType) {
//       case 'ai':
        return "Initializing AI Solutions..."Loading IT Services...";
//       case 'saas':
        return ";
//       case '5 g':
        return "Connecting to 5 G Network..."Loading...";
    }
  };

  return (
    <div className="text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin"></div>
</div>

        <h2 className="max-w-md mx-auto">
          <div className="space-y-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="flex items-center space-x-3">
                <div className="text-gray-300">Loading components...</span>
</div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4 s' }}></div>
                <span className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
            <div className="h-6 bg-gray-600 rounded mb-3"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4"></div>
</div>
        );

//       case 'list':
        return (
          <div className="flex items-center space-x-4 animate-pulse">
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
</div>
</div>
            ))}
</div>
        );

//       case 'text':
        return (
          <div className="space-y-2">
                <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                <div className="animate-pulse">
            <div className="animate-pulse bg-gray-600 rounded h-4"></div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-500/20 flex items-center justify-center">
          <Loader2 className="text-2 xl font-bold text-white mb-4">Loading Error</h2>
        <p className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
//           >
//             Try Again
</button>
        )}
</div>
</div>
  );
};

interface ProgressLoadingProps {
  progress: number;
  message: string;
  subMessage?: string;
}

export const ProgressLoading: React.FC<ProgressLoadingProps> = ({
//   progress,
//   message,
//   subMessage
}) => {
  return (
    <div className="text-center max-w-md mx-auto">
        <div className="w-32 h-32 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"
            style={{ animationDuration: '2 s' }
//           ></div>
</div>

        <h2 className="text-gray-300 mb-6">{subMessage}</p>
        )}

        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }
//           ></div>
</div>

        <div className=">
          {Array.from({ length: 10 }).map((_, index) => (
//             <div
              key={index}
              className={`w-2 h-2 rounded-full animate-pulse ${
                index < (progress / 10) ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }
//             ></div>
          ))}
</div>
</div>
</div>
  );
};

export default LoadingPage;
  );
