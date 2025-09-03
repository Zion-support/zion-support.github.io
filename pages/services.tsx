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
    name: 'AI-Powered Email Follow-Up Automation',
    summary: 'Intelligent email sequences that adapt based on recipient behavior and engagement metrics.',
    pricing: 'Typical: $199–$899/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'E-Commerce Return Management SaaS',
    summary: 'Streamlined return processing with automated workflows and fraud detection.',
    pricing: 'Typical: $299–$1,299/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'Mobile-First Survey & Feedback Platform',
    summary: 'Adaptive surveys that personalize based on responses with real-time analytics.',
    pricing: 'Typical: $149–$699/month',
    link: 'https://ziontechgroup.com/micro-saas'
  },
  {
    name: 'AI Content Creation & SEO Suite',
    summary: 'End-to-end content generation with SEO optimization and performance tracking.',
    pricing: 'Typical: $399–$1,999/month',
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
    name: 'AI-Powered Email Responder',
    summary: 'Intelligent email management that reads, categorizes, and responds to emails with human oversight.',
    pricing: 'Typical: $800–$4,000/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Computer Vision Analytics Platform',
    summary: 'Advanced image and video analysis for quality control, security, and business intelligence.',
    pricing: 'Typical: $2,500–$12,000/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'AI-Powered Business Intelligence',
    summary: 'Automated insights generation from business data with natural language querying.',
    pricing: 'Typical: $1,500–$7,000/month',
    link: 'https://ziontechgroup.com/ai-services'
  },
  {
    name: 'Voice AI & Speech Processing',
    summary: 'Advanced speech recognition, synthesis, and voice analytics for customer service.',
    pricing: 'Typical: $1,000–$5,000/month',
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
    name: 'Zero Trust Security Architecture',
    summary: 'Comprehensive security framework with identity verification and network segmentation.',
    pricing: 'Typical: $8k–$40k project or $160–$220/hr',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Kubernetes & Container Orchestration',
    summary: 'Production-ready containerization with auto-scaling and service mesh.',
    pricing: 'Typical: $5k–$25k project or $140–$200/hr',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'API Gateway & Microservices Architecture',
    summary: 'Scalable microservices architecture with API management and security.',
    pricing: 'Typical: $4k–$20k project or $130–$190/hr',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Disaster Recovery & Business Continuity',
    summary: 'Comprehensive backup, replication, and disaster recovery solutions.',
    pricing: 'Typical: $3k–$18k project or $120–$180/hr',
    link: 'https://ziontechgroup.com/it-services'
  },
  {
    name: 'Performance Optimization & Monitoring',
    summary: 'Application and infrastructure performance tuning with comprehensive monitoring.',
    pricing: 'Typical: $2.5k–$15k project or $120–$180/hr',
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
