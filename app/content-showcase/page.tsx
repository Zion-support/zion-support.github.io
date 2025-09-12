<<<<<<< HEAD
import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI 2025: Quantum Computing Breakthrough - The Next Frontier",
      description: "Explore how quantum computing is revolutionizing AI in 2025. Discover breakthrough applications, real-world implementations, and the future of quantum-enhanced machine learning.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      icon: "⚡",
      category: "Quantum AI",
      readTime: "18 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI 2025: Neural Interfaces & Brain-Computer Integration",
      description: "The Mind-Machine Revolution is here. Discover how neural interfaces are creating direct connections between human brains and AI systems, unlocking unprecedented capabilities.",
      href: "/blog/ai-2025-neural-interfaces-brain-computer",
      icon: "🧠",
      category: "Neural Interfaces",
      readTime: "22 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI 2025: Space Technology & Autonomous Systems",
      description: "The Final Frontier meets Artificial Intelligence. Discover how AI is revolutionizing space exploration, satellite operations, and autonomous systems.",
      href: "/blog/ai-2025-space-technology-autonomous-systems",
      icon: "🛰️",
      category: "Space Technology",
      readTime: "20 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Breakthrough Innovations 2025: Revolutionary Technologies Shaping the Future",
      description: "Discover the most groundbreaking AI innovations of 2025. From AGI breakthroughs to quantum AI, explore technologies that are reshaping industries and creating unprecedented opportunities.",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🚀",
      category: "AI Innovations",
      readTime: "25 min read",
      date: "Jan 30, 2025"
    }
  ];

  const newCaseStudies = [
    {
      title: "AI Healthcare Diagnosis Success: 95% Accuracy Achieved",
      description: "How a major healthcare system transformed patient care with AI-powered diagnostic tools, achieving 95% accuracy, 60% faster diagnosis times, and $2.5M annual savings.",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      icon: "🏥",
      category: "Healthcare AI",
      result: "95% Accuracy",
      date: "Jan 30, 2025"
=======
      title: "AI Quantum Financial Optimization 2025 - $2.3B Cost Reduction Case Study",
      description: "Discover how a Fortune 500 financial institution achieved $2.3B in cost savings using quantum AI optimization for portfolio management, risk assessment, and trading algorithms.",
      href: "/case-studies/ai-quantum-financial-optimization-2025",
      icon: "💰",
      category: "Quantum AI",
      result: "$2.3B Savings",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Neural Interface Healthcare 2025 - Revolutionary Medical Breakthrough",
      description: "Discover how neural interfaces are revolutionizing healthcare in 2025. Real case study showing 95% improvement in patient outcomes and $500M cost savings.",
      href: "/case-studies/ai-neural-interface-healthcare-2025",
      icon: "🏥",
      category: "Healthcare AI",
      result: "95% Improvement",
      date: "Jan 28, 2025"
    },
    {
      title: "Fortune 500 AI Transformation Success: $50M Savings & 300% ROI Case Study",
      description: "Discover how a Fortune 500 company achieved $50M in cost savings and 300% ROI through comprehensive AI transformation. Complete case study with implementation details.",
      href: "/case-studies/ai-transformation-fortune-500-success-2025",
      icon: "🏆",
      category: "Enterprise AI",
      result: "$50M Savings",
      date: "Jan 30, 2025"
    }
  ];

  const newResources = [
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide for 2026. 200+ pages of proven frameworks, templates, and strategies to successfully adopt AI across your organization.",
      href: "/resources/ai-2025-implementation-master-guide-2026",
      icon: "📖",
      category: "Master Guide",
      type: "Free Download",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Implementation Checklist 2025: 150+ Actionable Items",
      description: "Complete checklist covering every aspect of AI implementation from strategy to deployment, with 150+ actionable items across 7 key categories.",
      href: "/resources/ai-implementation-checklist-2025",
      icon: "📋",
      category: "Checklist",
      type: "Free Download",
      date: "Feb 08, 2025"
    },
    {
      title: "AI Security Hardening Checklist: Essential Security Measures",
      description: "Comprehensive security checklist covering 12 key areas and 80+ essential security measures for AI systems and deployments.",
      href: "/resources/ai-security-hardening-checklist",
      icon: "🛡️",
      category: "Security",
      type: "Free Download",
      date: "Feb 06, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Tech Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Stay ahead with expert insights on AI, cybersecurity, sustainability, and emerging technologies."
        keywords="AI content, tech resources, case studies, blog articles, AI guides, technology insights, expert analysis"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT SHOWCASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Tech Content
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of expert insights, case studies, and resources. 
            Stay ahead with the latest trends in AI, cybersecurity, sustainability, and emerging technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Browse All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
=======
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
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fresh AI & Tech Content Just Dropped
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                New this week: AI Breakthrough Innovations 2025, Workforce Transformation Guide, 
                Sustainability Success Stories, and comprehensive implementation resources.
              </p>
            </div>
<<<<<<< HEAD

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2025: Breakthrough Innovations</h3>
                  <p className="text-sm opacity-90 mb-3">Revolutionary AI innovations transforming industries</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-workforce-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                  <h3 className="text-lg font-semibold mb-2">AI Workforce Transformation</h3>
                  <p className="text-sm opacity-90 mb-3">Complete reskilling strategies for the AI era</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-lg font-semibold mb-2">AI Sustainability Success</h3>
                  <p className="text-sm opacity-90 mb-3">60% energy reduction and carbon neutrality</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-lg font-semibold mb-2">Free AI Resources</h3>
                  <p className="text-sm opacity-90 mb-3">50+ implementation guides and templates</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl">🚀</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Innovations
                    </span>
                    <span className="text-gray-500 text-sm">28 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 15, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI 2025: Breakthrough Innovations That Will Transform Everything
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Discover the revolutionary AI innovations of 2025 that are reshaping industries. 
                    From quantum AI to autonomous systems, explore the technologies defining the future.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xs">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Cybersecurity Threats 2025
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Protecting against next-gen attacks, adversarial AI, and deepfakes. 
                    Comprehensive defense strategies.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-8xl">🌱</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Sustainability
                    </span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Sustainability & Green Tech
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building eco-friendly AI systems that reduce carbon footprint while maintaining 
                    performance.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Enterprise AI
                  </span>
                  <span className="text-gray-500 text-sm">18 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Enterprise Transformation 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete implementation guide with 340% ROI and real case studies for enterprise AI adoption.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-startup-funding-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Startup Strategy
                  </span>
                  <span className="text-gray-500 text-sm">22 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI Startup Funding Guide 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  From seed to Series A with $47B market insights and pitch templates for AI startups.
                </p>
              </div>
            </Link>

            <Link href="/blog/cloud-native-architecture-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    Cloud & DevOps
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  Cloud-Native Architecture 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete blueprint for building scalable, resilient applications with modern cloud patterns.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-go-to-market-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                    Growth & Marketing
                  </span>
                  <span className="text-gray-500 text-sm">12 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                  AI Go-To-Market 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  From zero to traction playbook for AI products with proven positioning and pricing strategies.
                </p>
              </div>
            </Link>

            <Link href="/blog/edge-ai-privacy-by-design-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                    Edge Computing
                  </span>
                  <span className="text-gray-500 text-sm">8 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 mb-2">
                  Edge AI: Privacy by Design
                </h3>
                <p className="text-gray-600 text-sm">
                  On-device intelligence for instant, compliant customer experiences with privacy-first approach.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-cost-optimization-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI Engineering
                  </span>
                  <span className="text-gray-500 text-sm">9 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 mb-2">
                  AI Cost Optimization 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Ship faster, spend less with practical cost optimization strategies for AI systems.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Retail & E-commerce
                  </span>
                  <span className="text-gray-500 text-sm">12 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI Retail Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  $50M revenue increase and 40% cost reduction through comprehensive AI transformation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Fortune 500</span>
                  <span>•</span>
                  <span>$50M revenue</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Financial Services
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Financial Services AI Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  $50M cost savings and 300% efficiency gains through AI-powered automation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Major Bank</span>
                  <span>•</span>
                  <span>$50M savings</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    Manufacturing
                  </span>
                  <span className="text-gray-500 text-sm">10 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  AI Manufacturing Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  40% cost reduction and 60% faster processing through intelligent automation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Fortune 500</span>
                  <span>•</span>
                  <span>$2.3M savings</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/resources/sustainable-ai-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Sustainable AI Playbook
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete guide to building eco-friendly AI systems with actionable strategies.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>150 pages</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Step-by-step checklist for successful AI implementation with best practices.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>45 min read</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 mb-2">
                  AI Security Hardening
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Essential security measures and hardening checklist for AI systems.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>30 min read</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-roi-calculator" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate potential return on investment for AI automation projects.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Interactive Tool</span>
                  <span className="mx-2">•</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
=======
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Showcase: Latest AI & Technology Insights | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI and technology content. Discover the latest articles, case studies, and resources from industry experts.',
  keywords: 'AI content, technology insights, case studies, resources, AI articles, tech guides',
  openGraph: {
    title: 'Content Showcase: Latest AI & Technology Insights',
    description: 'Explore our comprehensive collection of AI and technology content. Discover the latest articles, case studies, and resources.',
    type: 'website',
  },
};

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive collection of AI and technology insights, 
              case studies, and resources from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Browse All Articles
              </Link>
              <Link
                href="/resources"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 Fresh AI & Tech Insights
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              New this week: AI Automation Complete Guide, Advanced Cost Optimization, Healthcare AI Success Story, 
              and AI Implementation Master Guide. Expert insights to accelerate your digital transformation.
            </p>
          </div>

          {/* Featured New Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-automation-2025-complete-guide' className='group">
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-lg font-semibold mb-2'>AI Automation Complete Guide</h3>
                <p className='text-sm opacity-90 mb-3'>Master AI automation with our comprehensive implementation guide</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-cost-optimization-advanced-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>⚡</div>
                <h3 className='text-lg font-semibold mb-2'>Advanced AI Cost Optimization</h3>
                <p className='text-sm opacity-90 mb-3'>Reduce AI expenses by 60% while maintaining performance</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-healthcare-diagnosis-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                <h3 className='text-lg font-semibold mb-2'>Healthcare AI Success Story</h3>
                <p className='text-sm opacity-90 mb-3'>95% accuracy in medical diagnosis with 50% cost reduction</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-master-guide-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📚</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Master Guide</h3>
                <p className='text-sm opacity-90 mb-3'>150+ page complete implementation guide with checklists</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Content Library
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources covering AI, automation, cloud computing, and business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Articles */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Articles</h3>
              <p className="text-gray-600 mb-6">
                In-depth articles covering AI trends, implementation strategies, and industry insights.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/blog/ai-automation-2025-complete-guide" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      AI Automation 2025: Complete Guide
                    </span>
                    <span className="text-xs text-gray-500">New</span>
                  </div>
                </Link>
                <Link href="/blog/ai-workforce-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">👥</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Workforce Transformation 2025</h4>
                      <p className="text-sm text-gray-600">18 min read • New</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
=======
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trending Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the most popular topics and discussions in AI and technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/blog?topic=ai-automation" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Automation
                </h3>
                <p className="text-gray-600 text-sm">15 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=cost-optimization" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Cost Optimization
                </h3>
                <p className="text-gray-600 text-sm">8 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=healthcare-ai" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Healthcare AI
                </h3>
                <p className="text-gray-600 text-sm">12 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=enterprise-ai" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Enterprise AI
                </h3>
                <p className="text-gray-600 text-sm">20 articles</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources delivered 
            straight to your inbox. Join 10,000+ professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe anytime. Read our privacy policy.
          </p>
        </section>
      </div>
=======
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
>>>>>>> 14eca1f1070a8f01fa9716aba945c40febbf2397
  );
}