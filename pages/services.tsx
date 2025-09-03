import Link from 'next/link'

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
    name: 'AI Email Responder Pro',
    summary: 'Intelligent email automation with sentiment analysis, smart categorization, and auto-responses.',
    pricing: 'Typical: $199–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'E-Commerce Return Manager',
    summary: 'Automated return processing, label generation, and status tracking for online stores.',
    pricing: 'Typical: $99–$599/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'AI Video Clip Generator',
    summary: 'Automatically creates social media clips from long-form videos with smart editing.',
    pricing: 'Typical: $149–$799/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Mobile Survey Builder',
    summary: 'Create engaging, adaptive surveys optimized for mobile with real-time analytics.',
    pricing: 'Typical: $79–$399/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'AI Content Calendar Manager',
    summary: 'Automated content planning, scheduling, and performance tracking across platforms.',
    pricing: 'Typical: $199–$999/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Social Media Analytics AI',
    summary: 'Advanced social media insights with competitor analysis and trend prediction.',
    pricing: 'Typical: $299–$1,299/month',
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
    name: 'AI-Powered Talent Matching',
    summary: 'Advanced algorithms for connecting businesses with perfect tech talent based on skills and fit.',
    pricing: 'Typical: $1.5k–$7k/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Computer Vision Analytics',
    summary: 'Image recognition, object detection, and visual analytics for business intelligence.',
    pricing: 'Typical: $3k–$15k project',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'AI Document Processing',
    summary: 'Intelligent document extraction, classification, and data entry automation.',
    pricing: 'Typical: $2k–$10k setup, $0.05–$0.5/document',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Natural Language Processing API',
    summary: 'Text analysis, sentiment detection, entity extraction, and language translation services.',
    pricing: 'Typical: $500–$3k/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'AI Fraud Detection System',
    summary: 'Real-time fraud prevention with machine learning models for transactions and user behavior.',
    pricing: 'Typical: $5k–$25k setup, $0.01–$0.1/transaction',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Quantum Computing Solutions',
    summary: 'Quantum algorithms for optimization, cryptography, and complex problem-solving.',
    pricing: 'Typical: $10k–$50k project',
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
    name: 'API Gateway & Microservices',
    summary: 'Design, implement, and manage scalable API architectures with rate limiting and monitoring.',
    pricing: 'Typical: $8k–$35k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Database Optimization & Migration',
    summary: 'Performance tuning, scaling, and migration to modern database solutions.',
    pricing: 'Typical: $5k–$25k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Infrastructure as Code (IaC)',
    summary: 'Terraform, Pulumi, and CloudFormation automation for consistent deployments.',
    pricing: 'Typical: $3k–$15k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Kubernetes & Container Orchestration',
    summary: 'Container deployment, scaling, and management with monitoring and security.',
    pricing: 'Typical: $6k–$30k project',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Disaster Recovery & Backup Solutions',
    summary: 'Automated backup systems, disaster recovery planning, and business continuity.',
    pricing: 'Typical: $4k–$20k project, $500–$2k/month managed',
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
