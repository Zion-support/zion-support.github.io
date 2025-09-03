import React from 'react';
import Layout from '../../components/Layout';

const MicroSaaSPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud Cost Guard (FinOps Assistant)',
      description: 'Intelligent cloud cost management with anomaly detection, rightsizing recommendations, and budget guardrails across AWS, Azure, and GCP.',
      features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Alerts', 'Cost Forecasting'],
      pricing: '$299–$1,499/month',
      icon: '💰'
    },
    {
      title: 'LLM Evaluation & Safety Suite',
      description: 'Comprehensive evaluation platform for large language models with prompt testing, bias detection, and safety guardrails.',
      features: ['Prompt Evaluation', 'Bias Detection', 'Jailbreak Testing', 'Safety Policies'],
      pricing: '$799–$3,500/month',
      icon: '🤖'
    },
    {
      title: 'Customer Feedback & NPS Micro-App',
      description: 'Embedded customer feedback system with automated surveys, sentiment analysis, and intelligent issue routing.',
      features: ['Embedded Surveys', 'Sentiment Analysis', 'NPS Tracking', 'Issue Routing'],
      pricing: '$149–$799/month',
      icon: '📊'
    },
    {
      title: 'API Rate Limiting & Analytics',
      description: 'Intelligent API management with rate limiting, usage analytics, and performance monitoring for optimal API performance.',
      features: ['Rate Limiting', 'Usage Analytics', 'Performance Monitoring', 'Cost Optimization'],
      pricing: '$199–$999/month',
      icon: '⚡'
    },
    {
      title: 'Social Media Scheduler',
      description: 'AI-powered social media management with content scheduling, analytics, and engagement optimization across platforms.',
      features: ['Content Scheduling', 'Analytics Dashboard', 'Engagement Tracking', 'AI Content Suggestions'],
      pricing: '$99–$499/month',
      icon: '📱'
    },
    {
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with segmentation, automation workflows, and detailed analytics for better engagement.',
      features: ['Email Automation', 'Segmentation', 'A/B Testing', 'Analytics'],
      pricing: '$149–$699/month',
      icon: '📧'
    },
    {
      title: 'Event Management Dashboard',
      description: 'Comprehensive event management platform with ticket sales, attendee management, scheduling, and real-time analytics.',
      features: ['Ticket Management', 'Attendee Tracking', 'Event Scheduling', 'Real-time Analytics'],
      pricing: '$199–$999/month',
      icon: '🎪'
    },
    {
      title: 'Customer Support & Helpdesk Platform',
      description: 'Complete customer support solution with ticket management, knowledge base, live chat, and AI-powered chatbots.',
      features: ['Ticket Management', 'Knowledge Base', 'Live Chat', 'AI Chatbots'],
      pricing: '$99–$599/month',
      icon: '🎧'
    },
    {
      title: 'Project Management & Collaboration',
      description: 'Streamlined project management tool with task tracking, team collaboration, time tracking, and resource management.',
      features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Resource Planning'],
      pricing: '$79–$399/month',
      icon: '📋'
    },
    {
      title: 'Invoice & Billing Management',
      description: 'Automated invoicing and billing system with payment processing, expense tracking, and financial reporting.',
      features: ['Automated Invoicing', 'Payment Processing', 'Expense Tracking', 'Financial Reports'],
      pricing: '$49–$299/month',
      icon: '💰'
    },
    {
      title: 'Social Media Analytics & Management',
      description: 'Comprehensive social media management platform with scheduling, analytics, engagement tracking, and competitor analysis.',
      features: ['Content Scheduling', 'Analytics Dashboard', 'Engagement Tracking', 'Competitor Analysis'],
      pricing: '$99–$499/month',
      icon: '📱'
    },
    {
      title: 'Lead Generation & CRM',
      description: 'Intelligent lead generation and customer relationship management system with automated follow-ups and sales pipeline tracking.',
      features: ['Lead Capture', 'Automated Follow-ups', 'Sales Pipeline', 'Contact Management'],
      pricing: '$149–$799/month',
      icon: '🎯'
    },
    {
      title: 'Inventory & Stock Management',
      description: 'Smart inventory management system with real-time tracking, automated reordering, and supply chain optimization.',
      features: ['Real-time Tracking', 'Automated Reordering', 'Supply Chain Analytics', 'Cost Optimization'],
      pricing: '$199–$999/month',
      icon: '📦'
    },
    {
      title: 'Employee Time & Attendance',
      description: 'Comprehensive time tracking and attendance management system with payroll integration and productivity analytics.',
      features: ['Time Tracking', 'Attendance Management', 'Payroll Integration', 'Productivity Analytics'],
      pricing: '$59–$299/month',
      icon: '⏰'
    },
    {
      title: 'Website Performance Monitor',
      description: 'Advanced website monitoring and performance optimization tool with uptime tracking, speed analysis, and SEO insights.',
      features: ['Uptime Monitoring', 'Speed Analysis', 'SEO Insights', 'Performance Alerts'],
      pricing: '$29–$199/month',
      icon: '📊'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Idea Validation',
      description: 'Market research, competitor analysis, and user interviews to validate your SaaS concept and identify market opportunities.'
    },
    {
      step: '02',
      title: 'MVP Development',
      description: 'Rapid development of a minimum viable product with core features to test market fit and gather user feedback.'
    },
    {
      step: '03',
      title: 'Payment Integration',
      description: 'Seamless integration of payment systems, subscription management, and billing automation for recurring revenue.'
    },
    {
      step: '04',
      title: 'Analytics & Monitoring',
      description: 'Comprehensive analytics dashboard, user behavior tracking, and performance monitoring for data-driven decisions.'
    },
    {
      step: '05',
      title: 'Scaling & Optimization',
      description: 'Infrastructure scaling, performance optimization, and feature enhancements based on user feedback and growth metrics.'
    }
  ];

  return (
    <Layout 
      title="Micro SaaS Development - Zion Tech Group" 
      description="Build and launch successful micro SaaS applications with our comprehensive development services. From idea validation to scaling, we help you succeed."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Turn your innovative ideas into successful micro SaaS applications. We provide end-to-end development services from concept to launch and scaling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your SaaS Journey
              </a>
              <a 
                href="/pricing" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Micro SaaS Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    <a 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Development Process</h2>
            <div className="space-y-8">
              {developmentProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Micro SaaS Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Time to Market</h3>
                <p className="text-gray-600">Rapid development and deployment to get your SaaS to market quickly and start generating revenue.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue Focused</h3>
                <p className="text-gray-600">Built-in monetization strategies and payment systems to ensure your SaaS generates sustainable revenue.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
                <p className="text-gray-600">Cloud-native architecture designed to scale with your user base and business growth.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's turn your innovative idea into a successful micro SaaS application. Our expert team is ready to help you from concept to launch.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Building Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicroSaaSPage;