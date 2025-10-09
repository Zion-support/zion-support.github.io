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
      title: 'IT Services',
      links: [
        { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
        { name: 'IT Consulting', href: '/it-consulting', icon: Users },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Database Management', href: '/database-management', icon: Database },
        { name: 'System Integration', href: '/system-integration', icon: Settings },
        { name: 'Network Security', href: '/network-security', icon: Lock }
      ]
    },
    {
      title: 'Industry Solutions',
      links: [
        { name: 'Healthcare AI', href: '/ai-healthcare', icon: Stethoscope },
        { name: 'Fintech AI', href: '/ai-fintech', icon: CreditCard },
        { name: 'Manufacturing AI', href: '/ai-manufacturing', icon: Factory },
        { name: 'Retail AI', href: '/ai-retail', icon: ShoppingCart },
        { name: 'Education AI', href: '/ai-education', icon: GraduationCap },
        { name: 'Transportation AI', href: '/ai-transportation', icon: Car }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', icon: Building },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: MessageSquare },
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: BookOpen }
      ]
    }
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
    <footer className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white cyber-text neon-text">
                  Zion Tech Group
                </h3>
                <p className="text-cyan-400 font-medium">
                  AI & IT Solutions
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
              and digital transformation services. Transform your business with cutting-edge technology 
              and achieve unprecedented growth.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 neon-text">300%</div>
                <div className="text-sm text-gray-300">Average ROI</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 neon-text">95%</div>
                <div className="text-sm text-gray-300">Process Automation</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-pink-400 neon-text">$50M+</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <div className="cyber-card p-4 text-center">
                <div className="text-2xl font-bold text-green-400 neon-text">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1 (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                onClick={handleEmailClick}
                className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold text-white mb-4 neon-text">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-cyan-400/20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4 neon-text">
              Stay Updated with AI Innovations
            </h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights, case studies, and AI breakthroughs delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
              <button className="cyber-button px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-cyan-400/20 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="/terms" className="hover:text-cyan-400 transition-colors ml-1">Terms of Service</a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;