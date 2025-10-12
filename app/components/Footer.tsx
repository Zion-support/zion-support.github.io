import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Zap, 
  Brain, 
  Cloud, 
  Code, 
  Wifi,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle,
  Star,
  Shield,
  Clock
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'AI Services', path: '/ai-services' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Micro SaaS', path: '/micro-saas' },
    { name: '5G Solutions', path: '/5g-implementation' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Cloud Infrastructure', path: '/cloud-services' }
  ]

  const company = [
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Support', path: '/support' }
  ]

  const resources = [
    { name: 'Documentation', path: '/docs' },
    { name: 'API Reference', path: '/api' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'White Papers', path: '/whitepapers' },
    { name: 'Webinars', path: '/webinars' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/ziontechgroup' }
  ]

  const features = [
    { icon: <Shield className="w-5 h-5 text-green-400" />, text: 'Enterprise Security' },
    { icon: <Clock className="w-5 h-5 text-blue-400" />, text: '24/7 Support' },
    { icon: <Star className="w-5 h-5 text-yellow-400" />, text: '99.9% Uptime' },
    { icon: <CheckCircle className="w-5 h-5 text-purple-400" />, text: 'SLA Guaranteed' }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading the future of technology with cutting-edge AI solutions, innovative micro SaaS services, 
              and comprehensive digital transformation solutions.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {feature.icon}
                  <span className="text-gray-300 text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Brain className="w-5 h-5 text-blue-400 mr-2" />
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Globe className="w-5 h-5 text-green-400 mr-2" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 text-purple-400 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link 
                    to={resource.path}
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-cyan-500/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
                >
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Address</h4>
                <p className="text-cyan-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-cyan-500/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-lg font-semibold text-white mb-4">Visit Our Website</h3>
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 transition-colors duration-300 flex items-center justify-center md:justify-end group"
              >
                <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
