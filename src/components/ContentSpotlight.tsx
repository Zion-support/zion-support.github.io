import { useEffect, useState } from 'react';

type ContentItem = {
  title: string;
  href: string;
  desc?: string;
  createdAt?: string;
  source?: string;
};

const ContentSpotlight: React.FC = () => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    fetch('/automation/content-registry.json')
      .then((r) => r.json())
      .then((data) => {
        if (!isMounted) return;
        const list: ContentItem[] = Array.isArray(data?.items) ? data.items : [];
        const sorted = list
          .slice()
          .sort((a, b) => {
            const da = a.createdAt ? Date.parse(a.createdAt) : 0;
            const db = b.createdAt ? Date.parse(b.createdAt) : 0;
            return db - da;
          })
          .slice(0, 6);
        setItems(sorted);
      })
      .catch(() => setError('Failed to load latest content'))
      .finally(() => setLoading(false));
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="mb-12">
        <div className="animate-pulse h-8 w-48 bg-white/10 rounded mb-4" />
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="h-28 bg-white/5 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-12">
        <div className="text-red-300 text-sm">{error}</div>
      </div>
    );
  }

  if (!items.length) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="mb-6">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-semibold">
          New Content
        </div>
        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">Latest from the Library</h2>
        <p className="text-white/70 text-sm md:text-base">Fresh guides, updates, and case studies.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <a
            key={`${item.href}-${index}`}
            href={item.href}
            className="block group rounded-xl p-5 bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold group-hover:underline">
                {item.title}
              </h3>
              <span className="text-xs text-white/60 ml-3">
                {item.source || 'content'}
              </span>
            </div>
            {item.desc && (
              <p className="mt-2 text-sm text-white/70 line-clamp-2">{item.desc}</p>
            )}
            {item.createdAt && (
              <div className="mt-3 text-xs text-white/50">
                {new Date(item.createdAt).toLocaleDateString()}
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContentSpotlight;
