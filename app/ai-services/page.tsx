import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Brain, Zap, Target, BarChart, MessageSquare, Eye, Cpu, Sparkles } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Model Development',
      description: 'Custom ML models for predictive analytics, classification, and regression tasks tailored to your business needs.',
      icon: '🧠',
      price: 'Starting at $5,000/project',
      features: ['Custom model development', 'Data preprocessing', 'Model training & validation', 'Performance optimization', 'Deployment & monitoring'],
      benefits: ['Improve prediction accuracy by 40%', 'Automate decision making', 'Reduce manual analysis time'],
      marketPrice: '$8,000-25,000/project',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding.',
      icon: '💬',
      price: 'Starting at $3,500/project',
      features: ['Text classification', 'Sentiment analysis', 'Named entity recognition', 'Language translation', 'Chatbot development'],
      benefits: ['Process text data 100x faster', 'Improve customer service', 'Extract insights from documents'],
      marketPrice: '$6,000-18,000/project',
      category: 'NLP',
      technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers']
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis, object detection, facial recognition, and visual content understanding.',
      icon: '👁️',
      price: 'Starting at $4,500/project',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis', 'OCR & document scanning'],
      benefits: ['Automate visual inspections', 'Improve security systems', 'Enhance user experience'],
      marketPrice: '$7,500-20,000/project',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'TensorFlow Lite']
    },
    {
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions.',
      icon: '🤖',
      price: 'Starting at $2,500/month',
      features: ['Context-aware conversations', 'Multi-language support', 'Integration with CRM', 'Analytics & reporting', 'Voice capabilities'],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 customer service', 'Improve response time'],
      marketPrice: '$4,000-12,000/month',
      category: 'Conversational AI',
      technologies: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'Amazon Lex', 'OpenAI GPT']
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced forecasting models for sales, demand, inventory, and business trend prediction.',
      icon: '📈',
      price: 'Starting at $3,000/month',
      features: ['Time series forecasting', 'Demand prediction', 'Sales forecasting', 'Risk assessment', 'Scenario modeling'],
      benefits: ['Improve planning accuracy by 50%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$5,000-15,000/month',
      category: 'Predictive Analytics',
      technologies: ['Prophet', 'ARIMA', 'LSTM', 'XGBoost', 'Time Series DB']
    },
    {
      title: 'AI-Powered Recommendation Systems',
      description: 'Personalized recommendation engines for e-commerce, content, and product suggestions.',
      icon: '🎯',
      price: 'Starting at $4,000/project',
      features: ['Collaborative filtering', 'Content-based filtering', 'Hybrid approaches', 'Real-time recommendations', 'A/B testing'],
      benefits: ['Increase sales by 25%', 'Improve user engagement', 'Reduce bounce rates'],
      marketPrice: '$7,000-20,000/project',
      category: 'Recommendation Systems',
      technologies: ['Apache Spark', 'Mahout', 'Surprise', 'TensorFlow', 'Redis']
    },
    {
      title: 'Automated Document Processing',
      description: 'AI-powered document extraction, classification, and data entry automation for business processes.',
      icon: '📄',
      price: 'Starting at $2,000/month',
      features: ['Document OCR', 'Data extraction', 'Form processing', 'Document classification', 'Workflow automation'],
      benefits: ['Process documents 50x faster', 'Eliminate manual data entry', 'Improve accuracy to 99%'],
      marketPrice: '$3,500-10,000/month',
      category: 'Document AI',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Google Document AI', 'PyPDF2']
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent dashboards and analytics that automatically identify patterns and generate insights.',
      icon: '📊',
      price: 'Starting at $3,500/month',
      features: ['Automated insights', 'Anomaly detection', 'Trend analysis', 'Custom dashboards', 'Natural language queries'],
      benefits: ['Discover hidden patterns', 'Make data-driven decisions', 'Reduce analysis time by 80%'],
      marketPrice: '$6,000-18,000/month',
      category: 'Business Intelligence',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Superset', 'Custom ML Models']
    },
    {
      title: 'AI-Powered Fraud Detection',
      description: 'Advanced fraud detection systems using machine learning to identify suspicious activities in real-time.',
      icon: '🛡️',
      price: 'Starting at $5,500/month',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Alert systems', 'False positive reduction'],
      benefits: ['Prevent 95% of fraud attempts', 'Reduce false positives by 70%', 'Save millions in losses'],
      marketPrice: '$10,000-30,000/month',
      category: 'Fraud Detection',
      technologies: ['Isolation Forest', 'One-Class SVM', 'Autoencoders', 'XGBoost', 'Real-time Streaming']
    },
    {
      title: 'AI-Powered Content Generation',
      description: 'Automated content creation for marketing, social media, blogs, and product descriptions.',
      icon: '✍️',
      price: 'Starting at $1,500/month',
      features: ['Blog post generation', 'Social media content', 'Product descriptions', 'Email campaigns', 'SEO optimization'],
      benefits: ['Create content 10x faster', 'Maintain brand consistency', 'Improve SEO rankings'],
      marketPrice: '$2,500-8,000/month',
      category: 'Content Generation',
      technologies: ['GPT-3/4', 'Claude', 'Jasper', 'Copy.ai', 'Custom Fine-tuned Models']
    },
    {
      title: 'AI-Powered Process Automation',
      description: 'Intelligent automation of business processes using AI to make decisions and take actions.',
      icon: '⚙️',
      price: 'Starting at $4,500/month',
      features: ['Workflow automation', 'Decision automation', 'Exception handling', 'Process optimization', 'Integration management'],
      benefits: ['Reduce process time by 70%', 'Eliminate human errors', 'Improve efficiency'],
      marketPrice: '$7,500-20,000/month',
      category: 'Process Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Custom AI Models', 'RPA Tools']
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Automated testing and quality assurance using AI to identify bugs and performance issues.',
      icon: '🔍',
      price: 'Starting at $3,000/month',
      features: ['Automated test generation', 'Bug prediction', 'Performance testing', 'Code quality analysis', 'Regression testing'],
      benefits: ['Reduce testing time by 60%', 'Improve code quality', 'Catch bugs earlier'],
      marketPrice: '$5,000-15,000/month',
      category: 'Quality Assurance',
      technologies: ['Selenium', 'Appium', 'TestNG', 'Custom AI Models', 'CI/CD Integration']
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Next-generation quantum computing algorithms for solving complex optimization and machine learning problems.',
      icon: '⚛️',
      price: 'Starting at $15,000/month',
      features: ['Quantum algorithms', 'Optimization problems', 'Quantum neural networks', 'Hybrid classical-quantum', 'Research collaboration'],
      benefits: ['Solve impossible problems', 'Exponential speedup', 'Breakthrough innovations'],
      marketPrice: '$25,000-50,000/month',
      category: 'Quantum Computing',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'Quantum Hardware', 'Custom Algorithms']
    },
    {
      title: 'Autonomous AI Agents',
      description: 'Self-managing AI agents that can perform complex tasks, make decisions, and learn independently.',
      icon: '🤖',
      price: 'Starting at $8,000/month',
      features: ['Autonomous decision making', 'Self-learning capabilities', 'Task automation', 'Multi-agent coordination', 'Continuous improvement'],
      benefits: ['Reduce human intervention by 90%', 'Scale operations infinitely', 'Achieve 24/7 operations'],
      marketPrice: '$12,000-30,000/month',
      category: 'Autonomous Systems',
      technologies: ['Reinforcement Learning', 'Multi-Agent Systems', 'LLMs', 'Custom Frameworks', 'Edge Computing']
    },
    {
      title: 'AI-Powered Drug Discovery',
      description: 'Accelerated pharmaceutical research using AI for molecular design and drug development.',
      icon: '💊',
      price: 'Starting at $20,000/month',
      features: ['Molecular design', 'Drug-target interaction', 'Toxicity prediction', 'Clinical trial optimization', 'Patent analysis'],
      benefits: ['Reduce discovery time by 70%', 'Lower development costs', 'Improve success rates'],
      marketPrice: '$35,000-80,000/month',
      category: 'Pharmaceutical AI',
      technologies: ['DeepChem', 'RDKit', 'AlphaFold', 'Custom Models', 'High-Performance Computing']
    },
    {
      title: 'AI-Powered Climate Modeling',
      description: 'Advanced climate prediction and environmental impact analysis using machine learning.',
      icon: '🌍',
      price: 'Starting at $12,000/month',
      features: ['Climate modeling', 'Weather prediction', 'Environmental impact', 'Carbon footprint analysis', 'Sustainability optimization'],
      benefits: ['Improve prediction accuracy', 'Enable proactive planning', 'Support sustainability goals'],
      marketPrice: '$20,000-45,000/month',
      category: 'Environmental AI',
      technologies: ['TensorFlow', 'PyTorch', 'Climate Data', 'Satellite Imagery', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Financial Trading',
      description: 'Algorithmic trading systems with advanced market analysis and risk management.',
      icon: '📈',
      price: 'Starting at $10,000/month',
      features: ['Algorithmic trading', 'Market analysis', 'Risk management', 'Portfolio optimization', 'Real-time execution'],
      benefits: ['Maximize returns', 'Minimize risks', 'Operate 24/7'],
      marketPrice: '$15,000-40,000/month',
      category: 'FinTech AI',
      technologies: ['QuantLib', 'Zipline', 'Backtrader', 'Custom Algorithms', 'High-Frequency Trading']
    },
    {
      title: 'AI-Powered Space Exploration',
      description: 'Autonomous systems for space missions, satellite operations, and planetary exploration.',
      icon: '🚀',
      price: 'Starting at $25,000/month',
      features: ['Mission planning', 'Autonomous navigation', 'Data analysis', 'Resource optimization', 'Risk assessment'],
      benefits: ['Enable autonomous missions', 'Reduce mission costs', 'Increase success rates'],
      marketPrice: '$40,000-100,000/month',
      category: 'Space Technology',
      technologies: ['ROS', 'Gazebo', 'Custom Space AI', 'Satellite Data', 'Mission Control Systems']
    },
    {
      title: 'AI-Powered Brain-Computer Interface',
      description: 'Advanced neural interfaces for medical applications and human-AI interaction.',
      icon: '🧠',
      price: 'Starting at $18,000/month',
      features: ['Neural signal processing', 'Brain pattern recognition', 'Motor control', 'Cognitive enhancement', 'Medical applications'],
      benefits: ['Restore mobility', 'Enhance cognition', 'Enable new interfaces'],
      marketPrice: '$30,000-70,000/month',
      category: 'Neurotechnology',
      technologies: ['Neural Networks', 'Signal Processing', 'Medical Devices', 'Custom Hardware', 'Clinical Trials']
    },
    {
      title: 'AI-Powered Autonomous Vehicles',
      description: 'Self-driving vehicle systems with advanced perception, planning, and control algorithms.',
      icon: '🚗',
      price: 'Starting at $15,000/month',
      features: ['Computer vision', 'Path planning', 'Sensor fusion', 'Decision making', 'Safety systems'],
      benefits: ['Improve safety', 'Reduce accidents', 'Enable autonomous transport'],
      marketPrice: '$25,000-60,000/month',
      category: 'Autonomous Vehicles',
      technologies: ['OpenCV', 'ROS', 'TensorFlow', 'LiDAR', 'Radar Systems']
    },
    {
      title: 'AI-Powered Robotics',
      description: 'Intelligent robotic systems for manufacturing, healthcare, and service applications.',
      icon: '🦾',
      price: 'Starting at $12,000/month',
      features: ['Motion planning', 'Object manipulation', 'Human-robot interaction', 'Learning from demonstration', 'Adaptive control'],
      benefits: ['Increase productivity', 'Improve precision', 'Enable complex tasks'],
      marketPrice: '$20,000-50,000/month',
      category: 'Robotics',
      technologies: ['ROS', 'MoveIt', 'Gazebo', 'Custom Controllers', 'Industrial Hardware']
    },
    {
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection and response systems using machine learning and behavioral analysis.',
      icon: '🛡️',
      price: 'Starting at $8,000/month',
      features: ['Threat hunting', 'Anomaly detection', 'Incident response', 'Vulnerability assessment', 'Security orchestration'],
      benefits: ['Prevent 99% of attacks', 'Reduce response time', 'Ensure compliance'],
      marketPrice: '$12,000-30,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'SOAR', 'Custom ML Models', 'Threat Intelligence']
    },
    {
      title: 'AI-Powered Healthcare Diagnostics',
      description: 'Medical image analysis, disease prediction, and personalized treatment recommendations.',
      icon: '🏥',
      price: 'Starting at $10,000/month',
      features: ['Medical imaging', 'Disease prediction', 'Drug interaction', 'Treatment optimization', 'Clinical decision support'],
      benefits: ['Improve diagnosis accuracy', 'Reduce medical errors', 'Personalize treatments'],
      marketPrice: '$18,000-45,000/month',
      category: 'Healthcare AI',
      technologies: ['DICOM', 'Medical Imaging', 'Clinical Data', 'Custom Models', 'HIPAA Compliance']
    },
    {
      title: 'AI-Powered Energy Grid Optimization',
      description: 'Smart grid management and renewable energy optimization using AI algorithms.',
      icon: '⚡',
      price: 'Starting at $9,000/month',
      features: ['Grid optimization', 'Demand forecasting', 'Renewable integration', 'Load balancing', 'Predictive maintenance'],
      benefits: ['Improve grid efficiency', 'Reduce energy waste', 'Enable renewable integration'],
      marketPrice: '$15,000-35,000/month',
      category: 'Energy AI',
      technologies: ['SCADA', 'IoT Sensors', 'Weather Data', 'Custom Algorithms', 'Grid Infrastructure']
    },
    {
      title: 'AI-Powered Agricultural Intelligence',
      description: 'Precision agriculture with crop monitoring, yield prediction, and automated farming systems.',
      icon: '🌾',
      price: 'Starting at $6,000/month',
      features: ['Crop monitoring', 'Yield prediction', 'Pest detection', 'Irrigation optimization', 'Harvest planning'],
      benefits: ['Increase crop yields', 'Reduce resource usage', 'Improve sustainability'],
      marketPrice: '$10,000-25,000/month',
      category: 'AgTech AI',
      technologies: ['Satellite Imagery', 'IoT Sensors', 'Drones', 'Custom Models', 'Agricultural Data']
    },
    {
      title: 'AI-Powered Smart Cities',
      description: 'Urban planning and management systems for traffic, utilities, and public services.',
      icon: '🏙️',
      price: 'Starting at $20,000/month',
      features: ['Traffic optimization', 'Utility management', 'Public safety', 'Resource allocation', 'Citizen services'],
      benefits: ['Improve city efficiency', 'Reduce costs', 'Enhance quality of life'],
      marketPrice: '$35,000-80,000/month',
      category: 'Smart Cities',
      technologies: ['IoT Networks', 'City Data', 'Traffic Systems', 'Custom AI', 'Urban Infrastructure']
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, NLP, computer vision, and automation solutions for enterprise businesses." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, automation, AI consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Advanced AI Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-purple-100 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions, quantum computing, and autonomous systems
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
                >
                  📞 Start AI Journey
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
                >
                  ✉️ Get Quote
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
                Cutting-edge AI solutions delivered by PhD-level experts with proven industry experience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Experts</h3>
                <p className="text-gray-600">PhD-level data scientists and AI researchers</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Deploy AI solutions in weeks, not months</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored AI models for your specific use case</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 400% ROI within 12 months</p>
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
                  Advanced {category.toLowerCase()} services powered by state-of-the-art AI technology
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

                      <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Get AI Consultation
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* AI Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Capabilities
              </h2>
              <p className="text-xl text-gray-600">
                Cutting-edge AI technologies and methodologies we use to solve complex business problems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep Learning</h3>
                <p className="text-gray-600">Neural networks, CNNs, RNNs, and transformer models</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg">
                <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Language Processing</h3>
                <p className="text-gray-600">Text analysis, sentiment, translation, and generation</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg">
                <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Computer Vision</h3>
                <p className="text-gray-600">Image recognition, object detection, and video analysis</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg">
                <Cpu className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Machine Learning</h3>
                <p className="text-gray-600">Supervised, unsupervised, and reinforcement learning</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg">
                <Sparkles className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Generative AI</h3>
                <p className="text-gray-600">Content generation, creative AI, and synthetic data</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg">
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Forecasting, trend analysis, and predictive modeling</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Contact our AI experts for a free consultation and custom AI strategy development
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
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-purple-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;