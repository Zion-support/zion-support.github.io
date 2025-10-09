import React from 'react';

import { Phone, Mail, MapPin, Brain, Cloud, Code, Zap, ArrowRight, Database, Bot } from 'lucide-react';

  const microSaasServices = [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Data insights & analytics' },
    { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Smart email campaigns' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Music Composition Suite', url: '/ai-music-composition', description: 'AI-generated music' },
    { name: 'AI Fashion Design Studio', url: '/ai-fashion-design', description: 'AI fashion design' },
    { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness plans' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: 'AI 3D content creation' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation' },
    { name: 'AI Sales Automation Hub', url: '/ai-sales-automation', description: 'Sales optimization' },
    { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards' },
    { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI content generation' },
    { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Advanced fraud prevention' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', url: '/machine-learning', description: 'Custom ML models' },
    { name: 'AI Business Intelligence', url: '/ai-business-intelligence', description: 'Strategic insights' },
    { name: 'AI Supply Chain Optimization', url: '/ai-supply-chain', description: 'Logistics optimization' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data analytics' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI CRM', url: '/ai-crm', description: 'Customer relationship management' },
    { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Advanced fraud prevention' },
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' }
  ];

  const itServices = [
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance' },
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT solutions' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'AWS/Azure/GCP setup' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Specialized Services', url: '/specialized-services', description: 'Advanced solutions' },
    { name: 'Machine Learning', url: '/machine-learning', description: 'ML implementation' },
    { name: 'NLP Solutions', url: '/nlp', description: 'Natural language processing' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Data analytics' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Security solutions' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
    { name: 'AI Business Intelligence', url: '/ai-business-intelligence', description: 'AI-powered insights' },
    { name: 'AI Supply Chain', url: '/ai-supply-chain', description: 'Supply chain optimization' },
    { name: 'Machine Learning', url: '/machine-learning', description: 'ML solutions' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image analysis' },
    { name: 'NLP Solutions', url: '/nlp', description: 'Natural language processing' },
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced analytics' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Security solutions' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Process automation' }
  ];

  const additionalServices = [
    { name: 'AI Real Estate Analyzer', url: '/ai-real-estate-analyzer', description: 'Property analysis' },
    { name: 'AI Healthcare Assistant', url: '/ai-healthcare-assistant', description: 'Medical AI support' },
    { name: 'AI Supply Chain Optimizer', url: '/ai-supply-chain-optimizer', description: 'Logistics optimization' },
    { name: 'AI Energy Management', url: '/ai-energy-management', description: 'Energy optimization' },
    { name: 'AI Manufacturing Intelligence', url: '/ai-manufacturing-intelligence', description: 'Production optimization' },
    { name: 'AI Insurance Analytics', url: '/ai-insurance-analytics', description: 'Risk assessment' },
    { name: 'AI Transportation Optimizer', url: '/ai-transportation-optimizer', description: 'Fleet management' },
    { name: 'AI Agriculture Intelligence', url: '/ai-agriculture-intelligence', description: 'Smart farming' },
    { name: 'AI Retail Intelligence', url: '/ai-retail-intelligence', description: 'Retail optimization' },
    { name: 'AI Gaming Assistant', url: '/ai-gaming-assistant', description: 'Gaming AI' },
    { name: 'AI Event Management', url: '/ai-event-management', description: 'Event planning' },
    { name: 'AI Travel Optimizer', url: '/ai-travel-optimizer', description: 'Travel planning' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' },
    { name: 'Support', url: '/support' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const supportLinks = [
    { name: 'Contact Us', url: '/contact' },
    { name: 'Support Center', url: '/support' },
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Services', url: '/services' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' },
    { name: 'Support', url: '/support' },
    { name: 'Services', url: '/services' }
  ];

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
              Transform your business with cutting-edge technology and achieve unprecedented growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Micro SAAS
            </h3>
            <ul className="space-y-2">
              {microSaasServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <a href={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All Micro SAAS →
            </a>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              AI & IT Services
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-medium mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a href={service.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="/services"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All Services →
            </a>
          </div>

          {/* Additional AI Services */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              AI Tools
            </h3>
            <ul className="space-y-2">
              {additionalServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.url}
                    className="group flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span>{service.name}</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="/ai-tools"
              className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-4"
            >
              View All AI Tools →
            </a>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Company</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-medium mb-2">Company</h4>
                <ul className="space-y-1">
                  {companyLinks.slice(0, 6).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-medium mb-2">Support</h4>
                <ul className="space-y-1">
                  {supportLinks.slice(0, 6).map((link) => (
                    <li key={link.name}>
                      <a href={link.url}
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved. | Transforming businesses with AI-powered solutions.
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {legalLinks.slice(0, 8).map((link) => (
                <a key={link.name}
                  href={link.url}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;