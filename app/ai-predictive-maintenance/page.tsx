import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrench, AlertTriangle, BarChart3, Clock, CheckCircle, ArrowRight, Star } from 'lucide-react';

const AiPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "AI-Powered Failure Prediction",
      description: "Machine learning algorithms predict equipment failures before they occur with 95%+ accuracy"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of equipment health with instant alerts and notifications"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics dashboard with predictive insights and maintenance recommendations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Optimized Scheduling",
      description: "Intelligent maintenance scheduling to minimize downtime and maximize efficiency"
    }
  ];

  const benefits = [
    "Reduce unplanned downtime by 70%",
    "Extend equipment lifespan by 40%",
    "Lower maintenance costs by 30%",
    "Improve safety and compliance",
    "Optimize spare parts inventory",
    "Increase overall equipment effectiveness",
    "Real-time performance monitoring",
    "Predictive maintenance scheduling"
  ];

  const industries = [
    "Manufacturing",
    "Oil & Gas",
    "Aviation",
    "Automotive",
    "Power Generation",
    "Mining",
    "Healthcare",
    "Transportation",
    "Food & Beverage",
    "Pharmaceuticals",
    "Data Centers",
    "Renewable Energy"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small facilities",
      features: [
        "Up to 50 equipment units",
        "Basic AI predictions",
        "Email alerts",
        "Standard analytics",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month", 
      description: "Ideal for medium facilities",
      features: [
        "Up to 200 equipment units",
        "Advanced AI predictions",
        "Multi-channel alerts",
        "Advanced analytics & reporting",
        "Priority support",
        "API integration",
        "Custom dashboards",
        "Maintenance scheduling"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large industrial facilities",
      features: [
        "Unlimited equipment units",
        "Premium AI predictions",
        "Custom alert systems",
        "Complete analytics suite",
        "24/7 dedicated support",
        "Full API access",
        "White-label solutions",
        "On-premise deployment",
        "SLA guarantee",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const sensors = [
    "Vibration Sensors", "Temperature Sensors", "Pressure Sensors", "Current Sensors",
    "Oil Analysis", "Thermal Imaging", "Ultrasonic Testing", "Acoustic Monitoring"
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group | Smart Equipment Management</title>
        <meta name="description" content="Revolutionary AI-powered predictive maintenance platform that prevents equipment failures, reduces downtime, and optimizes maintenance costs for industrial facilities." />
        <meta name="keywords" content="predictive maintenance, ai maintenance, equipment monitoring, iot sensors, machine learning, industrial iot, maintenance optimization" />
        <meta property="og:title" content="AI Predictive Maintenance - Zion Tech Group" />
        <meta property="og:description" content="Smart equipment maintenance powered by AI and IoT" />
        <meta property="og:type" content="website" />
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
                Transform your maintenance operations with AI-powered predictive analytics that prevent failures, 
                reduce downtime, and optimize costs across your entire facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to predict and prevent equipment failures
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Business Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your maintenance operations and achieve measurable results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI predictive maintenance solutions work across diverse industries
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-cyan-500/20 transition-all duration-300 group">
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {industry}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sensors Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Compatible Sensors & Technologies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Integrate with a wide range of industrial sensors and monitoring technologies
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {sensors.map((sensor, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {sensor}
                </span>
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
                Choose the perfect plan for your facility size and maintenance needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
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
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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

        {/* ROI Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">70%</div>
                <div className="text-gray-300 text-lg">Reduction in Downtime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300 text-lg">Lower Maintenance Costs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300 text-lg">Extended Equipment Life</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300 text-lg">Prediction Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Maintenance Operations?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join leading industrial facilities using AI to prevent failures and optimize maintenance. 
                Start your free trial today and see the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
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