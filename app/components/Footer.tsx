'use client';
import React from 'react';
import Link from 'next/link';
import { Facebook, Github, Linkedin, Mail, MapPin, Phone, Twitter, Clock, Brain } from 'lucide-react';

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
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Blog', url: '/blog' },
    { name: 'Support', url: '/support' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' }
  ];

  return (
    <footer className="bg-gradient-to-brfrom-slate-900via-slate-800to-slate-900 text-white relative overflow-hidden">
      <div className="absoluteinset-0bg-gradient-to-rfrom-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absoluteinset-0bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]from-cyan-500/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-autopx-4sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2space-y-6">
            <div className="flexitems-centerspace-x-3group">
              <div className="w-12h-12bg-gradient-to-rfrom-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7h-7text-white" />
              </div>
              <div className="flexflex-col">
                <span className="text-2xlfont-bold">Zion Tech Group</span>
                <span className="text-smtext-cyan-400font-mediumtracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <p className="text-gray-300text-smleading-relaxed">
              Leading provider of AI and IT solutions for modern businesses.
              We help companies transform their operations with cutting-edge technology, 
              delivering measurable results and exceptional value.
            </p>
            <div className="space-y-4">
              <div className="flexitems-centertext-smtext-gray-300 group">
                <div className="w-8h-8bg-gradient-to-rfrom-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4h-4text-white" />
                </div>
                <a href="tel:+13024640950" className="hover:text-cyan-400transition-colorsfont-medium">+1 302 464 0950</a>
              </div>
              <div className="flexitems-centertext-smtext-gray-300 group">
                <div className="w-8h-8bg-gradient-to-rfrom-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Mail className="w-4h-4text-white" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400transition-colorsfont-medium">kleber@ziontechgroup.com</a>
              </div>
              <div className="flexitems-starttext-smtext-gray-300 group">
                <div className="w-8h-8bg-gradient-to-rfrom-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4h-4text-white" />
                </div>
                <span className="font-medium">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flexitems-centertext-smtext-gray-300 group">
                <div className="w-8h-8bg-gradient-to-rfrom-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-4h-4text-white" />
                </div>
                <span className="font-medium">Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lgfont-semiboldmb-4text-cyan-400 flex items-center">
              <Brain className="w-5h-5mr-2" />
              AI Services
            </h3>
            <ul className="space-y-2">
              {aiServices.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300hover:text-cyan-400text-smtransition-colors block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lgfont-semiboldmb-4text-cyan-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map(service => (
                <li key={service.name}>
                  <Link
                    href={service.url}
                    className="text-gray-300hover:text-cyan-400text-smtransition-colors block">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lgfont-semiboldmb-4text-cyan-400">Company</h3>
            <ul className="space-y-2">
              {company.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-gray-300hover:text-cyan-400text-smtransition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lgfont-semiboldmb-4text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              {resources.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="text-gray-300hover:text-cyan-400text-smtransition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-tborder-gray-700mt-8pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flexspace-x-6justify-centermt-4">
            {legal.map(item => (
              <Link
                key={item.name}
                href={item.url}
                className="text-gray-400hover:text-cyan-400transition-colorsduration-200 text-sm">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )};

export default Footer;
