import React from 'react';
import Link from 'next/link';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube, Instagram, ArrowRight, Heart, Cloud, Database } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI & Automation',
      icon: Brain,
      color: 'text-blue-400',
      services: [
<<<<<<< HEAD
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
=======
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
>>>>>>> main
        { name: 'All Services', href: '/services' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-green-400',
      services: [
<<<<<<< HEAD
        { name: 'IT Services', href: '/services/it-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
=======
        { name: 'IT Services', href: '/it-services' },
        { name: 'Micro SaaS', href: '/micro-saas' },
>>>>>>> main
        { name: 'Services Overview', href: '/services' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'text-purple-400',
      services: [
<<<<<<< HEAD
        { name: 'AI Services', href: '/services/ai-services' },
        { name: 'Products', href: '/products' },
=======
        { name: 'AI Services', href: '/ai-services' },
>>>>>>> main
        { name: 'Case Studies', href: '/case-studies' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
<<<<<<< HEAD
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/ziontechgroup' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/ziontechgroup' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/ziontechgroup' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ziontechgroup' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.
            </p>
=======
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram }
  ];

  const contactInfo = {
    email: 'contact@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions and technology services. 
              We help businesses transform and innovate with cutting-edge artificial intelligence.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
>>>>>>> main
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
<<<<<<< HEAD
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
=======
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
>>>>>>> main
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
<<<<<<< HEAD
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <category.icon className={`w-4 h-4 ${category.color}`} />
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {category.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
=======
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  <div className="flex items-center mb-4">
                    <category.icon className={`w-5 h-5 mr-2 ${category.color}`} />
                    <h4 className="text-white font-semibold">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className="text-gray-300 hover:text-white transition-colors text-sm flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
>>>>>>> main
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
=======
          {/* Quick Links & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
>>>>>>> main
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
<<<<<<< HEAD
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
=======
                  className="text-gray-300 hover:text-white transition-colors text-sm"
>>>>>>> main
                >
                  {link.name}
                </Link>
              ))}
            </div>
<<<<<<< HEAD
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>
=======

            {/* Newsletter Signup */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and technology trends delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                  Subscribe
                </button>
>>>>>>> main
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500" />
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
=======
      </div>

      {/* Stats Section */}
      <div className="border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Zion Tech Group</span>
>>>>>>> main
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;