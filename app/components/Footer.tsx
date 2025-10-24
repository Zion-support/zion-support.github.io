import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud, Shield, Globe, Database, Smartphone, Zap, Sparkles, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
    { name: 'AI Content Generator', href: '/ai-content-generator' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
    { name: 'AI Image Generator', href: '/ai-image-generator' },
    { name: 'AI Code Assistant', href: '/ai-code-assistant' },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence' }
  ];

  const techServices = [
    { name: 'Blockchain Solutions', href: '/blockchain' },
    { name: 'Cloud Migration', href: '/cloud-migration-pro' },
    { name: 'Cybersecurity', href: '/security' },
    { name: '5G Implementation', href: '/5g-implementation' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'IoT Solutions', href: '/zion-iot-solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white"></footer>
      <div className="max-w-7xl mx-auto px-4 py-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
          {/* Company Info */}
          <div className="space-y-6"></div>
            <div className="flex items-center space-x-2"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center"></div>
                <Brain className="w-5 h-5 text-white"   /></Brain>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 leading-relaxed"></p>
              Leading the future of technology with innovative AI, blockchain, and cloud solutions that transform businesses worldwide.
            </p>
            <div className="flex space-x-4"></div>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                <Github className="w-5 h-5"   /></Github>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                <Linkedin className="w-5 h-5"   /></Linkedin>
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"></a>
                <Twitter className="w-5 h-5"   /></Twitter>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-6"></div>
            <h3 className="text-lg font-semibold text-white">AI Services</h3>
            <ul className="space-y-3"></ul>
              {aiServices.map((service, index) => (
                <li key={index}></li>
                  <Link href={service.href} className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"></Link>
                    <ArrowRight className="w-4 h-4 mr-2"   /></ArrowRight>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Services */}
          <div className="space-y-6"></div>
            <h3 className="text-lg font-semibold text-white">Tech Services</h3>
            <ul className="space-y-3"></ul>
              {techServices.map((service, index) => (
                <li key={index}></li>
                  <Link href={service.href} className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"></Link>
                    <ArrowRight className="w-4 h-4 mr-2"   /></ArrowRight>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6"></div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3"></ul>
              {companyLinks.map((link, index) => (
                <li key={index}></li>
                  <Link href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"></Link>
                    <ArrowRight className="w-4 h-4 mr-2"   /></ArrowRight>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"></div>
            <div className="text-gray-400 text-sm"></div>
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm"></div>
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors"></Link>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors"></Link>
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors"></Link>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;