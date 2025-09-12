import React from 'react';
import Link from 'next/link';

export default function AI2026ContentShowcase() {
  const featuredContent = [
    {
      title: "AI Neural Interface Revolution 2026",
      description: "Explore the groundbreaking neural interface technologies that will transform how humans interact with AI systems in 2026.",
      category: "Blog Post",
      readTime: "15 min read",
      href: "/blog/ai-2026-neural-interface-revolution",
      image: "🧠",
      gradient: "from-purple-500 to-pink-500",
      badge: "BREAKTHROUGH"
    },
    {
      title: "AI Quantum Breakthrough 2026",
      description: "Discover how quantum computing is revolutionizing AI capabilities with unprecedented computational power and new algorithms.",
      category: "Blog Post",
      readTime: "18 min read",
      href: "/blog/ai-2026-quantum-ai-breakthrough",
      image: "⚡",
      gradient: "from-indigo-500 to-purple-500",
      badge: "REVOLUTIONARY"
    },
    {
      title: "AI 2026 Implementation Master Guide",
      description: "The definitive guide to implementing AI in 2026. Comprehensive roadmap covering strategy, technology selection, and scaling.",
      category: "Resource",
      readTime: "45 min read",
      href: "/resources/ai-2026-implementation-master-guide",
      image: "📚",
      gradient: "from-blue-500 to-cyan-500",
      badge: "MASTER GUIDE"
    },
    {
      title: "Global Tech Transformation Success",
      description: "How a Fortune 500 company achieved $2.3B in value creation through comprehensive AI transformation across 50+ countries.",
      category: "Case Study",
      readTime: "12 min read",
      href: "/case-studies/ai-2026-global-tech-transformation",
      image: "🏢",
      gradient: "from-green-500 to-teal-500",
      badge: "SUCCESS STORY"
    },
    {
      title: "AI 2026 Future Masterclass",
      description: "Join industry leaders for an exclusive deep-dive into next-generation AI systems, quantum AI, and neural interfaces.",
      category: "Webinar",
      readTime: "2 hours",
      href: "/webinars/ai-2026-future-masterclass",
      image: "🎓",
      gradient: "from-orange-500 to-red-500",
      badge: "MASTERCLASS"
    },
    {
      title: "Next-Generation AI Systems",
      description: "Discover the latest AI architectures and capabilities that will power the next decade of artificial intelligence innovation.",
      category: "Blog Post",
      readTime: "20 min read",
      href: "/blog/ai-2026-next-generation-ai-systems",
      image: "🤖",
      gradient: "from-pink-500 to-rose-500",
      badge: "FUTURE TECH"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-800 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW AI 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore the Future of AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breakthrough technologies, revolutionary applications, and strategic insights 
            that will shape the next decade of artificial intelligence innovation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content, index) => (
            <Link
              key={index}
              href={content.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Image/Icon Header */}
              <div className={`h-32 bg-gradient-to-r ${content.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {content.image}
                </div>
                {/* Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-gray-800 text-xs font-bold px-2 py-1 rounded-full">
                    {content.badge}
                  </span>
                </div>
                {/* Category */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-black/20 text-white text-xs font-medium px-2 py-1 rounded">
                    {content.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <span className="text-indigo-600 font-medium group-hover:text-indigo-700">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Organization with AI?
            </h3>
            <p className="text-gray-600 mb-6">
              Get access to our complete library of AI resources, case studies, and expert guidance 
              to accelerate your AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Browse All Resources
              </Link>
              <Link
                href="/contact"
                className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}