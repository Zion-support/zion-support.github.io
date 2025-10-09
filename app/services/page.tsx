'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Consulting & Strategy', price: '$2,500/month', description: 'Comprehensive AI strategy development and implementation planning', features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning'] },
        { name: 'Machine Learning Solutions', price: '$1,500/month', description: 'Custom ML models for predictive analytics and decision-making', features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'] },
        { name: 'Natural Language Processing', price: '$1,200/month', description: 'Advanced NLP solutions for text analysis and language understanding', features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'] },
        { name: 'Computer Vision', price: '$1,800/month', description: 'Image and video analysis solutions for object detection and recognition', features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'] },
        { name: 'AI Automation', price: '$1,400/month', description: 'Intelligent process automation with decision-making capabilities', features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'] },
        { name: 'AI Chatbots', price: '$800/month', description: 'Intelligent conversational AI for customer service and support', features: ['24/7 Support', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'] },
        { name: 'AI Voice Recognition', price: '$1,100/month', description: 'Advanced voice recognition and speech processing solutions', features: ['Speech-to-Text', 'Voice Commands', 'Speaker Identification', 'Language Detection'] },
        { name: 'AI Recommendation Engine', price: '$1,300/month', description: 'Personalized recommendation systems for e-commerce and content', features: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches', 'Real-time Updates'] },
        { name: 'AI Fraud Detection', price: '$1,600/month', description: 'Advanced fraud detection and prevention using machine learning', features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert Management'] },
        { name: 'AI Predictive Analytics', price: '$1,400/month', description: 'Predictive modeling for business forecasting and trend analysis', features: ['Demand Forecasting', 'Trend Analysis', 'Risk Prediction', 'Scenario Planning'] },
        { name: 'AI Image Recognition', price: '$1,200/month', description: 'Advanced image recognition and classification services', features: ['Object Detection', 'Scene Understanding', 'Image Tagging', 'Quality Assessment'] },
        { name: 'AI Text Generation', price: '$900/month', description: 'AI-powered content generation and text synthesis', features: ['Content Creation', 'Text Summarization', 'Language Generation', 'Style Transfer'] },
        { name: 'AI Data Mining', price: '$1,100/month', description: 'Intelligent data extraction and pattern discovery', features: ['Pattern Discovery', 'Anomaly Detection', 'Data Clustering', 'Association Rules'] },
        { name: 'AI Decision Support', price: '$1,500/month', description: 'AI-powered decision support systems for complex business decisions', features: ['Decision Trees', 'Risk Analysis', 'Scenario Modeling', 'Recommendation Engine'] },
        { name: 'AI Process Optimization', price: '$1,200/month', description: 'AI-driven process improvement and optimization', features: ['Process Analysis', 'Bottleneck Identification', 'Optimization Recommendations', 'Performance Monitoring'] },
        { name: 'AI Quality Control', price: '$1,000/month', description: 'Automated quality control and defect detection', features: ['Defect Detection', 'Quality Scoring', 'Automated Inspection', 'Process Monitoring'] },
        { name: 'AI Supply Chain Optimization', price: '$1,800/month', description: 'AI-powered supply chain management and optimization', features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management'] },
        { name: 'AI Customer Insights', price: '$1,300/month', description: 'Advanced customer behavior analysis and insights', features: ['Behavior Analysis', 'Segmentation', 'Churn Prediction', 'Lifetime Value'] },
        { name: 'AI Market Research', price: '$1,100/month', description: 'AI-powered market research and competitive analysis', features: ['Market Analysis', 'Competitor Intelligence', 'Trend Identification', 'Opportunity Assessment'] },
        { name: 'AI Risk Management', price: '$1,400/month', description: 'AI-driven risk assessment and management solutions', features: ['Risk Identification', 'Risk Scoring', 'Mitigation Strategies', 'Monitoring'] },
        { name: 'AI Performance Analytics', price: '$1,200/month', description: 'AI-powered performance analysis and optimization', features: ['Performance Metrics', 'Trend Analysis', 'Optimization Recommendations', 'Reporting'] },
        { name: 'AI Compliance Monitoring', price: '$1,500/month', description: 'Automated compliance monitoring and reporting', features: ['Regulation Tracking', 'Compliance Checking', 'Audit Preparation', 'Risk Assessment'] },
        { name: 'AI Training & Development', price: '$1,000/month', description: 'AI-powered employee training and skill development', features: ['Personalized Learning', 'Skill Assessment', 'Progress Tracking', 'Certification'] },
        { name: 'AI Knowledge Management', price: '$900/month', description: 'Intelligent knowledge management and information retrieval', features: ['Content Organization', 'Search Optimization', 'Knowledge Extraction', 'Collaboration'] },
        { name: 'AI Innovation Lab', price: '$2,000/month', description: 'AI research and development for cutting-edge solutions', features: ['R&D Projects', 'Prototype Development', 'Technology Exploration', 'Innovation Strategy'] },
        { name: 'AI Integration Services', price: '$1,300/month', description: 'AI system integration and implementation services', features: ['System Integration', 'API Development', 'Data Migration', 'Testing'] },
        { name: 'AI Maintenance & Support', price: '$800/month', description: 'Ongoing AI system maintenance and technical support', features: ['System Monitoring', 'Performance Tuning', 'Bug Fixes', 'Updates'] },
        { name: 'AI Security Solutions', price: '$1,600/month', description: 'AI-powered cybersecurity and threat detection', features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'] },
        { name: 'AI Cloud Services', price: '$1,200/month', description: 'AI services delivered through cloud platforms', features: ['Cloud AI APIs', 'Scalable Processing', 'Managed Services', 'Cost Optimization'] },
        { name: 'AI Edge Computing', price: '$1,400/month', description: 'AI processing at the edge for real-time applications', features: ['Edge AI Models', 'Real-time Processing', 'Low Latency', 'Offline Capability'] },
        { name: 'AI IoT Solutions', price: '$1,500/month', description: 'AI-powered Internet of Things solutions', features: ['Sensor Data Analysis', 'Predictive Maintenance', 'Device Management', 'Real-time Monitoring'] },
        { name: 'AI Blockchain Integration', price: '$1,800/month', description: 'AI and blockchain integration for secure, intelligent systems', features: ['Smart Contracts', 'Decentralized AI', 'Data Integrity', 'Transparent Processing'] },
        { name: 'AI Quantum Computing', price: '$3,000/month', description: 'Quantum AI algorithms and quantum machine learning', features: ['Quantum Algorithms', 'Quantum ML', 'Optimization Problems', 'Research & Development'] },
        { name: 'AI Autonomous Systems', price: '$2,500/month', description: 'Self-managing AI systems for autonomous operations', features: ['Self-Healing Systems', 'Autonomous Decision Making', 'Adaptive Learning', 'Performance Optimization'] },
        { name: 'AI Human-AI Collaboration', price: '$1,300/month', description: 'AI systems designed for human-AI collaboration', features: ['Human-AI Interfaces', 'Collaborative Decision Making', 'Augmented Intelligence', 'Workflow Integration'] },
        { name: 'AI Ethical AI', price: '$1,400/month', description: 'Ethical AI development and bias mitigation', features: ['Bias Detection', 'Fairness Assessment', 'Ethical Guidelines', 'Transparency'] },
        { name: 'AI Explainable AI', price: '$1,200/month', description: 'Explainable AI solutions for transparent decision making', features: ['Model Interpretability', 'Decision Explanation', 'Transparency Reports', 'Audit Trails'] },
        { name: 'AI Federated Learning', price: '$1,600/month', description: 'Distributed AI learning across multiple data sources', features: ['Privacy-Preserving Learning', 'Distributed Training', 'Model Aggregation', 'Secure Communication'] },
        { name: 'AI Transfer Learning', price: '$1,100/month', description: 'AI model adaptation and knowledge transfer', features: ['Model Adaptation', 'Knowledge Transfer', 'Fine-tuning', 'Domain Adaptation'] },
        { name: 'AI Reinforcement Learning', price: '$1,500/month', description: 'AI systems that learn through interaction and feedback', features: ['Agent Training', 'Reward Optimization', 'Policy Learning', 'Environment Simulation'] },
        { name: 'AI Deep Learning', price: '$1,400/month', description: 'Advanced deep learning solutions for complex problems', features: ['Neural Networks', 'Deep Learning Models', 'Feature Learning', 'Pattern Recognition'] },
        { name: 'AI Natural Language Understanding', price: '$1,300/month', description: 'Advanced language understanding and processing', features: ['Intent Recognition', 'Entity Extraction', 'Context Understanding', 'Language Generation'] },
        { name: 'AI Computer Vision Advanced', price: '$1,600/month', description: 'Advanced computer vision and image processing', features: ['3D Vision', 'Video Analysis', 'Medical Imaging', 'Satellite Imagery'] },
        { name: 'AI Speech Processing', price: '$1,200/month', description: 'Advanced speech processing and synthesis', features: ['Speech Recognition', 'Text-to-Speech', 'Voice Cloning', 'Emotion Detection'] },
        { name: 'AI Time Series Analysis', price: '$1,100/month', description: 'AI-powered time series forecasting and analysis', features: ['Forecasting', 'Anomaly Detection', 'Trend Analysis', 'Seasonality Detection'] },
        { name: 'AI Graph Analytics', price: '$1,400/month', description: 'AI-powered graph analysis and network intelligence', features: ['Network Analysis', 'Graph Mining', 'Community Detection', 'Influence Analysis'] },
        { name: 'AI Multi-Modal AI', price: '$1,700/month', description: 'AI systems that process multiple data types', features: ['Text + Image', 'Audio + Video', 'Multi-sensor Fusion', 'Cross-modal Learning'] },
        { name: 'AI Real-time AI', price: '$1,500/month', description: 'Real-time AI processing and decision making', features: ['Stream Processing', 'Real-time Inference', 'Low Latency', 'High Throughput'] },
        { name: 'AI Batch Processing', price: '$1,000/month', description: 'Large-scale batch AI processing and analysis', features: ['Batch Processing', 'Large Dataset Analysis', 'Distributed Computing', 'Scalable Processing'] },
        { name: 'AI Model Management', price: '$1,200/month', description: 'AI model lifecycle management and deployment', features: ['Model Versioning', 'Deployment Management', 'Performance Monitoring', 'A/B Testing'] },
        { name: 'AI Data Pipeline', price: '$1,100/month', description: 'AI data processing and pipeline management', features: ['Data Ingestion', 'Data Processing', 'Data Validation', 'Data Quality'] },
        { name: 'AI Feature Engineering', price: '$1,000/month', description: 'Automated feature engineering and selection', features: ['Feature Generation', 'Feature Selection', 'Feature Transformation', 'Feature Importance'] },
        { name: 'AI Hyperparameter Tuning', price: '$900/month', description: 'Automated hyperparameter optimization', features: ['Grid Search', 'Random Search', 'Bayesian Optimization', 'Neural Architecture Search'] },
        { name: 'AI Model Validation', price: '$800/month', description: 'AI model validation and testing services', features: ['Cross-validation', 'Holdout Testing', 'Performance Metrics', 'Statistical Testing'] },
        { name: 'AI Model Deployment', price: '$1,300/month', description: 'AI model deployment and production services', features: ['Production Deployment', 'API Development', 'Scalability', 'Monitoring'] },
        { name: 'AI Model Monitoring', price: '$1,100/month', description: 'AI model performance monitoring and maintenance', features: ['Performance Tracking', 'Drift Detection', 'Alert Management', 'Model Updates'] },
        { name: 'AI Model Optimization', price: '$1,200/month', description: 'AI model optimization and performance tuning', features: ['Model Compression', 'Quantization', 'Pruning', 'Optimization'] },
        { name: 'AI Model Security', price: '$1,400/month', description: 'AI model security and adversarial protection', features: ['Adversarial Defense', 'Model Watermarking', 'Secure Inference', 'Privacy Protection'] },
        { name: 'AI Model Governance', price: '$1,300/month', description: 'AI model governance and compliance management', features: ['Model Registry', 'Compliance Tracking', 'Audit Trails', 'Policy Management'] },
        { name: 'AI Model Lifecycle', price: '$1,500/month', description: 'End-to-end AI model lifecycle management', features: ['Development', 'Training', 'Validation', 'Deployment', 'Monitoring', 'Retirement'] },
        { name: 'AI Model Marketplace', price: '$1,200/month', description: 'AI model marketplace and sharing platform', features: ['Model Sharing', 'Model Discovery', 'Model Trading', 'Collaboration'] },
        { name: 'AI Model as a Service', price: '$1,400/month', description: 'AI models delivered as cloud services', features: ['API Access', 'Scalable Processing', 'Managed Services', 'Pay-per-Use'] },
        { name: 'AI Model Customization', price: '$1,600/month', description: 'Custom AI model development and training', features: ['Custom Development', 'Domain Adaptation', 'Specialized Training', 'Custom Features'] },
        { name: 'AI Model Integration', price: '$1,300/month', description: 'AI model integration with existing systems', features: ['System Integration', 'API Development', 'Data Integration', 'Workflow Integration'] },
        { name: 'AI Model Training', price: '$1,400/month', description: 'AI model training and development services', features: ['Data Preparation', 'Model Training', 'Validation', 'Optimization'] },
        { name: 'AI Model Evaluation', price: '$1,100/month', description: 'AI model evaluation and performance assessment', features: ['Performance Metrics', 'Bias Assessment', 'Fairness Testing', 'Robustness Testing'] },
        { name: 'AI Model Testing', price: '$1,000/month', description: 'AI model testing and quality assurance', features: ['Unit Testing', 'Integration Testing', 'Performance Testing', 'Security Testing'] },
        { name: 'AI Model Documentation', price: '$800/month', description: 'AI model documentation and knowledge management', features: ['Model Documentation', 'API Documentation', 'User Guides', 'Best Practices'] },
        { name: 'AI Model Support', price: '$1,200/month', description: 'AI model technical support and maintenance', features: ['Technical Support', 'Bug Fixes', 'Updates', 'Troubleshooting'] },
        { name: 'AI Model Consulting', price: '$1,800/month', description: 'AI model strategy and implementation consulting', features: ['Strategy Development', 'Implementation Planning', 'Best Practices', 'Technology Selection'] },
        { name: 'AI Model Training', price: '$1,400/month', description: 'AI model training and development services', features: ['Data Preparation', 'Model Training', 'Validation', 'Optimization'] },
        { name: 'AI Model Evaluation', price: '$1,100/month', description: 'AI model evaluation and performance assessment', features: ['Performance Metrics', 'Bias Assessment', 'Fairness Testing', 'Robustness Testing'] },
        { name: 'AI Model Testing', price: '$1,000/month', description: 'AI model testing and quality assurance', features: ['Unit Testing', 'Integration Testing', 'Performance Testing', 'Security Testing'] },
        { name: 'AI Model Documentation', price: '$800/month', description: 'AI model documentation and knowledge management', features: ['Model Documentation', 'API Documentation', 'User Guides', 'Best Practices'] },
        { name: 'AI Model Support', price: '$1,200/month', description: 'AI model technical support and maintenance', features: ['Technical Support', 'Bug Fixes', 'Updates', 'Troubleshooting'] },
        { name: 'AI Model Consulting', price: '$1,800/month', description: 'AI model strategy and implementation consulting', features: ['Strategy Development', 'Implementation Planning', 'Best Practices', 'Technology Selection'] }
      ]
    },
    {
      title: 'IT Services',
      icon: Cpu,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', price: '$999/month', description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee', features: ['Server Management', 'Network Setup', 'Security Hardening', 'Backup Solutions'] },
        { name: 'Cloud Services', price: '$1,299/month', description: 'Cloud migration, setup, and optimization services', features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'] },
        { name: 'Cybersecurity', price: '$1,599/month', description: 'Advanced security solutions with threat detection and prevention', features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'] },
        { name: 'DevOps & CI/CD', price: '$1,199/month', description: 'Streamlined development workflows with automated testing and deployment', features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'] },
        { name: 'Database Services', price: '$899/month', description: 'Database design, optimization, and management with AI-powered tuning', features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'] },
        { name: 'Network Services', price: '$1,099/month', description: 'Network design, implementation, and monitoring solutions', features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting'] },
        { name: 'IT Support & Helpdesk', price: '$799/month', description: '24/7 IT support and helpdesk services', features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'] },
        { name: 'IT Consulting', price: '$1,499/month', description: 'Strategic IT consulting and technology advisory', features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance'] },
        { name: 'IT Project Management', price: '$1,299/month', description: 'IT project planning, execution, and delivery', features: ['Project Planning', 'Resource Management', 'Timeline Management', 'Quality Assurance'] },
        { name: 'IT Security Audit', price: '$1,899/month', description: 'Comprehensive IT security assessment and compliance', features: ['Security Assessment', 'Compliance Review', 'Risk Analysis', 'Remediation Planning'] },
        { name: 'IT Disaster Recovery', price: '$1,399/month', description: 'Business continuity and disaster recovery planning', features: ['Backup Strategy', 'Recovery Planning', 'Testing', 'Documentation'] },
        { name: 'IT Asset Management', price: '$699/month', description: 'IT asset tracking, management, and optimization', features: ['Asset Tracking', 'License Management', 'Depreciation Tracking', 'Procurement'] },
        { name: 'IT Compliance', price: '$1,599/month', description: 'IT compliance and regulatory adherence', features: ['Compliance Monitoring', 'Audit Preparation', 'Policy Development', 'Training'] },
        { name: 'IT Training', price: '$899/month', description: 'IT training and skill development programs', features: ['User Training', 'Technical Training', 'Certification', 'Best Practices'] },
        { name: 'IT Documentation', price: '$599/month', description: 'IT documentation and knowledge management', features: ['System Documentation', 'Process Documentation', 'User Guides', 'Maintenance'] },
        { name: 'IT Monitoring', price: '$999/month', description: '24/7 IT system monitoring and alerting', features: ['System Monitoring', 'Performance Tracking', 'Alert Management', 'Reporting'] },
        { name: 'IT Backup & Recovery', price: '$799/month', description: 'Automated backup and recovery solutions', features: ['Automated Backups', 'Recovery Testing', 'Data Protection', 'Compliance'] },
        { name: 'IT Virtualization', price: '$1,199/month', description: 'Server and desktop virtualization solutions', features: ['Server Virtualization', 'Desktop Virtualization', 'Resource Optimization', 'Management'] },
        { name: 'IT Storage Solutions', price: '$899/month', description: 'Enterprise storage and data management', features: ['Storage Design', 'Data Management', 'Backup Solutions', 'Archiving'] },
        { name: 'IT Network Security', price: '$1,399/month', description: 'Network security and firewall management', features: ['Firewall Management', 'Intrusion Detection', 'VPN Setup', 'Access Control'] },
        { name: 'IT Email Services', price: '$599/month', description: 'Enterprise email and collaboration solutions', features: ['Email Hosting', 'Spam Filtering', 'Collaboration Tools', 'Security'] },
        { name: 'IT Web Services', price: '$799/month', description: 'Web hosting and application services', features: ['Web Hosting', 'SSL Certificates', 'CDN Setup', 'Performance Optimization'] },
        { name: 'IT Mobile Management', price: '$699/month', description: 'Mobile device management and security', features: ['Device Management', 'Security Policies', 'App Management', 'Remote Wipe'] },
        { name: 'IT Print Services', price: '$399/month', description: 'Print management and optimization', features: ['Print Management', 'Cost Optimization', 'Security', 'Monitoring'] },
        { name: 'IT Software Licensing', price: '$599/month', description: 'Software license management and optimization', features: ['License Tracking', 'Compliance', 'Cost Optimization', 'Renewal Management'] },
        { name: 'IT Hardware Procurement', price: '$799/month', description: 'IT hardware sourcing and procurement', features: ['Vendor Management', 'Cost Optimization', 'Quality Assurance', 'Delivery Management'] },
        { name: 'IT Maintenance', price: '$999/month', description: 'Preventive and corrective IT maintenance', features: ['Preventive Maintenance', 'Hardware Repairs', 'Software Updates', 'Performance Tuning'] },
        { name: 'IT Integration', price: '$1,499/month', description: 'System integration and data migration', features: ['System Integration', 'Data Migration', 'API Development', 'Testing'] },
        { name: 'IT Custom Development', price: '$1,799/month', description: 'Custom IT solutions and application development', features: ['Custom Development', 'API Development', 'Database Design', 'Testing'] },
        { name: 'IT Performance Optimization', price: '$1,199/month', description: 'IT system performance tuning and optimization', features: ['Performance Analysis', 'Optimization', 'Capacity Planning', 'Monitoring'] },
        { name: 'IT Cost Optimization', price: '$899/month', description: 'IT cost reduction and optimization strategies', features: ['Cost Analysis', 'Optimization Strategies', 'Vendor Negotiation', 'ROI Analysis'] },
        { name: 'IT Innovation', price: '$1,599/month', description: 'IT innovation and digital transformation', features: ['Technology Innovation', 'Digital Transformation', 'Process Improvement', 'Future Planning'] },
        { name: 'IT Governance', price: '$1,299/month', description: 'IT governance and policy management', features: ['Policy Development', 'Governance Framework', 'Compliance', 'Risk Management'] },
        { name: 'IT Risk Management', price: '$1,399/month', description: 'IT risk assessment and mitigation', features: ['Risk Assessment', 'Mitigation Strategies', 'Monitoring', 'Reporting'] },
        { name: 'IT Quality Assurance', price: '$1,099/month', description: 'IT quality assurance and testing', features: ['Quality Testing', 'Process Improvement', 'Standards Compliance', 'Continuous Improvement'] },
        { name: 'IT Change Management', price: '$999/month', description: 'IT change management and control', features: ['Change Planning', 'Impact Analysis', 'Implementation', 'Rollback Planning'] },
        { name: 'IT Service Management', price: '$1,199/month', description: 'IT service management and delivery', features: ['Service Design', 'Service Delivery', 'Service Level Management', 'Continuous Improvement'] },
        { name: 'IT Capacity Planning', price: '$1,099/month', description: 'IT capacity planning and resource management', features: ['Capacity Analysis', 'Resource Planning', 'Growth Planning', 'Optimization'] },
        { name: 'IT Vendor Management', price: '$899/month', description: 'IT vendor relationship and contract management', features: ['Vendor Selection', 'Contract Management', 'Performance Monitoring', 'Relationship Management'] },
        { name: 'IT Procurement', price: '$799/month', description: 'IT procurement and supply chain management', features: ['Procurement Planning', 'Vendor Management', 'Cost Optimization', 'Quality Assurance'] },
        { name: 'IT Financial Management', price: '$1,099/month', description: 'IT financial planning and budget management', features: ['Budget Planning', 'Cost Tracking', 'ROI Analysis', 'Financial Reporting'] },
        { name: 'IT Strategic Planning', price: '$1,699/month', description: 'IT strategic planning and roadmap development', features: ['Strategic Planning', 'Roadmap Development', 'Technology Assessment', 'Implementation Planning'] },
        { name: 'IT Digital Transformation', price: '$1,899/month', description: 'Digital transformation and modernization', features: ['Transformation Planning', 'Technology Modernization', 'Process Improvement', 'Change Management'] },
        { name: 'IT Cloud Migration', price: '$1,599/month', description: 'Cloud migration and hybrid cloud solutions', features: ['Migration Planning', 'Cloud Strategy', 'Data Migration', 'Hybrid Solutions'] },
        { name: 'IT Automation', price: '$1,299/month', description: 'IT process automation and orchestration', features: ['Process Automation', 'Workflow Optimization', 'Scripting', 'Monitoring'] },
        { name: 'IT Analytics', price: '$1,199/month', description: 'IT analytics and business intelligence', features: ['Data Analysis', 'Reporting', 'Dashboards', 'Insights'] },
        { name: 'IT Innovation Lab', price: '$1,799/month', description: 'IT innovation and research laboratory', features: ['Technology Research', 'Prototype Development', 'Innovation Projects', 'Future Technologies'] },
        { name: 'IT Consulting Services', price: '$1,499/month', description: 'Comprehensive IT consulting and advisory', features: ['Strategic Consulting', 'Technology Advisory', 'Implementation Support', 'Best Practices'] },
        { name: 'IT Managed Services', price: '$1,399/month', description: 'Comprehensive IT managed services', features: ['24/7 Monitoring', 'Proactive Maintenance', 'Incident Response', 'Performance Optimization'] },
        { name: 'IT Professional Services', price: '$1,599/month', description: 'Professional IT services and expertise', features: ['Expert Consultation', 'Project Delivery', 'Technical Expertise', 'Best Practices'] },
        { name: 'IT Support Services', price: '$999/month', description: 'Comprehensive IT support and maintenance', features: ['Technical Support', 'Maintenance', 'Updates', 'Troubleshooting'] },
        { name: 'IT Implementation Services', price: '$1,799/month', description: 'IT system implementation and deployment', features: ['Implementation Planning', 'System Deployment', 'Data Migration', 'Testing'] },
        { name: 'IT Optimization Services', price: '$1,299/month', description: 'IT system optimization and performance tuning', features: ['Performance Analysis', 'Optimization', 'Tuning', 'Monitoring'] },
        { name: 'IT Security Services', price: '$1,699/month', description: 'Comprehensive IT security services', features: ['Security Assessment', 'Implementation', 'Monitoring', 'Incident Response'] },
        { name: 'IT Compliance Services', price: '$1,599/month', description: 'IT compliance and regulatory services', features: ['Compliance Assessment', 'Implementation', 'Monitoring', 'Reporting'] },
        { name: 'IT Training Services', price: '$1,099/month', description: 'IT training and education services', features: ['User Training', 'Technical Training', 'Certification', 'Best Practices'] },
        { name: 'IT Documentation Services', price: '$799/month', description: 'IT documentation and knowledge management', features: ['Documentation', 'Knowledge Management', 'User Guides', 'Process Documentation'] },
        { name: 'IT Monitoring Services', price: '$1,199/month', description: 'IT monitoring and alerting services', features: ['System Monitoring', 'Performance Tracking', 'Alert Management', 'Reporting'] },
        { name: 'IT Backup Services', price: '$899/month', description: 'IT backup and recovery services', features: ['Backup Solutions', 'Recovery Planning', 'Testing', 'Compliance'] },
        { name: 'IT Integration Services', price: '$1,699/month', description: 'IT integration and connectivity services', features: ['System Integration', 'API Development', 'Data Integration', 'Connectivity'] },
        { name: 'IT Migration Services', price: '$1,799/month', description: 'IT migration and transformation services', features: ['Migration Planning', 'Data Migration', 'System Migration', 'Testing'] },
        { name: 'IT Modernization Services', price: '$1,899/month', description: 'IT modernization and upgrade services', features: ['Modernization Planning', 'Technology Upgrades', 'Process Improvement', 'Implementation'] },
        { name: 'IT Innovation Services', price: '$1,799/month', description: 'IT innovation and digital transformation', features: ['Innovation Strategy', 'Technology Adoption', 'Process Innovation', 'Digital Transformation'] },
        { name: 'IT Excellence Services', price: '$1,999/month', description: 'IT excellence and optimization services', features: ['Excellence Framework', 'Best Practices', 'Continuous Improvement', 'Performance Optimization'] }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'AI Code Review Assistant', price: '$199/month', description: 'Automated code analysis and quality improvement suggestions', features: ['Code Quality Analysis', 'Security Vulnerability Detection', 'Performance Optimization', 'Best Practice Recommendations'] },
        { name: 'AI SEO Optimizer', price: '$299/month', description: 'AI-powered SEO analysis and optimization recommendations', features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'] },
        { name: 'AI Analytics Dashboard', price: '$399/month', description: 'Business intelligence and analytics with AI insights', features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'] },
        { name: 'AI Marketing Automation', price: '$249/month', description: 'Marketing automation and campaign optimization tools', features: ['Email Campaigns', 'Social Media Management', 'Lead Scoring', 'A/B Testing'] },
        { name: 'AI Document Processing', price: '$179/month', description: 'Intelligent document analysis and data extraction', features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Workflow Automation'] },
        { name: 'AI Customer Support Bot', price: '$149/month', description: 'Automated customer support and ticket management', features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Escalation Management'] },
        { name: 'AI Content Generator', price: '$199/month', description: 'AI-powered content creation for blogs, social media, and marketing', features: ['Blog Writing', 'Social Media Posts', 'Email Templates', 'Ad Copy Generation'] },
        { name: 'AI Data Visualization', price: '$299/month', description: 'Advanced data visualization and reporting tools', features: ['Interactive Charts', 'Custom Dashboards', 'Real-time Updates', 'Export Options'] },
        { name: 'AI Email Assistant', price: '$99/month', description: 'Smart email management and response suggestions', features: ['Email Classification', 'Response Suggestions', 'Scheduling', 'Follow-up Reminders'] },
        { name: 'AI Lead Generation', price: '$349/month', description: 'Automated lead generation and qualification system', features: ['Lead Scoring', 'Contact Discovery', 'Email Outreach', 'CRM Integration'] },
        { name: 'AI Sales Automation', price: '$399/month', description: 'Intelligent sales process automation and optimization', features: ['Sales Pipeline Management', 'Deal Tracking', 'Forecasting', 'Performance Analytics'] },
        { name: 'AI E-commerce Solutions', price: '$499/month', description: 'AI-powered e-commerce optimization and management', features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Insights'] },
        { name: 'AI Social Media Manager', price: '$199/month', description: 'Automated social media content creation and scheduling', features: ['Content Calendar', 'Auto Posting', 'Engagement Analytics', 'Trend Analysis'] },
        { name: 'AI Video Editor', price: '$299/month', description: 'AI-powered video editing and production tools', features: ['Auto Editing', 'Voice Synthesis', 'Subtitle Generation', 'Thumbnail Creation'] },
        { name: 'AI Voice Assistant', price: '$149/month', description: 'Custom voice assistant for business operations', features: ['Voice Commands', 'Task Automation', 'Multi-language Support', 'Integration APIs'] },
        { name: 'AI Image Generator', price: '$179/month', description: 'AI-powered image creation and editing platform', features: ['Custom Artwork', 'Logo Design', 'Photo Enhancement', 'Style Transfer'] },
        { name: 'AI Translation Service', price: '$99/month', description: 'Real-time translation and localization services', features: ['100+ Languages', 'Document Translation', 'Website Localization', 'Voice Translation'] },
        { name: 'AI Meeting Assistant', price: '$199/month', description: 'Intelligent meeting transcription and analysis', features: ['Live Transcription', 'Action Items', 'Meeting Summaries', 'Follow-up Reminders'] },
        { name: 'AI Expense Tracker', price: '$79/month', description: 'Smart expense management and categorization', features: ['Receipt Scanning', 'Auto Categorization', 'Budget Tracking', 'Tax Preparation'] },
        { name: 'AI Project Manager', price: '$249/month', description: 'Intelligent project planning and resource optimization', features: ['Task Automation', 'Resource Allocation', 'Timeline Optimization', 'Risk Assessment'] },
        { name: 'AI HR Assistant', price: '$199/month', description: 'Automated HR processes and employee management', features: ['Resume Screening', 'Interview Scheduling', 'Performance Tracking', 'Benefits Management'] },
        { name: 'AI Legal Assistant', price: '$399/month', description: 'Legal document analysis and contract review', features: ['Contract Analysis', 'Compliance Checking', 'Document Generation', 'Risk Assessment'] },
        { name: 'AI Financial Advisor', price: '$299/month', description: 'Personalized financial planning and investment advice', features: ['Portfolio Analysis', 'Risk Assessment', 'Tax Optimization', 'Retirement Planning'] },
        { name: 'AI Inventory Manager', price: '$179/month', description: 'Smart inventory tracking and demand forecasting', features: ['Stock Monitoring', 'Demand Prediction', 'Reorder Alerts', 'Cost Optimization'] },
        { name: 'AI Customer Analytics', price: '$249/month', description: 'Advanced customer behavior analysis and insights', features: ['Behavior Tracking', 'Segmentation', 'Churn Prediction', 'Lifetime Value'] },
        { name: 'AI Website Builder', price: '$199/month', description: 'AI-powered website creation and optimization', features: ['Auto Design', 'Content Generation', 'SEO Optimization', 'Performance Monitoring'] },
        { name: 'AI Email Marketing', price: '$149/month', description: 'Intelligent email campaign management', features: ['Personalization', 'A/B Testing', 'Send Time Optimization', 'Deliverability'] },
        { name: 'AI Survey Builder', price: '$99/month', description: 'Smart survey creation and analysis tools', features: ['Question Generation', 'Response Analysis', 'Insight Extraction', 'Report Generation'] },
        { name: 'AI Time Tracker', price: '$79/month', description: 'Intelligent time tracking and productivity analysis', features: ['Auto Tracking', 'Productivity Insights', 'Distraction Detection', 'Goal Setting'] },
        { name: 'AI Password Manager', price: '$59/month', description: 'Secure password management with AI features', features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Auto Fill'] },
        { name: 'AI Backup Manager', price: '$129/month', description: 'Intelligent backup and disaster recovery', features: ['Auto Backup', 'Version Control', 'Recovery Testing', 'Compliance'] },
        { name: 'AI API Manager', price: '$199/month', description: 'API development and management platform', features: ['Auto Documentation', 'Testing', 'Monitoring', 'Rate Limiting'] },
        { name: 'AI Database Optimizer', price: '$299/month', description: 'Database performance optimization and tuning', features: ['Query Optimization', 'Index Recommendations', 'Performance Monitoring', 'Capacity Planning'] },
        { name: 'AI Security Scanner', price: '$249/month', description: 'Automated security vulnerability scanning', features: ['Vulnerability Detection', 'Compliance Checking', 'Threat Analysis', 'Remediation'] },
        { name: 'AI Performance Monitor', price: '$179/month', description: 'Application performance monitoring and optimization', features: ['Real-time Monitoring', 'Alert Management', 'Performance Analysis', 'Optimization'] },
        { name: 'AI Log Analyzer', price: '$149/month', description: 'Intelligent log analysis and anomaly detection', features: ['Pattern Recognition', 'Anomaly Detection', 'Root Cause Analysis', 'Alerting'] },
        { name: 'AI Cost Optimizer', price: '$199/month', description: 'Cloud cost optimization and resource management', features: ['Cost Analysis', 'Resource Optimization', 'Budget Alerts', 'Recommendations'] },
        { name: 'AI Compliance Manager', price: '$399/month', description: 'Automated compliance monitoring and reporting', features: ['Regulation Tracking', 'Audit Preparation', 'Risk Assessment', 'Reporting'] },
        { name: 'AI Training Platform', price: '$299/month', description: 'AI-powered employee training and development', features: ['Personalized Learning', 'Progress Tracking', 'Skill Assessment', 'Certification'] },
        { name: 'AI Knowledge Base', price: '$199/month', description: 'Intelligent knowledge management system', features: ['Content Organization', 'Search Optimization', 'Auto Updates', 'Collaboration'] },
        { name: 'AI Workflow Automation', price: '$249/month', description: 'Business process automation and optimization', features: ['Process Mapping', 'Automation Design', 'Integration', 'Monitoring'] },
        { name: 'AI Quality Assurance', price: '$299/month', description: 'Automated testing and quality control', features: ['Test Generation', 'Bug Detection', 'Performance Testing', 'Regression Testing'] },
        { name: 'AI Customer Feedback', price: '$149/month', description: 'Intelligent feedback analysis and insights', features: ['Sentiment Analysis', 'Trend Detection', 'Action Items', 'Reporting'] },
        { name: 'AI Supply Chain', price: '$399/month', description: 'Supply chain optimization and management', features: ['Demand Forecasting', 'Supplier Management', 'Risk Assessment', 'Cost Optimization'] },
        { name: 'AI Energy Manager', price: '$199/month', description: 'Energy consumption monitoring and optimization', features: ['Usage Tracking', 'Efficiency Analysis', 'Cost Optimization', 'Sustainability'] },
        { name: 'AI Maintenance Scheduler', price: '$179/month', description: 'Predictive maintenance and asset management', features: ['Predictive Analytics', 'Maintenance Planning', 'Asset Tracking', 'Cost Management'] },
        { name: 'AI Fleet Manager', price: '$299/month', description: 'Vehicle fleet optimization and management', features: ['Route Optimization', 'Fuel Efficiency', 'Maintenance Tracking', 'Driver Analytics'] },
        { name: 'AI Real Estate', price: '$399/month', description: 'Property analysis and investment insights', features: ['Market Analysis', 'Property Valuation', 'Investment Recommendations', 'Risk Assessment'] },
        { name: 'AI Insurance Assistant', price: '$199/month', description: 'Insurance policy analysis and optimization', features: ['Policy Comparison', 'Risk Assessment', 'Claims Processing', 'Cost Optimization'] },
        { name: 'AI Tax Assistant', price: '$149/month', description: 'Tax preparation and optimization tools', features: ['Tax Planning', 'Deduction Optimization', 'Filing Assistance', 'Compliance'] },
        { name: 'AI Investment Tracker', price: '$179/month', description: 'Portfolio tracking and investment analysis', features: ['Performance Tracking', 'Risk Analysis', 'Rebalancing', 'Tax Optimization'] },
        { name: 'AI Cryptocurrency', price: '$299/month', description: 'Crypto portfolio management and trading', features: ['Portfolio Tracking', 'Trading Signals', 'Risk Management', 'Tax Reporting'] },
        { name: 'AI Forex Trader', price: '$399/month', description: 'Automated forex trading and analysis', features: ['Market Analysis', 'Trading Signals', 'Risk Management', 'Performance Tracking'] },
        { name: 'AI Stock Analyzer', price: '$249/month', description: 'Stock market analysis and recommendations', features: ['Technical Analysis', 'Fundamental Analysis', 'Sentiment Analysis', 'Portfolio Optimization'] },
        { name: 'AI Options Trader', price: '$349/month', description: 'Options trading strategies and analysis', features: ['Strategy Development', 'Risk Analysis', 'Profit Optimization', 'Hedging'] },
        { name: 'AI Commodity Trader', price: '$299/month', description: 'Commodity market analysis and trading', features: ['Market Analysis', 'Price Forecasting', 'Risk Management', 'Trading Strategies'] },
        { name: 'AI Bond Analyzer', price: '$199/month', description: 'Bond market analysis and portfolio optimization', features: ['Yield Analysis', 'Credit Risk', 'Duration Management', 'Portfolio Optimization'] },
        { name: 'AI ETF Optimizer', price: '$179/month', description: 'ETF selection and portfolio optimization', features: ['ETF Analysis', 'Diversification', 'Cost Optimization', 'Performance Tracking'] },
        { name: 'AI Mutual Fund', price: '$149/month', description: 'Mutual fund analysis and selection', features: ['Fund Analysis', 'Performance Comparison', 'Risk Assessment', 'Fee Optimization'] },
        { name: 'AI Retirement Planner', price: '$199/month', description: 'Retirement planning and optimization', features: ['Goal Setting', 'Contribution Planning', 'Withdrawal Strategy', 'Tax Optimization'] },
        { name: 'AI Estate Planner', price: '$299/month', description: 'Estate planning and wealth transfer', features: ['Estate Analysis', 'Tax Planning', 'Asset Protection', 'Succession Planning'] },
        { name: 'AI Insurance Optimizer', price: '$179/month', description: 'Insurance coverage optimization', features: ['Coverage Analysis', 'Premium Optimization', 'Risk Assessment', 'Claims Management'] },
        { name: 'AI Credit Monitor', price: '$99/month', description: 'Credit score monitoring and improvement', features: ['Score Tracking', 'Improvement Tips', 'Credit Alerts', 'Identity Protection'] },
        { name: 'AI Loan Optimizer', price: '$149/month', description: 'Loan comparison and optimization', features: ['Rate Comparison', 'Payment Optimization', 'Refinancing Analysis', 'Debt Consolidation'] },
        { name: 'AI Mortgage Calculator', price: '$79/month', description: 'Mortgage analysis and optimization', features: ['Payment Calculation', 'Rate Comparison', 'Refinancing Analysis', 'Amortization'] },
        { name: 'AI Budget Planner', price: '$99/month', description: 'Personal budget creation and tracking', features: ['Budget Creation', 'Expense Tracking', 'Goal Setting', 'Savings Optimization'] },
        { name: 'AI Debt Manager', price: '$129/month', description: 'Debt payoff strategies and tracking', features: ['Debt Analysis', 'Payoff Strategies', 'Progress Tracking', 'Interest Optimization'] },
        { name: 'AI Savings Optimizer', price: '$79/month', description: 'Savings account optimization and management', features: ['Rate Comparison', 'Account Analysis', 'Goal Tracking', 'Compound Interest'] },
        { name: 'AI Investment Calculator', price: '$59/month', description: 'Investment return calculations and projections', features: ['Return Calculations', 'Compound Interest', 'Goal Projections', 'Risk Analysis'] },
        { name: 'AI Tax Calculator', price: '$99/month', description: 'Tax calculation and optimization tools', features: ['Tax Estimation', 'Deduction Analysis', 'Withholding Optimization', 'Planning'] },
        { name: 'AI Financial Goals', price: '$79/month', description: 'Financial goal setting and tracking', features: ['Goal Setting', 'Progress Tracking', 'Milestone Alerts', 'Achievement Planning'] },
        { name: 'AI Net Worth Tracker', price: '$99/month', description: 'Net worth calculation and tracking', features: ['Asset Tracking', 'Liability Management', 'Net Worth Calculation', 'Trend Analysis'] },
        { name: 'AI Cash Flow Manager', price: '$129/month', description: 'Cash flow analysis and optimization', features: ['Income Tracking', 'Expense Analysis', 'Cash Flow Projections', 'Optimization'] },
        { name: 'AI Financial Reports', price: '$149/month', description: 'Automated financial reporting and analysis', features: ['Report Generation', 'Trend Analysis', 'Benchmarking', 'Insights'] },
        { name: 'AI Financial Alerts', price: '$79/month', description: 'Financial monitoring and alert system', features: ['Account Monitoring', 'Transaction Alerts', 'Goal Reminders', 'Risk Alerts'] },
        { name: 'AI Financial Education', price: '$99/month', description: 'Personalized financial education platform', features: ['Learning Paths', 'Progress Tracking', 'Certification', 'Expert Content'] },
        { name: 'AI Financial Coaching', price: '$199/month', description: 'Personalized financial coaching and advice', features: ['One-on-One Coaching', 'Goal Setting', 'Action Plans', 'Progress Tracking'] },
        { name: 'AI Financial Planning', price: '$299/month', description: 'Comprehensive financial planning services', features: ['Financial Assessment', 'Goal Planning', 'Strategy Development', 'Implementation'] },
        { name: 'AI Wealth Management', price: '$399/month', description: 'High-net-worth wealth management', features: ['Portfolio Management', 'Tax Optimization', 'Estate Planning', 'Risk Management'] },
        { name: 'AI Financial Consulting', price: '$499/month', description: 'Expert financial consulting services', features: ['Strategic Planning', 'Investment Advice', 'Risk Assessment', 'Implementation'] },
        { name: 'AI Financial Technology', price: '$199/month', description: 'Fintech solutions and integrations', features: ['API Integration', 'Data Analysis', 'Automation', 'Innovation'] },
        { name: 'AI Financial Security', price: '$149/month', description: 'Financial security and fraud prevention', features: ['Fraud Detection', 'Identity Protection', 'Security Monitoring', 'Risk Assessment'] },
        { name: 'AI Financial Compliance', price: '$299/month', description: 'Financial compliance and regulatory management', features: ['Regulatory Tracking', 'Compliance Monitoring', 'Reporting', 'Risk Management'] },
        { name: 'AI Financial Analytics', price: '$249/month', description: 'Advanced financial analytics and insights', features: ['Data Analysis', 'Trend Identification', 'Predictive Modeling', 'Strategic Insights'] },
        { name: 'AI Financial Automation', price: '$179/month', description: 'Financial process automation and optimization', features: ['Process Automation', 'Workflow Optimization', 'Integration', 'Efficiency'] },
        { name: 'AI Financial Integration', price: '$199/month', description: 'Financial system integration and connectivity', features: ['System Integration', 'Data Synchronization', 'API Management', 'Connectivity'] },
        { name: 'AI Financial Migration', price: '$299/month', description: 'Financial system migration and modernization', features: ['System Migration', 'Data Transfer', 'Modernization', 'Optimization'] },
        { name: 'AI Financial Support', price: '$149/month', description: 'Financial system support and maintenance', features: ['Technical Support', 'System Maintenance', 'Updates', 'Troubleshooting'] },
        { name: 'AI Financial Training', price: '$199/month', description: 'Financial system training and education', features: ['User Training', 'System Education', 'Best Practices', 'Certification'] },
        { name: 'AI Financial Documentation', price: '$99/month', description: 'Financial system documentation and guides', features: ['Documentation', 'User Guides', 'API Documentation', 'Best Practices'] },
        { name: 'AI Financial Testing', price: '$179/month', description: 'Financial system testing and quality assurance', features: ['System Testing', 'Quality Assurance', 'Performance Testing', 'Security Testing'] },
        { name: 'AI Financial Monitoring', price: '$129/month', description: 'Financial system monitoring and alerting', features: ['System Monitoring', 'Performance Tracking', 'Alert Management', 'Reporting'] },
        { name: 'AI Financial Backup', price: '$99/month', description: 'Financial data backup and recovery', features: ['Data Backup', 'Recovery Planning', 'Disaster Recovery', 'Business Continuity'] },
        { name: 'AI Financial Archiving', price: '$79/month', description: 'Financial data archiving and retention', features: ['Data Archiving', 'Retention Management', 'Compliance', 'Storage Optimization'] },
        { name: 'AI Financial Audit', price: '$399/month', description: 'Financial system audit and compliance', features: ['System Audit', 'Compliance Review', 'Risk Assessment', 'Recommendations'] },
        { name: 'AI Financial Governance', price: '$299/month', description: 'Financial governance and risk management', features: ['Governance Framework', 'Risk Management', 'Policy Development', 'Compliance'] },
        { name: 'AI Financial Strategy', price: '$499/month', description: 'Financial strategy development and implementation', features: ['Strategic Planning', 'Goal Setting', 'Implementation', 'Monitoring'] },
        { name: 'AI Financial Innovation', price: '$399/month', description: 'Financial innovation and digital transformation', features: ['Innovation Strategy', 'Digital Transformation', 'Technology Adoption', 'Process Improvement'] },
        { name: 'AI Financial Excellence', price: '$599/month', description: 'Financial excellence and optimization', features: ['Excellence Framework', 'Best Practices', 'Continuous Improvement', 'Performance Optimization'] }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', price: 'Custom', description: 'Next-generation quantum algorithms and quantum security implementations', features: ['Quantum Algorithm Development', 'Quantum Security', 'Optimization Problems', 'Research & Development'] },
        { name: 'Autonomous Systems', price: 'Custom', description: 'Self-managing and self-optimizing systems for enterprise operations', features: ['Self-Healing Systems', 'Predictive Maintenance', 'Resource Optimization', 'Performance Monitoring'] },
        { name: 'Blockchain & Web3', price: '$1,999/month', description: 'Decentralized solutions, smart contracts, and Web3 applications', features: ['Smart Contract Development', 'DApp Creation', 'Token Economics', 'DeFi Solutions'] },
        { name: 'IoT & Edge Computing', price: '$1,499/month', description: 'Connected devices and edge computing solutions', features: ['Device Management', 'Edge Analytics', 'Real-time Processing', 'Security Implementation'] },
        { name: 'Business Intelligence', price: '$1,799/month', description: 'Data-driven insights and predictive analytics for decision-making', features: ['Data Warehousing', 'ETL Processes', 'Advanced Analytics', 'Executive Dashboards'] },
        { name: 'Robotics Solutions', price: 'Custom', description: 'Intelligent robotic solutions for manufacturing and service industries', features: ['Robotic Process Automation', 'Computer Vision Integration', 'Human-Robot Collaboration', 'Maintenance Systems'] }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI with measurable business impact and cost savings'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions and data'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for all services'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'World-class engineers and data scientists with proven track records'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, automation, cloud infrastructure, and specialized solutions. Starting at $99/month." />
        <meta name="keywords" content="ai services, it services, machine learning, automation, cloud services, cybersecurity, micro saas, specialized solutions" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-glow gradient-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in">
            Comprehensive AI and IT solutions designed to transform your business operations and drive innovation.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card hover-glow particles">
              <div className="text-3xl font-bold text-cyan-400 mb-2 neon-glow">50+</div>
              <div className="text-gray-300">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card hover-glow particles">
              <div className="text-3xl font-bold text-green-400 mb-2 neon-glow">$99</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card hover-glow particles">
              <div className="text-3xl font-bold text-purple-400 mb-2 neon-glow">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card hover-glow particles">
              <div className="text-3xl font-bold text-orange-400 mb-2 neon-glow">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card holographic-border hover-glow">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2 hover-glow">
                <Phone className="w-5 h-5 neon-glow" />
                <span className="text-white font-medium neon-glow">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow">
                <Mail className="w-5 h-5 neon-glow" />
                <span className="text-white font-medium neon-glow">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow">
                <MapPin className="w-5 h-5 neon-glow" />
                <span className="text-white font-medium neon-glow">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-glow gradient-text">
            Service Categories
          </h2>
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card hover-glow particles">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6 holographic-border`}>
                    <category.icon className={`w-8 h-8 ${category.color} neon-glow`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 neon-glow gradient-text">{category.title}</h3>
                    <p className="text-gray-300">Comprehensive solutions for your business needs</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card hover-glow particles">
                      <h4 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2 neon-glow">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 neon-glow" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400 neon-glow">{service.price}</span>
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                          className="cyber-button text-sm font-medium"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-glow gradient-text">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card hover-glow particles">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 neon-glow" />
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 particles">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-glow gradient-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 fade-in">
            Get started with our services today and see the difference AI and IT solutions can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors neon-glow"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors neon-glow"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
