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
    link: '/micro-saas'
  },
  {
    name: 'LLM Evaluation & Safety Suite',
    summary: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    pricing: 'Typical: $799–$3,500/month',
    link: '/ai-services'
  },
  {
    name: 'Customer Feedback & NPS Micro-App',
    summary: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    pricing: 'Typical: $149–$799/month',
    link: '/micro-saas'
  }
];

const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation',
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.',
    pricing: 'Typical: $2k–$8k setup, $0.02–$0.2/session',
    link: '/ai-services'
  },
  {
    name: 'Predictive Analytics & Forecasting',
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.',
    pricing: 'Typical: $4k–$20k project',
    link: '/ai-services'
  },
  {
    name: 'GenAI Content & SEO Automation',
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.',
    pricing: 'Typical: $1k–$6k/month',
    link: '/ai-services'
  }
];

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
    link: '/it-services'
  },
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
    link: '/it-services'
  },
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
    link: '/it-services'
  }
];

export default function Services() {
  const Section = ({ title, items, description }: { title: string; items: Service[]; description: string }) => (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 800, 
          marginBottom: '1rem',
          color: '#0b1220'
        }}>
          {title}
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#64748b',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {description}
        </p>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem' 
      }}>
        {items.map((s) => (
          <div key={s.name} style={{
            background: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
          }}
          >
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              marginBottom: '1rem',
              color: '#0b1220'
            }}>
              {s.name}
            </h3>
            <p style={{ 
              color: '#64748b', 
              fontSize: '1rem', 
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              {s.summary}
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: 'auto'
            }}>
              <span style={{ 
                fontSize: '0.875rem', 
                color: '#22d3ee',
                fontWeight: 600
              }}>
                {s.pricing}
              </span>
              <a 
                href={s.link} 
                style={{
                  color: '#22d3ee',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
<<<<<<< HEAD
    <main style={{ background: '#f8fafc', minHeight: 'calc(100vh - 120px)' }}>
      <Section title="Micro SaaS" items={microSaaS} />
      <Section title="AI Services" items={aiServices} />
      <Section title="IT Services" items={itServices} />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
        <Link href="/contact" style={{
          display: 'inline-block', background: '#22d3ee', color: '#0b1220',
          padding: '10px 14px', borderRadius: 10, fontWeight: 700
        }}>Request a Quote</Link>
=======
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            marginBottom: '1rem' 
          }}>
            Our Services
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.9 
          }}>
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <Section 
        title="Micro SaaS Solutions" 
        description="Scalable software-as-a-service platforms that solve specific business challenges with modern technology."
        items={microSaaS} 
      />
      <Section 
        title="AI Services" 
        description="Cutting-edge artificial intelligence solutions that automate processes and unlock new business insights."
        items={aiServices} 
      />
      <Section 
        title="IT Services" 
        description="Comprehensive IT infrastructure, security, and cloud services to support your business operations."
        items={itServices} 
      />

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0b1220 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Let&apos;s discuss your project requirements and create a custom solution for your business.
          </p>
          <Link href="/contact" style={{
            background: '#22d3ee',
            color: '#0b1220',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1.125rem'
          }}>
            Request a Quote
          </Link>
        </div>
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
      </section>
    </main>
  );
}
