import { useEffect, useState } from 'react';

type ContentItem = {
  title: string;
  href: string;
  desc?: string;
  createdAt?: string;
  source?: string;
};

const NewContentAdBanner: React.FC = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch('/automation/content-registry.json')
      .then((r) => r.json())
      .then((data) => {
        if (!isMounted) return;
        const list: ContentItem[] = Array.isArray(data?.items) ? data.items : [];
        const recent = list
          .filter((x) => x && x.title && x.href)
          .sort((a, b) => {
            const da = a.createdAt ? Date.parse(a.createdAt) : 0;
            const db = b.createdAt ? Date.parse(b.createdAt) : 0;
            return db - da;
          })
          .slice(0, 4);
        setItems(recent);
      })
      .catch(() => setError('Unable to load new content.'));
    return () => {
      isMounted = false;
    };
  }, []);

  const headline = items.length > 0
    ? 'Fresh drops — explore our newest content'
    : 'Explore our latest guides, briefs, and case studies';

  if (error) {
    return (
      <div className="rounded-2xl p-4 border border-red-400/30 bg-red-500/10 text-red-200 text-sm">
        {error}
      </div>
    );
  }

  return (
    <section className="mb-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600">
        <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

        <div className="relative p-6 md:p-8 text-white">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">📣</span>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">{headline}</h3>
            <span className="text-2xl">✨</span>
          </div>
          <p className="text-white/85 text-center max-w-3xl mx-auto mb-4">
            Hand-picked resources to help you ship reliable, safe agentic systems.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {items.map((item, index) => (
              <a
                key={`${item.href}-${index}`}
                href={item.href}
                className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:text-indigo-800 px-4 py-2 rounded-lg font-semibold text-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <span>🆕</span>
                <span className="line-clamp-1">{item.title}</span>
                <span className="opacity-70">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentAdBanner;
