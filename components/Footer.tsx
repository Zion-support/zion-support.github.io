import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github,
  ExternalLink
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
    { name: 'AI Climate Change Mitigation', href: '/ai-services#ai-climate-mitigation' },
    { name: 'AI Space Colonization', href: '/ai-services#ai-space-colonization' },
    { name: 'AI Universal Problem Solver', href: '/ai-services#ai-universal-problem-solver' },
    { name: 'AI Consciousness Transfer', href: '/ai-services#ai-consciousness-transfer' }
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
    { name: 'Edge Computing Infrastructure', href: '/it-services#edge-computing' },
    { name: '5G Network Implementation', href: '/it-services#5g-networks' },
    { name: 'Blockchain Infrastructure', href: '/it-services#blockchain' },
    { name: 'IoT Platform Development', href: '/it-services#iot' },
    { name: 'Microservices Architecture', href: '/it-services#microservices' },
    { name: 'Digital Transformation', href: '/it-services#digital-transformation' },
    { name: 'Legacy System Modernization', href: '/it-services#legacy-modernization' }
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
    { name: 'AI Mental Health Assistant', href: '/micro-saas#ai-mental-health' },
    { name: 'Smart Waste Management', href: '/micro-saas#smart-waste-management' },
    { name: 'Blockchain Voting Platform', href: '/micro-saas#blockchain-voting' },
    { name: 'AI Sleep Optimization', href: '/micro-saas#ai-sleep-optimization' }
  ]
};

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown DE 19709'
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300">Leading technology solutions provider</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">Phone: +1 302 464 0950</p>
            <p className="text-gray-300">Email: kleber@ziontechgroup.com</p>
            <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Micro SaaS Solutions</li>
              <li>IT Services</li>
              <li>AI Services</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
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
          <div className="flex flex-col md:flex-row justify-between items-center">
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