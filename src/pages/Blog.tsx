<<<<<<< HEAD
import { Zap } from "lucide-react";
import React, { useMemo, useState } from "react";
import BlogPromotionBanner from "../components/BlogPromotionBanner";
// const Footer: React.FC = () => null;
// import Header from "../components/Header";

interface BlogPost {
id: number;,
title: string;,
excerpt: string;,
content: string;,
author: string;,
date: string;,
readTime: string;,
category: string;,
tags: string[];,
image: string;,
featured: boolean;,
views: number;
}

export default function Blog(): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState("All");";
  const [searchTerm, setSearchTerm] = useState("");";

  const categories = [
<<<<<<< HEAD
    "All",
    "AI Strategy",
    "Security",
    "Edge Computing",
    "GenAI",
    "Data Engineering",
    "Technology",
    "AI Solutions",
    "Case Studies",
    "Industry Insights",
    "Tutorials"
=======
    "All",";
    "AI Strategy",";
    "Security",";
    "Edge Computing",";
    "GenAI",";
    "Data Engineering",";
    "Technology",";
    "AI Solutions",";
    "Case Studies",";
    "Industry Insights",";
    "Tutorials",";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  ];

  const staticPosts: BlogPost[] = [,
    {
<<<<<<< HEAD
      id: 1,
      title: "How AI Workflow Automation Transformed a Fortune 500 Company",
      excerpt: "Discover how our AI workflow automation solution reduced manual processes by 80% and increased operational efficiency by 300% for a leading financial services company.",
      content: "Full case study content here...",
      author: "Sarah Johnson",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Case Studies",
      tags: ["AI", "Automation", "Case Study", "Financial Services"],
      image: "/api/placeholder/400/250",
      featured: true,
      views: 1250
    },
    {
      id: 7,
      title: "Serverless AI Inference: The Cost Optimization Playbook",
      excerpt: "Cut inference spend 40–70% with adaptive batching, warm pools, and tiered quality without hurting P95.",
      content: "Full article content here...",
      author: "Zion Tech Group Team",
      date: "2025-09-29",
      readTime: "9 min read",
      category: "AI Solutions",
      tags: ["Serverless", "Inference", "Cost"],
      image: "/api/placeholder/400/250",
      featured: true,
      views: 421
    },
    {
      id: 8,
      title: "RAG Architectures That Actually Work in Production",
      excerpt: "Proven patterns for chunking, freshness, hybrid search, and evals that keep quality high.",
      content: "Full article content here...",
      author: "Zion Tech Group Team",
      date: "2025-09-28",
      readTime: "12 min read",
      category: "AI Solutions",
      tags: ["RAG", "Vector Search", "Evals"],
      image: "/api/placeholder/400/250",
      featured: true,
      views: 368
    },
    {
      id: 9,
      title: "Secure GenAI: Policy‑First Guardrails That Scale",
      excerpt: "Prompt isolation, PII redaction, and network egress controls—ship safely without slowing teams.",
      content: "Full article content here...",
      author: "Zion Tech Group Team",
      date: "2025-09-27",
      readTime: "8 min read",
      category: "Technology",
      tags: ["GenAI", "Security", "Compliance"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 297
    },
    {
      id: 2,
      title: "The Future of AI-Powered Customer Support: A Complete Guide",
      excerpt: "Explore the latest trends in AI customer support and learn how virtual assistants are revolutionizing customer service across industries.",
      content: "Full article content here...",
      author: "Michael Chen",
      date: "2025-01-12",
      readTime: "12 min read",
      category: "AI Solutions",
      tags: ["AI", "Customer Support", "Virtual Assistant", "Trends"],
      image: "/api/placeholder/400/250",
      featured: true,
      views: 980
    },
    {
      id: 3,
      title: "Building Scalable Cloud Infrastructure: Best Practices 2025",
      excerpt: "Learn the essential strategies for building robust, scalable cloud infrastructure that can handle modern business demands.",
      content: "Full article content here...",
      author: "Emily Rodriguez",
      date: "2025-01-10",
      readTime: "15 min read",
      category: "Technology",
      tags: ["Cloud", "Infrastructure", "Scalability", "DevOps"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 756
    },
    {
      id: 4,
      title: "AI Data Analytics: Transforming Raw Data into Business Gold",
      excerpt: "See how machine learning and predictive analytics are helping businesses make data-driven decisions that drive real results.",
      content: "Full article content here...",
      author: "David Kim",
      date: "2025-01-08",
      readTime: "10 min read",
      category: "AI Solutions",
      tags: ["AI", "Data Analytics", "Machine Learning", "Business Intelligence"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 892
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of AI: Protecting Your Digital Assets",
      excerpt: "Understand the evolving threat landscape and learn how AI-powered security solutions can protect your business from modern cyber threats.",
      content: "Full article content here...",
      author: "Lisa Wang",
      date: "2025-01-05",
      readTime: "14 min read",
      category: "Technology",
      tags: ["Cybersecurity", "AI", "Security", "Threat Detection"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 634
    },
    {
      id: 6,
      title: "Healthcare Industry Transformation: AI-Powered Patient Care",
      excerpt: "Explore how AI is revolutionizing healthcare delivery, from diagnostic assistance to personalized treatment plans.",
      content: "Full article content here...",
      author: "Dr. James Wilson",
      date: "2025-01-03",
      readTime: "11 min read",
      category: "Industry Insights",
      tags: ["AI", "Healthcare", "Patient Care", "Medical Technology"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 445
    }
  ];

  // Map content entries into this page's structure;
=======
      id: 1,,
      title: "How AI Workflow Automation Transformed a Fortune 500 Company",";,
      excerpt: "Discover how our AI workflow automation solution reduced manual processes by 80% and increased operational efficiency by 300% for a leading financial services company.",";,
      content: "Full case study content here...",";,
      author: "Sarah Johnson",";,
      date: "2025-01-15",";,
      readTime: "8 min read",";,
      category: "Case Studies",";,
      tags: ["AI", "Automation", "Case Study", "Financial Services"],";,
      image: "/api/placeholder/400/250",";,
      featured: true,,
      views: 1250,,
    },
    {
      id: 7,,
      title: "Serverless AI Inference: The Cost Optimization Playbook",";,
      excerpt: "Cut inference spend 40–70% with adaptive batching, warm pools, and tiered quality without hurting P95.",";,
      content: "Full article content here...",";,
      author: "Zion Tech Group Team",";,
      date: "2025-09-29",";,
      readTime: "9 min read",";,
      category: "AI Solutions",";,
      tags: ["Serverless", "Inference", "Cost"],";,
      image: "/api/placeholder/400/250",";,
      featured: true,,
      views: 421,,
    },
    {
      id: 8,,
      title: "RAG Architectures That Actually Work in Production",";,
      excerpt: "Proven patterns for chunking, freshness, hybrid search, and evals that keep quality high.",";,
      content: "Full article content here...",";,
      author: "Zion Tech Group Team",";,
      date: "2025-09-28",";,
      readTime: "12 min read",";,
      category: "AI Solutions",";,
      tags: ["RAG", "Vector Search", "Evals"],";,
      image: "/api/placeholder/400/250",";,
      featured: true,,
      views: 368,,
    },
    {
      id: 9,,
      title: "Secure GenAI: Policy‑First Guardrails That Scale",";,
      excerpt: "Prompt isolation, PII redaction, and network egress controls—ship safely without slowing teams.",";,
      content: "Full article content here...",";,
      author: "Zion Tech Group Team",";,
      date: "2025-09-27",";,
      readTime: "8 min read",";,
      category: "Technology",";,
      tags: ["GenAI", "Security", "Compliance"],";,
      image: "/api/placeholder/400/250",";,
      featured: false,,
      views: 297,,
    },
    {
      id: 2,,
      title: "The Future of AI-Powered Customer Support: A Complete Guide",";,
      excerpt: "Explore the latest trends in AI customer support and learn how virtual assistants are revolutionizing customer service across industries.",";,
      content: "Full article content here...",";,
      author: "Michael Chen",";,
      date: "2025-01-12",";,
      readTime: "12 min read",";,
      category: "AI Solutions",";,
      tags: ["AI", "Customer Support", "Virtual Assistant", "Trends"],";,
      image: "/api/placeholder/400/250",";,
      featured: true,,
      views: 980,,
    },
    {
      id: 3,,
      title: "Building Scalable Cloud Infrastructure: Best Practices 2025",";,
      excerpt: "Learn the essential strategies for building robust, scalable cloud infrastructure that can handle modern business demands.",";,
      content: "Full article content here...",";,
      author: "Emily Rodriguez",";,
      date: "2025-01-10",";,
      readTime: "15 min read",";,
      category: "Technology",";,
      tags: ["Cloud", "Infrastructure", "Scalability", "DevOps"],";,
      image: "/api/placeholder/400/250",";,
      featured: false,,
      views: 756,,
    },
    {
      id: 4,,
      title: "AI Data Analytics: Transforming Raw Data into Business Gold",";,
      excerpt: "See how machine learning and predictive analytics are helping businesses make data-driven decisions that drive real results.",";,
      content: "Full article content here...",";,
      author: "David Kim",";,
      date: "2025-01-08",";,
      readTime: "10 min read",";,
      category: "AI Solutions",";,
      tags: ["AI", "Data Analytics", "Machine Learning", "Business Intelligence"],";,
      image: "/api/placeholder/400/250",";,
      featured: false,,
      views: 892,,
    },
    {
      id: 5,,
      title: "Cybersecurity in the Age of AI: Protecting Your Digital Assets",";,
      excerpt: "Understand the evolving threat landscape and learn how AI-powered security solutions can protect your business from modern cyber threats.",";,
      content: "Full article content here...",";,
      author: "Lisa Wang",";,
      date: "2025-01-05",";,
      readTime: "14 min read",";,
      category: "Technology",";,
      tags: ["Cybersecurity", "AI", "Security", "Threat Detection"],";,
      image: "/api/placeholder/400/250",";,
      featured: false,,
      views: 634,,
    },
    {
      id: 6,,
      title: "Healthcare Industry Transformation: AI-Powered Patient Care",";,
      excerpt: "Explore how AI is revolutionizing healthcare delivery, from diagnostic assistance to personalized treatment plans.",";,
      content: "Full article content here...",";,
      author: "Dr. James Wilson",";,
      date: "2025-01-03",";,
      readTime: "11 min read",";,
      category: "Industry Insights",";,
      tags: ["AI", "Healthcare", "Patient Care", "Medical Technology"],";,
      image: "/api/placeholder/400/250",";,
      featured: false,,
      views: 445,,
    },
  ];

  // Map content entries into this page's structure';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  const mappedFromContent: BlogPost[] = useMemo(() => {,
    return latestArticles.map((a, index) => ({
      id: index + 1000,,
      title: a.title,,
      excerpt: a.excerpt || a.description,,
      content: a.description,,
      author: a.author,,
      date: a.date,,
      readTime: a.readTime,,
      category: a.category,,
      tags: a.tags,,
<<<<<<< HEAD
      image: a.image || "/api/placeholder/400/250",",
=======
      image: a.image || "/api/placeholder/400/250",";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      featured: a.featured,,
      views: a.trending ? 1000 : 250,
    }));
  }, []);

<<<<<<< HEAD
  const blogPosts: BlogPost[] = [...mappedFromContent, ...staticPosts],
=======
  const blogPosts: BlogPost[] = [...mappedFromContent, ...staticPosts];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;";
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryIcon = (category: string) => {,
switch (category) {
<<<<<<< HEAD
case "AI Solutions": return Zap;
case "Case Studies": return BarChart3;
case "Technology": return Code;
case "Industry Insights": return TrendingUp;
case "Tutorials": return Bot;
=======
case "AI Solutions": return Zap;";
case "Case Studies": return BarChart3;";
case "Technology": return Code;";
case "Industry Insights": return TrendingUp;";
case "Tutorials": return Bot;";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
default: return Shield;
};
  };

  const getCategoryColor = (category: string) => {,
switch (category) {
<<<<<<< HEAD
case "AI Solutions": return "text-blue-400 bg-blue-500/10 border-blue-500/30";
case "Case Studies": return "text-green-400 bg-green-500/10 border-green-500/30";
case "Technology": return "text-purple-400 bg-purple-500/10 border-purple-500/30";
case "Industry Insights": return "text-orange-400 bg-orange-500/10 border-orange-500/30";
case "Tutorials": return "text-cyan-400 bg-cyan-500/10 border-cyan-500/30";
default: return "text-gray-400 bg-gray-500/10 border-gray-500/30";
}
=======
case "AI Solutions": return "text-blue-400 bg-blue-500/10 border-blue-500/30";";
case "Case Studies": return "text-green-400 bg-green-500/10 border-green-500/30";";
case "Technology": return "text-purple-400 bg-purple-500/10 border-purple-500/30";";
case "Industry Insights": return "text-orange-400 bg-orange-500/10 border-orange-500/30";";
case "Tutorials": return "text-cyan-400 bg-cyan-500/10 border-cyan-500/30";";
default: return "text-gray-400 bg-gray-500/10 border-gray-500/30";";
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  };

  return (
    <>
      <Helmet>
        <title>Blog & Insights - Zion Tech Group | AI & Technology Expertise</title>
        <meta
          name="description"
<<<<<<< HEAD
          content="Stay updated with the latest insights on AI, technology trends, case studies, and industry best practices from Zion Tech Group experts." /><meta property="og:title" content="Blog & Insights - Zion Tech Group" />,
        <meta
          property="og:description",
          content="Latest insights on AI and technology trends" /><meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/blog" />,
        <meta name="twitter:card" content="summary_large_image" />,
        <meta name="twitter:title" content="Blog & Insights - Zion Tech Group" />,
        <meta
          name="twitter:description",
          content="Latest insights on AI and technology trends" /><link rel="canonical" href="https://ziontechgroup.com/blog/>",
=======
          content="Stay updated with the latest insights on AI, technology trends, case studies, and industry best practices from Zion Tech Group experts."
        />
        <meta property="og: title" content="Blog & Insights - Zion Tech Group" />";,
        <meta
          property="og: description",
          content="Latest insights on AI and technology trends"
        />
        <meta property="og: type" content="website" />";,
        <meta property="og: url" content="https://ziontechgroup.com/blog" />";,
        <meta name="twitter: card" content="summary_large_image" />";,
        <meta name="twitter: title" content="Blog & Insights - Zion Tech Group" />";,
        <meta
          name="twitter: description",
          content="Latest insights on AI and technology trends"
        />
        <link rel="canonical" href="https: //ziontechgroup.com/blog" />";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">";
        {/* New Content Promo Banner */}
<<<<<<< HEAD
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="mt-4 mb-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 p-4 text-white flex items-center justify-between">
              <div className="mr-4">
                <div className="text-sm font-semibold">🚀 Fresh: Governance Quickstart + Privacy‑First Agents</div>",
                <div className="text-xs text-white/90">Ship KPI‑linked guardrails and private assistants under real budgets.</div>
              </div>
              <a title="Internal link" href="/blog/ai-governance-scorecards-quickstart-2026" className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover: bg-gray-100 transition-colors whitespace-nowrap">",
=======
        <div className="border-b border-white/10">";
          <div className="max-w-7xl mx-auto px-6">";
              <div className="mt-4 mb-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 p-4 text-white flex items-center justify-between">";
              <div className="mr-4">";
                <div className="text-sm font-semibold">🚀 Fresh: Governance Quickstart + Privacy‑First Agents</div>";,
                <div className="text-xs text-white/90">Ship KPI‑linked guardrails and private assistants under real budgets.</div>";
              </div>
              <a title="Internal link" href="/blog/ai-governance-scorecards-quickstart-2026" className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover: bg-gray-100 transition-colors whitespace-nowrap">";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                Read the latest
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional Content Promo Banner */}
<<<<<<< HEAD
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="mt-4 mb-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-4 text-white flex items-center gap-3 flex-wrap">
                <a title="Internal link" href="/blog/ai-e2e-tracing-2025" className="bg-white text-gray-900 px-3 py-2 rounded-lg font-semibold hover: bg-gray-100 transition-colors whitespace-nowrap">E2E AI Tracing</a>",
                <a title="Internal link" href="/blog/edge-personalization-2025" className="bg-white text-gray-900 px-3 py-2 rounded-lg font-semibold hover: bg-gray-100 transition-colors whitespace-nowrap">Edge Personalization</a>",
                <a title="Internal link" href="/blog/policy-tests-quickstart-2025" className="bg-white text-gray-900 px-3 py-2 rounded-lg font-semibold hover: bg-gray-100 transition-colors whitespace-nowrap">Policy Tests Quickstart</a>",
=======
        <div className="border-b border-white/10">";
          <div className="max-w-7xl mx-auto px-6">";
              <div className="mt-4 mb-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-4 text-white flex items-center gap-3 flex-wrap">";
                <a title="Internal link" href="/blog/ai-e2e-tracing-2025" className="bg-white text-gray-900 px-3 py-2 rounded-lg font-semibold hover: bg-gray-100 transition-colors whitespace-nowrap">E2E AI Tracing</a>";,
                <a title="Internal link" href="/blog/edge-personalization-2025" className="bg-white text-gray-900 px-3 py-2 rounded-lg font-semibold hover: bg-gray-100 transition-colors whitespace-nowrap">Edge Personalization</a>";,
                <a title="Internal link" href="/blog/policy-tests-quickstart-2025" className="bg-white text-gray-900 px-3 py-2 rounded-lg font-semibold hover: bg-gray-100 transition-colors whitespace-nowrap">Policy Tests Quickstart</a>";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
              </div>
          </div>
        </div>

        {/* Hero Section */}
<<<<<<< HEAD
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">",
              Insights &{" "}";
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Stay ahead with the latest insights on AI, technology trends, case studies
=======
        <section className="container mx-auto px-6 py-20">";
          <div className="text-center mb-16">";
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">";,
              Insights &{" "}";
              <span className="bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent">";
                Expertise
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">";
              Stay ahead with the latest insights on AI, technology trends, case studies, 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
              and industry best practices from our team of experts.
            </p>
          </div>

          {/* Search and Filter */}
<<<<<<< HEAD
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md: flex-row gap-4 mb-8">",
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5/>
=======
          <div className="max-w-4xl mx-auto mb-12">";
            <div className="flex flex-col md: flex-row gap-4 mb-8">";,
              <div className="relative flex-1">";
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus: outline-none focus:ring-2 focus:ring-zion-cyan",
                />
              </div>
              <div className="flex flex-wrap gap-2">";
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${`;
                      selectedCategory === category
                        ? "bg-zion-cyan text-white"
                        : "bg-white/10 text-zion-slate-light hover: bg-white/20",
                    }`}`;
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          {
selectedCategory === "All" && searchTerm === "" && (";
<<<<<<< HEAD
<div className="mb-16">
<h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
<div className="grid md:grid-cols-2 gap-8">
=======
<div className="mb-16">";
<h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>";
<div className="grid md: grid-cols-2 gap-8">,";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
{featuredPosts.map((post) => {
const CategoryIcon = getCategoryIcon(post.category);
const categoryColor = getCategoryColor(post.category);
return (
<article
key={post.id
}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                    >
<<<<<<< HEAD
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>`;
                          <CategoryIcon className="w-3 h-3 mr-1/>
                          {post.category}
                        </div>
                        <div className="flex items-center text-zion-slate-light text-sm">
                          <TrendingUp className="w-4 h-4 mr-1/>
=======
                      <div className="flex items-center justify-between mb-4">";
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>`;
                          <CategoryIcon className="w-3 h-3 mr-1" />";
                          {post.category}
                        </div>
                        <div className="flex items-center text-zion-slate-light text-sm">";
                          <TrendingUp className="w-4 h-4 mr-1" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                          {post.views} views
                        </div>
                      </div>

<<<<<<< HEAD
                      <h3 className="text-xl font-bold text-white mb-4 group-hover: text-zion-cyan transition-colors">",
=======
                      <h3 className="text-xl font-bold text-white mb-4 group-hover: text-zion-cyan transition-colors">";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                        {post.title}
                      </h3>
                      <p className="text-zion-slate-light mb-6 leading-relaxed">";
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">";
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

<<<<<<< HEAD
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1/>
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1/>
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1/>
                            {post.readTime}
                          </div>
                        </div>
                        <button className="text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center group">",
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover: translate-x-1 transition-transform/>",
=======
                      <div className="flex items-center justify-between">";
                        <div className="flex items-center space-x-4 text-sm text-zion-slate-light">";
                          <div className="flex items-center">";
                            <User className="w-4 h-4 mr-1" />";
                            {post.author}
                          </div>
                          <div className="flex items-center">";
                            <Calendar className="w-4 h-4 mr-1" />";
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">";
                            <Clock className="w-4 h-4 mr-1" />";
                            {post.readTime}
                          </div>
                        </div>
                        <button className="text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center group">";,
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover: translate-x-1 transition-transform" />";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div>
<<<<<<< HEAD
            <h2 className="text-2xl font-bold text-white mb-8">
              {selectedCategory !== "All" || searchTerm ? "Search Results" : "Latest Articles"}";
            </h2>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">",
=======
            <h2 className="text-2xl font-bold text-white mb-8">";
              {selectedCategory !== "All" || searchTerm ? "Search Results" : "Latest Articles"}";
            </h2>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
              {regularPosts.map((post) => {
                const CategoryIcon = getCategoryIcon(post.category);
                const categoryColor = getCategoryColor(post.category);
                
                return (
                  <article
                    key={post.id}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                  >
<<<<<<< HEAD
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>`;
                        <CategoryIcon className="w-3 h-3 mr-1/>
                        {post.category}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-xs">
                        <TrendingUp className="w-3 h-3 mr-1/>
=======
                    <div className="flex items-center justify-between mb-4">";
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${categoryColor}`}>`;
                        <CategoryIcon className="w-3 h-3 mr-1" />";
                        {post.category}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-xs">";
                        <TrendingUp className="w-3 h-3 mr-1" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                        {post.views}
                      </div>
                    </div>

<<<<<<< HEAD
                    <h3 className="text-lg font-bold text-white mb-3 group-hover: text-zion-cyan transition-colors line-clamp-2">",
=======
                    <h3 className="text-lg font-bold text-white mb-3 group-hover: text-zion-cyan transition-colors line-clamp-2">";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                      {post.title}
                    </h3>
                    <p className="text-zion-slate-light mb-4 text-sm leading-relaxed line-clamp-3">";
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">";
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-zion-slate/20 text-zion-slate text-xs rounded-full">";
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

<<<<<<< HEAD
                    <div className="flex items-center justify-between text-xs text-zion-slate-light">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1/>
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1/>
=======
                    <div className="flex items-center justify-between text-xs text-zion-slate-light">";
                      <div className="flex items-center">";
                        <User className="w-3 h-3 mr-1" />";
                        {post.author}
                      </div>
                      <div className="flex items-center">";
                        <Clock className="w-3 h-3 mr-1" />";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                        {post.readTime}
                      </div>
                    </div>

<<<<<<< HEAD
                    <button className="w-full mt-4 text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center justify-center group/btn text-sm">",
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn: translate-x-1 transition-transform/>",
=======
                    <button className="w-full mt-4 text-zion-cyan hover: text-zion-blue-light transition-colors flex items-center justify-center group/btn text-sm">";,
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn: translate-x-1 transition-transform" />";,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
                    </button>
                  </article>
                );
              })}
            </div>

            {regularPosts.length === 0 && (
              <div className="text-center py-12">";
                <div className="text-zion-slate-light mb-4">";
                  No articles found matching your criteria.
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory("All");";
                    setSearchTerm("");";
                  }}
                  className="text-zion-cyan hover: text-zion-blue-light transition-colors",
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>

          {/* Blog Promotion Banner */}
          <div className="mt-20">";
            <BlogPromotionBanner />
          </div>
        </section>
      </div>
    </>
  );
}
;