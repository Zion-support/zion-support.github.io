import { ArrowRight, Wifi, Smartphone, Globe, Database, Zap, Shield, Cloud, BarChart3, CheckCircle, Star, ExternalLink, Cpu, Network, Building, Car } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FiveGSolutions() {
  const fiveGServices = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities for enterprise environments.",
      icon: <Network className="w-8 h-8" />,
      path: "/5g-network-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Custom Pricing",
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring", "Security Hardening"],
      benefits: ["10x faster speeds", "Ultra-low latency", "Massive device connectivity"],
      marketPrice: "$50,000-500,000",
      category: "Infrastructure"
    },
    {
      title: "5G Edge Computing",
      description: "Deploy edge computing solutions that bring processing power closer to data sources. Reduce latency and improve performance for real-time applications.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/5g-edge-computing",
      color: "from-green-500 to-emerald-500",
      price: "From $2,999/month",
      features: ["Edge Servers", "Real-time Processing", "Data Analytics", "AI Inference", "Load Balancing"],
      benefits: ["90% latency reduction", "Real-time processing", "Cost optimization"],
      marketPrice: "$5,000-15,000/month",
      category: "Edge Computing"
    },
    {
      title: "5G IoT Solutions",
      description: "Comprehensive IoT platform leveraging 5G connectivity for smart cities, industrial automation, and connected devices. Scale to millions of devices.",
      icon: <Globe className="w-8 h-8" />,
      path: "/5g-iot-solutions",
      color: "from-purple-500 to-pink-500",
      price: "From $1,999/month",
      features: ["Device Management", "Data Collection", "Real-time Analytics", "Predictive Maintenance", "Security"],
      benefits: ["Millions of connected devices", "Real-time insights", "Predictive maintenance"],
      marketPrice: "$3,000-10,000/month",
      category: "IoT"
    },
    {
      title: "5G Smart City Solutions",
      description: "Transform urban environments with 5G-powered smart city infrastructure. Traffic management, environmental monitoring, and citizen services.",
      icon: <Building className="w-8 h-8" />,
      path: "/5g-smart-city-solutions",
      color: "from-orange-500 to-red-500",
      price: "From $9,999/month",
      features: ["Traffic Management", "Environmental Monitoring", "Citizen Services", "Public Safety", "Energy Management"],
      benefits: ["30% traffic reduction", "Improved air quality", "Enhanced citizen services"],
      marketPrice: "$15,000-50,000/month",
      category: "Smart Cities"
    },
    {
      title: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprises requiring ultra-secure, high-performance connectivity. Customized for specific industry needs.",
      icon: <Shield className="w-8 h-8" />,
      path: "/5g-private-networks",
      color: "from-indigo-500 to-purple-500",
      price: "From $4,999/month",
      features: ["Dedicated Spectrum", "Custom Security", "QoS Guarantees", "24/7 Monitoring", "Compliance"],
      benefits: ["Enhanced security", "Guaranteed performance", "Full control"],
      marketPrice: "$8,000-25,000/month",
      category: "Private Networks"
    },
    {
      title: "5G Mobile Applications",
      description: "Develop next-generation mobile applications that leverage 5G capabilities. AR/VR, real-time gaming, and immersive experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/5g-mobile-applications",
      color: "from-teal-500 to-cyan-500",
      price: "From $2,499/month",
      features: ["AR/VR Development", "Real-time Gaming", "Video Streaming", "Cloud Gaming", "Immersive Experiences"],
      benefits: ["Ultra-low latency", "High bandwidth", "Immersive experiences"],
      marketPrice: "$4,000-12,000/month",
      category: "Mobile Apps"
    },
    {
      title: "5G Data Analytics",
      description: "Advanced analytics platform for 5G networks. Real-time monitoring, performance optimization, and predictive insights for network management.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/5g-data-analytics",
      color: "from-yellow-500 to-orange-500",
      price: "From $1,499/month",
      features: ["Real-time Monitoring", "Performance Analytics", "Predictive Insights", "Network Optimization", "Reporting"],
      benefits: ["Proactive network management", "Performance optimization", "Cost reduction"],
      marketPrice: "$2,500-8,000/month",
      category: "Analytics"
    },
    {
      title: "5G Implementation Services",
      description: "End-to-end 5G implementation services from planning to deployment. Expert consultation, testing, and optimization for seamless rollout.",
      icon: <Zap className="w-8 h-8" />,
      path: "/5g-implementation",
      color: "from-rose-500 to-pink-500",
      price: "From $5,999/month",
      features: ["Network Planning", "Site Survey", "Installation", "Testing", "Optimization"],
      benefits: ["Expert implementation", "Seamless deployment", "Performance optimization"],
      marketPrice: "$10,000-30,000/month",
      category: "Implementation"
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Industrial automation, predictive maintenance, and quality control",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["30% efficiency increase", "Predictive maintenance", "Real-time monitoring"]
    },
    {
      name: "Healthcare",
      description: "Telemedicine, remote surgery, and patient monitoring",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Remote diagnostics", "Real-time monitoring", "Enhanced patient care"]
    },
    {
      name: "Transportation",
      description: "Autonomous vehicles, traffic management, and logistics",
      icon: <Car className="w-6 h-6" />,
      benefits: ["Autonomous vehicles", "Smart traffic", "Logistics optimization"]
    },
    {
      name: "Retail",
      description: "Smart stores, AR shopping, and inventory management",
      icon: <Building className="w-6 h-6" />,
      benefits: ["AR shopping", "Smart inventory", "Enhanced customer experience"]
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Speeds", icon: <Zap className="w-6 h-6" /> },
    { number: "1ms", label: "Ultra-Low Latency", icon: <Wifi className="w-6 h-6" /> },
    { number: "1M+", label: "Devices per km²", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Reliability", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta
          name="description"
          content="Comprehensive 5G solutions including network infrastructure, edge computing, IoT platforms, smart cities, and mobile applications. Transform your business with next-generation connectivity."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network, edge computing, IoT, smart cities, private networks, mobile applications, 5G implementation, ultra-low latency, high-speed connectivity"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Wifi className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Next-Generation Connectivity</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              5G
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Solutions
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with next-generation 5G connectivity. From ultra-low latency edge computing 
              to massive IoT deployments, unlock the full potential of 5G technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get 5G Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Complete 5G Solutions Suite
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From network infrastructure to edge computing and IoT platforms, 
                we provide end-to-end 5G solutions for every industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                        <div className="text-xs text-gray-400">vs {service.marketPrice}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400">+{service.features.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-300 mb-2">Benefits:</h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Industry Applications
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how 5G technology is transforming industries across the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy 5G?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with next-generation 5G connectivity. 
                Get expert consultation and implementation services.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get 5G Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}