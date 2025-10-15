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
    { name: '5G Solutions', href: '/5g-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Software Development', href: '/software-development' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Partnerships', href: '/partnerships' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Blog', href: '/blog' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' }
  ];

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Live Chat', href: '/chat' },
    { name: 'Schedule Demo', href: '/demo' },
    { name: 'System Status', href: '/status' },
    { name: 'Report Issue', href: '/report' }
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
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50 relative overflow-hidden">
      {/* Futuristic background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-purple-900/20 to-transparent"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading provider of AI solutions, cybersecurity, cloud infrastructure, and digital transformation services. 
              Transforming businesses with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                    {social.icon === 'facebook' && <Facebook className="w-4 h-4" />}
                    {social.icon === 'twitter' && <Twitter className="w-4 h-4" />}
                    {social.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
                    {social.icon === 'github' && <Github className="w-4 h-4" />}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center text-gray-300 text-sm group hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Phone</div>
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-center text-gray-300 text-sm group hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <EnvelopeIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Email</div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center text-gray-300 text-sm group hover:text-cyan-400 transition-colors duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <MapPinIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">Address</div>
                <span className="hover:text-cyan-400 transition-colors">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-white text-sm transition-colors"
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