'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Phone, Mail, MapPin, ArrowRight, Globe, Shield, Zap, BarChart3, Users, Settings, Star, ExternalLink, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                <Brain className="w-7 h-7 text-white relative z-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white neon-text-enhanced">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-cyan-400 group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <a href="tel:+13024640950" className="text-sm hover:text-cyan-300 transition-colors">+1 (302) 464-0950</a>
              </div>
              <div className="flex items-center space-x-3 text-cyan-400 group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm hover:text-cyan-300 transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 group">
                <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
              <a href="https://github.com/ziontechgroup" className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
              <a href="https://youtube.com/@ziontechgroup" className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h4 className="text-lg font-semibold text-cyan-400 mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h4>
            <ul className="space-y-3">
              <li><Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI Solutions
              </Link></li>
              <li><Link to="/ai-automation" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI Automation
              </Link></li>
              <li><Link to="/ai-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI Analytics
              </Link></li>
              <li><Link to="/ai-cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                AI Security
              </Link></li>
              <li><Link to="/ai-content-generation" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Content Generation
              </Link></li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-semibold text-purple-400 mb-6 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h4>
            <ul className="space-y-3">
              <li><Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                IT Solutions
              </Link></li>
              <li><Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Cloud Infrastructure
              </Link></li>
              <li><Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Cybersecurity
              </Link></li>
              <li><Link to="/devops" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                DevOps
              </Link></li>
              <li><Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Data Analytics
              </Link></li>
            </ul>
          </div>

          {/* Micro SaaS */}
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Micro SaaS
            </h4>
            <ul className="space-y-3">
              <li><Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                All Tools
              </Link></li>
              <li><Link to="/analytics-tools" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Analytics Tools
              </Link></li>
              <li><Link to="/productivity-tools" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Productivity Tools
              </Link></li>
              <li><Link to="/automation-tools" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Automation Tools
              </Link></li>
              <li><Link to="/business-tools" className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group">
                <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                Business Tools
              </Link></li>
            </ul>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pt-8 border-t border-gray-700">
          <div>
            <h4 className="text-lg font-semibold text-pink-400 mb-6 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Resources
            </h4>
            <ul className="space-y-3">
              <li><Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors">Tutorials</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/documentation" className="text-gray-300 hover:text-cyan-400 transition-colors">Documentation</Link></li>
              <li><Link to="/api-docs" className="text-gray-300 hover:text-cyan-400 transition-colors">API Docs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">Our Team</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-cyan-400 transition-colors">Partners</Link></li>
              <li><Link to="/investors" className="text-gray-300 hover:text-cyan-400 transition-colors">Investors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-orange-400 mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Support
            </h4>
            <ul className="space-y-3">
              <li><Link to="/support" className="text-gray-300 hover:text-cyan-400 transition-colors">Support Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors">Request Demo</Link></li>
              <li><Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors">Free Consultation</Link></li>
              <li><Link to="/status" className="text-gray-300 hover:text-cyan-400 transition-colors">System Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-red-400 mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Legal
            </h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-300 hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="text-gray-300 hover:text-cyan-400 transition-colors">GDPR Compliance</Link></li>
              <li><Link to="/security" className="text-gray-300 hover:text-cyan-400 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 mb-12 border border-cyan-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Latest AI & IT Trends</h3>
            <p className="text-gray-300 mb-6">Get exclusive insights, product updates, and industry news delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Made with ❤️ in Delaware, USA</span>
                <span>•</span>
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>SOC 2 Type II</span>
              </div>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Terms</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Cookies</Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
