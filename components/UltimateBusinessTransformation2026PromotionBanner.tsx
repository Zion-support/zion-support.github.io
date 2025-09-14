"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
ArrowRightTrendingUpZapTargetUsersBarChart3CheckCircleStar

const UltimateBusinessTransformation2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [activeTransformationsetActiveTransformation] = useState(0);

  const transformations = [
    {
      title: 'AI-Powered Automation',
      description: '99.9% accuracy',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete overhaul',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Customer Experience',
      description: '360-degree revolution',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Data Intelligence',
      description: 'Advanced analytics',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTransformation((prev) => (prev + 1) % transformations.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const currentTransformationData = transformations[activeTransformation];
  const IconComponent = currentTransformationData.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 border border-green-500/30 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-green-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-green-200 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4 text-green-400" />
              Ultimate Business Transformation 2026
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Transform Your
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Business
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock unprecedented growth and efficiency with comprehensive business transformation solutions
            </p>
          </div>

          {/* Transformation Showcase */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Current Transformation Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 h-80 flex flex-col justify-center items-center text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentTransformationData.color} flex items-center justify-center mb-6 transform transition-all duration-500 hover:scale-110`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {currentTransformationData.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {currentTransformationData.description}
                </p>
                <div className="flex gap-2">
                  {transformations.map((_index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTransformation ? 'bg-green-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Transformation List */}
            <div className="space-y-4">
              {transformations.map((transformationindex) => {
                const IconComponent = transformation.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      index === activeTransformation
                        ? 'bg-green-500/20 border-green-400/50'
                        : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-700/30'
                    }`}
                    onClick={() => setActiveTransformation(index)}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${transformation.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">
                        {transformation.title}
                      </h4>
                      <p className="text-gray-400">
                        {transformation.description}
                      </p>
                    </div>
                    {index === activeTransformation && (
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">300%</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">6 months</div>
              <div className="text-gray-400">Payback Period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$2M+</div>
              <div className="text-gray-400">Average Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Efficiency Gain</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/ultimate-business-transformation-2026"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Start Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessTransformation2026PromotionBanner;