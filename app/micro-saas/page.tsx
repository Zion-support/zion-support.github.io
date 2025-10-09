import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Code, 
  BarChart, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Globe, 
  Database, 
  Shield, 
  Zap,
  Users,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, emails, and marketing materials with 50+ templates.',
      icon: FileText,
      price: '$29/month',
      features: [
        '50+ Content Templates',
        'Multi-language Support',
        'SEO Optimization',
        'Brand Voice Training',
        'Plagiarism Checker',
        'Scheduling & Publishing'
      ],
      category: 'Content Creation',
      color: 'from-blue-500 to-purple-600',
      popular: true
    },
    {
      id: 2,
      name: 'Social Media Analytics Dashboard',
      description: 'Comprehensive social media analytics and reporting across all major platforms with real-time insights.',
      icon: BarChart,
      price: '$49/month',
      features: [
        'Multi-platform Analytics',
        'Real-time Monitoring',
        'Custom Reports',
        'Competitor Analysis',
        'ROI Tracking',
        'Automated Alerts'
      ],
      category: 'Analytics',
      color: 'from-green-500 to-teal-600',
      popular: false
    },
    {
      id: 3,
      name: 'Email Marketing Automation',
      description: 'Powerful email marketing platform with advanced automation, segmentation, and personalization features.',
      icon: Mail,
      price: '$39/month',
      features: [
        'Drag & Drop Builder',
        'Advanced Segmentation',
        'A/B Testing',
        'Behavioral Triggers',
        'Unlimited Emails',
        '24/7 Support'
      ],
      category: 'Marketing',
      color: 'from-orange-500 to-red-600',
      popular: true
    },
    {
      id: 4,
      name: 'Project Management Hub',
      description: 'Complete project management solution with task tracking, team collaboration, and resource planning.',
      icon: Calendar,
      price: '$19/month',
      features: [
        'Kanban & Gantt Views',
        'Team Collaboration',
        'Time Tracking',
        'Resource Planning',
        'File Sharing',
        'Mobile App'
      ],
      category: 'Productivity',
      color: 'from-purple-500 to-pink-600',
      popular: false
    },
    {
      id: 5,
      name: 'Image & Video Editor Pro',
      description: 'Professional-grade image and video editing tools with AI-powered enhancements and batch processing.',
      icon: Image,
      price: '$59/month',
      features: [
        'AI Image Enhancement',
        'Video Editing Suite',
        'Batch Processing',
        'Cloud Storage',
        'Team Collaboration',
        'API Integration'
      ],
      category: 'Media',
      color: 'from-cyan-500 to-blue-600',
      popular: true
    },
    {
      id: 6,
      name: 'Customer Support Center',
      description: 'Omnichannel customer support platform with ticketing, live chat, and knowledge base management.',
      icon: Users,
      price: '$79/month',
      features: [
        'Multi-channel Support',
        'AI Chatbot',
        'Knowledge Base',
        'Ticket Management',
        'Performance Analytics',
        'Custom Integrations'
      ],
      category: 'Support',
      color: 'from-indigo-500 to-purple-600',
      popular: false
    },
    {
      id: 7,
      name: 'Financial Dashboard',
      description: 'Comprehensive financial management and accounting solution for small to medium businesses.',
      icon: TrendingUp,
      price: '$99/month',
      features: [
        'Expense Tracking',
        'Invoice Management',
        'Tax Preparation',
        'Financial Reporting',
        'Bank Integration',
        'Multi-currency Support'
      ],
      category: 'Finance',
      color: 'from-emerald-500 to-green-600',
      popular: true
    },
    {
      id: 8,
      name: 'Website Builder Pro',
      description: 'Drag-and-drop website builder with AI-powered design suggestions and e-commerce capabilities.',
      icon: Globe,
      price: '$39/month',
      features: [
        'Drag & Drop Builder',
        'AI Design Assistant',
        'E-commerce Integration',
        'SEO Tools',
        'Mobile Optimization',
        'Custom Domain'
      ],
      category: 'Web Development',
      color: 'from-violet-500 to-purple-600',
      popular: false
    },
    {
      id: 9,
      name: 'Database Management Suite',
      description: 'Advanced database management and analytics platform with real-time monitoring and optimization.',
      icon: Database,
      price: '$89/month',
      features: [
        'Multi-database Support',
        'Real-time Monitoring',
        'Query Optimization',
        'Backup & Recovery',
        'Security Management',
        'Performance Analytics'
      ],
      category: 'Data Management',
      color: 'from-amber-500 to-orange-600',
      popular: false
    },
    {
      id: 10,
      name: 'Security Monitoring Center',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for businesses of all sizes.',
      icon: Shield,
      price: '$149/month',
      features: [
        'Threat Detection',
        'Vulnerability Scanning',
        'Compliance Monitoring',
        'Incident Response',
        'Security Reports',
        '24/7 Monitoring'
      ],
      category: 'Security',
      color: 'from-red-500 to-pink-600',
      popular: true
    },
    {
      id: 11,
      name: 'API Management Platform',
      description: 'Complete API lifecycle management with monitoring, analytics, and developer portal features.',
      icon: Code,
      price: '$69/month',
      features: [
        'API Gateway',
        'Rate Limiting',
        'Analytics & Monitoring',
        'Developer Portal',
        'Documentation Tools',
        'Version Management'
      ],
      category: 'Development',
      color: 'from-slate-500 to-gray-600',
      popular: false
    },
    {
      id: 12,
      name: 'Workflow Automation Engine',
      description: 'Powerful workflow automation platform that connects apps and automates business processes.',
      icon: Zap,
      price: '$49/month',
      features: [
        '500+ Integrations',
        'Visual Workflow Builder',
        'Conditional Logic',
        'Error Handling',
        'Scheduling & Triggers',
        'Team Collaboration'
      ],
      category: 'Automation',
      color: 'from-yellow-500 to-orange-600',
      popular: true
    }
  ];

  const categories = [
    'All',
    'Content Creation',
    'Analytics',
    'Marketing',
    'Productivity',
    'Media',
    'Support',
    'Finance',
    'Web Development',
    'Data Management',
    'Security',
    'Development',
    'Automation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            Powerful, affordable tools for modern businesses
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations, 
            boost productivity, and drive growth. Each tool is built with cutting-edge technology and user-friendly interfaces.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Micro SAAS Tools</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-purple-600 transition-all duration-300 hover:scale-105"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                    {service.category}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="quantum-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  10GB Storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Analytics
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="quantum-card p-8 text-center ring-2 ring-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 15 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  100GB Storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API Access
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="quantum-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-pink-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label Options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;
