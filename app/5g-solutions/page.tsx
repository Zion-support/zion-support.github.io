import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Smartphone, Globe, Zap, CheckCircle, ArrowRight, Star, Cloud, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FiveGSolutionsPage: React.FC = () => {
  const fiveGServices = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Implementation",
      description: "Complete 5G network deployment with ultra-low latency and massive IoT connectivity for modern businesses.",
      price: "$999/month",
      features: ["5G Network Setup", "IoT Integration", "Edge Computing", "Performance Monitoring"],
      link: "/5g-implementation"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Network Infrastructure",
      description: "Robust 5G infrastructure design and implementation with carrier-grade reliability and security.",
      price: "$1,299/month",
      features: ["Network Design", "Infrastructure Setup", "Security Hardening", "24/7 Monitoring"],
      link: "/5g-network-infrastructure"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "5G IoT Solutions",
      description: "Comprehensive IoT solutions powered by 5G connectivity for smart cities and industrial applications.",
      price: "$799/month",
      features: ["IoT Device Management", "Real-time Analytics", "Edge Processing", "Scalable Architecture"],
      link: "/5g-iot-solutions"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "5G Edge Computing",
      description: "Edge computing solutions leveraging 5G for ultra-low latency applications and real-time processing.",
      price: "$899/month",
      features: ["Edge Infrastructure", "Low Latency Processing", "Real-time Analytics", "Distributed Computing"],
      link: "/5g-edge-computing"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprise applications with enhanced security and control.",
      price: "$1,499/month",
      features: ["Private Network Setup", "Enhanced Security", "Custom Configuration", "Dedicated Support"],
      link: "/5g-private-networks"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "5G Smart City Solutions",
      description: "Comprehensive smart city infrastructure powered by 5G technology for urban transformation.",
      price: "$2,999/month",
      features: ["Smart Infrastructure", "Urban Analytics", "Citizen Services", "Sustainability Solutions"],
      link: "/5g-smart-city-solutions"
    }
  ];

  const stats = [
    { number: "50+", label: "5G Networks Deployed", icon: <Wifi className="w-6 h-6" /> },
    { number: "100+", label: "IoT Devices Connected", icon: <Smartphone className="w-6 h-6" /> },
    { number: "99.9%", label: "Network Uptime", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Technical Support", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation 5G Technology Services</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. From network implementation to IoT connectivity, we deliver next-generation 5G technology." />
        <meta name="keywords" content="5G solutions, 5G technology, 5G implementation, IoT connectivity, edge computing, smart cities, 5G networks" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative z-10">
              <div className="text-center max-w-6xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  Next-Generation 5G
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    5G Solutions
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your business with cutting-edge 5G technology. 
                  From ultra-fast connectivity to IoT solutions, we deliver next-generation 5G services.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                  <Star className="w-4 h-4 mr-2" />
                  5G Technology
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Our 5G Services
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Comprehensive 5G solutions designed to revolutionize connectivity. 
                  From network implementation to smart city solutions, we deliver cutting-edge 5G technology.
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
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Embrace 5G Technology?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Contact us today to discuss how our 5G solutions can transform your connectivity and business operations.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">5G Consultation</h3>
                    <p className="text-gray-300">Free 5G strategy consultation</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">IoT Integration</h3>
                    <p className="text-gray-300">Connect your devices with 5G</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300">Ongoing 5G network support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;