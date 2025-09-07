<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
=======
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' }
  ];

;
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram  } from 'lucide-react';
const Footer = () => {const services = [;
    { name: 'AI Services', href: '/ai-services' },{ name: 'IT Services', href: '/it-services' },{ name: 'Micro SaaS', href: '/micro-saas' },{ name: 'Cloud Migration', href: '/solutions/cloud-migration' },{ name: 'Cybersecurity', href: '/solutions/cybersecurity' }
  ];const company = [;
    { name: 'About Us', href: '/about' },{ name: 'Our Team', href: '/team' },{ name: 'Careers', href: '/careers' },{ name: 'News', href: '/news' },{ name: 'Contact', href: '/contact' }
  ];const resources = [;
    { name: 'Documentation', href: '/docs' },{ name: 'API Reference', href: '/api' },{ name: 'Blog', href: '/blog' },{ name: 'Case Studies', href: '/case-studies' },{ name: 'White Papers', href: '/white-papers' }
  ];import { Phone,Mail,MapPin,Facebook,Twitter,Linkedin,Instagram,Code,Smartphone,Cloud,Database,Shield,Zap;
 } from 'lucide-react';
const Footer: React.FC = () => {const currentYear = new Date().getFullYear()const services = [;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

const Footer = (
 ;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github }
=======


  const socialLinks = []
    { name: 'Facebook', href: '#', icon: Facebook },'
    { name: 'Twitter', href: '#', icon: Twitter },'
    { name: 'LinkedIn', href: '#', icon: Linkedin },'
    { name: 'Instagram', href: '#', icon: Instagram },

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from 'react';
import Link from 'next/link';
=======
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' },
  ];

>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
import { 
  Phone, 
  Mail, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram,
  Code,
  Smartphone,
  Cloud,
  Database,
<<<<<<< HEAD
<<<<<<< HEAD
  Shield,
  Zap;
=======
  Shield}
  Zap;}
=======
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
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
  Shield,
<<<<<<< HEAD
  Zap,
  Github
=======
  Zap;
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
} from 'lucide-react';
const Footer: React.FC = () => {
<<<<<<< HEAD
  const currentYear = new Date().getFullYear();
=======
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398

  const currentYear = new Date().getFullYear()
  const services = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
    { name: 'Web Development', href: '/services/web-development', icon: Code },
    { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud },
    { name: 'Database Management', href: '/services/database-management', icon: Database },
    { name: 'Security Services', href: '/services/security', icon: Shield },
    { name: 'Performance Optimization', href: '/services/performance', icon: Zap },
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    { name: 'Web Development', href: '/services/web-development' }
{ name: 'Mobile Apps', href: '/services/mobile-apps' }
    { name: 'AI Solutions', href: '/services/ai-solutions' }
    { name: 'Cloud Services', href: '/services/cloud-services' }
<<<<<<< HEAD
  ];
  const solutions = [;
  ];
  const company = [;
    { name: 'Careers', href: '/careers' },{ name: 'Contact', href: '/contact' },{ name: 'Privacy Policy', href: '/privacy' },{ name: 'Terms of Service', href: '/terms' }
  ];
  const socialLinks = [;
  ];
  return (<footer className="bg-gray-900 text-white">;
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
              Transforming businesses through innovative technology solutions.;
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
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-400 hover:text-white transition-colors">;
                  kleber@ziontechgroup.com;
                </a>;
              </div>;
              <div className="flex items-center space-x-3">;
                <MapPin className="w-4 h-4 text-blue-400" />;
                <span className="text-gray-400">;
                  364 E Main St STE 1008<br />;
  const solutions = [
  ];
  const company = [
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];
  const socialLinks = [
=======
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
  ];
  const solutions = [
<<<<<<< HEAD
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'E-commerce Platforms', href: '/solutions/ecommerce' },
    { name: 'Healthcare Technology', href: '/solutions/healthcare' },
    { name: 'Educational Platforms', href: '/solutions/education' },
=======
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
  ];
  const company = [
<<<<<<< HEAD
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
=======
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
  ];
<<<<<<< HEAD

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Contact Support', href: '/contact' },
    { name: 'Status', href: '/status' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
=======
  const socialLinks = [
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  ];
=======
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
  ]
  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD



=======
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider specializing in AI, cloud computing, 
              and innovative software development for businesses worldwide.
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
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
=======
"
    <footer className=\"bg-gray-900 text-white\" />"
      <div className=\"container mx-auto px-4 py-12\" />"
        <div className=\"grid grid-cols-1 md: grid-cols-2 lg:grid-cols-5 gap-8\" />
          {/* Company Info *}
}"
          <div className=\"lg:col-span-2\" />"
            <div className=\"flex items-center space-x-2 mb-4\" />"
              <div className=\"w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center\" />"
                <Code className=\"w-5 h-5 text-white\" />
              </div>"
              <span className=\"text-xl font-bold\" />Zion Tech Group</span>
            </div>"
            <p className=\"text-gray-400 mb-6 max-w-sm\" />
              Transforming businesses through innovative technology solutions.
              We deliver cutting-edge software, AI, and cloud services.

            </p>"
            <div className=\"space-y-3\" />"
              <div className=\"flex items-center space-x-3\" />"
                <Phone className=\"w-4 h-4 text-blue-400\" />"
                <a href=\"tel:+13024640950\" className=\"text-gray-400 hover:text-white transition-colors\" />
                  +1 302 464 0950;
                </a>
              </div>"
              <div className=\"flex items-center space-x-3\" />"
                <Mail className=\"w-4 h-4 text-blue-400\" />"
                <a href=\"mailto:kleber@ziontechgroup.com\" className=\"text-gray-400 hover:text-white transition-colors\" />
                  kleber@ziontechgroup.com;
                </a>
              </div>"
              <div className=\"flex items-center space-x-3\" />"
                <MapPin className=\"w-4 h-4 text-blue-400\" />"
                <span className=\"text-gray-400\" />
                  364 E Main St STE 1008<br />
                  Middletown DE 19709;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                </span>
=======
              Transforming businesses through innovative technology solutions.
              We deliver cutting-edge software, AI, and cloud services.

>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">123 Tech Street, Innovation City, IC 12345</span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </div>
            </div>
          </div>
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
<<<<<<< HEAD
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
                <a;
<<<<<<< HEAD
                  key={social && social.name}
                  href={social && social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text-gray-400 hover:text-blue-400 transition-colors";
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
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {services && services.map((service) => (<li key={service && service.name}>;
                  <Link;
              {services && services.map((service) => (;
                <li key={service && service.name}>;
                  <Link
          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {solutions && solutions.map((solution) => (<li key={solution && solution.name}>;
                  <Link;
              {solutions && solutions.map((solution) => (;
                <li key={solution && solution.name}>;
                  <Link
                    href={solution && solution.href}
                    className="text-gray-400 hover:text-white transition-colors">;
=======
=======
                <a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  key={social && social.name}
                  href={social && social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social && social.name}>;
                  <social && social.icon className="h-5 w-5" />;
                </a>;
              ))}
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {services && services.map((service) => (;
                <li key={service && service.name}>;
                  <Link
          {/* Solutions */}
<<<<<<< HEAD
          <div />;"
            <h3 className=\"text-lg font-semibold mb-4\" />Solutions</h3>;"
            <ul className=\"space-y-2\" />;
              {solutions && solutions.map((solution) => (<li key={solution && solution.name} />;
                  <Link;
              {solutions && solutions.map((solution) = /> (;}
                <li key={solution && solution.name} />;
                  <Link;
href={solution && solution.href}"
                    className=\"text-gray-400 hover:text-white transition-colors\" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {solutions && solutions.map((solution) => (;
                <li key={solution && solution.name}>;
                  <Link
                    href={solution && solution.href}
                    className="text-gray-400 hover:text-white transition-colors">;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    {solution && solution.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company & Support */}
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    </footer>)}}export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear()const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: '/faq' } ]; const socialLinks = [ { name: 'LinkedIn',href: 'https: { name: 'Twitter',href: 'https: { name: 'GitHub',href: 'https: { name: 'Facebook',href: 'https: ]; return ( <footer className="bg-slate-900 border-t border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div> <p className="text-gray-400 text-sm">AI,cloud,and modern software solutions.</p> </div> <div> <div className="text-white font-semibold mb-3">Company</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/about" className="hover:text-white">About</Link> <Link href="/careers" className="hover:text-white">Careers</Link> <Link href="/pricing" className="hover:text-white">Pricing</Link> <Link href="/contact" className="hover:text-white">Contact</Link> </nav> </div> <div> <div className="text-white font-semibold mb-3">Resources</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/blog" className="hover:text-white">Blog</Link> <Link href="/docs" className="hover:text-white">Docs</Link> <Link href="/privacy" className="hover:text-white">Privacy</Link> <Link href="/terms" className="hover:text-white">Terms</Link> <Link href="/sitemap" className="hover:text-white">Sitemap</Link> </nav> </div> </div> <div className="border-t border-slate-800 py-6"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap-4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>  <footer className="bg-gray-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div> <p className="text-gray-300 mb-6"> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={social.name} > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Services</h3> <ul className="space-y-2"> {services.map((service) => ( <li key={service.name}> <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Company</h3> <ul className="space-y-2"> {company.map((item) => ( <li key={item.name}> <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Resources</h3> <ul className="space-y-2 mb-6"> {resources.map((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text-lg font-semibold mb-4">Contact</h3> <div className="space-y-2"> <div className="flex items-center text-gray-300"> <Mail className="h-4 w-4 mr-2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400"> info@ziontechgroup.com </a> </div> <div className="flex items-center text-gray-300"> <Phone className="h-4 w-4 mr-2" /> <a href="tel:+1-555-123-4567" className="hover:text-blue-400"> +1 (555) 123-4567 </a> </div> <div className="flex items-start text-gray-300"> <MapPin className="h-4 w-4 mr-2 mt-0.5" /> <span> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className="border-t border-gray-700 mt-8 pt-8"> <div className="flex flex-col md:flex-row justify-between items-center"> <p className="text-gray-300 text-sm"> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className="flex space-x-6 mt-4 md:mt-0"> <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm"> Privacy Policy </Link> <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm"> Terms of Service </Link> <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;export default Footer;import React from 'react'; import Link from 'next / link'; import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react'; const Footer: React.FC = () => { const current_year = new Date ().getFullYear ()const services = [ { name: 'AI Development', href: '/services / ai - development' }, { name: 'Cloud Solutions', href: '/services / cloud - solutions' }, { name: 'Web Development', href: '/services / web - development' }, { name: 'Mobile Apps', href: '/services / mobile - development' }, { name: 'Blockchain Solutions', href: '/services / blockchain' }, { name: 'IoT Platforms', href: '/services / iot - platforms' }, { name: 'Data Analytics', href: '/services / data - analytics' }, { name: 'Cybersecurity', href: '/services / cybersecurity' } ]; const company = [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'News & Updates', href: '/blog' }, { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' } ]; const resources = [ { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case - studies' }, { name: 'Documentation', href: '/docs' }, { name: 'Support', href: '/support' }, { name: 'FAQ', href: '/faq' } ]; const social_links = [ { name: 'LinkedIn', href: 'https: { name: 'Twitter', href: 'https: { name: 'GitHub', href: 'https: { name: 'Facebook', href: 'https: ]; return ( <footer className="bg - slate - 900 border - t border - slate - 800"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8"> <div> <div className="text - white font - bold text - xl mb - 2">Zion Tech Group</div> <p className="text - gray - 400 text - sm">AI, cloud, and modern software solutions.</p> </div> <div> <div className="text - white font - semibold mb - 3">Company</div> <nav className="flex flex - col gap - 2 text - gray - 300 text - sm"> <Link href="/about" className="hover:text - white">About</Link> <Link href="/careers" className="hover:text - white">Careers</Link> <Link href="/pricing" className="hover:text - white">Pricing</Link> <Link href="/contact" className="hover:text - white">Contact</Link> </nav> </div> <div> <div className="text - white font - semibold mb - 3">Resources</div> <nav className="flex flex - col gap - 2 text - gray - 300 text - sm"> <Link href="/blog" className="hover:text - white">Blog</Link> <Link href="/docs" className="hover:text - white">Docs</Link> <Link href="/privacy" className="hover:text - white">Privacy</Link> <Link href="/terms" className="hover:text - white">Terms</Link> <Link href="/sitemap" className="hover:text - white">Sitemap</Link> </nav> </div> </div> <div className="border - t border - slate - 800 py - 6"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 flex items - center justify - between text - gray - 400 text - sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap - 4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text - white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text - white">+1 302 464 0950</a>  <footer className="bg - gray - 900 text - white"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8"> {} <div className="lg:col - span - 1"> <div className="text - 2xl font - bold text - blue - 400 mb - 4">Zion Tech Group</div> <p className="text - gray - 300 mb - 6"> Leading technology solutions provider helping businesses transform their digital presence with cutting - edge AI, cloud architecture, and innovative development services. </p> <div className="flex space - x-4"> {social_links.map ((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text - gray - 400 hover:text - blue - 400 transition - colors" aria - label={social.name} > <social.icon className="h - 5 w - 5" /> </a> ))} </div> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Services</h3> <ul className="space - y-2"> {services.map ((service) => ( <li key={service.name}> <Link href={service.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Company</h3> <ul className="space - y-2"> {company.map ((item) => ( <li key={item.name}> <Link href={item.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Resources</h3> <ul className="space - y-2 mb - 6"> {resources.map ((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text - lg font - semibold mb - 4">Contact</h3> <div className="space - y-2"> <div className="flex items - center text - gray - 300"> <Mail className="h - 4 w - 4 mr - 2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text - blue - 400"> info@ziontechgroup.com </a> </div> <div className="flex items - center text - gray - 300"> <Phone className="h - 4 w - 4 mr - 2" /> <a href="tel:+1 - 555 - 123 - 4567" className="hover:text - blue - 400"> +1 (555) 123 - 4567 </a> </div> <div className="flex items - start text - gray - 300"> <MapPin className="h - 4 w - 4 mr - 2 mt - 0.5" /> <span> 123 Tech Street < br /> San Francisco, CA 94105 </span> </div> </div> </div> </div> {} <div className="border - t border - gray - 700 mt - 8 pt - 8"> <div className="flex flex - col md:flex - row justify - between items - center"> <p className="text - gray - 300 text - sm"> &copy; {current_year} Zion Tech Group. All rights reserved. </p> <div className="flex space - x-6 mt - 4 md:mt - 0"> <Link href="/privacy" className="text - gray - 300 hover:text - blue - 400 text - sm"> Privacy Policy </Link> <Link href="/terms" className="text - gray - 300 hover:text - blue - 400 text - sm"> Terms of Service </Link> <Link href="/sitemap" className="text - gray - 300 hover:text - blue - 400 text - sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;import { motion  } from 'framer-motion';
=======
    </footer>)}}

export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react';

const Footer: React.FC = () => { const currentYear = new Date().getFullYear(;
  const services = [   { name: 'AI Development'}
  href: '/services/ai-development'}
},
  { name: 'Cloud Solutions'}
  href: '/services/cloud-solutions'}
},
  { name: 'Web Development'}
  href: '/services/web-development'}
},
  { name: 'Mobile Apps'}
  href: '/services/mobile-development'}
},
  { name: 'Blockchain Solutions'}
  href: '/services/blockchain'}
},
  { name: 'IoT Platforms'}
  href: '/services/iot-platforms'}
},
  { name: 'Data Analytics'}
  href: '/services/data-analytics'}
},
{ name: 'Cybersecurity'}
  href: '/services/cybersecurity'}
} ];

const company = [   { name: 'About Us'}
  href: '/about'}
},
  { name: 'Our Team'}
  href: '/about#team'}
},
  { name: 'Careers'}
  href: '/careers'}
},
  { name: 'News & Updates'}
  href: '/blog'}
},
  { name: 'Privacy Policy'}
  href: '/privacy'}
},
{ name: 'Terms of Service'}
  href: '/terms'}
} ];

const resources = [   { name: 'Blog'}
  href: '/blog'}
},
  { name: 'Case Studies'}
  href: '/case-studies'}
},
  { name: 'Documentation'}
  href: '/docs'}
},
  { name: 'Support'}
  href: '/support'}
},
{ name: 'FAQ'}
  href: '/faq'}
} ];

const socialLinks = [ { name: 'LinkedIn',
  href: 'https: { name: 'Twitter',
  href: 'https: { name: 'GitHub',
  href: 'https: { name: 'Facebook'}"
  href: 'https: ]; return ( <footer className=\"bg-slate-900 border-t border-slate-800\" /> <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8\" /> <div /> <div className=\"text-white font-bold text-xl mb-2\" />Zion Tech Group</div> <p className=\"text-gray-400 text-sm\" />AI,cloud,and modern software solutions.</p> </div> <div /> <div className=\"text-white font-semibold mb-3\" />Company</div> <nav className=\"flex flex-col gap-2 text-gray-300 text-sm\" /> <Link href=\"/about\" className=\"hover: text-white\" />About</Link> <Link href=\"/careers\" className=\"hover:text-white\" />Careers</Link> <Link href=\"/pricing\" className=\"hover:text-white\" />Pricing</Link> <Link href=\"/contact\" className=\"hover:text-white\" />Contact</Link> </nav> </div> <div /> <div className=\"text-white font-semibold mb-3\" />Resources</div> <nav className=\"flex flex-col gap-2 text-gray-300 text-sm\" /> <Link href=\"/blog\" className=\"hover:text-white\" />Blog</Link> <Link href=\"/docs\" className=\"hover:text-white\" />Docs</Link> <Link href=\"/privacy\" className=\"hover:text-white\" />Privacy</Link> <Link href=\"/terms\" className=\"hover:text-white\" />Terms</Link> <Link href=\"/sitemap\" className=\"hover:text-white\" />Sitemap</Link> </nav> </div> </div> <div className=\"border-t border-slate-800 py-6\" /> <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm\" /> <div />© {year} Zion Tech Group. All rights reserved.</div> <div className=\"flex gap-4\" /> <a href=\"mailto:kleber@ziontechgroup.com\" className=\"hover:text-white\" />kleber@ziontechgroup.com</a> <a href=\"tel:+13024640950\" className=\"hover:text-white\" />+1 302 464 0950</a>  <footer className=\"bg-gray-900 text-white\" /> <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\" /> <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\" /> ,"
} <div className=\"lg:col-span-1\" /> <div className=\"text-2xl font-bold text-blue-400 mb-4\" />Zion Tech Group</div> <p className=\"text-gray-300 mb-6\" /> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className=\"flex space-x-4\" /> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-gray-400 hover: text-blue-400 transition-colors\" aria-label={social.name}  /> <social.icon className=\"h-5 w-5\" /> </a> ))} </div> </div> {} <div /> <h3 className=\"text-lg font-semibold mb-4\" />Services</h3> <ul className=\"space-y-2\" /> {services.map((service) => ( <li key={service.name} /> <Link href={service.href} className=\"text-gray-300 hover:text-blue-400 transition-colors\"  /> {service.name} </Link> </li> ))} </ul> </div> {} <div /> <h3 className=\"text-lg font-semibold mb-4\" />Company</h3> <ul className=\"space-y-2\" /> {company.map((item) => ( <li key={item.name} /> <Link href={item.href} className=\"text-gray-300 hover:text-blue-400 transition-colors\"  /> {item.name} </Link> </li> ))} </ul> </div> {} <div /> <h3 className=\"text-lg font-semibold mb-4\" />Resources</h3> <ul className=\"space-y-2 mb-6\" /> {resources.map((resource) => ( <li key={resource.name} /> <Link href={resource.href} className=\"text-gray-300 hover:text-blue-400 transition-colors\"  /> {resource.name} </Link> </li> ),"
} </ul> <h3 className=\"text-lg font-semibold mb-4\" />Contact</h3> <div className=\"space-y-2\" /> <div className=\"flex items-center text-gray-300\" /> <Mail className=\"h-4 w-4 mr-2\" /> <a href=\"mailto:info@ziontechgroup.com\" className=\"hover:text-blue-400\" /> info@ziontechgroup.com </a> </div> <div className=\"flex items-center text-gray-300\" /> <Phone className=\"h-4 w-4 mr-2\" /> <a href=\"tel:+1-555-123-4567\" className=\"hover:text-blue-400\" /> +1 (555) 123-4567 </a> </div> <div className=\"flex items-start text-gray-300\" /> <MapPin className=\"h-4 w-4 mr-2 mt-0.5\" /> <span /> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className=\"border-t border-gray-700 mt-8 pt-8\" /> <div className=\"flex flex-col md:flex-row justify-between items-center\" /> <p className=\"text-gray-300 text-sm\" /> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className = \"flex space-x-6 mt-4 md:mt-0\" /> <Link href=\"/privacy\" className=\"text-gray-300 hover:text-blue-400 text-sm\" /> Privacy Policy </Link> <Link href=\"/terms\" className=\"text-gray-300 hover:text-blue-400 text-sm\" /> Terms of Service </Link> <Link href=\"/sitemap\" className=\"text-gray-300 hover:text-blue-400 text-sm\" /> Sitemap </Link> </div> </div> </div> </div> </footer> ;
}

export default Footer;

export default Footer;import React from 'react'; import Link from 'next / link'; import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const Footer: React.FC = () => { const current_year = new Date ().getFullYear (;
  const services = [   { name: 'AI Development'}
  href: '/services / ai - development'}
},
   { name: 'Cloud Solutions'}
  href: '/services / cloud - solutions'}
},
   { name: 'Web Development'}
  href: '/services / web - development'}
},
   { name: 'Mobile Apps'}
  href: '/services / mobile - development'}
},
   { name: 'Blockchain Solutions'}
  href: '/services / blockchain'}
},
   { name: 'IoT Platforms'}
  href: '/services / iot - platforms'}
},
   { name: 'Data Analytics'}
  href: '/services / data - analytics'}
},
 { name: 'Cybersecurity'}
  href: '/services / cybersecurity'}
} ];

const company = [   { name: 'About Us'}
  href: '/about'}
},
   { name: 'Our Team'}
  href: '/about#team'}
},
   { name: 'Careers'}
  href: '/careers'}
},
   { name: 'News & Updates'}
  href: '/blog'}
},
   { name: 'Privacy Policy'}
  href: '/privacy'}
},
 { name: 'Terms of Service'}
  href: '/terms'}
} ];

const resources = [   { name: 'Blog'}
  href: '/blog'}
},
   { name: 'Case Studies'}
  href: '/case - studies'}
},
   { name: 'Documentation'}
  href: '/docs'}
},
   { name: 'Support'}
  href: '/support'}
},
 { name: 'FAQ'}
  href: '/faq'}
} ];

const social_links = [ { name: 'LinkedIn',
  href: 'https: { name: 'Twitter',
  href: 'https: { name: 'GitHub',
  href: 'https: { name: 'Facebook'}"
  href: 'https: ]; return ( <footer className=\"bg - slate - 900 border - t border - slate - 800\" /> <div className=\"max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8\" /> <div /> <div className=\"text - white font - bold text - xl mb - 2\" />Zion Tech Group</div> <p className=\"text - gray - 400 text - sm\" />AI, cloud, and modern software solutions.</p> </div> <div /> <div className=\"text - white font - semibold mb - 3\" />Company</div> <nav className=\"flex flex - col gap - 2 text - gray - 300 text - sm\" /> <Link href=\"/about\" className=\"hover: text - white\" />About</Link> <Link href=\"/careers\" className=\"hover:text - white\" />Careers</Link> <Link href=\"/pricing\" className=\"hover:text - white\" />Pricing</Link> <Link href=\"/contact\" className=\"hover:text - white\" />Contact</Link> </nav> </div> <div /> <div className=\"text - white font - semibold mb - 3\" />Resources</div> <nav className=\"flex flex - col gap - 2 text - gray - 300 text - sm\" /> <Link href=\"/blog\" className=\"hover:text - white\" />Blog</Link> <Link href=\"/docs\" className=\"hover:text - white\" />Docs</Link> <Link href=\"/privacy\" className=\"hover:text - white\" />Privacy</Link> <Link href=\"/terms\" className=\"hover:text - white\" />Terms</Link> <Link href=\"/sitemap\" className=\"hover:text - white\" />Sitemap</Link> </nav> </div> </div> <div className=\"border - t border - slate - 800 py - 6\" /> <div className=\"max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 flex items - center justify - between text - gray - 400 text - sm\" /> <div />© {year} Zion Tech Group. All rights reserved.</div> <div className=\"flex gap - 4\" /> <a href=\"mailto:kleber@ziontechgroup.com\" className=\"hover:text - white\" />kleber@ziontechgroup.com</a> <a href=\"tel:+13024640950\" className=\"hover:text - white\" />+1 302 464 0950</a>  <footer className=\"bg - gray - 900 text - white\" /> <div className=\"max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12\" /> <div className=\"grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8\" /> ,"
} <div className=\"lg:col - span - 1\" /> <div className=\"text - 2xl font - bold text - blue - 400 mb - 4\" />Zion Tech Group</div> <p className=\"text - gray - 300 mb - 6\" /> Leading technology solutions provider helping businesses transform their digital presence with cutting - edge AI, cloud architecture, and innovative development services. </p> <div className=\"flex space - x-4\" /> {social_links.map ((social) => ( <a key={social.name} href={social.href} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text - gray - 400 hover: text - blue - 400 transition - colors\" aria - label={social.name}  /> <social.icon className=\"h - 5 w - 5\" /> </a> ))} </div> </div> {} <div /> <h3 className=\"text - lg font - semibold mb - 4\" />Services</h3> <ul className=\"space - y-2\" /> {services.map ((service) => ( <li key={service.name} /> <Link href={service.href} className=\"text - gray - 300 hover:text - blue - 400 transition - colors\"  /> {service.name} </Link> </li> ))} </ul> </div> {} <div /> <h3 className=\"text - lg font - semibold mb - 4\" />Company</h3> <ul className=\"space - y-2\" /> {company.map ((item) => ( <li key={item.name} /> <Link href={item.href} className=\"text - gray - 300 hover:text - blue - 400 transition - colors\"  /> {item.name} </Link> </li> ))} </ul> </div> {} <div /> <h3 className=\"text - lg font - semibold mb - 4\" />Resources</h3> <ul className=\"space - y-2 mb - 6\" /> {resources.map ((resource) => ( <li key={resource.name} /> <Link href={resource.href} className=\"text - gray - 300 hover:text - blue - 400 transition - colors\"  /> {resource.name} </Link> </li> ),"
} </ul> <h3 className=\"text - lg font - semibold mb - 4\" />Contact</h3> <div className=\"space - y-2\" /> <div className=\"flex items - center text - gray - 300\" /> <Mail className=\"h - 4 w - 4 mr - 2\" /> <a href=\"mailto:info@ziontechgroup.com\" className=\"hover:text - blue - 400\" /> info@ziontechgroup.com </a> </div> <div className=\"flex items - center text - gray - 300\" /> <Phone className=\"h - 4 w - 4 mr - 2\" /> <a href=\"tel:+1 - 555 - 123 - 4567\" className=\"hover:text - blue - 400\" /> +1 (555) 123 - 4567 </a> </div> <div className=\"flex items - start text - gray - 300\" /> <MapPin className=\"h - 4 w - 4 mr - 2 mt - 0.5\" /> <span /> 123 Tech Street < br /> San Francisco, CA 94105 </span> </div> </div> </div> </div> {} <div className=\"border - t border - gray - 700 mt - 8 pt - 8\" /> <div className=\"flex flex - col md:flex - row justify - between items - center\" /> <p className=\"text - gray - 300 text - sm\" /> &copy; {current_year} Zion Tech Group. All rights reserved. </p> <div className = \"flex space - x-6 mt - 4 md:mt - 0\" /> <Link href=\"/privacy\" className=\"text - gray - 300 hover:text - blue - 400 text - sm\" /> Privacy Policy </Link> <Link href=\"/terms\" className=\"text - gray - 300 hover:text - blue - 400 text - sm\" /> Terms of Service </Link> <Link href=\"/sitemap\" className=\"text - gray - 300 hover:text - blue - 400 text - sm\" /> Sitemap </Link> </div> </div> </div> </div> </footer> ;
}

