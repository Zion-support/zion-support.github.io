import Link from 'next/link';
import PageShell from './PageShell';

export type AudiencePageProps = {
  title: string;
  description: string;
  eyebrow: string;
  path: string;
  cards: Array<{ title: string; body: string }>;
};

export default function AudiencePage({ title, description, eyebrow, path, cards }: AudiencePageProps) {
  return (
    <PageShell
      title={title}
      description={description}
      eyebrow={eyebrow}
      align="center"
      canonical={`https://ziontechgroup.com${path}`}
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: title },
      ]}
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Talk to Zion</Link>
          <Link href="/services/" className="btn-secondary">Browse services</Link>
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div key={card.title} className="page-card">
            <h2 className="text-xl font-semibold text-white">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{card.body}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
