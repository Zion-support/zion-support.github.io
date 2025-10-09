'use client';
import React, { useState, useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Youtube, Github, Zap, Brain, Cpu, Shield, Cloud, Database, Code, Settings, Users, BarChart, MessageSquare, Eye, Sparkles, CheckCircle, Star, Award, Lock, Globe, TrendingUp } from 'lucide-react';

const FuturisticFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  }, [email]);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'footer_phone'
      });
    }
  }, []);

  const footerSections = [
    {
      title: 'AI Services',
      links: [
        { label: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
        { label: 'AI Automation', href: '/ai-automation', icon: Zap },
        { label: 'AI Customer Support', href: '/ai-customer-support', icon: MessageSquare },
        { label: 'AI Data Visualization', href: '/ai-data-visualization', icon: Eye },
        { label: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
        { label: 'AI Project Manager', href: '/ai-project-manager', icon: Settings },
        { label: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Users },
        { label: 'AI Video Generation', href: '/ai-video-generation', icon: Sparkles }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { label: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
        { label: 'IT Consulting', href: '/it-consulting', icon: Settings },
        { label: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { label: 'Database Services', href: '/database-services', icon: Database },
        { label: 'DevOps & CI/CD', href: '/devops', icon: Code },
        { label: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
        { label: 'System Monitoring', href: '/system-monitoring', icon: Eye },
        { label: 'Backup & Recovery', href: '/backup-recovery', icon: Lock }
      ]
    },
    {
      title: 'Micro SAAS',
      links: [
        { label: 'AI CRM', href: '/ai-crm', icon: Users },
        { label: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart },
        { label: 'AI Content Studio', href: '/ai-content-studio', icon: Code },
        { label: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
        { label: 'AI Scheduler', href: '/ai-scheduler', icon: Settings },
        { label: 'AI SEO Optimizer', href: '/ai-seo-optimizer', icon: Eye },
        { label: 'AI Lead Generation', href: '/ai-lead-generation', icon: TrendingUp },
        { label: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: BarChart }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about', icon: Users },
        { label: 'Our Team', href: '/team', icon: Users },
        { label: 'Careers', href: '/careers', icon: Briefcase },
        { label: 'Case Studies', href: '/case-studies', icon: BarChart },
        { label: 'Blog', href: '/blog', icon: MessageSquare },
        { label: 'News', href: '/news', icon: MessageSquare },
        { label: 'Contact', href: '/contact', icon: Mail },
        { label: 'Support', href: '/support', icon: MessageSquare }
      ]
    }
  ];

  const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { label: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { label: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                  Zion Tech Group
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading provider of AI-powered enterprise solutions, quantum computing, 
                  autonomous systems, and digital transformation services. Transform your 
                  business with cutting-edge technology and achieve unprecedented growth.
                </p>
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="cyber-card p-4 text-center">
                    <div className="text-2xl font-bold text-cyan-400 neon-text">$50M+</div>
                    <div className="text-sm text-gray-300">Annual Savings</div>
                  </div>
                  <div className="cyber-card p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400 neon-text">300%</div>
                    <div className="text-sm text-gray-300">Average ROI</div>
                  </div>
                  <div className="cyber-card p-4 text-center">
                    <div className="text-2xl font-bold text-pink-400 neon-text">95%</div>
                    <div className="text-sm text-gray-300">Process Automation</div>
                  </div>
                  <div className="cyber-card p-4 text-center">
                    <div className="text-2xl font-bold text-green-400 neon-text">24/7</div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  kleber@ziontechgroup.com
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5" />
                  Mon-Fri: 9AM-6PM EST
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-1">
                <h4 className="text-lg font-semibold text-white mb-4 neon-text">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                      >
                        <link.icon className="w-4 h-4 group-hover:text-cyan-400" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-cyan-500/20">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-2xl font-bold text-white mb-4 neon-text">
                Stay Updated with AI Innovations
              </h4>
              <p className="text-gray-300 mb-6">
                Get the latest insights on AI technology, industry trends, and exclusive offers.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
                <button
                  type="submit"
                  className="cyber-button px-6 py-3 font-semibold"
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
              
              {isSubscribed && (
                <div className="mt-4 text-green-400 flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Thank you for subscribing!
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-cyan-500/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6">
                <span className="text-gray-300 font-medium">Follow Us:</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="/privacy" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-slate-950 border-t border-cyan-500/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Powered by</span>
                <span className="text-cyan-400 font-semibold">AI Innovation</span>
                <Zap className="w-4 h-4 text-cyan-400" />
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;