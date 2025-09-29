import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: 'AI & Technology Blog | Zion Tech Group',
  description: 'Latest insights on AI, quantum computing, sustainability, and cutting-edge technology. Expert analysis and practical guides for business transformation.',
  keywords: 'AI blog, technology insights, quantum computing, AI sustainability, business transformation',
};

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "AI Agent Orchestration 2026: Multi-Agent System Architecture",
      excerpt: "Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.",
      href: "/blog/ai-agent-orchestration-2026",
      category: "AI Orchestration",
      readTime: "22 min read",
      date: "Jan 20, 2026",
      metrics: { value: "95%", label: "Automation" },
      metrics2: { value: "$5M+", label: "ROI" },
      featured: true
    },
    {
      title: "AI Sustainability & Green Tech 2026: Carbon-Neutral Operations",
      excerpt: "Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.",
      href: "/blog/ai-sustainability-green-tech-2026",
      category: "Sustainability",
      readTime: "18 min read",
      date: "Jan 18, 2026",
      metrics: { value: "80%", label: "Energy Saved" },
      metrics2: { value: "$2M+", label: "Savings" },
      featured: true
    },
    {
      title: "AI Quantum Computing 2026: Next-Generation Intelligence",
      excerpt: "Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.",
      href: "/blog/ai-quantum-computing-2026",
      category: "Quantum Computing",
      readTime: "25 min read",
      date: "Jan 15, 2026",
      metrics: { value: "1000x", label: "Faster" },
      metrics2: { value: "95%", label: "Accuracy" },
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: "AI Enterprise Automation 2026: Complete Business Process Transformation",
      excerpt: "Transform your enterprise with AI automation. 95% process efficiency, $5M+ savings, and zero-touch operations.",
      href: "/blog/ai-enterprise-automation-2026",
      category: "Enterprise AI",
      readTime: "18 min read",
      date: "Jan 12, 2026"
    },
    {
      title: "LLM Cost Optimization in 2025: Practical Strategies",
      excerpt: "Cut LLM spend by 30–70% with routing, caching, and quantization patterns.",
      href: "/blog/llm-cost-optimization-2025",
      category: "Cost Optimization",
      readTime: "9 min read",
      date: "Jan 10, 2026"
    },
    {
      title: "Edge LLM Latency Patterns: Sub-200ms Interactions",
      excerpt: "Streaming, prefetch, and edge compute patterns for instant-feel AI UX.",
      href: "/blog/edge-llm-latency-patterns",
      category: "Edge Computing",
      readTime: "7 min read",
      date: "Jan 8, 2026"
    },
    {
      title: "GenAI Guardrails 2025: Practical Playbook for Reliable AI",
      excerpt: "Practical patterns to ship safe, reliable, and auditable GenAI systems in production.",
      href: "/blog/genai-guardrails-2025",
      category: "AI Safety",
      readTime: "11 min read",
      date: "Jan 5, 2026"
    },
    {
      title: "AI Revolution 2025: Complete Business Transformation Guide",
      excerpt: "Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.",
      href: "/blog/ai-revolution-2025",
      category: "Business Transformation",
      readTime: "12 min read",
      date: "Jan 3, 2026"
    },
    {
      title: "AI Agents in the Enterprise: 2025 Adoption Playbook",
      excerpt: "Practical guide to rolling out autonomous AI agents across enterprise workflows with ROI.",
      href: "/blog/ai-agents-in-the-enterprise-2025",
      category: "AI Agents",
      readTime: "10 min read",
      date: "Jan 1, 2026"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          AI & Technology
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {' '}Blog
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Stay ahead with the latest insights on AI, quantum computing, sustainability, and cutting-edge technology. 
          Expert analysis and practical guides for business transformation.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
          <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            NEW 2026
          </span>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Link key={index} href={post.href} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200">
                <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 mx-auto mb-3 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-xl">🚀</span>
                      </div>
                      <h3 className="text-lg font-bold">{post.category}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{post.metrics.value}</div>
                        <div className="text-xs text-gray-500">{post.metrics.label}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">{post.metrics2.value}</div>
                        <div className="text-xs text-gray-500">{post.metrics2.label}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {recentPosts.map((post, index) => (
            <Link key={index} href={post.href} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read Article →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Get weekly updates on AI trends, quantum computing breakthroughs, and sustainable technology innovations. 
          Join 10,000+ professionals staying ahead of the curve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-sm mt-4 opacity-75">
          Join 10,000+ professionals. Unsubscribe anytime.
        </p>
      </section>
    </div>
  );
}