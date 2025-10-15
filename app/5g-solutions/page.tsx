import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, CheckCircle, Network, Cpu, Smartphone } from 'lucide-react';

const G5gSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Network Design",
      description: "Complete 5G network architecture and infrastructure design for optimal coverage and performance.",
      features: ["Network Planning", "Coverage Analysis", "Capacity Planning", "Interference Management"]
    },
    {
      name: "5G Network Infrastructure",
      description: "Robust 5G infrastructure with advanced tower installation and fiber optic connectivity.",
      features: ["Tower installation", "Fiber optics deployment", "Coverage optimization", "Signal boosting", "Maintenance contracts", "Performance monitoring"],
      price: "From $8,999",
      marketPrice: "$15,999-59,999",
      popular: false,
      icon: <Network className="w-8 h-8" />,
      benefits: "99.9% uptime guarantee with enterprise-grade infrastructure"
    },
    {
      name: "5G Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications and IoT devices.",
      features: ["Edge server deployment", "Latency optimization", "IoT integration", "Real-time processing", "Data analytics", "Security protocols"],
      price: "From $6,999",
      marketPrice: "$12,999-39,999",
      popular: true,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Reduce latency by 80% with edge computing solutions"
    },
    {
      name: "5G Mobile Applications",
      description: "High-performance mobile apps optimized for 5G networks with advanced features.",
      features: ["5G-optimized apps", "Real-time streaming", "AR/VR integration", "Cloud synchronization", "Cross-platform support", "Performance monitoring"],
      price: "From $4,999",
      marketPrice: "$9,999-29,999",
      popular: false,
      icon: <Smartphone className="w-8 h-8" />,
      benefits: "Deliver seamless mobile experiences with 5G optimization"
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

  // Technologies used in 5G solutions
  const techStack = [
    "5G NR", "Network Slicing", "Edge Computing", "IoT Protocols", 
    "AI/ML Integration", "Cloud-Native", "SDN/NFV", "MEC"
  ];

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

export default G5gSolutionsPage;