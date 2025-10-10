'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Zap, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Github, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  CheckCircle,
  Home,
  Info,
  DollarSign,
  FileText,
  Briefcase,
  Settings,
  Sparkles
} from 'lucide-react';

const FuturisticFooter: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: MessageSquare }
  ];

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      services: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Fintech', href: '/ai-fintech' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      services: [
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps', href: '/devops' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Services', href: '/network-services' },
        { name: 'Web Development', href: '/web-development' },
        { name: 'Mobile Development', href: '/mobile-development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      services: [
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Social Scheduler', href: '/ai-social-scheduler' },
        { name: 'AI Invoice Generator', href: '/ai-invoice-generator' },
        { name: 'AI Expense Tracker', href: '/ai-expense-tracker' },
        { name: 'AI Password Manager', href: '/ai-password-manager' },
        { name: 'AI Email Assistant', href: '/ai-email-assistant' },
        { name: 'AI Project Manager', href: '/ai-project-manager' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      services: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
        { name: 'Support', href: '/support' },
        { name: 'Privacy Policy', href: '/privacy' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup', color: 'hover:text-cyan-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/ziontechgroup', color: 'hover:text-red-400' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup', color: 'hover:text-gray-400' }
  ];

  const achievements = [
    { icon: Award, text: '500+ Successful Projects', color: 'text-yellow-400' },
    { icon: Users, text: '99% Client Satisfaction', color: 'text-green-400' },
    { icon: TrendingUp, text: '300% Average ROI', color: 'text-cyan-400' },
    { icon: Shield, text: 'ISO 27001 Certified', color: 'text-blue-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-400/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white neon-text">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions and digital transformation services. 
              We help businesses achieve 300% ROI with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:+13024640950" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>+1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>kleber@ziontechgroup.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors hover:scale-110 transform`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center space-x-2 mb-6">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors group flex items-center"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform"
              >
                <achievement.icon className={`w-8 h-8 mx-auto mb-2 ${achievement.color}`} />
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff;
        }
      `}</style>
    </footer>
  );
});

FuturisticFooter.displayName = 'FuturisticFooter';

export default FuturisticFooter;