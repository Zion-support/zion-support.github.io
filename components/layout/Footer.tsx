import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'Micro SaaS Solutions',
      services: [
        { name: 'AI Video Editor Pro', href: '/services/ai-video-editor' },
        { name: 'Smart Contract Auditor', href: '/services/smart-contract-auditor' },
        { name: 'AI Code Reviewer', href: '/services/ai-code-reviewer' },
        { name: 'AI Translation Platform', href: '/services/ai-translation-platform' },
        { name: 'AI Data Visualization', href: '/services/ai-data-visualization' },
        { name: 'AI Customer Insights', href: '/services/ai-customer-insights' },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation' },
        { name: 'AI Content Moderation SaaS', href: '/services/ai-content-moderation-saas' },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance' },
        { name: 'AI Personalization Engine', href: '/services/ai-personalization-engine' },
        { name: 'View All Micro SaaS', href: '/services/micro-saas' },
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Edge Computing Infrastructure', href: '/services/edge-computing-infrastructure' },
        { name: 'Blockchain Development', href: '/services/blockchain-development' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-architecture' },
        { name: '5G Network Deployment', href: '/services/5g-network-deployment' },
        { name: 'Hyperautomation Suite', href: '/services/hyperautomation-suite' },
        { name: 'Quantum-Ready Infrastructure', href: '/services/quantum-ready-infrastructure' },
        { name: 'AIOps Platform', href: '/services/aiops-platform' },
        { name: 'Cyber-Physical Systems', href: '/services/cyber-physical-systems' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin-platform' },
        { name: 'View All IT Services', href: '/services/it-services' },
      ]
    },
    {
      title: 'AI Services',
      services: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform' },
        { name: 'AI Drug Discovery', href: '/services/ai-drug-discovery' },
        { name: 'AI Climate Modeling', href: '/services/ai-climate-modeling' },
        { name: 'AI Space Exploration', href: '/services/ai-space-exploration' },
        { name: 'AI Neuroscience Research', href: '/services/ai-neuroscience-research' },
        { name: 'AI Robotics & Automation', href: '/services/ai-robotics-automation' },
        { name: 'AI Autonomous Systems', href: '/services/ai-autonomous-systems' },
        { name: 'AI Materials Science', href: '/services/ai-materials-science' },
        { name: 'AI Energy Optimization', href: '/services/ai-energy-optimization' },
        { name: 'View All AI Services', href: '/services/ai-services' },
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

        {/* Quick Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
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
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="/documentation" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="text-gray-300 hover:text-blue-400 transition-colors">API Reference</Link></li>
                <li><Link href="/status" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://facebook.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-2 text-blue-400">Newsletter</h5>
                <p className="text-gray-300 text-sm mb-3">Stay updated with our latest insights</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
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