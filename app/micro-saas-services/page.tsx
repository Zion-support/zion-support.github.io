import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Code, Smartphone, Brain, Cpu, DollarSign, Star, Users, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, and marketing copy.',
      features: [
        'Multi-language support (50+ languages)',
        'SEO-optimized content generation',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Team collaboration tools'
      ],
      pricing: {
        basic: '$29/month',
        pro: '$59/month',
        enterprise: '$149/month'
      },
      benefits: ['Save 80% writing time', 'Increase content output by 5x', 'Improve SEO rankings', 'Consistent brand voice'],
      link: '/ai-content-writer-pro'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights and predictive analytics.',
      features: [
        'Real-time data visualization',
        'Custom dashboard creation',
        'Predictive analytics',
        'Automated reporting',
        'Data integration (100+ sources)',
        'Mobile app access'
      ],
      pricing: {
        basic: '$49/month',
        pro: '$99/month',
        enterprise: '$299/month'
      },
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Automate reporting', 'Scale with your business'],
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management system that prioritizes, schedules, and automates your workflow.',
      features: [
        'AI-powered task prioritization',
        'Smart scheduling algorithms',
        'Team collaboration tools',
        'Progress tracking',
        'Deadline reminders',
        'Integration with 50+ apps'
      ],
      pricing: {
        basic: '$19/month',
        pro: '$39/month',
        enterprise: '$99/month'
      },
      benefits: ['Increase productivity by 40%', 'Never miss deadlines', 'Optimize team workflow', 'Reduce stress'],
      link: '/ai-task-manager'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Next-generation password security with AI-powered threat detection and auto-generation.',
      features: [
        'AI threat detection',
        'Secure password generation',
        'Multi-device sync',
        'Dark web monitoring',
        'Family sharing',
        'Enterprise security'
      ],
      pricing: {
        basic: '$12/month',
        pro: '$24/month',
        enterprise: '$59/month'
      },
      benefits: ['Protect against breaches', 'Generate strong passwords', 'Monitor dark web', 'Secure family accounts'],
      link: '/ai-password-manager'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense management with AI categorization, receipt scanning, and budget optimization.',
      features: [
        'Receipt scanning (OCR)',
        'AI expense categorization',
        'Budget optimization',
        'Tax preparation',
        'Multi-currency support',
        'Expense reporting'
      ],
      pricing: {
        basic: '$15/month',
        pro: '$29/month',
        enterprise: '$79/month'
      },
      benefits: ['Save 10+ hours monthly', 'Optimize spending', 'Simplify tax prep', 'Track business expenses'],
      link: '/ai-expense-tracker'
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered pricing suggestions and payment tracking.',
      features: [
        'Auto-invoice generation',
        'AI pricing optimization',
        'Payment tracking',
        'Multi-currency support',
        'Client management',
        'Tax calculations'
      ],
      pricing: {
        basic: '$25/month',
        pro: '$49/month',
        enterprise: '$129/month'
      },
      benefits: ['Get paid 30% faster', 'Reduce billing errors', 'Professional invoices', 'Automate follow-ups'],
      link: '/ai-invoice-generator'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Lead Generator',
      description: 'Intelligent lead generation platform that finds and qualifies prospects using AI algorithms.',
      features: [
        'AI prospect identification',
        'Lead scoring algorithms',
        'Email sequence automation',
        'CRM integration',
        'Social media monitoring',
        'Lead nurturing campaigns'
      ],
      pricing: {
        basic: '$79/month',
        pro: '$149/month',
        enterprise: '$399/month'
      },
      benefits: ['Generate 5x more leads', 'Improve lead quality', 'Automate outreach', 'Increase conversion rates'],
      link: '/ai-lead-generator'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      features: [
        'AI meeting scheduling',
        'Time blocking optimization',
        'Meeting conflict resolution',
        'Travel time calculation',
        'Team availability sync',
        'Smart reminders'
      ],
      pricing: {
        basic: '$22/month',
        pro: '$44/month',
        enterprise: '$99/month'
      },
      benefits: ['Optimize meeting times', 'Reduce scheduling conflicts', 'Maximize productivity', 'Save 2+ hours daily'],
      link: '/ai-smart-calendar'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered responses, scheduling, and inbox organization.',
      features: [
        'AI email composition',
        'Smart response suggestions',
        'Email scheduling',
        'Inbox organization',
        'Spam filtering',
        'Email analytics'
      ],
      pricing: {
        basic: '$18/month',
        pro: '$35/month',
        enterprise: '$89/month'
      },
      benefits: ['Respond 3x faster', 'Improve email quality', 'Organize inbox', 'Reduce email stress'],
      link: '/ai-email-assistant'
    },
    {
      icon: <Cloud className="w-8 h-8 text-teal-500" />,
      title: 'AI Document Processor',
      description: 'Intelligent document processing with OCR, data extraction, and automated workflows.',
      features: [
        'Advanced OCR technology',
        'Data extraction AI',
        'Document classification',
        'Workflow automation',
        'Multi-format support',
        'API integration'
      ],
      pricing: {
        basic: '$39/month',
        pro: '$79/month',
        enterprise: '$199/month'
      },
      benefits: ['Process documents 10x faster', 'Eliminate manual data entry', 'Reduce errors', 'Automate workflows'],
      link: '/ai-document-processor'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Integrations' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. Affordable pricing starting from $12/month." />
        <meta name="keywords" content="micro saas, ai tools, business software, productivity, automation, affordable software" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Powerful AI-driven micro software solutions designed to streamline your business operations and boost productivity. 
              Choose from our comprehensive suite of intelligent tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our comprehensive suite of AI-powered micro applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {microServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Pricing:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                      {service.pricing.basic}
                    </span>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                      {service.pricing.pro}
                    </span>
                    <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                      {service.pricing.enterprise}
                    </span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Start your free trial today and experience the power of AI-driven micro SAAS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;