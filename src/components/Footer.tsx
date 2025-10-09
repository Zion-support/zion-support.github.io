'use client';
import React, { useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Atom, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  // Handle phone click analytics
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'footer',
        event_label: 'footer_phone'
      });
    }
  }, []);

  const currentYear = new Date().getFullYear();

  const services = [
    {
      category: 'AI Services',
      items: [
        { name: 'AI Project Manager', href: '/ai-project-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Code Generator', href: '/ai-code-generation' },
        { name: 'AI Video Generator', href: '/ai-video-generation' },
        { name: 'AI Voice Cloning', href: '/ai-voice-cloning' },
        { name: 'AI Fashion Design', href: '/ai-fashion-design' },
        { name: 'AI Music Composer', href: '/ai-music-composition' },
        { name: 'AI Fitness Coach', href: '/ai-fitness-coach' }
      ]
    },
    {
      category: 'IT Solutions',
      items: [
        { name: 'Cloud Services', href: '/cloud-services' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Services', href: '/database-services' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' },
        { name: 'IT Support', href: '/it-support' },
        { name: 'Data Analytics', href: '/data-analytics' },
        { name: 'Mobile Development', href: '/mobile-development' }
      ]
    },
    {
      category: 'Micro SAAS',
      items: [
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Data Visualization', href: '/ai-data-visualization' },
        { name: 'AI 3D Generation', href: '/ai-3d-generation' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Status Page', href: '/status' },
    { name: 'System Status', href: '/system-status' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 border-t border-cyan-500/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">ZION TECH GROUP</div>
                <div className="text-sm text-gray-400">AI & IT Solutions</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions and digital transformation services. 
              We deliver real, innovative solutions that drive measurable results with 300% ROI, 
              70% cost reduction, and 90% efficiency gains.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-cyan-400" />
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="text-white hover:text-cyan-400 transition-colors duration-300"
                >
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MailIcon className="w-5 h-5 text-purple-400" />
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Location className="w-5 h-5 text-pink-400 mt-1" />
                <div className="text-white">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-400" />
                <div className="text-white">
                  <div>24/7 Support Available</div>
                  <div className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index}>
                  <h5 className="text-cyan-400 font-medium mb-3">{service.category}</h5>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6 mt-8">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & CTA */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get the latest AI and IT insights, tips, and exclusive offers delivered to your inbox.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-r-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              
              <div className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-4">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg text-center hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Visit Website
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Secure & Compliant</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-medium">Award-Winning Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">500+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/20 bg-slate-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="tel:+13024640950"
          onClick={handlePhoneClick}
          className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse"
          aria-label="Call us now"
        >
          <PhoneIcon className="w-8 h-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;