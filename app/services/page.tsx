'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  SparklesIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ShareIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  SignalIcon,
  AcademicCapIcon,
  BeakerIcon,
  LightBulbIcon,
  Cog6ToothIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  FilmIcon,
  MicrophoneIcon,
  CameraIcon,
  PresentationChartLineIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HomeIcon,
  HeartIcon,
  GlobeAmericasIcon,
  SunIcon,
  MoonIcon,
  FireIcon,
  StarIcon,
  TrophyIcon,
  GiftIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BanknotesIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  ClockIcon as ClockIconOutline,
  UserIcon,
  LockClosedIcon,
  KeyIcon,
  FingerPrintIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
  CheckBadgeIcon,
  SparklesIcon as SparklesIconOutline,
  BoltIcon as BoltIconOutline,
  FireIcon as FireIconOutline,
  StarIcon as StarIconOutline,
  HeartIcon as HeartIconOutline,
  TrophyIcon as TrophyIconOutline,
  GiftIcon as GiftIconOutline,
  ShoppingCartIcon as ShoppingCartIconOutline,
  CreditCardIcon as CreditCardIconOutline,
  BanknotesIcon as BanknotesIconOutline,
  CalculatorIcon as CalculatorIconOutline,
  ClipboardDocumentListIcon as ClipboardDocumentListIconOutline,
  CalendarDaysIcon as CalendarDaysIconOutline,
  ClockIcon as ClockIconOutline2,
  UserIcon as UserIconOutline,
  LockClosedIcon as LockClosedIconOutline,
  KeyIcon as KeyIconOutline,
  FingerPrintIcon as FingerPrintIconOutline,
  ShieldExclamationIcon as ShieldExclamationIconOutline,
  ExclamationTriangleIcon as ExclamationTriangleIconOutline,
  InformationCircleIcon as InformationCircleIconOutline,
  QuestionMarkCircleIcon as QuestionMarkCircleIconOutline,
  XCircleIcon as XCircleIconOutline,
  CheckBadgeIcon as CheckBadgeIconOutline
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning Solutions',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: CpuChipIcon,
      services: [
        { 
          name: 'AI Content Generator Pro', 
          price: '$199/month', 
          originalPrice: '$299/month',
          description: 'Advanced AI-powered content creation for blogs, social media, and marketing materials',
          features: ['Unlimited content generation', 'SEO optimization', 'Multi-language support', 'Brand voice customization', 'Plagiarism detection', 'Content scheduling'],
          icon: SparklesIcon,
          gradient: 'from-cyan-500 to-blue-500',
          href: '/ai-content-generator'
        },
        { 
          name: 'AI Analytics Dashboard Pro', 
          price: '$349/month', 
          originalPrice: '$499/month',
          description: 'Comprehensive business intelligence and analytics platform with real-time insights',
          features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'Automated alerts', 'API integrations'],
          icon: ChartBarIcon,
          gradient: 'from-purple-500 to-pink-500',
          href: '/ai-analytics-dashboard-pro'
        },
        { 
          name: 'AI Customer Support Chatbot', 
          price: '$149/month', 
          originalPrice: '$199/month',
          description: 'Intelligent conversational AI for 24/7 customer service and support',
          features: ['24/7 support', 'Multi-language support', 'Integration APIs', 'Analytics dashboard', 'Custom training', 'Escalation management'],
          icon: ChatBubbleLeftRightIcon,
          gradient: 'from-green-500 to-emerald-500',
          href: '/ai-customer-support-chatbot'
        },
        { 
          name: 'AI Project Management Pro', 
          price: '$99/month', 
          originalPrice: '$149/month',
          description: 'AI-powered project management with intelligent task prioritization and team collaboration',
          features: ['AI task prioritization', 'Team collaboration', 'Time tracking', 'Resource allocation', 'Progress monitoring', 'Risk assessment'],
          icon: CogIcon,
          gradient: 'from-orange-500 to-red-500',
          href: '/ai-project-management-pro'
        },
        { 
          name: 'AI Computer Vision Suite', 
          price: '$299/month', 
          originalPrice: '$399/month',
          description: 'Advanced image and video analysis solutions for object detection and recognition',
          features: ['Object detection', 'Image classification', 'Video analysis', 'Facial recognition', 'Quality control', 'Real-time processing'],
          icon: EyeIcon,
          gradient: 'from-indigo-500 to-purple-500',
          href: '/ai-computer-vision'
        },
        { 
          name: 'AI Automation Platform', 
          price: '$199/month', 
          originalPrice: '$299/month',
          description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
          features: ['Process automation', 'Workflow optimization', 'Decision trees', 'Exception handling', 'Integration tools', 'Performance monitoring'],
          icon: Cog6ToothIcon,
          gradient: 'from-teal-500 to-cyan-500',
          href: '/ai-automation-platform'
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      icon: GlobeAltIcon,
      services: [
        { 
          name: 'Task Manager Pro', 
          price: '$29/month', 
          originalPrice: '$49/month',
          description: 'Advanced task management with AI-powered prioritization and team collaboration features',
          features: ['AI task prioritization', 'Team collaboration', 'Time tracking', 'Deadline management', 'Progress reports', 'Mobile app'],
          icon: CheckCircleIcon,
          gradient: 'from-green-500 to-emerald-500',
          href: '/task-manager-pro'
        },
        { 
          name: 'Expense Tracker Pro', 
          price: '$19/month', 
          originalPrice: '$39/month',
          description: 'Comprehensive expense tracking and financial management for businesses and individuals',
          features: ['Receipt scanning', 'Category management', 'Budget tracking', 'Tax reporting', 'Multi-currency', 'Cloud sync'],
          icon: CurrencyDollarIcon,
          gradient: 'from-blue-500 to-indigo-500',
          href: '/expense-tracker-pro'
        },
        { 
          name: 'Social Media Scheduler', 
          price: '$39/month', 
          originalPrice: '$59/month',
          description: 'AI-powered social media management and content scheduling across all platforms',
          features: ['Multi-platform posting', 'Content calendar', 'Analytics tracking', 'Hashtag optimization', 'Auto-scheduling', 'Team collaboration'],
          icon: ShareIcon,
          gradient: 'from-pink-500 to-rose-500',
          href: '/social-media-scheduler'
        },
        { 
          name: 'Inventory Manager Pro', 
          price: '$49/month', 
          originalPrice: '$79/month',
          description: 'Complete inventory management system with real-time tracking and automated reordering',
          features: ['Real-time tracking', 'Automated reordering', 'Barcode scanning', 'Multi-location support', 'Reporting tools', 'Integration APIs'],
          icon: CircleStackIcon,
          gradient: 'from-amber-500 to-orange-500',
          href: '/inventory-manager-pro'
        },
        { 
          name: 'Email Marketing Automation', 
          price: '$79/month', 
          originalPrice: '$119/month',
          description: 'Advanced email marketing platform with AI-powered personalization and automation',
          features: ['AI personalization', 'Automated campaigns', 'A/B testing', 'Analytics dashboard', 'Template library', 'List management'],
          icon: EnvelopeIcon,
          gradient: 'from-purple-500 to-violet-500',
          href: '/email-marketing-automation'
        },
        { 
          name: 'Customer Support Hub', 
          price: '$59/month', 
          originalPrice: '$89/month',
          description: 'Comprehensive customer support platform with ticketing, knowledge base, and live chat',
          features: ['Ticket management', 'Knowledge base', 'Live chat', 'Multi-channel support', 'Analytics', 'Team collaboration'],
          icon: ChatBubbleLeftRightIcon,
          gradient: 'from-teal-500 to-green-500',
          href: '/customer-support-hub'
        }
      ]
    },
    {
      title: 'IT Solutions & Infrastructure',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CogIcon,
      services: [
        { 
          name: 'Cloud Infrastructure Management', 
          price: '$299/month', 
          originalPrice: '$449/month',
          description: 'Comprehensive cloud infrastructure management and optimization services',
          features: ['24/7 monitoring', 'Performance optimization', 'Cost management', 'Security updates', 'Backup solutions', 'Scalability planning'],
          icon: CloudIcon,
          gradient: 'from-blue-500 to-cyan-500',
          href: '/cloud-infrastructure'
        },
        { 
          name: 'Cybersecurity Suite Pro', 
          price: '$399/month', 
          originalPrice: '$599/month',
          description: 'Advanced cybersecurity solutions with 24/7 monitoring and threat detection',
          features: ['24/7 monitoring', 'Threat detection', 'Incident response', 'Security audits', 'Compliance management', 'Staff training'],
          icon: ShieldCheckIcon,
          gradient: 'from-red-500 to-pink-500',
          href: '/cybersecurity-suite-pro'
        },
        { 
          name: 'Web Development Services', 
          price: '$199/month', 
          originalPrice: '$299/month',
          description: 'Custom web development and maintenance services for modern businesses',
          features: ['Custom development', 'Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance', 'Support'],
          icon: CodeBracketIcon,
          gradient: 'from-indigo-500 to-purple-500',
          href: '/web-development'
        },
        { 
          name: 'Mobile App Development', 
          price: '$249/month', 
          originalPrice: '$399/month',
          description: 'Cross-platform mobile application development and maintenance services',
          features: ['Cross-platform development', 'Native performance', 'App store optimization', 'Push notifications', 'Analytics integration', 'Maintenance'],
          icon: DevicePhoneMobileIcon,
          gradient: 'from-green-500 to-teal-500',
          href: '/mobile-development'
        },
        { 
          name: 'Database Management', 
          price: '$149/month', 
          originalPrice: '$229/month',
          description: 'Professional database management and optimization services',
          features: ['Database optimization', 'Backup management', 'Security hardening', 'Performance tuning', 'Monitoring', 'Migration services'],
          icon: CircleStackIcon,
          gradient: 'from-yellow-500 to-orange-500',
          href: '/database-management'
        },
        { 
          name: 'Network Infrastructure', 
          price: '$179/month', 
          originalPrice: '$279/month',
          description: 'Complete network infrastructure design, implementation, and management',
          features: ['Network design', 'Implementation', 'Security configuration', 'Monitoring', 'Troubleshooting', 'Upgrades'],
          icon: SignalIcon,
          gradient: 'from-gray-500 to-slate-500',
          href: '/network-infrastructure'
        }
      ]
    },
    {
      title: '5G & IoT Solutions',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      icon: BoltIcon,
      services: [
        { 
          name: '5G Network Implementation', 
          price: '$499/month', 
          originalPrice: '$799/month',
          description: 'Complete 5G network planning, implementation, and optimization services',
          features: ['Network planning', 'Coverage optimization', 'Performance tuning', 'IoT integration', 'Security implementation', 'Monitoring'],
          icon: SignalIcon,
          gradient: 'from-indigo-500 to-purple-500',
          href: '/5g-network-implementation'
        },
        { 
          name: 'IoT Solutions Platform', 
          price: '$349/month', 
          originalPrice: '$549/month',
          description: 'Comprehensive IoT platform for device management and data analytics',
          features: ['Device management', 'Data collection', 'Real-time analytics', 'Remote monitoring', 'Alert systems', 'Integration APIs'],
          icon: CogIcon,
          gradient: 'from-cyan-500 to-blue-500',
          href: '/iot-solutions-platform'
        },
        { 
          name: 'Edge Computing Solutions', 
          price: '$299/month', 
          originalPrice: '$449/month',
          description: 'Edge computing infrastructure for ultra-low latency applications',
          features: ['Edge infrastructure', 'Data processing', 'Latency optimization', 'Scalability', 'Security', 'Monitoring'],
          icon: CpuChipIcon,
          gradient: 'from-green-500 to-emerald-500',
          href: '/edge-computing-solutions'
        },
        { 
          name: 'Smart City Solutions', 
          price: '$599/month', 
          originalPrice: '$899/month',
          description: 'Comprehensive smart city infrastructure and management solutions',
          features: ['Traffic management', 'Energy optimization', 'Public safety', 'Environmental monitoring', 'Citizen services', 'Data analytics'],
          icon: BuildingOfficeIcon,
          gradient: 'from-orange-500 to-red-500',
          href: '/smart-city-solutions'
        }
      ]
    },
    {
      title: 'Digital Transformation',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: RocketLaunchIcon,
      services: [
        { 
          name: 'Digital Strategy Consulting', 
          price: '$199/hour', 
          originalPrice: '$299/hour',
          description: 'Comprehensive digital transformation strategy and implementation consulting',
          features: ['Strategy development', 'Technology roadmap', 'Change management', 'Implementation planning', 'ROI analysis', 'Training'],
          icon: LightBulbIcon,
          gradient: 'from-green-500 to-emerald-500',
          href: '/digital-strategy-consulting'
        },
        { 
          name: 'Process Automation', 
          price: '$149/month', 
          originalPrice: '$229/month',
          description: 'Business process automation and workflow optimization services',
          features: ['Process analysis', 'Automation design', 'Workflow implementation', 'Performance monitoring', 'Optimization', 'Training'],
          icon: Cog6ToothIcon,
          gradient: 'from-blue-500 to-indigo-500',
          href: '/process-automation'
        },
        { 
          name: 'Data Analytics & BI', 
          price: '$279/month', 
          originalPrice: '$399/month',
          description: 'Advanced data analytics and business intelligence solutions',
          features: ['Data visualization', 'Predictive analytics', 'Dashboard development', 'Insight generation', 'Reporting', 'Training'],
          icon: ChartBarIcon,
          gradient: 'from-purple-500 to-pink-500',
          href: '/data-analytics-bi'
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Professional Services - Zion Tech Group"
        description="Comprehensive AI solutions, micro SaaS applications, IT services, and digital transformation solutions. Transform your business with cutting-edge technology."
        keywords="AI services, micro SaaS, IT solutions, digital transformation, cloud infrastructure, cybersecurity, 5G solutions, IoT, business automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Professional Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth. 
                From AI-powered applications to micro SaaS solutions, we provide everything you need to succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"
                  className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/pricing"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/25"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.services[0]?.gradient || 'from-purple-500 to-pink-500'} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${category.color}`}>
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    {category.title === 'AI & Machine Learning Solutions' && 'Advanced artificial intelligence and machine learning solutions to transform your business operations and drive innovation.'}
                    {category.title === 'Micro SaaS Solutions' && 'Innovative micro software-as-a-service applications designed to solve specific business challenges with real functionality and value.'}
                    {category.title === 'IT Solutions & Infrastructure' && 'Comprehensive technology services including development, infrastructure management, and ongoing support for modern businesses.'}
                    {category.title === '5G & IoT Solutions' && 'Next-generation 5G technology and Internet of Things solutions for ultra-fast connectivity and smart device management.'}
                    {category.title === 'Digital Transformation' && 'Complete digital transformation strategies and implementation services to modernize your operations and drive growth.'}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">{service.price}</div>
                          <div className="text-sm text-gray-400 line-through">{service.originalPrice}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 text-sm">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-sm text-gray-400">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Link to={service.href}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                        >
                          Learn More
                        </Link>
                        <Link to="/contact"
                          className="px-4 py-3 border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white rounded-lg font-semibold transition-all duration-300"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let's discuss how our solutions can accelerate your digital transformation and drive growth. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link to="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/25"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
