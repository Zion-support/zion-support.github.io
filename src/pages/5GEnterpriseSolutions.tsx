import React from 'react';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  Network, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Monitor,
  AlertTriangle,
  Clock,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Lightbulb,
  Rocket,
  Award,
  Wifi,
  Signal,
  Router,
  Antenna,
  Satellite,
  Cloud,
  Database,
  Server,
  HardDrive,
  Smartphone,
  Tablet,
  Laptop,
  Monitor as MonitorIcon
=======
  Wifi, 
  Shield, 
  Zap, 
  Building, 
  Globe, 
  BarChart3, 
  Cpu, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
} from 'lucide-react';

const FiveGEnterpriseSolutions = () => {
  const features = [
    {
      icon: Network,
      title: "Ultra-Fast Connectivity",
<<<<<<< HEAD
      description: "Lightning-fast 5G networks with ultra-low latency for enterprise applications"
=======
      description: "Lightning-fast 5G networks with ultra-low latency for real-time applications"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
    },
    {
      icon: Shield,
      title: "Enterprise Security",
<<<<<<< HEAD
      description: "Advanced security protocols and network isolation for business-critical operations"
    },
    {
      icon: Users,
      title: "Massive IoT Support",
      description: "Connect thousands of devices with reliable, scalable network infrastructure"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Near-instantaneous data transmission for time-sensitive applications"
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored 5G solutions designed for your specific business requirements"
=======
      description: "Advanced security protocols and private network solutions for enterprise needs"
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Sub-1ms latency for mission-critical applications and real-time operations"
    },
    {
      icon: Building,
      title: "Private Networks",
      description: "Dedicated 5G infrastructure for enterprise campuses and facilities"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
    },
    {
      icon: Globe,
      title: "Global Coverage",
<<<<<<< HEAD
      description: "Worldwide 5G network coverage with seamless roaming capabilities"
    }
  ];

  const capabilities = [
    "Private 5G network deployment and management",
    "Network slicing for isolated business applications",
    "Edge computing integration and optimization",
    "IoT device management and monitoring",
    "Real-time analytics and network performance tracking",
    "Advanced security and compliance features",
    "Scalable bandwidth allocation and management",
    "24/7 network monitoring and support",
    "Custom API integration and development",
    "Comprehensive network documentation and reporting"
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Smart factory automation with real-time monitoring and control"
    },
    {
      title: "Healthcare",
      description: "Remote surgery and telemedicine with ultra-low latency"
    },
    {
      title: "Transportation",
      description: "Autonomous vehicles and intelligent traffic management"
    },
    {
      title: "Retail",
      description: "Enhanced customer experiences with AR/VR and IoT integration"
    },
    {
      title: "Energy",
      description: "Smart grid management and renewable energy optimization"
    },
    {
      title: "Education",
      description: "Immersive learning experiences and remote collaboration"
=======
      description: "Worldwide 5G deployment with seamless roaming and connectivity"
    },
    {
      icon: BarChart3,
      title: "Network Analytics",
      description: "Advanced monitoring and analytics for optimal network performance"
    }
  ];

  const solutions = [
    {
      title: "Manufacturing & Industry 4.0",
      description: "Enable smart factories with real-time monitoring and autonomous operations",
      benefits: ["Predictive maintenance", "Real-time quality control", "Automated production lines"]
    },
    {
      title: "Healthcare & Telemedicine",
      description: "Support remote surgeries and real-time patient monitoring",
      benefits: ["Remote consultations", "Real-time diagnostics", "Emergency response systems"]
    },
    {
      title: "Autonomous Vehicles",
      description: "Power connected and autonomous vehicle networks",
      benefits: ["V2X communication", "Traffic optimization", "Safety systems"]
    },
    {
      title: "Smart Cities",
      description: "Build intelligent urban infrastructure with 5G connectivity",
      benefits: ["Traffic management", "Environmental monitoring", "Public safety"]
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
    }
  ];

  const benefits = [
<<<<<<< HEAD
    {
      icon: Zap,
      title: "10x Faster Speed",
      description: "Up to 10x faster than 4G networks"
    },
    {
      icon: Clock,
      title: "Ultra-Low Latency",
      description: "1ms latency for real-time applications"
    },
    {
      icon: Users,
      title: "Massive Connectivity",
      description: "Support for 1M+ devices per km²"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced encryption and network isolation"
    }
  ];

  const solutions = [
    {
      title: "Private 5G Networks",
      description: "Dedicated 5G infrastructure for enterprise use",
      icon: Network
    },
    {
      title: "Network Slicing",
      description: "Isolated network segments for different applications",
      icon: Shield
    },
    {
      title: "Edge Computing",
      description: "Local data processing for reduced latency",
      icon: Cpu
    },
    {
      title: "IoT Integration",
      description: "Seamless connectivity for smart devices",
      icon: Wifi
    }
=======
    "10x faster than 4G networks",
    "Ultra-low latency for real-time applications",
    "Massive IoT device connectivity",
    "Enhanced mobile broadband",
    "Network slicing for different use cases",
    "Improved energy efficiency"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Network className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              5G Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Transform your business with next-generation 5G connectivity, 
              ultra-low latency, and massive IoT support for the digital enterprise.
=======
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Wifi className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                5G Enterprise Solutions
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your enterprise with cutting-edge 5G technology. Experience ultra-fast connectivity, 
              ultra-low latency, and massive IoT capabilities for the next generation of business operations.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
<<<<<<< HEAD
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Watch Demo
=======
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Next-Generation Connectivity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of 5G technology with enterprise-grade features 
              designed for modern business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-blue-600 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 5G for Enterprise?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of 5G technology in your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600 rounded-full">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose 5G for Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G solutions deliver unprecedented speed, reliability, and capabilities 
              that will revolutionize how your business operates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
<<<<<<< HEAD
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise 5G Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 5G solutions designed to meet the unique needs of modern enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-600 rounded-lg mr-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 5G capabilities that adapt and scale with your business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {capabilities.slice(0, 5).map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {capabilities.slice(5).map((capability, index) => (
                <div key={index + 5} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific 5G Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored 5G solutions designed for your specific industry needs and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how 5G Enterprise Solutions transform operations across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              5G Technology Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the transformative benefits that 5G technology brings to your enterprise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Deploy 5G in Your Enterprise?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the 5G revolution and transform your business connectivity with Zion Tech Group.
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise with 5G?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the 5G revolution and unlock unprecedented business opportunities. 
            Our expert team is ready to help you implement cutting-edge 5G solutions.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGEnterpriseSolutions;