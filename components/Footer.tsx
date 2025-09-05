import React from 'react';
import Link from 'next/link';
import { 
<<<<<<< HEAD
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
  Youtube,
  Building
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
} from 'lucide-react';

const services = {
  'AI Solutions': [
<<<<<<< HEAD
    { "name": 'AI-Powered Email Responder', "href": '/ai-services#ai-email-responder' },
    { "name": 'Predictive Analytics Platform', "href": '/ai-services#predictive-analytics' },
    { "name": 'Intelligent Chatbot System', "href": '/ai-services#intelligent-chatbot' },
    { "name": 'Computer Vision Solutions', "href": '/ai-services#computer-vision' },
    { "name": 'AI Drug Discovery', "href": '/ai-services#ai-drug-discovery' },
    { "name": 'AI Autonomous Vehicles', "href": '/ai-services#ai-autonomous-vehicles' },
    { "name": 'AI Climate Modeling', "href": '/ai-services#ai-climate-modeling' },
    { "name": 'AI Cybersecurity', "href": '/ai-services#ai-cybersecurity' },
    { "name": 'AI Quantum Computing', "href": '/ai-services#ai-quantum' },
    { "name": 'AI Space Mission Planning', "href": '/ai-services#ai-space' }
  ],
  'IT Services': [
    { "name": 'Cloud Infrastructure Management', "href": '/it-services#cloud-infrastructure' },
    { "name": 'Zero Trust Security', "href": '/it-services#zero-trust-security' },
    { "name": 'Edge Computing', "href": '/it-services#edge-computing' },
    { "name": '5G Network Implementation', "href": '/it-services#5g-networks' },
    { "name": 'Blockchain Infrastructure', "href": '/it-services#blockchain-infrastructure' },
    { "name": 'IoT Platform Management', "href": '/it-services#iot-platform' },
    { "name": 'Digital Twin Technology', "href": '/it-services#digital-twins' },
    { "name": 'Green IT Solutions', "href": '/it-services#green-it' },
    { "name": 'Quantum Computing Infrastructure', "href": '/it-services#quantum-computing' },
    { "name": 'AI Infrastructure Services', "href": '/it-services#ai-infrastructure' }
  ],
  'Micro SaaS': [
    { "name": 'Cloud Cost Guard', "href": '/micro-saas#cloud-cost-guard' },
    { "name": 'AI Email Responder', "href": '/micro-saas#ai-email-responder' },
    { "name": 'Voice Meeting Assistant', "href": '/micro-saas#voice-meeting-assistant' },
    { "name": 'Smart Contract Analyzer', "href": '/micro-saas#smart-contract-analyzer' },
    { "name": 'Predictive Maintenance AI', "href": '/micro-saas#predictive-maintenance' },
    { "name": 'Blockchain Analytics', "href": '/micro-saas#blockchain-analytics' },
    { "name": 'AI SEO Optimizer', "href": '/micro-saas#ai-seo-optimizer' },
    { "name": 'Smart Energy Management', "href": '/micro-saas#smart-energy' },
    { "name": 'AI-Powered Code Generator', "href": '/micro-saas#ai-code-generator' },
    { "name": 'Quantum Computing Simulator', "href": '/micro-saas#quantum-simulator' }
  ]
};

const company = [
  { "name": 'About Us', "href": '/about' },
  { "name": 'Our Team', "href": '/about#team' },
  { "name": 'Careers', "href": '/careers' },
  { "name": 'Case Studies', "href": '/case-studies' },
  { "name": 'Blog', "href": '/blog' },
  { "name": 'News', "href": '/news' },
  { "name": 'Partners', "href": '/partners' },
  { "name": 'Investor Relations', "href": '/investors' },
  { "name": 'Sustainability', "href": '/sustainability' }
];

const resources = [
  { "name": 'Documentation', "href": '/docs' },
  { "name": 'API Reference', "href": '/api-docs' },
  { "name": 'Tutorials', "href": '/tutorials' },
  { "name": 'Guides', "href": '/guides' },
  { "name": 'FAQ', "href": '/faq' },
  { "name": 'Support', "href": '/support' },
  { "name": 'White Papers', "href": '/white-papers' },
  { "name": 'Webinars', "href": '/webinars' },
  { "name": 'Developer Tools', "href": '/developer-tools' }
];

const solutions = [
  { "name": 'Enterprise Solutions', "href": '/solutions/enterprise' },
  { "name": 'Startup Solutions', "href": '/solutions/startup' },
  { "name": 'Industry Solutions', "href": '/solutions/industry' },
  { "name": 'Custom Development', "href": '/solutions/custom' },
  { "name": 'Digital Transformation', "href": '/solutions/digital-transformation' },
  { "name": 'Cloud Migration', "href": '/solutions/cloud-migration' },
  { "name": 'AI Integration', "href": '/solutions/ai-integration' },
  { "name": 'Blockchain Solutions', "href": '/solutions/blockchain' }
];

