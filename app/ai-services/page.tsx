import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, DollarSign, Award, ArrowRight, Bot, Microscope, Car, ShoppingCart, Stethoscope, CreditCard, Camera, FileText, Headphones, GraduationCap, Home, Scale, Briefcase } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    // Core AI Services
    {
      title: 'AI Strategy & Consulting',
      description: 'Comprehensive AI strategy development, implementation planning, and digital transformation consulting for enterprise organizations.',
      icon: Brain,
      price: '$5,000/month',
      features: [
        'AI readiness assessment',
        'Strategic roadmap development',
        'Technology stack selection',
        'ROI analysis & projections',
        'Change management planning',
        'Implementation timeline',
        'Risk assessment & mitigation',
        'Executive training & workshops'
      ],
      benefits: ['Accelerate AI adoption by 300%', 'Reduce implementation risks', 'Maximize ROI on AI investments', 'Ensure successful transformation'],
      marketPrice: '$8,000-15,000/month',
      category: 'AI Strategy',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'RPA', 'Cloud AI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Machine Learning Model Development',
      description: 'Custom machine learning model development, training, and deployment for predictive analytics and intelligent automation.',
      icon: Cpu,
      price: '$3,500/month',
      features: [
        'Custom ML model development',
        'Data preprocessing & feature engineering',
        'Model training & optimization',
        'Hyperparameter tuning',
        'Model validation & testing',
        'Production deployment',
        'Performance monitoring',
        'Continuous learning & updates'
      ],
      benefits: ['Improve prediction accuracy by 85%', 'Reduce manual processes by 70%', 'Enable data-driven decisions', 'Scale AI capabilities'],
      marketPrice: '$5,000-12,000/month',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and intelligent document processing.',
      icon: MessageSquare,
      price: '$2,800/month',
      features: [
        'Text analysis & classification',
        'Sentiment analysis',
        'Named entity recognition',
        'Chatbot development',
        'Document processing',
        'Language translation',
        'Text summarization',
        'Question answering systems'
      ],
      benefits: ['Process 10x more text data', 'Improve customer service by 60%', 'Automate document processing', 'Enable multilingual support'],
      marketPrice: '$4,000-8,000/month',
      category: 'Natural Language Processing',
      technologies: ['OpenAI GPT', 'BERT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision applications including image recognition, object detection, and visual analytics.',
      icon: Eye,
      price: '$3,200/month',
      features: [
        'Image classification',
        'Object detection & tracking',
        'Facial recognition',
        'OCR & document scanning',
        'Quality inspection',
        'Medical imaging analysis',
        'Video analytics',
        'Real-time processing'
      ],
      benefits: ['Automate visual inspections', 'Improve accuracy by 95%', 'Enable real-time analysis', 'Reduce human error'],
      marketPrice: '$4,500-9,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'TensorFlow', 'PyTorch'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // Industry-Specific AI Solutions
    {
      title: 'AI Healthcare Solutions',
      description: 'Specialized AI solutions for healthcare including medical imaging, drug discovery, and patient care optimization.',
      icon: Stethoscope,
      price: '$4,500/month',
      features: [
        'Medical image analysis',
        'Drug discovery assistance',
        'Patient risk assessment',
        'Treatment recommendation',
        'Clinical trial optimization',
        'Electronic health record analysis',
        'Telemedicine support',
        'Compliance monitoring'
      ],
      benefits: ['Improve diagnosis accuracy by 40%', 'Reduce treatment costs by 30%', 'Accelerate drug discovery', 'Enhance patient outcomes'],
      marketPrice: '$7,000-15,000/month',
      category: 'Healthcare AI',
      technologies: ['Medical Imaging AI', 'Deep Learning', 'TensorFlow', 'PyTorch', 'DICOM', 'HL7'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for banking, insurance, and financial services including fraud detection and risk management.',
      icon: CreditCard,
      price: '$3,800/month',
      features: [
        'Fraud detection & prevention',
        'Credit risk assessment',
        'Algorithmic trading',
        'Insurance underwriting',
        'Regulatory compliance',
        'Anti-money laundering',
        'Customer behavior analysis',
        'Portfolio optimization'
      ],
      benefits: ['Reduce fraud by 90%', 'Improve risk assessment accuracy', 'Increase trading profits by 25%', 'Ensure compliance'],
      marketPrice: '$6,000-12,000/month',
      category: 'Fintech AI',
      technologies: ['Machine Learning', 'Deep Learning', 'Time Series Analysis', 'Risk Models', 'Blockchain'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce solutions including recommendation engines, price optimization, and customer analytics.',
      icon: ShoppingCart,
      price: '$2,500/month',
      features: [
        'Product recommendation engine',
        'Dynamic pricing optimization',
        'Customer behavior analysis',
        'Inventory management',
        'Search optimization',
        'Personalized marketing',
        'Churn prediction',
        'A/B testing automation'
      ],
      benefits: ['Increase sales by 35%', 'Improve customer experience', 'Optimize pricing strategy', 'Reduce cart abandonment'],
      marketPrice: '$4,000-8,000/month',
      category: 'E-commerce AI',
      technologies: ['Recommendation Systems', 'Machine Learning', 'Python', 'TensorFlow', 'Apache Spark'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Manufacturing & IoT',
      description: 'Industrial AI solutions for predictive maintenance, quality control, and smart manufacturing optimization.',
      icon: Bot,
      price: '$4,200/month',
      features: [
        'Predictive maintenance',
        'Quality control automation',
        'Supply chain optimization',
        'Energy efficiency optimization',
        'Production line monitoring',
        'Defect detection',
        'IoT data analysis',
        'Smart scheduling'
      ],
      benefits: ['Reduce downtime by 50%', 'Improve quality by 40%', 'Optimize energy usage', 'Increase production efficiency'],
      marketPrice: '$6,500-13,000/month',
      category: 'Industrial AI',
      technologies: ['IoT Analytics', 'Time Series Analysis', 'Edge Computing', 'Digital Twins', 'PLC Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Automation & RPA
    {
      title: 'Intelligent Process Automation (IPA)',
      description: 'Advanced process automation combining RPA with AI for intelligent decision-making and exception handling.',
      icon: Zap,
      price: '$2,200/month',
      features: [
        'Process discovery & analysis',
        'RPA bot development',
        'AI decision integration',
        'Exception handling',
        'Process optimization',
        'Workflow orchestration',
        'Performance monitoring',
        'Continuous improvement'
      ],
      benefits: ['Automate 80% of repetitive tasks', 'Reduce processing time by 70%', 'Improve accuracy by 95%', 'Enable 24/7 operations'],
      marketPrice: '$3,500-7,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Python', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI solutions for customer service, sales, and internal operations.',
      icon: Bot,
      price: '$1,800/month',
      features: [
        'Conversational AI development',
        'Multi-channel deployment',
        'Intent recognition',
        'Context management',
        'Integration with CRM/ERP',
        'Voice & text support',
        'Analytics & reporting',
        'Continuous learning'
      ],
      benefits: ['Reduce support costs by 60%', 'Improve response time by 90%', 'Enable 24/7 availability', 'Enhance customer satisfaction'],
      marketPrice: '$3,000-6,000/month',
      category: 'Conversational AI',
      technologies: ['OpenAI GPT', 'Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'NLP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Analytics & Business Intelligence
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced analytics and business intelligence solutions with predictive insights and automated reporting.',
      icon: BarChart,
      price: '$2,800/month',
      features: [
        'Predictive analytics',
        'Automated insights generation',
        'Real-time dashboards',
        'Anomaly detection',
        'Trend analysis',
        'Custom reporting',
        'Data visualization',
        'Mobile analytics'
      ],
      benefits: ['Make data-driven decisions faster', 'Identify opportunities early', 'Reduce manual reporting by 80%', 'Improve forecasting accuracy'],
      marketPrice: '$4,500-9,000/month',
      category: 'AI Analytics',
      technologies: ['Tableau', 'Power BI', 'Python', 'R', 'TensorFlow', 'Apache Spark'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Data Engineering & MLOps',
      description: 'Complete data engineering and MLOps solutions for scalable AI model deployment and management.',
      icon: Cpu,
      price: '$3,500/month',
      features: [
        'Data pipeline development',
        'Feature store implementation',
        'Model versioning & deployment',
        'A/B testing framework',
        'Model monitoring & alerting',
        'Data quality management',
        'Scalable infrastructure',
        'CI/CD for ML'
      ],
      benefits: ['Deploy models 10x faster', 'Ensure model reliability', 'Scale AI operations', 'Reduce operational overhead'],
      marketPrice: '$5,500-11,000/month',
      category: 'MLOps',
      technologies: ['Kubernetes', 'Docker', 'Apache Airflow', 'MLflow', 'Kubeflow', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Content & Marketing
    {
      title: 'AI Content Generation & Marketing',
      description: 'Intelligent content creation, marketing automation, and personalized customer engagement solutions.',
      icon: FileText,
      price: '$1,500/month',
      features: [
        'Automated content generation',
        'Personalized marketing campaigns',
        'SEO optimization',
        'Social media management',
        'Email marketing automation',
        'Content performance analysis',
        'A/B testing',
        'Multi-language support'
      ],
      benefits: ['Create content 5x faster', 'Increase engagement by 45%', 'Improve conversion rates', 'Scale marketing efforts'],
      marketPrice: '$2,500-5,000/month',
      category: 'AI Marketing',
      technologies: ['OpenAI GPT', 'Claude', 'Marketing Automation', 'Analytics', 'CRM Integration'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Voice & Audio Processing',
      description: 'Advanced voice recognition, speech synthesis, and audio analysis solutions for various applications.',
      icon: Headphones,
      price: '$2,200/month',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice recognition',
        'Audio analysis',
        'Language detection',
        'Voice biometrics',
        'Real-time processing',
        'Multi-language support'
      ],
      benefits: ['Enable voice interfaces', 'Improve accessibility', 'Automate audio processing', 'Enhance user experience'],
      marketPrice: '$3,500-7,000/month',
      category: 'Voice AI',
      technologies: ['Speech Recognition', 'TTS', 'Whisper', 'Google Cloud Speech', 'Azure Speech'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },

    // AI Research & Development
    {
      title: 'AI Research & Development',
      description: 'Cutting-edge AI research and development services for next-generation AI solutions and innovation.',
      icon: Microscope,
      price: '$8,000/month',
      features: [
        'Custom AI algorithm development',
        'Research paper implementation',
        'Novel model architectures',
        'Performance optimization',
        'Patent development',
        'Proof of concept development',
        'Academic collaboration',
        'Technology transfer'
      ],
      benefits: ['Access cutting-edge AI', 'Stay ahead of competition', 'Develop proprietary solutions', 'Drive innovation'],
      marketPrice: '$12,000-25,000/month',
      category: 'AI Research',
      technologies: ['Deep Learning', 'Reinforcement Learning', 'Quantum Computing', 'Edge AI', 'Federated Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Ethics & Governance',
      description: 'AI ethics consulting, bias detection, fairness assessment, and responsible AI implementation.',
      icon: Scale,
      price: '$2,500/month',
      features: [
        'AI ethics framework development',
        'Bias detection & mitigation',
        'Fairness assessment',
        'Transparency reporting',
        'Compliance monitoring',
        'Ethics training',
        'Audit & certification',
        'Policy development'
      ],
      benefits: ['Ensure ethical AI use', 'Build trust with stakeholders', 'Meet regulatory requirements', 'Reduce reputational risks'],
      marketPrice: '$4,000-8,000/month',
      category: 'AI Ethics',
      technologies: ['Fairness Tools', 'Bias Detection', 'Explainable AI', 'Compliance Frameworks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, healthcare AI, fintech solutions, and intelligent automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, healthcare AI, fintech AI, AI automation, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            Cutting-Edge Artificial Intelligence Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our comprehensive AI services. From machine learning and natural language processing 
            to computer vision and intelligent automation, we deliver enterprise-grade AI solutions that drive real results.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300 text-xs sm:text-sm">AI Service Categories</div>
            </div>
            <div className="cyber-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">$1,500</div>
              <div className="text-gray-300 text-xs sm:text-sm">Starting Price</div>
            </div>
            <div className="cyber-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300 text-xs sm:text-sm">Accuracy Improvement</div>
            </div>
            <div className="cyber-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">300%</div>
              <div className="text-gray-300 text-xs sm:text-sm">ROI Average</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
            All Categories
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {aiServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg">
                    <IconComponent className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-400">{service.price}</div>
                    <div className="text-xs text-gray-400 line-through">{service.marketPrice}</div>
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                {/* Category Badge */}
                <div className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  {service.category}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-xs text-gray-400 mb-3">{service.contactInfo}</div>
                  <div className="flex space-x-2">
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                    >
                      Get Started
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-600 transition-all"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Capabilities Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Our AI Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-300 text-sm">Custom ML models for predictive analytics and intelligent automation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Natural Language Processing</h3>
              <p className="text-gray-300 text-sm">Advanced text analysis, chatbots, and language understanding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-300 text-sm">Image recognition, object detection, and visual analytics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Process Automation</h3>
              <p className="text-gray-300 text-sm">Intelligent automation with AI-powered decision making</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with our comprehensive AI services. From strategy to implementation, 
            we deliver enterprise-grade AI solutions that drive real results and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Start Your AI Journey
            </a>
            <a
              href="tel:+13024640950"
              className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;