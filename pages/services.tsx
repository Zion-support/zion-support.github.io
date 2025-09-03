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
    name: 'Smart Contract Security Auditor',
    summary: 'Automated smart contract vulnerability scanning, gas optimization, and security best practices enforcement.',
    pricing: 'Typical: $499–$2,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Real-Time Data Pipeline Monitor',
    summary: 'End-to-end data pipeline monitoring, anomaly detection, and automated recovery for streaming data.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'AI-Powered Code Review Assistant',
    summary: 'Automated code quality analysis, security vulnerability detection, and performance optimization suggestions.',
    pricing: 'Typical: $199–$999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Multi-Channel Customer Journey Tracker',
    summary: 'Cross-platform customer journey mapping, attribution modeling, and conversion funnel optimization.',
    pricing: 'Typical: $299–$1,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Intelligent Resource Scheduler',
    summary: 'AI-powered meeting scheduling, resource allocation, and capacity planning for teams and facilities.',
    pricing: 'Typical: $149–$799/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Advanced Threat Intelligence Platform',
    summary: 'Real-time threat monitoring, IOCs tracking, and automated incident response for cybersecurity teams.',
    pricing: 'Typical: $599–$2,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Compliance Monitor',
    summary: 'Automated compliance checking for GDPR, HIPAA, SOC2, and industry-specific regulations with audit trails.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Predictive Maintenance System',
    summary: 'IoT sensor data analysis, equipment failure prediction, and maintenance scheduling optimization.',
    pricing: 'Typical: $499–$2,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Dynamic Pricing Engine',
    summary: 'Real-time pricing optimization based on demand, competition, inventory, and market conditions.',
    pricing: 'Typical: $299–$1,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'AI Content Moderation Suite',
    summary: 'Automated content filtering, toxicity detection, and moderation workflows for user-generated content.',
    pricing: 'Typical: $199–$999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Energy Management System',
    summary: 'IoT-based energy monitoring, consumption optimization, and carbon footprint tracking for facilities.',
    pricing: 'Typical: $399–$1,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Automated Financial Reporting',
    summary: 'AI-powered financial statement generation, variance analysis, and regulatory compliance reporting.',
    pricing: 'Typical: $299–$1,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Intelligent Supply Chain Optimizer',
    summary: 'End-to-end supply chain visibility, risk assessment, and optimization recommendations.',
    pricing: 'Typical: $599–$2,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart HR Analytics Platform',
    summary: 'Employee performance analytics, retention prediction, and workforce planning insights.',
    pricing: 'Typical: $199–$999/month',
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
    name: 'AI-Powered Drug Discovery Platform',
    summary: 'Molecular property prediction, drug-target interaction modeling, and compound optimization for pharmaceutical research.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Autonomous Vehicle AI System',
    summary: 'Computer vision for autonomous driving, path planning, obstacle detection, and safety-critical decision making.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Climate Modeling',
    summary: 'Climate change prediction, weather forecasting, and environmental impact assessment using advanced ML models.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Quantum Machine Learning Platform',
    summary: 'Quantum algorithm development, quantum neural networks, and hybrid classical-quantum ML solutions.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Cybersecurity Defense',
    summary: 'Advanced threat detection, behavioral analysis, and automated incident response using deep learning.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Generative AI Content Creation Suite',
    summary: 'Multi-modal content generation including text, images, videos, and 3D models with brand consistency.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Precision Agriculture',
    summary: 'Crop monitoring, yield prediction, disease detection, and automated farming optimization using satellite and IoT data.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Neural Architecture Search (NAS) Platform',
    summary: 'Automated neural network design, architecture optimization, and model compression for edge deployment.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Financial Trading System',
    summary: 'Algorithmic trading, market prediction, risk management, and portfolio optimization using advanced ML.',
    pricing: 'Typical: $40k–$200k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Multimodal AI Assistant Platform',
    summary: 'Voice, text, image, and gesture recognition combined with natural language understanding and generation.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Medical Diagnosis System',
    summary: 'Medical image analysis, symptom assessment, treatment recommendation, and clinical decision support.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Federated Learning Platform',
    summary: 'Privacy-preserving machine learning, distributed model training, and collaborative AI without data sharing.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Space Mission Planning',
    summary: 'Satellite constellation optimization, mission planning, and space debris tracking using advanced algorithms.',
    pricing: 'Typical: $50k–$300k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Explainable AI (XAI) Framework',
    summary: 'Model interpretability, bias detection, fairness assessment, and transparent AI decision making.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Energy Grid Optimization',
    summary: 'Smart grid management, renewable energy integration, demand forecasting, and grid stability optimization.',
    pricing: 'Typical: $30k–$150k project',
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
    name: 'Quantum Computing Infrastructure',
    summary: 'Quantum computer setup, quantum algorithm development, and hybrid classical-quantum system integration.',
    pricing: 'Typical: $50k–$500k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Edge Computing & 5G Networks',
    summary: 'Edge infrastructure deployment, 5G network optimization, and distributed computing architecture.',
    pricing: 'Typical: $25k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Metaverse & Web3 Infrastructure',
    summary: 'Virtual world development, NFT marketplace creation, and decentralized application architecture.',
    pricing: 'Typical: $30k–$200k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Autonomous Systems Integration',
    summary: 'IoT sensor networks, autonomous vehicle infrastructure, and smart city technology implementation.',
    pricing: 'Typical: $40k–$250k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Digital Twin Platform Development',
    summary: 'Real-time digital replicas, simulation environments, and predictive modeling for physical assets.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Zero-Trust Security Architecture',
    summary: 'Identity verification, micro-segmentation, and continuous security validation implementation.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Green IT & Sustainable Computing',
    summary: 'Carbon-neutral infrastructure, energy-efficient systems, and sustainable technology practices.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'AR/VR Development Platform',
    summary: 'Immersive application development, spatial computing, and mixed reality experience creation.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Serverless & Event-Driven Architecture',
    summary: 'Function-as-a-Service implementation, event streaming, and reactive system design.',
    pricing: 'Typical: $18k–$90k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Hyperautomation & RPA Platform',
    summary: 'Intelligent process automation, workflow orchestration, and business process optimization.',
    pricing: 'Typical: $22k–$110k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Cloud-Native Security Operations',
    summary: 'Cloud security posture management, threat hunting, and automated security response.',
    pricing: 'Typical: $20k–$100k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Distributed Ledger Technology',
    summary: 'Blockchain infrastructure, smart contract development, and decentralized system architecture.',
    pricing: 'Typical: $30k–$150k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'AI Infrastructure & MLOps Platform',
    summary: 'Machine learning pipeline automation, model serving, and AI infrastructure management.',
    pricing: 'Typical: $25k–$125k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Cyber-Physical Systems Integration',
    summary: 'IoT-OT convergence, industrial automation, and smart manufacturing system implementation.',
    pricing: 'Typical: $35k–$175k project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Next-Gen Network Architecture',
    summary: 'Software-defined networking, network function virtualization, and intent-based networking.',
    pricing: 'Typical: $28k–$140k project',
    link: 'https://ziontechgroup.com/it-services'}
];

export default function Services(): any {
  const Section = ({ title, items }: { title: string; items: Service[] }) => (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px', }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12 }}>
        {items.map((s) => (
          <a key={s.name} href={s.link} style={{
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, padding: 16,
            background: 'white', textDecoration: 'none', color: '#0b1220'}}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{s.name}</div>
            <div style={{ opacity: 0.8, fontSize: 14, marginBottom: 8 }}>{s.summary}</div>
            <div style={{ fontSize: 13, color: '#2563eb', }}>{s.pricing}</div>
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <main style={{ background: '#f8fafc', minHeight: 'calc(100vh - 120px)', }}>
      <Section title="Micro SaaS" items={microSaaS} />
      <Section title="AI Services" items={aiServices} />
      <Section title="IT Services" items={itServices} />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px', }}>
        <Link href="/contact" style={{
          display: 'inline-block', background: '#22d3ee', color: '#0b1220',
          padding: '10px 14px', borderRadius: 10, fontWeight: 700
        }}>Request a Quote</Link>
      </section>
    </main>
  );
}
