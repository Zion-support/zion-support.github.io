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
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Cloud Infrastructure', href: '/cloud-solutions' },
    { name: 'Digital Transformation', href: '/digital-transformation' }
  ];

  const Footer: React.FC = () => {
  

  

  const company = [
    { name: &apos;About Us&apos;, href: &apos;/about&apos; },
    { name: &apos;Solutions&apos;, href: &apos;/solutions&apos; },
    { name: &apos;Pricing&apos;, href: &apos;/pricing&apos; },
    { name: &apos;Blog&apos;, href: &apos;/blog&apos; },
    { name: &apos;Careers&apos;, href: &apos;/careers&apos; },
    { name: &apos;Case Studies&apos;, href: &apos;/case-studies&apos; }
  ];

  const support = [
    { name: &apos;Contact&apos;, href: &apos;/contact&apos; },
    { name: &apos;Support&apos;, href: &apos;/support&apos; },
    { name: &apos;Tutorials&apos;, href: &apos;/tutorials&apos; },
    { name: &apos;Demo&apos;, href: &apos;/demo&apos; },
    { name: &apos;Documentation&apos;, href: &apos;/docs&apos; }
  ];

  const legal = [
    { name: &apos;Privacy Policy&apos;, href: &apos;/privacy&apos; },
    { name: &apos;Terms of Service&apos;, href: &apos;/terms&apos; },
    { name: &apos;Cookie Policy&apos;, href: &apos;/cookies&apos; },
    { name: &apos;GDPR&apos;, href: &apos;/gdpr&apos; },
    { name: &apos;Security&apos;, href: &apos;/security&apos; },
    { name: &apos;Compliance&apos;, href: &apos;/compliance&apos; }
  ];

  const socialLinks = [
    { name: &apos;LinkedIn&apos;, href: &apos;https://linkedin.com/company/ziontechgroup&apos;, icon: &apos;linkedin&apos; },
    { name: &apos;Twitter&apos;, href: &apos;https://twitter.com/ziontechgroup&apos;, icon: &apos;twitter&apos; },
    { name: &apos;GitHub&apos;, href: &apos;https://github.com/ziontechgroup&apos;, icon: &apos;github&apos; },
    { name: &apos;Facebook&apos;, href: &apos;https://facebook.com/ziontechgroup&apos;, icon: &apos;facebook&apos; }
  ];

  return (
    <footer className="bg-slate-900 border-tborder-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transformcyber-glow">
                <span className="text-white font-boldtext- xl">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-400transition-colors">Zion Tech Group</span>
            </Link>
<p className="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, 
              and digital transformation services for businesses worldwide.
               ">$2</p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3text-gray-300">
                <PhoneIcon className="w-5 h-5text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center space-x-3text-gray-300">
                <EnvelopeIcon className="w-5 h-5text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3text-gray-300">
                <MapPinIcon className="w-5 h-5text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flexspace-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-whitetransition-colors"
                  aria-label={social.name}
                >
                  {social.icon === &apos;facebook&apos; && &apos;📘&apos;}
                  {social.icon === &apos;twitter&apos; && &apos;🐦&apos;}
                  {social.icon === &apos;linkedin&apos; && &apos;💼&apos;}
                  {social.icon === &apos;github&apos; && &apos;🐙&apos;}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-texttext-transparent  ">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-centergroup"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-texttext-transparent  ">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-centergroup"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-texttext-transparent  ">Resources</h3>
            <ul className="space-y-3 mb-8">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-centergroup"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
              {legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-centergroup"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-tborder-slate-700/50">
          <div className="max-w-2xl mx-autotext-center">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-texttext-transparent  ">Stay Updated</h3>
<p className="Get the latest insights on AI and IT trends delivered to your inbox.
               ">$2</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-mdmx-au to">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-centerfont-semibold">
                Subscribe
                <ArrowRightIcon className="w-4 h-4ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50 flex flex-col md:flex-row justify-betweenitems-center">
          <div className="flex items-center space-x-2 text-gray-400  mb-4md:mb-0">
            <span>Made with</span>
            <HeartIcon className="w-4 h-4text-red-400" />
            <span>by Zion Tech Group</span>
          </div>
          <div className="flexspace-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colorstext- sm  ">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colorstext- sm  ">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
