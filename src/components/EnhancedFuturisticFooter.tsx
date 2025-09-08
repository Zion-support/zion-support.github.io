import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Star, 
  Sparkles, 
  Heart, 
  ArrowUpRight,
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
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Award,
  Users,
  TrendingUp,
  CheckCircle
 } from 'lucide-react';

export default function EnhancedFuturisticFooter() {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const footerSections = [
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      links: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Auto Email Responder', href: '/services/ai-compliance-copilot' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot' }
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
        { name: 'Digital Transformation', href: '/services/digital-transformation' }
      ]
    },
    {
      title: 'Edge & IoT Services',
      icon: Server,
      color: 'from-blue-600 to-cyan-600',
      links: [
        { name: 'IoT & Edge Computing', href: '/services/iot-edge' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'IT Consulting', href: '/services/it-consulting' },
        { name: 'Onsite Support', href: '/services/onsite-support' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' }
      ]
    },
    {
      title: 'Quantum & Emerging Tech',
      icon: Crown,
      color: 'from-indigo-600 to-purple-600',
      links: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Space Technology', href: '/services/space-tech' },
        { name: 'Sustainability', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Cloud DevOps', href: '/services/cloud-devops' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-400' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-blue-400' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, featured: true },
    { name: 'View Pricing', href: '/pricing', icon: DollarSign, featured: true },
    { name: 'Schedule Demo', href: '/demo', icon: Play, featured: true },
    { name: 'Get Support', href: '/support', icon: HelpCircle, featured: true },
    { name: 'Join Community', href: '/community', icon: Users, featured: true },
    { name: 'Partner Program', href: '/partners', icon: Users, featured: true }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className={`${section.featured ? 'lg:col-span-2' : ''}`}>
              <h3 className={`text-lg font-bold mb-6 flex items-center ${
                section.featured 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400' 
                  : 'text-white'
              }`}>
                {section.featured && <Star className="w-5 h-5 mr-2 text-yellow-400" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className={`text-sm transition-all duration-200 hover:text-blue-400 flex items-center group ${
                        link.featured ? 'text-blue-300 font-medium' : 'text-gray-300'
                      }`}
                    >
                      {link.featured && <ArrowRight className="w-3 h-3 mr-2 text-blue-400 group-hover:translate-x-1 transition-transform duration-200" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information & Social Links */}
        <div className="border-t border-slate-700/50 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Get In Touch
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a 
                        href="tel:+13024640950" 
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a 
                        href="mailto:kleber@ziontechgroup.com" 
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-medium">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Website</p>
                      <a 
                        href="https://ziontechgroup.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Connect With Us
              </h3>
              
              {/* Social Media Links */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400">Follow us on social media</p>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://twitter.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://facebook.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://youtube.com/@ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://github.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400">Stay updated with our latest innovations</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
            
            <p className="text-sm text-gray-400 text-center lg:text-right">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200 ml-1">
                Privacy Policy
              </Link> | 
              <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200 ml-1">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};