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
      title: 'AI-Powered Real Estate Valuation',
      description: 'Advanced property valuation using computer vision, market analysis, and predictive modeling.',
      icon: '🏠',
      price: 'Starting at $2,500/month',
      features: ['Property image analysis', 'Market trend prediction', 'Investment scoring', 'Rental yield optimization', 'Risk assessment'],
      benefits: ['95% accurate valuations', 'Reduce appraisal time by 80%', 'Identify investment opportunities'],
      marketPrice: '$4,000-12,000/month',
      category: 'Real Estate AI',
      technologies: ['Computer Vision', 'Time Series Analysis', 'Geospatial AI', 'Market Data APIs', 'Custom ML Models']
    },
    {
      title: 'AI-Powered Healthcare Diagnosis',
      description: 'Medical image analysis, symptom recognition, and diagnostic assistance for healthcare providers.',
      icon: '🏥',
      price: 'Starting at $8,500/month',
      features: ['Medical image analysis', 'Symptom recognition', 'Diagnostic assistance', 'Treatment recommendations', 'Patient monitoring'],
      benefits: ['Improve diagnostic accuracy by 40%', 'Reduce misdiagnosis by 60%', 'Accelerate treatment decisions'],
      marketPrice: '$15,000-45,000/month',
      category: 'Healthcare AI',
      technologies: ['Medical Imaging AI', 'NLP for Medical Text', 'Deep Learning', 'DICOM Processing', 'Clinical Decision Support']
    },
    {
      title: 'AI-Powered Restaurant Optimization',
      description: 'Dynamic pricing, demand forecasting, and kitchen optimization for restaurants and food service.',
      icon: '🍽️',
      price: 'Starting at $1,200/month',
      features: ['Dynamic menu pricing', 'Demand forecasting', 'Kitchen optimization', 'Inventory management', 'Customer behavior analysis'],
      benefits: ['Increase revenue by 25%', 'Reduce food waste by 40%', 'Optimize operations'],
      marketPrice: '$2,000-6,000/month',
      category: 'Food Service AI',
      technologies: ['Time Series Forecasting', 'Computer Vision', 'NLP', 'Optimization Algorithms', 'Real-time Analytics']
    },
    {
      title: 'AI-Powered Fleet Management',
      description: 'Intelligent vehicle tracking, route optimization, and predictive maintenance for transportation companies.',
      icon: '🚛',
      price: 'Starting at $3,500/month',
      features: ['Route optimization', 'Predictive maintenance', 'Driver behavior analysis', 'Fuel optimization', 'Real-time tracking'],
      benefits: ['Reduce fuel costs by 20%', 'Improve delivery times by 30%', 'Prevent breakdowns'],
      marketPrice: '$6,000-18,000/month',
      category: 'Transportation AI',
      technologies: ['IoT Integration', 'Computer Vision', 'Predictive Analytics', 'GPS Optimization', 'Machine Learning']
    },
    {
      title: 'AI-Powered Insurance Underwriting',
      description: 'Automated risk assessment, fraud detection, and policy optimization for insurance companies.',
      icon: '🛡️',
      price: 'Starting at $5,000/month',
      features: ['Risk assessment', 'Fraud detection', 'Policy optimization', 'Claims processing', 'Customer profiling'],
      benefits: ['Reduce underwriting time by 70%', 'Improve risk accuracy by 50%', 'Prevent fraud'],
      marketPrice: '$8,000-25,000/month',
      category: 'Insurance AI',
      technologies: ['Risk Modeling', 'Fraud Detection ML', 'NLP for Documents', 'Predictive Analytics', 'Decision Trees']
    },
    {
      title: 'AI-Powered Event Management',
      description: 'Intelligent event planning, attendee matching, and logistics optimization for event organizers.',
      icon: '🎪',
      price: 'Starting at $2,200/month',
      features: ['Event planning', 'Attendee matching', 'Logistics optimization', 'Vendor management', 'Success prediction'],
      benefits: ['Increase attendance by 35%', 'Reduce planning time by 50%', 'Improve attendee satisfaction'],
      marketPrice: '$3,500-10,000/month',
      category: 'Event AI',
      technologies: ['Recommendation Systems', 'Optimization Algorithms', 'NLP', 'Computer Vision', 'Predictive Modeling']
    },
    {
      title: 'AI-Powered Personal Styling',
      description: 'Computer vision-based fashion recommendations, body analysis, and wardrobe optimization.',
      icon: '👗',
      price: 'Starting at $1,500/month',
      features: ['Body analysis', 'Style recommendations', 'Wardrobe optimization', 'Trend prediction', 'Shopping assistance'],
      benefits: ['Improve personal style', 'Save shopping time', 'Build cohesive wardrobe'],
      marketPrice: '$2,500-7,000/month',
      category: 'Fashion AI',
      technologies: ['Computer Vision', 'Fashion Recognition', 'Recommendation Systems', 'Body Analysis', 'Trend Analysis']
    },
    {
      title: 'AI-Powered Home Energy Management',
      description: 'Intelligent energy consumption optimization, appliance control, and renewable energy integration.',
      icon: '🏡',
      price: 'Starting at $1,800/month',
      features: ['Energy optimization', 'Appliance control', 'Renewable integration', 'Cost analysis', 'Predictive maintenance'],
      benefits: ['Reduce energy costs by 30%', 'Optimize renewable usage', 'Improve efficiency'],
      marketPrice: '$3,000-8,000/month',
      category: 'Energy AI',
      technologies: ['IoT Integration', 'Energy Forecasting', 'Optimization Algorithms', 'Smart Grid AI', 'Predictive Analytics']
    },
    {
      title: 'AI-Powered Pet Care',
      description: 'Pet health monitoring, behavior analysis, and veterinary care coordination using AI.',
      icon: '🐕',
      price: 'Starting at $1,200/month',
      features: ['Health monitoring', 'Behavior analysis', 'Vet coordination', 'Nutrition planning', 'Emergency detection'],
      benefits: ['Improve pet health', 'Early problem detection', 'Better care coordination'],
      marketPrice: '$2,000-5,000/month',
      category: 'Pet Care AI',
      technologies: ['Computer Vision', 'Behavior Analysis', 'Health Monitoring', 'NLP for Vet Records', 'Predictive Health']
    },
    {
      title: 'AI-Powered Travel Planning',
      description: 'Intelligent travel itinerary optimization, price prediction, and personalized recommendations.',
      icon: '✈️',
      price: 'Starting at $2,000/month',
      features: ['Itinerary optimization', 'Price prediction', 'Personalized recommendations', 'Booking automation', 'Travel alerts'],
      benefits: ['Save 40% on travel costs', 'Optimize travel time', 'Discover new destinations'],
      marketPrice: '$3,500-10,000/month',
      category: 'Travel AI',
      technologies: ['Recommendation Systems', 'Price Prediction', 'Optimization Algorithms', 'NLP', 'Real-time Data']
    },
    {
      title: 'AI-Powered Fitness Coaching',
      description: 'Personalized workout plans, form analysis, and progress tracking using computer vision.',
      icon: '💪',
      price: 'Starting at $1,800/month',
      features: ['Form analysis', 'Workout optimization', 'Progress tracking', 'Nutrition guidance', 'Injury prevention'],
      benefits: ['Achieve fitness goals 50% faster', 'Prevent injuries', 'Maintain motivation'],
      marketPrice: '$3,000-8,000/month',
      category: 'Fitness AI',
      technologies: ['Computer Vision', 'Motion Analysis', 'Biomechanics', 'Recommendation Systems', 'Health Tracking']
    },
    {
      title: 'AI-Powered Garden Management',
      description: 'Plant health monitoring, watering optimization, and growth tracking for gardeners.',
      icon: '🌱',
      price: 'Starting at $1,500/month',
      features: ['Plant identification', 'Health monitoring', 'Watering optimization', 'Pest detection', 'Growth tracking'],
      benefits: ['Increase crop yield by 40%', 'Reduce water usage', 'Prevent plant diseases'],
      marketPrice: '$2,500-6,000/month',
      category: 'Gardening AI',
      technologies: ['Computer Vision', 'IoT Sensors', 'Plant Recognition', 'Environmental AI', 'Predictive Analytics']
    },
    {
      title: 'AI-Powered Language Learning',
      description: 'Personalized language learning with speech recognition, pronunciation analysis, and adaptive curriculum.',
      icon: '🗣️',
      price: 'Starting at $1,200/month',
      features: ['Speech recognition', 'Pronunciation analysis', 'Adaptive learning', 'Progress tracking', 'Conversation practice'],
      benefits: ['Learn 3x faster', 'Improve pronunciation', 'Build confidence'],
      marketPrice: '$2,000-5,000/month',
      category: 'Education AI',
      technologies: ['Speech Recognition', 'NLP', 'Adaptive Learning', 'Pronunciation Analysis', 'Personalization']
    },
    {
      title: 'AI-Powered Investment Management',
      description: 'Portfolio optimization, risk assessment, and automated trading strategies using machine learning.',
      icon: '📈',
      price: 'Starting at $3,500/month',
      features: ['Portfolio optimization', 'Risk assessment', 'Automated trading', 'Market analysis', 'Tax optimization'],
      benefits: ['Maximize returns', 'Minimize risk', 'Automate investing'],
      marketPrice: '$6,000-20,000/month',
      category: 'Finance AI',
      technologies: ['Portfolio Optimization', 'Risk Modeling', 'Algorithmic Trading', 'Market Analysis', 'Predictive Analytics']
    },
    {
      title: 'AI-Powered Mental Health Support',
      description: 'Personalized mental health monitoring, mood tracking, and wellness recommendations.',
      icon: '🧠',
      price: 'Starting at $2,200/month',
      features: ['Mood tracking', 'Stress monitoring', 'Wellness recommendations', 'Crisis detection', 'Progress analytics'],
      benefits: ['Improve mental health', 'Reduce stress', 'Build healthy habits'],
      marketPrice: '$3,500-10,000/month',
      category: 'Mental Health AI',
      technologies: ['Sentiment Analysis', 'Behavioral AI', 'NLP', 'Predictive Health', 'Wellness Optimization']
    },
    {
      title: 'AI-Powered Waste Management',
      description: 'Intelligent waste sorting, recycling optimization, and sustainability tracking for businesses.',
      icon: '♻️',
      price: 'Starting at $2,500/month',
      features: ['Waste sorting', 'Recycling optimization', 'Sustainability tracking', 'Cost analysis', 'Compliance monitoring'],
      benefits: ['Reduce waste by 50%', 'Increase recycling rates', 'Lower disposal costs'],
      marketPrice: '$4,000-12,000/month',
      category: 'Sustainability AI',
      technologies: ['Computer Vision', 'IoT Sensors', 'Optimization Algorithms', 'Sustainability Analytics', 'Waste Recognition']
    },
    {
      title: 'AI-Powered Dating Assistant',
      description: 'Intelligent matchmaking, conversation analysis, and relationship advice using machine learning.',
      icon: '💕',
      price: 'Starting at $1,500/month',
      features: ['Intelligent matching', 'Conversation analysis', 'Date planning', 'Compatibility scoring', 'Success tracking'],
      benefits: ['Find better matches', 'Improve conversation skills', 'Increase success rates'],
      marketPrice: '$2,500-7,000/month',
      category: 'Dating AI',
      technologies: ['Recommendation Systems', 'NLP', 'Personality Analysis', 'Behavioral AI', 'Matching Algorithms']
    },
    {
      title: 'AI-Powered Sleep Optimization',
      description: 'Sleep analysis, environment optimization, and personalized sleep recommendations using AI.',
      icon: '😴',
      price: 'Starting at $1,200/month',
      features: ['Sleep analysis', 'Environment optimization', 'Sleep recommendations', 'Progress tracking', 'Alarm optimization'],
      benefits: ['Improve sleep quality', 'Increase energy levels', 'Optimize sleep schedule'],
      marketPrice: '$2,000-5,000/month',
      category: 'Health AI',
      technologies: ['Sleep Analysis', 'Environmental AI', 'Biometric Monitoring', 'Optimization Algorithms', 'Health Analytics']
    },
    {
      title: 'AI-Powered Home Security',
      description: 'Intelligent security monitoring, threat detection, and automated response for home protection.',
      icon: '🏠',
      price: 'Starting at $2,500/month',
      features: ['Threat detection', 'Facial recognition', 'Behavior analysis', 'Automated response', 'Emergency protocols'],
      benefits: ['Prevent break-ins', 'Reduce false alarms', 'Peace of mind'],
      marketPrice: '$4,000-12,000/month',
      category: 'Security AI',
      technologies: ['Computer Vision', 'Facial Recognition', 'Behavioral Analysis', 'IoT Integration', 'Automated Response']
    },
    {
      title: 'AI-Powered Water Management',
      description: 'Water usage monitoring, leak detection, and conservation optimization for properties.',
      icon: '💧',
      price: 'Starting at $1,800/month',
      features: ['Usage monitoring', 'Leak detection', 'Conservation tips', 'Cost analysis', 'Maintenance alerts'],
      benefits: ['Reduce water bills by 25%', 'Prevent water damage', 'Conserve resources'],
      marketPrice: '$3,000-8,000/month',
      category: 'Utilities AI',
      technologies: ['IoT Sensors', 'Predictive Analytics', 'Leak Detection', 'Optimization Algorithms', 'Water Analytics']
    },
    {
      title: 'AI-Powered Personal Assistant',
      description: 'Comprehensive personal task management, scheduling, and productivity optimization using AI.',
      icon: '🤖',
      price: 'Starting at $2,000/month',
      features: ['Task management', 'Smart scheduling', 'Email optimization', 'Meeting coordination', 'Productivity insights'],
      benefits: ['Increase productivity by 40%', 'Reduce stress', 'Better time management'],
      marketPrice: '$3,500-10,000/month',
      category: 'Productivity AI',
      technologies: ['NLP', 'Task Automation', 'Scheduling Optimization', 'Email AI', 'Productivity Analytics']
    },
    {
      title: 'AI-Powered Car Maintenance',
      description: 'Vehicle health monitoring, maintenance scheduling, and cost optimization for car owners.',
      icon: '🚗',
      price: 'Starting at $1,500/month',
      features: ['Health monitoring', 'Maintenance scheduling', 'Cost optimization', 'Fuel efficiency', 'Safety alerts'],
      benefits: ['Extend vehicle life', 'Reduce maintenance costs', 'Improve safety'],
      marketPrice: '$2,500-6,000/month',
      category: 'Automotive AI',
      technologies: ['IoT Integration', 'Predictive Maintenance', 'Vehicle Analytics', 'Cost Optimization', 'Safety AI']
    },
    {
      title: 'AI-Powered Personal Chef',
      description: 'Personalized meal planning, recipe recommendations, and nutrition optimization using AI.',
      icon: '👨‍🍳',
      price: 'Starting at $1,800/month',
      features: ['Meal planning', 'Recipe recommendations', 'Nutrition optimization', 'Grocery lists', 'Diet tracking'],
      benefits: ['Eat healthier', 'Save time cooking', 'Reduce food waste'],
      marketPrice: '$3,000-8,000/month',
      category: 'Food AI',
      technologies: ['Recipe AI', 'Nutrition Analysis', 'Meal Planning', 'Grocery Optimization', 'Diet Tracking']
    },
    {
      title: 'AI-Powered Home Automation',
      description: 'Intelligent home automation, device control, and energy optimization for smart homes.',
      icon: '🏠',
      price: 'Starting at $2,200/month',
      features: ['Device control', 'Automation rules', 'Energy optimization', 'Security integration', 'Voice control'],
      benefits: ['Increase home efficiency', 'Reduce energy costs', 'Improve convenience'],
      marketPrice: '$3,500-10,000/month',
      category: 'Smart Home AI',
      technologies: ['IoT Integration', 'Voice Recognition', 'Automation AI', 'Energy Optimization', 'Device Control']
    },
    {
      title: 'AI-Powered Personal Trainer',
      description: 'Virtual personal training with form analysis, workout optimization, and progress tracking.',
      icon: '🏋️',
      price: 'Starting at $2,000/month',
      features: ['Form analysis', 'Workout optimization', 'Progress tracking', 'Nutrition guidance', 'Motivation coaching'],
      benefits: ['Achieve fitness goals', 'Prevent injuries', 'Stay motivated'],
      marketPrice: '$3,500-10,000/month',
      category: 'Fitness AI',
      technologies: ['Computer Vision', 'Motion Analysis', 'Workout Optimization', 'Progress Tracking', 'Motivation AI']
    },
    {
      title: 'AI-Powered Climate Control',
      description: 'HVAC optimization, energy efficiency, and comfort management for buildings.',
      icon: '🌡️',
      price: 'Starting at $2,500/month',
      features: ['HVAC optimization', 'Energy efficiency', 'Comfort management', 'Predictive maintenance', 'Cost analysis'],
      benefits: ['Reduce energy costs by 30%', 'Improve comfort', 'Extend equipment life'],
      marketPrice: '$4,000-12,000/month',
      category: 'Climate AI',
      technologies: ['HVAC Optimization', 'Energy Analytics', 'Comfort Modeling', 'Predictive Maintenance', 'Climate Control']
    },
    {
      title: 'AI-Powered Personal Shopper',
      description: 'Intelligent shopping recommendations, price comparison, and purchase optimization for consumers.',
      icon: '🛒',
      price: 'Starting at $1,500/month',
      features: ['Product recommendations', 'Price comparison', 'Deal alerts', 'Purchase optimization', 'Budget tracking'],
      benefits: ['Save money on purchases', 'Find better products', 'Optimize spending'],
      marketPrice: '$2,500-7,000/month',
      category: 'Shopping AI',
      technologies: ['Recommendation Systems', 'Price Analysis', 'Deal Detection', 'Purchase Optimization', 'Budget AI']
    },
    {
      title: 'AI-Powered Office Management',
      description: 'Office space optimization, meeting room management, and productivity enhancement.',
      icon: '🏢',
      price: 'Starting at $3,000/month',
      features: ['Space optimization', 'Meeting management', 'Resource allocation', 'Productivity analytics', 'Energy efficiency'],
      benefits: ['Improve office efficiency', 'Reduce costs', 'Enhance productivity'],
      marketPrice: '$5,000-15,000/month',
      category: 'Office AI',
      technologies: ['Space Optimization', 'Meeting AI', 'Resource Management', 'Productivity Analytics', 'Office Intelligence']
    },
    {
      title: 'AI-Powered Personal Finance',
      description: 'Comprehensive financial planning, expense tracking, and investment optimization using AI.',
      icon: '💰',
      price: 'Starting at $1,800/month',
      features: ['Expense tracking', 'Budget optimization', 'Investment advice', 'Tax planning', 'Goal tracking'],
      benefits: ['Improve financial health', 'Save money', 'Achieve financial goals'],
      marketPrice: '$3,000-8,000/month',
      category: 'Finance AI',
      technologies: ['Expense Analysis', 'Budget Optimization', 'Investment AI', 'Tax Planning', 'Financial Analytics']
    },
    {
      title: 'AI-Powered Plant Care',
      description: 'Plant health monitoring, watering optimization, and growth tracking for indoor gardens.',
      icon: '🌿',
      price: 'Starting at $1,200/month',
      features: ['Plant monitoring', 'Watering optimization', 'Growth tracking', 'Disease detection', 'Care reminders'],
      benefits: ['Keep plants healthy', 'Reduce plant loss', 'Optimize growth'],
      marketPrice: '$2,000-5,000/month',
      category: 'Plant AI',
      technologies: ['Computer Vision', 'Plant Recognition', 'Health Monitoring', 'Growth Analysis', 'Care Optimization']
    },
    {
      title: 'AI-Powered Personal Styling Pro',
      description: 'Advanced personal styling with body analysis, color matching, and wardrobe optimization.',
      icon: '👔',
      price: 'Starting at $2,200/month',
      features: ['Body analysis', 'Color matching', 'Wardrobe optimization', 'Style trends', 'Shopping guidance'],
      benefits: ['Improve personal image', 'Save time shopping', 'Build confidence'],
      marketPrice: '$3,500-10,000/month',
      category: 'Fashion AI',
      technologies: ['Body Analysis', 'Color Theory AI', 'Wardrobe Optimization', 'Trend Analysis', 'Style AI']
    },
    {
      title: 'AI-Powered Energy Monitoring',
      description: 'Energy consumption analysis, cost optimization, and renewable energy integration.',
      icon: '⚡',
      price: 'Starting at $1,800/month',
      features: ['Energy monitoring', 'Cost analysis', 'Renewable integration', 'Usage optimization', 'Carbon tracking'],
      benefits: ['Reduce energy bills', 'Lower carbon footprint', 'Optimize usage'],
      marketPrice: '$3,000-8,000/month',
      category: 'Energy AI',
      technologies: ['Energy Analytics', 'Cost Optimization', 'Renewable Integration', 'Usage Analysis', 'Carbon Tracking']
    },
    {
      title: 'AI-Powered Personal Coaching',
      description: 'Comprehensive life coaching with goal setting, habit tracking, and personal development guidance.',
      icon: '🎯',
      price: 'Starting at $2,000/month',
      features: ['Goal setting', 'Habit tracking', 'Progress monitoring', 'Motivation coaching', 'Life planning'],
      benefits: ['Achieve personal goals', 'Build better habits', 'Improve life satisfaction'],
      marketPrice: '$3,500-10,000/month',
      category: 'Coaching AI',
      technologies: ['Goal Setting AI', 'Habit Tracking', 'Progress Analysis', 'Motivation AI', 'Life Planning']
    },
    {
      title: 'AI-Powered Pet Health',
      description: 'Pet health tracking, behavior analysis, and veterinary care coordination.',
      icon: '🐱',
      price: 'Starting at $1,500/month',
      features: ['Health tracking', 'Behavior analysis', 'Vet coordination', 'Medication reminders', 'Emergency alerts'],
      benefits: ['Improve pet health', 'Early problem detection', 'Better care coordination'],
      marketPrice: '$2,500-6,000/month',
      category: 'Pet AI',
      technologies: ['Health Monitoring', 'Behavior Analysis', 'Vet Integration', 'Medication AI', 'Emergency Detection']
    },
    {
      title: 'AI-Powered Personal Shopper Pro',
      description: 'Advanced shopping assistance with price prediction, deal optimization, and purchase timing.',
      icon: '🛍️',
      price: 'Starting at $1,800/month',
      features: ['Price prediction', 'Deal optimization', 'Purchase timing', 'Product research', 'Budget management'],
      benefits: ['Maximize savings', 'Make better purchases', 'Optimize timing'],
      marketPrice: '$3,000-8,000/month',
      category: 'Shopping AI',
      technologies: ['Price Prediction', 'Deal Optimization', 'Purchase Timing', 'Product Research', 'Budget AI']
    },
    {
      title: 'AI-Powered Home Security Pro',
      description: 'Advanced home security with facial recognition, behavior analysis, and automated responses.',
      icon: '🔐',
      price: 'Starting at $2,500/month',
      features: ['Facial recognition', 'Behavior analysis', 'Automated responses', 'Access control', 'Emergency protocols'],
      benefits: ['Enhanced security', 'Reduce false alarms', 'Peace of mind'],
      marketPrice: '$4,000-12,000/month',
      category: 'Security AI',
      technologies: ['Facial Recognition', 'Behavior Analysis', 'Automated Response', 'Access Control', 'Emergency AI']
    },
    {
      title: 'AI-Powered Personal Nutrition',
      description: 'Personalized nutrition planning, meal optimization, and health tracking using AI.',
      icon: '🥗',
      price: 'Starting at $1,800/month',
      features: ['Nutrition planning', 'Meal optimization', 'Health tracking', 'Supplement advice', 'Goal monitoring'],
      benefits: ['Improve nutrition', 'Achieve health goals', 'Optimize meals'],
      marketPrice: '$3,000-8,000/month',
      category: 'Nutrition AI',
      technologies: ['Nutrition Analysis', 'Meal Optimization', 'Health Tracking', 'Supplement AI', 'Goal Monitoring']
    },
    {
      title: 'AI-Powered Water Quality',
      description: 'Water quality analysis, contamination detection, and purification optimization.',
      icon: '💧',
      price: 'Starting at $2,200/month',
      features: ['Quality analysis', 'Contamination detection', 'Purification optimization', 'Health alerts', 'Maintenance scheduling'],
      benefits: ['Ensure water safety', 'Prevent health issues', 'Optimize purification'],
      marketPrice: '$3,500-10,000/month',
      category: 'Water AI',
      technologies: ['Water Analysis', 'Contamination Detection', 'Purification AI', 'Health Alerts', 'Maintenance AI']
    },
    {
      title: 'AI-Powered Personal Assistant Pro',
      description: 'Advanced personal task management with AI-driven scheduling, email optimization, and productivity insights.',
      icon: '🤖',
      price: 'Starting at $2,500/month',
      features: ['Advanced scheduling', 'Email optimization', 'Productivity insights', 'Task automation', 'Goal tracking'],
      benefits: ['Maximize productivity', 'Reduce stress', 'Achieve goals faster'],
      marketPrice: '$4,000-12,000/month',
      category: 'Productivity AI',
      technologies: ['Advanced Scheduling', 'Email AI', 'Productivity Analytics', 'Task Automation', 'Goal AI']
    },
    {
      title: 'AI-Powered Home Climate',
      description: 'Climate control with predictive optimization, energy efficiency, and comfort management.',
      icon: '🌡️',
      price: 'Starting at $2,200/month',
      features: ['Predictive optimization', 'Energy efficiency', 'Comfort management', 'Weather integration', 'Cost analysis'],
      benefits: ['Optimize comfort', 'Reduce energy costs', 'Improve efficiency'],
      marketPrice: '$3,500-10,000/month',
      category: 'Climate AI',
      technologies: ['Predictive Optimization', 'Energy Efficiency', 'Comfort AI', 'Weather Integration', 'Cost Analysis']
    },
    {
      title: 'AI-Powered Personal Trainer Pro',
      description: 'Advanced fitness coaching with biomechanical analysis, injury prevention, and performance optimization.',
      icon: '🏃',
      price: 'Starting at $2,500/month',
      features: ['Biomechanical analysis', 'Injury prevention', 'Performance optimization', 'Recovery tracking', 'Nutrition integration'],
      benefits: ['Prevent injuries', 'Optimize performance', 'Faster recovery'],
      marketPrice: '$4,000-12,000/month',
      category: 'Fitness AI',
      technologies: ['Biomechanical Analysis', 'Injury Prevention', 'Performance AI', 'Recovery Tracking', 'Nutrition Integration']
    },
    {
      title: 'AI-Powered Home Automation Pro',
      description: 'Advanced home automation with AI learning, predictive control, and energy optimization.',
      icon: '🏠',
      price: 'Starting at $2,500/month',
      features: ['AI learning', 'Predictive control', 'Energy optimization', 'Device integration', 'Voice control'],
      benefits: ['Maximize efficiency', 'Reduce costs', 'Improve convenience'],
      marketPrice: '$4,000-12,000/month',
      category: 'Smart Home AI',
      technologies: ['AI Learning', 'Predictive Control', 'Energy Optimization', 'Device Integration', 'Voice AI']
    },
    {
      title: 'AI-Powered Personal Finance Pro',
      description: 'Advanced financial management with investment optimization, tax planning, and wealth building strategies.',
      icon: '💎',
      price: 'Starting at $2,200/month',
      features: ['Investment optimization', 'Tax planning', 'Wealth building', 'Risk management', 'Retirement planning'],
      benefits: ['Maximize wealth', 'Optimize taxes', 'Build financial security'],
      marketPrice: '$3,500-10,000/month',
      category: 'Finance AI',
      technologies: ['Investment AI', 'Tax Optimization', 'Wealth Building', 'Risk Management', 'Retirement Planning']
    },
    {
      title: 'AI-Powered Office Productivity Pro',
      description: 'Office optimization with meeting efficiency, space utilization, and productivity enhancement.',
      icon: '📊',
      price: 'Starting at $3,500/month',
      features: ['Meeting optimization', 'Space utilization', 'Productivity enhancement', 'Resource management', 'Analytics dashboard'],
      benefits: ['Improve office efficiency', 'Reduce costs', 'Enhance productivity'],
      marketPrice: '$6,000-18,000/month',
      category: 'Office AI',
      technologies: ['Meeting AI', 'Space Optimization', 'Productivity Enhancement', 'Resource Management', 'Office Analytics']
    },
    {
      title: 'AI-Powered Personal Health Pro',
      description: 'Comprehensive health monitoring with predictive analysis, wellness optimization, and medical coordination.',
      icon: '🏥',
      price: 'Starting at $2,500/month',
      features: ['Health monitoring', 'Predictive analysis', 'Wellness optimization', 'Medical coordination', 'Emergency alerts'],
      benefits: ['Prevent health issues', 'Optimize wellness', 'Coordinate care'],
      marketPrice: '$4,000-12,000/month',
      category: 'Health AI',
      technologies: ['Health Monitoring', 'Predictive Analysis', 'Wellness AI', 'Medical Integration', 'Emergency AI']
    },
    {
      title: 'AI-Powered Home Energy Pro',
      description: 'Advanced energy management with renewable integration, storage optimization, and grid interaction.',
      icon: '⚡',
      price: 'Starting at $2,500/month',
      features: ['Renewable integration', 'Storage optimization', 'Grid interaction', 'Cost optimization', 'Carbon tracking'],
      benefits: ['Maximize renewable use', 'Optimize storage', 'Reduce costs'],
      marketPrice: '$4,000-12,000/month',
      category: 'Energy AI',
      technologies: ['Renewable Integration', 'Storage Optimization', 'Grid AI', 'Cost Optimization', 'Carbon Tracking']
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