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
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' },
    { name: 'AI Fraud Detection', href: '/ai-services#ai-fraud-detection' },
    { name: 'AI Mental Health Companion', href: '/ai-services#ai-mental-health' },
    { name: 'AI Smart City Management', href: '/ai-services#ai-smart-city' },
    { name: 'AI Agricultural Intelligence', href: '/ai-services#ai-agricultural' }
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' },
    { name: 'IT Asset Management', href: '/it-services#it-asset-management' },
    { name: 'Zero Trust Security', href: '/it-services#zero-trust' },
    { name: 'Edge Computing', href: '/it-services#edge-computing' },
    { name: '5G Network Infrastructure', href: '/it-services#5g-networks' }
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' },
    { name: 'AI Lead Scoring', href: '/micro-saas#ai-lead-scoring' },
    { name: 'AI Legal Document Analyzer', href: '/micro-saas#ai-legal-analyzer' },
    { name: 'Smart Energy Management', href: '/micro-saas#smart-energy' },
    { name: 'AI Medical Diagnosis Assistant', href: '/micro-saas#ai-medical-diagnosis' }
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

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              Legal
            </h3>
            <ul className="space-y-3">
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}