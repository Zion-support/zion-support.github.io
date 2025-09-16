import React from 'react';

const ContentPromotionBanner: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">ContentPromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
  const featured = getFeaturedBlogPosts();
  const recent = getRecentBlogPosts(3);

  const now = new Date();
  const sevenDaysMs = 7 * 24 * 60 * 60 * 1000;
  const isNewThisWeek = (dateStr: string) => {
    const d = new Date(dateStr);
    return now.getTime() - d.getTime() <= sevenDaysMs;
  };

  const newThisWeek = [...featured, ...recent].filter(p => isNewThisWeek(p.publishDate));
  const picks = (featured.length > 0 ? featured.slice(0, 3) : recent).map(p => ({
    href: `/blog/${p.slug}`,
    label: p.title,
    emoji: '🆕'
  }));

  return (
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-8 text-white text-center">
      <div className="flex items-center justify-center space-x-2 mb-2">
        <span className="text-2xl">🎉</span>
        <h3 className="text-xl font-bold">{newThisWeek.length > 0 ? 'New this week' : 'Fresh insights just dropped'}</h3>
        <span className="text-2xl">🎉</span>
      </div>
      <p className="text-lg opacity-90 mb-4">
        {newThisWeek.length > 0 ? 'Hot off the press — explore the latest additions' : 'Explore our latest featured articles hand‑picked by the editorial team'}
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default ContentPromotionBanner;