import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function AIServices() {
  const aiServices = [
    {
      name: "AI Content Creation Studio",
      description: "Revolutionary AI-powered content creation platform that generates high-quality, brand-consistent content across multiple channels.",
      price: "$299/month",
      features: [
        "Automated blog post generation",
        "Social media content creation",
        "Email marketing campaigns",
        "SEO-optimized content",
        "Multi-language support",
        "Brand voice customization",
        "Content calendar management",
        "Performance analytics"
      ],
      benefits: [
        "Reduce content creation time by 80%",
        "Maintain consistent brand voice",
        "Scale content production effortlessly",
        "Improve SEO rankings"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Email Automation Platform",
      description: "Intelligent email management system that reads, categorizes, and responds to emails automatically while learning from your preferences.",
      price: "$199/month",
      features: [
        "Smart email categorization",
        "Automated response generation",
        "Priority message flagging",
        "Sentiment analysis",
        "Follow-up automation",
        "Email analytics dashboard",
        "Integration with CRM systems",
        "Custom response templates"
      ],
      benefits: [
        "Handle 90% of routine emails automatically",
        "Never miss important messages",
        "Improve response time by 70%",
        "Reduce email management overhead"
      ],
      marketPrice: "$300-500/month",
      savings: "Save up to $300/month"
    },
    {
      name: "AI Business Intelligence Suite",
      description: "Advanced analytics platform that provides real-time insights, predictive analytics, and automated reporting for data-driven decision making.",
      price: "$499/month",
      features: [
        "Real-time data visualization",
        "Predictive analytics models",
        "Automated report generation",
        "Custom dashboard creation",
        "Data integration from multiple sources",
        "Anomaly detection",
        "Trend analysis",
        "Executive summary reports"
      ],
      benefits: [
        "Make data-driven decisions faster",
        "Identify opportunities and risks early",
        "Reduce manual reporting by 85%",
        "Improve business performance metrics"
      ],
      marketPrice: "$800-1200/month",
      savings: "Save up to $700/month"
    },
    {
      name: "AI Customer Support Automation",
      description: "Comprehensive customer support platform with AI-powered chatbots, ticket routing, and automated resolution capabilities.",
      price: "$399/month",
      features: [
        "Intelligent chatbot system",
        "Automatic ticket routing",
        "Knowledge base integration",
        "Sentiment analysis",
        "Multi-language support",
        "Escalation management",
        "Performance analytics",
        "Custom workflow automation"
      ],
      benefits: [
        "Reduce support response time by 60%",
        "Handle 70% of inquiries automatically",
        "Improve customer satisfaction scores",
        "Scale support without additional staff"
      ],
      marketPrice: "$600-900/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Marketing Automation Platform",
      description: "End-to-end marketing automation with AI-driven personalization, campaign optimization, and customer journey mapping.",
      price: "$599/month",
      features: [
        "AI-powered personalization",
        "Automated campaign optimization",
        "Customer journey mapping",
        "A/B testing automation",
        "Lead scoring and nurturing",
        "Cross-channel marketing",
        "ROI tracking and analytics",
        "Integration with major platforms"
      ],
      benefits: [
        "Increase conversion rates by 40%",
        "Reduce marketing costs by 30%",
        "Improve customer engagement",
        "Automate complex marketing workflows"
      ],
      marketPrice: "$1000-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Financial Analytics Platform",
      description: "Advanced financial analysis tool with AI-powered forecasting, risk assessment, and automated financial reporting.",
      price: "$699/month",
      features: [
        "Financial forecasting models",
        "Risk assessment algorithms",
        "Automated financial reporting",
        "Cash flow optimization",
        "Investment analysis",
        "Compliance monitoring",
        "Fraud detection",
        "Real-time financial dashboards"
      ],
      benefits: [
        "Improve financial forecasting accuracy",
        "Reduce financial risk exposure",
        "Automate compliance reporting",
        "Optimize cash flow management"
      ],
      marketPrice: "$1200-2000/month",
      savings: "Save up to $1300/month"
    },
    {
      name: "AI Document Intelligence Platform",
      description: "Advanced document processing and analysis system that extracts insights, automates workflows, and ensures compliance across all document types.",
      price: "$449/month",
      features: [
        "Intelligent document parsing",
        "Automated data extraction",
        "Contract analysis and review",
        "Compliance monitoring",
        "Document classification",
        "Version control and tracking",
        "OCR and text recognition",
        "Workflow automation"
      ],
      benefits: [
        "Reduce document processing time by 90%",
        "Eliminate manual data entry errors",
        "Ensure regulatory compliance",
        "Improve document searchability"
      ],
      marketPrice: "$800-1200/month",
      savings: "Save up to $750/month"
    },
    {
      name: "AI Voice Assistant Platform",
      description: "Enterprise-grade voice AI platform with natural language processing, voice analytics, and multi-channel voice automation.",
      price: "$399/month",
      features: [
        "Natural language understanding",
        "Voice command processing",
        "Multi-language support",
        "Voice analytics and insights",
        "Integration with business systems",
        "Custom voice training",
        "Real-time transcription",
        "Voice biometric authentication"
      ],
      benefits: [
        "Improve customer experience with voice",
        "Reduce call center costs by 50%",
        "Enable hands-free operations",
        "Enhance accessibility"
      ],
      marketPrice: "$700-1000/month",
      savings: "Save up to $600/month"
    },
    {
      name: "AI Predictive Maintenance System",
      description: "IoT-powered predictive maintenance platform that uses AI to predict equipment failures and optimize maintenance schedules.",
      price: "$599/month",
      features: [
        "IoT sensor integration",
        "Machine learning algorithms",
        "Failure prediction models",
        "Maintenance scheduling optimization",
        "Real-time monitoring dashboards",
        "Cost-benefit analysis",
        "Integration with existing systems",
        "Mobile alerts and notifications"
      ],
      benefits: [
        "Reduce unplanned downtime by 70%",
        "Lower maintenance costs by 40%",
        "Extend equipment lifespan",
        "Improve operational efficiency"
      ],
      marketPrice: "$1000-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Code Generation Platform",
      description: "Advanced AI-powered code generation and development assistance platform that accelerates software development and improves code quality.",
      price: "$299/month",
      features: [
        "Intelligent code generation",
        "Bug detection and fixing",
        "Code optimization suggestions",
        "Multi-language support",
        "Integration with IDEs",
        "Code review automation",
        "Documentation generation",
        "Testing assistance"
      ],
      benefits: [
        "Accelerate development by 60%",
        "Reduce bugs and technical debt",
        "Improve code quality and consistency",
        "Enable faster time-to-market"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Social Media Management",
      description: "Comprehensive AI-powered social media management platform with automated posting, engagement, and analytics across all major platforms.",
      price: "$199/month",
      features: [
        "Automated content scheduling",
        "AI-powered engagement responses",
        "Sentiment analysis and monitoring",
        "Hashtag optimization",
        "Influencer identification",
        "Crisis management alerts",
        "Performance analytics",
        "Multi-platform management"
      ],
      benefits: [
        "Increase social media engagement by 80%",
        "Reduce social media management time",
        "Improve brand reputation monitoring",
        "Optimize social media ROI"
      ],
      marketPrice: "$300-500/month",
      savings: "Save up to $300/month"
    },
    {
      name: "AI HR Analytics Platform",
      description: "Advanced human resources analytics platform with AI-powered insights for recruitment, employee engagement, and workforce optimization.",
      price: "$399/month",
      features: [
        "Resume screening and matching",
        "Employee performance analytics",
        "Retention prediction models",
        "Skills gap analysis",
        "Diversity and inclusion metrics",
        "Recruitment optimization",
        "Employee sentiment analysis",
        "Workforce planning tools"
      ],
      benefits: [
        "Improve hiring success rates by 50%",
        "Reduce employee turnover by 30%",
        "Optimize workforce planning",
        "Enhance employee satisfaction"
      ],
      marketPrice: "$600-900/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Supply Chain Optimization",
      description: "Intelligent supply chain management platform with AI-powered demand forecasting, inventory optimization, and logistics automation.",
      price: "$799/month",
      features: [
        "Demand forecasting algorithms",
        "Inventory optimization",
        "Supplier performance analytics",
        "Risk assessment and mitigation",
        "Route optimization",
        "Cost analysis and reduction",
        "Sustainability tracking",
        "Real-time supply chain visibility"
      ],
      benefits: [
        "Reduce inventory costs by 25%",
        "Improve demand forecasting accuracy",
        "Minimize supply chain disruptions",
        "Optimize logistics operations"
      ],
      marketPrice: "$1200-2000/month",
      savings: "Save up to $1200/month"
    },
    {
      name: "AI Legal Document Analysis",
      description: "Specialized AI platform for legal document analysis, contract review, and compliance monitoring with advanced natural language processing.",
      price: "$599/month",
      features: [
        "Contract analysis and review",
        "Legal document search",
        "Compliance monitoring",
        "Risk assessment",
        "Clause extraction and comparison",
        "Legal research assistance",
        "Document summarization",
        "Deadline tracking and alerts"
      ],
      benefits: [
        "Reduce legal review time by 80%",
        "Improve contract accuracy",
        "Ensure regulatory compliance",
        "Lower legal costs significantly"
      ],
      marketPrice: "$1000-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Video Analytics Platform",
      description: "Advanced video analysis platform with AI-powered content recognition, sentiment analysis, and automated video processing capabilities.",
      price: "$349/month",
      features: [
        "Video content analysis",
        "Object and face recognition",
        "Sentiment analysis from video",
        "Automated video editing",
        "Content moderation",
        "Video search and indexing",
        "Real-time video processing",
        "Custom model training"
      ],
      benefits: [
        "Automate video content processing",
        "Improve content moderation efficiency",
        "Enhance video search capabilities",
        "Reduce manual video review time"
      ],
      marketPrice: "$600-900/month",
      savings: "Save up to $550/month"
    },
    {
      name: "AI Computer Vision Platform",
      description: "Advanced computer vision platform with object detection, facial recognition, and image analysis capabilities for various industries.",
      price: "$599/month",
      features: [
        "Real-time object detection and classification",
        "Facial recognition and verification",
        "OCR and text extraction from images",
        "Quality control and defect detection",
        "Medical image analysis",
        "Security and surveillance monitoring",
        "Custom model training",
        "API integration and SDK"
      ],
      benefits: [
        "Automate visual inspection processes",
        "Improve accuracy by 95%",
        "Reduce manual inspection costs",
        "Enable 24/7 monitoring capabilities"
      ],
      marketPrice: "$1000-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Natural Language Processing Suite",
      description: "Comprehensive NLP platform with sentiment analysis, language translation, text summarization, and chatbot development tools.",
      price: "$449/month",
      features: [
        "Sentiment analysis and emotion detection",
        "Multi-language translation (100+ languages)",
        "Text summarization and extraction",
        "Named entity recognition",
        "Intent classification and understanding",
        "Chatbot and virtual assistant development",
        "Document analysis and processing",
        "Custom model fine-tuning"
      ],
      benefits: [
        "Understand customer sentiment in real-time",
        "Break language barriers globally",
        "Automate text processing workflows",
        "Improve customer service automation"
      ],
      marketPrice: "$700-1200/month",
      savings: "Save up to $750/month"
    },
    {
      name: "AI Predictive Analytics Engine",
      description: "Advanced predictive analytics platform with machine learning models for forecasting, risk assessment, and decision optimization.",
      price: "$699/month",
      features: [
        "Time series forecasting",
        "Risk assessment and scoring",
        "Customer lifetime value prediction",
        "Churn prediction and prevention",
        "Market trend analysis",
        "Anomaly detection",
        "Recommendation engines",
        "Automated model deployment"
      ],
      benefits: [
        "Make data-driven predictions with 90% accuracy",
        "Reduce business risks significantly",
        "Optimize customer retention strategies",
        "Improve strategic decision making"
      ],
      marketPrice: "$1200-2000/month",
      savings: "Save up to $1300/month"
    },
    {
      name: "AI Voice Recognition & Processing",
      description: "Advanced voice AI platform with speech-to-text, voice commands, and intelligent voice analytics for business applications.",
      price: "$399/month",
      features: [
        "Real-time speech-to-text conversion",
        "Voice command recognition",
        "Speaker identification and verification",
        "Voice emotion analysis",
        "Multi-language voice support",
        "Custom wake word training",
        "Voice biometrics authentication",
        "Call center analytics"
      ],
      benefits: [
        "Enable hands-free operations",
        "Improve accessibility for all users",
        "Enhance security with voice biometrics",
        "Automate voice-based workflows"
      ],
      marketPrice: "$600-1000/month",
      savings: "Save up to $600/month"
    },
    {
      name: "AI Recommendation Engine",
      description: "Intelligent recommendation system that personalizes content, products, and services based on user behavior and preferences.",
      price: "$349/month",
      features: [
        "Collaborative filtering algorithms",
        "Content-based recommendations",
        "Hybrid recommendation models",
        "Real-time personalization",
        "A/B testing for recommendations",
        "Cold start problem solutions",
        "Multi-armed bandit optimization",
        "Performance analytics dashboard"
      ],
      benefits: [
        "Increase conversion rates by 40%",
        "Improve user engagement significantly",
        "Boost revenue through better targeting",
        "Enhance customer satisfaction"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $450/month"
    },
    {
      name: "AI Fraud Detection System",
      description: "Advanced fraud detection platform with real-time monitoring, pattern recognition, and automated response capabilities.",
      price: "$799/month",
      features: [
        "Real-time transaction monitoring",
        "Machine learning fraud models",
        "Behavioral pattern analysis",
        "Risk scoring and assessment",
        "Automated fraud prevention",
        "False positive reduction",
        "Multi-channel fraud detection",
        "Compliance reporting tools"
      ],
      benefits: [
        "Detect fraud with 99.5% accuracy",
        "Reduce false positives by 80%",
        "Prevent financial losses",
        "Ensure regulatory compliance"
      ],
      marketPrice: "$1200-2000/month",
      savings: "Save up to $1200/month"
    },
    {
      name: "AI Chatbot Development Platform",
      description: "Comprehensive chatbot development platform with natural language understanding, multi-channel deployment, and analytics.",
      price: "$299/month",
      features: [
        "Visual chatbot builder",
        "Natural language understanding",
        "Multi-channel deployment (web, mobile, social)",
        "Integration with CRM and databases",
        "Conversation analytics",
        "A/B testing capabilities",
        "Human handoff functionality",
        "Custom training data management"
      ],
      benefits: [
        "Reduce customer service costs by 60%",
        "Provide 24/7 customer support",
        "Improve response time to seconds",
        "Scale customer service efficiently"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Data Labeling & Annotation",
      description: "Automated data labeling platform with AI-powered annotation tools for machine learning model training and validation.",
      price: "$249/month",
      features: [
        "Automated data annotation",
        "Human-in-the-loop validation",
        "Multi-modal data support",
        "Quality assurance tools",
        "Collaborative annotation workflows",
        "Custom annotation schemas",
        "Progress tracking and reporting",
        "API integration for ML pipelines"
      ],
      benefits: [
        "Reduce labeling time by 70%",
        "Improve annotation accuracy",
        "Scale data preparation processes",
        "Accelerate ML model development"
      ],
      marketPrice: "$400-700/month",
      savings: "Save up to $450/month"
    },
    {
      name: "AI Edge Computing Platform",
      description: "Edge AI platform for deploying machine learning models on edge devices with real-time inference and optimization.",
      price: "$599/month",
      features: [
        "Model optimization for edge devices",
        "Real-time inference capabilities",
        "Edge device management",
        "Offline operation support",
        "Model versioning and updates",
        "Performance monitoring",
        "Security and encryption",
        "Multi-device synchronization"
      ],
      benefits: [
        "Reduce latency to milliseconds",
        "Enable offline AI capabilities",
        "Lower bandwidth requirements",
        "Improve privacy and security"
      ],
      marketPrice: "$900-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Model Monitoring & MLOps",
      description: "Comprehensive MLOps platform for monitoring, managing, and maintaining machine learning models in production.",
      price: "$499/month",
      features: [
        "Model performance monitoring",
        "Data drift detection",
        "Model versioning and management",
        "Automated retraining pipelines",
        "A/B testing for models",
        "Model governance and compliance",
        "Alert and notification system",
        "Integration with CI/CD pipelines"
      ],
      benefits: [
        "Ensure model reliability and accuracy",
        "Automate model lifecycle management",
        "Reduce model degradation risks",
        "Improve operational efficiency"
      ],
      marketPrice: "$800-1200/month",
      savings: "Save up to $700/month"
    },
    {
      name: "AI-Powered Quantum Computing Platform",
      description: "Revolutionary quantum-enhanced AI platform for solving complex optimization problems and advanced machine learning tasks.",
      price: "$2,999/month",
      features: [
        "Quantum machine learning algorithms",
        "Hybrid classical-quantum processing",
        "Complex optimization solutions",
        "Quantum neural networks",
        "Advanced cryptography",
        "Quantum simulation capabilities",
        "Real-time quantum processing",
        "Custom quantum algorithms"
      ],
      benefits: [
        "Solve problems impossible for classical computers",
        "Exponential speedup for specific algorithms",
        "Future-proof technology advantage",
        "Breakthrough optimization capabilities"
      ],
      marketPrice: "$5000-10000/month",
      savings: "Save up to $7000/month"
    },
    {
      name: "AI-Powered Autonomous Vehicle Systems",
      description: "Complete autonomous vehicle AI platform with computer vision, sensor fusion, and decision-making capabilities.",
      price: "$1,999/month",
      features: [
        "Computer vision processing",
        "Sensor fusion algorithms",
        "Path planning and navigation",
        "Obstacle detection and avoidance",
        "Traffic sign recognition",
        "Lane keeping assistance",
        "Emergency braking systems",
        "Real-time decision making"
      ],
      benefits: [
        "Reduce accidents by 90%",
        "Improve traffic flow efficiency",
        "Lower transportation costs",
        "Enable new mobility services"
      ],
      marketPrice: "$3000-6000/month",
      savings: "Save up to $4000/month"
    },
    {
      name: "AI-Powered Drug Discovery Platform",
      description: "Advanced AI platform for pharmaceutical research, drug discovery, and molecular design with quantum computing integration.",
      price: "$4,999/month",
      features: [
        "Molecular property prediction",
        "Drug-target interaction modeling",
        "Chemical synthesis planning",
        "Toxicity prediction",
        "Clinical trial optimization",
        "Biomarker discovery",
        "Personalized medicine design",
        "Regulatory compliance tools"
      ],
      benefits: [
        "Reduce drug discovery time by 70%",
        "Lower development costs by 50%",
        "Improve success rates",
        "Enable personalized treatments"
      ],
      marketPrice: "$8000-15000/month",
      savings: "Save up to $10000/month"
    },
    {
      name: "AI-Powered Climate Change Solutions",
      description: "Comprehensive AI platform for climate modeling, carbon tracking, and environmental impact optimization.",
      price: "$799/month",
      features: [
        "Climate modeling and prediction",
        "Carbon footprint tracking",
        "Renewable energy optimization",
        "Environmental impact assessment",
        "Sustainability planning",
        "Emission reduction strategies",
        "Green technology recommendations",
        "Compliance monitoring"
      ],
      benefits: [
        "Reduce carbon footprint by 40%",
        "Optimize energy consumption",
        "Meet sustainability goals",
        "Ensure regulatory compliance"
      ],
      marketPrice: "$1200-2500/month",
      savings: "Save up to $1700/month"
    },
    {
      name: "AI-Powered Space Technology Platform",
      description: "Advanced AI solutions for space exploration, satellite management, and space-based applications.",
      price: "$2,499/month",
      features: [
        "Satellite orbit optimization",
        "Space debris tracking",
        "Mission planning and execution",
        "Space weather prediction",
        "Autonomous spacecraft control",
        "Resource utilization optimization",
        "Communication network management",
        "Scientific data analysis"
      ],
      benefits: [
        "Improve mission success rates",
        "Reduce operational costs",
        "Enhance space safety",
        "Enable new space applications"
      ],
      marketPrice: "$4000-8000/month",
      savings: "Save up to $5500/month"
    },
    {
      name: "AI-Powered Mental Health Assistant",
      description: "Comprehensive AI platform for mental health support, therapy assistance, and wellness monitoring.",
      price: "$299/month",
      features: [
        "Mood tracking and analysis",
        "Therapeutic conversation AI",
        "Crisis intervention support",
        "Wellness recommendations",
        "Progress monitoring",
        "Privacy-preserving analytics",
        "Integration with healthcare systems",
        "24/7 mental health support"
      ],
      benefits: [
        "Improve mental health outcomes",
        "Provide accessible support",
        "Reduce healthcare costs",
        "Enable early intervention"
      ],
      marketPrice: "$500-1000/month",
      savings: "Save up to $700/month"
    },
    {
      name: "AI-Powered Agricultural Intelligence",
      description: "Smart farming AI platform with crop monitoring, yield prediction, and automated agricultural management.",
      price: "$599/month",
      features: [
        "Crop health monitoring",
        "Yield prediction algorithms",
        "Pest and disease detection",
        "Irrigation optimization",
        "Soil analysis and recommendations",
        "Weather-based planning",
        "Automated equipment control",
        "Supply chain optimization"
      ],
      benefits: [
        "Increase crop yields by 30%",
        "Reduce water usage by 25%",
        "Minimize pesticide use",
        "Optimize farming operations"
      ],
      marketPrice: "$1000-2000/month",
      savings: "Save up to $1400/month"
    },
    {
      name: "AI-Powered Financial Risk Management",
      description: "Advanced AI platform for financial risk assessment, fraud detection, and investment optimization.",
      price: "$1,499/month",
      features: [
        "Real-time risk assessment",
        "Fraud detection algorithms",
        "Market prediction models",
        "Portfolio optimization",
        "Credit scoring enhancement",
        "Regulatory compliance monitoring",
        "Stress testing scenarios",
        "Automated risk reporting"
      ],
      benefits: [
        "Reduce financial losses by 60%",
        "Improve investment returns",
        "Enhance regulatory compliance",
        "Automate risk management"
      ],
      marketPrice: "$2500-5000/month",
      savings: "Save up to $3500/month"
    },
    {
      name: "AI-Powered Smart City Platform",
      description: "Comprehensive AI platform for smart city management, urban planning, and citizen services optimization.",
      price: "$3,999/month",
      features: [
        "Traffic flow optimization",
        "Energy grid management",
        "Waste management optimization",
        "Public safety monitoring",
        "Citizen service automation",
        "Urban planning insights",
        "Environmental monitoring",
        "Emergency response coordination"
      ],
      benefits: [
        "Improve city efficiency by 40%",
        "Reduce operational costs",
        "Enhance citizen satisfaction",
        "Enable sustainable urban development"
      ],
      marketPrice: "$6000-12000/month",
      savings: "Save up to $8000/month"
    },
    {
      name: "AI-Powered Cybersecurity Intelligence",
      description: "Advanced AI platform for threat detection, security analysis, and automated incident response.",
      price: "$1,999/month",
      features: [
        "Real-time threat detection",
        "Behavioral analysis",
        "Automated incident response",
        "Vulnerability assessment",
        "Security orchestration",
        "Threat intelligence integration",
        "Compliance monitoring",
        "Security training simulation"
      ],
      benefits: [
        "Reduce security incidents by 80%",
        "Improve response time by 90%",
        "Lower security costs",
        "Enhance compliance posture"
      ],
      marketPrice: "$3000-6000/month",
      savings: "Save up to $4000/month"
    },
    {
      name: "AI-Powered Educational Personalization",
      description: "Intelligent education platform that personalizes learning experiences and optimizes educational outcomes.",
      price: "$399/month",
      features: [
        "Personalized learning paths",
        "Adaptive content delivery",
        "Learning style analysis",
        "Progress tracking and analytics",
        "Automated assessment",
        "Tutoring assistance",
        "Skill gap identification",
        "Career guidance recommendations"
      ],
      benefits: [
        "Improve learning outcomes by 50%",
        "Personalize education at scale",
        "Reduce dropout rates",
        "Optimize educational resources"
      ],
      marketPrice: "$700-1500/month",
      savings: "Save up to $1100/month"
    },
    {
      name: "AI-Powered Manufacturing Intelligence",
      description: "Smart manufacturing AI platform with predictive maintenance, quality control, and production optimization.",
      price: "$1,299/month",
      features: [
        "Predictive maintenance algorithms",
        "Quality control automation",
        "Production line optimization",
        "Supply chain coordination",
        "Energy efficiency monitoring",
        "Safety incident prevention",
        "Inventory optimization",
        "Performance analytics"
      ],
      benefits: [
        "Reduce downtime by 70%",
        "Improve product quality by 40%",
        "Lower manufacturing costs",
        "Increase production efficiency"
      ],
      marketPrice: "$2000-4000/month",
      savings: "Save up to $2700/month"
    },
    {
      name: "AI-Powered Legal Research Assistant",
      description: "Advanced AI platform for legal research, case analysis, and document automation with natural language processing.",
      price: "$799/month",
      features: [
        "Legal document analysis",
        "Case law research",
        "Contract review automation",
        "Legal precedent identification",
        "Compliance checking",
        "Document generation",
        "Legal writing assistance",
        "Court filing automation"
      ],
      benefits: [
        "Reduce research time by 80%",
        "Improve case preparation accuracy",
        "Lower legal costs",
        "Enhance client service"
      ],
      marketPrice: "$1200-2500/month",
      savings: "Save up to $1700/month"
    },
    {
      name: "AI-Powered Healthcare Diagnostics",
      description: "Advanced AI platform for medical diagnosis, imaging analysis, and treatment recommendation with FDA compliance.",
      price: "$2,999/month",
      features: [
        "Medical image analysis",
        "Symptom assessment and diagnosis",
        "Treatment recommendation",
        "Drug interaction checking",
        "Patient monitoring",
        "Clinical decision support",
        "Electronic health record integration",
        "Regulatory compliance tools"
      ],
      benefits: [
        "Improve diagnostic accuracy by 30%",
        "Reduce misdiagnosis rates",
        "Lower healthcare costs",
        "Enable personalized medicine"
      ],
      marketPrice: "$5000-10000/month",
      savings: "Save up to $7000/month"
    },
    {
      name: "AI-Powered Energy Grid Optimization",
      description: "Smart energy management AI platform for grid optimization, renewable energy integration, and demand forecasting.",
      price: "$1,799/month",
      features: [
        "Grid load balancing",
        "Renewable energy forecasting",
        "Demand response optimization",
        "Energy storage management",
        "Fault detection and prevention",
        "Power quality monitoring",
        "Market price optimization",
        "Carbon footprint tracking"
      ],
      benefits: [
        "Reduce energy costs by 25%",
        "Improve grid stability",
        "Increase renewable energy usage",
        "Optimize energy distribution"
      ],
      marketPrice: "$3000-6000/month",
      savings: "Save up to $4200/month"
    },
    {
      name: "AI-Powered Retail Intelligence",
      description: "Comprehensive AI platform for retail optimization, customer behavior analysis, and inventory management.",
      price: "$999/month",
      features: [
        "Customer behavior analysis",
        "Inventory optimization",
        "Price optimization",
        "Demand forecasting",
        "Personalized recommendations",
        "Store layout optimization",
        "Supply chain coordination",
        "Sales performance analytics"
      ],
      benefits: [
        "Increase sales by 35%",
        "Reduce inventory costs by 30%",
        "Improve customer satisfaction",
        "Optimize retail operations"
      ],
      marketPrice: "$1500-3000/month",
      savings: "Save up to $2000/month"
    },
    {
      name: "AI-Powered Real Estate Intelligence",
      description: "Advanced AI platform for property valuation, market analysis, and real estate investment optimization.",
      price: "$699/month",
      features: [
        "Property valuation algorithms",
        "Market trend analysis",
        "Investment opportunity identification",
        "Risk assessment",
        "Rental yield optimization",
        "Property management automation",
        "Market forecasting",
        "Investment portfolio analysis"
      ],
      benefits: [
        "Improve investment returns by 40%",
        "Reduce investment risks",
        "Optimize property portfolios",
        "Enhance market insights"
      ],
      marketPrice: "$1200-2500/month",
      savings: "Save up to $1800/month"
    }
  ];
import { 
  Brain, 
  Bot, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Clock,
  Users,
  Globe,
  Database,
  Cpu,
  Target,
  TrendingUp,
  Smartphone,
  FileText,
  Image,
  Mic,
  Code,
  Layers
} from 'lucide-react';

const aiServices = [
  {
    category: "Natural Language Processing",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "AI Chatbots & Virtual Assistants",
        description: "Intelligent conversational AI that understands context and provides human-like responses",
        features: ["24/7 customer support", "Multi-language support", "Integration with CRM", "Sentiment analysis"],
        pricing: "Starting at $2,500/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Document Processing & Analysis",
        description: "Automated document understanding, extraction, and intelligent analysis",
        features: ["PDF/Word processing", "Data extraction", "Content summarization", "Classification"],
        pricing: "Starting at $1,800/month",
        delivery: "3-6 weeks"
      },
      {
        name: "Content Generation & Copywriting",
        description: "AI-powered content creation for marketing, blogs, and business communications",
        features: ["Blog posts", "Marketing copy", "Email campaigns", "Social media content"],
        pricing: "Starting at $1,200/month",
        delivery: "2-4 weeks"
      },
      {
        name: "AI Code Generation & Review",
        description: "Automated code generation, review, and optimization using advanced AI models",
        features: ["Code generation", "Bug detection", "Performance optimization", "Security analysis"],
        pricing: "Starting at $3,000/month",
        delivery: "4-8 weeks"
      },
      {
        name: "AI-Powered Search & Discovery",
        description: "Intelligent search engines that understand context and provide relevant results",
        features: ["Semantic search", "Context understanding", "Personalized results", "Multi-modal search"],
        pricing: "Starting at $2,800/month",
        delivery: "6-10 weeks"
      }
    ]
  },
  {
    category: "Computer Vision",
    icon: Eye,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Image Recognition & Classification",
        description: "Advanced image analysis for object detection, classification, and visual search",
        features: ["Object detection", "Image classification", "Visual search", "Quality assessment"],
        pricing: "Starting at $3,500/month",
        delivery: "6-10 weeks"
      },
      {
        name: "OCR & Document Scanning",
        description: "Optical Character Recognition for digitizing printed documents and forms",
        features: ["Text extraction", "Form processing", "Handwriting recognition", "Multi-language OCR"],
        pricing: "Starting at $2,200/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Facial Recognition & Biometrics",
        description: "Secure identity verification and access control systems",
        features: ["Face detection", "Identity verification", "Access control", "Privacy compliance"],
        pricing: "Starting at $4,500/month",
        delivery: "8-12 weeks"
      }
    ]
  },
  {
    category: "Machine Learning & Analytics",
    icon: BarChart3,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Predictive Analytics",
        description: "Data-driven insights and forecasting for business decision making",
        features: ["Sales forecasting", "Customer behavior prediction", "Risk assessment", "Trend analysis"],
        pricing: "Starting at $3,000/month",
        delivery: "6-12 weeks"
      },
      {
        name: "Recommendation Engines",
        description: "Personalized content and product recommendations for enhanced user experience",
        features: ["Product recommendations", "Content personalization", "Cross-selling", "A/B testing"],
        pricing: "Starting at $2,800/month",
        delivery: "5-10 weeks"
      },
      {
        name: "Fraud Detection & Security",
        description: "AI-powered fraud prevention and security monitoring systems",
        features: ["Real-time monitoring", "Anomaly detection", "Risk scoring", "Alert systems"],
        pricing: "Starting at $4,000/month",
        delivery: "8-14 weeks"
      }
    ]
  },
  {
    category: "Voice & Audio AI",
    icon: Mic,
    color: "from-orange-500 to-red-500",
    services: [
      {
        name: "Speech Recognition & Transcription",
        description: "Convert speech to text with high accuracy across multiple languages",
        features: ["Real-time transcription", "Multi-language support", "Speaker identification", "Noise reduction"],
        pricing: "Starting at $1,500/month",
        delivery: "3-6 weeks"
      },
      {
        name: "Voice Synthesis & Text-to-Speech",
        description: "Natural-sounding voice generation for applications and services",
        features: ["Natural voices", "Multiple languages", "Emotion control", "Custom voice training"],
        pricing: "Starting at $2,000/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Voice Assistants & IVR Systems",
        description: "Interactive voice response systems with AI-powered conversation handling",
        features: ["Call routing", "Voice commands", "Natural conversations", "Integration APIs"],
        pricing: "Starting at $3,200/month",
        delivery: "6-10 weeks"
      }
    ]
  },
  {
    category: "Emerging AI Technologies",
    icon: Cpu,
    color: "from-green-500 to-teal-500",
    services: [
      {
        name: "Quantum Machine Learning",
        description: "Leverage quantum computing for advanced machine learning algorithms",
        features: ["Quantum algorithms", "Faster processing", "Complex optimization", "Quantum advantage"],
        pricing: "Starting at $15,000/month",
        delivery: "12-20 weeks"
      },
      {
        name: "AI-Powered Blockchain Solutions",
        description: "Integrate AI with blockchain for smart contracts and decentralized applications",
        features: ["Smart contracts", "DeFi integration", "NFT generation", "Decentralized AI"],
        pricing: "Starting at $8,500/month",
        delivery: "10-16 weeks"
      },
      {
        name: "Edge AI & IoT Integration",
        description: "Deploy AI models on edge devices for real-time processing",
        features: ["Edge deployment", "Real-time processing", "IoT integration", "Low latency"],
        pricing: "Starting at $5,500/month",
        delivery: "8-12 weeks"
      },
      {
        name: "AI Ethics & Bias Detection",
        description: "Ensure AI systems are fair, transparent, and ethically compliant",
        features: ["Bias detection", "Fairness metrics", "Explainable AI", "Ethics compliance"],
        pricing: "Starting at $4,200/month",
        delivery: "6-10 weeks"
      }
    ]
  }
];

