#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the analysis report
const report = JSON.parse(fs.readFileSync('link-analysis-report.json', 'utf8'));

console.log('🚀 Generating missing pages...\n');

// Template for AI service pages
const aiServiceTemplate = (serviceName, title, description, keywords) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Zap, CheckCircle, ArrowRight, Star, Users, BarChart, Shield, Target, Clock } from 'lucide-react';

const ${serviceName}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
                <Brain className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">AI-Powered Solution</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                ${title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ${description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to transform your business 
                operations and achieve unprecedented efficiency and accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intelligent Processing</h3>
                <p className="text-gray-300 mb-4">
                  Advanced AI algorithms process complex data and tasks with human-level 
                  intelligence and superhuman speed and accuracy.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Machine learning models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Pattern recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Predictive analytics
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Automated Workflows</h3>
                <p className="text-gray-300 mb-4">
                  Streamline your operations with intelligent automation that handles 
                  complex workflows and decision-making processes.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Process automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Smart scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                    Dynamic optimization
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">
                  Bank-level security with advanced encryption, compliance certifications, 
                  and enterprise-grade access controls for sensitive operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Compliance standards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Access controls
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions to drive 
              innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${serviceName}Page;`;

// Service configurations
const serviceConfigs = {
  'ai-content-moderation': {
    name: 'AIContentModeration',
    title: 'AI Content Moderation',
    description: 'Automated content filtering and moderation with advanced AI algorithms to maintain platform safety and compliance across all content types.',
    keywords: 'content moderation, AI filtering, automated moderation, content safety, platform compliance'
  },
  'ai-conversation-analytics': {
    name: 'AIConversationAnalytics',
    title: 'AI Conversation Analytics',
    description: 'Advanced conversation analysis and insights powered by AI to understand customer interactions, sentiment, and optimize communication strategies.',
    keywords: 'conversation analytics, AI insights, customer analysis, sentiment analysis, communication optimization'
  },
  'ai-conversational-ai': {
    name: 'AIConversationalAI',
    title: 'AI Conversational AI Platform',
    description: 'Comprehensive conversational AI platform with advanced natural language processing, multi-channel support, and intelligent dialogue management.',
    keywords: 'conversational AI, NLP platform, dialogue management, multi-channel AI, intelligent conversations'
  },
  'ai-customer-churn': {
    name: 'AICustomerChurn',
    title: 'AI Customer Churn Prediction',
    description: 'Predict and prevent customer churn with AI-powered analytics, early warning systems, and personalized retention strategies.',
    keywords: 'customer churn, churn prediction, retention analytics, customer lifecycle, AI predictions'
  },
  'ai-document-intelligence': {
    name: 'AIDocumentIntelligence',
    title: 'AI Document Intelligence',
    description: 'Transform document processing with AI-powered intelligence, automated extraction, classification, and analysis of complex documents.',
    keywords: 'document AI, intelligent processing, document analysis, automated extraction, document classification'
  },
  'ai-financial-forecasting': {
    name: 'AIFinancialForecasting',
    title: 'AI Financial Forecasting',
    description: 'Advanced financial forecasting and planning with AI-powered predictive models, risk analysis, and automated financial insights.',
    keywords: 'financial forecasting, AI predictions, financial planning, risk analysis, automated insights'
  },
  'ai-healthcare-diagnostics': {
    name: 'AIHealthcareDiagnostics',
    title: 'AI Healthcare Diagnostics',
    description: 'Revolutionary healthcare diagnostics powered by AI with medical image analysis, diagnostic assistance, and clinical decision support.',
    keywords: 'healthcare AI, medical diagnostics, image analysis, clinical AI, diagnostic assistance'
  },
  'ai-integration-services': {
    name: 'AIIntegrationServices',
    title: 'AI Integration Services',
    description: 'Seamless AI integration services to connect AI models with existing systems, APIs, and workflows for maximum business impact.',
    keywords: 'AI integration, model deployment, system integration, AI APIs, workflow automation'
  },
  'ai-iot-analytics': {
    name: 'AIIoTAnalytics',
    title: 'AI IoT Analytics',
    description: 'Advanced IoT data analytics powered by AI to extract insights from connected devices, optimize operations, and enable predictive maintenance.',
    keywords: 'IoT analytics, connected devices, sensor data, predictive maintenance, IoT AI'
  },
  'ai-knowledge-management': {
    name: 'AIKnowledgeManagement',
    title: 'AI Knowledge Management',
    description: 'Intelligent knowledge management system with AI-powered search, content organization, and automated knowledge discovery.',
    keywords: 'knowledge management, AI search, content organization, knowledge discovery, intelligent systems'
  },
  'ai-predictive-modeling': {
    name: 'AIPredictiveModeling',
    title: 'AI Predictive Modeling',
    description: 'Advanced predictive modeling with machine learning algorithms to forecast trends, behaviors, and outcomes for data-driven decisions.',
    keywords: 'predictive modeling, machine learning, forecasting, trend analysis, predictive analytics'
  },
  'ai-sentiment-analysis': {
    name: 'AISentimentAnalysis',
    title: 'AI Sentiment Analysis',
    description: 'Comprehensive sentiment analysis powered by AI to understand emotions, opinions, and attitudes across text, social media, and customer feedback.',
    keywords: 'sentiment analysis, emotion detection, opinion mining, social media analysis, customer sentiment'
  },
  'ai-speech-synthesis': {
    name: 'AISpeechSynthesis',
    title: 'AI Speech Synthesis',
    description: 'Natural-sounding speech synthesis with AI-powered text-to-speech technology for applications, accessibility, and multimedia content.',
    keywords: 'speech synthesis, text-to-speech, voice AI, audio generation, speech technology'
  },
  'ai-supply-chain-ai': {
    name: 'AISupplyChainAI',
    title: 'AI Supply Chain Intelligence',
    description: 'Intelligent supply chain optimization with AI-powered analytics, demand forecasting, and automated logistics management.',
    keywords: 'supply chain AI, logistics optimization, demand forecasting, supply chain analytics, intelligent logistics'
  },
  'ai-video-analysis': {
    name: 'AIVideoAnalysis',
    title: 'AI Video Analysis',
    description: 'Advanced video content analysis with AI-powered object detection, scene recognition, and automated video processing capabilities.',
    keywords: 'video analysis, computer vision, object detection, video AI, automated processing'
  }
};

// IT Services configurations
const itServiceConfigs = {
  'api-development-advanced': {
    name: 'APIDevelopmentAdvanced',
    title: 'Advanced API Development',
    description: 'Enterprise-grade API development services with advanced security, scalability, and performance optimization for mission-critical applications.',
    keywords: 'API development, enterprise APIs, API security, scalable APIs, advanced development'
  },
  'blockchain-development': {
    name: 'BlockchainDevelopment',
    title: 'Blockchain Development',
    description: 'Comprehensive blockchain development services including smart contracts, DeFi applications, and enterprise blockchain solutions.',
    keywords: 'blockchain development, smart contracts, DeFi, enterprise blockchain, cryptocurrency'
  },
  'cloud-cost-optimization': {
    name: 'CloudCostOptimization',
    title: 'Cloud Cost Optimization',
    description: 'Optimize your cloud infrastructure costs with AI-powered analysis, resource optimization, and automated cost management strategies.',
    keywords: 'cloud optimization, cost reduction, cloud analytics, resource optimization, cloud management'
  },
  'cloud-migration-advanced': {
    name: 'CloudMigrationAdvanced',
    title: 'Advanced Cloud Migration',
    description: 'Seamless cloud migration services with zero-downtime strategies, automated migration tools, and comprehensive cloud transformation.',
    keywords: 'cloud migration, zero-downtime, cloud transformation, migration automation, cloud strategy'
  },
  'cloud-native-development': {
    name: 'CloudNativeDevelopment',
    title: 'Cloud-Native Development',
    description: 'Build scalable, resilient applications with cloud-native development practices, microservices architecture, and container orchestration.',
    keywords: 'cloud-native, microservices, containers, Kubernetes, scalable applications'
  },
  'cloud-native-security': {
    name: 'CloudNativeSecurity',
    title: 'Cloud-Native Security',
    description: 'Comprehensive security solutions for cloud-native applications with advanced threat protection, compliance, and security monitoring.',
    keywords: 'cloud security, container security, threat protection, compliance, security monitoring'
  },
  'compliance-automation': {
    name: 'ComplianceAutomation',
    title: 'Compliance Automation',
    description: 'Automate regulatory compliance with AI-powered monitoring, automated reporting, and continuous compliance management across all frameworks.',
    keywords: 'compliance automation, regulatory compliance, automated reporting, compliance monitoring, AI compliance'
  },
  'cybersecurity-advanced': {
    name: 'CybersecurityAdvanced',
    title: 'Advanced Cybersecurity',
    description: 'Enterprise-grade cybersecurity solutions with threat hunting, incident response, and advanced security analytics for comprehensive protection.',
    keywords: 'advanced cybersecurity, threat hunting, incident response, security analytics, enterprise security'
  },
  'data-engineering': {
    name: 'DataEngineering',
    title: 'Data Engineering',
    description: 'Comprehensive data engineering services with pipeline development, data warehousing, and advanced data processing solutions.',
    keywords: 'data engineering, data pipelines, data warehousing, ETL, data processing'
  },
  'data-visualization': {
    name: 'DataVisualization',
    title: 'Data Visualization',
    description: 'Advanced data visualization solutions with interactive dashboards, real-time analytics, and comprehensive business intelligence tools.',
    keywords: 'data visualization, dashboards, business intelligence, analytics, interactive charts'
  },
  'devops-advanced': {
    name: 'DevOpsAdvanced',
    title: 'Advanced DevOps & SRE',
    description: 'Enterprise DevOps and Site Reliability Engineering with advanced automation, monitoring, and continuous improvement practices.',
    keywords: 'DevOps, SRE, site reliability, automation, monitoring, continuous improvement'
  },
  'disaster-recovery-advanced': {
    name: 'DisasterRecoveryAdvanced',
    title: 'Advanced Disaster Recovery',
    description: 'Comprehensive disaster recovery solutions with automated backup, rapid restoration, and business continuity planning.',
    keywords: 'disaster recovery, business continuity, backup solutions, data protection, recovery planning'
  },
  'e-commerce-development': {
    name: 'ECommerceDevelopment',
    title: 'E-commerce Development',
    description: 'Complete e-commerce development services with modern platforms, payment integration, and advanced shopping experiences.',
    keywords: 'e-commerce development, online stores, payment integration, shopping platforms, e-commerce solutions'
  },
  'enterprise-integration': {
    name: 'EnterpriseIntegration',
    title: 'Enterprise Integration',
    description: 'Seamless enterprise system integration with API management, data synchronization, and comprehensive workflow automation.',
    keywords: 'enterprise integration, system integration, API management, data sync, workflow automation'
  },
  'iot-development': {
    name: 'IoTDevelopment',
    title: 'IoT Development',
    description: 'Comprehensive IoT development services with connected device solutions, sensor networks, and intelligent IoT platforms.',
    keywords: 'IoT development, connected devices, sensor networks, IoT platforms, smart devices'
  },
  'iot-integration': {
    name: 'IoTIntegration',
    title: 'IoT Integration',
    description: 'Seamless IoT integration services to connect devices, systems, and platforms for unified IoT ecosystem management.',
    keywords: 'IoT integration, device connectivity, IoT ecosystems, system integration, connected solutions'
  },
  'it-project-management': {
    name: 'ITProjectManagement',
    title: 'IT Project Management',
    description: 'Professional IT project management services with agile methodologies, risk management, and comprehensive project delivery.',
    keywords: 'IT project management, agile methodology, risk management, project delivery, IT consulting'
  },
  'it-security-services': {
    name: 'ITSecurityServices',
    title: 'IT Security Services',
    description: 'Comprehensive IT security services including security assessment, monitoring, incident response, and compliance management.',
    keywords: 'IT security, security assessment, security monitoring, incident response, compliance'
  },
  'machine-learning-ops': {
    name: 'MachineLearningOps',
    title: 'MLOps & AI Operations',
    description: 'Complete MLOps and AI operations services with model deployment, monitoring, and lifecycle management for production AI systems.',
    keywords: 'MLOps, AI operations, model deployment, AI monitoring, machine learning lifecycle'
  },
  'security-automation': {
    name: 'SecurityAutomation',
    title: 'Security Automation',
    description: 'Automated security solutions with AI-powered threat detection, automated response, and continuous security monitoring.',
    keywords: 'security automation, automated security, threat detection, security AI, automated response'
  },
  'workflow-automation': {
    name: 'WorkflowAutomation',
    title: 'Workflow Automation',
    description: 'Intelligent workflow automation with AI-powered process optimization, automated decision-making, and comprehensive business process management.',
    keywords: 'workflow automation, process automation, business process management, AI workflows, automated processes'
  }
};

// Zion Micro SAAS configurations
const zionServiceConfigs = {
  'zion-analytics-pro': {
    name: 'ZionAnalyticsPro',
    title: 'Zion Analytics Pro',
    description: 'Advanced business intelligence platform with AI-powered analytics, real-time dashboards, and comprehensive reporting capabilities.',
    keywords: 'business intelligence, analytics platform, real-time dashboards, AI analytics, reporting'
  },
  'zion-chat-ai': {
    name: 'ZionChatAI',
    title: 'Zion Chat AI',
    description: 'Intelligent AI customer support chatbot with natural language processing, multi-channel support, and automated customer service.',
    keywords: 'AI chatbot, customer support, conversational AI, automated support, AI assistant'
  },
  'zion-security-shield': {
    name: 'ZionSecurityShield',
    title: 'Zion Security Shield',
    description: 'Comprehensive cybersecurity monitoring and protection with real-time threat detection, automated response, and security analytics.',
    keywords: 'cybersecurity, threat detection, security monitoring, automated security, protection'
  },
  'zion-cloud-vault': {
    name: 'ZionCloudVault',
    title: 'Zion Cloud Vault',
    description: 'Secure cloud backup and recovery solution with automated backups, data encryption, and disaster recovery capabilities.',
    keywords: 'cloud backup, data recovery, cloud storage, data protection, backup automation'
  },
  'zion-content-studio': {
    name: 'ZionContentStudio',
    title: 'Zion Content Studio',
    description: 'AI-powered content creation platform with automated content generation, editing tools, and multi-format content production.',
    keywords: 'content creation, AI writing, content automation, content studio, creative AI'
  },
  'zion-crm-intelligence': {
    name: 'ZionCRMIntelligence',
    title: 'Zion CRM Intelligence',
    description: 'AI-enhanced CRM system with intelligent customer insights, automated workflows, and predictive analytics for sales optimization.',
    keywords: 'CRM, customer relationship management, AI CRM, sales automation, customer insights'
  },
  'zion-data-sync': {
    name: 'ZionDataSync',
    title: 'Zion Data Sync',
    description: 'Automated data integration platform with real-time synchronization, data transformation, and comprehensive data management.',
    keywords: 'data integration, data sync, data transformation, data management, automated sync'
  },
  'zion-lead-magnet': {
    name: 'ZionLeadMagnet',
    title: 'Zion Lead Magnet',
    description: 'AI-powered lead generation platform with automated lead scoring, qualification, and nurturing for improved conversion rates.',
    keywords: 'lead generation, lead scoring, lead qualification, marketing automation, lead nurturing'
  },
  'zion-project-master': {
    name: 'ZionProjectMaster',
    title: 'Zion Project Master',
    description: 'Intelligent project management platform with AI-powered planning, resource optimization, and automated project tracking.',
    keywords: 'project management, AI planning, resource optimization, project tracking, PM software'
  },
  'zion-email-automation': {
    name: 'ZionEmailAutomation',
    title: 'Zion Email Automation',
    description: 'Advanced email marketing automation with AI-powered personalization, automated campaigns, and comprehensive email analytics.',
    keywords: 'email marketing, email automation, personalized emails, campaign automation, email analytics'
  },
  'zion-inventory-smart': {
    name: 'ZionInventorySmart',
    title: 'Zion Inventory Smart',
    description: 'Intelligent inventory management system with AI-powered forecasting, automated reordering, and comprehensive inventory analytics.',
    keywords: 'inventory management, stock forecasting, automated reordering, inventory analytics, smart inventory'
  },
  'zion-invoice-genius': {
    name: 'ZionInvoiceGenius',
    title: 'Zion Invoice Genius',
    description: 'AI-powered invoice generation and management with automated billing, payment tracking, and comprehensive financial reporting.',
    keywords: 'invoice generation, automated billing, payment tracking, financial reporting, invoice management'
  },
  'zion-workflow-automation': {
    name: 'ZionWorkflowAutomation',
    title: 'Zion Workflow Automation',
    description: 'Comprehensive workflow automation platform with AI-powered process optimization, automated decision-making, and business process management.',
    keywords: 'workflow automation, process optimization, business automation, AI workflows, process management'
  },
  'zion-performance-monitor': {
    name: 'ZionPerformanceMonitor',
    title: 'Zion Performance Monitor',
    description: 'Advanced performance monitoring solution with real-time analytics, automated alerts, and comprehensive system optimization.',
    keywords: 'performance monitoring, system monitoring, real-time analytics, performance optimization, monitoring tools'
  },
  'zion-compliance-manager': {
    name: 'ZionComplianceManager',
    title: 'Zion Compliance Manager',
    description: 'Automated compliance management system with regulatory monitoring, automated reporting, and comprehensive compliance tracking.',
    keywords: 'compliance management, regulatory compliance, automated reporting, compliance tracking, regulatory monitoring'
  },
  'zion-social-scheduler': {
    name: 'ZionSocialScheduler',
    title: 'Zion Social Scheduler',
    description: 'AI-powered social media management with automated posting, content optimization, and comprehensive social media analytics.',
    keywords: 'social media management, social scheduling, content optimization, social analytics, social automation'
  }
};

// Function to create directory if it doesn't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Function to generate page
function generatePage(route, config) {
  const dirPath = path.join(__dirname, 'app', route);
  const filePath = path.join(dirPath, 'page.tsx');
  
  ensureDir(dirPath);
  
  const content = aiServiceTemplate(config.name, config.title, config.description, config.keywords);
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${route}`);
}

