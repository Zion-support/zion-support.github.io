import React from 'react';
import Link from 'next/link';

const AI2025UltimateBusinessAutomationRevolutionShowcase = () => {
  const featuredContent = [
    {
      title: "AI 2025: Ultimate Business Automation Revolution - Complete Guide",
      description: "Discover the revolutionary AI automation strategies transforming businesses in 2025. Learn how to implement cutting-edge automation solutions for maximum ROI.",
      href: "/blog/ai-2025-ultimate-business-automation-revolution-complete-guide",
      type: "Blog Post",
      readTime: "15 min read",
      featured: true,
      image: "/images/ai-2025-automation-revolution.jpg"
    },
    {
      title: "Fortune 500 AI Automation: 2,500% ROI Success Story",
      description: "Real-world case study of a Fortune 500 manufacturing company that achieved unprecedented 2,500% ROI through comprehensive AI automation implementation.",
      href: "/case-studies/fortune-500-ai-automation-transformation-2500-roi-success-story",
      type: "Case Study",
      readTime: "12 min read",
      featured: true,
      image: "/images/fortune-500-ai-success-story.jpg"
    },
    {
      title: "AI 2025 Implementation Ultimate Master Guide: 2,500% ROI Framework",
      description: "The definitive guide to implementing AI automation in 2025. Complete frameworktoolsand strategies to achieve exceptional ROI through intelligent automation.",
      href: "/resources/ai-2025-implementation-ultimate-master-guide-2500-roi",
      type: "Implementation Guide",
      readTime: "25 min read",
      featured: true,
      image: "/images/ai-2025-implementation-guide.jpg"
    }
  ];

  const keyStats = [
    { label: "Average ROI"value: "2,500%"icon: "📈" },
    { label: "Efficiency Gain"value: "340%"icon: "⚡" },
    { label: "Cost Reduction"value: "45%"icon: "💰" },
    { label: "Implementation Time"value: "18 months"icon: "⏱️" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Ultimate Business Automation Revolution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of resourcescase studiesand implementation guides 
            designed to help you achieve unprecedented success with AI automation.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {keyStats.map((statindex) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((contentindex) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-blue-600">
                <div className="flex items-center justify-center text-white text-6xl">
                  {content.type === "Blog Post" ? "📚" : content.type === "Case Study" ? "🏆" : "🛠️"}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    {content.type}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                <Link
                  href={content.href}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Read More
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation Phases */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Implementation Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Foundation</h4>
              <p className="text-sm text-gray-600">Assessment & Planning (Months 1-3)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Core Implementation</h4>
              <p className="text-sm text-gray-600">Process Automation (Months 4-9)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Advanced Features</h4>
              <p className="text-sm text-gray-600">AI Integration (Months 10-15)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Optimization</h4>
              <p className="text-sm text-gray-600">Continuous Improvement (Months 16-18)</p>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Advanced Technology Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="font-bold">Machine Learning</h4>
              <p className="text-sm opacity-90">TensorFlowPyTorch</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">👁️</div>
              <h4 className="font-bold">Computer Vision</h4>
              <p className="text-sm opacity-90">OpenCVYOLO</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <h4 className="font-bold">NLP</h4>
              <p className="text-sm opacity-90">GPT-4BERT</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">☁️</div>
              <h4 className="font-bold">Cloud Platform</h4>
              <p className="text-sm opacity-90">AWSAzureGCP</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your AI Transformation?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already achieving extraordinary results with our proven AI automation framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/resources/ai-2025-implementation-ultimate-master-guide-2500-roi"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Download Master Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBusinessAutomationRevolutionShowcase;