<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
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
  ];
  const company = [
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];
  const socialLinks = [
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
                  Middletown DE 19709;
                </span>;
              </div>;
            </div>;
          </div>;
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
              {services && services.map((service) => (;
                <li key={service && service.name}>;
                  <Link
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
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>);
;
}

};

export default Footer;import React from 'react'; import Link from 'next/link'; import { Mail,Phone,MapPin,Linkedin,Twitter,Github,Facebook } from 'lucide-react'; const Footer: React.FC = () => { const currentYear = new Date().getFullYear(); const services = [ { name: 'AI Development',href: '/services/ai-development' },{ name: 'Cloud Solutions',href: '/services/cloud-solutions' },{ name: 'Web Development',href: '/services/web-development' },{ name: 'Mobile Apps',href: '/services/mobile-development' },{ name: 'Blockchain Solutions',href: '/services/blockchain' },{ name: 'IoT Platforms',href: '/services/iot-platforms' },{ name: 'Data Analytics',href: '/services/data-analytics' },{ name: 'Cybersecurity',href: '/services/cybersecurity' } ]; const company = [ { name: 'About Us',href: '/about' },{ name: 'Our Team',href: '/about#team' },{ name: 'Careers',href: '/careers' },{ name: 'News & Updates',href: '/blog' },{ name: 'Privacy Policy',href: '/privacy' },{ name: 'Terms of Service',href: '/terms' } ]; const resources = [ { name: 'Blog',href: '/blog' },{ name: 'Case Studies',href: '/case-studies' },{ name: 'Documentation',href: '/docs' },{ name: 'Support',href: '/support' },{ name: 'FAQ',href: '/faq' } ]; const socialLinks = [ { name: 'LinkedIn',href: 'https: { name: 'Twitter',href: 'https: { name: 'GitHub',href: 'https: { name: 'Facebook',href: 'https: ]; return ( <footer className="bg-slate-900 border-t border-slate-800"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <div className="text-white font-bold text-xl mb-2">Zion Tech Group</div> <p className="text-gray-400 text-sm">AI,cloud,and modern software solutions.</p> </div> <div> <div className="text-white font-semibold mb-3">Company</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/about" className="hover:text-white">About</Link> <Link href="/careers" className="hover:text-white">Careers</Link> <Link href="/pricing" className="hover:text-white">Pricing</Link> <Link href="/contact" className="hover:text-white">Contact</Link> </nav> </div> <div> <div className="text-white font-semibold mb-3">Resources</div> <nav className="flex flex-col gap-2 text-gray-300 text-sm"> <Link href="/blog" className="hover:text-white">Blog</Link> <Link href="/docs" className="hover:text-white">Docs</Link> <Link href="/privacy" className="hover:text-white">Privacy</Link> <Link href="/terms" className="hover:text-white">Terms</Link> <Link href="/sitemap" className="hover:text-white">Sitemap</Link> </nav> </div> </div> <div className="border-t border-slate-800 py-6"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-gray-400 text-sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap-4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>  <footer className="bg-gray-900 text-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {} <div className="lg:col-span-1"> <div className="text-2xl font-bold text-blue-400 mb-4">Zion Tech Group</div> <p className="text-gray-300 mb-6"> Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI,cloud architecture,and innovative development services. </p> <div className="flex space-x-4"> {socialLinks.map((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label={social.name} > <social.icon className="h-5 w-5" /> </a> ))} </div> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Services</h3> <ul className="space-y-2"> {services.map((service) => ( <li key={service.name}> <Link href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Company</h3> <ul className="space-y-2"> {company.map((item) => ( <li key={item.name}> <Link href={item.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text-lg font-semibold mb-4">Resources</h3> <ul className="space-y-2 mb-6"> {resources.map((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text-gray-300 hover:text-blue-400 transition-colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text-lg font-semibold mb-4">Contact</h3> <div className="space-y-2"> <div className="flex items-center text-gray-300"> <Mail className="h-4 w-4 mr-2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-400"> info@ziontechgroup.com </a> </div> <div className="flex items-center text-gray-300"> <Phone className="h-4 w-4 mr-2" /> <a href="tel:+1-555-123-4567" className="hover:text-blue-400"> +1 (555) 123-4567 </a> </div> <div className="flex items-start text-gray-300"> <MapPin className="h-4 w-4 mr-2 mt-0.5" /> <span> 123 Tech Street<br /> San Francisco,CA 94105 </span> </div> </div> </div> </div> {} <div className="border-t border-gray-700 mt-8 pt-8"> <div className="flex flex-col md:flex-row justify-between items-center"> <p className="text-gray-300 text-sm"> &copy; {currentYear} Zion Tech Group. All rights reserved. </p> <div className="flex space-x-6 mt-4 md:mt-0"> <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm"> Privacy Policy </Link> <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm"> Terms of Service </Link> <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 text-sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
;
export default Footer;import React from 'react'; import Link from 'next / link'; import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react'; const Footer: React.FC = () => { const current_year = new Date ().getFullYear (); const services = [ { name: 'AI Development', href: '/services / ai - development' }, { name: 'Cloud Solutions', href: '/services / cloud - solutions' }, { name: 'Web Development', href: '/services / web - development' }, { name: 'Mobile Apps', href: '/services / mobile - development' }, { name: 'Blockchain Solutions', href: '/services / blockchain' }, { name: 'IoT Platforms', href: '/services / iot - platforms' }, { name: 'Data Analytics', href: '/services / data - analytics' }, { name: 'Cybersecurity', href: '/services / cybersecurity' } ]; const company = [ { name: 'About Us', href: '/about' }, { name: 'Our Team', href: '/about#team' }, { name: 'Careers', href: '/careers' }, { name: 'News & Updates', href: '/blog' }, { name: 'Privacy Policy', href: '/privacy' }, { name: 'Terms of Service', href: '/terms' } ]; const resources = [ { name: 'Blog', href: '/blog' }, { name: 'Case Studies', href: '/case - studies' }, { name: 'Documentation', href: '/docs' }, { name: 'Support', href: '/support' }, { name: 'FAQ', href: '/faq' } ]; const social_links = [ { name: 'LinkedIn', href: 'https: { name: 'Twitter', href: 'https: { name: 'GitHub', href: 'https: { name: 'Facebook', href: 'https: ]; return ( <footer className="bg - slate - 900 border - t border - slate - 800"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12 grid grid - cols - 1 md:grid - cols - 3 gap - 8"> <div> <div className="text - white font - bold text - xl mb - 2">Zion Tech Group</div> <p className="text - gray - 400 text - sm">AI, cloud, and modern software solutions.</p> </div> <div> <div className="text - white font - semibold mb - 3">Company</div> <nav className="flex flex - col gap - 2 text - gray - 300 text - sm"> <Link href="/about" className="hover:text - white">About</Link> <Link href="/careers" className="hover:text - white">Careers</Link> <Link href="/pricing" className="hover:text - white">Pricing</Link> <Link href="/contact" className="hover:text - white">Contact</Link> </nav> </div> <div> <div className="text - white font - semibold mb - 3">Resources</div> <nav className="flex flex - col gap - 2 text - gray - 300 text - sm"> <Link href="/blog" className="hover:text - white">Blog</Link> <Link href="/docs" className="hover:text - white">Docs</Link> <Link href="/privacy" className="hover:text - white">Privacy</Link> <Link href="/terms" className="hover:text - white">Terms</Link> <Link href="/sitemap" className="hover:text - white">Sitemap</Link> </nav> </div> </div> <div className="border - t border - slate - 800 py - 6"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 flex items - center justify - between text - gray - 400 text - sm"> <div>© {year} Zion Tech Group. All rights reserved.</div> <div className="flex gap - 4"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text - white">kleber@ziontechgroup.com</a> <a href="tel:+13024640950" className="hover:text - white">+1 302 464 0950</a>  <footer className="bg - gray - 900 text - white"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8"> {} <div className="lg:col - span - 1"> <div className="text - 2xl font - bold text - blue - 400 mb - 4">Zion Tech Group</div> <p className="text - gray - 300 mb - 6"> Leading technology solutions provider helping businesses transform their digital presence with cutting - edge AI, cloud architecture, and innovative development services. </p> <div className="flex space - x-4"> {social_links.map ((social) => ( <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text - gray - 400 hover:text - blue - 400 transition - colors" aria - label={social.name} > <social.icon className="h - 5 w - 5" /> </a> ))} </div> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Services</h3> <ul className="space - y-2"> {services.map ((service) => ( <li key={service.name}> <Link href={service.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {service.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Company</h3> <ul className="space - y-2"> {company.map ((item) => ( <li key={item.name}> <Link href={item.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {item.name} </Link> </li> ))} </ul> </div> {} <div> <h3 className="text - lg font - semibold mb - 4">Resources</h3> <ul className="space - y-2 mb - 6"> {resources.map ((resource) => ( <li key={resource.name}> <Link href={resource.href} className="text - gray - 300 hover:text - blue - 400 transition - colors" > {resource.name} </Link> </li> ))} </ul> <h3 className="text - lg font - semibold mb - 4">Contact</h3> <div className="space - y-2"> <div className="flex items - center text - gray - 300"> <Mail className="h - 4 w - 4 mr - 2" /> <a href="mailto:info@ziontechgroup.com" className="hover:text - blue - 400"> info@ziontechgroup.com </a> </div> <div className="flex items - center text - gray - 300"> <Phone className="h - 4 w - 4 mr - 2" /> <a href="tel:+1 - 555 - 123 - 4567" className="hover:text - blue - 400"> +1 (555) 123 - 4567 </a> </div> <div className="flex items - start text - gray - 300"> <MapPin className="h - 4 w - 4 mr - 2 mt - 0.5" /> <span> 123 Tech Street < br /> San Francisco, CA 94105 </span> </div> </div> </div> </div> {} <div className="border - t border - gray - 700 mt - 8 pt - 8"> <div className="flex flex - col md:flex - row justify - between items - center"> <p className="text - gray - 300 text - sm"> &copy; {current_year} Zion Tech Group. All rights reserved. </p> <div className="flex space - x-6 mt - 4 md:mt - 0"> <Link href="/privacy" className="text - gray - 300 hover:text - blue - 400 text - sm"> Privacy Policy </Link> <Link href="/terms" className="text - gray - 300 hover:text - blue - 400 text - sm"> Terms of Service </Link> <Link href="/sitemap" className="text - gray - 300 hover:text - blue - 400 text - sm"> Sitemap </Link> </div> </div> </div> </div> </footer> )} export default Footer;
;



import React from 'react';
import Link from 'next/link';


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
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerSections.services.map((item) => (
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
            </div>
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

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </p>


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
        </div>
      </div>
    </footer>
  );
};

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
