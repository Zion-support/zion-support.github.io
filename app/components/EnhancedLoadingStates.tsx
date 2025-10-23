'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

interface EnhancedLoadingStatesProps {
  className?: string;
}

const EnhancedLoadingStates: React.FC<EnhancedLoadingStatesProps> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800">
        EnhancedLoadingStates
      </h2>
      <p className="text-gray-600">
        This component is under construction.
      </p>
    </div>
  );
};

export default EnhancedLoadingStatesPage;
sm: 'w-4 h-4',
md: 'w-8 h-8',
lg: 'w-12h-1 2'}
return(<divclassName="flex flex-colitems-centerjustify-centerp-8"><Loader2className={`${sizeClasses[size]} animate-spin text-blue-500`} />{text &&(<pclassName="mt-2text-smtext-gray-500">{text}</p>)}</di>)
}
return (
    <div className="flex flex-col items-center justify-center p-8">
<Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
{text && (
<p className="mt-2 text-sm text-gray-500">{text}</p>
)}
</div>
)
}
export const PageLoader: React.FC = () => (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
<Brain className="w-8 h-8 text-white" />
</div>
<h2 className="text-xl font-semibold text-white mb-2">Zion Tech Group</h2>
<p className="text-gray-300">Loading amazing content...</p>
</div>
</div>
)
export const ServiceCardSkeleton: React.FC = () => (
<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse">
<div className="w-16 h-16 bg-gray-600 rounded-2xl mb-6"></div>
<div className="h-6 bg-gray-600 rounded mb-4"></div>
<div className="h-4 bg-gray-600 rounded mb-4"></div>
<div className="space-y-2">
<div className="h-3 bg-gray-600 rounded"></div>
<div className="h-3 bg-gray-600 rounded"></div>
<div className="h-3 bg-gray-600 rounded w-3/4"></div>
</div>
</div>
)
export const StatsSkeleton: React.FC = () => (
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">{Array.from({ length: 4 }).map((_, index) => (</div>
<div key={index} className="text-center animate-pulse">
<div className="h-8 bg-gray-600 rounded mb-2"></div>
<div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
</div>
))}
</div>
)
export const ContentSkeleton: React.FC = () => (
<div className="space-y-6 animate-pulse">
<div className="h-8 bg-gray-600 rounded w-3/4"></div>
<div className="space-y-2">
<div className="h-4 bg-gray-600 rounded"></div>
<div className="h-4 bg-gray-600 rounded"></div>
<div className="h-4 bg-gray-600 rounded w-2/3"></div>
</div>
</div>
)
