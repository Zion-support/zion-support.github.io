import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, CheckCircle, ArrowRight, Star, Award, Cpu, Globe } from 'lucide-react';

const EdgeComputingSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Ultra-Low Latency",
      description: "Process data locally with sub-millisecond response times for real-time applications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Distributed Processing",
      description: "Distribute computing power across edge nodes for optimal performance and reliability"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Local data processing reduces security risks and ensures data privacy"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI at the Edge",
      description: "Run machine learning models locally for instant decision making"
    }
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small IoT deployments and edge applications",
      features: [
        "Up to 10 edge nodes",
        "Basic edge computing platform",
        "Standard monitoring",
        "Email support",
        "Cloud backup"
      ],
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for medium-scale edge computing deployments",
      features: [
        "Up to 50 edge nodes",
        "Advanced edge platform",
        "Real-time monitoring",
        "Priority support",
        "Custom configurations",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large-scale edge computing infrastructure",
      features: [
        "Unlimited edge nodes",
        "Enterprise edge platform",
        "Advanced monitoring & alerting",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Real-time quality control, predictive maintenance, and process optimization",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Autonomous Vehicles",
      description: "Local processing for navigation, object detection, and decision making",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Smart Cities",
      description: "Traffic management, environmental monitoring, and public safety systems",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "Healthcare",
      description: "Real-time patient monitoring, medical imaging, and emergency response",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      metric: "99.9%",
      description: "Uptime guarantee"
    },
    {
      metric: "< 1ms",
      description: "Latency response time"
    },
    {
      metric: "50%",
      description: "Reduction in bandwidth costs"
    },
    {
      metric: "24/7",
      description: "Monitoring and support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group | Distributed Computing Platform</title>
        <meta name="description" content="Revolutionary edge computing solutions with ultra-low latency, distributed processing, and AI at the edge. Perfect for IoT, smart cities, and real-time applications." />
        <meta name="keywords" content="edge computing, distributed computing, iot, real-time processing, low latency, smart cities, autonomous vehicles" />
        <meta property="og:title" content="Edge Computing Solutions - Zion Tech Group" />
        <meta property="og:description" content="Next-generation edge computing for real-time applications" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/edge-computing-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Edge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Computing Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Bring computing power closer to your data with ultra-low latency edge solutions. 
                Process data locally for real-time applications and enhanced performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Request Demo
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Architecture
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Edge Computing Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your applications with distributed edge computing capabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <div className="text-gray-300 text-lg">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Edge Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful edge computing capabilities for modern applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Edge Computing Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-world applications powered by our edge computing platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-center">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Edge Computing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect edge computing solution for your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy Edge Computing?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your applications with ultra-low latency edge computing. 
                Request a demo to see how edge computing can accelerate your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Request Demo
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EdgeComputingSolutionsPage;