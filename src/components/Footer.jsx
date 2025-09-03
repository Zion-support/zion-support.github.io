import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  Brain,
  Clock,
  Award
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud Solutions', href: '/it-services#cloud' },
        { name: 'Cybersecurity', href: '/it-services#cybersecurity' },
        { name: 'Digital Transformation', href: '/it-services#digital-transformation' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Industry Solutions', href: '/solutions' },
        { name: 'Healthcare AI', href: '/ai-services#healthcare' },
        { name: 'FinTech Solutions', href: '/ai-services#fintech' },
        { name: 'Smart Cities', href: '/ai-services#smart-cities' },
        { name: 'Agriculture Tech', href: '/ai-services#agriculture' },
        { name: 'Space Technology', href: '/ai-services#space' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Training', href: '/training' },
        { name: 'Support', href: '/support' },
        { name: 'Help Center', href: '/help' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">Innovative Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
              We transform businesses through cutting-edge technology and intelligent automation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
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
      </div>
    </footer>
  );
}