import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3 } from 'lucide-react';

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
      price: "From $8,999",
      marketPrice: "$15,999-59,999",
      popular: false,
      icon: <Network className="w-8 h-8" />,
      benefits: "99.9% uptime guarantee with enterprise-grade infrastructure"
    },
    {
      name: "5G Mobile Applications",
      description: "Custom 5G-enabled mobile applications with ultra-low latency and high-speed connectivity.",
      features: ["iOS & Android development", "5G optimization", "Real-time features", "Cloud integration", "Performance testing", "App store deployment"],
      price: "From $12,999",
      marketPrice: "$25,999-99,999",
      popular: true,
      icon: <Smartphone className="w-8 h-8" />,
      benefits: "10x faster data transfer with 5G optimization"
    },
    {
      name: "5G IoT Solutions",
      description: "Internet of Things solutions powered by 5G for smart cities and industrial automation.",
      features: ["IoT device integration", "Sensor networks", "Data analytics", "Remote monitoring", "Automation systems", "Scalable architecture"],
      price: "From $15,999",
      marketPrice: "$30,999-149,999",
      popular: false,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Connect 1000+ devices with minimal latency"
    },
    {
      name: "5G Data Analytics",
      description: "Advanced analytics platform for 5G network performance and user behavior insights.",
      features: ["Real-time monitoring", "Performance metrics", "Predictive analytics", "Custom dashboards", "API integration", "Machine learning"],
      price: "From $9,999",
      marketPrice: "$19,999-79,999",
      popular: true,
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: "Reduce network issues by 80% with predictive analytics"
    },
    {
      name: "5G Edge Computing",
      description: "Edge computing solutions for ultra-low latency processing and real-time applications.",
      features: ["Edge servers", "Local processing", "Real-time analytics", "Low latency", "Distributed architecture", "Cloud integration"],
      price: "From $11,999",
      marketPrice: "$22,999-89,999",
      popular: false,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Achieve sub-millisecond response times"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions for modern businesses. From network implementation to mobile applications, transform your business with cutting-edge 5G technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with comprehensive 5G solutions. From network implementation to mobile applications,
              we provide end-to-end 5G services that drive innovation and growth.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                View Demo
              </button>
            </div>
          </div>
          
          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${solution.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {solution.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-purple-400 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {solution.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {solution.description}
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-white mb-1">
                    {solution.price}
                  </div>
                  <div className="text-gray-400 line-through">
                    {solution.marketPrice}
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-6">
                  <div className="font-semibold">Key Benefit:</div>
                  <div className="text-sm">{solution.benefits}</div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with 5G?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading enterprises using our 5G solutions to achieve unprecedented performance and efficiency.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors duration-200 text-lg">
              Start Your 5G Journey Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;