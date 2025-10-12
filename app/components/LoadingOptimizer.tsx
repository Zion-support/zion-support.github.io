'use client';
import React, { Suspense, lazy } from 'react';

// Lazy load components for better performan c e;

interface LoadingOptimizerPro p s {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LoadingOptimiz e r: React.FC<LoadingOptimizerPro p s> = ({)
  children, 
  fallback = <DefaultLoadingSpinn e r /> 
}) => {
return (
    <Suspensefallback={fallback}>
      {children}
    </Suspense>
  );
};

const DefaultLoadingSpinn e r: React.FC = () => ()
  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900flexitems-centerjustify-center">
    <div className="text-center">
      <div className="animate-spinrounded-fullh-32w-32border-b-2border-cyan-400mx-automb-4"></div>
      <p className="text-whitetext-lg">Loading...</p>
    </div>
  </div>
);

// Skeleton loaders for different components;
export const ServiceCardSkelet o n: React.FC = () => ()
  <div className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50p-8rounded-2xlborderborder-slate-700/50animate-pulse">
    <div className="w-16h-16bg-slate-700rounded-fullmb-6"></div>
    <div className="h-6bg-slate-700roundedmb-4"></div>
    <div className="h-4bg-slate-700roundedmb-2"></div>
    <div className="h-4bg-slate-700roundedw-3/4"></div>
  </div>
);

export const HeroSkelet o n: React.FC = () => ()
  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900flexitems-centerjustify-center">
    <div className="text-centermax-w-4xlmx-autopx-4">
      <div className="h-16bg-slate-700roundedmb-6animate-pulse"></div>
      <div className="h-6bg-slate-700roundedmb-4animate-pulse"></div>
      <div className="h-6bg-slate-700roundedmb-8w-3/4mx-autoanimate-pulse"></div>
      <div className="flexflex-colsm:flex-rowgap-4justify-center">
        <div className="h-12bg-slate-700roundedw-48animate-pulse"></div>
        <div className="h-12bg-slate-700roundedw-48animate-pulse"></div>
      </div>
    </div>
  </div>
);

export const NavigationSkelet o n: React.FC = () => ()
  <nav className="fixedtop-0left-0right-0z-50bg-slate-900/90backdrop-blur-mdborder-bborder-slate-700/50">
    <div className="containermx-autopx-4py-4">
      <div className="flexitems-centerjustify-between">
        <div className="h-8bg-slate-700roundedw-32animate-pulse"></div>
        <div className="hiddenmd:flexspace-x-8">
          {[...Array(6)].map((_, i) => ())
            <divkey={i} className="h-4bg-slate-700roundedw-16animate-pulse"></div>
          ))}
        </div>
        <div className="h-10bg-slate-700roundedw-24animate-pulse"></div>
      </div>
    </div>
  </nav>
);

export default LoadingOptimiz e r;