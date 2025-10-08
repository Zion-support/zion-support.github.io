import ContentPreviewCard from "../components/ContentPreviewCard";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  path: string;
  image: string;
  featured: boolean;
  stats?: {
    views: number;
    engagement: number;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const blogPosts: BlogPost[] = [
    {
      id: "ai-enterprise-transformation-2025",
      title: "AI Enterprise Transformation: $50M Annual Savings Blueprint",
      description:
        "Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation strategies.",
      category: "Success Story",
      readTime: "50 min read",
      date: "2025-01-28",
      path: "/blog/ai-enterprise-transformation-2025",
      image: "💰",
      featured: true,
      stats: { views: 18750, engagement: 97 },
    },
    {
      id: "ai-2025-2026-mega-trends-breakthrough",
      title:
        "AI 2025-2026 Mega Trends Breakthrough: Revolutionary Enterprise Transformation",
      description:
        "Discover the groundbreaking AI trends and breakthroughs that will revolutionize enterprise operations in 2025-2026.",
      category: "Mega Trends",
      readTime: "15 min read",
      date: "2025-01-15",
      path: "/blog/ai-2025-2026-mega-trends-breakthrough",
      image: "🚀",
      featured: true,
      stats: { views: 12500, engagement: 94 },
    },
    {
      id: "ai-2026-autonomous-enterprise-architecture",
      title: "AI 2026: Autonomous Enterprise Architecture Revolution",
      description:
        "Revolutionary autonomous enterprise architecture transforming business operations with self-healing systems and predictive infrastructure.",
      category: "Architecture",
      readTime: "12 min read",
      date: "2026-01-15",
      path: "/blog/ai-2026-autonomous-enterprise-architecture",
      image: "🏗️",
      featured: true,
      stats: { views: 8900, engagement: 91 },
    },
    {
      id: "ai-2026-autonomous-agent-factories",
      title: "AI 2026: Autonomous Agent Factories Revolution",
      description:
        "Revolutionary autonomous agent factories transforming business operations with self-managing AI systems.",
      category: "AI Agents",
      readTime: "18 min read",
      date: "2026-02-01",
      path: "/blog/ai-2026-autonomous-agent-factories",
      image: "🤖",
      featured: false,
      stats: { views: 7200, engagement: 88 },
    },
    {
      id: "ai-2026-consensus-intelligence-breakthrough",
      title: "AI 2026: Consensus Intelligence Breakthrough",
      description:
        "Revolutionary consensus intelligence systems enabling collaborative AI decision-making across enterprise operations.",
      category: "Intelligence",
      readTime: "14 min read",
      date: "2026-02-15",
      path: "/blog/ai-2026-consensus-intelligence-breakthrough",
      image: "🧠",
      featured: false,
      stats: { views: 6500, engagement: 85 },
    },
    {
      id: "ai-cost-optimization-breakthrough-2026",
      title: "AI Cost Optimization Breakthrough 2026",
      description:
        "Revolutionary cost optimization strategies delivering 90% reduction in operational expenses through intelligent AI systems.",
      category: "Cost Optimization",
      readTime: "20 min read",
      date: "2026-03-01",
      path: "/blog/ai-cost-optimization-breakthrough-2026",
      image: "💡",
      featured: false,
      stats: { views: 9800, engagement: 92 },
    },
    {
      id: "ai-2026-hyperconscious-computing-revolution",
      title: "AI 2026: Hyperconscious Computing Revolution",
      description:
        "Revolutionary hyperconscious computing systems delivering unprecedented AI capabilities and enterprise transformation.",
      category: "Computing",
      readTime: "16 min read",
      date: "2026-03-15",
      path: "/blog/ai-2026-hyperconscious-computing-revolution",
      image: "⚡",
      featured: false,
      stats: { views: 5800, engagement: 87 },
    },
    {
      id: "ai-enterprise-transformation-ultimate-guide-2025",
      title: "AI Enterprise Transformation: Ultimate Guide 2025",
      description:
        "The complete guide to AI enterprise transformation with proven frameworks, implementation strategies, and success metrics.",
      category: "Transformation",
      readTime: "45 min read",
      date: "2025-02-10",
      path: "/blog/ai-enterprise-transformation-ultimate-guide-2025",
      image: "📚",
      featured: false,
      stats: { views: 11200, engagement: 93 },
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosts(blogPosts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const _categories = [
    "all",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];
  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const _featuredPosts = posts.filter((post) => post.featured);
  const _regularPosts = posts.filter((post) => !post.featured);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gray-100 rounded-lg p-6 animate-pulse"
              >
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI & Technology Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Latest insights on AI, enterprise automation, and digital
            transformation from our expert team
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category === "all" ? "All Articles" : category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === "all" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🌟 Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <ContentPreviewCard key={post.id} {...post} />
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {selectedCategory === "all"
              ? "All Articles"
              : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <ContentPreviewCard key={post.id} {...post} />
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest AI insights,
              enterprise transformation guides, and breakthrough content
              delivered directly to your inbox.
            </p>
            <Link
              to="/"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
