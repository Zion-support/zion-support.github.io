import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & IT Services | Zion Tech Group - Enterprise Solutions',
  description: 'Comprehensive AI services, micro SaaS solutions, and IT consulting. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT consulting, cloud migration, DevOps, enterprise software, automation',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI Content Optimization Suite',
      description: 'AI-powered content optimization platform for headlines, email subject lines, and marketing copy',
      icon: '📝',
      href: '/services/ai-content-optimization-suite',
      pricing: 'Starting from $29/month',
      features: [
        'HeadlineMaster AI - B2B Marketing Headlines',
        'PodcastTranscriber Pro - Accurate Transcriptions',
        'ContentAnalyzer AI - Performance Analytics',
        'A/B Testing Capabilities',
        'Industry-Specific Optimization',
        'Real-time Performance Tracking'
      ]
    },
    {
      title: 'Remote Work Productivity Suite',
      description: 'Comprehensive remote work solutions including meeting optimization, team onboarding, and productivity analytics',
      icon: '🏠',
      href: '/services/remote-work-productivity-suite',
      pricing: 'Starting from $19/month',
      features: [
        'MeetingTimer Pro - Meeting Efficiency',
        'RemoteOnboarding - Team Integration',
        'TeamAnalytics Pro - Productivity Insights',
        'AI-Powered Meeting Assistant',
        'Virtual Team Building Tools',
        'Collaboration Analytics'
      ]
    },
    {
      title: 'Healthcare Scheduling Platform',
      description: 'Comprehensive healthcare scheduling SaaS for hospitals and clinics with HIPAA compliance',
      icon: '🏥',
      href: '/services/healthcare-scheduling-platform',
      pricing: 'Starting from $149/month',
      features: [
        'Smart Appointment Scheduling',
        'Virtual Consultations Platform',
        'Patient Data Management',
        'HIPAA Compliance & Security',
        'Analytics Dashboard',
        'Mobile Applications'
      ]
    },
    {
      title: 'AI Meeting Assistant Platform',
      description: 'AI-powered meeting assistant that records conversations, extracts decisions, and manages tasks automatically',
      icon: '🤖',
      href: '/services/ai-meeting-assistant-platform',
      pricing: 'Starting from $29/month',
      features: [
        'Intelligent Recording & Transcription',
        'Smart Summarization & Decision Extraction',
        'Automatic Task Management',
        'Natural Language Processing',
        'Calendar Integration',
        'Advanced Analytics'
      ]
    },
    {
      title: 'Habit Tracking & Wellness Platform',
      description: 'AI-powered habit tracking and wellness platform for personal development and goal achievement',
      icon: '💪',
      href: '/services/habit-tracking-wellness-platform',
      pricing: 'Starting from $7.99/month',
      features: [
        'Smart Habit Builder',
        'Morning Routine Optimizer',
        'Wellness Analytics',
        'AI-Powered Insights',
        'Community Features',
        'Wearable Device Integration'
      ]
    },
    {
      title: 'AI Cybersecurity Automation',
      description: 'Advanced AI-powered cybersecurity automation platform with threat detection and automated response',
      icon: '🔒',
      href: '/services/ai-cybersecurity-automation',
      pricing: 'Starting from $1,499/month',
      features: [
        'AI Threat Detection',
        'Automated Response System',
        'Vulnerability Assessment',
        'Zero Trust Architecture',
        'Security Orchestration',
        'Compliance & Reporting'
      ]
    },
    {
      title: 'Cloud-Native DevOps Platform',
      description: 'Comprehensive cloud-native DevOps platform with CI/CD automation and infrastructure as code',
      icon: '☁️',
      href: '/services/cloud-native-devops-platform',
      pricing: 'Starting from $1,499/month',
      features: [
        'CI/CD Automation',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Observability',
        'Security & Compliance',
        'Multi-Cloud Support'
      ]
    },
    {
      title: 'Advanced Micro SaaS Solutions',
      description: 'Cutting-edge micro SaaS platforms designed to solve specific business challenges with AI-powered automation',
      icon: '🚀',
      href: '/services/advanced-micro-saas-solutions',
      pricing: 'Starting from $199/month',
      features: [
        'AI-Powered Content Creation Suite',
        'Smart Inventory Management Platform',
        'Automated Customer Support AI',
        'Financial Analytics Dashboard',
        'HR Automation Suite',
        'Project Management Intelligence'
      ]
    },
    {
      title: 'Comprehensive AI Services',
      description: 'Full-spectrum AI solutions including machine learning, NLP, computer vision, and autonomous systems',
      icon: '🧠',
      href: '/services/ai-services-comprehensive',
      pricing: 'Starting from $2,500/project',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing Suite',
        'Computer Vision & Image Recognition',
        'Autonomous Systems Development',
        'AI-Powered Business Intelligence',
        'AI Consulting & Strategy'
      ]
    },
    {
      title: 'AI Content Optimization Suite',
      description: 'AI-powered content creation, optimization, and performance analytics for marketing and business growth',
      icon: '📝',
      href: '/services/ai-content-optimization-suite',
      pricing: 'Starting from $199/month',
      features: [
        'AI Content Generation',
        'SEO Optimization',
        'Performance Analytics',
        'Content Personalization',
        'Quality Assurance',
        'Content Calendar Management'
      ]
    },
    {
      title: 'AI Workflow Automation Platform',
      description: 'Automate complex business workflows with AI-powered automation and intelligent decision making',
      icon: '⚡',
      href: '/services/ai-workflow-automation-platform',
      pricing: 'Starting from $299/month',
      features: [
        'Visual Workflow Builder',
        'AI-Powered Decision Making',
        'Integration Hub (500+ apps)',
        'Real-time Monitoring',
        'Enterprise Security',
        'Custom Development'
      ]
    },
    {
      title: 'AI-Powered Customer Insights Platform',
      description: 'Transform customer data into actionable insights with advanced AI analytics, sentiment analysis, and predictive behavior modeling',
      icon: '🔍',
      href: '/services/ai-powered-customer-insights-platform',
      pricing: 'Starting from $299/month',
      features: [
        'Real-time sentiment analysis with 95% accuracy',
        'Predictive behavior modeling and churn prediction',
        'Customer journey mapping and optimization',
        'Automated insights generation and reporting',
        'Multi-channel data integration',
        'Advanced analytics dashboard'
      ]
    },
    {
      title: 'AI-Powered Financial Intelligence Platform',
      description: 'Revolutionary AI platform for financial analysis, risk assessment, fraud detection, and automated trading with unprecedented accuracy',
      icon: '💰',
      href: '/services/ai-powered-financial-intelligence-platform',
      pricing: 'Starting from $1,999/month',
      features: [
        'AI risk assessment engine with 95% accuracy',
        'Intelligent fraud detection and prevention',
        'Automated trading intelligence and optimization',
        'Real-time financial analytics dashboard',
        'Predictive cash flow forecasting',
        'Regulatory compliance automation'
      ]
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing solutions for optimization, cryptography, drug discovery, and financial modeling with exponential speedups',
      icon: '⚛️',
      href: '/services/quantum-computing-solutions',
      pricing: 'Starting from $2,500/project',
      features: [
        'Quantum optimization for complex problems',
        'Quantum cryptography and security',
        'Quantum machine learning algorithms',
        'Financial modeling acceleration',
        'Drug discovery simulation',
        'Quantum cloud computing access'
      ]
    },
    {
      title: 'AI Autonomous DevOps Platform',
      description: 'Revolutionary self-healing infrastructure with autonomous incident response, predictive scaling, and AI-driven optimization',
      icon: '🤖',
      href: '/services/ai-autonomous-devops-platform',
      pricing: 'Starting from $499/month',
      features: [
        'Autonomous incident response and resolution',
        'Predictive scaling and resource optimization',
        'Self-healing infrastructure automation',
        'Intelligent code deployment and rollback',
        'Multi-cloud orchestration',
        'Advanced security automation'
      ]
    },
    {
      title: 'AI Financial Analysis Platform',
      description: 'Advanced AI-powered financial analysis, forecasting, and risk assessment for informed decision making',
      icon: '📊',
      href: '/services/ai-financial-analysis-platform',
      pricing: 'Starting from $599/month',
      features: [
        'Automated Financial Reporting',
        'Predictive Forecasting',
        'Risk Assessment',
        'Investment Analysis',
        'Fraud Detection',
        'Regulatory Compliance'
      ]
    },
    {
      title: 'Complete IT Services',
      description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and digital transformation',
      icon: '💻',
      href: '/services/it-services-comprehensive',
      pricing: 'Starting from $1,500/month',
      features: [
        'Cloud Migration & Management',
        'DevOps & CI/CD Implementation',
        'Cybersecurity Solutions',
        'Infrastructure Management',
        'Digital Transformation Consulting',
        'Database Management & Optimization'
      ]
    }
  ];

  const services = [
    {
      title: 'AI Document Automation Platform',
      description: 'Automate document processing, data extraction, and workflow management with 99.5% accuracy',
      icon: '📄',
      features: [
        'Intelligent Data Extraction',
        'Smart Document Classification',
        'Automated Workflow Processing',
        'Compliance & Security Controls',
        'Real-time Analytics & Reporting'
      ],
      href: '/services/ai-document-automation',
      pricing: '$299 - $799/month',
      category: 'AI Automation'
    },
    {
      title: 'AI Customer Insights Platform',
      description: 'Transform customer data into actionable insights with AI-powered analytics and predictive modeling',
      icon: '👥',
      features: [
        'Predictive Customer Analytics',
        'Behavioral Segmentation',
        'Journey Mapping & Analysis',
        'Sentiment Analysis',
        'Revenue Optimization'
      ],
      href: '/services/ai-customer-insights-platform',
      pricing: '$499 - $1,299/month',
      category: 'Business Intelligence'
    },
    {
      title: 'AI Workflow Automation Platform',
      description: 'Streamline business operations with intelligent workflow automation and process optimization',
      icon: '⚡',
      features: [
        'Visual Workflow Builder',
        'AI-Powered Decision Making',
        'System Integrations',
        'Process Monitoring',
        'Exception Handling'
      ],
      href: '/services/ai-workflow-automation-platform',
      pricing: '$399 - $999/month',
      category: 'Process Automation'
    },
    {
      title: 'Healthcare AI Diagnostics Platform',
      description: 'Revolutionary AI-powered diagnostic platform for healthcare providers with 95% accuracy',
      icon: '🏥',
      features: [
        'Medical Imaging AI',
        'Clinical Decision Support',
        'Predictive Analytics',
        'Early Disease Detection',
        'HIPAA Compliance'
      ],
      href: '/services/healthcare-ai-diagnostics-platform',
      pricing: '$2,999 - $7,999/month',
      category: 'Healthcare AI'
    },
    {
      title: 'FinTech AI Risk Management Platform',
      description: 'Advanced AI-powered risk management for financial institutions with 99.8% fraud detection accuracy',
      icon: '💰',
      features: [
        'Real-time Fraud Detection',
        'Credit Risk Assessment',
        'Regulatory Compliance',
        'Market Risk Analysis',
        'Predictive Analytics'
      ],
      href: '/services/fintech-ai-risk-management',
      pricing: '$1,999 - $4,999/month',
      category: 'FinTech AI'
    },
    {
      title: 'AI Inventory Optimization Platform',
      description: 'Optimize inventory management with AI-powered demand forecasting and automated reordering',
      icon: '📦',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Stock Optimization',
        'Supplier Management',
        'Risk Management'
      ],
      href: '/services/ai-inventory-optimization-platform',
      pricing: '$599 - $1,999/month',
      category: 'Supply Chain AI'
    },
    {
      title: 'AI Content Generation Tool',
      description: 'Revolutionary AI-powered content creation platform for blogs, social media, and marketing materials',
      icon: '✍️',
      features: [
        'Smart Templates for All Content Types',
        'SEO Optimization & Keyword Integration',
        'Plagiarism Detection & Originality',
        'Brand Voice Matching & Consistency',
        'Multi-Platform Publishing'
      ],
      href: '/services/ai-content-generation-tool',
      pricing: '$50 - $500/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Automated Appointment Scheduler',
      description: 'Intelligent scheduling system with calendar integration and automated reminders',
      icon: '📅',
      features: [
        'Calendar Synchronization',
        'Automated Email & SMS Reminders',
        'Customizable Booking Pages',
        'Real-time Availability Updates',
        'Analytics Dashboard'
      ],
      href: '/services/automated-appointment-scheduler',
      pricing: '$25 - $200/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot with natural language processing and seamless human handoff',
      icon: '🤖',
      features: [
        'Natural Language Processing',
        '24/7 Availability',
        'Seamless Human Handoff',
        'Knowledge Base Integration',
        'Advanced Analytics'
      ],
      href: '/services/ai-customer-support-chatbot',
      pricing: '$100 - $800/month',
      category: 'AI Services'
    },
    {
      title: 'AI Resume Screening Service',
      description: 'Automated candidate evaluation with bias detection and intelligent scoring',
      icon: '📄',
      features: [
        'Smart Keyword Matching',
        'Bias Detection & Prevention',
        'Candidate Scoring System',
        'HR Software Integration',
        'Analytics Dashboard'
      ],
      href: '/services/ai-resume-screening-service',
      pricing: '$500 - $5,000/month',
      category: 'AI Services'
    },
    {
      title: 'Generative AI Solutions',
      description: 'Create, innovate, and generate novel solutions with cutting-edge generative intelligence',
      icon: '✨',
      features: [
        'Content Generation Systems',
        'Creative AI Applications',
        'Multimodal Generation',
        'Adaptive Learning Systems',
        'Innovation Automation'
      ],
      href: '/services/generative-ai'
    },
    {
      title: 'Cloud Migration & DevOps',
      description: 'Seamless cloud transitions and optimized DevOps practices for modern infrastructure',
      icon: '☁️',
      features: [
        'Cloud Architecture Design',
        'Migration Strategy & Execution',
        'CI/CD Pipeline Development',
        'Infrastructure as Code',
        'Monitoring & Observability'
      ],
      href: '/services/cloud-migration'
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Production-ready micro SaaS applications for specific business needs with immediate ROI',
      icon: '🔧',
      features: [
        'Cloud Cost Management',
        'AI Content Creation',
        'Compliance Automation',
        'Smart HR & Analytics',
        'Workflow Automation'
      ],
      href: '/services/micro-saas'
    },
    {
      title: 'IT Services & Solutions',
      description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and platform engineering',
      icon: '🖥️',
      features: [
        'Platform Engineering',
        'Cloud Migration',
        'DevOps Automation',
        'Cybersecurity Operations',
        'Data Analytics Platforms'
      ],
      href: '/services/it-services'
    },
    {
      title: 'Enterprise AI Consulting',
      description: 'Strategic AI implementation guidance for enterprise-scale digital transformation',
      icon: '🎯',
      features: [
        'AI Strategy Development',
        'Technology Roadmap Planning',
        'Change Management',
        'ROI Optimization',
        'Compliance & Governance'
      ],
      href: '/services/ai-consulting'
    },
    {
      title: 'Cybersecurity Risk Assessment',
      description: 'Comprehensive security evaluation with vulnerability scanning and compliance checks',
      icon: '🛡️',
      features: [
        'Vulnerability Scanning',
        'Compliance Checks (GDPR, HIPAA, SOX)',
        'Detailed Risk Reports',
        'Penetration Testing',
        'Security Training'
      ],
      href: '/services/cybersecurity-risk-assessment',
      pricing: '$1,000 - $25,000+',
      category: 'IT Services'
    },
    {
      title: 'AI-Powered Email Marketing Suite',
      description: 'Revolutionary email marketing platform with AI-driven optimization and automated personalization',
      icon: '📧',
      features: [
        '40% SEO Improvement',
        '60% Higher Engagement',
        '70% Time Savings',
        '85% Prediction Accuracy'
      ],
      href: '/services/ai-content-optimization-platform',
      pricing: '$99/month',
      category: 'AI Services'
    },
    {
      title: 'AI Financial Forecasting Suite',
      description: 'Revolutionize financial planning with AI-powered forecasting. Predict market trends and optimize investments.',
      icon: '💰',
      features: [
        '78% Prediction Accuracy',
        '25% Return Improvement',
        '90% Risk Assessment',
        '80% Time Savings'
      ],
      href: '/services/ai-financial-forecasting-suite',
      pricing: '$499/month',
      category: 'AI Services'
    },
    {
      title: 'Smart Inventory Management SaaS',
      description: 'AI-powered inventory optimization for retail, e-commerce, and manufacturing. Reduce costs and prevent stockouts.',
      icon: '📦',
      features: [
        '30% Cost Reduction',
        '60% Less Stockouts',
        '85% Demand Accuracy',
        '40% Cash Flow Improvement'
      ],
      href: '/services/smart-inventory-management-saas',
      pricing: '$79/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI-Powered CRM Automation',
      description: 'Transform customer relationships with AI automation. Automate lead scoring, sales forecasting, and engagement.',
      icon: '🤝',
      features: [
        '90% Lead Scoring Accuracy',
        '85% Forecast Accuracy',
        '70% Higher Engagement',
        '40% Churn Reduction'
      ],
      href: '/services/ai-powered-crm-automation',
      pricing: '$149/month',
      category: 'AI Services'
    },
    {
      title: 'Cloud-Native DevOps Platform',
      description: 'Enterprise-grade DevOps platform with CI/CD automation, infrastructure as code, and advanced monitoring.',
      icon: '⚙️',
      features: [
        '50% Faster Deployments',
        '80% Infrastructure Automation',
        '99.9% Success Rate',
        '30% Cost Optimization'
      ],
      href: '/services/cloud-native-devops-platform',
      pricing: '$299/month',
      category: 'IT Services'
    },
    {
      title: 'AI Cybersecurity Automation Suite',
      description: 'Advanced AI-powered cybersecurity platform. Detect threats, automate responses, and protect infrastructure.',
      icon: '🛡️',
      features: [
        '99.5% Threat Detection',
        '90% Faster Response',
        '95% Insider Threat Detection',
        '70% Alert Reduction'
      ],
      href: '/services/ai-cybersecurity-automation-suite',
      pricing: '$399/month',
      category: 'AI Services'
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Transform customer support with intelligent automation and 24/7 AI-powered assistance',
      icon: '🎧',
      features: [
        '300% ROI',
        '60% Cost Reduction',
        '80% Faster Response',
        '24/7 Support'
      ],
      href: '/services/ai-customer-service-automation',
      pricing: '$299/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Smart Appointment Scheduler',
      description: 'Streamline bookings with AI-powered optimization and automated reminders',
      icon: '📅',
      features: [
        '250% ROI',
        '50% Less No-Shows',
        '35% More Bookings',
        '30 Day Trial'
      ],
      href: '/services/appointment-scheduling-saas',
      pricing: '$49/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Enterprise Cloud Migration',
      description: 'Seamless cloud transformation with zero downtime and expert guidance',
      icon: '☁️',
      features: [
        '200% ROI',
        '40% Cost Reduction',
        'Zero Downtime',
        '24/7 Support'
      ],
      href: '/services/cloud-migration-service',
      pricing: 'Custom Pricing',
      category: 'IT Services'
    },
    {
      title: 'AI Cybersecurity Platform',
      description: 'Advanced threat detection and response with AI-powered security automation',
      icon: '🛡️',
      features: [
        '500% ROI',
        '90% Threat Reduction',
        'Real-time Monitoring',
        '14 Day Trial'
      ],
      href: '/services/ai-cybersecurity-platform',
      pricing: '$399/month',
      category: 'Advanced AI'
    },
    {
      title: 'Telemedicine Platform',
      description: 'Complete virtual healthcare solution with video consultations and patient management',
      icon: '🏥',
      features: [
        '300% ROI',
        '200% Patient Reach',
        '60% Less No-Shows',
        '30 Day Trial'
      ],
      href: '/services/healthcare-telemedicine-platform',
      pricing: '$149/month',
      category: 'Micro SaaS'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI & IT Services
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions, micro SaaS development, 
            and enterprise IT services that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive service categories designed to meet all your technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl mb-4 block">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="text-lg font-semibold text-green-600 mb-4">{category.pricing}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Featured Services:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href={category.href}
                    className="w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                  >
                    Explore {category.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered analytics to autonomous business operations, we provide 
              end-to-end technology solutions that deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-blue-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.category === 'Micro SaaS' ? 'bg-orange-100 text-orange-800' :
                    service.category === 'Advanced AI' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-800 font-medium">Starting at:</span>
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  </div>
                </div>
                <a
                  href={service.href}
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group-hover:shadow-lg"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our clients achieve remarkable improvements across key business metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
              <p className="text-gray-700 font-semibold">Efficiency Improvement</p>
              <p className="text-sm text-gray-600 mt-2">Average client performance boost</p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.3B</div>
              <p className="text-gray-700 font-semibold">Cost Savings Generated</p>
              <p className="text-sm text-gray-600 mt-2">Across all client implementations</p>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">156%</div>
              <p className="text-gray-700 font-semibold">Average ROI</p>
              <p className="text-sm text-gray-600 mt-2">Within first year of implementation</p>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Projects Delivered</p>
              <p className="text-sm text-gray-600 mt-2">Successful implementations worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful project delivery and maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Discovery & Analysis</h3>
              <p className="text-gray-600">Comprehensive assessment of your current systems, requirements, and opportunities for improvement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy & Design</h3>
              <p className="text-gray-600">Custom solution design and implementation strategy tailored to your specific business needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">Agile development and deployment with continuous testing and optimization throughout the process.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">Ongoing monitoring, support, and optimization to ensure continued performance and growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and technology solutions can accelerate your growth and drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}