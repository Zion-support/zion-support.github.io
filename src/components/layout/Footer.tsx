import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Shield,
  Award,
  Users,
  Rocket,
  Brain,
  Cpu,
  Shield as ShieldIcon,
  Cloud,
  Database,
  Network,
  Heart,
  DollarSign,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI Content Generation', href: '/services/ai-content-generator' },
        { name: 'AI Code Review', href: '/services/ai-code-review-security' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: ShieldIcon,
      services: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'Zero Trust Architecture', href: '/services/ZeroTrustNetworkArchitecture' },
        { name: 'SOC2 Compliance Automation', href: '/services/SOC2ComplianceTracker' },
        { name: 'Incident Response Platform', href: '/services/incident-response-platform' },
        { name: 'Threat Detection & Response', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'Vendor Risk Management', href: '/services/VendorRiskManagement' },
        { name: 'Smart Contract Security', href: '/services/SmartContractRiskScanner' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      services: [
        { name: 'Cloud DevOps Automation', href: '/services/cloud-devops' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: '5G Enterprise Solutions', href: '/services/FiveGSolutions' },
        { name: 'Quantum Computing Services', href: '/services/quantum-computing-solutions' },
        { name: 'Space Technology Solutions', href: '/services/space-tech' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Target,
      services: [
        { name: 'Micro CRM Platform', href: '/services/micro-crm' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' },
        { name: 'Helpdesk Platform', href: '/services/HelpdeskPlatform' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Financial Solutions', href: '/services/FinancialSolutions' },
        { name: 'Returns Management SaaS', href: '/services/ReturnsManagementSaaS' },
        { name: 'Customer Feedback Surveys', href: '/services/CustomerFeedbackSurveys' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Events', href: '/events' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Training', href: '/training' },
    { name: 'Community', href: '/community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 xl:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-gray-400">Innovation & Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses with cutting-edge AI, IT, and Micro SaaS solutions. 
              We transform ideas into innovative digital solutions that drive growth and efficiency.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Mon-Fri: 9AM-6PM EST</span>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <category.icon className="w-5 h-5 text-cyan-400" />
                <h4 className="text-lg font-semibold text-white">{category.title}</h4>
              </div>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-800">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 pt-8 border-t border-gray-800">
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Get the latest insights on AI, technology trends, and industry updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
                <span>Subscribe</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
            <p className="text-gray-300 mb-4">
              Follow us for the latest updates and insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Microsoft Partner</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ in Delaware, USA</span>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>English (US)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUpRight className="w-6 h-6 rotate-[-45deg]" />
      </motion.button>
    </footer>
  );
};

export default Footer;