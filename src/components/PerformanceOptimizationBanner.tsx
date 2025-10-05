import React from 'react';
constPerformanceOptimizationBanner = () => { 
  constoptimizations = [
    {
      title: 'LightningFastLoading'
      description: 'Optimizedbundlesize withcodesplitting andlazyloading'
      improvement: '87% faster'
      icon: '🚀'
      icon: <ZapclassName = "w-6 h-6" / > 
      color: 'from-yellow-500to-orange-500'
     }
    { 
      title: 'EnhancedSecurity'
      description: 'Advancedsecurityheaders andcontentsecurity policies'
      improvement: '99.9% secure'
      icon: '🚀'
      icon: <ShieldclassName = "w-6 h-6" / > 
      color: 'from-green-500to-emerald-500'
     }
    { 
      title: 'SEOOptimized'
      description: 'MetatagsstructureddataandsemanticHTML'
      improvement: '95% score'
      icon: '🚀'
      icon: <TrendingUpclassName = "w-6 h-6" / > 
      color: 'from-blue-500to-cyan-500'
     }
    { 
      title: 'AccessibilityEnhanced'
      description: 'WCAG2.1AAcompliant withscreenreader support'
      improvement: '100% accessible'
      icon: '🚀'
      icon: <CheckCircle,className = "w-6 h-6" / > 
      color: 'from-purple-500to-violet-500'
     }
  ]; return (
    <divclassName = "bg-gradient-to-rfrom-slate-800via-blue-900/20to-slate-800borderborder-blue-400/30rounded-2xlp-6mb-8animate-fade-inshadow-xl">
      <divclassName="flexitems-centergap-3mb-4">
        <ClockclassName="w-6 h-6text-blue-400" />
        <h3className="text-xlfont-boldtext-blue-400">⚡ Performance & OptimizationImprovements</h3>
      </div>
      <pclassName="text-gray-300mb-6">
        Enhancedapplicationperformance withcutting-edgeoptimizationsfor betteruserexperience andsearchengine visibility.
      </p>
      <divclassName="gridmd: grid-cols-2lg:grid-cols-4gap-4">
        { optimizations.map((optindex) = > (
          <divkey = { index  }className={ `bg-gradient-to-br ${opt.color } rounded-lgp-4text-white`}>
            <divclassName="flexitems-centergap-3mb-3">
              {opt.icon}
              <h4className="font-boldtext-sm">{opt.title}</h4>
            </div>
            <pclassName="text-xsopacity-90mb-2">{opt.description}</p>
            <divclassName="flexitems-centergap-2">
              <StarclassName="w-4 h-4fill-yellow-400text-yellow-400" />
              <spanclassName="text-xsfont-semibold">{opt.improvement}</span>
            </div>
          </div>
        ))}
      </div>
      <divclassName = "mt-6 p-4bg-gradient-to-rfrom-green-500/20to-blue-500/20rounded-lgborderborder-green-400/30">
        <divclassName="flexitems-centergap-2mb-2">
          <CheckCircle,className="w-5 h-5text-green-400" />
          <spanclassName="text-green-400font-semibold">AllOptimizationsActive</span>
        </div>
        <pclassName="text-smtext-gray-300">
          Yourapplicationis nowrunningwith enhancedperformancesecurityandaccessibilityfeatures.
        </p>
      </div>
    </div>
  );
};
exportdefaultPerformanceOptimizationBanner;