export default Footer;import { motion  } from 'framer-motion';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  MapPin,Phone,Mail,Clock,Facebook,Twitter,Linkedin,Instagram,Github;
} from 'lucide-react';const Footer = () => {const footerSections = {services: [;
      { name: 'AI Services', href: '/ai-services' },{ name: 'IT Services', href: '/it-services' },{ name: 'Micro SaaS', href: '/micro-saas' },{ name: 'Cloud Solutions', href: '/cloud-solutions' },{ name: 'Cybersecurity', href: '/security' },{ name: 'Data Analytics', href: '/data-analytics' }
    ],solutions: [;
      { name: 'Enterprise Solutions', href: '/enterprise-solutions' },{ name: 'Startup Solutions', href: '/startup-solutions' },{ name: 'Digital Transformation', href: '/solutions/digital-transformation' },{ name: 'Cloud Migration', href: '/solutions/cloud-migration' },{ name: 'AI Implementation', href: '/solutions/ai-implementation' },{ name: 'Custom Development', href: '/custom-development' }
    ],company: [;
      { name: 'About Us', href: '/about' },{ name: 'Our Team', href: '/team' },{ name: 'Careers', href: '/careers' },{ name: 'Partners', href: '/partners' },{ name: 'News', href: '/news' },{ name: 'Contact', href: '/contact' }
    ],resources: [;
      { name: 'Blog', href: '/blog' },{ name: 'Case Studies', href: '/case-studies' },{ name: 'White Papers', href: '/white-papers' },{ name: 'Webinars', href: '/webinars' },{ name: 'Documentation', href: '/docs' },{ name: 'Support', href: '/support' }
    ],legal: [;
      { name: 'Privacy Policy', href: '/privacy' },{ name: 'Terms of Service', href: '/terms' },{ name: 'Cookie Policy', href: '/cookies' },{ name: 'Accessibility', href: '/accessibility' }
    ];
<<<<<<< HEAD
  }ursor/automate-test-improve-and-merge-code-646c;
  const socialLinks = [;
    { name: 'Facebook', href: '#', icon: Facebook },{ name: 'Twitter', href: '#', icon: Twitter },{ name: 'LinkedIn', href: '#', icon: Linkedin },{ name: 'Instagram', href: '#', icon: Instagram },{ name: 'GitHub', href: '#', icon: Github }];return (<footer className="bg-gray-900 text-white">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">;
          {/* Company Info */}
          <div className="lg:col-span-2">;
            <div className="flex items-center mb-6">;
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-xl">Z</span>;
              </div>;
              <span className="ml-3 text-2xl font-bold">Zion Tech Group</span>;
            </div>;
            <p className="text-gray-300 mb-6 max-w-md">;
              Leading technology solutions provider specializing in AI, cloud computing,and digital transformation services for businesses worldwide.;
            </p>;
            {/* Contact Info */}
            <div className="space-y-3">;
              <div className="flex items-center text-gray-300">;
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />;
                <span>123 Tech Street, Innovation City, IC 12345</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Phone className="h-5 w-5 mr-3 text-blue-400" />;
                <span>+1 (555) 123-4567</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="h-5 w-5 mr-3 text-blue-400" />;
                <span>info@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Clock className="h-5 w-5 mr-3 text-blue-400" />;
                <span>Mon-Fri 9AM-6PM EST</span>;
=======
  };

const socialLinks = [
  { name: 'Facebook'}
  href: '#', icon: Facebook}
},{ name: 'Twitter'}
  href: '#', icon: Twitter}
},{ name: 'LinkedIn'}
  href: '#', icon: Linkedin}
},{ name: 'Instagram'}
  href: '#', icon: Instagram}
},{ name: 'GitHub'}
  href: '#', icon: Github}"
}];return (<footer className=\"bg-gray-900 text-white\" />;"
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\" />;
        {/* Main Footer Content */}"
        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8\" />;
          {/* Company Info */}"
          <div className=\"lg:col-span-2\" />;"
            <div className=\"flex items-center mb-6\" />;"
              <div className=\"w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center\" />;"
                <span className=\"text-white font-bold text-xl\" />Z</span>;
              </div>;"
              <span className=\"ml-3 text-2xl font-bold\" />Zion Tech Group</span>;
            </div>;"
            <p className=\"text-gray-300 mb-6 max-w-md\" />;
              Leading technology solutions provider specializing in AI, cloud computing,and digital transformation services for businesses worldwide.;
            </p>;
            {/* Contact Info */}"
            <div className=\"space-y-3\" />;"
              <div className=\"flex items-center text-gray-300\" />;"
                <MapPin className=\"h-5 w-5 mr-3 text-blue-400\" />;
                <span />123 Tech Street, Innovation City, IC 12345</span>;
              </div>;"
              <div className=\"flex items-center text-gray-300\" />;"
                <Phone className=\"h-5 w-5 mr-3 text-blue-400\" />;
                <span />+1 (555) 123-4567</span>;
              </div>;"
              <div className=\"flex items-center text-gray-300\" />;"
                <Mail className=\"h-5 w-5 mr-3 text-blue-400\" />;
                <span />info@ziontechgroup.com</span>;
              </div>;"
              <div className=\"flex items-center text-gray-300\" />;"
                <Clock className=\"h-5 w-5 mr-3 text-blue-400\" />;
                <span />Mon-Fri 9AM-6PM EST</span>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
              </div>;
            </div>;
          </div>;
          {/* Services */}
<<<<<<< HEAD
          <div>;
            <h3 className="text-lg font-semibold mb-6">Services</h3>;
            <ul className="space-y-3">;
              {footerSections.services.map((item) => (<li key={item.name}>;
                  <Link;
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200";
                  >;
                    {item.name}
=======
          <div />;"
            <h3 className=\"text-lg font-semibold mb-6\" />Services</h3>;"
            <ul className=\"space-y-3\" />;
              {footerSections.services.map((item) => (<li key={item.name} />;
                  <Link;
                    href={item.href}"
                    className=\"text-gray-300 hover: text-white transition-colors duration-200\" />

                    {item.nam}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Solutions */}
<<<<<<< HEAD
          <div>;
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>;
            <ul className="space-y-3">;
              {footerSections.solutions.map((item) => (<li key={item.name}>;
                  <Link;
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200";
                  >;
                    {item.name}</Link>;
=======
          <div />;"
            <h3 className=\"text-lg font-semibold mb-6\" />Solutions</h3>;"
            <ul className=\"space-y-3\" />;
              {footerSections.solutions.map((item) => (<li key={item.name} />;
                  <Link;
                    href={item.href}"
                    className=\"text-gray-300 hover: text-white transition-colors duration-200\" />

                    {item.nam}
}</Link>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company */}
<<<<<<< HEAD
          <div>;
            <h3 className="text-lg font-semibold mb-6">Company</h3>;
            <ul className="space-y-3">;
              {footerSections.company.map((item) => (<li key={item.name}>;
                  <Link;
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200";
                  >;
                    {item.name}
=======
          <div />;"
            <h3 className=\"text-lg font-semibold mb-6\" />Company</h3>;"
            <ul className=\"space-y-3\" />;
              {footerSections.company.map((item) => (<li key={item.name} />;
                  <Link;
                    href={item.href}"
                    className=\"text-gray-300 hover: text-white transition-colors duration-200\" />

                    {item.nam}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Resources */}
<<<<<<< HEAD
          <div>;
            <h3 className="text-lg font-semibold mb-6">Resources</h3>;
            <ul className="space-y-3">;
              {footerSections.resources.map((item) => (<li key={item.name}>;
                  <Link;
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200";
                  >;
                    {item.name}
=======
          <div />;"
            <h3 className=\"text-lg font-semibold mb-6\" />Resources</h3>;"
            <ul className=\"space-y-3\" />;
              {footerSections.resources.map((item) => (<li key={item.name} />;
                  <Link;
                    href={item.href}"
                    className=\"text-gray-300 hover: text-white transition-colors duration-200\" />

                    {item.nam}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
<<<<<<< HEAD
        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <div className="flex space-x-6 mb-4 md:mb-0">;
              {socialLinks.map((social) => (<Link;
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200";
                  aria-label={social.name}
                >;
                  <social.icon className="h-6 w-6" />;
                </Link>;
              ))}
            </div>;
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">;
              <div className="flex space-x-6 text-sm">;
                {footerSections.legal.map((item) => (<Link;
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200";
                  >;
                    {item.name}
                  </Link>;
                ))}import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone  } from 'lucide-react';
const Footer: React.FC = () => {return (<footer className="bg-gray-900 text-white">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">;
          <div className="col-span-1 md:col-span-2">;
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>;
            <p className="text-gray-300 mb-4">;
              Leading provider of AI-powered technology solutions and digital transformation services.;
            </p>;
            <div className="flex space-x-4">;
              <a href="#" className="text-gray-400 hover:text-white">;
                <Facebook className="w-5 h-5" />;
              </a>;
              <a href="#" className="text-gray-400 hover:text-white">;
                <Twitter className="w-5 h-5" />;
              </a>;
              <a href="#" className="text-gray-400 hover:text-white">;
                <Linkedin className="w-5 h-5" />;
              </a>;
              <a href="#" className="text-gray-400 hover:text-white">;
                <Instagram className="w-5 h-5" />;
              </a>;
            </div>;
          </div>;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>;
            <ul className="space-y-2">;
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>;
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>;
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>;
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>;
            </ul>;
          </div>;
          <div>;
            <h4 className="text-lg font-semibold mb-4">Contact</h4>;
            <div className="space-y-2">;
              <div className="flex items-center">;
                <Phone className="w-4 h-4 mr-2" />;
                <span className="text-gray-300">+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-4 h-4 mr-2" />;
                <span className="text-gray-300">kleber@ziontechgroup.com</span>;
ursor/automate-test-improve-and-merge-code-646c;
=======
        {/* Social Links */}"
        <div className=\"border-t border-gray-800 mt-12 pt-8\" />;"
          <div className=\"flex flex-col md:flex-row justify-between items-center\" />;"
            <div className=\"flex space-x-6 mb-4 md:mb-0\" />;
              {socialLinks.map((social) => (<Link;}
                  key={social.name}
                  href={social.href}"
                  className=\"text-gray-400 hover:text-white transition-colors duration-200\";
                  aria-label={social.name}
                 />;"
                  <social.icon className=\"h-6 w-6\" />;
                </Link>;
              ))}
            </div>;"
            <div className=\"flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6\" />;"
              <div className=\"flex space-x-6 text-sm\" />;
                {footerSections.legal.map((item) => (<Link;}
                    key={item.name}
                    href={item.href}"
                    className=\"text-gray-400 hover: text-white transition-colors duration-200\" />

                    {item.nam}
}
                  </Link>;
                ))}import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone  } from 'lucide-react';

const Footer: React.FC = () => ;"
  return (<footer className=\"bg-gray-900 text-white\" />;"
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\" />;"
        <div className=\"grid grid-cols-1 md:grid-cols-4 gap-8\" />;"
          <div className=\"col-span-1 md:col-span-2\" />;"
            <h3 className=\"text-2xl font-bold mb-4\" />Zion Tech Group</h3>;"
            <p className=\"text-gray-300 mb-4\" />;
              Leading provider of AI-powered technology solutions and digital transformation services.;
            </p>;"
            <div className=\"flex space-x-4\" />;"
              <a href=\"#\" className=\"text-gray-400 hover:text-white\" />;"
                <Facebook className=\"w-5 h-5\" />;
              </a>;"
              <a href=\"#\" className=\"text-gray-400 hover:text-white\" />;"
                <Twitter className=\"w-5 h-5\" />;
              </a>;"
              <a href=\"#\" className=\"text-gray-400 hover:text-white\" />;"
                <Linkedin className=\"w-5 h-5\" />;
              </a>;"
              <a href=\"#\" className=\"text-gray-400 hover:text-white\" />;"
                <Instagram className=\"w-5 h-5\" />;
              </a>;
            </div>;
          </div>;
          <div />;"
            <h4 className=\"text-lg font-semibold mb-4\" />Quick Links</h4>;"
            <ul className=\"space-y-2\" />;"
              <li /><Link href=\"/\" className=\"text-gray-300 hover:text-white\" />Home</Link></li>;"
              <li /><Link href=\"/services\" className=\"text-gray-300 hover:text-white\" />Services</Link></li>;"
              <li /><Link href=\"/about\" className=\"text-gray-300 hover:text-white\" />About</Link></li>;"
              <li /><Link href=\"/contact\" className=\"text-gray-300 hover:text-white\" />Contact</Link></li>;
            </ul>;
          </div>;
          <div />;"
            <h4 className=\"text-lg font-semibold mb-4\" />Contact</h4>;"
            <div className=\"space-y-2\" />;"
              <div className=\"flex items-center\" />;"
                <Phone className=\"w-4 h-4 mr-2\" />;"
                <span className=\"text-gray-300\" />+1 302 464 0950</span>;
              </div>;"
              <div className=\"flex items-center\" />;"
                <Mail className=\"w-4 h-4 mr-2\" />;"
                <span className=\"text-gray-300\" />kleber@ziontechgroup.com</span>;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
              </div>;
            </div>;
          </div>;
        </div>;
<<<<<<< HEAD
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <p className="text-gray-400 text-sm">;
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
            </p>;
            <div className="flex space-x-6 mt-4 md:mt-0">;
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">;
                Cookie Policy;
              </Link>;
ursor/automate-test-improve-and-merge-code-646c;
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">;
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">;
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>;
            <div className="flex items-center mt-2 md:mt-0">;
              <span className="mr-2">Trusted by</span>;
              <span className="font-semibold text-white">500+</span>;
              <span className="ml-2">companies worldwide</span>;
            </div>;
          </div>;
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">;
          <p className="text-gray-400">;
=======
        {/* Bottom Section */}"
        <div className=\"border-t border-gray-800 mt-8 pt-8\" />;"
          <div className=\"flex flex-col md:flex-row justify-between items-center\" />;"
            <p className=\"text-gray-400 text-sm\" />;
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
            </p>;"
            <div className=\"flex space-x-6 mt-4 md:mt-0\" />;"
              <Link href=\"/privacy\" className=\"text-gray-400 hover:text-blue-400 text-sm transition-colors\" />;
                Privacy Policy;
              </Link>;"
              <Link href=\"/terms\" className=\"text-gray-400 hover:text-blue-400 text-sm transition-colors\" />;
                Terms of Service;
              </Link>;"
              <Link href=\"/cookies\" className=\"text-gray-400 hover:text-blue-400 text-sm transition-colors\" />;
                Cookie Policy;
              </Link>;
;
        {/* Bottom Bar */}"
        <div className=\"border-t border-gray-800 mt-8 pt-8\" />;"
          <div className=\"flex flex-col md:flex-row justify-between items-center text-sm text-gray-400\" />;
            <p />&copy; 2024 Zion Tech Group. All rights reserved.</p>;"
            <div className=\"flex items-center mt-2 md:mt-0\" />;"
              <span className=\"mr-2\" />Trusted by</span>;"
              <span className=\"font-semibold text-white\" />500+</span>;"
              <span className=\"ml-2\" />companies worldwide</span>;
            </div>;
          </div>;"
        <div className=\"border-t border-gray-700 mt-8 pt-8 text-center\" />;"
          <p className=\"text-gray-400\" />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.;
          </p>;
        </div>;
      </div>;
    </footer>;
<<<<<<< HEAD
  )}export default Footer;export default Footer;ursor/automate-test-improve-and-merge-code-646c;
=======
  )}

export default Footer;

export default Footer;;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    </footer>);
;
}

};

<<<<<<< HEAD
<<<<<<< HEAD
export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: '/faq' } ]; const socialLinks = [ { name: 'LinkedIn',href: 'https: { name: 'Twitter',href: 'https: { name: 'GitHub',href: 'https: { name: 'Facebook',href: 'https: ]; return ( <footer className="bg-slate-900 border-t border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div> <p className="text-gray-400 text-sm">AI,cloud,and modern software solutions.</p> </div> <div> <div className="text-white font-semibold mb-3">Company</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/about" className="hover:text-white">About</Link> <Link href="/careers" className="hover:text-white">Careers</Link> <Link href="/pricing" className="hover:text-white">Pricing</Link> <Link href="/contact" className="hover:text-white">Contact</Link> </nav> </div> <div> <div className="text-white font-semibold mb-3">Resources</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/blog" className="hover:text-white">Blog</Link> <Link href="/docs" className="hover:text-white">Docs</Link> <Link href="/privacy" className="hover:text-white">Privacy</Link> <Link href="/terms" className="hover:text-white">Terms</Link> <Link href="/sitemap" className="hover:text-white">Sitemap</Link> </nav> </div> </div> <div className="border-t border-slate-800 py-6"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap-4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>  <footer className="bg-gray-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div> <p className="text-gray-300 mb-6"> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={social.name} > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Services</h3> <ul className="space-y-2"> {services.map((service) => ( <li key={service.name}> <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Company</h3> <ul className="space-y-2"> {company.map((item) => ( <li key={item.name}> <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Resources</h3> <ul className="space-y-2 mb-6"> {resources.map((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text-lg font-semibold mb-4">Contact</h3> <div className="space-y-2"> <div className="flex items-center text-gray-300"> <Mail className="h-4 w-4 mr-2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400"> info@ziontechgroup.com </a> </div> <div className="flex items-center text-gray-300"> <Phone className="h-4 w-4 mr-2" /> <a href="tel:+1-555-123-4567" className="hover:text-blue-400"> +1 (555) 123-4567 </a> </div> <div className="flex items-start text-gray-300"> <MapPin className="h-4 w-4 mr-2 mt-0.5" /> <span> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className="border-t border-gray-700 mt-8 pt-8"> <div className="flex flex-col md:flex-row justify-between items-center"> <p className="text-gray-300 text-sm"> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className="flex space-x-6 mt-4 md:mt-0"> <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm"> Privacy Policy </Link> <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm"> Terms of Service </Link> <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
;
export default Footer;import React from 'react'; import Link from 'next / link'; import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react'; const Footer: React.FC = () => { const current_year = new Date ().getFullYear (); const services = [ { name: 'AI Development', href: '/services / ai - development' }, { name: 'Cloud Solutions', href: '/services / cloud - solutions' }, { name: 'Web Development', href: '/services / web - development' }, { name: 'Mobile Apps', href: '/services / mobile - development' }, { name: 'Blockchain Solutions', href: '/services / blockchain' }, { name: 'IoT Platforms', href: '/services / iot - platforms' }, { name: 'Data Analytics', href: '/services / data - analytics' }, { name: 'Cybersecurity', href: '/services / cybersecurity' } ]; const company = [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'News & Updates', href: '/blog' }, { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' } ]; const resources = [ { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case - studies' }, { name: 'Documentation', href: '/docs' }, { name: 'Support', href: '/support' }, { name: 'FAQ', href: '/faq' } ]; const social_links = [ { name: 'LinkedIn', href: 'https: { name: 'Twitter', href: 'https: { name: 'GitHub', href: 'https: { name: 'Facebook', href: 'https: ]; return ( <footer className="bg - slate - 900 border - t border - slate - 800"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8"> <div> <div className="text - white font - bold text - xl mb - 2">Zion Tech Group</div> <p className="text - gray - 400 text - sm">AI, cloud, and modern software solutions.</p> </div> <div> <div className="text - white font - semibold mb - 3">Company</div> <nav className="flex flex - col gap - 2 text - gray - 300 text - sm"> <Link href="/about" className="hover:text - white">About</Link> <Link href="/careers" className="hover:text - white">Careers</Link> <Link href="/pricing" className="hover:text - white">Pricing</Link> <Link href="/contact" className="hover:text - white">Contact</Link> </nav> </div> <div> <div className="text - white font - semibold mb - 3">Resources</div> <nav className="flex flex - col gap - 2 text - gray - 300 text - sm"> <Link href="/blog" className="hover:text - white">Blog</Link> <Link href="/docs" className="hover:text - white">Docs</Link> <Link href="/privacy" className="hover:text - white">Privacy</Link> <Link href="/terms" className="hover:text - white">Terms</Link> <Link href="/sitemap" className="hover:text - white">Sitemap</Link> </nav> </div> </div> <div className="border - t border - slate - 800 py - 6"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 flex items - center justify - between text - gray - 400 text - sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap - 4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text - white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text - white">+1 302 464 0950</a>  <footer className="bg - gray - 900 text - white"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8"> {} <div className="lg:col - span - 1"> <div className="text - 2xl font - bold text - blue - 400 mb - 4">Zion Tech Group</div> <p className="text - gray - 300 mb - 6"> Leading technology solutions provider helping businesses transform their digital presence with cutting - edge AI, cloud architecture, and innovative development services. </p> <div className="flex space - x-4"> {social_links.map ((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text - gray - 400 hover:text - blue - 400 transition - colors" aria - label={social.name} > <social.icon className="h - 5 w - 5" /> </a> ))} </div> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Services</h3> <ul className="space - y-2"> {services.map ((service) => ( <li key={service.name}> <Link href={service.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Company</h3> <ul className="space - y-2"> {company.map ((item) => ( <li key={item.name}> <Link href={item.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Resources</h3> <ul className="space - y-2 mb - 6"> {resources.map ((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text - lg font - semibold mb - 4">Contact</h3> <div className="space - y-2"> <div className="flex items - center text - gray - 300"> <Mail className="h - 4 w - 4 mr - 2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text - blue - 400"> info@ziontechgroup.com </a> </div> <div className="flex items - center text - gray - 300"> <Phone className="h - 4 w - 4 mr - 2" /> <a href="tel:+1 - 555 - 123 - 4567" className="hover:text - blue - 400"> +1 (555) 123 - 4567 </a> </div> <div className="flex items - start text - gray - 300"> <MapPin className="h - 4 w - 4 mr - 2 mt - 0.5" /> <span> 123 Tech Street < br /> San Francisco, CA 94105 </span> </div> </div> </div> </div> {} <div className="border - t border - gray - 700 mt - 8 pt - 8"> <div className="flex flex - col md:flex - row justify - between items - center"> <p className="text - gray - 300 text - sm"> &copy; {current_year} Zion Tech Group. All rights reserved. </p> <div className="flex space - x-6 mt - 4 md:mt - 0"> <Link href="/privacy" className="text - gray - 300 hover:text - blue - 400 text - sm"> Privacy Policy </Link> <Link href="/terms" className="text - gray - 300 hover:text - blue - 400 text - sm"> Terms of Service </Link> <Link href="/sitemap" className="text - gray - 300 hover:text - blue - 400 text - sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
=======
export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react';

const Footer: React.FC = () => {;
  const currentYear = new Date().getFullYear();

const services = [   { name: 'AI Development'}
  href: '/services/ai-development'}
},
  { name: 'Cloud Solutions'}
  href: '/services/cloud-solutions'}
},
  { name: 'Web Development'}
  href: '/services/web-development'}
},
  { name: 'Mobile Apps'}
  href: '/services/mobile-development'}
},
  { name: 'Blockchain Solutions'}
  href: '/services/blockchain'}
},
  { name: 'IoT Platforms'}
  href: '/services/iot-platforms'}
},
  { name: 'Data Analytics'}
  href: '/services/data-analytics'}
},
{ name: 'Cybersecurity'}
  href: '/services/cybersecurity'}
} ];

const company = [   { name: 'About Us'}
  href: '/about'}
},
  { name: 'Our Team'}
  href: '/about#team'}
},
  { name: 'Careers'}
  href: '/careers'}
},
  { name: 'News & Updates'}
  href: '/blog'}
},
  { name: 'Privacy Policy'}
  href: '/privacy'}
},
{ name: 'Terms of Service'}
  href: '/terms'}
} ];

