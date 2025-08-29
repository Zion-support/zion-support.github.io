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

export function EnhancedFuturisticFooter() {
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
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Content Marketing Automation', href: '/services/ai-content-marketing-automation' }
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
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', featured: true },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: true },
        { name: 'Space Technology', href: '/services/space-tech', featured: true }
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
      title: 'Resources & Support',
      featured: false,
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Developer Portal', href: '/developer' },
        { name: 'Community Forum', href: '/community' },
        { name: 'Support Center', href: '/support' },
        { name: 'Training & Certification', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' }
      ]
    }
  ];
  
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Building },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Globe2 },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Building2 },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Eye },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Play },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Code }
  ];
  
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-slate-400">Get the latest insights on AI, technology trends, and industry updates.</p>
            </div>
            <form className="space-y-3">
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Contact Information</h4>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center space-x-3">
                  <MailIcon className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className={`text-sm font-semibold ${section.featured ? 'text-cyan-400' : 'text-white'}`}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className={`text-sm hover:text-cyan-400 transition-colors duration-200 ${
                        link.featured ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-400">
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
        </div>
      </div>
    </footer>
  );
}

// Add missing Phone icon component
const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.554.89l.5 2.5a1 1 0 01-.554 1.11l-1.5.5a1 1 0 00-.445.89v1a1 1 0 00.445.89l1.5.5a1 1 0 01.554 1.11l-.5 2.5a1 1 0 01-.554.89H5a2 2 0 01-2-2V5z" />
  </svg>
);
