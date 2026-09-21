import Link from 'next/link';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'URL Audit Assistant | Zion Tech Group',
  description: 'Audit website URLs for SEO, content, and technical issues with Zion Tech Group.',
  alternates: { canonical: '/ai/url-audit-assistant/' },
};

export default function UrlAuditAssistantPage() {
  return (
    <PageShell
      title="URL Audit Assistant"
      description="Analyze URLs for SEO, content, and technical factors. Get actionable insights on how AI could optimize your web presence."
      eyebrow="AI Lab"
      align="center"
      canonical="https://ziontechgroup.com/ai/url-audit-assistant/"
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Request an audit</Link>
          <Link href="/ai/" className="btn-secondary">Back to AI Lab</Link>
        </>
      }
    >
      <div className="page-card mx-auto max-w-3xl text-center">
        <p className="text-slate-300">
          Share a URL and we will return crawl issues, metadata gaps, and a prioritized fix list. The interactive assistant is available through a discovery call.
        </p>
      </div>
    </PageShell>
  );
}