const resources = [   { name: 'Blog'}
  href: '/blog'}
},
  { name: 'Case Studies'}
  href: '/case-studies'}
},
  { name: 'Documentation'}
  href: '/docs'}
},
  { name: 'Support'}
  href: '/support'}
},
{ name: 'FAQ'}
  href: '/faq'}
} ];

const socialLinks = [ { name: 'LinkedIn',
  href: 'https: { name: 'Twitter',
  href: 'https: { name: 'GitHub',
  href: 'https: { name: 'Facebook'}"
  href: 'https: ]; return ( <footer className=\"bg-slate-900 border-t border-slate-800\" /> <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8\" /> <div /> <div className=\"text-white font-bold text-xl mb-2\" />Zion Tech Group</div> <p className=\"text-gray-400 text-sm\" />AI,cloud,and modern software solutions.</p> </div> <div /> <div className=\"text-white font-semibold mb-3\" />Company</div> <nav className=\"flex flex-col gap-2 text-gray-300 text-sm\" /> <Link href=\"/about\" className=\"hover: text-white\" />About</Link> <Link href=\"/careers\" className=\"hover:text-white\" />Careers</Link> <Link href=\"/pricing\" className=\"hover:text-white\" />Pricing</Link> <Link href=\"/contact\" className=\"hover:text-white\" />Contact</Link> </nav> </div> <div /> <div className=\"text-white font-semibold mb-3\" />Resources</div> <nav className=\"flex flex-col gap-2 text-gray-300 text-sm\" /> <Link href=\"/blog\" className=\"hover:text-white\" />Blog</Link> <Link href=\"/docs\" className=\"hover:text-white\" />Docs</Link> <Link href=\"/privacy\" className=\"hover:text-white\" />Privacy</Link> <Link href=\"/terms\" className=\"hover:text-white\" />Terms</Link> <Link href=\"/sitemap\" className=\"hover:text-white\" />Sitemap</Link> </nav> </div> </div> <div className=\"border-t border-slate-800 py-6\" /> <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm\" /> <div />© {year} Zion Tech Group. All rights reserved.</div> <div className=\"flex gap-4\" /> <a href=\"mailto:kleber@ziontechgroup.com\" className=\"hover:text-white\" />kleber@ziontechgroup.com</a> <a href=\"tel:+13024640950\" className=\"hover:text-white\" />+1 302 464 0950</a>  <footer className=\"bg-gray-900 text-white\" /> <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12\" /> <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\" /> ,"
} <div className=\"lg:col-span-1\" /> <div className=\"text-2xl font-bold text-blue-400 mb-4\" />Zion Tech Group</div> <p className=\"text-gray-300 mb-6\" /> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className=\"flex space-x-4\" /> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-gray-400 hover: text-blue-400 transition-colors\" aria-label={social.name}  /> <social.icon className=\"h-5 w-5\" /> </a> ))} </div> </div> {} <div /> <h3 className=\"text-lg font-semibold mb-4\" />Services</h3> <ul className=\"space-y-2\" /> {services.map((service) => ( <li key={service.name} /> <Link href={service.href} className=\"text-gray-300 hover:text-blue-400 transition-colors\"  /> {service.name} </Link> </li> ))} </ul> </div> {} <div /> <h3 className=\"text-lg font-semibold mb-4\" />Company</h3> <ul className=\"space-y-2\" /> {company.map((item) => ( <li key={item.name} /> <Link href={item.href} className=\"text-gray-300 hover:text-blue-400 transition-colors\"  /> {item.name} </Link> </li> ))} </ul> </div> {} <div /> <h3 className=\"text-lg font-semibold mb-4\" />Resources</h3> <ul className=\"space-y-2 mb-6\" /> {resources.map((resource) => ( <li key={resource.name} /> <Link href={resource.href} className=\"text-gray-300 hover:text-blue-400 transition-colors\"  /> {resource.name} </Link> </li> ),"
} </ul> <h3 className=\"text-lg font-semibold mb-4\" />Contact</h3> <div className=\"space-y-2\" /> <div className=\"flex items-center text-gray-300\" /> <Mail className=\"h-4 w-4 mr-2\" /> <a href=\"mailto:info@ziontechgroup.com\" className=\"hover:text-blue-400\" /> info@ziontechgroup.com </a> </div> <div className=\"flex items-center text-gray-300\" /> <Phone className=\"h-4 w-4 mr-2\" /> <a href=\"tel:+1-555-123-4567\" className=\"hover:text-blue-400\" /> +1 (555) 123-4567 </a> </div> <div className=\"flex items-start text-gray-300\" /> <MapPin className=\"h-4 w-4 mr-2 mt-0.5\" /> <span /> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className=\"border-t border-gray-700 mt-8 pt-8\" /> <div className=\"flex flex-col md:flex-row justify-between items-center\" /> <p className=\"text-gray-300 text-sm\" /> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className = \"flex space-x-6 mt-4 md:mt-0\" /> <Link href=\"/privacy\" className=\"text-gray-300 hover:text-blue-400 text-sm\" /> Privacy Policy </Link> <Link href=\"/terms\" className=\"text-gray-300 hover:text-blue-400 text-sm\" /> Terms of Service </Link> <Link href=\"/sitemap\" className=\"text-gray-300 hover:text-blue-400 text-sm\" /> Sitemap </Link> </div> </div> </div> </div> </footer> ;
}

