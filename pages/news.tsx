import Head from 'next/head';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Platform",
      excerpt: "Our new AI platform revolutionizes how businesses approach automation and intelligence.",
      date: "2025-01-15",
      category: "Product Launch",
      image: "/api/placeholder/600/400",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Partnership with Leading Cloud Provider Announced",
      excerpt: "Strategic partnership to enhance our cloud infrastructure capabilities.",
      date: "2025-01-12",
      category: "Partnership",
      image: "/api/placeholder/600/400",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Industry Recognition: Best AI Solutions 2025",
      excerpt: "Zion Tech Group recognized as the leading AI solutions provider.",
      date: "2025-01-10",
      category: "Awards",
      image: "/api/placeholder/600/400",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "New Office Opening in Silicon Valley",
      excerpt: "Expanding our presence with a new state-of-the-art facility.",
      date: "2025-01-08",
      category: "Company News",
      image: "/api/placeholder/600/400",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Research Breakthrough in Quantum Computing",
      excerpt: "Our research team achieves significant breakthrough in quantum algorithms.",
      date: "2025-01-05",
      category: "Research",
      image: "/api/placeholder/600/400",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Customer Success Story: 300% ROI Increase",
      excerpt: "How our AI solutions helped a client achieve remarkable business growth.",
      date: "2025-01-03",
      category: "Success Story",
      image: "/api/placeholder/600/400",
      readTime: "7 min read"
    }
  ];

  const categories = ["All", "Product Launch", "Partnership", "Awards", "Company News", "Research", "Success Story"];

  return (
    <>
      <Head>
        <title>News - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and insights from Zion Tech Group." />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Latest News
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stay informed with the latest updates, announcements, and insights from Zion Tech Group.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white/80 text-sm">{article.readTime}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{article.date}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200">
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
