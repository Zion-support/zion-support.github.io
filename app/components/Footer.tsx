import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      items: [
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Content', href: '/ai-content' },
        { name: 'AI Support', href: '/ai-support' }
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Network Solutions', href: '/network-solutions' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' }
      ]
    },
    {
      category: 'Micro SAAS',
      icon: Zap,
      color: 'text-yellow-400',
      items: [
        { name: 'Project Management', href: '/ai-project-manager' },
        { name: 'Social Media', href: '/ai-social-media-manager' },
        { name: 'Email Marketing', href: '/ai-email-marketing' },
        { name: 'Content Creation', href: '/ai-content-generator' },
        { name: 'Analytics Dashboard', href: '/ai-analytics-dashboard' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const companyLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions, IT consulting, and innovative technology services for businesses worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index}>
                  <div className="flex items-center mb-3">
                    <service.icon className={`w-4 h-4 ${service.color} mr-2`} />
                    <h4 className="text-sm font-semibold text-white">{service.category}</h4>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          to={item.href}
                          className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;