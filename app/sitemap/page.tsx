'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, ArrowRight, Home, Users, Settings, Brain, Cloud, Code, FileText, Mail, Phone, Calendar, Shield, BarChart, Target, Globe, Database, Zap, Eye, Mic, Heart, DollarSign, Box, Cpu, Link, Server, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Package, Monitor, Search, Video, Headphones, Scale, Cookie } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];

  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Main homepage' },
        { name: 'About', url: '/about', description: 'About Zion Tech Group' },
        { name: 'Services', url: '/services', description: 'Our services overview' },
        { name: 'Contact', url: '/contact', description: 'Contact us' },
        { name: 'Pricing', url: '/pricing', description: 'Pricing plans' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' },
        { name: 'Team', url: '/team', description: 'Our team' },
        { name: 'Careers', url: '/careers', description: 'Join our team' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      pages: [
        { name: 'AI Services', url: '/ai-services', description: 'AI solutions overview' },
        { name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered analytics' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Workflow automation' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Build AI chatbots' },
        { name: 'AI CRM', url: '/ai-crm', description: 'AI customer relationship management' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Data insights with AI' },
        { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' },
        { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
        { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
        { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI' },
        { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'HR automation' },
        { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process optimization' },
        { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document analysis' },
        { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', description: 'Business forecasting' },
        { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed AI' },
        { name: 'AI Video Analysis', url: '/ai-video-analysis', description: 'Video content analysis' },
        { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis', description: 'Text-to-speech' },
        { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', description: 'Personalized recommendations' },
        { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis', description: 'Emotion detection' },
        { name: 'AI Enterprise Chatbot', url: '/ai-chatbot-enterprise', description: 'Enterprise chatbots' },
        { name: 'AI Content Moderation', url: '/ai-content-moderation', description: 'Content filtering' },
        { name: 'AI Predictive Modeling', url: '/ai-predictive-modeling', description: 'ML forecasting' },
        { name: 'AI Document Intelligence', url: '/ai-document-intelligence', description: 'Smart document processing' },
        { name: 'AI Conversation Analytics', url: '/ai-conversation-analytics', description: 'Conversation insights' },
        { name: 'AI Supply Chain Intelligence', url: '/ai-supply-chain-ai', description: 'Supply chain optimization' },
        { name: 'AI Healthcare Diagnostics', url: '/ai-healthcare-diagnostics', description: 'Medical diagnostics' },
        { name: 'AI Financial Forecasting', url: '/ai-financial-forecasting', description: 'Financial predictions' },
        { name: 'AI IoT Analytics', url: '/ai-iot-analytics', description: 'IoT data analysis' },
        { name: 'AI Conversational AI Platform', url: '/ai-conversational-ai', description: 'Advanced conversations' },
        { name: 'AI Automated Testing', url: '/ai-automated-testing', description: 'Intelligent testing' },
        { name: 'AI Knowledge Management', url: '/ai-knowledge-management', description: 'Smart knowledge systems' },
        { name: 'AI Customer Churn Prediction', url: '/ai-customer-churn', description: 'Churn prevention' },
        { name: 'AI Automated Reporting', url: '/ai-automated-reporting', description: 'Smart reporting' },
        { name: 'AI Voice Assistant Platform', url: '/ai-voice-assistant', description: 'Enterprise voice AI' },
        { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro', description: 'Advanced content creation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      pages: [
        { name: 'IT Services', url: '/it-services', description: 'IT solutions overview' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP' },
        { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
        { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
        { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
        { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
        { name: 'API Development', url: '/api-development', description: 'API solutions' },
        { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
        { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' },
        { name: 'Custom Software', url: '/custom-software', description: 'Tailored solutions' },
        { name: 'Database Management', url: '/database-management', description: 'Database optimization' },
        { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network setup' },
        { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset lifecycle' },
        { name: 'Cloud-Native Development', url: '/cloud-native-development', description: 'Microservices & containers' },
        { name: 'AI Integration Services', url: '/ai-integration-services', description: 'AI model integration' },
        { name: 'Blockchain Development', url: '/blockchain-development', description: 'Smart contracts & DeFi' },
        { name: 'IoT Development', url: '/iot-development', description: 'Connected device solutions' },
        { name: 'E-commerce Development', url: '/e-commerce-development', description: 'Online store platforms' },
        { name: 'Advanced API Development', url: '/api-development-advanced', description: 'Enterprise-grade APIs' },
        { name: 'Data Engineering', url: '/data-engineering', description: 'Data pipeline development' },
        { name: 'Advanced Cybersecurity', url: '/cybersecurity-advanced', description: 'Threat hunting & response' },
        { name: 'Cloud Migration', url: '/cloud-migration-advanced', description: 'Zero-downtime migration' },
        { name: 'Advanced DevOps & SRE', url: '/devops-advanced', description: 'Site reliability engineering' },
        { name: 'MLOps & AI Operations', url: '/machine-learning-ops', description: 'ML model deployment' },
        { name: 'Enterprise Integration', url: '/enterprise-integration', description: 'System integration' },
        { name: 'Performance Optimization', url: '/performance-optimization', description: 'App & infrastructure optimization' },
        { name: 'Disaster Recovery', url: '/disaster-recovery-advanced', description: 'Business continuity' },
        { name: 'Compliance Automation', url: '/compliance-automation', description: 'Regulatory compliance' },
        { name: 'Cloud Cost Optimization', url: '/cloud-cost-optimization', description: 'Cost reduction' },
        { name: 'Security Automation', url: '/security-automation', description: 'Automated security' },
        { name: 'Data Visualization & BI', url: '/data-visualization', description: 'Advanced dashboards' },
        { name: 'Workflow Automation', url: '/workflow-automation', description: 'Process automation' },
        { name: 'Cloud-Native Security', url: '/cloud-native-security', description: 'Container security' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Zap,
      pages: [
        { name: 'Micro SaaS', url: '/micro-saas', description: 'Micro SaaS tools overview' },
        { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform' },
        { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
        { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
        { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup & recovery' },
        { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
        { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' },
        { name: 'Zion Data Sync', url: '/zion-data-sync', description: 'Data integration platform' },
        { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', description: 'Lead generation platform' },
        { name: 'Zion Project Master', url: '/zion-project-master', description: 'Project management AI' },
        { name: 'Zion Email Automation', url: '/zion-email-automation', description: 'Email marketing AI' },
        { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', description: 'Inventory management' },
        { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', description: 'Invoice generation' },
        { name: 'Zion Workflow Automation', url: '/zion-workflow-automation', description: 'Process automation' },
        { name: 'Zion Performance Monitor', url: '/zion-performance-monitor', description: 'Performance monitoring' },
        { name: 'Zion Compliance Manager', url: '/zion-compliance-manager', description: 'Compliance management' },
        { name: 'Zion Social Scheduler', url: '/zion-social-scheduler', description: 'Social media management' },
        { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', description: 'AI video editing' },
        { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro', description: 'Advanced translation' },
        { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer', description: 'Intelligent code review' },
        { name: 'Zion Customer Insights Pro', url: '/zion-customer-insights', description: 'Customer analytics' },
        { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant', description: 'Smart email management' },
        { name: 'Zion AI Meeting Assistant', url: '/zion-ai-meeting-assistant', description: 'Meeting automation' },
        { name: 'Zion AI SEO Optimizer', url: '/zion-ai-seo-optimizer', description: 'SEO optimization' },
        { name: 'Zion AI Data Cleaner', url: '/zion-ai-data-cleaner', description: 'Data cleaning & validation' },
        { name: 'Zion AI Contract Analyzer', url: '/zion-ai-contract-analyzer', description: 'Contract analysis' },
        { name: 'Zion AI Survey Builder', url: '/zion-ai-survey-builder', description: 'Intelligent surveys' },
        { name: 'Zion AI Accounting Assistant', url: '/zion-ai-accounting-assistant', description: 'AI accounting' },
        { name: 'Zion AI Recruitment Pro', url: '/zion-ai-recruitment-pro', description: 'AI recruitment' },
        { name: 'Zion AI Content Moderation', url: '/zion-ai-content-moderation', description: 'Content moderation' },
        { name: 'Zion AI Predictive Maintenance', url: '/zion-ai-predictive-maintenance', description: 'Equipment maintenance' },
        { name: 'Zion AI Energy Manager', url: '/zion-ai-energy-manager', description: 'Energy optimization' },
        { name: 'Zion AI Supply Chain Optimizer', url: '/zion-ai-supply-chain-optimizer', description: 'Supply chain AI' },
        { name: 'Zion AI Fraud Detector', url: '/zion-ai-fraud-detector', description: 'Fraud detection' },
        { name: 'Zion AI Customer Service Pro', url: '/zion-ai-customer-service-pro', description: 'Advanced customer service' },
        { name: 'Zion AI Marketing Automation', url: '/zion-ai-marketing-automation', description: 'Marketing AI' },
        { name: 'Zion AI Document AI', url: '/zion-ai-document-ai', description: 'Document processing' }
      ]
    },
    {
      title: 'Company',
      icon: Users,
      pages: [
        { name: 'About Us', url: '/about', description: 'About Zion Tech Group' },
        { name: 'Our Team', url: '/team', description: 'Meet our team' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Partners', url: '/partners', description: 'Our partners' },
        { name: 'Support', url: '/support', description: 'Get help' },
        { name: 'Status', url: '/status', description: 'System status' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Pricing', url: '/pricing', description: 'Pricing plans' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'API Reference', url: '/api-docs', description: 'API documentation' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources' },
        { name: 'Community', url: '/community', description: 'Community forum' },
        { name: 'Demo', url: '/demo', description: 'Request a demo' },
        { name: 'Compliance', url: '/compliance', description: 'Compliance information' }
      ]
    },
    {
      title: 'Enterprise',
      icon: Settings,
      pages: [
        { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise solutions' },
        { name: 'Digital Transformation', url: '/digital-transformation', description: 'Digital transformation' },
        { name: 'Business Intelligence', url: '/business-intelligence', description: 'Business intelligence' },
        { name: 'Edge Computing', url: '/edge-computing', description: 'Edge computing solutions' },
        { name: 'Consultation', url: '/consultation', description: 'Free consultation' },
        { name: 'Custom Development', url: '/custom-software', description: 'Custom software development' }
      ]
    },
    {
      title: 'Legal',
      icon: Scale,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Privacy policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms of service' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie policy' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources." />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Website <span className="text-cyan-400">Sitemap</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore all pages and services available on our website. 
                Last updated: {lastUpdated}
              </p>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <div key={pageIndex} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-all duration-300">
                        <a
                          href={page.url}
                          className="flex items-center justify-between group"
                        >
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">
                              {page.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our team for personalized assistance and guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SitemapPage;