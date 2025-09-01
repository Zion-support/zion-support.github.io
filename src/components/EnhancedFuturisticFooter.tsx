import { Link } from 'react - router - dom';
import React from 'react';
export const EnhancedFuturisticFooter: React.FC = () => {
export const EnhancedFuturisticFooter: React.FC = () => {
import { 
import { motion } from 'framer - motion';


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
  Atom,
  Crown,
  Sparkles,
  Flame,
  Sun,
  Moon,
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
  MailIcon,
  Calendar,
  User,
  Handshake,
  Briefcase,
  FileText as FileTextIcon,
  Users as UsersIcon,
  Code as CodeIcon,
  HelpCircle as HelpCircleIcon,
  DollarSign as DollarSignIcon,
  Users as UsersIcon2,
  Calendar as CalendarIcon,
  Shield as ShieldIcon,
  BookOpen as BookOpenIcon,
  Factory as FactoryIcon,
  ShoppingCart as ShoppingCartIcon,
  Heart as HeartIcon,
  TrendingUp as TrendingUpIcon,
  Building as BuildingIcon,
  Rocket as RocketIcon,
  Atom as AtomIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon2,
  ShoppingCart as ShoppingCartIcon2,
  Users as UsersIcon3,
  BookOpen as BookOpenIcon2,
  FileText as FileTextIcon2,
  Users as UsersIcon4,
  Code as CodeIcon2,
  HelpCircle as HelpCircleIcon2,
  DollarSign as DollarSignIcon2,
  Users as UsersIcon5,
  Calendar as CalendarIcon2,
  Shield as ShieldIcon3,
  BookOpen as BookOpenIcon3,
  Factory as FactoryIcon2,
  ShoppingCart as ShoppingCartIcon3,
  Heart as HeartIcon2,
  TrendingUp as TrendingUpIcon2,
  Building as BuildingIcon2,
  Rocket as RocketIcon2,
  Atom as AtomIcon2,
  Cloud as CloudIcon2,
  Shield as ShieldIcon4,
  ShoppingCart as ShoppingCartIcon4,
  Users as UsersIcon6,
  BookOpen as BookOpenIcon4,
  FileText as FileTextIcon3,
  Users as UsersIcon7,
  Code as CodeIcon3,
  HelpCircle as HelpCircleIcon3,
  DollarSign as DollarSignIcon3,
  Users as UsersIcon8,
  Calendar as CalendarIcon3,
  Shield as ShieldIcon5,
  BookOpen as BookOpenIcon5
} from 'lucide - react';

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
  CheckCircle,
  ShoppingCart,
  Building,
  MailIcon,
  Calendar,
  Settings
} from 'lucide - react';

  const currentYear = new Date () .getFullYear () ;

  const footerSections = [
    {
      title: 'Comprehensive Services 2026',
      featured: true,
      links: [
        { name: 'All Services & Pricing', href: '/comprehensive-services-showcase-2026', featured: true },
        { name: 'Pricing Guide 2026', href: '/comprehensive-pricing-guide-2026', featured: true },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas', featured: true },
        { name: 'AI Solutions', href: '/services/ai-business-intelligence', featured: true },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: true },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: true },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Blockchain Solutions', href: '/services#blockchain', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true }
      ]
    },
    {
      title: 'Innovative Micro SAAS 2026',
      featured: true,
      links: [
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success', featured: true },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence', featured: true },
        { name: 'AI HR & Talent Management', href: '/services/ai-hr-talent', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true },
        { name: 'AI Financial Planning', href: '/services/ai-financial-planning', featured: true },
        { name: 'AI Learning Platform', href: '/services/ai-learning-development', featured: true },
        { name: 'AI Supply Chain Risk', href: '/services/ai-supply-chain-risk', featured: true },
        { name: 'AI Compliance Management', href: '/services/ai-compliance-management', featured: true },
        { name: 'AI Innovation Platform', href: '/services/ai-innovation-management', featured: true }
      ]
    },
    {
      title: 'AI Services 2026',
      featured: true,
      links: [
        { name: 'Autonomous Business Operations', href: '/services/ai-autonomous-business', featured: true },
        { name: 'Neural Interface Platform', href: '/services/ai-neural-interface', featured: true },
        { name: 'Quantum Machine Learning', href: '/services/ai-quantum-ml', featured: true },
        { name: 'Synthetic Biology AI', href: '/services/ai-synthetic-biology', featured: true },
        { name: 'Space Technology AI', href: '/services/ai-space-technology', featured: true },
        { name: 'Climate Intelligence AI', href: '/services/ai-climate-intelligence', featured: true },
        { name: 'Autonomous Vehicles AI', href: '/services/ai-autonomous-vehicles', featured: true },
        { name: 'Digital Twin & Metaverse', href: '/services/ai-digital-twin-metaverse', featured: true },
        { name: 'Blockchain & Web3 AI', href: '/services/ai-blockchain-web3', featured: true },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', featured: true }
      ]
    },
    {
      title: 'IT Infrastructure 2026',
      featured: true,
      links: [
        { name: 'Cloud Infrastructure Optimization', href: '/services/ai-cloud-optimization', featured: true },
        { name: 'Edge Computing & 5G', href: '/services/edge-computing-5g', featured: true },
        { name: 'Data Center Management', href: '/services/ai-data-center-management', featured: true },
        { name: 'Zero-Trust Security', href: '/services/zero-trust-security', featured: true },
        { name: 'DevOps & CI/CD Automation', href: '/services/ai-devops-automation', featured: true },
        { name: 'Multi-Cloud Management', href: '/services/hybrid-multi-cloud', featured: true },
        { name: 'Network Performance AI', href: '/services/ai-network-performance', featured: true },
        { name: 'Green IT & Sustainability', href: '/services/green-it-sustainability', featured: true },
        { name: 'Disaster Recovery AI', href: '/services/ai-disaster-recovery', featured: true },
        { name: 'IT Asset Management AI', href: '/services/ai-it-asset-management', featured: true }
      ]
    },
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'Quantum AI Trading Platform', href: '/services#quantum-ai-trading', featured: true },
        { name: 'Neural Interface Platform', href: '/services#neural-interface', featured: true },
        { name: 'Space Technology Solutions', href: '/services#space-technology', featured: true },
        { name: 'Synthetic Biology Platform', href: '/services#synthetic-biology', featured: true },
        { name: 'Climate Intelligence Platform', href: '/services#climate-intelligence', featured: true },
        { name: 'Autonomous Systems Platform', href: '/services#autonomous-systems', featured: true },
        { name: 'Digital Twin Metaverse', href: '/services#digital-twin-metaverse', featured: true },
        { name: 'Blockchain Web3 Platform', href: '/services#blockchain-web3', featured: true },
        { name: 'Advanced AI Solutions', href: '/services#advanced-ai', featured: true }
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
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Content Generation Platform', href: '/services/ai-content-generation-platform' },
        { name: 'AI Legal Research Platform', href: '/services/ai-legal-research-platform' },
        { name: 'AI Education Platform', href: '/services/ai-education-platform' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      featured: false,
      links: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Cybersecurity Threat Intelligence', href: '/services/ai-cybersecurity-threat-intelligence' },
        { name: 'Zero Trust Network Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'SOC2 Compliance Tracker', href: '/services/soc2-compliance-tracker' },
        { name: 'GDPR Cookie Compliance', href: '/services/gdpr-cookie-compliance' }
      ]
    },
    {
      title: 'Financial & Trading Services',
      featured: false,
      links: [
        { name: 'AI Financial Fraud Detection', href: '/services/ai-financial-fraud-detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring' },
        { name: 'SaaS Churn Predictor', href: '/services/saas-churn-predictor' }
      ]
    },
    {
      title: 'Healthcare & Life Sciences',
      featured: false,
      links: [
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' }
      ]
    },
    {
      title: 'Supply Chain & Logistics',
      featured: false,
      links: [
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Vendor Risk Management', href: '/services/vendor-risk-management' }
      ]
    },
    {
      title: 'Content & Communication',
      featured: false,
      links: [
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Proofreading Studio', href: '/services/ai-proofreading-studio' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot' },
        { name: 'RAG Search', href: '/services/rag-search' }
      ]
    },
    {
      title: 'HR & Talent Management',
      featured: false,
      links: [
        { name: 'AI HR Talent Acquisition', href: '/services/ai-hr-talent-acquisition' },
        { name: 'Employee Scheduling SaaS', href: '/services/employee-scheduling-saas' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' }
      ]
    },
    {
      title: 'E-commerce & Retail',
      featured: false,
      links: [
        { name: 'E-commerce Personalization', href: '/services/ecommerce-personalization' },
        { name: 'Returns Management SaaS', href: '/services/returns-management' },
        { name: 'Affiliate Marketing Tracker', href: '/services/affiliate-marketing-tracker' }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      featured: false,
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'MLOps Pipeline', href: '/services/mlops-pipeline' },
        { name: 'API Monitoring SaaS', href: '/services/api-monitoring' },
        { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor' }
      ]
    },
    {
      title: 'Emerging Technologies',
      featured: false,
      links: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
        { name: 'Blockchain Enterprise Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Sustainability Solutions', href: '/services/sustainability' }
      ]
    },
    {
      title: 'Support & Operations',
      featured: false,
      links: [
        { name: 'AI Support Helpdesk', href: '/services/ai-support-helpdesk' },
        { name: 'AI Incident Postmortems', href: '/services/ai-incident-postmortems' },
        { name: 'IT Onsite Services', href: '/it-onsite-services' },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform' }
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