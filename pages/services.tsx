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
    link: '/services/micro-saas'
  },
  {
    name: 'LLM Evaluation & Safety Suite',
    summary: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    pricing: 'Typical: $799–$3,500/month',
    link: '/services/ai-services'
  },
  {
    name: 'Customer Feedback & NPS Micro-App',
    summary: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    pricing: 'Typical: $149–$799/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Event Management Dashboard',
    summary: 'Comprehensive event management with ticket sales, attendee tracking, and real-time analytics.',
    pricing: 'Typical: $199–$999/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Customer Support & Helpdesk Platform',
    summary: 'Complete support solution with ticket management, knowledge base, and AI chatbots.',
    pricing: 'Typical: $99–$599/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Project Management & Collaboration',
    summary: 'Streamlined project management with task tracking, team collaboration, and time tracking.',
    pricing: 'Typical: $79–$399/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Invoice & Billing Management',
    summary: 'Automated invoicing and billing with payment processing and financial reporting.',
    pricing: 'Typical: $49–$299/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Lead Generation & CRM',
    summary: 'Intelligent lead generation with automated follow-ups and sales pipeline tracking.',
    pricing: 'Typical: $149–$799/month',
    link: '/services/micro-saas'
  }
];

const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation',
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.',
    pricing: 'Typical: $2k–$8k setup, $0.02–$0.2/session',
    link: '/services/ai-services'
  },
  {
    name: 'Predictive Analytics & Forecasting',
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.',
    pricing: 'Typical: $4k–$20k project',
    link: '/services/ai-services'
  },
  {
    name: 'GenAI Content & SEO Automation',
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.',
    pricing: 'Typical: $1k–$6k/month',
    link: '/services/ai-services'
  },
  {
    name: 'AI-Powered Email Responder',
    summary: 'Intelligent email automation with smart classification and auto-response generation.',
    pricing: 'Typical: $1.5k–$8k setup, $0.05–$0.15/email',
    link: '/services/ai-services'
  },
  {
    name: 'AI Document Processing & OCR',
    summary: 'Advanced document digitization with intelligent data extraction and form processing.',
    pricing: 'Typical: $3k–$15k setup, $0.02–$0.10/page',
    link: '/services/ai-services'
  },
  {
    name: 'AI Voice Assistant & IVR',
    summary: 'Intelligent voice assistants with natural language understanding and multi-language support.',
    pricing: 'Typical: $5k–$25k setup, $0.10–$0.50/call',
    link: '/services/ai-services'
  },
  {
    name: 'AI Fraud Detection & Security',
    summary: 'Advanced fraud detection using machine learning to identify suspicious activities.',
    pricing: 'Typical: $8k–$40k setup, $0.01–$0.05/transaction',
    link: '/services/ai-services'
  },
  {
    name: 'AI Recommendation Engine',
    summary: 'Personalized recommendation systems to boost engagement and sales.',
    pricing: 'Typical: $4k–$20k setup, $0.02–$0.10/recommendation',
    link: '/services/ai-services'
  }
];

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
    link: '/services/it-services'
  },
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
    link: '/services/it-services'
  },
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
    link: '/services/it-services'
  },
  {
    name: 'Cloud Architecture & Design',
    summary: 'Expert cloud architecture design for scalable, secure, and cost-effective solutions.',
    pricing: 'Typical: $8k–$50k project',
    link: '/services/it-services'
  },
  {
    name: 'Disaster Recovery & Backup',
    summary: 'Comprehensive disaster recovery and backup solutions for business continuity.',
    pricing: 'Typical: $5k–$25k setup, $500–$2k/month',
    link: '/services/it-services'
  },
  {
    name: 'API Development & Integration',
    summary: 'Custom API development and third-party integrations to streamline operations.',
    pricing: 'Typical: $3k–$20k project',
    link: '/services/it-services'
  },
  {
    name: 'Mobile App Development',
    summary: 'Native and cross-platform mobile application development for iOS and Android.',
    pricing: 'Typical: $10k–$100k project',
    link: '/services/it-services'
  },
  {
    name: 'Web Application Development',
    summary: 'Custom web application development with modern frameworks and scalable architecture.',
    pricing: 'Typical: $8k–$80k project',
    link: '/services/it-services'
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
        <a href="/contact" style={{
          display: 'inline-block', background: '#22d3ee', color: '#0b1220',
          padding: '10px 14px', borderRadius: 10, fontWeight: 700
        }}>Request a Quote</a>
      </section>
    </main>
  );
}
