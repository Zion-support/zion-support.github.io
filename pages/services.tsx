import Link from 'next/link';

type Service = {
  name: string;
  summary: string;
  pricing: string;
  link: string;
}
const microSaaS: Service[] = [
  {
    name: 'Cloud Cost Guard (FinOps Assistant)',
    summary: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    pricing: 'Typical: $299–$1,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'LLM Evaluation & Safety Suite',
    summary: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    pricing: 'Typical: $799–$3,500/month',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Customer Feedback & NPS Micro-App',
    summary: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    pricing: 'Typical: $149–$799/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'API Rate Limiter & Analytics',
    summary: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
    pricing: 'Typical: $199–$999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Document Processing',
    summary: 'AI-powered OCR, data extraction, and document workflow automation for businesses.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Social Media Scheduler Pro',
    summary: 'Multi-platform scheduling, content optimization, and engagement analytics.',
    pricing: 'Typical: $99–$499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Email Deliverability Monitor',
    summary: 'Real-time email reputation tracking, bounce analysis, and deliverability optimization.',
    pricing: 'Typical: $149–$699/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Website Performance Optimizer',
    summary: 'Automated Core Web Vitals monitoring, optimization suggestions, and performance alerts.',
    pricing: 'Typical: $199–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Lead Scoring & Qualification',
    summary: 'AI-powered lead scoring, qualification workflows, and CRM integration.',
    pricing: 'Typical: $299–$1,299/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Inventory Management AI',
    summary: 'Predictive inventory optimization, demand forecasting, and automated reordering.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Employee Productivity Tracker',
    summary: 'Non-invasive productivity analytics, time tracking, and performance insights.',
    pricing: 'Typical: $99–$399/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Competitor Price Monitor',
    summary: 'Real-time competitor pricing tracking, alerts, and dynamic pricing recommendations.',
    pricing: 'Typical: $199–$799/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'SEO Content Optimizer',
    summary: 'AI-powered content optimization, keyword research, and SERP tracking.',
    pricing: 'Typical: $149–$699/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Customer Churn Predictor',
    summary: 'Machine learning models to predict and prevent customer churn with actionable insights.',
    pricing: 'Typical: $399–$1,599/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Automated A/B Testing Platform',
    summary: 'Statistical significance testing, multivariate experiments, and conversion optimization.',
    pricing: 'Typical: $299–$1,199/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Invoice Processing & AP Automation',
    summary: 'AI-powered invoice extraction, approval workflows, and automated payment processing.',
    pricing: 'Typical: $199–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Real-time Collaboration Workspace',
    summary: 'Virtual whiteboards, document collaboration, and team productivity analytics.',
    pricing: 'Typical: $99–$499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'AI-Powered Code Review Assistant',
    summary: 'Automated code quality analysis, security scanning, and performance optimization suggestions.',
    pricing: 'Typical: $149–$699/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Dynamic Pricing Optimization Engine',
    summary: 'Real-time pricing adjustments based on demand, competition, and market conditions.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Contract Management System',
    summary: 'Contract lifecycle management, renewal tracking, and compliance monitoring.',
    pricing: 'Typical: $299–$1,299/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'AI-Powered HR Analytics Platform',
    summary: 'Employee performance insights, retention prediction, and workforce optimization.',
    pricing: 'Typical: $199–$999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Intelligent Supply Chain Monitor',
    summary: 'Real-time supply chain visibility, risk assessment, and disruption alerts.',
    pricing: 'Typical: $499–$2,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Energy Management System',
    summary: 'IoT-based energy monitoring, optimization, and cost reduction for facilities.',
    pricing: 'Typical: $199–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'AI-Powered Legal Document Analyzer',
    summary: 'Contract analysis, risk assessment, and compliance checking for legal teams.',
    pricing: 'Typical: $399–$1,599/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Dynamic Content Personalization Engine',
    summary: 'Real-time content customization based on user behavior and preferences.',
    pricing: 'Typical: $299–$1,199/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Facility Management Platform',
    summary: 'IoT sensors, predictive maintenance, and automated facility operations.',
    pricing: 'Typical: $199–$999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'AI-Powered Market Research Assistant',
    summary: 'Competitive intelligence, trend analysis, and market opportunity identification.',
    pricing: 'Typical: $149–$699/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Intelligent Customer Onboarding Platform',
    summary: 'Automated onboarding workflows, progress tracking, and success optimization.',
    pricing: 'Typical: $199–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Compliance Monitoring System',
    summary: 'Automated compliance checking, audit preparation, and regulatory reporting.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'AI-Powered Financial Planning Tool',
    summary: 'Budget forecasting, expense optimization, and financial health monitoring.',
    pricing: 'Typical: $99–$499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Dynamic Workforce Scheduling System',
    summary: 'AI-optimized scheduling, shift management, and labor cost optimization.',
    pricing: 'Typical: $199–$999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Quality Assurance Platform',
    summary: 'Automated testing, quality metrics, and continuous improvement recommendations.',
    pricing: 'Typical: $299–$1,299/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'AI-Powered Vendor Management System',
    summary: 'Vendor performance tracking, risk assessment, and relationship optimization.',
    pricing: 'Typical: $199–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Intelligent Knowledge Management Platform',
    summary: 'AI-powered search, content organization, and knowledge sharing optimization.',
    pricing: 'Typical: $149–$699/month',
    link: 'https://ziontechgroup.com/micro-saas'}
];

