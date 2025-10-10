'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Brain,
  Cloud,
  Code,
  Zap,
  Sparkles,
  Home,
  Users,
  FileText,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  BarChart,
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  MessageSquare,
  Star,
  TrendingUp,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;,
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps>= ({ isOpen, onClose }) =></SidebarProps> </SidebarProps>{</SidebarProps>
  const location = useLocation(<//SidebarProps>)<//SidebarProps>;</SidebarProps>
  const [expandedSections, setExpandedSections] = useStat<//SidebarProps>e<//SidebarProps><string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>)
    prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Customer Support', path: '/ai-customer-support' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Content Generation', path: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare' },
        { name: 'AI Fintech Platform', path: '/ai-fintech' },
        { name: 'AI Computer Vision', path: '/ai-computer-vision' },
        { name: 'AI Machine Learning', path: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Migration', path: '/cloud-migration' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'IT Infrastructure', path: '/it-infrastructure' },
        { name: 'IT Support', path: '/it-support' },
        { name: 'Custom Development', path: '/custom-development' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd' },
        { name: 'Database Management', path: '/database-management' },
        { name: 'Network Design', path: '/network-design' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing' },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', path: '/ai-content-studio' },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      color: 'text-pink-400',
      services: [
        { name: 'Quantum Computing', path: '/ai-quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions' },
        { name: 'Smart Cities', path: '/smart-cities' },
        { name: 'Digital Transformation', path: '/digital-transformation' },
        { name: 'Innovation Labs', path: '/innovation-labs' }
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  const supportLinks = [
    { name: 'Support Center', path: '/support', icon: HelpCircle },
    { name: 'Documentation', path: '/docs', icon: FileText },
    { name: 'API Reference', path: '/api-docs', icon: Code },
    { name: 'Status Page', path: '/status', icon: CheckCircle },
    { name: 'Demo Request', path: '/demo', icon: Star },
    { name: 'Free Consultation', path: '/consultation', icon: MessageSquare }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy', icon: Shield },
    { name: 'Terms of Service', path: '/terms', icon: FileText },
    { name: 'Cookie Policy', path: '/cookies', icon: Settings }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null</string[]>;</string[]>
</string>
  return<//string> <//string>(</string>
   <//string> <//string><>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      >{/* Sidebar </div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      >*</div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      >/</div>}</div>
     <//div> <//div><div className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
       </div className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden"> </div className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-50 transform transition-transform duration-300 ease-in-out lg:hidden"><div className="flex flex-col h-full">{/* Header </div className="flex flex-col h-full">*</div className="flex flex-col h-full">/</div>}</div>
         <//div> <//div><div className="flex items-center justify-between p-6 border-b border-gray-700">
           </div className="flex items-center justify-between p-6 border-b border-gray-700"> </div className="flex items-center justify-between p-6 border-b border-gray-700"><div className="flex items-center space-x-2">
             </div className="flex items-center space-x-2"> </div className="flex items-center space-x-2"><div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              </div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"> </div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center"> </div><Zap className="w-5 h-5 text-white" />
             </Zap className="w-5 h-5 text-white" /> </Zap className="w-5 h-5 text-white" /><span className="text-white font-bold text-lg">Zion Tech Gr</span className="text-white font-bold text-lg">o</span className="text-white font-bold text-lg">u</span>p</span>
          <//span> <//span> </div>
           <//div> <//div><button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
             </button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            > </button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            ><X className="w-6 h-6" />
          </X className="w-6 h-6" /> </X className="w-6 h-6" /> </button>
        <//button> <//button> </div>

          {/* Navigation Content */}
         <//div> <//div><div className="flex-1 overflow-y-auto p-6 space-y-6">{/* Main Navigation </div className="flex-1 overflow-y-auto p-6 space-y-6">*</div className="flex-1 overflow-y-auto p-6 space-y-6">/</div>}</div>
           <//div> <//div><div>
            </div> </div> </div><h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Main Navigatio</h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">n</h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"><nav className="space-y-1">{mainLinks.map((link, index) =></nav className="space-y-1"> </nav className="space-y-1">(</nav>
                 <//nav> <//nav><Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  >
                   </Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  > </Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  ><link.icon className="w-5 h-5" />
                   </link.icon className="w-5 h-5" /> </link.icon className="w-5 h-5" /><span>{link.na</span>m</span>e</span>}</span>
                <//span> <//span> </Link>
                ))}
            <//Link> <//Link> </nav>
          <//nav> <//nav> </div>

            {/* Services */}
           <//div> <//div><div>
            </div> </div> </div><h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Our Service</h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">s</h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"><div className="space-y-2">{serviceCategories.map((category, categoryIndex) =</div className="space-y-2">></div className="space-y-2"> </div>(</div>
                 <//div> <//div><div key={categoryIndex}>
                  </div key={categoryIndex}> </div key={categoryIndex}> </div><button
                      onClick={() =>toggleSection(category.title)}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:bg-gray-700/50 hover:text-white rounded-lg transition-color</button
                      onClick={() =>s</button
                      onClick={() =>"</button>
                   <//button> <//button>></button>
                     <//button> <//button><div className="flex items-center space-x-3">
                      </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"> </div><category.icon className={`w-5 h-5 ${category.color}`} />
                       </category.icon className={`w-5 h-5 ${category.color}`} /> </category.icon className={`w-5 h-5 ${category.color}`} /><span>{category.tit</span>l</span>e</span>}</span>
                    <//span> <//span> </div>
                      {expandedSections.includes(category.title) ? (
                       <//div> <//div><ChevronDown className="w-4 h-4" >) : </ChevronDown className="w-4 h-4" >(</ChevronDown className="w-4 h-4" ><ChevronRight className="w-4 h-4" >)</ChevronRight className="w-4 h-4" >}</ChevronRight>
                  <//ChevronRight> <//ChevronRight> </ChevronRight>

                    {expandedSections.includes(category.title) && (
                     <//ChevronRight> <//ChevronRight><div className="ml-8 space-y-1 mt-2">{category.services.map((service, serviceIndex) =></div className="ml-8 space-y-1 mt-2"> </div className="ml-8 space-y-1 mt-2">(</div><Link
                            key={serviceIndex}
                            to={service.path}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              location.pathname === service.path
                                ? 'bg-cyan-500/20 text-cyan-400'
                                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                            }`}
                            onClick={onClose}
                          >{service.nam</Link
                            key={serviceIndex}
                            to={service.path}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              location.pathname === service.path
                                ? 'bg-cyan-500/20 text-cyan-400'
                                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                            }`}
                            onClick={onClose}
                          >e</Link
                            key={serviceIndex}
                            to={service.path}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              location.pathname === service.path
                                ? 'bg-cyan-500/20 text-cyan-400'
                                : 'text-gray-400 hover:bg-gray-700/50 hover:text-white'
                            }`}
                            onClick={onClose}
                          >}</Link>
                        <//Link> <//Link> </Link>
                        ))}
                    <//Link> <//Link> </div>
                    )}
                <//div> <//div> </div>
                ))}
            <//div> <//div> </div>
          <//div> <//div> </div>

            {/* Support */}
           <//div> <//div><div>
            </div> </div> </div><h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Suppor</h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">t</h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"><nav className="space-y-1">{supportLinks.map((link, index) =></nav className="space-y-1"> </nav className="space-y-1">(</nav>
                 <//nav> <//nav><Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  >
                   </Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  > </Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  ><link.icon className="w-5 h-5" />
                   </link.icon className="w-5 h-5" /> </link.icon className="w-5 h-5" /><span>{link.na</span>m</span>e</span>}</span>
                <//span> <//span> </Link>
                ))}
            <//Link> <//Link> </nav>
          <//nav> <//nav> </div>

            {/* Legal */}
           <//div> <//div><div>
            </div> </div> </div><h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Lega</h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">l</h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3"><nav className="space-y-1">{legalLinks.map((link, index) =></nav className="space-y-1"> </nav className="space-y-1">(</nav>
                 <//nav> <//nav><Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  >
                   </Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  > </Link
                    key={index}
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                    onClick={onClose}
                  ><link.icon className="w-5 h-5" />
                   </link.icon className="w-5 h-5" /> </link.icon className="w-5 h-5" /><span>{link.na</span>m</span>e</span>}</span>
                <//span> <//span> </Link>
                ))}
            <//Link> <//Link> </nav>
          <//nav> <//nav> </div>
        <//div> <//div> </div>

          {/* Footer */}
         <//div> <//div><div className="p-6 border-t border-gray-700">
           </div className="p-6 border-t border-gray-700"> </div className="p-6 border-t border-gray-700"><div className="space-y-4">{/* Contact Info </div className="space-y-4">*</div className="space-y-4">/</div>}</div>
             <//div> <//div><div className="space-y-2">
               </div className="space-y-2"> </div className="space-y-2"><div className="flex items-center space-x-2 text-gray-400 text-sm">
                </div className="flex items-center space-x-2 text-gray-400 text-sm"> </div className="flex items-center space-x-2 text-gray-400 text-sm"> </div><Phone className="w-4 h-4" />
                 </Phone className="w-4 h-4" /> </Phone className="w-4 h-4" /><span>+1 (302) 464-0</span>9</span>5</span>0</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-2 text-gray-400 text-sm">
                </div className="flex items-center space-x-2 text-gray-400 text-sm"> </div className="flex items-center space-x-2 text-gray-400 text-sm"> </div><Mail className="w-4 h-4" />
                 </Mail className="w-4 h-4" /> </Mail className="w-4 h-4" /><span>kleber@ziontechgroup.</span>c</span>o</span>m</span>
              <//span> <//span> </div>
            <//div> <//div> </div>

              {/* Social Links */}
             <//div> <//div><div className="flex space-x-4">
              </div className="flex space-x-4"> </div className="flex space-x-4"> </div><a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">
                 </a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors"> </a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors"><Linkedin className="w-5 h-5" />
              </Linkedin className="w-5 h-5" /> </Linkedin className="w-5 h-5" /> </a>
               <//a> <//a><a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                 </a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors"> </a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" />
              </Twitter className="w-5 h-5" /> </Twitter className="w-5 h-5" /> </a>
               <//a> <//a><a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors">
                 </a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors"> </a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors"><Github className="w-5 h-5" />
              </Github className="w-5 h-5" /> </Github className="w-5 h-5" /> </a>
            <//a> <//a> </div>

              {/* CTA Button */}
             <//div> <//div><Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                onClick={onClose}
              >Get Started Tod</Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                onClick={onClose}
              >a</Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                onClick={onClose}
              >y</Link>
            <//Link> <//Link> </Link>
          <//Link> <//Link> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
   <//div> <//div></>
  );
};

export default Sidebar<//>;<//>