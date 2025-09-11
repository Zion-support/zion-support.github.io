
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';



import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap;


} from 'lucide-react';
const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear()
  const services = [
    { name: 'Web Development', href: '/services/web-development' }
{ name: 'Mobile Apps', href: '/services/mobile-apps' }
    { name: 'AI Solutions', href: '/services/ai-solutions' }
    { name: 'Cloud Services', href: '/services/cloud-services' }
  ];
  const solutions = [
    { name: 'E-commerce', href: '/solutions/ecommerce' }
    { name: 'CRM Systems', href: '/solutions/crm' }
    { name: 'Data Analytics', href: '/solutions/analytics' }
    { name: 'Automation', href: '/solutions/automation' }
  ];
  const company = [
    { name: 'About Us', href: '/about' }
{ name: 'Our Team', href: '/team' }
    { name: 'Careers', href: '/careers' }
    { name: 'Contact', href: '/contact' }
    { name: 'Privacy Policy', href: '/privacy' }
    { name: 'Terms of Service', href: '/terms' }
  ];
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook }
    { name: 'Twitter', href: '#', icon: Twitter }
    { name: 'LinkedIn', href: '#', icon: Linkedin }
    { name: 'Instagram', href: '#', icon: Instagram }

import { ;
  Phone, ;
  Mail, ;
  MapPin, ;
  Facebook, ;
  Twitter, ;
  Linkedin, ;
  Instagram,;
  Code,;
  Smartphone,;
  Cloud,;
  Database,;
  Shield,;
  Zap;
} from 'lucide-react';

