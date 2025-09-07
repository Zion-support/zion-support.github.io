import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
=======
import { Link  } from 'react-router-dom';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram, Github, ChevronUp  } from 'lucide-react';
const Footer: React.FC = () => {const currentYear  = new Date().getFullYear()const services = [;
    { name: 'AI Services', href: '/services/ai-services' },{ name: 'IT Services', href: '/services/it-services' },{ name: 'Micro SaaS', href: '/services/micro-saas' },{ name: 'Cybersecurity', href: '/services/cybersecurity' },{ name: 'Cloud Solutions', href: '/services/cloud-solutions' },{ name: 'Mobile Development', href: '/services/mobile-development' }
  ];const company = [;
    { name: 'About Us', href: '/about' },{ name: 'Our Team', href: '/about#team' },{ name: 'Careers', href: '/careers' },{ name: 'Blog', href: '/blog' },{ name: 'Case Studies', href: '/case-studies' }
  ];const support = [;
    { name: 'Help Center', href: '/support' },{ name: 'FAQ', href: '/faq' },{ name: 'Contact Us', href: '/contact' },{ name: 'Documentation', href: '/docs' },{ name: 'API Reference', href: '/api' }
  ];const legal = [;
    { name: 'Privacy Policy', href: '/privacy' },{ name: 'Terms of Service', href: '/terms' },{ name: 'Cookie Policy', href: '/cookies' },{ name: 'GDPR Compliance', href: '/gdpr' }
  ];const socialLinks = [;
    { name: 'Facebook', href: '#', icon: Facebook },{ name: 'Twitter', href: '#', icon: Twitter },{ name: 'LinkedIn', href: '#', icon: Linkedin },{ name: 'GitHub', href: '#', icon: Github }
  ];const scrollToTop = () => {window.scrollTo({ top: 0, behavior: 'smooth' })}return (<footer className="bg-gray-900 text-white">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">;
            <Link to="/" className="flex items-center space-x-2 mb-4">;
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">;
                <span className="text-black font-bold text-sm">Z</span>;
              </div>;
              <span className="text-xl font-bold text-white">Zion Tech Group</span>;
            </Link>;
            <p className="text-gray-300 mb-4 max-w-md">;
              Leading provider of cutting-edge AI, IT, and digital transformation solutions.;
              We help businesses scale, innovate, and succeed in the digital age.;
            </p>;
            <div className="space-y-2">;
              <div className="flex items-center text-gray-300">;
                <Phone className="w-4 h-4 mr-2" />;
                <span>+1 302 464 0950</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <Mail className="w-4 h-4 mr-2" />;
                <span>kleber@ziontechgroup.com</span>;
              </div>;
              <div className="flex items-center text-gray-300">;
                <MapPin className="w-4 h-4 mr-2" />;
                <span>364 E Main St STE 1008 Middletown DE 19709</span>;
              </div>;
            </div>;
          </div>;
          {/* Services */}
<<<<<<< HEAD
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Transformation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
=======
import { 
  Mail, Phone, 
  MapPin, Twitter, 
  Linkedin, Facebook, 
  Instagram, Youtube,
  ArrowRight, Shield,
  Zap, Users,
  Globe
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services', links: [
        { name: 'AI Services', href: '/services/ai' }, { name: 'Cloud Solutions', href: '/services/cloud' }, { name: 'Cybersecurity', href: '/services/cybersecurity' }, { name: 'IT Infrastructure', href: '/services/infrastructure' }, { name: 'Digital Transformation', href: '/services/transformation' }, { name: 'Consulting', href: '/services/consulting' }
      ]
    }, {
      title: 'Solutions',
      links: [
        { name: 'Industry Solutions', href: '/solutions/industry' },
        { name: 'Manufacturing', href: '/solutions/manufacturing' },
        { name: 'Financial Services', href: '/solutions/financial' },
        { name: 'Healthcare', href: '/solutions/healthcare' },
        { name: 'Retail', href: '/solutions/retail' },
        { name: 'Education', href: '/solutions/education' }
      ]
    }, {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Events', href: '/events' }
      ]
    }, {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Research & Development', href: '/research-development' },
        { name: 'Blog', href: '/blog' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Documentation', href: '/docs' }
      ]
    }, {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Training', href: '/training' },
        { name: 'Contact', href: '/contact' },
        { name: 'Request Quote', href: '/request-quote' },
        { name: 'Status', href: '/status' },
        { name: 'API Documentation', href: '/api' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter }, { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook }, { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-zion-cyan text-sm">Innovating Tomorrow</p>
              </div>
            </div>
            
            <p className="text-zion-slate-light mb-6 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions, AI-driven insights, 
              and transformative digital strategies for the future.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="h-4 w-4 text-zion-cyan" />
                <span>contact@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="h-4 w-4 text-zion-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="h-4 w-4 text-zion-cyan" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-zion-slate-light hover: text-zion-cyan transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-zion-purple/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Zion Tech Group
            </h3>
            <p className="text-zion-slate-light mb-6">
              Get the latest insights on AI, cloud computing, cybersecurity, and digital transformation.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/80 hover:to-zion-cyan/80 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 text-zion-slate-light">
              <Shield className="h-5 w-5 text-zion-cyan" />
              <span className="text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-slate-light">
              <Zap className="h-5 w-5 text-zion-cyan" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-slate-light">
              <Users className="h-5 w-5 text-zion-cyan" />
              <span className="text-sm">500+ Clients</span>
            </div>
            <div className="flex items-center space-x-3 text-zion-slate-light">
              <Globe className="h-5 w-5 text-zion-cyan" />
              <span className="text-sm">Global Presence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-zion-purple/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-zion-slate-light text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Cookie Policy
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-zion-slate-light hover: text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        </div>
      </div>
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>;
            <ul className="space-y-2">;
              {services.map((service) => (<li key={service.name}>;
                  <Link;
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors";
                  >;
                    {service.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Company */}
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>;
            <ul className="space-y-2">;
              {company.map((item) => (<li key={item.name}>;
                  <Link;
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors";
                  >;
                    {item.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
          {/* Support */}
          <div>;
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>;
            <ul className="space-y-2">;
              {support.map((item) => (<li key={item.name}>;
                  <Link;
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors";
                  >;
                    {item.name}
                  </Link>;
                </li>;
              ))}
            </ul>;
          </div>;
        </div>;
        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">;
          <div className="max-w-md">;
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>;
            <p className="text-gray-400 mb-4">;
              Get the latest news and updates from Zion Tech Group.;
            </p>;
            <div className="flex">;
              <input;
                type="email";
                placeholder="Enter your email";
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
              />;
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition-colors">;
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">;
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">;
            {legal.map((item) => (<Link;
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-white text-sm transition-colors";
              >;
                {item.name}
              </Link>;
            ))}
          </div>;
          <div className="flex space-x-4">;
            {socialLinks.map((social) => (<a;
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors";
                aria-label={social.name}
              >;
                <social.icon className="h-5 w-5" />;
              </a>;
            ))}
          </div>;
        </div>;
        {/* Back to Top Button */}
        <div className="mt-8 flex justify-end">;
          <button;
            type="button";
            onClick={scrollToTop}
            className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm transition-colors cursor-pointer";
            aria-label="Back to top";
          >;
            <ChevronUp className="h-4 w-4" aria-hidden="true" />;
            <span>Back to Top</span>;
          </button>;
        </div>;
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">;
          <p className="text-gray-400 text-sm">;
            © {currentYear} Zion Tech Group. All rights reserved.;
          </p>;
        </div>;
      </div>;
    </footer>;
  )}export default Footer;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
