import Link from 'next/link';

type Service = {
  name: string;
  summary: string;
  pricing: string;
  link: string;
};

const microSaaS: Service[] = [
  {
    name: 'Cloud Cost Guard (FinOps Assistant)',
    summary: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    pricing: 'Typical: $299–$1,499/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'LLM Evaluation & Safety Suite',
    summary: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    pricing: 'Typical: $799–$3,500/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Customer Feedback & NPS Micro-App',
    summary: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    pricing: 'Typical: $149–$799/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'API Rate Limiter & Analytics',
    summary: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
    pricing: 'Typical: $199–$1,299/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Social Media Scheduler Pro',
    summary: 'AI-powered content scheduling, hashtag optimization, and engagement analytics across platforms.',
    pricing: 'Typical: $99–$599/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Invoice & Payment Automation',
    summary: 'Automated invoicing, payment processing, and financial reporting for freelancers and agencies.',
    pricing: 'Typical: $49–$299/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'SEO Content Optimizer',
    summary: 'AI-driven content optimization, keyword research, and SERP tracking for better rankings.',
    pricing: 'Typical: $149–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Lead Scoring & CRM Automation',
    summary: 'Intelligent lead scoring, automated follow-ups, and CRM integration for sales teams.',
    pricing: 'Typical: $199–$1,199/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Password Manager for Teams',
    summary: 'Secure password sharing, team vaults, and enterprise-grade security for organizations.',
    pricing: 'Typical: $5–$15/user/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Time Tracking & Productivity Analytics',
    summary: 'Advanced time tracking, productivity insights, and team performance analytics.',
    pricing: 'Typical: $8–$25/user/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Email Marketing Automation',
    summary: 'Behavioral triggers, A/B testing, and advanced segmentation for email campaigns.',
    pricing: 'Typical: $99–$699/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Project Management & Collaboration',
    summary: 'Kanban boards, Gantt charts, and team collaboration tools with AI-powered insights.',
    pricing: 'Typical: $10–$50/user/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Customer Support Ticketing System',
    summary: 'Multi-channel support, AI-powered responses, and customer satisfaction tracking.',
    pricing: 'Typical: $29–$199/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Inventory Management System',
    summary: 'Real-time inventory tracking, automated reordering, and supply chain optimization.',
    pricing: 'Typical: $199–$1,499/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Employee Onboarding Platform',
    summary: 'Automated onboarding workflows, document collection, and compliance tracking.',
    pricing: 'Typical: $5–$20/employee/month',
    link: 'https://ziontechgroup.com/micro-saas'
  }
];

