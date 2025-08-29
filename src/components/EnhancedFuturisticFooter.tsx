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
  Search,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  GitFork,
  Atom,
  Target,
  TrendingUp,
  Award,
  Code,
  Truck,
  Building,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ShoppingCart,
  Lock,
  FileText,
  Settings,
  Key,
  Globe2,
  ShieldCheck,
  Leaf,
  Scale,
  Building2,
  Car,
  Home,
  Factory,
  City,
  CheckCircle,
  ArrowUpRight,
  Play,
  MailIcon
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030', featured: true },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030', featured: true },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030', featured: true },
        { name: 'Neural Interface Platform', href: '/revolutionary-services-2030#neural-interface', featured: true },
        { name: 'Holographic Workspace Platform', href: '/revolutionary-services-2030#holographic-workspace', featured: true },
        { name: 'BioDigital Twin Platform', href: '/revolutionary-services-2030#biodigital-twin', featured: true },
        { name: 'Space Debris Tracking System', href: '/revolutionary-services-2030#space-debris-tracking', featured: true },
        { name: 'AI Ethics Guardian Platform', href: '/revolutionary-services-2030#ai-ethics-guardian', featured: true },
        { name: 'Metaverse Builder Platform', href: '/revolutionary-services-2030#metaverse-builder', featured: true }
      ]
    },
    {
      title: 'AI & Analytics Services',
      featured: true,
      links: [
        { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI Customer Success Analytics', href: '/services/ai-customer-success-analytics' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Supply Chain Optimization Platform', href: '/services/ai-supply-chain-optimization-platform' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' }
      ]
    },
    {
      title: 'Infrastructure & Security',
      featured: true,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Cybersecurity Solutions', href: '/services/ai-cybersecurity', featured: true },
        { name: 'Zero Trust Security', href: '/services/ai-cybersecurity', featured: true },
        { name: 'AI Ethics & Governance', href: '/services/ai-cybersecurity', featured: true },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: false,
      links: [
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', featured: false },
        { name: 'Financial Services', href: '/solutions#financial', featured: false },
        { name: 'Legal Services', href: '/solutions#legal', featured: false },
        { name: 'Research & Academia', href: '/research-development', featured: false },
        { name: 'Manufacturing', href: '/solutions#manufacturing', featured: false },
        { name: 'Retail & E-commerce', href: '/solutions#retail', featured: false },
        { name: 'Government & Public Sector', href: '/solutions#government', featured: false },
        { name: 'Energy & Sustainability', href: '/solutions#energy', featured: false },
        { name: 'Space & Aerospace', href: '/space-tech', featured: false },
        { name: 'Education & Training', href: '/training', featured: false }
      ]
    },
    {
      title: 'Business Solutions',
      featured: true,
      links: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', featured: true },
        { name: 'Enterprise Solutions', href: '/solutions', featured: true },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI HR & Recruitment', href: '/services/ai-hr-platform', featured: true },
        { name: 'AI Supply Chain', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'AI Quality Assurance', href: '/services/ai-predictive-maintenance', featured: true },
        { name: 'AI Sales Intelligence', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Innovation Management', href: '/services/ai-workflow-automation', featured: true }
      ]
    },
    {
      title: 'Resources & Support',
      featured: false,
      links: [
        { name: 'Comprehensive Pricing 2027', href: '/comprehensive-pricing-guide-2027', featured: true },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: true },
        { name: 'Blog & Insights', href: '/blog', featured: false },
        { name: 'FAQ & Help Center', href: '/faq', featured: false },
        { name: 'Documentation', href: '/docs', featured: false },
        { name: 'Developer Portal', href: '/developers', featured: false },
        { name: 'Training & Certification', href: '/training', featured: false },
        { name: 'Community Forum', href: '/community', featured: false },
        { name: 'Success Stories', href: '/case-studies', featured: false },
        { name: 'White Papers', href: '/white-papers', featured: false }
      ]
    },
    {
      title: 'Company & Contact',
      featured: false,
      links: [
        { name: 'About Us', href: '/about', featured: false },
        { name: 'Our Team', href: '/team', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Partners', href: '/partners', featured: false },
        { name: 'Press & Media', href: '/press', featured: false },
        { name: 'Contact Us', href: '/contact', featured: false },
        { name: 'Request Demo', href: '/demo', featured: false },
        { name: 'Support Center', href: '/support', featured: false }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Featured Services */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transform Your Business with AI
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Discover cutting-edge AI solutions, expert talent, and innovative technology services designed to drive unprecedented growth and efficiency.
            </p>
          </motion.div>

          {/* Featured Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {footerSections.filter(section => section.featured).slice(0, 3).map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {section.links.slice(0, 4).map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to={section.links[0]?.href || '#'}
                  className="inline-flex items-center mt-4 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium group-hover:scale-105"
                >
                  Explore More <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.slice(0, 4).map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.links.slice(0, 6).map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 pt-8 border-t border-slate-700/50">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <p className="text-slate-300 mb-6">
                Ready to transform your business with cutting-edge AI solutions? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-cyan-300 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-cyan-300 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Address</p>
                  <p className="text-white">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Connect & Stay Updated</h3>
              <p className="text-slate-300 mb-6">
                Follow us for the latest insights, updates, and innovations in AI and technology.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-all duration-200 hover:bg-slate-700/50 hover:border-cyan-500/50 hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <h4 className="text-lg font-medium text-white mb-3">Stay Updated</h4>
              <p className="text-slate-300 text-sm mb-4">
                Get the latest AI insights and technology updates delivered to your inbox.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-cyan-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-cyan-300 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-cyan-300 transition-colors">Cookie Policy</Link>
              <Link to="/accessibility" className="hover:text-cyan-300 transition-colors">Accessibility</Link>
            </div>
          </div>
          
          <div className="mt-6 text-center text-slate-400 text-sm">
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved. | Empowering businesses with AI-driven innovation.</p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float-delayed">
        <div className="w-6 h-6 bg-blue-400 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float">
        <div className="w-3 h-3 bg-purple-400 rounded-full opacity-20"></div>
      </div>
    </footer>
  );
};