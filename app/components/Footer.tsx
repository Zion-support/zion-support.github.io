'use client';
import React, { useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Facebook, Twitter, Linkedin, Instagram, Youtube, Github } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'footer_phone'
      });
    }
  }, []);

  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'footer_email'
      });
    }
  }, []);

  const footerSections = [
    {
      title: 'AI Services',
      links: [
        { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
        { name: 'AI Automation', href: '/ai-automation', icon: Settings },
        { name: 'AI Customer Support', href: '/ai-customer-support', icon: Users },
        { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: PieChart },
        { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: Target },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Globe },
        { name: 'AI Video Generation', href: '/ai-video-generation', icon: Video }
      ]
    },
    {
      title: 'IT Solutions',
      links: [
        { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'DevOps', href: '/devops', icon: Settings },
        { name: 'Database Services', href: '/database-services', icon: Database },
        { name: 'Network Security', href: '/network-security', icon: Lock },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users },
        { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
        { name: 'Web Development', href: '/web-development', icon: Code }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Award },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart },
        { name: 'Partners', href: '/partners', icon: Handshake },
        { name: 'Investors', href: '/investors', icon: TrendingUp }
      ]
    }
  ];

  return (
    <footer className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI and technology solutions that transform businesses 
              and drive digital innovation across industries.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                    >
                      <link.icon className="w-4 h-4 mr-2 group-hover:text-purple-400" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a
                  href="tel:+1234567890"
                  onClick={handlePhoneClick}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:info@ziontechgroup.com"
                  onClick={handleEmailClick}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  info@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-purple-400 mr-3" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;