const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation',
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.',
    pricing: 'Typical: $2k–$8k setup, $0.02–$0.2/session',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Predictive Analytics & Forecasting',
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.',
    pricing: 'Typical: $4k–$20k project',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'GenAI Content & SEO Automation',
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.',
    pricing: 'Typical: $1k–$6k/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Computer Vision & Image Recognition',
    summary: 'Object detection, facial recognition, OCR, and automated image processing solutions.',
    pricing: 'Typical: $5k–$25k setup, $0.01–$0.05/image',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Natural Language Processing (NLP)',
    summary: 'Text analysis, sentiment analysis, language translation, and document processing.',
    pricing: 'Typical: $3k–$15k setup, $0.001–$0.01/request',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Machine Learning Model Development',
    summary: 'Custom ML models for classification, regression, and recommendation systems.',
    pricing: 'Typical: $10k–$50k project',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'AI-Powered Data Analytics',
    summary: 'Automated insights, anomaly detection, and predictive modeling for business intelligence.',
    pricing: 'Typical: $5k–$30k setup, $2k–$10k/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Conversational AI & Voice Assistants',
    summary: 'Voice-enabled chatbots, IVR systems, and multi-modal conversational interfaces.',
    pricing: 'Typical: $8k–$40k setup, $0.05–$0.20/interaction',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'AI-Powered Fraud Detection',
    summary: 'Real-time fraud prevention, risk scoring, and transaction monitoring systems.',
    pricing: 'Typical: $15k–$75k setup, $0.01–$0.05/transaction',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Recommendation Engine Development',
    summary: 'Personalized product recommendations, content suggestions, and user behavior analysis.',
    pricing: 'Typical: $12k–$60k setup, $1k–$5k/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'AI-Powered Document Processing',
    summary: 'Automated document extraction, classification, and intelligent data capture.',
    pricing: 'Typical: $6k–$25k setup, $0.10–$0.50/document',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'AI Chatbot & Virtual Assistant',
    summary: 'Intelligent conversational agents with context awareness and multi-platform deployment.',
    pricing: 'Typical: $3k–$15k setup, $0.02–$0.10/message',
    link: 'https://ziontechgroup.com/ai-services'
  }
];

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Network Infrastructure & Security',
    summary: 'Network design, firewall configuration, VPN setup, and network monitoring solutions.',
    pricing: 'Typical: $8k–$50k project, $1k–$5k/month managed',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Database Administration & Optimization',
    summary: 'Database design, performance tuning, backup strategies, and high availability setup.',
    pricing: 'Typical: $5k–$25k project, $2k–$8k/month managed',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'IT Infrastructure Management',
    summary: 'Server management, virtualization, monitoring, and 24/7 IT support services.',
    pricing: 'Typical: $3k–$15k/month managed services',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Disaster Recovery & Business Continuity',
    summary: 'Backup solutions, disaster recovery planning, and business continuity strategies.',
    pricing: 'Typical: $10k–$60k setup, $2k–$10k/month',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Compliance & Audit Services',
    summary: 'SOC 2, GDPR, HIPAA compliance, security audits, and regulatory consulting.',
    pricing: 'Typical: $15k–$75k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'API Development & Integration',
    summary: 'RESTful APIs, microservices architecture, third-party integrations, and API management.',
    pricing: 'Typical: $8k–$40k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Mobile App Development',
    summary: 'Native iOS/Android apps, cross-platform solutions, and mobile backend services.',
    pricing: 'Typical: $15k–$100k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Web Application Development',
    summary: 'Custom web applications, e-commerce solutions, and enterprise web platforms.',
    pricing: 'Typical: $10k–$80k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'IT Consulting & Strategy',
    summary: 'Technology roadmap planning, digital transformation, and IT strategy consulting.',
    pricing: 'Typical: $150–$300/hour',
    link: 'https://ziontechgroup.com/it-services'
  }
];

export default function Services() {
  const Section = ({ title, items }: { title: string; items: Service[] }) => (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 12 }}>{title}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 12 }}>
        {items.map((s) => (
          <a key={s.name} href={s.link} style={{
            border: '1px solid rgba(0,0,0,0.08)', borderRadius: 12, padding: 16,
            background: 'white', textDecoration: 'none', color: '#0b1220'
          }}>
            <div style={{ fontWeight: 700, marginBottom: 6 }}>{s.name}</div>
            <div style={{ opacity: 0.8, fontSize: 14, marginBottom: 8 }}>{s.summary}</div>
            <div style={{ fontSize: 13, color: '#2563eb' }}>{s.pricing}</div>
          </a>
        ))}
      </div>
    </section>
  );

  return (
    <main style={{ background: '#f8fafc', minHeight: 'calc(100vh - 120px)' }}>
      <Section title="Micro SaaS" items={microSaaS} />
      <Section title="AI Services" items={aiServices} />
      <Section title="IT Services" items={itServices} />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
        <Link href="/contact" style={{
          display: 'inline-block', background: '#22d3ee', color: '#0b1220',
          padding: '10px 14px', borderRadius: 10, fontWeight: 700, textDecoration: 'none'
        }}>Request a Quote</Link>
      </section>
    </main>
  );
}
