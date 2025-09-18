import React from 'react';
const ContentPromotionBanner: React.FC = () => {
  const featured = getFeaturedBlogPosts();
  const recent = getRecentBlogPosts(3);
  const picks = (featured.length > 0 ? featured.slice(0, 3) : recent).map(p => ({
    href: `/blog/${p.slug}`,
    label: p.title,
    emoji: '🆕'
  }));

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-8 text-white text-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <span className="text-2xl">🎉</span>
        <h3 className="text-xl font-bold">Fresh insights just dropped</h3>
        <span className="text-2xl">🎉</span>
      </div>
      <p className="text-lg opacity-90 mb-4">
        Explore our latest featured articles hand‑picked by the editorial team
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {picks.map((item) => (
          <a key={item.href} href={item.href} className="inline-block bg-white text-green-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
            <span className="mr-1">{item.emoji}</span>
            {item.label}
            <span className="ml-1">→</span>
          </a>
        ))}
      </div>
    </div>
  );
  };
export default ContentPromotionBanner;
