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
    { name: 'Quantum Machine Learning', href: '/ai-services#quantum-ml' },
    { name: 'Autonomous Vehicle Systems', href: '/ai-services#autonomous-vehicles' },
    { name: 'Brain-Computer Interface', href: '/ai-services#brain-computer-interface' },
    { name: 'AI Cybersecurity Guardian', href: '/ai-services#ai-cybersecurity' },
    { name: 'AI Smart City Manager', href: '/ai-services#ai-smart-city' }
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
    { name: 'System Administration', href: '/it-services#system-administration' },
    { name: 'Quantum Computing Infrastructure', href: '/it-services#quantum-computing' },
    { name: 'Edge Computing Solutions', href: '/it-services#edge-computing' },
    { name: '5G Network Implementation', href: '/it-services#5g-networks' },
    { name: 'Blockchain Infrastructure', href: '/it-services#blockchain' },
    { name: 'Zero Trust Security', href: '/it-services#zero-trust' }
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
    { name: 'AI Email Marketing Optimizer', href: '/micro-saas#ai-email-marketing' },
    { name: 'Smart Contract Analytics', href: '/micro-saas#smart-contract-analytics' },
    { name: 'AI Video Content Generator', href: '/micro-saas#ai-video-generator' },
    { name: 'Customer Churn Predictor', href: '/micro-saas#customer-churn-predictor' },
    { name: 'AI-Powered Voice Cloning', href: '/micro-saas#ai-voice-cloning' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'SMB Solutions', href: '/solutions/smb' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Solutions', href: '/solutions/custom' },
    { name: 'AI Integration', href: '/solutions/ai-integration' },
    { name: 'Security Audits', href: '/solutions/security-audits' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Transportation', href: '/industries/transportation' }
  ],
  'Resources': [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Support', href: '/support' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-xs">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-xs">{companyInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {Object.entries(services).map(([category, serviceList]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {serviceList.slice(0, 6).map((service) => (
                  <li key={service.name}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
                {serviceList.length > 6 && (
                  <li>
                    <Link 
                      href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      View All {category} →
                    </Link>
                  </li>
                )}
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
                <Link href="/resources" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Pricing
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