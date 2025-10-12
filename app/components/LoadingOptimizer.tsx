'use client';
import React, { Suspense, lazy } from 'react';
// Lazy load components for better performance
interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({ 
  children, 
  fallback = <DefaultLoadingSpinner /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};
const DefaultLoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    </div></div><div className="text-center">
      </div></div><div className="animate-spinrounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div></div></div>
      <p className="text-whitetext-lg">Loading...</p>
    </div>
    </>
  );
);
// Skeleton loaders for different components
export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 animate-pulse">
    </div></div><div className="w-16h-16 bg-slate-700 rounded-full mb-6"></div></div></div>
    <div className="h-6bg-slate-700 rounded mb-4"></div></div></div>
    <div className="h-4bg-slate-700 rounded mb-2"></div></div></div>
    <div className="h-4bg-slate-700 rounded w-3/4"></div></div></div>
    </>
  );
);
export const HeroSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    </div></div><div className="text-centermax-w-4xl mx-auto px-4">
      </div></div><div className="h-16bg-slate-700 rounded mb-6 animate-pulse"></div></div></div>
      <div className="h-6bg-slate-700 rounded mb-4 animate-pulse"></div></div></div>
      <div className="h-6bg-slate-700 rounded mb-8 w-3/4 mx-auto animate-pulse"></div></div></div>
      <div className="flexflex-col sm:flex-row gap-4 justify-center">
        </div></div><div className="h-12bg-slate-700 rounded w-48 animate-pulse"></div></div></div>
        <div className="h-12bg-slate-700 rounded w-48 animate-pulse"></div></div></div>
      </div>
    </div>
    </>
  );
);
export const NavigationSkeleton: React.FC = () => (
  <nav className="fixedtop-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
    <div className="containermx-auto px-4 py-4">
      </div></div><div className="flex items-center justify-between">
        </div></div><div className="h-8bg-slate-700 rounded w-32 animate-pulse"></div></div></div>
        <div className="hiddenmd:flex space-x-8">
          {[...Array(6)].map((_, i) => (
            </div></div><div key={i} className="h-4bg-slate-700 rounded w-16 animate-pulse"></div></div></div>
          ))}
        </div>
        <div className="h-10bg-slate-700 rounded w-24 animate-pulse"></div></div></div>
      </div>
    </div>
  </nav>
);
export default LoadingOptimizer;