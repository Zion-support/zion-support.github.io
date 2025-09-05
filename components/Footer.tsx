import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import NextLink from 'next/link';
>>>>>>> main
import {
  Mail,
  Phone,
=======
import Link from 'next/link';
import {
  Zap,
  Phone,
  Mail,
<<<<<<< HEAD
=======
>>>>>>> main
  MapPin,
>>>>>>> main
  Facebook,
  Twitter,
  Linkedin,
<<<<<<< HEAD
  Instagram
} from 'lucide-react';

=======
  Instagram,
  Github,
  ArrowRight,
<<<<<<< HEAD
  ExternalLink
} from 'lucide-react';

=======
  ExternalLink
} from 'lucide-react';
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
const services = {
  'AI Solutions': [
    { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
    { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
    { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
    { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
    { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
<<<<<<< HEAD
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
=======
<<<<<<< HEAD
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' },
    { name: 'AI Drug Discovery', href: '/ai-services#ai-drug-discovery' },
    { name: 'AI Financial Trading', href: '/ai-services#ai-financial-trading' }
=======
    { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
  ],
  'IT Services': [
    { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
    { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
    { name: 'Database Management', href: '/it-services#database-management' },
<<<<<<< HEAD
    { name: 'System Administration', href: '/it-services#system-administration' },
    { name: 'IT Consulting', href: '/it-services#it-consulting' }
=======
    { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
<<<<<<< HEAD
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' },
    { name: 'AI-Powered IT Management', href: '/it-services#ai-powered-it-management' },
    { name: 'Zero Trust Security', href: '/it-services#zero-trust-security' }
=======
    { name: 'Data Center Migration', href: '/it-services#data-center-migration' }
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
  ],
  'Micro SaaS': [
    { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
    { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
    { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
    { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
    { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
<<<<<<< HEAD
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
  ]
};

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' }
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Documentation', href: '/docs' },
  { name: 'White Papers', href: '/whitepapers' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Help Center', href: '/help' },
  { name: 'FAQ', href: '/faq' }
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR', href: '/gdpr' },
  { name: 'Compliance', href: '/compliance' }
];

=======
<<<<<<< HEAD
    { name: 'Email Sequencer', href: '/micro-saas#email-sequencer' },
    { name: 'AI Cybersecurity Threat Hunter', href: '/micro-saas#ai-cybersecurity-threat-hunter' },
    { name: 'AI Smart City Platform', href: '/micro-saas#ai-smart-city-platform' }
  ]
};
const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'White Papers', href: '/white-papers' }
];
const supportLinks = [
  { name: 'Help Center', href: '/help' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Documentation', href: '/docs' },
  { name: 'API Reference', href: '/api-docs' },
  { name: 'Community', href: '/community' },
  { name: 'Contact Support', href: '/contact' },
  { name: 'Status Page', href: '/status' }
];
const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR Compliance', href: '/compliance' }
];
const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
];
const contactInfo = {
=======
    { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
  ]
};

const companyInfo = {
  name: 'Zion Tech Group',
  description: 'Leading provider of AI solutions, cloud services, and technology consulting. Transforming businesses through innovative technology.',
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709',
  hours: '24/7 Support Available'
};
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of AI solutions, IT services, and micro SaaS applications. 
              We help businesses transform through innovative technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-3" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
=======
      <div className="container mx-auto px-4 py-12">
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider specializing in AI, cloud, and micro SaaS services.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
              <Linkedin className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
>>>>>>> main
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><NextLink href="/micro-saas" className="text-gray-300 hover:text-white">Micro SaaS</NextLink></li>
              <li><NextLink href="/it-services" className="text-gray-300 hover:text-white">IT Services</NextLink></li>
              <li><NextLink href="/ai-services" className="text-gray-300 hover:text-white">AI Services</NextLink></li>
              <li><NextLink href="/solutions" className="text-gray-300 hover:text-white">Solutions</NextLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><NextLink href="/about" className="text-gray-300 hover:text-white">About</NextLink></li>
              <li><NextLink href="/careers" className="text-gray-300 hover:text-white">Careers</NextLink></li>
              <li><NextLink href="/blog" className="text-gray-300 hover:text-white">Blog</NextLink></li>
              <li><NextLink href="/contact" className="text-gray-300 hover:text-white">Contact</NextLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
<<<<<<< HEAD
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {Object.entries(services).map(([category, items]) => (
                <li key={category}>
                  <span className="text-gray-400 text-sm font-medium">{category}</span>
                  <ul className="mt-1 space-y-1">
                    {items.slice(0, 3).map((item, index) => (
                      <li key={index}>
                        <Link 
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {item.name}
=======
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                          {link.name}
>>>>>>> main
                        </Link>
                      </li>
                    ))}
                  </ul>
<<<<<<< HEAD
                </li>
              ))}
            </ul>
          </div>

=======
                </div>
              ))}
            </div>
          </div>
>>>>>>> main
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
<<<<<<< HEAD
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
=======
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
>>>>>>> main
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
=======
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
>>>>>>> main
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
        </div>

        {/* Bottom Section */}
=======
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <span className="text-gray-400 text-sm">{contactInfo.address}</span>
              </div>
              <div className="text-gray-400 text-sm">
                <Zap className="w-4 h-4 inline mr-2" />
                {contactInfo.hours}
>>>>>>> main
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
=======
        {/* Social Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-4 pt-4">
          <div className="flex flex-wrap items-center justify-center space-x-6">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
=======

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
>>>>>>> main
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
<<<<<<< HEAD
=======
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with ❤️ for innovation
              </p>
            </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
          </div>
>>>>>>> main
        </div>
      </div>
    </footer>
  );
}