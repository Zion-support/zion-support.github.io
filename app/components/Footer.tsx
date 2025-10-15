import React from 'react'
import { Link } from 'react-router-dom'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { 
  HeartIcon
} from '@heroicons/react/24/outline'
import { ArrowRight, Twitter, Linkedin, Github } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  const services = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing-automation' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
    { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot' },
    { name: 'AI Project Management Pro', href: '/ai-project-management-pro' },
    { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News & Updates', href: '/blog' },
    { name: 'Partnerships', href: '/partnerships' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Blog', href: '/blog' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'Community', href: '/community' }
  ];

  const solutions = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Micro SaaS Solutions', href: '/micro-saas-solutions' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Mobile Development', href: '/mobile-development' },
    { name: 'Data Analytics', href: '/data-analytics' }
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
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: 'facebook' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: 'twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: 'github' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-2 text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Leading provider of AI solutions, cybersecurity, _cloud infrastructure, and digital transformation services. 
              Transforming businesses with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link
                    to={solution.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2" />
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2" />
                    {resource.name}
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
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRightIcon className="h-3 w-3 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 text-purple-400 mr-3" />
              <div>
                <p className="text-white font-medium">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm">24/7 Support</p>
              </div>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-5 w-5 text-cyan-400 mr-3" />
              <div>
                <p className="text-white font-medium">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">Response within 2 hours</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-green-400 mr-3" />
              <div>
                <p className="text-white font-medium">364 E Main St STE 1008</p>
                <p className="text-gray-400 text-sm">Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
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

        {/* Made with love */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <HeartIcon className="h-4 w-4 text-red-400 mx-1" /> by Zion Tech Group
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer