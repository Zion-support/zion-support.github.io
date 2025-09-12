import React from 'react';
import Link from 'next/link';

interface NewContentPromoBannerProps {
  variant?: 'default' | 'featured' | 'minimal';
  maxItems?: number;
}

const newContentItems = [
  {
    title: "AI Copilots for Engineering Teams",
    description: "Secure, repo-aware copilots that reduce toil and speed reviews",
    url: "/blog/ai-copilots-for-engineering",
    type: "Blog Post",
    category: "Engineering Productivity",
    icon: "👩‍💻",
    featured: true,
    new: true
  },
  {
    title: "AI Sales Enablement Copilots 2025",
    description: "Prospecting, live coaching, and follow-ups with governance and evals",
    url: "/blog/ai-sales-enablement-copilots-2025",
    type: "Blog Post",
    category: "Sales Copilots",
    icon: "🎯",
    featured: true,
    new: true
  },
  {
    title: "Real-Time Voice Agents: Architectures, Guardrails, ROI",
    description: "Low-latency agents with streaming evals, safety policies, and observability",
    url: "/blog/ai-2025-realtime-agents-observability",
    type: "Blog Post",
    category: "Agents",
    icon: "🎙️",
    featured: true,
    new: true
  },
  {
    title: "Enterprise GenAI Security Blueprint 2025",
    description: "Pragmatic controls for leakage, prompt injection, and compliance",
    url: "/blog/ai-2025-genai-security-blueprint",
    type: "Blog Post",
    category: "Security",
    icon: "🛡️",
    featured: true,
    new: true
  },
  {
    title: "AIOps Agents: 41% MTTR Reduction",
    description: "Runbook automation, incident correlation, SLO-aware remediation",
    url: "/case-studies/ai-2025-it-ops-automation-impact",
    type: "Case Study",
    category: "AIOps",
    icon: "🧰",
    featured: true,
    new: true
  },
  {
    title: "AI Agent Cost Optimization 2025",
    description: "Model routing, caching, batching, and evals to cut spend 35–55%",
    url: "/blog/ai-2025-agent-cost-optimization",
    type: "Blog Post",
    category: "Cost Optimization",
    icon: "💸",
    featured: true,
    new: true
  },
  {
    title: "Data Governance for LLM Apps in 2025",
    description: "Lineage, privacy-by-design, access controls, policy engines, and audits",
    url: "/blog/ai-2025-data-governance-llm-apps",
    type: "Blog Post",
    category: "Governance",
    icon: "🛡️",
    featured: true,
    new: true
  },
  {
    title: "End-to-End Evaluation for AI Systems in 2025",
    description: "Quality, latency, cost, safety, and reliability—continuous operational evals",
    url: "/blog/ai-2025-end-to-end-evaluation",
    type: "Blog Post",
    category: "Evaluation",
    icon: "✅",
    featured: true,
    new: true
  },
  {
    title: "Retrieval Augmentation at Scale in 2025",
    description: "Hybrid search, indexing, routing, chunking, caching, and observability",
    url: "/blog/ai-2025-retrieval-augmentation-at-scale",
    type: "Blog Post",
    category: "RAG",
    icon: "🔎",
    featured: true,
    new: true
  },
  {
    title: "AI Benchmarking Best Practices 2025",
    description: "Reliable evals for quality, latency, and cost across models and tasks",
    url: "/resources/ai-benchmarking-best-practices-2025",
    type: "Resource",
    category: "Evaluation",
    icon: "📏",
    featured: true,
    new: true
  },
  {
    title: "AI Agent Safety Evaluator Kit 2025",
    description: "Evaluators, policies, and red-team corpus for safe agent systems",
    url: "/resources/ai-2025-agent-safety-evaluator-kit",
    type: "Resource",
    category: "Safety",
    icon: "🛡️",
    featured: true,
    new: true
  },
  {
    title: "Insurance Underwriting Agents",
    description: "42% cycle time reduction with agentic workflows and guardrails",
    url: "/case-studies/ai-2025-insurance-underwriting-agents",
    type: "Case Study",
    category: "Insurance",
    icon: "🛡️",
    featured: false,
    new: true
  },
  {
    title: "Customer Journey Orchestration 2025",
    description: "Playbooks, prompts, and evaluators to scale lifecycle coordination",
    url: "/resources/ai-2025-customer-journey-orchestration",
    type: "Resource",
    category: "Growth",
    icon: "🧭",
    featured: true,
    new: true
  },
  {
    title: "AI Customer Success Automation 2025",
    description: "Playbooks to automate onboarding, QBRs, and proactive retention",
    url: "/resources/ai-customer-success-automation-2025",
    type: "Resource",
    category: "Customer Success",
    icon: "🤝",
    featured: true,
    new: true
  },
  {
    title: "AI Data Pipeline Automation 2025",
    description: "Streaming, orchestration, and monitoring patterns for reliable AI dataflows",
    url: "/blog/ai-2025-data-pipeline-automation",
    type: "Blog Post",
    category: "Data Engineering",
    icon: "🛠️",
    featured: true,
    new: true
  },
  {
    title: "Agentic Orchestration in the Enterprise",
    description: "Workflow blueprints, safety gates, and cost controls for agent systems",
    url: "/resources/agentic-orchestration-enterprise-2025",
    type: "Resource",
    category: "AI Engineering",
    icon: "🧠",
    featured: false,
    new: true
  },
  {
    title: "Retail Personalization Playbook 2025",
    description: "200+ page guide to 1:1 experiences that drive 300% revenue growth",
    url: "/resources/ai-retail-personalization-playbook-2025",
    type: "Resource",
    category: "Growth",
    icon: "🛍️",
    featured: true,
    new: true
  },
  {
    title: "Practical AI Agents for Small Businesses",
    description: "Automate support, sales outreach, and back-office reliably",
    url: "/blog/ai-agents-for-smbs",
    type: "Blog Post",
    category: "SMB Automation",
    icon: "🏪",
    featured: true,
    new: true
  },
  {
    title: "AI 2025 Breakthrough Innovations",
    description: "Revolutionary AI technologies reshaping industries",
    url: "/blog/ai-2025-breakthrough-innovations",
    type: "Blog Post",
    category: "AI Innovation",
    icon: "🚀",
    featured: true,
    new: true
  },
  {
    title: "Real-Time Voice Agents in 2025",
    description: "Low-latency architectures, guardrails, and ROI for production",
    url: "/blog/ai-2025-realtime-voice-agents",
    type: "Blog Post",
    category: "Agents",
    icon: "🎙️",
    featured: true,
    new: true
  },
  {
    title: "Insurance Claims Automation: 55% OPEX Reduction",
    description: "Tier-1 insurer automates FNOL, triage, and fraud checks",
    url: "/case-studies/ai-insurance-claims-automation-success-2025",
    type: "Case Study",
    category: "Insurance",
    icon: "📄",
    featured: false,
    new: true
  },
  {
    title: "AI Evaluation Checklist 2025",
    description: "Operational evals for safety, latency, cost, and reliability",
    url: "/resources/ai-evaluation-checklist-2025",
    type: "Resource",
    category: "Evaluation",
    icon: "✅",
    featured: false,
    new: true
  },
  {
    title: "AI Model Evaluation Playbook 2025",
    description: "Production-ready evals for LLM apps and agent systems",
    url: "/blog/ai-2025-model-evaluation-playbook",
    type: "Blog Post",
    category: "Engineering",
    icon: "✅",
    featured: true,
    new: true
  },
  {
    title: "AI Production Agent Patterns 2025",
    description: "Reliable patterns for deploying AI agents in production",
    url: "/blog/ai-2025-production-agent-patterns",
    type: "Blog Post",
    category: "AI Engineering",
    icon: "🧭",
    featured: true,
    new: true
  },
  {
    title: "Edge AI Governance Blueprint 2025",
    description: "Privacy-by-design controls for compliant edge intelligence",
    url: "/blog/ai-2025-edge-governance-blueprint",
    type: "Blog Post",
    category: "Governance",
    icon: "🛡️",
    featured: true,
    new: true
  },
  {
    title: "AI Sustainability & Green Tech 2025",
    description: "Building eco-friendly AI systems for a sustainable future",
    url: "/blog/ai-sustainability-green-tech-2025",
    type: "Blog Post",
    category: "Sustainability",
    icon: "🌱",
    featured: true,
    new: true
  },
  {
    title: "Enterprise GenAI Blueprint 2025",
    description: "Governance, cost, and performance optimization for GenAI at scale",
    url: "/blog/ai-2025-enterprise-genai-blueprint",
    type: "Blog Post",
    category: "Enterprise AI",
    icon: "🏢",
    featured: true,
    new: true
  },
  {
    title: "AI Sustainability Transformation: 60% Energy Reduction",
    description: "Fortune 500 company achieves carbon neutrality with AI",
    url: "/case-studies/ai-sustainability-transformation-2025",
    type: "Case Study",
    category: "Sustainability",
    icon: "🌱",
    featured: true,
    new: true
  },
  {
    title: "Agentic Orchestration Blueprint 2025",
    description: "Practical patterns for reliable, cost-efficient agent systems",
    url: "/blog/ai-2025-agentic-orchestration-blueprint",
    type: "Blog Post",
    category: "AI Engineering",
    icon: "🧩",
    featured: false,
    new: true
  },
  {
    title: "Startup Distribution Playbook 2025",
    description: "Channels, motions, and metrics that compound",
    url: "/blog/startup-distribution-playbook-2025",
    type: "Blog Post",
    category: "Growth",
    icon: "📈",
    featured: false,
    new: true
  },
  {
    title: "AI 2025: Breakthrough Innovations",
    description: "Discover revolutionary AI innovations transforming industries",
    url: "/blog/ai-2025-breakthrough-innovations",
    type: "Blog Post",
    category: "AI Trends",
    icon: "🚀",
    featured: false,
    new: true
  },
  {
    title: "AI Ethical Governance Framework 2025",
    description: "Comprehensive guide to implementing ethical AI governance frameworks",
    url: "/blog/ai-2025-ethical-ai-governance",
    type: "Blog Post",
    category: "AI Governance",
    icon: "⚖️",
    featured: false,
    new: true
  },
  {
    title: "AI Automation Trends 2025",
    description: "The future of intelligent automation and autonomous systems",
    url: "/blog/ai-2025-automation-trends",
    type: "Blog Post",
    category: "AI Automation",
    icon: "🤖",
    featured: false,
    new: true
  },
  {
    title: "AI Supply Chain Optimization: $150M Success",
    description: "Fortune 500 company achieves unprecedented cost savings",
    url: "/case-studies/ai-supply-chain-optimization-success-2025",
    type: "Case Study",
    category: "Supply Chain",
    icon: "📦",
    featured: false,
    new: true
  },
  {
    title: "AI Automation Implementation Guide 2025",
    description: "180+ page comprehensive playbook with frameworks and templates",
    url: "/resources/ai-automation-implementation-guide-2025",
    type: "Resource",
    category: "Implementation",
    icon: "📋",
    featured: false,
    new: true
  },
  {
    title: "Enterprise AI Transformation: $50M Success",
    description: "Fortune 500 company achieves unprecedented growth",
    url: "/case-studies/ai-enterprise-transformation-breakthrough-2025",
    type: "Case Study",
    category: "Success Story",
    icon: "🏆",
    featured: false,
    new: true
  },
  {
    title: "GenAI Security Blueprint 2025",
    description: "Enterprise-grade practices to secure GenAI systems in production",
    url: "/blog/ai-2025-genai-security-blueprint",
    type: "Blog Post",
    category: "Security",
    icon: "🛡️",
    featured: false,
    new: true
  },
  {
    title: "AI Productivity Automation 2025",
    description: "Complete guide to 300% productivity gains with AI",
    url: "/blog/ai-productivity-automation-2025",
    type: "Blog Post",
    category: "Productivity",
    icon: "⚡",
    featured: false,
    new: true
  },
  {
    title: "Manufacturing AI Success Story",
    description: "40% cost reduction and 60% faster processing",
    url: "/case-studies/ai-manufacturing-automation-success-2025",
    type: "Case Study",
    category: "Manufacturing",
    icon: "🏭",
    featured: false,
    new: true
  },
  {
    title: "Telecom Network Automation: 55% OPEX Reduction",
    description: "Global operator automates incidents and changes with AI agents",
    url: "/case-studies/ai-telecom-network-automation-success-2025",
    type: "Case Study",
    category: "Telecom",
    icon: "📶",
    featured: false,
    new: true
  },
  {
    title: "AI Governance Starter Kit 2025",
    description: "Templates and policies to operationalize responsible AI",
    url: "/resources/ai-governance-starter-kit-2025",
    type: "Resource",
    category: "Governance",
    icon: "📋",
    featured: false,
    new: true
  }
];

