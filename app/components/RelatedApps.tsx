import Link from 'next/link';

// Interlinks between the Zion apps network (shared by every app page).
const RELATED_APPS: { slug: string; title: string; emoji: string }[] = [
  { slug: 'zion-ai-field-service-manager', title: 'AI Field Service Manager', emoji: '🛠️' },
  { slug: 'zion-ai-incident-response', title: 'AI Incident Response', emoji: '🚨' },
  { slug: 'zion-ai-help-desk', title: 'AI Help Desk', emoji: '🎧' },
  { slug: 'zion-ai-resource-scheduler', title: 'AI Resource Scheduler', emoji: '📅' },
  { slug: 'zion-ai-predictive-analytics', title: 'AI Predictive Analytics', emoji: '📈' },
  { slug: 'zion-ai-vendor-manager', title: 'AI Vendor Manager', emoji: '🤝' },
  { slug: 'zion-ai-procurement-automation', title: 'AI Procurement Automation', emoji: '🛒' },
  { slug: 'zion-ai-quality-insights', title: 'AI Quality Insights', emoji: '✅' },
];

export default function RelatedApps() {
  return (
    <div className="glass-card mb-12">
      <h2 className="text-2xl font-semibold text-white mb-6">Explore more Zion apps</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {RELATED_APPS.map((app) => (
          <Link
            key={app.slug}
            href={`/${app.slug}/`}
            className="p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 hover:border-purple-500/60 transition"
          >
            <span className="text-2xl">{app.emoji}</span>
            <h3 className="font-semibold text-white mt-2 text-sm">{app.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
