import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import MegaContentDropBanner from '../../components/MegaContentDropBanner';

export default function ContentShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', name: 'All Content', count: 50 },
    { id: 'ai-automation', name: 'AI Automation', count: 12 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 8 },
    { id: 'case-studies', name: 'Case Studies', count: 16 },
    { id: 'resources', name: 'Resources', count: 8 },
    { id: 'trends', name: 'Trends & Insights', count: 5 }
  ];

  const content = [
    {
      id: 0,
      title: "Advanced AI Architecture Patterns 2025: Building Scalable, Resilient Systems",
      description: "Master advanced AI architecture patterns for 2025. Learn microservices, event-driven design, and distributed AI systems with real-world examples and implementation guides.",
      category: "ai-automation",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🏗️",
      href: "/blog/ai-2025-advanced-ai-architecture",
      tags: ["AI Architecture", "Microservices", "Scalability", "Implementation"]
    },
    {
      id: 1,
      title: "AI Cybersecurity Revolution 2025: Protecting Against Next-Gen Threats",
      description: "Discover the AI cybersecurity revolution transforming enterprise security in 2025. Learn about advanced threat detection, automated response, and zero-trust AI architectures.",
      category: "cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🛡️",
      href: "/blog/ai-2025-cybersecurity-revolution",
      tags: ["AI Cybersecurity", "Threat Detection", "Zero Trust", "Security"]
    },
    {
      id: 2,
      title: "$200M Manufacturing Success: AI Autonomous Systems Case Study 2025",
      description: "Discover how a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems. Complete case study with implementation details, ROI analysis, and lessons learned.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough 2025: The AI Revolution Accelerates",
      description: "Discover the quantum computing breakthroughs revolutionizing AI in 2025. Learn about quantum machine learning, quantum advantage, and the future of computational intelligence.",
      category: "trends",
      type: "Article",
      readTime: "28 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "⚛️",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      tags: ["Quantum Computing", "Quantum AI", "Machine Learning", "Innovation"]
    },
    {
      id: 4,
      title: "Foundation Model Fine-Tuning 2025: Practical Guide",
      description: "PEFT, data curation, evals, guardrails, and cost control for production deployment.",
      category: "ai-automation",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🔧",
      href: "/blog/ai-2025-foundation-model-fine-tuning",
      tags: ["Fine-Tuning", "PEFT", "Production", "Cost Control"]
    },
    {
      id: 1,
      title: "Agent Safety & Evals Playbook 2025",
      description: "Red teaming, jailbreak prevention, policy enforcement, and automated scoring for production AI agents.",
      category: "cybersecurity",
      type: "Article",
      readTime: "19 min read",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🛡️",
      href: "/blog/ai-2025-agent-safety-evals-playbook",
      tags: ["Safety", "Red Teaming", "Security", "Evaluation"]
    },
    {
      id: 2,
      title: "AI Healthcare Diagnosis Success 2025: 95% Accuracy Case Study",
      description: "Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-10",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🏥",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      tags: ["Healthcare", "AI Success", "Case Study", "Medical AI"]
    },
    {
      id: 3,
      title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
      description: "Download our comprehensive AI cybersecurity checklist with 150+ security items to ensure your AI systems are protected against emerging threats.",
      category: "resources",
      type: "Free Download",
      readTime: "150+ items",
      publishDate: "2024-12-22",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📋",
      href: "/resources/ai-cybersecurity-checklist-2025",
      tags: ["Checklist", "Security", "AI Safety", "Free Download"]
    },
    {
      id: 4,
      title: "Edge AI Agents 2025: Running Autonomous Agents in Production",
      description: "Architectures, safety, and observability for deploying autonomous agents at the edge.",
      category: "ai-automation",
      type: "Article",
      readTime: "21 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🤖",
      href: "/blog/ai-2025-edge-agents-in-production",
      tags: ["Edge AI", "Agents", "Observability", "Safety"]
    },
    {
      id: 1,
      title: "Advanced AI Architecture Patterns for 2025: Building Scalable, Resilient Systems",
      description: "Master advanced AI architecture patterns for 2025. Learn microservices, event-driven design, and distributed AI systems with real-world examples and implementation guides.",
      category: "ai-automation",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🏗️",
      href: "/blog/ai-2025-advanced-ai-architecture",
      tags: ["AI Architecture", "Microservices", "Scalability", "Implementation"]
    },
    {
      id: 2,
      title: "AI Cybersecurity Revolution 2025: Protecting Against Next-Gen Threats",
      description: "Discover the AI cybersecurity revolution transforming enterprise security in 2025. Learn about advanced threat detection, automated response, and zero-trust AI architectures.",
      category: "cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🛡️",
      href: "/blog/ai-2025-cybersecurity-revolution",
      tags: ["AI Cybersecurity", "Threat Detection", "Zero Trust", "Security"]
    },
    {
      id: 3,
      title: "Quantum Computing Breakthrough 2025: The AI Revolution Accelerates",
      description: "Discover the quantum computing breakthroughs revolutionizing AI in 2025. Learn about quantum machine learning, quantum advantage, and the future of computational intelligence.",
      category: "trends",
      type: "Article",
      readTime: "28 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "⚛️",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      tags: ["Quantum Computing", "Quantum AI", "Machine Learning", "Innovation"]
    },
    {
      id: 3,
      title: "AI Healthcare Diagnosis Success 2025: 95% Accuracy Case Study",
      description: "Discover how a leading healthcare system achieved 95% diagnostic accuracy and 60% faster diagnosis times with AI-powered medical imaging.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-10",
      author: "Zion Tech Group",
      featured: true,
      trending: false,
      icon: "🏥",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      tags: ["Healthcare", "AI Success", "Case Study", "Medical AI"]
    },
    {
      id: 4,
      title: "$200M Manufacturing Success: AI Autonomous Systems Case Study 2025",
      description: "Discover how a Fortune 500 manufacturer achieved $200M in savings using AI autonomous systems. Complete case study with implementation details, ROI analysis, and lessons learned.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 5,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.",
      category: "resources",
      type: "Free Download",
      readTime: "200+ pages",
      publishDate: "2025-01-28",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"]
    },
    {
      id: 5,
      title: "AI 2025 Breakthrough Innovations: Revolutionary Technologies",
      description: "Discover the groundbreaking AI innovations transforming 2025: autonomous systems, quantum AI, edge intelligence, and sustainable AI solutions.",
      category: "trends",
      type: "Article",
      readTime: "25 min read",
      publishDate: "2025-01-05",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "🚀",
      href: "/blog/ai-2025-breakthrough-innovations",
      tags: ["AI Innovations", "Technology", "Future", "Breakthrough"]
    },
    {
      id: 6,
      title: "AI Workforce Transformation 2025: Complete Reskilling Guide",
      description: "Learn how to transform your workforce for the AI era. Complete reskilling strategies, implementation guides, and real-world success stories.",
      category: "ai-automation",
      type: "Article",
      readTime: "18 min read",
      publishDate: "2025-01-03",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "👥",
      href: "/blog/ai-workforce-transformation-2025",
      tags: ["Workforce", "Reskilling", "AI Training", "Transformation"]
    },
    {
      id: 7,
      title: "AI Data Privacy & Compliance 2025: Complete Guide",
      description: "Navigate the complex landscape of AI data privacy regulations. Learn about GDPR, CCPA, and emerging AI-specific compliance requirements.",
      category: "cybersecurity",
      type: "Article",
      readTime: "22 min read",
      publishDate: "2025-01-01",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "🔒",
      href: "/blog/ai-data-privacy-compliance-2025",
      tags: ["Privacy", "Compliance", "GDPR", "Data Protection"]
    },
    {
      id: 8,
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI",
      description: "Learn how to build sustainable AI systems that reduce environmental impact while maintaining performance. Complete guide to green AI practices.",
      category: "trends",
      type: "Article",
      readTime: "20 min read",
      publishDate: "2024-12-28",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "🌱",
      href: "/blog/ai-sustainability-green-tech-2025",
      tags: ["Sustainability", "Green Tech", "Environment", "Eco-Friendly"]
    },
    {
      id: 9,
      title: "AI Autonomous Manufacturing Success: $200M Case Study",
      description: "Discover how a Fortune 500 manufacturing company achieved $200M in savings through autonomous AI systems. Complete implementation details and lessons learned.",
      category: "case-studies",
      type: "Case Study",
      readTime: "18 min read",
      publishDate: "2024-12-25",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      tags: ["Manufacturing", "Autonomous AI", "Case Study", "ROI"]
    },
    {
      id: 10,
      title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
      description: "Download our comprehensive AI cybersecurity checklist with 150+ security items to ensure your AI systems are protected against emerging threats.",
      category: "resources",
      type: "Free Download",
      readTime: "150+ items",
      publishDate: "2024-12-22",
      author: "Zion Tech Group",
      featured: false,
      trending: false,
      icon: "📋",
      href: "/resources/ai-cybersecurity-checklist-2025",
      tags: ["Checklist", "Security", "AI Safety", "Free Download"]
    },
    {
      id: 11,
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide 2026. 200+ pages of step-by-step instructions, templates, checklists, and best practices.",
      category: "resources",
      type: "Free Download",
      readTime: "200+ pages",
      publishDate: "2025-01-08",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📚",
      href: "/resources/ai-implementation-master-guide-2026",
      tags: ["Master Guide", "Implementation", "Templates", "Free Download"]
    },
    {
      id: 12,
      title: "AI Financial Services Transformation Success 2025: 300% ROI Case Study",
      description: "Complete case study: How a major bank achieved 300% ROI through strategic AI implementation. Learn the strategies, challenges, and results of this transformation.",
      category: "case-studies",
      type: "Case Study",
      readTime: "15 min read",
      publishDate: "2025-01-10",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "💰",
      href: "/case-studies/ai-financial-services-transformation-2025",
      tags: ["Financial Services", "Case Study", "ROI", "Transformation"]
    }
  ];

  // Newly added September 2025 content
  content.push(
    {
      id: 16,
      title: "Agent & LLM Benchmarking Best Practices 2025",
      description: "Design trustworthy evals with latency, cost, and safety signals.",
      category: "ai-automation",
      type: "Article",
      readTime: "19 min read",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "📏",
      href: "/blog/ai-2025-agent-benchmarking-best-practices",
      tags: ["Evaluation", "Benchmarks", "Latency", "Cost"]
    },
    {
      id: 17,
      title: "AI Evaluation Maturity Model 2025 (Free)",
      description: "Assess and improve your org's evaluation maturity with a simple framework.",
      category: "resources",
      type: "Free Download",
      readTime: "Worksheet",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: true,
      trending: false,
      icon: "📚",
      href: "/resources/ai-2025-evaluation-maturity-model",
      tags: ["Maturity", "Governance", "Automation", "Evals"]
    },
    {
      id: 18,
      title: "AI Customer Support Automation: 60% Deflection, +22 NPS",
      description: "Case study: agentic workflows reduce cost and improve CX in 6 months.",
      category: "case-studies",
      type: "Case Study",
      readTime: "14 min read",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "🤝",
      href: "/case-studies/ai-2025-customer-support-automation-success",
      tags: ["Support", "Agents", "Deflection", "NPS"]
    },
    {
      id: 13,
      title: "Real-Time Voice Agents in 2025: Architectures, Safety, and ROI",
      description: "Low-latency, reliable voice agents with guardrails and observability for production.",
      category: "ai-automation",
      type: "Article",
      readTime: "17 min read",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: true,
      trending: true,
      icon: "🎙️",
      href: "/blog/ai-2025-realtime-voice-agents",
      tags: ["Voice", "Agents", "Latency", "Guardrails"]
    },
    {
      id: 14,
      title: "AI Evaluation Checklist 2025 (Free)",
      description: "Operational evals for safety, reliability, latency, and cost with ready templates.",
      category: "resources",
      type: "Free Download",
      readTime: "Checklist",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: true,
      trending: false,
      icon: "✅",
      href: "/resources/ai-evaluation-checklist-2025",
      tags: ["Evals", "Templates", "Checklist", "Reliability"]
    },
    {
      id: 15,
      title: "Insurance Claims Automation: 55% OPEX Reduction",
      description: "Automating FNOL, triage, and fraud checks with agentic workflows in insurance.",
      category: "case-studies",
      type: "Case Study",
      readTime: "14 min read",
      publishDate: "2025-09-12",
      author: "Zion Tech Group",
      featured: false,
      trending: true,
      icon: "📄",
      href: "/case-studies/ai-insurance-claims-automation-success-2025",
      tags: ["Insurance", "Claims", "Agents", "OPEX"]
    }
  );

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'oldest':
        return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime();
      case 'trending':
        return b.trending ? 1 : -1;
      case 'featured':
        return b.featured ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <>
      <SEO
        title="AI Content Showcase - Complete Library of Resources, Guides & Tools"
        description="Explore our comprehensive AI content library featuring breakthrough guides, exclusive case studies, interactive tools, and implementation resources for 2025."
        keywords="AI content, AI resources, AI guides, AI tools, AI case studies, AI implementation, content library"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The most comprehensive AI content library ever assembled. From breakthrough guides to interactive tools - 
                everything you need to master AI in 2025 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog/ai-2025-enterprise-automation-revolution"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Start with Latest Guide
                </Link>
                <Link
                  href="/tools/ai-roi-calculator"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  Try AI Tools
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mega Content Banner */}
        <MegaContentDropBanner variant="premium" maxItems={8} />

        {/* Featured Content Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Content Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our content organized by category to find exactly what you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enterprise AI */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise AI</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive guides for implementing AI in large organizations, including automation, 
                  transformation strategies, and ROI optimization.
                </p>
                <div className="space-y-3">
                  <Link href="/blog/ai-2025-enterprise-automation-revolution" className="block text-blue-600 hover:text-blue-700 font-medium">
                    → AI Enterprise Automation Revolution
                  </Link>
                  <Link href="/case-studies/ai-autonomous-manufacturing-success-2025" className="block text-blue-600 hover:text-blue-700 font-medium">
                    → $200M Manufacturing Success Story
                  </Link>
                  <Link href="/resources/ai-implementation-master-guide-2026" className="block text-blue-600 hover:text-blue-700 font-medium">
                    → AI Implementation Master Guide
                  </Link>
                </div>
              </div>

              {/* Sustainability & Green Tech */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability & Green Tech</h3>
                <p className="text-gray-600 mb-6">
                  AI solutions for environmental sustainability, including green tech implementation, 
                  carbon reduction strategies, and eco-friendly systems.
                </p>
                <div className="space-y-3">
                  <Link href="/blog/ai-2025-sustainability-green-tech" className="block text-green-600 hover:text-green-700 font-medium">
                    → AI Sustainability & Green Tech Guide
                  </Link>
                  <Link href="/case-studies/ai-sustainability-transformation-2025" className="block text-green-600 hover:text-green-700 font-medium">
                    → Sustainability Transformation Case Study
                  </Link>
                  <Link href="/tools/carbon-footprint-calculator" className="block text-green-600 hover:text-green-700 font-medium">
                    → Carbon Footprint Calculator
                  </Link>
                </div>
              </div>

              {/* AI Tools & Calculators */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Tools & Calculators</h3>
                <p className="text-gray-600 mb-6">
                  Interactive tools and calculators to help you assess, plan, and optimize your AI initiatives 
                  with data-driven insights.
                </p>
                <div className="space-y-3">
                  <Link href="/tools/ai-roi-calculator" className="block text-purple-600 hover:text-purple-700 font-medium">
                    → AI ROI Calculator
                  </Link>
                  <Link href="/tools/ai-readiness-assessment" className="block text-purple-600 hover:text-purple-700 font-medium">
                    → AI Readiness Assessment
                  </Link>
                  <Link href="/tools/ai-training-simulator" className="block text-purple-600 hover:text-purple-700 font-medium">
                    → AI Training Simulator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Latest AI Content
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get weekly updates on new content, tools, and exclusive insights delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}