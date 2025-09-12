import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ClockIcon, TagIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Content Showcase - AI & Technology Resources | Zion Tech Group',
  description: 'Explore our comprehensive library of AI and technology content including blog posts, case studies, webinars, and whitepapers.',
  keywords: 'AI content, technology resources, blog posts, case studies, webinars, whitepapers, AI guides',
  openGraph: {
    title: 'Content Showcase - AI & Technology Resources',
    description: 'Explore our comprehensive library of AI and technology content including blog posts, case studies, webinars, and whitepapers.',
    type: 'website',
  },
};

export default function ContentShowcase() {
  const featuredContent = [
    {
      title: "Advanced RAG Systems 2025: Production-Ready Implementation Guide",
      description: "Master advanced RAG (Retrieval-Augmented Generation) systems with our comprehensive 2025 guide. Learn production patterns, optimization techniques, and real-world implementations.",
      href: "/blog/ai-2025-advanced-rag-systems",
      icon: "🔍",
      category: "Advanced AI",
      readTime: "25 min read",
      date: "Jan 28, 2025",
      featured: true
    },
    {
      title: "AI Multimodal Revolution 2025: Vision, Voice, and Text Integration",
      description: "Explore how multimodal AI is revolutionizing human-computer interaction by seamlessly combining vision, voice, and text processing. Learn about the latest breakthroughs and real-world applications.",
      href: "/blog/ai-2025-multimodal-revolution",
      icon: "🎭",
      category: "Multimodal AI",
      readTime: "28 min read",
      date: "Jan 28, 2025",
      featured: true
    },
    {
      title: "Quantum Machine Learning 2025: The Next Frontier of AI",
      description: "Discover how quantum computing is revolutionizing machine learning, enabling exponential speedups in optimization, pattern recognition, and complex problem solving.",
      href: "/blog/ai-2025-quantum-machine-learning",
      icon: "⚛️",
      category: "Quantum AI",
      readTime: "32 min read",
      date: "Jan 28, 2025",
      featured: true
    },
    {
      title: "AI Autonomous Manufacturing Revolution: $200M Success Story",
      description: "Complete case study: How a Fortune 500 manufacturer achieved $200M in cost savings and 300% productivity gains through AI-powered autonomous manufacturing systems.",
      href: "/case-studies/ai-2025-autonomous-manufacturing-revolution",
      icon: "🏭",
      category: "Case Study",
      readTime: "15 min read",
      date: "Jan 28, 2025",
      featured: true
    },
    {
      title: "Building Scalable AI Infrastructure: A Complete Guide",
      description: "Learn how to design and implement AI infrastructure that scales with your business needs, from data pipelines to model deployment and monitoring.",
      href: "/blog/scalable-ai-infrastructure",
      icon: "🏗️",
      category: "AI Infrastructure",
      readTime: "20 min read",
      date: "Jan 25, 2025",
      featured: false
    },
    {
      title: "Enterprise AI Security: Best Practices and Implementation",
      description: "Comprehensive guide to securing AI systems in enterprise environments, covering data protection, model security, and regulatory compliance.",
      href: "/blog/enterprise-ai-security",
      icon: "🔒",
      category: "AI Security",
      readTime: "18 min read",
      date: "Jan 22, 2025",
      featured: false
    },
    {
      title: "AI-Powered Customer Service: 90% Satisfaction Case Study",
      description: "How a leading e-commerce company transformed customer service with AI, achieving 90% customer satisfaction and 60% cost reduction.",
      href: "/case-studies/ai-customer-service-transformation",
      icon: "💬",
      category: "Case Study",
      readTime: "12 min read",
      date: "Jan 20, 2025",
      featured: false
    },
    {
      title: "The Future of AI in Healthcare: Trends and Opportunities",
      description: "Explore the latest trends in AI healthcare applications, from diagnostic tools to personalized medicine and drug discovery.",
      href: "/blog/ai-healthcare-trends-2025",
      icon: "🏥",
      category: "AI Healthcare",
      readTime: "22 min read",
      date: "Jan 18, 2025",
      featured: false
    },
    {
      title: "Machine Learning Model Optimization: Advanced Techniques",
      description: "Master advanced techniques for optimizing machine learning models, including hyperparameter tuning, model compression, and deployment strategies.",
      href: "/blog/ml-model-optimization",
      icon: "⚡",
      category: "Machine Learning",
      readTime: "24 min read",
      date: "Jan 15, 2025",
      featured: false
    },
    {
      title: "AI Ethics and Responsible Development: A Framework",
      description: "Comprehensive framework for developing AI systems responsibly, covering bias mitigation, transparency, and ethical considerations.",
      href: "/blog/ai-ethics-framework",
      icon: "⚖️",
      category: "AI Ethics",
      readTime: "19 min read",
      date: "Jan 12, 2025",
      featured: false
    },
    {
      title: "Edge AI Deployment: Bringing Intelligence to the Edge",
      description: "Learn how to deploy AI models at the edge for real-time processing, reduced latency, and improved privacy in IoT applications.",
      href: "/blog/edge-ai-deployment",
      icon: "📱",
      category: "Edge Computing",
      readTime: "16 min read",
      date: "Jan 10, 2025",
      featured: false
    },
    {
      title: "AI in Financial Services: Risk Management Case Study",
      description: "How a major bank implemented AI for risk management, achieving 40% improvement in fraud detection and 25% reduction in false positives.",
      href: "/case-studies/ai-financial-risk-management",
      icon: "💰",
      category: "Case Study",
      readTime: "14 min read",
      date: "Jan 8, 2025",
      featured: false
    }
  ];

  const categories = [
    { name: 'All', count: featuredContent.length, active: true },
    { name: 'Advanced AI', count: featuredContent.filter(c => c.category === 'Advanced AI').length, active: false },
    { name: 'Multimodal AI', count: featuredContent.filter(c => c.category === 'Multimodal AI').length, active: false },
    { name: 'Quantum AI', count: featuredContent.filter(c => c.category === 'Quantum AI').length, active: false },
    { name: 'Case Study', count: featuredContent.filter(c => c.category === 'Case Study').length, active: false },
    { name: 'AI Infrastructure', count: featuredContent.filter(c => c.category === 'AI Infrastructure').length, active: false },
    { name: 'AI Security', count: featuredContent.filter(c => c.category === 'AI Security').length, active: false },
    { name: 'AI Healthcare', count: featuredContent.filter(c => c.category === 'AI Healthcare').length, active: false },
    { name: 'Machine Learning', count: featuredContent.filter(c => c.category === 'Machine Learning').length, active: false },
    { name: 'AI Ethics', count: featuredContent.filter(c => c.category === 'AI Ethics').length, active: false },
    { name: 'Edge Computing', count: featuredContent.filter(c => c.category === 'Edge Computing').length, active: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Content Showcase
            </h1>
            <p className="text-xl text-indigo-200">
              Explore our comprehensive library of AI and technology content. From in-depth technical guides to real-world case studies, discover resources that will accelerate your AI journey.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Content
            </h2>
            <p className="text-lg text-gray-600">
              Our most popular and impactful content, handpicked by our experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.filter(content => content.featured).map((content, index) => (
              <Link
                key={content.href}
                href={content.href}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{content.icon}</div>
                    <div className="flex items-center space-x-2">
                      <StarIcon className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-600">Featured</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {content.readTime}
                      </div>
                      <div className="flex items-center">
                        <TagIcon className="h-4 w-4 mr-1" />
                        {content.category}
                      </div>
                    </div>
                    <span>{content.date}</span>
                  </div>

                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                    Read More
                    <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Content
            </h2>
            <p className="text-lg text-gray-600">
              Browse our complete library of AI and technology resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <Link
                key={content.href}
                href={content.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{content.icon}</div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        content.featured 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {content.featured ? 'Featured' : content.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {content.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {content.readTime}
                      </div>
                      <div className="flex items-center">
                        <ChartBarIcon className="h-4 w-4 mr-1" />
                        {content.category}
                      </div>
                    </div>
                    <span>{content.date}</span>
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { Search, Filter, Calendar, Clock, User, TrendingUp, Star, Download, BookOpen, Play } from 'lucide-react';

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
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Content Showcase - AI & Technology Resources"
        description="Explore our comprehensive library of AI articles, case studies, and resources. Expert insights on AI automation, cybersecurity, and implementation strategies."
        keywords="AI content, technology resources, AI articles, case studies, implementation guides, AI automation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🚀 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive library of AI articles, case studies, and resources. 
            Expert insights to accelerate your success in 2025 and beyond.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">50</div>
            <div className="text-gray-600">Total Articles</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">16</div>
            <div className="text-gray-600">Case Studies</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
            <div className="text-gray-600">Free Resources</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">30K+</div>
            <div className="text-gray-600">Downloads</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, case studies, and resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="trending">Trending</option>
                <option value="featured">Featured</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        {selectedCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ Featured Content</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.filter(item => item.featured).map(item => (
                <Link key={item.id} href={item.href} className="group">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <div className="flex items-center gap-2">
                        {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                        {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.publishDate).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'all' ? 'All Content' : categories.find(c => c.id === selectedCategory)?.name}
            <span className="text-gray-500 font-normal ml-2">({sortedContent.length})</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedContent.map(item => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div className="flex items-center gap-2">
                      {item.trending && <TrendingUp className="w-4 h-4 text-orange-500" />}
                      {item.featured && <Star className="w-4 h-4 text-yellow-500" />}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                      item.type === 'Free Download' ? 'bg-purple-100 text-purple-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Our team creates custom content tailored to your specific needs. Let us know what topics you'd like to explore, and we'll create comprehensive resources just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Custom Content
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Browse Blog
            </Link>
          </div>
        </div>
      </section>

          {sortedContent.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
              <p className="text-gray-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources. Join 10,000+ 
            professionals who trust our content.
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
        </div>
      </div>
    </div>
  );
}
export default function ContentShowcasePage() {
	const featuredContent = [
		{
			title: 'AI Industry Disruption 2025',
			description:
				'How AI is reshaping every sector with real impact data and actionable insights for business leaders.',
			href: '/blog/ai-2025-industry-disruption',
			icon: '🏭',
			category: 'AI & Technology',
			readTime: '25 min read',
			date: 'Jan 30, 2025',
			type: 'Article',
			featured: true,
		},
		{
			title: 'AI Trends 2025 Predictions',
			description:
				"15 predictions that will shape the future of technology. From multimodal AI to edge computing, discover what's coming next.",
			href: '/blog/ai-trends-2025-predictions',
			icon: '🔮',
			category: 'AI Predictions',
			readTime: '28 min read',
			date: 'Jan 30, 2025',
			type: 'Article',
			featured: true,
		},
		{
			title: 'Fortune 500 AI Success',
			description:
				'$50M savings and 300% ROI in 18 months. Complete case study with implementation details and lessons learned.',
			href: '/case-studies/ai-transformation-fortune-500-success-2025',
			icon: '🏆',
			category: 'Success Story',
			readTime: 'Case Study',
			date: 'Jan 30, 2025',
			type: 'Case Study',
			featured: true,
		},
		{
			title: 'AI Retail Personalization',
			description:
				'300% revenue growth through intelligent customer experiences and personalized recommendations.',
			href: '/blog/ai-retail-personalization-2025',
			icon: '🛍️',
			category: 'Retail AI',
			readTime: '15 min read',
			date: 'Jan 30, 2025',
			type: 'Article',
			featured: true,
		},
	];

	const latestArticles = [
		{
			title: 'AI Implementation Master Guide 2025',
			description:
				'Complete 150+ page resource with proven strategies, templates, and frameworks for successful AI implementation.',
			href: '/resources/ai-implementation-master-guide-2025',
			icon: '📚',
			category: 'Free Guide',
			readTime: '150+ pages',
			date: 'Jan 30, 2025',
			type: 'Resource',
		},
		{
			title: 'AI Retail Personalization Playbook',
			description:
				'200+ page implementation guide with proven strategies for 300% revenue growth through AI personalization.',
			href: '/resources/ai-retail-personalization-playbook-2025',
			icon: '📋',
			category: 'Free Playbook',
			readTime: '200+ pages',
			date: 'Jan 30, 2025',
			type: 'Resource',
		},
		{
			title: 'Enterprise GenAI Blueprint 2025',
			description:
				'A practical blueprint for enterprises to ship GenAI to production safely and profitably.',
			href: '/blog/ai-2025-enterprise-genai-blueprint',
			icon: '🏢',
			category: 'GenAI',
			readTime: '12 min read',
			date: 'Sep 12, 2025',
			type: 'Article',
		},
	];

	return (
		<ErrorBoundary>
			<SEO
				title="Content Showcase - Latest AI & Technology Insights | Zion Tech Group"
				description="Explore our comprehensive collection of AI insights, case studies, resources, and expert analysis. Stay ahead with the latest technology trends and implementation guides."
				keywords="AI content, technology insights, case studies, resources, AI implementation, technology trends"
				url="/content-showcase"
			/>
			<StructuredData
				type="WebPage"
				data={{
					headline: 'Latest AI & Tech Content Showcase',
					description:
						"Discover Zion Tech Group's newest blog posts, case studies, and free resources on AI, cloud, and digital transformation. Stay informed with our expert insights.",
					url: 'https://zion.app/content-showcase',
					publisher: {
						'@type': 'Organization',
						name: 'Zion Tech Group',
						logo: {
							'@type': 'ImageObject',
							url: 'https://zion.app/images/zion-tech-group-logo.png',
						},
					},
				}}
			/>

			<div className="min-h-screen bg-white">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
								<span className="text-sm font-medium">🚀 FRESH CONTENT</span>
							</div>
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Content Showcase</h1>
							<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
								Discover our latest AI insights, case studies, and resources. From cutting-edge
								research to real-world success stories, find everything you need to accelerate
								your AI transformation in 2025.
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
						<div className="text-center mb-16">
							<div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
								<span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 30, 2025</span>
							</div>
							<h2 className="text-4xl md:text-6xl font-bold mb-6">🚀 Revolutionary AI Content Just Dropped</h2>
							<p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
								New this week: AI Industry Disruption Analysis, 2025 AI Trends Predictions, Fortune 500 Success Story,
								AI Retail Personalization Guide, and comprehensive implementation playbooks. Expert insights to accelerate your growth.
							</p>
						</div>

						{/* Featured Content Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{featuredContent.map((content, index) => (
								<Link key={index} href={content.href} className="group">
									<div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
										<div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{content.icon}</div>
										<h3 className="text-lg font-semibold mb-2">{content.title}</h3>
										<p className="text-sm opacity-90 mb-3">{content.description}</p>
										<div className="flex items-center text-xs opacity-75">
											<span>{content.readTime}</span>
											<span className="mx-2">•</span>
											<span>New</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>

				{/* Content Categories */}
				<section className="py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">Find the content that matters most to your role and industry</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{/* Blog Articles */}
							<div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">📝</span>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Articles</h3>
									<p className="text-gray-600">Expert insights and analysis on AI trends, implementation, and best practices</p>
								</div>
								<div className="space-y-4 mb-6">
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Total Articles:</span>
										<span className="font-semibold text-blue-600">75+</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-600">New This Month:</span>
										<span className="font-semibold text-green-600">12</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Average Read Time:</span>
										<span className="font-semibold text-purple-600">15 min</span>
									</div>
								</div>
								<Link href="/blog" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
									Browse Articles
								</Link>
							</div>

							{/* Case Studies */}
							<div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">📊</span>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
									<p className="text-gray-600">Real-world success stories and detailed implementation examples</p>
								</div>
								<div className="space-y-4 mb-6">
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Total Case Studies:</span>
										<span className="font-semibold text-green-600">25+</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Average ROI:</span>
										<span className="font-semibold text-green-600">340%</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Industries Covered:</span>
										<span className="font-semibold text-purple-600">12+</span>
									</div>
								</div>
								<Link href="/case-studies" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
									View Case Studies
								</Link>
							</div>

							{/* Resources */}
							<div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">📋</span>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">Free Resources</h3>
									<p className="text-gray-600">Templates, checklists, guides, and tools to accelerate your AI journey</p>
								</div>
								<div className="space-y-4 mb-6">
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Total Resources:</span>
										<span className="font-semibold text-purple-600">50+</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Downloads:</span>
										<span className="font-semibold text-green-600">25K+</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-gray-600">Free Downloads:</span>
										<span className="font-semibold text-blue-600">100%</span>
									</div>
								</div>
								<Link href="/resources" className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
									Download Resources
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Latest Articles */}
				<section className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles & Resources</h2>
							<p className="text-lg text-gray-600 max-w-2xl mx-auto">Stay up-to-date with our latest insights and analysis</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{latestArticles.map((article, index) => (
								<Link key={index} href={article.href} className="group">
									<article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
										<div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
											<div className="text-8xl">{article.icon}</div>
											<div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">NEW</div>
										</div>
										<div className="p-8">
											<div className="flex items-center gap-3 mb-4">
												<span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">{article.category}</span>
												<span className="text-gray-500 text-sm">{article.readTime}</span>
												<span className="text-gray-500 text-sm">•</span>
												<span className="text-gray-500 text-sm">{article.date}</span>
											</div>
											<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{article.title}</h3>
											<p className="text-gray-600 mb-6 leading-relaxed">{article.description}</p>
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-2">
													<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
														<span className="text-purple-600 font-bold text-sm">ZT</span>
													</div>
													<span className="text-sm text-gray-600">Zion Tech Group</span>
												</div>
												<span className="text-purple-600 font-medium group-hover:underline">{article.type === 'Resource' ? 'Download →' : 'Read Article →'}</span>
											</div>
										</div>
									</article>
								</Link>
							))}
						</div>

						<div className="text-center mt-12">
							<Link href="/blog" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
								View All Articles
								<span>→</span>
							</Link>
						</div>
					</div>
				</section>

				{/* Newsletter Signup */}
				<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Our Latest Content</h2>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						Get weekly updates on AI trends, implementation guides, and exclusive content.
						Join 10,000+ professionals who trust our insights.
					</p>
					<div className="max-w-md mx-auto flex gap-4">
						<input
							type="email"
							placeholder="Enter your email address"
							className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
						<button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
							Subscribe
						</button>
					</div>
					<p className="text-sm text-gray-500 mt-4">No spam. Unsubscribe anytime. We respect your privacy.</p>
				</div>
			</div>
		</ErrorBoundary>
	);
}

