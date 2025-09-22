#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const servicePages = [
  'ai-content-generator',
  'ai-content-optimizer', 
  'ai-content-writer',
  'ai-copilots',
  'ai-customer-insights',
  'ai-customer-support-automation',
  'ai-customer-support',
  'ai-data-analysis',
  'ai-data-analytics'
];

const template = `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SERVICE_NAME | Zion Tech Group',
  description: 'SERVICE_DESCRIPTION',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            SERVICE_TITLE
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            SERVICE_DESCRIPTION_LONG
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 1.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 1.1</li>
              <li>• Feature 1.2</li>
              <li>• Feature 1.3</li>
              <li>• Feature 1.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 2.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 2.1</li>
              <li>• Feature 2.2</li>
              <li>• Feature 2.3</li>
              <li>• Feature 2.4</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
            <p className="text-gray-300 mb-4">
              Description of feature 3.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>• Feature 3.1</li>
              <li>• Feature 3.2</li>
              <li>• Feature 3.3</li>
              <li>• Feature 3.4</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}`;

const serviceData = {
  'ai-content-generator': {
    title: 'AI Content Generator',
    description: 'AI-powered content generation for blogs, marketing, and digital content.',
    descriptionLong: 'Generate high-quality, engaging content at scale using advanced AI technology.',
    features: [
      {
        title: 'Blog Content',
        description: 'Generate engaging blog posts and articles automatically.',
        items: ['SEO-optimized Content', 'Multiple Formats', 'Research Integration', 'Brand Voice Matching']
      },
      {
        title: 'Marketing Copy',
        description: 'Create compelling marketing copy for all channels.',
        items: ['Ad Copy', 'Email Campaigns', 'Social Media Posts', 'Product Descriptions']
      },
      {
        title: 'Technical Content',
        description: 'Generate technical documentation and guides.',
        items: ['API Documentation', 'User Manuals', 'Technical Guides', 'Code Comments']
      }
    ]
  },
  'ai-content-optimizer': {
    title: 'AI Content Optimizer',
    description: 'AI-powered content optimization for SEO and engagement.',
    descriptionLong: 'Optimize your content for better search rankings and user engagement.',
    features: [
      {
        title: 'SEO Optimization',
        description: 'Optimize content for search engines automatically.',
        items: ['Keyword Analysis', 'Meta Tags', 'Content Structure', 'Link Building']
      },
      {
        title: 'Engagement Analysis',
        description: 'Analyze and improve content engagement metrics.',
        items: ['Readability Scores', 'Engagement Metrics', 'A/B Testing', 'Performance Tracking']
      },
      {
        title: 'Content Enhancement',
        description: 'Enhance content quality and effectiveness.',
        items: ['Grammar Check', 'Style Improvement', 'Fact Checking', 'Tone Optimization']
      }
    ]
  },
  'ai-content-writer': {
    title: 'AI Content Writer',
    description: 'Professional AI content writing for all your needs.',
    descriptionLong: 'Professional-grade AI content writing that matches your brand voice and requirements.',
    features: [
      {
        title: 'Professional Writing',
        description: 'High-quality content that matches professional standards.',
        items: ['Industry Expertise', 'Brand Voice Matching', 'Quality Assurance', 'Professional Tone']
      },
      {
        title: 'Multiple Formats',
        description: 'Support for various content formats and styles.',
        items: ['Articles', 'Press Releases', 'Case Studies', 'White Papers']
      },
      {
        title: 'Customization',
        description: 'Fully customizable content to match your needs.',
        items: ['Custom Templates', 'Brand Guidelines', 'Style Preferences', 'Content Length']
      }
    ]
  },
  'ai-copilots': {
    title: 'AI Copilots',
    description: 'AI-powered copilots for enhanced productivity and assistance.',
    descriptionLong: 'Intelligent AI copilots designed to enhance productivity across various tasks and workflows.',
    features: [
      {
        title: 'Code Copilot',
        description: 'AI-powered coding assistant for developers.',
        items: ['Code Completion', 'Bug Detection', 'Code Review', 'Documentation']
      },
      {
        title: 'Writing Copilot',
        description: 'AI assistant for content creation and editing.',
        items: ['Content Generation', 'Grammar Check', 'Style Improvement', 'Research Assistance']
      },
      {
        title: 'Business Copilot',
        description: 'AI assistant for business tasks and decision making.',
        items: ['Data Analysis', 'Report Generation', 'Meeting Notes', 'Task Management']
      }
    ]
  },
  'ai-customer-insights': {
    title: 'AI Customer Insights',
    description: 'AI-powered customer insights and analytics platform.',
    descriptionLong: 'Gain deep insights into customer behavior and preferences using advanced AI analytics.',
    features: [
      {
        title: 'Behavior Analysis',
        description: 'Analyze customer behavior patterns and trends.',
        items: ['Purchase Patterns', 'Engagement Metrics', 'User Journeys', 'Predictive Analytics']
      },
      {
        title: 'Sentiment Analysis',
        description: 'Understand customer sentiment and feedback.',
        items: ['Social Media Monitoring', 'Review Analysis', 'Feedback Processing', 'Emotion Detection']
      },
      {
        title: 'Personalization',
        description: 'Create personalized experiences for customers.',
        items: ['Recommendation Engine', 'Custom Content', 'Targeted Marketing', 'Dynamic Pricing']
      }
    ]
  },
  'ai-customer-support-automation': {
    title: 'AI Customer Support Automation',
    description: 'Automate customer support with AI-powered solutions.',
    descriptionLong: 'Streamline customer support operations with intelligent automation and AI assistance.',
    features: [
      {
        title: 'Automated Responses',
        description: 'Handle common customer queries automatically.',
        items: ['FAQ Automation', 'Ticket Routing', 'Response Generation', 'Escalation Management']
      },
      {
        title: 'Intelligent Routing',
        description: 'Route tickets to the right agents automatically.',
        items: ['Priority Detection', 'Skill Matching', 'Load Balancing', 'Queue Management']
      },
      {
        title: 'Quality Assurance',
        description: 'Ensure consistent quality in customer interactions.',
        items: ['Response Monitoring', 'Quality Scoring', 'Training Recommendations', 'Performance Analytics']
      }
    ]
  },
  'ai-customer-support': {
    title: 'AI Customer Support',
    description: 'AI-enhanced customer support solutions.',
    descriptionLong: 'Enhance your customer support with AI-powered tools and intelligent assistance.',
    features: [
      {
        title: 'Smart Chatbots',
        description: 'Intelligent chatbots for 24/7 customer support.',
        items: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Learning Capabilities']
      },
      {
        title: 'Agent Assistance',
        description: 'AI tools to help support agents be more effective.',
        items: ['Knowledge Base Search', 'Response Suggestions', 'Customer History', 'Real-time Translation']
      },
      {
        title: 'Analytics & Insights',
        description: 'Comprehensive analytics for support optimization.',
        items: ['Performance Metrics', 'Customer Satisfaction', 'Trend Analysis', 'Improvement Recommendations']
      }
    ]
  },
  'ai-data-analysis': {
    title: 'AI Data Analysis',
    description: 'AI-powered data analysis and insights platform.',
    descriptionLong: 'Transform your data into actionable insights with advanced AI analysis capabilities.',
    features: [
      {
        title: 'Automated Analysis',
        description: 'Automatically analyze large datasets for patterns and insights.',
        items: ['Pattern Recognition', 'Anomaly Detection', 'Trend Analysis', 'Predictive Modeling']
      },
      {
        title: 'Visualization',
        description: 'Create compelling visualizations of your data.',
        items: ['Interactive Charts', 'Dashboard Creation', 'Custom Reports', 'Real-time Updates']
      },
      {
        title: 'Natural Language Queries',
        description: 'Query your data using natural language.',
        items: ['Voice Commands', 'Text Queries', 'Smart Suggestions', 'Context Understanding']
      }
    ]
  },
  'ai-data-analytics': {
    title: 'AI Data Analytics',
    description: 'Comprehensive AI-powered data analytics solution.',
    descriptionLong: 'Unlock the power of your data with comprehensive AI analytics and business intelligence.',
    features: [
      {
        title: 'Advanced Analytics',
        description: 'Sophisticated analytics powered by machine learning.',
        items: ['Machine Learning Models', 'Statistical Analysis', 'Correlation Detection', 'Causal Inference']
      },
      {
        title: 'Real-time Processing',
        description: 'Process and analyze data in real-time.',
        items: ['Stream Processing', 'Live Dashboards', 'Instant Alerts', 'Dynamic Updates']
      },
      {
        title: 'Business Intelligence',
        description: 'Transform data into business insights and recommendations.',
        items: ['KPI Tracking', 'Performance Monitoring', 'Strategic Planning', 'Decision Support']
      }
    ]
  }
};

