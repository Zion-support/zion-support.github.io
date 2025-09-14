"use client";
import React{ useStateuseEffect } from 'react';
import Link from 'next/link';
ArrowRightTrendingUpZapTargetUsersBarChart3CheckCircleStar

const UltimateBusinessTransformation2026 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [activeTransformationsetActiveTransformation] = useState(0);

  const transformations = [
    {
      title: 'AI-Powered Automation',
      description: 'Complete business process automation with 99.9% accuracy',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      metrics: {
        efficiency: '95%',
        costReduction: '80%',
        timeSaved: '40 hours/week'
      },
      benefits: ['Automated Workflows'Smart Decision Making'Predictive Analytics']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital overhaul of business operations',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      metrics: {
        efficiency: '90%',
        costReduction: '70%',
        timeSaved: '35 hours/week'
      },
      benefits: ['Cloud Migration'API Integration'Data Analytics']
    },
    {
      title: 'Customer Experience Revolution',
      description: '360-degree customer experience transformation',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      metrics: {
        efficiency: '85%',
        costReduction: '60%',
        timeSaved: '30 hours/week'
      },
      benefits: ['Personalization'Omnichannel'Real-time Support']
    },
    {
      title: 'Data-Driven Intelligence',
      description: 'Advanced analytics and business intelligence systems',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      metrics: {
        efficiency: '88%',
        costReduction: '75%',
        timeSaved: '25 hours/week'
      },
      benefits: ['Predictive Modeling'Real-time Insights'Automated Reporting']
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      transformation: 'AI-Powered Automation',
      results: '300% ROI in 6 months',
      testimonial: 'The transformation was incredible. We automated 90% of our processes and saw immediate results.'
    },
    {
      company: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      transformation: 'Digital Transformation',
      results: '500% efficiency increase',
      testimonial: 'Our production capacity doubled while reducing costs by 60%.'
    },
    {
      company: 'RetailMax',
      industry: 'Retail',
      transformation: 'Customer Experience Revolution',
      results: '400% customer satisfaction',
      testimonial: 'Customer retention increased by 200% and sales grew by 150%.'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTransformation((prev) => (prev + 1) % transformations.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const currentTransformation = transformations[activeTransformation];
  const IconComponent = currentTransformation.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 border border-green-500/30 rounded-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-blue-600/20 to-green-600/20 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.3),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full text-green-200 text-lg font-medium mb-6">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Ultimate Business Transformation 2026
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Business
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unlock unprecedented growth and efficiency with our comprehensive business transformation solutions powered by cutting-edge AI and automation
            </p>
          </div>

          {/* Main Transformation Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Current Transformation Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-green-500/30 rounded-3xl p-10 h-96 flex flex-col justify-center items-center text-center">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${currentTransformation.color} flex items-center justify-center mb-8 transform transition-all duration-500 hover:scale-110 shadow-2xl`}>
                  <IconComponent className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {currentTransformation.title}
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  {currentTransformation.description}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl px-4 py-2">
                    <div className="text-green-200 font-bold text-lg">{currentTransformation.metrics.efficiency}</div>
                    <div className="text-green-300 text-sm">Efficiency</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl px-4 py-2">
                    <div className="text-green-200 font-bold text-lg">{currentTransformation.metrics.costReduction}</div>
                    <div className="text-green-300 text-sm">Cost Reduction</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl px-4 py-2">
                    <div className="text-green-200 font-bold text-lg">{currentTransformation.metrics.timeSaved}</div>
                    <div className="text-green-300 text-sm">Time Saved</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {currentTransformation.benefits.map((benefitindex) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-500/20 border border-green-400/30 rounded-full text-green-200 text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Transformation Navigation */}
            <div className="space-y-4">
              {transformations.map((transformationindex) => {
                const IconComponent = transformation.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                      index === activeTransformation
                        ? 'bg-green-500/20 border-green-400/50 shadow-lg shadow-green-500/20'
                        : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-700/30'
                    }`}
                    onClick={() => setActiveTransformation(index)}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${transformation.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {transformation.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {transformation.description}
                      </p>
                    </div>
                    {index === activeTransformation && (
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Success Stories
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((storyindex) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{story.company}</h4>
                      <p className="text-green-400 text-sm">{story.industry}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{story.testimonial}"</p>
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl px-4 py-2 text-center">
                    <span className="text-green-200 font-bold">{story.results}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROI Calculator Preview */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              Calculate Your ROI
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <div className="text-gray-400 text-lg">Average ROI</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">6 months</div>
                <div className="text-gray-400 text-lg">Payback Period</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">$2M+</div>
                <div className="text-gray-400 text-lg">Average Savings</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of businesses that have already transformed their operations and achieved unprecedented growth
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ultimate-business-transformation-2026"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Start Transformation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-green-400 text-green-200 font-semibold rounded-xl hover:bg-green-500/10 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateBusinessTransformation2026;