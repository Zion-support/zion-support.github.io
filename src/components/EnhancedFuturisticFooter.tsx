import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Play,
  MailIcon,
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
  CheckCircle
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
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring' },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot' },
        { name: 'RAG Search Engine', href: '/services/rag-search' },
        { name: 'MLOps Pipeline', href: '/services/mlops-pipeline' },
        { name: 'E-commerce Personalization', href: '/services/ecommerce-personalization' },
        { name: 'Affiliate Marketing Tracker', href: '/services/affiliate-marketing-tracker' },
        { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor' },
        { name: 'SOC2 Compliance Tracker', href: '/services/soc2-compliance-tracker' },
        { name: 'Employee Scheduling SaaS', href: '/services/employee-scheduling-saas' },
        { name: 'AI Support Helpdesk', href: '/services/ai-support-helpdesk' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'Vendor Risk Management', href: '/services/vendor-risk-management' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo-optimizer' },
        { name: 'SaaS Churn Predictor', href: '/services/saas-churn-predictor' }
      ]
    },
    {
      title: 'Innovation & Research',
      links: [
        { name: 'Quantum Technology', href: '/quantum-technology' },
        { name: 'Space Technology', href: '/space-tech' },
        { name: 'Sustainability Solutions', href: '/sustainability' },
        { name: 'Emerging Tech 2030', href: '/emerging-tech-2030' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Innovation Hub', href: '/innovation-hub' },
        { name: 'Technology Trends', href: '/tech-trends' },
        { name: 'Future Vision', href: '/future-vision' }
      ]
    },
    {
      title: 'Business Solutions',
      links: [
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Strategic Planning', href: '/strategic-planning' },
        { name: 'Process Optimization', href: '/process-optimization' },
        { name: 'Change Management', href: '/change-management' },
        { name: 'Performance Analytics', href: '/performance-analytics' },
        { name: 'Risk Assessment', href: '/risk-assessment' },
        { name: 'Compliance Solutions', href: '/compliance' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Support', href: '/support' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: 'youtube' }
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transforming businesses through cutting-edge technology and strategic insights. 
              We deliver innovative solutions that drive growth and competitive advantage.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                >
                  <span className="text-slate-400 group-hover:text-white transition-colors duration-200">
                    {social.icon === 'linkedin' && '🔗'}
                    {social.icon === 'twitter' && '🐦'}
                    {social.icon === 'github' && '💻'}
                    {social.icon === 'youtube' && '📺'}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                    {section.featured && (
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>
                    )}
                    <span>{section.title}</span>
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                        >
                          <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <ArrowUpRight className="w-3 h-3" />
                          </span>
                          <span>{link.name}</span>
                          {link.featured && (
                            <span className="text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 py-1 rounded-full">
                              NEW
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

        {/* Middle Section - Quick Links and Newsletter */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-slate-300 mb-4 text-sm">
                Get the latest insights on AI, technology trends, and business innovation.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-slate-400 hover:text-white transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group">
          <MailIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>
    </footer>
  );
};