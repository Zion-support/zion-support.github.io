import React from 'react';
<<<<<<< HEAD
=======
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Zap, Globe, Phone, Mail, MapPin, ArrowRight, 
  Brain, Atom, Shield, Rocket, Target, BookOpen, Users,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Twitter, Linkedin, Facebook, Instagram, Youtube, Github, MessageCircle, MessageSquare,
  ArrowUp, ExternalLink, Building, Code, Database, Network, Server, Monitor, Smartphone, Camera, Gamepad2,
  Palette, Music, Film, BookOpenCheck, HelpCircle, FileText, Video, Headphones
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const footerSections = [
  {
    title: 'Featured Services',
    description: 'Our most popular and innovative solutions',
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    links: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', featured: true },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', featured: true },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'AI Evaluation Orchestrator', href: '/ai-evaluation-orchestrator', featured: true },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite' },
      { name: 'Helpdesk & Support', href: '/helpdesk-automation' },
      { name: 'Learning Management (LMS)', href: '/lms-platform' },
      { name: 'E‑commerce Returns', href: '/ecommerce-returns-management' },
      { name: 'SEO Content Optimizer', href: '/seo-content-optimizer' },
      { name: 'Keyword Research Engine', href: '/keyword-research-engine' },
      { name: 'Privacy Analytics Suite', href: '/analytics-suite' },
      { name: 'Invoice Studio', href: '/invoice-studio' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha' }
    ]
  },
  {
    title: 'AI & Consciousness',
    description: 'Revolutionary AI platforms and solutions',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    description: 'Breakthrough quantum and space technologies',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    links: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading' },
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' }
    ]
  },
  {
    title: 'Enterprise IT',
    description: 'Advanced enterprise infrastructure solutions',
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    links: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity' }
    ]
  },
  {
    title: 'Micro SAAS',
    description: 'Innovative business solutions for modern enterprises',
    icon: <Rocket className="w-5 h-5 text-emerald-400" />,
    links: [
      { name: 'AI Content Generator', href: '/ai-content-generator' },
      { name: 'AI Code Review', href: '/ai-code-review' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
      { name: 'AI Market Research', href: '/ai-market-research' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation' },
      { name: 'AI HR Recruitment', href: '/ai-hr-recruitment' },
      { name: 'AI Customer Service', href: '/ai-customer-service' }
    ]
  },
  {
    title: 'Industry Solutions',
    description: 'Industry-specific technology solutions',
    icon: <Building className="w-5 h-5 text-orange-400" />,
    links: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform' }
    ]
  },
  {
    title: 'Resources',
    description: 'Documentation, support, and learning',
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
    links: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Developer Portal', href: '/developer' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Market Pricing', href: '/market-pricing' },
      { name: 'Services Advertising', href: '/services-advertising' }
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: <Github className="w-5 h-5" /> }
];

const UltraFuturisticFooter2035: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-732a

export default function UltraFuturisticFooter2035() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>© {new Date().getFullYear()} Zion Tech Group</div>
        <div className="space-x-4 text-sm text-right">
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}