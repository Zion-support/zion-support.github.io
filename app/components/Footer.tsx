<<<<<<< HEAD
import React from 'react'
import Link from 'next/link'
import { Brain } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
>>>>>>> 0037f0079afd7c1df869836a2655008c935027f4
  
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder' },
    { name: 'AI Content Generation', url: '/ai-content-generation' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
<<<<<<< HEAD
    { name: 'Computer Vision', url: '/computer-vision' },
    { name: 'Predictive Analytics', url: '/predictive-analytics' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant' }
  ]

  const itServices = [
    { name: 'Cloud Migration', url: '/cloud-migration' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'DevOps & CI/CD', url: '/devops' },
    { name: 'Database Management', url: '/database-services' },
    { name: 'API Development', url: '/api-development' },
    { name: 'Mobile Development', url: '/mobile-development' },
    { name: 'Web Development', url: '/web-development' },
    { name: 'System Integration', url: '/system-integration' }
  ]
=======
    { name: 'AI CRM', url: '/ai-crm' }
  ];

  const itServices = [
<<<<<<< HEAD
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile App Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Cloud Solutions', url: '/cloud-solutions', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Automated deployment' },
    { name: 'Database Management', url: '/database-services', description: 'Data optimization' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Digital Transformation', url: '/digital-transformation', description: 'Modernize your business' }
=======
    { name: 'Cloud Migration', url: '/cloud-infrastructure' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions' },
    { name: 'Database Management', url: '/database-management' },
    { name: 'API Development', url: '/api-development' },
    { name: 'Mobile App Development', url: '/mobile-development' }
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
  ];
>>>>>>> 0037f0079afd7c1df869836a2655008c935027f4

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
<<<<<<< HEAD
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  const legalLinks = [
=======
<<<<<<< HEAD
    { name: 'Blog', url: '/blog' },
=======
>>>>>>> 0037f0079afd7c1df869836a2655008c935027f4
    { name: 'Contact', url: '/contact' }
  ]

  const supportLinks = [
    { name: 'Documentation', url: '/docs' },
<<<<<<< HEAD
    { name: 'API Reference', url: '/api-docs' },
    { name: 'Support Center', url: '/support' },
    { name: 'Status Page', url: '/status' },
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
<<<<<<< HEAD
              <Brain className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI-powered solutions and IT services, helping businesses transform through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
=======
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm">
              Advanced AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology.
            </p>
=======
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Support Center', url: '/support' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-6">
              Advanced AI & IT Solutions for modern businesses. We help you transform your operations with cutting-edge technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
            </div>
>>>>>>> 0037f0079afd7c1df869836a2655008c935027f4
          </div>

          {/* AI Services */}
<<<<<<< HEAD
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">AI Services</h3>
=======
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.url} className="text-gray-300 hover:text-white transition-colors text-sm">
=======
            <h4 className="text-lg font-semibold mb-4">AI Services</h4>
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
<<<<<<< HEAD
                    href={service.url} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
                    to={service.url} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
>>>>>>> 0037f0079afd7c1df869836a2655008c935027f4
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
<<<<<<< HEAD
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">IT Services</h3>
=======
          <div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link href={service.url} className="text-gray-300 hover:text-white transition-colors text-sm">
=======
            <h4 className="text-lg font-semibold mb-4">IT Services</h4>
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
<<<<<<< HEAD
                    href={service.url} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
=======
                    to={service.url} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
>>>>>>> 0037f0079afd7c1df869836a2655008c935027f4
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Company & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
=======
<<<<<<< HEAD
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
=======
          {/* Company & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 mb-6">
              {company.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
                  </Link>
                </li>
              ))}
            </ul>
            
<<<<<<< HEAD
            <h3 className="text-lg font-semibold text-white mt-6">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.url} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
=======
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.url} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
>>>>>>> 0037f0079afd7c1df869836a2655008c935027f4
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-300 text-sm">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-emerald-400" />
              <span className="text-gray-300 text-sm">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Powered by AI & Innovation</span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400" />
                <Star className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {supportLinks.map((link, index) => (
                <Link key={index} href={link.url} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
=======

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
>>>>>>> 0037f0079afd7c1df869836a2655008c935027f4
>>>>>>> cursor/fix-errors-and-merge-to-main-c682
