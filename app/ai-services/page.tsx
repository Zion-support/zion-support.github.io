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
    // NEW ADVANCED AI SERVICES
    {
      title: 'AI-Powered Voice Cloning & Synthesis',
      description: 'Advanced voice synthesis technology for creating realistic voice clones and personalized speech systems.',
      icon: '🎤',
      price: 'Starting at $2,500/month',
      features: ['Voice cloning', 'Text-to-speech synthesis', 'Voice conversion', 'Emotion control', 'Multi-language support'],
      benefits: ['Create personalized voice assistants', 'Improve accessibility', 'Enhance user experience'],
      marketPrice: '$4,000-12,000/month',
      category: 'Voice AI',
      technologies: ['Tacotron', 'WaveNet', 'MelGAN', 'Real-time Voice Cloning', 'Custom Neural Networks']
    },
    {
      title: 'AI-Powered 3D Model Generation',
      description: 'Intelligent 3D model creation and optimization for gaming, VR, and architectural visualization.',
      icon: '🎮',
      price: 'Starting at $3,500/month',
      features: ['3D model generation', 'Texture synthesis', 'Animation creation', 'LOD optimization', 'VR/AR integration'],
      benefits: ['Accelerate 3D content creation', 'Reduce production costs', 'Improve visual quality'],
      marketPrice: '$6,000-18,000/month',
      category: '3D AI',
      technologies: ['NeRF', '3D GANs', 'Blender API', 'Unity Integration', 'Custom 3D Models']
    },
    {
      title: 'AI-Powered Music Composition',
      description: 'Intelligent music generation and composition with style transfer and emotional analysis.',
      icon: '🎵',
      price: 'Starting at $1,800/month',
      features: ['Music composition', 'Style transfer', 'Emotional analysis', 'Instrument synthesis', 'Lyrics generation'],
      benefits: ['Create original music', 'Reduce composition time', 'Explore new musical styles'],
      marketPrice: '$3,000-8,000/month',
      category: 'Creative AI',
      technologies: ['MuseNet', 'Jukebox', 'Magenta', 'MIDI Processing', 'Custom Music Models']
    },
    {
      title: 'AI-Powered Video Generation',
      description: 'Advanced video creation and editing using AI for content production and marketing.',
      icon: '🎬',
      price: 'Starting at $4,500/month',
      features: ['Video generation', 'Scene synthesis', 'Motion transfer', 'Style transfer', 'Automated editing'],
      benefits: ['Create professional videos', 'Reduce production time', 'Lower video production costs'],
      marketPrice: '$7,500-20,000/month',
      category: 'Video AI',
      technologies: ['DALL-E Video', 'Runway ML', 'Stable Video Diffusion', 'OpenCV', 'Custom Video Models']
    },
    {
      title: 'AI-Powered Code Generation',
      description: 'Intelligent code generation and completion for multiple programming languages and frameworks.',
      icon: '💻',
      price: 'Starting at $2,200/month',
      features: ['Code generation', 'Bug fixing', 'Code optimization', 'Documentation generation', 'Multi-language support'],
      benefits: ['Accelerate development', 'Reduce coding errors', 'Improve code quality'],
      marketPrice: '$3,500-10,000/month',
      category: 'Development AI',
      technologies: ['GitHub Copilot', 'CodeT5', 'CodeBERT', 'Custom Code Models', 'IDE Integration']
    },
    {
      title: 'AI-Powered Game Development',
      description: 'Intelligent game asset generation, level design, and NPC behavior creation.',
      icon: '🎮',
      price: 'Starting at $3,000/month',
      features: ['Asset generation', 'Level design', 'NPC behavior', 'Procedural content', 'Game balancing'],
      benefits: ['Accelerate game development', 'Create unique content', 'Improve player experience'],
      marketPrice: '$5,000-15,000/month',
      category: 'Gaming AI',
      technologies: ['Unity ML-Agents', 'Unreal Engine AI', 'Procedural Generation', 'Custom Game AI', 'Reinforcement Learning']
    },
    {
      title: 'AI-Powered Fashion Design',
      description: 'Intelligent fashion design and trend prediction with virtual try-on capabilities.',
      icon: '👗',
      price: 'Starting at $2,800/month',
      features: ['Fashion design', 'Trend prediction', 'Virtual try-on', 'Color matching', 'Size optimization'],
      benefits: ['Accelerate design process', 'Predict fashion trends', 'Improve customer experience'],
      marketPrice: '$4,500-12,000/month',
      category: 'Fashion AI',
      technologies: ['FashionGAN', 'Virtual Try-On', 'Trend Analysis', 'Computer Vision', 'Custom Fashion Models']
    },
    {
      title: 'AI-Powered Interior Design',
      description: 'Intelligent interior design and space optimization with virtual room planning.',
      icon: '🏠',
      price: 'Starting at $2,500/month',
      features: ['Room design', 'Furniture placement', 'Color schemes', 'Space optimization', '3D visualization'],
      benefits: ['Improve space utilization', 'Accelerate design process', 'Enhance customer satisfaction'],
      marketPrice: '$4,000-10,000/month',
      category: 'Design AI',
      technologies: ['3D Reconstruction', 'Interior Design AI', 'Space Planning', 'Custom Design Models', 'VR Integration']
    },
    {
      title: 'AI-Powered Language Learning',
      description: 'Personalized language learning with adaptive curriculum and pronunciation analysis.',
      icon: '🗣️',
      price: 'Starting at $1,500/month',
      features: ['Adaptive learning', 'Pronunciation analysis', 'Conversation practice', 'Progress tracking', 'Multi-language support'],
      benefits: ['Accelerate language learning', 'Personalize education', 'Improve retention rates'],
      marketPrice: '$2,500-6,000/month',
      category: 'Education AI',
      technologies: ['Speech Recognition', 'NLP', 'Adaptive Learning', 'Custom Language Models', 'Mobile Integration']
    },
    {
      title: 'AI-Powered Mental Health Assistant',
      description: 'Intelligent mental health monitoring and support with mood analysis and intervention recommendations.',
      icon: '🧠',
      price: 'Starting at $3,200/month',
      features: ['Mood analysis', 'Crisis detection', 'Intervention recommendations', 'Progress tracking', 'Privacy protection'],
      benefits: ['Improve mental health outcomes', 'Provide 24/7 support', 'Reduce healthcare costs'],
      marketPrice: '$5,000-15,000/month',
      category: 'Healthcare AI',
      technologies: ['Sentiment Analysis', 'NLP', 'Privacy-Preserving ML', 'Custom Health Models', 'HIPAA Compliance']
    },
    {
      title: 'AI-Powered Fitness Coaching',
      description: 'Personalized fitness coaching with form analysis and workout optimization.',
      icon: '💪',
      price: 'Starting at $1,200/month',
      features: ['Form analysis', 'Workout optimization', 'Progress tracking', 'Injury prevention', 'Nutrition guidance'],
      benefits: ['Improve workout effectiveness', 'Prevent injuries', 'Personalize fitness plans'],
      marketPrice: '$2,000-5,000/month',
      category: 'Fitness AI',
      technologies: ['Computer Vision', 'Motion Analysis', 'Wearable Integration', 'Custom Fitness Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Sleep Analysis',
      description: 'Intelligent sleep monitoring and optimization with personalized recommendations.',
      icon: '😴',
      price: 'Starting at $800/month',
      features: ['Sleep monitoring', 'Sleep quality analysis', 'Optimization recommendations', 'Sleep disorder detection', 'Progress tracking'],
      benefits: ['Improve sleep quality', 'Identify sleep issues', 'Optimize sleep patterns'],
      marketPrice: '$1,500-4,000/month',
      category: 'Health AI',
      technologies: ['Sleep Analysis', 'Wearable Data', 'Custom Sleep Models', 'Mobile Integration', 'Health APIs']
    },
    {
      title: 'AI-Powered Nutrition Planning',
      description: 'Personalized nutrition planning with meal optimization and dietary analysis.',
      icon: '🥗',
      price: 'Starting at $1,000/month',
      features: ['Meal planning', 'Nutritional analysis', 'Dietary optimization', 'Allergy management', 'Shopping lists'],
      benefits: ['Improve nutrition', 'Simplify meal planning', 'Optimize health outcomes'],
      marketPrice: '$1,800-4,500/month',
      category: 'Health AI',
      technologies: ['Nutrition Analysis', 'Meal Planning AI', 'Custom Diet Models', 'Mobile Apps', 'Health APIs']
    },
    {
      title: 'AI-Powered Pet Care',
      description: 'Intelligent pet health monitoring and care recommendations with behavior analysis.',
      icon: '🐕',
      price: 'Starting at $1,500/month',
      features: ['Health monitoring', 'Behavior analysis', 'Care recommendations', 'Veterinary integration', 'Emergency alerts'],
      benefits: ['Improve pet health', 'Early problem detection', 'Reduce vet costs'],
      marketPrice: '$2,500-6,000/month',
      category: 'Pet AI',
      technologies: ['Computer Vision', 'Pet Health Models', 'IoT Integration', 'Mobile Apps', 'Veterinary APIs']
    },
    {
      title: 'AI-Powered Home Automation',
      description: 'Intelligent home automation with predictive control and energy optimization.',
      icon: '🏡',
      price: 'Starting at $2,000/month',
      features: ['Predictive control', 'Energy optimization', 'Security monitoring', 'Comfort management', 'IoT integration'],
      benefits: ['Reduce energy costs', 'Improve comfort', 'Enhance security'],
      marketPrice: '$3,500-8,000/month',
      category: 'Smart Home AI',
      technologies: ['IoT Integration', 'Predictive Control', 'Energy Management', 'Custom Home Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Travel Planning',
      description: 'Intelligent travel planning with personalized recommendations and real-time optimization.',
      icon: '✈️',
      price: 'Starting at $1,800/month',
      features: ['Trip planning', 'Personalized recommendations', 'Real-time optimization', 'Budget management', 'Travel alerts'],
      benefits: ['Optimize travel experiences', 'Save time planning', 'Reduce travel costs'],
      marketPrice: '$3,000-7,000/month',
      category: 'Travel AI',
      technologies: ['Travel APIs', 'Recommendation Systems', 'Real-time Optimization', 'Custom Travel Models', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Event Planning',
      description: 'Intelligent event planning and management with automated coordination and optimization.',
      icon: '🎉',
      price: 'Starting at $2,200/month',
      features: ['Event planning', 'Vendor coordination', 'Budget optimization', 'Guest management', 'Timeline automation'],
      benefits: ['Streamline event planning', 'Reduce coordination time', 'Improve event success'],
      marketPrice: '$3,500-9,000/month',
      category: 'Event AI',
      technologies: ['Event Management', 'Coordination AI', 'Custom Event Models', 'Mobile Apps', 'Vendor APIs']
    },
    {
      title: 'AI-Powered Dating Assistant',
      description: 'Intelligent dating assistance with compatibility analysis and conversation coaching.',
      icon: '💕',
      price: 'Starting at $1,200/month',
      features: ['Compatibility analysis', 'Conversation coaching', 'Profile optimization', 'Date planning', 'Safety monitoring'],
      benefits: ['Improve dating success', 'Enhance safety', 'Optimize matches'],
      marketPrice: '$2,000-5,000/month',
      category: 'Social AI',
      technologies: ['Compatibility Analysis', 'NLP', 'Custom Dating Models', 'Mobile Apps', 'Safety APIs']
    },
    {
      title: 'AI-Powered Parenting Assistant',
      description: 'Intelligent parenting support with child development monitoring and activity recommendations.',
      icon: '👶',
      price: 'Starting at $1,500/month',
      features: ['Development monitoring', 'Activity recommendations', 'Safety alerts', 'Progress tracking', 'Expert guidance'],
      benefits: ['Support child development', 'Improve parenting confidence', 'Ensure child safety'],
      marketPrice: '$2,500-6,000/month',
      category: 'Family AI',
      technologies: ['Child Development Models', 'Safety Monitoring', 'Custom Family Models', 'Mobile Apps', 'Expert Systems']
    },
    {
      title: 'AI-Powered Elderly Care',
      description: 'Intelligent elderly care monitoring with health tracking and safety assistance.',
      icon: '👴',
      price: 'Starting at $2,500/month',
      features: ['Health monitoring', 'Safety assistance', 'Medication reminders', 'Emergency alerts', 'Family communication'],
      benefits: ['Improve elderly care', 'Ensure safety', 'Reduce care costs'],
      marketPrice: '$4,000-10,000/month',
      category: 'Elderly Care AI',
      technologies: ['Health Monitoring', 'Safety Systems', 'Custom Care Models', 'IoT Integration', 'Mobile Apps']
    },
    {
      title: 'AI-Powered Accessibility Assistant',
      description: 'Intelligent accessibility support with adaptive interfaces and assistive technology.',
      icon: '♿',
      price: 'Starting at $1,800/month',
      features: ['Adaptive interfaces', 'Voice control', 'Visual assistance', 'Mobility support', 'Communication aids'],
      benefits: ['Improve accessibility', 'Enhance independence', 'Support inclusion'],
      marketPrice: '$3,000-7,000/month',
      category: 'Accessibility AI',
      technologies: ['Accessibility APIs', 'Assistive Technology', 'Custom Accessibility Models', 'Mobile Apps', 'IoT Integration']
    },
    {
      title: 'AI-Powered Environmental Monitoring',
      description: 'Intelligent environmental monitoring with pollution detection and sustainability recommendations.',
      icon: '🌱',
      price: 'Starting at $2,000/month',
      features: ['Pollution monitoring', 'Sustainability analysis', 'Environmental alerts', 'Carbon tracking', 'Green recommendations'],
      benefits: ['Monitor environmental impact', 'Improve sustainability', 'Reduce carbon footprint'],
      marketPrice: '$3,500-8,000/month',
      category: 'Environmental AI',
      technologies: ['Environmental Sensors', 'Pollution Detection', 'Custom Environmental Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Wildlife Conservation',
      description: 'Intelligent wildlife monitoring and conservation with species identification and behavior analysis.',
      icon: '🦁',
      price: 'Starting at $3,500/month',
      features: ['Species identification', 'Behavior analysis', 'Population monitoring', 'Threat detection', 'Conservation planning'],
      benefits: ['Protect wildlife', 'Monitor populations', 'Prevent poaching'],
      marketPrice: '$6,000-15,000/month',
      category: 'Conservation AI',
      technologies: ['Computer Vision', 'Wildlife Detection', 'Custom Conservation Models', 'Satellite Data', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Disaster Response',
      description: 'Intelligent disaster prediction and response coordination with real-time monitoring.',
      icon: '🚨',
      price: 'Starting at $5,000/month',
      features: ['Disaster prediction', 'Response coordination', 'Resource optimization', 'Evacuation planning', 'Damage assessment'],
      benefits: ['Save lives', 'Reduce damage', 'Improve response time'],
      marketPrice: '$8,000-20,000/month',
      category: 'Emergency AI',
      technologies: ['Disaster Prediction', 'Response Coordination', 'Custom Emergency Models', 'Satellite Data', 'IoT Sensors']
    },
    {
      title: 'AI-Powered Urban Planning',
      description: 'Intelligent urban planning with traffic optimization and infrastructure analysis.',
      icon: '🏙️',
      price: 'Starting at $4,500/month',
      features: ['Traffic optimization', 'Infrastructure analysis', 'Population modeling', 'Resource planning', 'Sustainability analysis'],
      benefits: ['Improve city efficiency', 'Reduce traffic congestion', 'Optimize resource use'],
      marketPrice: '$7,500-18,000/month',
      category: 'Urban AI',
      technologies: ['Traffic Analysis', 'Infrastructure Modeling', 'Custom Urban Models', 'Satellite Data', 'IoT Integration']
    },
    {
      title: 'AI-Powered Agriculture Optimization',
      description: 'Intelligent agricultural optimization with crop monitoring and yield prediction.',
      icon: '🌾',
      price: 'Starting at $3,000/month',
      features: ['Crop monitoring', 'Yield prediction', 'Pest detection', 'Irrigation optimization', 'Soil analysis'],
      benefits: ['Increase crop yields', 'Reduce resource use', 'Improve sustainability'],
      marketPrice: '$5,000-12,000/month',
      category: 'Agriculture AI',
      technologies: ['Satellite Imagery', 'IoT Sensors', 'Custom Agriculture Models', 'Drone Data', 'Weather APIs']
    },
    {
      title: 'AI-Powered Water Management',
      description: 'Intelligent water resource management with quality monitoring and distribution optimization.',
      icon: '💧',
      price: 'Starting at $2,800/month',
      features: ['Water quality monitoring', 'Distribution optimization', 'Leak detection', 'Usage analysis', 'Treatment optimization'],
      benefits: ['Improve water quality', 'Reduce waste', 'Optimize distribution'],
      marketPrice: '$4,500-11,000/month',
      category: 'Water AI',
      technologies: ['Water Quality Sensors', 'Distribution Networks', 'Custom Water Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Waste Management',
      description: 'Intelligent waste management with collection optimization and recycling analysis.',
      icon: '♻️',
      price: 'Starting at $2,200/month',
      features: ['Collection optimization', 'Recycling analysis', 'Waste sorting', 'Route planning', 'Sustainability tracking'],
      benefits: ['Reduce waste', 'Improve recycling', 'Optimize collection'],
      marketPrice: '$3,500-8,000/month',
      category: 'Waste AI',
      technologies: ['Waste Sensors', 'Route Optimization', 'Custom Waste Models', 'IoT Integration', 'Analytics']
    },
    {
      title: 'AI-Powered Energy Grid Management',
      description: 'Intelligent energy grid optimization with demand prediction and renewable integration.',
      icon: '⚡',
      price: 'Starting at $4,000/month',
      features: ['Demand prediction', 'Grid optimization', 'Renewable integration', 'Load balancing', 'Outage prevention'],
      benefits: ['Improve grid efficiency', 'Integrate renewables', 'Prevent outages'],
      marketPrice: '$6,500-16,000/month',
      category: 'Energy AI',
      technologies: ['Grid Data', 'Demand Forecasting', 'Custom Energy Models', 'IoT Sensors', 'Renewable APIs']
    },
    {
      title: 'AI-Powered Smart City Management',
      description: 'Comprehensive smart city management with integrated AI services and citizen engagement.',
      icon: '🏛️',
      price: 'Starting at $8,000/month',
      features: ['Integrated services', 'Citizen engagement', 'Resource optimization', 'Service delivery', 'Data analytics'],
      benefits: ['Improve city services', 'Enhance citizen experience', 'Optimize resources'],
      marketPrice: '$15,000-40,000/month',
      category: 'Smart City AI',
      technologies: ['City Data Integration', 'Citizen Services', 'Custom City Models', 'IoT Networks', 'Analytics Platforms']
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