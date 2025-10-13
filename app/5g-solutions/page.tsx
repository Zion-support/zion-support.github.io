import React from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Wifi, 
  Smartphone, 
  Server, 
  Zap, 
  Shield, 
  Database, 
  Monitor, 
  Network, 
  Cpu, 
  Eye, 
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  Sparkles,
  TrendingUp,
  Users,
  FileText,
  Settings,
  Layers,
  Workflow,
  BarChart3,
  Lock,
  MessageSquare,
  Search,
  Filter,
  HardDrive,
  WifiOff
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const FiveGSolutionsPage = () => {
  const fiveGServices = [
    {
      id: "5g-implementation",
      name: "5G Network Implementation",
      tagline: "Complete 5G Infrastructure Deployment",
      description: "Design, deploy, and optimize 5G networks for maximum performance. End-to-end 5G implementation with carrier-grade reliability and ultra-low latency.",
      price: "From $99,999/project",
      features: [
        "5G network architecture design",
        "Core network implementation",
        "RAN (Radio Access Network) deployment",
        "Network optimization & tuning",
        "Performance monitoring & analytics",
        "Security implementation",
        "Compliance & certification",
        "24/7 technical support"
      ],
      icon: <Network className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      category: "Infrastructure",
      popular: true,
      link: "/5g-implementation"
    },
    {
      id: "5g-edge-computing",
      name: "5G Edge Computing Solutions",
      tagline: "Ultra-Low Latency Edge Processing",
      description: "Deploy edge computing infrastructure to leverage 5G's ultra-low latency. Real-time processing, IoT integration, and distributed computing solutions.",
      price: "From $49,999/project",
      features: [
        "Edge server deployment",
        "Ultra-low latency processing",
        "IoT device integration",
        "Real-time data analytics",
        "Distributed computing architecture",
        "Edge AI/ML deployment",
        "Network slicing optimization",
        "Performance monitoring"
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      category: "Edge Computing",
      popular: true,
      link: "/5g-edge-computing"
    },
    {
      id: "5g-iot-solutions",
      name: "5G IoT & Smart Device Solutions",
      tagline: "Massive IoT Connectivity & Management",
      description: "Connect millions of IoT devices with 5G's massive machine-type communications. Smart city solutions, industrial IoT, and connected device management.",
      price: "From $29,999/project",
      features: [
        "Massive IoT connectivity",
        "Device management platform",
        "Real-time data processing",
        "Smart city integration",
        "Industrial IoT solutions",
        "Sensor network optimization",
        "Data analytics & insights",
        "Scalable architecture"
      ],
      icon: <Wifi className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      category: "IoT",
      popular: true,
      link: "/5g-iot-solutions"
    },
    {
      id: "5g-mobile-applications",
      name: "5G Mobile Application Development",
      tagline: "Next-Gen Mobile Apps for 5G",
      description: "Develop mobile applications optimized for 5G networks. Ultra-fast streaming, AR/VR experiences, and real-time collaboration features.",
      price: "From $19,999/project",
      features: [
        "5G-optimized mobile apps",
        "Ultra-fast streaming capabilities",
        "AR/VR integration",
        "Real-time collaboration",
        "Cloud gaming support",
        "Enhanced security features",
        "Cross-platform development",
        "Performance optimization"
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      category: "Mobile Apps",
      popular: false,
      link: "/5g-mobile-applications"
    },
    {
      id: "5g-smart-city-solutions",
      name: "5G Smart City Solutions",
      tagline: "Intelligent Urban Infrastructure",
      description: "Transform cities with 5G-powered smart infrastructure. Traffic management, environmental monitoring, public safety, and citizen services.",
      price: "From $199,999/project",
      features: [
        "Smart traffic management",
        "Environmental monitoring",
        "Public safety systems",
        "Citizen service platforms",
        "Energy management",
        "Waste management optimization",
        "Emergency response systems",
        "Data-driven governance"
      ],
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      category: "Smart Cities",
      popular: false,
      link: "/5g-smart-city-solutions"
    },
    {
      id: "5g-private-networks",
      name: "5G Private Network Solutions",
      tagline: "Dedicated 5G Networks for Enterprises",
      description: "Deploy private 5G networks for enterprise use. Dedicated spectrum, enhanced security, and customized network slicing for specific business needs.",
      price: "From $79,999/project",
      features: [
        "Private 5G network deployment",
        "Dedicated spectrum allocation",
        "Enhanced security & privacy",
        "Custom network slicing",
        "Enterprise integration",
        "Performance guarantees",
        "Dedicated support team",
        "Compliance management"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      category: "Private Networks",
      popular: false,
      link: "/5g-private-networks"
    },
    {
      id: "5g-data-analytics",
      name: "5G Data Analytics Platform",
      tagline: "Real-Time Network & Traffic Analytics",
      description: "Analyze 5G network performance and user behavior in real-time. Advanced analytics, predictive insights, and network optimization recommendations.",
      price: "From $39,999/month",
      features: [
        "Real-time network analytics",
        "User behavior analysis",
        "Predictive network insights",
        "Performance optimization",
        "Traffic pattern analysis",
        "Quality of Service monitoring",
        "Custom reporting dashboards",
        "AI-powered recommendations"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      category: "Analytics",
      popular: false,
      link: "/5g-data-analytics"
    },
    {
      id: "5g-network-infrastructure",
      name: "5G Network Infrastructure Management",
      tagline: "Comprehensive Network Operations Center",
      description: "Manage and monitor 5G network infrastructure with our advanced NOC services. Proactive monitoring, maintenance, and optimization.",
      price: "From $59,999/month",
      features: [
        "24/7 network monitoring",
        "Proactive maintenance",
        "Performance optimization",
        "Fault detection & resolution",
        "Capacity planning",
        "Security monitoring",
        "Compliance management",
        "Expert technical team"
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      category: "Network Management",
      popular: false,
      link: "/5g-network-infrastructure"
    }
  ];

  const categories = [
    { name: "All", count: fiveGServices.length },
    { name: "Infrastructure", count: fiveGServices.filter(s => s.category === "Infrastructure").length },
    { name: "Edge Computing", count: fiveGServices.filter(s => s.category === "Edge Computing").length },
    { name: "IoT", count: fiveGServices.filter(s => s.category === "IoT").length },
    { name: "Mobile Apps", count: fiveGServices.filter(s => s.category === "Mobile Apps").length },
    { name: "Smart Cities", count: fiveGServices.filter(s => s.category === "Smart Cities").length },
    { name: "Private Networks", count: fiveGServices.filter(s => s.category === "Private Networks").length },
    { name: "Analytics", count: fiveGServices.filter(s => s.category === "Analytics").length },
    { name: "Network Management", count: fiveGServices.filter(s => s.category === "Network Management").length }
  ];

  const stats = [
    { number: "8+", label: "5G Service Categories", icon: <Globe className="w-6 h-6" /> },
    { number: "100+", label: "5G Projects Deployed", icon: <Award className="w-6 h-6" /> },
    { number: "99.99%", label: "Network Reliability", icon: <Shield className="w-6 h-6" /> },
    { number: "1ms", label: "Ultra-Low Latency", icon: <Zap className="w-6 h-6" /> }
  ];

  const fiveGBenefits = [
    {
      title: "Ultra-Fast Speeds",
      description: "Experience speeds up to 100x faster than 4G, enabling instant downloads and seamless streaming.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Ultra-Low Latency",
      description: "Achieve latency as low as 1ms, perfect for real-time applications and critical communications.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Massive Connectivity",
      description: "Connect millions of devices simultaneously with 5G's massive machine-type communications.",
      icon: <Wifi className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Enhanced Security",
      description: "Advanced security features and network slicing for isolated, secure communications.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  const useCases = [
    {
      title: "Autonomous Vehicles",
      description: "Enable real-time communication between vehicles and infrastructure for safer autonomous driving.",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Remote Surgery",
      description: "Enable remote medical procedures with ultra-low latency and high reliability.",
      icon: <Eye className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Smart Manufacturing",
      description: "Optimize industrial processes with real-time monitoring and control systems.",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AR/VR Experiences",
      description: "Deliver immersive augmented and virtual reality experiences with minimal latency.",
      icon: <Globe className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="5G Solutions - Zion Tech Group | Next-Generation Connectivity & Infrastructure"
        description="Transform your business with cutting-edge 5G solutions. Network implementation, edge computing, IoT connectivity, and smart city solutions. Enterprise-grade 5G services starting from $19,999."
        keywords="5G solutions, 5G implementation, edge computing, IoT connectivity, smart cities, 5G networks, ultra-low latency, massive connectivity"
        canonical="https://ziontechgroup.com/5g-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Next-Generation Connectivity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            5G Solutions
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}
              & Infrastructure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Harness the power of 5G technology to transform your business. 
            Ultra-fast speeds, ultra-low latency, and massive connectivity for the next generation of applications.
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
              See 5G in Action
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
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

      {/* 5G Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose 5G?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of 5G technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fiveGBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              5G Use Cases & Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how 5G is transforming industries and enabling new possibilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiveGServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      <span className="text-xs text-yellow-400 font-medium">Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.tagline}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-xs text-gray-400">
                      {service.price.includes('/project') ? 'per project' : 'per month'}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Embrace the 5G Revolution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform your business with the power of 5G technology. From network implementation to smart city solutions, 
            we provide the expertise and infrastructure you need to stay ahead of the curve.
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
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View 5G Pricing
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGSolutionsPage;