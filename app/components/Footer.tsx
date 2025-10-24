import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition' },
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting' },
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', description: 'Voice technology' }
  ];

  const itServices = [
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights' },
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology' }
  ];

  const microSaas = [
    { name: 'AI Email Marketing', url: '/micro-saas/ai-email-marketing-automation', description: 'Email automation' },
    { name: 'AI Inventory Manager', url: '/micro-saas/ai-inventory-manager', description: 'Inventory tracking' },
    { name: 'AI Project Manager', url: '/micro-saas/ai-project-manager', description: 'Project management' },
    { name: 'AI Social Scheduler', url: '/micro-saas/ai-social-media-scheduler', description: 'Social media' }
  ];

  const company = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ];

  const resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Blog', url: '/blog' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Support', url: '/support' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' }
  ];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 text-sm">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
<<<<<<< HEAD
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
=======
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link 
<<<<<<< HEAD
                    to={service.url} 
=======
                    href={service.url} 
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-purple-400" />
              IT Services
            </h3>
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link 
<<<<<<< HEAD
                    to={service.url} 
=======
                    href={service.url} 
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {company.map((item, index) => (
                  <li key={index}>
                    <Link 
<<<<<<< HEAD
                      to={item.url} 
=======
                      href={item.url} 
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resources.map((item, index) => (
                  <li key={index}>
                    <Link 
<<<<<<< HEAD
                      to={item.url} 
=======
                      href={item.url} 
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">contact@ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            {legal.map((item, index) => (
              <Link 
                key={index}
<<<<<<< HEAD
                to={item.url} 
=======
                href={item.url} 
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
<<<<<<< HEAD
=======
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Zion Tech Group. All rights reserved.
          </p>
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        </div>
      </div>
    </footer>
  )
}

export default Footer
