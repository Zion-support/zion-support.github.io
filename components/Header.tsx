import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Cpu as CpuIcon, 
  Globe,
  Mail,
  MapPin,
  Zap,
  Shield,
  Users,
  FileText,
  HelpCircle,
  DollarSign,
  Settings,
  Network,
  Rocket,
  BarChart3,
  MessageSquare,
  Youtube,
  Building2,
  Target,
  Heart,
  ShoppingCart,
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
  Lock,
  Database
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      {
        name: 'AI Services',
        href: '/ai-services',
        icon: Brain,
        description: 'Advanced AI solutions and machine learning platforms',
        children: [
          { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
          { name: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
          { name: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
          { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
          { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
          { name: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' },
          { name: 'AI Fraud Detection', href: '/ai-services#ai-fraud-detection' },
          { name: 'AI Drug Discovery', href: '/ai-services#ai-drug-discovery' }
        ]
      },
      {
        name: 'IT Services',
        href: '/it-services',
        icon: CpuIcon,
        description: 'Comprehensive IT infrastructure and support',
        children: [
          { name: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
          { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
          { name: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
          { name: 'Database Management', href: '/it-services#database-management' },
          { name: 'DevOps & CI/CD', href: '/it-services#devops-cicd' },
          { name: 'Data Center Migration', href: '/it-services#data-center-migration' },
          { name: 'IT Asset Management', href: '/it-services#it-asset-management' },
          { name: 'Backup & Disaster Recovery', href: '/it-services#backup-disaster-recovery' }
        ]
      },
      {
        name: 'Micro SaaS',
        href: '/micro-saas',
        icon: Cloud,
        description: 'Innovative micro software-as-a-service solutions',
        children: [
          { name: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
          { name: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
          { name: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
          { name: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
          { name: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
          { name: 'Workflow Automation', href: '/micro-saas#workflow-automation' },
          { name: 'AI Lead Scoring', href: '/micro-saas#ai-lead-scoring' },
          { name: 'Social Media Scheduler', href: '/micro-saas#social-media-scheduler' }
        ]
      },
      {
        name: 'Cloud & DevOps',
        href: '/services/cloud-devops',
        icon: Cloud,
        description: 'Cloud infrastructure and DevOps automation'
      },
      {
        name: 'Cybersecurity',
        href: '/services/cybersecurity',
        icon: Shield,
        description: 'Advanced security solutions and compliance'
      },
      {
        name: 'Data Analytics',
        href: '/services/data-analytics',
        icon: BarChart3,
        description: 'Business intelligence and data insights'
      },
      {
        name: 'Quantum Computing',
        href: '/services/quantum-computing',
        icon: CpuIcon,
        description: 'Next-generation quantum computing solutions'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Target,
    children: [
      {
        name: 'Enterprise',
        href: '/solutions/enterprise',
        icon: Building2,
        description: 'Enterprise-grade solutions for large organizations'
      },
      {
        name: 'Healthcare',
        href: '/solutions/healthcare',
        icon: Heart,
        description: 'Healthcare technology and compliance solutions'
      },
      {
        name: 'Finance',
        href: '/solutions/finance',
        icon: DollarSign,
        description: 'Financial services and fintech solutions'
      },
      {
        name: 'Retail',
        href: '/solutions/retail',
        icon: ShoppingCart,
        description: 'E-commerce and retail technology solutions'
      },
      {
        name: 'Education',
        href: '/solutions/education',
        icon: GraduationCap,
        description: 'Educational technology and learning platforms'
      },
      {
        name: 'Government',
        href: '/solutions/government',
        icon: Shield,
        description: 'Government and public sector solutions'
      },
      {
        name: 'Startup',
        href: '/solutions/startup',
        icon: Rocket,
        description: 'Startup acceleration and growth solutions'
      }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: Building2,
    children: [
      {
        name: 'Healthcare',
        href: '/industries/healthcare',
        icon: Heart,
        description: 'Healthcare and life sciences'
      },
      {
        name: 'Finance',
        href: '/industries/finance',
        icon: DollarSign,
        description: 'Financial services and banking'
      },
      {
        name: 'Education',
        href: '/industries/education',
        icon: GraduationCap,
        description: 'Educational institutions and training'
      },
      {
        name: 'Government',
        href: '/industries/government',
        icon: Shield,
        description: 'Government and public sector'
      },
      {
        name: 'Manufacturing',
        href: '/industries/manufacturing',
        icon: CpuIcon,
        description: 'Manufacturing and industrial'
      },
      {
        name: 'Retail',
        href: '/industries/retail',
        icon: ShoppingCart,
        description: 'Retail and e-commerce'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      {
        name: 'Blog',
        href: '/blog',
        icon: BookOpen,
        description: 'Latest insights and industry news'
      },
      {
        name: 'White Papers',
        href: '/white-papers',
        icon: FileText,
        description: 'In-depth research and analysis'
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        icon: Award,
        description: 'Success stories and client results'
      },
      {
        name: 'Webinars',
        href: '/webinars',
        icon: Calendar,
        description: 'Educational webinars and training'
      },
      {
        name: 'Help Center',
        href: '/help',
        icon: HelpCircle,
        description: 'Support and documentation'
      },
      {
        name: 'Documentation',
        href: '/docs',
        icon: BookOpen,
        description: 'Technical documentation and guides'
      },
      {
        name: 'API Reference',
        href: '/api-docs',
        icon: Network,
        description: 'API documentation and integration guides'
      },
      {
        name: 'Tutorials',
        href: '/tutorials',
        icon: GraduationCap,
        description: 'Step-by-step tutorials and guides'
      }
    ]
  },
  {
    name: 'Company',
    href: '/company',
    icon: Users,
    children: [
      {
        name: 'About Us',
        href: '/about',
        icon: Users,
        description: 'Learn about our mission and values'
      },
      {
        name: 'Our Team',
        href: '/team',
        icon: Users,
        description: 'Meet our expert team'
      },
      {
        name: 'Careers',
        href: '/careers',
        icon: Award,
        description: 'Join our growing team'
      },
      {
        name: 'News',
        href: '/news',
        icon: MessageSquare,
        description: 'Company news and announcements'
      },
      {
        name: 'Contact',
        href: '/contact',
        icon: Mail,
        description: 'Get in touch with us'
      },
      {
        name: 'Partners',
        href: '/partners',
        icon: Users,
        description: 'Our partner network'
      }
    ]
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

export default function Header() {}
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-100">24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>

              {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
                          {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {item.children?.map((child) => (
                            <div key={child.name} className="p-3 hover:bg-gray-50 rounded-lg">
                              <Link
                                href={child.href}
                                onClick={handleLinkClick}
                                className="flex items-start space-x-3 group"
                              >
                                <child.icon className="w-5 h-5 text-blue-600 mt-0.5 group-hover:text-blue-700" />
                                <div>
                                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                                                          {child.name}
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1">
                                      {child.description}
                                    </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                {navigation.map((item) => (
                  <div key={item.name} className="mb-4">
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 py-2 font-medium"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-6 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={handleLinkClick}
                            className="block text-sm text-gray-600 hover:text-blue-600 py-1"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    onClick={handleLinkClick}
                    className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};