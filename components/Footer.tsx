import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram, ArrowRight, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Automation Services",
      links: [
        { name: "AI Business Intelligence", href: "/ai-services" },
        { name: "AI Customer Support", href: "/ai-services" },
        { name: "AI Project Management", href: "/ai-services" },
        { name: "AI Marketing Automation", href: "/ai-services" },
        { name: "AI Enterprise Automation", href: "/ai-services" },
      ]
    },
    {
      title: "IT Infrastructure & Security",
      links: [
        { name: "Cloud DevOps", href: "/it-services" },
        { name: "IT Infrastructure Management", href: "/it-services" },
        { name: "Cybersecurity Solutions", href: "/it-services" },
        { name: "Digital Transformation", href: "/it-services" },
        { name: "Green IT Solutions", href: "/it-services" },
      ]
    },
    {
      title: "Micro SaaS Solutions",
      links: [
        { name: "Cloud Cost Guard", href: "/micro-saas" },
        { name: "Customer Feedback App", href: "/micro-saas" },
        { name: "AI Content Generator", href: "/micro-saas" },
        { name: "Workflow Automation", href: "/micro-saas" },
        { name: "Data Analytics Dashboard", href: "/micro-saas" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Contact", href: "/contact" },
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider specializing in AI, automation, 
              and digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-blue-400 mr-3" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-white">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;