const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation',
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.',
    pricing: 'Typical: $2k–$8k setup, $0.02–$0.2/session',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Predictive Analytics & Forecasting',
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.',
    pricing: 'Typical: $4k–$20k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'GenAI Content & SEO Automation',
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.',
    pricing: 'Typical: $1k–$6k/month',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Computer Vision & Image Analysis',
    summary: 'Object detection, facial recognition, quality control, and medical imaging analysis.',
    pricing: 'Typical: $5k–$25k setup, $0.10–$2.00/image',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Natural Language Processing Suite',
    summary: 'Sentiment analysis, entity extraction, text classification, and language translation.',
    pricing: 'Typical: $3k–$15k setup, $0.01–$0.05/request',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Fraud Detection',
    summary: 'Real-time fraud scoring, anomaly detection, and risk assessment for financial transactions.',
    pricing: 'Typical: $8k–$40k setup, $0.05–$0.50/transaction',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Recommendation Engine Platform',
    summary: 'Personalized product recommendations, content suggestions, and user behavior analysis.',
    pricing: 'Typical: $6k–$30k setup, $0.02–$0.10/recommendation',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Voice AI & Speech Processing',
    summary: 'Speech-to-text, text-to-speech, voice commands, and conversational AI interfaces.',
    pricing: 'Typical: $4k–$20k setup, $0.01–$0.10/minute',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Data Pipeline Automation',
    summary: 'Automated data cleaning, feature engineering, model training, and deployment pipelines.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Document Analysis',
    summary: 'Contract analysis, legal document review, compliance checking, and knowledge extraction.',
    pricing: 'Typical: $5k–$25k setup, $0.50–$5.00/document',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Supply Chain Optimization',
    summary: 'Demand forecasting, route optimization, inventory management, and supplier risk assessment.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Conversational AI Platform',
    summary: 'Multi-channel chatbots, voice assistants, and intelligent virtual agents.',
    pricing: 'Typical: $8k–$35k setup, $0.05–$0.25/conversation',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Model Monitoring & MLOps',
    summary: 'Model performance tracking, drift detection, automated retraining, and deployment management.',
    pricing: 'Typical: $6k–$25k setup, $500–$2k/month monitoring',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Process Automation',
    summary: 'RPA with AI, workflow automation, document processing, and business process optimization.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Market Research',
    summary: 'Competitive intelligence, trend analysis, consumer sentiment, and market forecasting.',
    pricing: 'Typical: $5k–$20k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Edge AI & IoT Intelligence',
    summary: 'Real-time inference on edge devices, IoT data processing, and distributed AI systems.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Cybersecurity Threat Detection',
    summary: 'Advanced threat hunting, behavioral analysis, and automated incident response.',
    pricing: 'Typical: $10k–$50k setup, $2k–$8k/month monitoring',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Process Mining & Optimization',
    summary: 'Business process discovery, bottleneck identification, and workflow optimization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Content Moderation Platform',
    summary: 'Automated content filtering, toxicity detection, and community management.',
    pricing: 'Typical: $5k–$25k setup, $0.01–$0.05/content review',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Manufacturing Quality Control',
    summary: 'Computer vision for defect detection, predictive maintenance, and quality optimization.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Healthcare Diagnostics',
    summary: 'Medical image analysis, symptom prediction, and treatment recommendation systems.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Document Intelligence Platform',
    summary: 'Advanced document understanding, information extraction, and knowledge graph creation.',
    pricing: 'Typical: $8k–$40k setup, $0.10–$1.00/document',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Risk Assessment Engine',
    summary: 'Credit scoring, insurance underwriting, and financial risk modeling.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Energy Grid Optimization',
    summary: 'Demand forecasting, load balancing, and renewable energy integration.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Personalization Engine',
    summary: 'Real-time user profiling, content recommendation, and experience optimization.',
    pricing: 'Typical: $6k–$30k setup, $0.02–$0.10/interaction',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Automation Orchestration',
    summary: 'RPA with AI decision-making, workflow automation, and process intelligence.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Environmental Monitoring',
    summary: 'Climate data analysis, pollution detection, and environmental impact assessment.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Transportation Optimization',
    summary: 'Route optimization, traffic prediction, and fleet management intelligence.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Agricultural Intelligence',
    summary: 'Crop monitoring, yield prediction, and precision farming optimization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Customer Journey Analytics',
    summary: 'Behavioral analysis, journey mapping, and conversion optimization.',
    pricing: 'Typical: $8k–$35k setup, $1k–$5k/month analytics',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Real Estate Valuation',
    summary: 'Property assessment, market analysis, and investment opportunity identification.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Smart Retail Analytics Platform',
    summary: 'Customer behavior analysis, inventory optimization, and sales forecasting.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Educational Assessment',
    summary: 'Learning analytics, personalized education, and performance prediction.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Financial Trading Algorithms',
    summary: 'Algorithmic trading, market prediction, and portfolio optimization.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Smart City Solutions',
    summary: 'Urban planning optimization, traffic management, and resource allocation.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'}
];

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Multi-Cloud Architecture Design',
    summary: 'Hybrid cloud strategies, disaster recovery, and multi-region deployment architectures.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Kubernetes & Container Orchestration',
    summary: 'EKS/GKE/AKS setup, microservices architecture, and container security hardening.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Database Optimization & Migration',
    summary: 'Performance tuning, scaling strategies, and cloud database migration services.',
    pricing: 'Typical: $5k–$25k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'API Gateway & Microservices',
    summary: 'API design, rate limiting, authentication, and microservices architecture implementation.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Infrastructure as Code (IaC)',
    summary: 'Terraform, CloudFormation, and Pulumi implementations for automated infrastructure management.',
    pricing: 'Typical: $6k–$30k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Monitoring & Observability Platform',
    summary: 'ELK stack, Prometheus/Grafana, APM tools, and comprehensive logging solutions.',
    pricing: 'Typical: $8k–$35k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Backup & Disaster Recovery',
    summary: 'Automated backup strategies, cross-region replication, and disaster recovery testing.',
    pricing: 'Typical: $5k–$20k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Network Security & VPN Solutions',
    summary: 'VPN setup, network segmentation, firewall configuration, and secure remote access.',
    pricing: 'Typical: $3k–$15k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Compliance & Audit Services',
    summary: 'SOC 2, HIPAA, GDPR compliance assessments, and security audit preparation.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Performance Testing & Optimization',
    summary: 'Load testing, stress testing, performance profiling, and optimization recommendations.',
    pricing: 'Typical: $5k–$25k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Mobile App Development & DevOps',
    summary: 'iOS/Android app development, CI/CD for mobile, and app store deployment automation.',
    pricing: 'Typical: $15k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Blockchain & Web3 Integration',
    summary: 'Smart contract development, DeFi integration, and blockchain infrastructure setup.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Data Engineering & Analytics',
    summary: 'Data pipeline development, ETL processes, data warehousing, and analytics platform setup.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Application Integration',
    summary: 'API integration, middleware development, and legacy system modernization.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Threat Intelligence Platform',
    summary: 'SIEM implementation, threat hunting, and security orchestration automation.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'High-Performance Computing Solutions',
    summary: 'GPU clusters, parallel processing, and scientific computing infrastructure.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IoT Platform & Device Management',
    summary: 'IoT device connectivity, data collection, and edge computing solutions.',
    pricing: 'Typical: $18k–$90k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Analytics & Business Intelligence',
    summary: 'Data visualization, predictive analytics, and executive dashboards.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Content Management System',
    summary: 'Document management, workflow automation, and digital asset management.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Network Architecture Design',
    summary: 'SD-WAN, network segmentation, and zero-trust network implementation.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Resource Planning (ERP) Implementation',
    summary: 'ERP system selection, customization, and integration with existing systems.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Identity & Access Management',
    summary: 'SSO implementation, multi-factor authentication, and privileged access management.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Service Bus (ESB) Architecture',
    summary: 'Message queuing, service orchestration, and enterprise integration patterns.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Database Administration',
    summary: 'Database optimization, clustering, replication, and disaster recovery.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Workflow Automation',
    summary: 'Business process automation, approval workflows, and task management systems.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Cloud Security Architecture',
    summary: 'Cloud security posture management, compliance automation, and threat protection.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise API Management Platform',
    summary: 'API gateway, developer portal, and API lifecycle management.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Monitoring & Alerting Systems',
    summary: 'Application performance monitoring, infrastructure monitoring, and alerting automation.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Backup & Archival Solutions',
    summary: 'Automated backup strategies, data archival, and long-term retention policies.',
    pricing: 'Typical: $6k–$30k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Load Balancing & Traffic Management',
    summary: 'Global load balancing, traffic routing, and application delivery optimization.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Messaging & Communication Platform',
    summary: 'Unified communications, video conferencing, and collaboration tools integration.',
    pricing: 'Typical: $12k–$60k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Advanced Virtualization & Containerization',
    summary: 'VMware/vSphere, Docker, Kubernetes, and hybrid cloud container orchestration.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Enterprise Digital Transformation Consulting',
    summary: 'Technology strategy, digital roadmap, and organizational change management.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'}
];

