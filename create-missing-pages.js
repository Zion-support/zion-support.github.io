const fs = require('fs');
const path = require('path');

// Service data for all missing pages
const serviceData = {
  // AI Services
  'ai-crm': {
    title: 'AI CRM Solutions',
    description: 'Revolutionary AI-powered customer relationship management that transforms how you engage with customers and drive sales growth.',
    icon: 'Users',
    features: ['Intelligent Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Customer Insights', 'Sales Forecasting', 'Automated Workflows'],
    benefits: ['Increase Sales by 40%', 'Reduce Manual Work by 80%', 'Improve Customer Satisfaction', 'Real-time Analytics'],
    pricing: '$299/month',
    category: 'AI',
    color: 'from-purple-500 to-pink-600'
  },
  'ai-data-analytics': {
    title: 'AI Data Analytics',
    description: 'Advanced AI-powered data analytics platform that transforms raw data into actionable business insights and predictive intelligence.',
    icon: 'BarChart',
    features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting', 'Data Visualization', 'Machine Learning Insights'],
    benefits: ['Data-Driven Decisions', 'Predict Future Trends', 'Automated Insights', 'Competitive Advantage'],
    pricing: '$399/month',
    category: 'AI',
    color: 'from-blue-500 to-cyan-600'
  },
  'ai-healthcare': {
    title: 'AI Healthcare Solutions',
    description: 'Cutting-edge AI solutions for healthcare including medical imaging, drug discovery, and personalized medicine.',
    icon: 'Heart',
    features: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance', 'Treatment Optimization', 'Health Predictions'],
    benefits: ['Improved Diagnosis Accuracy', 'Faster Drug Development', 'Better Patient Outcomes', 'Reduced Healthcare Costs'],
    pricing: '$1,999/month',
    category: 'AI',
    color: 'from-red-500 to-pink-600'
  },
  'ai-financial-services': {
    title: 'AI Financial Services',
    description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
    icon: 'DollarSign',
    features: ['Algorithmic Trading', 'Fraud Detection', 'Risk Assessment', 'Credit Scoring', 'Portfolio Optimization', 'Regulatory Compliance'],
    benefits: ['Higher Returns', 'Reduced Risk', 'Automated Compliance', 'Real-time Monitoring'],
    pricing: '$1,499/month',
    category: 'AI',
    color: 'from-green-500 to-emerald-600'
  },
  'ai-computer-vision': {
    title: 'AI Computer Vision',
    description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis.',
    icon: 'Eye',
    features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Control', 'Visual Search', 'Augmented Reality'],
    benefits: ['Automated Visual Tasks', 'Improved Accuracy', 'Real-time Processing', 'Cost Reduction'],
    pricing: '$599/month',
    category: 'AI',
    color: 'from-indigo-500 to-purple-600'
  },
  'ai-voice-solutions': {
    title: 'AI Voice Solutions',
    description: 'Intelligent voice recognition and speech processing solutions for enhanced customer interactions.',
    icon: 'Mic',
    features: ['Speech Recognition', 'Voice Commands', 'Text-to-Speech', 'Voice Analytics', 'Multi-language Support', 'Voice Biometrics'],
    benefits: ['Better User Experience', 'Accessibility', 'Multilingual Support', 'Voice Analytics'],
    pricing: '$399/month',
    category: 'AI',
    color: 'from-orange-500 to-red-600'
  },
  'ai-ecommerce-solutions': {
    title: 'AI E-commerce Solutions',
    description: 'AI-powered e-commerce optimization including personalized recommendations and automated customer service.',
    icon: 'ShoppingCart',
    features: ['Personalized Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Service Bots', 'Visual Search', 'Demand Forecasting'],
    benefits: ['Increase Sales by 35%', 'Better Customer Experience', 'Optimized Pricing', 'Reduced Cart Abandonment'],
    pricing: '$799/month',
    category: 'AI',
    color: 'from-pink-500 to-rose-600'
  },
  'ai-hr-solutions': {
    title: 'AI HR Solutions',
    description: 'Intelligent human resources management with AI-powered recruitment, employee analytics, and workforce optimization.',
    icon: 'Users',
    features: ['Resume Screening', 'Candidate Matching', 'Employee Analytics', 'Performance Prediction', 'Workforce Planning', 'Bias Detection'],
    benefits: ['Faster Hiring', 'Better Matches', 'Reduced Bias', 'Improved Retention'],
    pricing: '$499/month',
    category: 'AI',
    color: 'from-teal-500 to-cyan-600'
  },
  'ai-content-generation': {
    title: 'AI Content Generation',
    description: 'Automated content creation using advanced AI for blogs, social media, marketing materials, and more.',
    icon: 'FileText',
    features: ['Blog Writing', 'Social Media Posts', 'Email Campaigns', 'Product Descriptions', 'SEO Content', 'Multi-language Support'],
    benefits: ['Save 80% Time', 'Consistent Quality', 'SEO Optimized', 'Scalable Content'],
    pricing: '$199/month',
    category: 'AI',
    color: 'from-yellow-500 to-orange-600'
  },
  'ai-workflow-automation': {
    title: 'AI Workflow Automation',
    description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
    icon: 'Workflow',
    features: ['Process Automation', 'Decision Making', 'Exception Handling', 'Integration Management', 'Performance Monitoring', 'Custom Workflows'],
    benefits: ['90% Time Savings', 'Reduced Errors', 'Improved Efficiency', 'Cost Reduction'],
    pricing: '$299/month',
    category: 'AI',
    color: 'from-violet-500 to-purple-600'
  },
  'ai-document-processing': {
    title: 'AI Document Processing',
    description: 'Intelligent document analysis, extraction, and processing using advanced AI and machine learning.',
    icon: 'FileText',
    features: ['Document OCR', 'Data Extraction', 'Form Processing', 'Document Classification', 'Content Analysis', 'Automated Workflows'],
    benefits: ['99% Accuracy', 'Faster Processing', 'Reduced Manual Work', 'Better Organization'],
    pricing: '$149/month',
    category: 'AI',
    color: 'from-slate-500 to-gray-600'
  },
  'ai-predictive-analytics': {
    title: 'AI Predictive Analytics',
    description: 'Advanced predictive analytics using machine learning to forecast trends and make data-driven decisions.',
    icon: 'TrendingUp',
    features: ['Trend Forecasting', 'Risk Assessment', 'Demand Prediction', 'Customer Behavior Analysis', 'Market Analysis', 'Scenario Planning'],
    benefits: ['Better Planning', 'Risk Mitigation', 'Competitive Advantage', 'Data-Driven Decisions'],
    pricing: '$599/month',
    category: 'AI',
    color: 'from-emerald-500 to-green-600'
  },
  'ai-edge-computing': {
    title: 'AI Edge Computing',
    description: 'Distributed AI processing at the edge for real-time decision making and reduced latency.',
    icon: 'Cpu',
    features: ['Real-time Processing', 'Low Latency', 'Offline Capability', 'Distributed Intelligence', 'Edge Analytics', 'IoT Integration'],
    benefits: ['Faster Response', 'Reduced Bandwidth', 'Better Privacy', 'Reliable Performance'],
    pricing: '$899/month',
    category: 'AI',
    color: 'from-cyan-500 to-blue-600'
  },
  'ai-video-analysis': {
    title: 'AI Video Analysis',
    description: 'Intelligent video content analysis for security, marketing, and business intelligence.',
    icon: 'Eye',
    features: ['Object Detection', 'Facial Recognition', 'Motion Analysis', 'Content Moderation', 'Video Search', 'Real-time Monitoring'],
    benefits: ['Enhanced Security', 'Content Insights', 'Automated Monitoring', 'Better Analytics'],
    pricing: '$699/month',
    category: 'AI',
    color: 'from-rose-500 to-pink-600'
  },
  'ai-speech-synthesis': {
    title: 'AI Speech Synthesis',
    description: 'Natural-sounding text-to-speech conversion with multiple voices and languages.',
    icon: 'Mic',
    features: ['Natural Voices', 'Multiple Languages', 'Emotion Control', 'Custom Voices', 'Real-time Synthesis', 'API Integration'],
    benefits: ['Better Accessibility', 'Consistent Quality', 'Multilingual Support', 'Easy Integration'],
    pricing: '$199/month',
    category: 'AI',
    color: 'from-amber-500 to-yellow-600'
  },
  'ai-recommendation-engine': {
    title: 'AI Recommendation Engine',
    description: 'Personalized recommendation system that increases engagement and drives sales.',
    icon: 'Target',
    features: ['Personalized Recommendations', 'Collaborative Filtering', 'Content-based Filtering', 'Real-time Updates', 'A/B Testing', 'Analytics Dashboard'],
    benefits: ['Increase Sales by 30%', 'Better User Experience', 'Higher Engagement', 'Data-Driven Insights'],
    pricing: '$399/month',
    category: 'AI',
    color: 'from-fuchsia-500 to-purple-600'
  },
  'ai-sentiment-analysis': {
    title: 'AI Sentiment Analysis',
    description: 'Advanced sentiment analysis for social media, reviews, and customer feedback.',
    icon: 'Heart',
    features: ['Social Media Monitoring', 'Review Analysis', 'Customer Feedback', 'Brand Monitoring', 'Competitor Analysis', 'Real-time Alerts'],
    benefits: ['Better Brand Understanding', 'Proactive Customer Service', 'Market Insights', 'Reputation Management'],
    pricing: '$299/month',
    category: 'AI',
    color: 'from-pink-500 to-rose-600'
  },
  'ai-chatbot-enterprise': {
    title: 'AI Enterprise Chatbot',
    description: 'Enterprise-grade chatbot solution with advanced natural language processing and integration capabilities.',
    icon: 'MessageSquare',
    features: ['Natural Language Processing', 'Multi-channel Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training', '24/7 Availability'],
    benefits: ['24/7 Customer Support', 'Reduced Support Costs', 'Better Customer Experience', 'Scalable Solutions'],
    pricing: '$599/month',
    category: 'AI',
    color: 'from-blue-500 to-indigo-600'
  },
  'ai-content-moderation': {
    title: 'AI Content Moderation',
    description: 'Automated content moderation using AI to filter inappropriate content and maintain platform safety.',
    icon: 'Shield',
    features: ['Image Moderation', 'Text Analysis', 'Video Content', 'Real-time Filtering', 'Custom Rules', 'Bulk Processing'],
    benefits: ['Safer Platforms', 'Reduced Manual Work', 'Consistent Moderation', 'Scalable Solutions'],
    pricing: '$399/month',
    category: 'AI',
    color: 'from-red-500 to-orange-600'
  },
  'ai-predictive-modeling': {
    title: 'AI Predictive Modeling',
    description: 'Advanced machine learning models for accurate predictions and forecasting across various business domains.',
    icon: 'BarChart',
    features: ['Machine Learning Models', 'Time Series Analysis', 'Regression Analysis', 'Classification Models', 'Model Validation', 'Automated Training'],
    benefits: ['Accurate Predictions', 'Better Planning', 'Risk Mitigation', 'Competitive Advantage'],
    pricing: '$799/month',
    category: 'AI',
    color: 'from-indigo-500 to-purple-600'
  },
  'ai-document-intelligence': {
    title: 'AI Document Intelligence',
    description: 'Smart document processing with AI-powered extraction, analysis, and understanding.',
    icon: 'FileText',
    features: ['Smart Extraction', 'Document Understanding', 'Form Processing', 'Contract Analysis', 'Compliance Checking', 'Automated Workflows'],
    benefits: ['Faster Processing', 'Better Accuracy', 'Reduced Manual Work', 'Improved Compliance'],
    pricing: '$499/month',
    category: 'AI',
    color: 'from-teal-500 to-cyan-600'
  },
  'ai-conversation-analytics': {
    title: 'AI Conversation Analytics',
    description: 'Advanced analytics for customer conversations to improve service quality and business insights.',
    icon: 'MessageCircle',
    features: ['Conversation Analysis', 'Sentiment Tracking', 'Topic Extraction', 'Performance Metrics', 'Quality Scoring', 'Trend Analysis'],
    benefits: ['Better Customer Service', 'Performance Insights', 'Quality Improvement', 'Data-Driven Decisions'],
    pricing: '$349/month',
    category: 'AI',
    color: 'from-green-500 to-emerald-600'
  },
  'ai-supply-chain-ai': {
    title: 'AI Supply Chain Intelligence',
    description: 'Intelligent supply chain optimization using AI for demand forecasting and logistics management.',
    icon: 'Box',
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Assessment', 'Supplier Analysis', 'Cost Optimization'],
    benefits: ['Reduced Costs', 'Better Planning', 'Risk Mitigation', 'Improved Efficiency'],
    pricing: '$1,299/month',
    category: 'AI',
    color: 'from-orange-500 to-red-600'
  },
  'ai-healthcare-diagnostics': {
    title: 'AI Healthcare Diagnostics',
    description: 'AI-powered medical diagnostics for faster and more accurate disease detection and treatment planning.',
    icon: 'Heart',
    features: ['Medical Imaging Analysis', 'Symptom Analysis', 'Disease Detection', 'Treatment Recommendations', 'Risk Assessment', 'Clinical Decision Support'],
    benefits: ['Faster Diagnosis', 'Improved Accuracy', 'Better Patient Outcomes', 'Reduced Healthcare Costs'],
    pricing: '$2,499/month',
    category: 'AI',
    color: 'from-red-500 to-pink-600'
  },
  'ai-financial-forecasting': {
    title: 'AI Financial Forecasting',
    description: 'Advanced financial forecasting using AI for better investment decisions and risk management.',
    icon: 'TrendingUp',
    features: ['Market Analysis', 'Risk Assessment', 'Portfolio Optimization', 'Economic Forecasting', 'Investment Recommendations', 'Scenario Planning'],
    benefits: ['Better Investment Decisions', 'Risk Mitigation', 'Higher Returns', 'Data-Driven Strategies'],
    pricing: '$1,799/month',
    category: 'AI',
    color: 'from-green-500 to-emerald-600'
  },
  'ai-iot-analytics': {
    title: 'AI IoT Analytics',
    description: 'Intelligent analytics for IoT devices and connected systems for better insights and automation.',
    icon: 'Wifi',
    features: ['Device Analytics', 'Predictive Maintenance', 'Anomaly Detection', 'Performance Monitoring', 'Energy Optimization', 'Real-time Alerts'],
    benefits: ['Reduced Downtime', 'Energy Savings', 'Predictive Maintenance', 'Better Performance'],
    pricing: '$699/month',
    category: 'AI',
    color: 'from-cyan-500 to-blue-600'
  },
  'ai-conversational-ai': {
    title: 'AI Conversational AI Platform',
    description: 'Advanced conversational AI platform for creating intelligent chatbots and virtual assistants.',
    icon: 'MessageCircle',
    features: ['Natural Conversations', 'Multi-language Support', 'Context Awareness', 'Integration APIs', 'Analytics Dashboard', 'Custom Training'],
    benefits: ['Better User Experience', '24/7 Availability', 'Scalable Solutions', 'Easy Integration'],
    pricing: '$799/month',
    category: 'AI',
    color: 'from-purple-500 to-pink-600'
  },
  'ai-automated-testing': {
    title: 'AI Automated Testing',
    description: 'Intelligent automated testing solutions that improve software quality and reduce testing time.',
    icon: 'CheckCircle',
    features: ['Test Generation', 'Bug Detection', 'Performance Testing', 'UI Testing', 'API Testing', 'Regression Testing'],
    benefits: ['Faster Testing', 'Better Quality', 'Reduced Costs', 'Comprehensive Coverage'],
    pricing: '$599/month',
    category: 'AI',
    color: 'from-green-500 to-teal-600'
  },
  'ai-knowledge-management': {
    title: 'AI Knowledge Management',
    description: 'Intelligent knowledge management system that organizes and retrieves information efficiently.',
    icon: 'FileText',
    features: ['Document Organization', 'Smart Search', 'Knowledge Graphs', 'Content Recommendations', 'Collaboration Tools', 'Version Control'],
    benefits: ['Better Organization', 'Faster Access', 'Improved Collaboration', 'Knowledge Retention'],
    pricing: '$399/month',
    category: 'AI',
    color: 'from-blue-500 to-indigo-600'
  },
  'ai-customer-churn': {
    title: 'AI Customer Churn Prediction',
    description: 'Predict and prevent customer churn using AI-powered analytics and proactive retention strategies.',
    icon: 'Users',
    features: ['Churn Prediction', 'Risk Scoring', 'Retention Strategies', 'Customer Segmentation', 'Behavioral Analysis', 'Automated Alerts'],
    benefits: ['Reduce Churn by 40%', 'Increase Retention', 'Better Customer Insights', 'Proactive Actions'],
    pricing: '$499/month',
    category: 'AI',
    color: 'from-red-500 to-orange-600'
  },
  'ai-automated-reporting': {
    title: 'AI Automated Reporting',
    description: 'Intelligent automated reporting system that generates insights and reports without manual intervention.',
    icon: 'BarChart',
    features: ['Automated Reports', 'Custom Dashboards', 'Data Visualization', 'Scheduled Reports', 'Real-time Updates', 'Export Options'],
    benefits: ['Save Time', 'Consistent Reports', 'Real-time Insights', 'Better Decision Making'],
    pricing: '$299/month',
    category: 'AI',
    color: 'from-indigo-500 to-purple-600'
  },
  'ai-voice-assistant': {
    title: 'AI Voice Assistant Platform',
    description: 'Enterprise-grade voice assistant platform for hands-free operations and improved productivity.',
    icon: 'Mic',
    features: ['Voice Commands', 'Natural Language Processing', 'Multi-device Support', 'Custom Skills', 'Integration APIs', 'Analytics Dashboard'],
    benefits: ['Hands-free Operation', 'Improved Productivity', 'Better Accessibility', 'Easy Integration'],
    pricing: '$699/month',
    category: 'AI',
    color: 'from-orange-500 to-red-600'
  },
  'ai-content-generation-pro': {
    title: 'AI Content Generation Pro',
    description: 'Advanced AI content generation platform with enterprise features and custom training capabilities.',
    icon: 'FileText',
    features: ['Advanced AI Models', 'Custom Training', 'Multi-language Support', 'Brand Voice Training', 'Content Optimization', 'Plagiarism Detection'],
    benefits: ['Higher Quality Content', 'Brand Consistency', 'Scalable Production', 'Competitive Advantage'],
    pricing: '$999/month',
    category: 'AI',
    color: 'from-violet-500 to-purple-600'
  }
};

