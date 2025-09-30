import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

const LatestContentBanner2025: React.FC = () => {
  const latestArticles = [
    {
      id: 1,
      title: 'Quantum-AI Convergence 2026: 1000x Performance Breakthrough for Enterprise',
      slug: 'quantum-ai-convergence-enterprise-2026',
      excerpt: 'Harness quantum-AI hybrid systems achieving 1000x speedups in optimization, molecular simulation, and portfolio analysis. Deploy breakthrough technology solving problems impossible for classical computing.',
      category: 'Quantum Computing & AI',
      date: '2025-10-01',
      readTime: '18 min',
      trending: true,
      icon: '⚛️'
    },
    {
      id: 2,
      title: 'Agentic Workflow Automation 2026: 85% Knowledge Work Automation',
      slug: 'agentic-workflow-automation-2026',
      excerpt: 'Deploy autonomous AI agents that transform business workflows achieving 85% automation with self-healing and adaptive capabilities. Experience true autonomous business process transformation.',
      category: 'AI Automation & Agentic Systems',
      date: '2025-10-01',
      readTime: '16 min',
      trending: true,
      icon: '🤖'
    },
    {
      id: 3,
      title: 'Neuromorphic Edge Computing 2026: 10,000x Energy Efficiency',
      slug: 'neuromorphic-edge-computing-2026',
      excerpt: 'Achieve 10,000x energy efficiency with brain-inspired neuromorphic processors enabling AI anywhere, anytime. Deploy real-time AI inference on battery-powered devices with millisecond latency.',
      category: 'Edge AI & Neuromorphic Computing',
      date: '2025-10-01',
      readTime: '17 min',
      trending: true,
      icon: '🧠'
    },
    {
      id: 4,
      title: 'AI Privacy-Preserving Analytics 2026: Zero-Knowledge Data Intelligence',
      slug: 'ai-privacy-preserving-analytics-2026',
      excerpt: 'Extract full intelligence from sensitive data with zero exposure using homomorphic encryption and federated learning. Achieve complete insights with perfect regulatory compliance.',
      category: 'Privacy AI & Secure Analytics',
      date: '2025-10-01',
      readTime: '19 min',
      trending: true,
      icon: '🔐'
    },
    {
      id: 5,
      title: 'AI Digital Twin Orchestration 2026: Enterprise Reality Simulation',
      slug: 'ai-digital-twin-orchestration-2026',
      excerpt: 'Create AI-powered digital twins that simulate, predict, and optimize entire enterprise operations in real-time. Achieve 40% efficiency gains through intelligent scenario testing.',
      category: 'Digital Twins & Simulation',
      date: '2025-10-01',
      readTime: '20 min',
      trending: true,
      icon: '🎯'
    },
    {
      id: 6,
      title: 'AI Agent Swarms: Collective Intelligence Revolutionizing Enterprise Operations',
      slug: 'ai-agent-swarms-collective-intelligence-2025',
      excerpt: 'Harness AI agent swarms with collective intelligence achieving 10x efficiency gains. Deploy autonomous agent colonies that coordinate, learn, and adapt together through emergent behaviors.',
      category: 'Swarm Intelligence & Multi-Agent Systems',
      date: '2025-10-01',
      readTime: '55 min',
      trending: true,
      icon: '🐝'
    },
    {
      id: 7,
      title: 'LLM Fine-Tuning Breakthrough: Domain-Specific AI Excellence in 2025',
      slug: 'llm-fine-tuning-breakthrough-2025',
      excerpt: 'Master revolutionary LLM fine-tuning techniques achieving 98% accuracy for domain-specific tasks. Transform foundation models into enterprise AI powerhouses using LoRA, QLoRA, and RLHF.',
      category: 'LLM Training & Optimization',
      date: '2025-10-01',
      readTime: '58 min',
      trending: true,
      icon: '💡'
    },
    {
      id: 8,
      title: 'AI Governance & Compliance Automation: The 2025 Enterprise Framework',
      slug: 'ai-governance-compliance-automation-2025',
      excerpt: 'Implement comprehensive AI governance and automated compliance frameworks ensuring regulatory adherence, ethical AI deployment, and proactive risk management. Achieve 99.9% audit success.',
      category: 'AI Governance & Compliance',
      date: '2025-10-01',
      readTime: '52 min',
      trending: true,
      icon: '⚖️'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30 mb-8 animate-fade-in">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-bold text-sm tracking-wider uppercase">
                  🔥 BREAKING! 5 REVOLUTIONARY NEW ARTICLES + 3 CASE STUDIES • October 1, 2025
                </span>
                <Sparkles className="w-5 h-5 text-fuchsia-400 animate-pulse" />
              </div>

              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent animate-fade-in">
                Latest Quantum-AI & Agentic Breakthroughs
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience 1000x quantum speedups, 85% workflow automation, and 10,000x neuromorphic efficiency. 
                NEW: Aerospace saves $850M, Telecom achieves 99.995% uptime, Automotive reaches 5-star safety.
              </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-[1600px] mx-auto">
          {latestArticles.map((article, index) => (
            <div 
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-fuchsia-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:via-fuchsia-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
              
              <div className="relative p-8">
                {/* Icon & Badges */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {article.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    {article.trending && (
                      <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg">
                        <TrendingUp className="w-3 h-3" />
                        <span>TRENDING</span>
                      </div>
                    )}
                    <span className="px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold border border-cyan-500/30">
                      NEW
                    </span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold border border-fuchsia-500/30">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    {article.readTime}
                  </span>
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                {/* CTA Button */}
                <a
                  href={`/blog/${article.slug}`}
                  className="group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Ahead of the AI Revolution
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Get weekly insights, case studies, and breakthrough research delivered directly to your inbox. 
                Join 50,000+ AI leaders and innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/blog"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Explore All Articles</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Get Started with Zion AI</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10B+', label: 'Data Points Processed Daily' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '5M+', label: 'Autonomous Operations Hours' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestContentBanner2025;