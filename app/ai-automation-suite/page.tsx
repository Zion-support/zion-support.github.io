import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Bot, Settings, Workflow } from 'lucide-react';

const AIAutomationSuitePage: React.FC = () => {
  const automationServices = [
    {
      title: 'AI Workflow Automation',
      description: 'Intelligent business process automation with decision-making capabilities and exception handling.',
      icon: '🔄',
      price: '$399/month',
      features: [
        'Process Discovery & Mapping',
        'RPA Implementation',
        'Workflow Optimization',
        'Decision Automation',
        'Exception Handling',
        'Performance Monitoring',
        'Custom Integrations',
        'Scalable Architecture'
      ],
      benefits: [
        'Automate 80% of repetitive tasks',
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Free up staff for strategic work',
        'Scale operations efficiently'
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'Workflow Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'Workflow Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Automation',
      description: 'Intelligent email processing, categorization, response generation, and follow-up automation.',
      icon: '📧',
      price: '$199/month',
      features: [
        'Email Classification',
        'Auto-response Generation',
        'Sentiment Analysis',
        'Priority Scoring',
        'Follow-up Automation',
        'Template Management',
        'Spam Detection',
        'Analytics Dashboard'
      ],
      benefits: [
        'Process 10,000+ emails daily',
        'Reduce response time by 80%',
        'Improve customer satisfaction',
        'Eliminate manual sorting',
        'Scale email operations'
      ],
      marketPrice: '$500-1,500/month',
      category: 'Email Automation',
      technologies: ['NLP', 'Machine Learning', 'Email APIs', 'Sentiment Analysis', 'Template Engine'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Document Processing',
      description: 'Automated document extraction, classification, and data entry with OCR and intelligent parsing.',
      icon: '📄',
      price: '$299/month',
      features: [
        'OCR & Text Extraction',
        'Document Classification',
        'Data Extraction',
        'Form Processing',
        'Quality Validation',
        'Batch Processing',
        'Custom Templates',
        'Error Handling'
      ],
      benefits: [
        'Process 5,000+ documents daily',
        'Reduce data entry by 90%',
        'Improve accuracy to 99.5%',
        'Eliminate manual processing',
        'Accelerate workflows'
      ],
      marketPrice: '$800-2,500/month',
      category: 'Document Processing',
      technologies: ['OCR', 'Computer Vision', 'NLP', 'Machine Learning', 'Document APIs', 'Data Extraction'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Intelligent customer service with chatbots, ticket routing, and automated resolution.',
      icon: '🎧',
      price: '$499/month',
      features: [
        'Intelligent Chatbots',
        'Ticket Classification',
        'Auto-routing',
        'Knowledge Base Integration',
        'Sentiment Analysis',
        'Escalation Management',
        'Performance Analytics',
        'Multi-channel Support'
      ],
      benefits: [
        'Handle 80% of customer queries',
        'Reduce response time to seconds',
        'Improve customer satisfaction by 50%',
        'Reduce support costs by 60%',
        'Available 24/7/365'
      ],
      marketPrice: '$1,200-3,500/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Chatbots', 'Knowledge Graphs', 'Sentiment Analysis', 'CRM Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Sales Automation',
      description: 'Intelligent lead scoring, follow-up automation, and sales process optimization.',
      icon: '💰',
      price: '$599/month',
      features: [
        'Lead Scoring & Qualification',
        'Follow-up Automation',
        'Pipeline Management',
        'Email Sequences',
        'Meeting Scheduling',
        'Proposal Generation',
        'Performance Analytics',
        'CRM Integration'
      ],
      benefits: [
        'Increase conversion rates by 40%',
        'Reduce sales cycle by 30%',
        'Improve lead quality',
        'Automate follow-ups',
        'Scale sales operations'
      ],
      marketPrice: '$1,500-4,000/month',
      category: 'Sales Automation',
      technologies: ['Machine Learning', 'CRM APIs', 'Email Automation', 'Lead Scoring', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaign automation with personalization and optimization.',
      icon: '📢',
      price: '$399/month',
      features: [
        'Campaign Automation',
        'Personalization Engine',
        'A/B Testing',
        'Audience Segmentation',
        'Content Generation',
        'Performance Optimization',
        'Multi-channel Campaigns',
        'ROI Analytics'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Improve conversion rates by 35%',
        'Reduce marketing costs by 40%',
        'Personalize at scale',
        'Optimize campaigns automatically'
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'Marketing Automation',
      technologies: ['Machine Learning', 'Personalization', 'A/B Testing', 'Marketing APIs', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI HR Automation',
      description: 'Intelligent HR processes including resume screening, interview scheduling, and employee onboarding.',
      icon: '👥',
      price: '$299/month',
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Interview Scheduling',
        'Onboarding Automation',
        'Performance Tracking',
        'Leave Management',
        'Compliance Monitoring',
        'Analytics Dashboard'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Automate routine tasks',
        'Ensure compliance',
        'Enhance employee experience'
      ],
      marketPrice: '$800-2,500/month',
      category: 'HR Automation',
      technologies: ['NLP', 'Machine Learning', 'HR APIs', 'Scheduling Systems', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Automation',
      description: 'Intelligent financial processes including invoice processing, expense management, and reporting.',
      icon: '💳',
      price: '$499/month',
      features: [
        'Invoice Processing',
        'Expense Management',
        'Financial Reporting',
        'Budget Monitoring',
        'Fraud Detection',
        'Compliance Checking',
        'Audit Trail',
        'Real-time Analytics'
      ],
      benefits: [
        'Reduce processing time by 70%',
        'Improve accuracy to 99.9%',
        'Ensure compliance',
        'Detect fraud early',
        'Streamline financial operations'
      ],
      marketPrice: '$1,200-3,500/month',
      category: 'Financial Automation',
      technologies: ['OCR', 'Machine Learning', 'Financial APIs', 'Compliance Tools', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Inventory Automation',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and optimization.',
      icon: '📦',
      price: '$399/month',
      features: [
        'Demand Forecasting',
        'Automated Reordering',
        'Stock Optimization',
        'Supplier Management',
        'Quality Control',
        'Waste Reduction',
        'Cost Optimization',
        'Real-time Monitoring'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Eliminate stockouts by 90%',
        'Reduce waste by 50%',
        'Optimize supplier relationships',
        'Improve cash flow'
      ],
      marketPrice: '$1,000-3,000/month',
      category: 'Inventory Automation',
      technologies: ['Time Series Analysis', 'Machine Learning', 'Supply Chain APIs', 'IoT Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Quality Assurance',
      description: 'Intelligent quality testing and assurance with automated test generation and execution.',
      icon: '🔍',
      price: '$599/month',
      features: [
        'Automated Test Generation',
        'Test Execution',
        'Bug Detection',
        'Performance Testing',
        'Security Testing',
        'Regression Testing',
        'Test Reporting',
        'Continuous Integration'
      ],
      benefits: [
        'Reduce testing time by 80%',
        'Improve test coverage by 90%',
        'Detect bugs early',
        'Ensure quality standards',
        'Accelerate releases'
      ],
      marketPrice: '$1,500-4,000/month',
      category: 'Quality Assurance',
      technologies: ['Test Automation', 'Machine Learning', 'CI/CD', 'Performance Testing', 'Security Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI automation solutions including workflow automation, email processing, document handling, and customer service. Starting at $199/month." />
        <meta name="keywords" content="ai automation, workflow automation, email automation, document processing, customer service automation, sales automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation Suite
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business operations with intelligent automation that learns, adapts, and scales with your needs.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-gray-300">Automation Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$199</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Task Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
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
            Choose Your Automation Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI automation suite today and transform your operations.
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

export default AIAutomationSuitePage;