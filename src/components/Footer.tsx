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
  GitFork
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
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: CheckCircle },
      { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', icon: TrendingUp },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', icon: Users },
      { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant', icon: Brain }
    ]
  },
  {
    title: 'IT & Infrastructure',
    icon: Server,
    links: [
      { name: 'Cloud DevOps', path: '/services/cloud-devops', icon: Cloud },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building },
      { name: 'Cloud FinOps Optimizer', path: '/services/cloud-finops-optimizer', icon: DollarSign },
      { name: 'FinOps Advisor', path: '/services/finops-advisor', icon: DollarSign },
      { name: 'IT Consulting', path: '/it-consulting', icon: Briefcase },
      { name: 'Cybersecurity Solutions', path: '/services/cybersecurity', icon: Shield },
      { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3 },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Rocket }
    ]
  },
  {
    title: 'Micro SaaS Solutions',
    icon: Zap,
    links: [
      { name: 'Micro CRM', path: '/services/micro-crm', icon: Users },
      { name: 'Website Analytics', path: '/services/website-analytics', icon: BarChart3 },
      { name: 'Affiliate Tracking', path: '/services/affiliate-tracking', icon: TrendingUp },
      { name: 'Mobile Survey', path: '/services/mobile-survey', icon: Smartphone },
      { name: 'Customer Feedback Surveys', path: '/services/customer-feedback-surveys', icon: MessageCircle },
      { name: 'Email Sequencer', path: '/services/email-sequencer', icon: Mail },
      { name: 'Podcast Transcription', path: '/services/podcast-transcription', icon: Video },
      { name: 'Returns Management', path: '/services/returns-management', icon: Truck }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Atom,
    links: [
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
      { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Network },
      { name: 'Space Technology', path: '/services/space-tech', icon: Satellite },
      { name: 'Digital Twin', path: '/services/digital-twin', icon: Eye },
      { name: 'Blockchain Solutions', path: '/services/blockchain', icon: Coins },
      { name: 'Green IT Solutions', path: '/services/green-it', icon: Leaf },
      { name: 'Zero Trust Network Access', path: '/services/zero-trust-network-access', icon: Lock },
      { name: 'Security Headers & CSP', path: '/services/security-headers-csp', icon: Shield }
    ]
  },
  {
    title: 'Resources & Support',
    icon: BookOpen,
    links: [
      { name: 'Developer Portal', path: '/developer-portal', icon: Code },
      { name: 'API Documentation', path: '/api', icon: Code },
      { name: 'Training Programs', path: '/training', icon: GraduationCap },
      { name: 'White Papers', path: '/white-papers', icon: FileText },
      { name: 'Webinars', path: '/webinars', icon: Video },
      { name: 'Research & Development', path: '/research', icon: TestTube },
      { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart },
      { name: 'Support Center', path: '/support', icon: HelpCircle }
    ]
  }
];

const contactInfo = [
  { icon: Mail, text: 'contact@ziontechgroup.com', href: 'mailto:contact@ziontechgroup.com' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: '123 Tech Street, Innovation City, IC 12345', href: '#' }
];

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://facebook.com/ziontechgroup', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/ziontechgroup', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                </div>
                <p className="text-zion-slate-light text-sm leading-relaxed mb-6">
                  Empowering the future through cutting-edge AI solutions, innovative technology services, 
                  and digital transformation expertise. We help businesses thrive in the digital age.
                </p>
                
                {/* Contact Information */}
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                    >
                      <contact.icon className="w-4 h-4 mr-3 text-zion-cyan" />
                      <span className="text-sm">{contact.text}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-center mb-4">
                  <section.icon className="w-5 h-5 text-zion-cyan mr-2" />
                  <h4 className="text-lg font-semibold text-white">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 group"
                        onClick={() => handleLinkClick(link)}
                      >
                        <link.icon className="w-3 h-3 mr-2 text-zion-cyan group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm group-hover:underline">{link.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zion-slate/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center text-zion-slate-light text-sm"
              >
                <Copyright className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>© 2024 Zion Tech Group. All rights reserved.</span>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-10 h-10 bg-zion-slate/50 hover:bg-zion-cyan/20 rounded-lg flex items-center justify-center text-zion-slate-light hover:text-zion-cyan transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
