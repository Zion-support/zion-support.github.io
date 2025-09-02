import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../header/Logo';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube, 
  Github,
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Users,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Globe,
  Rocket,
  Target,
  Cpu,
  Cloud,
  Lock,
  Database,
  Workflow,
  TrendingUp,
  Heart,
  DollarSign,
  Atom,
  Satellite,
  Truck,
  Home,
  BookOpen,
  Briefcase,
  Calendar,
  Factory,
  ShoppingCart,
  Network,
  Wifi,
  Server,
  Code,
  Monitor,
  Smartphone,
  Activity,
  Eye,
  Search,
  Settings,
  Palette,
  Video,
  GraduationCap,
  Handshake,
  ShoppingBag,
  Leaf,
  Gamepad2,
  Coins,
  MessageCircle,
  Star,
  Users2,
  Cog
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      services: [
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence-platform' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
        { name: 'AI Autonomous DevOps', href: '/services/ai-autonomous-devops' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation-platform' },
        { name: 'AI Enterprise Automation', href: '/services/ai-enterprise-automation-platform' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading-platform' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform' },
        { name: 'AI Educational Content', href: '/services/ai-educational-content-creation-platform' },
        { name: 'AI Legal Automation', href: '/services/ai-legal-document-automation-platform' },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform' },
        { name: 'AI Real Estate Analytics', href: '/services/ai-real-estate-investment-analytics-platform' },
        { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics-platform' },
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo' },
        { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning' },
        { name: 'AI Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-platform' },
        { name: 'AI Quantum Neural Network', href: '/services/ai-quantum-neural-network-platform' },
        { name: 'AI Space Technology', href: '/services/ai-space-technology-platform' },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity-threat-intelligence' }
      ]
    },
    {
      title: 'IT & Infrastructure',
      icon: Shield,
      services: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-threat-intelligence' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'Healthcare Technology', href: '/services/healthcare-tech' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'IT Infrastructure Management', href: '/services/it-infrastructure-management' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Edge Computing Solutions', href: '/services/edge-computing-solutions' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin-platform' },
        { name: 'Sustainability Technology', href: '/services/sustainable-technology' }
      ]
    },
    {
      title: 'AI & Advanced Solutions',
      icon: Brain,
      services: [
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'AI Solutions', href: '/services/ai-solutions' },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization' },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform' },
        { name: 'AI Autonomous Systems', href: '/services/ai-autonomous-systems-platform' },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-creation-studio' },
        { name: 'AI Research Discovery', href: '/services/ai-research-discovery' },
        { name: 'AI Restaurant Management', href: '/services/ai-restaurant-management-system' },
        { name: 'AI Revenue Operations', href: '/services/ai-revenue-operations-platform' },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence-platform' },
        { name: 'AI Smart City Infrastructure', href: '/services/ai-smart-city-infrastructure-management' },
        { name: 'AI Space Technology', href: '/services/ai-space-technology' },
        { name: 'AI Supply Chain Intelligence', href: '/services/ai-supply-chain-intelligence-optimization-platform' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Industry Solutions',
      icon: Building2,
      solutions: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Government Solutions', href: '/solutions/government' },
        { name: 'Retail Solutions', href: '/solutions/retail' },
        { name: 'Education Solutions', href: '/solutions/education' },
        { name: 'Energy Solutions', href: '/solutions/energy' },
        { name: 'Transportation Solutions', href: '/solutions/transportation' }
      ]
    },
    {
      title: 'Technology Solutions',
      icon: Cpu,
      solutions: [
        { name: 'Quantum Edge Computing', href: '/solutions/quantum-edge-computing' },
        { name: 'AI Autonomous Business', href: '/solutions/ai-autonomous-business' },
        { name: 'Blockchain Web3', href: '/solutions/blockchain-web3' },
        { name: 'IoT Edge Computing', href: '/solutions/iot-edge-computing' },
        { name: 'Space Technology', href: '/solutions/space-tech' },
        { name: 'Cybersecurity Solutions', href: '/solutions/cybersecurity' },
        { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
        { name: 'Data Analytics', href: '/solutions/data-analytics' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Partners', href: '/partners' },
    { name: 'Press', href: '/press' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Research & Development', href: '/research-development' },
    { name: 'Training Programs', href: '/training' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'API Reference', href: '/api' },
    { name: 'Developer Portal', href: '/developer' },
    { name: 'Community', href: '/community' }
  ];

  const supportLinks = [
    { name: 'Support Center', href: '/support' },
    { name: 'Help Desk', href: '/helpdesk' },
    { name: 'Training', href: '/training' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Request Quote', href: '/request-quote' },
    { name: 'Live Chat', href: '/chat' },
    { name: 'Knowledge Base', href: '/knowledge-base' },
    { name: 'Status Page', href: '/status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Data Protection', href: '/data-protection' },
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
    <footer className="bg-zion-slate-darker border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Logo customColor="#3b82f6" />
            </div>
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Zion Tech Group is a leading technology company specializing in AI-powered solutions, 
              micro SAAS services, and innovative IT solutions. We help businesses transform and 
              grow through cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-start space-x-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
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
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 rounded-lg transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 text-zion-cyan mr-2" />
              Services
            </h3>
            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div key={category.title} className="mb-4">
                  <h4 className="text-sm font-medium text-zion-cyan mb-2 flex items-center">
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.services.slice(0, 4).map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.href}
                          className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {category.services.length > 4 && (
                    <Link
                      to="/services"
                      className="text-xs text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center mt-2"
                    >
                      View All {category.title}
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Target className="w-5 h-5 text-zion-cyan mr-2" />
              Solutions
            </h3>
            <div className="space-y-4">
              {solutionCategories.map((category) => (
                <div key={category.title} className="mb-4">
                  <h4 className="text-sm font-medium text-zion-cyan mb-2 flex items-center">
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {category.solutions.map((solution) => (
                      <li key={solution.name}>
                        <Link
                          to={solution.href}
                          className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {solution.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Building2 className="w-5 h-5 text-zion-cyan mr-2" />
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <BookOpen className="w-5 h-5 text-zion-cyan mr-2" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <HelpCircle className="w-5 h-5 text-zion-cyan mr-2" />
              Support
            </h3>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <FileText className="w-5 h-5 text-zion-cyan mr-2" />
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <span>•</span>
              <span>Innovation • Technology • Growth</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link
                to="/sitemap"
                className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                Sitemap
              </Link>
              <Link
                to="/accessibility"
                className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                Accessibility
              </Link>
              <Link
                to="/contact"
                className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
