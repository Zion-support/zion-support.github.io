import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "5G Network Infrastructure",
      description: "Complete 5G network design, deployment, and optimization services for enterprise and carrier environments.",
      features: ["Network planning and design", "Infrastructure deployment", "Performance optimization", "Security implementation"],
      icon: <Wifi className="w-8 h-8" />
    },
    {
      name: "5G IoT Solutions",
      description: "Connect and manage millions of IoT devices with ultra-low latency and high reliability.",
      features: ["Device connectivity", "Data analytics", "Edge computing", "Real-time monitoring"],
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "5G Edge Computing",
      description: "Deploy applications closer to users with ultra-low latency edge computing solutions.",
      features: ["Edge deployment", "Content delivery", "Real-time processing", "Scalable architecture"],
      icon: <Zap className="w-8 h-8" />
    },
    {
      name: "5G Security Solutions",
      description: "Comprehensive security framework for 5G networks and connected devices.",
      features: ["Network security", "Device protection", "Data encryption", "Threat monitoring"],
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      title: "Ultra-Low Latency",
      description: "Achieve sub-millisecond latency for real-time applications",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Massive Connectivity",
      description: "Support millions of devices per square kilometer",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Enhanced Security",
      description: "Advanced encryption and security protocols",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "High Reliability",
      description: "99.9% uptime with redundant infrastructure",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Real-time monitoring and control of production lines",
      benefits: ["Increased efficiency", "Reduced downtime", "Predictive maintenance"]
    },
    {
      title: "Autonomous Vehicles",
      description: "Ultra-reliable communication for self-driving cars",
      benefits: ["Real-time decision making", "Enhanced safety", "Traffic optimization"]
    },
    {
      title: "Remote Healthcare",
      description: "High-quality telemedicine and remote surgery",
      benefits: ["Low latency video", "Reliable connections", "Real-time diagnostics"]
    },
    {
      title: "Smart Cities",
      description: "Connected infrastructure for urban management",
      benefits: ["Traffic optimization", "Energy efficiency", "Public safety"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Ultra-low latency, massive connectivity, and enhanced security for the next generation of applications." />
        <meta name="keywords" content="5G solutions, 5G network, 5G infrastructure, IoT connectivity, edge computing, 5G security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">5G Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with ultra-low latency, massive connectivity, and enhanced security powered by cutting-edge 5G technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our 5G Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.name}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Our 5G Solutions?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">5G Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-cyan-400 flex items-center">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with 5G?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the 5G revolution and unlock new possibilities for your organization with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Start Your 5G Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
