import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion AI Solutions</h3>
            <p className="text-gray-300">
              Advanced AI-powered solutions for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>AI Automation</li>
              <li>Data Analytics</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
<<<<<<< HEAD
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion AI Solutions. All rights reserved.
          </p>
=======
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion AI Solutions. All rights reserved.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
            </ul>
                Cookie Policy;
              </a>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400 neon-text">Solutions</h3>"
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-3">Micro SAAS</h4>"
                <ul className="space-y-2">
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <li key={index}>
                      <Link ;
                        href={service.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                      >
                        {service.name}
          {/* Additional Links */}
          <div className="mt-12 pt-8 border-t border-gray-700/50">"
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Links */}
              <div>
                <h5 className="text-sm font-semibold text-white mb-4">Company</h5>"
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link;
                        to={link.url}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

const microSaasServices = [
  { name: 'AI Content Generator', url: '/ai-content-generator' },
  { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard' },
  { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot' },
  { name: 'AI Email Automation', url: '/ai-email-automation' },
  { name: 'AI Data Visualization', url: '/ai-data-visualization' },
  { name: 'AI Workflow Automation', url: '/ai-workflow-automation' }
];

const companyLinks = [
  { name: 'About Us', url: '/about' },
  { name: 'Contact', url: '/contact' },
  { name: 'Privacy Policy', url: '/privacy' },
  { name: 'Terms of Service', url: '/terms' }
];

const serviceCategories = [
  {
    name: 'AI Solutions',
    services: [
      'AI Analytics',
      'AI Automation',
      'AI Content Generation',
      'AI Customer Support'
    ]
  },
  {
    name: 'IT Services',
    services: [
      'Cloud Migration',
      'Cybersecurity',
      'DevOps',
      'Data Analytics'
    ]
  },
  {
    name: '5G Solutions',
    services: [
      '5G Network Infrastructure',
      '5G Edge Computing',
      '5G Mobile Applications',
      '5G Smart City Solutions'
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Quick Links</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Services</h3>
            <div className="space-y-4">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-sm font-medium text-purple-300 mb-2">{category.name}</h4>
                  <ul className="space-y-1">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <a 
                          href="#" 
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-xs"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cyan-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
<<<<<<< HEAD
        <div className="border-t border-gray-700 mt-12 pt-8">"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Company</h4>"
              <ul className="space-y-2">
                {companyLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Support</h4>"
              <ul className="space-y-2">
                {supportLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Legal</h4>"
              <ul className="space-y-2">
                {legalLinks.slice(0, 4).map((link, index) => (
                  <li key={index}>
                    <Link href={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-cyan-400 mb-4">Stay Updated</h4>"
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and tech updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-r-md hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 text-sm font-medium">
                  Subscribe;
                </button>
              </div>
            </div>
          </div>
        </div>


            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Core Services</h4>"
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group"
                    >
                      {service.icon}
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">AI Services</h4>"
              <ul className="space-y-2">
                {aiServices.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">Micro SAAS</h4>"
              <ul className="space-y-2">
                {microSaasServices.map((service, index) => (
                  <li key={index}>
                    <Link;
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
=======
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-a28c
