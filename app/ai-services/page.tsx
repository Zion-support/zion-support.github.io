import React from 'react';
import SEOHead from './components/SEOHead';
import {
  CpuChipIcon,
  BrainIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  CloudIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      category: 'AI Development & Integration',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: CpuChipIcon,
      services: [
        {
          name: 'AI Strategy Consulting',
          price: '$2,500/month',
          description: 'Comprehensive AI strategy development and implementation planning for your business',
          features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Team Training'],
          benefits: ['Increased Efficiency', 'Cost Reduction', 'Competitive Advantage', 'Future-Proof Technology']
        },
        {
          name: 'Custom AI Model Development',
          price: '$3,500/month',
          description: 'Tailored machine learning models designed specifically for your business needs',
          features: ['Custom Model Training', 'Data Preprocessing', 'Model Optimization', 'Performance Monitoring', 'Continuous Learning'],
          benefits: ['Higher Accuracy', 'Business-Specific Solutions', 'Scalable Architecture', 'Real-time Processing']
        },
        {
          name: 'AI API Integration',
          price: '$1,200/month',
          description: 'Seamless integration of AI capabilities into your existing systems and applications',
          features: ['API Development', 'System Integration', 'Data Pipeline Setup', 'Error Handling', 'Documentation'],
          benefits: ['Easy Integration', 'Reduced Development Time', 'Scalable Solutions', 'Maintenance Support']
        }
      ]
    },
    {
      category: 'Natural Language Processing',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: ChatBubbleLeftRightIcon,
      services: [
        {
          name: 'AI Chatbot Development',
          price: '$1,800/month',
          description: 'Intelligent conversational AI chatbots for customer service and support',
          features: ['Multi-language Support', 'Context Understanding', 'Integration APIs', 'Analytics Dashboard', '24/7 Availability'],
          benefits: ['Improved Customer Service', 'Reduced Support Costs', 'Faster Response Times', 'Consistent Quality']
        },
        {
          name: 'Text Analysis & Sentiment',
          price: '$1,500/month',
          description: 'Advanced text analysis and sentiment analysis for customer feedback and content',
          features: ['Sentiment Analysis', 'Text Classification', 'Entity Recognition', 'Language Detection', 'Real-time Processing'],
          benefits: ['Better Customer Insights', 'Content Optimization', 'Risk Detection', 'Market Intelligence']
        },
        {
          name: 'Language Translation AI',
          price: '$2,000/month',
          description: 'Real-time language translation and localization services powered by AI',
          features: ['Multi-language Support', 'Context-Aware Translation', 'Custom Terminology', 'Batch Processing', 'API Integration'],
          benefits: ['Global Reach', 'Accurate Translations', 'Cost Effective', 'Scalable Solutions']
        }
      ]
    },
    {
      category: 'Computer Vision & Image Processing',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: EyeIcon,
      services: [
        {
          name: 'Object Detection & Recognition',
          price: '$2,200/month',
          description: 'Advanced computer vision solutions for object detection and recognition',
          features: ['Real-time Detection', 'Custom Object Training', 'Multi-class Classification', 'Batch Processing', 'API Integration'],
          benefits: ['Automated Quality Control', 'Security Enhancement', 'Process Automation', 'Cost Reduction']
        },
        {
          name: 'Facial Recognition System',
          price: '$2,800/month',
          description: 'Secure facial recognition and identity verification systems',
          features: ['Real-time Recognition', 'High Accuracy', 'Privacy Protection', 'Integration APIs', 'Analytics Dashboard'],
          benefits: ['Enhanced Security', 'Access Control', 'User Authentication', 'Fraud Prevention']
        },
        {
          name: 'Image Classification AI',
          price: '$1,600/month',
          description: 'Automated image classification and content analysis for various industries',
          features: ['Custom Categories', 'Batch Processing', 'High Accuracy', 'API Integration', 'Real-time Analysis'],
          benefits: ['Content Moderation', 'Quality Control', 'Process Automation', 'Data Organization']
        }
      ]
    },
    {
      category: 'AI Automation & Workflow',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: CogIcon,
      services: [
        {
          name: 'Process Automation AI',
          price: '$2,500/month',
          description: 'Intelligent process automation with decision-making capabilities',
          features: ['Workflow Automation', 'Decision Trees', 'Exception Handling', 'Performance Monitoring', 'Custom Rules'],
          benefits: ['Increased Efficiency', 'Reduced Errors', 'Cost Savings', 'Scalable Operations']
        },
        {
          name: 'AI Content Generation',
          price: '$1,400/month',
          description: 'Automated content creation for marketing, documentation, and communication',
          features: ['Multi-format Support', 'Brand Consistency', 'SEO Optimization', 'Quality Control', 'Bulk Generation'],
          benefits: ['Time Savings', 'Consistent Quality', 'Cost Reduction', 'Scalable Content']
        },
        {
          name: 'AI Data Analytics',
          price: '$2,000/month',
          description: 'Advanced analytics and insights powered by artificial intelligence',
          features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Reporting', 'Real-time Insights', 'Custom Dashboards'],
          benefits: ['Better Decision Making', 'Predictive Insights', 'Competitive Advantage', 'Data-Driven Growth']
        }
      ]
    },
    {
      category: 'AI Security & Compliance',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheckIcon,
      services: [
        {
          name: 'AI Security Monitoring',
          price: '$2,200/month',
          description: 'Advanced AI-powered security monitoring and threat detection',
          features: ['Real-time Monitoring', 'Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Reporting'],
          benefits: ['Enhanced Security', 'Proactive Protection', 'Compliance Assurance', 'Reduced Risk']
        },
        {
          name: 'AI Fraud Detection',
          price: '$1,800/month',
          description: 'Intelligent fraud detection and prevention systems',
          features: ['Real-time Analysis', 'Pattern Recognition', 'Risk Scoring', 'Automated Alerts', 'Machine Learning'],
          benefits: ['Fraud Prevention', 'Cost Reduction', 'Customer Protection', 'Regulatory Compliance']
        },
        {
          name: 'AI Compliance Assistant',
          price: '$1,500/month',
          description: 'AI-powered compliance monitoring and reporting for various regulations',
          features: ['Regulation Tracking', 'Automated Reporting', 'Risk Assessment', 'Documentation', 'Audit Support'],
          benefits: ['Compliance Assurance', 'Reduced Manual Work', 'Risk Mitigation', 'Audit Readiness']
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Services - Zion Tech Group"
        description="Professional AI services including machine learning, natural language processing, computer vision, and automation solutions for modern businesses."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
                <BrainIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver intelligent automation that drives growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Explore AI Services
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Services Grid */}
        <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {aiServices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${category.bgColor} rounded-full mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className={`text-3xl font-bold ${category.color} mb-4`}>
                  {category.category}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Professional {category.category.toLowerCase()} solutions powered by advanced AI technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.name}
                      </h3>
                      <div className="flex items-center text-yellow-500">
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center text-2xl font-bold text-gray-900 mb-2">
                        <CurrencyDollarIcon className="w-6 h-6 text-green-600 mr-1" />
                        {service.price}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        Monthly subscription
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Business Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <SparklesIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                      >
                        Get Started
                      </a>
                      <a
                        href="/pricing"
                        className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                      >
                        View Pricing
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Technologies Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                AI Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge AI technologies and frameworks to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face', 'Scikit-learn', 'Keras',
                'NLTK', 'spaCy', 'OpenCV', 'YOLO', 'BERT', 'Transformers'
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-800 rounded-lg p-4 mb-2">
                    <CodeBracketIcon className="w-8 h-8 text-blue-400 mx-auto" />
                  </div>
                  <div className="text-sm font-medium">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Implement AI in Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Contact our AI experts today to discuss your requirements and get a customized AI solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-purple-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-purple-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-purple-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start AI Project
                </a>
                <a
                  href="/pricing"
                  className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View AI Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiServicesPage;
