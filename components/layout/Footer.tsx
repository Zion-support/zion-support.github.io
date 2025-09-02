import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'Micro SaaS',
      services: [
        { name: 'AI Video Editor Pro', href: '/services/ai-video-editor' },
        { name: 'Smart Contract Auditor', href: '/services/smart-contract-auditor' },
        { name: 'AI Code Reviewer', href: '/services/ai-code-reviewer' },
        { name: 'AI Translation Platform', href: '/services/ai-translation-platform' },
        { name: 'AI Data Visualization', href: '/services/ai-data-visualization' },
        { name: 'AI Voice Cloning Studio', href: '/services/ai-voice-cloning' },
        { name: 'AI 3D Model Generator', href: '/services/ai-3d-model-generator' },
        { name: 'AI Music Composer Pro', href: '/services/ai-music-composer' },
        { name: 'AI Website Builder Pro', href: '/services/ai-website-builder' },
        { name: 'AI Customer Insights', href: '/services/ai-customer-insights' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Email Responder Pro', href: '/services/ai-email-responder' },
        { name: 'Mobile Survey Platform', href: '/services/mobile-survey-platform' },
        { name: 'Event Management Dashboard', href: '/services/event-management-dashboard' },
        { name: 'AI SEO Optimizer', href: '/services/ai-seo-optimizer' },
        { name: 'AI Talent Matching', href: '/services/ai-talent-matching' },
        { name: 'AI Recruiting Platform', href: '/services/ai-recruiting-platform' },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing-solutions' },
        { name: 'Project Management Suite', href: '/services/project-management-suite' },
        { name: 'Social Media Scheduler', href: '/services/social-media-scheduler' },
        { name: 'Expense Tracker', href: '/services/expense-tracker' },
        { name: 'Lead Scoring Platform', href: '/services/lead-scoring-platform' },
        { name: 'Time Tracking Analytics', href: '/services/time-tracking-analytics' },
        { name: 'Email Marketing Automation', href: '/services/email-marketing-automation' },
        { name: 'Website Speed Optimizer', href: '/services/website-speed-optimizer' },
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Quantum Cloud Computing', href: '/services/quantum-cloud-computing' },
        { name: 'Autonomous Systems Architecture', href: '/services/autonomous-systems-architecture' },
        { name: 'Metaverse Development', href: '/services/metaverse-development' },
        { name: 'AI Infrastructure Optimization', href: '/services/ai-infrastructure-optimization' },
        { name: 'Cyber-Physical Systems', href: '/services/cyber-physical-systems' },
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'Edge Computing Solutions', href: '/services/edge-computing-solutions' },
        { name: 'Blockchain Infrastructure', href: '/services/blockchain-infrastructure' },
        { name: 'Zero Trust Security', href: '/services/zero-trust-security' },
        { name: '5G Network Implementation', href: '/services/5g-network-implementation' },
        { name: 'Hyperautomation Platform', href: '/services/hyperautomation-platform' },
        { name: 'Kubernetes Orchestration', href: '/services/kubernetes-orchestration' },
        { name: 'API Gateway Setup', href: '/services/api-gateway-setup' },
        { name: 'Database Optimization', href: '/services/database-optimization' },
        { name: 'Network Security Audit', href: '/services/network-security-audit' },
        { name: 'Disaster Recovery Planning', href: '/services/disaster-recovery-planning' },
        { name: 'Microservices Architecture', href: '/services/microservices-architecture' },
        { name: 'Performance Monitoring', href: '/services/performance-monitoring' },
      ]
    },
    {
      title: 'AI Services',
      services: [
        { name: 'AI Brain-Computer Interface', href: '/services/ai-brain-computer-interface' },
        { name: 'AI Space Mission Planning', href: '/services/ai-space-mission-planning' },
        { name: 'AI Climate Optimization', href: '/services/ai-climate-optimization' },
        { name: 'AI Personalized Medicine', href: '/services/ai-personalized-medicine' },
        { name: 'AI Autonomous Trading', href: '/services/ai-autonomous-trading' },
        { name: 'AI Drug Discovery', href: '/services/ai-drug-discovery' },
        { name: 'AI Climate Modeling', href: '/services/ai-climate-modeling' },
        { name: 'AI Space Exploration', href: '/services/ai-space-exploration' },
        { name: 'AI Neuroscience Research', href: '/services/ai-neuroscience-research' },
        { name: 'AI Robotics & Automation', href: '/services/ai-robotics-automation' },
        { name: 'AI Financial Trading', href: '/services/ai-financial-trading' },
        { name: 'Custom AI Models', href: '/services/custom-ai-models' },
        { name: 'Computer Vision Solutions', href: '/services/computer-vision-solutions' },
        { name: 'Natural Language Processing', href: '/services/natural-language-processing' },
        { name: 'Predictive Analytics', href: '/services/predictive-analytics' },
        { name: 'Recommendation Engine', href: '/services/recommendation-engine' },
        { name: 'AI-Powered Search', href: '/services/ai-powered-search' },
        { name: 'AI Content Moderation', href: '/services/ai-content-moderation' },
        { name: 'AI Fraud Detection', href: '/services/ai-fraud-detection' },
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