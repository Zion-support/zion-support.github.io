import Link from 'next/link';
import SEO from '../../components/SEO';
import InteractiveContentDiscovery from '../../components/InteractiveContentDiscovery';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI 2025: Quantum Computing Breakthrough - The Next Frontier",
      description: "Discover how quantum computing is revolutionizing AI in 2025. Explore breakthrough applications, quantum machine learning, and the future of quantum-enhanced artificial intelligence.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      icon: "⚛️",
      category: "Quantum AI",
      readTime: "28 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI 2025: Neural Interface Revolution - Brain-Computer Integration",
      description: "Explore the revolutionary neural interface technologies of 2025. Discover how brain-computer interfaces are transforming healthcare, communication, and human-AI interaction.",
      href: "/blog/ai-2025-neural-interface-revolution",
      icon: "🧠",
      category: "Neural AI",
      readTime: "32 min read",
      date: "Jan 31, 2025"
    },
    {
      title: "AI Customer Support Automation 2025: Complete Implementation Guide",
      description: "Transform your customer support with AI automation. Learn how to implement intelligent chatbots, automated ticket routing, and AI-powered customer insights.",
      href: "/blog/ai-customer-support-automation-2025",
      icon: "🎧",
      category: "AI Automation",
      readTime: "15 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "LLM Guardrails in Production: Safety Without Blocking Delivery",
      description: "Implement effective guardrails for large language models in production environments. Balance safety with functionality and user experience.",
      href: "/blog/llm-guardrails-in-production-2025",
      icon: "🛡️",
      category: "AI Safety",
      readTime: "12 min read",
      date: "Jan 27, 2025"
    }
  ];

  const newCaseStudies = [
    {
      title: "AI Space Exploration Breakthrough 2025: $2B Mission Success",
      description: "How AI-powered autonomous spacecraft achieved unprecedented success in deep space exploration, reducing mission costs by 80% while increasing scientific discoveries by 300%.",
      href: "/case-studies/ai-space-exploration-breakthrough-2025",
      icon: "🚀",
      category: "Space AI",
      result: "$2B Mission Value",
      date: "Feb 01, 2025"
    },
    {
      title: "Fortune 500 AI Transformation: Complete Digital Overhaul",
      description: "How a Fortune 500 company achieved complete digital transformation using AI, resulting in 60% cost reduction and 200% productivity increase.",
      href: "/case-studies/fortune-500-ai-transformation",
      icon: "🏆",
      category: "Enterprise AI",
      result: "60% Cost Reduction",
      date: "Jan 25, 2025"
    },
    {
      title: "AI Manufacturing Automation: 40% Cost Reduction Success",
      description: "Revolutionary AI implementation in manufacturing that reduced operational costs by 40% while improving quality and efficiency across the production line.",
      href: "/case-studies/ai-automation-manufacturing-2025",
      icon: "🏭",
      category: "Manufacturing AI",
      result: "40% Cost Reduction",
      date: "Jan 20, 2025"
    }
  ];

  const newResources = [
    {
      title: "AI Implementation Master Guide 2025: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide for 2025. Step-by-step instructions, templates, checklists, and best practices for successful AI deployment across all industries.",
      href: "/resources/ai-2025-implementation-master-guide",
      icon: "📚",
      category: "Master Guide",
      type: "Free Download",
      date: "Feb 01, 2025"
    },
    {
      title: "AI Implementation Checklist 2025: Step-by-Step Success Guide",
      description: "Comprehensive checklist covering every aspect of AI implementation from planning to deployment. Ensure nothing is missed in your AI transformation journey.",
      href: "/resources/ai-implementation-checklist-2025",
      icon: "✅",
      category: "Implementation",
      type: "Free Download",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Security Hardening Checklist: Essential Security Measures",
      description: "Complete security checklist for AI systems. Protect your AI infrastructure from threats and ensure compliance with security standards.",
      href: "/resources/ai-security-hardening-checklist",
      icon: "🔒",
      category: "Security",
      type: "Free Download",
      date: "Jan 28, 2025"
    },
    {
      title: "Quantum AI Implementation Guide 2025: Next-Gen Computing",
      description: "Complete guide to implementing quantum-enhanced AI systems. Includes quantum algorithm selection, hardware requirements, and real-world applications.",
      href: "/resources/quantum-ai-implementation-guide-2025",
      icon: "⚛️",
      category: "Quantum AI",
      type: "Free Download",
      date: "Feb 02, 2025"
    },
    {
      title: "Neural Interface Development Guide: Brain-Computer Integration",
      description: "Comprehensive guide to developing neural interface applications. Covers signal processing, AI integration, and ethical considerations.",
      href: "/resources/neural-interface-development-guide-2025",
      icon: "🧠",
      category: "Neural AI",
      type: "Free Download",
      date: "Feb 03, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Resources | Zion Tech Group"
        description="Explore our latest AI articles, case studies, and resources. Stay updated with cutting-edge technology insights, implementation guides, and success stories."
        keywords="AI resources, technology articles, case studies, implementation guides, AI insights, tech trends"
        url="/content-showcase"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our latest insights, case studies, and resources. Stay ahead with expert analysis 
              of the most important trends in AI, technology, and business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                Read Latest Articles
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

      {/* Interactive Content Discovery */}
      <section className="mb-16">
        <InteractiveContentDiscovery />
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh insights and expert analysis on AI, technology, and business transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newBlogPosts.map((post, index) => (
              <Link href={post.href} key={index} className="group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {post.icon}
                  </div>
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories & Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from real implementations. Learn from our successful AI projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newCaseStudies.map((study, index) => (
              <Link href={study.href} key={index} className="group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {study.icon}
                  </div>
                  <div className="text-sm font-medium text-green-600 mb-2">
                    {study.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium text-green-600">{study.result}</span>
                    <span>{study.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/case-studies"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Resources & Downloads
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive guides, checklists, and templates to accelerate your AI journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newResources.map((resource, index) => (
              <Link href={resource.href} key={index} className="group">
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {resource.icon}
                  </div>
                  <div className="text-sm font-medium text-purple-600 mb-2">
                    {resource.category}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium text-purple-600">{resource.type}</span>
                    <span>{resource.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/resources"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get started with our expert AI implementation services and join the companies already seeing results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}