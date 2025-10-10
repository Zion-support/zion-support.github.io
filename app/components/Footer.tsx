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

  const handleSocialClick = useCallback((platform: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'social_click', {
        event_category: 'engagement',
        event_label: `footer_${platform}`
      });
    }
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-slate-900 border-t border-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick('facebook')}
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
              <button
                onClick={() => handleSocialClick('twitter')}
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
              <button
                onClick={() => handleSocialClick('linkedin')}
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
              <button
                onClick={() => handleSocialClick('github')}
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/ai-services" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  AI Services
                </a>
              </li>
              <li>
                <a href="/it-services" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  IT Services
                </a>
              </li>
              <li>
                <a href="/cloud-migration" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Cloud Migration
                </a>
              </li>
              <li>
                <a href="/cybersecurity" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="/digital-transformation" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="tel:+1-302-464-0950"
                  onClick={handlePhoneClick}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                  <div>United States</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>24/7 Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;