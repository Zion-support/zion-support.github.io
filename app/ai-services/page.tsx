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
    // NEW INNOVATIVE AI SERVICES
    {
      title: 'AI-Powered Voice Synthesis & Cloning',
      description: 'Advanced voice synthesis and cloning technology for personalized voice assistants and content creation.',
      icon: '🎤',
      price: 'Starting at $2,500/month',
      features: ['Voice cloning', 'Text-to-speech synthesis', 'Emotion control', 'Multi-language support', 'Real-time processing'],
      benefits: ['Create personalized voices', 'Improve accessibility', 'Enhance user experience'],
      marketPrice: '$4,000-12,000/month',
      category: 'Voice AI',
      technologies: ['Tacotron', 'WaveNet', 'MelGAN', 'FastSpeech', 'Real-time Audio']
    },
    {
      title: 'AI-Powered Code Generation & Review',
      description: 'Automated code generation, review, and optimization using advanced language models and static analysis.',
      icon: '💻',
      price: 'Starting at $3,500/month',
      features: ['Code generation', 'Automated review', 'Bug detection', 'Performance optimization', 'Security analysis'],
      benefits: ['Accelerate development', 'Improve code quality', 'Reduce bugs by 70%'],
      marketPrice: '$6,000-18,000/month',
      category: 'Developer AI',
      technologies: ['CodeT5', 'CodeBERT', 'SonarQube', 'ESLint', 'Custom Models']
    },
    {
      title: 'AI-Powered Legal Document Analysis',
      description: 'Intelligent legal document review, contract analysis, and compliance checking using NLP and ML.',
      icon: '⚖️',
      price: 'Starting at $4,500/month',
      features: ['Contract analysis', 'Legal research', 'Compliance checking', 'Risk assessment', 'Document summarization'],
      benefits: ['Reduce legal review time by 80%', 'Improve accuracy', 'Lower legal costs'],
      marketPrice: '$7,500-22,000/month',
      category: 'Legal AI',
      technologies: ['BERT', 'RoBERTa', 'Legal NLP', 'Document AI', 'Compliance APIs']
    },
    {
      title: 'AI-Powered Mental Health Support',
      description: 'Intelligent mental health monitoring, therapy assistance, and emotional support using conversational AI.',
      icon: '🧠',
      price: 'Starting at $5,500/month',
      features: ['Emotion detection', 'Therapy assistance', 'Crisis intervention', 'Progress tracking', 'Privacy protection'],
      benefits: ['Improve mental health outcomes', 'Provide 24/7 support', 'Reduce therapy costs'],
      marketPrice: '$9,000-25,000/month',
      category: 'Healthcare AI',
      technologies: ['NLP', 'Sentiment Analysis', 'Privacy ML', 'Conversational AI', 'Health APIs']
    },
    {
      title: 'AI-Powered Real Estate Valuation',
      description: 'Automated property valuation, market analysis, and investment recommendations using ML models.',
      icon: '🏠',
      price: 'Starting at $3,000/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Trend prediction', 'Risk assessment'],
      benefits: ['Improve valuation accuracy', 'Accelerate decision making', 'Reduce appraisal costs'],
      marketPrice: '$5,000-15,000/month',
      category: 'Real Estate AI',
      technologies: ['XGBoost', 'LightGBM', 'Property APIs', 'Geospatial ML', 'Market Data']
    },
    {
      title: 'AI-Powered Sports Analytics',
      description: 'Advanced sports performance analysis, injury prediction, and strategy optimization using ML.',
      icon: '⚽',
      price: 'Starting at $4,000/month',
      features: ['Performance analysis', 'Injury prediction', 'Strategy optimization', 'Player scouting', 'Fan engagement'],
      benefits: ['Improve performance', 'Reduce injuries', 'Optimize strategies'],
      marketPrice: '$6,500-20,000/month',
      category: 'Sports AI',
      technologies: ['Computer Vision', 'Time Series', 'Wearable Data', 'Video Analysis', 'Performance Metrics']
    },
    {
      title: 'AI-Powered Music Composition',
      description: 'Intelligent music generation, composition assistance, and audio production using deep learning.',
      icon: '🎵',
      price: 'Starting at $2,000/month',
      features: ['Music generation', 'Style transfer', 'Harmony analysis', 'Lyric generation', 'Audio mastering'],
      benefits: ['Accelerate music creation', 'Explore new styles', 'Reduce production costs'],
      marketPrice: '$3,500-10,000/month',
      category: 'Creative AI',
      technologies: ['MuseNet', 'Jukebox', 'Magenta', 'Audio ML', 'MIDI Processing']
    },
    {
      title: 'AI-Powered Fashion Design',
      description: 'Automated fashion design, trend prediction, and personalized styling using computer vision and ML.',
      icon: '👗',
      price: 'Starting at $3,500/month',
      features: ['Design generation', 'Trend prediction', 'Style matching', 'Size optimization', 'Virtual try-on'],
      benefits: ['Accelerate design process', 'Predict trends', 'Improve customer experience'],
      marketPrice: '$6,000-18,000/month',
      category: 'Fashion AI',
      technologies: ['GANs', 'Computer Vision', 'Style Transfer', 'Fashion APIs', '3D Modeling']
    },
    {
      title: 'AI-Powered Food & Recipe Optimization',
      description: 'Intelligent recipe generation, nutritional analysis, and personalized meal planning using ML.',
      icon: '🍳',
      price: 'Starting at $2,500/month',
      features: ['Recipe generation', 'Nutritional analysis', 'Diet optimization', 'Allergy detection', 'Meal planning'],
      benefits: ['Improve nutrition', 'Personalize diets', 'Reduce food waste'],
      marketPrice: '$4,000-12,000/month',
      category: 'Food AI',
      technologies: ['NLP', 'Nutrition APIs', 'Recipe Analysis', 'Dietary ML', 'Food Recognition']
    },
    {
      title: 'AI-Powered Gaming & Entertainment',
      description: 'Intelligent game design, NPC behavior, and personalized gaming experiences using AI.',
      icon: '🎮',
      price: 'Starting at $4,500/month',
      features: ['NPC behavior', 'Procedural generation', 'Player analysis', 'Content creation', 'Adaptive difficulty'],
      benefits: ['Enhance gameplay', 'Create dynamic content', 'Improve player engagement'],
      marketPrice: '$7,500-22,000/month',
      category: 'Gaming AI',
      technologies: ['Reinforcement Learning', 'Procedural Generation', 'Game Engines', 'Player Analytics', 'AI NPCs']
    },
    {
      title: 'AI-Powered Language Learning',
      description: 'Personalized language learning with adaptive curriculum, pronunciation analysis, and conversation practice.',
      icon: '🌍',
      price: 'Starting at $1,500/month',
      features: ['Adaptive learning', 'Pronunciation analysis', 'Conversation practice', 'Progress tracking', 'Cultural context'],
      benefits: ['Accelerate learning', 'Personalize education', 'Improve pronunciation'],
      marketPrice: '$2,500-8,000/month',
      category: 'Education AI',
      technologies: ['Speech Recognition', 'NLP', 'Adaptive Learning', 'Language Models', 'Progress Tracking']
    },
    {
      title: 'AI-Powered Personal Finance Management',
      description: 'Intelligent financial planning, investment advice, and expense optimization using ML models.',
      icon: '💰',
      price: 'Starting at $2,000/month',
      features: ['Financial planning', 'Investment advice', 'Expense optimization', 'Risk assessment', 'Goal tracking'],
      benefits: ['Improve financial health', 'Optimize investments', 'Reduce financial stress'],
      marketPrice: '$3,500-10,000/month',
      category: 'FinTech AI',
      technologies: ['Financial ML', 'Portfolio Optimization', 'Risk Models', 'Banking APIs', 'Market Data']
    },
    {
      title: 'AI-Powered Travel Planning',
      description: 'Intelligent travel recommendations, itinerary optimization, and personalized travel experiences.',
      icon: '✈️',
      price: 'Starting at $2,500/month',
      features: ['Travel recommendations', 'Itinerary optimization', 'Price prediction', 'Personalization', 'Real-time updates'],
      benefits: ['Save planning time', 'Optimize travel costs', 'Enhance experiences'],
      marketPrice: '$4,000-12,000/month',
      category: 'Travel AI',
      technologies: ['Recommendation Systems', 'Price Prediction', 'Travel APIs', 'Personalization', 'Real-time Data']
    },
    {
      title: 'AI-Powered Home Automation',
      description: 'Intelligent home control, energy optimization, and predictive maintenance using IoT and ML.',
      icon: '🏡',
      price: 'Starting at $1,500/month',
      features: ['Smart control', 'Energy optimization', 'Predictive maintenance', 'Security monitoring', 'Comfort optimization'],
      benefits: ['Reduce energy costs', 'Improve comfort', 'Enhance security'],
      marketPrice: '$2,500-8,000/month',
      category: 'Smart Home AI',
      technologies: ['IoT Integration', 'Energy ML', 'Predictive Maintenance', 'Home Automation', 'Sensor Data']
    },
    {
      title: 'AI-Powered Customer Service Optimization',
      description: 'Intelligent customer service enhancement with sentiment analysis, response optimization, and automation.',
      icon: '🎧',
      price: 'Starting at $3,000/month',
      features: ['Sentiment analysis', 'Response optimization', 'Automation', 'Quality scoring', 'Training recommendations'],
      benefits: ['Improve customer satisfaction', 'Reduce response time', 'Optimize agent performance'],
      marketPrice: '$5,000-15,000/month',
      category: 'Customer Service AI',
      technologies: ['Sentiment Analysis', 'NLP', 'Automation', 'Quality Metrics', 'Customer Data']
    },
    {
      title: 'AI-Powered Supply Chain Risk Management',
      description: 'Intelligent risk assessment, disruption prediction, and supply chain optimization using ML.',
      icon: '⚠️',
      price: 'Starting at $4,500/month',
      features: ['Risk assessment', 'Disruption prediction', 'Supplier analysis', 'Contingency planning', 'Real-time monitoring'],
      benefits: ['Reduce supply chain risks', 'Improve resilience', 'Optimize operations'],
      marketPrice: '$7,500-22,000/month',
      category: 'Supply Chain AI',
      technologies: ['Risk ML', 'Time Series', 'Supplier Data', 'Geospatial Analysis', 'Risk APIs']
    },
    {
      title: 'AI-Powered Environmental Monitoring',
      description: 'Intelligent environmental data analysis, pollution detection, and sustainability optimization.',
      icon: '🌱',
      price: 'Starting at $3,500/month',
      features: ['Pollution detection', 'Environmental analysis', 'Sustainability tracking', 'Alert systems', 'Trend prediction'],
      benefits: ['Improve environmental health', 'Optimize sustainability', 'Enable proactive response'],
      marketPrice: '$6,000-18,000/month',
      category: 'Environmental AI',
      technologies: ['Sensor Data', 'Environmental ML', 'Satellite Imagery', 'IoT Analytics', 'Sustainability Metrics']
    },
    {
      title: 'AI-Powered Workforce Analytics',
      description: 'Intelligent HR analytics, employee performance prediction, and workforce optimization using ML.',
      icon: '👥',
      price: 'Starting at $4,000/month',
      features: ['Performance prediction', 'Retention analysis', 'Skill matching', 'Workload optimization', 'Engagement tracking'],
      benefits: ['Improve retention', 'Optimize workforce', 'Enhance productivity'],
      marketPrice: '$6,500-20,000/month',
      category: 'HR AI',
      technologies: ['HR Analytics', 'Performance ML', 'Employee Data', 'Predictive Models', 'Engagement Metrics']
    },
    {
      title: 'AI-Powered Content Moderation',
      description: 'Intelligent content moderation, hate speech detection, and safety enforcement using ML models.',
      icon: '🛡️',
      price: 'Starting at $2,500/month',
      features: ['Content classification', 'Hate speech detection', 'Image moderation', 'Video analysis', 'Real-time filtering'],
      benefits: ['Improve platform safety', 'Reduce manual moderation', 'Scale content review'],
      marketPrice: '$4,000-12,000/month',
      category: 'Content Moderation AI',
      technologies: ['Content Classification', 'Hate Speech Detection', 'Image Analysis', 'Video ML', 'Real-time Processing']
    },
    {
      title: 'AI-Powered Predictive Maintenance',
      description: 'Intelligent equipment monitoring, failure prediction, and maintenance optimization using IoT and ML.',
      icon: '🔧',
      price: 'Starting at $5,000/month',
      features: ['Failure prediction', 'Maintenance scheduling', 'Performance monitoring', 'Cost optimization', 'Alert systems'],
      benefits: ['Reduce downtime by 70%', 'Lower maintenance costs', 'Extend equipment life'],
      marketPrice: '$8,000-25,000/month',
      category: 'Industrial AI',
      technologies: ['IoT Data', 'Predictive ML', 'Sensor Analytics', 'Maintenance Optimization', 'Equipment Monitoring']
    },
    {
      title: 'AI-Powered Smart Agriculture',
      description: 'Intelligent crop monitoring, yield prediction, and precision farming using computer vision and ML.',
      icon: '🌾',
      price: 'Starting at $3,500/month',
      features: ['Crop monitoring', 'Yield prediction', 'Pest detection', 'Irrigation optimization', 'Soil analysis'],
      benefits: ['Increase crop yields', 'Reduce resource usage', 'Improve sustainability'],
      marketPrice: '$6,000-18,000/month',
      category: 'AgTech AI',
      technologies: ['Satellite Imagery', 'Drone Data', 'Computer Vision', 'Precision Agriculture', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Smart Manufacturing',
      description: 'Intelligent manufacturing optimization, quality control, and process improvement using ML.',
      icon: '🏭',
      price: 'Starting at $6,000/month',
      features: ['Quality control', 'Process optimization', 'Defect detection', 'Production planning', 'Equipment monitoring'],
      benefits: ['Improve quality', 'Reduce waste', 'Optimize production'],
      marketPrice: '$10,000-30,000/month',
      category: 'Manufacturing AI',
      technologies: ['Computer Vision', 'Process ML', 'Quality Control', 'Production Analytics', 'IoT Integration']
    },
    {
      title: 'AI-Powered Smart Retail',
      description: 'Intelligent retail optimization, inventory management, and customer experience enhancement using ML.',
      icon: '🛒',
      price: 'Starting at $4,500/month',
      features: ['Inventory optimization', 'Customer analytics', 'Price optimization', 'Demand forecasting', 'Personalization'],
      benefits: ['Increase sales', 'Reduce inventory costs', 'Improve customer experience'],
      marketPrice: '$7,500-22,000/month',
      category: 'Retail AI',
      technologies: ['Retail Analytics', 'Demand Forecasting', 'Customer ML', 'Inventory Optimization', 'Personalization']
    },
    {
      title: 'AI-Powered Smart Transportation',
      description: 'Intelligent traffic optimization, route planning, and fleet management using ML and IoT.',
      icon: '🚛',
      price: 'Starting at $5,500/month',
      features: ['Traffic optimization', 'Route planning', 'Fleet management', 'Demand prediction', 'Fuel optimization'],
      benefits: ['Reduce travel time', 'Lower fuel costs', 'Improve efficiency'],
      marketPrice: '$9,000-25,000/month',
      category: 'Transportation AI',
      technologies: ['Traffic ML', 'Route Optimization', 'Fleet Analytics', 'Demand Prediction', 'IoT Integration']
    },
    {
      title: 'AI-Powered Smart Energy',
      description: 'Intelligent energy management, grid optimization, and renewable energy integration using ML.',
      icon: '⚡',
      price: 'Starting at $6,500/month',
      features: ['Grid optimization', 'Energy forecasting', 'Renewable integration', 'Demand response', 'Storage optimization'],
      benefits: ['Improve grid efficiency', 'Integrate renewables', 'Reduce energy costs'],
      marketPrice: '$11,000-35,000/month',
      category: 'Energy AI',
      technologies: ['Grid ML', 'Energy Forecasting', 'Renewable Analytics', 'Demand Response', 'Storage Optimization']
    },
    {
      title: 'AI-Powered Smart Healthcare',
      description: 'Intelligent healthcare optimization, patient monitoring, and treatment personalization using ML.',
      icon: '🏥',
      price: 'Starting at $8,000/month',
      features: ['Patient monitoring', 'Treatment optimization', 'Diagnosis assistance', 'Drug discovery', 'Clinical trials'],
      benefits: ['Improve patient outcomes', 'Reduce costs', 'Accelerate research'],
      marketPrice: '$15,000-45,000/month',
      category: 'Healthcare AI',
      technologies: ['Medical ML', 'Patient Analytics', 'Clinical Data', 'Drug Discovery', 'Treatment Optimization']
    },
    {
      title: 'AI-Powered Smart Education',
      description: 'Intelligent education optimization, personalized learning, and student performance prediction using ML.',
      icon: '🎓',
      price: 'Starting at $3,500/month',
      features: ['Personalized learning', 'Performance prediction', 'Curriculum optimization', 'Student analytics', 'Adaptive assessment'],
      benefits: ['Improve learning outcomes', 'Personalize education', 'Optimize curriculum'],
      marketPrice: '$6,000-18,000/month',
      category: 'Education AI',
      technologies: ['Learning Analytics', 'Personalization ML', 'Student Data', 'Curriculum Optimization', 'Assessment AI']
    },
    {
      title: 'AI-Powered Smart Finance',
      description: 'Intelligent financial services, risk management, and investment optimization using advanced ML models.',
      icon: '💳',
      price: 'Starting at $7,500/month',
      features: ['Risk management', 'Investment optimization', 'Fraud detection', 'Credit scoring', 'Algorithmic trading'],
      benefits: ['Improve financial performance', 'Reduce risks', 'Optimize investments'],
      marketPrice: '$12,000-40,000/month',
      category: 'FinTech AI',
      technologies: ['Financial ML', 'Risk Models', 'Trading Algorithms', 'Credit Analytics', 'Fraud Detection']
    },
    {
      title: 'AI-Powered Smart Marketing',
      description: 'Intelligent marketing optimization, customer segmentation, and campaign personalization using ML.',
      icon: '📢',
      price: 'Starting at $4,000/month',
      features: ['Customer segmentation', 'Campaign optimization', 'Personalization', 'ROI prediction', 'A/B testing'],
      benefits: ['Improve marketing ROI', 'Personalize campaigns', 'Optimize targeting'],
      marketPrice: '$6,500-20,000/month',
      category: 'Marketing AI',
      technologies: ['Marketing ML', 'Customer Analytics', 'Campaign Optimization', 'Personalization', 'ROI Prediction']
    },
    {
      title: 'AI-Powered Smart Sales',
      description: 'Intelligent sales optimization, lead scoring, and revenue prediction using ML models.',
      icon: '💼',
      price: 'Starting at $3,500/month',
      features: ['Lead scoring', 'Sales forecasting', 'Pipeline optimization', 'Customer insights', 'Revenue prediction'],
      benefits: ['Increase sales', 'Improve forecasting', 'Optimize pipeline'],
      marketPrice: '$6,000-18,000/month',
      category: 'Sales AI',
      technologies: ['Sales ML', 'Lead Analytics', 'Revenue Prediction', 'Pipeline Optimization', 'Customer Insights']
    },
    {
      title: 'AI-Powered Smart Operations',
      description: 'Intelligent operations optimization, resource allocation, and process improvement using ML.',
      icon: '⚙️',
      price: 'Starting at $5,000/month',
      features: ['Process optimization', 'Resource allocation', 'Performance monitoring', 'Efficiency analysis', 'Cost optimization'],
      benefits: ['Improve efficiency', 'Reduce costs', 'Optimize resources'],
      marketPrice: '$8,000-25,000/month',
      category: 'Operations AI',
      technologies: ['Operations ML', 'Resource Optimization', 'Process Analytics', 'Efficiency Models', 'Cost Analysis']
    },
    {
      title: 'AI-Powered Smart Security',
      description: 'Intelligent security monitoring, threat detection, and incident response using advanced ML models.',
      icon: '🔒',
      price: 'Starting at $6,500/month',
      features: ['Threat detection', 'Security monitoring', 'Incident response', 'Vulnerability assessment', 'Compliance management'],
      benefits: ['Improve security posture', 'Reduce response time', 'Automate security operations'],
      marketPrice: '$11,000-35,000/month',
      category: 'Security AI',
      technologies: ['Security ML', 'Threat Detection', 'Incident Response', 'Vulnerability Analysis', 'Compliance AI']
    },
    {
      title: 'AI-Powered Smart Analytics',
      description: 'Intelligent data analytics, insight generation, and business intelligence using advanced ML models.',
      icon: '📊',
      price: 'Starting at $4,500/month',
      features: ['Insight generation', 'Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Automated reporting'],
      benefits: ['Discover insights', 'Improve decision making', 'Automate analysis'],
      marketPrice: '$7,500-22,000/month',
      category: 'Analytics AI',
      technologies: ['Analytics ML', 'Insight Generation', 'Predictive Models', 'Anomaly Detection', 'Automated Reporting']
    },
    {
      title: 'AI-Powered Smart Automation',
      description: 'Intelligent process automation, workflow optimization, and decision automation using ML.',
      icon: '🤖',
      price: 'Starting at $5,500/month',
      features: ['Process automation', 'Workflow optimization', 'Decision automation', 'Exception handling', 'Integration management'],
      benefits: ['Automate processes', 'Improve efficiency', 'Reduce errors'],
      marketPrice: '$9,000-25,000/month',
      category: 'Automation AI',
      technologies: ['Automation ML', 'Workflow Engine', 'Decision Models', 'Process Optimization', 'Integration AI']
    },
    {
      title: 'AI-Powered Smart Innovation',
      description: 'Intelligent innovation management, idea generation, and R&D optimization using ML models.',
      icon: '💡',
      price: 'Starting at $6,000/month',
      features: ['Idea generation', 'Innovation analysis', 'R&D optimization', 'Patent analysis', 'Market research'],
      benefits: ['Accelerate innovation', 'Optimize R&D', 'Improve patent strategy'],
      marketPrice: '$10,000-30,000/month',
      category: 'Innovation AI',
      technologies: ['Innovation ML', 'Idea Generation', 'R&D Analytics', 'Patent Analysis', 'Market Research']
    },
    {
      title: 'AI-Powered Smart Sustainability',
      description: 'Intelligent sustainability management, carbon tracking, and environmental optimization using ML.',
      icon: '🌍',
      price: 'Starting at $4,000/month',
      features: ['Carbon tracking', 'Sustainability analysis', 'Environmental optimization', 'ESG reporting', 'Impact measurement'],
      benefits: ['Improve sustainability', 'Track environmental impact', 'Optimize ESG performance'],
      marketPrice: '$6,500-20,000/month',
      category: 'Sustainability AI',
      technologies: ['Sustainability ML', 'Carbon Analytics', 'ESG Data', 'Environmental Optimization', 'Impact Measurement']
    },
    {
      title: 'AI-Powered Smart Compliance',
      description: 'Intelligent compliance monitoring, regulatory analysis, and risk management using ML models.',
      icon: '📋',
      price: 'Starting at $5,500/month',
      features: ['Compliance monitoring', 'Regulatory analysis', 'Risk assessment', 'Audit automation', 'Policy optimization'],
      benefits: ['Ensure compliance', 'Reduce regulatory risks', 'Automate audits'],
      marketPrice: '$9,000-25,000/month',
      category: 'Compliance AI',
      technologies: ['Compliance ML', 'Regulatory Analysis', 'Risk Models', 'Audit Automation', 'Policy Optimization']
    },
    {
      title: 'AI-Powered Smart Governance',
      description: 'Intelligent governance management, decision support, and policy optimization using ML.',
      icon: '🏛️',
      price: 'Starting at $7,000/month',
      features: ['Governance analysis', 'Decision support', 'Policy optimization', 'Stakeholder management', 'Performance tracking'],
      benefits: ['Improve governance', 'Support decisions', 'Optimize policies'],
      marketPrice: '$12,000-35,000/month',
      category: 'Governance AI',
      technologies: ['Governance ML', 'Decision Support', 'Policy Analysis', 'Stakeholder Analytics', 'Performance Tracking']
    },
    {
      title: 'AI-Powered Smart Strategy',
      description: 'Intelligent strategic planning, market analysis, and competitive intelligence using ML models.',
      icon: '🎯',
      price: 'Starting at $8,500/month',
      features: ['Strategic planning', 'Market analysis', 'Competitive intelligence', 'Scenario modeling', 'Performance prediction'],
      benefits: ['Improve strategic planning', 'Analyze markets', 'Predict performance'],
      marketPrice: '$15,000-45,000/month',
      category: 'Strategy AI',
      technologies: ['Strategy ML', 'Market Analysis', 'Competitive Intelligence', 'Scenario Modeling', 'Performance Prediction']
    },
    {
      title: 'AI-Powered Smart Leadership',
      description: 'Intelligent leadership development, team optimization, and organizational effectiveness using ML.',
      icon: '👑',
      price: 'Starting at $6,500/month',
      features: ['Leadership analysis', 'Team optimization', 'Organizational effectiveness', 'Performance coaching', 'Culture analysis'],
      benefits: ['Develop leaders', 'Optimize teams', 'Improve effectiveness'],
      marketPrice: '$11,000-35,000/month',
      category: 'Leadership AI',
      technologies: ['Leadership ML', 'Team Analytics', 'Organizational Data', 'Performance Coaching', 'Culture Analysis']
    },
    {
      title: 'AI-Powered Smart Transformation',
      description: 'Intelligent digital transformation, change management, and organizational optimization using ML.',
      icon: '🔄',
      price: 'Starting at $9,000/month',
      features: ['Transformation planning', 'Change management', 'Organizational optimization', 'Technology adoption', 'Culture change'],
      benefits: ['Accelerate transformation', 'Manage change', 'Optimize organization'],
      marketPrice: '$15,000-50,000/month',
      category: 'Transformation AI',
      technologies: ['Transformation ML', 'Change Management', 'Organizational Analytics', 'Technology Adoption', 'Culture Change']
    },
    {
      title: 'AI-Powered Smart Future',
      description: 'Intelligent future planning, trend analysis, and scenario modeling using advanced ML models.',
      icon: '🔮',
      price: 'Starting at $10,000/month',
      features: ['Future planning', 'Trend analysis', 'Scenario modeling', 'Risk assessment', 'Opportunity identification'],
      benefits: ['Plan for the future', 'Analyze trends', 'Model scenarios'],
      marketPrice: '$18,000-60,000/month',
      category: 'Future AI',
      technologies: ['Future ML', 'Trend Analysis', 'Scenario Modeling', 'Risk Assessment', 'Opportunity Analysis']
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