// IT Services data
const itServicesData = {
  'api-development': {
    title: 'API Development',
    description: 'Professional API development and management services for seamless integration and scalable solutions.',
    icon: 'Code',
    features: ['RESTful APIs', 'GraphQL APIs', 'API Documentation', 'Rate Limiting', 'Authentication', 'Monitoring'],
    benefits: ['Better Integration', 'Scalable Architecture', 'Developer Friendly', 'Secure APIs'],
    pricing: '$1,299/month',
    category: 'IT',
    color: 'from-blue-500 to-cyan-600'
  },
  'database-management': {
    title: 'Database Management',
    description: 'Comprehensive database management services including design, optimization, and maintenance.',
    icon: 'Database',
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Security Management', 'Monitoring', 'Migration Services'],
    benefits: ['Better Performance', 'Data Security', 'Reduced Downtime', 'Cost Optimization'],
    pricing: '$899/month',
    category: 'IT',
    color: 'from-green-500 to-emerald-600'
  },
  'devops-cicd': {
    title: 'DevOps & CI/CD',
    description: 'Complete DevOps solutions with continuous integration and deployment for faster, reliable software delivery.',
    icon: 'Settings',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Security Scanning', 'Automated Testing', 'Deployment Automation'],
    benefits: ['Faster Deployments', 'Reduced Errors', 'Better Collaboration', 'Improved Quality'],
    pricing: '$1,499/month',
    category: 'IT',
    color: 'from-purple-500 to-pink-600'
  },
  'it-support': {
    title: 'IT Support Services',
    description: 'Comprehensive IT support and maintenance services to keep your systems running smoothly.',
    icon: 'Monitor',
    features: ['24/7 Support', 'Remote Assistance', 'System Maintenance', 'Security Updates', 'Performance Monitoring', 'Help Desk'],
    benefits: ['Reduced Downtime', 'Better Performance', 'Proactive Support', 'Cost Savings'],
    pricing: '$799/month',
    category: 'IT',
    color: 'from-orange-500 to-red-600'
  },
  'data-analytics-bi': {
    title: 'Data Analytics & BI',
    description: 'Advanced business intelligence and data analytics solutions for better decision making.',
    icon: 'BarChart',
    features: ['Data Warehousing', 'ETL Processes', 'Dashboard Creation', 'Report Generation', 'Data Visualization', 'Predictive Analytics'],
    benefits: ['Data-Driven Decisions', 'Better Insights', 'Improved Performance', 'Competitive Advantage'],
    pricing: '$1,199/month',
    category: 'IT',
    color: 'from-indigo-500 to-purple-600'
  },
  'custom-software': {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed specifically for your business needs and requirements.',
    icon: 'Code',
    features: ['Custom Applications', 'Web Development', 'Mobile Apps', 'System Integration', 'Quality Assurance', 'Maintenance'],
    benefits: ['Perfect Fit', 'Competitive Advantage', 'Scalable Solutions', 'Ongoing Support'],
    pricing: 'Custom Pricing',
    category: 'IT',
    color: 'from-teal-500 to-cyan-600'
  },
  'network-infrastructure': {
    title: 'Network Infrastructure',
    description: 'Complete network infrastructure design, implementation, and management for optimal performance.',
    icon: 'Wifi',
    features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Monitoring', 'Disaster Recovery', '24/7 Support'],
    benefits: ['Better Performance', 'Enhanced Security', 'Reduced Downtime', 'Scalable Infrastructure'],
    pricing: '$1,399/month',
    category: 'IT',
    color: 'from-cyan-500 to-blue-600'
  },
  'it-asset-management': {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management for better control and cost optimization.',
    icon: 'Package',
    features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Compliance Management', 'Reporting', 'Automation'],
    benefits: ['Better Control', 'Cost Savings', 'Compliance', 'Improved Efficiency'],
    pricing: '$599/month',
    category: 'IT',
    color: 'from-slate-500 to-gray-600'
  },
  'it-security-services': {
    title: 'IT Security Services',
    description: 'Comprehensive cybersecurity services to protect your business from threats and vulnerabilities.',
    icon: 'Shield',
    features: ['Security Assessment', 'Threat Monitoring', 'Incident Response', 'Compliance Management', 'Security Training', 'Penetration Testing'],
    benefits: ['Enhanced Security', 'Risk Mitigation', 'Compliance', 'Peace of Mind'],
    pricing: '$1,599/month',
    category: 'IT',
    color: 'from-red-500 to-orange-600'
  },
  'it-project-management': {
    title: 'IT Project Management',
    description: 'Professional IT project management services to ensure successful delivery and implementation.',
    icon: 'Calendar',
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Assurance', 'Timeline Management', 'Stakeholder Communication'],
    benefits: ['Successful Delivery', 'On-time Completion', 'Quality Results', 'Better Communication'],
    pricing: '$1,099/month',
    category: 'IT',
    color: 'from-violet-500 to-purple-600'
  }
};

// Function to create a page component
function createPageComponent(serviceKey, data) {
  const componentName = serviceKey.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  const pageContent = `'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { ${data.icon} } from 'lucide-react';

const ${componentName}Page: React.FC = () => {
  return (
    <GenericServicePage
      title="${data.title}"
      description="${data.description}"
      icon={${data.icon}}
      features={${JSON.stringify(data.features)}}
      benefits={${JSON.stringify(data.benefits)}}
      pricing="${data.pricing}"
      category="${data.category}"
      color="${data.color}"
    />
  );
};

export default ${componentName}Page;
`;

  return pageContent;
}

// Function to create directory and file
function createPage(serviceKey, data) {
  const dirPath = path.join(__dirname, 'app', serviceKey);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Create the page component
  const pageContent = createPageComponent(serviceKey, data);
  fs.writeFileSync(filePath, pageContent);
  
  console.log(`Created page: ${serviceKey}`);
}

// Create all AI service pages
console.log('Creating AI service pages...');
Object.entries(serviceData).forEach(([key, data]) => {
  createPage(key, data);
});

// Create all IT service pages
console.log('Creating IT service pages...');
Object.entries(itServicesData).forEach(([key, data]) => {
  createPage(key, data);
});

console.log('All pages created successfully!');