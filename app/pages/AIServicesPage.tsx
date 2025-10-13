import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Eye, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  TrendingUp,
  Code,
  Database
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics Platform',
      description: 'Transform your data into actionable insights with our advanced machine learning algorithms.',
      price: 'Starting at $299/month',
      features: [
        'Real-time data processing and analysis',
        'Predictive modeling and forecasting',
        'Custom machine learning model development',
        'Interactive dashboards and visualizations',
        'API integration and data connectors',
        'Automated report generation'
      ],
      benefits: [
        'Increase decision-making speed by 80%',
        'Reduce data analysis time by 90%',
        'Improve forecast accuracy by 95%',
        'ROI typically achieved within 3 months'
      ],
      useCases: [
        'Sales forecasting and trend analysis',
        'Customer behavior prediction',
        'Inventory optimization',
        'Financial risk assessment'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Chatbot Solutions',
      description: 'Enhance customer experience with AI-powered conversational agents.',
      price: 'Starting at $199/month',
      features: [
        'Natural language processing (NLP)',
        'Multi-language support',
        'Context-aware conversations',
        'Integration with existing systems',
        'Analytics and performance tracking',
        'Custom training and fine-tuning'
      ],
      benefits: [
        'Reduce customer support costs by 60%',
        'Provide 24/7 customer assistance',
        'Improve response time by 95%',
        'Increase customer satisfaction scores'
      ],
      useCases: [
        'Customer support automation',
        'Lead qualification and nurturing',
        'FAQ and knowledge base queries',
        'Appointment scheduling and booking'
      ]
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Extract insights from images and videos using advanced computer vision technology.',
      price: 'Starting at $399/month',
      features: [
        'Image recognition and classification',
        'Object detection and tracking',
        'Facial recognition and analysis',
        'Document processing and OCR',
        'Quality control and inspection',
        'Real-time video analysis'
      ],
      benefits: [
        'Automate visual inspection processes',
        'Improve accuracy and consistency',
        'Reduce human error by 85%',
        'Enable real-time decision making'
      ],
      useCases: [
        'Manufacturing quality control',
        'Security and surveillance systems',
        'Medical image analysis',
        'Retail inventory management'
      ]
    },
    {
      icon: Zap,
      title: 'Process Automation AI',
      description: 'Streamline business processes with intelligent automation solutions.',
      price: 'Starting at $249/month',
      features: [
        'Workflow automation and orchestration',
        'Document processing and extraction',
        'Email and communication automation',
        'Data entry and validation',
        'Exception handling and escalation',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Reduce manual work by 70%',
        'Improve process efficiency by 85%',
        'Eliminate human errors',
        'Scale operations without additional staff'
      ],
      useCases: [
        'Invoice processing and approval',
        'Customer onboarding workflows',
        'Data migration and synchronization',
        'Compliance and audit processes'
      ]
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics Engine',
      description: 'Forecast future trends and behaviors with our advanced predictive models.',
      price: 'Starting at $349/month',
      features: [
        'Time series forecasting',
        'Customer churn prediction',
        'Demand forecasting',
        'Risk assessment and scoring',
        'Anomaly detection',
        'Scenario planning and what-if analysis'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify opportunities and risks early',
        'Optimize resource allocation',
        'Improve strategic planning'
      ],
      useCases: [
        'Sales and revenue forecasting',
        'Customer lifetime value prediction',
        'Supply chain optimization',
        'Fraud detection and prevention'
      ]
    },
    {
      icon: Shield,
      title: 'AI-Powered Cybersecurity',
      description: 'Protect your business with intelligent threat detection and response systems.',
      price: 'Starting at $499/month',
      features: [
        'Threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Vulnerability assessment',
        'Security orchestration',
        'Compliance monitoring and reporting'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 90%',
        'Automate security responses',
        'Ensure continuous compliance'
      ],
      useCases: [
        'Network security monitoring',
        'Endpoint protection',
        'Email security and phishing detection',
        'Cloud security management'
      ]
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Custom ML model development and deployment',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost']
    },
    {
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, and language understanding',
      technologies: ['BERT', 'GPT', 'spaCy', 'NLTK']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis, object detection, and recognition',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet']
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks, deep learning models, and advanced AI',
      technologies: ['Keras', 'TensorFlow', 'PyTorch', 'ONNX']
    }
  ];

  const successStories = [
    {
      company: 'TechCorp Inc.',
      industry: 'Manufacturing',
      challenge: 'Quality control inefficiencies',
      solution: 'AI-powered visual inspection system',
      results: '95% reduction in defects, 60% faster inspection process'
    },
    {
      company: 'Global Finance Ltd.',
      industry: 'Financial Services',
      challenge: 'Fraud detection accuracy',
      solution: 'Machine learning fraud detection system',
      results: '90% improvement in fraud detection, 80% reduction in false positives'
    },
    {
      company: 'E-commerce Solutions',
      industry: 'Retail',
      challenge: 'Customer support scalability',
      solution: 'Intelligent chatbot and automation platform',
      results: '70% reduction in support costs, 24/7 customer assistance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, computer vision, natural language processing, and automation. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, automation, predictive analytics, AI consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Harness the power of artificial intelligence to transform your business operations, 
              improve decision-making, and drive innovation across all departments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get AI Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View AI Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve complex business challenges and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-900 rounded-xl p-8 hover:bg-slate-800 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <div className="text-cyan-400 font-semibold">{service.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across all major AI technologies and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="block bg-slate-700 text-cyan-400 px-3 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Success <span className="text-cyan-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from our AI implementations across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-slate-900 rounded-xl p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{story.company}</h3>
                  <div className="text-cyan-400 font-semibold mb-4">{story.industry}</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm">{story.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm">{story.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Results:</h4>
                  <p className="text-green-400 font-semibold text-sm">{story.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="text-cyan-400">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">Tailored AI solutions designed specifically for your business needs and challenges.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">Our AI implementations have delivered measurable improvements across all industries.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Implementation</h3>
              <p className="text-gray-300">Get your AI solutions up and running quickly with our streamlined deployment process.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300">Dedicated AI experts provide ongoing support and optimization for your solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Discover how our AI services can revolutionize your operations and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get AI Consultation
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}