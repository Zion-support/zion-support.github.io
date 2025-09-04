import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Brain,
  Network,
  Cloud,
  Shield,
  Users,
  Globe,
  Settings,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Youtube
} from 'lucide-react';

const services = {
  'AI Solutions': [
    { name: 'AI Content Generator', href: '/services/ai-content-generator' },
    { name: 'Predictive Analytics', href: '/services/predictive-analytics-platform' },
    { name: 'Computer Vision', href: '/services/computer-vision-solutions' },
    { name: 'Natural Language Processing', href: '/services/natural-language-processing' },
    { name: 'AI-Powered CRM', href: '/services/ai-powered-crm' },
    { name: 'Voice Assistant Development', href: '/services/voice-assistant-development' }
  ],
  'IT Services': [
    { name: 'Cloud Migration', href: '/services/cloud-migration-and-cost-optimization' },
    { name: 'Security Hardening', href: '/services/security-hardening-and-audits' },
    { name: 'Zero Trust Security', href: '/services/zero-trust-security-implementation' },
    { name: 'Disaster Recovery', href: '/services/disaster-recovery-planning' },
    { name: 'Managed IT Support', href: '/services/managed-it-support' },
    { name: 'Network Optimization', href: '/services/network-optimization' }
  ],
  'Micro SaaS': [
    { name: 'AI Chatbot', href: '/services/ai-chatbot-for-support' },
    { name: 'Lead Scraper', href: '/services/lead-scraper-and-enrichment' },
    { name: 'Customer Support Platform', href: '/services/customer-support-platform' },
    { name: 'Event Management', href: '/services/event-management-dashboard' },
    { name: 'E-commerce Returns', href: '/services/ecommerce-return-management' },
    { name: 'AI Talent Matching', href: '/services/ai-talent-matching' }
  ]
};

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/about#team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'News', href: '/news' }
];

const resources = [
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-docs' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Guides', href: '/guides' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Support', href: '/support' }
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Security', href: '/security' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Sitemap', href: '/sitemap' }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className="text-xs text-gray-400">Technology Solutions</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in AI, cloud services, 
              and digital transformation. Empowering businesses with innovative technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              Services
            </h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">{category}</h4>
                  <ul className="space-y-2">
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-400" />
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Get the latest technology insights and company updates delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Delaware, United States</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Certified & Compliant</span>
              <span>•</span>
              <span>SOC 2 Type II</span>
              <span>•</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}