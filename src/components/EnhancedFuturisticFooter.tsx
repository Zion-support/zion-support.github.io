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
  MailIcon
} from 'lucide-react';

export function EnhancedFuturisticFooter() {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: 'Comprehensive Services 2026',
      featured: true,
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-platform' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Content Marketing Automation', href: '/services/ai-content-marketing-automation' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      featured: true,
      links: [
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Lead Scoring Platform', href: '/services/ai-lead-scoring' },
        { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor' },
        { name: 'SOC2 Compliance Tracker', href: '/services/soc2-compliance-tracker' },
        { name: 'AI Support Helpdesk', href: '/services/ai-support-helpdesk' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo-optimizer' },
        { name: 'AI Customer Churn Predictor', href: '/services/ai-customer-churn-prediction' },
        { name: 'AI Financial Fraud Detection', href: '/services/ai-financial-fraud-detection' },
        { name: 'AI HR Talent Acquisition', href: '/services/ai-hr-talent-acquisition' },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation' }
      ]
    },
    {
      title: 'Infrastructure & Security',
      featured: true,
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Blockchain Enterprise Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Zero Trust Network Architecture', href: '/services/zero-trust-network-architecture' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'Space Tech Solutions', href: '/services/space-tech' }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: false,
      links: [
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' },
        { name: 'Financial Services', href: '/services/financial-services' },
        { name: 'Manufacturing & Industry 4.0', href: '/solutions' },
        { name: 'Retail & E-commerce', href: '/solutions' },
        { name: 'Education Technology', href: '/services/ai-education-platform' },
        { name: 'Legal Technology', href: '/services/ai-legal-research-platform' },
        { name: 'Government Solutions', href: '/solutions' },
        { name: 'Startup Solutions', href: '/solutions' },
        { name: 'Enterprise Solutions', href: '/solutions' },
        { name: 'SMB Solutions', href: '/solutions' }
      ]
    },
    {
      title: 'HR & Talent Management',
      featured: false,
      links: [
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Pricing Guide', href: '/pricing' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '/careers' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Request Demo', href: '/demo' },
    { name: 'Support', href: '/support' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-5"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Top Section - Logo and Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h2>
              </div>
            </Link>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Transforming businesses through cutting-edge AI solutions, innovative micro SaaS products, 
              and strategic IT services. Your partner in digital transformation.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <a href={contactInfo.website} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                {section.title}
                {section.featured && (
                  <Star className="w-4 h-4 text-cyan-400 ml-2" />
                )}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-2 group-hover:translate-x-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section - Quick Links and Social */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-t border-slate-700/50">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Newsletter and CTA */}
        <div className="py-8 border-t border-slate-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-slate-400 text-sm mb-4">
                Get the latest insights on AI, technology trends, and business transformation.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right">
              <h4 className="text-white font-semibold mb-3">Ready to Transform?</h4>
              <p className="text-slate-400 text-sm mb-4">
                Let's discuss how our solutions can drive your business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                <Link
                  to="/contact"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 text-sm"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/request-quote"
                  className="px-6 py-2 border border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-sm"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700/50 bg-slate-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-slate-400 hover:text-cyan-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};