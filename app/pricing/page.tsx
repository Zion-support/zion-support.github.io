'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Cloud, Cpu, Phone, Mail, MapPin, DollarSign, Users, Shield, BarChart3, FileText, Target, Globe, Database, Settings, Calendar, Eye, Mic, Heart, Lock, Package, Monitor, Wifi, Code, Smartphone } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const aiServices = [
    { name: 'AI-Powered Chatbots', price: '$299', period: '/month', marketPrice: '$500-2000', features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration'] },
    { name: 'AI Content Generation', price: '$199', period: '/month', marketPrice: '$300-1500', features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'] },
    { name: 'AI Data Analytics', price: '$399', period: '/month', marketPrice: '$800-3000', features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection'] },
    { name: 'AI Workflow Automation', price: '$349', period: '/month', marketPrice: '$600-2500', features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling'] },
    { name: 'AI Computer Vision', price: '$599', period: '/month', marketPrice: '$1000-5000', features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics'] },
    { name: 'AI Fraud Detection', price: '$799', period: '/month', marketPrice: '$1500-5000', features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection'] },
    { name: 'AI Customer Service', price: '$249', period: '/month', marketPrice: '$400-1800', features: ['Automated Ticket Routing', 'Sentiment Analysis', 'Multi-channel Support', 'Live Agent Handoff'] },
    { name: 'AI Financial Analysis', price: '$699', period: '/month', marketPrice: '$1200-4000', features: ['Risk Assessment', 'Financial Modeling', 'Market Analysis', 'Credit Scoring'] },
    { name: 'AI Healthcare Diagnostics', price: '$999', period: '/month', marketPrice: '$2000-8000', features: ['Medical Image Analysis', 'Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery'] },
    { name: 'AI Marketing Automation', price: '$399', period: '/month', marketPrice: '$600-2500', features: ['Personalized Campaigns', 'Customer Segmentation', 'A/B Testing', 'Lead Scoring'] },
    { name: 'AI Predictive Maintenance', price: '$599', period: '/month', marketPrice: '$1000-4000', features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'] },
    { name: 'AI Language Translation', price: '$149', period: '/month', marketPrice: '$250-1000', features: ['Real-time Translation', 'Multi-language Support', 'Context Understanding', 'Voice Translation'] },
    { name: 'AI Voice Recognition', price: '$299', period: '/month', marketPrice: '$500-2000', features: ['Speech-to-Text', 'Voice Commands', 'Speaker Identification', 'Noise Cancellation'] },
    { name: 'AI Data Processing', price: '$199', period: '/month', marketPrice: '$350-1500', features: ['Data Cleaning', 'Validation Rules', 'Duplicate Detection', 'Data Enrichment'] },
    { name: 'AI Cybersecurity', price: '$799', period: '/month', marketPrice: '$1500-5000', features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Scanning'] },
    { name: 'AI Scheduling Assistant', price: '$99', period: '/month', marketPrice: '$150-600', features: ['Smart Scheduling', 'Meeting Optimization', 'Conflict Resolution', 'Time Zone Management'] }
  ];
  const itServices = [
    { name: 'Cloud Infrastructure & Migration', price: '$2,500', period: '/month', marketPrice: '$4000-15000', features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery'] },
    { name: 'Cybersecurity Solutions', price: '$1,800', period: '/month', marketPrice: '$3000-12000', features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring'] },
    { name: 'Database Management', price: '$1,200', period: '/month', marketPrice: '$2000-8000', features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'] },
    { name: 'DevOps & CI/CD', price: '$2,200', period: '/month', marketPrice: '$3500-10000', features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'] },
    { name: 'IT Consulting', price: '$200', period: '/hour', marketPrice: '$300-800', features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation'] },
    { name: 'Custom Software Development', price: '$150', period: '/hour', marketPrice: '$200-500', features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization'] },
    { name: 'Mobile App Development', price: '$8,000', period: '/project', marketPrice: '$15000-50000', features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications'] },
    { name: 'Web Development', price: '$5,000', period: '/project', marketPrice: '$10000-30000', features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning'] },
    { name: 'Network Infrastructure', price: '$1,500', period: '/month', marketPrice: '$2500-8000', features: ['Network Design & Implementation', 'Wireless Solutions', 'Security Configuration', 'Performance Monitoring'] },
    { name: 'IT Support & Helpdesk', price: '$99', period: '/user/month', marketPrice: '$150-300', features: ['24/7 Helpdesk Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Installation'] },
    { name: 'IT Asset Management', price: '$299', period: '/month', marketPrice: '$500-1500', features: ['Asset Inventory', 'Lifecycle Management', 'Procurement Services', 'Deployment Planning'] },
    { name: 'Business Intelligence & Analytics', price: '$799', period: '/month', marketPrice: '$1200-4000', features: ['Data Visualization', 'Dashboard Creation', 'Report Automation', 'Data Integration'] },
    { name: 'Data Backup & Recovery', price: '$199', period: '/month', marketPrice: '$350-1200', features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Offsite Storage'] },
    { name: 'System Administration', price: '$1,000', period: '/month', marketPrice: '$1500-5000', features: ['Server Management', 'User Account Management', 'Security Updates', 'Performance Monitoring'] },
    { name: 'Performance Optimization', price: '$1,200', period: '/month', marketPrice: '$2000-6000', features: ['Application Optimization', 'Database Tuning', 'Infrastructure Scaling', 'Load Testing'] }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', price: '$89', period: '/month', marketPrice: '$150-500', features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors'] },
    { name: 'Zion Chat AI', price: '$149', period: '/month', marketPrice: '$300-800', features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing'] },
    { name: 'Zion Invoice Genius', price: '$49', period: '/month', marketPrice: '$100-300', features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking'] },
    { name: 'Zion Lead Magnet', price: '$99', period: '/month', marketPrice: '$200-600', features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration'] },
    { name: 'Zion Security Shield', price: '$199', period: '/month', marketPrice: '$400-1200', features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'] },
    { name: 'Zion Cloud Vault', price: '$79', period: '/month', marketPrice: '$150-400', features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'] },
    { name: 'Zion Content Studio', price: '$129', period: '/month', marketPrice: '$250-600', features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar'] },
    { name: 'Zion CRM Intelligence', price: '$179', period: '/month', marketPrice: '$300-800', features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting'] },
    { name: 'Zion Data Sync', price: '$149', period: '/month', marketPrice: '$250-700', features: ['Real-time Data Sync', 'Multi-source Integration', 'Data Transformation', 'Error Handling'] },
    { name: 'Zion Project Master', price: '$99', period: '/month', marketPrice: '$200-500', features: ['AI Task Allocation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration'] },
    { name: 'Zion Email Automation', price: '$89', period: '/month', marketPrice: '$150-400', features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers'] },
    { name: 'Zion Inventory Smart', price: '$159', period: '/month', marketPrice: '$300-800', features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Supplier Integration'] },
    { name: 'Zion Workflow Automation', price: '$119', period: '/month', marketPrice: '$200-600', features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation'] },
    { name: 'Zion Performance Monitor', price: '$139', period: '/month', marketPrice: '$250-700', features: ['Real-time Monitoring', 'AI-powered Alerts', 'Performance Analytics', 'Uptime Tracking'] },
    { name: 'Zion Compliance Manager', price: '$199', period: '/month', marketPrice: '$400-1000', features: ['Compliance Tracking', 'Automated Reporting', 'Document Management', 'Audit Trail'] },
    { name: 'Zion Social Scheduler', price: '$79', period: '/month', marketPrice: '$150-400', features: ['AI Content Suggestions', 'Multi-platform Scheduling', 'Performance Analytics', 'Engagement Tracking'] },
    { name: 'Zion AI Video Editor', price: '$99', period: '/month', marketPrice: '$200-500', features: ['AI Auto-editing', 'Voice Transcription', 'Subtitle Generation', 'Thumbnail Creation'] },
    { name: 'Zion AI Translator Pro', price: '$69', period: '/month', marketPrice: '$120-300', features: ['Real-time Translation', 'Document Translation', 'Voice Translation', 'Context Awareness'] },
    { name: 'Zion AI Code Reviewer', price: '$149', period: '/month', marketPrice: '$250-600', features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practice Suggestions'] },
    { name: 'Zion Customer Insights Pro', price: '$189', period: '/month', marketPrice: '$350-800', features: ['Customer Segmentation', 'Behavioral Analysis', 'Predictive Analytics', 'Churn Prediction'] },
    { name: 'Zion AI Email Assistant', price: '$59', period: '/month', marketPrice: '$100-250', features: ['Smart Email Sorting', 'AI Response Suggestions', 'Email Scheduling', 'Priority Detection'] },
    { name: 'Zion AI Meeting Assistant', price: '$89', period: '/month', marketPrice: '$150-400', features: ['Meeting Transcription', 'Action Item Extraction', 'Follow-up Automation', 'Meeting Analytics'] },
    { name: 'Zion AI SEO Optimizer', price: '$129', period: '/month', marketPrice: '$250-600', features: ['Content Analysis', 'Keyword Optimization', 'Ranking Tracking', 'Competitor Analysis'] },
    { name: 'Zion AI Data Cleaner', price: '$79', period: '/month', marketPrice: '$150-400', features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Quality Scoring'] },
    { name: 'Zion AI Contract Analyzer', price: '$199', period: '/month', marketPrice: '$400-1000', features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction'] },
    { name: 'Zion AI Survey Builder', price: '$69', period: '/month', marketPrice: '$120-300', features: ['AI Question Suggestions', 'Multi-format Surveys', 'Real-time Analytics', 'Response Analysis'] },
    { name: 'Zion AI Accounting Assistant', price: '$149', period: '/month', marketPrice: '$250-600', features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Analysis', 'Tax Preparation'] },
    { name: 'Zion AI Recruitment Pro', price: '$179', period: '/month', marketPrice: '$300-800', features: ['AI Candidate Screening', 'Resume Analysis', 'Skill Matching', 'Interview Scheduling'] },
    { name: 'Zion AI Content Moderation', price: '$159', period: '/month', marketPrice: '$300-700', features: ['Automated Content Filtering', 'Sentiment Analysis', 'Compliance Checking', 'Real-time Monitoring'] },
    { name: 'Zion AI Predictive Maintenance', price: '$199', period: '/month', marketPrice: '$400-1000', features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'] },
    { name: 'Zion AI Energy Manager', price: '$129', period: '/month', marketPrice: '$250-600', features: ['Energy Monitoring', 'Consumption Analysis', 'Cost Optimization', 'Predictive Analytics'] },
    { name: 'Zion AI Supply Chain Optimizer', price: '$219', period: '/month', marketPrice: '$400-1000', features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment'] },
    { name: 'Zion AI Fraud Detector', price: '$249', period: '/month', marketPrice: '$500-1500', features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts'] },
    { name: 'Zion AI Customer Service Pro', price: '$189', period: '/month', marketPrice: '$350-800', features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base'] },
    { name: 'Zion AI Marketing Automation', price: '$159', period: '/month', marketPrice: '$300-700', features: ['Campaign Automation', 'Personalization Engine', 'Lead Scoring', 'A/B Testing'] },
    { name: 'Zion AI Document AI', price: '$139', period: '/month', marketPrice: '$250-600', features: ['Document OCR', 'Data Extraction', 'Form Processing', 'Document Classification'] }
  ];
  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'saas': return microSaasServices;
      default: return aiServices;
    }
  };

  const getTabIcon = (tab: string) => {
    switch (tab) {
      case 'ai': return Brain;
      case 'it': return Cloud;
      case 'saas': return Cpu;
      default: return Brain;
    }
  };

  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
description: 'Perfect for small businesses getting started with AI and IT',
      features: [
        '2 AI Services Included',
        'Basic Cloud Infrastructure',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics Dashboard',
        'Up to 5 Users'
      ],
      popular: false;,},
    {name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
features: [
        '5 AI Services Included',
        'Advanced IT Solutions',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'API Access',
        'Training Sessions',
        'Up to 25 Users'
      ],
      popular: true;,},
    {name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
features: [
        'Unlimited AI Services',
        'Custom IT Solutions',
        'Dedicated Team',
        '24/7 Support',
        'Real-time Monitoring',
        'Custom Integrations',
        'White-label Options',
        'On-site Training',
        'SLA Guarantee',
        'Unlimited Users'
      ],
popular: false
    }
  ];
  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">,</h1>
                Transparent Pricing;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Choose the perfect plan for your business needs. All plans include our core AI and IT services.</p>
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
              {plans.map((plan, index) => (
                <div;
                  key={index}className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular;
                      ? 'border-cyan-400/50 scale-105' 
                      : 'border-white/10 hover: border-cyan-400/30',}`}
                >{plan.popular && (</div>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">Most Popular;</div>
                    </div>
                  )} <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description</p>}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${plan.price</span>}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature} </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover: from-cyan-600 hover:to-purple-600',
                      : 'bg-white/10 text-white hover: bg-white/20',}`}>{plan.popular ? 'Get Started' : 'Choose Plan'</button>} </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">We offer tailored AI and IT solutions for enterprise clients. Contact us for a personalized quote.</p>
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover: from-cyan-600 hover:to-purple-600 transition-all duration-300">,</button>
                Contact Sales;
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
