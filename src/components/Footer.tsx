import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  Github,
  Award,
  Shield,
  Zap,
  Globe,
  Users,
  Briefcase,
  Target,
  Brain,
  Phone as PhoneIcon,
  Newspaper,
  FileText,
  HelpCircle,
  Truck,
  Atom,
  Heart,
  BarChart3,
  Rocket,
  Activity,
  DollarSign,
  Eye,
  Cpu,
  Cloud,
  Network,
  Satellite,
  Leaf,
  Lock,
  Building,
  TrendingUp,
  Coins,
  MessageCircle,
  GitFork,
  Code,
  Video,
  Smartphone,
  TestTube,
  ShoppingCart,
  Map,
  Star,
  Gamepad2,
  BookOpen,
  ArrowUp,
  Copyright
} from 'lucide-react';
import { motion } from 'framer-motion';
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
    title: 'Contact Information',
    icon: Phone,
    links: [
      { name: 'Phone: +1 (302) 464-0950', path: 'tel:+13024640950', icon: Phone },
      { name: 'Email: kleber@ziontechgroup.com', path: 'mailto:kleber@ziontechgroup.com', icon: Mail },
      { name: 'Address: 364 E Main St STE 1008', path: '#', icon: MapPin },
      { name: 'Middletown, DE 19709', path: '#', icon: MapPin },
      { name: 'Website: ziontechgroup.com', path: 'https://ziontechgroup.com', icon: Globe, external: true }
    ]
  },
  {
    title: 'Company',
    icon: Globe,
    links: [
      { name: 'About Us', path: '/about', icon: Users },
      { name: 'Partners', path: '/partners', icon: Users },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'Solutions', path: '/solutions', icon: Target },
      { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
      { name: 'Contact', path: '/contact', icon: PhoneIcon },
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'FAQ', path: '/faq', icon: HelpCircle },
      { name: 'Help Center', path: '/help', icon: HelpCircle }
    ]
  },
  {
    title: 'Elite Services 2024',
    icon: Star,
    links: [
      { name: 'AI Business Intelligence Elite', path: '/services/ai-business-intelligence-elite', icon: Brain },
      { name: 'AI Cybersecurity Elite', path: '/services/ai-cybersecurity-elite', icon: Shield },
      { name: 'Quantum Computing Elite', path: '/services/quantum-computing-elite', icon: Atom },
      { name: 'Micro-SaaS Platform Elite', path: '/services/micro-saas-platform-elite', icon: Rocket },
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    links: [
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
      { name: 'AI Business Intelligence Analytics', path: '/services/ai-business-intelligence-analytics', icon: BarChart3 },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant', icon: Shield },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot', icon: Users },
      { name: 'AI-Powered SEO', path: '/services/ai-powered-seo', icon: TrendingUp },
      { name: 'Interview Assessment AI', path: '/services/interview-assessment-ai', icon: Users },
      { name: 'AI Content Marketing Suite', path: '/services/ai-content-marketing-suite', icon: FileText },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation', icon: MessageCircle },
      { name: 'AI Project Management', path: '/services/ai-project-management', icon: Target },
      { name: 'AI Financial Analytics', path: '/services/ai-financial-analytics', icon: DollarSign },
      { name: 'AI DevOps Automation Platform', path: '/services/ai-devops-automation-platform', icon: GitFork },
      { name: 'AI Customer Experience Support', path: '/services/ai-customer-experience-support', icon: MessageCircle },
      { name: 'AI Marketing Automation Personalization', path: '/services/ai-marketing-automation-personalization', icon: Target },
      { name: 'New Innovative Services 2025', path: '/new-innovative-services-2025', icon: Zap }
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
      { name: 'New Services Showcase 2025', path: '/new-services-showcase-2025', icon: Zap },
      { name: 'Comprehensive Services Showcase 2025', path: '/comprehensive-services-showcase-2025', icon: Zap },
      { name: 'Innovative Services Showcase 2025', path: '/innovative-services-showcase-2025', icon: Zap },
      { name: 'Ultimate Services Showcase 2025', path: '/ultimate-services-showcase-2025', icon: Star },
      { name: 'Ultimate Services Showcase 2026', path: '/ultimate-services-showcase-2026', icon: Star },
      { name: 'Comprehensive Services Showcase 2027', path: '/comprehensive-services-showcase-2027', icon: Zap },
      { name: 'Comprehensive Services Landing 2025', path: '/comprehensive-services-landing-2025', icon: Building },
      { name: 'Comprehensive Services Landing 2028', path: '/comprehensive-services-landing-2028', icon: Building },
      { name: 'Comprehensive Services Showcase 2029', path: '/comprehensive-services-showcase-2029', icon: Zap },
      { name: 'Zion Cutting Edge Services 2029', path: '/zion-cutting-edge-services-2029', icon: Rocket },
      { name: 'Zion 2026 AI Marketplace Showcase', path: '/zion-2026-ai-marketplace-showcase', icon: Brain },
      { name: 'Comprehensive Improvements 2025', path: '/comprehensive-improvements-2025', icon: TrendingUp },
      { name: 'New Innovative Services 2025', path: '/new-innovative-services-2025', icon: Zap }
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
  },
  {
    title: 'Featured Services',
    icon: Star,
    links: [
      { name: '2025 New Innovative Services', path: '/new-innovative-services-2025', icon: Star },
      { name: '2026 Services Overview', path: '/ultimate-services-showcase-2026', icon: Star },
      { name: '2027 Services Overview', path: '/comprehensive-services-showcase-2027', icon: Star },
      { name: '2029 Services Showcase', path: '/comprehensive-services-showcase-2029', icon: Star },
      { name: 'Revolutionary Services 2030', path: '/revolutionary-services-2030', icon: Rocket }
    ]
  }
];

const contactInfo = [
  { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
  { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
  { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', external: true },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', external: true },
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', external: true },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', external: true },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', external: true }
];

const awards = [
  { name: 'Best AI Company 2024', icon: Award },
  { name: 'Top Cybersecurity Provider', icon: Shield },
  { name: 'Innovation Excellence Award', icon: Zap },
  { name: 'Global Tech Leader', icon: Globe }
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`,
            backgroundSize: '100% 100%',
            animation: 'pulse 20s ease-in-out infinite alternate'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-8 mb-12">
          {/* Company Section - Takes 2 columns on larger screens */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              Leading provider of AI-powered solutions, cloud infrastructure, and innovative technology services. 
              Transforming businesses through cutting-edge innovation and digital excellence.
            </p>
            
            {/* Awards */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zion-cyan mb-3">Awards & Recognition</h4>
              <div className="flex flex-wrap gap-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-white/5 px-3 py-2 rounded-lg border border-zion-cyan/20">
                    <award.icon className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs text-zion-slate-light">{award.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-zion-cyan mb-3">Contact Information</h4>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.slice(1, 6).map((section, index) => (
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
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-zion-cyan/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights, updates, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:bg-white/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-sm flex items-center space-x-2"
            >
              <Copyright className="w-4 h-4" />
              <span>© 2024 Zion Tech Group. All rights reserved.</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-gray-400 hover:text-zion-cyan transition-colors duration-200 group"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan-dark transition-colors duration-200 z-50 flex items-center justify-center"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
