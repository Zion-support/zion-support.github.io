import React from 'react';
import Head from 'next/head';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Bot, Settings, BarChart } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Intelligent Process Automation (IPA)',
      description: 'Advanced automation that combines RPA with AI decision-making capabilities for complex business processes.',
      icon: '🤖',
      price: '$1,200/month',
      features: [
        'Process Discovery & Mapping',
        'AI-Powered Decision Making',
        'Exception Handling',
        'Workflow Optimization',
        'Real-time Monitoring',
        'Self-Healing Automation'
      ],
      benefits: [
        'Automate 85% of complex processes',
        'Reduce processing time by 75%',
        'Improve accuracy to 99.5%',
        'Handle exceptions automatically'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'AI/ML', 'APIs', 'Workflow Engines']
    },
    {
      title: 'AI-Powered Document Processing',
      description: 'Intelligent document extraction, classification, and processing with natural language understanding.',
      icon: '📄',
      price: '$800/month',
      features: [
        'Document Classification',
        'Data Extraction',
        'OCR & Text Recognition',
        'Form Processing',
        'Document Routing',
        'Quality Validation'
      ],
      benefits: [
        'Process 10,000+ documents/day',
        'Reduce manual work by 90%',
        'Improve accuracy by 95%',
        'Enable real-time processing'
      ],
      marketPrice: '$1,500-3,500/month',
      category: 'Document AI',
      technologies: ['OCR', 'NLP', 'Computer Vision', 'Machine Learning', 'APIs', 'Cloud Storage']
    },
    {
      title: 'Smart Email Automation',
      description: 'Intelligent email processing, routing, and response generation with sentiment analysis.',
      icon: '📧',
      price: '$600/month',
      features: [
        'Email Classification',
        'Auto-Response Generation',
        'Sentiment Analysis',
        'Priority Scoring',
        'Smart Routing',
        'Follow-up Automation'
      ],
      benefits: [
        'Handle 95% of emails automatically',
        'Reduce response time by 80%',
        'Improve customer satisfaction',
        'Enable 24/7 email support'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Email AI',
      technologies: ['NLP', 'Sentiment Analysis', 'Email APIs', 'Machine Learning', 'Automation Tools']
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Intelligent customer service with chatbots, ticket routing, and automated resolution.',
      icon: '🎧',
      price: '$1,000/month',
      features: [
        'Intelligent Chatbots',
        'Ticket Classification',
        'Auto-Resolution',
        'Escalation Management',
        'Knowledge Base Integration',
        'Performance Analytics'
      ],
      benefits: [
        'Resolve 80% of issues automatically',
        'Reduce response time to seconds',
        'Improve customer satisfaction by 60%',
        'Available 24/7/365'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Customer Service AI',
      technologies: ['NLP', 'Chatbots', 'Knowledge Graphs', 'APIs', 'Analytics', 'CRM Integration']
    },
    {
      title: 'AI Sales Automation',
      description: 'Intelligent sales process automation with lead scoring, follow-up, and closing assistance.',
      icon: '💰',
      price: '$1,400/month',
      features: [
        'Lead Scoring & Qualification',
        'Automated Follow-ups',
        'Sales Forecasting',
        'Pipeline Management',
        'Proposal Generation',
        'Contract Automation'
      ],
      benefits: [
        'Increase conversion by 40%',
        'Reduce sales cycle by 50%',
        'Improve lead quality by 70%',
        'Automate 90% of sales tasks'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Sales AI',
      technologies: ['CRM Integration', 'Predictive Analytics', 'NLP', 'Machine Learning', 'APIs', 'Automation Tools']
    },
    {
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaign automation with personalization and optimization.',
      icon: '📢',
      price: '$1,100/month',
      features: [
        'Campaign Automation',
        'Personalization Engine',
        'A/B Testing',
        'Lead Nurturing',
        'Content Generation',
        'Performance Optimization'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Improve conversion by 45%',
        'Reduce campaign costs by 30%',
        'Personalize at scale'
      ],
      marketPrice: '$2,000-4,500/month',
      category: 'Marketing AI',
      technologies: ['Marketing Automation', 'Personalization', 'A/B Testing', 'Analytics', 'APIs', 'Machine Learning']
    },
    {
      title: 'AI Financial Automation',
      description: 'Intelligent financial process automation with fraud detection and compliance monitoring.',
      icon: '💳',
      price: '$1,600/month',
      features: [
        'Invoice Processing',
        'Fraud Detection',
        'Compliance Monitoring',
        'Financial Reporting',
        'Risk Assessment',
        'Audit Automation'
      ],
      benefits: [
        'Process 95% of invoices automatically',
        'Detect fraud with 99.9% accuracy',
        'Reduce compliance costs by 60%',
        'Enable real-time monitoring'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Financial AI',
      technologies: ['Financial APIs', 'Fraud Detection', 'Compliance Tools', 'Machine Learning', 'Blockchain', 'Analytics']
    },
    {
      title: 'AI HR Automation',
      description: 'Intelligent human resources automation with recruitment, onboarding, and performance management.',
      icon: '👥',
      price: '$1,300/month',
      features: [
        'Resume Screening',
        'Interview Scheduling',
        'Onboarding Automation',
        'Performance Tracking',
        'Employee Analytics',
        'Compliance Management'
      ],
      benefits: [
        'Reduce hiring time by 70%',
        'Improve candidate quality by 50%',
        'Automate 85% of HR tasks',
        'Enhance employee experience'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'HR AI',
      technologies: ['HRIS Integration', 'NLP', 'Machine Learning', 'Analytics', 'APIs', 'Automation Tools']
    },
    {
      title: 'AI Supply Chain Automation',
      description: 'Intelligent supply chain optimization with demand forecasting and inventory management.',
      icon: '📦',
      price: '$1,800/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Supplier Management',
        'Logistics Optimization',
        'Risk Assessment',
        'Quality Control'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve forecast accuracy by 60%',
        'Optimize supply chain efficiency',
        'Minimize supply disruptions'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Supply Chain AI',
      technologies: ['Supply Chain APIs', 'Predictive Analytics', 'IoT', 'Machine Learning', 'Optimization', 'Blockchain']
    },
    {
      title: 'AI Quality Assurance Automation',
      description: 'Intelligent quality control and testing automation with predictive quality management.',
      icon: '🔍',
      price: '$1,500/month',
      features: [
        'Automated Testing',
        'Quality Prediction',
        'Defect Detection',
        'Performance Monitoring',
        'Compliance Checking',
        'Continuous Improvement'
      ],
      benefits: [
        'Improve quality by 80%',
        'Reduce testing time by 70%',
        'Prevent defects proactively',
        'Ensure compliance automatically'
      ],
      marketPrice: '$2,800-5,500/month',
      category: 'Quality AI',
      technologies: ['Testing Tools', 'Computer Vision', 'Machine Learning', 'Analytics', 'APIs', 'IoT']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Intelligent process automation with AI decision-making capabilities. Automate 85% of business processes with our AI automation solutions starting at $600/month." />
        <meta name="keywords" content="ai automation, process automation, intelligent automation, rpa, business process automation, workflow automation" />
      </Head>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation that combines AI decision-making with process optimization for maximum efficiency.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
              <div className="text-gray-300">Process Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$600</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.5%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Operation</div>
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
                    Contact: kleber@ziontechgroup.com | +1 302 464 0950
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
            Get started with our AI automation services today and transform your business operations.
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

export default AIAutomationPage;