servicePages.forEach(service => {
  const data = serviceData[service];
  const content = template
    .replace(/SERVICE_NAME/g, data.title)
    .replace(/SERVICE_DESCRIPTION/g, data.description)
    .replace(/SERVICE_TITLE/g, data.title)
    .replace(/SERVICE_DESCRIPTION_LONG/g, data.descriptionLong)
    .replace(/Feature 1/g, data.features[0].title)
    .replace(/Description of feature 1\./g, data.features[0].description)
    .replace(/Feature 1\.1/g, data.features[0].items[0])
    .replace(/Feature 1\.2/g, data.features[0].items[1])
    .replace(/Feature 1\.3/g, data.features[0].items[2])
    .replace(/Feature 1\.4/g, data.features[0].items[3])
    .replace(/Feature 2/g, data.features[1].title)
    .replace(/Description of feature 2\./g, data.features[1].description)
    .replace(/Feature 2\.1/g, data.features[1].items[0])
    .replace(/Feature 2\.2/g, data.features[1].items[1])
    .replace(/Feature 2\.3/g, data.features[1].items[2])
    .replace(/Feature 2\.4/g, data.features[1].items[3])
    .replace(/Feature 3/g, data.features[2].title)
    .replace(/Description of feature 3\./g, data.features[2].description)
    .replace(/Feature 3\.1/g, data.features[2].items[0])
    .replace(/Feature 3\.2/g, data.features[2].items[1])
    .replace(/Feature 3\.3/g, data.features[2].items[2])
    .replace(/Feature 3\.4/g, data.features[2].items[3]);

  const filePath = path.join(__dirname, 'app', 'services', service, 'page.tsx');
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${service}/page.tsx`);
});

console.log('All service pages fixed!');