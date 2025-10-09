import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, Bot, Database, Network, Cloud, Code, Settings, Monitor, HardDrive, Wifi, Lock } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    // AI Development & Implementation
    {
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development, technology assessment, and implementation roadmap for enterprise organizations.',
      icon: '🧠',
      price: '$3,500/month',
      features: [
        'AI readiness assessment',
        'Technology stack evaluation',
        'ROI analysis and business case development',
        'Implementation roadmap creation',
        'Change management planning',
        'Vendor selection and evaluation',
        'Compliance and ethics framework',
        'Training and skill development'
      ],
      benefits: [
        'Reduce AI implementation risks by 70%',
        'Accelerate time-to-value by 50%',
        'Ensure alignment with business goals',
        'Maximize ROI on AI investments'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'AI Strategy',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'RPA', 'MLOps'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Machine Learning Model Development',
      description: 'Custom machine learning models tailored to your specific business needs with end-to-end development and deployment.',
      icon: '🤖',
      price: '$2,800/month',
      features: [
        'Custom ML model development',
        'Data preprocessing and feature engineering',
        'Model training and optimization',
        'Hyperparameter tuning',
        'Model validation and testing',
        'Model deployment and monitoring',
        'Performance tracking and updates',
        'Documentation and maintenance'
      ],
      benefits: [
        'Improve prediction accuracy by 40%',
        'Automate decision-making processes',
        'Reduce manual work by 80%',
        'Scale AI capabilities across organization'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'ML Development',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'MLflow'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding applications.',
      icon: '💬',
      price: '$2,200/month',
      features: [
        'Text classification and sentiment analysis',
        'Named entity recognition (NER)',
        'Language translation and localization',
        'Chatbot and conversational AI',
        'Document processing and extraction',
        'Text summarization and generation',
        'Question answering systems',
        'Multilingual support'
      ],
      benefits: [
        'Process unstructured data efficiently',
        'Improve customer service with chatbots',
        'Extract insights from text data',
        'Automate document processing by 90%'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'NLP Services',
      technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face', 'LangChain'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Computer Vision & Image Processing
    {
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision applications including image recognition, object detection, and visual analytics.',
      icon: '👁️',
      price: '$2,500/month',
      features: [
        'Image classification and recognition',
        'Object detection and tracking',
        'Facial recognition and analysis',
        'OCR and document scanning',
        'Medical image analysis',
        'Quality control and inspection',
        'Augmented reality applications',
        'Real-time video processing'
      ],
      benefits: [
        'Automate visual inspection processes',
        'Improve accuracy in image analysis',
        'Enable new visual-based applications',
        'Reduce human error in visual tasks'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'TensorFlow', 'PyTorch', 'CUDA'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Analytics & Insights',
      description: 'Advanced analytics solutions using AI to uncover patterns, predict trends, and generate actionable business insights.',
      icon: '📊',
      price: '$1,800/month',
      features: [
        'Predictive analytics and forecasting',
        'Anomaly detection and alerting',
        'Customer behavior analysis',
        'Market trend analysis',
        'Risk assessment and modeling',
        'Real-time dashboards and reporting',
        'Automated insight generation',
        'Data visualization and storytelling'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify new business opportunities',
        'Reduce risks through early detection',
        'Improve operational efficiency by 35%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'AI Analytics',
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Pandas', 'Scikit-learn'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Automation & Workflow
    {
      title: 'Intelligent Process Automation (IPA)',
      description: 'AI-powered automation solutions that combine RPA with machine learning to automate complex business processes.',
      icon: '⚙️',
      price: '$2,200/month',
      features: [
        'End-to-end process automation',
        'Intelligent document processing',
        'Decision-making automation',
        'Exception handling and escalation',
        'Process optimization and monitoring',
        'Integration with existing systems',
        'Compliance and audit trails',
        'Performance analytics and reporting'
      ],
      benefits: [
        'Reduce process time by 70%',
        'Eliminate human errors',
        'Improve process consistency',
        'Free up staff for higher-value work'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'APIs', 'ML Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Customer Service',
      description: 'Intelligent customer service solutions including chatbots, virtual assistants, and automated support systems.',
      icon: '🎧',
      price: '$1,500/month',
      features: [
        'Intelligent chatbots and virtual assistants',
        'Multi-channel customer support',
        'Sentiment analysis and emotion detection',
        'Automated ticket routing and prioritization',
        'Knowledge base management',
        'Customer journey optimization',
        'Real-time language translation',
        'Performance monitoring and analytics'
      ],
      benefits: [
        'Provide 24/7 customer support',
        'Reduce support costs by 60%',
        'Improve customer satisfaction by 40%',
        'Handle multiple languages and channels'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Customer Service',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'Microsoft Bot Framework', 'NLP', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI for Specific Industries
    {
      title: 'AI Healthcare Solutions',
      description: 'Specialized AI solutions for healthcare including medical imaging, drug discovery, and patient care optimization.',
      icon: '🏥',
      price: '$4,500/month',
      features: [
        'Medical image analysis and diagnosis',
        'Drug discovery and development',
        'Patient risk assessment and prediction',
        'Electronic health record analysis',
        'Clinical decision support systems',
        'Telemedicine and remote monitoring',
        'Healthcare workflow optimization',
        'Regulatory compliance (HIPAA, FDA)'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Accelerate drug development process',
        'Reduce healthcare costs by 25%',
        'Enhance patient outcomes and safety'
      ],
      marketPrice: '$7,000-15,000/month',
      category: 'Healthcare AI',
      technologies: ['Medical Imaging AI', 'TensorFlow', 'PyTorch', 'DICOM', 'HL7', 'FHIR', 'HIPAA'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Services',
      description: 'AI solutions for financial services including fraud detection, algorithmic trading, and risk management.',
      icon: '💰',
      price: '$3,200/month',
      features: [
        'Fraud detection and prevention',
        'Algorithmic trading systems',
        'Credit risk assessment',
        'Anti-money laundering (AML)',
        'Regulatory compliance monitoring',
        'Portfolio optimization',
        'Market sentiment analysis',
        'Real-time transaction monitoring'
      ],
      benefits: [
        'Detect fraud with 99% accuracy',
        'Reduce false positives by 80%',
        'Improve trading performance by 25%',
        'Ensure regulatory compliance'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Fintech AI',
      technologies: ['Machine Learning', 'Deep Learning', 'Time Series Analysis', 'Blockchain', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Infrastructure & MLOps
    {
      title: 'AI Infrastructure & MLOps',
      description: 'Complete AI infrastructure setup with MLOps practices for model deployment, monitoring, and lifecycle management.',
      icon: '🔧',
      price: '$2,800/month',
      features: [
        'AI infrastructure design and setup',
        'Model deployment and serving',
        'MLOps pipeline development',
        'Model monitoring and drift detection',
        'A/B testing and experimentation',
        'Model versioning and governance',
        'Performance optimization',
        'Security and compliance'
      ],
      benefits: [
        'Deploy models 10x faster',
        'Ensure model reliability and performance',
        'Reduce operational overhead by 60%',
        'Enable rapid experimentation and iteration'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'AI Infrastructure',
      technologies: ['Kubernetes', 'Docker', 'MLflow', 'Kubeflow', 'TensorFlow Serving', 'AWS SageMaker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Data Engineering',
      description: 'Comprehensive data engineering solutions for AI including data pipelines, feature stores, and data quality management.',
      icon: '🗄️',
      price: '$2,000/month',
      features: [
        'Data pipeline design and implementation',
        'Feature engineering and feature stores',
        'Data quality monitoring and validation',
        'Real-time data processing',
        'Data lake and warehouse optimization',
        'ETL/ELT pipeline development',
        'Data governance and cataloging',
        'Performance tuning and optimization'
      ],
      benefits: [
        'Improve data quality by 90%',
        'Reduce data processing time by 70%',
        'Enable real-time AI applications',
        'Ensure data consistency and reliability'
      ],
      marketPrice: '$3,200-6,500/month',
      category: 'Data Engineering',
      technologies: ['Apache Spark', 'Kafka', 'Airflow', 'dbt', 'Snowflake', 'BigQuery', 'Databricks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Content & Marketing
    {
      title: 'AI Content Generation',
      description: 'AI-powered content creation solutions for marketing, documentation, and communication needs.',
      icon: '✍️',
      price: '$1,200/month',
      features: [
        'Automated content generation',
        'Multi-language content creation',
        'SEO-optimized content',
        'Brand voice consistency',
        'Content personalization',
        'Social media content automation',
        'Email marketing optimization',
        'Content performance analytics'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain consistent brand voice',
        'Improve SEO performance by 50%',
        'Scale content production efficiently'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Content AI',
      technologies: ['OpenAI GPT', 'Claude', 'BERT', 'T5', 'Content APIs', 'SEO Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation solutions with AI-powered personalization, targeting, and campaign optimization.',
      icon: '📢',
      price: '$1,800/month',
      features: [
        'Customer segmentation and targeting',
        'Personalized marketing campaigns',
        'Predictive customer analytics',
        'Automated A/B testing',
        'Lead scoring and qualification',
        'Email and SMS automation',
        'Social media management',
        'Marketing ROI optimization'
      ],
      benefits: [
        'Increase conversion rates by 40%',
        'Improve customer engagement by 60%',
        'Reduce marketing costs by 30%',
        'Personalize customer experiences'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Marketing AI',
      technologies: ['Machine Learning', 'Marketing APIs', 'CRM Integration', 'Analytics Tools', 'Personalization Engines'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, natural language processing, computer vision, and AI automation. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, AI automation, artificial intelligence, deep learning" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Cutting-edge artificial intelligence solutions designed to transform your business operations and drive innovation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI solutions delivered by machine learning experts with proven industry experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced AI</h3>
                <p className="text-gray-600">State-of-the-art machine learning and deep learning technologies</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
                <p className="text-gray-600">Deploy AI solutions quickly with minimal disruption to your business</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost-Effective</h3>
                <p className="text-gray-600">Save up to 50% compared to market rates while getting superior AI solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 400% ROI within 6 months of AI implementation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category} Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Advanced {category.toLowerCase()} solutions powered by cutting-edge AI technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div className="text-sm text-green-600 font-semibold">
                          Save up to 50% vs market rates
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                      </div>

                      <div className="flex gap-2">
                        <a 
                          href="tel:+13024640950"
                          className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
                        >
                          Call Now
                        </a>
                        <a 
                          href="mailto:kleber@ziontechgroup.com"
                          className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                        >
                          Email Us
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Pricing Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competitive Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Save significantly compared to market rates while getting superior AI solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Average</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$4,000-8,000</div>
                <p className="text-gray-600 mb-6">per month for similar AI services</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Basic AI features</li>
                  <li>• Limited customization</li>
                  <li>• Standard support</li>
                  <li>• Generic solutions</li>
                </ul>
              </div>
              <div className="bg-purple-600 rounded-lg p-8 text-center text-white relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-bold">
                    BEST VALUE
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
                <div className="text-4xl font-bold mb-4">$2,000-3,500</div>
                <p className="text-purple-100 mb-6">per month for premium AI solutions</p>
                <ul className="text-left space-y-2 text-purple-100">
                  <li>• Advanced AI features</li>
                  <li>• Full customization</li>
                  <li>• 24/7 expert support</li>
                  <li>• Industry-specific solutions</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-600 mb-4">$10,000+</div>
                <p className="text-gray-600 mb-6">per month for enterprise AI solutions</p>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Complex implementations</li>
                  <li>• High maintenance costs</li>
                  <li>• Long deployment times</li>
                  <li>• Vendor lock-in</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our AI experts for a free consultation and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;