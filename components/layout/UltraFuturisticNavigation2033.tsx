import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Globe, Rocket, Brain, Atom, 
  Cpu, Target, Microscope, Shield, Zap, Sparkles,
  Menu, X, Search, ChevronDown, Home, Briefcase, 
  DollarSign, BookOpen, Users, MessageCircle
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🧠 Revolutionary AI',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', description: 'Advanced AI consciousness', price: '$2,999/month' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Emotional AI platform', price: '$1,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Creative AI solutions', price: '$1,499/month' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Autonomous business AI', price: '$3,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech',
    icon: Atom,
    color: 'from-indigo-500 to-blue-600',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway', description: 'Quantum security', price: '$4,999/month' },
      { name: 'Biotech DNA Computing', href: '/biotech-dna-computing-platform', description: 'DNA computing platform', price: '$3,999/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum trading', price: '$5,999/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing', price: '$1,299/month' },
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' },
      { name: 'Swarm Robotics Platform', href: '/swarm-robotics-platform', description: 'Collective robot intelligence', price: '$1,199/month' }
    ]
  },
  {
    title: '🏙️ Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-600',
    services: [
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Self-managing DevOps', price: '$2,499/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Zero trust security', price: '$1,999/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Edge computing platform', price: '$1,799/month' },
      { name: 'AI IT Operations Center', href: '/ai-it-operations-center', description: 'AI-powered IT ops', price: '$2,999/month' }
    ]
  },
  {
    title: '🌌 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-500 to-emerald-600',
    services: [
      { name: 'Space Mining Automation', href: '/space-mining-automation-platform', description: 'Space mining platform', price: '$9,999/month' },
      { name: 'Metaverse Development', href: '/metaverse-development-platform', description: 'Metaverse platform', price: '$3,999/month' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform', description: 'Holographic events', price: '$2,499/month' }
    ]
  }
];

const quickLinks = [
  { name: 'Services Overview', href: '/enhanced-services-overview', icon: Globe, color: 'from-cyan-500 to-blue-600' },
  { name: 'AI Services', href: '/ai-services', icon: Brain, color: 'from-violet-500 to-purple-600' },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom, color: 'from-indigo-500 to-blue-600' },
  { name: 'Space Tech', href: '/space-technology', icon: Rocket, color: 'from-teal-500 to-emerald-600' },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu, color: 'from-blue-500 to-cyan-600' },
  { name: 'Micro SAAS', href: '/enhanced-micro-saas-showcase', icon: Target, color: 'from-green-500 to-yellow-600' }
];

export default function UltraFuturisticNavigation2033() {
  return (
    <nav className="bg-black/80 backdrop-blur-lg border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Zion Tech Group</div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-white/80 hover:text-white">Home</a>
            <a href="/services" className="text-white/80 hover:text-white">Services</a>
            <a href="/about" className="text-white/80 hover:text-white">About</a>
            <a href="/contact" className="text-white/80 hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
