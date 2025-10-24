import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface LoadingstatesProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Loadingstates({ className = '', children, ...props }: LoadingstatesProps) {
  return (
    <div className={`loadingstates-component ${className}`} {...props}>
      {children}
    </div>
<<<<<<< HEAD
  );
}
=======
=======

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
      <p className="text-cyan-400 text-lg">Loading...</p>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
<<<<<<< HEAD
  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 animate-pulse">
    <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4"></div></div>
    <div className="h-6 bg-gray-600 rounded mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-600 rounded"></div></div>
      <div className="h-4 bg-gray-600 rounded w-3/4"></div>
    </div>
  </div>
);

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div></div>
  </div>
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
  <div className="bg-gray-800 rounded-xl p-8 animate-pulse">
    <div className="h-8 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
  </div>
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="absolute inset-2 rounded-full border-4 border-pink-500border-t-transparentanimate-spin" style="{{" animationDirection: 'reverse', animationDuration: '1.5 s'}}   /></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="absolute inset-4 rounded-full border-4 border-cyan-500border-t-transparentanimate-spin" style="{{" animationDuration: '2 s'}}   /></div>
        </div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <h3 className="text-2 xl font-bold text-whitemb-2"  >Loading Zion Tech Group</h3>
          <p className="text-gray-300">Initializing advanced AI systems...</p>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="w-2h-2bg-pi n k-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.1 s'}}   /></div>
            <div className="w-2h-2bg-cy a n-500rounded-fullanimate-bounce" style="{{" animationDelay: '0.2 s'}}   /></div>
        </div>
=======

const LoadingStates: React.FC<LoadingStatesProps> = () => {
  return (
    <div className="loadingstates">
      <h2>LoadingStates</h2>
      <p>Component content coming soon.</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
    </div>
  );
};

<<<<<<< HEAD
  const sizeClasses = {sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'};
  return (
    <Loader2 const className = {`animate-spin text-purple-500 ${sizeClasses[size]}`}    /></Loader2>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="w-3h-3bg-gr a dient-to-r from-pink-500 to-cyan-500rounded-fullanimate-pulse" style="{{" animationDelay: '0.2 s'}}   /></div>
      <div className="w-3h-3bg-gr a dient-to-r from-cyan-500 to-green-500rounded-fullanimate-pulse" style="{{" animationDelay: '0.4 s'}}   /></div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="absolute top-2 left-2 w-8 h-8 border-4 border-pink-500 border-t-transparentrounded-fullanimate-spin" style="{{" animationDirection: 'reverse'}}   /></div>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500opacity-30animate-pulse" style="{{" animationDelay: '0.5 s'}}   /></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-green-500opacity-40animate-pulse" style="{{" animationDelay: '1 s'}}   /></div>
        <div className="absolute inset-6 rounded-full bg-gradient-to-r from-green-500 to-purple-500opacity-50animate-pulse" style="{{" animationDelay: '1.5 s'}}   /></div>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Brain className="w-5h-5ml-2"   /></Brain>
      <Zap className="w-6 h-6tex t-pink-500animate-pulse" style="{{" animationDelay: '0.2 s'}}    /></Zap>
      <Cpu className="w-6 h-6tex t-cyan-500animate-pulse" style="{{" animationDelay: '0.4 s'}}    /></Cpu>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      {Array.from({ length: lines}).map((_, index) => (
        <div key={index} className="animate-pulse"   /></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
  ))}
    </div>
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
    </div>
  );

};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default LoadingStates;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
