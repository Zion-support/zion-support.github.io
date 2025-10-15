import React, { useState } from 'react';
import { Menu, X, ChevronDown, Brain, Cloud, Shield, Zap, Globe, Smartphone, Database, Lock, BarChart3, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);

  const microSaasServices = [
    { name: "AI Content Generator", href: "/ai-content-generator", icon: Brain },
    { name: "Analytics Dashboard", href: "/ai-analytics-dashboard", icon: BarChart3 },
    { name: "Customer Support Bot", href: "/ai-customer-support-bot", icon: Users },
    { name: "Automated Testing", href: "/ai-automated-testing", icon: CheckCircle },
    { name: "Smart Invoice Manager", href: "/ai-smart-invoice", icon: Smartphone },
    { name: "AI Project Manager", href: "/ai-project-manager", icon: Globe },
    { name: "View All Micro SAAS", href: "/micro-saas-solutions", icon: ArrowRight }
  ];

  const aiServices = [
    { name: "Machine Learning Platform", href: "/ai-ml-platform", icon: Brain },
    { name: "Computer Vision", href: "/ai-computer-vision", icon: Globe },
    { name: "Natural Language Processing", href: "/ai-nlp", icon: Database },
    { name: "Predictive Analytics", href: "/ai-predictive-analytics", icon: BarChart3 },
    { name: "AI Automation Suite", href: "/ai-automation-suite", icon: Zap },
    { name: "View All AI Services", href: "/ai-solutions", icon: ArrowRight }
  ];

  const itServices = [
    { name: "Cloud Infrastructure", href: "/cloud-infrastructure", icon: Cloud },
    { name: "Cybersecurity Solutions", href: "/cybersecurity", icon: Shield },
    { name: "Digital Transformation", href: "/digital-transformation", icon: Zap },
    { name: "5G Network Solutions", href: "/5g-solutions", icon: Globe },
    { name: "IT Consulting", href: "/it-services", icon: Database },
    { name: "View All IT Services", href: "/it-solutions", icon: ArrowRight }
  ];

  return (
    <nav className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSidebarToggle}
              className="lg:hidden text-gray-400 hover:text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-cyan-400 transition-colors">About</a>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-700 rounded-lg shadow-xl border border-slate-600"
                >
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Micro SAAS Column */}
                      <div>
                        <h3 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                          <Smartphone className="w-4 h-4 mr-2" />
                          Micro SAAS
                        </h3>
                        <ul className="space-y-2">
                          {microSaasServices.slice(0, 4).map((service, index) => (
                            <li key={index}>
                              <a
                                href={service.href}
                                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                <service.icon className="w-3 h-3 mr-2" />
                                {service.name}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a
                              href="/micro-saas-solutions"
                              className="flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                            >
                              View All <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* AI Services Column */}
                      <div>
                        <h3 className="text-sm font-semibold text-purple-400 mb-3 flex items-center">
                          <Brain className="w-4 h-4 mr-2" />
                          AI Services
                        </h3>
                        <ul className="space-y-2">
                          {aiServices.slice(0, 4).map((service, index) => (
                            <li key={index}>
                              <a
                                href={service.href}
                                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                <service.icon className="w-3 h-3 mr-2" />
                                {service.name}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a
                              href="/ai-solutions"
                              className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                            >
                              View All <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          </li>
                        </ul>
                      </div>

                      {/* IT Services Column */}
                      <div>
                        <h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center">
                          <Cloud className="w-4 h-4 mr-2" />
                          IT Services
                        </h3>
                        <ul className="space-y-2">
                          {itServices.slice(0, 4).map((service, index) => (
                            <li key={index}>
                              <a
                                href={service.href}
                                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                              >
                                <service.icon className="w-3 h-3 mr-2" />
                                {service.name}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a
                              href="/it-solutions"
                              className="flex items-center text-sm text-green-400 hover:text-green-300 transition-colors font-semibold"
                            >
                              View All <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a>
            <a href="/blog" className="hover:text-cyan-400 transition-colors">Blog</a>
            <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/demo"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Demo
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;