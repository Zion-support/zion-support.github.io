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
    pricing: 'Typical: $199–$1,299/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Smart Document Processor',
    summary: 'AI-powered document extraction, classification, and workflow automation for businesses.',
    pricing: 'Typical: $399–$2,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Social Media Scheduler Pro',
    summary: 'Multi-platform scheduling, AI content suggestions, and performance analytics.',
    pricing: 'Typical: $99–$599/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Email Deliverability Monitor',
    summary: 'Real-time email reputation tracking, spam score analysis, and deliverability optimization.',
    pricing: 'Typical: $149–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Website Uptime & Performance Tracker',
    summary: 'Global monitoring, performance insights, and instant alerts for web applications.',
    pricing: 'Typical: $79–$499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Lead Scoring & Qualification Engine',
    summary: 'AI-powered lead scoring, qualification workflows, and CRM integration.',
    pricing: 'Typical: $299–$1,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Invoice & Payment Automation',
    summary: 'Automated invoicing, payment processing, and financial reporting for SMBs.',
    pricing: 'Typical: $199–$1,299/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Team Productivity Analytics',
    summary: 'Workflow optimization, time tracking, and productivity insights for remote teams.',
    pricing: 'Typical: $149–$999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'SEO Content Optimizer',
    summary: 'AI-driven content optimization, keyword research, and SERP tracking.',
    pricing: 'Typical: $199–$1,499/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Customer Support Ticket Router',
    summary: 'Intelligent ticket classification, routing, and escalation management.',
    pricing: 'Typical: $249–$1,599/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Inventory Management System',
    summary: 'Real-time inventory tracking, demand forecasting, and automated reordering.',
    pricing: 'Typical: $399–$2,999/month',
    link: 'https://ziontechgroup.com/micro-saas'},
  {
    name: 'Meeting Scheduler & Assistant',
    summary: 'AI-powered scheduling, agenda generation, and meeting insights.',
    pricing: 'Typical: $99–$699/month',
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
    name: 'Computer Vision & Image Recognition',
    summary: 'Object detection, facial recognition, OCR, and visual content analysis.',
    pricing: 'Typical: $5k–$25k setup, $0.01–$0.1/image',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Natural Language Processing Engine',
    summary: 'Text analysis, sentiment detection, entity extraction, and language translation.',
    pricing: 'Typical: $3k–$15k setup, $0.001–$0.01/request',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Fraud Detection',
    summary: 'Real-time fraud scoring, anomaly detection, and risk assessment for transactions.',
    pricing: 'Typical: $8k–$40k setup, $0.05–$0.5/transaction',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Voice AI & Speech Recognition',
    summary: 'Voice-to-text, speech synthesis, voice biometrics, and conversational AI.',
    pricing: 'Typical: $6k–$30k setup, $0.02–$0.2/minute',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Recommendation Engine',
    summary: 'Personalized product recommendations, content suggestions, and user behavior analysis.',
    pricing: 'Typical: $4k–$20k setup, $0.01–$0.1/recommendation',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI Data Pipeline & ETL',
    summary: 'Automated data processing, cleaning, transformation, and quality assurance.',
    pricing: 'Typical: $5k–$25k setup, $0.1–$1/GB processed',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Document Analysis',
    summary: 'Contract analysis, legal document review, and compliance monitoring.',
    pricing: 'Typical: $7k–$35k setup, $0.5–$5/document',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Email Marketing',
    summary: 'Personalized email campaigns, send time optimization, and engagement prediction.',
    pricing: 'Typical: $2k–$12k setup, $0.01–$0.1/email',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Machine Learning Model Deployment',
    summary: 'MLOps, model serving, A/B testing, and performance monitoring.',
    pricing: 'Typical: $8k–$40k setup, $0.1–$1/prediction',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Code Review',
    summary: 'Automated code analysis, bug detection, security scanning, and quality metrics.',
    pricing: 'Typical: $3k–$15k setup, $0.1–$1/commit',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'Intelligent Process Automation',
    summary: 'RPA with AI, workflow optimization, and business process intelligence.',
    pricing: 'Typical: $10k–$50k setup, $0.5–$5/process',
    link: 'https://ziontechgroup.com/ai-services'},
  {
    name: 'AI-Powered Market Research',
    summary: 'Competitive analysis, trend prediction, and market sentiment monitoring.',
    pricing: 'Typical: $5k–$25k setup, $0.1–$1/research query',
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
    name: 'Enterprise Architecture Consulting',
    summary: 'System design, technology stack selection, and scalability planning.',
    pricing: 'Typical: $150–$300/hour or $15k–$75k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Database Design & Optimization',
    summary: 'Database architecture, performance tuning, and migration services.',
    pricing: 'Typical: $100–$250/hour or $8k–$40k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'API Development & Integration',
    summary: 'REST/GraphQL APIs, microservices, and third-party integrations.',
    pricing: 'Typical: $120–$280/hour or $10k–$50k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Mobile App Development',
    summary: 'Native iOS/Android apps, React Native, and Flutter development.',
    pricing: 'Typical: $100–$250/hour or $25k–$150k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Web Application Development',
    summary: 'React, Next.js, Vue.js, and full-stack web applications.',
    pricing: 'Typical: $80–$200/hour or $15k–$100k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IT Infrastructure Management',
    summary: 'Server management, network administration, and system monitoring.',
    pricing: 'Typical: $2k–$8k/month managed services',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Data Engineering & Analytics',
    summary: 'Data pipelines, warehouses, ETL processes, and BI dashboards.',
    pricing: 'Typical: $120–$280/hour or $20k–$100k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Blockchain & Web3 Development',
    summary: 'Smart contracts, DeFi protocols, and blockchain integration.',
    pricing: 'Typical: $150–$350/hour or $30k–$200k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IoT & Embedded Systems',
    summary: 'IoT device development, sensor integration, and edge computing.',
    pricing: 'Typical: $100–$300/hour or $25k–$150k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Quality Assurance & Testing',
    summary: 'Automated testing, performance testing, and security testing.',
    pricing: 'Typical: $80–$180/hour or $10k–$60k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'IT Project Management',
    summary: 'Agile/Scrum management, technical leadership, and delivery coordination.',
    pricing: 'Typical: $100–$200/hour or $5k–$30k/project',
    link: 'https://ziontechgroup.com/it-services'},
  {
    name: 'Technical Documentation & Training',
    summary: 'API documentation, user guides, and technical training programs.',
    pricing: 'Typical: $60–$150/hour or $5k–$25k/project',
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
