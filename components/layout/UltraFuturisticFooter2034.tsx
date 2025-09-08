import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, 
  Twitter, Linkedin, Github, 
  ArrowRight, Sparkles, Star,
  Shield, Zap, Brain, Atom,
  Rocket, Target, Microscope
} from 'lucide-react';

const UltraFuturisticFooter2034: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: '🧠 AI & Consciousness',
      icon: Brain,
      services: [
        { name: 'AI Consciousness Evolution 2026', href: '/ai-consciousness-evolution-2026' },
        { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform' },
        { name: 'Multimodal AI Orchestrator', href: '/multimodal-ai-orchestrator' },
        { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
        { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' }
      ]
    },
    {
      title: '⚛️ Quantum & Emerging Tech',
      icon: Atom,
      services: [
        { name: 'Space Mining Platform 2026', href: '/space-mining-platform-2026' },
        { name: 'Quantum Bio-Computing 2026', href: '/quantum-bio-computing-2026' },
        { name: 'Brain-Computer Interface 2026', href: '/brain-computer-interface-2026' },
        { name: 'Quantum Energy Platform 2026', href: '/quantum-energy-platform-2026' },
        { name: 'Autonomous Vehicle AI 2026', href: '/autonomous-vehicle-ai-2026' }
      ]
    },
    {
      title: '🏙️ Enterprise IT',
      icon: Shield,
      services: [
        { name: 'Quantum Cloud Infrastructure 2026', href: '/quantum-cloud-infrastructure-2026' },
        { name: 'Edge Computing Orchestrator 2026', href: '/edge-computing-orchestrator-2026' },
        { name: 'Zero Trust Security Platform 2026', href: '/zero-trust-security-platform-2026' },
        { name: 'Blockchain Enterprise Platform 2026', href: '/blockchain-enterprise-platform-2026' },
        { name: 'AI-Powered DevOps 2026', href: '/ai-powered-devops-2026' }
      ]
    },
    {
      title: '🎯 Micro SAAS',
      icon: Target,
      services: [
        { name: 'LegalAI Contract Analyzer Pro', href: '/legal-ai-contract-analyzer-pro' },
        { name: 'QuantumRisk Financial Intelligence', href: '/quantum-risk-financial-platform' },
        { name: 'HealthAI Diagnostics Pro', href: '/ai-powered-healthcare-diagnostics-pro' },
        { name: 'QuantumChain Supply Optimizer', href: '/quantum-supply-chain-optimizer' },
        { name: 'CreativeAI Studio Pro', href: '/ai-powered-creative-studio-pro' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <footer className="relative bg-black border-t border-cyan-500/30 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Pioneering the future of technology with cutting-edge AI, quantum computing, and innovative micro SAAS solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <category.icon className="w-5 h-5 text-cyan-400" />
                <h4 className="font-semibold text-white">{category.title}</h4>
              </div>
              
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default UltraFuturisticFooter2034;
