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
      title: 'AI-Powered Drug Discovery',
      description: 'Machine learning models for pharmaceutical research, molecular design, and drug development optimization.',
      icon: '💊',
      price: 'Starting at $15,000/month',
      features: ['Molecular property prediction', 'Drug-target interaction modeling', 'ADMET prediction', 'Compound optimization', 'Clinical trial optimization'],
      benefits: ['Accelerate drug discovery by 40%', 'Reduce R&D costs by 30%', 'Improve success rates'],
      marketPrice: '$25,000-75,000/month',
      category: 'Healthcare AI',
      technologies: ['RDKit', 'DeepChem', 'PyTorch', 'TensorFlow', 'Molecular Dynamics']
    },
    {
      title: 'AI-Powered Financial Trading',
      description: 'Algorithmic trading systems using machine learning for market prediction and automated trading strategies.',
      icon: '📈',
      price: 'Starting at $8,000/month',
      features: ['Market prediction models', 'Risk assessment', 'Portfolio optimization', 'High-frequency trading', 'Sentiment analysis'],
      benefits: ['Increase trading profits by 25%', 'Reduce risk exposure', 'Automate trading decisions'],
      marketPrice: '$15,000-50,000/month',
      category: 'FinTech AI',
      technologies: ['QuantLib', 'Zipline', 'Backtrader', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'AI-Powered Autonomous Vehicles',
      description: 'Computer vision and sensor fusion systems for autonomous vehicle navigation and safety.',
      icon: '🚗',
      price: 'Starting at $20,000/month',
      features: ['Object detection', 'Path planning', 'Sensor fusion', 'Real-time decision making', 'Safety systems'],
      benefits: ['Improve safety by 90%', 'Reduce accidents', 'Enable autonomous driving'],
      marketPrice: '$35,000-100,000/month',
      category: 'Autonomous Systems',
      technologies: ['OpenCV', 'ROS', 'TensorFlow', 'PyTorch', 'CUDA']
    },
    {
      title: 'AI-Powered Climate Modeling',
      description: 'Machine learning models for climate prediction, environmental monitoring, and sustainability optimization.',
      icon: '🌍',
      price: 'Starting at $6,000/month',
      features: ['Climate prediction', 'Carbon footprint analysis', 'Renewable energy optimization', 'Environmental monitoring', 'Sustainability reporting'],
      benefits: ['Improve climate predictions', 'Optimize energy usage', 'Reduce environmental impact'],
      marketPrice: '$10,000-30,000/month',
      category: 'Environmental AI',
      technologies: ['Xarray', 'NetCDF', 'TensorFlow', 'PyTorch', 'Climate Data APIs']
    },
    {
      title: 'AI-Powered Cybersecurity',
      description: 'Advanced threat detection, vulnerability assessment, and automated security response systems.',
      icon: '🛡️',
      price: 'Starting at $7,500/month',
      features: ['Threat detection', 'Malware analysis', 'Network security', 'Incident response', 'Security orchestration'],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce response time by 80%', 'Automate security operations'],
      marketPrice: '$12,000-40,000/month',
      category: 'Cybersecurity AI',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Suricata', 'ELK Stack']
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Machine learning models for demand forecasting, inventory optimization, and logistics planning.',
      icon: '🚚',
      price: 'Starting at $5,500/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier risk assessment', 'Cost optimization'],
      benefits: ['Reduce costs by 20%', 'Improve delivery times', 'Minimize supply disruptions'],
      marketPrice: '$9,000-25,000/month',
      category: 'Supply Chain AI',
      technologies: ['Apache Spark', 'TensorFlow', 'PyTorch', 'OR-Tools', 'Gurobi']
    },
    {
      title: 'AI-Powered Personalized Medicine',
      description: 'Genomic analysis and personalized treatment recommendations using machine learning.',
      icon: '🧬',
      price: 'Starting at $12,000/month',
      features: ['Genomic analysis', 'Treatment recommendation', 'Drug response prediction', 'Risk assessment', 'Clinical decision support'],
      benefits: ['Improve treatment outcomes', 'Reduce side effects', 'Personalize healthcare'],
      marketPrice: '$20,000-60,000/month',
      category: 'Healthcare AI',
      technologies: ['Biopython', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'AI-Powered Smart Cities',
      description: 'IoT data analysis and urban planning optimization for smart city infrastructure.',
      icon: '🏙️',
      price: 'Starting at $8,500/month',
      features: ['Traffic optimization', 'Energy management', 'Waste management', 'Public safety', 'Urban planning'],
      benefits: ['Improve city efficiency', 'Reduce energy consumption', 'Enhance citizen services'],
      marketPrice: '$15,000-45,000/month',
      category: 'Smart Cities AI',
      technologies: ['Apache Kafka', 'TensorFlow', 'PyTorch', 'InfluxDB', 'Grafana']
    },
    {
      title: 'AI-Powered Agricultural Optimization',
      description: 'Precision agriculture using AI for crop monitoring, yield prediction, and resource optimization.',
      icon: '🌾',
      price: 'Starting at $4,500/month',
      features: ['Crop monitoring', 'Yield prediction', 'Pest detection', 'Irrigation optimization', 'Soil analysis'],
      benefits: ['Increase crop yields by 30%', 'Reduce water usage by 25%', 'Minimize pesticide use'],
      marketPrice: '$7,500-22,000/month',
      category: 'AgTech AI',
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'Satellite Imagery', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Energy Grid Management',
      description: 'Smart grid optimization, renewable energy integration, and demand response management.',
      icon: '⚡',
      price: 'Starting at $6,500/month',
      features: ['Grid optimization', 'Renewable integration', 'Demand response', 'Energy storage', 'Load forecasting'],
      benefits: ['Improve grid efficiency', 'Integrate renewables', 'Reduce energy costs'],
      marketPrice: '$11,000-35,000/month',
      category: 'Energy AI',
      technologies: ['TensorFlow', 'PyTorch', 'Pandas', 'Time Series DB', 'Grid APIs']
    },
    {
      title: 'AI-Powered Space Exploration',
      description: 'Machine learning for satellite data analysis, space mission planning, and astronomical research.',
      icon: '🚀',
      price: 'Starting at $18,000/month',
      features: ['Satellite data analysis', 'Mission planning', 'Astronomical research', 'Space weather prediction', 'Orbital mechanics'],
      benefits: ['Improve mission success', 'Discover new phenomena', 'Optimize space operations'],
      marketPrice: '$30,000-90,000/month',
      category: 'Space AI',
      technologies: ['Astropy', 'TensorFlow', 'PyTorch', 'OpenCV', 'Space Data APIs']
    },
    // New Innovative AI Services
    {
      title: 'AI-Powered Metaverse Development',
      description: 'Complete metaverse solutions including virtual worlds, avatars, and immersive experiences.',
      icon: '🌐',
      price: 'Starting at $25,000/month',
      features: ['Virtual world creation', 'Avatar development', '3D asset generation', 'Physics simulation', 'Multi-user experiences'],
      benefits: ['Create immersive experiences', 'Engage users in virtual spaces', 'Monetize virtual assets'],
      marketPrice: '$40,000-120,000/month',
      category: 'Metaverse AI',
      technologies: ['Unity', 'Unreal Engine', 'WebXR', 'Blender', 'Custom AI Models']
    },
    {
      title: 'AI-Powered Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for solving complex optimization problems.',
      icon: '⚛️',
      price: 'Starting at $35,000/month',
      features: ['Quantum algorithms', 'Hybrid quantum-classical models', 'Optimization problems', 'Quantum simulation', 'Error correction'],
      benefits: ['Solve intractable problems', 'Exponential speedup', 'Breakthrough discoveries'],
      marketPrice: '$60,000-200,000/month',
      category: 'Quantum AI',
      technologies: ['Qiskit', 'Cirq', 'PennyLane', 'IBM Quantum', 'Google Quantum']
    },
    {
      title: 'AI-Powered Digital Twin Technology',
      description: 'Real-time digital replicas of physical systems with predictive analytics and optimization.',
      icon: '🔄',
      price: 'Starting at $15,000/month',
      features: ['Real-time synchronization', 'Predictive modeling', 'What-if scenarios', 'Performance optimization', 'Anomaly detection'],
      benefits: ['Optimize operations', 'Predict failures', 'Reduce downtime'],
      marketPrice: '$25,000-75,000/month',
      category: 'Digital Twin AI',
      technologies: ['IoT Sensors', 'Time Series DB', 'Machine Learning', '3D Modeling', 'Real-time Processing']
    },
    {
      title: 'AI-Powered Synthetic Data Generation',
      description: 'High-quality synthetic data creation for training machine learning models and privacy protection.',
      icon: '🎭',
      price: 'Starting at $8,000/month',
      features: ['Data synthesis', 'Privacy preservation', 'Bias mitigation', 'Quality validation', 'Custom datasets'],
      benefits: ['Protect privacy', 'Reduce data costs', 'Improve model performance'],
      marketPrice: '$15,000-45,000/month',
      category: 'Synthetic Data AI',
      technologies: ['GANs', 'VAEs', 'Diffusion Models', 'Privacy Tools', 'Custom Generators']
    },
    {
      title: 'AI-Powered Autonomous Robotics',
      description: 'Intelligent robots with advanced perception, decision-making, and human-robot collaboration capabilities.',
      icon: '🤖',
      price: 'Starting at $20,000/month',
      features: ['Autonomous navigation', 'Object manipulation', 'Human interaction', 'Learning from demonstration', 'Safety systems'],
      benefits: ['Automate complex tasks', 'Improve efficiency', 'Reduce human risk'],
      marketPrice: '$35,000-100,000/month',
      category: 'Robotics AI',
      technologies: ['ROS', 'OpenCV', 'TensorFlow', 'PyTorch', 'Custom Hardware']
    },
    {
      title: 'AI-Powered Brain-Computer Interface',
      description: 'Direct neural interface technology for controlling devices and applications through brain signals.',
      icon: '🧠',
      price: 'Starting at $30,000/month',
      features: ['Neural signal processing', 'Intent recognition', 'Device control', 'Feedback systems', 'Calibration tools'],
      benefits: ['Enable accessibility', 'Enhance human capabilities', 'Create new interfaces'],
      marketPrice: '$50,000-150,000/month',
      category: 'BCI AI',
      technologies: ['EEG Processing', 'Machine Learning', 'Signal Processing', 'Real-time Systems', 'Custom Hardware']
    },
    {
      title: 'AI-Powered Holographic Displays',
      description: 'Advanced holographic visualization with AI-enhanced content generation and interaction.',
      icon: '👻',
      price: 'Starting at $22,000/month',
      features: ['Holographic rendering', '3D content generation', 'Gesture recognition', 'Spatial audio', 'Multi-user support'],
      benefits: ['Immersive visualization', 'Enhanced communication', 'Revolutionary interfaces'],
      marketPrice: '$40,000-120,000/month',
      category: 'Holographic AI',
      technologies: ['Computer Graphics', 'Optics', 'Machine Learning', '3D Rendering', 'Custom Hardware']
    },
    {
      title: 'AI-Powered Molecular Design',
      description: 'AI-driven molecular discovery and design for pharmaceuticals, materials, and chemicals.',
      icon: '🧬',
      price: 'Starting at $18,000/month',
      features: ['Molecular generation', 'Property prediction', 'Drug discovery', 'Material design', 'Synthesis planning'],
      benefits: ['Accelerate discovery', 'Reduce R&D costs', 'Enable breakthroughs'],
      marketPrice: '$30,000-90,000/month',
      category: 'Molecular AI',
      technologies: ['RDKit', 'DeepChem', 'PyTorch', 'TensorFlow', 'Quantum Chemistry']
    },
    {
      title: 'AI-Powered Time Series Forecasting Pro',
      description: 'Advanced time series analysis with deep learning for complex temporal pattern recognition.',
      icon: '📊',
      price: 'Starting at $6,000/month',
      features: ['Deep time series models', 'Multi-variate forecasting', 'Anomaly detection', 'Seasonality analysis', 'Uncertainty quantification'],
      benefits: ['Improve forecast accuracy', 'Handle complex patterns', 'Reduce prediction errors'],
      marketPrice: '$12,000-35,000/month',
      category: 'Time Series AI',
      technologies: ['LSTM', 'Transformer', 'Prophet', 'ARIMA', 'Custom Models']
    },
    {
      title: 'AI-Powered Edge Intelligence',
      description: 'Deploy AI models on edge devices for real-time processing and decision making.',
      icon: '📱',
      price: 'Starting at $5,000/month',
      features: ['Model optimization', 'Edge deployment', 'Real-time inference', 'Federated learning', 'Resource management'],
      benefits: ['Reduce latency', 'Improve privacy', 'Enable offline AI'],
      marketPrice: '$10,000-30,000/month',
      category: 'Edge AI',
      technologies: ['TensorFlow Lite', 'ONNX', 'OpenVINO', 'Edge TPU', 'Custom Hardware']
    },
    {
      title: 'AI-Powered Augmented Reality',
      description: 'Intelligent AR applications with object recognition, spatial understanding, and interactive content.',
      icon: '🥽',
      price: 'Starting at $12,000/month',
      features: ['Object recognition', 'Spatial mapping', 'Gesture tracking', 'Content generation', 'Multi-user AR'],
      benefits: ['Enhance user experience', 'Enable new applications', 'Improve productivity'],
      marketPrice: '$20,000-60,000/month',
      category: 'AR AI',
      technologies: ['ARKit', 'ARCore', 'Unity', 'OpenCV', 'Machine Learning']
    },
    {
      title: 'AI-Powered Virtual Reality',
      description: 'Immersive VR experiences with AI-generated content, avatars, and intelligent interactions.',
      icon: '🥽',
      price: 'Starting at $15,000/month',
      features: ['AI avatars', 'Content generation', 'Natural interactions', 'Emotion recognition', 'Adaptive environments'],
      benefits: ['Create immersive experiences', 'Enhance user engagement', 'Enable new applications'],
      marketPrice: '$25,000-75,000/month',
      category: 'VR AI',
      technologies: ['Unity', 'Unreal Engine', 'OpenCV', 'Machine Learning', 'VR Hardware']
    },
    {
      title: 'AI-Powered Swarm Intelligence',
      description: 'Coordinated AI systems for distributed problem solving and collective decision making.',
      icon: '🐝',
      price: 'Starting at $10,000/month',
      features: ['Distributed algorithms', 'Consensus mechanisms', 'Load balancing', 'Fault tolerance', 'Scalability'],
      benefits: ['Improve system resilience', 'Enable distributed AI', 'Scale efficiently'],
      marketPrice: '$18,000-50,000/month',
      category: 'Swarm AI',
      technologies: ['Distributed Systems', 'Consensus Algorithms', 'Machine Learning', 'Networking', 'Custom Protocols']
    },
    {
      title: 'AI-Powered Neuromorphic Computing',
      description: 'Brain-inspired computing systems for ultra-efficient AI processing and learning.',
      icon: '🧠',
      price: 'Starting at $25,000/month',
      features: ['Spiking neural networks', 'Event-driven processing', 'Low-power operation', 'Real-time learning', 'Hardware acceleration'],
      benefits: ['Ultra-low power consumption', 'Real-time learning', 'Efficient processing'],
      marketPrice: '$40,000-120,000/month',
      category: 'Neuromorphic AI',
      technologies: ['Spike-based Models', 'Custom Hardware', 'Event Processing', 'Machine Learning', 'Neuroscience']
    },
    {
      title: 'AI-Powered Explainable AI',
      description: 'Transparent and interpretable AI systems with detailed explanations and reasoning.',
      icon: '🔍',
      price: 'Starting at $8,000/month',
      features: ['Model interpretability', 'Explanation generation', 'Bias detection', 'Fairness analysis', 'Human-AI collaboration'],
      benefits: ['Build trust in AI', 'Ensure fairness', 'Enable debugging'],
      marketPrice: '$15,000-45,000/month',
      category: 'Explainable AI',
      technologies: ['SHAP', 'LIME', 'Attention Mechanisms', 'Causal Inference', 'Fairness Tools']
    },
    {
      title: 'AI-Powered Multi-Modal Learning',
      description: 'AI systems that process and understand multiple data types simultaneously.',
      icon: '🎭',
      price: 'Starting at $12,000/month',
      features: ['Multi-modal fusion', 'Cross-modal learning', 'Unified representations', 'Transfer learning', 'Multimodal generation'],
      benefits: ['Better understanding', 'Richer insights', 'Improved performance'],
      marketPrice: '$20,000-60,000/month',
      category: 'Multimodal AI',
      technologies: ['Transformer', 'CLIP', 'DALL-E', 'GPT', 'Custom Models']
    },
    {
      title: 'AI-Powered Continual Learning',
      description: 'AI systems that learn continuously without forgetting previous knowledge.',
      icon: '🔄',
      price: 'Starting at $10,000/month',
      features: ['Catastrophic forgetting prevention', 'Incremental learning', 'Memory consolidation', 'Task adaptation', 'Knowledge retention'],
      benefits: ['Lifelong learning', 'Adapt to new tasks', 'Maintain performance'],
      marketPrice: '$18,000-50,000/month',
      category: 'Continual Learning AI',
      technologies: ['Elastic Weight Consolidation', 'Progressive Networks', 'Memory Replay', 'Meta-Learning', 'Custom Algorithms']
    },
    {
      title: 'AI-Powered Federated Learning',
      description: 'Distributed machine learning that preserves data privacy across multiple parties.',
      icon: '🔒',
      price: 'Starting at $8,000/month',
      features: ['Privacy-preserving learning', 'Distributed training', 'Secure aggregation', 'Differential privacy', 'Model sharing'],
      benefits: ['Protect data privacy', 'Enable collaboration', 'Comply with regulations'],
      marketPrice: '$15,000-45,000/month',
      category: 'Federated Learning AI',
      technologies: ['Secure Multi-party Computation', 'Differential Privacy', 'Homomorphic Encryption', 'Distributed Systems', 'Privacy Tools']
    }
  ];

  const _categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, NLP, computer vision, and automation solutions for enterprise businesses." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, automation, AI consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Start AI Journey
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View AI Solutions
                </button>
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