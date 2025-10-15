const fs = require('fs');
const path = require('path');

// Template for AI pages
const createAIPageTemplate = (serviceName, title, description, keywords) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Brain, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Page${serviceName}Page: React.FC = () => {
  const services = [
    {
      title: '${title} Strategy & Planning',
      description: 'Comprehensive ${title.toLowerCase()} strategy development and implementation planning tailored to your business needs.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored ${title.toLowerCase()} implementations for your specific requirements and use cases.',
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: '24/7 Support & Maintenance',
      description: 'Round-the-clock support and maintenance for all your ${title.toLowerCase()} needs.',
      icon: <Shield className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ${description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page${serviceName}Page;`;

// AI pages to fix
const pagesAI = [
  {
    file: 'app/ai-3d-generation/page.tsx',
    serviceName: 'Ai3dGeneration',
    title: 'AI 3D Generation',
    description: 'Revolutionary AI-powered 3D generation solutions for creating stunning visual content and models.',
    keywords: 'AI 3D generation, 3D modeling, AI graphics, visual content creation'
  },
  {
    file: 'app/ai-accounting-assistant/page.tsx',
    serviceName: 'AiAccountingAssistant',
    title: 'AI Accounting Assistant',
    description: 'Intelligent AI accounting assistant to streamline financial processes and improve accuracy.',
    keywords: 'AI accounting, financial automation, accounting software, AI assistant'
  },
  {
    file: 'app/ai-agricultural-intelligence-pro/page.tsx',
    serviceName: 'AiAgriculturalIntelligencePro',
    title: 'AI Agricultural Intelligence Pro',
    description: 'Advanced AI agricultural intelligence solutions for precision farming and crop optimization.',
    keywords: 'AI agriculture, precision farming, crop optimization, agricultural intelligence'
  },
  {
    file: 'app/ai-analytics-dashboard/page.tsx',
    serviceName: 'AiAnalyticsDashboard',
    title: 'AI Analytics Dashboard',
    description: 'Comprehensive AI analytics dashboard for data-driven insights and business intelligence.',
    keywords: 'AI analytics, data dashboard, business intelligence, analytics platform'
  },
  {
    file: 'app/ai-analytics/page.tsx',
    serviceName: 'AiAnalytics',
    title: 'AI Analytics',
    description: 'Advanced AI analytics solutions to extract meaningful insights from your data.',
    keywords: 'AI analytics, data analysis, machine learning, business intelligence'
  },
  {
    file: 'app/ai-api-management/page.tsx',
    serviceName: 'AiApiManagement',
    title: 'AI API Management',
    description: 'Intelligent API management solutions powered by AI for optimal performance and security.',
    keywords: 'AI API management, API optimization, API security, API monitoring'
  },
  {
    file: 'app/ai-api-manager/page.tsx',
    serviceName: 'AiApiManager',
    title: 'AI API Manager',
    description: 'Smart AI API manager for streamlined API lifecycle management and optimization.',
    keywords: 'AI API manager, API lifecycle, API governance, API optimization'
  },
  {
    file: 'app/ai-automated-reporting/page.tsx',
    serviceName: 'AiAutomatedReporting',
    title: 'AI Automated Reporting',
    description: 'Automated reporting solutions powered by AI for efficient data analysis and presentation.',
    keywords: 'AI reporting, automated reports, data visualization, business reporting'
  },
  {
    file: 'app/ai-automated-testing/page.tsx',
    serviceName: 'AiAutomatedTesting',
    title: 'AI Automated Testing',
    description: 'Intelligent automated testing solutions powered by AI for comprehensive quality assurance.',
    keywords: 'AI testing, automated testing, quality assurance, test automation'
  },
  {
    file: 'app/ai-automation-platform/page.tsx',
    serviceName: 'AiAutomationPlatform',
    title: 'AI Automation Platform',
    description: 'Comprehensive AI automation platform for streamlining business processes and workflows.',
    keywords: 'AI automation, process automation, workflow automation, business automation'
  },
  {
    file: 'app/ai-automation-suite/page.tsx',
    serviceName: 'AiAutomationSuite',
    title: 'AI Automation Suite',
    description: 'Complete AI automation suite with tools for process optimization and intelligent workflows.',
    keywords: 'AI automation suite, process optimization, intelligent workflows, automation tools'
  },
  {
    file: 'app/ai-automation/page.tsx',
    serviceName: 'AiAutomation',
    title: 'AI Automation',
    description: 'Advanced AI automation solutions to streamline operations and improve efficiency.',
    keywords: 'AI automation, process automation, operational efficiency, intelligent automation'
  },
  {
    file: 'app/ai-autonomous-systems/page.tsx',
    serviceName: 'AiAutonomousSystems',
    title: 'AI Autonomous Systems',
    description: 'Cutting-edge AI autonomous systems for intelligent decision-making and self-managing operations.',
    keywords: 'AI autonomous systems, autonomous technology, self-managing systems, intelligent automation'
  },
  {
    file: 'app/ai-blockchain-analytics/page.tsx',
    serviceName: 'AiBlockchainAnalytics',
    title: 'AI Blockchain Analytics',
    description: 'Advanced AI blockchain analytics for comprehensive cryptocurrency and blockchain data analysis.',
    keywords: 'AI blockchain, cryptocurrency analytics, blockchain data, crypto intelligence'
  },
  {
    file: 'app/ai-blockchain-solutions/page.tsx',
    serviceName: 'AiBlockchainSolutions',
    title: 'AI Blockchain Solutions',
    description: 'Innovative AI blockchain solutions combining artificial intelligence with distributed ledger technology.',
    keywords: 'AI blockchain, blockchain solutions, distributed ledger, AI crypto'
  },
  {
    file: 'app/ai-business-intelligence/page.tsx',
    serviceName: 'AiBusinessIntelligence',
    title: 'AI Business Intelligence',
    description: 'Intelligent business intelligence solutions powered by AI for data-driven decision making.',
    keywords: 'AI business intelligence, data-driven decisions, business analytics, AI insights'
  },
  {
    file: 'app/ai-chatbot-builder/page.tsx',
    serviceName: 'AiChatbotBuilder',
    title: 'AI Chatbot Builder',
    description: 'Powerful AI chatbot builder for creating intelligent conversational interfaces and customer support.',
    keywords: 'AI chatbot, chatbot builder, conversational AI, customer support'
  },
  {
    file: 'app/ai-chatbot-enterprise/page.tsx',
    serviceName: 'AiChatbotEnterprise',
    title: 'AI Chatbot Enterprise',
    description: 'Enterprise-grade AI chatbot solutions for large-scale customer engagement and support.',
    keywords: 'AI chatbot enterprise, enterprise chatbot, customer engagement, AI support'
  },
  {
    file: 'app/ai-climate-prediction-engine/page.tsx',
    serviceName: 'AiClimatePredictionEngine',
    title: 'AI Climate Prediction Engine',
    description: 'Advanced AI climate prediction engine for accurate weather forecasting and climate modeling.',
    keywords: 'AI climate prediction, weather forecasting, climate modeling, environmental AI'
  },
  {
    file: 'app/ai-climate-solutions-pro/page.tsx',
    serviceName: 'AiClimateSolutionsPro',
    title: 'AI Climate Solutions Pro',
    description: 'Professional AI climate solutions for environmental monitoring and sustainability initiatives.',
    keywords: 'AI climate solutions, environmental monitoring, sustainability, climate AI'
  },
  {
    file: 'app/ai-cloud-infrastructure/page.tsx',
    serviceName: 'AiCloudInfrastructure',
    title: 'AI Cloud Infrastructure',
    description: 'Scalable AI cloud infrastructure solutions for hosting and managing AI applications and services.',
    keywords: 'AI cloud infrastructure, cloud AI, AI hosting, scalable AI'
  }
];

// Fix all AI pages
pagesAI.forEach(page => {
  const content = createAIPageTemplate(
    page.serviceName,
    page.title,
    page.description,
    page.keywords
  );
  
  // Ensure directory exists
  const dir = path.dirname(page.file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(page.file, content);
  console.log(`Fixed: ${page.file}`);
});

console.log('All AI pages have been fixed!');