import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Lock, Cloud, Wifi, Monitor, Headphones, Camera, Printer, HardDrive, Cpu, MemoryStick, Wrench, Settings, Bell, Heart, ThumbsUp, Share2, Download, Upload, Eye, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials',
      price: '$29/month',
      features: [
        'AI Blog Post Generation',
        'Social Media Content Creation',
        'SEO-Optimized Writing',
        'Multi-Language Support',
        'Brand Voice Customization',
        'Content Calendar Integration',
        'Plagiarism Detection',
        'Grammar & Style Check'
      ],
      icon: <FileText className="w-8 h-8" />,
      category: 'Content Creation',
      popular: true,
      rating: 4.9,
      users: '12,500+',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics and reporting with AI-powered insights',
      price: '$49/month',
      features: [
        'Real-time Data Visualization',
        'Custom Report Builder',
        'AI-Powered Insights',
        'Multi-Platform Integration',
        'Automated Alerts',
        'Export to PDF/Excel',
        'Team Collaboration',
        'Mobile App Access'
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Analytics',
      popular: true,
      rating: 4.8,
      users: '8,900+',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      name: 'Email Marketing Automation',
      description: 'Complete email marketing solution with advanced automation and personalization',
      price: '$19/month',
      features: [
        'Drag & Drop Email Builder',
        'Advanced Automation Workflows',
        'A/B Testing Tools',
        'Subscriber Segmentation',
        'Email Templates Library',
        'Analytics & Reporting',
        'Integration with 100+ Apps',
        '24/7 Customer Support'
      ],
      icon: <Mail className="w-8 h-8" />,
      category: 'Marketing',
      popular: false,
      rating: 4.7,
      users: '15,200+',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      name: 'Project Management Hub',
      description: 'Comprehensive project management tool with team collaboration and time tracking',
      price: '$39/month',
      features: [
        'Kanban & Gantt Charts',
        'Team Collaboration Tools',
        'Time Tracking & Reporting',
        'File Sharing & Storage',
        'Task Dependencies',
        'Resource Management',
        'Mobile & Desktop Apps',
        'API Integration'
      ],
      icon: <Calendar className="w-8 h-8" />,
      category: 'Productivity',
      popular: true,
      rating: 4.8,
      users: '22,100+',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      name: 'Social Media Scheduler',
      description: 'AI-powered social media management and scheduling across all platforms',
      price: '$24/month',
      features: [
        'Multi-Platform Posting',
        'AI Content Suggestions',
        'Optimal Timing Analysis',
        'Hashtag Research',
        'Engagement Analytics',
        'Team Collaboration',
        'Content Calendar',
        'Brand Monitoring'
      ],
      icon: <Share2 className="w-8 h-8" />,
      category: 'Social Media',
      popular: false,
      rating: 4.6,
      users: '18,700+',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 6,
      name: 'Customer Support Chat',
      description: 'AI-powered customer support chatbot with human handoff capabilities',
      price: '$34/month',
      features: [
        'AI Chatbot Builder',
        'Multi-Language Support',
        'Human Handoff',
        'Knowledge Base Integration',
        'Live Chat Widget',
        'Analytics & Reports',
        'Custom Branding',
        'API & Webhooks'
      ],
      icon: <Headphones className="w-8 h-8" />,
      category: 'Customer Support',
      popular: true,
      rating: 4.9,
      users: '9,800+',
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 7,
      name: 'Invoice & Billing Manager',
      description: 'Complete invoicing and billing solution for small to medium businesses',
      price: '$14/month',
      features: [
        'Professional Invoice Templates',
        'Automated Recurring Billing',
        'Payment Gateway Integration',
        'Expense Tracking',
        'Tax Calculation',
        'Client Portal',
        'Multi-Currency Support',
        'Financial Reports'
      ],
      icon: <FileText className="w-8 h-8" />,
      category: 'Finance',
      popular: false,
      rating: 4.7,
      users: '11,300+',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 8,
      name: 'Website Performance Monitor',
      description: 'Real-time website monitoring with uptime tracking and performance analytics',
      price: '$19/month',
      features: [
        'Uptime Monitoring',
        'Performance Analytics',
        'Real-time Alerts',
        'Mobile & Desktop Testing',
        'SSL Certificate Monitoring',
        'Historical Data',
        'Team Notifications',
        'API Access'
      ],
      icon: <Monitor className="w-8 h-8" />,
      category: 'Monitoring',
      popular: true,
      rating: 4.8,
      users: '7,500+',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 9,
      name: 'Password Manager Pro',
      description: 'Secure password management with team sharing and enterprise features',
      price: '$12/month',
      features: [
        'Secure Password Storage',
        'Team Password Sharing',
        'Two-Factor Authentication',
        'Password Generator',
        'Security Audit',
        'Browser Extensions',
        'Mobile Apps',
        'Enterprise SSO'
      ],
      icon: <Lock className="w-8 h-8" />,
      category: 'Security',
      popular: false,
      rating: 4.9,
      users: '25,600+',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 10,
      name: 'Image & Video Editor',
      description: 'AI-powered image and video editing tool with cloud storage and collaboration',
      price: '$39/month',
      features: [
        'AI-Powered Editing',
        'Cloud Storage Integration',
        'Team Collaboration',
        'Batch Processing',
        'Template Library',
        'Brand Kit Management',
        'Export in Multiple Formats',
        'Mobile App Access'
      ],
      icon: <Image className="w-8 h-8" />,
      category: 'Design',
      popular: true,
      rating: 4.7,
      users: '13,400+',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 11,
      name: 'Code Repository Manager',
      description: 'Git-based code repository management with CI/CD integration and team collaboration',
      price: '$29/month',
      features: [
        'Git Repository Hosting',
        'CI/CD Pipeline Integration',
        'Code Review Tools',
        'Issue Tracking',
        'Wiki & Documentation',
        'Team Collaboration',
        'Security Scanning',
        'API Access'
      ],
      icon: <Code className="w-8 h-8" />,
      category: 'Development',
      popular: false,
      rating: 4.8,
      users: '16,200+',
      color: 'from-gray-500 to-slate-600'
    },
    {
      id: 12,
      name: 'Database Backup Manager',
      description: 'Automated database backup and recovery solution with cloud storage',
      price: '$24/month',
      features: [
        'Automated Backups',
        'Cloud Storage Integration',
        'Point-in-Time Recovery',
        'Cross-Platform Support',
        'Encryption & Security',
        'Monitoring & Alerts',
        'API Integration',
        '24/7 Support'
      ],
      icon: <Database className="w-8 h-8" />,
      category: 'Data Management',
      popular: true,
      rating: 4.9,
      users: '6,800+',
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const categories = [
    'All Services',
    'Content Creation',
    'Analytics',
    'Marketing',
    'Productivity',
    'Social Media',
    'Customer Support',
    'Finance',
    'Monitoring',
    'Security',
    'Design',
    'Development',
    'Data Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Powerful, Affordable, and Easy-to-Use Software Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our comprehensive collection of micro SAAS applications designed to streamline your business operations, 
            boost productivity, and drive growth. Each solution is carefully crafted with cutting-edge technology and user-friendly interfaces.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-white mb-3 text-lg">Instant Setup</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Get started in minutes with our intuitive setup process and comprehensive onboarding</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-lg">Affordable Pricing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Transparent, competitive pricing starting from $12/month with no hidden fees</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Bank-level security with 99.9% uptime guarantee and 24/7 monitoring</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-slate-800 text-gray-300 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {microSAASServices.map((service) => (
            <div key={service.id} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                  {service.icon}
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-xs text-gray-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Pricing & Users */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  <div className="text-xs text-gray-400">per month</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-white">{service.users}</div>
                  <div className="text-xs text-gray-400">active users</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-sm">
                  Start Free Trial
                </button>
                <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial for all services</p>
            <p>✓ No setup fees or hidden costs</p>
            <p>✓ 24/7 customer support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
