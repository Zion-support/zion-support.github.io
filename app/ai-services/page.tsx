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
      title: 'AI-Powered Cybersecurity Suite',
      description: 'Advanced threat detection and response using machine learning to protect against evolving cyber threats.',
      icon: '🛡️',
      price: 'Starting at $8,000/month',
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated incident response', 'Threat intelligence', 'Zero-day protection'],
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce response time by 90%', 'Minimize security breaches'],
      marketPrice: '$15,000-40,000/month',
      category: 'Cybersecurity',
      technologies: ['SIEM', 'EDR', 'SOAR', 'Machine Learning', 'Behavioral Analytics']
    },
    {
      title: 'AI-Powered Healthcare Analytics',
      description: 'Medical data analysis with patient insights, treatment recommendations, and outcome predictions.',
      icon: '🏥',
      price: 'Starting at $12,000/month',
      features: ['Patient data analysis', 'Treatment recommendations', 'Drug discovery', 'Medical imaging analysis', 'Clinical trial optimization'],
      benefits: ['Improve patient outcomes', 'Reduce medical errors', 'Accelerate drug development'],
      marketPrice: '$25,000-60,000/month',
      category: 'Healthcare',
      technologies: ['Medical AI', 'Computer Vision', 'NLP', 'Deep Learning', 'HIPAA Compliance']
    },
    {
      title: 'AI-Powered Financial Trading',
      description: 'Algorithmic trading with machine learning for market analysis, risk management, and automated trading.',
      icon: '📈',
      price: 'Starting at $15,000/month',
      features: ['Market analysis', 'Algorithmic trading', 'Risk management', 'Portfolio optimization', 'Real-time decision making'],
      benefits: ['Increase trading profits', 'Reduce risk exposure', 'Automate trading strategies'],
      marketPrice: '$30,000-100,000/month',
      category: 'Financial Services',
      technologies: ['Quantitative Analysis', 'Machine Learning', 'Real-time Processing', 'Risk Models', 'Trading APIs']
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, logistics optimization, and risk assessment.',
      icon: '🚚',
      price: 'Starting at $10,000/month',
      features: ['Demand forecasting', 'Logistics optimization', 'Supplier management', 'Risk assessment', 'Cost optimization'],
      benefits: ['Reduce supply chain costs', 'Improve efficiency', 'Minimize risks'],
      marketPrice: '$20,000-50,000/month',
      category: 'Supply Chain',
      technologies: ['Optimization Algorithms', 'Machine Learning', 'IoT Integration', 'Blockchain', 'Real-time Analytics']
    },
    {
      title: 'AI-Powered Energy Management',
      description: 'Smart energy systems with consumption optimization, renewable integration, and grid management.',
      icon: '⚡',
      price: 'Starting at $8,500/month',
      features: ['Energy consumption optimization', 'Renewable energy integration', 'Grid management', 'Predictive maintenance', 'Cost optimization'],
      benefits: ['Reduce energy costs', 'Improve sustainability', 'Optimize grid performance'],
      marketPrice: '$18,000-45,000/month',
      category: 'Energy',
      technologies: ['IoT Sensors', 'Machine Learning', 'Grid APIs', 'Renewable Energy', 'Smart Grid']
    },
    {
      title: 'AI-Powered Manufacturing Intelligence',
      description: 'Smart manufacturing with predictive maintenance, quality control, and production optimization.',
      icon: '🏭',
      price: 'Starting at $12,000/month',
      features: ['Predictive maintenance', 'Quality control', 'Production optimization', 'Supply chain integration', 'Worker safety'],
      benefits: ['Reduce downtime', 'Improve quality', 'Optimize production'],
      marketPrice: '$25,000-60,000/month',
      category: 'Manufacturing',
      technologies: ['IoT Sensors', 'Computer Vision', 'Machine Learning', 'Robotics', 'Industrial AI']
    },
    {
      title: 'AI-Powered Legal Research',
      description: 'Intelligent legal research with case analysis, precedent finding, and document review.',
      icon: '⚖️',
      price: 'Starting at $6,000/month',
      features: ['Case analysis', 'Precedent finding', 'Document review', 'Legal research', 'Contract analysis'],
      benefits: ['Accelerate research', 'Find precedents', 'Review documents faster'],
      marketPrice: '$12,000-30,000/month',
      category: 'Legal',
      technologies: ['NLP', 'Machine Learning', 'Legal Databases', 'Document Processing', 'Knowledge Graphs']
    },
    {
      title: 'AI-Powered Real Estate Analytics',
      description: 'Property market analysis with valuation predictions, investment recommendations, and market trends.',
      icon: '🏠',
      price: 'Starting at $5,000/month',
      features: ['Property valuation', 'Market analysis', 'Investment recommendations', 'Trend predictions', 'Risk assessment'],
      benefits: ['Make informed investments', 'Optimize property values', 'Reduce risks'],
      marketPrice: '$10,000-25,000/month',
      category: 'Real Estate',
      technologies: ['Machine Learning', 'Geospatial Analysis', 'Market Data', 'Predictive Models', 'Investment Analytics']
    },
    {
      title: 'AI-Powered Education Platform',
      description: 'Personalized learning with adaptive content, progress tracking, and performance optimization.',
      icon: '🎓',
      price: 'Starting at $4,000/month',
      features: ['Adaptive learning', 'Progress tracking', 'Content personalization', 'Assessment automation', 'Learning analytics'],
      benefits: ['Improve learning outcomes', 'Personalize education', 'Track progress'],
      marketPrice: '$8,000-20,000/month',
      category: 'Education',
      technologies: ['Machine Learning', 'NLP', 'Adaptive Learning', 'Learning Analytics', 'Content Management']
    },
    {
      title: 'AI-Powered Retail Intelligence',
      description: 'Intelligent retail with customer behavior analysis, inventory optimization, and sales prediction.',
      icon: '🛍️',
      price: 'Starting at $7,000/month',
      features: ['Customer behavior analysis', 'Inventory optimization', 'Sales prediction', 'Price optimization', 'Store layout analysis'],
      benefits: ['Increase sales', 'Optimize inventory', 'Improve customer experience'],
      marketPrice: '$15,000-35,000/month',
      category: 'Retail',
      technologies: ['Computer Vision', 'Machine Learning', 'Customer Analytics', 'Inventory Management', 'Sales Forecasting']
    },
    {
      title: 'AI-Powered Transportation Optimization',
      description: 'Smart transportation with route optimization, fleet management, and passenger experience enhancement.',
      icon: '🚌',
      price: 'Starting at $9,000/month',
      features: ['Route optimization', 'Fleet management', 'Passenger experience', 'Maintenance scheduling', 'Fuel optimization'],
      benefits: ['Improve efficiency', 'Reduce costs', 'Enhance passenger experience'],
      marketPrice: '$18,000-40,000/month',
      category: 'Transportation',
      technologies: ['GPS Tracking', 'Machine Learning', 'Fleet Management', 'Route Optimization', 'Passenger Analytics']
    },
    {
      title: 'AI-Powered Agriculture Intelligence',
      description: 'Smart farming with crop monitoring, yield prediction, and resource optimization.',
      icon: '🌾',
      price: 'Starting at $6,500/month',
      features: ['Crop monitoring', 'Yield prediction', 'Resource optimization', 'Weather integration', 'Pest detection'],
      benefits: ['Increase crop yields', 'Reduce resource waste', 'Improve farming efficiency'],
      marketPrice: '$13,000-30,000/month',
      category: 'Agriculture',
      technologies: ['IoT Sensors', 'Satellite Data', 'Machine Learning', 'Computer Vision', 'Weather APIs']
    },
    {
      title: 'AI-Powered Environmental Monitoring',
      description: 'Environmental data analysis with pollution tracking, climate monitoring, and sustainability insights.',
      icon: '🌍',
      price: 'Starting at $5,500/month',
      features: ['Pollution tracking', 'Climate monitoring', 'Sustainability insights', 'Environmental alerts', 'Data visualization'],
      benefits: ['Monitor environment', 'Track climate changes', 'Promote sustainability'],
      marketPrice: '$11,000-25,000/month',
      category: 'Environmental',
      technologies: ['IoT Sensors', 'Satellite Data', 'Machine Learning', 'Environmental APIs', 'Climate Models']
    },
    {
      title: 'AI-Powered Space Technology',
      description: 'Satellite data analysis with weather monitoring, earth observation, and space mission optimization.',
      icon: '🛰️',
      price: 'Starting at $20,000/month',
      features: ['Satellite data analysis', 'Weather monitoring', 'Earth observation', 'Mission optimization', 'Space debris tracking'],
      benefits: ['Optimize space missions', 'Monitor earth changes', 'Improve satellite operations'],
      marketPrice: '$40,000-100,000/month',
      category: 'Space Technology',
      technologies: ['Satellite APIs', 'Machine Learning', 'Earth Observation', 'Space Analytics', 'Mission Planning']
    },
    {
      title: 'AI-Powered Quantum Computing',
      description: 'Quantum algorithm development and simulation with optimization and error correction.',
      icon: '⚛️',
      price: 'Starting at $25,000/month',
      features: ['Quantum simulation', 'Algorithm development', 'Optimization', 'Error correction', 'Performance analysis'],
      benefits: ['Develop quantum algorithms', 'Optimize quantum systems', 'Reduce development time'],
      marketPrice: '$50,000-150,000/month',
      category: 'Quantum Computing',
      technologies: ['Qiskit', 'Cirq', 'Quantum Algorithms', 'Machine Learning', 'Quantum Simulation']
    },
    {
      title: 'AI-Powered Autonomous Systems',
      description: 'Self-managing systems with autonomous decision-making, learning, and adaptation capabilities.',
      icon: '🤖',
      price: 'Starting at $15,000/month',
      features: ['Autonomous decision making', 'Self-learning', 'Adaptation', 'Self-healing', 'Performance optimization'],
      benefits: ['Reduce human intervention', 'Improve system reliability', 'Enable autonomous operations'],
      marketPrice: '$30,000-75,000/month',
      category: 'Autonomous Systems',
      technologies: ['Reinforcement Learning', 'Neural Networks', 'Decision Trees', 'Self-Healing Systems', 'Adaptive AI']
    },
    {
      title: 'AI-Powered Blockchain Analytics',
      description: 'Cryptocurrency and blockchain analysis with transaction monitoring and risk assessment.',
      icon: '⛓️',
      price: 'Starting at $8,000/month',
      features: ['Transaction analysis', 'Risk assessment', 'Market analysis', 'Compliance monitoring', 'Fraud detection'],
      benefits: ['Monitor blockchain activity', 'Assess risks', 'Ensure compliance'],
      marketPrice: '$16,000-40,000/month',
      category: 'Blockchain',
      technologies: ['Blockchain APIs', 'Machine Learning', 'Cryptocurrency Analysis', 'Risk Models', 'Compliance Tools']
    },
    {
      title: 'AI-Powered IoT Intelligence',
      description: 'Intelligent IoT device management with monitoring, optimization, and predictive maintenance.',
      icon: '🌐',
      price: 'Starting at $6,000/month',
      features: ['Device monitoring', 'Predictive maintenance', 'Performance optimization', 'Security monitoring', 'Data analytics'],
      benefits: ['Improve device reliability', 'Reduce maintenance costs', 'Enhance security'],
      marketPrice: '$12,000-30,000/month',
      category: 'IoT',
      technologies: ['IoT Sensors', 'Machine Learning', 'Edge Computing', 'Device Management', 'Predictive Analytics']
    },
    {
      title: 'AI-Powered Edge Computing',
      description: 'Intelligent edge device management with real-time processing and optimization.',
      icon: '📡',
      price: 'Starting at $7,500/month',
      features: ['Edge device management', 'Real-time processing', 'Performance optimization', 'Resource allocation', 'Security monitoring'],
      benefits: ['Improve edge performance', 'Reduce latency', 'Enhance security'],
      marketPrice: '$15,000-35,000/month',
      category: 'Edge Computing',
      technologies: ['Edge AI', 'Machine Learning', 'Real-time Processing', 'Resource Optimization', 'Edge Security']
    },
    {
      title: 'AI-Powered 5G Network Optimization',
      description: '5G network optimization with performance monitoring and intelligent resource allocation.',
      icon: '📶',
      price: 'Starting at $12,000/month',
      features: ['Network optimization', 'Performance monitoring', 'Resource allocation', 'Traffic management', 'Quality assurance'],
      benefits: ['Improve network performance', 'Optimize resources', 'Enhance user experience'],
      marketPrice: '$24,000-60,000/month',
      category: '5G Technology',
      technologies: ['5G APIs', 'Machine Learning', 'Network Optimization', 'Resource Management', 'Performance Analytics']
    },
    {
      title: 'AI-Powered Autonomous Vehicles',
      description: 'Self-driving vehicle management with route optimization, safety monitoring, and performance analysis.',
      icon: '🚗',
      price: 'Starting at $20,000/month',
      features: ['Route optimization', 'Safety monitoring', 'Performance analysis', 'Predictive maintenance', 'Fleet management'],
      benefits: ['Improve safety', 'Optimize routes', 'Reduce costs'],
      marketPrice: '$40,000-100,000/month',
      category: 'Autonomous Vehicles',
      technologies: ['Computer Vision', 'Lidar', 'Machine Learning', 'Sensor Fusion', 'Autonomous Navigation']
    },
    {
      title: 'AI-Powered Smart Cities',
      description: 'Urban management system with traffic optimization, resource management, and citizen services.',
      icon: '🏙️',
      price: 'Starting at $25,000/month',
      features: ['Traffic optimization', 'Resource management', 'Citizen services', 'Environmental monitoring', 'Emergency response'],
      benefits: ['Improve city efficiency', 'Enhance citizen services', 'Optimize resources'],
      marketPrice: '$50,000-150,000/month',
      category: 'Smart Cities',
      technologies: ['IoT Sensors', 'Machine Learning', 'Urban Analytics', 'Citizen Services', 'City Management']
    },
    {
      title: 'AI-Powered Metaverse Platform',
      description: 'Virtual world management with avatar optimization, social interactions, and content creation.',
      icon: '🌐',
      price: 'Starting at $15,000/month',
      features: ['Avatar optimization', 'Social interactions', 'Content creation', 'Virtual events', 'Economy management'],
      benefits: ['Enhance virtual experiences', 'Monetize virtual assets', 'Build communities'],
      marketPrice: '$30,000-75,000/month',
      category: 'Metaverse',
      technologies: ['Virtual Reality', 'Augmented Reality', 'Machine Learning', '3D Graphics', 'Social AI']
    },
    {
      title: 'AI-Powered Augmented Reality',
      description: 'AR content creation and optimization with object recognition and interactive experiences.',
      icon: '🥽',
      price: 'Starting at $10,000/month',
      features: ['AR content creation', 'Object recognition', 'Interactive experiences', 'Performance optimization', 'Analytics dashboard'],
      benefits: ['Create engaging AR content', 'Improve user experience', 'Optimize performance'],
      marketPrice: '$20,000-50,000/month',
      category: 'Augmented Reality',
      technologies: ['ARCore', 'ARKit', 'Computer Vision', 'Machine Learning', '3D Rendering']
    },
    {
      title: 'AI-Powered Virtual Reality',
      description: 'VR experience optimization with performance monitoring and user behavior analysis.',
      icon: '🥽',
      price: 'Starting at $12,000/month',
      features: ['VR optimization', 'Performance monitoring', 'User behavior analysis', 'Content recommendations', 'Comfort optimization'],
      benefits: ['Improve VR performance', 'Enhance user comfort', 'Optimize experiences'],
      marketPrice: '$24,000-60,000/month',
      category: 'Virtual Reality',
      technologies: ['Unity', 'Unreal Engine', 'Machine Learning', 'VR Analytics', 'Performance Optimization']
    },
    {
      title: 'AI-Powered Drone Management',
      description: 'Intelligent drone operations with flight planning, monitoring, and autonomous missions.',
      icon: '🚁',
      price: 'Starting at $8,000/month',
      features: ['Flight planning', 'Autonomous missions', 'Performance monitoring', 'Weather integration', 'Safety management'],
      benefits: ['Improve drone operations', 'Enhance safety', 'Optimize missions'],
      marketPrice: '$16,000-40,000/month',
      category: 'Drone Technology',
      technologies: ['Drone APIs', 'Computer Vision', 'Machine Learning', 'Flight Planning', 'Autonomous Navigation']
    },
    {
      title: 'AI-Powered Robotics Control',
      description: 'Smart robot management with task optimization, learning capabilities, and performance monitoring.',
      icon: '🤖',
      price: 'Starting at $15,000/month',
      features: ['Task optimization', 'Learning capabilities', 'Performance monitoring', 'Safety management', 'Maintenance scheduling'],
      benefits: ['Improve robot efficiency', 'Enhance learning', 'Reduce maintenance costs'],
      marketPrice: '$30,000-75,000/month',
      category: 'Robotics',
      technologies: ['ROS', 'Machine Learning', 'Computer Vision', 'Robotic Control', 'Autonomous Systems']
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
    }
  ];

<<<<<<< HEAD
  // const categories = [...new Set(aiServices.map(service => service.category))];
=======
  const categories = [...new Set(aiServices.map(service => service.category))];
>>>>>>> cursor/fix-errors-and-merge-to-main-1e5f

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