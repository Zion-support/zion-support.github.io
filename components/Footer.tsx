import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  ExternalLink,
  Youtube,
  Facebook,
  Settings,
  Target,
  Building2,
  Users,
  FileText,
  HelpCircle,
  Zap
} from 'lucide-react';

const services = [
  { name: 'All Services', href: '/services' },
  { name: 'AI Services', href: '/ai-services' },
  { name: 'IT Services', href: '/it-services' },
  { name: 'Micro SaaS', href: '/micro-saas' },
  { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { name: 'Cybersecurity', href: '/services/cybersecurity' },
  { name: 'Data Analytics', href: '/services/data-analytics' },
  { name: 'Quantum Computing', href: '/services/quantum-computing' }
];

const solutions = [
  { name: 'All Solutions', href: '/solutions' },
  { name: 'Enterprise', href: '/solutions/enterprise' },
  { name: 'Healthcare', href: '/solutions/healthcare' },
  { name: 'Finance', href: '/solutions/finance' },
  { name: 'Retail', href: '/solutions/retail' },
  { name: 'Education', href: '/solutions/education' },
  { name: 'Government', href: '/solutions/government' },
  { name: 'Startup', href: '/solutions/startup' }
];

const industries = [
  { name: 'All Industries', href: '/industries' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Education', href: '/industries/education' },
  { name: 'Government', href: '/industries/government' },
  { name: 'Manufacturing', href: '/industries/manufacturing' },
  { name: 'Retail', href: '/industries/retail' }
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
  { name: 'Partners', href: '/partners' }
];

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'White Papers', href: '/white-papers' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Webinars', href: '/webinars' },
  { name: 'Help Center', href: '/help' },
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
  
  const footerSections = [
    {
      title: 'Services',
      icon: Settings,
      links: services
    },
    {
      title: 'Solutions',
      icon: Target,
      links: solutions
    },
    {
      title: 'Industries',
      icon: Building2,
      links: industries
    },
    {
      title: 'Company',
      icon: Users,
      links: company
    },
    {
      title: 'Resources',
      icon: FileText,
      links: resources
    },
    {
      title: 'Support',
      icon: HelpCircle,
      links: [
        { name: 'Contact Support', href: '/support' },
        { name: 'System Status', href: '/status' },
        { name: 'API Reference', href: '/api' },
        { name: 'Community', href: '/community' },
        { name: 'Training', href: '/tutorials' },
        { name: 'Search', href: '/search' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>

            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactInfo.hours}</span>
              </div>
            </div>
          </div>


              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

                </div>

              ))}

            </div>
          </div>

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}

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