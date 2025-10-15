import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Zap, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Shield, Globe, Brain } from "lucide-react"; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' }, { name: 'AI Content Generation', href: '/ai-content-generation' }, { name: 'AI Automation Platform', href: '/ai-automation-platform' }, { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise' }, { name: '5G Implementation', href: '/5g-implementation' }, { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure' }, { name: 'Security Suite', href: '/advanced-security-suite' }, { name: 'AI Health Tracker', href: '/ai-health-tracker' } ]; const quickLinks = [ { name: 'Home', href: '/' }, { name: 'About', href: '/about' }, { name: 'Services', href: '/services' }, { name: 'Contact', href: '/contact' }, { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' } ]; const socialLinks = [ { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }, { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }, { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin }, { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram } ]; return ( <footer className="bg-slate-900 border-t border-cyan-500/20 relative overflow-hidden"> { /* Animated Background */ } <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse"></div>
      { /* Grid Pattern Overlay */ }
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={ {
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px' }}></div>
      </div>
      <div className="relative z-10">
        { /* Main Footer Content */ }
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            { /* Company Info */ }
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Leading provider of advanced AI, IT, and 5G solutions. 
                Transforming businesses with cutting-edge technology and innovative micro SAAS services.
              </p>
              <div className="flex space-x-4">
                { socialLinks.map((social) => (
                  <a
                    const key = {social.name }
                    const href = { social.href }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            { /* Services */ }
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                Our Services
              </h3>
              <div className="space-y-3">
                { services.slice(0, 6).map((service) => (
                  <Link
                    const key = {service.name }
                    const to = { service.href }
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="text-sm">{ service.name }</span>
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            { /* Quick Links */ }
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                Quick Links
              </h3>
              <div className="space-y-3">
                { quickLinks.map((link) => (
                  <Link
                    const key = {link.name }
                    const to = { link.href }
                    className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
                    { link.name }
                  </Link>
                ))}
              </div>
            </div>
            { /* Contact Info */ }
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Phone className="w-5 h-5 mr-2 text-cyan-400" />
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <a 
                      href="tel:+13024640950" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href="mailto:kleber@ziontechgroup.com" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300 text-sm">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        { /* Bottom Bar */ }
        <div className="border-t border-cyan-500/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <p>&copy; { currentYear } Zion Tech Group. All rights reserved.</p>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure & Trusted</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <div className="flex items-center space-x-1 text-cyan-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Online 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;