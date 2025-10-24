import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud    } from 'lucide-react'
;
const Footer: React.FC = () => {;
  const currentYear = new Date().getFullYear();
  const aiServices = [;
    { name: 'AI Analytics & BI', url: '/ai-analytics', description: 'Business intelligence' },;
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },;
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },;
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },;
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security' },;
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image recognition' },;
    { name: 'Predictive Analytics', url: '/predictive-analytics', description: 'Forecasting' },;
    { name: 'Speech & Voice AI', url: '/ai-voice-assistant', description: 'Voice technology' }];
;
  const itServices = [;
    { name: 'Web Development', url: '/web-development', description: 'Custom websites' },;
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android apps' },;
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud solutions' },;
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security services' },;
    { name: 'DevOps', url: '/devops', description: 'Development operations' },;
    { name: 'Data Analytics', url: '/data-analytics', description: 'Data insights' },;
    { name: 'IoT Solutions', url: '/iot-solutions', description: 'Internet of Things' },;
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology' }];
;
  const microSaas = [;
    { name: 'AI Email Marketing', url: '/micro-saas/ai-email-marketing-automation', description: 'Email automation' },;
    { name: 'AI Inventory Manager', url: '/micro-saas/ai-inventory-manager', description: 'Inventory tracking' },;
    { name: 'AI Project Manager', url: '/micro-saas/ai-project-manager', description: 'Project management' },;
    { name: 'AI Social Scheduler', url: '/micro-saas/ai-social-media-scheduler', description: 'Social media' }];
;
  const company = [;
    { name: 'About Us', url: '/about' },;
    { name: 'Our Team', url: '/team' },;
    { name: 'Careers', url: '/careers' },;
    { name: 'Contact', url: '/contact' }];
;
  const resources = [;
    { name: 'Documentation', url: '/docs' },;
    { name: 'API Reference', url: '/api' },;
    { name: 'Blog', url: '/blog' },;
    { name: 'Tutorials', url: '/tutorials' },;
    { name: 'Case Studies', url: '/case-studies' }];
;
  return (<footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* AI Services */}"
          <div>"
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400"  />;
              AI Services;
            </h3>
            <ul className="space-y-2">);
              {aiServices.map((service) => (<li key={service.name}>
                  <Link"
                    href={service.url}"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >;
                    {service.name}
                  </Link>
                </li>);
              ))}
            </ul>
          </div>
          {/* IT Services */}"
          <div>"
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-blue-400"  />;
              IT Services;
            </h3>
            <ul className="space-y-2">
              {itServices.map((service) => (<li key={service.name}>
                  <Link"
                    href={service.url}"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >;
                    {service.name}
                  </Link>
                </li>);
              ))}
            </ul>
          </div>
          {/* Micro SaaS */}"
          <div>"
            <h3 className="text-lg font-semibold mb-4">Micro SaaS</h3>
            <ul className="space-y-2">
              {microSaas.map((service) => (<li key={service.name}>
                  <Link"
                    href={service.url}"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >;
                    {service.name}
                  </Link>
                </li>);
              ))}
            </ul>
          </div>
          {/* Company */}"
          <div>"
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (<li key={item.name}>
                  <Link"
                    href={item.url}"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >;
                    {item.name}
                  </Link>
                </li>);
              ))}
            </ul>
          </div>
          {/* Resources */}"
          <div>"
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (<li key={item.name}>
                  <Link"
                    href={item.url}"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >;
                    {item.name}
                  </Link>
                </li>);
              ))}
            </ul>
          </div>
        </div>
        {/* Contact Info */}"
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />"
              <span className="text-gray-300">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-purple-400" />"
              <span className="text-gray-300">+1-555-ZION-TECH</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-purple-400" />"
              <span className="text-gray-300">123 Tech Street, Innovation City</span>
            </div>
          </div>
        </div>
        {/* Social Links */}"
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-6 h-6"  />;
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-6 h-6"  />"
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-6 h-6"  />;
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.;
            </p>
          </div>
        </div>
      </div>
    </footer>
  )}"
export default Footer;";'"