'use client';

import React, { memo } from 'react';
import Link from 'next/link';
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
  Globe
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">AI Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/ai-automation" className="text-gray-300 hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link href="/ai-marketing" className="text-gray-300 hover:text-white transition-colors">AI Marketing</Link></li>
              <li><Link href="/ai-healthcare" className="text-gray-300 hover:text-white transition-colors">AI Healthcare</Link></li>
              <li><Link href="/ai-fintech" className="text-gray-300 hover:text-white transition-colors">AI Fintech</Link></li>
              <li><Link href="/ai-content-generation" className="text-gray-300 hover:text-white transition-colors">AI Content</Link></li>
            </ul>
          </div>

          {/* Micro SAAS */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Micro SAAS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">All Tools</Link></li>
              <li><Link href="/micro-saas#developer-tools" className="text-gray-300 hover:text-white transition-colors">Developer Tools</Link></li>
              <li><Link href="/micro-saas#marketing" className="text-gray-300 hover:text-white transition-colors">Marketing Tools</Link></li>
              <li><Link href="/micro-saas#analytics" className="text-gray-300 hover:text-white transition-colors">Analytics Tools</Link></li>
              <li><Link href="/micro-saas#productivity" className="text-gray-300 hover:text-white transition-colors">Productivity</Link></li>
              <li><Link href="/micro-saas#content-creation" className="text-gray-300 hover:text-white transition-colors">Content Creation</Link></li>
            </ul>
          </div>

          {/* Advanced Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Advanced Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quantum-computing" className="text-gray-300 hover:text-white transition-colors">Quantum Computing</Link></li>
              <li><Link href="/autonomous-systems" className="text-gray-300 hover:text-white transition-colors">Autonomous Systems</Link></li>
              <li><Link href="/blockchain" className="text-gray-300 hover:text-white transition-colors">Blockchain & Web3</Link></li>
              <li><Link href="/iot-edge" className="text-gray-300 hover:text-white transition-colors">IoT & Edge Computing</Link></li>
              <li><Link href="/robotics" className="text-gray-300 hover:text-white transition-colors">Robotics</Link></li>
              <li><Link href="/business-intelligence" className="text-gray-300 hover:text-white transition-colors">Business Intelligence</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:info@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-0.5" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Latest AI Innovations</h3>
              <p className="text-gray-300 mb-6">Get exclusive insights, product updates, and industry trends delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;