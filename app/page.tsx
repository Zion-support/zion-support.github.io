import Link from 'next/link';

export default function HomePage() {
  return (
    <section>
      <h1 style={{fontSize: 28, fontWeight: 800, lineHeight: 1.2}}>Build and scale with AI, Micro SaaS and Enterprise IT</h1>
      <p style={{marginTop: 12, color: '#374151'}}>We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, automation, cloud infra, and secure micro SaaS products.</p>
      <div style={{display: 'flex', gap: 12, marginTop: 20, flexWrap: 'wrap'}}>
        <Link href="/services" style={{background: '#111827', color: '#fff', padding: '10px 14px', borderRadius: 8}}>Explore Services</Link>
        <a href="https://ziontechgroup.com" style={{padding: '10px 14px', border: '1px solid #111827', borderRadius: 8}}>Visit Main Site</a>
      </div>

      <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 32}}>
        <Card title="Micro SaaS" href="/services/micro-saas" description="End-to-end product engineering with billing, auth, analytics and growth."/>
        <Card title="AI Services" href="/services/ai-services" description="LLM apps, RAG, agents, fine-tuning, evals, data pipelines and MLOps."/>
        <Card title="IT Services" href="/services/it-services" description="Cloud migration, DevOps, SRE, security hardening and cost optimization."/>
      </div>
    </section>
  );
}

function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, display: 'block'}}>
      <h3 style={{fontWeight: 700, marginBottom: 6}}>{title}</h3>
      <p style={{color: '#4b5563'}}>{description}</p>
    </Link>
  );
}

