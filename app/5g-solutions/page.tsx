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
      features: ["Device connectivity", "Data analytics", "Real-time monitoring", "Edge computing", "Security protocols", "Scalable architecture"],
      price: "From $3,999",
      marketPrice: "$7,999-29,999",
      popular: true,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Connect up to 1M devices per square kilometer"
    },
    {
      name: "5G Mobile Solutions",
      description: "Advanced mobile applications and services optimized for 5G networks.",
      features: ["App optimization", "Low latency streaming", "AR/VR integration", "Real-time collaboration", "Cloud integration", "Performance tuning"],
      price: "From $2,999",
      marketPrice: "$5,999-19,999",
      popular: false,
      icon: <Smartphone className="w-8 h-8" />,
      benefits: "Deliver ultra-low latency mobile experiences"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network implementation, infrastructure, IoT connectivity, and mobile optimization services." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology. Our comprehensive solutions deliver ultra-fast connectivity, 
              low latency, and massive device connectivity for the next generation of digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                solution.popular ? 'border-blue-500 shadow-blue-500/20 shadow-2xl' : 'border-slate-700 hover:border-blue-400'
              }`}>
                <div className="flex items-center mb-6">
                  <div className="text-blue-400 mr-4">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{solution.name}</h3>
                    {solution.popular && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-slate-700 rounded-lg">
                  <p className="text-sm text-gray-400 mb-2">Our Price:</p>
                  <p className="text-2xl font-bold text-green-400">{solution.price}</p>
                  <p className="text-sm text-gray-500 line-through">Market: {solution.marketPrice}</p>
                </div>

                <div className="mb-6 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <p className="text-sm text-blue-300 font-medium">{solution.benefits}</p>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our 5G Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
                <p className="text-gray-300">Deploy 5G networks 60% faster than industry average with our proven methodologies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security protocols and compliance with international 5G standards.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
                <p className="text-gray-300">Real-time monitoring and analytics to optimize your 5G network performance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
