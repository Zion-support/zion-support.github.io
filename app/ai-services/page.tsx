import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Brain, Cloud, Shield, ArrowRight, Sparkles } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent automation.',
      icon: '🧠',
      price: '$2,500/month',
      features: [
        'Custom model development',
        'Data preprocessing & cleaning',
        'Model training & optimization',
        'Real-time inference',
        'Model monitoring & maintenance',
        'A/B testing framework'
      ],
      benefits: [
        'Increase prediction accuracy by 40%',
        'Reduce manual analysis time by 70%',
        'Improve decision-making speed'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'AWS SageMaker']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment detection, and language understanding.',
      icon: '💬',
      price: '$1,800/month',
      features: [
        'Text classification & sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Chatbot development',
        'Document summarization',
        'Intent recognition'
      ],
      benefits: [
        'Process 10,000+ documents/hour',
        'Improve customer satisfaction by 35%',
        'Reduce response time by 60%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'NLP',
      technologies: ['OpenAI GPT', 'BERT', 'spaCy', 'NLTK', 'Hugging Face']
    },
    {
      title: 'Computer Vision Systems',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence.',
      icon: '👁️',
      price: '$3,200/month',
      features: [
        'Object detection & recognition',
        'Image classification',
        'Facial recognition',
        'OCR & document scanning',
        'Video analysis',
        'Quality inspection automation'
      ],
      benefits: [
        'Automate visual inspections',
        'Reduce human error by 90%',
        'Process images 50x faster'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Advanced analytics for forecasting, trend analysis, and business intelligence.',
      icon: '📊',
      price: '$2,200/month',
      features: [
        'Time series forecasting',
        'Anomaly detection',
        'Customer behavior prediction',
        'Risk assessment',
        'Demand forecasting',
        'Performance optimization'
      ],
      benefits: [
        'Improve forecast accuracy by 45%',
        'Reduce inventory costs by 30%',
        'Identify opportunities 3x faster'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Analytics',
      technologies: ['Python', 'R', 'Pandas', 'NumPy', 'Prophet', 'ARIMA']
    },
    {
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI for customer service, sales, and support automation.',
      icon: '🤖',
      price: '$1,500/month',
      features: [
        'Multi-channel deployment',
        'Context-aware conversations',
        'Integration with CRM systems',
        'Multi-language support',
        'Sentiment analysis',
        'Escalation to human agents'
      ],
      benefits: [
        'Handle 80% of customer inquiries',
        'Reduce support costs by 50%',
        'Provide 24/7 availability'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Conversational AI',
      technologies: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'OpenAI GPT']
    },
    {
      title: 'Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and product suggestions.',
      icon: '🎯',
      price: '$2,000/month',
      features: [
        'Collaborative filtering',
        'Content-based filtering',
        'Hybrid recommendation systems',
        'Real-time personalization',
        'A/B testing for recommendations',
        'Performance analytics'
      ],
      benefits: [
        'Increase conversion rates by 25%',
        'Improve user engagement by 40%',
        'Boost average order value by 30%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Recommendation Systems',
      technologies: ['Apache Spark', 'TensorFlow', 'Scikit-learn', 'Redis', 'MongoDB']
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation using AI to streamline business operations.',
      icon: '⚙️',
      price: '$2,800/month',
      features: [
        'Document processing automation',
        'Workflow optimization',
        'Decision automation',
        'Exception handling',
        'Process monitoring',
        'Performance analytics'
      ],
      benefits: [
        'Reduce process time by 60%',
        'Eliminate human errors',
        'Improve operational efficiency'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Blue Prism', 'Python', 'RPA', 'Machine Learning']
    },
    {
      title: 'AI Data Pipeline',
      description: 'Intelligent data processing, cleaning, and transformation using AI techniques.',
      icon: '🔄',
      price: '$1,900/month',
      features: [
        'Automated data cleaning',
        'Data quality assessment',
        'Feature engineering',
        'Data validation',
        'ETL optimization',
        'Real-time processing'
      ],
      benefits: [
        'Process data 10x faster',
        'Improve data quality by 85%',
        'Reduce manual data work by 90%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Data Processing',
      technologies: ['Apache Airflow', 'Apache Kafka', 'Python', 'Pandas', 'Apache Spark']
    },
    {
      title: 'AI Security Solutions',
      description: 'Advanced AI-powered security systems for threat detection and prevention.',
      icon: '🛡️',
      price: '$3,500/month',
      features: [
        'Threat detection & analysis',
        'Anomaly detection',
        'Fraud prevention',
        'Security monitoring',
        'Incident response automation',
        'Compliance reporting'
      ],
      benefits: [
        'Detect threats 5x faster',
        'Reduce false positives by 70%',
        'Improve security posture'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'AI Security',
      technologies: ['SIEM', 'Machine Learning', 'Python', 'TensorFlow', 'Elasticsearch']
    },
    {
      title: 'AI Voice Solutions',
      description: 'Voice recognition, synthesis, and conversational AI for voice-enabled applications.',
      icon: '🎤',
      price: '$2,300/month',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice command recognition',
        'Multi-language support',
        'Voice biometrics',
        'Real-time processing'
      ],
      benefits: [
        'Improve accessibility',
        'Enable hands-free operations',
        'Enhance user experience'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Voice AI',
      technologies: ['Google Speech API', 'Amazon Polly', 'Azure Speech', 'DeepSpeech']
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, NLP, computer vision, and predictive analytics. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, predictive analytics, artificial intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-12 h-12 text-cyan-400 mr-4 animate-pulse" />
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    AI Services
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started Today
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/contact"
                  className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Free Consultation
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {category} Solutions
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  Specialized AI solutions for {category.toLowerCase()} applications
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {aiServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="group relative bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center mb-6">
                          <div className="text-5xl mr-4 group-hover:animate-bounce">{service.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">{service.title}</h3>
                            <div className="flex items-center space-x-4">
                              <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                              <span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-purple-400 mb-3">Business Benefits:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                                <Star className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-green-400 mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                          Get Started
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Transform Your Business with AI?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today for a free consultation and custom AI solution recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="group relative bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </span>
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;