export default Footer;
=======
export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: '/faq' } ]; const socialLinks = [ { name: 'LinkedIn',href: 'https: { name: 'Twitter',href: 'https: { name: 'GitHub',href: 'https: { name: 'Facebook',href: 'https: ]; return ( <footer className="bg-slate-900 border-t border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div> <p className="text-gray-400 text-sm">AI,cloud,and modern software solutions.</p> </div> <div> <div className="text-white font-semibold mb-3">Company</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/about" className="hover:text-white">About</Link> <Link href="/careers" className="hover:text-white">Careers</Link> <Link href="/pricing" className="hover:text-white">Pricing</Link> <Link href="/contact" className="hover:text-white">Contact</Link> </nav> </div> <div> <div className="text-white font-semibold mb-3">Resources</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/blog" className="hover:text-white">Blog</Link> <Link href="/docs" className="hover:text-white">Docs</Link> <Link href="/privacy" className="hover:text-white">Privacy</Link> <Link href="/terms" className="hover:text-white">Terms</Link> <Link href="/sitemap" className="hover:text-white">Sitemap</Link> </nav> </div> </div> <div className="border-t border-slate-800 py-6"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap-4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>  <footer className="bg-gray-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div> <p className="text-gray-300 mb-6"> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={social.name} > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Services</h3> <ul className="space-y-2"> {services.map((service) => ( <li key={service.name}> <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Company</h3> <ul className="space-y-2"> {company.map((item) => ( <li key={item.name}> <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Resources</h3> <ul className="space-y-2 mb-6"> {resources.map((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text-lg font-semibold mb-4">Contact</h3> <div className="space-y-2"> <div className="flex items-center text-gray-300"> <Mail className="h-4 w-4 mr-2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400"> info@ziontechgroup.com </a> </div> <div className="flex items-center text-gray-300"> <Phone className="h-4 w-4 mr-2" /> <a href="tel:+1-555-123-4567" className="hover:text-blue-400"> +1 (555) 123-4567 </a> </div> <div className="flex items-start text-gray-300"> <MapPin className="h-4 w-4 mr-2 mt-0.5" /> <span> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className="border-t border-gray-700 mt-8 pt-8"> <div className="flex flex-col md:flex-row justify-between items-center"> <p className="text-gray-300 text-sm"> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className="flex space-x-6 mt-4 md:mt-0"> <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm"> Privacy Policy </Link> <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm"> Terms of Service </Link> <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
;
export default Footer;import React from 'react'; import Link from 'next / link'; import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react'; const Footer: React.FC = () => { const current_year = new Date ().getFullYear (); const services = [ { name: 'AI Development', href: '/services / ai - development' }, { name: 'Cloud Solutions', href: '/services / cloud - solutions' }, { name: 'Web Development', href: '/services / web - development' }, { name: 'Mobile Apps', href: '/services / mobile - development' }, { name: 'Blockchain Solutions', href: '/services / blockchain' }, { name: 'IoT Platforms', href: '/services / iot - platforms' }, { name: 'Data Analytics', href: '/services / data - analytics' }, { name: 'Cybersecurity', href: '/services / cybersecurity' } ]; const company = [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'News & Updates', href: '/blog' }, { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' } ]; const resources = [ { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case - studies' }, { name: 'Documentation', href: '/docs' }, { name: 'Support', href: '/support' }, { name: 'FAQ', href: '/faq' } ]; const social_links = [ { name: 'LinkedIn', href: 'https: { name: 'Twitter', href: 'https: { name: 'GitHub', href: 'https: { name: 'Facebook', href: 'https: ]; return ( <footer className="bg - slate - 900 border - t border - slate - 800"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8"> <div> <div className="text - white font - bold text - xl mb - 2">Zion Tech Group</div> <p className="text - gray - 400 text - sm">AI, cloud, and modern software solutions.</p> </div> <div> <div className="text - white font - semibold mb - 3">Company</div> <nav className="flex flex - col gap - 2 text - gray - 300 text - sm"> <Link href="/about" className="hover:text - white">About</Link> <Link href="/careers" className="hover:text - white">Careers</Link> <Link href="/pricing" className="hover:text - white">Pricing</Link> <Link href="/contact" className="hover:text - white">Contact</Link> </nav> </div> <div> <div className="text - white font - semibold mb - 3">Resources</div> <nav className="flex flex - col gap - 2 text - gray - 300 text - sm"> <Link href="/blog" className="hover:text - white">Blog</Link> <Link href="/docs" className="hover:text - white">Docs</Link> <Link href="/privacy" className="hover:text - white">Privacy</Link> <Link href="/terms" className="hover:text - white">Terms</Link> <Link href="/sitemap" className="hover:text - white">Sitemap</Link> </nav> </div> </div> <div className="border - t border - slate - 800 py - 6"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 flex items - center justify - between text - gray - 400 text - sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap - 4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text - white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text - white">+1 302 464 0950</a>  <footer className="bg - gray - 900 text - white"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8"> {} <div className="lg:col - span - 1"> <div className="text - 2xl font - bold text - blue - 400 mb - 4">Zion Tech Group</div> <p className="text - gray - 300 mb - 6"> Leading technology solutions provider helping businesses transform their digital presence with cutting - edge AI, cloud architecture, and innovative development services. </p> <div className="flex space - x-4"> {social_links.map ((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text - gray - 400 hover:text - blue - 400 transition - colors" aria - label={social.name} > <social.icon className="h - 5 w - 5" /> </a> ))} </div> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Services</h3> <ul className="space - y-2"> {services.map ((service) => ( <li key={service.name}> <Link href={service.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Company</h3> <ul className="space - y-2"> {company.map ((item) => ( <li key={item.name}> <Link href={item.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Resources</h3> <ul className="space - y-2 mb - 6"> {resources.map ((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text - lg font - semibold mb - 4">Contact</h3> <div className="space - y-2"> <div className="flex items - center text - gray - 300"> <Mail className="h - 4 w - 4 mr - 2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text - blue - 400"> info@ziontechgroup.com </a> </div> <div className="flex items - center text - gray - 300"> <Phone className="h - 4 w - 4 mr - 2" /> <a href="tel:+1 - 555 - 123 - 4567" className="hover:text - blue - 400"> +1 (555) 123 - 4567 </a> </div> <div className="flex items - start text - gray - 300"> <MapPin className="h - 4 w - 4 mr - 2 mt - 0.5" /> <span> 123 Tech Street < br /> San Francisco, CA 94105 </span> </div> </div> </div> </div> {} <div className="border - t border - gray - 700 mt - 8 pt - 8"> <div className="flex flex - col md:flex - row justify - between items - center"> <p className="text - gray - 300 text - sm"> &copy; {current_year} Zion Tech Group. All rights reserved. </p> <div className="flex space - x-6 mt - 4 md:mt - 0"> <Link href="/privacy" className="text - gray - 300 hover:text - blue - 400 text - sm"> Privacy Policy </Link> <Link href="/terms" className="text - gray - 300 hover:text - blue - 400 text - sm"> Terms of Service </Link> <Link href="/sitemap" className="text - gray - 300 hover:text - blue - 400 text - sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
;



import React from 'react';
import Link from 'next/link';


<<<<<<< HEAD
const resources = [   { name: 'Blog'}
  href: '/blog'}
},
   { name: 'Case Studies'}
  href: '/case - studies'}
},
   { name: 'Documentation'}
  href: '/docs'}
},
   { name: 'Support'}
  href: '/support'}
},
 { name: 'FAQ'}
  href: '/faq'}
} ];

const social_links = [ { name: 'LinkedIn',
  href: 'https: { name: 'Twitter',
  href: 'https: { name: 'GitHub',
  href: 'https: { name: 'Facebook'}"
  href: 'https: ]; return ( <footer className=\"bg - slate - 900 border - t border - slate - 800\" /> <div className=\"max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8\" /> <div /> <div className=\"text - white font - bold text - xl mb - 2\" />Zion Tech Group</div> <p className=\"text - gray - 400 text - sm\" />AI, cloud, and modern software solutions.</p> </div> <div /> <div className=\"text - white font - semibold mb - 3\" />Company</div> <nav className=\"flex flex - col gap - 2 text - gray - 300 text - sm\" /> <Link href=\"/about\" className=\"hover: text - white\" />About</Link> <Link href=\"/careers\" className=\"hover:text - white\" />Careers</Link> <Link href=\"/pricing\" className=\"hover:text - white\" />Pricing</Link> <Link href=\"/contact\" className=\"hover:text - white\" />Contact</Link> </nav> </div> <div /> <div className=\"text - white font - semibold mb - 3\" />Resources</div> <nav className=\"flex flex - col gap - 2 text - gray - 300 text - sm\" /> <Link href=\"/blog\" className=\"hover:text - white\" />Blog</Link> <Link href=\"/docs\" className=\"hover:text - white\" />Docs</Link> <Link href=\"/privacy\" className=\"hover:text - white\" />Privacy</Link> <Link href=\"/terms\" className=\"hover:text - white\" />Terms</Link> <Link href=\"/sitemap\" className=\"hover:text - white\" />Sitemap</Link> </nav> </div> </div> <div className=\"border - t border - slate - 800 py - 6\" /> <div className=\"max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 flex items - center justify - between text - gray - 400 text - sm\" /> <div />© {year} Zion Tech Group. All rights reserved.</div> <div className=\"flex gap - 4\" /> <a href=\"mailto:kleber@ziontechgroup.com\" className=\"hover:text - white\" />kleber@ziontechgroup.com</a> <a href=\"tel:+13024640950\" className=\"hover:text - white\" />+1 302 464 0950</a>  <footer className=\"bg - gray - 900 text - white\" /> <div className=\"max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12\" /> <div className=\"grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8\" /> ,"
} <div className=\"lg:col - span - 1\" /> <div className=\"text - 2xl font - bold text - blue - 400 mb - 4\" />Zion Tech Group</div> <p className=\"text - gray - 300 mb - 6\" /> Leading technology solutions provider helping businesses transform their digital presence with cutting - edge AI, cloud architecture, and innovative development services. </p> <div className=\"flex space - x-4\" /> {social_links.map ((social) => ( <a key={social.name} href={social.href} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text - gray - 400 hover: text - blue - 400 transition - colors\" aria - label={social.name}  /> <social.icon className=\"h - 5 w - 5\" /> </a> ))} </div> </div> {} <div /> <h3 className=\"text - lg font - semibold mb - 4\" />Services</h3> <ul className=\"space - y-2\" /> {services.map ((service) => ( <li key={service.name} /> <Link href={service.href} className=\"text - gray - 300 hover:text - blue - 400 transition - colors\"  /> {service.name} </Link> </li> ))} </ul> </div> {} <div /> <h3 className=\"text - lg font - semibold mb - 4\" />Company</h3> <ul className=\"space - y-2\" /> {company.map ((item) => ( <li key={item.name} /> <Link href={item.href} className=\"text - gray - 300 hover:text - blue - 400 transition - colors\"  /> {item.name} </Link> </li> ))} </ul> </div> {} <div /> <h3 className=\"text - lg font - semibold mb - 4\" />Resources</h3> <ul className=\"space - y-2 mb - 6\" /> {resources.map ((resource) => ( <li key={resource.name} /> <Link href={resource.href} className=\"text - gray - 300 hover:text - blue - 400 transition - colors\"  /> {resource.name} </Link> </li> ),"
} </ul> <h3 className=\"text - lg font - semibold mb - 4\" />Contact</h3> <div className=\"space - y-2\" /> <div className=\"flex items - center text - gray - 300\" /> <Mail className=\"h - 4 w - 4 mr - 2\" /> <a href=\"mailto:info@ziontechgroup.com\" className=\"hover:text - blue - 400\" /> info@ziontechgroup.com </a> </div> <div className=\"flex items - center text - gray - 300\" /> <Phone className=\"h - 4 w - 4 mr - 2\" /> <a href=\"tel:+1 - 555 - 123 - 4567\" className=\"hover:text - blue - 400\" /> +1 (555) 123 - 4567 </a> </div> <div className=\"flex items - start text - gray - 300\" /> <MapPin className=\"h - 4 w - 4 mr - 2 mt - 0.5\" /> <span /> 123 Tech Street < br /> San Francisco, CA 94105 </span> </div> </div> </div> </div> {} <div className=\"border - t border - gray - 700 mt - 8 pt - 8\" /> <div className=\"flex flex - col md:flex - row justify - between items - center\" /> <p className=\"text - gray - 300 text - sm\" /> &copy; {current_year} Zion Tech Group. All rights reserved. </p> <div className = \"flex space - x-6 mt - 4 md:mt - 0\" /> <Link href=\"/privacy\" className=\"text - gray - 300 hover:text - blue - 400 text - sm\" /> Privacy Policy </Link> <Link href=\"/terms\" className=\"text - gray - 300 hover:text - blue - 400 text - sm\" /> Terms of Service </Link> <Link href=\"/sitemap\" className=\"text - gray - 300 hover:text - blue - 400 text - sm\" /> Sitemap </Link> </div> </div> </div> </div> </footer> ;
}

export default Footer;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
;
import { motion } from 'framer-motion';
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Github 
} from 'lucide-react';

const Footer = () => {
  const footerSections = {
    services: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Cloud Solutions', href: '/cloud-solutions' },
      { name: 'Cybersecurity', href: '/security' },
      { name: 'Data Analytics', href: '/data-analytics' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
      { name: 'Startup Solutions', href: '/startup-solutions' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
      { name: 'AI Implementation', href: '/solutions/ai-implementation' },
      { name: 'Custom Development', href: '/custom-development' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/partners' },
      { name: 'News', href: '/news' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Webinars', href: '/webinars' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Support', href: '/support' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram }
  ];

<<<<<<< HEAD
=======
  return ("
    <footer className=\"bg-gray-900 text-white\" />"
      <div className=\"container mx-auto px-4 py-12\" />"
        <div className=\"grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8\" />
          {/* Company Info *}
}
          <div />"
            <div className=\"flex items-center space-x-2 mb-4\" />"
              <div className=\"w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center\" />"
                <span className=\"text-white font-bold text-lg\" />Z</span>
              </div>"
              <span className=\"text-xl font-bold\" />Zion Tech Group</span>
            </div>"
            <p className=\"text-gray-300 mb-4\" />
              Leading provider of AI services, IT solutions, and micro SaaS development. 
              Transform your business with cutting-edge technology solutions.
            </p>"
            <div className=\"flex space-x-4\" />
              {socialLinks.map((social) => (}
                <a;}
key={social.name}
                  href={social.href}"
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"text-gray-400 hover: text-blue-400 transition-colors\"
                  aria-label={social.name}
                 />"
                  <social.icon className=\"h-5 w-5\" />
=======
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram }
];

const services = [
  { name: 'AI & Machine Learning', href: '/services/ai-ml' },
  { name: 'Cloud Solutions', href: '/services/cloud' },
  { name: 'Cybersecurity', href: '/services/cybersecurity' },
  { name: 'Data Analytics', href: '/services/analytics' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Database Solutions', href: '/services/database' }
];

const solutions = [
  { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
  { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
  { name: 'Startup Acceleration', href: '/solutions/startup' },
  { name: 'Consulting', href: '/solutions/consulting' }
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Blog', href: '/blog' }
];

const support = [
  { name: 'Help Center', href: '/help' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Documentation', href: '/docs' },
  { name: 'Status', href: '/status' },
  { name: 'API', href: '/api' }
];

export default function Footer() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of AI services, IT solutions, and micro SaaS development. 
              Transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
                </a>
              ))}
=======
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-3 text-blue-400" />
                <span>Mon-Fri 9AM-6PM EST</span>
              </div>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </div>
          </div>

          {/* Services */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div />"
            <h3 className=\"text-lg font-semibold mb-4\" />Services</h3>"
            <ul className=\"space-y-2\" />
              {services.map((service) => (}
                <li key={service.name} />
                  <Link;
href={service.href}"
                    className=\"text-gray-300 hover:text-blue-400 transition-colors\"
                   />
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
<<<<<<< HEAD
                    {service.name}
                  </Link>
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of micro SaaS products, AI services, and IT solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          <div>
=======
          <div>
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
<<<<<<< HEAD
                  <a href={service.href} className="text-gray-300 hover:text-white">
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
                    {service.name}
                  </a>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Company */}
          <div />"
            <h3 className=\"text-lg font-semibold mb-4\" />Company</h3>"
            <ul className=\"space-y-2\" />
              {company.map((item) => (}
                <li key={item.name} />
                  <Link;
href={item.href}"
                    className=\"text-gray-300 hover:text-blue-400 transition-colors\"
                   />
=======
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
                  >
                    <service.icon className="h-4 w-4" />
                    <span>{service.name}</span>
=======
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerSections.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    {item.name}
=======
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    href={solution.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {solution.name}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
                  </Link>
=======
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-300 hover:text-white">
                    {item.name}
                  </a>
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* Resources & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-400">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>
                  123 Tech Street<br />
                  San Francisco, CA 94105
=======
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Resources & Contact */}
          <div />"
            <h3 className=\"text-lg font-semibold mb-4\" />Resources</h3>"
            <ul className=\"space-y-2 mb-6\" />
              {resources.map((resource) => (}
                <li key={resource.name} />
                  <Link;
href={resource.href}"
                    className=\"text-gray-300 hover:text-blue-400 transition-colors\"
                   />
                    {resource.name}
                  </Link>
                </li>
              )
}
            </ul>"
            <h3 className=\"text-lg font-semibold mb-4\" />Contact</h3>"
            <div className=\"space-y-2\" />"
              <div className=\"flex items-center text-gray-300\" />"
                <Mail className=\"h-4 w-4 mr-2\" />"
                <a href=\"mailto:info@ziontechgroup.com\" className=\"hover:text-blue-400\" />
                  info@ziontechgroup.com;
                </a>
              </div>"
              <div className=\"flex items-center text-gray-300\" />"
                <Phone className=\"h-4 w-4 mr-2\" />"
                <a href=\"tel:+13024640950\" className=\"hover:text-blue-400\" />
                  +1 302 464 0950;
                </a>
              </div>"
              <div className=\"flex items-start text-gray-300\" />"
                <MapPin className=\"h-4 w-4 mr-2 mt-0.5\" />
                <span />
                  123 Tech Street<br />
                  San Francisco, CA 94105;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                </span>
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
<<<<<<< HEAD
=======
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerSections.solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerSections.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm">
                {footerSections.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
<<<<<<< HEAD
              Leading provider of AI-powered technology solutions and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
=======
 ;
  return ("
    <footer className=\"bg-gray-900 text-white\" />"
      <div className=\"max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12\" />"
        <div className=\"grid grid-cols-1 md:grid-cols-4 gap-8\" />"
          <div className=\"col-span-1 md:col-span-2\" />"
            <h3 className=\"text-2xl font-bold mb-4\" />Zion Tech Group</h3>"
            <p className=\"text-gray-300 mb-4\" />
              Leading provider of AI-powered technology solutions and digital transformation services.
            </p>"
            <div className=\"flex space-x-4\" />"
              <a href=\"#\" className=\"text-gray-400 hover:text-white\" />"
                <Facebook className=\"w-5 h-5\" />
              </a>"
              <a href=\"#\" className=\"text-gray-400 hover:text-white\" />"
                <Twitter className=\"w-5 h-5\" />
              </a>"
              <a href=\"#\" className=\"text-gray-400 hover:text-white\" />"
                <Linkedin className=\"w-5 h-5\" />
              </a>"
              <a href=\"#\" className=\"text-gray-400 hover:text-white\" />"
                <Instagram className=\"w-5 h-5\" />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
              Leading provider of AI-powered technology solutions and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </a>
            </div>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
<<<<<<< HEAD
            </ul>
          </div>

=======
          <div />"
            <h4 className=\"text-lg font-semibold mb-4\" />Quick Links</h4>"
            <ul className=\"space-y-2\" />"
              <li /><Link href=\"/\" className=\"text-gray-300 hover:text-white\" />Home</Link></li>"
              <li /><Link href=\"/services\" className=\"text-gray-300 hover:text-white\" />Services</Link></li>"
              <li /><Link href=\"/about\" className=\"text-gray-300 hover:text-white\" />About</Link></li>"
              <li /><Link href=\"/contact\" className=\"text-gray-300 hover:text-white\" />Contact</Link></li>
            </ul>
          </div>

          <div />"
            <h4 className=\"text-lg font-semibold mb-4\" />Contact</h4>"
            <div className=\"space-y-2\" />"
              <div className=\"flex items-center\" />"
                <Phone className=\"w-4 h-4 mr-2\" />"
                <span className=\"text-gray-300\" />+1 302 464 0950</span>
              </div>"
              <div className=\"flex items-center\" />"
                <Mail className=\"w-4 h-4 mr-2\" />"
                <span className=\"text-gray-300\" />kleber@ziontechgroup.com</span>
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
            </ul>
          </div>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
<<<<<<< HEAD
<<<<<<< HEAD
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>


>>>>>>> origin/main

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
    { name: 'Blockchain Solutions', href: '/services/blockchain' },
    { name: 'IoT Platforms', href: '/services/iot-platforms' },
    { name: 'Data Analytics', href: '/services/data-analytics' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div>
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform their digital presence;
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400">
                  info@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+1-555-123-4567" className="hover:text-blue-400">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>
                  123 Tech Street<br />
                  San Francisco, CA 94105
                </span>
=======
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

pr-12243
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Cybersecurity', href: '/solutions/cybersecurity' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'White Papers', href: '/white-papers' }
  ];

  const socialLinks = [
<<<<<<< HEAD
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Instagram },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ];

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="ml-3 text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cloud computing, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-3 text-blue-400" />
                <span>Mon-Fri 9AM-6PM EST</span>
              </div>
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      <div className="container mx-auto px-4 py-12">
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div>
            <p className="text-gray-300 mb-6">
              Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            </div>
          </div>
<<<<<<< HEAD
        </div>
<<<<<<< HEAD
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm">
                Sitemap
              </Link>
=======

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </Link>
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            <div className="flex items-center mt-2 md:mt-0">
              <span className="mr-2">Trusted by</span>
              <span className="font-semibold text-white">500+</span>
              <span className="ml-2">companies worldwide</span>
            </div>
=======
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-gray-300">San Francisco, CA</span>
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
              </div>
            </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
          </div>
=======

          {/* Services */}
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerSections.services.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  >
                    {item.name}
=======
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {service.name}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link 
                    href={solution.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
=======
<<<<<<< HEAD
<<<<<<< HEAD
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {footerSections.solutions.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
                  >
                    {item.name}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
=======
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerSections.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm">
                {footerSections.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
=======
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
=======
          {/* Resources & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {resource.name}
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
=======
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-400">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered technology solutions and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
<<<<<<< HEAD


pr-12243
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              </div>
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/ziontechgroup" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/ziontechgroup" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start space-x-6">
            {legal.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* Bottom Section */}
=======
{/* Bottom Section */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </Link>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            <div className="flex items-center mt-2 md:mt-0">
              <span className="mr-2">Trusted by</span>
              <span className="font-semibold text-white">500+</span>
              <span className="ml-2">companies worldwide</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            </div>
          </div>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
<<<<<<< HEAD
<<<<<<< HEAD

            </div>
          </div>


>>>>>>> origin/main
            </div>
          </div>
=======


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-blue-400">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-blue-400">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>

pr-12243
<<<<<<< HEAD
=======
            </div>
          </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};

export default Footer;
=======
<<<<<<< HEAD
                  key = $2;
                  href = $2;
                  target = $2;
                  rel = $2;
                  className = $2;
                  aria-label = $2;
                >,
                  <social.icon className = $2;
                </a>))},
            </div>,
          </div>,
          {/* Services */},
          <div>,
            <h3 className = $2;
            <ul className = $2;
              {services.map((service) => (,
                <li key = $2;
                  <Link,
                    href = $2;
                    {service.name},
                  </Link>,
                </li>))},
            </ul>,
          </div>,
          {/* Company */},
          <div>,
            <h3 className = $2;
            <ul className = $2;
              {company.map((item) => (,
                <li key = $2;
                  <Link,
                    href = $2;
                    {item.name},
                  </Link>,
                </li>))},
            </ul>,
          </div>,
          {/* Resources & Contact */},
          <div>,
            <h3 className = $2;
            <ul className = $2;
              {resources.map((resource) => (,
                <li key = $2;
                  <Link,
                    href = $2;
                    {resource.name},
                  </Link>,
                </li>))},
            </ul>,
            <h3 className = $2;
            <div className = $2;
              <div className = $2;
                <Mail className = $2;
                <a href = $2;
                  info@ziontechgroup.com,
                </a>,
              </div>,
              <div className = $2;
                <Phone className = $2;
                <a href = $2;
                  +1 (555) 123-4567,
                </a>,
              </div>,
              <div className = $2;
                <MapPin className = $2;
                <span>,
                  123 Tech Street<br />,
                  San Francisco, CA 94105,
                </span>,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Bottom Section */},
>>>>>>> origin/merge-automation-changes
=======
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
};

<<<<<<< HEAD
export default Footer;
<<<<<<< HEAD
"
=======
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
  );
}
export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: '/faq' } ]; const socialLinks = [ { name: 'LinkedIn',href: 'https: { name: 'Twitter',href: 'https: { name: 'GitHub',href: 'https: { name: 'Facebook',href: 'https: ]; return ( <footer className="bg-slate-900 border-t border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div> <p className="text-gray-400 text-sm">AI,cloud,and modern software solutions.</p> </div> <div> <div className="text-white font-semibold mb-3">Company</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/about" className="hover:text-white">About</Link> <Link href="/careers" className="hover:text-white">Careers</Link> <Link href="/pricing" className="hover:text-white">Pricing</Link> <Link href="/contact" className="hover:text-white">Contact</Link> </nav> </div> <div> <div className="text-white font-semibold mb-3">Resources</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/blog" className="hover:text-white">Blog</Link> <Link href="/docs" className="hover:text-white">Docs</Link> <Link href="/privacy" className="hover:text-white">Privacy</Link> <Link href="/terms" className="hover:text-white">Terms</Link> <Link href="/sitemap" className="hover:text-white">Sitemap</Link> </nav> </div> </div> <div className="border-t border-slate-800 py-6"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap-4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>  <footer className="bg-gray-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div> <p className="text-gray-300 mb-6"> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={social.name} > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Services</h3> <ul className="space-y-2"> {services.map((service) => ( <li key={service.name}> <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Company</h3> <ul className="space-y-2"> {company.map((item) => ( <li key={item.name}> <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Resources</h3> <ul className="space-y-2 mb-6"> {resources.map((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text-lg font-semibold mb-4">Contact</h3> <div className="space-y-2"> <div className="flex items-center text-gray-300"> <Mail className="h-4 w-4 mr-2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400"> info@ziontechgroup.com </a> </div> <div className="flex items-center text-gray-300"> <Phone className="h-4 w-4 mr-2" /> <a href="tel:+1-555-123-4567" className="hover:text-blue-400"> +1 (555) 123-4567 </a> </div> <div className="flex items-start text-gray-300"> <MapPin className="h-4 w-4 mr-2 mt-0.5" /> <span> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className="border-t border-gray-700 mt-8 pt-8"> <div className="flex flex-col md:flex-row justify-between items-center"> <p className="text-gray-300 text-sm"> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className="flex space-x-6 mt-4 md:mt-0"> <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm"> Privacy Policy </Link> <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm"> Terms of Service </Link> <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default Footer;
<<<<<<< HEAD
pr-12243
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default Footer;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export default Footer;

export default Footer;
pr-12243
export default Footer;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> db9cf4227efbedeeb7625bb65c8a05924d3d2398
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
