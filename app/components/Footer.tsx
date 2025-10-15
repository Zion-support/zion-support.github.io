<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: '5G Solutions', href: '/5g-solutions' },
    { name: 'Case Studies', href: '/case-studies' }
  ];
  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];
  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' }
=======
import React from 'react';;';
import SEOHead from './components/SEOHead';

import {"}
        "
  PhoneIcon,",
        "
  EnvelopeIcon,",
        "
  MapPinIcon,",
        "
  ArrowRightIcon,",
        "
  Icon",
        "
} from '@heroicons/react/24/outline',
      import {Twitter, edin, Github} from 'lucide-react';
",
        "
const Footer: React.FC = () => {"}
        "
  const currentYear = new Date().getFullYear()
  
  const services = [",
        "
    { name: 'AI Solutions', href: '/ai-solutions' },",
        "
    { name: 'AI Email Marketing', href: '/ai-email-marketing-automation' },",
        "
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },",
        "
    { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },",
        "
    { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },",
        "
    { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },",
        "
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },",
        "
    { name: 'IT Solutions', href: '/it-solutions' };
  ];
,
      const company = [",
        "
    { name: 'About Us', href: '/about' },",
        "
    { name: 'Team', href: '/team' },",
        "
    { name: 'Careers', href: '/careers' },",
        "
    { name: 'Case Studies', href: '/case-studies' },",
        "
    { name: 'News & Updates', href: '/blog' },",
        "
    { name: 'Partnerships', href: '/partnerships' },",
        "
    { name: 'Contact Us', href: '/contact' };
  ];
,
      const resources = [",
        "
    { name: 'Documentation', href: '/docs' },",
        "
    { name: 'Tutorials', href: '/tutorials' },",
        "
    { name: 'Blog', href: '/blog' },",
        "
    { name: 'API Reference', href: '/api-docs' },",
        "
    { name: 'Help Center', href: '/help' },",
        "
    { name: 'Community', href: '/community' };
  ];
,
      const support = [",
        "
    { name: 'Contact Us', href: '/contact' },",
        "
    { name: 'Support Center', href: '/support' },",
        "
    { name: 'Live Chat', href: '/chat' },",
        "
    { name: 'Schedule Demo', href: '/demo' },",
        "
    { name: 'System Status', href: '/status' },",
        "
    { name: 'Report Issue', href: '/report' };
  ];
,
      const legal = [",
        "
    { name: 'Privacy Policy', href: '/privacy' },",
        "
    { name: 'Terms of Service', href: '/terms' };
  ];
,
      const socialLinks = [",
        "
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: 'facebook' },",
        "
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },",
        "
    { name: 'edIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },";"
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' };
>>>>>>> main
  ];
,
      return (<footer className="bg-slate-900 border-t border-slate-700">";")
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">";"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">";"
          {/* Company Info */};
          <div className="lg:col-span-2">";"
            <to="/" className="flex items-center mb-4">";"
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">";"
                <span className="text-white font-bold text-sm">Z</span>",
        "
              </div>",
        "
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>",
        "
            </>",
        "
            <p className="text-gray-400 text-sm mb-4">",
        "
              Leading provider of AI solutions, cybersecurity, _cloud infrastructure, and digital transformation services.",
        "
              Transforming businesses with cutting-edge technology.",
        "
            </p>",
        "
            <div className="flex space-x-4">";"
              <a href="#" className="text-gray-400 hover:text-white transition-colors">";"
                <Facebook className="h-5 w-5" />",
        "
              </a>",
        "
              <a href="#" className="text-gray-400 hover:text-white transition-colors">";"
                <Twitter className="h-5 w-5" />",
        "
              </a>",
        "
              <a href="#" className="text-gray-400 hover:text-white transition-colors">";"
                <edin className="h-5 w-5" />",
        "
              </a>",
        "
              <a href="#" className="text-gray-400 hover:text-white transition-colors">";"
                <Github className="h-5 w-5" />",
        "
              </a>",
        "
            </div>",
        "
          </div>",
        "
          {/* Services */};
          <div>";"
            <h3 className="text-white font-semibold mb-4">Services</h3>";"
            <ul className="space-y-2">",
        "
              {services.map((service) => (",)}
        "
                <li key={service.name}>",
        "
                  <",>
        "
                    to={service.href},
      className="text-gray-300 hover:text-white transition-colors flex items-center";
                  >";"
                    <ArrowRightIcon className="h-3 w-3 mr-2" />",
        "
                    {service.name};
                  </>",
        "
                </li>",
        "
              ))};
            </ul>",
        "
          </div>",
        "
          {/* Solutions */};
          <div>",
        "
            <h3 className="text-white font-semibold mb-4">Solutions</h3>";"
            <ul className="space-y-2">",
        "
              {solutions.map((solution) => (",)}
        "
                <li key={solution.name}>",
        "
                  <",>
        "
                    to={solution.href},
      className="text-gray-300 hover:text-white transition-colors flex items-center";
                  >";"
                    <ArrowRightIcon className="h-3 w-3 mr-2" />",
        "
                    {solution.name};
                  </>",
        "
                </li>",
        "
              ))};
            </ul>",
        "
          </div>",
        "
          {/* Resources */};
          <div>",
        "
            <h3 className="text-white font-semibold mb-4">Resources</h3>";"
            <ul className="space-y-2">",
        "
              {resources.map((resource) => (",)}
        "
                <li key={resource.name}>",
        "
                  <",>
        "
                    to={resource.href},
      className="text-gray-300 hover:text-white transition-colors flex items-center";
                  >";"
                    <ArrowRightIcon className="h-3 w-3 mr-2" />",
        "
                    {resource.name};
                  </>",
        "
                </li>",
        "
              ))};
            </ul>",
        "
          </div>",
        "
          {/* Company */};
          <div>",
        "
            <h3 className="text-white font-semibold mb-4">Company</h3>";"
            <ul className="space-y-2">",
        "
              {company.map((item) => (",)}
        "
                <li key={item.name}>",
        "
                  <",>
        "
                    to={item.href},
      className="text-gray-300 hover:text-white transition-colors flex items-center";
                  >";"
                    <ArrowRightIcon className="h-3 w-3 mr-2" />",
        "
                    {item.name};
                  </>",
        "
                </li>",
        "
              ))};
            </ul>",
        "
          </div>",
        "
        </div>",
        "
        {/* Contact Info */};
        <div className="mt-12 pt-8 border-t border-slate-700">";"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">";"
            <div className="flex items-center">";"
              <PhoneIcon className="h-5 w-5 text-purple-400 mr-3" />",
        "
              <div>",
        "
                <p className="text-white font-medium">+1 302 464 0950</p>";"
                <p className="text-gray-400 text-sm">24/7 Support</p>",
        "
              </div>",
        "
            </div>";"
            <div className="flex items-center">";"
              <EnvelopeIcon className="h-5 w-5 text-cyan-400 mr-3" />",
        "
              <div>",
        "
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>";"
                <p className="text-gray-400 text-sm">Response within 2 hours</p>",
        "
              </div>",
        "
            </div>";"
            <div className="flex items-center">";"
              <MapPinIcon className="h-5 w-5 text-green-400 mr-3" />",
        "
              <div>",
        "
                <p className="text-white font-medium">364 E Main St STE 1008</p>";"
                <p className="text-gray-400 text-sm">Middletown DE 19709</p>",
        "
              </div>",
        "
            </div>",
        "
          </div>",
        "
        </div>";"
        {/* Bottom Bar */};
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">";"
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">",
        "
            <span>© {currentYear} Zion Tech Group. All rights reserved.</span>",
        "
          </div>";"
          <div className="flex space-x-6">",
        "
            {legal.map((item) => (",)}
        "
              <";">
                key={item.name},
      to={item.href},
      className="text-gray-400 hover:text-white text-sm transition-colors";
              >",
        "
                {item.name};
              </>",
        "
            ))};
          </div>",
        "
        </div>",
        "
        {/* Made with love */};
        <div className="mt-6 text-center">";"
          <p className="text-gray-400 text-sm flex items-center justify-center">";"
            Made with <Icon className="h-4 w-4 text-red-400 mx-1" /> by Zion Tech Group",
        "
          </p>",
        "
        </div>",
        "
      </div>",
        "
    </footer>",
        "
  )

