import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
  Infinity,
  Cloud,
  Cpu,
  Users,
  Building,
  Truck,
  BookOpen,
  DollarSign,
  Target,
  Atom,
  Workflow,
  MessageCircle,
  Gauge,
  Search,
  ShoppingCart,
  HelpCircle,
  Code,
  TrendingUp
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '2028 Innovative Services',
      featured: true,
      links: [
        { name: 'Innovative Services Showcase 2028', href: '/innovative-services-showcase-2028', featured: true },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Legal Document Analyzer', href: '/services/ai-legal-document-analyzer' },
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostics' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Supply Chain Optimizer', href: '/services/ai-supply-chain-optimizer' },
        { name: 'AI Energy Management System', href: '/services/ai-energy-management-system' },
        { name: 'AI Education Platform', href: '/services/ai-education-platform' },
        { name: 'AI Real Estate Analytics', href: '/services/ai-real-estate-analytics' },
        { name: 'AI Manufacturing Quality Control', href: '/services/ai-manufacturing-quality-control' },
        { name: 'AI Customer Experience Platform', href: '/services/ai-customer-experience-platform' }
      ]
    },
    {
      title: 'Emerging Technologies',
      links: [
        { name: 'Blockchain DeFi Platform', href: '/services/blockchain-defi-platform' },
        { name: 'Metaverse Development Platform', href: '/services/metaverse-development-platform' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning' },
        { name: 'Autonomous Systems Platform', href: '/services/autonomous-systems-platform' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin-platform' },
        { name: 'Space Technology Platform', href: '/services/space-technology-platform' },
        { name: 'Sustainable Technology Platform', href: '/services/sustainable-technology-platform' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' }
      ]
    },
    {
      title: 'Core AI Services',
      links: [
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' },
        { name: 'AI Content Creation', href: '/services/ai-content-creation' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo' },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk' },
        { name: 'Website Analytics', href: '/services/website-analytics' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },
        { name: 'AI Project Manager', href: '/services/ai-project-manager' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/services/ai-data-analytics' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' }
      ]
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Returns Management', href: '/services/returns-management' },
        { name: 'Email Sequencer', href: '/services/email-sequencer' },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription' },
        { name: 'Micro CRM', href: '/services/micro-crm' },
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking' },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk' },
        { name: 'Green IT Solutions', href: '/green-it' },
        { name: 'Marketplace', href: '/marketplace' }
      ]
    },
    {
      title: 'IT & Infrastructure',
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'IT Onsite Services', href: '/it-onsite-services' },
        { name: 'Cybersecurity Services', href: '/services/ai-cybersecurity' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'Digital Transformation', href: '/services/transformation' },
        { name: 'Managed IT Services', href: '/services/managed-it' },
        { name: 'Network Security', href: '/services/network-security' },
        { name: 'Backup & Recovery', href: '/services/backup-recovery' }
      ]
    },
    {
      title: 'Company & Resources',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'API Reference', href: '/api' },
        { name: 'Status Page', href: '/status' }
      ]
    }
  ];

  const quickActions = [
    {
      title: 'Get Custom Quote',
      description: 'Tailored solutions for your business',
      href: '/contact',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'View All Services',
      description: 'Complete innovative services showcase',
      href: '/innovative-services-showcase-2028',
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Schedule Consultation',
      description: 'Free 30-minute strategy session',
      href: '/contact',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Download Brochure',
      description: 'Comprehensive service overview',
      href: '/brochure',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {footerSections.map((section, index) => (
              <motion.div key={section.title} variants={itemVariants}>
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                    section.featured 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' 
                      : 'text-white'
                  }`}>
                    {section.featured && <Star className="w-5 h-5 text-yellow-400" />}
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className={`text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group ${
                            link.featured ? 'font-semibold text-cyan-300 hover:text-cyan-200' : ''
                          }`}
                        >
                          {link.featured && <Sparkles className="w-3 h-3 text-cyan-400" />}
                          <span>{link.name}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Actions Section */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
              <p className="text-gray-300">Choose your next step to transform your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link
                    to={action.href}
                    className="block p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {action.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      {action.description}
                    </p>
                    <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Company Info */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Zion Tech Group</div>
                  <div className="text-sm text-gray-400">Innovation • Technology • Future</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright and Links */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <div>
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}