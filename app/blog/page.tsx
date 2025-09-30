import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Executive AI Roadmap — October 2025',
    slug: 'ai-2025-october-01-executive-ai-roadmap',
    excerpt: 'A practical 30/60/90 plan: guardrails, cost controls, and data foundations for reliable AI at speed.',
    category: 'Executive Guide',
    publishedAt: 'October 1, 2025',
    image: '🧭',
    color: 'blue',
    readTime: '9 min read'
  },
  {
    title: 'New Governed Agent Patterns for Reliable Autonomy',
    slug: 'ai-2025-september-30-new-governed-agent-patterns',
    excerpt: 'Policy-first orchestration, approvals, verifiers, budgets, and rollback so autonomy ships safely.',
    category: 'Featured Article',
    publishedAt: 'September 30, 2025',
    image: '🛡️',
    color: 'blue',
    readTime: '12 min read'
  },
  {
    title: 'Autonomous FinOps Scorecards — Prevent Cost Regressions',
    slug: 'ai-2025-september-30-autonomous-finops-scorecards',
    excerpt: 'KPI-linked scorecards, routing, caching, and rollback to govern AI spend in real time.',
    category: 'Implementation Guide',
    publishedAt: 'September 30, 2025',
    image: '📊',
    color: 'green',
    readTime: '14 min read'
  },
  {
    title: 'AI Enterprise Autonomous Agents 2026: Operating Models, Architecture, ROI',
    slug: 'ai-enterprise-autonomous-agents-2026',
    excerpt: 'Deploy autonomous AI agents with provable guardrails to achieve 400% efficiency gains, 70% cost reduction, and 99.95% uptime.',
    category: 'Implementation Guide',
    publishedAt: 'September 30, 2025',
    image: '🤖',
    color: 'green',
    readTime: '18 min read'
  },
  {
    title: 'Enterprise RAG Guardrails 2026: Safe, Reliable, and Controllable AI',
    slug: 'ai-2026-enterprise-rag-guardrails',
    excerpt: 'Design enterprise-grade RAG with policy guardrails, verifiable citations, and cost-aware routing. Prevent hallucinations and ensure compliance.',
    category: 'Implementation Guide',
    publishedAt: 'January 20, 2026',
    image: '🛡️',
    color: 'indigo',
    readTime: '24 min read'
  },
  {
    title: 'Autonomous Enterprise Operations 2026: 90% Efficiency, 300% ROI',
    slug: 'ai-2026-autonomous-enterprise-operations',
    excerpt: 'Deploy autonomous AI for incident response, finance, supply chain, and support with provable guardrails and ROI.',
    category: 'Revolutionary Technology',
    publishedAt: 'January 18, 2026',
    image: '🏭',
    color: 'green',
    readTime: '28 min read'
  },
  {
    title: 'AI 2026 Neural Superintelligence: The Next Frontier of Artificial Intelligence',
    slug: 'ai-2026-neural-superintelligence',
    excerpt: 'Explore the revolutionary AI 2026 neural superintelligence systems that surpass human intelligence, delivering 1000x performance gains and transforming enterprise operations.',
    category: 'Breakthrough Technology',
    publishedAt: 'January 20, 2026',
    image: '🧠',
    color: 'indigo',
    readTime: '18 min read'
  },
  {
    title: 'AI 2026 Enterprise Autonomous Systems: The Future of Business Automation',
    slug: 'ai-2026-enterprise-autonomous-systems',
    excerpt: 'Discover how next-generation AI autonomous systems are revolutionizing enterprise operations, delivering 400% efficiency gains, 70% cost reduction, and complete business process automation.',
    category: 'Revolutionary Technology',
    publishedAt: 'January 20, 2026',
    image: '🤖',
    color: 'purple',
    readTime: '15 min read'
  },
  {
    title: 'AI 2026: Revolutionary Trends Transforming Enterprise',
    slug: 'ai-2026-revolutionary-trends',
    excerpt: 'Discover the revolutionary AI trends shaping 2026. From autonomous enterprise systems to quantum AI, explore how these breakthroughs are transforming business operations.',
    category: 'Featured Article',
    publishedAt: 'January 15, 2026',
    image: '🚀',
    color: 'blue',
    readTime: '12 min read'
  },
  {
    title: 'AI 2026 Quantum Computing Breakthrough: Revolutionary Processing Power',
    slug: 'quantum-ai-breakthrough-2026',
    excerpt: 'Explore the revolutionary AI quantum computing breakthrough of 2026. Discover how quantum-enhanced AI is solving complex problems 1000x faster and transforming enterprise computing.',
    category: 'Breakthrough Technology',
    publishedAt: 'January 10, 2026',
    image: '⚛️',
    color: 'purple',
    readTime: '14 min read'
  },
  {
    title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
    slug: 'ai-enterprise-transformation-2026',
    excerpt: 'Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI and 70% cost reduction.',
    category: 'Implementation Guide',
    publishedAt: 'January 5, 2026',
    image: '🏢',
    color: 'green',
    readTime: '20 min read'
  },
  {
    title: 'AI Autonomous Agents 2025: Enterprise Implementation Guide',
    slug: 'ai-autonomous-agents-2025',
    excerpt: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns. Achieve 80% automation and 90% efficiency gains.',
    category: 'Implementation Guide',
    publishedAt: 'December 28, 2025',
    image: '🤖',
    color: 'blue',
    readTime: '16 min read'
  },
  {
    title: 'AI 2027 Cost Optimization Playbook: Reliable, Fast, and Affordable AI',
    slug: 'ai-2027-cost-optimization-playbook',
    excerpt: 'Cut AI spend 30–70% with routing, caching, quantization, and guardrails while improving reliability.',
    category: 'Implementation Guide',
    publishedAt: 'September 30, 2025',
    image: '💸',
    color: 'green',
    readTime: '13 min read'
  }
  ,
  {
    title: 'AI 2026 Agentic Workflow Orchestration: Guardrails to ROI',
    slug: 'ai-2026-agentic-workflow-orchestration',
    excerpt: 'Design multi-agent workflows with policy guardrails, human-in-the-loop reviews, and online evaluations for reliable business outcomes.',
    category: 'Implementation Guide',
    publishedAt: 'October 1, 2025',
    image: '🧩',
    color: 'green',
    readTime: '16 min read'
  },
  {
    title: 'AI Insights: New Content Highlights — September 30, 2025',
    slug: 'ai-september-30-2025-new-content-highlights',
    excerpt: 'A concise overview of today’s new guides across workflows, data fabric, and resilience—what changed and why it matters.',
    category: 'Featured Article',
    publishedAt: 'September 30, 2025',
    image: '🆕',
    color: 'blue',
    readTime: '8 min read'
  },
  {
    title: 'AI Strategic Roadmaps — October 2025',
    slug: 'ai-october-2025-strategic-roadmaps',
    excerpt: 'Quarterly plan for governed autonomy, cost-aware routing, and data fabric foundations with milestones and risks.',
    category: 'Implementation Guide',
    publishedAt: 'October 1, 2025',
    image: '🗺️',
    color: 'green',
    readTime: '10 min read'
  },
  {
    title: 'AI 2026 Intelligent Data Fabric: Real-Time Decisions at Scale',
    slug: 'ai-2026-intelligent-data-fabric',
    excerpt: 'Unify batch, streaming, and unstructured data into a governed fabric powering low-latency AI decisions and observability.',
    category: 'Featured Article',
    publishedAt: 'October 1, 2025',
    image: '🧩',
    color: 'blue',
    readTime: '14 min read'
  }
];

