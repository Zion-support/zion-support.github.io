import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { 
  HeartIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: '5G Solutions', href: '/5g-solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const support = [
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: 'facebook' },
    { name: 'Twitter', href: '#', icon: 'twitter' },
    { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    { name: 'GitHub', href: '#', icon: 'github' }
  ];

  return (
    <footer className="cyber-footer relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 group">
              <div className="h-10 w-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center cyber-glow group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl neon-pulse">Z</span>
              </div>
              <span className="ml-3 text-white font-bold text-xl cyber-text group-hover:neon-pulse transition-all duration-300">
                Zion Tech Group
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. 
              Empowering businesses with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="cyber-button-secondary w-10 h-10 rounded-lg flex items-center justify-center group hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon === 'facebook' && <Facebook className="w-5 h-5 group-hover:text-white transition-colors duration-300" />}
                  {social.icon === 'twitter' && <Twitter className="w-5 h-5 group-hover:text-white transition-colors duration-300" />}
                  {social.icon === 'linkedin' && <Linkedin className="w-5 h-5 group-hover:text-white transition-colors duration-300" />}
                  {social.icon === 'github' && <Github className="w-5 h-5 group-hover:text-white transition-colors duration-300" />}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-6 text-lg neon-pulse">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="cyber-nav-item text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 group flex items-center"
                  >
                    <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-6 text-lg neon-pulse">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="cyber-nav-item text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 group flex items-center"
                  >
                    <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-6 text-lg neon-pulse">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="cyber-nav-item text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 group flex items-center"
                  >
                    <ArrowRightIcon className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-cyan-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center text-gray-400 text-sm group">
              <PhoneIcon className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <a href="tel:+13024640950" className="group-hover:text-cyan-400 transition-colors duration-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center text-gray-400 text-sm group">
              <EnvelopeIcon className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <a href="mailto:kleber@ziontechgroup.com" className="group-hover:text-cyan-400 transition-colors duration-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center text-gray-400 text-sm group">
              <MapPinIcon className="w-5 h-5 mr-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
              <span className="group-hover:text-cyan-400 transition-colors duration-300">
                364 E Main St STE 1008, Middletown DE 19709
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cyan-500/30 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm flex items-center">
            <HeartIcon className="w-4 h-4 mr-2 text-red-500" />
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="cyber-nav-item text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;