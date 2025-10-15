import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Smartphone, 
  Globe, 
  Zap, 
  Shield, 
  Cpu,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Implementation",
      description: "Complete 5G network implementation and deployment services for businesses.",
      href: "/5g-implementation",
      features: ["Network Planning", "Infrastructure Setup", "Performance Optimization", "Testing & Validation"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Network Infrastructure",
      description: "Robust 5G network infrastructure solutions for ultra-fast connectivity.",
      href: "/5g-network-infrastructure",
      features: ["Core Network Design", "Edge Computing", "Network Slicing", "Quality of Service"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "5G IoT Solutions",
      description: "Internet of Things solutions powered by 5G technology for smart connectivity.",
      href: "/5g-iot-solutions",
      features: ["IoT Device Management", "Real-time Data Processing", "Edge Analytics", "Device Security"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "5G Edge Computing",
      description: "Edge computing solutions that leverage 5G for ultra-low latency applications.",
      href: "/5g-edge-computing",
      features: ["Edge Infrastructure", "Low Latency Processing", "Distributed Computing", "Real-time Analytics"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "5G Private Networks",
      description: "Secure private 5G networks for enterprise and industrial applications.",
      href: "/5g-private-networks",
      features: ["Private Network Design", "Security Implementation", "Custom Configuration", "Dedicated Resources"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "5G Smart City Solutions",
      description: "Comprehensive smart city solutions powered by 5G technology.",
      href: "/5g-smart-city-solutions",
      features: ["Smart Infrastructure", "Traffic Management", "Environmental Monitoring", "Public Safety"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta name="description" content="Comprehensive 5G solutions including network implementation, IoT solutions, edge computing, private networks, and smart city technologies." />
        <meta name="keywords" content="5G solutions, 5G implementation, IoT solutions, edge computing, private networks, smart city, connectivity" />
        <meta property="og:title" content="5G Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with next-generation 5G connectivity solutions." />
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
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Next-generation 5G connectivity solutions that enable ultra-fast speeds, 
                low latency, and massive IoT connectivity for modern businesses.
              </p>
            </div>
          </div>
        </section>

        {/* 5G Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our 5G Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G services designed to accelerate digital transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
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
                Let's discuss how our 5G solutions can transform your business connectivity and enable new possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
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
