import React from 'react';
import Layout from '../../components/Layout';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Customer Support Automation',
      description: 'Transform your customer service with intelligent chatbots, automated triage, and human-in-the-loop escalation systems.',
      features: ['24/7 Chatbot Support', 'Intelligent Triage', 'Knowledge Base Integration', 'Human Escalation'],
      pricing: '$2k–$8k setup, $0.02–$0.2/session',
      icon: '🤖'
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Leverage machine learning to predict trends, forecast demand, and optimize business decisions with data-driven insights.',
      features: ['Demand Forecasting', 'Revenue Prediction', 'Churn Analysis', 'Risk Assessment'],
      pricing: '$4k–$20k project',
      icon: '📊'
    },
    {
      title: 'GenAI Content & SEO Automation',
      description: 'Create high-quality content at scale with AI-powered writing, SEO optimization, and content strategy automation.',
      features: ['Content Generation', 'SEO Optimization', 'Content Clustering', 'Internal Linking'],
      pricing: '$1k–$6k/month',
      icon: '✍️'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Implement image recognition, object detection, and visual analysis systems for various business applications.',
      features: ['Image Recognition', 'Object Detection', 'Quality Control', 'Visual Analytics'],
      pricing: '$5k–$25k project',
      icon: '👁️'
    },
    {
      title: 'Natural Language Processing',
      description: 'Extract insights from text data, automate document processing, and build intelligent text analysis systems.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Document Processing', 'Language Translation'],
      pricing: '$3k–$15k project',
      icon: '💬'
    },
    {
      title: 'AI Model Development & Training',
      description: 'Custom AI model development, fine-tuning, and deployment for specific business use cases and requirements.',
      features: ['Custom Model Training', 'Fine-tuning', 'Model Deployment', 'Performance Optimization'],
      pricing: '$10k–$50k project',
      icon: '🧠'
    },
    {
      title: 'AI-Powered Email Responder',
      description: 'Intelligent email automation that reads, categorizes, and responds to emails with human-like accuracy and context awareness.',
      features: ['Smart Email Classification', 'Auto-Response Generation', 'Priority Flagging', 'Sentiment Analysis'],
      pricing: '$1.5k–$8k setup, $0.05–$0.15/email',
      icon: '📧'
    },
    {
      title: 'AI Document Processing & OCR',
      description: 'Advanced document digitization with intelligent data extraction, form processing, and automated workflow integration.',
      features: ['OCR & Text Extraction', 'Form Processing', 'Data Validation', 'Workflow Automation'],
      pricing: '$3k–$15k setup, $0.02–$0.10/page',
      icon: '📄'
    },
    {
      title: 'AI Voice Assistant & IVR',
      description: 'Intelligent voice assistants and interactive voice response systems with natural language understanding and multi-language support.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Voice Analytics', 'CRM Integration'],
      pricing: '$5k–$25k setup, $0.10–$0.50/call',
      icon: '🎤'
    },
    {
      title: 'AI Fraud Detection & Security',
      description: 'Advanced fraud detection systems using machine learning to identify suspicious activities and prevent financial losses.',
      features: ['Real-time Monitoring', 'Pattern Recognition', 'Risk Scoring', 'Alert Management'],
      pricing: '$8k–$40k setup, $0.01–$0.05/transaction',
      icon: '🛡️'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems that boost engagement and sales through intelligent product and content suggestions.',
      features: ['Personalization Engine', 'A/B Testing', 'Real-time Updates', 'Analytics Dashboard'],
      pricing: '$4k–$20k setup, $0.02–$0.10/recommendation',
      icon: '🎯'
    },
    {
      title: 'AI Code Review & Quality Assurance',
      description: 'Automated code analysis, bug detection, and quality assurance using AI to improve development efficiency and code quality.',
      features: ['Automated Code Review', 'Bug Detection', 'Security Scanning', 'Performance Analysis'],
      pricing: '$2k–$10k setup, $0.05–$0.20/line of code',
      icon: '💻'
    },
    {
      title: 'AI Inventory & Supply Chain Optimization',
      description: 'Intelligent inventory management and supply chain optimization using predictive analytics and demand forecasting.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Analytics', 'Cost Reduction'],
      pricing: '$6k–$30k setup, $0.10–$0.50/transaction',
      icon: '📦'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, data sources, and objectives to design the optimal AI solution.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy with clear milestones, success metrics, and implementation roadmap.'
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'Build and train AI models using your data, ensuring accuracy and performance meet your requirements.'
    },
    {
      step: '04',
      title: 'Deployment & Integration',
      description: 'Deploy AI solutions into your existing systems with seamless integration and minimal disruption.'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuously monitor performance, optimize models, and provide ongoing support and maintenance.'
    }
  ];

  return (
    <Layout 
      title="AI Services - Zion Tech Group" 
      description="Transform your business with cutting-edge AI solutions. From machine learning to natural language processing, we help you leverage artificial intelligence for growth."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to natural language processing, we help you leverage AI for competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get AI Consultation
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
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our AI Services</h2>
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

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our AI Development Process</h2>
            <div className="space-y-8">
              {process.map((step, index) => (
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

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Implement AI?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business operations and drive growth. Our expert team is ready to help you get started.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Your AI Journey
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIServicesPage;