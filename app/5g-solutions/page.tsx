import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3 } from 'lucide-react';
=======
import { Wifi, CheckCircle, ArrowRight, Network, Cpu } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-7017

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
<<<<<<< HEAD
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
      features: ["Real-time analytics", "Performance dashboards", "Predictive maintenance", "User insights", "Custom reports", "API integration"],
      price: "From $9,999",
      marketPrice: "$19,999-79,999",
      popular: true,
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: "Reduce network issues by 85% with predictive analytics"
    },
    {
      name: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprises with enhanced security and control.",
      features: ["Private network setup", "Security protocols", "Access control", "Custom configuration", "Dedicated support", "Compliance management"],
      price: "From $25,999",
      marketPrice: "$50,999-199,999",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      benefits: "Military-grade security with complete network isolation"
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-7017
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G solutions including network implementation, mobile apps, IoT, and data analytics. Transform your business with cutting-edge 5G technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              5G Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology. From network implementation to mobile applications, 
              we deliver comprehensive 5G solutions that drive innovation and growth.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${solution.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {solution.popular && (
                  <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <div className="text-purple-400 mb-4">
                  {solution.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {solution.name}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-white">{solution.price}</span>
                    <span className="text-gray-400 line-through">{solution.marketPrice}</span>
                  </div>
                  <p className="text-green-400 text-sm font-medium">
                    {solution.benefits}
                  </p>
                </div>
                
                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                  Choose Plan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with 5G?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our 5G solutions for competitive advantage.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors duration-200 text-lg">
              Start Your 5G Journey Today
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-7017
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

<<<<<<< HEAD
export default FiveGSolutionsPage;
=======
export default FiveGSolutionsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-7017