const microSaaS = [
  {
    name: "AI Email Assistant",
    description: "Smart email management with automated responses and scheduling",
    features: ["Auto-reply generation", "Email prioritization", "Meeting scheduling", "Sentiment analysis"],
    pricing: "$99/month per user",
    icon: MessageSquare
  },
  {
    name: "AI Social Media Manager",
    description: "Automated social media content creation and posting",
    features: ["Content generation", "Post scheduling", "Engagement analysis", "Hashtag optimization"],
    pricing: "$149/month per account",
    icon: Globe
  },
  {
    name: "AI Meeting Transcriber",
    description: "Real-time meeting transcription with action item extraction",
    features: ["Live transcription", "Action items", "Meeting summaries", "Speaker identification"],
    pricing: "$79/month per user",
    icon: Mic
  },
  {
    name: "AI Code Reviewer",
    description: "Automated code review and bug detection for development teams",
    features: ["Code analysis", "Bug detection", "Security scanning", "Performance optimization"],
    pricing: "$199/month per team",
    icon: Code
  },
  {
    name: "AI Customer Support Bot",
    description: "Intelligent customer support with ticket routing and resolution",
    features: ["Ticket classification", "Auto-responses", "Escalation management", "Knowledge base"],
    pricing: "$299/month per 1000 tickets",
    icon: Bot
  },
  {
    name: "AI Data Analyzer",
    description: "Automated data analysis and visualization for business insights",
    features: ["Data processing", "Chart generation", "Insight extraction", "Report automation"],
    pricing: "$179/month per dataset",
    icon: BarChart3
  },
  {
    name: "AI Legal Document Analyzer",
    description: "Automated legal document review and contract analysis",
    features: ["Contract analysis", "Risk assessment", "Clause extraction", "Compliance checking"],
    pricing: "$399/month per 100 documents",
    icon: FileText
  },
  {
    name: "AI Video Content Creator",
    description: "Automated video creation and editing using AI",
    features: ["Video generation", "Auto-editing", "Voice synthesis", "Subtitle generation"],
    pricing: "$249/month per 10 videos",
    icon: Image
  },
  {
    name: "AI Financial Advisor",
    description: "Personalized financial advice and investment recommendations",
    features: ["Portfolio analysis", "Risk assessment", "Investment suggestions", "Market insights"],
    pricing: "$199/month per user",
    icon: TrendingUp
  },
  {
    name: "AI HR Assistant",
    description: "Automated HR processes including recruitment and employee management",
    features: ["Resume screening", "Interview scheduling", "Performance tracking", "Employee insights"],
    pricing: "$299/month per 50 employees",
    icon: Users
  },
  {
    name: "AI Supply Chain Optimizer",
    description: "Optimize supply chain operations with AI-powered predictions",
    features: ["Demand forecasting", "Inventory optimization", "Route planning", "Risk management"],
    pricing: "$599/month per location",
    icon: Target
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your business needs and current AI readiness to design the perfect solution."
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Our AI experts develop a comprehensive implementation strategy tailored to your goals."
  },
  {
    step: "03",
    title: "Development & Training",
    description: "We build and train your AI models using cutting-edge algorithms and your data."
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing ensures your AI solution performs optimally in real-world scenarios."
  },
  {
    step: "05",
    title: "Deployment & Support",
    description: "We launch your AI solution and provide ongoing monitoring, maintenance, and support."
  }
];

