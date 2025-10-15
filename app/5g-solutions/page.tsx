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
    "Ultra-low latency (1ms or less)",
    "High-speed connectivity (up to 10 Gbps)",
    "Massive device connectivity (1M+ devices/km²)",
    "99.999% reliability",
    "Energy efficient infrastructure",
    "Future-proof technology"
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Network infrastructure, IoT connectivity, edge computing, and security services." />
        <meta name="keywords" content="5G solutions, network infrastructure, IoT connectivity, edge computing, 5G security, next-generation networks" />
        <meta property="og:title" content="5G Solutions - Zion Tech Group" />
        <meta property="og:description" content="Next-generation 5G connectivity solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with next-generation 5G connectivity. Ultra-low latency, 
                high-speed data transfer, and massive device connectivity for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get 5G Consultation
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our 5G Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G services designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose 5G?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the next generation of connectivity with unprecedented speed and reliability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready for 5G Transformation?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how 5G can revolutionize your business operations and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Your 5G Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;