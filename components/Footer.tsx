import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Github,
  ArrowRight,
  ExternalLink,
  Youtube
} from 'lucide-react';

const services = {
  'AI Solutions': [
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' },
    { name: 'AI Fraud Detection', href: '/ai-services#ai-fraud-detection' },
    { name: 'AI Drug Discovery', href: '/ai-services#ai-drug-discovery' },
    { name: 'Quantum Machine Learning', href: '/ai-services#quantum-ml' },
    { name: 'AI Space Debris Management', href: '/ai-services#space-debris' },
    { name: 'AI Climate Engineering', href: '/ai-services#climate-engineering' },
    { name: 'AI Neural Interface', href: '/ai-services#neural-interface' }
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' },
    { name: 'IT Asset Management', href: '/it-services#it-asset-management' },
    { name: 'Backup & Disaster Recovery', href: '/it-services#backup-disaster-recovery' },
    { name: 'Quantum Computing Infrastructure', href: '/it-services#quantum-computing' },
    { name: 'Space Technology Infrastructure', href: '/it-services#space-technology' },
    { name: 'Fusion Energy IT Systems', href: '/it-services#fusion-energy' },
    { name: 'Smart City IT Infrastructure', href: '/it-services#smart-cities' }
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' },
    { name: 'AI Lead Scoring', href: '/micro-saas#ai-lead-scoring' },
    { name: 'Social Media Scheduler', href: '/micro-saas#social-media-scheduler' },
    { name: 'Quantum Computing Simulator', href: '/micro-saas#quantum-simulator' },
    { name: 'Digital Twin Platform', href: '/micro-saas#digital-twin' },
    { name: 'AI-Powered Metaverse Builder', href: '/micro-saas#metaverse-builder' },
    { name: 'Autonomous Drone Fleet Management', href: '/micro-saas#drone-fleet' }
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of cutting-edge AI solutions, cloud services, and technology consulting.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, serviceList]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-blue-400 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {serviceList.slice(0, 4).map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                          {service.name}
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
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Delaware, United States</span>
            </div>
            
            <div className="flex flex-wrap items-center space-x-6">
              {legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}