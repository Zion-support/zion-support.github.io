import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Users, BarChart3, Shield } from 'lucide-react';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI-Powered Task Manager Pro',
      description: 'Intelligent task management with AI prioritization, time tracking, and productivity analytics.',
      icon: '✅',
      price: '$29/month',
      features: [
        'AI Task Prioritization',
        'Time Tracking & Analytics',
        'Team Collaboration',
        'Project Templates',
        'Deadline Alerts',
        'Progress Reports',
        'Mobile App',
        'API Integration'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce project delays by 60%',
        'Improve team coordination',
        'Track time automatically',
        'Generate insights'
      ],
      marketPrice: '$49-99/month',
      category: 'Productivity',
      technologies: ['React', 'Node.js', 'AI/ML', 'Real-time Sync', 'Mobile Apps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Invoice Generator',
      description: 'Automated invoice creation with AI-powered pricing, payment tracking, and financial analytics.',
      icon: '🧾',
      price: '$19/month',
      features: [
        'Auto Invoice Generation',
        'Payment Tracking',
        'Tax Calculations',
        'Client Management',
        'Recurring Billing',
        'Financial Reports',
        'Payment Reminders',
        'Multi-currency Support'
      ],
      benefits: [
        'Save 5+ hours weekly',
        'Reduce billing errors by 90%',
        'Improve cash flow',
        'Automate follow-ups',
        'Professional invoices'
      ],
      marketPrice: '$39-79/month',
      category: 'Finance',
      technologies: ['PDF Generation', 'Payment APIs', 'AI Pricing', 'Database', 'Email Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Social Media Scheduler',
      description: 'Intelligent social media management with optimal posting times, content suggestions, and analytics.',
      icon: '📱',
      price: '$39/month',
      features: [
        'Smart Scheduling',
        'Content Suggestions',
        'Hashtag Optimization',
        'Analytics Dashboard',
        'Multi-platform Support',
        'Engagement Tracking',
        'Content Calendar',
        'Team Collaboration'
      ],
      benefits: [
        'Increase engagement by 50%',
        'Save 10+ hours weekly',
        'Optimize posting times',
        'Grow followers faster',
        'Track performance'
      ],
      marketPrice: '$79-149/month',
      category: 'Social Media',
      technologies: ['Social APIs', 'AI Scheduling', 'Analytics', 'Content AI', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Email Marketing Suite',
      description: 'AI-powered email campaigns with personalization, automation, and advanced analytics.',
      icon: '📧',
      price: '$49/month',
      features: [
        'AI Personalization',
        'Automated Campaigns',
        'A/B Testing',
        'List Segmentation',
        'Email Templates',
        'Analytics Dashboard',
        'Deliverability Monitoring',
        'Integration APIs'
      ],
      benefits: [
        'Increase open rates by 45%',
        'Boost click-through by 60%',
        'Automate campaigns',
        'Personalize at scale',
        'Track performance'
      ],
      marketPrice: '$99-299/month',
      category: 'Email Marketing',
      technologies: ['Email APIs', 'AI Personalization', 'Analytics', 'Automation', 'Database'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent customer support with 24/7 availability, knowledge base, and human handoff.',
      icon: '🤖',
      price: '$79/month',
      features: [
        '24/7 Availability',
        'Knowledge Base Integration',
        'Multi-language Support',
        'Human Handoff',
        'Ticket Management',
        'Analytics Dashboard',
        'Custom Training',
        'API Integration'
      ],
      benefits: [
        'Handle 80% of queries automatically',
        'Reduce response time to seconds',
        'Improve customer satisfaction',
        'Scale support operations',
        'Reduce costs by 70%'
      ],
      marketPrice: '$149-399/month',
      category: 'Customer Support',
      technologies: ['NLP', 'Chatbot APIs', 'Knowledge Base', 'Analytics', 'Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Comprehensive business analytics with AI insights, custom reports, and data visualization.',
      icon: '📊',
      price: '$59/month',
      features: [
        'AI Insights',
        'Custom Reports',
        'Data Visualization',
        'Real-time Monitoring',
        'Alert System',
        'Export Options',
        'Team Collaboration',
        'API Integration'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends automatically',
        'Save hours on reporting',
        'Improve business performance',
        'Monitor KPIs in real-time'
      ],
      marketPrice: '$99-299/month',
      category: 'Analytics',
      technologies: ['Data Visualization', 'AI Analytics', 'Real-time Processing', 'APIs', 'Database'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing with AI writing assistance.',
      icon: '✍️',
      price: '$39/month',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Marketing Copy',
        'SEO Optimization',
        'Content Calendar',
        'Plagiarism Check',
        'Tone Customization',
        'Multi-language Support'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent quality',
        'Improve SEO rankings',
        'Scale content production',
        'Reduce writing costs'
      ],
      marketPrice: '$79-199/month',
      category: 'Content Creation',
      technologies: ['AI Writing', 'NLP', 'SEO Tools', 'Content Management', 'Plagiarism Detection'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Lead Generation Tool',
      description: 'AI-powered lead finding, qualification, and nurturing with automated outreach campaigns.',
      icon: '🎯',
      price: '$69/month',
      features: [
        'Lead Discovery',
        'Contact Information',
        'Lead Scoring',
        'Automated Outreach',
        'Email Sequences',
        'CRM Integration',
        'Performance Tracking',
        'Custom Filters'
      ],
      benefits: [
        'Find 100+ leads daily',
        'Qualify leads automatically',
        'Increase conversion rates',
        'Automate outreach',
        'Scale lead generation'
      ],
      marketPrice: '$149-399/month',
      category: 'Lead Generation',
      technologies: ['Web Scraping', 'AI Qualification', 'Email Automation', 'CRM APIs', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Project Management Suite',
      description: 'Intelligent project management with resource optimization, risk assessment, and team collaboration.',
      icon: '📋',
      price: '$49/month',
      features: [
        'AI Resource Planning',
        'Risk Assessment',
        'Team Collaboration',
        'Progress Tracking',
        'Budget Management',
        'Timeline Optimization',
        'Reporting Dashboard',
        'Integration APIs'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce project risks',
        'Optimize resource allocation',
        'Improve team coordination',
        'Track progress effectively'
      ],
      marketPrice: '$99-249/month',
      category: 'Project Management',
      technologies: ['AI Planning', 'Resource Optimization', 'Risk Analysis', 'Collaboration Tools', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Inventory Tracker',
      description: 'AI-powered inventory management with demand forecasting, automated reordering, and cost optimization.',
      icon: '📦',
      price: '$39/month',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Stock Alerts',
        'Cost Optimization',
        'Supplier Management',
        'Analytics Dashboard',
        'Multi-location Support',
        'API Integration'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts',
        'Optimize reorder points',
        'Improve cash flow',
        'Automate management'
      ],
      marketPrice: '$79-199/month',
      category: 'Inventory Management',
      technologies: ['Demand Forecasting', 'Supply Chain AI', 'Analytics', 'Automation', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI HR Management System',
      description: 'Intelligent HR management with recruitment, employee analytics, and performance tracking.',
      icon: '👥',
      price: '$59/month',
      features: [
        'AI Recruitment',
        'Employee Analytics',
        'Performance Tracking',
        'Attendance Management',
        'Payroll Integration',
        'Training Management',
        'Compliance Monitoring',
        'Reporting Dashboard'
      ],
      benefits: [
        'Streamline HR processes',
        'Improve recruitment quality',
        'Track performance effectively',
        'Ensure compliance',
        'Reduce HR workload'
      ],
      marketPrice: '$99-299/month',
      category: 'HR Management',
      technologies: ['AI Recruitment', 'Employee Analytics', 'Performance Tracking', 'Compliance', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Document Manager',
      description: 'AI-powered document management with OCR, search, collaboration, and automated organization.',
      icon: '📄',
      price: '$29/month',
      features: [
        'OCR Text Recognition',
        'Smart Search',
        'Document Classification',
        'Version Control',
        'Collaboration Tools',
        'Automated Organization',
        'Security & Compliance',
        'API Integration'
      ],
      benefits: [
        'Find documents instantly',
        'Automate organization',
        'Improve collaboration',
        'Ensure compliance',
        'Reduce paper usage'
      ],
      marketPrice: '$49-149/month',
      category: 'Document Management',
      technologies: ['OCR', 'AI Search', 'Document AI', 'Collaboration', 'Security'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including task management, invoicing, social media, email marketing, and more. Starting at $19/month." />
        <meta name="keywords" content="micro saas, task management, invoicing, social media management, email marketing, customer support, analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, affordable micro SAAS tools designed to streamline your business operations and boost productivity.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-300">Micro SAAS Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$19</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
              <div className="text-gray-300">Productivity Boost</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Micro SAAS Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Streamline Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our micro SAAS solutions today and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASSolutionsPage;