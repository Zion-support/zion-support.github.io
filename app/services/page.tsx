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
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  CircleStackIcon,
  SignalIcon,
  EyeIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ShareIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  UserPlusIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI & Machine Learning Services',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: CpuChipIcon,
      services: [
        { 
          name: 'AI Consulting & Strategy', 
          price: '$2,500/month', 
          description: 'Comprehensive AI strategy development and implementation planning for enterprise transformation',
          features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Team Training'],
          marketPrice: '$4,000/month',
          savings: '37%',
          link: '/ai-consulting'
        },
        { 
          name: 'Machine Learning Solutions', 
          price: '$1,500/month', 
          description: 'Custom ML models for predictive analytics, recommendation systems, and automated decision-making',
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing'],
          marketPrice: '$2,500/month',
          savings: '40%',
          link: '/ml-solutions'
        },
        { 
          name: 'Natural Language Processing', 
          price: '$1,200/month', 
          description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding',
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Document Processing'],
          marketPrice: '$2,000/month',
          savings: '40%',
          link: '/nlp-solutions'
        },
        { 
          name: 'Computer Vision', 
          price: '$1,800/month', 
          description: 'Image and video analysis solutions for object detection, recognition, and automated visual inspection',
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Quality Control'],
          marketPrice: '$3,000/month',
          savings: '40%',
          link: '/computer-vision'
        },
        { 
          name: 'AI Automation Platform', 
          price: '$1,400/month', 
          description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'Integration APIs'],
          marketPrice: '$2,200/month',
          savings: '36%',
          link: '/ai-automation'
        },
        { 
          name: 'AI Chatbots & Virtual Assistants', 
          price: '$800/month', 
          description: 'Intelligent conversational AI for customer service, support, and business automation',
          features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Voice Interface'],
          marketPrice: '$1,500/month',
          savings: '47%',
          link: '/ai-chatbots'
        }
      ]
    },
    {
      title: 'Cybersecurity Services',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheckIcon,
      services: [
        { 
          name: 'Security Assessment & Penetration Testing', 
          price: '$1,200/month', 
          description: 'Comprehensive security evaluation, vulnerability assessment, and penetration testing services',
          features: ['Penetration Testing', 'Security Audit', 'Risk Assessment', 'Compliance Check', 'Vulnerability Scanning'],
          marketPrice: '$2,000/month',
          savings: '40%',
          link: '/security-assessment'
        },
        { 
          name: 'Managed Security Services', 
          price: '$2,000/month', 
          description: '24/7 security monitoring, incident response, and threat detection services',
          features: ['24/7 Monitoring', 'Incident Response', 'Threat Detection', 'Security Updates', 'SOC Services'],
          marketPrice: '$3,500/month',
          savings: '43%',
          link: '/managed-security'
        },
        { 
          name: 'Identity & Access Management', 
          price: '$1,500/month', 
          description: 'Secure user authentication, authorization systems, and identity management solutions',
          features: ['Single Sign-On', 'Multi-Factor Auth', 'User Provisioning', 'Access Control', 'Identity Federation'],
          marketPrice: '$2,500/month',
          savings: '40%',
          link: '/iam-solutions'
        },
        { 
          name: 'Data Protection & Encryption', 
          price: '$1,800/month', 
          description: 'Comprehensive data encryption, backup solutions, and privacy compliance services',
          features: ['Data Encryption', 'Backup Solutions', 'Data Recovery', 'Privacy Compliance', 'Key Management'],
          marketPrice: '$3,000/month',
          savings: '40%',
          link: '/data-protection'
        }
      ]
    },
    {
      title: 'Cloud Infrastructure Services',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: CloudIcon,
      services: [
        { 
          name: 'Cloud Migration Services', 
          price: '$3,000/month', 
          description: 'Seamless migration to cloud platforms with minimal downtime and optimized performance',
          features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Performance Optimization', 'Cost Optimization'],
          marketPrice: '$5,000/month',
          savings: '40%',
          link: '/cloud-migration'
        },
        { 
          name: 'Cloud Architecture Design', 
          price: '$2,500/month', 
          description: 'Scalable and secure cloud infrastructure design for enterprise applications',
          features: ['Architecture Design', 'Scalability Planning', 'Security Implementation', 'Cost Optimization', 'Disaster Recovery'],
          marketPrice: '$4,000/month',
          savings: '38%',
          link: '/cloud-architecture'
        },
        { 
          name: 'DevOps & CI/CD', 
          price: '$2,000/month', 
          description: 'Automated deployment pipelines, continuous integration, and DevOps best practices',
          features: ['CI/CD Setup', 'Automated Testing', 'Deployment Automation', 'Monitoring Setup', 'Infrastructure as Code'],
          marketPrice: '$3,500/month',
          savings: '43%',
          link: '/devops-services'
        },
        { 
          name: 'Cloud Management & Optimization', 
          price: '$1,500/month', 
          description: 'Ongoing cloud infrastructure management, monitoring, and cost optimization',
          features: ['24/7 Monitoring', 'Performance Tuning', 'Cost Management', 'Security Updates', 'Auto-scaling'],
          marketPrice: '$2,500/month',
          savings: '40%',
          link: '/cloud-management'
        }
      ]
    },
    {
      title: 'Digital Transformation Services',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: ChartBarIcon,
      services: [
        { 
          name: 'Digital Strategy Consulting', 
          price: '$2,500/month', 
          description: 'Comprehensive digital transformation strategy and technology roadmap development',
          features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Implementation Planning', 'ROI Analysis'],
          marketPrice: '$4,000/month',
          savings: '38%',
          link: '/digital-strategy'
        },
        { 
          name: 'Process Automation', 
          price: '$1,800/month', 
          description: 'Business process automation and workflow optimization using AI and RPA technologies',
          features: ['Process Analysis', 'Automation Design', 'Workflow Implementation', 'Performance Monitoring', 'Integration'],
          marketPrice: '$3,000/month',
          savings: '40%',
          link: '/process-automation'
        },
        { 
          name: 'Data Analytics & Business Intelligence', 
          price: '$2,200/month', 
          description: 'Advanced analytics, data visualization, and business intelligence solutions',
          features: ['Data Visualization', 'Predictive Analytics', 'Dashboard Development', 'Insight Generation', 'Data Warehousing'],
          marketPrice: '$3,500/month',
          savings: '37%',
          link: '/data-analytics'
        },
        { 
          name: 'Mobile & Web Solutions', 
          price: '$1,600/month', 
          description: 'Custom mobile applications, responsive web solutions, and cross-platform development',
          features: ['Mobile App Development', 'Responsive Design', 'Cross-Platform Solutions', 'Performance Optimization', 'UI/UX Design'],
          marketPrice: '$2,800/month',
          savings: '43%',
          link: '/mobile-web-solutions'
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      icon: GlobeAltIcon,
      services: [
        { 
          name: 'AI Content Generator Pro', 
          price: '$199/month', 
          description: 'Advanced AI-powered content generation for blogs, social media, and marketing materials',
          features: ['Unlimited Content Generation', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Training', 'Content Templates'],
          marketPrice: '$299/month',
          savings: '33%',
          link: '/ai-content-generator'
        },
        { 
          name: 'Business Analytics Dashboard', 
          price: '$349/month', 
          description: 'Comprehensive business intelligence platform with real-time insights and reporting',
          features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Integration', 'Mobile Access'],
          marketPrice: '$499/month',
          savings: '30%',
          link: '/analytics-dashboard'
        },
        { 
          name: 'Task Manager Pro', 
          price: '$29/month', 
          description: 'Advanced task management with AI-powered prioritization and team collaboration',
          features: ['AI Task Prioritization', 'Team Collaboration', 'Time Tracking', 'Project Management', 'Integration APIs'],
          marketPrice: '$49/month',
          savings: '41%',
          link: '/task-manager'
        },
        { 
          name: 'Customer Support Hub', 
          price: '$149/month', 
          description: 'All-in-one customer support platform with AI chatbots and ticketing system',
          features: ['AI Chatbots', 'Ticket Management', 'Knowledge Base', 'Live Chat', 'Analytics Dashboard'],
          marketPrice: '$249/month',
          savings: '40%',
          link: '/customer-support-hub'
        },
        { 
          name: 'Social Media Manager', 
          price: '$99/month', 
          description: 'AI-powered social media management with automated posting and analytics',
          features: ['Auto Posting', 'Content Scheduling', 'Analytics Tracking', 'Hashtag Optimization', 'Multi-platform Support'],
          marketPrice: '$149/month',
          savings: '34%',
          link: '/social-media-manager'
        },
        { 
          name: 'Expense Tracker Pro', 
          price: '$19/month', 
          description: 'Smart expense tracking with receipt scanning and automated categorization',
          features: ['Receipt Scanning', 'Auto Categorization', 'Expense Reports', 'Tax Preparation', 'Mobile App'],
          marketPrice: '$39/month',
          savings: '51%',
          link: '/expense-tracker'
        }
      ]
    },
    {
      title: '5G & IoT Solutions',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      icon: SignalIcon,
      services: [
        { 
          name: '5G Network Planning & Implementation', 
          price: '$4,000/month', 
          description: 'Comprehensive 5G network design, planning, and implementation services',
          features: ['Network Design', 'Coverage Planning', 'Capacity Planning', 'Implementation Strategy', 'Performance Testing'],
          marketPrice: '$6,500/month',
          savings: '38%',
          link: '/5g-network-planning'
        },
        { 
          name: 'IoT Solutions & Device Management', 
          price: '$2,500/month', 
          description: 'Internet of Things solutions leveraging 5G connectivity and edge computing',
          features: ['IoT Architecture', 'Device Management', 'Data Collection', 'Real-time Analytics', 'Edge Computing'],
          marketPrice: '$4,000/month',
          savings: '38%',
          link: '/iot-solutions'
        },
        { 
          name: 'Edge Computing Solutions', 
          price: '$3,000/month', 
          description: 'Edge computing infrastructure for ultra-low latency applications and real-time processing',
          features: ['Edge Infrastructure', 'Data Processing', 'Latency Optimization', 'Scalability', 'Security'],
          marketPrice: '$5,000/month',
          savings: '40%',
          link: '/edge-computing'
        },
        { 
          name: '5G Application Development', 
          price: '$2,200/month', 
          description: 'Custom applications designed for 5G networks with ultra-fast connectivity',
          features: ['App Development', '5G Optimization', 'Performance Tuning', 'User Experience', 'API Integration'],
          marketPrice: '$3,500/month',
          savings: '37%',
          link: '/5g-app-development'
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Professional Services - Zion Tech Group"
        description="Comprehensive AI, IT, and technology services with competitive pricing. Transform your business with our expert solutions and micro SaaS applications."
        keywords="AI services, IT services, cybersecurity, cloud infrastructure, digital transformation, micro SaaS, 5G solutions, business automation"
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Professional <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive technology solutions with competitive pricing. Transform your business with our expert AI, IT, and digital transformation services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/pricing"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
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
              <div key={categoryIndex} className="mb-16">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color.replace('text-', 'from-').replace('-600', '-500')} to-${category.color.replace('text-', '').replace('-600', '-400')} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    Professional {category.title.toLowerCase()} with competitive pricing and expert implementation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="group bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                          {service.name}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-400">{service.price}</div>
                          <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                          <div className="text-xs text-green-400 font-medium">Save {service.savings}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-6 text-sm">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <Link 
                          to={service.link}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                        >
                          Learn More
                        </Link>
                        <Link 
                          to="/contact"
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

        {/* Contact Information */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss your project requirements and get a customized quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <PhoneIcon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <EnvelopeIcon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <GlobeAltIcon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
                <p className="text-gray-300">https://ziontechgroup.com</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Now
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
