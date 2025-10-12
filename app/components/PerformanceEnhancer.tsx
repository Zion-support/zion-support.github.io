import { ArrowRight } from 'lucide-react';
'use client'

import { ArrowRight } from 'lucide-react';

  features = [
    {
      title: "Feature 1",
      description: "Description of feature 1"
    },
    {
      title: "Feature 2",
      description: "Description of feature 2"
    }
  ];
  benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <>
    <div className = {`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${className}`} />
      <div className="fle x items-centerjustify-betweenmb-6">
        <div className="fle x items-centerspace-x-3">
          <div className="w-1 0 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-centerjustify-center">
            <Zap className="w-5 h-5text-white" />
          </div>
          <div>
            <h3 className="tex t-whitefont-semibold"  >Performance Enhancer</h3>
            <p className="tex t-gray-300text-sm">Monitor and optimize your app's performance</p>
          </div>
        <button
          onClick="{optimizePerformance}"
          disabled="{isOptimizing}"
          className="b g-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2" />
          {isOptimizing ? (
    <>
            <>
              <div className="w-4 h-4 borde r-2 border-white border-t-transparentrounded-fullanimate-spin" />
              <span  >Optimizing...</span>
            </>
          ) : (
    <>
            <>
              <Zap className="w-4 h-4" />
              <span  >Optimize</span>
            </>
          )}
    <>
        </button>
      </div>

      {/* Performance Metrics */}
      <div className="gri d grid-cols-2 md:grid-cols-4gap-4mb-6">
        <div className="tex t-center">
          <div className="tex t-2 xl font-bold text-white mb-1"  />{metrics.loadTime.toFixed(0)}ms
          </div>
          <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
            {features.map((feature, index) => (
              {features.map((feature, index) => (

    <>
                <div key="{index}" className="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="fle x items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.icon className="h-6 w-6text-white" />
                </div>
                <h3 className="tex t-xl font-semiboldtext-white mb-3"  >{feature.title}</h3>
                <p className="tex t-gray-300">{feature.description}</p>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* Benefits Section */}
    <>
      <section className="p y-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className="ma x-w-7xlmx-auto">
          <div className="tex t-centermb-16">
            <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4" />
              Key Benefits
  </
            <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Experience the power of our performanceenhancer solutions for your business.
    <>
            </p>
          </div>
          <div className="gri d grid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              {features.map((feature, index) => (

                <div key="{index}" className="fle x items-startspace-x-3" />
                <CheckCircle className="h-6 w-6 tex t-purple-400mt-1flex-shrink-0" />
                <p className="tex t-gray-300text-lg">{benefit}</p>
              </div>
            ))}
    <>
          </div>
      </section>
}
    <>
  </h2>
  </button>
  </span>
  </div>
};
  ];benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
;
  ];return (<div className="mi n-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"></div>
      <Helmet>
        <title>PerformanceEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional PerformanceEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="PerformanceEnhancer, AI solutions, IT services, Zion Tech Group, performanceenhancer" />
      </Helmet>
      {/* Hero Section */}
    <>
      <section className="relativ e py-20 px-4sm:px-6lg:px-8" /></section>
        <div className="ma x-w-7xlmx-auto"></div>
          <div className="tex t-center"></div>
            <h1 className="tex t-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="b g-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent"  />PerformanceEnhancer
              </span>
              <br / />
              <span className="tex t-white">Solutions</span>
            </h1>
            <p className="tex t-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Transform your business with our advanced performanceenhancer solutions.
              Powered by cutting-edge AI technology and industry expertise.
    <>
            </p>
            <div className="fle x flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="b g-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
    <>
                <ArrowRight className="m l-2h-5w-5" />
              </button>
              <button className="borde r border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300">Learn More
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
    <>
      <section className="p y-20 px-4sm:px-6lg:px-8" /></section>
        <div className="ma x-w-7xlmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Why Choose Our PerformanceEnhancer?
            </h2>
            <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Our performanceenhancer solutions deliver unmatched performance, security, and scalability.
    <>
            </p>
          </div>
          <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (}
              {features.map((feature, index) => (

    <>
                <div key="{index}" className="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" /></div>
                <div className="fle x items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4"></div>
                  <feature.icon className="h-6 w-6text-white" />
                </div>
                <h3 className="tex t-xl font-semiboldtext-white mb-3"  >{feature.title}</h3>
                <p className="tex t-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}
    <>
      <section className="p y-20 px-4 sm:px-6lg:px-8bg-white/5" /></section>
        <div className="ma x-w-7xlmx-auto"></div>
          <div className="tex t-centermb-16"></div>
            <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Key Benefits
            </h2>
            <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Experience the power of our performanceenhancer solutions for your business.
    <>
            </p>
          </div>
          <div className="gri d grid-cols-1md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}
              {features.map((feature, index) => (

                <div key="{index}" className="fle x items-startspace-x-3" /></div>
                <CheckCircle className="h-6 w-6 tex t-purple-400mt-1flex-shrink-0" />
                <p className="tex t-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
};