<<<<<<< HEAD
  const quickLinks = useMemo(() => [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ], []);

  const aiServices = useMemo(() => [
    { name: "AI Analytics", href: "/ai-analytics" },
    { name: "AI Content Generation", href: "/ai-content-generation" },
    { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
    { name: "AI Customer Support", href: "/ai-customer-support" },
    { name: "AI Healthcare", href: "/ai-healthcare" },
    { name: "AI Marketing", href: "/ai-marketing" },
  ], []);

  const fiveGServices = useMemo(() => [
    { name: "5G Implementation", href: "/5g-implementation" },
    { name: "5G Data Analytics", href: "/5g-data-analytics" },
    { name: "5G Edge Computing", href: "/5g-edge-computing" },
    { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
    { name: "5G Mobile Applications", href: "/5g-mobile-applications" },
    { name: "5G Smart City", href: "/5g-smart-city-solutions" },
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Infrastructure", href: "/services" },
    { name: "Cybersecurity", href: "/ai-cybersecurity" },
    { name: "Data Analytics", href: "/ai-data-analytics" },
    { name: "Mobile Development", href: "/ai-mobile-app-development" },
    { name: "Project Management", href: "/ai-project-management" },
    { name: "Quality Assurance", href: "/ai-quality-assurance" },
  ], []);

  const contactInfo = useMemo(() => [
    {
      icon: <Mail className="w-5 h-5 text-cyan-400" />,
      text: "info@ziontechgroup.com",
      href: "mailto:info@ziontechgroup.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-cyan-400" />,
      text: "+1 (302) 464-0950",
      href: "tel:+13024640950"
    },
    {
      icon: <MapPin className="w-5 h-5 text-cyan-400" />,
      text: "364 E Main St STE 1008, Middletown, DE 19709",
      href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
    },
    {
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      text: "24/7 Support Available",
      href: "/support"
    }
  ], []);
=======
<<<<<<< HEAD
>>>>>>> main

  const socialLinks = ['
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: LinkedinIcon },'
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: TwitterIcon },'
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: FacebookIcon },']
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: InstagramIcon }]
  ];
  return (
<<<<<<< HEAD
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-sm">
                Leading provider of AI-powered solutions, 5G technology, and comprehensive IT services 
                for modern businesses worldwide.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-cyan-400" />
                AI Services
              </h3>
              <ul className="space-y-3">
                {aiServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5G Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                5G Services
              </h3>
              <ul className="space-y-3">
                {fiveGServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                IT Services
              </h3>
              <ul className="space-y-3">
                {itServices.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {info.icon}
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {info.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-slate-700/50">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Latest Tech Trends
              </h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for insights on AI, 5G, cybersecurity, and emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <FuturisticButton className="px-6 py-3">
                  Subscribe
                </FuturisticButton>
=======
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of advanced AI and IT solutions, cybersecurity, 
              cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>)
                </li>)
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-300">+1-302-555-0123</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-300">info@ziontechgroup.com</span>
>>>>>>> main
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
=======
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
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
>>>>>>> main
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";
        description="Professional components solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Components</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),

};
;
export default ComponentsPage;'";'";
>>>>>>> main
