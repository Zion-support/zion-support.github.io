import Link from 'next/link';

type ContentItem = {
  title: string;
  href: string;
  desc?: string;
  createdAt?: string;
  source?: string;
};

type HomeProps = {
  items: ContentItem[];
};

export default function Home({ items }: HomeProps) {
  return (
    <div>
      <main>
        <div style={{ background: '#0ea5e9', color: '#fff', padding: '12px 16px', borderRadius: 8, marginBottom: 16 }}>
          <strong>New:</strong> Incident Triage Playbook (2026), Agent SLO Starter Kit, and a 31% cost‑cut Case Study.{' '}
          <Link href="/blog/ai-2026-incident-triage-eval-gates-playbook" style={{ color: '#fff', textDecoration: 'underline' }}>Read playbook →</Link>
          <span style={{ margin: '0 8px' }}>|</span>
          <Link href="/reports/guides/guide-2026-agent-slo-starter-kit" style={{ color: '#fff', textDecoration: 'underline' }}>SLO starter →</Link>
          <span style={{ margin: '0 8px' }}>|</span>
          <Link href="/reports/cases/case-2026-governed-model-routing-31" style={{ color: '#fff', textDecoration: 'underline' }}>See 31% savings →</Link>
        </div>
        <h1>Welcome to Zion Tech Group</h1>
        <p>Advanced IT Solutions & AI Services</p>
        <Link href="/services">View Our Services</Link>

        <section style={{ marginTop: 32 }}>
          <h2>Latest Content</h2>
          <ul>
            {items.slice(0, 5).map((item) => (
              <li key={item.href} style={{ marginBottom: 8 }}>
                <Link href={item.href}>{item.title}</Link>
                {item.desc ? (
                  <div style={{ fontSize: 14, color: '#555' }}>{item.desc}</div>
                ) : null}
              </li>
            ))}
          </ul>
          <Link href="/explore">Explore more →</Link>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const fallback = await import('../public/automation/new-content-registry.json');
    const data = (fallback.default || fallback) as { items?: ContentItem[] };
    const items = (data.items || []).sort((a, b) => {
      const da = a.createdAt ? Date.parse(a.createdAt) : 0;
      const db = b.createdAt ? Date.parse(b.createdAt) : 0;
      return db - da;
    });
    return { props: { items } };
  } catch {
    return { props: { items: [] } };
  }
}
