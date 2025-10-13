import { ArrowRight, Wifi, Zap, Globe, Smartphone, Cloud, Shield, CheckCircle, Star, Mail, Phone, MapPin, Cpu, Database, Router } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FiveGSolutions() {
  const features = [
    "Ultra-Low Latency (1ms)",
    "Massive IoT Connectivity", 
    "Edge Computing Capabilities",
    "Network Slicing",
    "Private 5G Networks",
    "Smart City Integration",
    "Real-time Analytics",
    "Enhanced Security"
  ];

  const benefits = [
    "10x faster than 4G",
    "Ultra-low latency",
    "Massive device support",
    "Edge computing ready",
    "Enhanced security",
    "Real-time processing",
    "Scalable infrastructure",
    "Future-proof technology"
  ];

  const solutions = [
    {
      name: "5G Network Infrastructure",
      description: "Complete 5G network deployment and management solutions",
      icon: <Router className="w-8 h-8" />,
      features: ["Network Planning", "Tower Installation", "Spectrum Management", "Performance Monitoring"]
    },
    {
      name: "5G Edge Computing",
      description: "Edge computing solutions for ultra-low latency applications",
      icon: <Cpu className="w-8 h-8" />,
      features: ["Edge Servers", "Data Processing", "Real-time Analytics", "Local Storage"]
    },
    {
      name: "5G IoT Solutions",
      description: "Connect millions of IoT devices with 5G technology",
      icon: <Database className="w-8 h-8" />,
      features: ["Device Management", "Data Collection", "Remote Monitoring", "Automated Control"]
    },
    {
      name: "5G Smart Cities",
      description: "Transform cities with 5G-powered smart infrastructure",
      icon: <Globe className="w-8 h-8" />,
      features: ["Traffic Management", "Environmental Monitoring", "Public Safety", "Energy Optimization"]
    }
  ];

  const testimonials = [
    {
      name: "Robert Martinez",
      company: "Smart City Solutions",
      role: "CTO",
      content: "The 5G infrastructure deployment was flawless. We now have ultra-fast connectivity across our entire city with 99.9% uptime.",
      rating: 5
    },
    {
      name: "Lisa Wang", 
      company: "IoT Manufacturing",
      role: "Operations Director",
      content: "5G has enabled us to connect over 50,000 devices with real-time monitoring. Our efficiency has increased by 300%.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta
          name="description"
          content="Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities for next-generation applications."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network, edge computing, IoT connectivity, smart cities, ultra-low latency, network infrastructure, 5G deployment"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                  <Wifi className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">Next-Gen Connectivity</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  5G
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    {" "}Solutions
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Complete 5G network deployment and management solutions. Ultra-low latency, 
                  massive IoT connectivity, and edge computing capabilities for next-generation applications.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                  </Link>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">10x</div>
                    <div className="text-gray-300 text-sm">Faster Speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">1ms</div>
                    <div className="text-gray-300 text-sm">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">1M+</div>
                    <div className="text-gray-300 text-sm">Devices/km²</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">5G Network Status</h3>
                    <p className="text-gray-300">Real-time network performance</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Network Speed</span>
                      <span className="text-cyan-400 font-semibold">2.1 Gbps</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Latency</span>
                      <span className="text-green-400 font-semibold">0.8ms</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Connected Devices</span>
                      <span className="text-purple-400 font-semibold">12,847</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span className="text-gray-300">Network Uptime</span>
                      <span className="text-green-400 font-semibold">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive 5G solutions for every industry and use case
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {solution.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{solution.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced 5G capabilities that transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose 5G?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with next-generation connectivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are transforming with 5G technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for 5G Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the 5G revolution and transform your business with next-generation connectivity. 
              Contact us for a custom 5G solution tailored to your needs.
            </p>
            
            {/* Contact Information */}
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
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}