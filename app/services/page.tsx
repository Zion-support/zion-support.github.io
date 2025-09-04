import Link from 'next/link';

export const metadata = { title: 'Services | Zion Tech Group' };

export default function ServicesOverviewPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>Services</h1>
      <p style={{marginTop: 8, color: '#374151'}}>Product engineering and AI-first consulting to deliver measurable outcomes.</p>
      <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 24}}>
        <ServiceCard href="/services/micro-saas" title="Micro SaaS" bullets={["Foundational architecture", "Billing + subscriptions", "Growth analytics"]} />
        <ServiceCard href="/services/ai-services" title="AI Services" bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]} />
        <ServiceCard href="/services/it-services" title="IT Services" bullets={["Cloud migration", "DevOps + SRE", "Security"]} />
      </div>
      <CTA />
    </section>
  );
}

function ServiceCard({ href, title, bullets }: { href: string; title: string; bullets: string[] }) {
  return (
    <Link href={href} style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, display: 'block'}}>
      <h3 style={{fontWeight: 700, marginBottom: 8}}>{title}</h3>
      <ul style={{color: '#4b5563', paddingLeft: 18}}>
        {bullets.map((b) => (<li key={b} style={{listStyle: 'disc'}}>{b}</li>))}
      </ul>
    </Link>
  );
}

function CTA() {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, marginTop: 24}}>
      <h3 style={{fontWeight: 700}}>Talk to an expert</h3>
      <p style={{color: '#4b5563'}}>Mobile: +1 302 464 0950 · Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
      <a href="https://ziontechgroup.com" style={{display: 'inline-block', marginTop: 8, padding: '8px 12px', background: '#111827', color: '#fff', borderRadius: 8}}>Get Started</a>
    </div>
  );
}

