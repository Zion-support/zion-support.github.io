import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook, 
  Instagram,
  Youtube,
  Star,
  Award,
  Users,
  Shield,
  Zap,
  Brain,
  BarChart3,
  Cloud,
  Settings,
  HelpCircle,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Clock
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "AI Services", path: "/ai-services" },
    { name: "Micro SAAS", path: "/micro-saas" },
    { name: "5G Solutions", path: "/5g-solutions" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Support", path: "/support" },
    { name: "Consultation", path: "/consultation" },
  ];

  const aiServices = [
    { name: "AI Video Generator", path: "/ai-video-generator" },
    { name: "AI Customer Insights", path: "/ai-customer-insights" },
    { name: "AI Content Generation", path: "/ai-content-generation-pro" },
    { name: "AI Customer Support", path: "/ai-customer-support-pro" },
    { name: "AI Cybersecurity", path: "/ai-cybersecurity-suite-pro" },
    { name: "AI Data Analytics", path: "/ai-data-analytics-pro" },
    { name: "AI Document Processing", path: "/ai-document-intelligence" },
    { name: "AI Marketing Automation", path: "/ai-marketing-automation-pro" },
    { name: "AI Voice Assistant", path: "/ai-voice-assistant-pro" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation" }
  ];

  const microSaasServices = [
    { name: "AI Video Generator", path: "/ai-video-generator" },
    { name: "AI Invoice Generator", path: "/zion-ai-invoice-generator" },
    { name: "AI Customer Insights", path: "/ai-customer-insights" },
    { name: "AI Email Analyzer", path: "/zion-ai-email-analyzer" },
    { name: "Smart Inventory Optimizer", path: "/zion-smart-inventory-optimizer" },
    { name: "AI Customer Sentiment Tracker", path: "/zion-ai-customer-sentiment-tracker" },
    { name: "Smart Expense Categorizer", path: "/zion-smart-expense-categorizer" },
    { name: "AI Voice Assistant Pro", path: "/ai-voice-assistant-pro" },
    { name: "AI Code Reviewer", path: "/zion-ai-code-reviewer" },
    { name: "AI Social Media Manager", path: "/zion-ai-social-media-manager" }
  ];

  const itServices = [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure" },
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Development", path: "/mobile-development" },
    { name: "DevOps Solutions", path: "/devops-solutions" },
    { name: "IT Consulting", path: "/it-consulting" },
    { name: "Cybersecurity Audit", path: "/cybersecurity-audit" },
    { name: "Data Center Services", path: "/data-center-services" },
    { name: "Network Infrastructure", path: "/network-infrastructure" },
    { name: "IT Support", path: "/it-support" },
    { name: "Asset Management", path: "/asset-management" }
  ];

  const fiveGServices = [
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
    { name: "5G Edge Computing", path: "/5g-edge-computing" },
    { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
    { name: "5G Private Networks", path: "/5g-private-networks" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications" },
    { name: "5G Data Analytics", path: "/5g-data-analytics" },
    { name: "5G Implementation", path: "/5g-implementation" }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "News", path: "/news" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" }
  ];

  const resourceLinks = [
    { name: "Pricing", path: "/pricing" },
    { name: "Demo", path: "/demo" },
    { name: "Support", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "API Reference", path: "/api" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Webinars", path: "/webinars" },
    { name: "White Papers", path: "/whitepapers" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Sitemap", path: "/sitemap" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Security", path: "/security" }
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> },
    { label: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { label: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: <Youtube className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '60+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="w-6 h-6" /> }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 relative z-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {/* AI Services */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">AI Services</h3>
            </div>
            <div className="space-y-3">
              {aiServices.slice(0, 8).map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="flex items-center space-x-2">
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
              <Link
                to="/ai-services"
                className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-2">
                  <span>View All AI Services</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Micro SAAS</h3>
            </div>
            <div className="space-y-3">
              {microSaasServices.slice(0, 8).map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="flex items-center space-x-2">
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
              <Link
                to="/micro-saas"
                className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-2">
                  <span>View All Micro SAAS</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* IT Services */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">IT Services</h3>
            </div>
            <div className="space-y-3">
              {itServices.slice(0, 8).map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="flex items-center space-x-2">
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
              <Link
                to="/services"
                className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-2">
                  <span>View All IT Services</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* 5G Solutions */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">5G Solutions</h3>
            </div>
            <div className="space-y-3">
              {fiveGServices.slice(0, 8).map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  to={link.path}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="flex items-center space-x-2">
                    <span>{link.name}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
              <Link
                to="/5g-solutions"
                className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-2">
                  <span>View All 5G Solutions</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Company Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Zion Tech Group
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
              </p>
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
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <div className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <div className="space-y-3">
              {resourceLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Address</p>
                  <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on AI innovations, technology trends, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;