import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon } from '@heroicons/react/24/outline';
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const serviceCategories = [
    {
      title: 'AI Services',;
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',;
      links: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
        {label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro',},
        {label: 'AI Content Generation Pro', href: '/ai-content-generation-pro',},
        {label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot',},
        {label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro',},
        {label: 'AI Financial Analysis Pro', href: '/ai-financial-analysis-pro',},
        {label: 'AI HR Recruitment Pro', href: '/ai-hr-recruitment-pro',},
        {label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro',}
      ]
    },
    {
      title: 'IT Services',;
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',;
      links: [{ label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        {label: 'Database Management', href: '/database-management', },
        {label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', },
        {label: 'IT Consulting', href: '/it-consulting', },
        {label: 'System Integration', href: '/system-integration', },
        {label: 'Network Security', href: '/network-security', }]
    },
    {
      title: 'Solutions',;
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',;
      links: [{ label: 'Digital Transformation', href: '/digital-transformation' },
        {label: 'Business Intelligence', href: '/business-intelligence', },
        {label: 'Process Automation', href: '/process-automation', },
        {label: 'Data Analytics', href: '/data-analytics', },
        {label: 'Mobile Solutions', href: '/mobile-solutions', }]
    }
  ];
const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
    { name: 'Demo', href: '/demo' },
    { name: 'Pricing', href: '/pricing' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: LinkedinIcon },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: TwitterIcon },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: FacebookIcon },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: InstagramIcon;
  ];
  return (
<>    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
    </>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </div>
            <p>
              Leading provider of AI and IT solutions, helping businesses transform and scale with cutting-edge technology.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
{/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name;
                  href={social.href;
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name;
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* Additional Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700">
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
{services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href;
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service.name;
                  </Link>
                </li>
              ))}          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4> cursor/analyze-improve-and-deploy-application-c573
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/demo" className="text-gray-300 hover:text-white transition-colors">Demo</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href;
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
{/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    to={resource.href;
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {resource.name;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div></div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
{legal.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href;
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRightIcon className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {item.name;
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p>Get the latest news and updates from Zion Tech Group.</p>
            <div className="flex">
              <input;
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              /></input>
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-r-lg transition-colors flex items-center">
                Subscribe;
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      {/* Bottom Footer */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <a;
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}></a>
                  {social.icon}`
                </a>``
              ))}```
            </div>````
          </div>`````
        </div>``````
      </div>```````
    </footer>````````
  );`````````
};``````````
export default Footer;```````````