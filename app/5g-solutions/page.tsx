import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Cpu, Smartphone, Building, Car, Zap, Globe, CheckCircle, Star } from 'lucide-react';

const FiveGSolutionsPage = () => {
  const fiveGServices = [
    {
      name: "5G Network Infrastructure",
      description: "Complete 5G network design, deployment, and optimization services",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Network Planning", "Site Survey", "Equipment Installation", "Performance Optimization"],
      link: "/5g-network-infrastructure",
      stats: "10x faster speeds"
    },
    {
      name: "5G Edge Computing",
      description: "Edge computing solutions for ultra-low latency applications",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Edge Servers", "Data Processing", "Real-time Analytics", "IoT Integration"],
      link: "/5g-edge-computing",
      stats: "1ms latency"
    },
    {
      name: "5G Mobile Applications",
      description: "Next-generation mobile apps leveraging 5G capabilities",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["AR/VR Apps", "Live Streaming", "Real-time Gaming", "IoT Control"],
      link: "/5g-mobile-applications",
      stats: "50+ apps deployed"
    },
    {
      name: "5G Smart City Solutions",
      description: "Comprehensive smart city infrastructure powered by 5G",
      icon: <Building className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["Traffic Management", "Public Safety", "Environmental Monitoring", "Energy Management"],
      link: "/5g-smart-city-solutions",
      stats: "100+ cities"
    },
    {
      name: "5G Private Networks",
      description: "Dedicated 5G networks for enterprise and industrial use",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Private Infrastructure", "Custom Configuration", "Enhanced Security", "Dedicated Support"],
      link: "/5g-private-networks",
      stats: "99.9% uptime"
    },
    {
      name: "5G Data Analytics",
      description: "Advanced analytics platform for 5G network insights",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Network Monitoring", "Performance Analytics", "Predictive Maintenance", "Custom Reports"],
      link: "/5g-data-analytics",
      stats: "Real-time insights"
    }
  ];

  const benefits = [
    {
      title: "Ultra-Fast Speeds",
      description: "Experience speeds up to 10x faster than 4G networks",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Low Latency",
      description: "Ultra-low latency for real-time applications and IoT",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Massive Connectivity",
      description: "Support for millions of connected devices per square kilometer",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Enhanced Security",
      description: "Advanced security protocols and network slicing capabilities",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      category: "Industrial IoT",
      description: "Manufacturing automation, predictive maintenance, and quality control",
      icon: <Building className="w-6 h-6" />
    },
    {
      category: "Healthcare",
      description: "Remote surgery, telemedicine, and real-time patient monitoring",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      category: "Transportation",
      description: "Autonomous vehicles, smart traffic management, and fleet optimization",
      icon: <Car className="w-6 h-6" />
    },
    {
      category: "Entertainment",
      description: "AR/VR experiences, live streaming, and immersive gaming",
      icon: <Wifi className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions | Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive 5G solutions including network infrastructure, edge computing, mobile applications, and smart city implementations. Transform your business with next-generation connectivity."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network, edge computing, IoT, smart city, mobile applications, network infrastructure, 5G implementation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Wifi className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Next-Generation Connectivity</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                5G Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with next-generation 5G connectivity. From network infrastructure 
              to smart city implementations, we deliver comprehensive 5G solutions that drive innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Wifi className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive 5G services designed to accelerate your digital transformation and unlock new possibilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="text-center mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {service.stats}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose 5G?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the next generation of connectivity with unprecedented speed, reliability, and capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology is transforming industries and creating new opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center group hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.category}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Embrace 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the 5G revolution and unlock new possibilities for your business. 
              Our expert team is ready to help you implement cutting-edge 5G solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your 5G Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
                <Wifi className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;