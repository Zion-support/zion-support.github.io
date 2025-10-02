import React from 'react';
import Link from 'next/link';
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
      title: 'AI-Powered Email Marketing Suite',
      description: 'Revolutionary email marketing platform with AI-driven optimization and automated personalization',
      icon: '📧',
      features: [
        'AI-Driven Subject Line Optimization',
        'Predictive Send Time Optimization',
        'Automated A/B Testing with ML',
        'Advanced Segmentation Algorithms',
        'Real-time Engagement Scoring'
      ],
      href: '/services/ai-email-marketing',
      pricing: '$299 - $1,999/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Healthcare Appointment AI Scheduler',
      description: 'Intelligent scheduling system for healthcare providers with patient preference learning',
      icon: '🏥',
      features: [
        'AI-Powered Appointment Optimization',
        'Patient Preference Learning',
        'Automated Rescheduling & Reminders',
        'Provider Availability Optimization',
        'HIPAA-Compliant Communication'
      ],
      href: '/services/healthcare-scheduler',
      pricing: '$899 - $4,999/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Autonomous Business Process Orchestrator',
      description: 'Revolutionary AI system that autonomously manages and optimizes entire business processes',
      icon: '🤖',
      features: [
        'Autonomous Process Discovery',
        'Self-Optimizing Workflow Execution',
        'Predictive Process Failure Prevention',
        'Dynamic Resource Allocation',
        'Continuous Learning & Adaptation'
      ],
      href: '/services/autonomous-orchestrator',
      pricing: '$4,999 - $24,999/month',
      category: 'Advanced AI'
    },
    {
      title: 'Smart Inventory Management System',
      description: 'AI-driven inventory optimization with demand forecasting and automated reordering',
      icon: '📦',
      features: [
        'Predictive Demand Forecasting',
        'Automated Reorder Point Calculation',
        'Multi-location Inventory Tracking',
        'Supplier Performance Analytics',
        'Real-time Stock Level Monitoring'
      ],
      href: '/services/smart-inventory',
      pricing: '$599 - $3,499/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI Content Moderation Platform',
      description: 'Automated content moderation with real-time filtering and policy enforcement',
      icon: '🛡️',
      features: [
        'Real-time Content Analysis',
        'Multi-language Support',
        'Custom Policy Configuration',
        'Human-in-the-loop Workflows',
        'Compliance Reporting & Analytics'
      ],
      href: '/services/content-moderation',
      pricing: '$799 - $5,999/month',
      category: 'Micro SaaS'
    },
    {
      title: 'Quantum-Enhanced Business Intelligence',
      description: 'Next-generation BI platform leveraging quantum computing principles for advanced analytics',
      icon: '⚛️',
      features: [
        'Quantum-Inspired Optimization Algorithms',
        'Advanced Pattern Recognition',
        'Multi-dimensional Data Analysis',
        'Real-time Predictive Modeling',
        'Quantum-Safe Data Encryption'
      ],
      href: '/services/quantum-bi',
      pricing: '$8,999 - $49,999/month',
      category: 'Advanced AI'
    },
    {
      title: 'Autonomous Cloud Infrastructure Platform',
      description: 'Self-managing cloud infrastructure that automatically scales and optimizes resources',
      icon: '☁️',
      features: [
        'Autonomous Resource Provisioning',
        'Intelligent Cost Optimization',
        'Predictive Infrastructure Maintenance',
        'Multi-cloud Orchestration',
        'Zero-downtime Deployments'
      ],
      href: '/services/autonomous-cloud',
      pricing: '$9,999 - $49,999/month',
      category: 'IT Services'
    },
    {
      title: 'Edge Computing Intelligence Network',
      description: 'Distributed computing platform that brings AI processing to the edge',
      icon: '🌐',
      features: [
        'Edge AI Model Deployment',
        'Distributed Processing Orchestration',
        'Real-time Data Streaming',
        'Edge-to-cloud Synchronization',
        'Autonomous Edge Device Management'
      ],
      href: '/services/edge-computing',
      pricing: '$7,999 - $39,999/month',
      category: 'IT Services'
    },
    {
      title: 'AI-Driven DevOps Automation Suite',
      description: 'Intelligent DevOps platform that automates the entire software delivery pipeline',
      icon: '⚙️',
      features: [
        'Autonomous CI/CD Pipeline Optimization',
        'Intelligent Code Quality Analysis',
        'Predictive Deployment Risk Assessment',
        'Automated Testing & Validation',
        'Self-healing Infrastructure Management'
      ],
      href: '/services/ai-devops',
      pricing: '$5,999 - $29,999/month',
      category: 'IT Services'
    },
    {
      title: 'AI Customer Support Automation',
      description: 'Revolutionary AI-powered customer support with intelligent routing and 24/7 multilingual support',
      icon: '🎧',
      features: [
        'Intelligent Intent Recognition',
        'Real-time Sentiment Analysis',
        'Multilingual Support (50+ languages)',
        'Smart Ticket Routing',
        'Predictive Analytics',
        'Automated Resolution'
      ],
      href: '/services/ai-customer-support-automation',
      pricing: '$499 - $2,999/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI Financial Analysis Platform',
      description: 'Advanced AI-powered financial analysis with real-time market insights and predictive analytics',
      icon: '💰',
      features: [
        'Real-time Market Analysis',
        'Predictive Financial Modeling',
        'Automated Reporting',
        'Portfolio Optimization',
        'Fraud Detection',
        'Advanced Analytics'
      ],
      href: '/services/ai-financial-analysis-platform',
      pricing: '$1,999 - $9,999/month',
      category: 'Advanced AI'
    },
    {
      title: 'AI Project Management Suite',
      description: 'Intelligent project management with AI-powered resource allocation and risk prediction',
      icon: '📋',
      features: [
        'Smart Resource Allocation',
        'Risk Prediction & Mitigation',
        'Automated Workflow Optimization',
        'Predictive Analytics',
        'Intelligent Collaboration',
        'Performance Intelligence'
      ],
      href: '/services/ai-project-management-suite',
      pricing: '$299 - $1,999/month',
      category: 'Micro SaaS'
    },
    {
      title: 'AI HR Recruitment Platform',
      description: 'Revolutionary AI-powered recruitment with intelligent candidate matching and bias-free hiring',
      icon: '👥',
      features: [
        'Smart Candidate Matching',
        'Automated Screening',
        'Bias-Free Hiring',
        'AI-Powered Interviews',
        'Predictive Analytics',
        'Streamlined Workflow'
      ],
      href: '/services/ai-hr-recruitment-platform',
      pricing: '$399 - $2,499/month',
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
                  
                  <Link 
                    href={category.href}
                    className="w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                  >
                    Explore {category.title}
                  </Link>
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
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors group-hover:shadow-lg"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
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