import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Github,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const services = {
  'AI Solutions': [
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
    { name: 'System Administration', href: '/it-services#system-administration' },
    { name: 'IT Consulting', href: '/it-services#it-consulting' }
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
  ]
};

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' }
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Documentation', href: '/docs' },
  { name: 'White Papers', href: '/whitepapers' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Help Center', href: '/help' },
  { name: 'FAQ', href: '/faq' }
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR', href: '/gdpr' },
  { name: 'Compliance', href: '/compliance' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI solutions, IT services, and micro SaaS applications. 
              We help businesses transform through innovative technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {Object.entries(services).map(([category, items]) => (
                <li key={category}>
                  <span className="text-gray-400 text-sm font-medium">{category}</span>
                  <ul className="mt-1 space-y-1">
                    {items.slice(0, 3).map((item, index) => (
                      <li key={index}>
                        <Link 
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}