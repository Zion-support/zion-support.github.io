import React from 'react';
import { Link } from 'react-router-dom';

export default function NeuralInterfaceContentShowcase2026() {
  const neuralInterfaceContent = [
    {
      title: "AI 2026: Neural Interface Revolution",
      description: "Discover the revolutionary neural interface technologies that will transform human-AI interaction in 2026. Explore brain-computer integration, thought-controlled systems, and the future of cognitive computing.",
      type: "Blog Post",
      category: "Technology",
      readTime: "12 min read",
      difficulty: "Intermediate",
      tags: ["neural interfaces", "BCI", "AI 2026", "brain-computer interface"],
      href: "/blog/ai-2026-neural-interface-revolution",
      image: "/neural-interface-hero.jpg",
      featured: true,
      stats: {
        accuracy: "95%",
        speed: "10x faster",
        productivity: "500% increase"
      }
    },
    {
      title: "Neural Interface Healthcare Breakthrough: 95% Patient Recovery",
      description: "How neural interfaces achieved 95% patient recovery rates and transformed the lives of thousands with spinal cord injuries and neurological disorders.",
      type: "Case Study",
      category: "Healthcare",
      readTime: "15 min read",
      difficulty: "Advanced",
      tags: ["healthcare", "medical AI", "patient recovery", "BCI medical"],
      href: "/case-studies/ai-2026-neural-interface-healthcare-breakthrough",
      image: "/neural-interface-healthcare.jpg",
      featured: true,
      stats: {
        patients: "2,847",
        recovery: "95%",
        savings: "$6.5B"
      }
    },
    {
      title: "Neural Interface Implementation Guide",
      description: "Master neural interface implementation with our comprehensive guide. Step-by-step roadmap, technical specifications, and best practices for successful BCI deployment.",
      type: "Resource",
      category: "Implementation",
      readTime: "25 min read",
      difficulty: "Expert",
      tags: ["implementation", "BCI guide", "technical", "deployment"],
      href: "/resources/ai-2026-neural-interface-implementation-guide",
      image: "/neural-interface-guide.jpg",
      featured: true,
      stats: {
        success: "95%",
        timeline: "6 months",
        roi: "500%"
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🧠 NEURAL INTERFACE CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary Neural Interface Content
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive collection of neural interface resources, 
            from breakthrough research to real-world implementation guides.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {neuralInterfaceContent.map((content, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-indigo-600">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {content.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  {content.featured && (
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-4 text-white text-sm">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      {content.readTime}
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {content.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-purple-600 font-semibold text-sm">{content.category}</span>
                  <div className="flex space-x-2">
                    {content.stats && Object.entries(content.stats).slice(0, 2).map(([key, value], idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={content.href}
                  className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                >
                  {content.type === 'Blog Post' && '📖 Read Article'}
                  {content.type === 'Case Study' && '📊 View Case Study'}
                  {content.type === 'Resource' && '📚 Access Guide'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🛠️ Additional Neural Interface Resources
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/tools/neural-interface-readiness-assessment"
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600">Readiness Assessment</h4>
              <p className="text-sm text-gray-600">Evaluate your organization's readiness for neural interface implementation.</p>
            </Link>

            <Link
              href="/tools/neural-interface-roi-calculator"
              className="group bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600">ROI Calculator</h4>
              <p className="text-sm text-gray-600">Calculate potential returns from neural interface implementation.</p>
            </Link>

            <Link
              href="/webinars/neural-interface-demo"
              className="group bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">🎥</div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600">Live Demo</h4>
              <p className="text-sm text-gray-600">Watch neural interfaces in action with live demonstrations.</p>
            </Link>

            <Link
              href="/contact"
              className="group bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600">Expert Consultation</h4>
              <p className="text-sm text-gray-600">Get personalized guidance from our neural interface experts.</p>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            📊 Neural Interface Impact by the Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2,847</div>
              <div className="text-sm opacity-90">Patients Treated</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$6.5B</div>
              <div className="text-sm opacity-90">Healthcare Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">11,667%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join the Neural Interface Revolution?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't get left behind in the most significant technological advancement of our time. 
            Start your neural interface journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-lg shadow-lg"
            >
              🚀 Start Your Journey
            </Link>
            <Link
              href="/resources/ai-2026-neural-interface-implementation-guide"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-lg"
            >
              📚 Download Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}