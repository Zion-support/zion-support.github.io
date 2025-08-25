import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Brain, Zap, Shield, Building, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Star, CheckCircle, Clock, Users, Award } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      services: [
        { name: 'AI-Powered CRM', href: '/comprehensive-services#ai-powered-crm' },
        { name: 'Quantum Computing', href: '/comprehensive-services#quantum-computing-simulation' },
        { name: 'Edge AI Computing', href: '/comprehensive-services#edge-ai-computing' },
        { name: 'Machine Learning', href: '/comprehensive-services' },
      ]
    },
    {
      title: 'Emerging Technologies',
      services: [
        { name: 'Blockchain Solutions', href: '/comprehensive-services#blockchain-supply-chain' },
        { name: 'AR/VR Business', href: '/comprehensive-services#ar-vr-business-solutions' },
        { name: 'IoT Intelligence', href: '/comprehensive-services#iot-intelligence-hub' },
        { name: 'Edge Computing', href: '/comprehensive-services#edge-computing-platform' },
      ]
    },
    {
      title: 'Industry Solutions',
      services: [
        { name: 'Healthcare IT', href: '/comprehensive-services#healthcare-it-solutions' },
        { name: 'FinTech Solutions', href: '/comprehensive-services#fintech-solutions-pro' },
        { name: 'GreenTech Analytics', href: '/comprehensive-services#greentech-analytics' },
        { name: 'Manufacturing', href: '/comprehensive-services' },
      ]
    },
    {
      title: 'Core Services',
      services: [
        { name: 'Micro SAAS', href: '/micro-saas-services' },
        { name: 'IT Infrastructure', href: '/pricing' },
        { name: 'Cybersecurity', href: '/comprehensive-services#cybersecurity-sentinel' },
        { name: 'Consulting', href: '/pricing' },
      ]
    }
  ];

  const companyInfo = {
    name: 'Zion Tech Group',
    description: 'Leading provider of innovative micro SAAS, IT, and AI services helping businesses transform and scale in the digital age.',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com'
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  const achievements = [
    { icon: Star, text: '500+ Happy Clients' },
    { icon: CheckCircle, text: '99.9% Uptime' },
    { icon: Clock, text: '24/7 Support' },
    { icon: Users, text: '50+ Team Members' },
    { icon: Award, text: 'Industry Awards' }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{companyInfo.name}</h3>
                <p className="text-zion-cyan text-sm">Innovation • Excellence • Growth</p>
              </div>
            </div>
            <p className="text-zion-slate-light mb-6 max-w-md">
              {companyInfo.description}
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 text-zion-slate-light">
                    <Icon className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs">{achievement.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      to={service.href}
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-zion-blue-light/30 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-zion-slate-light">
                  <MapPin className="w-5 h-5 text-zion-cyan mt-0.5" />
                  <span>{companyInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-zion-slate-light">
                  <Globe className="w-5 h-5 text-zion-cyan" />
                  <a href={companyInfo.website} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    {companyInfo.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/micro-saas-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                    Micro SAAS Services
                  </Link>
                </li>
                <li>
                  <Link to="/comprehensive-services" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                    Comprehensive Services
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-zion-blue-light/20 hover:bg-zion-cyan rounded-lg flex items-center justify-center text-zion-slate-light hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-blue-light/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-zion-slate-light text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;