import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Insights | Zion OS - AI-Powered Digital Economies',
  description: 'Practical guidespricing insightsand implementation tips for building AI-powered digital economies. Learn from our latest research and real-world deployments.',
  keywords: 'AI deploymentdigital economyWeb3blockchainenterprise AIautomationgovernance',
  openGraph: {
    title: 'Blog & Insights | Zion OS',
    description: 'Practical guidespricing insightsand implementation tips for building AI-powered digital economies.',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const posts = [
    {
      slug: "ai-deployment-blueprint-2025",
      title: "AI Deployment Blueprint: Launch Faster in 2025",
      excerpt: "A pragmatic guide to ship AI assistantsanalyticsand automation safely and quickly. Learn production-ready patterns for enterprise AI deployment.",
      date: "2025-09-12",
      tag: "AI",
      readTime: "8 min read",
      featured: true
    },
    {
      slug: "service-pricing-starters-for-smbs",
      title: "Starter Pricing: AITand Web3 Service Bundles",
      excerpt: "Transparent entry pricing and project ranges so teams can budget with confidence. Real-world pricing data from 100+ deployments.",
      date: "2025-09-12",
      tag: "Business",
      readTime: "6 min read",
      featured: false
    },
    {
      slug: "web3-stack-checklist-for-enterprise",
      title: "Enterprise Web3 Stack Checklist",
      excerpt: "From smart contracts to infra minimal-but-complete checklist to get production-ready. Securityscalabilityand compliance included.",
      date: "2025-09-12",
      tag: "Web3",
      readTime: "12 min read",
      featured: true
    },
    {
      slug: "ai-governance-roadmap-2025",
      title: "AI Governance Roadmap 2025: From Policy to Production",
      excerpt: "Comprehensive guide to implementing AI governance frameworks in enterprise environments. Risk managementcomplianceand operational excellence.",
      date: "2025-09-11",
      tag: "Governance",
      readTime: "15 min read",
      featured: false
    },
    {
      slug: "sovereign-ai-security-basics",
      title: "Sovereign AI Security: Essential Patterns for 2025",
      excerpt: "Security-first approaches to AI deployment in sovereign environments. Data privacymodel protectionand threat mitigation strategies.",
      date: "2025-09-10",
      tag: "Security",
      readTime: "10 min read",
      featured: false
    },
    {
      slug: "observability-for-llm-agents",
      title: "Observability for LLM Agents: Production Monitoring Guide",
      excerpt: "Complete observability stack for production LLM agents. Metricsloggingtracingand debugging strategies for reliable AI systems.",
      date: "2025-09-09",
      tag: "DevOps",
      readTime: "14 min read",
      featured: false
    }
  ];

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Insights & Updates
          </h1>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Practical guidespricing insightsand implementation tips for building AI-powered digital economies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Updated Weekly
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Production Tested
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              Enterprise Ready
            </span>
          </div>
        </div>
      </header>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
              <p className="text-white/70">Our most popular and comprehensive guides</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
                      {post.tag}
                    </span>
                    <span className="text-xs text-white/50">{post.readTime}</span>
                    <span className="text-xs text-white/50">•</span>
                    <span className="text-xs text-white/50">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-blue-300 font-medium group-hover:gap-2 transition-all">
                    Read full article
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">All Articles</h2>
            <p className="text-white/70">Browse our complete collection of guides and insights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                    {post.tag}
                  </span>
                  <span className="text-xs text-white/50">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="text-white/50 text-xs">{new Date(post.date).toLocaleDateString()}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/70 mb-6">
              Get the latest insights on AIWeb3and digital economies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}