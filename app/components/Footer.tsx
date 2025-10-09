import React, { memo } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, Brain, Cloud, Code, BarChart, Users, Globe } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: '24/7 AI support' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Automated sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'AI-powered analytics' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'Micro SAAS', url: '/micro-saas', description: '100+ ready-to-use apps' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce platforms' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile applications' },
    { name: 'Database Services', url: '/database', description: 'Database management' },
    { name: 'DevOps', url: '/devops', description: 'Development operations' },
    { name: 'Networking', url: '/networking', description: 'Network solutions' },
    { name: 'API Development', url: '/api', description: 'Custom API development' },
    { name: 'Business Apps', url: '/business-apps', description: 'Business applications' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'Robotics', url: '/robotics', description: 'Robotic solutions' },
    { name: 'Metaverse', url: '/metaverse', description: 'Virtual worlds' },
    { name: 'Space Technology', url: '/space-technology', description: 'Space solutions' },
    { name: 'Climate Technology', url: '/climate-technology', description: 'Environmental solutions' },
    { name: 'Neurotechnology', url: '/neurotechnology', description: 'Brain-computer interfaces' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'News', url: '/news' }
  ];

  const microSAASCategories = [
    { name: 'Developer Tools', url: '/micro-saas#developer-tools', description: 'AI-powered dev tools' },
    { name: 'Marketing Tools', url: '/micro-saas#marketing', description: 'Marketing automation' },
    { name: 'Business Intelligence', url: '/micro-saas#business-intelligence', description: 'Data analytics' },
    { name: 'Content Creation', url: '/micro-saas#content-creation', description: 'AI content tools' },
    { name: 'Customer Support', url: '/micro-saas#customer-support', description: 'Support automation' },
    { name: 'Financial Tools', url: '/micro-saas#financial', description: 'Finance automation' },
    { name: 'Healthcare', url: '/micro-saas#healthcare', description: 'Medical AI tools' },
    { name: 'Education', url: '/micro-saas#education', description: 'Learning platforms' },
    { name: 'E-commerce', url: '/micro-saas#ecommerce', description: 'Online business tools' },
    { name: 'Productivity', url: '/micro-saas#productivity', description: 'Productivity boosters' }
  ];

  const resources = [
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Guides', url: '/guides' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Support', url: '/support' },
    { name: 'Community', url: '/community' }
  ];

  const legal = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and autonomous systems. 
              Transform your business with cutting-edge technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>

            {/* Awards & Certifications */}
            <div className="mt-8">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold text-gray-200">Certifications</span>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <div>• ISO 27001 Certified</div>
                <div>• SOC 2 Type II Compliant</div>
                <div>• GDPR Compliant</div>
                <div>• AWS Advanced Partner</div>
              </div>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-cyan-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-purple-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-purple-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSAASCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={category.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-purple-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {category.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Services & Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Globe className="w-5 h-5 text-orange-400 mr-2" />
              Specialized
            </h4>
            <ul className="space-y-3 mb-8">
              {specializedServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.url}
                    className="text-gray-300 hover:text-white transition-colors group flex items-start"
                  >
                    <ArrowRight className="w-3 h-3 text-orange-400 mr-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300">
                        {service.description}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-green-400 mr-2" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Tech Trends
            </h3>
            <p className="text-gray-300 mb-6">
              Get insights on AI, emerging technologies, and industry best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Micro SAAS Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Zion Tech Group. All rights reserved. | 
              <span className="ml-2">Empowering businesses with AI innovation since 2020</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Secure & Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
