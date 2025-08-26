import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  Zap,
  Shield,
  Cloud,
  Brain,
  Code,
  Database,
  Globe,
  Smartphone,
  Cpu,
  Lock
} from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerNavigation = {
    services: [
      { name: 'AI & Machine Learning', href: '/services/ai', icon: Brain },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Cloud Services', href: '/services/cloud', icon: Cloud },
      { name: 'Web Development', href: '/services/web', icon: Code },
      { name: 'Data Analytics', href: '/services/analytics', icon: Database },
      { name: 'Mobile Apps', href: '/services/mobile', icon: Smartphone },
      { name: 'IoT Solutions', href: '/services/iot', icon: Cpu },
      { name: 'Digital Transformation', href: '/services/consulting', icon: Zap }
    ],
    microSaas: [
      { name: 'AI Content Generator', href: '/services/ai-content', price: '$29/month' },
      { name: 'Smart Analytics Dashboard', href: '/services/analytics-dashboard', price: '$99/month' },
      { name: 'Automated Marketing Suite', href: '/services/marketing-suite', price: '$49/month' },
      { name: 'Project Management Pro', href: '/services/project-management', price: '$39/month' },
      { name: 'Customer Support AI', href: '/services/support-ai', price: '$79/month' },
      { name: 'Financial Planning Tool', href: '/services/financial-tool', price: '$59/month' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'Press & Media', href: '/press' },
      { name: 'Investor Relations', href: '/investors' }
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Developer Tools', href: '/dev-tools' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Training Programs', href: '/training' },
      { name: 'Research & Development', href: '/research' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/support' },
      { name: 'System Status', href: '/status' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Knowledge Base', href: '/knowledge-base' },
      { name: 'Video Tutorials', href: '/tutorials' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-600' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-500' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark border-t border-zion-cyan/30 pt-16 pb-8 relative overflow-hidden futuristic-bg">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-zion-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }} 
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </motion.div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-sm leading-relaxed">
              Leading provider of innovative micro SAAS services, AI solutions, and cutting-edge technology services. 
              Empowering businesses worldwide with intelligent, scalable, and cost-effective solutions.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Mail className="w-4 h-4 text-zion-cyan"/>
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors">
                <Phone className="w-4 h-4 text-zion-cyan"/>
                <a href="tel:+13024640950" className="text-sm">+1 302 464 0950</a>
              </div>
              <div className="flex items-center gap-3 text-zion-slate-light">
                <MapPin className="w-4 h-4 text-zion-cyan"/>
                <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-zion-slate-light transition-all duration-300 ${social.color} hover:border-zion-cyan/50 hover:bg-slate-700/50`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-zion-cyan mr-2" />
              Core Services
            </h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm flex items-center group"
                    >
                      <IconComponent className="w-4 h-4 mr-2 text-zion-cyan/60 group-hover:text-zion-cyan transition-colors" />
                      {service.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Micro SAAS Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-zion-purple mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {footerNavigation.microSaas.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="group-hover:text-zion-cyan transition-colors">{service.name}</span>
                      <span className="text-zion-cyan text-xs font-medium">{service.price}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-zion-blue mr-2" />
              Company
            </h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-4 mt-6 flex items-center">
              <Database className="w-5 h-5 text-zion-cyan mr-2" />
              Resources
            </h3>
            <ul className="space-y-2">
              {footerNavigation.resources.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-zion-purple mr-2" />
              Support
            </h3>
            <ul className="space-y-2">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold text-white mb-4 mt-6 flex items-center">
              <Lock className="w-5 h-5 text-zion-blue mr-2" />
              Legal
            </h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-slate-700/50 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated with Zion Tech Group</h3>
            <p className="text-zion-slate-light mb-4">Get the latest insights on AI, technology trends, and exclusive offers</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 focus:outline-none transition-all duration-300"
              />
              <button className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-zion-slate-light text-sm mb-4 md:mb-0">
            <span>© 2027 Zion Tech Group. All rights reserved.</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
            <span>Made with cutting-edge technology</span>
            <span>•</span>
            <span>Powered by AI</span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-full shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
