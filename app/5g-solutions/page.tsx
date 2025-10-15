import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3, Star } from 'lucide-react';

const G5gSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <Wifi className="w-8 h-8" />,
      name: "5G Network Design",
      description: "Complete 5G network architecture and infrastructure design for optimal coverage and performance."
    },
    {
      name: "5G Network Infrastructure",
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",
      features: ["Tower installation", "Fiber optics deployment", "Coverage optimization", "Signal boosting", "Maintenance contracts", "Performance monitoring"],
      price: "From $4,999",
      marketPrice: "$9,999-39,999",
      popular: false,
      icon: <Network className="w-8 h-8" />,
      benefits: "Achieve 99.9% network uptime with our infrastructure"
    },
    {
      name: "5G IoT Solutions",
      description: "Comprehensive IoT connectivity solutions powered by 5G for smart devices and sensors.",
      features: ["Device connectivity", "Data analytics", "Remote monitoring", "Edge computing", "Real-time processing", "Scalable architecture"],
      price: "From $3,999",
      marketPrice: "$7,999-29,999",
      popular: false,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Connect 10x more devices with ultra-low latency"
    },
    {
      name: "5G Smart City Solutions",
      description: "Transform your city with 5G-powered smart infrastructure and citizen services.",
      features: ["Traffic management", "Public safety systems", "Energy efficiency", "Citizen services", "Environmental monitoring", "Emergency response"],
      price: "From $7,999",
      marketPrice: "$19,999-99,999",
      popular: false,
      icon: <Smartphone className="w-8 h-8" />,
      benefits: "Improve city efficiency by 40% with smart solutions"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ultra-Low Latency",
      description: "Achieve sub-millisecond latency for real-time applications"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Massive Connectivity",
      description: "Support millions of devices per square kilometer"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Edge Computing",
      description: "Process data locally for faster response times"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Security",
      description: "Advanced encryption and network slicing for secure communications"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Advanced 5G Network Services</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive 5G solutions. From network implementation to IoT connectivity, we deliver cutting-edge 5G technology."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network, 5G implementation, 5G IoT, smart city, 5G infrastructure, 5G consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive 5G solutions. From network implementation 
              to IoT connectivity, we deliver cutting-edge 5G technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{solution.name}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <p className="text-lg font-semibold text-green-400 mb-2">{solution.price}</p>
                <p className="text-sm text-gray-400 mb-4">Market: {solution.marketPrice}</p>
                <p className="text-sm text-cyan-300 mb-4">{solution.benefits}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Started with 5G Solutions
            </button>
          </div>
        </div>
=======
      icon: <Network className="w-8 h-8" />
    },
    {
      name: "5G Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications and IoT devices.",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      name: "5G Mobile Applications",
      description: "High-performance mobile apps optimized for 5G networks with advanced features.",
      icon: <Smartphone className="w-8 h-8" />
    }
  ];

  const features = [
    "Ultra-fast 5G deployment",
    "Zero-downtime migration",
    "24/7 expert support",
    "Comprehensive testing",
    "Performance optimization",
    "Future-proof solutions"
  ];

  // const technologies = [
  //   "5G NR", "Network Slicing", "Edge Computing", "IoT Protocols", 
  //   "AI/ML Integration", "Cloud-Native", "SDN/NFV", "MEC"
  // ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive 5G solutions for businesses"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Advanced <span className="text-cyan-400">5G Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Deploy faster, scale efficiently, and stay ahead of the competition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{solution.name}</h3>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our 5G Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge 5G technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Deploy 5G?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how 5G can transform your business and give you a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  View Portfolio
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
