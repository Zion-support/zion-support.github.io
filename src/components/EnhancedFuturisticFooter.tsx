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
  ExternalLink
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: '2028 Services',
      featured: true,
      links: [
        { name: '2028 Services Overview', href: '/services/2028-showcase', featured: true },
        { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Customer Support Platform', href: '/services/ai-customer-support-platform' },
        { name: 'AI Data Analytics & BI', href: '/services/ai-data-analytics-bi' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
        { name: 'IoT Edge Computing Platform', href: '/services/iot-edge-computing-platform' },
        { name: 'Blockchain Web3 Platform', href: '/services/blockchain-web3-platform' },
        { name: 'Sustainable Technology Solutions', href: '/services/sustainable-technology-solutions' }
      ]
    },
    {
      title: 'Core Services',
      links: [
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity' },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
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
      title: 'AI Products',
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
        { name: 'Micro CRM', href: '/services/micro-crm' }
      ]
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'Affiliate Tracking', href: '/services/affiliate-tracking' },
        { name: 'IT Helpdesk', href: '/services/it-helpdesk' },
        { name: 'Green IT Solutions', href: '/green-it' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Talent Solutions', href: '/talent' },
        { name: 'Equipment Rental', href: '/equipment' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'Blockchain Services', href: '/services/blockchain' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Manufacturing Solutions', href: '/services/manufacturing' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'text-blue-400 hover:text-blue-300' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'text-sky-400 hover:text-sky-300' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'text-blue-500 hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'text-pink-400 hover:text-pink-300' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'text-red-400 hover:text-red-300' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'text-slate-400 hover:text-slate-300' }
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
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 xl:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-50"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-cyan-400 text-sm">Future of Technology</p>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading provider of innovative technology solutions including AI, Quantum Computing, 
              IoT, Blockchain, and Sustainable Technology for the modern enterprise.
            </p>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Globe className="w-4 h-4 text-blue-400" />
                <a 
                  href="https://ziontechgroup.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors flex items-center"
                >
                  ziontechgroup.com
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Service Sections */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className={`text-lg font-semibold mb-6 flex items-center ${
                section.featured ? 'text-cyan-400' : 'text-white'
              }`}>
                {section.title}
                {section.featured && (
                  <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-400/20 text-cyan-400">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </span>
                )}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`text-sm transition-all duration-300 flex items-center group ${
                        link.featured 
                          ? 'text-cyan-400 hover:text-cyan-300' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <ArrowRight className={`w-3 h-3 mr-2 transition-transform duration-300 group-hover:translate-x-1 ${
                        link.featured ? 'text-cyan-400' : 'text-slate-500'
                      }`} />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span className="text-sm">by Zion Tech Group</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};