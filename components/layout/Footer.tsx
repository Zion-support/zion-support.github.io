import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { ;
  Facebook, ;
  Twitter, ;
  Linkedin, ;
  Instagram, ;
  Mail, ;
  Phone, ;
  MapPin,;
  Code,;
  Database,;
  Cloud,;
  Shield,;
  Smartphone,;
  BarChart3,;
  Users,;
  Building2,;
  ShoppingCart;
} from 'lucide-react';
;
const Footer:React.FC = () => {;
  const services = [;
    { name:'Web Development', href:'/services/web-development' },;
    { name:'Mobile Development', href:'/services/mobile-development' },;
    { name:'Cloud Solutions', href:'/services/cloud-solutions' },;
    { name:'Database Design', href:'/services/database-design' },;
    { name:'Cybersecurity', href:'/services/cybersecurity' },;
    { name:'Analytics & BI', href:'/services/analytics' }
  ];
;
  const solutions = [;
    { name:'Enterprise Solutions', href:'/solutions/enterprise' },;
    { name:'E-commerce Platforms', href:'/solutions/ecommerce' },;
    { name:'CRM Systems', href:'/solutions/crm' },;
    { name:'Custom Software', href:'/solutions/custom-software' }
  ];
;
  const industries = [;
    { name:'Healthcare', href:'/industries/healthcare' },;
    { name:'Finance', href:'/industries/finance' },;
    { name:'Education', href:'/industries/education' },;
    { name:'Manufacturing', href:'/industries/manufacturing' },;
    { name:'Retail', href:'/industries/retail' },;
    { name:'Automotive', href:'/industries/automotive' }
  ];
;
  const socialLinks = [;
    { name:'Facebook', href:'#', icon:Facebook },;
    { name:'Twitter', href:'#', icon:Twitter },;
    { name:'LinkedIn', href:'#', icon:Linkedin },;
    { name:'Instagram', href:'#', icon:Instagram }
  ];
;
  return (;
    <footer className="bg-gray-900 text-white">;
      <div className="container mx-auto px-4 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <div className="flex items-center space-x-2 mb-4">;
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-xl">Z</span>;
              </div>;
              <div>;
                <div className="text-xl font-bold">Zion Tech Group</div>;
                <div className="text-sm text-gray-400">Technology Solutions</div>;
              </div>;
            </div>;
            <p className="text-gray-400 mb-4">;
              Empowering businesses with cutting-edge technology solutions. ;
              We deliver innovative software, cloud infrastructure, and digital transformation services.;
            </p>;
            <div className="space-y-2">;
              <div className="flex items-center space-x-2">;
                <Phone className="w-4 h-4 text-blue-400" />;
                <span className="text-sm">+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <Mail className="w-4 h-4 text-blue-400" />;
                <span className="text-sm">kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center space-x-2">;
                <MapPin className="w-4 h-4 text-blue-400" />;
                <span className="text-sm">Delaware, USA</span>;
              </div>;
            </div>;
          </div>;
;
          {/* Services */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Services</h3>;
            <ul className="space-y-2">;
              {services.map((service) => (;
                <li key={service.name}>;
                  <Link ;
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors";
                  >;
                    {service.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
;
          {/* Solutions */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>;
            <ul className="space-y-2">;
              {solutions.map((solution) => (;
                <li key={solution.name}>;
                  <Link ;
                    href={solution.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors";
                  >;
                    {solution.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
;
          {/* Industries */}
          <div>;
            <h3 className="text-lg font-semibold mb-4">Industries</h3>;
            <ul className="space-y-2">;
              {industries.map((industry) => (;
                <li key={industry.name}>;
                  <Link ;
                    href={industry.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors";
                  >;
                    {industry.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
;
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">;
          <div className="flex flex-col md:flex-row justify-between items-center">;
            <div className="text-gray-400 text-sm mb-4 md:mb-0">;
              © 2024 Zion Tech Group. All rights reserved.;
            </div>;
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text-gray-400 hover:text-blue-400 transition-colors";
                  aria-label={social.name}
                >;
                  <social.icon className="h-5 w-5" />;
                </a>;
              ))}
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  );
};
;
=======
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of AI-powered technology solutions and digital
              transformation services.
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
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
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
              </div>
const Footer = () => {
  const services = [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Database Management', href: '/services/database-management' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'AI & Automation', href: '/services/ai-automation' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support', href: '/support' },
    { name: 'Community', href: '/community' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'GitHub', href: '#', icon: Github }
  ];

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
              Leading technology solutions provider delivering innovative software, 
              cloud services, and digital transformation to businesses worldwide.
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
                <a href="tel:+13024640950" className="hover:text-blue-400">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                <span>
                  123 Tech Street<br />
                  San Francisco, CA 94105
                </span>
              </div>            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-blue-400 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>      </div>
    </footer>
  );
};

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default Footer;