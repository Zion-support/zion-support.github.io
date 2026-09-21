import PageShell from '@/components/PageShell';

export const metadata = {
  title: 'Knowledge Base — Client Portal',
  description: 'Documentation, guides, how-tos, and technical resources.',
  alternates: { canonical: '/portal/kb/' },
};

export default function KnowledgeBasePage() {
  const articles = [
    { title: 'Getting Started Guide', desc: 'Set up your account, configure integrations, and run your first AI workflow.' },
    { title: 'API Reference', desc: 'Complete API documentation with examples and authentication details.' },
    { title: 'Best Practices', desc: 'Recommended patterns for security, performance, and cost optimization.' },
    { title: 'Troubleshooting', desc: 'Common issues, log analysis, and how to escalate to our support team.' },
    { title: 'Release Notes', desc: 'Latest feature releases, bug fixes, and deprecation notices.' },
  ];

  return (
    <PageShell
      title="Knowledge Base"
      description="Documentation, guides, how-tos, and technical resources to get the most from your Zion Tech solutions."
      eyebrow="Client Portal"
      align="center"
      canonical="https://ziontechgroup.com/portal/kb/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Client Portal', href: '/portal' },
        { label: 'Knowledge Base' },
      ]}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <div key={article.title} className="page-card">
            <h3 className="mb-1 font-semibold text-white">{article.title}</h3>
            <p className="text-sm text-slate-400">{article.desc}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
