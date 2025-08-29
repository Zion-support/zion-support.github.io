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
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading', featured: true },
        { name: 'Neural Interface Platform', href: '/services/neural-interface', featured: true },
        { name: 'Holographic Workspace Platform', href: '/services/holographic-workspace', featured: true },
        { name: 'BioDigital Twin Platform', href: '/services/biodigital-twin', featured: true },
        { name: 'Space Debris Tracking System', href: '/services/space-debris-tracking', featured: true },
        { name: 'AI Ethics Guardian Platform', href: '/services/ai-ethics-guardian', featured: true },
        { name: 'Metaverse Builder Platform', href: '/services/metaverse-builder', featured: true },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030' },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030' },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030' }
      ]
    },
    {
      title: 'AI & Analytics Services',
      featured: true,
      links: [
        { name: 'All Services', href: '/services', featured: true },
        { name: 'Innovative Services 2025', href: '/services/innovative-2025', featured: true },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', featured: true },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', featured: true },
        { name: 'AI Legal Document Analysis', href: '/services/ai-legal-document-analysis', featured: true },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', featured: true },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading', featured: true },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', featured: true },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', featured: true },
        { name: 'AI Project Management', href: '/services/ai-project-management', featured: true },
        { name: 'AI HR Recruitment', href: '/services/ai-hr-recruitment', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', featured: true },
        { name: 'AI SEO Optimization', href: '/services/ai-seo-optimization', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: true,
      links: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', featured: true },
        { name: 'Financial Services', href: '/solutions/financial', featured: true },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', featured: true },
        { name: 'Retail Solutions', href: '/solutions/retail', featured: true },
        { name: 'Education Solutions', href: '/solutions/education', featured: true },
        { name: 'Legal Tech Solutions', href: '/solutions/legal-tech', featured: true },
        { name: 'Real Estate Solutions', href: '/solutions/real-estate', featured: true },
        { name: 'Logistics Solutions', href: '/solutions/logistics', featured: true },
        { name: 'Hospitality Solutions', href: '/solutions/hospitality', featured: true },
        { name: 'Energy Solutions', href: '/solutions/energy', featured: true }
      ]
    },
    {
      title: 'Emerging Technologies',
      featured: true,
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', featured: true },
        { name: 'Space Technology', href: '/services/space-tech', featured: true },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', featured: true },
        { name: 'Blockchain & Web3', href: '/services/blockchain-web3', featured: true },
        { name: 'Autonomous Systems', href: '/services/autonomous-systems', featured: true },
        { name: 'Neural Interfaces', href: '/services/neural-interface', featured: true },
        { name: 'Holographic Computing', href: '/services/holographic-workspace', featured: true },
        { name: 'BioDigital Twins', href: '/services/biodigital-twin', featured: true }
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      featured: false,
      links: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', featured: false },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', featured: false },
        { name: 'Data Analytics', href: '/services/data-analytics', featured: false },
        { name: 'Cybersecurity', href: '/services/cybersecurity', featured: false },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', featured: false },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform', featured: false },
        { name: 'Security Headers CSP', href: '/services/security-headers-csp', featured: false },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: false }
      ]
    },
    {
      title: 'Micro SaaS Products',
      featured: true,
      links: [
        { name: 'Micro CRM', href: '/services/micro-crm', featured: true },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', featured: true },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', featured: true },
        { name: 'GDPR DSAR Portal', href: '/services/gdpr-dsar-portal', featured: true },
        { name: 'Email Sequencer', href: '/services/email-sequencer', featured: true },
        { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai', featured: true },
        { name: 'Mobile Survey Tool', href: '/services/mobile-first-survey-tool', featured: true },
        { name: 'Podcast Transcription', href: '/services/podcast-transcription', featured: true },
        { name: 'Price Intelligence Service', href: '/services/price-intelligence-service', featured: true },
        { name: 'Returns Management', href: '/services/returns-management', featured: true },
        { name: 'SEO Auditor', href: '/services/seo-auditor', featured: true },
        { name: 'Remote Meeting Summarizer', href: '/services/remote-meeting-summarizer', featured: true }
      ]
    },
    {
      title: 'Resources & Learning',
      featured: false,
      links: [
        { name: 'Blog & Insights', href: '/blog', featured: true },
        { name: 'Case Studies', href: '/case-studies', featured: true },
        { name: 'White Papers', href: '/white-papers', featured: true },
        { name: 'Webinars', href: '/webinars', featured: true },
        { name: 'Documentation', href: '/docs', featured: true },
        { name: 'FAQ & Support', href: '/faq', featured: true },
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', featured: true },
        { name: 'Pricing Guide 2027', href: '/pricing-guide-2027', featured: true },
        { name: 'Pricing Guide 2030', href: '/pricing-guide-2030', featured: true },
        { name: 'Marketplace', href: '/marketplace', featured: true }
      ]
    },
    {
      title: 'Company & Support',
      featured: false,
      links: [
        { name: 'About Us', href: '/about', featured: false },
        { name: 'Contact', href: '/contact', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'Partners', href: '/partners', featured: false },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Schedule Demo', href: '/schedule-demo', featured: true },
        { name: 'Community', href: '/community', featured: false },
        { name: 'Developers', href: '/developers', featured: false },
        { name: 'Privacy Policy', href: '/privacy', featured: false },
        { name: 'Terms of Service', href: '/terms', featured: false },
        { name: 'Cookie Policy', href: '/cookies', featured: false }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-responsive py-16">
          {/* Top Section - Company Info & Quick Links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-16">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
              </div>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of innovative AI-powered solutions, micro SaaS services, and cutting-edge technology services. 
                Transforming businesses with intelligent automation and future-ready solutions.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Quick Actions</h4>
              <div className="space-y-3">
                <Link
                  to="/request-quote"
                  className="inline-flex items-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/schedule-demo"
                  className="inline-flex items-center w-full px-4 py-3 border border-cyan-400/30 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-200 font-medium group"
                >
                  Schedule Demo
                  <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </Link>
                <Link
                  to="/marketplace"
                  className="inline-flex items-center w-full px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-800/50 transition-all duration-200 font-medium group"
                >
                  Browse Services
                  <ShoppingCart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            {/* Statistics */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-white mb-6">Our Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="text-2xl font-bold text-cyan-400">500+</div>
                  <div className="text-sm text-slate-400">Services Delivered</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="text-2xl font-bold text-blue-400">1000+</div>
                  <div className="text-sm text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-slate-400">Uptime</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-slate-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center">
                  {section.featured && <Star className="w-4 h-4 text-cyan-400 mr-2" />}
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className={`text-slate-400 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center ${
                          link.featured ? 'font-medium' : ''
                        }`}
                      >
                        {link.featured && <Sparkles className="w-3 h-3 text-cyan-400 mr-2" />}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright & Legal */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400">
                <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
                <div className="flex items-center space-x-4">
                  <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 text-slate-400 ${social.color} transition-all duration-200 hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};