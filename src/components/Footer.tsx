import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Globe,
  Shield,
  Zap,
  Brain,
  Cloud,
  Building,
  Users,
  FileText,
  Video,
  TestTube,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Newspaper,
  Target,
  Rocket,
  Heart,
  DollarSign,
  HelpCircle,
  Activity,
  Cpu,
  GraduationCap,
  BarChart3,
  Sparkles,
  Award,
  ArrowRight,
  Star,
  Lock,
  Eye,
  Atom,
  Network,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Server,
  ShoppingCart,
  Smartphone,
  Database,
  Clock,
  Code,
  BookOpen,
  Truck,
  ExternalLink,
  ChevronDown,
  Copyright,
  GitFork,
  MessageSquare,
  Map
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface FooterLink {
  name: string;
  path: string;
  icon: any;
  external?: boolean;
}

interface FooterSection {
  title: string;
  icon: any;
  links: FooterLink[];
}

const footerSections = [
  {
    title: 'Company',
    icon: Globe,
    links: [
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Partners', path: '/partners', icon: Users },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'Solutions', path: '/solutions', icon: Target },
      { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
      { name: 'Contact', path: '/contact', icon: Phone },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Help Center', path: '/help', icon: HelpCircle }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    links: [
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator', icon: TrendingUp },
      { name: 'AI Data Governance Platform', path: '/services/ai-data-governance-platform', icon: Shield },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics', icon: Brain },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-risk-management', icon: DollarSign },
      { name: 'AI Code Review Security Scanner', path: '/services/ai-code-review-security-scanner', icon: Shield },
      { name: 'AI DevOps Automation Platform', path: '/services/ai-devops-automation-platform', icon: Zap },
      { name: 'AI Business Intelligence Analytics', path: '/services/ai-business-intelligence-analytics', icon: BarChart3 },
      { name: 'AI Customer Experience Support', path: '/services/ai-customer-experience-support', icon: MessageCircle },
      { name: 'AI Marketing Automation Personalization', path: '/services/ai-marketing-automation-personalization', icon: TrendingUp },
      { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain },
      { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: Truck },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform', icon: Atom },
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform', icon: Shield },
      { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform', icon: Heart },
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: BarChart3 },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
      { name: 'AI Legal Document Automation', path: '/services/ai-legal-document-automation', icon: FileText },
      { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', icon: Activity },
      { name: 'AI Financial Trading', path: '/services/ai-financial-trading', icon: DollarSign },
      { name: 'AI Content Creation Suite', path: '/services/ai-content-creation-suite', icon: FileText },
      { name: 'AI Autonomous Supply Chain', path: '/services/ai-autonomous-supply-chain', icon: Truck },
      { name: 'AI Cybersecurity Threat Intelligence', path: '/services/ai-cybersecurity-threat-intelligence', icon: Shield },
      { name: 'AI Autonomous Threat Intelligence', path: '/ai-autonomous-threat-intelligence', icon: Eye },
      { name: 'New Innovative Services 2025', path: '/new-innovative-services-2025', icon: Sparkles }
    ]
  },
  {
    title: 'Advanced Technology',
    icon: Cpu,
    links: [
      { name: 'Cloud Infrastructure & DevOps', path: '/services/cloud-infrastructure-devops', icon: Cloud },
      { name: 'Cybersecurity & Compliance', path: '/services/cybersecurity-compliance', icon: Shield },
      { name: 'Quantum Computing Services', path: '/services/quantum-computing-services', icon: Atom },
      { name: 'Blockchain & Web3 Solutions', path: '/services/blockchain-web3-solutions', icon: Cpu },
      { name: 'IoT & Edge Computing Services', path: '/services/iot-edge-computing-services', icon: Network },
      { name: 'Digital Twin Solutions', path: '/services/digital-twin-solutions', icon: Eye },
      { name: 'Space Technology Solutions', path: '/services/space-technology-solutions', icon: Satellite },
      { name: 'Green IT Solutions', path: '/services/green-it-solutions', icon: Leaf },
      { name: 'Zero Trust Network Architecture', path: '/services/zero-trust-network-architecture', icon: Lock },
      { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
      { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
      { name: 'IT Services', path: '/it-services', icon: Building },
      { name: 'Micro SaaS Solutions', path: '/micro-saas', icon: Zap },
      { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
      { name: 'Blockchain Solutions', path: '/services/blockchain', icon: Coins },
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
      { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity', icon: Shield },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network },
      { name: 'AI Content Creation', path: '/services/ai-content-creation', icon: FileText },
      { name: 'AI HR Platform', path: '/services/ai-hr-platform', icon: Users },
      { name: 'Sustainable Technology', path: '/services/sustainable-technology', icon: Leaf },
      { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', icon: Activity },
      { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', icon: Atom },
      { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
      { name: 'Space Tech', path: '/space-tech', icon: Satellite }
    ]
  },
  {
    title: 'Core Services',
    icon: Zap,
    links: [
      { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
      { name: 'Data Analytics', path: '/services/data-analytics', icon: TrendingUp },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket },
      { name: 'IT Services', path: '/it-services', icon: Building },
      { name: 'Micro SaaS Solutions', path: '/micro-saas', icon: Zap },
      { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
      { name: 'Blockchain Solutions', path: '/services/blockchain', icon: Coins },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', icon: DollarSign },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: Shield },
      { name: 'AI Auto Email Responder', path: '/services/ai-auto-email-responder', icon: Mail },
      { name: 'Customer Feedback Surveys', path: '/services/customer-feedback-surveys', icon: MessageCircle },
      { name: 'AI Compliance Copilot', path: '/services/ai-compliance-copilot', icon: Shield },
      { name: 'LLM Content Studio', path: '/services/llm-content-studio', icon: FileText },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', icon: DollarSign },
      { name: 'Returns Management', path: '/services/returns-management', icon: Truck },
      { name: 'Email Sequencer', path: '/services/email-sequencer', icon: Mail },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', icon: Video },
      { name: 'Micro CRM', path: '/services/micro-crm', icon: Users },
      { name: 'Website Analytics', path: '/services/website-analytics', icon: BarChart3 },
      { name: 'IT Helpdesk', path: '/services/it-helpdesk', icon: HelpCircle },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', icon: TrendingUp },
      { name: 'Mobile Survey', path: '/services/mobile-survey', icon: Smartphone },
      { name: 'AI Autonomous Code Reviewer', path: '/services/ai-autonomous-code-reviewer', icon: Code },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', icon: Lock },
      { name: 'AI Powered SEO', path: '/services/ai-powered-seo', icon: TrendingUp },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', icon: Users },
      { name: 'Helpdesk Platform', path: '/services/helpdesk-platform', icon: HelpCircle },
      { name: 'DSR Portal', path: '/services/dsr-portal', icon: Shield },
      { name: 'Security Headers CSP', path: '/services/security-headers-csp', icon: Lock },
      { name: 'AI Project Management', path: '/services/ai-project-management', icon: Briefcase },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', icon: MessageCircle },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', icon: DollarSign },
      { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', icon: TrendingUp }
    ]
  },
  {
    title: 'Emerging Tech',
    icon: Rocket,
    links: [
      { name: 'Metaverse Development', path: '/services/metaverse-development', icon: Gamepad2 },
      { name: 'AI Content Creation', path: '/services/ai-content-creation', icon: FileText },
      { name: 'AI HR Platform', path: '/services/ai-hr-platform', icon: Users },
      { name: 'Sustainable Technology', path: '/services/sustainable-technology', icon: Leaf },
      { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance', icon: Activity },
      { name: 'Quantum Machine Learning', path: '/services/quantum-machine-learning', icon: Atom },
      { name: 'Edge Computing', path: '/services/edge-computing', icon: Network },
      { name: 'Green Computing', path: '/services/green-computing', icon: Leaf },
      { name: 'New Services Showcase 2025', path: '/new-services-showcase-2025', icon: Sparkles },
      { name: 'Comprehensive Services Showcase 2025', path: '/comprehensive-services-showcase-2025', icon: Sparkles },
      { name: 'Innovative Services Showcase 2025', path: '/innovative-services-showcase-2025', icon: Sparkles },
      { name: 'Ultimate Services Showcase 2025', path: '/ultimate-services-showcase-2025', icon: Star },
      { name: 'Ultimate Services Showcase 2026', path: '/ultimate-services-showcase-2026', icon: Star },
      { name: 'Comprehensive Services Showcase 2027', path: '/comprehensive-services-showcase-2027', icon: Sparkles },
      { name: 'Comprehensive Services Landing 2025', path: '/comprehensive-services-landing-2025', icon: Building },
      { name: 'Comprehensive Services Landing 2028', path: '/comprehensive-services-landing-2028', icon: Building },
      { name: 'Comprehensive Services Showcase 2029', path: '/comprehensive-services-showcase-2029', icon: Sparkles },
      { name: 'Zion Cutting Edge Services 2029', path: '/zion-cutting-edge-services-2029', icon: Rocket },
      { name: 'Zion 2026 AI Marketplace Showcase', path: '/zion-2026-ai-marketplace-showcase', icon: Brain },
      { name: 'Comprehensive Improvements 2025', path: '/comprehensive-improvements-2025', icon: TrendingUp },
      { name: 'New Innovative Services 2025', path: '/new-innovative-services-2025', icon: Sparkles }
    ]
  },
  {
    title: 'Resources',
    icon: BookOpen,
    links: [
      { name: 'API Documentation', path: '/api', icon: Code },
      { name: 'Developer Portal', path: '/developer-portal', icon: Code },
      { name: 'API Demo', path: '/api-demo', icon: TestTube },
      { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
      { name: 'IT Consulting', path: '/it-consulting', icon: Briefcase },
      { name: 'Space Tech', path: '/space-tech', icon: Satellite },
      { name: 'Sitemap', path: '/sitemap', icon: Map },
      { name: 'Comprehensive Pricing Guide 2025', path: '/comprehensive-pricing-guide-2025', icon: DollarSign },
      { name: 'Comprehensive Pricing Guide 2027', path: '/comprehensive-pricing-guide-2027', icon: DollarSign },
      { name: 'Comprehensive Pricing 2026', path: '/comprehensive-pricing-2026', icon: DollarSign },
      { name: 'Comprehensive Pricing 2028', path: '/comprehensive-pricing-2028', icon: DollarSign },
      { name: 'Innovative Services Landing 2025', path: '/innovative-services-landing-2025', icon: Building }
    ]
  }
];

const contactInfo = [
  { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: '123 Tech Street, Innovation City, IC 12345', href: '#' }
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', external: true },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', external: true },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', external: true },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', external: true },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', external: true }
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle link click
  const handleLinkClick = (link: FooterLink) => {
    if (link.external) {
      window.open(link.path, '_blank', 'noopener,noreferrer');
    } else {
      // Handle internal navigation
      console.log('Navigate to:', link.path);
    }
  };

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-zion-cyan rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-32 h-32 bg-zion-purple-dark rounded-full opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-zion-cyan" />
                <h3 className="text-lg font-semibold text-zion-cyan">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => handleLinkClick(link)}
                      className="flex items-center space-x-2 text-gray-300 hover:text-zion-cyan transition-colors duration-200 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-t border-zion-slate pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <contact.icon className="w-5 h-5 text-zion-cyan" />
                <a
                  href={contact.href}
                  className="text-gray-300 hover:text-zion-cyan transition-colors duration-200"
                >
                  {contact.text}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links and Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-zion-slate pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="w-10 h-10 bg-zion-slate rounded-full flex items-center justify-center text-gray-300 hover:text-zion-cyan hover:bg-zion-slate-light transition-all duration-200 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Copyright className="w-4 h-4" />
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-zion-cyan rounded-full flex items-center justify-center text-white hover:bg-zion-cyan-dark transition-colors duration-200"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
