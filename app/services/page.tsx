'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Zap, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  DollarSign,
  Globe,
  Target,
  Rocket,
  Database,
  Smartphone,
  Lock,
  Cpu,
  Wifi,
  Server,
  HardDrive,
  Stethoscope,
  Scale,
  ShoppingCart,
  Truck,
  Factory,
  Building,
  GraduationCap,
  Heart,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck as TruckIcon,
  Smartphone as SmartphoneIcon,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale as ScaleIcon
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      description: 'Advanced AI solutions powered by machine learning and artificial intelligence',
      services: [
        {
          name: 'AI Analytics Platform',
          description: 'Advanced predictive analytics with real-time insights and machine learning capabilities',
          price: 'Starting at $299/mo',
          features: ['Predictive Analytics', 'Real-time Processing', 'Custom Dashboards', 'ML Model Training', 'Data Visualization'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-analytics-dashboard'
        },
        {
          name: 'AI Workflow Automation',
          description: 'Intelligent business process automation with self-optimizing workflows and error recovery',
          price: 'Starting at $199/mo',
          features: ['Visual Workflow Builder', 'Smart Triggers', 'Error Handling', 'Performance Optimization', 'Integration Hub'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-workflow-automation'
        },
        {
          name: 'AI Cybersecurity Platform',
          description: 'Next-generation security with AI-powered threat detection and automated response',
          price: 'Starting at $399/mo',
          features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response', 'Zero Trust Architecture', 'Compliance Monitoring'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-cybersecurity'
        },
        {
          name: 'AI Content Generation',
          description: 'Advanced content creation with AI-powered writing, editing, and optimization',
          price: 'Starting at $179/mo',
          features: ['Multi-format Creation', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Detection', 'Performance Analytics'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-content-generation'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Comprehensive IT solutions for modern businesses',
      services: [
        {
          name: 'AI Cybersecurity Pro',
          description: 'Next-generation AI cybersecurity with advanced threat detection',
          price: 'Starting at $799/mo',
          features: ['AI Threat Detection', 'Multi-layer Security', '24/7 Monitoring', 'Compliance & Governance'],
          popular: true,
          link: '/ai-cybersecurity-pro'
        },
        {
          name: 'AI Cloud Optimization Pro',
          description: 'Intelligent cloud infrastructure management and optimization',
          price: 'Starting at $499/mo',
          features: ['AI-Powered Optimization', 'Real-time Analytics', 'Security & Compliance', 'Automated Scaling'],
          popular: true,
          link: '/ai-cloud-optimization-pro'
        },
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to AWS, Azure, or GCP with zero downtime and cost optimization',
          price: 'Starting at $10,000',
          features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation', 'Disaster Recovery', 'Performance Tuning'],
          popular: true,
          link: 'https://ziontechgroup.com/cloud-migration'
        },
        {
          name: 'Enterprise Cybersecurity',
          description: 'Comprehensive security solutions with advanced threat protection and compliance',
          price: 'Starting at $8,000/mo',
          features: ['Threat Detection', 'Vulnerability Assessment', '24/7 Monitoring', 'Incident Response', 'Compliance Management'],
          popular: true,
          link: 'https://ziontechgroup.com/cybersecurity'
        },
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support with AI-powered diagnostics',
          price: 'Starting at $2,000/mo',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'AI Diagnostics', 'Predictive Maintenance'],
          popular: true,
          link: 'https://ziontechgroup.com/it-support'
        },
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions with modern architecture and AI integration',
          price: 'Starting at $15,000',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'AI Integration', 'Cloud Deployment'],
          popular: true,
          link: 'https://ziontechgroup.com/custom-development'
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      description: 'Powerful AI-powered micro SaaS tools for business operations',
      services: [
        {
          name: 'AI Smart Calendar Pro',
          description: 'Intelligent calendar management with AI-powered scheduling',
          price: '$49/mo',
          features: ['AI-Powered Scheduling', 'Team Collaboration', 'Automation & Integration', 'Analytics & Insights'],
          popular: true,
          link: '/ai-smart-calendar-pro'
        },
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with AI insights and predictive analytics',
          price: '$199/mo',
          features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Prediction', 'Team Collaboration'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-project-manager'
        },
        {
          name: 'AI Content Writer Pro',
          description: 'Advanced AI content creation with SEO optimization and brand voice training',
          price: '$129/mo',
          features: ['SEO Optimization', 'Brand Voice', 'Multi-language Support', 'Plagiarism Detection', 'Performance Analytics'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-content-writer'
        },
        {
          name: 'AI Financial Advisor Pro',
          description: 'Personalized financial planning and advice with real-time market analysis',
          price: '$299/mo',
          features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Tax Optimization', 'Retirement Planning'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-financial-advisor'
        },
        {
          name: 'AI Code Assistant Pro',
          description: 'Advanced AI coding assistant with intelligent debugging and optimization',
          price: '$179/mo',
          features: ['Code Generation', 'Debug Assistant', 'Code Review', 'Performance Optimization', 'Security Analysis'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-code-assistant'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in efficiency',
      stat: '40%'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes',
      stat: '15 min'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60%',
      stat: '60%'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Zero security breaches with our approach',
      stat: '100%'
    }
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Microsoft Azure', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Database' }
  ];

  const process = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems and identify opportunities for improvement',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy tailored to your business goals',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business. 
              From cutting-edge AI platforms to robust IT infrastructure, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">IT Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Micro SAAS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven expertise and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across AI, IT, and Micro SAAS domains
            </p>
          </div>
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <div className="space-y-2 mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}</div>
                      <a 
                        href={service.link || '#'} 
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all text-center block"
                      >
                        Learn More
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-white font-medium text-sm">{tech.name}</div>
                <div className="text-gray-400 text-xs mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Get in touch with our experts to discuss your project requirements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-cyan-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
