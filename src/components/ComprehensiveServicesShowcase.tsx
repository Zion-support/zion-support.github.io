import React, { useState } from 'react';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  Globe, 
  Zap, 
  Target, 
  TrendingUp, 
  Atom, 
  Link as LinkIcon, 
  Leaf, 
  Rocket, 
  Package,
  ArrowRight,
  CheckCircle,
  Star,
  Award
} from 'lucide-react';

export const ComprehensiveServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: LinkIcon },
    { id: 'enterprise', name: 'Enterprise IT', icon: Users },
    { id: 'green', name: 'Green IT', icon: Leaf },
    { id: 'space', name: 'Space Tech', icon: Rocket },
    { id: 'saas', name: 'MicroSAAS', icon: Package }
  ];

  const services = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      category: 'ai',
      description: 'Comprehensive artificial intelligence and machine learning solutions for business transformation.',
      icon: Brain,
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Automation'],
      benefits: ['40% efficiency gains', 'Intelligent decision making', 'Scalable AI infrastructure'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-solutions'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      category: 'quantum',
      description: 'Cutting-edge quantum computing solutions for complex problem solving and optimization.',
      icon: Atom,
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Future-proof technology'],
      color: 'from-indigo-500 to-purple-500',
      href: '/services/quantum-computing'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      category: 'security',
      description: 'Advanced security solutions with AI-powered threat detection and prevention.',
      icon: Shield,
      features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits'],
      benefits: ['Real-time protection', 'Proactive defense', 'Compliance assurance'],
      color: 'from-red-500 to-orange-500',
      href: '/services/cybersecurity'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      category: 'cloud',
      description: 'Scalable cloud infrastructure and DevOps automation for modern applications.',
      icon: Cloud,
      features: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Infrastructure as Code'],
      benefits: ['Scalable infrastructure', 'Faster deployment', 'Cost optimization'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/cloud-devops'
    },
    {
      id: 'blockchain-web3',
      title: 'Blockchain & Web3',
      category: 'blockchain',
      description: 'Decentralized technology solutions for the next generation of digital applications.',
      icon: LinkIcon,
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain'],
      benefits: ['Transparency', 'Security', 'Innovation'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/blockchain-web3'
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT',
      category: 'enterprise',
      description: 'Comprehensive IT solutions for large organizations and enterprises.',
      icon: Users,
      features: ['IT Infrastructure', 'Data Management', 'System Integration', 'Digital Transformation'],
      benefits: ['Enterprise-grade solutions', 'Scalable architecture', '24/7 support'],
      color: 'from-slate-500 to-gray-500',
      href: '/services/enterprise-it'
    },
    {
      id: 'green-it',
      title: 'Green IT',
      category: 'green',
      description: 'Sustainable technology solutions for environmentally conscious businesses.',
      icon: Leaf,
      features: ['Energy Efficiency', 'Sustainable Infrastructure', 'Carbon Reduction', 'Green Computing'],
      benefits: ['Environmental impact', 'Cost savings', 'Sustainability compliance'],
      color: 'from-green-500 to-teal-500',
      href: '/services/green-it'
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      category: 'space',
      description: 'Advanced space technology solutions for satellite systems and space exploration.',
      icon: Rocket,
      features: ['Satellite Systems', 'Space Data Analytics', 'Space Cybersecurity', 'Orbital Solutions'],
      benefits: ['Innovation leadership', 'Advanced technology', 'Space expertise'],
      color: 'from-violet-500 to-purple-500',
      href: '/services/space-tech'
    },
    {
      id: 'microsaas',
      title: 'MicroSAAS Development',
      category: 'saas',
      description: 'Custom software-as-a-service solutions for niche markets and specific business needs.',
      icon: Package,
      features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'User Management'],
      benefits: ['Custom solutions', 'Scalable business model', 'Recurring revenue'],
      color: 'from-orange-500 to-red-500',
      href: '/services/microsaas'
    }
  ];

  const solutions = [
    {
      id: 'ai-autonomous-business',
      title: 'AI Autonomous Business',
      description: 'AI-powered autonomous systems for business operations and decision making.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-business'
    },
    {
      id: 'ai-autonomous-research',
      title: 'AI Autonomous Research',
      description: 'AI systems for accelerating scientific research and discovery processes.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-research'
    },
    {
      id: 'ai-autonomous-ecosystem',
      title: 'AI Autonomous Ecosystem',
      description: 'Integrated AI ecosystem for unified business intelligence and automation.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-ecosystem'
    },
    {
      id: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      description: 'Quantum-enhanced neural networks for advanced AI applications.',
      icon: Atom,
      category: 'quantum',
      href: '/solutions/quantum-neural-networks'
    },
    {
      id: 'quantum-edge-computing',
      title: 'Quantum Edge Computing',
      description: 'Quantum computing power at the edge for real-time applications.',
      icon: Atom,
      category: 'quantum',
      href: '/solutions/quantum-edge-computing'
    },
    {
      id: 'ai-powered-security',
      title: 'AI Powered Security',
      description: 'Intelligent security systems with AI-driven threat detection.',
      icon: Shield,
      category: 'security',
      href: '/solutions/ai-powered-security'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'AI-powered content creation and management solutions.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-content-generation'
    },
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by artificial intelligence.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-business-intelligence'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Complete Service Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Comprehensive Services & Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete range of cutting-edge technology services and solutions 
            designed to transform your business and drive innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                activeCategory === category.id
                  ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                  : 'border-white/20 text-gray-400 hover:border-blue-500/50 hover:text-blue-400'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3 text-center">
                  {service.title}
                </h4>
                
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h5>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={service.href}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Advanced Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-3 text-center">
                  {solution.title}
                </h4>
                
                <p className="text-gray-300 mb-6 text-center text-sm">
                  {solution.description}
                </p>
                
                <a
                  href={solution.href}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:shadow-lg"
                >
                  Explore Solution
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Let our experts help you choose the right services and solutions 
              for your specific business needs and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/case-studies"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};