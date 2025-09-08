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
  TrendingUp,
  CheckCircle,
  Building,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Settings,
  Cloud,
  Lock,
  Cpu,
  Server
} from 'lucide-react';

export const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: "Zion Tech Group",
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const footerSections = [
    {
      title: 'Revolutionary 2030 Services',
      featured: true,
      links: [
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030', featured: true },
        { name: 'Comprehensive Services Showcase 2030', href: '/comprehensive-services-showcase-2030', featured: true },
        { name: 'AI Autonomous Operations', href: '/revolutionary-services-2030#ai-autonomous-business-operations-2030' },
        { name: 'Quantum AI Cybersecurity', href: '/revolutionary-services-2030#quantum-ai-cybersecurity-2030' },
        { name: 'AI Content Creation Studio', href: '/revolutionary-services-2030#ai-content-creation-studio-2030' },
        { name: 'AI Sales Intelligence', href: '/revolutionary-services-2030#ai-sales-intelligence-2030' },
        { name: 'AI Customer Support', href: '/revolutionary-services-2030#ai-customer-support-automation-2030' },
        { name: 'AI Data Analytics & BI', href: '/revolutionary-services-2030#ai-data-analytics-bi-2030' },
        { name: 'Cloud Infrastructure & DevOps', href: '/revolutionary-services-2030#cloud-infrastructure-devops-2030' },
        { name: 'IoT Edge Computing', href: '/revolutionary-services-2030#iot-edge-computing-2030' },
        { name: 'Digital Twin Platform', href: '/revolutionary-services-2030#digital-twin-platform-2030' },
        { name: 'Blockchain Web3 Platform', href: '/revolutionary-services-2030#blockchain-web3-platform-2030' }
      ]
    },
    {
      title: 'AI & Technology Services',
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
        { name: 'AI Customer Experience', href: '/services/ai-customer-experience-platform', featured: true },
        { name: 'AI HR Talent Analytics', href: '/services/ai-hr-talent-analytics', featured: true },
        { name: 'AI Marketing Attribution', href: '/services/ai-marketing-attribution-platform', featured: true }
      ]
    },
    {
      title: 'IT Infrastructure & Cloud',
      featured: true,
      links: [
        { name: 'Cloud Infrastructure Optimization', href: '/services/cloud-infrastructure-optimization', featured: true },
        { name: 'Advanced Cybersecurity Suite', href: '/services/advanced-cybersecurity-suite', featured: true },
        { name: 'Enterprise Data Platform', href: '/services/enterprise-data-platform', featured: true },
        { name: 'Software-Defined Network Platform', href: '/services/software-defined-network-platform', featured: true },
        { name: 'IoT & Edge Computing Platform', href: '/services/iot-edge-computing-platform', featured: true },
        { name: 'Blockchain & Web3 Platform', href: '/services/blockchain-web3-platform', featured: true },
        { name: 'API Management Platform', href: '/services/api-management-platform', featured: true },
        { name: 'Disaster Recovery Platform', href: '/services/disaster-recovery-platform', featured: true },
        { name: 'ITSM Platform', href: '/services/itsm-platform', featured: true },
        { name: 'Performance Monitoring Platform', href: '/services/performance-monitoring-platform', featured: true },
        { name: 'Identity & Access Management', href: '/services/identity-access-management-platform', featured: true }
      ]
    },
    {
      title: 'Advanced Technology Solutions',
      featured: true,
      links: [
        { name: 'Quantum Computing', href: '/services#quantum-computing', featured: true },
        { name: 'Space Technology', href: '/services#space-tech', featured: true },
        { name: 'Sustainable Technology', href: '/services#sustainable-tech', featured: true },
        { name: 'Blockchain & Web3', href: '/services#blockchain-web3', featured: true },
        { name: 'IoT & Edge Computing', href: '/services#iot-edge', featured: true },
        { name: 'Digital Twin Technology', href: '/services#digital-twin', featured: true },
        { name: 'Cybersecurity Solutions', href: '/services#cybersecurity', featured: true },
        { name: 'Cloud & DevOps', href: '/services#cloud-devops', featured: true },
        { name: 'AI Development Tools', href: '/services#ai-development', featured: true },
        { name: 'AI Operations Platform', href: '/services#ai-operations', featured: true }
      ]
    },
    {
      title: 'Industry Solutions',
      featured: true,
      links: [
        { name: 'Enterprise Solutions', href: '/solutions#enterprise', featured: true },
        { name: 'SMB Solutions', href: '/solutions#smb', featured: true },
        { name: 'Startup Solutions', href: '/solutions#startup', featured: true },
        { name: 'Healthcare Solutions', href: '/solutions#healthcare', featured: true },
        { name: 'Financial Services', href: '/solutions#financial', featured: true },
        { name: 'Manufacturing & Supply Chain', href: '/solutions#manufacturing', featured: true },
        { name: 'Retail & E-commerce', href: '/solutions#retail', featured: true },
        { name: 'Education & Learning', href: '/solutions#education', featured: true },
        { name: 'Entertainment & Gaming', href: '/solutions#entertainment', featured: true },
        { name: 'Government & Public Sector', href: '/solutions#government', featured: true }
      ]
    },
    {
      title: 'Resources & Support',
      featured: true,
      links: [
        { name: 'Documentation & APIs', href: '/resources#documentation', featured: true },
        { name: 'Case Studies', href: '/case-studies', featured: true },
        { name: 'Blog & Insights', href: '/blog', featured: true },
        { name: 'Pricing Guide', href: '/pricing', featured: true },
        { name: 'FAQ & Support', href: '/faq', featured: true },
        { name: 'Request Quote', href: '/request-quote', featured: true },
        { name: 'Contact Sales', href: '/contact', featured: true },
        { name: 'Technical Support', href: '/support', featured: true },
        { name: 'Training & Certification', href: '/training', featured: true },
        { name: 'Partner Program', href: '/partners', featured: true }
      ]
    },
    {
      title: 'Company & Legal',
      featured: false,
      links: [
        { name: 'About Us', href: '/about', featured: false },
        { name: 'Careers', href: '/careers', featured: false },
        { name: 'News & Press', href: '/news', featured: false },
        { name: 'Privacy Policy', href: '/privacy', featured: false },
        { name: 'Terms of Service', href: '/terms', featured: false },
        { name: 'Cookie Policy', href: '/cookies', featured: false },
        { name: 'Security', href: '/security', featured: false },
        { name: 'Compliance', href: '/compliance', featured: false },
        { name: 'Accessibility', href: '/accessibility', featured: false },
        { name: 'Sitemap', href: '/sitemap', featured: false }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press & Media', href: '/press' },
    { name: 'Partnerships', href: '/partners' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const resourceLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Blog & Insights', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'FAQ', href: '/faq' }
  ];

  const serviceShowcases = [
    { name: 'Services Overview', href: '/services-overview' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Revolutionary Services 2030', href: '/revolutionary-services-2030' },
    { name: 'Innovative Services 2027', href: '/innovative-services-showcase-2027' },
    { name: 'Comprehensive Services 2025', href: '/comprehensive-services-showcase-2025' }
  ];

  const pricingLinks = [
    { name: 'Pricing Guide 2030', href: '/pricing-2030' },
    { name: 'Pricing Guide 2027', href: '/pricing-2027' },
    { name: 'Pricing Guide 2025', href: '/pricing-2025' },
    { name: 'Request Quote', href: '/request-quote' },
    { name: 'Custom Pricing', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-600' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl"></div>
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
            <div className="text-slate-300 text-sm space-y-2 mb-6">
              <p>📞 +1 302 464 0950</p>
              <p>✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
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
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-blue-200 text-sm">Innovation 2030</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI, IT infrastructure, and micro SaaS solutions. 
                Transforming businesses with innovative technology solutions that are 30-50% below market prices.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                  <span className="leading-relaxed">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>

            {/* Services Sections */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className={`inline-flex items-center space-x-2 p-2 rounded-lg bg-gradient-to-r ${section.color} text-white`}>
                  <section.icon className="w-5 h-5" />
                  <h4 className="font-semibold text-sm">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Information Section */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <MessageCircle className="w-6 h-6 text-cyan-400 mr-2" />
                    Get In Touch
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Ready to transform your business with cutting-edge AI and technology solutions? 
                    Contact our experts today for a personalized consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Contact Us
                    </Link>
                    <Link
                      to="/request-quote"
                      className="inline-flex items-center justify-center px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-medium rounded-lg transition-all duration-200"
                    >
                      <DollarSign className="w-5 h-5 mr-2" />
                      Get Quote
                    </Link>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                    Contact Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-300">
                      <Phone className="w-4 h-4 text-cyan-400 mr-3" />
                      <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center text-slate-300">
                      <Mail className="w-4 h-4 text-cyan-400 mr-3" />
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-start text-slate-300">
                      <MapPin className="w-4 h-4 text-cyan-400 mr-3 mt-1" />
                      <span>
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Globe className="w-5 h-5 text-cyan-400 mr-2" />
                    Connect With Us
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-300">
                      <Globe className="w-4 h-4 text-cyan-400 mr-3" />
                      <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                        ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex space-x-3">
                      <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-200 group">
                        <Linkedin className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-200 group">
                        <Twitter className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                      </a>
                      <a href="#" className="w-8 h-8 bg-slate-700 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-200 group">
                        <Github className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-slate-800">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated with Zion Tech</h3>
              <p className="text-slate-300 mb-6">Get the latest insights on AI, Quantum Computing, and emerging technologies</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link to="/privacy" className="ml-2 hover:text-blue-400 transition-colors">Privacy Policy</Link> | 
                <Link to="/terms" className="ml-2 hover:text-blue-400 transition-colors">Terms of Service</Link> | 
                <Link to="/cookies" className="ml-2 hover:text-blue-400 transition-colors">Cookie Policy</Link>
              </div>

              {/* Additional Info */}
              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Industry Leader 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>99.9% Uptime SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};