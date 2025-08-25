import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Wifi, 
  Shield, 
  Zap, 
  Building, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Cpu
} from 'lucide-react';

export default function FiveGEnterpriseNetwork() {
  const features = [
    {
      icon: Wifi,
      title: "High-Speed Connectivity",
      description: "Lightning-fast 5G networks with ultra-low latency for enterprise applications"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols and private network isolation"
    },
    {
      icon: Zap,
      title: "Low Latency",
      description: "Sub-10ms latency for real-time applications and IoT devices"
    },
    {
      icon: Building,
      title: "Scalable Infrastructure",
      description: "Flexible network architecture that grows with your business"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide network presence with seamless roaming capabilities"
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Distributed computing at the network edge for optimal performance"
    }
  ];

  const benefits = [
    "10x faster data transfer speeds compared to 4G",
    "99.99% network uptime guarantee",
    "Real-time IoT device management",
    "Enhanced mobile broadband for remote workers",
    "Support for massive machine-type communications",
    "Advanced network slicing for different use cases"
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Real-time monitoring and control of industrial IoT devices",
      icon: Building
    },
    {
      title: "Autonomous Vehicles",
      description: "Ultra-low latency communication for vehicle-to-vehicle networks",
      icon: Zap
    },
    {
      title: "Remote Healthcare",
      description: "High-bandwidth telemedicine and remote patient monitoring",
      icon: Users
    },
    {
      title: "Smart Cities",
      description: "Connected infrastructure and intelligent traffic management",
      icon: Globe
=======
import { Wifi, Zap, Shield, BarChart3, Globe, Users, Database, Settings, Network, Server, ArrowRight } from 'lucide-react';

const FiveGEnterpriseNetwork: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: "Enterprise-Grade 5G Network",
      description: "Dedicated 5G network infrastructure designed specifically for enterprise needs."
    },
    {
      icon: Network,
      title: "Network Slicing",
      description: "Custom network slices for different business applications and security requirements."
    },
    {
      icon: Shield,
      title: "Private Network Security",
      description: "Isolated network segments with enterprise-grade security and compliance."
    },
    {
      icon: BarChart3,
      title: "Network Analytics",
      description: "Real-time network performance monitoring and predictive analytics."
    },
    {
      icon: Server,
      title: "Edge Computing Integration",
      description: "Seamless integration with edge computing for low-latency applications."
    },
    {
      icon: Users,
      title: "Multi-Tenant Support",
      description: "Support for multiple business units with isolated network segments."
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "5G-powered IoT networks for industrial automation and real-time monitoring."
    },
    {
      title: "Healthcare Networks",
      description: "Secure 5G networks for telemedicine and remote patient monitoring."
    },
    {
      title: "Financial Services",
      description: "Ultra-low latency networks for high-frequency trading and financial applications."
    },
    {
      title: "Transportation & Logistics",
      description: "Connected vehicle networks and smart logistics management."
    },
    {
      title: "Retail & Hospitality",
      description: "Enhanced customer experiences with AR/VR and smart retail solutions."
    },
    {
      title: "Government & Defense",
      description: "Secure, reliable networks for critical government operations."
    }
  ];

  const benefits = [
    {
      metric: "99.99%",
      label: "Network Uptime",
      description: "Enterprise-grade reliability and availability"
    },
    {
      metric: "1ms",
      label: "Ultra-Low Latency",
      description: "Near-instantaneous response times"
    },
    {
      metric: "10Gbps",
      label: "Peak Speeds",
      description: "Lightning-fast data transfer capabilities"
    },
    {
      metric: "1000+",
      label: "Connected Devices",
      description: "Massive IoT device support per network slice"
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Wifi className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              5G Enterprise Network Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your enterprise with cutting-edge 5G network infrastructure. 
              Experience lightning-fast connectivity, ultra-low latency, and enterprise-grade security.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </Link>
=======
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Wifi className="w-4 h-4 mr-2" />
              5G Enterprise Network
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Enterprise 5G Network
              <br />
              <span className="text-white">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build your own private 5G network infrastructure with enterprise-grade security, 
              reliability, and performance. Deploy custom network slices for different business applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Enterprise-Grade 5G Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our 5G solutions are designed specifically for enterprise needs, 
              providing the performance, security, and reliability your business demands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose Our 5G Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of enterprise connectivity with our advanced 5G network solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise Network Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced 5G network capabilities designed for enterprise requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Enterprise Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how 5G technology is transforming industries and enabling new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
=======
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your industry with dedicated 5G network infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Network Performance Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Unlock the full potential of 5G technology for your enterprise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30">
            <Star className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Experience the Future of Enterprise Connectivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading enterprises that are already leveraging our 5G solutions 
              to gain competitive advantages and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
=======
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Enterprise 5G Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our network infrastructure experts to design and deploy your custom 5G enterprise network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Network Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default FiveGEnterpriseNetwork;
>>>>>>> origin/cursor/website-audit-and-enhancement-3121