const Footer: React.FC = () => {;
  const currentYear = new Date().getFullYear(),;

  const services = [;
    { name: 'Web Development', href: '/services/web-development' },;
    { name: 'Mobile Apps', href: '/services/mobile-apps' },;
    { name: 'AI Solutions', href: '/services/ai-solutions' },;
    { name: 'Cloud Services', href: '/services/cloud-services' },;
  ];

  const solutions = [;
    { name: 'E-commerce', href: '/solutions/ecommerce' },;
    { name: 'CRM Systems', href: '/solutions/crm' },;
    { name: 'Data Analytics', href: '/solutions/analytics' },;
    { name: 'Automation', href: '/solutions/automation' },;

  ];

  const company = [;
    { name: 'About Us', href: '/about' },;

    { name: 'Our Team', href: '/team' },;
    { name: 'Careers', href: '/careers' },;
    { name: 'Contact', href: '/contact' },;
    { name: 'Privacy Policy', href: '/privacy' },;
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [;
    { name: 'Facebook', href: '#', icon: Facebook },;
    { name: 'Twitter', href: '#', icon: Twitter },;
    { name: 'LinkedIn', href: '#', icon: Linkedin },;
    { name: 'Instagram', href: '#', icon: Instagram },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  ];
  return (




=======
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Transforming businesses through innovative technology solutions.
              We deliver cutting-edge software, AI, and cloud services.

            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
=======
    <footer className="bg-gray-900 text-white">;

      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
          {/* Company Info */}
          <div className="lg:col-span-2">;
            <div className="flex items-center space-x-2 mb-4">;
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">;
                <Code className="w-5 h-5 text-white" />;
              </div>;
              <span className="text-xl font-bold">Zion Tech Group</span>;
            </div>;
            <p className="text-gray-400 mb-6 max-w-sm">;
              Transforming businesses through innovative technology solutions. ;
              We deliver cutting-edge software, AI, and cloud services.;
            </p>;
            <div className="space-y-3">;
              <div className="flex items-center space-x-3">;
                <Phone className="w-4 h-4 text-blue-400" />;
                <a href="tel:+13024640950" className="text-gray-400 hover:text-white transition-colors">;
                  +1 302 464 0950;
                </a>;
              </div>;
              <div className="flex items-center space-x-3">;
                <Mail className="w-4 h-4 text-blue-400" />;
                <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">;
                  kleber@ziontechgroup && ziontechgroup.com;
                </a>;
              </div>;
              <div className="flex items-center space-x-3">;
                <MapPin className="w-4 h-4 text-blue-400" />;
                <span className="text-gray-400">;
                  364 E Main St STE 1008<br />;
=======
import Link from 'next / link';
;
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap;
} from 'lucide-react';
;
const Footer: React.FC = () => {
  const current_year = new Date ().getFullYear (),
  const services = [;
    { name: 'Web Development', href: '/services / web - development' },
{ name: 'Mobile Apps', href: '/services / mobile - apps' },
    { name: 'AI Solutions', href: '/services / ai - solutions' },
    { name: 'Cloud Services', href: '/services / cloud - services' },
  ];
;
  const solutions = [;
    { name: 'E - commerce', href: '/solutions / ecommerce' },
    { name: 'CRM Systems', href: '/solutions / crm' },
    { name: 'Data Analytics', href: '/solutions / analytics' },
    { name: 'Automation', href: '/solutions / automation' },
  ];
;
  const company = [;
    { name: 'About Us', href: '/about' },
{ name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];
;
  const social_links = [;
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];
;
  return (
    <footer className="bg - gray - 900 text - white">;
      <div className="container mx - auto px - 4 py - 12">;
        <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 5 gap - 8">;
          {/* Company Info */}
          <div className="lg:col - span - 2">;
            <div className="flex items - center space - x-2 mb - 4">;
              <div className="w - 8 h - 8 bg - blue - 600 rounded - lg flex items - center justify - center">;
                <Code className="w - 5 h - 5 text - white" />;
              </div>;
              <span className="text - xl font - bold">Zion Tech Group</span>;
            </div>;
            <p className="text - gray - 400 mb - 6 max - w-sm">;
              Transforming businesses through innovative technology solutions.;
              We deliver cutting - edge software, AI, and cloud services.;
            </p>;
            <div className="space - y-3">;
              <div className="flex items - center space - x-3">;
                <Phone className="w - 4 h - 4 text - blue - 400" />;
                <a href="tel:+13024640950" className="text - gray - 400 hover:text - white transition - colors">;
                  +1 302 464 0950;
                </a>;
              </div>;
              <div className="flex items - center space - x-3">;
                <Mail className="w - 4 h - 4 text - blue - 400" />;
                <a href="mailto:kleber@ziontechgroup.com" className="text - gray - 400 hover:text - white transition - colors">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="flex items - center space - x-3">;
                <MapPin className="w - 4 h - 4 text - blue - 400" />;
                <span className="text - gray - 400">;
                  364 E Main St STE 1008 < br />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;

            </ul>;
          </div>;

              {socialLinks && socialLinks.map((social) => (;

                <a
                  key={social && social.name}
                  href={social && social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social && social.name}>;
                  <social && social.icon className="h-5 w-5" />;
                </a>;
              ))}

            </div>;
          </div>;


          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {services && services.map((service) => (;
                <li key={service && service.name}>;
                  <Link

                    href={service && service.href}
                    className="text-gray-400 hover:text-white transition-colors">;
                    {service && service.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;


          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {solutions && solutions.map((solution) => (;
                <li key={solution && solution.name}>;
                  <Link
                    href={solution && solution.href}
                    className="text-gray-400 hover:text-white transition-colors">;
                    {solution && solution.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company & Support */}

          <div>;
            <h3 className="text-lg font-semibold mb-4">Company</h3>;
            <ul className="space-y-2 mb-6">;
              {company && company.map((item) => (;
                <li key={item && item.name}>;
                  <Link
                    href={item && item.href}
                    className="text-gray-400 hover:text-white transition-colors">;
                    {item && item.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
            <h3 className="text-lg font-semibold mb-4">Support</h3>;
            <ul className="space-y-2">;
              {support && support.map((item) => (;
                <li key={item && item.name}>;
                  <Link
                    href={item && item.href}
                    className="text-gray-400 hover:text-white transition-colors">;
                    {item && item.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
        {/* Bottom Bar */}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
