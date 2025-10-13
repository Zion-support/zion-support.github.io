import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Star, 
  Award,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Facebook,
  Sparkles,
  Rocket,
  Target,
  Users,
  BarChart3,
  Cloud,
  Calendar,
  Settings,
  Lock,
  Heart,
  TrendingUp
} from 'lucide-react';

const EnhancedFuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics' },
    { name: 'AI Content Generation', href: '/ai-content-generation' },
    { name: 'AI Customer Support', href: '/ai-customer-support' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
    { name: 'AI Automation', href: '/ai-automation' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'Custom Software', href: '/custom-software' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' }
  ];

  const microSaasServices = [
    { name: 'AI Email Analyzer', href: '/ai-powered-email-analyzer', featured: true },
    { name: 'Smart Inventory Optimizer', href: '/smart-inventory-optimizer', featured: true },
    { name: 'Customer Sentiment Tracker', href: '/ai-customer-sentiment-tracker', featured: true },
    { name: 'Smart Expense Categorizer', href: '/smart-expense-categorizer', featured: true },
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', href: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', href: '/zion-content-studio' }
  ];

  const fiveGServices = [
    { name: '5G Network Infrastructure', href: '/5g-network-infrastructure' },
    { name: '5G Edge Computing', href: '/5g-edge-computing' },
    { name: '5G IoT Solutions', href: '/5g-iot-solutions' },
    { name: '5G Smart City Solutions', href: '/5g-smart-city-solutions' },
    { name: '5G Private Networks', href: '/5g-private-networks' },
    { name: '5G Mobile Applications', href: '/5g-mobile-applications' },
    { name: '5G Data Analytics', href: '/5g-data-analytics' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Community', href: '/community' },
    { name: 'Training', href: '/training' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 py-16 relative z-10">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Zion Tech Group
                  </span>
                </h3>
                <p className="text-cyan-400 text-sm font-medium">AI & Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
              Transform your operations with cutting-edge technology and intelligent automation.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">10,000+</div>
                  <div className="text-gray-400 text-xs">Happy Customers</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">99.9%</div>
                  <div className="text-gray-400 text-xs">Uptime SLA</div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-cyan-400" />
              <h4 className="text-lg font-semibold text-white">AI Services</h4>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="space-y-3">
              {aiServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href} 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    {service.name}
                  </span>
                </Link>
              ))}
              <Link 
                to="/ai-services" 
                className="block text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium group mt-4"
              >
                View All AI Services
                <ArrowRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <h4 className="text-lg font-semibold text-white">IT Services</h4>
            </div>
            <div className="space-y-3">
              {itServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href} 
                  className="block text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    {service.name}
                  </span>
                </Link>
              ))}
              <Link 
                to="/it-services" 
                className="block text-green-400 hover:text-green-300 transition-colors duration-300 text-sm font-medium group mt-4"
              >
                View All IT Services
                <ArrowRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <h4 className="text-lg font-semibold text-white">Micro SAAS</h4>
              <Star className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="space-y-3">
              {microSaasServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href} 
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm group"
                >
                  <span className="flex items-center space-x-2">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">
                      {service.name}
                    </span>
                    {service.featured && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-1.5 py-0.5 rounded text-xs font-semibold">
                        NEW
                      </span>
                    )}
                  </span>
                </Link>
              ))}
              <Link 
                to="/micro-saas" 
                className="block text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium group mt-4"
              >
                View All Micro SAAS
                <ArrowRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 5G Solutions */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-orange-400" />
              <h4 className="text-lg font-semibold text-white">5G Solutions</h4>
            </div>
            <div className="space-y-3">
              {fiveGServices.map((service, index) => (
                <Link 
                  key={index}
                  to={service.href} 
                  className="block text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm group"
                >
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    {service.name}
                  </span>
                </Link>
              ))}
              <Link 
                to="/5g-solutions" 
                className="block text-orange-400 hover:text-orange-300 transition-colors duration-300 text-sm font-medium group mt-4"
              >
                View All 5G Solutions
                <ArrowRight className="w-4 h-4 inline ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Email</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Phone</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Address</p>
                <p className="text-cyan-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <div className="space-y-2">
              {companyLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Support</h5>
            <div className="space-y-2">
              {supportLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Legal</h5>
            <div className="space-y-2">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.href} 
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h5 className="text-white font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h5 className="text-white font-semibold mb-2">Stay Updated</h5>
              <p className="text-gray-300 text-sm mb-3">Get the latest AI and tech insights</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group">
                  Subscribe
                  <Rocket className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-400" />
            </div>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFuturisticFooter;