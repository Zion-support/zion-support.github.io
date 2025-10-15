import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Smartphone, Building, Cpu, Shield, ArrowRight, CheckCircle, Star, Network, Globe, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const FiveGSolutionsPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Implementation",
      description: "Complete 5G network deployment with optimization, testing, and performance monitoring.",
      price: "$499/month",
      features: ["Network Planning", "Site Survey", "Equipment Installation", "Performance Testing"],
      link: "/5g-implementation"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "5G Network Infrastructure",
      description: "Robust 5G infrastructure solutions with edge computing and network slicing capabilities.",
      price: "$399/month",
      features: ["Edge Computing", "Network Slicing", "Core Network", "RAN Optimization"],
      link: "/5g-network-infrastructure"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "5G IoT Solutions",
      description: "Comprehensive IoT solutions leveraging 5G connectivity for smart devices and sensors.",
      price: "$299/month",
      features: ["IoT Device Management", "Real-time Analytics", "Sensor Networks", "Data Processing"],
      link: "/5g-iot-solutions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Smart City Solutions",
      description: "Transform cities with 5G-powered smart infrastructure and connected services.",
      price: "$599/month",
      features: ["Smart Traffic", "Public Safety", "Environmental Monitoring", "Citizen Services"],
      link: "/5g-smart-city-solutions"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "5G Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications and processing.",
      price: "$349/month",
      features: ["Edge Servers", "Low Latency", "Real-time Processing", "Distributed Computing"],
      link: "/5g-edge-computing"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "5G Private Networks",
      description: "Secure private 5G networks for enterprises with dedicated spectrum and control.",
      price: "$449/month",
      features: ["Private Spectrum", "Enterprise Security", "Custom Configuration", "Dedicated Support"],
      link: "/5g-private-networks"
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Speeds", icon: <Zap className="w-6 h-6" /> },
    { number: "1ms", label: "Ultra-Low Latency", icon: <Network className="w-6 h-6" /> },
    { number: "1M+", label: "Devices per km²", icon: <Smartphone className="w-6 h-6" /> },
    { number: "99.9%", label: "Reliability", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta name="description" content="Advanced 5G solutions including network implementation, IoT connectivity, smart city solutions, and edge computing for ultra-fast, reliable connectivity." />
        <meta name="keywords" content="5G solutions, 5G implementation, IoT connectivity, smart city, edge computing, private networks, ultra-low latency" />
        <meta property="og:title" content="5G Solutions - Zion Tech Group" />
        <meta property="og:description" content="Next-generation 5G connectivity solutions." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                5G <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Unlock the power of next-generation 5G connectivity. From ultra-fast speeds to ultra-low latency, 
                we deliver 5G solutions that transform how you connect, communicate, and operate.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our 5G Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G services designed to deliver ultra-fast, reliable, and intelligent connectivity
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Embrace 5G Technology?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our 5G solutions can revolutionize your connectivity and unlock new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get 5G Consultation
                </Link>
                <Link
                  to="/5g-implementation"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View 5G Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;