const categories = [
  { name: 'All', count: blogPosts.length, color: 'gray' },
  { name: 'Breakthrough Technology', count: blogPosts.filter(post => post.category === 'Breakthrough Technology').length, color: 'purple' },
  { name: 'Revolutionary Technology', count: blogPosts.filter(post => post.category === 'Revolutionary Technology').length, color: 'indigo' },
  { name: 'Implementation Guide', count: blogPosts.filter(post => post.category === 'Implementation Guide').length, color: 'green' },
  { name: 'Featured Article', count: blogPosts.filter(post => post.category === 'Featured Article').length, color: 'blue' }
];

export default function BlogPage() {
  const featuredPosts = [
    {
      title: "AI 2026 Meta-Cognitive Reasoning: Thinking About Thinking",
      excerpt: "The most significant breakthrough in artificial intelligence is here. AI systems can now think about their own thinking processes, monitor their reasoning, and adapt their problem-solving strategies in real-time.",
      href: "/blog/ai-2026-meta-cognitive-reasoning",
      category: "Meta-Cognitive AI",
      readTime: "25 min",
      date: "January 30, 2026",
      icon: "🧠",
      gradient: "from-indigo-500 to-purple-600",
      stats: { accuracy: "95%", speed: "10x" }
    },
    {
      title: "AI 2026 Quantum Neural Networks: Revolutionary Processing Power",
      excerpt: "The convergence of quantum computing and neural networks has created unprecedented capabilities. Quantum-enhanced AI solves exponentially complex problems in fractions of the time.",
      href: "/blog/ai-2026-quantum-neural-networks",
      category: "Quantum AI",
      readTime: "18 min",
      date: "January 30, 2026",
      icon: "⚛️",
      gradient: "from-purple-500 to-indigo-600",
      stats: { processing: "1000x", accuracy: "99.9%" }
    },
    {
      title: "AI 2026 Autonomous Finance Operations: $100M+ Annual Savings",
      excerpt: "Fully autonomous financial operations managing entire financial processes without human intervention. Delivering unprecedented accuracy, speed, and cost efficiency.",
      href: "/blog/ai-2026-autonomous-finance-operations",
      category: "Autonomous Finance",
      readTime: "22 min",
      date: "January 30, 2026",
      icon: "💰",
      gradient: "from-green-500 to-emerald-600",
      stats: { savings: "$100M+", accuracy: "99.9%" }
    },
    {
      title: "AI 2026 Edge Computing Revolution: Real-Time Intelligence Everywhere",
      excerpt: "Bringing AI intelligence to every device, sensor, and location with 10x faster processing, 99.9% uptime, and real-time decision-making capabilities.",
      href: "/blog/ai-2026-edge-computing-revolution",
      category: "Edge Computing",
      readTime: "20 min",
      date: "January 30, 2026",
      icon: "🌐",
      gradient: "from-cyan-500 to-blue-600",
      stats: { latency: "<1ms", uptime: "99.9%" }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
        <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto">
          <Link href="/" className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/content-hub" className="text-gray-700 hover:text-blue-600 transition-colors">Content Hub</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-600 font-bold text-sm tracking-wider uppercase">
              🚀 Revolutionary AI Breakthroughs 2026
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            AI Innovation Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most significant AI breakthroughs, enterprise transformation strategies, and cutting-edge technology insights 
            from the world's leading AI experts and practitioners.
          </p>
        </section>

        {/* Featured Posts Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">🔥 Latest Breakthrough Articles</h2>
              <p className="text-xl opacity-90">
                The most revolutionary AI innovations of 2026 are now available
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPosts.map((post, index) => (
                <Link key={index} href={post.href} className="group">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${post.gradient} rounded-lg flex items-center justify-center text-white text-xl`}>
                        {post.icon}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-purple-200">{post.category}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {post.excerpt.substring(0, 120)}...
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4 text-gray-300">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          Zion Tech
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-purple-200 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                href="#all-posts"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl transition-colors inline-flex items-center gap-2"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Breakthrough Performance Metrics</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1000x</div>
                <div className="text-gray-600">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$100M+</div>
                <div className="text-gray-600">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">&lt;1ms</div>
                <div className="text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* All Posts Section */}
        <section id="all-posts">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Articles</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="w-4 h-4" />
                <span>Sort by latest</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Link key={index} href={post.href} className="group">
                <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${post.gradient} rounded-lg flex items-center justify-center text-white`}>
                      {post.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt.substring(0, 150)}...
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Zion Tech
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-purple-600 font-semibold">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}

            {/* Additional sample posts */}
            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white">
                    💼
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      Enterprise AI
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Enterprise Transformation: $50M Annual Savings Blueprint
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Discover how Fortune 500 companies achieve $50M annual savings, 95% process automation, and 300% ROI through comprehensive AI transformation strategies...
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      50 min
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Zion Tech
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/ai-2026-autonomous-enterprise-operations" className="group">
              <article className="bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white">
                    🤖
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                      Autonomous Systems
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  AI 2026 Autonomous Enterprise Operations: Complete Business Automation
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Deploy autonomous AI systems for incident response, finance, and supply chain with provable guardrails and 98% automation rates...
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      30 min
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Zion Tech
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-orange-600 font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join 500+ leading organizations achieving breakthrough results with our revolutionary AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-xl transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <div className="space-y-2">
                <Link href="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">All Services</Link>
                <Link href="/services/ai-autonomous-operations" className="block text-gray-600 hover:text-blue-600 transition-colors">AI Autonomous Operations</Link>
                <Link href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">Micro SaaS</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Content</h3>
              <div className="space-y-2">
                <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">Blog</Link>
                <Link href="/content-hub" className="block text-gray-600 hover:text-blue-600 transition-colors">Content Hub</Link>
                <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors">Case Studies</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">About</Link>
                <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Mobile: +1 302 464 0950</div>
                <div>Email: <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">kleber@ziontechgroup.com</a></div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-6 pt-4 text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}