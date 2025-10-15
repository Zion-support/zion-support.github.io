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

// More AI pages to fix
const pagesAI = [
  {
    file: 'app/ai-code-assistant/page.tsx',
    serviceName: 'AiCodeAssistant',
    title: 'AI Code Assistant',
    description: 'Intelligent AI code assistant for enhanced development productivity and code quality.',
    keywords: 'AI code assistant, coding AI, development tools, code optimization'
  },
  {
    file: 'app/ai-code-generation/page.tsx',
    serviceName: 'AiCodeGeneration',
    title: 'AI Code Generation',
    description: 'Revolutionary AI code generation solutions for automated software development and programming.',
    keywords: 'AI code generation, automated coding, AI programming, code automation'
  },
  {
    file: 'app/ai-code-security-auditor/page.tsx',
    serviceName: 'AiCodeSecurityAuditor',
    title: 'AI Code Security Auditor',
    description: 'Advanced AI code security auditor for comprehensive vulnerability detection and security analysis.',
    keywords: 'AI security auditor, code security, vulnerability detection, security analysis'
  },
  {
    file: 'app/ai-computer-vision/page.tsx',
    serviceName: 'AiComputerVision',
    title: 'AI Computer Vision',
    description: 'Cutting-edge AI computer vision solutions for image recognition, analysis, and visual intelligence.',
    keywords: 'AI computer vision, image recognition, visual AI, computer vision'
  },
  {
    file: 'app/ai-content-creation/page.tsx',
    serviceName: 'AiContentCreation',
    title: 'AI Content Creation',
    description: 'Intelligent AI content creation tools for generating high-quality written, visual, and multimedia content.',
    keywords: 'AI content creation, content generation, AI writing, creative AI'
  },
  {
    file: 'app/ai-content-delivery-network/page.tsx',
    serviceName: 'AiContentDeliveryNetwork',
    title: 'AI Content Delivery Network',
    description: 'Smart AI-powered content delivery network for optimized content distribution and performance.',
    keywords: 'AI CDN, content delivery, network optimization, AI distribution'
  },
  {
    file: 'app/ai-content-generation/page.tsx',
    serviceName: 'AiContentGeneration',
    title: 'AI Content Generation',
    description: 'Advanced AI content generation solutions for creating engaging and relevant content at scale.',
    keywords: 'AI content generation, content automation, AI writing, content creation'
  },
  {
    file: 'app/ai-content-generator/page.tsx',
    serviceName: 'AiContentGenerator',
    title: 'AI Content Generator',
    description: 'Powerful AI content generator for automated creation of text, images, and multimedia content.',
    keywords: 'AI content generator, content automation, AI tools, content creation'
  },
  {
    file: 'app/ai-content-management/page.tsx',
    serviceName: 'AiContentManagement',
    title: 'AI Content Management',
    description: 'Intelligent AI content management system for organizing, optimizing, and delivering content efficiently.',
    keywords: 'AI content management, content optimization, AI CMS, content organization'
  },
  {
    file: 'app/ai-content-moderation/page.tsx',
    serviceName: 'AiContentModeration',
    title: 'AI Content Moderation',
    description: 'Advanced AI content moderation solutions for automated content filtering and community management.',
    keywords: 'AI content moderation, content filtering, AI moderation, community management'
  },
  {
    file: 'app/ai-content-studio/page.tsx',
    serviceName: 'AiContentStudio',
    title: 'AI Content Studio',
    description: 'Comprehensive AI content studio for professional content creation and multimedia production.',
    keywords: 'AI content studio, content production, multimedia AI, creative studio'
  },
  {
    file: 'app/ai-content-writer/page.tsx',
    serviceName: 'AiContentWriter',
    title: 'AI Content Writer',
    description: 'Intelligent AI content writer for creating compelling and engaging written content across all formats.',
    keywords: 'AI content writer, AI writing, content creation, automated writing'
  },
  {
    file: 'app/ai-conversation-analytics/page.tsx',
    serviceName: 'AiConversationAnalytics',
    title: 'AI Conversation Analytics',
    description: 'Advanced AI conversation analytics for extracting insights from customer interactions and communications.',
    keywords: 'AI conversation analytics, customer insights, communication analysis, AI analytics'
  },
  {
    file: 'app/ai-conversational-ai/page.tsx',
    serviceName: 'AiConversationalAi',
    title: 'AI Conversational AI',
    description: 'Sophisticated AI conversational AI solutions for natural language processing and human-like interactions.',
    keywords: 'AI conversational AI, natural language processing, chatbot AI, conversational interfaces'
  },
  {
    file: 'app/ai-crm-assistant/page.tsx',
    serviceName: 'AiCrmAssistant',
    title: 'AI CRM Assistant',
    description: 'Intelligent AI CRM assistant for enhanced customer relationship management and sales optimization.',
    keywords: 'AI CRM, customer relationship management, sales AI, CRM automation'
  },
  {
    file: 'app/ai-crm/page.tsx',
    serviceName: 'AiCrm',
    title: 'AI CRM',
    description: 'Comprehensive AI-powered CRM system for intelligent customer relationship management and analytics.',
    keywords: 'AI CRM system, customer management, AI sales, CRM intelligence'
  },
  {
    file: 'app/ai-customer-churn/page.tsx',
    serviceName: 'AiCustomerChurn',
    title: 'AI Customer Churn',
    description: 'Advanced AI customer churn prediction and prevention solutions for customer retention optimization.',
    keywords: 'AI customer churn, churn prediction, customer retention, AI analytics'
  },
  {
    file: 'app/ai-customer-insights/page.tsx',
    serviceName: 'AiCustomerInsights',
    title: 'AI Customer Insights',
    description: 'Intelligent AI customer insights platform for understanding customer behavior and preferences.',
    keywords: 'AI customer insights, customer analytics, behavior analysis, customer intelligence'
  },
  {
    file: 'app/ai-customer-sentiment-tracker/page.tsx',
    serviceName: 'AiCustomerSentimentTracker',
    title: 'AI Customer Sentiment Tracker',
    description: 'Real-time AI customer sentiment tracking for monitoring customer satisfaction and feedback analysis.',
    keywords: 'AI sentiment tracking, customer satisfaction, sentiment analysis, feedback AI'
  },
  {
    file: 'app/ai-customer-service/page.tsx',
    serviceName: 'AiCustomerService',
    title: 'AI Customer Service',
    description: 'Revolutionary AI customer service solutions for automated support and enhanced customer experience.',
    keywords: 'AI customer service, automated support, customer experience, AI support'
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

console.log('More AI pages have been fixed!');