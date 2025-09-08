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
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics' },
        { name: 'AI Customer Behavior Analytics', href: '/services/ai-customer-behavior-analytics' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Document Processing', href: '/services/ai-document-processing' },
        { name: 'AI Customer Service Automation', href: '/services/ai-customer-service-automation' },
        { name: 'AI Threat Detection', href: '/services/ai-threat-detection' },
        { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection' },
        { name: 'AI Identity Verification', href: '/services/ai-identity-verification' },
        { name: 'AI Medical Diagnosis', href: '/services/ai-medical-diagnosis' },
        { name: 'AI Trading Algorithms', href: '/services/ai-trading-algorithms' },
        { name: 'AI Marketing Optimization', href: '/services/ai-marketing-optimization' },
        { name: 'AI Content Generation', href: '/services/ai-content-generation' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Quality Control', href: '/services/ai-quality-control' }
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
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', featured: true },
        { name: 'Zero Trust Security', href: '/services/zero-trust-network-architecture', featured: true },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', featured: true },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', featured: true },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', featured: true },
        { name: 'Green IT Solutions', href: '/services/green-it', featured: true }
      ]
    },
    {
      title: 'Comprehensive IT Services',
      featured: true,
      links: [
        { name: 'Enterprise Network Infrastructure', href: '/services/enterprise-network-infrastructure' },
        { name: 'Data Center Optimization', href: '/services/data-center-optimization' },
        { name: 'Virtualization Solutions', href: '/services/virtualization-solutions' },
        { name: 'Zero Trust Security Implementation', href: '/services/zero-trust-security-implementation' },
        { name: 'Advanced Threat Detection', href: '/services/advanced-threat-detection' },
        { name: 'Compliance Management Suite', href: '/services/compliance-management-suite' },
        { name: 'Multi-Cloud Strategy', href: '/services/multi-cloud-strategy' },
        { name: 'Cloud Cost Optimization', href: '/services/cloud-cost-optimization' },
        { name: 'Serverless Architecture', href: '/services/serverless-architecture' },
        { name: 'Data Lake Implementation', href: '/services/data-lake-implementation' },
        { name: 'Real-Time Analytics Platform', href: '/services/real-time-analytics-platform' },
        { name: 'Data Quality Management', href: '/services/data-quality-management' },
        { name: 'SD-WAN Implementation', href: '/services/sd-wan-implementation' },
        { name: 'Network Performance Monitoring', href: '/services/network-performance-monitoring' },
        { name: 'Digital Workplace Transformation', href: '/services/digital-workplace-transformation' },
        { name: 'Legacy System Modernization', href: '/services/legacy-system-modernization' },
        { name: 'Technology Roadmap Development', href: '/services/technology-roadmap-development' },
        { name: 'IT Governance Framework', href: '/services/it-governance-framework' },
        { name: 'Managed IT Services', href: '/services/managed-it-services' },
        { name: 'Managed Security Services', href: '/services/managed-security-services' }
      ]
    },
    {
      title: 'Innovative Micro SaaS',
      featured: true,
      links: [
        { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring' },
        { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot' },
        { name: 'AI Content Optimizer Pro', href: '/services/ai-content-optimizer-pro' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI HR Talent Acquisition', href: '/services/ai-hr-talent-acquisition' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'MLOps Pipeline', href: '/services/mlops-pipeline' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' }
      ]
    },
    {
      title: 'Additional Micro SaaS',
      featured: false,
      links: [
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
        { name: 'Comprehensive Services Showcase', href: '/comprehensive-services-showcase-2025-new', featured: true },
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
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' },
        { name: 'Autonomous BI Platform', href: '/services/autonomous-business-intelligence' },
        { name: 'Consciousness Simulation', href: '/services/consciousness-simulation' },
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-network' },
        { name: 'Emotional Intelligence AI', href: '/services/ai-emotional-intelligence' },
        { name: 'AI Creativity Platform', href: '/services/ai-creativity-platform' },
        { name: 'AI Education Platform', href: '/services/ai-education-platform' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'AI DevOps Automation', href: '/services/ai-devops-automation' },
        { name: 'Quantum-Ready Data Centers', href: '/services/quantum-ready-data-center' }
      ]
    },
    {
      title: 'Edge & IoT Services',
      icon: Server,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'AI IoT Edge Platform', href: '/services/ai-iot-edge-computing-platform' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' },
        { name: 'Sustainability Solutions', href: '/services/sustainability' }
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

          {/* Middle Section - Additional Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pt-8 border-t border-gray-700">
            {/* Company Links */}
            <div>
              <h5 className="font-semibold text-white mb-4 flex items-center">
                <Building className="w-4 h-4 mr-2 text-blue-400" />
                Company
              </h5>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-semibold text-white mb-4 flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-green-400" />
                Resources
              </h5>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Showcases */}
            <div>
              <h5 className="font-semibold text-white mb-4 flex items-center">
                <Rocket className="w-4 h-4 mr-2 text-purple-400" />
                Service Showcases
              </h5>
              <ul className="space-y-2">
                {serviceShowcases.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & Contact */}
            <div>
              <h5 className="font-semibold text-white mb-4 flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-yellow-400" />
                Pricing & Contact
              </h5>
              <ul className="space-y-2">
                {pricingLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section - Social & Newsletter */}
          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm mr-4">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="flex items-center space-x-4">
                <div className="text-gray-400 text-sm">
                  Stay updated with our latest innovations
                </div>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
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