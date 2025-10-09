'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const Footer: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      services: [
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { name: 'AI Fintech', href: '/ai-fintech' },
        { name: 'AI Healthcare', href: '/ai-healthcare' },
        { name: 'AI Marketing', href: '/ai-marketing' },
        { name: 'AI Automation', href: '/ai-automation' },
        { name: 'AI Analytics', href: '/ai-analytics' },
        { name: 'AI Customer Support', href: '/ai-customer-support' }
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'IT Consulting', href: '/it-consulting' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Database Services', href: '/database-services' },
        { name: 'Network Services', href: '/network-services' }
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'AI Code Review Assistant', href: '/ai-code-review' },
        { name: 'AI SEO Optimizer', href: '/ai-seo-optimizer' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { name: 'AI Document Processing', href: '/ai-document-processing' },
        { name: 'AI Content Generator', href: '/ai-content-generator' }
      ]
    },
    {
      title: 'Company',
      services: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Support', href: '/support' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services. Transform your 
              business with cutting-edge technology.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                <div className="text-gray-300">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>24/7 Emergency Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h4 className="text-lg font-semibold text-white mb-6">{category.title}</h4>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <h4 className="text-xl font-semibold text-white mb-8 text-center">Why Choose Zion Tech Group?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Proven ROI</h5>
              <p className="text-gray-300 text-sm">Average 300% ROI with measurable business impact</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Enterprise Security</h5>
              <p className="text-gray-300 text-sm">Bank-level security and compliance for all solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">24/7 Support</h5>
              <p className="text-gray-300 text-sm">Round-the-clock support and monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Expert Team</h5>
              <p className="text-gray-300 text-sm">World-class engineers and data scientists</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get the latest AI and technology insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;