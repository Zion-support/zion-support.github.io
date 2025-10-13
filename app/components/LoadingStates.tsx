import React from 'react';
 origin/cursor/analyze-improve-and-deploy-application-0ed4
;
import { Loader2 } from 'lucide-react;
export const PageLoader: React.FC = () => {
  return (
<Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );
};
interface LoadingPageProps {
  message?: string;
  showIcon?: boolean;
}
export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showIcon = true ;
}) => {
  return (
    </LoadingPageProps><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center" /><div className="text-center">
        {showIcon && (
          </div><div className="mb-6" /><div className="relative" /><div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center" /><Zap className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping opacity-20" />
            </div>
          </div>
        )}
        <h2 className="text-2xl font-bold text-white mb-2">{message}</h2>
        <p className="text-gray-300">Please wait while we prepare everything for you...</p>
        <div className="mt-6 flex justify-center" /><LoadingSpinner size="lg" className="text-cyan-400" />
        </div>
      </div>
    </div>
  );
};
 origin/cursor/analyze-improve-and-deploy-application-1091;
      </div>
    </div>
) origin/cursor/analyze-improve-and-deploy-application-1247;
}
export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  lines = 3, 
  className = '' 
}) => {
  return (
    </SkeletonLoaderProps><div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        </div><div;
          key={index}
          className={`h-4 bg-gray-300 rounded mb-2 ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4;
    </div>
  );
};
interface ServiceLoadingProps {
  service: 'ai' | 'cybersecurity' | 'cloud' | '5G' | 'data';
}
export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ service }) => {
  const serviceConfig = {
    ai: { icon: </ServiceLoadingProps><Zap className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    cybersecurity: { icon: <Shield className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    cloud: { icon: <Globe className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
    '5G': { icon: <Globe className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
    data: { icon: <Database className="w-6 h-6" />, color: "from-indigo-500 to-purple-500" }
  };
  const config = serviceConfig[service];
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" /><div className="flex items-center space-x-4 mb-4" /><div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${config.color} flex items-center justify-center`}>
          {config.icon}</div>
        </div>
        <div className="flex-1" /><SkeletonLoader lines={2} />
        </div>
      </div>
      <SkeletonLoader lines={3} />
    </div>
  );
};
export default LoadingPage; origin/cursor/analyze-improve-and-deploy-application-0ed4;
 origin/cursor/analyze-improve-and-deploy-application-1091;
 origin/cursor/analyze-improve-and-deploy-application-1232;
 origin/cursor/analyze-improve-and-deploy-application-1247
;