const fs = require('fs');
const path = require('path');

const pages = [
  {
    name: 'zion-smart-inventory-optimizer',
    title: 'Zion Smart Inventory Optimizer',
    description: 'Optimize your inventory management with AI-powered demand forecasting, automated reordering, and intelligent stock level management.',
    icon: 'Package',
    features: [
      'AI Demand Forecasting',
      'Automated Reordering',
      'Stock Level Optimization',
      'Supplier Performance Analytics',
      'Cost Reduction Insights',
      'Real-time Inventory Tracking'
    ]
  },
  {
    name: 'zion-ai-customer-sentiment-tracker',
    title: 'Zion AI Customer Sentiment Tracker',
    description: 'Monitor and analyze customer sentiment across all touchpoints with advanced AI-powered sentiment tracking and insights.',
    icon: 'Heart',
    features: [
      'Real-time Sentiment Analysis',
      'Multi-channel Monitoring',
      'Trend Identification',
      'Customer Satisfaction Scoring',
      'Alert System',
      'Detailed Reporting'
    ]
  },
  {
    name: 'zion-smart-expense-categorizer',
    title: 'Zion Smart Expense Categorizer',
    description: 'Automatically categorize and manage business expenses with AI-powered classification and intelligent expense tracking.',
    icon: 'Receipt',
    features: [
      'AI Expense Classification',
      'Automated Categorization',
      'Receipt Processing',
      'Compliance Monitoring',
      'Budget Tracking',
      'Tax Preparation Support'
    ]
  },
  {
    name: 'zion-ai-social-media-manager',
    title: 'Zion AI Social Media Manager',
    description: 'Manage your social media presence with AI-powered content creation, scheduling, and performance optimization.',
    icon: 'Share2',
    features: [
      'AI Content Generation',
      'Smart Scheduling',
      'Performance Analytics',
      'Engagement Optimization',
      'Multi-platform Management',
      'Trend Analysis'
    ]
  },
  {
    name: 'zion-ai-performance-optimizer',
    title: 'Zion AI Performance Optimizer',
    description: 'Optimize your business performance with AI-driven insights, automated recommendations, and intelligent process improvement.',
    icon: 'TrendingUp',
    features: [
      'Performance Analytics',
      'Automated Recommendations',
      'Process Optimization',
      'KPI Tracking',
      'Efficiency Insights',
      'Custom Dashboards'
    ]
  },
  {
    name: 'zion-ai-customer-churn-predictor',
    title: 'Zion AI Customer Churn Predictor',
    description: 'Predict and prevent customer churn with advanced AI models and proactive retention strategies.',
    icon: 'Users',
    features: [
      'Churn Prediction Models',
      'Risk Scoring',
      'Retention Strategies',
      'Customer Segmentation',
      'Early Warning System',
      'Intervention Recommendations'
    ]
  },
  {
    name: 'zion-ai-financial-forecaster',
    title: 'Zion AI Financial Forecaster',
    description: 'Accurate financial forecasting powered by AI with predictive analytics and intelligent financial planning.',
    icon: 'DollarSign',
    features: [
      'AI Financial Forecasting',
      'Cash Flow Prediction',
      'Revenue Projections',
      'Risk Assessment',
      'Scenario Planning',
      'Investment Analysis'
    ]
  },
  {
    name: 'zion-ai-content-moderator',
    title: 'Zion AI Content Moderator',
    description: 'Automated content moderation with AI-powered detection of inappropriate content and intelligent filtering.',
    icon: 'Shield',
    features: [
      'AI Content Detection',
      'Automated Filtering',
      'Policy Enforcement',
      'Real-time Monitoring',
      'Custom Rules Engine',
      'Compliance Reporting'
    ]
  },
  {
    name: 'zion-ai-task-scheduler',
    title: 'Zion AI Task Scheduler',
    description: 'Intelligent task scheduling and project management with AI-powered optimization and resource allocation.',
    icon: 'Calendar',
    features: [
      'AI Task Optimization',
      'Smart Scheduling',
      'Resource Allocation',
      'Deadline Management',
      'Priority Optimization',
      'Team Collaboration'
    ]
  },
  {
    name: 'zion-ai-customer-support-pro',
    title: 'Zion AI Customer Support Pro',
    description: 'Advanced AI-powered customer support with intelligent chatbots, automated responses, and seamless escalation.',
    icon: 'Headphones',
    features: [
      'AI Chatbot Integration',
      'Automated Responses',
      'Sentiment Analysis',
      'Ticket Management',
      'Knowledge Base',
      'Performance Analytics'
    ]
  }
];

const generatePageContent = (page) => {
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ${page.icon}, 
  BarChart3, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Brain,
  TrendingUp,
  Users,
  Clock,
  Star
} from 'lucide-react';

const ${page.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${page.title} - Advanced AI Solutions | Zion Tech Group</title>
        <meta name="description" content="${page.description}" />
        <meta name="keywords" content="AI solutions, ${page.name.replace(/-/g, ' ')}, business automation, AI tools, ${page.name.split('-')[1]} AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <${page.icon} className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${page.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ${page.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock the full potential of your business with our comprehensive AI-powered solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${page.features.map((feature, index) => `
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">${feature}</h3>
                <p className="text-gray-300">
                  Advanced AI-powered ${feature.toLowerCase()} to optimize your business processes and improve efficiency.
                </p>
              </div>`).join('')}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose ${page.title}?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of business automation with our cutting-edge AI technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Transform Your Business Operations</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Increased Efficiency</h4>
                      <p className="text-gray-300">Automate repetitive tasks and optimize workflows for maximum productivity.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Data-Driven Insights</h4>
                      <p className="text-gray-300">Make informed decisions with comprehensive analytics and reporting.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Cost Reduction</h4>
                      <p className="text-gray-300">Reduce operational costs by up to 40% with intelligent automation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Scalable Solution</h4>
                      <p className="text-gray-300">Grow your business with a solution that scales with your needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-500/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <${page.icon} className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h4>
                  <p className="text-gray-300 mb-6">
                    Join thousands of businesses already using ${page.title} to transform their operations.
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                    Start Your Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using ${page.title} to optimize their operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${page.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page;`;
};

// Create all missing pages
pages.forEach(page => {
  const pagePath = path.join(__dirname, 'app', page.name, 'page.tsx');
  const content = generatePageContent(page);
  fs.writeFileSync(pagePath, content);
  console.log(`Created ${page.name}/page.tsx`);
});

console.log('All missing pages created successfully!');