import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  ShoppingCart,
  Heart,
  Truck,
  Atom,
  Users,
  Target,
  Rocket,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  CheckCircle,
  ChevronUp
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'AI Services',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform' },
        { name: 'AI Content Optimization', href: '/services/ai-content-optimizer-pro' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-orchestrator' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Cybersecurity Solutions', href: '/services/cybersecurity' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'IT Consulting', href: '/services/it-consulting' },
        { name: 'Network Security', href: '/services/network-security' },
        { name: 'Data Governance', href: '/services/data-governance' },
        { name: 'Green IT Solutions', href: '/services/green-it' }
      ]
    },
    {
      title: 'Micro SAAS',
      links: [
        { name: 'Micro CRM Platform', href: '/services/micro-crm' },
        { name: 'Employee Scheduling', href: '/services/employee-scheduling-saas' },
        { name: 'Returns Management', href: '/services/returns-management-saas' },
        { name: 'SEO Auditor Tool', href: '/services/seo-auditor' },
        { name: 'Churn Predictor', href: '/services/saas-churn-predictor' },
        { name: 'Status Incident Hub', href: '/services/status-incident-hub' },
        { name: 'Uptime SLA Monitor', href: '/services/uptime-sla-monitor' },
        { name: 'Vendor Risk Management', href: '/services/vendor-risk-management' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Industry Solutions', href: '/industry-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Cloud Solutions', href: '/cloud-solutions' },
        { name: 'Emerging Technology', href: '/emerging-tech' },
        { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
        { name: 'Financial Solutions', href: '/financial-solutions' },
        { name: 'Government Solutions', href: '/government-solutions' }
      ]
    }
  ];

  const companyInfo = {
    name: 'Zion Tech Group',
    description: 'Leading provider of innovative AI-powered solutions, IT services, and micro SAAS platforms. Transforming businesses through cutting-edge technology and intelligent automation.',
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM EST'
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: LinkedIn },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'YouTube', href: '#', icon: Youtube },
    { name: 'GitHub', href: '#', icon: Github }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-sm text-cyan-400">Innovation & Technology</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">{companyInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                <span className="text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm">{companyInfo.hours}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-slate-700/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 flex items-center">
                {section.title === 'AI Services' && <Brain className="w-4 h-4 mr-2 text-cyan-400" />}
                {section.title === 'IT Services' && <Cpu className="w-4 h-4 mr-2 text-blue-400" />}
                {section.title === 'Micro SAAS' && <ShoppingCart className="w-4 h-4 mr-2 text-green-400" />}
                {section.title === 'Solutions' && <Target className="w-4 h-4 mr-2 text-purple-400" />}
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links & Newsletter */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                  >
                    <CheckCircle className="w-3 h-3 mr-2 text-cyan-400" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest insights on AI, technology trends, and industry updates.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
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

            <div className="text-sm text-gray-400">
              Made with ❤️ by {companyInfo.name}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </button>
    </footer>
  );
}