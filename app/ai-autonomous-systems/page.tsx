'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Shield, 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Target,
  Brain,
  Database,
  Lock,
  Globe,
  Settings,
  FileText,
  MessageCircle,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Car,
  Plane,
  Ship,
  Bot,
  Eye,
  Wifi
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiAutonomousSystemsPage: React.FC = () => {
  const features = [
    'Advanced AI decision-making algorithms',
    'Real-time sensor fusion and processing',
    'Predictive maintenance and self-healing capabilities',
    'Autonomous navigation and path planning',
    'Machine learning model deployment and updates',
    'Edge computing and distributed processing',
    'Safety-critical system design and validation',
    'Human-machine collaboration interfaces',
    'Regulatory compliance and certification support',
    'Continuous learning and adaptation mechanisms'
  ];

  const benefits = [
    'Reduce operational costs by up to 60% through automation',
    'Increase efficiency and productivity by 300%',
    'Eliminate human error in critical operations',
    'Enable 24/7 autonomous operations',
    'Improve safety and reduce workplace accidents',
    'Optimize resource utilization and energy consumption',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage through advanced automation',
    'Future-proof your operations with cutting-edge technology',
    'Achieve unprecedented precision and consistency'
  ];

  const applications = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and drones with advanced AI navigation and safety systems',
      icon: Car,
      features: ['Computer vision', 'Sensor fusion', 'Path planning', 'Collision avoidance', 'Traffic optimization'],
      price: 'Starting at $25,000/month',
      marketPrice: '$50,000-150,000/month'
    },
    {
      title: 'Industrial Robotics',
      description: 'Intelligent manufacturing robots with adaptive learning and quality control',
      icon: Bot,
      features: ['Adaptive learning', 'Quality control', 'Predictive maintenance', 'Human collaboration', 'Process optimization'],
      price: 'Starting at $15,000/month',
      marketPrice: '$30,000-100,000/month'
    },
    {
      title: 'Smart Infrastructure',
      description: 'Autonomous building systems, smart cities, and intelligent infrastructure management',
      icon: Globe,
      features: ['Energy optimization', 'Predictive maintenance', 'Traffic management', 'Environmental monitoring', 'Resource allocation'],
      price: 'Starting at $10,000/month',
      marketPrice: '$20,000-80,000/month'
    },
    {
      title: 'Autonomous Drones',
      description: 'AI-powered drones for delivery, surveillance, inspection, and emergency response',
      icon: Plane,
      features: ['Autonomous flight', 'Object detection', 'Route optimization', 'Weather adaptation', 'Payload management'],
      price: 'Starting at $8,000/month',
      marketPrice: '$15,000-50,000/month'
    },
    {
      title: 'Maritime Autonomy',
      description: 'Autonomous ships and underwater vehicles for cargo, research, and exploration',
      icon: Ship,
      features: ['Autonomous navigation', 'Weather prediction', 'Cargo optimization', 'Fuel efficiency', 'Safety monitoring'],
      price: 'Starting at $20,000/month',
      marketPrice: '$40,000-120,000/month'
    },
    {
      title: 'Agricultural Automation',
      description: 'Autonomous farming equipment and precision agriculture systems',
      icon: Target,
      features: ['Crop monitoring', 'Precision planting', 'Automated harvesting', 'Pest detection', 'Yield optimization'],
      price: 'Starting at $12,000/month',
      marketPrice: '$25,000-75,000/month'
    }
  ];

  const technologies = [
    {
      name: 'Computer Vision',
      description: 'Advanced image processing and object recognition for autonomous decision making',
      icon: Eye,
      applications: ['Object detection', 'Scene understanding', 'Quality inspection', 'Navigation assistance']
    },
    {
      name: 'Machine Learning',
      description: 'Deep learning algorithms for pattern recognition and predictive analytics',
      icon: Brain,
      applications: ['Predictive maintenance', 'Anomaly detection', 'Performance optimization', 'Adaptive control']
    },
    {
      name: 'Sensor Fusion',
      description: 'Integration of multiple sensor data sources for comprehensive environmental awareness',
      icon: Wifi,
      applications: ['LIDAR integration', 'Camera fusion', 'GPS positioning', 'Environmental sensing']
    },
    {
      name: 'Edge Computing',
      description: 'Distributed processing capabilities for real-time autonomous decision making',
      icon: Cpu,
      applications: ['Real-time processing', 'Low latency response', 'Offline operation', 'Data privacy']
    },
    {
      name: 'Safety Systems',
      description: 'Redundant safety mechanisms and fail-safe protocols for autonomous operations',
      icon: Shield,
      applications: ['Emergency stops', 'Collision avoidance', 'System monitoring', 'Risk assessment']
    },
    {
      name: 'Human-Machine Interface',
      description: 'Intuitive interfaces for human oversight and collaboration with autonomous systems',
      icon: Users,
      applications: ['Remote monitoring', 'Manual override', 'Status visualization', 'Control interfaces']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI autonomous systems for vehicles, robotics, and smart infrastructure. Transform your operations with self-operating intelligent systems." />
        <meta name="keywords" content="autonomous systems, AI robotics, self-driving vehicles, autonomous drones, smart infrastructure, industrial automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Autonomous
              <span className="block text-4xl md:text-5xl text-cyan-400 mt-2">Systems</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your operations with intelligent autonomous systems that can operate 
              independently, make decisions, and adapt to changing conditions. From self-driving 
              vehicles to smart infrastructure, we deliver cutting-edge autonomous solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Autonomous Consultation
              </Link>
              <a 
                href="tel:+13024640950"
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous System Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous systems are equipped with advanced AI capabilities that enable 
                independent operation, intelligent decision-making, and continuous adaptation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Autonomous System Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how autonomous systems can revolutionize your industry with 
                intelligent automation and self-operating capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{app.title}</h3>
                  <p className="text-gray-300 mb-6">{app.description}</p>
                  <div className="space-y-2 mb-6">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{app.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{app.marketPrice}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Core Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our autonomous systems leverage cutting-edge technologies to deliver 
                reliable, intelligent, and safe autonomous operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{tech.name}</h3>
                  <p className="text-gray-300 mb-6">{tech.description}</p>
                  <div className="space-y-2">
                    {tech.applications.map((application, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {application}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Autonomous systems offer transformative benefits that can revolutionize 
                your operations and competitive position.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Go Autonomous?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our autonomous systems experts to discuss how intelligent automation 
                can transform your operations and give you a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Autonomous Consultation
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ Free autonomous readiness assessment • ✓ Custom automation strategy • ✓ Expert implementation support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiAutonomousSystemsPage;