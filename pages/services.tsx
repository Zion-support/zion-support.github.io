




import React from 'react';




import React from 'react';

import Link from 'next/link';

export default function Services() {
type Service = {
type Service = {;
  name: string;
  summary: string;
  pricing: string;
  link: string;
}
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'LLM Evaluation & Safety Suite'
    summary: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Customer Feedback & NPS Micro-App'
    summary: 'Embed surveys, analyze sentiment and route issues to the right team automatically.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'API Rate Limiter & Analytics'
    summary: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Document Processing'
    summary: 'AI-powered OCR, data extraction, and document workflow automation for businesses.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Social Media Scheduler Pro'
    summary: 'Multi-platform scheduling, content optimization, and engagement analytics.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Email Deliverability Monitor'
    summary: 'Real-time email reputation tracking, bounce analysis, and deliverability optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Website Performance Optimizer'
    summary: 'Automated Core Web Vitals monitoring, optimization suggestions, and performance alerts.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Lead Scoring & Qualification'
    summary: 'AI-powered lead scoring, qualification workflows, and CRM integration.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Inventory Management AI'
    summary: 'Predictive inventory optimization, demand forecasting, and automated reordering.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Employee Productivity Tracker'
    summary: 'Non-invasive productivity analytics, time tracking, and performance insights.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Competitor Price Monitor'
    summary: 'Real-time competitor pricing tracking, alerts, and dynamic pricing recommendations.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'SEO Content Optimizer'
    summary: 'AI-powered content optimization, keyword research, and SERP tracking.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Customer Churn Predictor'
    summary: 'Machine learning models to predict and prevent customer churn with actionable insights.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Automated A/B Testing Platform'
    summary: 'Statistical significance testing, multivariate experiments, and conversion optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Invoice Processing & AP Automation'
    summary: 'AI-powered invoice extraction, approval workflows, and automated payment processing.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Real-time Collaboration Workspace'
    summary: 'Virtual whiteboards, document collaboration, and team productivity analytics.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Code Review Assistant'
    summary: 'Automated code quality analysis, security scanning, and performance optimization suggestions.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Dynamic Pricing Optimization Engine'
    summary: 'Real-time pricing adjustments based on demand, competition, and market conditions.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Contract Management System'
    summary: 'Contract lifecycle management, renewal tracking, and compliance monitoring.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered HR Analytics Platform'
    summary: 'Employee performance insights, retention prediction, and workforce optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Supply Chain Monitor'
    summary: 'Real-time supply chain visibility, risk assessment, and disruption alerts.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Energy Management System'
    summary: 'IoT-based energy monitoring, optimization, and cost reduction for facilities.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Legal Document Analyzer'
    summary: 'Contract analysis, risk assessment, and compliance checking for legal teams.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Dynamic Content Personalization Engine'
    summary: 'Real-time content customization based on user behavior and preferences.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Facility Management Platform'
    summary: 'IoT sensors, predictive maintenance, and automated facility operations.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Market Research Assistant'
    summary: 'Competitive intelligence, trend analysis, and market opportunity identification.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Onboarding Platform'
    summary: 'Automated onboarding workflows, progress tracking, and success optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Compliance Monitoring System'
    summary: 'Automated compliance checking, audit preparation, and regulatory reporting.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Financial Planning Tool'
    summary: 'Budget forecasting, expense optimization, and financial health monitoring.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Dynamic Workforce Scheduling System'
    summary: 'AI-optimized scheduling, shift management, and labor cost optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Quality Assurance Platform'
    summary: 'Automated testing, quality metrics, and continuous improvement recommendations.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Vendor Management System'
    summary: 'Vendor performance tracking, risk assessment, and relationship optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Knowledge Management Platform'
    summary: 'AI-powered search, content organization, and knowledge sharing optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Email Marketing Automation'
    summary: 'Intelligent email campaigns, personalization, and automated follow-up sequences.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Appointment Scheduling System'
    summary: 'AI-optimized scheduling, calendar integration, and automated reminders.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Real-Time Customer Feedback Analytics'
    summary: 'Sentiment analysis, feedback categorization, and actionable insights dashboard.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Social Media Manager'
    summary: 'Content scheduling, engagement optimization, and performance analytics.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Expense Management & Receipt OCR'
    summary: 'Automated expense tracking, receipt processing, and compliance reporting.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Talent Acquisition Platform'
    summary: 'Resume screening, candidate matching, and interview scheduling automation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Project Management Assistant'
    summary: 'Task automation, resource allocation, and deadline prediction.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Onboarding Automation'
    summary: 'Personalized onboarding flows, progress tracking, and success optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Content Moderation System'
    summary: 'Automated content filtering, toxicity detection, and community management.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Dynamic Pricing Intelligence Platform'
    summary: 'Real-time market analysis, competitor tracking, and pricing optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Inventory Forecasting Engine'
    summary: 'Demand prediction, stock optimization, and automated reorder management.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Customer Success Platform'
    summary: 'Health scoring, churn prediction, and automated intervention workflows.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Document Workflow Automation'
    summary: 'Document routing, approval processes, and compliance tracking.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Analytics Dashboard Builder'
    summary: 'No-code dashboard creation, data visualization, and KPI tracking.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Lead Generation Engine'
    summary: 'Prospect identification, contact enrichment, and outreach automation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent A/B Testing Platform'
    summary: 'Statistical significance testing, multivariate experiments, and optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Compliance Monitoring System'
    summary: 'Regulatory tracking, audit preparation, and compliance reporting automation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Video Content Analyzer'
    summary: 'Video transcription, sentiment analysis, and engagement metrics.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Workflow Orchestration Platform'
    summary: 'Process automation, task routing, and business logic management.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Segmentation Engine'
    summary: 'Behavioral analysis, persona creation, and targeted marketing automation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Voice Analytics Platform'
    summary: 'Call transcription, sentiment analysis, and conversation insights.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Resource Planning System'
    summary: 'Capacity planning, resource optimization, and utilization tracking.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Contract Lifecycle Manager'
    summary: 'Contract analysis, renewal tracking, and compliance monitoring.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Market Intelligence Platform'
    summary: 'Competitive analysis, trend monitoring, and opportunity identification.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Journey Mapping'
    summary: 'Touchpoint analysis, conversion optimization, and experience enhancement.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Data Quality Management'
    summary: 'Data validation, cleansing, and quality monitoring automation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Personalization Engine'
    summary: 'Real-time content customization, product recommendations, and user experience optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Incident Response System'
    summary: 'Automated incident detection, escalation, and resolution workflows.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Vendor Performance Tracker'
    summary: 'Vendor analytics, performance scoring, and relationship management.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Content Creation Suite'
    summary: 'Automated content generation, optimization, and multi-channel distribution.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Business Intelligence Platform'
    summary: 'Advanced analytics, predictive insights, and executive reporting automation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Support Ticket Router'
    summary: 'Intelligent ticket classification, priority assignment, and agent matching.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Financial Planning Assistant'
    summary: 'Budget forecasting, expense optimization, and financial health monitoring.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Supply Chain Risk Monitor'
    summary: 'Risk assessment, disruption prediction, and mitigation strategy recommendations.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Employee Engagement Platform'
    summary: 'Sentiment analysis, engagement tracking, and retention optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Quality Assurance System'
    summary: 'Automated testing, defect detection, and quality metrics tracking.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Document Security Platform'
    summary: 'Document encryption, access control, and security monitoring.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Energy Consumption Optimizer'
    summary: 'Energy usage analysis, cost optimization, and sustainability reporting.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Customer Lifetime Value Predictor'
    summary: 'CLV modeling, segmentation, and retention strategy optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Workflow Analytics Platform'
    summary: 'Process mining, bottleneck identification, and efficiency optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Feedback Loop Manager'
    summary: 'Feedback collection, analysis, and action item tracking automation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Sales Forecasting Engine'
    summary: 'Revenue prediction, pipeline analysis, and quota optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Asset Management System'
    summary: 'Asset tracking, maintenance scheduling, and lifecycle optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Communication Platform'
    summary: 'Multi-channel communication, response optimization, and engagement tracking.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Business Process Optimizer'
    summary: 'Process analysis, automation recommendations, and efficiency improvements.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Health Scoring'
    summary: 'Health metrics, risk assessment, and proactive intervention triggers.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Data Integration Platform'
    summary: 'Data pipeline automation, transformation, and synchronization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Competitive Intelligence System'
    summary: 'Market monitoring, competitor analysis, and strategic insights.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Onboarding Optimizer'
    summary: 'Onboarding flow analysis, conversion optimization, and success tracking.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Revenue Recognition Platform'
    summary: 'Automated revenue tracking, compliance reporting, and financial analytics.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Customer Segmentation Engine'
    summary: 'Advanced segmentation, persona development, and targeting optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Document Collaboration Platform'
    summary: 'Real-time collaboration, version control, and workflow management.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Success Metrics Tracker'
    summary: 'KPI monitoring, success scoring, and intervention automation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Lead Nurturing Automation'
    summary: 'Personalized nurturing sequences, engagement scoring, and conversion optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Business Continuity Manager'
    summary: 'Disaster recovery planning, risk assessment, and continuity monitoring.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Feedback Analytics'
    summary: 'Sentiment analysis, trend identification, and actionable insight generation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Content Performance Optimizer'
    summary: 'Content analysis, performance tracking, and optimization recommendations.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Journey Optimizer'
    summary: 'Journey mapping, touchpoint analysis, and experience enhancement.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Vendor Relationship Manager'
    summary: 'Vendor performance tracking, contract management, and relationship optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Customer Retention Engine'
    summary: 'Churn prediction, retention strategies, and loyalty program optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Business Intelligence Dashboard'
    summary: 'Real-time analytics, predictive insights, and executive reporting.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Support Analytics'
    summary: 'Support metrics, agent performance, and customer satisfaction optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Customer Acquisition Platform'
    summary: 'Lead generation, conversion optimization, and acquisition cost reduction.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Data Platform'
    summary: 'Data unification, customer profiles, and 360-degree view creation.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Experience Manager'
    summary: 'Experience monitoring, optimization, and satisfaction improvement.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Customer Insights Engine'
    summary: 'Behavioral analysis, preference learning, and predictive customer modeling.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Engagement Platform'
    summary: 'Engagement scoring, personalization, and interaction optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Success Automation'
    summary: 'Success tracking, intervention triggers, and outcome optimization.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Customer Analytics Suite'
    summary: 'Advanced analytics, segmentation, and customer intelligence.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Relationship Optimizer'
    summary: 'Relationship scoring, interaction optimization, and loyalty enhancement.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Smart Customer Value Maximizer'
    summary: 'Value optimization, upselling automation, and revenue enhancement.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'AI-Powered Customer Intelligence Platform'
    summary: 'Customer profiling, behavior prediction, and strategic insights.'
    link: 'https://ziontechgroup.com/micro-saas'}
  {
    name: 'Intelligent Customer Optimization Engine'
    summary: 'End-to-end customer optimization, lifecycle management, and value maximization.'
    link: 'https://ziontechgroup.com/micro-saas'}
];
const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation'
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Predictive Analytics & Forecasting'
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'GenAI Content & SEO Automation'
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Computer Vision & Image Analysis'
    summary: 'Object detection, facial recognition, quality control, and medical imaging analysis.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Natural Language Processing Suite'
    summary: 'Sentiment analysis, entity extraction, text classification, and language translation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Fraud Detection'
    summary: 'Real-time fraud scoring, anomaly detection, and risk assessment for financial transactions.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Recommendation Engine Platform'
    summary: 'Personalized product recommendations, content suggestions, and user behavior analysis.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Voice AI & Speech Processing'
    summary: 'Speech-to-text, text-to-speech, voice commands, and conversational AI interfaces.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI Data Pipeline Automation'
    summary: 'Automated data cleaning, feature engineering, model training, and deployment pipelines.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Document Analysis'
    summary: 'Contract analysis, legal document review, compliance checking, and knowledge extraction.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Supply Chain Optimization'
    summary: 'Demand forecasting, route optimization, inventory management, and supplier risk assessment.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Conversational AI Platform'
    summary: 'Multi-channel chatbots, voice assistants, and intelligent virtual agents.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI Model Monitoring & MLOps'
    summary: 'Model performance tracking, drift detection, automated retraining, and deployment management.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Process Automation'
    summary: 'RPA with AI, workflow automation, document processing, and business process optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Market Research'
    summary: 'Competitive intelligence, trend analysis, consumer sentiment, and market forecasting.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Edge AI & IoT Intelligence'
    summary: 'Real-time inference on edge devices, IoT data processing, and distributed AI systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Cybersecurity Threat Detection'
    summary: 'Advanced threat hunting, behavioral analysis, and automated incident response.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Process Mining & Optimization'
    summary: 'Business process discovery, bottleneck identification, and workflow optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Content Moderation Platform'
    summary: 'Automated content filtering, toxicity detection, and community management.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Smart Manufacturing Quality Control'
    summary: 'Computer vision for defect detection, predictive maintenance, and quality optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Healthcare Diagnostics'
    summary: 'Medical image analysis, symptom prediction, and treatment recommendation systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Document Intelligence Platform'
    summary: 'Advanced document understanding, information extraction, and knowledge graph creation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Risk Assessment Engine'
    summary: 'Credit scoring, insurance underwriting, and financial risk modeling.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Smart Energy Grid Optimization'
    summary: 'Demand forecasting, load balancing, and renewable energy integration.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Personalization Engine'
    summary: 'Real-time user profiling, content recommendation, and experience optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Automation Orchestration'
    summary: 'RPA with AI decision-making, workflow automation, and process intelligence.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Environmental Monitoring'
    summary: 'Climate data analysis, pollution detection, and environmental impact assessment.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Smart Transportation Optimization'
    summary: 'Route optimization, traffic prediction, and fleet management intelligence.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Agricultural Intelligence'
    summary: 'Crop monitoring, yield prediction, and precision farming optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Customer Journey Analytics'
    summary: 'Behavioral analysis, journey mapping, and conversion optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Real Estate Valuation'
    summary: 'Property assessment, market analysis, and investment opportunity identification.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Smart Retail Analytics Platform'
    summary: 'Customer behavior analysis, inventory optimization, and sales forecasting.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Educational Assessment'
    summary: 'Learning analytics, personalized education, and performance prediction.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Financial Trading Algorithms'
    summary: 'Algorithmic trading, market prediction, and portfolio optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Smart City Solutions'
    summary: 'Urban planning optimization, traffic management, and resource allocation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Quantum Computing Solutions'
    summary: 'Quantum algorithms for optimization, cryptography, and complex problem solving.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced Neural Network Architectures'
    summary: 'Custom deep learning models, transformer networks, and specialized AI architectures.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Drug Discovery Platform'
    summary: 'Molecular analysis, drug interaction prediction, and pharmaceutical research automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Autonomous Systems'
    summary: 'Self-driving algorithms, robotic process automation, and autonomous decision making.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Financial Trading Algorithms'
    summary: 'Algorithmic trading, market prediction, and automated portfolio management.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced Natural Language Generation'
    summary: 'GPT-style content creation, automated reporting, and intelligent document generation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Scientific Research Assistant'
    summary: 'Literature analysis, hypothesis generation, and research automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Multi-Modal AI Systems'
    summary: 'Vision-language models, audio-visual processing, and cross-modal understanding.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Space Technology Solutions'
    summary: 'Satellite data analysis, space mission optimization, and astronomical research.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced Reinforcement Learning Systems'
    summary: 'Game AI, optimization algorithms, and adaptive learning systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Metaverse Development'
    summary: 'Virtual world creation, avatar intelligence, and immersive experience optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Blockchain Analytics'
    summary: 'Cryptocurrency analysis, smart contract optimization, and DeFi intelligence.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Climate Change Solutions'
    summary: 'Climate modeling, carbon footprint optimization, and environmental impact prediction.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced Computer Vision for Robotics'
    summary: 'Robot vision systems, object manipulation, and autonomous navigation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Mental Health Analytics'
    summary: 'Emotional analysis, mental health prediction, and therapeutic intervention systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Energy Storage Optimization'
    summary: 'Battery management, grid storage optimization, and renewable energy integration.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Smart City Infrastructure'
    summary: 'Urban planning optimization, traffic management, and city service automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced AI Ethics & Bias Detection'
    summary: 'Algorithmic fairness, bias detection, and ethical AI implementation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Cybersecurity Intelligence'
    summary: 'Advanced threat detection, zero-day vulnerability analysis, and security automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent Digital Twin Technology'
    summary: 'Virtual replicas, predictive maintenance, and real-time system optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Augmented Reality Solutions'
    summary: 'AR object recognition, spatial computing, and immersive experience creation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced AI Model Compression'
    summary: 'Model optimization, edge deployment, and efficient AI inference.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Supply Chain Intelligence'
    summary: 'End-to-end visibility, disruption prediction, and optimization across global networks.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI Model Governance'
    summary: 'Model lifecycle management, compliance monitoring, and AI governance frameworks.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Personalized Medicine'
    summary: 'Genomic analysis, treatment optimization, and precision healthcare delivery.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Advanced AI-Powered Education Systems'
    summary: 'Personalized learning, adaptive assessment, and intelligent tutoring systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Smart Manufacturing 4.0'
    summary: 'Industrial IoT intelligence, predictive maintenance, and autonomous production.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Legal Tech'
    summary: 'Contract analysis, legal research automation, and case outcome prediction.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Materials Discovery'
    summary: 'Material property prediction, composition optimization, and novel material design.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Sports Analytics'
    summary: 'Performance optimization, injury prediction, and strategic decision support.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Robotics'
    summary: 'Humanoid robots, collaborative automation, and intelligent robotic systems.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Gaming Systems'
    summary: 'Procedural content generation, intelligent NPCs, and adaptive gameplay.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Biometrics'
    summary: 'Multi-modal authentication, behavioral analysis, and identity verification.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Logistics'
    summary: 'Route optimization, warehouse automation, and last-mile delivery intelligence.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Simulation Systems'
    summary: 'Physics simulation, virtual testing, and scenario modeling.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Content Creation'
    summary: 'Multi-modal content generation, creative AI, and automated media production.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Data Science'
    summary: 'Automated feature engineering, model selection, and advanced analytics.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Customer Intelligence'
    summary: 'Advanced customer profiling, behavior prediction, and relationship optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Process Mining'
    summary: 'Business process discovery, optimization, and intelligent automation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Decision Support'
    summary: 'Strategic decision making, scenario analysis, and intelligent recommendations.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Predictive Analytics'
    summary: 'Multi-variate forecasting, anomaly detection, and predictive insights.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Knowledge Management'
    summary: 'Automated knowledge extraction, semantic search, and intelligent information retrieval.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Optimization'
    summary: 'Multi-objective optimization, constraint solving, and intelligent resource allocation.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Innovation Systems'
    summary: 'Idea generation, innovation management, and creative problem solving.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Human-Computer Interaction'
    summary: 'Natural language interfaces, gesture recognition, and intelligent user experience.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Quality Assurance'
    summary: 'Automated testing, defect prediction, and quality optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Security Systems'
    summary: 'Threat intelligence, security automation, and intelligent incident response.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Performance Optimization'
    summary: 'System optimization, resource management, and intelligent scaling.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Integration Systems'
    summary: 'API intelligence, data integration, and intelligent system connectivity.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Monitoring Systems'
    summary: 'Real-time monitoring, anomaly detection, and intelligent alerting.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Analytics Platform'
    summary: 'Multi-dimensional analysis, pattern recognition, and intelligent insights.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'Intelligent AI-Powered Automation Suite'
    summary: 'End-to-end automation, intelligent workflows, and process optimization.'
    link: 'https://ziontechgroup.com/ai-services'}
  {
    name: 'AI-Powered Advanced Intelligence Platform'
    summary: 'Comprehensive AI solutions, intelligent decision making, and strategic insights.'
    link: 'https://ziontechgroup.com/ai-services'}
];
const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE'
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Cybersecurity Hardening & SOC'
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Cloud Migration & Modernization'
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Multi-Cloud Architecture Design'
    summary: 'Hybrid cloud strategies, disaster recovery, and multi-region deployment architectures.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Kubernetes & Container Orchestration'
    summary: 'EKS/GKE/AKS setup, microservices architecture, and container security hardening.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Database Optimization & Migration'
    summary: 'Performance tuning, scaling strategies, and cloud database migration services.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'API Gateway & Microservices'
    summary: 'API design, rate limiting, authentication, and microservices architecture implementation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Infrastructure as Code (IaC)'
    summary: 'Terraform, CloudFormation, and Pulumi implementations for automated infrastructure management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Monitoring & Observability Platform'
    summary: 'ELK stack, Prometheus/Grafana, APM tools, and comprehensive logging solutions.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Backup & Disaster Recovery'
    summary: 'Automated backup strategies, cross-region replication, and disaster recovery testing.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Network Security & VPN Solutions'
    summary: 'VPN setup, network segmentation, firewall configuration, and secure remote access.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Compliance & Audit Services'
    summary: 'SOC 2, HIPAA, GDPR compliance assessments, and security audit preparation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Performance Testing & Optimization'
    summary: 'Load testing, stress testing, performance profiling, and optimization recommendations.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Mobile App Development & DevOps'
    summary: 'iOS/Android app development, CI/CD for mobile, and app store deployment automation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Blockchain & Web3 Integration'
    summary: 'Smart contract development, DeFi integration, and blockchain infrastructure setup.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Data Engineering & Analytics'
    summary: 'Data pipeline development, ETL processes, data warehousing, and analytics platform setup.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Application Integration'
    summary: 'API integration, middleware development, and legacy system modernization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Threat Intelligence Platform'
    summary: 'SIEM implementation, threat hunting, and security orchestration automation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'High-Performance Computing Solutions'
    summary: 'GPU clusters, parallel processing, and scientific computing infrastructure.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'IoT Platform & Device Management'
    summary: 'IoT device connectivity, data collection, and edge computing solutions.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Analytics & Business Intelligence'
    summary: 'Data visualization, predictive analytics, and executive dashboards.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Content Management System'
    summary: 'Document management, workflow automation, and digital asset management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Network Architecture Design'
    summary: 'SD-WAN, network segmentation, and zero-trust network implementation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Resource Planning (ERP) Implementation'
    summary: 'ERP system selection, customization, and integration with existing systems.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Identity & Access Management'
    summary: 'SSO implementation, multi-factor authentication, and privileged access management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Service Bus (ESB) Architecture'
    summary: 'Message queuing, service orchestration, and enterprise integration patterns.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Database Administration'
    summary: 'Database optimization, clustering, replication, and disaster recovery.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Workflow Automation'
    summary: 'Business process automation, approval workflows, and task management systems.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Cloud Security Architecture'
    summary: 'Cloud security posture management, compliance automation, and threat protection.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise API Management Platform'
    summary: 'API gateway, developer portal, and API lifecycle management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Monitoring & Alerting Systems'
    summary: 'Application performance monitoring, infrastructure monitoring, and alerting automation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Backup & Archival Solutions'
    summary: 'Automated backup strategies, data archival, and long-term retention policies.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Load Balancing & Traffic Management'
    summary: 'Global load balancing, traffic routing, and application delivery optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Messaging & Communication Platform'
    summary: 'Unified communications, video conferencing, and collaboration tools integration.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Virtualization & Containerization'
    summary: 'VMware/vSphere, Docker, Kubernetes, and hybrid cloud container orchestration.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Digital Transformation Consulting'
    summary: 'Technology strategy, digital roadmap, and organizational change management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Quantum Computing Infrastructure Setup'
    summary: 'Quantum hardware integration, quantum software development, and quantum algorithm implementation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Edge Computing & IoT Platform Development'
    summary: 'Edge infrastructure, IoT device management, and real-time data processing systems.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Blockchain & Web3 Solutions'
    summary: 'Blockchain infrastructure, smart contract development, and DeFi platform creation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: '5G Network Infrastructure & Optimization'
    summary: '5G deployment, network slicing, and mobile edge computing solutions.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Cybersecurity & Zero Trust Architecture'
    summary: 'Zero trust implementation, advanced threat protection, and security orchestration.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'AI/ML Infrastructure & MLOps Platform'
    summary: 'ML pipeline development, model deployment, and AI infrastructure management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Data Engineering & Analytics Platform'
    summary: 'Data lake architecture, real-time analytics, and advanced data processing systems.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'High-Performance Computing (HPC) Solutions'
    summary: 'HPC cluster setup, parallel processing optimization, and scientific computing infrastructure.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Microservices & API Architecture'
    summary: 'Microservices design, API gateway implementation, and service mesh architecture.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Integration & Middleware Solutions'
    summary: 'ESB implementation, API management, and enterprise service integration.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Database & Data Management'
    summary: 'Database optimization, data warehousing, and advanced data management solutions.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Disaster Recovery & Business Continuity'
    summary: 'DR planning, backup systems, and business continuity infrastructure.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Network Security & Monitoring'
    summary: 'Network security architecture, intrusion detection, and security monitoring systems.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Application Development'
    summary: 'Custom enterprise applications, legacy system modernization, and business process automation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Cloud Architecture & Migration'
    summary: 'Multi-cloud strategy, cloud-native architecture, and advanced migration services.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'IT Infrastructure Automation & Orchestration'
    summary: 'Infrastructure as Code, automated provisioning, and IT process automation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Monitoring & Observability Platform'
    summary: 'APM implementation, log management, and comprehensive system observability.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Identity & Access Management'
    summary: 'IAM implementation, SSO solutions, and advanced identity management systems.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Backup & Data Protection'
    summary: 'Backup strategy, data protection, and advanced recovery solutions.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'IT Service Management & ITSM Platform'
    summary: 'ITSM implementation, service desk automation, and IT process optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Network Architecture & Design'
    summary: 'Network design, optimization, and advanced networking solutions.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Content Management Systems'
    summary: 'ECM implementation, document management, and content workflow automation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Virtualization & Hyperconverged Infrastructure'
    summary: 'HCI implementation, advanced virtualization, and infrastructure optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'IT Compliance & Governance Solutions'
    summary: 'Compliance management, IT governance, and regulatory adherence systems.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced Storage & Data Management'
    summary: 'Storage architecture, data lifecycle management, and advanced storage solutions.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Mobile & Wireless Solutions'
    summary: 'Mobile device management, wireless infrastructure, and mobile application development.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Consulting & Strategy'
    summary: 'IT strategy development, technology assessment, and digital transformation planning.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Security Operations Center (SOC)'
    summary: 'SOC setup, security monitoring, and incident response automation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Infrastructure Management'
    summary: 'Infrastructure optimization, capacity planning, and performance management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Application Integration'
    summary: 'EAI implementation, system integration, and business process automation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Support & Managed Services'
    summary: '24/7 IT support, managed services, and comprehensive IT operations management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise Data Center Design & Implementation'
    summary: 'Data center planning, design, and implementation services.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Training & Knowledge Transfer'
    summary: 'IT training programs, knowledge transfer, and skill development services.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Audit & Assessment'
    summary: 'IT audit services, security assessment, and compliance evaluation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Project Management'
    summary: 'IT project management, program management, and delivery optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Vendor Management'
    summary: 'Vendor selection, contract management, and supplier relationship optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Cost Optimization'
    summary: 'IT cost analysis, optimization strategies, and budget management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Risk Management'
    summary: 'IT risk assessment, mitigation strategies, and risk management frameworks.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Performance Optimization'
    summary: 'Performance tuning, optimization, and system efficiency improvement.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Innovation & Emerging Technologies'
    summary: 'Technology innovation, emerging tech evaluation, and innovation strategy.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Security & Compliance'
    summary: 'Security implementation, compliance management, and regulatory adherence.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Operations & Maintenance'
    summary: 'IT operations management, maintenance services, and operational optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Architecture & Design'
    summary: 'IT architecture design, system design, and technical architecture planning.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Transformation & Modernization'
    summary: 'IT transformation, modernization, and digital evolution services.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Analytics & Business Intelligence'
    summary: 'IT analytics, business intelligence, and data-driven IT decision making.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Quality Assurance & Testing'
    summary: 'QA services, testing automation, and quality management systems.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Documentation & Knowledge Management'
    summary: 'Technical documentation, knowledge management, and information architecture.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Change Management'
    summary: 'Change management, organizational change, and IT transformation support.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Capacity Planning & Management'
    summary: 'Capacity planning, resource management, and scalability planning.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Service Level Management'
    summary: 'SLA management, service level optimization, and performance management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Incident & Problem Management'
    summary: 'Incident management, problem resolution, and IT service restoration.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Configuration Management'
    summary: 'Configuration management, asset management, and IT inventory optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Release & Deployment Management'
    summary: 'Release management, deployment automation, and change deployment.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Financial Management'
    summary: 'IT financial management, cost allocation, and budget optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Supplier & Vendor Management'
    summary: 'Supplier management, vendor optimization, and procurement services.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Relationship Management'
    summary: 'Stakeholder management, relationship optimization, and communication management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Strategic Planning'
    summary: 'IT strategy development, strategic planning, and technology roadmap creation.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Governance & Compliance'
    summary: 'IT governance, compliance management, and regulatory adherence.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Performance & Metrics Management'
    summary: 'Performance management, metrics optimization, and KPI management.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT Innovation & Technology Adoption'
    summary: 'Technology adoption, innovation management, and emerging technology integration.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Advanced IT Business Continuity & Disaster Recovery'
    summary: 'BC/DR planning, business continuity, and disaster recovery optimization.'
    link: 'https://ziontechgroup.com/it-services'}
  {
    name: 'Enterprise IT End-to-End Service Management'
    summary: 'Comprehensive IT service management, end-to-end optimization, and service excellence.'
  const Section = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 20px', }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24
        paddingBottom: 12, borderBottom: `2px solid ${color}20`
      }}>
        <div style={{
          width: 4, height: 32, background: color, borderRadius: 2
        }}></div>
        <h2 style={{
          fontSize: 28, fontWeight: 800, margin: 0
          background: `linear-gradient(135deg, ${color}, ${color}80)`
          WebkitBackgroundClip: 'text'
          WebkitTextFillColor: 'transparent'
          backgroundClip: 'text'
        }}>{title}</h2>
        <div style={{
          background: `${color}20`, color: color, padding: '4px 12px'
          borderRadius: 20, fontSize: 14, fontWeight: 600
        }}>
          {items.length} Services
        </div>
      </div>
      <div style={{
        display: 'grid'
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        gap: 20
      }}>
        {items.map((s) => (
          <a key={s.name} href={s.link} style={{
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 24
            background: 'white', textDecoration: 'none', color: '#0b1220'
            transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
            ':hover': {
              transform: 'translateY(-4px)'
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
              borderColor: `${color}40`
            }
              borderRadius: 8, display: 'inline-block'
            }}>{s && s.pricing}</div>;
          </a>;
        ))}
      </div>;
    </section>;
  );
  return (
            </div>
          </div>
        </div>
      </section>
      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />
      <Section title="AI Services & Platforms" items={aiServices} color="#8b5cf6" />
      <Section title="IT & Cloud Services" items={itServices} color="#22c55e" />
      {/* CTA Section */}
      <section style={{ 
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px',
        textAlign: 'center', background: 'white', marginTop: 40,
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{ 
          fontSize: 32, fontWeight: 700, marginBottom: 16,
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{ 
          fontSize: 18, color: '#64748b', marginBottom: 32,
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover 
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block', 
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', 
            color: 'white', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
}
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics",
    icon: Brain,
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import LoadingSpinner from '../components/LoadingSpinner';
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer)
  }, []);

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com',
  };

            </div>;
          </div>;
        </section>;

              <h1 className="text-4xl md:text-6xl font-bold mb-6">;
                Our Services;
              </h1>;
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">;
                Comprehensive technology solutions designed to transform your business and drive growth.;
              </p>;
              <div className="flex flex-wrap justify-center gap-4">;
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">;
                  Get Started;
                </button>;
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
                  View Pricing;
                </button>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;

          <div className="container mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                What We Offer;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200">;
                  <div className="flex items-center mb-4">;
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">;
                      <service && service.icon className="h-8 w-8 text-blue-600" />;
                    </div>;
                    <h3 className="text-xl font-semibold text-gray-900">;
                      {service && service.title}
                    </h3>;
                  </div>;
                  <p className="text-gray-600 mb-4">;
                    {service && service.description}
                  </p>;
                  <ul className="space-y-2 mb-6">;
                    {service && service.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />;
                        {feature}
                      </li>;
                    ))}
                  </ul>;
                  <div className="text-blue-600 font-semibold mb-4">;
                    {service && service.pricing}
                  </div>;
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">;
                    Learn More;
                  </button>;
                </motion && motion.div>;
              ))}
            </div>
          </div>
        </div>
      </section>




      <Section title="Micro SaaS Products" items={microSaaS} color="#3b82f6" />
      <Section title="AI Services & Platforms" items={aiServices} color="#8b5cf6" />
      <Section title="IT & Cloud Services" items={itServices} color="#22c55e" />
      {/* CTA Section */}
      <section style={{
        maxWidth: 1400, margin: '0 auto', padding: '60px 20px'
        textAlign: 'center', background: 'white', marginTop: 40
        borderRadius: 24, boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{
          fontSize: 32, fontWeight: 700, marginBottom: 16
          color: '#1e293b'
        }}>Ready to Get Started?</h2>
        <p style={{
          fontSize: 18, color: '#64748b', marginBottom: 32
          maxWidth: 600, margin: '0 auto 32px auto'
        }}>
          Contact our experts to discuss your project requirements and discover
          how our innovative solutions can drive your business forward.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block'
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
            color: 'white', padding: '16px 32px', borderRadius: 12
            fontWeight: 700, textDecoration: 'none', fontSize: 16
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block'
            background: 'rgba(34, 197, 94, 0.1)'
            color: '#22c55e', padding: '16px 32px', borderRadius: 12
            fontWeight: 700, textDecoration: 'none', fontSize: 16
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>
    description: "80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics"
    icon: Brain
export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);  }, []);
  const contact: ContactInfo = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    site: 'https://ziontechgroup.com'
  }
            </div>
          </div>
        </section>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Pricing
                </button>
              </div>
            </motion.div>
          </div>
        </section>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg - white p - 8 rounded - lg shadow - lg hover:shadow - xl transition - shadow border border - gray - 200";
                >;
                  <div className="flex items - center mb - 4">;
                    <div className="p - 3 bg - blue - 100 rounded - lg mr - 4">;
                      <service.icon className="h - 8 w - 8 text - blue - 600" />;
                    </div>;
                    <h3 className="text - xl font - semibold text - gray - 900">;
                      {service.title}
                    </h3>;
                  </div>;
                  <p className="text - gray - 600 mb - 4">;
                    {service.description}
                  </p>;
                  <ul className="space - y-2 mb - 6">;
                    {service.features.map ((feature, feature_index) => (
                      <li key={feature_index} className="flex items - center text - sm text - gray - 600">;
                        <CheckCircle className="h - 4 w - 4 text - green - 500 mr - 2" />;
                        {feature}
                      </li>))}
                  </ul>;
                  <div className="text - blue - 600 font - semibold mb - 4">;
                    {service.pricing}
            </div>
          </div>
        </section>


        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through our proven expertise and commitment to excellence.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
            </div>;
          </div>;
        </section>;

        <section className="py-20 bg-gray-50">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center mb-16">;
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
                Why Choose Us?;
              </h2>;
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                We deliver exceptional results through our proven expertise and commitment to excellence.;
              </p>;
            </motion && motion.div>;

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {benefits && benefits.map((benefit, index) => (;
                <motion&& motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  className="text-center p-6">;
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                    <benefit && benefit.icon className="h-8 w-8 text-blue-600" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                    {benefit && benefit.title}
                  </h3>;
                  <p className="text-gray-600">;
                    {benefit && benefit.description}
                  </p>;
                </motion && motion.div>;
              ))}
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
      title: 'Micro SaaS Products'
      description:
        'Innovative, focused software solutions for modern businesses'
      count: '150+'
      color: 'blue'
      services: [
        'AI-Powered Video Clip Maker'
        'Smart Contract Analyzer'
        'Cybersecurity Threat Intelligence'
        'Multi-Language Website Translator'
        'Predictive Inventory Optimizer'
        'Real-Time Analytics Dashboard'
        'Automated Customer Support'
        'Blockchain Transaction Monitor'
      ]
      href: '/micro-saas'
    }
    {
      title: 'AI Services'
      description:
        'Advanced artificial intelligence solutions for enterprise needs'
      count: '100+'
      color: 'purple'
      services: [
        'Autonomous AI Agents'
        'AI-Powered Financial Trading'
        'AI Legal Document Analysis'
        'AI-Powered Voice Analytics'
        'AI-Powered Search & Discovery'
        'Machine Learning Model Training'
        'Natural Language Processing'
        'Computer Vision Solutions'
      ]
      href: '/ai-services'
    }
    {
      id: 'it-services'
      name: 'IT & Cloud Services'
      description: 'Comprehensive IT solutions for enterprise-grade operations'
      services: [
        'Quantum Computing Consulting'
        'Blockchain & Web3 Solutions'
        'DevSecOps & Security Automation'
        'Enterprise Data Platform'
        'High-Performance Computing'
        'Cloud Migration Services'
        'Infrastructure as Code'
        'Disaster Recovery Solutions'
      ]
      href: '/it-services'
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
      category: 'AI Services',
      features: ['Process Automation', 'Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision', 'Robotic Process Automation'],
      pricing: {
        basic: 999,
        pro: 2999,
        enterprise: 9999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to optimize performance and reduce costs.',
      category: 'IT Solutions',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Cost Optimization', 'Disaster Recovery', 'Security Hardening'],
      pricing: {
        basic: 1999,
        pro: 4999,
        enterprise: 14999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
    },  ];
  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
      
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        ring: 'focus:ring-blue-500'
      
    },
    purple: {
        bg: 'bg-purple-600',
        hover: 'hover:bg-purple-700',
        text: 'text-purple-400',
        border: 'border-purple-500/40',
        ring: 'focus:ring-purple-500'
      };
      green: {
        bg: 'bg-green-600',
        hover: 'hover:bg-green-700',
        text: 'text-green-400',
        border: 'border-green-500/40',
        ring: 'focus:ring-green-500'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue
  };

      id: 'micro-saas',
      title: 'Micro SaaS Development',
      description: 'Focused software solutions that address specific business needs with minimal complexity.',
      category: 'Micro SaaS',
      features: ['Rapid Development', 'User-friendly Design', 'API Integration', 'Scalable Architecture', 'Multi-tenant Support', 'Analytics Dashboard'],
      pricing: {
        basic: 999,
        pro: 2999,
        enterprise: 9999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to optimize performance and reduce costs.',
      category: 'IT Solutions',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Cost Optimization', 'Disaster Recovery', 'Security Hardening'],
      pricing: {
        basic: 1999,
        pro: 4999,
        enterprise: 14999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Cutting-edge blockchain technology for secure, transparent, and decentralized applications.',
      category: 'Blockchain',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'Token Development', 'DApp Development', 'Blockchain Consulting'],
      pricing: {
        basic: 4999,
        pro: 12999,
        enterprise: 29999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];
  const categories = ['All', 'AI Services', 'IT Solutions', 'Micro SaaS', 'Security', 'Analytics', 'Blockchain'];
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center py-12">
        <main className="text-center max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6 gradient-text">Our Advanced Services</h1>
          <p className="text-xl text-gray-300 mb-8">
            At Zion Tech Group, we offer a comprehensive suite of IT and AI services designed to propel your business forward.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">AI & Machine Learning</h3>
              <p className="text-gray-400">
                Harness the power of artificial intelligence for automation, data analysis, and intelligent decision-making.
      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>

export default function Services() {;
  const serviceCategories = [;
    {;
      title: 'Micro SaaS Products',;
      description:;
        'Innovative, focused software solutions for modern businesses',;
      count: '150+',;
      color: 'blue',;
      services: [;
        'AI-Powered Video Clip Maker',;
        'Smart Contract Analyzer',;
        'Cybersecurity Threat Intelligence',;
        'Multi-Language Website Translator',;
        'Predictive Inventory Optimizer',;
        'Real-Time Analytics Dashboard',;
        'Automated Customer Support',;
        'Blockchain Transaction Monitor',;
      ],;
      href: '/micro-saas',;
    },;
    {;
      title: 'AI Services',;
      description:;
        'Advanced artificial intelligence solutions for enterprise needs',;
      count: '100+',;
      color: 'purple',;
      services: [;
        'Autonomous AI Agents',;
        'AI-Powered Financial Trading',;
        'AI Legal Document Analysis',;
        'AI-Powered Voice Analytics',;
        'AI-Powered Search & Discovery',;
        'Machine Learning Model Training',;
        'Natural Language Processing',;
        'Computer Vision Solutions',;
      ],;
      href: '/ai-services',;
    },;
    {;
      id: 'it-services',;
      name: 'IT & Cloud Services',;
      description: 'Comprehensive IT solutions for enterprise-grade operations',;
      services: [;
        'Quantum Computing Consulting',;
        'Blockchain & Web3 Solutions',;
        'DevSecOps & Security Automation',;
        'Enterprise Data Platform',;
        'High-Performance Computing',;
        'Cloud Migration Services',;
        'Infrastructure as Code',;
        'Disaster Recovery Solutions',;
      ],;
      href: '/it-services',;
    },  ];

  const getColorClasses = (color: string) => {;
    const colors = {;
      blue: {;

        bg: 'bg-blue-600',;
        hover: 'hover:bg-blue-700',;
        text: 'text-blue-400',;
        border: 'border-blue-500/40',;
        ring: 'focus:ring-blue-500',;
      },;
      purple: {        bg: 'bg-purple-600',;
        hover: 'hover:bg-purple-700',;
        text: 'text-purple-400',;
        border: 'border-purple-500/40',;
        ring: 'focus:ring-purple-500',;
      },      green: {;
        bg: 'bg-green-600',;
        hover: 'hover:bg-green-700',;
        text: 'text-green-400',;
        border: 'border-green-500/40',;
        ring: 'focus:ring-green-500',;
      },;
    };
    return colors[color as keyof typeof colors] || colors && colors.blue;  };

  return (
    <>;
      <Head>;
        <title>Our Services - Zion Tech Group</title>;
        <meta
          name='description'
          content='Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business.'
        />;
        <meta
          name='keywords'
          content='micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity'
        />;
        <meta name='viewport' content='width=device-width, initial-scale=1 && 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact && contact.site}/services`} />;
      </Head>;

      <ErrorBoundary level='page'>;
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>;
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>;
            <div className='max-w-4xl mx-auto'>;
              <h1
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p
              </p>
            </div>
          </section>
          {/* Service Categories */}
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid lg:grid-cols-3 gap-8'>
                {serviceCategories.map((category, index) => {
                  const colors = getColorClasses(category.color);


                    >
                      <div className='flex items-center justify-between mb-6'>                        <h3 className={`text-2xl font-bold ${colors.text}`}>
        <meta name="description" content="Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
                className={`text-5xl md: text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                350+ Innovative Solutions for Modern Businesses
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-gray-400">
                Scalable and secure cloud infrastructure, migration, and management services.
              </p>
            </div>
                  </div>;
                  <button className="w - full bg - blue - 600 text - white px - 4 py - 2 rounded - lg hover:bg - blue - 700 transition - colors">;
                    Learn More;
                  </button>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        <section className="py - 20 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 16";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Why Choose Us?;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                We deliver exceptional results through our proven expertise and commitment to excellence.;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              {benefits.map ((benefit, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_y: 20 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text - center p - 6";
                >;
                  <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                    <benefit.icon className="h - 8 w - 8 text - blue - 600" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - gray - 900 mb - 2">;
                    {benefit.title}
                  </h3>;
                  <p className="text - gray - 600">;
                    {benefit.description}
                  </p>;
                </motion.div>))}
import Head from 'next / head';
import Link from 'next / link';
import Header from '../components / Header';
import Footer from '../components / Footer';
;
export default /**
 * Services - Function description
 */
function Services() {
  const service_categories = [;
    {
      title: 'Micro SaaS Products',
      description:;
        'Innovative, focused software solutions for modern businesses',
      count: '150+',
      color: 'blue',
      services: [;
        'AI - Powered Video Clip Maker',
        'Smart Contract Analyzer',
        'Cybersecurity Threat Intelligence',
        'Multi - Language Website Translator',
        'Predictive Inventory Optimizer',
        'Real - Time Analytics Dashboard',
        'Automated Customer Support',
        'Blockchain Transaction Monitor',
      ],
      href: '/micro - saas',
    },
    {
      title: 'AI Services',
      description:;
        'Advanced artificial intelligence solutions for enterprise needs',
      count: '100+',
      color: 'purple',
      services: [;
        'Autonomous AI Agents',
        'AI - Powered Financial Trading',
        'AI Legal Document Analysis',
        'AI - Powered Voice Analytics',
        'AI - Powered Search & Discovery',
        'Machine Learning Model Training',
        'Natural Language Processing',
        'Computer Vision Solutions',
      ],
      href: '/ai - services',
    },
    {
      id: 'it - services',
      name: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise - grade operations',
      services: [;
        'Quantum Computing Consulting',
        'Blockchain & Web3 Solutions',
        'DevSecOps & Security Automation',
        'Enterprise Data Platform',
        'High - Performance Computing',
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Disaster Recovery Solutions',
      ],
      href: '/it - services',
    },  ];
;
  const getColorClasses = (color: string) =>: any {
    const colors = {
      blue: {
        bg: 'bg - blue - 600',
        hover: 'hover:bg - blue - 700',
        text: 'text - blue - 400',
        border: 'border - blue - 500 / 40',
        ring: 'focus:ring - blue - 500',
      },
      purple: {        bg: 'bg - purple - 600',
        hover: 'hover:bg - purple - 700',
        text: 'text - purple - 400',
        border: 'border - purple - 500 / 40',
        ring: 'focus:ring - purple - 500',
      },      green: {
        bg: 'bg - green - 600',
        hover: 'hover:bg - green - 700',
        text: 'text - green - 400',
        border: 'border - green - 500 / 40',
        ring: 'focus:ring - green - 500',
      },
    }
    return colors[color as keyof typeof colors] || colors.blue;  }
;
  return (
    <>;
      <Head>;
        <title > Our Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Explore our comprehensive range of micro SaaS products, AI services, and IT solutions. 350+ innovative services to transform your business.';
        />;
        <meta;
          name='keywords';
          content='micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity';
        />;
        <meta name='viewport' content='width = device - width, initial - scale = 1.0' />;
        <meta name='robots' content='index, follow' />;
        <link rel='canonical' href={`${contact.site}/services`} />;
      </Head>;
      <ErrorBoundary level='page'>;
        <main className='min - h-screen bg - gradient - to - b from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
          {/* Hero Section */}
          <section className='py - 20 px - 4 text - center' role='banner'>;
            <div className='max - w-4xl mx - auto'>;
              <h1;
                className={`text - 5xl md:text - 6xl font - extrabold tracking - tight mb - 6 transition - all duration - 1000 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                Our Services;
              </h1>;
              <p;
                className={`text - xl md:text - 2xl text - slate - 300 mb - 8 transition - all duration - 1000 delay - 200 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                350+ Innovative Solutions for Modern Businesses;
              </p>;
              <p;
                className={`text - lg text - slate - 400 mb - 12 max - w-3xl mx - auto transition - all duration - 1000 delay - 400 ${is_loaded ? 'opacity - 100 translate - y-0' : 'opacity - 0 translate - y-8'}`}
              >;
                From cutting - edge AI services to comprehensive IT solutions and;
                specialized micro SaaS products, we provide everything your;
                business needs to thrive in the digital age.              </p>;
            </div>;
          </section>;
          {/* Service Categories */}
          <section className='py - 16 px - 4' role='main'>;
            <div className='max - w-7xl mx - auto'>;
              <div className='grid lg:grid - cols - 3 gap - 8'>;
                {service_categories.map ((category, index) => {
                  const colors = getColorClasses (category.color);
;
                    >;
                      <div className='flex items - center justify - between mb - 6'>                        <h3 className={`text - 2xl font - bold ${colors.text}`}>;
                          {category.title}
                        </h3>;
                        <span className={`text - 3xl font - bold ${colors.text}`}>;
                          {category.count}
                    >;
                      <div className='flex items-center justify-between mb-6'>                        <h3 className={`text-2xl font-bold ${colors && colors.text}`}>;
                          {category && category.title}
                        </h3>;
                        <span className={`text-3xl font-bold ${colors && colors.text}`}>;
                          {category && category.count}
                        </span>;
                      </div>;

                      <p className='text-slate-300 mb-6'>;
                        {category && category.description}
                      </p>;

                      <ul className='text-slate-400 space-y-2 mb-8'>;
                        {category && category.services.map((service, serviceIndex) => (;
                          <li key={serviceIndex} className='flex items-center'>;
                      <Link                        href={category.href}
                        className={`inline - flex items - center px - 6 py - 3 ${colors.bg} ${colors.hover} rounded - lg font - semibold transition - all duration - 300 hover:scale - 105 focus:outline - none focus:ring - 2 ${colors.ring} focus:ring - offset - 2 focus:ring - offset - slate - 900`}
                      >;
                        View All {category.title}
                      </ul>;

                      <Link                        href={category && category.href}
                        className={`inline-flex items-center px-6 py-3 ${colors && colors.bg} ${colors && colors.hover} rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 ${colors && colors.ring} focus:ring-offset-2 focus:ring-offset-slate-900`}
                      >;
                        View All {category && category.title}
                        <svg
                          className='ml-2 w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>;
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 5l7 7-7 7'
                          />;
                        </svg>;
                      </Link>;
                    </div>;
                  );
                })}
              </div>
            </div>
          </div>
        </section>
          {/* Why Choose Us */}
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Why Choose Zion Tech Group?
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
              </div>;
            </div>;
          </div>;
        </section>;

          {/* Why Choose Us */}
          <section className='py-16 px-4 bg-slate-900/40'>;
            <div className='max-w-6xl mx-auto'>;
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>;
                Why Choose Zion Tech Group?;
              </h2>;

              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>;
                <div className='text-center'>;
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Lightning Fast</h3>
                  <p className='text-slate-400'>
                    Rapid deployment and implementation of solutions
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Lightning Fast</h3>;
                  <p className='text-slate-400'>;
                    Rapid deployment and implementation of solutions;
                  </p>;
                </div>;

                <div className='text-center'>;
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Enterprise Grade</h3>
                  <p className='text-slate-400'>
                    Scalable solutions for businesses of all sizes
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Enterprise Grade</h3>;
                  <p className='text-slate-400'>;
                    Scalable solutions for businesses of all sizes;
                  </p>;
                </div>;

                <div className='text-center'>;
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Secure & Reliable</h3>
                  <p className='text-slate-400'>
                    Bank-level security and 99.9% uptime guarantee
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>Secure & Reliable</h3>;
                  <p className='text-slate-400'>;
                    Bank-level security and 99 && 99.9% uptime guarantee;
                  </p>;
                </div>;

                <div className='text-center'>;
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>;
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>;
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>24/7 Support</h3>
                  <p className='text-slate-400'>
                    Round-the-clock technical support and maintenance
                  </p>                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
                Ready to Get Started?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our experts today to discuss your project requirements
                and discover how our innovative solutions can transform your
                business.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                        d='M18 && M18.364 5 && 5.636l-3 && 3.536 3 && 3.536m0 5 && 5.656l3.536 3 && 3.536M9.172 9 && 9.172L5.636 5 && 5.636m3.536 9 && 9.192L5.636 18 && 18.364M12 2 && 2.25a9.75 9 && 9.75 0 100 19 && 19.5 9 && 9.75 9 && 9.75 0 000-19 && 19.5z'
                      />;
                    </svg>;
                  </div>;
                  <h3 className='text-xl font-bold mb-2'>24/7 Support</h3>;
                  <p className='text-slate-400'>;
                    Round-the-clock technical support and maintenance;
                  </p>                </div>;
              </div>;
            </div>;
          </section>;

          {/* CTA Section */}
          <section className='py-16 px-4'>;
            <div className='max-w-4xl mx-auto text-center'>;
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>;
                Ready to Get Started?;
              </h2>;
              <p className='text-lg text-slate-300 mb-8'>;
                Contact our experts today to discuss your project requirements;
                and discover how our innovative solutions can transform your;
                business.;
              </p>;

              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>;

              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>;
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>;
                  Get a Quote;
                </Link>;
                <a
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our experts to discuss your project requirements and discover
              how our solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


  );

            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
}
  )
}
                Schedule Consultation;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;
      <Footer />;
    </>;
  );
  );
}
