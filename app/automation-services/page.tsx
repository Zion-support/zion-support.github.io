import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Clock, Shield, Target, Brain, Settings } from 'lucide-react';

const AutomationServicesPage: React.FC = () => {
  const automationServices = [
    {
      title: 'AI-Powered Workflow Automation Platform',
      description: 'Intelligent automation platform that uses AI to automate complex business processes, decision-making, and exception handling across your entire organization.',
      icon: '🤖',
      price: '$399/month',
      features: [
        'AI-powered process discovery',
        'Visual workflow designer',
        'Intelligent decision automation',
        'Exception handling and escalation',
        'Multi-system integration',
        'Real-time monitoring and analytics',
        'Custom automation templates',
        'API and webhook support'
      ],
      benefits: [
        'Reduce process time by 70%',
        'Eliminate human errors',
        'Improve compliance and accuracy',
        'Free up 20+ hours per week'
      ],
      marketPrice: '$600-1500/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'Machine Learning'],
      useCases: [
        'Invoice processing automation',
        'Customer onboarding workflows',
        'Data entry and validation',
        'Report generation and distribution'
      ]
    },
    {
      title: 'Smart Email Marketing Automation',
      description: 'AI-driven email marketing platform that automatically segments audiences, personalizes content, and optimizes send times for maximum engagement and conversions.',
      icon: '📧',
      price: '$199/month',
      features: [
        'AI-powered audience segmentation',
        'Dynamic content personalization',
        'Optimal send time prediction',
        'A/B testing automation',
        'Behavioral trigger campaigns',
        'Advanced analytics and reporting',
        'Multi-channel integration',
        'Compliance and deliverability tools'
      ],
      benefits: [
        'Increase open rates by 35%',
        'Boost conversion rates by 50%',
        'Reduce manual work by 80%',
        'Improve customer engagement'
      ],
      marketPrice: '$300-800/month',
      category: 'Marketing Automation',
      technologies: ['Machine Learning', 'SendGrid', 'Mailchimp', 'Python', 'React'],
      useCases: [
        'Welcome email sequences',
        'Abandoned cart recovery',
        'Re-engagement campaigns',
        'Product recommendation emails'
      ]
    },
    {
      title: 'Intelligent Customer Support Automation',
      description: 'Advanced customer support automation that uses AI to handle inquiries, route tickets, and provide instant responses while maintaining human-like interactions.',
      icon: '🎧',
      price: '$299/month',
      features: [
        'AI-powered ticket routing',
        'Automated response generation',
        'Sentiment analysis and escalation',
        'Knowledge base integration',
        'Multi-language support',
        'Live chat and chatbot integration',
        'Performance analytics',
        'Custom response templates'
      ],
      benefits: [
        'Reduce response time by 90%',
        'Handle 80% of inquiries automatically',
        'Improve customer satisfaction',
        'Reduce support costs by 60%'
      ],
      marketPrice: '$500-1200/month',
      category: 'Customer Service Automation',
      technologies: ['NLP', 'Dialogflow', 'Rasa', 'Python', 'React', 'MongoDB'],
      useCases: [
        'FAQ automation',
        'Ticket categorization',
        'Escalation management',
        'Customer satisfaction tracking'
      ]
    },
    {
      title: 'AI-Powered Data Processing Pipeline',
      description: 'Automated data processing system that cleans, validates, transforms, and analyzes data from multiple sources with intelligent error detection and correction.',
      icon: '🔄',
      price: '$249/month',
      features: [
        'Automated data cleaning',
        'Intelligent data validation',
        'ETL process automation',
        'Data quality monitoring',
        'Anomaly detection and alerts',
        'Automated report generation',
        'Multi-source data integration',
        'Real-time data processing'
      ],
      benefits: [
        'Process data 10x faster',
        'Improve data quality by 95%',
        'Reduce manual errors',
        'Enable real-time insights'
      ],
      marketPrice: '$400-1000/month',
      category: 'Data Automation',
      technologies: ['Apache Airflow', 'Python', 'Pandas', 'PostgreSQL', 'Machine Learning'],
      useCases: [
        'Daily data processing',
        'Report generation',
        'Data quality monitoring',
        'ETL pipeline management'
      ]
    },
    {
      title: 'Smart Inventory Management Automation',
      description: 'Intelligent inventory management system that automatically tracks stock levels, predicts demand, and triggers reorders to optimize inventory and reduce costs.',
      icon: '📦',
      price: '$349/month',
      features: [
        'Automated demand forecasting',
        'Smart reorder point calculation',
        'Supplier performance tracking',
        'Inventory optimization algorithms',
        'Real-time stock monitoring',
        'Automated purchase order generation',
        'Cost analysis and optimization',
        'Integration with ERP systems'
      ],
      benefits: [
        'Reduce stockouts by 60%',
        'Lower inventory costs by 25%',
        'Improve cash flow',
        'Optimize supplier relationships'
      ],
      marketPrice: '$500-1200/month',
      category: 'Inventory Automation',
      technologies: ['Machine Learning', 'Python', 'PostgreSQL', 'React', 'APIs'],
      useCases: [
        'Retail inventory management',
        'Manufacturing material planning',
        'E-commerce stock optimization',
        'Multi-location inventory tracking'
      ]
    },
    {
      title: 'AI-Powered HR Process Automation',
      description: 'Comprehensive HR automation platform that streamlines recruitment, onboarding, performance management, and employee lifecycle processes.',
      icon: '👥',
      price: '$279/month',
      features: [
        'Automated resume screening',
        'Interview scheduling automation',
        'Onboarding workflow management',
        'Performance review automation',
        'Employee data management',
        'Compliance tracking',
        'Benefits administration',
        'Analytics and reporting'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate experience',
        'Streamline HR processes',
        'Ensure compliance'
      ],
      marketPrice: '$450-1000/month',
      category: 'HR Automation',
      technologies: ['NLP', 'Machine Learning', 'Python', 'React', 'PostgreSQL'],
      useCases: [
        'Recruitment automation',
        'Employee onboarding',
        'Performance management',
        'Benefits administration'
      ]
    },
    {
      title: 'Intelligent Financial Process Automation',
      description: 'AI-powered financial automation that handles invoice processing, expense management, financial reporting, and compliance monitoring automatically.',
      icon: '💰',
      price: '$329/month',
      features: [
        'Automated invoice processing',
        'Expense categorization and approval',
        'Financial report generation',
        'Compliance monitoring',
        'Budget tracking and alerts',
        'Payment processing automation',
        'Tax preparation assistance',
        'Audit trail management'
      ],
      benefits: [
        'Reduce financial processing time by 70%',
        'Improve accuracy and compliance',
        'Streamline financial workflows',
        'Enable real-time financial insights'
      ],
      marketPrice: '$500-1200/month',
      category: 'Financial Automation',
      technologies: ['OCR', 'Machine Learning', 'Python', 'React', 'PostgreSQL'],
      useCases: [
        'Invoice processing',
        'Expense management',
        'Financial reporting',
        'Compliance monitoring'
      ]
    },
    {
      title: 'Smart Social Media Management Automation',
      description: 'AI-driven social media automation that creates content, schedules posts, engages with audiences, and optimizes social media performance across all platforms.',
      icon: '📱',
      price: '$179/month',
      features: [
        'AI content generation',
        'Optimal posting time prediction',
        'Hashtag optimization',
        'Engagement automation',
        'Multi-platform management',
        'Performance analytics',
        'Competitor analysis',
        'Crisis management alerts'
      ],
      benefits: [
        'Increase engagement by 45%',
        'Save 20+ hours per week',
        'Grow followers organically',
        'Improve brand presence'
      ],
      marketPrice: '$300-700/month',
      category: 'Social Media Automation',
      technologies: ['NLP', 'Machine Learning', 'Social APIs', 'Python', 'React'],
      useCases: [
        'Content creation and scheduling',
        'Audience engagement',
        'Brand monitoring',
        'Social media analytics'
      ]
    }
  ];

  const categories = [...new Set(automationServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>Automation Services - Zion Tech Group</title>
        <meta name="description" content="AI-powered automation solutions for business processes, marketing, customer service, and operations. Streamline your workflows with intelligent automation." />
        <meta name="keywords" content="business automation, AI automation, workflow automation, process automation, marketing automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered Automation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Automate your business processes with intelligent AI solutions that work 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Start Automation Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Automation Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Intelligent automation that adapts, learns, and improves over time
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Process tasks in seconds that used to take hours</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Operation</h3>
                <p className="text-gray-600">Never stops working, even when you're asleep</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">Learns and improves from every interaction</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security and 99.9% uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Specialized automation tools for {category.toLowerCase()} professionals
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {automationServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.map((useCase, useCaseIndex) => (
                            <span key={useCaseIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Start Free Trial
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our automation experts for a free consultation and custom automation strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AutomationServicesPage;