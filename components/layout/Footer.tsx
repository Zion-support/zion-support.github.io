

import {
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  Code
  Smartphone
  Cloud
  Database
  Shield
  Zap
=======
=======
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
    { name: 'Instagram', href: '#', icon: Instagram },;  ];
  return (




  ];
  return (

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
import Link from 'next / link';
;
import {
  Phone,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
=======  Instagram,
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            </ul>;
          </div>;

              {socialLinks && socialLinks.map((social) => (;


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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};

export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: '/faq' } ]; const socialLinks = [ { name: 'LinkedIn',href: 'https: { name: 'Twitter',href: 'https: { name: 'GitHub',href: 'https: { name: 'Facebook',href: 'https: ]; return ( <footer className="bg-slate-900 border-t border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div> <p className="text-gray-400 text-sm">AI,cloud,and modern software solutions.</p> </div> <div> <div className="text-white font-semibold mb-3">Company</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/about" className="hover:text-white">About</Link> <Link href="/careers" className="hover:text-white">Careers</Link> <Link href="/pricing" className="hover:text-white">Pricing</Link> <Link href="/contact" className="hover:text-white">Contact</Link> </nav> </div> <div> <div className="text-white font-semibold mb-3">Resources</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/blog" className="hover:text-white">Blog</Link> <Link href="/docs" className="hover:text-white">Docs</Link> <Link href="/privacy" className="hover:text-white">Privacy</Link> <Link href="/terms" className="hover:text-white">Terms</Link> <Link href="/sitemap" className="hover:text-white">Sitemap</Link> </nav> </div> </div> <div className="border-t border-slate-800 py-6"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap-4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>  <footer className="bg-gray-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div> <p className="text-gray-300 mb-6"> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={social.name} > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Services</h3> <ul className="space-y-2"> {services.map((service) => ( <li key={service.name}> <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Company</h3> <ul className="space-y-2"> {company.map((item) => ( <li key={item.name}> <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Resources</h3> <ul className="space-y-2 mb-6"> {resources.map((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text-lg font-semibold mb-4">Contact</h3> <div className="space-y-2"> <div className="flex items-center text-gray-300"> <Mail className="h-4 w-4 mr-2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400"> info@ziontechgroup.com </a> </div> <div className="flex items-center text-gray-300"> <Phone className="h-4 w-4 mr-2" /> <a href="tel:+1-555-123-4567" className="hover:text-blue-400"> +1 (555) 123-4567 </a> </div> <div className="flex items-start text-gray-300"> <MapPin className="h-4 w-4 mr-2 mt-0.5" /> <span> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className="border-t border-gray-700 mt-8 pt-8"> <div className="flex flex-col md:flex-row justify-between items-center"> <p className="text-gray-300 text-sm"> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className="flex space-x-6 mt-4 md:mt-0"> <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm"> Privacy Policy </Link> <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm"> Terms of Service </Link> <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;

<<<<<<< HEAD
}
}
}
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
