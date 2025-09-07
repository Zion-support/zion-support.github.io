ursor/automate-test-fix-improve-and-merge-code-48f3
  return (    <footer className='bg-gray-900 text-white'>
      {/* Main Footer Content */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='flex items-center space-x-2 mb-4'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>Z</span>
              </div>
              <div className='text-xl font-bold'>Zion Tech Group</div>
            </div>
            <p className='text-gray-300 mb-4'>
              Leading technology solutions provider helping businesses transform their digital presence
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            <div className='flex space-x-4'>
              <a href='https: //linkedin.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'>
                <Linkedin className='w-5 h-5' />
              </a>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'>
                <Github className='w-5 h-5' />
              </a>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-gray-300 hover:text-blue-400 transition-colors'>
                <Facebook className='w-5 h-5' />
              </a>
            </div>
          </div>
          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Services</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/services/ai-services' className='text-gray-300 hover:text-white transition-colors'>
                  AI Services
                </Link>              </li>
              <li>
                <Link href='/services/it-services' className='text-gray-300 hover:text-white transition-colors'>
                  IT Services
                </Link>
              </li>
              <li>
                <Link href='/services/micro-saas' className='text-gray-300 hover:text-white transition-colors'>
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link href='/services/ai-ops-copilot' className='text-gray-300 hover:text-white transition-colors'>
                  AI Ops Copilot
                </Link>
              </li>
              <li>
                <Link href='/services/security-copilot' className='text-gray-300 hover:text-white transition-colors'>
                  Security Copilot
                </Link>
              </li>
              <li>
                <Link href='/services/data-platform' className='text-gray-300 hover:text-white transition-colors'>
                  Data Platform
                </Link>
              </li>
              <li>
                <Link href='/services/martech-automation' className='text-gray-300 hover:text-white transition-colors'>
                  MarTech Automation
                </Link>
              </li>
            </ul>
          </div>
          {/* Solutions */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Solutions</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/solutions/enterprise' className='text-gray-300 hover:text-white transition-colors'>
                  Enterprise Solutions
                </Link>              </li>
              <li>
                <Link href='/solutions/small-business' className='text-gray-300 hover:text-white transition-colors'>
                  Small Business
                </Link>
              </li>
              <li>
                <Link href='/solutions/startups' className='text-gray-300 hover:text-white transition-colors'>
                  Startups
                </Link>
              </li>
              <li>
                <Link href='/solutions' className='text-gray-300 hover:text-white transition-colors'>
                  Solutions Overview
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul className='space-y-2 mb-6'>
              <li>
                <Link href='/about' className='text-gray-300 hover:text-white transition-colors'>
                  About Us
                </Link>              </li>
              <li>
                <Link href='/careers' className='text-gray-300 hover:text-white transition-colors'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/blog' className='text-gray-300 hover:text-white transition-colors'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/products' className='text-gray-300 hover:text-white transition-colors'>
                  Products
                </Link>
              </li>
            </ul>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <div className='space-y-3'>
              <div className='flex items-center space-x-2'>
                <Mail className='w-4 h-4 text-blue-400' />
                <a href='mailto:info@ziontechgroup.com' className='text-gray-300 hover:text-white transition-colors'>
                  info@ziontechgroup.com
                </a>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4 text-blue-400' />
                <span className='text-gray-300'>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-start space-x-2'>
                <MapPin className='w-4 h-4 text-blue-400 mt-1' />
                <span className='text-gray-300'>123 Tech Street<br />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>
      {/* Newsletter Section */}
      <div className='border-t border-gray-700 py-8'>
        <div className='container mx-auto px-4'>
          <div className='text-center'>
            <h3 className='text-lg font-semibold mb-2'>Stay Updated</h3>
            <p className='text-gray-300 mb-4'>Subscribe to our newsletter for the latest tech insights and updates.</p>
            <div className='flex max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus: outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg font-semibold transition-colors'>
                Subscribe
              </button>
            </div>          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className='border-t border-gray-700 py-6'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-300 text-sm'>
              &copy 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <Link href='/privacy' className='text-gray-300 hover:text-white text-sm transition-colors'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-gray-300 hover:text-white text-sm transition-colors'>
                Terms of Service
              </Link>
              <Link href='/sitemap' className='text-gray-300 hover:text-white text-sm transition-colors'>
                Sitemap
              </Link>
            </div>          </div>
        </div>
      </div>
    </footer>
  )
}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0


const EnhancedFooter: React.FC = () => {;
  const currentYear = new Date().getFullYear();

  const company = null;
  ];
  const resources = null;
  ];
  const socialLinks = null;
const EnhancedFooter: React.FC = () => {const currentYear = new Date().getFullYear();
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, ArrowRight } from 'lucide-react';

const EnhancedFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Innovative Solutions', href: '/innovative-it-services' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Cloud Services', href: '/cloud-devops' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const solutions = [
    { name: 'AI Analytics Platform', href: '/solutions/ai-analytics' },
    { name: 'Cloud Migration', href: '/solutions/cloud-migration' },
    { name: 'Cybersecurity Suite', href: '/solutions/cybersecurity' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'IoT Solutions', href: '/solutions/iot' },
    { name: 'Blockchain Integration', href: '/solutions/blockchain' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
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

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link href={solution.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link href={resource.href} className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Stay Updated with Our Latest Innovations</h3>
              <p className="text-gray-300">Get insights on the latest technology trends and our newest solutions delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;