import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  PhoneIcon,
  EyeIcon,
  LightBulbIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  MicrophoneIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      description: 'Custom ML models and algorithms tailored to your specific business needs and data requirements.',
      price: 'Starting at $5,000/month',
      features: [
        'Custom model development',
        'Data preprocessing and cleaning',
        'Model training and optimization',
        'Real-time inference APIs',
        'Model monitoring and maintenance',
        'A/B testing framework',
        'Scalable cloud deployment',
        '24/7 technical support'
      ],
      category: 'Core AI',
      icon: CpuChipIcon,
      popular: true,
      link: '/ai-services/machine-learning'
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding.',
      price: 'Starting at $3,000/month',
      features: [
        'Text classification and analysis',
        'Sentiment analysis and emotion detection',
        'Named entity recognition',
        'Language translation services',
        'Chatbot and virtual assistant development',
        'Document processing and extraction',
        'Content generation and summarization',
        'Multi-language support'
      ],
      category: 'Language AI',
      icon: ChatBubbleLeftRightIcon,
      popular: true,
      link: '/ai-services/nlp'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision Solutions',
      description: 'Image and video analysis, object detection, facial recognition, and visual content understanding.',
      price: 'Starting at $4,000/month',
      features: [
        'Object detection and recognition',
        'Facial recognition and analysis',
        'Image classification and tagging',
        'Video content analysis',
        'OCR and document scanning',
        'Medical image analysis',
        'Quality control automation',
        'Real-time video processing'
      ],
      category: 'Visual AI',
      icon: EyeIcon,
      popular: false,
      link: '/ai-services/computer-vision'
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      description: 'Forecast future trends, customer behavior, and business outcomes using advanced predictive models.',
      price: 'Starting at $2,500/month',
      features: [
        'Demand forecasting',
        'Customer churn prediction',
        'Sales forecasting',
        'Risk assessment and scoring',
        'Fraud detection',
        'Market trend analysis',
        'Inventory optimization',
        'Financial modeling'
      ],
      category: 'Analytics',
      icon: ChartBarIcon,
      popular: true,
      link: '/ai-services/predictive-analytics'
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
      price: 'Starting at $2,000/month',
      features: [
        'Workflow automation',
        'Document processing automation',
        'Email and communication automation',
        'Data entry automation',
        'Customer service automation',
        'Invoice and payment processing',
        'HR and recruitment automation',
        'Compliance monitoring'
      ],
      category: 'Automation',
      icon: CogIcon,
      popular: false,
      link: '/ai-services/automation'
    },
    {
      id: 'ai-consulting',
      name: 'AI Strategy Consulting',
      description: 'Expert guidance on AI implementation, strategy development, and digital transformation.',
      price: 'Starting at $500/hour',
      features: [
        'AI strategy development',
        'Technology assessment and planning',
        'ROI analysis and business case development',
        'Implementation roadmap creation',
        'Team training and education',
        'Change management support',
        'Compliance and ethics guidance',
        'Ongoing advisory services'
      ],
      category: 'Consulting',
      icon: LightBulbIcon,
      popular: false,
      link: '/ai-services/consulting'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI solutions for medical diagnosis, drug discovery, patient care, and healthcare analytics.',
      icon: BeakerIcon,
      solutions: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Treatment Optimization']
    },
    {
      name: 'Finance',
      description: 'AI-powered solutions for fraud detection, algorithmic trading, risk management, and customer service.',
      icon: CurrencyDollarIcon,
      solutions: ['Fraud Detection', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance']
    },
    {
      name: 'E-commerce',
      description: 'Personalized recommendations, inventory management, customer service, and demand forecasting.',
      icon: GlobeAltIcon,
      solutions: ['Recommendation Engines', 'Price Optimization', 'Customer Segmentation', 'Supply Chain Optimization']
    },
    {
      name: 'Manufacturing',
      description: 'Quality control, predictive maintenance, supply chain optimization, and process automation.',
      icon: CogIcon,
      solutions: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Process Automation']
    },
    {
      name: 'Education',
      description: 'Personalized learning, automated grading, student performance analysis, and educational content generation.',
      icon: AcademicCapIcon,
      solutions: ['Personalized Learning', 'Automated Grading', 'Student Analytics', 'Content Generation']
    },
    {
      name: 'Media & Entertainment',
      description: 'Content recommendation, automated content creation, audience analysis, and content moderation.',
      icon: PhotoIcon,
      solutions: ['Content Recommendation', 'Automated Creation', 'Audience Analysis', 'Content Moderation']
    }
  ];

  const aiTechnologies = [
    {
      name: 'Deep Learning',
      description: 'Neural networks and deep learning models for complex pattern recognition and decision making.',
      icon: CpuChipIcon
    },
    {
      name: 'Natural Language Processing',
      description: 'Advanced text analysis, language understanding, and conversational AI capabilities.',
      icon: ChatBubbleLeftRightIcon
    },
    {
      name: 'Computer Vision',
      description: 'Image and video analysis, object detection, and visual content understanding.',
      icon: EyeIcon
    },
    {
      name: 'Reinforcement Learning',
      description: 'AI systems that learn through interaction and feedback to optimize decision making.',
      icon: RocketLaunchIcon
    },
    {
      name: 'Generative AI',
      description: 'AI models that can create new content, including text, images, and audio.',
      icon: LightBulbIcon
    },
    {
      name: 'Edge AI',
      description: 'AI processing at the edge for real-time, low-latency applications.',
      icon: CloudIcon
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your business needs, data assets, and technical requirements to identify AI opportunities.',
      icon: LightBulbIcon
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy with clear objectives, timelines, and success metrics.',
      icon: ChartBarIcon
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'Build and train custom AI models using your data and industry best practices.',
      icon: CodeBracketIcon
    },
    {
      step: '04',
      title: 'Deployment & Integration',
      description: 'Deploy AI solutions into your existing systems with seamless integration and monitoring.',
      icon: RocketLaunchIcon
    },
    {
      step: '05',
      title: 'Optimization & Support',
      description: 'Continuously monitor, optimize, and maintain your AI solutions for peak performance.',
      icon: CogIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics for businesses of all sizes." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, AI consulting, artificial intelligence, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/50 mb-8">
                <CpuChipIcon className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Advanced AI Solutions</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Solutions
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI-powered innovations that drive growth and efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300 text-sm">AI Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Model Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address your specific business challenges and opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-slate-700 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex space-x-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-purple-400 text-purple-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Industry <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI solutions tailored to meet the unique challenges and opportunities of different industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{industry.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Solutions:</h4>
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {solution}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Technologies Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Cutting-Edge <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest AI technologies and frameworks to deliver state-of-the-art solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTechnologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{tech.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation and maximum business value.
              </p>
            </div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can accelerate your digital transformation and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;