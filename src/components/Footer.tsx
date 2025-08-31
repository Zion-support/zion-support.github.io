import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
  ArrowUp,
  Shield,
  Award,
  Users,
  Clock,
  Brain,
  Cpu,
  Cloud,
  Zap,
  Rocket,
  Building2,
  Heart,
  Star,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain },
        { name: 'IT & Digital Transformation', href: '/it-services', icon: Cpu },
        { name: 'Cloud & DevOps', href: '/services', icon: Cloud },
        { name: 'Cybersecurity', href: '/services', icon: Shield },
        { name: 'Micro SAAS Solutions', href: '/micro-saas', icon: Zap },
        { name: 'Emerging Technologies', href: '/emerging-tech', icon: Rocket }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: Star },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Building2 },
        { name: 'Retail & E-commerce', href: '/solutions/retail', icon: CheckCircle },
        { name: 'Government', href: '/solutions/government', icon: Shield },
        { name: 'Education', href: '/solutions/education', icon: Award }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Support Center', href: '/support' },
        { name: 'Training & Workshops', href: '/training' },
        { name: 'Blog & Insights', href: '/blog' },
        { name: 'Research & Development', href: '/research' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 302 464 0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    },
    {
      icon: Clock,
      text: '24/7 Global Support',
      href: '/support'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 group mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">Z</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </div>
                <div className="text-sm text-gray-400">Innovation Hub</div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of innovative AI, IT, and digital transformation solutions. 
              We help businesses leverage cutting-edge technology to achieve digital excellence 
              and competitive advantage in the modern marketplace.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                {section.title === 'Services' && <Brain className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title === 'Solutions' && <Rocket className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title === 'Company' && <Users className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title === 'Resources' && <Award className="w-5 h-5 text-cyan-400 mr-2" />}
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      {link.icon && (
                        <link.icon className="w-4 h-4 mr-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                      )}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your business with cutting-edge technology? 
                Contact us today for a free consultation and discover how we can 
                help you achieve your digital transformation goals.
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                      <contact.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Expert Team</h4>
                    <p className="text-sm text-gray-400">Certified professionals with deep industry expertise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Innovation First</h4>
                    <p className="text-sm text-gray-400">Cutting-edge solutions using latest technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Global Support</h4>
                    <p className="text-sm text-gray-400">24/7 support across all time zones</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Proven Results</h4>
                    <p className="text-sm text-gray-400">Track record of successful project delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</Link> | 
              <Link to="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</Link>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO 27001 Certified</span>
              <span>SOC 2 Type II Compliant</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </footer>
  );
};

export default Footer;