import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Shield, Zap, ArrowRight, CheckCircle, Target, Globe, Database, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, Users, Award, Star, Lock, Cloud, Code, BarChart, MessageSquare, Eye, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

const AutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Decision Making',
      description: 'Advanced machine learning algorithms that enable systems to make intelligent decisions autonomously.',
      benefits: ['Real-time decision making', 'Adaptive learning', 'Predictive analytics']
    },
    {
      icon: Cpu,
      title: 'Edge Computing Integration',
      description: 'Distributed computing architecture that processes data locally for faster response times.',
      benefits: ['Low latency processing', 'Reduced bandwidth usage', 'Enhanced security']
    },
    {
      icon: Shield,
      title: 'Self-Healing Systems',
      description: 'Automated error detection and recovery mechanisms that maintain system reliability.',
      benefits: ['Automatic fault detection', 'Self-repair capabilities', 'Continuous monitoring']
    },
    {
      icon: Zap,
      title: 'Adaptive Learning',
      description: 'Systems that continuously learn and improve their performance over time.',
      benefits: ['Performance optimization', 'Behavioral adaptation', 'Continuous improvement']
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous production lines that optimize themselves for maximum efficiency.',
      icon: Factory,
      benefits: ['Reduced downtime', 'Increased productivity', 'Quality optimization']
    },
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving systems for transportation and logistics.',
      icon: Car,
      benefits: ['Enhanced safety', 'Reduced traffic', 'Improved efficiency']
    },
    {
      title: 'Smart Cities',
      description: 'City-wide autonomous systems for traffic, energy, and resource management.',
      icon: Building,
      benefits: ['Sustainable development', 'Improved quality of life', 'Resource optimization']
    },
    {
      title: 'Healthcare Automation',
      description: 'Autonomous medical systems for diagnosis and treatment.',
      icon: Stethoscope,
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Better patient outcomes']
    }
  ];

  const technologies = [
    'Machine Learning & AI',
    'Computer Vision',
    'Natural Language Processing',
    'Robotics',
    'IoT Integration',
    'Edge Computing',
    'Blockchain',
    'Quantum Computing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Autonomous
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Systems
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Next-generation self-managing systems that operate independently, learn continuously, and adapt to changing environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous systems are built with cutting-edge technologies that enable true independence and intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-6 group-hover:text-cyan-300 transition-colors">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous systems are transforming industries and creating new possibilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                  <useCase.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to build robust and intelligent autonomous systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-center border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Autonomous Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how autonomous systems can transform your business operations and create new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Consultation
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousSystemsPage;