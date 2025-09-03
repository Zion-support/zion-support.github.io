<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Services Overview', href: '/services-overview' },
      { name: 'Solutions', href: '/solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'White Papers', href: '/whitepapers' },
      { name: 'Sitemap', href: '/sitemap' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6">
              Leading provider of cutting-edge AI services, IT solutions, and micro SaaS development. 
              Transforming businesses through innovative technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>123 Technology Drive, San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ziontechgroup.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
=======
<<<<<<< HEAD
 import { Link } from &apos;react-router-dom&apos; import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from &apos;lucide-react&apos;&apos;' export default function Footer() {} const scrollToTop = () => { window.scrollTo(;{ top: 0, behavior: &apos;smooth&apos; })}&apos; const currentYear = new Date().getFullYear() const;const;const footerLinks = { services: [ { nam,e: &apos;AI & Machine Learning&apos;, href: &apos;/services/ai&apos; }, { name: &apos;Cloud Solutions&apos;, href: &apos;/services/cloud&apos; }, { name: &apos;Cybersecurity&apos;, href: &apos;/services/cybersecurity&apos; }, { name: &apos;Software Development&apos;, href: &apos;/services/development&apos; }, { name: &apos;Digital Transformation&apos;, href: &apos;/services/transformation&apos; }, { name: &apos;Consulting&apos;, href: &apos;/services/consulting&apos; } ], solutions: [ { nam,e: &apos;Enterprise Solutions&apos;, href: &apos;/solutions/enterprise&apos; }, { name: &apos;Startup Solutions&apos;, href: &apos;/solutions/startup&apos; }, { name: &apos;Government Solutions&apos;, href: &apos;/solutions/government&apos; }, { name: &apos;Healthcare Solutions&apos;, href: &apos;/solutions/healthcare&apos; }, { name: &apos;Financial Solutions&apos;, href: &apos;/solutions/financial&apos; } ], company: [ { nam,e: &apos;About Us&apos;, href: &apos;/about&apos; }, { name: &apos;Our Team&apos;, href: &apos;/about#team&apos; }, { name: &apos;Careers&apos;, href: &apos;/careers&apos; }, { name: &apos;Partners&apos;, href: &apos;/partners&apos; }, { name: &apos;Press&apos;, href: &apos;/press&apos; }, { name: &apos;Case Studies&apos;, href: &apos;/case-studies&apos; } ], resources: [ { nam,e: &apos;Blog&apos;, href: &apos;/blog&apos; }, { name: &apos;Documentation&apos;, href: &apos;/docs&apos; }, { name: &apos;API Reference&apos;, href: &apos;/api&apos; }, { name: &apos;Developer Portal&apos;, href: &apos;/developer&apos; }, { name: &apos;Training&apos;, href: &apos;/training&apos; }, { name: &apos;Support&apos;, href: &apos;/support&apos; } ] } ;&apos;const socialLinks = [ { name: &apos;Facebook&apos;, icon: Facebook, href: &apos;http,s:&apos;&apos;'
;
&apos;}'
=======
 import { Link } from 'react-router-dom' import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp }  from 'lucide-react';export default function Footer() { const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' })} const currentYear = new Date().getFullYear() const footerLinks = { services: [ { name: 'AI & Machine Learning', href: '/services/ai' }, { name: 'Cloud Solutions', href: '/services/cloud' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'Software Development', href: '/services/development' }, { name: 'Digital Transformation', href: '/services/transformation' }, { name: 'Consulting', href: '/services/consulting' } ], solutions: [ { name: 'Enterprise Solutions', href: '/solutions/enterprise' }, { name: 'Startup Solutions', href: '/solutions/startup' }, { name: 'Government Solutions', href: '/solutions/government' }, { name: 'Healthcare Solutions', href: '/solutions/healthcare' }, { name: 'Financial Solutions', href: '/solutions/financial' } ], company: [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'Partners', href: '/partners' }, { name: 'Press', href: '/press' }, { name: 'Case Studies', href: '/case-studies' } ], resources: [ { name: 'Blog', href: '/blog' }, { name: 'Documentation', href: '/docs' }, { name: 'API Reference', href: '/api' }, { name: 'Developer Portal', href: '/developer' }, { name: 'Training', href: '/training' }, { name: 'Support', href: '/support' } ] } const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https:''';
;

""
}}
>>>>>>> main
>>>>>>> main
