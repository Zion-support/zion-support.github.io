'use client';
import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },

    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Machine Learning', url: '/ai-machine-learning', description: 'Custom ML models' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image recognition' },
    { name: 'AI Voice & Speech', url: '/ai-voice-speech', description: 'Voice recognition' }
  ];
  const microSaasServices = [
    { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '100+ ready-to-use apps' },
    { name: 'AI-Powered CRM', url: '/ai-crm', description: 'Intelligent customer management' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Real-time business intelligence' },
    { name: 'AI Content Studio', url: '/ai-content-studio', description: 'Complete content creation' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Automated email campaigns' },
    { name: 'AI Mobile App Builder', url: '/ai-mobile-builder', description: 'Drag-and-drop app creation' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
    { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoice creation' },
    { name: 'AI Scheduling Assistant', url: '/ai-scheduling-assistant', description: 'Smart scheduling' },
    { name: 'AI Lead Scoring', url: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media automation' }
  ];
  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },

    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud solutions' },
    { name: 'Networking', url: '/networking', description: 'Network infrastructure' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'System Integration', url: '/system-integration', description: 'Seamless integration' },
    { name: 'Data Backup & Recovery', url: '/data-backup-recovery', description: 'Data protection' },
    { name: 'Performance Monitoring', url: '/performance-monitoring', description: 'System monitoring' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT planning' }
  ];
  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Robotics', url: '/robotics', description: 'Robotic solutions' }
  ];
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ];
  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'System Status', url: '/status' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];
  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    hours: 'Mon-Fri: 9AM-6PM EST'
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Micro SAAS</h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Specialized Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Specialized</h3>
            <ul className="space-y-2">
              {specializedServices.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Support</h3>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="w-4 h-4 mr-2" />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Reach</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;