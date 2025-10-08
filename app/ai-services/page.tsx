import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink, Brain, Cpu, Eye, MessageSquare } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced AI analytics platform.',
      icon: '🧠',
      price: '$2,500/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time data visualization',
        'Automated report generation',
        'Natural language querying',
        'Custom dashboard creation',
        'Machine learning model deployment'
      ],
      benefits: [
        'Increase decision speed by 60%',
        'Reduce manual reporting by 85%',
        'Improve forecast accuracy by 40%',
        'Identify new revenue opportunities'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Analytics & Intelligence',
      technologies: ['TensorFlow', 'PyTorch', 'Apache Spark', 'Kubernetes', 'React', 'Python'],
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      popular: true
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis for quality control, security, and automation.',
      icon: '👁️',
      price: '$3,500/month',
      features: [
        'Object detection and recognition',
        'Facial recognition and verification',
        'Quality control automation',
        'Real-time video analytics',
        'Custom model training',
        'Edge deployment capabilities'
      ],
      benefits: [
        'Reduce quality control costs by 70%',
        'Improve accuracy by 95%',
        'Enable 24/7 monitoring',
        'Automate manual inspection processes'
      ],
      marketPrice: '$8,000-25,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'TensorFlow', 'CUDA', 'Docker'],
      link: 'https://ziontechgroup.com/computer-vision-solutions'
    },
    {
      title: 'Natural Language Processing Platform',
      description: 'Advanced text analysis, sentiment analysis, and language understanding capabilities.',
      icon: '💬',
      price: '$2,000/month',
      features: [
        'Sentiment analysis and emotion detection',
        'Text classification and categorization',
        'Named entity recognition',
        'Language translation services',
        'Chatbot and virtual assistant development',
        'Document summarization'
      ],
      benefits: [
        'Process 10,000+ documents per hour',
        'Improve customer satisfaction by 35%',
        'Automate content moderation',
        'Enable multilingual operations'
      ],
      marketPrice: '$4,000-12,000/month',
      category: 'NLP & Language',
      technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers', 'FastAPI'],
      link: 'https://ziontechgroup.com/nlp-platform',
      popular: true
    },
    {
      title: 'AI-Powered Automation Suite',
      description: 'Intelligent process automation with decision-making capabilities and exception handling.',
      icon: '⚙️',
      price: '$4,000/month',
      features: [
        'Workflow automation with AI decision points',
        'Document processing and data extraction',
        'Email and communication automation',
        'Exception handling and escalation',
        'Process optimization recommendations',
        'Integration with existing systems'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve process accuracy by 90%',
        'Scale operations without additional staff',
        'Reduce operational costs by 50%'
      ],
      marketPrice: '$10,000-30,000/month',
      category: 'Process Automation',
      technologies: ['RPA', 'Machine Learning', 'APIs', 'Workflow Engines', 'Python', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-automation-suite'
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Advanced machine learning models for forecasting, risk assessment, and optimization.',
      icon: '📈',
      price: '$3,000/month',
      features: [
        'Demand forecasting and inventory optimization',
        'Risk assessment and fraud detection',
        'Customer lifetime value prediction',
        'Churn prediction and retention strategies',
        'Price optimization algorithms',
        'Real-time scoring and recommendations'
      ],
      benefits: [
        'Improve forecast accuracy by 60%',
        'Reduce inventory costs by 30%',
        'Increase customer retention by 25%',
        'Optimize pricing strategies'
      ],
      marketPrice: '$6,000-20,000/month',
      category: 'Predictive Analytics',
      technologies: ['Scikit-learn', 'XGBoost', 'LightGBM', 'Pandas', 'NumPy', 'Jupyter'],
      link: 'https://ziontechgroup.com/predictive-analytics'
    },
    {
      title: 'AI-Powered Customer Service',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing.',
      icon: '🤖',
      price: '$2,200/month',
      features: [
        'Intelligent chatbot development',
        'Sentiment analysis and emotion detection',
        'Automated ticket classification and routing',
        'Knowledge base optimization',
        'Multi-channel support integration',
        'Performance analytics and insights'
      ],
      benefits: [
        'Reduce support costs by 65%',
        'Improve response time by 80%',
        'Increase customer satisfaction by 40%',
        'Enable 24/7 support availability'
      ],
      marketPrice: '$5,000-15,000/month',
      category: 'Customer Service',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'NLP', 'React', 'Node.js'],
      link: 'https://ziontechgroup.com/ai-customer-service'
    },
    {
      title: 'AI Content Generation Platform',
      description: 'Automated content creation for marketing, documentation, and communication.',
      icon: '✍️',
      price: '$1,800/month',
      features: [
        'Blog post and article generation',
        'Social media content creation',
        'Email marketing automation',
        'Product description generation',
        'SEO-optimized content',
        'Multi-language content support'
      ],
      benefits: [
        'Create content 20x faster',
        'Maintain consistent brand voice',
        'Improve SEO rankings by 50%',
        'Reduce content creation costs by 70%'
      ],
      marketPrice: '$3,000-10,000/month',
      category: 'Content Generation',
      technologies: ['GPT-4', 'Claude', 'BERT', 'NLP', 'React', 'Python'],
      link: 'https://ziontechgroup.com/ai-content-generation',
      popular: true
    },
    {
      title: 'AI-Powered Security Solutions',
      description: 'Advanced threat detection, anomaly detection, and security automation.',
      icon: '🛡️',
      price: '$4,500/month',
      features: [
        'Real-time threat detection',
        'Anomaly detection and behavioral analysis',
        'Automated incident response',
        'Security log analysis',
        'Fraud detection and prevention',
        'Compliance monitoring and reporting'
      ],
      benefits: [
        'Detect threats 90% faster',
        'Reduce false positives by 75%',
        'Automate security responses',
        'Improve compliance posture'
      ],
      marketPrice: '$10,000-35,000/month',
      category: 'Security & Compliance',
      technologies: ['Machine Learning', 'SIEM', 'SOC', 'Python', 'TensorFlow', 'Kubernetes'],
      link: 'https://ziontechgroup.com/ai-security-solutions'
    },
    {
      title: 'AI-Powered Recommendation Engine',
      description: 'Personalized recommendations for products, content, and services.',
      icon: '🎯',
      price: '$2,800/month',
      features: [
        'Product recommendation algorithms',
        'Content personalization',
        'Cross-selling and upselling',
        'Real-time recommendation updates',
        'A/B testing and optimization',
        'Performance analytics and insights'
      ],
      benefits: [
        'Increase conversion rates by 35%',
        'Improve customer engagement by 50%',
        'Boost average order value by 25%',
        'Enhance user experience'
      ],
      marketPrice: '$5,000-18,000/month',
      category: 'Recommendation Systems',
      technologies: ['Collaborative Filtering', 'Matrix Factorization', 'Deep Learning', 'Python', 'Spark', 'Redis'],
      link: 'https://ziontechgroup.com/ai-recommendation-engine'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
      icon: '🚚',
      price: '$5,000/month',
      features: [
        'Demand forecasting and planning',
        'Inventory optimization algorithms',
        'Route optimization and logistics',
        'Supplier performance analysis',
        'Risk assessment and mitigation',
        'Real-time supply chain monitoring'
      ],
      benefits: [
        'Reduce inventory costs by 40%',
        'Improve delivery times by 30%',
        'Minimize supply chain disruptions',
        'Optimize supplier relationships'
      ],
      marketPrice: '$12,000-40,000/month',
      category: 'Supply Chain',
      technologies: ['Optimization Algorithms', 'Machine Learning', 'Python', 'Gurobi', 'CPLEX', 'Kubernetes'],
      link: 'https://ziontechgroup.com/ai-supply-chain'
    },
    {
      title: 'AI-Powered Financial Analysis',
      description: 'Advanced financial modeling, risk assessment, and investment analysis.',
      icon: '💰',
      price: '$3,500/month',
      features: [
        'Financial risk modeling',
        'Credit scoring and assessment',
        'Investment portfolio optimization',
        'Fraud detection and prevention',
        'Regulatory compliance monitoring',
        'Real-time financial insights'
      ],
      benefits: [
        'Improve risk assessment accuracy by 60%',
        'Reduce fraud losses by 80%',
        'Optimize investment returns by 25%',
        'Ensure regulatory compliance'
      ],
      marketPrice: '$8,000-25,000/month',
      category: 'Financial Services',
      technologies: ['QuantLib', 'Pandas', 'NumPy', 'Scikit-learn', 'Python', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/ai-financial-analysis'
    },
    {
      title: 'AI-Powered Healthcare Solutions',
      description: 'Medical image analysis, drug discovery, and personalized medicine applications.',
      icon: '🏥',
      price: '$6,000/month',
      features: [
        'Medical image analysis and diagnosis',
        'Drug discovery and development',
        'Personalized treatment recommendations',
        'Clinical decision support systems',
        'Patient monitoring and alerting',
        'Regulatory compliance and validation'
      ],
      benefits: [
        'Improve diagnostic accuracy by 40%',
        'Reduce treatment costs by 30%',
        'Accelerate drug discovery by 50%',
        'Enable personalized medicine'
      ],
      marketPrice: '$15,000-50,000/month',
      category: 'Healthcare',
      technologies: ['Medical Imaging', 'Deep Learning', 'TensorFlow', 'PyTorch', 'DICOM', 'HL7'],
      link: 'https://ziontechgroup.com/ai-healthcare-solutions'
    }
  ];

  const categories = [
    'All Services',
    'Analytics & Intelligence',
    'Computer Vision',
    'NLP & Language',
    'Process Automation',
    'Predictive Analytics',
    'Customer Service',
    'Content Generation',
    'Security & Compliance',
    'Recommendation Systems',
    'Supply Chain',
    'Financial Services',
    'Healthcare'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Services');

  const filteredServices = selectedCategory === 'All Services' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, computer vision, NLP, and automation. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="ai services, machine learning, computer vision, nlp, artificial intelligence, automation, predictive analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver enterprise-grade AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedCategory} Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our comprehensive range of AI services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-white/20 relative ${
                  service.popular ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  <span className="text-sm text-gray-400 ml-2 line-through">{service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-green-300">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col gap-2">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge technology and expertise across all AI domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-300">Advanced ML models for prediction, classification, and optimization</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-300">Image and video analysis for automation and quality control</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Natural Language Processing</h3>
              <p className="text-gray-300">Text analysis, sentiment detection, and language understanding</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deep Learning</h3>
              <p className="text-gray-300">Neural networks for complex pattern recognition and decision making</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300">
              Our AI solutions deliver measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300">AI Models Deployed</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">Average Accuracy Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free AI consultation and custom solution recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 24/7 Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;