'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Brain, Target, BarChart, Users, Clock, ArrowRight, Phone, Mail } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Intelligent Process Automation (IPA)',
      description: 'Advanced AI-powered process automation that goes beyond traditional RPA to handle complex decision-making and learning.',
      icon: '🤖',
      price: '$2,500/month',
      features: ['Cognitive automation', 'Decision-making AI', 'Process learning', 'Exception handling', 'Workflow optimization', 'Integration APIs'],
      benefits: ['Reduce manual work by 80%', 'Improve accuracy by 95%', 'Scale operations 10x', 'Save 40+ hours/week'],
      marketPrice: '$5,000-15,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Custom AI Models', 'Machine Learning', 'NLP', 'Computer Vision'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Workflow Orchestration',
      description: 'Intelligent workflow management that automatically routes tasks, makes decisions, and optimizes processes in real-time.',
      icon: '⚡',
      price: '$1,800/month',
      features: ['Smart routing', 'Dynamic optimization', 'Real-time monitoring', 'Predictive scaling', 'Error recovery', 'Performance analytics'],
      benefits: ['Increase efficiency by 60%', 'Reduce bottlenecks by 70%', 'Improve SLA compliance', 'Lower operational costs'],
      marketPrice: '$3,000-8,000/month',
      category: 'Workflow Management',
      technologies: ['Apache Airflow', 'Kubernetes', 'Custom AI Models', 'Event Streaming', 'Microservices', 'API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Document Processing Automation',
      description: 'Intelligent document processing that extracts, classifies, and processes information from any document type automatically.',
      icon: '📄',
      price: '$1,200/month',
      features: ['OCR processing', 'Document classification', 'Data extraction', 'Form processing', 'Compliance checking', 'Workflow integration'],
      benefits: ['Process 1000+ documents/hour', 'Reduce errors by 90%', 'Eliminate manual data entry', 'Improve compliance'],
      marketPrice: '$2,000-5,000/month',
      category: 'Document Processing',
      technologies: ['Tesseract OCR', 'AWS Textract', 'Custom AI Models', 'NLP', 'Computer Vision', 'Workflow Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Service Automation',
      description: 'Intelligent customer service automation with AI chatbots, ticket routing, and automated resolution capabilities.',
      icon: '💬',
      price: '$1,500/month',
      features: ['AI chatbots', 'Ticket routing', 'Sentiment analysis', 'Auto-resolution', 'Knowledge management', 'Escalation handling'],
      benefits: ['Handle 80% of inquiries automatically', 'Improve response time by 90%', 'Increase customer satisfaction', 'Reduce support costs'],
      marketPrice: '$2,500-6,000/month',
      category: 'Customer Service',
      technologies: ['OpenAI GPT', 'Dialogflow', 'Custom AI Models', 'NLP', 'Sentiment Analysis', 'CRM Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Comprehensive marketing automation with AI-powered campaign optimization, personalization, and performance tracking.',
      icon: '📈',
      price: '$1,800/month',
      features: ['Campaign optimization', 'Personalization', 'A/B testing', 'Lead scoring', 'Email automation', 'Social media management'],
      benefits: ['Increase conversion by 50%', 'Improve ROI by 200%', 'Reduce manual work by 70%', 'Scale marketing efforts'],
      marketPrice: '$3,000-8,000/month',
      category: 'Marketing',
      technologies: ['HubSpot', 'Marketo', 'Custom AI Models', 'Machine Learning', 'Analytics', 'CRM Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Process Automation',
      description: 'Intelligent financial process automation for invoicing, expense management, reconciliation, and compliance reporting.',
      icon: '💰',
      price: '$2,200/month',
      features: ['Invoice processing', 'Expense management', 'Reconciliation', 'Compliance reporting', 'Fraud detection', 'Financial analytics'],
      benefits: ['Reduce processing time by 85%', 'Improve accuracy by 95%', 'Ensure compliance', 'Lower operational costs'],
      marketPrice: '$4,000-12,000/month',
      category: 'Financial Automation',
      technologies: ['QuickBooks API', 'Xero API', 'Custom AI Models', 'Machine Learning', 'Blockchain', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'Process Automation', count: automationServices.filter(s => s.category === 'Process Automation').length },
    { name: 'Workflow Management', count: automationServices.filter(s => s.category === 'Workflow Management').length },
    { name: 'Document Processing', count: automationServices.filter(s => s.category === 'Document Processing').length },
    { name: 'Customer Service', count: automationServices.filter(s => s.category === 'Customer Service').length },
    { name: 'Marketing', count: automationServices.filter(s => s.category === 'Marketing').length },
    { name: 'Financial Automation', count: automationServices.filter(s => s.category === 'Financial Automation').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <SEOOptimizer
        title="AI Automation - Zion Tech Group"
        description="Intelligent process automation solutions powered by AI. Automate complex workflows, documents, customer service, and business processes with advanced AI technology."
        keywords={['AI automation', 'process automation', 'workflow automation', 'intelligent automation', 'RPA', 'business process automation']}
        canonicalUrl="https://ziontechgroup.com/ai-automation"
      />
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Automation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation that learns, adapts, and optimizes processes automatically
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <span
                key={category.name}
                className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30"
              >
                {category.name} ({category.count})
              </span>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105 cyber-card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 text-2xl">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <span className="text-purple-400 text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-purple-400 text-xs rounded border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                  <p className="text-sm text-gray-400">{service.contactInfo}</p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Automation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Intelligent Learning</h3>
              <p className="text-gray-300">AI that learns from your processes and continuously improves automation</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation with minimal disruption to your existing workflows</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Measurable improvements in efficiency, accuracy, and cost savings</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free automation assessment and customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-slate-800 text-purple-400 font-semibold py-3 px-8 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center border border-purple-500/30"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIAutomationPage;
