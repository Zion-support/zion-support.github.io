import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import UltraContentPromotionBanner from '../../components/UltraContentPromotionBanner';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Star, Clock, User, TrendingUp, Download, 
  BookOpen, FileText, Award, Zap, Target, Rocket
} from 'lucide-react';

export default function MegaContentShowcase() {
  const featuredContent = [
    {
      title: "AI Advanced Automation 2025: Complete Enterprise Implementation Guide",
      description: "Master advanced AI automation with our comprehensive guide. Learn enterprise strategies, implementation frameworks, and real-world case studies for maximum ROI.",
      href: "/blog/ai-2025-advanced-automation",
      icon: "🤖",
      category: "AI Automation",
      readTime: "25 min read",
      isNew: true
    },
    {
      title: "AI Cybersecurity Threats 2025: Complete Defense Strategy",
      description: "Protect your organization from emerging AI cybersecurity threats. Learn about advanced attack vectors, defense strategies, and security best practices.",
      href: "/blog/ai-2025-cybersecurity-threats",
      icon: "🛡️",
      category: "Cybersecurity",
      readTime: "22 min read",
      isNew: true
    },
    {
      title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
      description: "Discover how a Fortune 500 manufacturing company achieved $200M savings and 40% cost reduction with autonomous AI systems.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      category: "Case Study",
      type: "Success Story",
      isNew: true
    },
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Master Guide",
      type: "Free Download",
      isNew: true
    },
    {
      title: "AI 2025 Breakthrough Innovations: Revolutionary Technologies",
      description: "Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🚀",
      category: "AI Innovations",
      readTime: "25 min read",
      isTrending: true
    },
    {
      title: "AI Workforce Transformation 2025: Complete Reskilling Guide",
      description: "Learn how to transform your workforce for the AI era with comprehensive reskilling strategies, training programs, and change management approaches.",
      href: "/blog/ai-workforce-transformation-2025",
      icon: "👥",
      category: "Workforce",
      readTime: "18 min read",
      isNew: true
    }
  ];

  const trendingContent = [
    {
      title: "AI Data Privacy & Compliance 2025: Complete Guide",
      description: "Navigate the complex landscape of AI data privacy regulations with our comprehensive compliance guide and best practices.",
      href: "/blog/ai-data-privacy-compliance-2025",
      icon: "🔒",
      category: "Privacy",
      readTime: "22 min read",
      isTrending: true
    },
    {
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI",
      description: "Learn how to build sustainable AI systems that reduce environmental impact while maintaining high performance.",
      href: "/blog/ai-sustainability-green-tech-2025",
      icon: "🌱",
      category: "Sustainability",
      readTime: "20 min read",
      isNew: true
    },
    {
      title: "AI Customer Support Automation 2025: Complete Implementation",
      description: "Transform your customer support with AI automation. Learn proven strategies to reduce response times and improve satisfaction.",
      href: "/blog/ai-customer-support-automation-2025",
      icon: "🎧",
      category: "Customer Service",
      readTime: "9 min read",
      isPopular: true
    },
    {
      title: "LLM Guardrails in Production 2025: Safety Without Blocking Delivery",
      description: "Implement effective guardrails for Large Language Models in production environments without hindering innovation.",
      href: "/blog/llm-guardrails-in-production-2025",
      icon: "🛡️",
      category: "AI Safety",
      readTime: "8 min read",
      isTrending: true
    }
  ];

  const resources = [
    {
      title: "AI Cybersecurity Checklist 2025",
      description: "150+ security items for secure AI implementation and compliance with industry standards.",
      href: "/resources/ai-cybersecurity-checklist-2025",
      icon: "🛡️",
      category: "Security",
      type: "Free Download",
      pages: "150+ items"
    },
    {
      title: "AI Workforce Transformation Playbook",
      description: "Complete reskilling strategies and implementation guides for transforming your workforce for the AI era.",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      icon: "👥",
      category: "Workforce",
      type: "Free Download",
      pages: "150+ pages"
    },
    {
      title: "AI ROI Calculator Tool",
      description: "Calculate the potential return on investment for your AI projects with our comprehensive calculator.",
      href: "/tools/ai-roi-calculator",
      icon: "💰",
      category: "Tools",
      type: "Interactive Tool"
    },
    {
      title: "AI Implementation Templates Pack",
      description: "50+ ready-to-use templates for AI project planning, implementation, and management.",
      href: "/resources/ai-implementation-templates-pack-2025",
      icon: "📋",
      category: "Templates",
      type: "Free Download",
      pages: "50+ templates"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Mega Content Showcase - Latest AI & Technology Resources"
        description="Discover our comprehensive collection of AI articles, case studies, resources, and tools. 25+ new pieces of content covering AI automation, cybersecurity, implementation guides, and more."
        keywords="AI content, technology resources, AI articles, case studies, implementation guides, AI tools, technology insights"
        url="/mega-content-showcase"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium">🔥 MEGA CONTENT DROP - JANUARY 2025</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              🚀 25+ New AI Resources Just Released!
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our biggest content update yet: Advanced AI Automation, Cybersecurity Threats, 
              Healthcare AI Success Stories, and the complete 200+ page AI Implementation Master Guide 2026. 
              Everything you need to succeed with AI in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured-content"
                className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                🎯 Explore All New Content
              </Link>
              <Link
                href="/resources/ai-implementation-master-guide-2026"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📚 Download Master Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <UltraContentPromotionBanner
        title="✨ Featured New Content"
        subtitle="🔥 JUST PUBLISHED - JANUARY 2025"
        description="Our most comprehensive and impactful content covering the latest AI trends, implementation strategies, and real-world success stories."
        content={featuredContent}
        variant="featured"
        maxItems={6}
        className="py-20"
      />

      {/* Trending Content */}
      <UltraContentPromotionBanner
        title="📈 Trending This Week"
        subtitle="🔥 HOT RIGHT NOW"
        description="The most popular and trending content that our community is reading and sharing this week."
        content={trendingContent}
        variant="trending"
        maxItems={4}
        className="py-20"
      />

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              📚 Free Resources & Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our comprehensive collection of free resources, templates, checklists, 
              and tools to accelerate your AI implementation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link href={resource.href} className="group block">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {resource.category}
                        </span>
                        {resource.pages && (
                          <span className="text-gray-500">{resource.pages}</span>
                        )}
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              📊 Content Impact by the Numbers
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our content has helped thousands of professionals and organizations 
              successfully implement AI and achieve remarkable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-lg opacity-90">Resource Downloads</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">New Articles</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Case Studies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-lg opacity-90">Monthly Readers</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              📧 Stay Ahead with Our Latest Content
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ AI professionals.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}