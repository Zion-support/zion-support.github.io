import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom;
import { CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon'
} from '@heroicons/react/24/outline;

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {'
          title: 'Machine Learning Models','
          description: 'Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.'
  },
      icon: CpuChipIcon,
      features: ['
        'Custom algorithm development','
        'Real-time model training','
        'A/B testing framework','
        'Model performance monitoring','
        'Automated retraining','
        'Edge deployment'
      ],'
      color: 'from-purple-500 to-pink-500','
      price: 'Starting at $3,500/month','
      benefits: ['95% accuracy', 'Real-time processing', 'Custom algorithms'],'
      useCases: ['Predictive analytics', 'Recommendation engines', 'Fraud detection'],'
      href: '/ai-machine-learning'
    },
    {'
          title: 'Computer Vision','
          description: 'Advanced image and video analysis solutions for automated visual inspection, object detection, and facial recognition.'
  },
      icon: EyeIcon,
      features: ['
        'Object detection and classification','
        'Facial recognition systems','
        'Image segmentation','
        'Real-time video analysis','
        'Quality control automation','
        'Medical image analysis'
      ],'
      color: 'from-blue-500 to-cyan-500','
      price: 'Starting at $4,200/month','
      benefits: ['99% accuracy', 'Real-time processing', 'Custom models'],'
      useCases: ['Quality control', 'Security systems', 'Medical imaging'],'
      href: '/ai-computer-vision'
    },
    {'
          title: 'Natural Language Processing','
          description: 'Intelligent text analysis and language understanding for chatbots, sentiment analysis, and content generation.'
  },
      icon: ChatBubbleLeftRightIcon,
      features: ['
        'Sentiment analysis','
        'Text classification','
        'Language translation','
        'Content generation','
        'Chatbot development','
        'Document analysis'
      ],'
      color: 'from-green-500 to-emerald-500','
      price: 'Starting at $2,800/month','
      benefits: ['Multi-language support', 'Real-time processing', 'Custom training'],'
      useCases: ['Customer service', 'Content moderation', 'Language translation'],'
      href: '/ai-nlp'
    },
    {'
          title: 'AI Automation','
          description: 'Intelligent process automation solutions that streamline workflows and reduce manual tasks across your organization.'
  },
      icon: LightBulbIcon,
      features: ['
        'Workflow automation','
        'Document processing','
        'Data extraction','
        'Process optimization','
        'Intelligent routing','
        'Exception handling'
      ],'
      color: 'from-orange-500 to-red-500','
      price: 'Starting at $3,200/month','
      benefits: ['80% time savings', 'Error reduction', 'Scalable solutions'],'
      useCases: ['Document processing', 'Data entry', 'Workflow optimization'],'
      href: '/ai-automation'
    }
  ];

  const industries = ['
    { name: 'Healthcare', icon: '🏥',     description: 'Medical imaging, drug discovery, patient care'
  } },'
    { name: 'Finance', icon: '💰',     description: 'Fraud detection, risk assessment, trading algorithms'
  } },'
    { name: 'E-commerce', icon: '🛒',     description: 'Recommendation engines, price optimization, inventory management'
  } },'
    { name: 'Manufacturing', icon: '🏭',     description: 'Quality control, predictive maintenance, supply chain optimization'
  } },'
    { name: 'Education', icon: '🎓',     description: 'Personalized learning, content generation, assessment tools'
  } },'
    { name: 'Transportation', icon: '🚗',     description: 'Autonomous vehicles, route optimization, traffic management'
  } }
  ];

  return (
    
    <div>
    <Helmet />
        <title>AI Solutions - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>

      {/* Hero Section */}
      <section>
        <div>
    <div />
  </div>
  <div>
    <div />
            <div>
    <SparklesIcon />
              <h1>AI Solutions
              </h1></h1>
              <SparklesIcon />
            </div>
            <p />
              Transform Your Business with Artificial Intelligence
            </p>
            <p />
              Leverage cutting-edge AI technology to automate processes, gain insights, and drive innovation. 
              Our comprehensive AI solutions are designed to solve complex business challenges.
            </p>
            <Link />
              Get Started with AI
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section>
        <div>
    <div />
            <h2 />
              Our AI Solutions
            </h2>
            <p />
              Comprehensive artificial intelligence services designed to transform your business
            </p>
          </div>
          
          <div />
            {aiServices.map((service, index) => (
              <div>
    <div />
                  <div>
    <service />
                  </div>
                  <div />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-purple-400 font-semibold">{service.price}</p>
                  </div>
  </div>
  <p />
                  {service.description}
                </p>
                
                <div>
    <div />
                    <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                    <ul />
                      {service.features.map((feature, featureIndex) => (
                        <li />
                          <CheckIcon />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div />
                    <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                    <div />
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span />
                          {benefit}
                        </span>
                      ))}
                    </div>
  </div>
  <div />
                    <h4 className="text-lg font-semibold text-white mb-2">Use Cases</h4>
                    <div />
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span />
                          {useCase}
                        </span>
                      ))}
                    </div>
        </div>
      </div>
  <Link />
                  Learn More
                  <ArrowRightIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section>
        <div>
    <div />
            <h2 />
              Industries We Serve
            </h2>
            <p />
              AI solutions tailored for various industries and business needs
            </p>
          </div>
          
          <div />
            {industries.map((industry, index) => (
              <div>
    <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
    <h2 />
            Ready to Transform Your Business with AI?
          </h2>
          <p />'
            Let's discuss how our AI solutions can help you achieve your business goals
          </p>
          <div>
    <Link />
              Start Your AI Journey
            </Link>
            <Link />
              Schedule Demo
            </Link>
          </div>
          </div>
        </div>
      </div>
  );
};

export default AISolutionsPage;