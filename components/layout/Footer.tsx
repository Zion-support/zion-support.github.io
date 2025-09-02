import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'Micro SaaS',
      services: [
        { name: 'AI Email Responder Pro', href: '/services/ai-email-responder' },
        { name: 'Mobile Survey Platform', href: '/services/mobile-survey-platform' },
        { name: 'E-Commerce Return Management', href: '/services/ecommerce-return-management' },
        { name: 'Automated Email Follow-up', href: '/services/automated-email-followup' },
        { name: 'Customer Support Helpdesk', href: '/services/customer-support-helpdesk' },
        { name: 'AI Content Creation Tool', href: '/services/ai-content-creation-tool' },
        { name: 'Appointment Scheduler for Hospitals', href: '/services/appointment-scheduler-hospitals' },
        { name: 'Learning Management Software', href: '/services/learning-management-software' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'Social Media Scheduler', href: '/services/social-media-scheduler' },
        { name: 'Email Marketing Automation', href: '/services/email-marketing-automation' },
        { name: 'Invoice Management System', href: '/services/invoice-management-system' },
        { name: 'Time Tracking & Productivity', href: '/services/time-tracking-productivity' },
        { name: 'CRM & Sales Pipeline', href: '/services/crm-sales-pipeline' },
        { name: 'Appointment Booking System', href: '/services/appointment-booking-system' },
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Quantum Security Solutions', href: '/services/quantum-security-solutions' },
        { name: 'Autonomous Systems Development', href: '/services/autonomous-systems-development' },
        { name: 'Metaverse Development Platform', href: '/services/metaverse-development' },
        { name: 'IoT Ecosystem Management', href: '/services/iot-ecosystem-management' },
        { name: 'Edge Computing Solutions', href: '/services/edge-computing-solutions' },
        { name: 'Blockchain Infrastructure', href: '/services/blockchain-infrastructure' },
        { name: 'Zero Trust Security', href: '/services/zero-trust-security' },
        { name: '5G Network Implementation', href: '/services/5g-network-implementation' },
        { name: 'Hyperautomation Platform', href: '/services/hyperautomation-platform' },
        { name: 'Cloud Migration Expert', href: '/services/cloud-migration' },
        { name: 'Multi-Cloud Strategy', href: '/services/multi-cloud-strategy' },
        { name: 'Container Orchestration', href: '/services/container-orchestration' },
        { name: 'Serverless Architecture', href: '/services/serverless-architecture' },
        { name: 'Network Security Audit', href: '/services/network-security-audit' },
        { name: 'Database Optimization', href: '/services/database-optimization' },
      ]
    },
    {
      title: 'AI Services',
      services: [
        { name: 'AI Ethical Governance Platform', href: '/services/ai-ethical-governance' },
        { name: 'AI Sustainability Optimization', href: '/services/ai-sustainability-optimization' },
        { name: 'AI Personalized Medicine', href: '/services/ai-personalized-medicine' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection' },
        { name: 'AI Drug Discovery Platform', href: '/services/ai-drug-discovery' },
        { name: 'AI Climate Modeling', href: '/services/ai-climate-modeling' },
        { name: 'AI Space Exploration', href: '/services/ai-space-exploration' },
        { name: 'AI Neuroscience Research', href: '/services/ai-neuroscience-research' },
        { name: 'AI Robotics & Automation', href: '/services/ai-robotics-automation' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading' },
        { name: 'Custom AI Models', href: '/services/custom-ai-models' },
        { name: 'Computer Vision Solutions', href: '/services/computer-vision-solutions' },
        { name: 'Natural Language Processing', href: '/services/natural-language-processing' },
        { name: 'Predictive Analytics Platform', href: '/services/predictive-analytics-platform' },
        { name: 'AI Recommendation Engine', href: '/services/ai-powered-recommendation-engine' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">{category.title}</h3>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links & Additional Info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
                <li><Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link href="/case-studies" className="text-gray-300 hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link href="/whitepapers" className="text-gray-300 hover:text-blue-400 transition-colors">Whitepapers</Link></li>
                <li><Link href="/webinars" className="text-gray-300 hover:text-blue-400 transition-colors">Webinars</Link></li>
                <li><Link href="/training" className="text-gray-300 hover:text-blue-400 transition-colors">Training</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="/documentation" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="text-gray-300 hover:text-blue-400 transition-colors">API Reference</Link></li>
                <li><Link href="/status" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-blue-400 transition-colors">24/7 Support</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Pricing Plans</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300 text-sm">Micro SaaS: $5 - $249/month</span></li>
                <li><span className="text-gray-300 text-sm">IT Services: $2K - $500K</span></li>
                <li><span className="text-gray-300 text-sm">AI Services: $5K - $2M</span></li>
                <li><Link href="/pricing" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">View All Pricing →</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="Twitter">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              
              {/* Newsletter Signup */}
              <div>
                <h5 className="text-sm font-semibold mb-2 text-blue-400">Newsletter</h5>
                <p className="text-gray-300 text-sm mb-3">Stay updated with our latest insights</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 text-sm"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;