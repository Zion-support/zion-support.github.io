import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Target, 
  Rocket, 
  Atom, 
  Network,
  Eye,
  Cpu,
  Lock,
  MessageCircle,
  FileText,
  ShoppingCart,
  TrendingUp,
  Globe,
  Star,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Code,
  Database,
  Smartphone,
  Server,
  Wifi,
  Satellite,
  Building,
  Factory,
  DollarSign,
  ShoppingBag,
  Heart
} from 'lucide-react';

const ComprehensiveServicesShowcase2027: React.FC = () => {
  const emergingTechnologies = [
    {
      name: 'AI-Powered Edge Computing',
      description: 'Intelligent processing at the network edge for real-time decision making',
      icon: Network,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time AI processing', 'Reduced latency', 'Bandwidth optimization'],
      href: '/services/ai-edge-computing'
    },
    {
      name: 'Quantum Machine Learning',
      description: 'Revolutionary ML algorithms leveraging quantum computing power',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      features: ['Quantum algorithms', 'Exponential speedup', 'Advanced pattern recognition'],
      href: '/services/quantum-machine-learning'
    },
    {
      name: 'Sustainable AI Solutions',
      description: 'Green computing with AI optimization for environmental impact',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      features: ['Energy optimization', 'Carbon footprint reduction', 'Green algorithms'],
      href: '/services/sustainable-ai'
    }
  ];

  const serviceCategories = [
    {
      name: 'Advanced AI & ML',
      icon: Brain,
      services: [
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Data Governance Platform', href: '/services/ai-data-governance-platform' },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' }
      ]
    },
    {
      name: 'Next-Gen Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Quantum Cloud Infrastructure', href: '/services/quantum-cloud-infrastructure' },
        { name: '5G Enterprise Networks', href: '/services/5g-enterprise-networks' },
        { name: 'Edge Computing Platforms', href: '/services/edge-computing-platforms' },
        { name: 'Hybrid Cloud Solutions', href: '/services/hybrid-cloud-solutions' }
      ]
    },
    {
      name: 'Advanced Cybersecurity',
      icon: Shield,
      services: [
        { name: 'AI Threat Intelligence', href: '/services/ai-threat-intelligence' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-architecture' },
        { name: 'Quantum-Safe Cryptography', href: '/services/quantum-safe-cryptography' },
        { name: 'Behavioral Analytics', href: '/services/behavioral-analytics' }
      ]
    },
    {
      name: 'Digital Innovation',
      icon: Zap,
      services: [
        { name: 'Digital Twin Ecosystems', href: '/services/digital-twin-ecosystems' },
        { name: 'Metaverse Solutions', href: '/services/metaverse-solutions' },
        { name: 'AR/VR Integration', href: '/services/ar-vr-integration' },
        { name: 'IoT Smart Cities', href: '/services/iot-smart-cities' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Rocket,
      services: [
        { name: 'Space Technology Solutions', href: '/services/space-technology' },
        { name: 'Biotechnology Integration', href: '/services/biotechnology-integration' },
        { name: 'Nanotechnology Platforms', href: '/services/nanotechnology-platforms' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' }
      ]
    },
    {
      name: 'Enterprise Solutions',
      icon: Building,
      services: [
        { name: 'AI-Powered ERP Systems', href: '/services/ai-powered-erp' },
        { name: 'Intelligent CRM Platforms', href: '/services/intelligent-crm' },
        { name: 'Advanced Analytics Suites', href: '/services/advanced-analytics' },
        { name: 'Business Process Automation', href: '/services/business-process-automation' }
      ]
    }
  ];

  const innovations2027 = [
    {
      title: 'AI-First Everything',
      description: 'AI integrated into every aspect of our services and solutions',
      icon: Brain
    },
    {
      title: 'Quantum-Ready Everything',
      description: 'All infrastructure prepared for quantum computing integration',
      icon: Atom
    },
    {
      title: 'Sustainable Technology',
      description: 'Green computing and energy-efficient solutions',
      icon: Globe
    },
    {
      title: 'Edge-Native Architecture',
      description: 'Built for edge computing from the ground up',
      icon: Network
    },
    {
      title: 'Zero-Trust Security',
      description: 'Advanced security protocols for modern threats',
      icon: Lock
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human expertise and AI capabilities',
      icon: Users
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered diagnostics, telemedicine, and patient care',
      href: '/solutions/healthcare'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart factories, predictive maintenance, and automation',
      href: '/solutions/manufacturing'
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'AI trading, risk management, and financial analytics',
      href: '/solutions/finance'
    },
    {
      name: 'Retail',
      icon: ShoppingBag,
      description: 'Personalized experiences, inventory optimization, and analytics',
      href: '/solutions/retail'
    }
  ];

  return (
    <>
      <Helmet>
        <title>2027 Services Overview - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive 2027 services portfolio featuring cutting-edge AI, quantum computing, and emerging technology solutions." />
        <meta name="keywords" content="2027 services, AI services, quantum computing, emerging technologies, digital transformation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services-showcase-2027" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                2027 Innovation Portfolio
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                The Future of{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Technology
                </span>{' '}
                is Here
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Experience the cutting-edge of innovation with our 2027 services portfolio. 
                From AI-powered solutions to quantum computing and emerging technologies, 
                we're shaping the future of business and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                  Explore Innovations
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-purple-400/30 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Emerging{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Technologies
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Revolutionary technologies that will define the future
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {emergingTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tech.color} flex items-center justify-center mb-6`}>
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{tech.name}</h3>
                  <p className="text-gray-300 mb-6">{tech.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {tech.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tech.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Service
                </span>{' '}
                Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our complete range of cutting-edge technology services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                  
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <a
                          href={service.href}
                          className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 2027 Innovations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                2027{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Innovations
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Revolutionary approaches and technologies that set us apart
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovations2027.map((innovation, index) => (
                <motion.div
                  key={innovation.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/30 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <innovation.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{innovation.title}</h3>
                  <p className="text-gray-300 text-sm">{innovation.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for specific industry challenges
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industrySolutions.map((solution, index) => (
                <motion.div
                  key={solution.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 text-center hover:border-purple-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{solution.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{solution.description}</p>
                  <a
                    href={solution.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300 text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Embrace the{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the technology revolution with Zion Tech Group's 2027 innovations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                  Get Started Today
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 border border-purple-400/30 transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveServicesShowcase2027;