import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Building,
  Building2,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  Code,
  Database,
  DollarSign,
  Eye,
  Factory,
  FileText,
  Globe,
  Globe2,
  Heart,
  HeartHandshake,
  Home,
  Key,
  Leaf,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  PenTool,
  Phone,
  Play,
  Rocket,
  Scale,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users,
  Zap,
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
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
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
      title: 'Micro SaaS Solutions',
      featured: true,
      links: [
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', featured: true },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot', featured: true },
        { name: 'RAG Search Engine', href: '/services/rag-search', featured: true },
        { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', featured: true },
        { name: 'eCommerce Personalization', href: '/services/ecommerce-personalization', featured: true },
        { name: 'Returns Management SaaS', href: '/services/returns-management', featured: true },
        { name: 'Vendor Risk Management', href: '/services/vendor-risk-management', featured: true },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo-optimizer', featured: true },
        { name: 'SaaS Churn Predictor', href: '/services/saas-churn-predictor', featured: true },
        { name: 'AI Incident Postmortems', href: '/services/ai-incident-postmortems', featured: true },
        { name: 'API Monitoring SaaS', href: '/services/api-monitoring', featured: true },
        { name: 'GDPR Cookie Compliance', href: '/services/gdpr-cookie-compliance', featured: true },
        { name: 'AI Proofreading Studio', href: '/services/ai-proofreading-studio', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: false,
      links: [
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' },
        { name: 'Financial Services', href: '/services/ai-financial-trading-platform' },
        { name: 'Manufacturing & Industry 4.0', href: '/services/digital-twin' },
        { name: 'Retail & eCommerce', href: '/services/ecommerce-personalization' },
        { name: 'Education & Training', href: '/services/ai-education-platform' },
        { name: 'Legal & Compliance', href: '/services/ai-legal-research-platform' },
        { name: 'Real Estate', href: '/services/ai-project-management-platform' },
        { name: 'Transportation & Logistics', href: '/services/ai-supply-chain-optimization' },
        { name: 'Energy & Sustainability', href: '/services/sustainability' },
        { name: 'Government & Public Sector', href: '/services/ai-cybersecurity-suite' }
      ]
    },
    {
      title: 'Resources & Support',
      featured: false,
      links: [
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Training & Certification', href: '/training' },
        { name: 'Support Center', href: '/support' },
        { name: 'FAQ', href: '/faq' },
        { name: 'API Documentation', href: '/docs/api' },
        { name: 'Developer Resources', href: '/developers' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Play },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-tech-group', icon: Users },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: MessageCircle },
    { name: 'Facebook', href: 'https://www.facebook.com/ziontechgroup', icon: Heart },
    { name: 'YouTube', href: 'https://www.youtube.com/@ziontechgroup', icon: Play }
  ];

  const stats = [
    { label: 'Services Offered', value: '60+', icon: Rocket },
    { label: 'Average ROI', value: '350%', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Years Experience', value: '15+', icon: Award }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Stats Section */}
      <div className="relative z-10 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 xl:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading provider of AI-powered business solutions, cutting-edge technology services, and innovative Micro SaaS platforms. 
              Transform your business with our comprehensive suite of 60+ services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
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
                  className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          <div className="lg:col-span-1 xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h4 className={`text-lg font-semibold ${
                    section.featured 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400' 
                      : 'text-white'
                  }`}>
                    {section.title}
                    {section.featured && (
                      <span className="ml-2 inline-flex items-center text-xs text-cyan-400">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className={`text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm flex items-center group ${
                            link.featured ? 'font-medium' : ''
                          }`}
                        >
                          {link.name}
                          {link.featured && (
                            <span className="ml-1 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <ArrowUpRight className="w-3 h-3" />
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-slate-700/50 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ChevronRight className="w-6 h-6 text-white transform rotate-270" />
      </button>
    </footer>
  );
};

export default EnhancedFuturisticFooter;