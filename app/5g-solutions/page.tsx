import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Network, Cpu, Smartphone, BarChart3 } from 'lucide-react';

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
      features: ["Low latency processing", "Local data centers", "Real-time analytics", "AI inference", "Content delivery", "Autonomous systems"],
      price: "From $2,999",
      marketPrice: "$5,999-19,999",
      popular: false,
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: "Reduce latency by 90% with edge computing"
    },
    {
      name: "5G Private Networks",
      description: "Dedicated 5G private networks with enhanced security and custom configuration.",
      features: ["Dedicated spectrum", "Enhanced security", "Custom configuration", "SLA guarantees", "Isolated infrastructure", "Custom applications"],
      price: "From $6,999",
      marketPrice: "$14,999-59,999",
      popular: true,
      icon: <Shield className="w-8 h-8" />,
      benefits: "Achieve enterprise-grade security with private networks"
    }
  ];

  const benefits = [
    {
      title: "Ultra-Fast Speeds",
      description: "Experience blazing-fast 5G speeds up to 10 Gbps",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Ultra-Low Latency",
      description: "Sub-1ms latency for real-time applications",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Massive Connectivity",
      description: "Connect millions of devices simultaneously",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Enhanced Security",
      description: "Advanced security protocols and encryption",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: "5G Networks Deployed", value: "500+" },
    { label: "Cities Connected", value: "150+" },
    { label: "Devices Connected", value: "10M+" },
    { label: "Uptime Guarantee", value: "99.9%" }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Ultra-fast speeds, ultra-low latency, and massive connectivity for the future." />
        <meta name="keywords" content="5G solutions, 5G implementation, 5G infrastructure, 5G IoT, 5G edge computing, 5G private networks" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                5G Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G technology. Experience ultra-fast speeds, 
              ultra-low latency, and massive connectivity for the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our 5G Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 ${solution.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {solution.popular && (
                    <div className="bg-cyan-400 text-black text-xs font-bold px-2 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-cyan-400 mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white">{solution.price}</div>
                    <div className="text-sm text-gray-400 line-through">{solution.marketPrice}</div>
                  </div>

                  <div className="bg-green-500/20 text-green-400 text-sm p-2 rounded mb-4">
                    {solution.benefits}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Choose Our 5G Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-400/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the 5G revolution and unlock new possibilities for your business. 
              Our expert team is ready to help you implement cutting-edge 5G solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Start Your 5G Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 font-bold py-4 px-8 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;