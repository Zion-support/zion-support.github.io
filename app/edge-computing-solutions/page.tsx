import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, Zap, Shield, CheckCircle, ArrowRight, Star, Clock, Users, Globe } from 'lucide-react';

const EdgeComputingSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Ultra-Low Latency Processing",
      description: "Process data at the edge with sub-millisecond response times for real-time applications"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Distributed Computing",
      description: "Intelligent workload distribution across edge nodes for optimal performance and resource utilization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Instant data processing and analysis at the edge for immediate insights and decision making"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Edge Security",
      description: "Comprehensive security framework protecting data and applications at the edge infrastructure"
    }
  ];

  const useCases = [
    "Autonomous Vehicles",
    "Industrial IoT",
    "Smart Cities",
    "AR/VR Applications",
    "Real-time Video Processing",
    "Predictive Maintenance",
    "Traffic Management",
    "Healthcare Monitoring",
    "Retail Analytics",
    "Gaming & Entertainment",
    "Financial Trading",
    "Manufacturing Automation"
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small deployments",
      features: [
        "Up to 5 edge nodes",
        "Basic edge processing",
        "Standard analytics",
        "Email support",
        "Cloud integration",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$1,999",
      period: "/month", 
      description: "Ideal for medium enterprises",
      features: [
        "Up to 25 edge nodes",
        "Advanced edge processing",
        "Real-time analytics",
        "Priority support",
        "Multi-cloud integration",
        "Advanced monitoring",
        "Custom applications",
        "API access"
      ],
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "$4,999",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Unlimited edge nodes",
        "Premium edge processing",
        "Complete analytics suite",
        "24/7 dedicated support",
        "Full cloud ecosystem",
        "Enterprise monitoring",
        "Custom development",
        "White-label solutions",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const technologies = [
    "Kubernetes", "Docker", "Apache Kafka", "Redis", "TensorFlow Lite",
    "OpenVINO", "NVIDIA Jetson", "Intel Edge", "AWS Greengrass", "Azure IoT Edge"
  ];

  const benefits = [
    "Reduce latency by 90%",
    "Lower bandwidth costs by 60%",
    "Improve data privacy and security",
    "Enable real-time decision making",
    "Reduce cloud dependency",
    "Scale horizontally with ease",
    "Optimize resource utilization",
    "Support offline operations"
  ];

  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group | Real-time Processing</title>
        <meta name="description" content="Revolutionary edge computing solutions for ultra-low latency processing, real-time analytics, and distributed computing across industries." />
        <meta name="keywords" content="edge computing, real-time processing, iot, distributed computing, low latency, edge analytics, fog computing" />
        <meta property="og:title" content="Edge Computing Solutions - Zion Tech Group" />
        <meta property="og:description" content="Ultra-low latency edge computing solutions" />
        <meta property="og:type" content="website" />
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
                Transform your applications with ultra-low latency edge computing that brings processing power 
                closer to your data sources for real-time performance and instant insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Edge Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Edge Computing Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge edge computing capabilities for real-time processing and analytics
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

        {/* Use Cases Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Edge Computing Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with real-time edge computing solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {useCase}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Edge Computing Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Achieve unprecedented performance and efficiency with edge computing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-cyan-500/20 transition-all duration-300 group">
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Edge Technologies</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built on industry-leading edge computing technologies and platforms
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span key={index} className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300">
                  {tech}
                </span>
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
                Choose the perfect edge computing solution for your deployment needs
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

        {/* Stats Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300 text-lg">Latency Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300 text-lg">Bandwidth Savings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Edge Monitoring</div>
              </div>
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
                Start your free trial today and experience real-time performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Edge Experts
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