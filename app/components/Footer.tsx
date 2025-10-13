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
  BarChart3,
  Cloud,
  Code,
  Database,
  Users,
  Award,
  Star,
  Clock,
  Twitter,
  Linkedin,
  Github,
  Youtube,
  Facebook,
  Instagram,
  MessageSquare,
  FileText,
  Calendar,
  Settings,
  Target,
  TrendingUp,
  Eye,
  Mic,
  Video,
  Receipt,
  Package,
  Cpu,
  Wifi,
  Smartphone,
  Monitor,
  CheckCircle,
  Heart,
  ThumbsUp,
  Rocket,
  Sparkles
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/ziontechgroup",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/ziontechgroup",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/ziontechgroup",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@ziontechgroup",
      icon: <Youtube className="w-5 h-5" />,
    },
  ];

  const services = [
    { name: "AI Services", path: "/ai-services", icon: <Brain className="w-4 h-4" /> },
    { name: "IT Services", path: "/services", icon: <Shield className="w-4 h-4" /> },
    { name: "Micro SAAS", path: "/micro-saas", icon: <Zap className="w-4 h-4" /> },
    { name: "5G Solutions", path: "/5g-solutions", icon: <Globe className="w-4 h-4" /> },
    { name: "Cloud Services", path: "/cloud-migration", icon: <Cloud className="w-4 h-4" /> },
    { name: "Cybersecurity", path: "/ai-cybersecurity", icon: <Shield className="w-4 h-4" /> },
    { name: "Web Development", path: "/web-development", icon: <Code className="w-4 h-4" /> },
    { name: "Data Analytics", path: "/ai-data-analytics", icon: <BarChart3 className="w-4 h-4" /> }
  ];

  const microSaasProducts = [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Zion Security Shield", path: "/zion-security-shield", icon: <Shield className="w-4 h-4" /> },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault", icon: <Cloud className="w-4 h-4" /> },
    { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro", icon: <Users className="w-4 h-4" /> },
    { name: "Zion AI Video Generator", path: "/zion-ai-video-generator", icon: <Video className="w-4 h-4" /> },
    { name: "Zion AI Invoice Generator", path: "/zion-ai-invoice-generator", icon: <Receipt className="w-4 h-4" /> },
    { name: "Zion AI Customer Insights", path: "/zion-ai-customer-insights", icon: <Eye className="w-4 h-4" /> },
    { name: "Zion AI Voice Assistant Pro", path: "/zion-ai-voice-assistant-pro", icon: <Mic className="w-4 h-4" /> }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" }
  ];

  const supportLinks = [
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
    { name: "Documentation", path: "/docs" },
    { name: "Tutorials", path: "/tutorials" },
    { name: "Demo", path: "/demo" },
    { name: "Pricing", path: "/pricing" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Security", path: "/security" },
    { name: "Sitemap", path: "/sitemap" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-5 h-5" /> },
    { number: "10,000+", label: "Happy Clients", icon: <Users className="w-5 h-5" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-5 h-5" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400 mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm group"
                    >
                      <span className="group-hover:scale-110 transition-transform">{service.icon}</span>
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro SAAS Products */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">Micro SAAS</h3>
              <ul className="space-y-3">
                {microSaasProducts.map((product, index) => (
                  <li key={index}>
                    <Link
                      to={product.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors text-sm group"
                    >
                      <span className="group-hover:scale-110 transition-transform">{product.icon}</span>
                      <span>{product.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400 mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-green-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Support</h3>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-8 border-t border-gray-700/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-8 border-t border-gray-700/50">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates on our AI solutions, technology innovations, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
