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
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' }
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
    { name: 'System Administration', href: '/it-services#system-administration' }
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' }
  ]
};

const companyInfo = {
  name: 'Zion Tech Group',
  description: 'Leading provider of AI solutions, cloud services, and technology consulting. Transforming businesses through innovative technology.',
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting. 
              We help businesses transform and succeed in the digital age.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {Object.entries(services).map(([category, serviceList]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {serviceList.map((service) => (
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

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest news and updates from Zion Tech Group
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ for innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}