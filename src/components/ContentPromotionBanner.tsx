import { Link } from 'react-router-dom';

export default function ContentPromotionBanner() {
  const featuredContent = [
    {
      title: "Edge Inference Patterns That Actually Reduce Latency",
      category: "AI Infrastructure",
      readTime: "7 min read",
      isNew: true,
    },
    {
      title: "North‑Star Engineering Metrics: Fewer KPIs, Better Outcomes",
      category: "Leadership",
      readTime: "5 min read",
      isNew: true,
    },
    {
      title: "OpenTelemetry in Production: Traces That Engineers Use",
      category: "Observability",
      readTime: "6 min read",
      isNew: true,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent" />
      </div>
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-yellow-300 uppercase tracking-wide">
                Fresh Content
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest from Zion Insights
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Fresh articles on AI automation, cloud security, and developer productivity. 
              Stay ahead with expert analysis and practical guides.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              to="/blog"
              className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Explore All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              View Case Studies
            </Link>
          </div>
        </div>
        {/* Featured Content Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredContent.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-blue-200 bg-blue-500/20 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                {item.isNew && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    NEW
                  </span>
                )}
              </div>
              <h3 className="font-bold text-white mb-2 line-clamp-2">
                {item.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">
                  {item.readTime}
                </span>
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-sm text-white/80">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10K+</div>
            <div className="text-sm text-white/80">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">25+</div>
            <div className="text-sm text-white/80">Expert Authors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">4.9★</div>
            <div className="text-sm text-white/80">Reader Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}