import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle,
  Search,
  BookOpen,
  Microscope,
  TestTube,
  Wifi,
  Signal,
  Smartphone,
  Car
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const FiveGEnterpriseSolutions: React.FC = () => {
  const features = [
    {
      title: "Ultra-Fast Connectivity",
      description: "Lightning-fast 5G networks with ultra-low latency for enterprise applications",
      icon: Signal,
      benefits: ["10x faster speeds", "1ms latency", "Massive bandwidth"]
    },
    {
      title: "Network Slicing",
      description: "Customized network segments for different enterprise use cases",
      icon: Network,
      benefits: ["Custom networks", "QoS guarantees", "Isolated traffic"]
    },
    {
      title: "Edge Computing Integration",
      description: "Seamless integration with edge computing for real-time processing",
      icon: Cpu,
      benefits: ["Edge processing", "Real-time analytics", "Local intelligence"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with advanced encryption and threat protection",
      icon: Shield,
      benefits: ["End-to-end encryption", "Threat detection", "Compliance ready"]
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Real-time monitoring and control of industrial IoT devices",
      icon: Settings,
      impact: "40% efficiency boost"
    },
    {
      title: "Autonomous Vehicles",
      description: "Ultra-low latency communication for connected and autonomous vehicles",
      icon: Car,
      impact: "99.9% reliability"
    },
    {
      title: "Remote Healthcare",
      description: "High-bandwidth telemedicine and remote patient monitoring",
      icon: Heart,
      impact: "Real-time diagnostics"
    },
    {
      title: "Smart Cities",
      description: "Connected infrastructure and intelligent urban management",
      icon: Globe,
      impact: "30% cost reduction"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Clients", description: "Trusted by Fortune 500 companies" },
    { icon: TrendingUp, value: "10x", label: "Speed Increase", description: "Compared to 4G networks" },
    { icon: Award, value: "99.9%", label: "Uptime", description: "Enterprise-grade reliability" },
    { icon: Globe, value: "25+", label: "Countries", description: "Global 5G deployment" }
  ];

  return (
    <>
      <SEOHead 
        customData={{
          title: "5G Enterprise Solutions - Zion Tech Group",
          description: "Revolutionary 5G enterprise solutions with ultra-fast connectivity, network slicing, and edge computing integration. Transform your business with next-generation network technology.",
          keywords: ["5G enterprise", "5G solutions", "network slicing", "edge computing", "IoT connectivity", "smart manufacturing", "autonomous vehicles", "smart cities"],
          type: "website",
          url: "https://ziontechgroup.com/5g-enterprise-solutions"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                5G Enterprise Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Transform your enterprise with next-generation 5G technology. Experience ultra-fast connectivity, network slicing, and edge computing integration for unprecedented business capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services/it-infrastructure"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-cyan-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-gray-400">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our 5G enterprise solutions combine cutting-edge network technology with deep enterprise expertise to deliver unprecedented connectivity capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transformative Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our 5G solutions are revolutionizing industries across the globe.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0">
                      <useCase.icon className="h-12 w-12 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300 mb-4">{useCase.description}</p>
                      <div className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                        {useCase.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform with 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading enterprises that have transformed their operations with our 5G solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services/it-infrastructure"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Infrastructure Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGEnterpriseSolutions;