import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const services = {
    'AI Solutions': [
      { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' }
      { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' }
      { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' }
      { name: 'Natural Language Processing', href: '/ai-services#nlp' }
      { name: 'Machine Learning Models', href: '/ai-services#machine-learning' }
      { name: 'AI Analytics Platform', href: '/ai-services#ai-analytics' }
    ]
    'IT Services': [
      { name: 'Cloud Migration', href: '/it-services#cloud-migration' }
      { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' }
      { name: 'DevOps Automation', href: '/it-services#devops' }
      { name: 'Infrastructure Management', href: '/it-services#infrastructure' }
      { name: 'Data Analytics', href: '/it-services#data-analytics' }
      { name: 'Network Security', href: '/it-services#network-security' }
    ]
    'Micro SAAS': [
      { name: 'CRM Solutions', href: '/micro-saas#crm' }
      { name: 'Project Management', href: '/micro-saas#project-management' }
      { name: 'Email Marketing', href: '/micro-saas#email-marketing' }
      { name: 'AI Content Tools', href: '/micro-saas#ai-content-tools' }
      { name: 'Analytics Dashboard', href: '/micro-saas#analytics-dashboard' }
      { name: 'Automation Tools', href: '/micro-saas#automation-tools' }
    ]
  };
  const company = [
    { name: 'About Us', href: '/about' }
    { name: 'Our Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'Blog', href: '/blog' }
    { name: 'Press', href: '/press' }
  ];
  const resources = [
    { name: 'Documentation', href: '/docs' }
    { name: 'API Reference', href: '/api-docs' }
    { name: 'Tutorials', href: '/tutorials' }
    { name: 'Support', href: '/support' }
    { name: 'FAQ', href: '/faq' }
    { name: 'Contact', href: '/contact' }
  ];
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin }
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div><div className="text-xl font-bold">Zion Tech Group</div>
                <div className="text-sm text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting.
              Transforming businesses through innovation and cutting-edge technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
          {/* Services */}
          <div><h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-blue-400 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link,
href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
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
          <div><h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link,
href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources */}
          <div><h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link,
href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-blue-400 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a,
key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <nav style={{display:'flex',gap:16,flexWrap:'wrap'}}>
          <Link href="/solutions">Solutions</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/request-quote">Request a Quote</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;