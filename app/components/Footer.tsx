import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Cloud,
  Wifi
} from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'AI Services', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
    { name: 'IT Services', href: '/it-services', icon: <Shield className="w-4 h-4" /> },
    { name: 'Micro SAAS', href: '/micro-saas-services', icon: <Zap className="w-4 h-4" /> },
    { name: 'Cloud Services', href: '/cloud-services', icon: <Cloud className="w-4 h-4" /> },
    { name: '5G Solutions', href: '/5g-implementation', icon: <Wifi className="w-4 h-4" /> },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: <Globe className="w-4 h-4" /> }
  ];

  const microSaasServices = [
    { name: 'AI Task Manager Pro', href: '/ai-task-manager-pro', price: '$19/month' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker-pro', price: '$15/month' },
    { name: 'AI Password Manager', href: '/ai-password-manager', price: '$12/month' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', price: '$25/month' },
    { name: 'AI Health Tracker', href: '/ai-health-tracker', price: '$18/month' },
    { name: 'AI Smart Calendar', href: '/ai-smart-calendar', price: '$22/month' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Twitter', href: '#', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-2xl font-bold">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Globe className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="https://ziontechgroup.com" className="hover:underline">https://ziontechgroup.com</a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.href} 
                      className="flex items-center text-gray-300 hover:text-white transition-colors group"
                    >
                      {service.icon}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro SAAS Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-pink-400">Micro SAAS</h3>
              <ul className="space-y-3">
                {microSaasServices.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.href} 
                      className="flex items-center justify-between text-gray-300 hover:text-white transition-colors group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                      <span className="text-pink-400 text-sm font-semibold">{service.price}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-purple-400">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-gray-300 hover:text-white transition-colors group flex items-center"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-6 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-gray-300">Get the latest updates on our AI services and new micro SAAS applications.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 w-full sm:w-80"
                  />
                  <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105">
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-300 text-sm mb-4 md:mb-0">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">https://ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-300">
                <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
