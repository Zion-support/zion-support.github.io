import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Development', href: '/services/ai-development' },
    { name: 'Cloud Migration', href: '/services/cloud-migration' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Mobile Apps', href: '/services/mobile-development' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Data Analytics', href: '/services/data-analytics' }
  ];

  const products = [
    { name: 'ZionAI Analytics', href: '/products/zion-ai-analytics' },
    { name: 'CloudSecure Pro', href: '/products/cloudsecure-pro' },
    { name: 'DataFlow Engine', href: '/products/dataflow-engine' },
    { name: 'MobileFirst CMS', href: '/products/mobilefirst-cms' }
=======
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Security', href: '/security' },
    { name: 'Case Studies', href: '/case-studies' },
>>>>>>> main
  ];

  const company = [
    { name: 'About Us', href: '/about' },
<<<<<<< HEAD
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' }
=======
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
>>>>>>> main
  ];

  return (
    <footer className="bg-gray-900 text-white">
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className="text-sm text-gray-400">Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cloud services, 
              and digital transformation. Empowering businesses to thrive in the digital age.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📧</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📱</span>
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">📍</span>
                <span className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors">
                    {service.name}
=======
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href}>
                    <span className="text-gray-300 hover:text-white transition-colors">{service.name}</span>
>>>>>>> main
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <Link href={product.href} className="text-gray-300 hover:text-white transition-colors">
                    {product.name}
=======
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-gray-300 hover:text-white transition-colors">{item.name}</span>
>>>>>>> main
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
=======
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className="text-gray-300 hover:text-white transition-colors">{item.name}</span>
>>>>>>> main
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
<<<<<<< HEAD

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest technology insights and company news delivered to your inbox.</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
=======
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">info@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (302) 464-0950</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</span>
              </Link>
              <Link href="/sitemap">
                <span className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</span>
>>>>>>> main
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;