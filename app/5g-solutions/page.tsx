import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3, Star } from 'lucide-react';

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
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
