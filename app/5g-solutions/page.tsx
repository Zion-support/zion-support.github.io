import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Wifi, 
  Zap, 
  Globe, 
  Smartphone, 
  Cpu, 
  Database, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Target, 
  TrendingUp,
  Clock,
  BarChart3,
  Cloud,
  Network,
  Settings,
  Monitor,
  Smartphone as Phone,
  Laptop,
  Headphones,
  Mail,
  Phone as PhoneIcon,
  MapPin,
  Calendar
} from "lucide-react";

export default function FiveGSolutionsPage() {
  const solutions = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network deployment and management solutions with ultra-low latency and massive connectivity.",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/5g-network-infrastructure",
      features: ["Ultra-low Latency", "Massive IoT Connectivity", "Edge Computing", "Network Slicing"],
      benefits: ["99.9% Uptime", "Sub-1ms Latency", "10x Faster Speeds", "Unlimited Scalability"]
    },
    {
      title: "5G IoT Solutions",
      description: "Comprehensive IoT solutions powered by 5G for smart cities, industrial automation, and connected devices.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/5g-iot-solutions",
      features: ["Smart City Integration", "Industrial IoT", "Real-time Monitoring", "Predictive Analytics"],
      benefits: ["Millions of Devices", "Real-time Data", "Cost Reduction", "Enhanced Efficiency"]
    },
    {
      title: "5G Smart City Solutions",
      description: "Transform urban environments with 5G-powered smart city infrastructure and services.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/5g-smart-city",
      features: ["Traffic Management", "Public Safety", "Environmental Monitoring", "Citizen Services"],
      benefits: ["Improved Quality of Life", "Reduced Congestion", "Better Resource Management", "Enhanced Security"]
    },
    {
      title: "5G Edge Computing",
      description: "Deploy edge computing solutions that bring processing power closer to data sources for faster response times.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/5g-edge-computing",
      features: ["Local Processing", "Real-time Analytics", "Reduced Latency", "Bandwidth Optimization"],
      benefits: ["Faster Processing", "Lower Costs", "Better Performance", "Enhanced Security"]
    },
    {
      title: "5G Mobile Applications",
      description: "Develop cutting-edge mobile applications that leverage 5G capabilities for enhanced user experiences.",
      icon: <Phone className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/5g-mobile-apps",
      features: ["AR/VR Integration", "Real-time Streaming", "Cloud Gaming", "IoT Control"],
      benefits: ["Immersive Experiences", "Seamless Connectivity", "High Performance", "Future-Ready"]
    },
    {
      title: "5G Data Analytics",
      description: "Harness the power of 5G data for advanced analytics, insights, and decision-making capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/5g-data-analytics",
      features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization", "AI Integration"],
      benefits: ["Instant Insights", "Better Decisions", "Competitive Advantage", "Cost Optimization"]
    }
  ];

  const benefits = [
    {
      title: "Ultra-Fast Speeds",
      description: "Experience speeds up to 100x faster than 4G with our 5G solutions",
      icon: <Zap className="w-6 h-6" />,
      stat: "100x Faster"
    },
    {
      title: "Ultra-Low Latency",
      description: "Achieve sub-millisecond latency for real-time applications",
      icon: <Clock className="w-6 h-6" />,
      stat: "< 1ms Latency"
    },
    {
      title: "Massive Connectivity",
      description: "Connect millions of devices simultaneously with 5G technology",
      icon: <Network className="w-6 h-6" />,
      stat: "1M+ Devices"
    },
    {
      title: "Enhanced Security",
      description: "Built-in security features and advanced threat protection",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% Secure"
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Revolutionize manufacturing with 5G-powered automation and real-time monitoring",
      icon: <Settings className="w-6 h-6" />,
      benefits: ["Automated Production", "Quality Control", "Predictive Maintenance", "Supply Chain Optimization"]
    },
    {
      title: "Healthcare Innovation",
      description: "Enable remote surgery, telemedicine, and real-time patient monitoring with 5G",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Remote Surgery", "Telemedicine", "Patient Monitoring", "Medical IoT"]
    },
    {
      title: "Autonomous Vehicles",
      description: "Power self-driving cars and smart transportation systems with ultra-reliable 5G connectivity",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["V2X Communication", "Real-time Navigation", "Traffic Management", "Safety Systems"]
    },
    {
      title: "Entertainment & Media",
      description: "Deliver immersive AR/VR experiences and ultra-high-definition streaming",
      icon: <Monitor className="w-6 h-6" />,
      benefits: ["AR/VR Experiences", "4K/8K Streaming", "Cloud Gaming", "Live Events"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>5G Solutions - Zion Tech Group | Next-Generation Connectivity</title>
        <meta 
          name="description" 
          content="Transform your business with cutting-edge 5G solutions including network infrastructure, IoT, smart cities, edge computing, and mobile applications." 
        />
        <meta 
          name="keywords" 
          content="5G solutions, 5G network, IoT solutions, smart city, edge computing, mobile applications, ultra-low latency, massive connectivity" 
        />
      </Helmet>

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
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              5G Solutions
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge 5G technology. Experience ultra-fast speeds, 
            ultra-low latency, and massive connectivity for the next generation of digital innovation.
          </p>
          
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
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Why Choose 5G?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary benefits of 5G technology that will transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 mb-3">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our 5G Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 5G solutions designed to accelerate your digital transformation and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {solution.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {solution.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Real-World Applications
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries and creating new possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      {useCase.title}
                    </span>
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Ready for the 5G Revolution?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the next generation of connectivity and transform your business with our comprehensive 5G solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your 5G Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
