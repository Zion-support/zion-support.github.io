import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  Sparkles,
  ArrowRight,
  Brain,
  Server,
  Smartphone,
  Cloud,
  Database,
  Zap
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Server className="w-4 h-4" /> },
    { name: 'Micro SAAS', href: '/micro-saas-services', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Cloud Services', href: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G Implementation', href: '/5g-implementation', icon: <Database className="w-4 h-4" /> },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: <Zap className="w-4 h-4" /> }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Blog', href: '/blog' }
  ]

  const aiServices = [
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
    { name: 'AI Automation Suite', href: '/ai-automation' }
  ]

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd' },
    { name: 'Data Analytics', href: '/data-analytics' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'Blockchain Solutions', href: '/blockchain' }
  ]

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
                Transforming the future with cutting-edge technology.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-purple-300 transition-colors">
                  <Phone className="w-4 h-4 mr-3" />
                  <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-purple-300 transition-colors">
                  <Mail className="w-4 h-4 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="flex items-center text-gray-300 hover:text-purple-300 transition-colors group"
                  >
                    {service.icon}
                    <span className="ml-2 text-sm group-hover:translate-x-1 transition-transform">{service.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">AI Services</h3>
              <div className="space-y-3">
                {aiServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block text-gray-300 hover:text-purple-300 transition-colors text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">IT Services</h3>
              <div className="space-y-3">
                {itServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.href}
                    className="block text-gray-300 hover:text-purple-300 transition-colors text-sm group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 inline opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest AI and IT insights, tips, and exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-lg"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="https://facebook.com/ziontechgroup"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/ziontechgroup"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/ziontechgroup"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/ziontechgroup"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/ziontechgroup"
                  className="text-gray-300 hover:text-purple-300 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-gray-300 hover:text-purple-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <p className="mt-2 md:mt-0">
                Made with ❤️ for the future of technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
