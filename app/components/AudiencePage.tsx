import Link from 'next/link';
import PageShell from './PageShell';
import HubCards from './HubCards';

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
      <HubCards items={cards} />
    </PageShell>
  );
}
