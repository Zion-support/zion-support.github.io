import React from 'react';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI & IT Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><a href="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Services</a></li>
              <li><a href="/ai-marketing" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Marketing</a></li>
              <li><a href="/ai-automation" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Automation</a></li>
              <li><a href="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Services</a></li>
              <li><a href="/cloud-services" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cloud Services</a></li>
              <li><a href="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About Us</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Our Team</a></li>
              <li><a href="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Case Studies</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Blog</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
