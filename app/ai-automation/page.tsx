import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Zap, Bot, Settings, BarChart, Users } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Intelligent Process Automation (IPA)',
      description: 'Advanced AI-powered automation that goes beyond traditional RPA to handle complex decision-making and exception handling.',
      icon: '🤖',
      price: '$1,500/month',
      features: [
        'Process Discovery & Mapping',
        'AI Decision Making',
        'Exception Handling',
        'Workflow Optimization',
        'Real-time Monitoring',
        'Self-healing Processes'
      ],
      benefits: [
        'Automate 90% of complex processes',
        'Reduce processing time by 80%',
        'Improve accuracy to 99.9%',
        'Handle exceptions automatically'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'AI/ML', 'APIs', 'Workflow Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Document Processing',
      description: 'Intelligent document extraction, classification, and processing with 99%+ accuracy using advanced OCR and NLP.',
      icon: '📄',
      price: '$1,200/month',
      features: [
        'Intelligent OCR',
        'Document Classification',
        'Data Extraction',
        'Form Processing',
        'Quality Validation',
        'Batch Processing'
      ],
      benefits: [
        'Process 10,000+ documents/hour',
        'Reduce manual data entry by 95%',
        'Improve accuracy to 99.5%',
        'Handle any document format'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Document AI',
      technologies: ['Tesseract OCR', 'AWS Textract', 'Azure Form Recognizer', 'NLP', 'Computer Vision', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Comprehensive customer service automation with intelligent chatbots, ticket routing, and sentiment analysis.',
      icon: '💬',
      price: '$1,800/month',
      features: [
        'Intelligent Chatbots',
        'Ticket Classification',
        'Sentiment Analysis',
        'Auto-escalation',
        'Knowledge Base Integration',
        'Multi-language Support'
      ],
      benefits: [
        'Handle 80% of customer queries',
        'Reduce response time to seconds',
        'Improve customer satisfaction by 40%',
        'Available 24/7/365'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Customer Service',
      technologies: ['Dialogflow', 'Microsoft Bot Framework', 'NLP', 'Sentiment Analysis', 'APIs', 'CRM Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Sales Process Automation',
      description: 'Intelligent sales automation with lead scoring, follow-up sequences, and pipeline optimization.',
      icon: '📈',
      price: '$2,200/month',
      features: [
        'Lead Scoring & Qualification',
        'Automated Follow-ups',
        'Pipeline Optimization',
        'Email Sequences',
        'Meeting Scheduling',
        'ROI Tracking'
      ],
      benefits: [
        'Increase conversion rates by 60%',
        'Reduce sales cycle by 40%',
        'Improve lead quality by 80%',
        'Automate 70% of sales tasks'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Sales Automation',
      technologies: ['HubSpot', 'Salesforce', 'Pardot', 'AI/ML', 'Email APIs', 'CRM Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation with personalized campaigns, content generation, and performance optimization.',
      icon: '📢',
      price: '$1,600/month',
      features: [
        'Personalized Campaigns',
        'Content Generation',
        'A/B Testing',
        'Audience Segmentation',
        'Performance Analytics',
        'Multi-channel Orchestration'
      ],
      benefits: [
        'Increase engagement by 50%',
        'Reduce campaign setup time by 70%',
        'Improve ROI by 300%',
        'Personalize at scale'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Marketing AI',
      technologies: ['Marketo', 'Pardot', 'HubSpot', 'AI/ML', 'Content APIs', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Process Automation',
      description: 'Intelligent financial automation for invoicing, expense management, and financial reporting.',
      icon: '💰',
      price: '$1,900/month',
      features: [
        'Automated Invoicing',
        'Expense Categorization',
        'Financial Reporting',
        'Budget Monitoring',
        'Compliance Checking',
        'Audit Trail Generation'
      ],
      benefits: [
        'Reduce financial processing time by 85%',
        'Improve accuracy to 99.8%',
        'Ensure compliance automatically',
        'Generate real-time reports'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Financial AI',
      technologies: ['QuickBooks API', 'Xero API', 'Financial ML', 'OCR', 'Compliance APIs', 'Reporting Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI HR Process Automation',
      description: 'Comprehensive HR automation with resume screening, interview scheduling, and employee onboarding.',
      icon: '👥',
      price: '$1,400/month',
      features: [
        'Resume Screening',
        'Interview Scheduling',
        'Onboarding Automation',
        'Performance Tracking',
        'Leave Management',
        'Compliance Monitoring'
      ],
      benefits: [
        'Reduce hiring time by 60%',
        'Improve candidate quality by 70%',
        'Automate 80% of HR tasks',
        'Ensure compliance automatically'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'HR Automation',
      technologies: ['ATS Integration', 'NLP', 'Scheduling APIs', 'HR Systems', 'AI/ML', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Supply Chain Automation',
      description: 'Intelligent supply chain optimization with demand forecasting, inventory management, and logistics automation.',
      icon: '🚚',
      price: '$2,500/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Supplier Management',
        'Logistics Planning',
        'Quality Control',
        'Risk Assessment'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve forecast accuracy by 80%',
        'Optimize logistics routes',
        'Prevent stockouts and overstock'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'Supply Chain AI',
      technologies: ['Demand Planning', 'Inventory ML', 'Logistics APIs', 'ERP Integration', 'IoT Sensors', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Quality Assurance Automation',
      description: 'Intelligent QA automation with automated testing, bug detection, and quality monitoring.',
      icon: '🔍',
      price: '$1,300/month',
      features: [
        'Automated Testing',
        'Bug Detection',
        'Performance Monitoring',
        'Code Quality Analysis',
        'Regression Testing',
        'Test Case Generation'
      ],
      benefits: [
        'Reduce testing time by 75%',
        'Improve bug detection by 90%',
        'Ensure consistent quality',
        'Enable continuous testing'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'QA Automation',
      technologies: ['Selenium', 'Cypress', 'Jest', 'AI Testing', 'Performance Tools', 'CI/CD'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Compliance Automation',
      description: 'Intelligent compliance monitoring and reporting with automated risk assessment and regulatory updates.',
      icon: '⚖️',
      price: '$2,800/month',
      features: [
        'Compliance Monitoring',
        'Risk Assessment',
        'Regulatory Updates',
        'Audit Preparation',
        'Policy Management',
        'Reporting Automation'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit preparation time by 80%',
        'Automate risk assessment',
        'Stay updated with regulations'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Compliance AI',
      technologies: ['Regulatory APIs', 'Risk ML', 'Compliance Tools', 'Document AI', 'Reporting Systems', 'Audit Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Intelligent process automation with AI-powered decision making, exception handling, and workflow optimization. Transform your business operations." />
        <meta name="keywords" content="ai automation, process automation, intelligent automation, workflow automation, business process automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation that goes beyond traditional RPA to handle complex decision-making and exception handling.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Process Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Time Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
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

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Automation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Decision Making</h3>
              <p className="text-gray-300">AI-powered automation that can make complex decisions and handle exceptions without human intervention.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Self-Healing Processes</h3>
              <p className="text-gray-300">Automated processes that can detect and fix issues automatically, ensuring continuous operation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Continuous Optimization</h3>
              <p className="text-gray-300">AI systems that learn and improve over time, optimizing processes for maximum efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI Automation Solutions
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
            Transform your operations with intelligent AI automation. Get started today and see immediate results.
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