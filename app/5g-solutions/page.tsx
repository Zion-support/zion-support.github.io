import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Phone, Laptop, Headphones, Package, Heart, Receipt, Calendar, Clock, Award, Sparkles, CheckCircle, Star, Rocket, DollarSign, Zap as Lightning, Download, Play, Eye, PieChart, LineChart, Activity, MessageSquare, Image, Video, Mic, Search, Filter, Layers, Cpu as CpuIcon, Database as DatabaseIcon, Shield as ShieldIcon, Zap as ZapIcon, Building, Wrench, CheckCircle2, AlertTriangle, RefreshCw, GitBranch, Terminal, Layers as LayersIcon, Wifi as WifiIcon, Signal, Radio, Satellite, Antenna } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FiveGSolutions() {
  const fiveGServices = [
    {
      title: "5G Network Infrastructure Design",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities for smart cities and enterprises.",
      icon: <Antenna className="w-8 h-8" />,
      path: "/5g-network-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Custom Pricing",
      originalPrice: null,
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring", "Smart City Solutions", "Private Networks"],
      category: "5G Infrastructure",
      popular: true,
      capabilities: ["5G Core Network", "RAN Optimization", "Edge Computing", "Network Slicing"],
      useCases: ["Smart Cities", "Industrial IoT", "Autonomous Vehicles", "Remote Healthcare"]
    },
    {
      title: "5G Edge Computing Solutions",
      description: "Deploy edge computing infrastructure with 5G connectivity for ultra-low latency applications, real-time processing, and distributed computing workloads.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/5g-edge-computing",
      color: "from-green-500 to-emerald-500",
      price: "From $499/month",
      originalPrice: "$999/month",
      features: ["Edge Servers", "Real-time Processing", "Low Latency", "Distributed Computing", "IoT Integration", "Performance Monitoring"],
      category: "5G Edge",
      popular: true,
      capabilities: ["Edge Computing", "Real-time Analytics", "IoT Processing", "Content Delivery"],
      useCases: ["Autonomous Vehicles", "AR/VR Applications", "Industrial Automation", "Smart Manufacturing"]
    },
    {
      title: "5G IoT Solutions & Connectivity",
      description: "Comprehensive IoT connectivity solutions with 5G networks for massive device deployment, real-time data processing, and intelligent automation.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-iot-solutions",
      color: "from-purple-500 to-violet-500",
      price: "From $299/month",
      originalPrice: "$599/month",
      features: ["Massive IoT", "Device Management", "Real-time Analytics", "Predictive Maintenance", "Remote Monitoring", "Data Processing"],
      category: "5G IoT",
      capabilities: ["IoT Connectivity", "Device Management", "Data Analytics", "Predictive Maintenance"],
      useCases: ["Smart Agriculture", "Industrial IoT", "Smart Buildings", "Environmental Monitoring"]
    },
    {
      title: "5G Smart City Solutions",
      description: "Transform cities with 5G-powered smart infrastructure including traffic management, public safety, energy optimization, and citizen services.",
      icon: <Building className="w-8 h-8" />,
      path: "/5g-smart-city-solutions",
      color: "from-orange-500 to-amber-500",
      price: "From $799/month",
      originalPrice: "$1,599/month",
      features: ["Traffic Management", "Public Safety", "Energy Optimization", "Citizen Services", "Environmental Monitoring", "Emergency Response"],
      category: "5G Smart City",
      capabilities: ["Smart Infrastructure", "Traffic Optimization", "Public Safety", "Energy Management"],
      useCases: ["Smart Traffic", "Public Safety", "Energy Grid", "Citizen Services"]
    },
    {
      title: "5G Private Networks",
      description: "Dedicated 5G private networks for enterprises with enhanced security, custom configurations, and guaranteed performance for critical applications.",
      icon: <Shield className="w-8 h-8" />,
      path: "/5g-private-networks",
      color: "from-red-500 to-pink-500",
      price: "From $1,299/month",
      originalPrice: "$2,599/month",
      features: ["Private Network", "Enhanced Security", "Custom Configuration", "Guaranteed Performance", "Dedicated Support", "Compliance"],
      category: "5G Private",
      capabilities: ["Private 5G", "Network Slicing", "Security Hardening", "Custom Configuration"],
      useCases: ["Manufacturing", "Healthcare", "Financial Services", "Government"]
    },
    {
      title: "5G Mobile Applications",
      description: "Develop and deploy 5G-optimized mobile applications with ultra-low latency, high bandwidth, and real-time capabilities for next-generation user experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/5g-mobile-applications",
      color: "from-cyan-500 to-blue-500",
      price: "From $199/month",
      originalPrice: "$399/month",
      features: ["5G Optimization", "Real-time Features", "High Bandwidth", "Low Latency", "AR/VR Support", "Cloud Integration"],
      category: "5G Mobile",
      capabilities: ["5G App Development", "Real-time Features", "AR/VR Integration", "Cloud Connectivity"],
      useCases: ["Gaming", "AR/VR Apps", "Video Streaming", "Real-time Communication"]
    },
    {
      title: "5G Data Analytics & Insights",
      description: "Advanced analytics platform for 5G networks with real-time monitoring, performance optimization, and predictive insights for network management.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/5g-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "From $349/month",
      originalPrice: "$699/month",
      features: ["Real-time Monitoring", "Performance Analytics", "Predictive Insights", "Network Optimization", "Traffic Analysis", "Quality Metrics"],
      category: "5G Analytics",
      capabilities: ["Network Analytics", "Performance Monitoring", "Predictive Analytics", "Traffic Analysis"],
      useCases: ["Network Optimization", "Performance Monitoring", "Capacity Planning", "Quality Assurance"]
    },
    {
      title: "5G Implementation & Deployment",
      description: "End-to-end 5G implementation services including planning, deployment, testing, and optimization for seamless network rollout and operation.",
      icon: <Settings className="w-8 h-8" />,
      path: "/5g-implementation",
      color: "from-indigo-500 to-purple-500",
      price: "From $599/month",
      originalPrice: "$1,199/month",
      features: ["Network Planning", "Deployment Management", "Testing & Validation", "Performance Optimization", "Training & Support", "Maintenance"],
      category: "5G Implementation",
      capabilities: ["Project Management", "Technical Implementation", "Testing & Validation", "Training Services"],
      useCases: ["Network Rollout", "System Integration", "Performance Tuning", "Staff Training"]
    }
  ];

  const fiveGCapabilities = [
    {
      title: "Ultra-Low Latency",
      description: "Achieve sub-millisecond latency for real-time applications with 5G technology",
      icon: <Zap className="w-8 h-8" />,
      specifications: ["< 1ms Latency", "Real-time Processing", "Critical Applications", "Edge Computing"]
    },
    {
      title: "Massive IoT Connectivity",
      description: "Connect millions of devices with 5G's massive IoT capabilities",
      icon: <Wifi className="w-8 h-8" />,
      specifications: ["1M+ Devices/km²", "Low Power Consumption", "Long Battery Life", "Cost-effective"]
    },
    {
      title: "Enhanced Mobile Broadband",
      description: "Deliver ultra-fast speeds and high capacity for mobile applications",
      icon: <Signal className="w-8 h-8" />,
      specifications: ["10+ Gbps Speeds", "High Capacity", "4K/8K Video", "AR/VR Support"]
    },
    {
      title: "Network Slicing",
      description: "Create virtual networks tailored for specific applications and requirements",
      icon: <Layers className="w-8 h-8" />,
      specifications: ["Custom Networks", "QoS Guarantees", "Isolated Services", "Flexible Configuration"]
    },
    {
      title: "Edge Computing",
      description: "Process data at the network edge for reduced latency and improved performance",
      icon: <Cpu className="w-8 h-8" />,
      specifications: ["Edge Servers", "Local Processing", "Reduced Latency", "Bandwidth Optimization"]
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security features for 5G networks and applications",
      icon: <Shield className="w-8 h-8" />,
      specifications: ["End-to-End Encryption", "Identity Management", "Threat Detection", "Compliance"]
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      icon: <Settings className="w-6 h-6" />,
      applications: ["Smart Factories", "Predictive Maintenance", "Quality Control", "Supply Chain"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Healthcare",
      icon: <Heart className="w-6 h-6" />,
      applications: ["Telemedicine", "Remote Surgery", "Patient Monitoring", "Medical Imaging"],
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Transportation",
      icon: <Globe className="w-6 h-6" />,
      applications: ["Autonomous Vehicles", "Traffic Management", "Fleet Optimization", "Public Transit"],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Entertainment",
      icon: <Video className="w-6 h-6" />,
      applications: ["AR/VR Gaming", "Live Streaming", "Virtual Events", "Immersive Content"],
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Agriculture",
      icon: <Package className="w-6 h-6" />,
      applications: ["Precision Farming", "Crop Monitoring", "Livestock Tracking", "Supply Chain"],
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "Energy",
      icon: <Zap className="w-6 h-6" />,
      applications: ["Smart Grids", "Renewable Energy", "Grid Optimization", "Energy Storage"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const stats = [
    { number: "10x", label: "Faster Speeds", icon: <Zap className="w-6 h-6" /> },
    { number: "< 1ms", label: "Ultra-Low Latency", icon: <Clock className="w-6 h-6" /> },
    { number: "1M+", label: "IoT Devices/km²", icon: <Wifi className="w-6 h-6" /> },
    { number: "99.9%", label: "Reliability", icon: <Award className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Dr. Michael Rodriguez",
      company: "Smart City Initiative",
      role: "CTO",
      content: "Zion Tech Group's 5G solutions transformed our smart city infrastructure. We've achieved 90% reduction in traffic congestion and 50% improvement in emergency response times.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Sarah Kim",
      company: "Manufacturing Corp",
      role: "VP of Technology",
      content: "The 5G private network implementation was flawless. Our manufacturing efficiency increased by 40% with real-time monitoring and predictive maintenance capabilities.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "James Wilson",
      company: "Healthcare Systems",
      role: "IT Director",
      content: "5G edge computing enabled us to provide remote surgery capabilities with ultra-low latency. The technology is truly revolutionary for healthcare applications.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta
          name="description"
          content="Comprehensive 5G solutions including network infrastructure, edge computing, IoT connectivity, smart cities, and private networks. Transform your business with next-generation 5G technology."
        />
        <meta
          name="keywords"
          content="5G solutions, 5G network, edge computing, IoT connectivity, smart cities, private networks, 5G infrastructure, mobile applications, data analytics"
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
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 5G Solutions Provider 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                5G Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with next-generation 5G technology. From ultra-low latency edge computing 
              to massive IoT connectivity, we provide comprehensive 5G solutions for the digital future.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* 5G Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  5G Capabilities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of 5G technology with our comprehensive capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  <div className="space-y-2">
                    {capability.specifications.map((spec, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our 5G Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of 5G solutions designed to transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fiveGServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    
                    <div className="text-center mb-4">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-cyan-400 text-center">
                          +{service.features.length - 4} more features
                        </div>
                      )}
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G solutions are tailored for various industries and use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {industry.applications.map((application, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our clients say about our 5G solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Embrace 5G Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the 5G revolution with our comprehensive solutions. Transform your business with ultra-fast connectivity, 
              ultra-low latency, and massive IoT capabilities. Start your 5G journey today.
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
                to="/micro-saas-services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Explore Micro SAAS
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}