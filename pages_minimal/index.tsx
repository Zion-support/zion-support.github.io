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
          <strong>New:</strong> Executive Brief — Zero‑Downtime Agent Releases (2026) is live.{' '}
          <Link href="/reports/briefs/brief-2026-zero-downtime-agent-releases" style={{ color: '#fff', textDecoration: 'underline' }}>Read now →</Link>
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
