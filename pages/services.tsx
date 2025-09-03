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
    link: 'https://ziontechgroup.com/services-catalog#micro-saas'
  },
  {
    name: 'API Gateway & Rate Limiting Service',
    summary: 'Enterprise-grade API management with intelligent rate limiting, analytics, and security policies.',
    pricing: 'Typical: $199–$1,299/month',
    link: 'https://ziontechgroup.com/services-catalog#micro-saas'
  },
  {
    name: 'Real-time Analytics Dashboard',
    summary: 'Custom business intelligence dashboards with real-time data streaming and automated insights.',
    pricing: 'Typical: $399–$2,499/month',
    link: 'https://ziontechgroup.com/services-catalog#micro-saas'
  },
  {
    name: 'Smart Document Processing',
    summary: 'AI-powered document extraction, classification, and workflow automation for business processes.',
    pricing: 'Typical: $299–$1,899/month',
    link: 'https://ziontechgroup.com/services-catalog#micro-saas'
  },
  {
    name: 'Multi-Channel Notification Hub',
    summary: 'Unified notification system supporting email, SMS, push, Slack, and webhook integrations.',
    pricing: 'Typical: $149–$999/month',
    link: 'https://ziontechgroup.com/services-catalog#micro-saas'
  },
  {
    name: 'Inventory Intelligence Platform',
    summary: 'AI-driven inventory optimization with demand forecasting and automated reordering.',
    pricing: 'Typical: $499–$3,999/month',
    link: 'https://ziontechgroup.com/services-catalog#micro-saas'
  }
];

const aiServices: Service[] = [
  {
    name: 'Computer Vision Analytics Platform',
    summary: 'Advanced image and video analysis for quality control, security, and business intelligence.',
    pricing: 'Typical: $2,500–$15,000/month',
    link: 'https://ziontechgroup.com/services-catalog#ai'
  },
  {
    name: 'Natural Language Processing API',
    summary: 'Enterprise-grade NLP services for text analysis, sentiment, and language understanding.',
    pricing: 'Typical: $800–$5,000/month',
    link: 'https://ziontechgroup.com/services-catalog#ai'
  },
  {
    name: 'AI-Powered Fraud Detection',
    summary: 'Real-time fraud prevention using machine learning and behavioral analytics.',
    pricing: 'Typical: $1,500–$12,000/month',
    link: 'https://ziontechgroup.com/services-catalog#ai'
  },
  {
    name: 'Intelligent Document Search',
    summary: 'Semantic search and knowledge discovery across enterprise document repositories.',
    pricing: 'Typical: $999–$6,000/month',
    link: 'https://ziontechgroup.com/services-catalog#ai'
  },
  {
    name: 'AI Content Generation Suite',
    summary: 'Multi-modal content creation including text, images, and video with brand consistency.',
    pricing: 'Typical: $1,200–$8,500/month',
    link: 'https://ziontechgroup.com/services-catalog#ai'
  },
  {
    name: 'Voice AI & Speech Analytics',
    summary: 'Advanced speech recognition, analysis, and voice-enabled applications.',
    pricing: 'Typical: $1,500–$10,000/month',
    link: 'https://ziontechgroup.com/services-catalog#ai'
  }
];

const itServices: Service[] = [
  {
    name: 'Kubernetes Platform Engineering',
    summary: 'Production-ready Kubernetes clusters with monitoring, security, and GitOps workflows.',
    pricing: 'Typical: $8,000–$50,000 fixed or $160–$250/hr',
    link: 'https://ziontechgroup.com/services-catalog#it'
  },
  {
    name: 'Zero Trust Security Architecture',
    summary: 'Comprehensive zero trust implementation with identity, network, and data protection.',
    pricing: 'Typical: $12,000–$75,000 fixed or $180–$280/hr',
    link: 'https://ziontechgroup.com/services-catalog#it'
  },
  {
    name: 'Edge Computing Infrastructure',
    summary: 'Distributed edge computing platform for low-latency applications and IoT.',
    pricing: 'Typical: $10,000–$60,000 fixed or $170–$260/hr',
    link: 'https://ziontechgroup.com/services-catalog#it'
  },
  {
    name: 'Blockchain & Web3 Integration',
    summary: 'Enterprise blockchain solutions, smart contracts, and Web3 application development.',
    pricing: 'Typical: $15,000–$100,000 fixed or $200–$350/hr',
    link: 'https://ziontechgroup.com/services-catalog#it'
  },
  {
    name: 'Quantum-Safe Cryptography',
    summary: 'Post-quantum cryptography implementation for future-proof security.',
    pricing: 'Typical: $8,000–$45,000 fixed or $180–$280/hr',
    link: 'https://ziontechgroup.com/services-catalog#it'
  },
  {
    name: 'AR/VR Development Platform',
    summary: 'Immersive technology solutions for training, collaboration, and customer engagement.',
    pricing: 'Typical: $12,000–$80,000 fixed or $200–$350/hr',
    link: 'https://ziontechgroup.com/services-catalog#it'
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
          padding: '10px 14px', borderRadius: 10, fontWeight: 700
        }}>Request a Quote</Link>
      </section>
    </main>
  );
}
