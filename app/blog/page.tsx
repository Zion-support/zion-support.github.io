import React from 'react';
import Link from 'next/link';
export const metadata = {
  title: 'AI & Tech Blog | Zion Tech Group',
  description: 'Latest insights on AI trends, technology innovations, and business automation strategies.',
};

export default function BlogPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16 py-12 bg-gradient-to-br from-blue-50 to-teal-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI & Technology Insights
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay ahead with expert insights on AI trends, automation strategies, and emerging technologies
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-8 text-white">
            <div className="max-w-4xl">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Featured Article
              </span>
              <h2 className="text-3xl font-bold mb-4">
                AI Autonomous Infrastructure 2025: Self-Healing Systems for Enterprise IT
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Discover how autonomous AI infrastructure is revolutionizing enterprise IT with self-healing systems, 
                predictive maintenance, and intelligent automation that reduces downtime by 90%.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span>January 20, 2025</span>
                <span>•</span>
                <span>15 min read</span>
                <span>•</span>
                <span>Autonomous AI</span>
              </div>
              <div className="mt-6">
                <a 
                  href="/blog/ai-autonomous-infrastructure-2025" 
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <BlogPost
            title="Agentic Workflow Orchestration 2026: Reliable AI Workflows"
            excerpt="Orchestrate multi-step agents with guardrails, approvals, and observability for measurable ROI."
            date="October 9, 2025"
            category="Architecture"
            readTime="16 min"
            image="🧩"
            href="/blog/agentic-workflow-orchestration-2026"
          />
          <BlogPost
            title="AI Governance Maturity Model 2026"
            excerpt="Move from ad-hoc to audit-ready governance with measurable business value."
            date="October 9, 2025"
            category="Governance"
            readTime="10 min"
            image="🛡️"
            href="/blog/ai-governance-maturity-model-2026"
          />
          <BlogPost
            title="AI Customer Data Platforms 2026"
            excerpt="Blueprint for AI-native CDPs delivering real-time personalization at scale."
            date="October 9, 2025"
            category="Personalization"
            readTime="9 min"
            image="📇"
            href="/blog/ai-customer-data-platforms-2026"
          />
          <BlogPost
            title="Platform Engineering Scorecards 2026: From Golden Paths to Outcomes"
            excerpt="Measure adoption, golden-path TTFX, SLOs, and shipped value—without slowing delivery."
            date="October 9, 2025"
            category="Platform Engineering"
            readTime="8 min"
            image="🧭"
            href="/blog/platform-engineering-scorecards-2026"
          />
          <BlogPost
            title="AI Cybersecurity Automation: From Detections to Autonomic Response"
            excerpt="Behavioral detections and policy tests wired to runbooks that auto-contain incidents <60s."
            date="October 9, 2025"
            category="Security"
            readTime="7 min"
            image="🛡️"
            href="/blog/ai-cybersecurity-automation-2025"
          />
          <BlogPost
            title="Edge AI Blueprint 2026: Privacy‑Preserving Intelligence <100ms"
            excerpt="Signed configs, tiny models, and geo budgets for private, real‑time decisions."
            date="October 9, 2025"
            category="Edge Computing"
            readTime="9 min"
            image="⚡"
            href="/blog/edge-ai-blueprint-2026"
          />
          <BlogPost
            title="AI Roadmaps 2026: What to Build Next and Why"
            excerpt="A pragmatic roadmap for 2026 across CX, ops, and platforms. High-ROI bets with sequencing and metrics."
            date="September 29, 2025"
            category="Strategy"
            readTime="10 min"
            image="🗺️"
            href="/blog/ai-roadmaps-2026"
          />
          <BlogPost
            title="Reliable RAG 2025: Production Patterns for Grounded Answers"
            excerpt="Reduce hallucinations and latency with hardened RAG patterns: contracts, caching, routing, and evals."
            date="September 29, 2025"
            category="AI Platforms"
            readTime="9 min"
            image="📚"
            href="/blog/ai-reliable-rag-2025"
          />
          <BlogPost
            title="AI Agent Safety Blueprint 2026: Guardrails for Reliable Autonomy"
            excerpt="Blueprint for safe autonomous agents with policy gates, audits, and progressive autonomy."
            date="September 29, 2025"
            category="AI Reliability"
            readTime="9 min"
            image="🛡️"
            href="/blog/ai-agent-safety-blueprint-2026"
          />
          <BlogPost
            title="AI FinOps Scorecards 2025: Control LLM Spend Without Slowing Teams"
            excerpt="Practical scorecards and controls to cut LLM costs 30–70% with team-friendly governance."
            date="September 29, 2025"
            category="FinOps"
            readTime="8 min"
            image="📉"
            href="/blog/ai-finops-scorecards-2025"
          />
          <BlogPost
            title="AI Go-To-Market 2025: Proven Plays for Fast Adoption"
            excerpt="Practical GTM playbook for AI products: positioning, enterprise readiness, and repeatable pipeline plays."
            date="September 29, 2025"
            category="Growth"
            readTime="8 min"
            image="📣"
            href="/blog/ai-go-to-market-2025"
          />
          <BlogPost
            title="AI Risk Register: Practical Framework for Managing AI Risks"
            excerpt="Production-ready risk register across model, data, privacy, security, and ops with monitoring."
            date="September 29, 2025"
            category="AI Reliability"
            readTime="10 min"
            image="🧭"
            href="/blog/ai-risk-register"
          />
          <BlogPost
            title="Practical RAG in Production: Patterns that Actually Work"
            excerpt="Battle-tested RAG patterns for groundedness, latency, and cost at enterprise scale."
            date="September 29, 2025"
            category="AI Platforms"
            readTime="9 min"
            image="🧩"
            href="/blog/practical-rag-in-production"
          />
          <BlogPost
            title="AI Revolution 2025: Complete Business Transformation Guide"
            excerpt="Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025. Complete strategy guide with implementation roadmap."
            date="January 17, 2025"
            category="Featured"
            readTime="12 min"
            image="🚀"
            featured={true}
            href="/blog/practical-rag-blueprint-2025"
          />
          <BlogPost
            title="AI Workflow Automation: Complete Implementation Guide"
            excerpt="Master AI workflow automation with our comprehensive guide. Reduce manual work by 80% and improve efficiency across all departments."
            date="January 17, 2025"
            category="Guide"
            readTime="15 min"
            image="⚙️"
            featured={true}
            href="/blog/ai-workflow-automation-guide"
          />
          <BlogPost
            title="AI Analytics Implementation: Transform Data into Insights"
            excerpt="Learn how to implement AI-powered analytics that transform raw data into actionable business insights with real-time dashboards and predictive modeling."
            date="January 17, 2025"
            category="Analytics"
            readTime="18 min"
            image="📊"
            featured={true}
            href="/blog/ai-analytics-implementation"
          />
          <BlogPost
            title="LLM Cost Optimization in 2025: Practical Strategies"
            excerpt="Cut LLM spend by 30–70% with routing, caching, batching, and quantization while preserving quality."
            date="September 29, 2025"
            category="AI Platforms"
            readTime="9 min"
            image="💸"
            href="/blog/llm-cost-optimization-2025"
          />
          <BlogPost
            title="Edge LLM Latency Patterns: Sub-200ms Interactions"
            excerpt="Streaming, prefetch, and edge compute patterns to deliver instant-feel AI UX."
            date="September 29, 2025"
            category="Performance"
            readTime="7 min"
            image="⚡"
            href="/blog/edge-llm-latency-patterns"
          />
          <BlogPost
            title="GenAI Guardrails 2025: Practical Playbook for Reliable AI"
            excerpt="Concrete patterns to make generative AI systems safe, reliable, and auditable in production."
            date="September 29, 2025"
            category="AI Reliability"
            readTime="11 min"
            image="🧰"
            href="/blog/genai-guardrails-2025"
          />
          <BlogPost
            title="GenAI Guardrails 2025: Practical Playbook for Reliable AI"
            excerpt="Concrete patterns to make generative AI systems safe, reliable, and auditable in production."
            date="September 29, 2025"
            category="AI Reliability"
            readTime="11 min"
            image="🛡️"
            href="/blog/ai-agents-in-the-enterprise-2025"
          />
          <BlogPost
            title="AI Agents in the Enterprise: 2025 Adoption Playbook"
            excerpt="A practical playbook for deploying autonomous AI agents across revenue ops and IT with measurable ROI."
            date="September 29, 2025"
            category="Autonomous AI"
            readTime="10 min"
            image="🧠"
            href="/blog/ai-agents-in-the-enterprise-2025"
          />
          <BlogPost
            title="AI-Powered Business Automation: Complete 2025 Guide"
            excerpt="Transform your business operations with cutting-edge AI automation strategies. Learn how leading companies achieve 300% productivity gains and 60% cost reductions."
            date="January 20, 2025"
            category="Featured"
            readTime="14 min"
            image="⚡"
            featured={true}
            href="/blog/ai-powered-business-automation-2025"
          />
          <BlogPost
            title="Enterprise AI Security: Best Practices for 2025"
            excerpt="Comprehensive guide to securing AI systems in enterprise environments. Learn about AI-specific threats, security frameworks, and implementation strategies."
            date="January 19, 2025"
            category="Security"
            readTime="16 min"
            image="🔒"
            featured={true}
            href="/blog/enterprise-ai-security-best-practices"
          />
          <BlogPost
            title="Cloud Migration Best Practices for 2025"
            excerpt="Learn the essential strategies for successful cloud migration, including zero-downtime approaches and cost optimization techniques."
            date="January 12, 2025"
            category="Cloud"
            readTime="7 min"
            image="☁️"
            href="/blog/cloud-migration-best-practices"
          />
          <BlogPost
            title="Cybersecurity in the AI Era: Protecting Your Digital Assets"
            excerpt="Explore advanced cybersecurity strategies for AI-powered environments, including zero-trust architecture and automated threat detection."
            date="January 10, 2025"
            category="Security"
            readTime="5 min"
            image="🔒"
            href="/blog/cybersecurity-ai-era"
          />
          <BlogPost
            title="DevOps Automation: Scaling Infrastructure with Intelligence"
            excerpt="Learn how automated DevOps practices are enabling rapid deployment, infrastructure scaling, and continuous integration at enterprise scale."
            date="January 5, 2025"
            category="DevOps"
            readTime="8 min"
            image="⚙️"
            href="/blog/devops-automation-scaling"
          />
          <BlogPost
            title="AI-Powered Customer Support in 2025: The Future is Here"
            excerpt="Discover how AI is revolutionizing customer support with intelligent chatbots, sentiment analysis, and 24/7 availability."
            date="January 17, 2025"
            category="Customer Support"
            readTime="8 min"
            image="💬"
            href="/blog/ai-powered-customer-support-2025"
          />
          <BlogPost
            title="Cloud-Native Architecture in 2025: Building for Scale and Resilience"
            excerpt="Master cloud-native architecture patterns, microservices design, and container orchestration for scalable applications."
            date="January 17, 2025"
            category="Cloud Architecture"
            readTime="12 min"
            image="☁️"
            href="/blog/cloud-native-architecture-2025"
          />
          <BlogPost
            title="The Rise of AI Virtual Assistants in Customer Service"
            excerpt="Discover how AI virtual assistants are revolutionizing customer support with 24/7 availability, natural language processing, and personalized interactions."
            date="January 3, 2025"
            category="AI"
            readTime="5 min"
            image="💬"
            href="/blog/ai-virtual-assistants-customer-service"
          />
          <BlogPost
            title="Enterprise AI Implementation 2025: Complete Guide"
            excerpt="Master enterprise AI implementation with proven strategies, best practices, and real-world case studies. Transform your organization with AI that delivers measurable ROI."
            date="January 20, 2025"
            category="Featured"
            readTime="18 min"
            image="🏢"
            featured={true}
            href="/blog/ai-enterprise-implementation-2025"
          />
          <BlogPost
            title="MLOps Best Practices 2025: Production-Ready ML Systems"
            excerpt="Master MLOps with proven strategies for building, deploying, and maintaining production-ready ML systems. Learn from real-world implementations and industry best practices."
            date="January 20, 2025"
            category="MLOps"
            readTime="16 min"
            image="🔧"
            featured={true}
            href="/blog/ai-mlops-best-practices-2025"
          />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Never Miss an Update
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest AI insights, tech trends, and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogPost({
  title,
  excerpt,
  date,
  category,
  readTime,
  image,
  featured = false,
  href,
}: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  href?: string;
}) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Featured':
        return 'bg-orange-100 text-orange-800';
      case 'Guide':
        return 'bg-emerald-100 text-emerald-800';
      case 'Analytics':
        return 'bg-indigo-100 text-indigo-800';
      case 'Autonomous AI':
        return 'bg-purple-100 text-purple-800';
      case 'Cloud':
        return 'bg-blue-100 text-blue-800';
      case 'Security':
        return 'bg-red-100 text-red-800';
      case 'DevOps':
        return 'bg-gray-100 text-gray-800';
      case 'AI':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <Link href={href} className="block">
          {children}
        </Link>
      );
    }
    return <>{children}</>;
  };

  return (
    <ContentWrapper>
      <article className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border ${
        featured ? 'border-orange-200 ring-2 ring-orange-100' : 'border-gray-200'
      } group cursor-pointer`}>
        <div className="text-4xl mb-4">{image}</div>
        <div className="mb-4 flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(category)}`}>
            {category}
          </span>
          {featured && (
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
        {href && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
              Read Article →
            </div>
          </div>
        )}
      </article>
    </ContentWrapper>
  );
}
