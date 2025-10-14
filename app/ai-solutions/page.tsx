import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon } from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {}
  const aiServices = []
      title: 'Machine Learning Models',
      description: 'Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.',
      icon: CpuChipIcon,
      features: []
        'Custom algorithm development',
        'Real-time model training',
        'A/B testing framework',
        'Model performance monitoring',
        'Automated retraining',
        'Edge deployment'
      ],
      color: 'from-purple-500 to-pink-500',
      price: 'Starting at $3,500/month',
      benefits: ['95% accuracy', 'Real-time processing', 'Custom algorithms'],
      useCases: ['Predictive analytics', 'Recommendation engines', 'Fraud detection'],
      href: '/ai-machine-learning'
    }, {}
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for automated visual inspection, object detection, and facial recognition.',
      icon: EyeIcon,
      features: []
        'Object detection and classification',
        'Facial recognition systems',
        'Image segmentation',
        'Real-time video analysis',
        'Quality control automation',
        'Medical image analysis'
      ],
      color: 'from-blue-500 to-cyan-500',
      price: 'Starting at $4,200/month',
      benefits: ['99% accuracy', 'Real-time processing', 'Custom models'],
      useCases: ['Quality control', 'Security systems', 'Medical imaging'],
      href: '/ai-computer-vision'
    }, {}
      title: 'Natural Language Processing',
      description: 'Intelligent text analysis and language understanding for chatbots, sentiment analysis, and content generation.',
      icon: ChatBubbleLeftRightIcon,
      features: []
        'Sentiment analysis',
        'Text classification',
        'Language translation',
        'Content generation',
        'Chatbot development',
        'Document analysis'
      ],
      color: 'from-green-500 to-emerald-500',
      price: 'Starting at $2,800/month',
      benefits: ['Multi-language support', 'Real-time processing', 'Custom training'],
      useCases: ['Customer service', 'Content moderation', 'Language translation'],
      href: '/ai-nlp'
    }, {}
      title: 'AI Automation',
      description: 'Intelligent process automation solutions that streamline workflows and reduce manual tasks across your organization.',
      icon: LightBulbIcon,
      features: []
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Process optimization',
        'Intelligent routing',
        'Exception handling'
      ],
      color: 'from-orange-500 to-red-500',
      price: 'Starting at $3,200/month',
      benefits: ['80% time savings', 'Error reduction', 'Scalable solutions'],
      useCases: ['Document processing', 'Data entry', 'Workflow optimization'],
      href: '/ai-automation'
    }
  ];

  const industries = []
    { name: 'Healthcare', icon: '🏥', description: 'Medical imaging, drug discovery, patient care' }
    { name: 'Finance', icon: '💰', description: 'Fraud detection, risk assessment, trading algorithms' }
    { name: 'E-commerce', icon: '🛒', description: 'Recommendation engines, price optimization, inventory management' }
    { name: 'Manufacturing', icon: '🏭', description: 'Quality control, predictive maintenance, supply chain optimization' }
    { name: 'Education', icon: '🎓', description: 'Personalized learning, content generation, assessment tools' }
    { name: 'Transportation', icon: '🚗', description: 'Autonomous vehicles, route optimization, traffic management' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /></div>
      <Helmet /></Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, computer vision, NLP, and automation. Transform your business with cutting-edge artificial intelligence technology." / /></meta>
        <meta name="keywords" content="AI solutions, machine learning, computer vision, NLP, artificial intelligence, automation, AI consulting" / /></meta>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden" /></section>
        <div className="absolute inset-0 opacity-20" /></div>
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20" /></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center" /></div>
          <div className="max-w-4xl mx-auto" /></div>
            <div className="flex items-center justify-center gap-4 mb-6" /></div>
              <SparklesIcon className="w-12 h-12 text-purple-400 animate-pulse" / /></SparklesIcon>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" /></h1>
                AI Solutions
              </h1>
              <SparklesIcon className="w-12 h-12 text-cyan-400 animate-pulse" / /></SparklesIcon>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed" /></p>
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto" /></p>
              Leverage cutting-edge AI technology to automate processes, gain insights, and drive innovation. 
              Our comprehensive AI solutions are designed to solve complex business challenges.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
             /></Link>
              Get Started with AI
              <ArrowRightIcon className="w-5 h-5" / /></ArrowRightIcon>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-slate-900" /></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Comprehensive artificial intelligence services designed to transform your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8" /></div>
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group" /></div>
                <div className="flex items-center mb-6" /></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`} /></div>
                    <service.icon className="w-8 h-8 text-white" / /></service>
                  </div>
                  <div /></div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-purple-400 font-semibold">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed" /></p>
                  {service.description}
                </p>
                
                <div className="space-y-4 mb-6" /></div>
                  <div /></div>
                    <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                    <ul className="space-y-2" /></ul>
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300" /></li>
                          <CheckIcon className="w-4 h-4 text-green-400 mr-3" / /></CheckIcon>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div /></div>
                    <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                    <div className="flex flex-wrap gap-2" /></div>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full" /></span>
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div /></div>
                    <h4 className="text-lg font-semibold text-white mb-2">Use Cases</h4>
                    <div className="flex flex-wrap gap-2" /></div>
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-3 py-1 bg-cyan-600 text-white text-sm rounded-full" /></span>
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                 /></Link>
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" / /></ArrowRightIcon>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50" /></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              AI solutions tailored for various industries and business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" /></div>
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 text-center" /></div>
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900" /></section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" /></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8" /></p>
            Let's discuss how our AI solutions can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
             /></Link>
              Start Your AI Journey
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
             /></Link>
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;
