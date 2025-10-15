import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, AlertTriangle, BarChart3, CheckCircle, ArrowRight, Star, Clock, Users, Award, TrendingUp, Shield } from 'lucide-react';

const AiPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "AI-Powered Predictions",
      description: "Machine learning algorithms predict equipment failures before they occur"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of equipment health with instant alerts and notifications"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics dashboard with predictive insights and trend analysis"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Reduce maintenance costs by up to 40% through intelligent scheduling"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small manufacturing operations",
      features: [
        "Up to 50 equipment units",
        "Basic AI predictions",
        "Email alerts",
        "Standard analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for medium to large facilities",
      features: [
        "Up to 200 equipment units",
        "Advanced AI predictions",
        "Real-time alerts & notifications",
        "Advanced analytics dashboard",
        "Priority support",
        "Custom reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large-scale industrial operations",
      features: [
        "Unlimited equipment units",
        "Premium AI predictions",
        "Custom alert systems",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Predictive maintenance for production lines, CNC machines, and industrial equipment",
      icon: <Wrench className="w-8 h-8" />
    },
    {
      title: "Energy & Utilities",
      description: "Monitor turbines, generators, and power distribution equipment",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Transportation",
      description: "Fleet maintenance for vehicles, aircraft, and railway systems",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Healthcare",
      description: "Medical equipment monitoring and maintenance scheduling",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Reduction in maintenance costs"
    },
    {
      metric: "60%",
      description: "Decrease in unplanned downtime"
    },
    {
      metric: "25%",
      description: "Increase in equipment lifespan"
    },
    {
      metric: "90%",
      description: "Accuracy in failure predictions"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group | Industrial IoT Solutions</title>
        <meta name="description" content="Revolutionary AI-powered predictive maintenance solutions for manufacturing, energy, and industrial operations. Reduce costs, prevent failures, and optimize equipment performance." />
        <meta name="keywords" content="ai predictive maintenance, industrial iot, equipment monitoring, machine learning, maintenance optimization, manufacturing" />
        <meta property="og:title" content="AI Predictive Maintenance - Zion Tech Group" />
        <meta property="og:description" content="AI-powered predictive maintenance for industrial operations" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-predictive-maintenance" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Predictive Maintenance</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your maintenance operations with AI-powered predictions. 
                Prevent equipment failures, reduce costs, and maximize uptime with intelligent monitoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Request Demo
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI predictive maintenance solutions deliver measurable improvements across all industries
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
              <h2 className="text-4xl font-bold text-white mb-6">Advanced AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge machine learning and IoT technologies for intelligent maintenance
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
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI predictive maintenance solutions are trusted across multiple industries
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
              <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your maintenance needs. All plans include our AI prediction engine.
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
                    Start Free Trial
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your Maintenance?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join leading companies using our AI predictive maintenance platform. 
                Reduce costs, prevent failures, and maximize equipment performance.
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

export default AiPredictiveMaintenancePage;