export default function Services(): any {
  const Section = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section style={{ maxWidth: 1400, margin: '0 auto', padding: '32px 20px', }}>
      <div style={{ 
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
        paddingBottom: 12, borderBottom: `2px solid ${color}20`
      }}>
        <div style={{ 
          width: 4, height: 32, background: color, borderRadius: 2 
        }}></div>
        <h2 style={{ 
          fontSize: 28, fontWeight: 800, margin: 0,
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>{title}</h2>
        <div style={{ 
          background: `${color}20`, color: color, padding: '4px 12px', 
          borderRadius: 20, fontSize: 14, fontWeight: 600 
        }}>
          {items.length} Services
        </div>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: 20 
      }}>
        {items.map((s) => (
          <a key={s.name} href={s.link} style={{
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, padding: 24,
            background: 'white', textDecoration: 'none', color: '#0b1220',
            transition: 'all 0.3s ease', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            ':hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              borderColor: `${color}40`
            }
          }}>
            <div style={{ 
              fontWeight: 700, marginBottom: 8, fontSize: 16,
              lineHeight: 1.4, color: '#1e293b'
            }}>{s.name}</div>
            <div style={{ 
              opacity: 0.8, fontSize: 14, marginBottom: 12, 
              lineHeight: 1.5, color: '#64748b'
            }}>{s.summary}</div>
            <div style={{ 
              fontSize: 13, color: color, fontWeight: 600,
              background: `${color}10`, padding: '6px 12px',
              borderRadius: 8, display: 'inline-block'
            }}>{s.pricing}</div>
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <main style={{ 
      background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)', 
      minHeight: 'calc(100vh - 120px)' 
    }}>
      {/* Header */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0b1220, #1e293b)', 
        color: 'white', padding: '60px 20px', textAlign: 'center' 
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 48, fontWeight: 800, marginBottom: 16,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Our Services</h1>
          <p style={{ 
            fontSize: 20, opacity: 0.9, marginBottom: 24,
            lineHeight: 1.6 
          }}>
            Comprehensive technology solutions to transform your business
          </p>
          <div style={{ 
            display: 'flex', gap: 16, justifyContent: 'center',
            flexWrap: 'wrap', marginBottom: 32 
          }}>
            <div style={{ 
              background: 'rgba(59, 130, 246, 0.1)', padding: '12px 20px', 
              borderRadius: 12, border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#3b82f6' }}>60+</div>
              <div style={{ fontSize: 14, opacity: 0.8 }}>Micro SaaS</div>
            </div>
            <div style={{ 
              background: 'rgba(139, 92, 246, 0.1)', padding: '12px 20px', 
              borderRadius: 12, border: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#8b5cf6' }}>40+</div>
              <div style={{ fontSize: 14, opacity: 0.8 }}>AI Services</div>
            </div>
            <div style={{ 
              background: 'rgba(34, 197, 94, 0.1)', padding: '12px 20px', 
              borderRadius: 12, border: '1px solid rgba(34, 197, 94, 0.2)'
            }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#22c55e' }}>40+</div>
              <div style={{ fontSize: 14, opacity: 0.8 }}>IT Solutions</div>
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
            transition: 'all 0.3s ease'
          }}>Request a Quote</Link>
          <a href="tel:+13024640950" style={{
            display: 'inline-block', 
            background: 'rgba(34, 197, 94, 0.1)', 
            color: '#22c55e', padding: '16px 32px', borderRadius: 12, 
            fontWeight: 700, textDecoration: 'none', fontSize: 16,
            border: '2px solid #22c55e', transition: 'all 0.3s ease'
          }}>Call +1 302 464 0950</a>
        </div>
      </section>
    </main>
  );
}
