import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// Lazy load components for better performance
interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({ 
  children, 
  fallback = <DefaultLoadingSpinner /&gt; </DefaultLoadingSpinner&gt;}) => {
  return (
    <div>Content</div>
  );
    <Suspense fallback = {fallback}></Suspense>
      {children}
    </Suspense>;
  );
};
const DefaultLoadingSpinner: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
    <div className="text-center"></div>
      <div className="animate-spinrounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-whitetext-lg">Loading...</p>
    </div>
  </div>;
);
// Skeleton loaders for different components;
  <div className = "bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 animate-pulse"></div>
    <div className="w-16h-16bg-s late-700 rounded-full mb-6"></div>
    <div className="h-6bg-slate-700 rounded mb-4"></div>
    <div className="h-4bg-slate-700 rounded mb-2"></div>
    <div className="h-4bg-slate-700 rounded w-3/4"></div>
  </div>;
);
  <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
    <div className="text-centermax-w-4xl mx-auto px-4"></div>
      <div className="h-16bg-slate-700 rounded mb-6 animate-pulse"></div>
      <div className="h-6bg-slate-700 rounded mb-4 animate-pulse"></div>
      <div className="h-6bg-slate-700 rounded mb-8 w-3/4 mx-auto animate-pulse"></div>
      <div className="flexflex-col sm:flex-row gap-4 justify-center"></div>
        <div className="h-12bg-slate-700 rounded w-48 animate-pulse"></div>
        <div className="h-12bg-slate-700 rounded w-48 animate-pulse"></div>
      </div>
    </div>
  </div>;
);
  <nav className = "fixedtop-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50"></nav>
    <div className="containermx-auto px-4 py-4"></div>
      <div className="flex items-center justify-between"></div>
        <div className="h-8bg-slate-700 rounded w-32 animate-pulse"></div>
        <div className="hiddenmd:flex space-x-8"></div>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4bg-slate-700 rounded w-16 animate-pulse"></div>
          ))}
        </div>
        <div className="h-10bg-slate-700 rounded w-24 animate-pulse"></div>
      </div>
    </div>
  </nav>;
);
export default function LoadingOptimizer() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <>
      <Helmet >
        <title>Loading Optimizer - Zion Tech Group</title>
        <meta name = "description" content="Professional loading optimizer by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Loading Optimizer</h1>
          <p className="text-lg text-gray-300 mb-8">Professional loading optimizer coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}