// Generate all missing pages
let createdCount = 0;

// Generate AI service pages
Object.entries(serviceConfigs).forEach(([route, config]) => {
  if (report.missingPages.includes(`/${route}`)) {
    generatePage(route, config);
    createdCount++;
  }
});

// Generate IT service pages
Object.entries(itServiceConfigs).forEach(([route, config]) => {
  if (report.missingPages.includes(`/${route}`)) {
    generatePage(route, config);
    createdCount++;
  }
});

// Generate Zion service pages
Object.entries(zionServiceConfigs).forEach(([route, config]) => {
  if (report.missingPages.includes(`/${route}`)) {
    generatePage(route, config);
    createdCount++;
  }
});

console.log(`\n🎉 Successfully created ${createdCount} missing pages!`);
console.log(`📊 Remaining missing pages: ${report.missingPages.length - createdCount}`);

// Show remaining missing pages
const remainingPages = report.missingPages.filter(page => 
  !Object.keys(serviceConfigs).includes(page.substring(1)) &&
  !Object.keys(itServiceConfigs).includes(page.substring(1)) &&
  !Object.keys(zionServiceConfigs).includes(page.substring(1)) &&
  !page.startsWith('/assets/') &&
  !page.includes('.js') &&
  !page.includes('.css') &&
  page !== '/search' &&
  page !== '/sitemap.xml'
);

if (remainingPages.length > 0) {
  console.log('\n📝 Remaining pages to create:');
  remainingPages.forEach(page => {
    console.log(`  - ${page}`);
  });
}