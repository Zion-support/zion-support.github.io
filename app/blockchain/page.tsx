import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Database, Zap, ArrowRight, CheckCircle, Target, Globe, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, Users, Award, Star, Brain, Cpu, Cloud, Code, BarChart, MessageSquare, Eye, Sparkles, Phone, Mail, MapPin } from 'lucide-react';

const BlockchainPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Decentralized Security',
      description: 'Immutable blockchain technology ensures data integrity and prevents tampering.',
      benefits: ['Cryptographic security', 'Immutable records', 'Distributed consensus']
    },
    {
      icon: Lock,
      title: 'Smart Contracts',
      description: 'Self-executing contracts with predefined rules and automated enforcement.',
      benefits: ['Automated execution', 'Reduced intermediaries', 'Transparent processes']
    },
    {
      icon: Database,
      title: 'Distributed Ledger',
      description: 'Shared database across multiple nodes ensuring transparency and reliability.',
      benefits: ['Real-time synchronization', 'High availability', 'Data consistency']
    },
    {
      icon: Zap,
      title: 'Cryptocurrency Integration',
      description: 'Native support for digital currencies and token-based economies.',
      benefits: ['Fast transactions', 'Low fees', 'Global accessibility']
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Track products from origin to consumer with complete transparency.',
      icon: Factory,
      benefits: ['Product authenticity', 'Traceability', 'Quality assurance']
    },
    {
      title: 'Financial Services',
      description: 'Decentralized finance solutions for payments and lending.',
      icon: CreditCard,
      benefits: ['Lower costs', 'Faster processing', 'Global reach']
    },
    {
      title: 'Digital Identity',
      description: 'Secure, self-sovereign identity management systems.',
      icon: Users,
      benefits: ['Privacy protection', 'Identity verification', 'User control']
    },
    {
      title: 'Healthcare Records',
      description: 'Secure and interoperable patient data management.',
      icon: Stethoscope,
      benefits: ['Data security', 'Interoperability', 'Patient control']
    }
  ];

  const technologies = [
    'Ethereum',
    'Hyperledger',
    'Corda',
    'Polkadot',
    'Cosmos',
    'Solana',
    'Polygon',
    'Avalanche'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Blockchain
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Decentralized, secure, and transparent solutions that revolutionize how businesses operate and interact.
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
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our blockchain solutions provide the security, transparency, and efficiency your business needs.
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
              Discover how blockchain technology is transforming industries and creating new business models.
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
              Supported <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Platforms</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading blockchain platforms to provide the best solutions for your needs.
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
            Ready to Implement Blockchain?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how blockchain technology can enhance your business operations and create new opportunities.
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

export default BlockchainPage;