const industries = [
  { "name": 'Healthcare', "href": '/industries/healthcare' },
  { "name": 'Finance', "href": '/industries/finance' },
  { "name": 'Manufacturing', "href": '/industries/manufacturing' },
  { "name": 'Retail', "href": '/industries/retail' },
  { "name": 'Education', "href": '/industries/education' },
  { "name": 'Government', "href": '/industries/government' },
  { "name": 'Energy', "href": '/industries/energy' },
  { "name": 'Transportation', "href": '/industries/transportation' }
];

const legal = [
  { "name": 'Privacy Policy', "href": '/privacy' },
  { "name": 'Terms of Service', "href": '/terms' },
  { "name": 'Cookie Policy', "href": '/cookies' },
  { "name": 'Security', "href": '/security' },
  { "name": 'Compliance', "href": '/compliance' },
  { "name": 'Sitemap', "href": '/sitemap' },
  { "name": 'Accessibility', "href": '/accessibility' },
  { "name": 'GDPR Compliance', "href": '/gdpr' }
];

const socialLinks = [{ "name": 'LinkedIn', "href": 'https://linkedin.com/company/ziontechgroup', "icon": Linkedin },
  { "name": 'Twitter', "href": 'https://twitter.com/ziontechgroup', "icon": Twitter },
  { "name": 'GitHub', "href": 'https://github.com/ziontechgroup', "icon": Github },
  { "name": 'YouTube', "href": 'https://youtube.com/@ziontechgroup', "icon": Youtube },
  { "name": 'Facebook', "href": 'https://facebook.com/ziontechgroup', "icon": Facebook }
];

const contactInfo = {
  "phone": '+1 302 464 0950',
  "email": 'kleber@ziontechgroup.com',
  "address": '364 E Main St STE 1008, Middletown, DE 19709',
  "hours": '24/7 Support Available'
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
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
              and digital transformation. Empowering businesses with innovative technology 
              and cutting-edge solutions for the modern digital world.
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

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
=======
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
    { name: 'AI Code Review Assistant', href: '/ai-services#ai-code-review' },
    { name: 'AI Customer Sentiment Analytics', href: '/ai-services#ai-sentiment' },
    { name: 'AI-Powered Document Processing', href: '/ai-services#ai-document-processing' }
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Zero Trust Security Architecture', href: '/it-services#zero-trust' },
    { name: 'Edge Computing Infrastructure', href: '/it-services#edge-computing' },
    { name: 'Quantum-Safe Cryptography', href: '/it-services#quantum-safe' },
    { name: '5G Network Implementation', href: '/it-services#5g-network' },
    { name: 'Blockchain Infrastructure', href: '/it-services#blockchain' },
    { name: 'AI Infrastructure Management', href: '/it-services#ai-infrastructure' }
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'AI-Powered Code Review Assistant', href: '/micro-saas#ai-code-review' },
    { name: 'Blockchain Payment Gateway', href: '/micro-saas#blockchain-payment' },
    { name: 'IoT Device Management Platform', href: '/micro-saas#iot-management' },
    { name: 'AI-Powered SEO Optimizer', href: '/micro-saas#ai-seo' },
    { name: 'Virtual Event Platform', href: '/micro-saas#virtual-events' },
    { name: 'AI Customer Success Platform', href: '/micro-saas#ai-customer-success' }
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

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
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
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">{companyInfo.hours}</span>
              </div>
            </div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, serviceList]) => (
                <div key={category}>
<<<<<<< HEAD
                  <h4 className="text-sm font-medium text-gray-300 mb-2">{category}</h4>
                  <ul className="space-y-2">
                    {links.slice(0, 4).map((link) => (
                      <li key={link.name}>
=======
                  <h4 className="text-sm font-medium text-blue-400 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {serviceList.slice(0, 4).map((service) => (
                      <li key={service.name}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
                        <Link 
                          href={service.href} 
                          className="text-gray-300 hover:text-white text-sm transition-colors"
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

          {/* Solutions */}
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.name}>
=======
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Building className="w-5 h-5 mr-2 text-blue-400" />
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((link) => (
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

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-400" />
              Company
            </h3>
            <ul className="space-y-3 mb-8">
              {company.slice(0, 5).map((link) => (
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

            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-blue-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.slice(0, 5).map((link) => (
                <li key={link.name}>
=======
          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((item) => (
                <li key={item.name}>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-400" />
              Legal
            </h3>
            <ul className="space-y-3 mb-8">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover: text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover: bg-blue-600 transition-colors group"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover: text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md: flex-row items-center justify-between">
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
          <div className="flex flex-col md: flex-row items-center justify-between">
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
=======
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-372a
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}