export default function NewContentPromoBanner({ variant = 'default', maxItems = 3 }: NewContentPromoBannerProps) {
  const featuredItems = newContentItems.filter(item => item.featured).slice(0, maxItems);
  
  if (variant === 'minimal') {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl">🔥</div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Fresh AI Content Just Published</h3>
              <p className="text-sm text-gray-600">Breakthrough innovations, success stories, and implementation guides</p>
            </div>
          </div>
          <Link
            href="/content-showcase"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
          >
            Explore Now
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 JUST PUBLISHED - JANUARY 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI Content & Success Stories
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Discover breakthrough innovations, enterprise transformation success stories, 
              and the complete AI implementation playbook. Expert insights to accelerate your growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <Link key={index} href={item.url} className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded-full">
                          {item.type}
                        </span>
                        {item.new && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90 mb-3">{item.description}</p>
                      <div className="flex items-center text-xs opacity-75">
                        <span>{item.category}</span>
                        <span className="mx-2">•</span>
                        <span>Read More →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              📚 Explore All New Content
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl">🔥</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Fresh AI Content Just Published</h3>
            <p className="text-gray-600">Breakthrough innovations, success stories, and implementation guides</p>
          </div>
        </div>
        <Link
          href="/content-showcase"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
        >
          View All →
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {featuredItems.map((item, index) => (
          <Link key={index} href={item.url} className="group">
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {item.type}
                    </span>
                    {item.new && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-blue-600">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}