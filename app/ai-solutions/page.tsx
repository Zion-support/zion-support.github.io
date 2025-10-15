import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle, Star, Brain, Eye, MessageSquare, BarChart3, Zap, Code, Clock, Globe, Users } from 'lucide-react';

const AiSolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      description: 'Advanced machine learning models and algorithms tailored to your specific business requirements and data patterns.',
      features: [
        'Custom model development and training',
        'Predictive analytics and forecasting',
        'Pattern recognition and anomaly detection',
        'Automated decision making systems',
        'Real-time model deployment and monitoring',
        'A/B testing and model optimization',
        'Data preprocessing and feature engineering',
        'Model performance tracking and reporting'
      ],
      pricing: {
        starter: { price: '$5,000', period: '/project', features: ['Basic ML model', 'Data preprocessing', 'Model deployment'] },
        professional: { price: '$15,000', period: '/project', features: ['Advanced ML models', 'Custom algorithms', 'Performance optimization'] },
        enterprise: { price: '$50,000', period: '/project', features: ['Complex ML systems', 'Real-time processing', 'Dedicated ML team'] }
      },
      link: '/machine-learning',
      icon: <Brain className="w-8 h-8" />,
      category: 'Machine Learning'
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Intelligent text and speech processing solutions for enhanced customer interactions and automated content analysis.',
      features: [
        'Chatbot and virtual assistant development',
        'Sentiment analysis and emotion detection',
        'Text classification and categorization',
        'Named entity recognition and extraction',
        'Language translation and localization',
        'Speech-to-text and text-to-speech',
        'Document summarization and analysis',
        'Multi-language support and processing'
      ],
      pricing: {
        starter: { price: '$3,500', period: '/project', features: ['Basic NLP features', 'Pre-trained models', 'API integration'] },
        professional: { price: '$12,000', period: '/project', features: ['Advanced NLP features', 'Custom model training', 'Multi-language support'] },
        enterprise: { price: '$35,000', period: '/project', features: ['Complex NLP systems', 'Real-time processing', 'Custom development'] }
      },
      link: '/natural-language-processing',
      icon: <MessageSquare className="w-8 h-8" />,
      category: 'NLP'
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis capabilities for automated visual inspection, recognition, and processing.',
      features: [
        'Image classification and object detection',
        'Facial recognition and biometric analysis',
        'Optical character recognition (OCR)',
        'Video analysis and motion detection',
        'Quality control and defect detection',
        'Augmented reality and mixed reality',
        'Medical imaging and diagnostics',
        'Autonomous vehicle vision systems'
      ],
      pricing: {
        starter: { price: '$4,500', period: '/project', features: ['Basic CV features', 'Pre-trained models', 'Image processing'] },
        professional: { price: '$18,000', period: '/project', features: ['Advanced CV features', 'Custom model training', 'Real-time processing'] },
        enterprise: { price: '$60,000', period: '/project', features: ['Complex CV systems', 'Custom hardware integration', 'Dedicated team'] }
      },
      link: '/computer-vision',
      icon: <Eye className="w-8 h-8" />,
      category: 'Computer Vision'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics Platform',
      description: 'Comprehensive predictive analytics solutions for forecasting, risk assessment, and data-driven decision making.',
      features: [
        'Demand forecasting and inventory optimization',
        'Customer behavior prediction and segmentation',
        'Risk assessment and fraud detection',
        'Sales forecasting and revenue prediction',
        'Churn prediction and retention modeling',
        'Market trend analysis and forecasting',
        'Financial risk modeling and assessment',
        'Real-time predictive insights and alerts'
      ],
      pricing: {
        starter: { price: '$6,000', period: '/project', features: ['Basic forecasting', 'Standard models', 'Monthly reports'] },
        professional: { price: '$20,000', period: '/project', features: ['Advanced analytics', 'Custom models', 'Real-time insights'] },
        enterprise: { price: '$75,000', period: '/project', features: ['Complex analytics', 'Custom development', 'Dedicated analytics team'] }
      },
      link: '/predictive-analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      category: 'Analytics'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions that streamline business processes and workflows using AI-powered decision making.',
      features: [
        'Intelligent document processing and extraction',
        'Workflow automation and orchestration',
        'Email and communication automation',
        'Data entry and form processing automation',
        'Customer service automation',
        'Supply chain and logistics optimization',
        'Financial process automation',
        'Compliance and audit automation'
      ],
      pricing: {
        starter: { price: '$4,000', period: '/project', features: ['Basic automation', 'Simple workflows', 'Standard integration'] },
        professional: { price: '$15,000', period: '/project', features: ['Advanced automation', 'Complex workflows', 'Custom integration'] },
        enterprise: { price: '$45,000', period: '/project', features: ['Enterprise automation', 'Custom development', 'Full system integration'] }
      },
      link: '/ai-automation',
      icon: <Zap className="w-8 h-8" />,
      category: 'Automation'
    },
    {
      id: 'ai-development',
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions and applications developed specifically for your unique business requirements and challenges.',
      features: [
        'Custom AI model development and training',
        'AI application development and deployment',
        'API development and integration services',
        'AI infrastructure setup and management',
        'Data pipeline development and optimization',
        'AI testing and quality assurance',
        'Performance monitoring and optimization',
        'Ongoing maintenance and support'
      ],
      pricing: {
        starter: { price: '$10,000', period: '/project', features: ['Basic AI application', 'Standard features', 'Documentation'] },
        professional: { price: '$35,000', period: '/project', features: ['Advanced AI application', 'Custom features', 'Full integration'] },
        enterprise: { price: '$100,000', period: '/project', features: ['Complex AI system', 'Custom development', 'Dedicated team'] }
      },
      link: '/ai-development',
      icon: <Code className="w-8 h-8" />,
      category: 'Development'
    }
  ];

  const categories = ['All', 'Machine Learning', 'NLP', 'Computer Vision', 'Analytics', 'Automation', 'Development'];

  return (
    <>
      <SEOHead
        title="AI Solutions - Zion Tech Group"
        description="Cutting-edge AI solutions including machine learning, natural language processing, computer vision, predictive analytics, and custom AI development for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business with our cutting-edge AI solutions designed to solve complex challenges and drive innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 border border-slate-700">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <span className="text-sm text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">4.9/5</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-blue-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Pricing Plans:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="text-sm text-gray-400 capitalize mb-1">{plan}</div>
                        <div className="text-lg font-bold text-white">
                          {details.price}
                          <span className="text-sm text-gray-400">{details.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    View Details
                  </a>
                  <a
                    href="/contact"
                    className="flex-1 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our AI solutions are designed to integrate seamlessly with your existing systems and provide immediate value through intelligent automation and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Schedule AI Consultation
              </a>
              <a
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View All Pricing
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>https://ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiSolutionsPage;