import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, CheckCircle, Network, Cpu, Smartphone } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const FiveGSolutionsPage: React.FC = () => {
  const solutions = [
    {
      name: "5G Implementation",
      description: "Complete 5G network deployment with zero-downtime migration and comprehensive testing.",
      features: ["Network planning & design", "Equipment installation", "Performance testing", "Compliance certification", "24/7 monitoring", "Maintenance support"],
      price: "From $5,999",
      marketPrice: "$12,999-49,999",
      popular: true,
      icon: <Wifi className="w-8 h-8" />,
      benefits: "Deploy 5G networks 60% faster than industry average"
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
      features: ["Device connectivity", "Data analytics", "Real-time monitoring", "Security protocols", "Scalable architecture", "Integration support"],
      price: "From $3,999",
      marketPrice: "$7,999-29,999",
      popular: false,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Connect 10x more devices with 5G IoT solutions"
    },
    {
      name: "5G Mobile Applications",
      description: "High-performance mobile applications optimized for 5G networks with ultra-low latency.",
      features: ["App development", "5G optimization", "Performance tuning", "User experience design", "Cross-platform support", "Ongoing maintenance"],
      price: "From $2,999",
      marketPrice: "$5,999-19,999",
      popular: false,
      icon: <Smartphone className="w-8 h-8" />,
      benefits: "Deliver 50% faster app performance with 5G optimization"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including implementation, infrastructure, IoT, and mobile applications. Professional 5G services for modern businesses." />
      </Helmet>
      <SEOHead
        title="5G Solutions - Zion Tech Group"
        description="Comprehensive 5G solutions including implementation, infrastructure, IoT, and mobile applications. Professional 5G services for modern businesses."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G solutions for modern businesses. From implementation to mobile applications, we deliver cutting-edge 5G technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-purple-400">
                    {solution.icon}
                  </div>
                  {solution.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.name}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-white">{solution.price}</span>
                    <span className="text-gray-400 line-through">{solution.marketPrice}</span>
                  </div>
                  <p className="text-green-400 font-semibold">{solution.benefits}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;