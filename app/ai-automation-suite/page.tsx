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
      price: '$249/month',
      features: [
        'Intelligent Chatbots',
        'Ticket Classification',
        'Auto-routing',
        'Sentiment Analysis',
        'Knowledge Base Integration',
        'Multi-language Support',
        'Escalation Management',
        'Performance Analytics'
      ],
      benefits: [
        'Handle 80% of inquiries automatically',
        'Reduce response time by 90%',
        'Improve customer satisfaction',
        '24/7 availability',
        'Scale support operations'
      ],
      marketPrice: '$600-2,000/month',
      category: 'Customer Service',
      technologies: ['NLP', 'Chatbots', 'Machine Learning', 'APIs', 'Knowledge Graphs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Sales Automation',
      description: 'Automated lead scoring, follow-up, and sales process optimization with AI insights.',
      icon: '💰',
      price: '$349/month',
      features: [
        'Lead Scoring & Qualification',
        'Automated Follow-ups',
        'Sales Forecasting',
        'Pipeline Management',
        'Email Sequences',
        'CRM Integration',
        'Performance Tracking',
        'Custom Workflows'
      ],
      benefits: [
        'Increase conversion by 40%',
        'Reduce sales cycle by 30%',
        'Improve lead quality',
        'Automate follow-ups',
        'Scale sales operations'
      ],
      marketPrice: '$800-3,000/month',
      category: 'Sales Automation',
      technologies: ['CRM APIs', 'Machine Learning', 'Email Marketing', 'Analytics', 'Workflow Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns, content generation, and audience targeting automation.',
      icon: '📈',
      price: '$299/month',
      features: [
        'Content Generation',
        'Audience Segmentation',
        'Campaign Optimization',
        'A/B Testing',
        'Social Media Automation',
        'Email Marketing',
        'Analytics & Reporting',
        'Personalization'
      ],
      benefits: [
        'Increase engagement by 60%',
        'Reduce campaign time by 70%',
        'Improve targeting accuracy',
        'Scale content creation',
        'Optimize ROI'
      ],
      marketPrice: '$700-2,500/month',
      category: 'Marketing Automation',
      technologies: ['AI Content Generation', 'Marketing APIs', 'Analytics', 'Social Media APIs', 'Email Platforms'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI HR Automation',
      description: 'Automated recruitment, onboarding, and HR processes with intelligent candidate matching.',
      icon: '👥',
      price: '$199/month',
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Interview Scheduling',
        'Onboarding Automation',
        'Performance Tracking',
        'Employee Analytics',
        'Compliance Monitoring',
        'Workflow Management'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Streamline onboarding',
        'Ensure compliance',
        'Scale HR operations'
      ],
      marketPrice: '$500-2,000/month',
      category: 'HR Automation',
      technologies: ['ATS Integration', 'NLP', 'Machine Learning', 'Workflow Engines', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Automation',
      description: 'Automated financial processes, invoice processing, and expense management with AI insights.',
      icon: '💳',
      price: '$399/month',
      features: [
        'Invoice Processing',
        'Expense Management',
        'Financial Reporting',
        'Budget Tracking',
        'Fraud Detection',
        'Compliance Monitoring',
        'Cash Flow Analysis',
        'Automated Reconciliation'
      ],
      benefits: [
        'Reduce processing time by 80%',
        'Improve accuracy to 99.8%',
        'Detect fraud early',
        'Ensure compliance',
        'Scale financial operations'
      ],
      marketPrice: '$1,000-4,000/month',
      category: 'Financial Automation',
      technologies: ['OCR', 'Machine Learning', 'Financial APIs', 'Blockchain', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Inventory Automation',
      description: 'Intelligent inventory management, demand forecasting, and supply chain optimization.',
      icon: '📦',
      price: '$299/month',
      features: [
        'Demand Forecasting',
        'Inventory Optimization',
        'Reorder Automation',
        'Supplier Management',
        'Quality Control',
        'Cost Analysis',
        'Performance Monitoring',
        'Integration Management'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve stock accuracy',
        'Prevent stockouts',
        'Optimize supplier relationships',
        'Scale inventory operations'
      ],
      marketPrice: '$800-3,000/month',
      category: 'Inventory Management',
      technologies: ['Machine Learning', 'IoT', 'Supply Chain APIs', 'Analytics', 'Blockchain'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Quality Assurance',
      description: 'Automated testing, quality control, and defect detection with intelligent analysis.',
      icon: '🔍',
      price: '$249/month',
      features: [
        'Automated Testing',
        'Defect Detection',
        'Quality Metrics',
        'Performance Monitoring',
        'Regression Testing',
        'Code Analysis',
        'Compliance Checking',
        'Reporting & Analytics'
      ],
      benefits: [
        'Reduce testing time by 70%',
        'Improve defect detection',
        'Ensure quality standards',
        'Scale testing operations',
        'Reduce manual effort'
      ],
      marketPrice: '$600-2,500/month',
      category: 'Quality Assurance',
      technologies: ['Testing Frameworks', 'Machine Learning', 'APIs', 'Analytics', 'CI/CD'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Suite - Complete Business Automation Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI automation suite with 10+ specialized solutions. Transform your business with intelligent automation across all departments." />
        <meta name="keywords" content="AI automation suite, business automation, workflow automation, RPA, intelligent automation, process optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">Complete Automation Suite</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Automation Suite
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your entire business with our comprehensive AI automation suite. 
                10+ specialized solutions covering every aspect of your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                  Get Started Today
                </button>
                <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                  View All Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Automation Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI automation solutions designed for every business need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-700/50">
                    <p className="text-xs text-gray-400 text-center mb-3">{service.contactInfo}</p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI automation suite and see immediate results. 
              Contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now: +1 302 464 0950
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                <Mail className="w-5 h-5 inline mr-2" />
                Email Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomationSuitePage;