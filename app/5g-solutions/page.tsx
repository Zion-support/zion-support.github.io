import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3 } from 'lucide-react';
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
    },
    {
      name: "5G Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications and AI inference.",
      features: ["Edge servers", "AI inference", "Real-time processing", "Data analytics", "Cloud integration", "Performance optimization"],
      price: "From $6,999",
      marketPrice: "$14,999-59,999",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: "Reduce latency by 90% with edge computing"
    },
    {
      name: "5G Data Analytics",
      description: "Advanced data analytics platform leveraging 5G networks for real-time insights and decision making.",
      features: ["Real-time analytics", "Predictive modeling", "Data visualization", "Machine learning", "Custom dashboards", "API integration"],
      price: "From $4,999",
      marketPrice: "$9,999-39,999",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: "Get insights 10x faster with 5G analytics"
    }
  ];

  const technologies = [
    "5G NR", "Network Slicing", "Edge Computing", "IoT Protocols", 
    "AI/ML Integration", "Cloud-Native", "SDN/NFV", "MEC"
  ];

  return (
    <>
      <SEOHead 
        title="5G Solutions - Zion Tech Group"
        description="Transform your business with cutting-edge 5G solutions. Network deployment, IoT connectivity, edge computing, and smart city solutions."
      />
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Network deployment, IoT connectivity, edge computing, and smart city solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Next-Generation <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">5G Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with ultra-fast, low-latency 5G networks. 
                Deploy cutting-edge infrastructure, IoT solutions, and smart city technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 5G Solutions</h2>
            <p className="text-gray-300 text-lg">Choose from our comprehensive range of 5G services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`relative bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 ${solution.popular ? 'ring-2 ring-purple-500/50' : ''}`}>
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{solution.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{solution.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{solution.price}</span>
                    <span className="text-sm text-gray-400 line-through">{solution.marketPrice}</span>
                  </div>
                  <p className="text-sm text-green-400 font-medium">{solution.benefits}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-t border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business with 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the 5G revolution and unlock unprecedented speed, connectivity, and innovation for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 font-medium py-3 px-8 rounded-lg transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;
