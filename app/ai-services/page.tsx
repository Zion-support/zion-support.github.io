import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Settings, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Pro',
      description: 'Transform your data into actionable insights with our advanced AI analytics solutions featuring machine learning models and real-time processing.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization', 'Machine Learning Models', 'Automated Reporting', 'Anomaly Detection', 'Trend Analysis'],
      price: '$299/month',
      originalPrice: '$499/month',
      popular: true,
      category: 'Data & Analytics',
      freeTrial: '14 days',
      setupTime: '2 hours',
      integrations: ['Tableau', 'Power BI', 'Google Analytics', 'Salesforce', 'HubSpot', 'MySQL', 'PostgreSQL'],
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Operational Insights', 'Risk Assessment']
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Studio',
      description: 'Create high-quality content at scale with our AI-powered content generation tools featuring GPT-4 integration and brand voice training.',
      icon: Brain,
      features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'Email Campaigns', 'Video Scripts', 'Ad Copy', 'Technical Documentation', 'Multi-language Support'],
      price: '$199/month',
      originalPrice: '$349/month',
      popular: false,
      category: 'Content Creation',
      freeTrial: '7 days',
      setupTime: '30 minutes',
      integrations: ['WordPress', 'Shopify', 'Mailchimp', 'Hootsuite', 'Buffer', 'Google Docs', 'Notion'],
      useCases: ['Content Marketing', 'Social Media Management', 'E-commerce', 'Email Marketing', 'Technical Writing']
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Suite',
      description: 'Enhance customer experience with intelligent chatbots, automated support systems, and sentiment analysis across all channels.',
      icon: Users,
      features: ['24/7 Support', 'Multi-language', 'Sentiment Analysis', 'Ticket Routing', 'Live Chat Integration', 'Voice Support', 'Knowledge Base', 'Escalation Management'],
      price: '$399/month',
      originalPrice: '$699/month',
      popular: false,
      category: 'Customer Service',
      freeTrial: '21 days',
      setupTime: '1 hour',
      integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger'],
      useCases: ['Customer Support', 'Lead Qualification', 'FAQ Automation', 'Ticket Management', 'Customer Satisfaction']
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Shield',
      description: 'Protect your business with AI-powered threat detection, security monitoring, and automated incident response using advanced machine learning.',
      icon: Shield,
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Monitoring', 'Vulnerability Assessment', 'Security Analytics', 'Incident Response', 'Risk Scoring'],
      price: '$599/month',
      originalPrice: '$999/month',
      popular: false,
      category: 'Security',
      freeTrial: '30 days',
      setupTime: '4 hours',
      integrations: ['SIEM Systems', 'Firewalls', 'Endpoint Protection', 'Cloud Security', 'Compliance Tools', 'Incident Management'],
      useCases: ['Threat Prevention', 'Compliance', 'Incident Response', 'Risk Management', 'Security Monitoring']
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Engine',
      description: 'Unlock the power of your data with machine learning, advanced analytics, and automated insights generation for business intelligence.',
      icon: BarChart3,
      features: ['Machine Learning', 'Pattern Recognition', 'Automated Reporting', 'Data Mining', 'Predictive Modeling', 'Statistical Analysis', 'Data Cleansing', 'Real-time Processing'],
      price: '$349/month',
      originalPrice: '$599/month',
      popular: false,
      category: 'Data & Analytics',
      freeTrial: '14 days',
      setupTime: '3 hours',
      integrations: ['Apache Spark', 'Hadoop', 'Kafka', 'Elasticsearch', 'MongoDB', 'Redis', 'AWS', 'Azure'],
      useCases: ['Data Science', 'Business Intelligence', 'Predictive Analytics', 'Data Engineering', 'Research & Development']
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Automation Platform',
      description: 'Streamline your marketing efforts with intelligent automation, personalization, and AI-driven campaign optimization across all channels.',
      icon: Zap,
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'Lead Scoring', 'Customer Segmentation', 'Email Marketing', 'Social Media Automation', 'ROI Optimization'],
      price: '$249/month',
      originalPrice: '$449/month',
      popular: false,
      category: 'Marketing',
      freeTrial: '14 days',
      setupTime: '1 hour',
      integrations: ['HubSpot', 'Salesforce', 'Mailchimp', 'Facebook Ads', 'Google Ads', 'LinkedIn', 'Twitter', 'Instagram'],
      useCases: ['Lead Generation', 'Customer Retention', 'Campaign Management', 'Personalization', 'Marketing ROI']
    },
    {
      id: 'ai-voice-assistant',
      title: 'Zion AI Voice Assistant Pro',
      description: 'Deploy intelligent voice assistants with natural language processing, multi-language support, and custom voice training for your business.',
      icon: Users,
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Voice Training', 'API Integration', 'Conversation Management', 'Voice Analytics', 'Mobile Apps', 'Web Integration'],
      price: '$179/month',
      originalPrice: '$299/month',
      popular: true,
      category: 'Voice & Conversational AI',
      freeTrial: '21 days',
      setupTime: '2 hours',
      integrations: ['Amazon Alexa', 'Google Assistant', 'Microsoft Cortana', 'Slack', 'Teams', 'WhatsApp', 'Telegram'],
      useCases: ['Customer Service', 'Voice Commands', 'Accessibility', 'Hands-free Operations', 'Multi-language Support']
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation Engine',
      description: 'Automate complex business processes with AI-powered workflow automation, intelligent routing, and decision-making capabilities.',
      icon: Settings,
      features: ['Process Automation', 'Intelligent Routing', 'Decision Making', 'Document Processing', 'Approval Workflows', 'Task Management', 'Integration Hub', 'Performance Analytics'],
      price: '$129/month',
      originalPrice: '$199/month',
      popular: false,
      category: 'Process Automation',
      freeTrial: '30 days',
      setupTime: '1 hour',
      integrations: ['Zapier', 'Microsoft Power Automate', 'Salesforce', 'ServiceNow', 'Jira', 'Asana', 'Trello'],
      useCases: ['Process Optimization', 'Task Automation', 'Document Management', 'Approval Workflows', 'Business Process Management']
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Platform',
      description: 'Implement advanced computer vision solutions for image recognition, object detection, and visual analytics using deep learning models.',
      icon: BarChart3,
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'OCR Processing', 'Video Analytics', 'Quality Control', 'Visual Search', 'Real-time Processing'],
      price: '$449/month',
      originalPrice: '$799/month',
      popular: false,
      category: 'Computer Vision',
      freeTrial: '14 days',
      setupTime: '3 hours',
      integrations: ['OpenCV', 'TensorFlow', 'PyTorch', 'AWS Rekognition', 'Google Vision', 'Azure Computer Vision'],
      useCases: ['Quality Control', 'Security Monitoring', 'Medical Imaging', 'Retail Analytics', 'Automotive Safety']
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives.',
      icon: Zap,
    },
    {
      title: 'Better Insights',
      description: 'Gain deeper understanding of your data and customer behavior.',
      icon: BarChart3,
    },
    {
      title: 'Cost Savings',
      description: 'Reduce operational costs through intelligent automation.',
      icon: Award,
    },
    {
      title: 'Scalability',
      description: 'Scale your operations without proportional cost increases.',
      icon: Globe,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, content generation, customer support, and cybersecurity solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, business AI solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`cyber-card hover:scale-105 transition-all duration-300 ${
                      service.popular 
                        ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                        : 'border-cyan-500/20'
                    }`}
                  >
                    {service.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-cyan-500/20">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 holographic-text">{service.title}</h3>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 text-sm font-semibold">{service.freeTrial} Free Trial</div>
                        <div className="text-gray-400 text-xs">Setup in {service.setupTime}</div>
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-cyan-400 text-sm font-medium">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Integrations */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Integrations:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.integrations.slice(0, 3).map((integration, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-cyan-500/20">
                            {integration}
                          </span>
                        ))}
                        {service.integrations.length > 3 && (
                          <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded border border-cyan-500/20">
                            +{service.integrations.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Link
                      to={`/${service.id}`}
                      className="w-full cyber-button text-center py-3 px-6 text-sm font-semibold flex items-center justify-center space-x-2"
                    >
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI experts help you identify the best solutions for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