const stats = [
  { number: "500+", label: "AI Projects Delivered" },
  { number: "99.2%", label: "Accuracy Rate" },
  { number: "24/7", label: "AI Monitoring" },
  { number: "48hrs", label: "Average Response Time" }
];
>>>>>>> main

export default function AIServices() {
>>>>>>> main
  return (
    <Layout 
      title="AI Services - Zion Tech Group" 
      description="Comprehensive AI services including machine learning, natural language processing, computer vision, and custom AI solutions. Transform your business with cutting-edge artificial intelligence."
      keywords="AI services, machine learning, natural language processing, computer vision, AI chatbots, predictive analytics, AI consulting"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence. From chatbots and computer vision 
              to predictive analytics and custom AI solutions - we deliver intelligent automation that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </Link>
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including content creation, customer support automation, and business intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, content creation" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary artificial intelligence solutions that transform your business operations and drive growth
          </p>
          <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Our AI Services?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cost Effective</h3>
                <p className="text-gray-300">Save up to 70% compared to market rates</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Average 40% improvement in efficiency</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical assistance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Categories */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Service Categories
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive AI solutions across multiple domains to address every aspect of your business needs.
            </p>
          </motion.div>

          {aiServices.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600">
                          {service.pricing}
                        </div>
                        <div className="text-sm text-gray-500">
                          Delivery: {service.delivery}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Micro SaaS Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI-Powered Micro SaaS Solutions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Ready-to-deploy AI solutions that can be implemented quickly and scaled as your business grows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaS.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-green-600">
                    {solution.pricing}
                  </div>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                  >
                    Start Free Trial
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/request-quote"
                    className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A proven methodology that ensures successful AI implementation and maximum value for your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Let's discuss your AI needs and create a custom solution that drives real business value. 
              Get a free consultation and discover the potential of AI for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Call: +1 302 464 0950
              </Link>
            </div>
            <div className="mt-8 text-gray-600">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your AI needs and get a customized solution
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Phone</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us Now
            </Link>
            <Link
              href="/request-quote"
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}