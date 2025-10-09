import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Zap, 
  ArrowRight, 
  Brain, 
  Code, 
  Star, 
  Globe, 
  Users, 
  TrendingUp,
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle,
  Target,
  BarChart,
  Settings,
  Bot,
  FileText,
  ShoppingCart,
  Workflow,
  Layers,
  Activity,
  Lightbulb,
  Rocket,
  Database,
  Smartphone,
  Lock
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', icon: Brain, description: 'Core AI services' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Target, description: 'AI-powered marketing' },
    { name: 'AI Automation', url: '/ai-automation', icon: Settings, description: 'Business automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Users, description: 'Healthcare AI' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: TrendingUp, description: 'Financial AI' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Data intelligence' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security' },
    { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Globe, description: 'Cloud AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'Content creation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', icon: Bot, description: 'Support automation' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', icon: TrendingUp, description: 'Sales optimization' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: ShoppingCart, description: 'E-commerce AI' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile AI apps' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Workflow, description: 'Workflow optimization' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', icon: BarChart, description: 'Data visualization' }
  ];

  const itServices = [
    { name: 'IT Solutions', url: '/it-services', icon: Code, description: 'Core IT services' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Globe, description: 'Cloud infrastructure' },
    { name: 'Mobile Development', url: '/ai-mobile-app-development', icon: Smartphone, description: 'Mobile apps' },
    { name: 'Web Development', url: '/services', icon: Globe, description: 'Web solutions' },
    { name: 'DevOps', url: '/devops', icon: Settings, description: 'DevOps services' },
    { name: 'Database Services', url: '/database', icon: Database, description: 'Database management' },
    { name: 'Network Services', url: '/networking', icon: Globe, description: 'Network solutions' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Layers, description: 'Infrastructure setup' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'BI solutions' }
  ];

  const microSaasServices = [
    { name: 'AI Code Review', url: '/micro-saas', icon: Code, description: 'Automated code analysis', price: '$29/mo' },
    { name: 'AI SEO Optimizer', url: '/micro-saas', icon: Target, description: 'SEO automation', price: '$49/mo' },
    { name: 'AI Analytics Dashboard', url: '/micro-saas', icon: BarChart, description: 'Business intelligence', price: '$79/mo' },
    { name: 'AI Marketing Tools', url: '/micro-saas', icon: TrendingUp, description: 'Marketing automation', price: '$99/mo' },
    { name: 'AI Document Processing', url: '/micro-saas', icon: FileText, description: 'Document intelligence', price: '$39/mo' },
    { name: 'AI Customer Support', url: '/micro-saas', icon: Bot, description: 'Support automation', price: '$59/mo' },
    { name: 'AI Email Marketing', url: '/micro-saas', icon: Mail, description: 'Email automation', price: '$69/mo' },
    { name: 'AI Social Media Manager', url: '/micro-saas', icon: Globe, description: 'Social media automation', price: '$89/mo' },
    { name: 'AI Project Manager', url: '/micro-saas', icon: Workflow, description: 'Project automation', price: '$79/mo' },
    { name: 'AI Data Scraper', url: '/micro-saas', icon: Database, description: 'Data extraction', price: '$49/mo' },
    { name: 'AI Invoice Generator', url: '/micro-saas', icon: FileText, description: 'Invoice automation', price: '$39/mo' },
    { name: 'AI Lead Generator', url: '/micro-saas', icon: Target, description: 'Lead generation', price: '$99/mo' },
    { name: 'AI Content Scheduler', url: '/micro-saas', icon: Clock, description: 'Content scheduling', price: '$29/mo' },
    { name: 'AI Performance Monitor', url: '/micro-saas', icon: Activity, description: 'Performance tracking', price: '$59/mo' },
    { name: 'AI Idea Generator', url: '/micro-saas', icon: Lightbulb, description: 'Creative ideation', price: '$19/mo' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Zap, description: 'Quantum solutions' },
    { name: 'Blockchain & Web3', url: '/blockchain', icon: Shield, description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge', icon: Globe, description: 'Connected devices' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Settings, description: 'Self-managing systems' },
    { name: 'Robotics', url: '/robotics', icon: Code, description: 'Intelligent robots' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'Data insights' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'Status Page', url: '/status' },
    { name: 'System Status', url: '/system-status' },
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security Policy', url: '/security' },
    { name: 'SLA Agreement', url: '/sla' },
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', url: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', url: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', url: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">
                  {contactInfo.hours}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ai-services"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                >
                  View all AI services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.slice(0, 8).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/it-services"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                >
                  View all IT services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Micro SAAS & Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Star className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3 mb-8">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.url}
                    className="flex items-center justify-between text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-2">
                      <service.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{service.name}</span>
                    </div>
                    <span className="text-xs text-green-400 font-semibold">{service.price}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/micro-saas"
                  className="text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                >
                  View all Micro SAAS →
                </Link>
              </li>
            </ul>

            <h4 className="text-md font-semibold mb-4 text-gray-200">Company</h4>
            <ul className="space-y-2">
              {companyLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 group flex items-center"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Innovation</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Micro SAAS Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Empowering businesses with AI innovation since 2020</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secure & Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
