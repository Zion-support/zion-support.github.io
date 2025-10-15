import React, {  useEffect } from 'react';

interface LoadingState {
  isLoading: boolean;
  progress: number;
  message: string;
}

const AdvancedLoadingStates: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    progress: 0,
    message: 'Loading...'
  });

  useEffect(() => {
    // Simulate loading states for different scenarios
    const simulateLoading = () => {
      setLoadingState({
        isLoading: true,
        progress: 0,
        message: 'Initializing...'
      });

      const interval = setInterval(() => {
        setLoadingState(prev => {
          const newProgress = prev.progress + Math.random() * 20;
          let message = 'Loading...';
          
          if (newProgress < 30) {
            message = 'Loading resources...';
          } else if (newProgress < 60) {
            message = 'Processing data...';
          } else if (newProgress < 90) {
            message = 'Finalizing...';
          } else {
            message = 'Almost done...';
          }

          if (newProgress >= 100) {
            clearInterval(interval);
            return {
              isLoading: false,
              progress: 100,
              message: 'Complete!'
            };
          }

          return {
            ...prev,
            progress: Math.min(newProgress, 100),
            message
          };
        });
      }, 500);

      return () => clearInterval(interval);
    };

    const timeout = setTimeout(simulateLoading, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Loading</h2>
            <p className="text-gray-300">{loadingState.message}</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Progress</span>
              <span>{Math.round(loadingState.progress)}%</span>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingState.progress}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gray-400">Data</div>
              </div>
              
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gray-400">Processing</div>
              </div>
              
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="text-xs text-gray-400">Ready</div>
              </div>
            </div>
          </div>

          {!loadingState.isLoading && loadingState.progress === 100 && (
            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedLoadingStates;