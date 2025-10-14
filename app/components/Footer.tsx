import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline';



const services = [
    { name: 'AI Solutions', href: '/ai-solutions', },
    { name: 'IT Solutions', href: '/it-solutions', },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions', },
    { name: 'Digital Transformation', href: '/digital-transformation', }
  ];

  const Footer: React.FC = () => {
  

  

  const company = [
    { name: 'About Us', href: '/about', },
    { name: 'Solutions', href: '/solutions', },
    { name: 'Pricing', href: '/pricing', },
    { name: 'Blog', href: '/blog', },
    { name: 'Careers', href: '/careers', },
    { name: 'Case Studies', href: '/case-studies', }
  ];

  const support = [
    { name: 'Contact', href: '/contact', },
    { name: 'Support', href: '/support', },
    { name: 'Tutorials', href: '/tutorials', },
    { name: 'Demo', href: '/demo', },
    { name: 'Documentation', href: '/docs', }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy', },
    { name: 'Terms of Service', href: '/terms', },
    { name: 'Cookie Policy', href: '/cookies', },
    { name: 'GDPR', href: '/gdpr', },
    { name: 'Security', href: '/security', },
    { name: 'Compliance', href: '/compliance', }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin', },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter', },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github', },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: 'facebook', }
  ];

  return (
    <footer className="bg-slate-9 0 0border-tborder-slate-7 0 0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform cyber-glow">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPinIcon className="w-5 h-5 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon === 'facebook' && '📘'}
                  {social.icon === 'twitter' && '🐦'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'github' && '🐙'}
                </a>
              ))}
              </div>
        </div>
            </div>
        </div>

          {/* Services */}
          <div>
            <h3 className="text-whit e font-boldtext-lgmb-6bg-gradient-to-rfrom-purple-4 0 0to-cyan-4 0 0bg-clip-texttext-transparent">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-4 0 0hover:text-whitetransition-colorsflexitems-centergroup"
                  >
                    <ArrowRightIcon className="w-4h-4mr-2group-hover:translate-x-1transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
        </div>

          {/* Company */}
          <div>
            <h3 className="text-whit e font-boldtext-lgmb-6bg-gradient-to-rfrom-purple-4 0 0to-cyan-4 0 0bg-clip-texttext-transparent">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-4 0 0hover:text-whitetransition-colorsflexitems-centergroup"
                  >
                    <ArrowRightIcon className="w-4h-4mr-2group-hover:translate-x-1transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
        </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-whit e font-boldtext-lgmb-6bg-gradient-to-rfrom-purple-4 0 0to-cyan-4 0 0bg-clip-texttext-transparent">Resources</h3>
            <ul className="space-y-3mb-8">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-4 0 0hover:text-whitetransition-colorsflexitems-centergroup"
                  >
                    <ArrowRightIcon className="w-4h-4mr-2group-hover:translate-x-1transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-4 0 0hover:text-whitetransition-colorsflexitems-centergroup"
                  >
                    <ArrowRightIcon className="w-4h-4mr-2group-hover:translate-x-1transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            </div>
        </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-1 6pt-8border-tborder-slate-7 0 0/5 0">
          <div className="max-w-2xlmx-autotext-center">
            <h3 className="text -2xl font-boldtext-whitemb-4bg-gradient-to-rfrom-purple-4 0 0to-cyan-4 0 0bg-clip-texttext-transparent">Stay Updated</h3>
            <p className="text-gray-3 0 0mb-6text-lg">
              Get the latest insights on AI and IT trends delivered to your inbox.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4max-w-mdmx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex -1 px-4 py-3 bg-slate-8 00 border border-slate-6 00rounded-lgtext-whiteplaceholder-gray-4 0 0focus:outline-nonefocus:ring-2focus:ring-purple-5 0 0focus:border-transparent"
              />
              <button className="px -8 py-3 bg-gradient-to-r from-purple-6 00 to-cyan-6 00 text-white rounded-lg hover:from-purple-7 00hover:to-cyan-7 0 0transition-allduration-3 0 0flexitems-centerjustify-centerfont-semibold">
                Subscribe
                <ArrowRightIcon className="w -4h-4 ml-2" />
              </button>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt -1 2 pt-8border-tborder-slate-7 0 0/5 0flexflex-colmd:flex-rowjustify-betweenitems-center">
          <div className="flexitems-centerspace-x-2text-gray-4 0 0mb-4md:mb-0">
            <span>Made with</span>
            <HeartIcon className="w -4h-4 text-red-4 0 0" />
            <span>by Zion Tech Group</span>
            </div>
        </div>
          <div className="flexspace-x-6">
            <Link to="/privacy" className="text-gray-4 0 0hover:text-whitetransition-colorstext-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-4 0 0hover:text-whitetransition-colorstext-sm">Terms of Service</Link>
            </div>
        </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;