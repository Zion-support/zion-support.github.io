import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Network, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G network solutions, IoT connectivity, and infrastructure deployment services." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Next-Generation 5G Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge 5G technology. Deploy ultra-fast networks, 
            connect millions of IoT devices, and unlock new possibilities for growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative ${solution.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {solution.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.name}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-blue-600">{solution.price}</span>
                  <span className="text-gray-500 line-through ml-2">{solution.marketPrice}</span>
                </div>
                <p className="text-sm text-green-600 font-semibold text-center">{solution.benefits}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Deploy 5G?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team will help you design, deploy, and maintain your 5G infrastructure 
            with industry-leading performance and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Consultation
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveGSolutionsPage;