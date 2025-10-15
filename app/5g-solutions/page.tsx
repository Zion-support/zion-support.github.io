import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Shield, CheckCircle, ArrowRight, Clock, Network, Cpu, Smartphone, BarChart3, Star } from 'lucide-react';

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
      features: ["Tower installation", "Fiber optic setup", "Antenna configuration", "Power systems", "Backup systems", "Security implementation"],
      price: "From $8,999",
      marketPrice: "$15,999-75,999",
      popular: false,
      icon: <Network className="w-8 h-8" />,
      benefits: "Build infrastructure that supports 10x more devices than 4G"
    },
    {
      name: "5G IoT Solutions",
      description: "Comprehensive IoT platform leveraging 5G's ultra-low latency and massive connectivity.",
      features: ["IoT device integration", "Real-time data processing", "Edge computing", "Predictive analytics", "Remote monitoring", "Automated responses"],
      price: "From $3,999",
      marketPrice: "$7,999-29,999",
      popular: true,
      icon: <Cpu className="w-8 h-8" />,
      benefits: "Connect and manage 1M+ IoT devices with sub-1ms latency"
    },
    {
      name: "5G Smart City Solutions",
      description: "Transform urban infrastructure with 5G-powered smart city technologies.",
      features: ["Traffic management", "Environmental monitoring", "Public safety", "Energy optimization", "Citizen services", "Data analytics"],
      price: "From $15,999",
      marketPrice: "$25,999-99,999",
      popular: false,
      icon: <Smartphone className="w-8 h-8" />,
      benefits: "Reduce city operational costs by 40% while improving citizen satisfaction"
    },
    {
      name: "5G Edge Computing",
      description: "Deploy edge computing infrastructure to process data closer to the source.",
      features: ["Edge server deployment", "Data processing", "AI inference", "Content delivery", "Security management", "Performance optimization"],
      price: "From $4,999",
      marketPrice: "$9,999-39,999",
      popular: true,
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: "Reduce latency by 90% and improve application performance"
    },
    {
      name: "5G Private Networks",
      description: "Dedicated 5G networks for enterprise and industrial applications.",
      features: ["Private network design", "Dedicated spectrum", "Custom security", "Enterprise integration", "Performance guarantees", "24/7 support"],
      price: "From $12,999",
      marketPrice: "$19,999-79,999",
      popular: false,
      icon: <Shield className="w-8 h-8" />,
      benefits: "Ensure data privacy and security with dedicated network infrastructure"
    }
  ];

  const features = [
    "Ultra-low latency (1ms)",
    "Massive device connectivity",
    "Enhanced mobile broadband",
    "Network slicing",
    "Edge computing integration",
    "Advanced security protocols"
  ];

  const stats = [
    { number: "100+", label: "5G Projects Deployed" },
    { number: "50+", label: "Cities Transformed" },
    { number: "99.9%", label: "Network Uptime" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Next-Generation Network Technology | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive 5G solutions including network implementation, IoT platforms, smart city technologies, and edge computing." />
        <meta name="keywords" content="5G solutions, 5G implementation, 5G IoT, smart city, edge computing, network infrastructure, 5G technology" />
        <meta property="og:title" content="5G Solutions - Next-Generation Network Technology" />
        <meta property="og:description" content="Transform your business with our comprehensive 5G solutions including network implementation, IoT platforms, and smart city technologies." />
        <meta property="og:url" content="https://ziontechgroup.com/5g-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/5g-solutions" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                5G Solutions
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {' '}That Transform
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Harness the power of 5G technology to revolutionize your business operations, 
                enable IoT innovations, and build the smart infrastructure of tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#solutions"
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
                >
                  Explore Solutions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
                >
                  Get Consultation
                  <Clock className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G solutions designed to transform your business and enable next-generation applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group relative ${
                  solution.popular ? 'ring-2 ring-blue-500' : ''
                }`}>
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="group-hover:scale-110 transition-transform">
                        {solution.icon}
                      </div>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {solution.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {solution.description}
                    </p>
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-blue-400 mb-1">{solution.price}</div>
                      <div className="text-sm text-gray-400">Market: {solution.marketPrice}</div>
                    </div>
                    <div className="text-sm text-green-400 font-medium mb-4">
                      {solution.benefits}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a
                      href="#contact"
                      className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Get Quote
                    </a>
                    <a
                      href="#demo"
                      className="block w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Schedule Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our 5G Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G solutions are built on cutting-edge technology and industry expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-colors group">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform with 5G?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let our 5G experts help you implement the perfect solution for your business needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;