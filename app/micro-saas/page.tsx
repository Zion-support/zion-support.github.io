import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    // AI-Powered Business Tools
    {
      title: 'AI-Powered Business Intelligence Dashboard',
      description: 'Real-time analytics dashboard with predictive insights, automated reporting, and custom KPI tracking for data-driven decision making.',
      icon: '📊',
      price: '$149/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Custom KPI dashboards',
        'Automated report generation',
        'Multi-source data integration',
        'Mobile-responsive design',
        'White-label options',
        'API access included'
      ],
      benefits: [
        'Increase decision speed by 60%',
        'Reduce manual reporting by 80%',
        'Identify trends before competitors',
        'Improve operational efficiency'
      ],
      marketPrice: '$300-800/month',
      category: 'Business Intelligence',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis'],
      popular: true,
      link: '/contact?service=ai-dashboard'
    },
    {
      title: 'Smart Document Processing Suite',
      description: 'AI-powered document extraction, classification, and data entry automation with 99.5% accuracy for business process optimization.',
      icon: '📄',
      price: '$199/month',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data validation & verification',
        'Workflow automation',
        'Multi-format support (PDF, Word, Excel)',
        'Batch processing',
        'Custom field mapping',
        'Integration APIs'
      ],
      benefits: [
        'Process documents 50x faster',
        'Eliminate manual data entry',
        'Achieve 99.5% accuracy rate',
        'Reduce processing costs by 70%'
      ],
      marketPrice: '$400-1200/month',
      category: 'Document Processing',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Python', 'FastAPI'],
      popular: true,
      link: '/contact?service=document-processing'
    },
    {
      title: 'AI Customer Support Automation',
      description: 'Intelligent chatbot with natural language processing, context-aware responses, and seamless human handoff for 24/7 customer service.',
      icon: '🤖',
      price: '$299/month',
      features: [
        'Natural language processing',
        'Context-aware conversations',
        'Multi-language support',
        'CRM integration',
        'Analytics dashboard',
        'Human handoff capability',
        'Voice & text support',
        'Custom training data'
      ],
      benefits: [
        'Reduce support costs by 65%',
        'Provide 24/7 customer service',
        'Improve response time by 90%',
        'Increase customer satisfaction'
      ],
      marketPrice: '$500-1500/month',
      category: 'Customer Service',
      technologies: ['Dialogflow', 'OpenAI GPT', 'Node.js', 'MongoDB', 'WebSocket'],
      popular: true,
      link: '/contact?service=ai-chatbot'
    },
    {
      title: 'Smart Email Marketing Platform',
      description: 'AI-driven email campaigns with personalization, optimal send times, A/B testing automation, and advanced segmentation for maximum engagement.',
      icon: '📧',
      price: '$179/month',
      features: [
        'Smart audience segmentation',
        'A/B testing automation',
        'Send time optimization',
        'Content personalization',
        'Performance analytics',
        'Template library',
        'Automation workflows',
        'Deliverability optimization'
      ],
      benefits: [
        'Increase open rates by 40%',
        'Boost conversion by 55%',
        'Save 20 hours/week on campaigns',
        'Improve ROI by 200%'
      ],
      marketPrice: '$300-800/month',
      category: 'Marketing',
      technologies: ['SendGrid', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      link: '/contact?service=email-marketing'
    },
    {
      title: 'AI-Powered Inventory Management',
      description: 'Predictive inventory optimization with demand forecasting, automated reordering, and cost analysis for supply chain efficiency.',
      icon: '📦',
      price: '$249/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock optimization',
        'Supplier management',
        'Cost analysis',
        'Multi-location support',
        'Low stock alerts',
        'Integration APIs'
      ],
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 30%',
        'Improve cash flow',
        'Optimize supplier relationships'
      ],
      marketPrice: '$500-1500/month',
      category: 'Supply Chain',
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Custom ML Models'],
      link: '/contact?service=inventory-management'
    },
    {
      title: 'Smart HR Recruitment Tool',
      description: 'AI-powered resume screening, candidate matching, interview scheduling, and onboarding automation for streamlined hiring processes.',
      icon: '👥',
      price: '$199/month',
      features: [
        'Resume parsing & analysis',
        'Candidate scoring system',
        'Interview scheduling',
        'Onboarding automation',
        'Performance tracking',
        'Job posting optimization',
        'Talent pipeline management',
        'Compliance tracking'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Improve candidate quality',
        'Streamline HR processes',
        'Reduce recruitment costs'
      ],
      marketPrice: '$400-1200/month',
      category: 'Human Resources',
      technologies: ['NLP', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      link: '/contact?service=hr-recruitment'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media content creation, scheduling, engagement optimization, and performance analytics across all platforms.',
      icon: '📱',
      price: '$129/month',
      features: [
        'Content generation',
        'Optimal posting times',
        'Hashtag optimization',
        'Engagement tracking',
        'Multi-platform management',
        'Brand voice consistency',
        'Trend analysis',
        'Competitor monitoring'
      ],
      benefits: [
        'Increase engagement by 45%',
        'Save 25 hours/week',
        'Improve brand consistency',
        'Boost follower growth'
      ],
      marketPrice: '$250-600/month',
      category: 'Social Media',
      technologies: ['OpenAI GPT', 'Social Media APIs', 'React', 'Node.js', 'MongoDB'],
      link: '/contact?service=social-media'
    },
    {
      title: 'Smart Financial Analytics',
      description: 'AI-powered financial forecasting, expense tracking, budget optimization, and investment analysis for better financial management.',
      icon: '💰',
      price: '$189/month',
      features: [
        'Financial forecasting',
        'Expense categorization',
        'Budget optimization',
        'Investment analysis',
        'Risk assessment',
        'Tax optimization',
        'Cash flow management',
        'Financial reporting'
      ],
      benefits: [
        'Improve financial planning',
        'Reduce unnecessary expenses',
        'Optimize investment returns',
        'Ensure compliance'
      ],
      marketPrice: '$350-900/month',
      category: 'Finance',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'React', 'PostgreSQL'],
      link: '/contact?service=financial-analytics'
    },
    {
      title: 'AI-Powered Project Management',
      description: 'Intelligent project tracking with resource optimization, deadline prediction, risk assessment, and automated reporting.',
      icon: '📋',
      price: '$159/month',
      features: [
        'Resource optimization',
        'Deadline prediction',
        'Risk assessment',
        'Automated reporting',
        'Team collaboration',
        'Task prioritization',
        'Progress tracking',
        'Integration capabilities'
      ],
      benefits: [
        'Improve project success rate',
        'Reduce project delays',
        'Optimize resource allocation',
        'Enhance team productivity'
      ],
      marketPrice: '$300-800/month',
      category: 'Project Management',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Machine Learning', 'WebSocket'],
      link: '/contact?service=project-management'
    },
    {
      title: 'Smart Content Management System',
      description: 'AI-powered CMS with content optimization, SEO analysis, automated publishing, and performance tracking for digital content.',
      icon: '✍️',
      price: '$139/month',
      features: [
        'Content optimization',
        'SEO analysis',
        'Automated publishing',
        'Performance tracking',
        'Content scheduling',
        'Multi-language support',
        'Version control',
        'Collaboration tools'
      ],
      benefits: [
        'Improve SEO rankings',
        'Increase content engagement',
        'Streamline publishing workflow',
        'Reduce content management time'
      ],
      marketPrice: '$250-700/month',
      category: 'Content Management',
      technologies: ['React', 'Node.js', 'MongoDB', 'SEO Tools', 'AI Content Analysis'],
      link: '/contact?service=content-management'
    },
    {
      title: 'AI-Powered Security Monitoring',
      description: 'Advanced threat detection, vulnerability scanning, and automated security response for comprehensive cybersecurity protection.',
      icon: '🛡️',
      price: '$399/month',
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Automated response',
        'Security reporting',
        'Compliance monitoring',
        'Incident management',
        'Real-time alerts',
        'Integration capabilities'
      ],
      benefits: [
        'Prevent 95% of security threats',
        'Reduce response time by 80%',
        'Ensure compliance',
        'Protect sensitive data'
      ],
      marketPrice: '$800-2000/month',
      category: 'Cybersecurity',
      technologies: ['Machine Learning', 'Security APIs', 'Python', 'React', 'PostgreSQL'],
      link: '/contact?service=security-monitoring'
    },
    {
      title: 'Smart Analytics & Reporting',
      description: 'Comprehensive business analytics with automated insights, custom reports, and data visualization for informed decision making.',
      icon: '📈',
      price: '$169/month',
      features: [
        'Automated insights',
        'Custom report generation',
        'Data visualization',
        'Trend analysis',
        'Performance metrics',
        'Scheduled reports',
        'Export capabilities',
        'Real-time monitoring'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify business opportunities',
        'Improve operational efficiency',
        'Reduce reporting time'
      ],
      marketPrice: '$300-900/month',
      category: 'Analytics',
      technologies: ['Python', 'D3.js', 'React', 'PostgreSQL', 'Machine Learning'],
      link: '/contact?service=analytics-reporting'
    },
    {
      title: 'AI-Powered Lead Generation',
      description: 'Intelligent lead scoring, qualification, and nurturing with automated follow-up sequences and CRM integration.',
      icon: '🎯',
      price: '$219/month',
      features: [
        'Lead scoring',
        'Qualification automation',
        'Nurturing sequences',
        'CRM integration',
        'Email automation',
        'Lead tracking',
        'Conversion optimization',
        'Performance analytics'
      ],
      benefits: [
        'Increase lead quality by 50%',
        'Improve conversion rates',
        'Automate follow-up processes',
        'Reduce sales cycle time'
      ],
      marketPrice: '$400-1200/month',
      category: 'Sales',
      technologies: ['Machine Learning', 'CRM APIs', 'React', 'Node.js', 'PostgreSQL'],
      link: '/contact?service=lead-generation'
    },
    {
      title: 'Smart Workflow Automation',
      description: 'AI-powered business process automation with intelligent decision making, exception handling, and integration management.',
      icon: '⚙️',
      price: '$279/month',
      features: [
        'Process automation',
        'Intelligent decision making',
        'Exception handling',
        'Integration management',
        'Workflow optimization',
        'Performance monitoring',
        'Custom triggers',
        'API connectivity'
      ],
      benefits: [
        'Reduce process time by 75%',
        'Eliminate human errors',
        'Improve efficiency',
        'Scale operations'
      ],
      marketPrice: '$500-1500/month',
      category: 'Automation',
      technologies: ['RPA Tools', 'AI Models', 'Python', 'React', 'PostgreSQL'],
      link: '/contact?service=workflow-automation'
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Automated testing, bug detection, and quality monitoring with intelligent test generation and performance analysis.',
      icon: '🔍',
      price: '$189/month',
      features: [
        'Automated test generation',
        'Bug detection',
        'Performance testing',
        'Quality monitoring',
        'Regression testing',
        'Test reporting',
        'CI/CD integration',
        'Custom test scenarios'
      ],
      benefits: [
        'Reduce testing time by 70%',
        'Improve code quality',
        'Catch bugs earlier',
        'Ensure reliability'
      ],
      marketPrice: '$350-1000/month',
      category: 'Quality Assurance',
      technologies: ['Selenium', 'AI Testing', 'Python', 'React', 'PostgreSQL'],
      link: '/contact?service=quality-assurance'
    },
    {
      title: 'Smart Customer Analytics',
      description: 'Advanced customer behavior analysis, segmentation, and personalization with predictive modeling and engagement optimization.',
      icon: '👤',
      price: '$199/month',
      features: [
        'Behavior analysis',
        'Customer segmentation',
        'Personalization engine',
        'Predictive modeling',
        'Engagement optimization',
        'Churn prediction',
        'Lifetime value analysis',
        'Recommendation engine'
      ],
      benefits: [
        'Increase customer retention',
        'Improve personalization',
        'Predict customer behavior',
        'Optimize engagement'
      ],
      marketPrice: '$400-1200/month',
      category: 'Customer Analytics',
      technologies: ['Machine Learning', 'Python', 'React', 'PostgreSQL', 'TensorFlow'],
      link: '/contact?service=customer-analytics'
    },
    {
      title: 'AI-Powered API Management',
      description: 'Intelligent API gateway with rate limiting, security, monitoring, and automated documentation for seamless integration.',
      icon: '🔌',
      price: '$149/month',
      features: [
        'API gateway',
        'Rate limiting',
        'Security management',
        'Performance monitoring',
        'Automated documentation',
        'Version control',
        'Analytics dashboard',
        'Developer portal'
      ],
      benefits: [
        'Improve API security',
        'Optimize performance',
        'Streamline integration',
        'Reduce development time'
      ],
      marketPrice: '$300-800/month',
      category: 'API Management',
      technologies: ['Kong', 'Node.js', 'React', 'PostgreSQL', 'Redis'],
      link: '/contact?service=api-management'
    },
    {
      title: 'Smart Data Migration Tool',
      description: 'AI-powered data migration with validation, transformation, and error handling for seamless system transitions.',
      icon: '🔄',
      price: '$299/month',
      features: [
        'Data validation',
        'Transformation rules',
        'Error handling',
        'Progress tracking',
        'Rollback capability',
        'Data mapping',
        'Scheduling options',
        'Integration support'
      ],
      benefits: [
        'Ensure data integrity',
        'Reduce migration time',
        'Minimize errors',
        'Simplify transitions'
      ],
      marketPrice: '$500-1500/month',
      category: 'Data Migration',
      technologies: ['Python', 'ETL Tools', 'PostgreSQL', 'React', 'Node.js'],
      link: '/contact?service=data-migration'
    },
    {
      title: 'AI-Powered Backup & Recovery',
      description: 'Intelligent backup scheduling, data deduplication, and automated recovery with predictive failure detection.',
      icon: '💾',
      price: '$179/month',
      features: [
        'Intelligent scheduling',
        'Data deduplication',
        'Automated recovery',
        'Failure prediction',
        'Version control',
        'Compression optimization',
        'Security encryption',
        'Cloud integration'
      ],
      benefits: [
        'Prevent data loss',
        'Optimize storage usage',
        'Reduce recovery time',
        'Ensure business continuity'
      ],
      marketPrice: '$300-900/month',
      category: 'Backup & Recovery',
      technologies: ['Python', 'Cloud Storage', 'React', 'Node.js', 'PostgreSQL'],
      link: '/contact?service=backup-recovery'
    },
    {
      title: 'Smart Performance Monitoring',
      description: 'Real-time application performance monitoring with AI-powered anomaly detection and automated optimization recommendations.',
      icon: '⚡',
      price: '$219/month',
      features: [
        'Real-time monitoring',
        'Anomaly detection',
        'Performance optimization',
        'Alert management',
        'Trend analysis',
        'Capacity planning',
        'Root cause analysis',
        'Integration capabilities'
      ],
      benefits: [
        'Prevent downtime',
        'Optimize performance',
        'Reduce maintenance costs',
        'Improve user experience'
      ],
      marketPrice: '$400-1200/month',
      category: 'Performance Monitoring',
      technologies: ['Monitoring Tools', 'Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
      link: '/contact?service=performance-monitoring'
    }
  ];

  const categories = [...new Set(microSAASServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Affordable, powerful AI-driven micro SAAS tools for modern businesses. Starting from $79/month with comprehensive features and 24/7 support." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, productivity, affordable software, business intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Affordable, powerful AI-driven tools for modern businesses. Start from $79/month with comprehensive features and 24/7 support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Explore Solutions
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  📞 Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Powerful, affordable tools designed to transform your business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Setup</h3>
                <p className="text-gray-600">Get started in minutes with our intuitive setup process</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security and compliance for your data</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support from our expert team</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 6 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI-powered tools designed to streamline your business operations
              </p>
            </div>
            
            {categories.map(category => (
              <div key={category} className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category} Solutions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {microSAASServices
                    .filter(service => service.category === category)
                    .map((service, index) => (
                      <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                        {service.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              Most Popular
                            </span>
                          </div>
                        )}
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                            <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                          </div>
                          <div className="text-sm text-green-600 font-semibold">
                            Save up to 60% vs market rates
                          </div>
                        </div>

                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                          <ul className="space-y-1">
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

                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Business Benefits:</h5>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                                <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-900 mb-2">Technologies:</h5>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.slice(0, 4).map((tech, techIndex) => (
                              <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                            {service.technologies.length > 4 && (
                              <span className="text-xs text-gray-500">
                                +{service.technologies.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        <a 
                          href={service.link}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competitive Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Save up to 60% compared to enterprise solutions with the same features
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Micro SAAS</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$79-399/month</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Full feature access</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ Regular updates</li>
                  <li>✓ API access</li>
                  <li>✓ White-label options</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-8 text-center border-2 border-blue-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$500-2000/month</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Same features</li>
                  <li>✓ Limited support</li>
                  <li>✓ Fewer updates</li>
                  <li>✓ Extra API costs</li>
                  <li>✓ No customization</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Savings</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">60%+</div>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Lower costs</li>
                  <li>✓ Better support</li>
                  <li>✓ More features</li>
                  <li>✓ Faster setup</li>
                  <li>✓ Custom solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us today for a free consultation and custom solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p className="flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASPage;