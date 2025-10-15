import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Zap, Smartphone, Cloud, Shield, CheckCircle } from 'lucide-react';

const G5gSolutionsPage: React.FC = () => {
  const g5gServices = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Network Design",
      description: "Complete 5G network architecture and infrastructure design for optimal coverage and performance.",
      features: ["Network Planning", "Coverage Analysis", "Capacity Planning", "Interference Management"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ultra-Fast Connectivity",
      description: "Deploy high-speed 5G networks with ultra-low latency for mission-critical applications.",
      features: ["High-Speed Data", "Low Latency", "Massive Connectivity", "Real-time Processing"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile 5G Solutions",
      description: "5G-enabled mobile applications and services for enhanced user experiences.",
      features: ["Mobile Apps", "AR/VR Support", "IoT Integration", "Edge Computing"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Edge Computing",
      description: "Distributed computing solutions that bring processing power closer to data sources.",
      features: ["Edge Servers", "Local Processing", "Reduced Latency", "Bandwidth Optimization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "5G Security",
      description: "Comprehensive security solutions for 5G networks and connected devices.",
      features: ["Network Security", "Device Protection", "Data Encryption", "Threat Detection"]
    }
  ];

  return (
    <>
      <SEOHead 
        title="5G Solutions - Zion Tech Group"
        description="Advanced 5G network solutions including network design, edge computing, IoT connectivity, and mobile applications."
        keywords="5G solutions, 5G network, edge computing, IoT connectivity, mobile 5G, ultra-fast connectivity"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 flex items-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wifi className="w-4 h-4" />
              5G Network Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-green-300 bg-clip-text text-transparent">
              5G Solutions
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock the full potential of 5G technology with our comprehensive solutions. 
              From network design to edge computing, we help you build the future of connectivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get 5G Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our 5G Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G solutions designed to deliver ultra-fast, reliable, and secure connectivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {g5gServices.map((service, index) => (
              <div key={index} className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500/30 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose 5G?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the transformative benefits of 5G technology for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ultra-Fast Speeds",
                description: "Up to 100x faster than 4G with speeds reaching 10 Gbps",
                icon: "⚡"
              },
              {
                title: "Ultra-Low Latency",
                description: "Latency as low as 1ms for real-time applications",
                icon: "🚀"
              },
              {
                title: "Massive Connectivity",
                description: "Support for millions of connected devices per square kilometer",
                icon: "🌐"
              },
              {
                title: "Enhanced Reliability",
                description: "99.999% reliability for mission-critical applications",
                icon: "🔒"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-slate-700 p-6 rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Deploy 5G Solutions?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how 5G can transform your business operations and unlock new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your 5G Journey
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default G5gSolutionsPage;