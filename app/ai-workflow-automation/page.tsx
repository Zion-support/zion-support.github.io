import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'AI Business Process Automation Suite',
      description: 'Intelligent automation platform that learns from your workflows and automates complex business processes with minimal human intervention.',
      icon: '🤖',
      price: '$399/month',
      features: [
        'Process discovery and mapping',
        'Intelligent workflow design',
        'RPA bot creation',
        'Exception handling',
        'Process optimization',
        'Integration with 500+ apps',
        'Analytics and reporting',
        'Change management'
      ],
      benefits: [
        'Reduce process time by 80%',
        'Eliminate human errors',
        'Save 40+ hours per week',
        'Scale operations efficiently'
      ],
      marketPrice: '$600-1,200/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Python', 'Node.js', 'APIs', 'Machine Learning'],
      useCases: ['Finance', 'HR', 'Customer Service', 'Sales Operations']
    },
    {
      title: 'AI Document Processing Automation',
      description: 'Automated document handling system that extracts, processes, and routes documents using AI-powered OCR and intelligent classification.',
      icon: '📄',
      price: '$299/month',
      features: [
        'Intelligent document capture',
        'OCR and data extraction',
        'Document classification',
        'Workflow routing',
        'Approval automation',
        'Compliance tracking',
        'Version control',
        'Audit trails'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual data entry by 95%',
        'Improve accuracy to 99.5%',
        'Ensure compliance automatically'
      ],
      marketPrice: '$500-1,000/month',
      category: 'Document Automation',
      technologies: ['Tesseract', 'AWS Textract', 'Python', 'React', 'PostgreSQL', 'Workflow Engine'],
      useCases: ['Legal', 'Insurance', 'Healthcare', 'Real Estate']
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Comprehensive customer service automation with intelligent chatbots, ticket routing, and automated resolution workflows.',
      icon: '💬',
      price: '$199/month',
      features: [
        'Intelligent chatbot creation',
        'Ticket classification and routing',
        'Automated responses',
        'Escalation management',
        'Knowledge base integration',
        'Multi-channel support',
        'Sentiment analysis',
        'Performance analytics'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Increase customer satisfaction',
        'Provide 24/7 support'
      ],
      marketPrice: '$300-600/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Dialogflow', 'Rasa', 'Node.js', 'MongoDB', 'AI/ML'],
      useCases: ['E-commerce', 'SaaS', 'Retail', 'Financial Services']
    },
    {
      title: 'AI Marketing Automation Platform',
      description: 'Advanced marketing automation with AI-powered campaign optimization, lead scoring, and personalized customer journeys.',
      icon: '📈',
      price: '$249/month',
      features: [
        'Campaign automation',
        'Lead scoring and nurturing',
        'Personalization engine',
        'A/B testing automation',
        'Email marketing automation',
        'Social media automation',
        'Analytics and reporting',
        'ROI optimization'
      ],
      benefits: [
        'Increase conversion rates by 45%',
        'Reduce marketing costs by 35%',
        'Improve lead quality',
        'Scale marketing efforts'
      ],
      marketPrice: '$400-800/month',
      category: 'Marketing Automation',
      technologies: ['HubSpot', 'Marketo', 'Python', 'Machine Learning', 'React', 'APIs'],
      useCases: ['B2B SaaS', 'E-commerce', 'Lead Generation', 'Customer Retention']
    },
    {
      title: 'AI HR Workflow Automation',
      description: 'Complete HR automation solution covering recruitment, onboarding, performance management, and employee lifecycle management.',
      icon: '👥',
      price: '$179/month',
      features: [
        'Recruitment automation',
        'Onboarding workflows',
        'Performance review automation',
        'Leave management',
        'Payroll integration',
        'Compliance tracking',
        'Employee self-service',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce HR workload by 70%',
        'Improve employee experience',
        'Ensure compliance',
        'Streamline processes'
      ],
      marketPrice: '$300-600/month',
      category: 'HR Automation',
      technologies: ['Workday', 'BambooHR', 'Python', 'React', 'PostgreSQL', 'AI/ML'],
      useCases: ['Mid-size Companies', 'Enterprise', 'Remote Teams', 'Growing Startups']
    },
    {
      title: 'AI Financial Process Automation',
      description: 'Automated financial processes including invoice processing, expense management, reconciliation, and financial reporting.',
      icon: '💰',
      price: '$349/month',
      features: [
        'Invoice processing automation',
        'Expense management',
        'Bank reconciliation',
        'Financial reporting',
        'Budget tracking',
        'Compliance monitoring',
        'Audit preparation',
        'Real-time analytics'
      ],
      benefits: [
        'Reduce financial processing time by 85%',
        'Improve accuracy and compliance',
        'Lower operational costs',
        'Enable real-time insights'
      ],
      marketPrice: '$500-1,200/month',
      category: 'Financial Automation',
      technologies: ['QuickBooks', 'Xero', 'Python', 'Machine Learning', 'React', 'PostgreSQL'],
      useCases: ['Accounting Firms', 'Small Business', 'Enterprise Finance', 'Non-profits']
    }
  ];

  const automationFeatures = [
    {
      title: 'No-Code Automation',
      description: 'Build complex workflows without coding using our visual designer',
      icon: <Settings className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'AI-Powered Intelligence',
      description: 'Smart automation that learns and adapts to your business needs',
      icon: <Bot className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with 500+ popular business applications',
      icon: <Workflow className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Real-Time Analytics',
      description: 'Monitor and optimize your automated processes in real-time',
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Process Discovery',
      description: 'AI analyzes your current workflows and identifies automation opportunities'
    },
    {
      step: '2',
      title: 'Design & Build',
      description: 'Create automated workflows using our no-code visual designer'
    },
    {
      step: '3',
      title: 'Test & Deploy',
      description: 'Test automation in a safe environment and deploy to production'
    },
    {
      step: '4',
      title: 'Monitor & Optimize',
      description: 'Continuously monitor performance and optimize for better results'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Transform your business with intelligent automation that works 24/7 to streamline processes and boost productivity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                ✉️ Get Free Automation Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Automation Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 4-step process to transform your business with AI automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Automation Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered automation for every business function
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  Automate Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Automation Platform?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology with enterprise-grade security and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Our clients see significant improvements in efficiency and cost savings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-gray-600">Average Process Time Reduction</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5M</div>
              <div className="text-gray-600">Average Annual Savings</div>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Error Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get a free automation audit and discover how much you can save
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-green-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWorkflowAutomationPage;