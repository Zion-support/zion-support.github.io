import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3, Star } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
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
      name: "5G Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications and IoT devices.",
      icon: <Cpu className="w-8 h-8" />
    }
  ];

  const features = [
    "Ultra-fast 5G deployment",
    "99.9% network uptime guarantee",
    "Advanced security protocols",
    "24/7 technical support",
    "Scalable infrastructure",
    "Cost-effective solutions"
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Advanced Network Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive 5G solutions including network design, infrastructure deployment, IoT connectivity, and edge computing." />
        <meta name="keywords" content="5G solutions, network infrastructure, IoT connectivity, edge computing, wireless technology, telecommunications" />
        <meta property="og:title" content="5G Solutions - Advanced Network Infrastructure" />
        <meta property="og:description" content="Transform your business with our comprehensive 5G solutions including network design, infrastructure deployment, IoT connectivity, and edge computing." />
        <meta property="og:url" content="https://ziontechgroup.com/5g-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                5G Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. Our comprehensive solutions deliver ultra-fast connectivity, ultra-low latency, and massive device connectivity.
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
                We provide comprehensive 5G solutions that deliver exceptional performance, reliability, and scalability for your business needs.
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