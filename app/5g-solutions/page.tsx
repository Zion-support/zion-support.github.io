import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, CheckCircle, ArrowRight, Network, Cpu, Smartphone } from 'lucide-react';

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
      benefits: "Deploy 5G networks 3x faster than industry average"
    },
    {
      name: "5G Infrastructure",
      description: "Robust 5G infrastructure setup with advanced security and monitoring capabilities.",
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
      benefits: "Reduce app load times by 90% with 5G optimization"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions for businesses. Network implementation, infrastructure, IoT, and mobile optimization services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Next-Generation 5G Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge 5G technology. 
                From network implementation to IoT connectivity, we deliver 
                comprehensive 5G solutions that drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View Our Solutions
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our 5G Solutions</h2>
              <p className="text-xl text-gray-300">
                Choose from our comprehensive range of 5G services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className={`bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 ${solution.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {solution.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{solution.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-cyan-400">{solution.price}</span>
                      <span className="text-gray-400 line-through">{solution.marketPrice}</span>
                    </div>
                    <p className="text-sm text-gray-400">{solution.benefits}</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business with 5G?</h2>
            <p className="text-xl mb-8 text-cyan-100">
              Contact our experts today and discover how 5G can revolutionize your operations.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;