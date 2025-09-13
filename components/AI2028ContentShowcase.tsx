import React from 'react';
import Link from 'next/link';

export default function AI2028ContentShowcase() {
  const ai2028Content = [
    {
      title: "AI 2028 Future Predictions",
      description: "Revolutionary breakthrough technologies and predictions for 2028. Quantum AI, neural interfaces, and autonomous everything.",
      href: "/blog/ai-2028-future-predictions",
      category: "Blog",
      type: "BREAKTHROUGH",
      readTime: "15 min read",
      image: "🔮",
      features: ["Quantum AI Systems", "Neural Interfaces", "Autonomous Everything", "3000% ROI Predictions"]
    },
    {
      title: "AI 2028 Automotive Transformation",
      description: "3000% ROI breakthrough case study. Complete transformation of automotive manufacturing with quantum-enhanced AI systems.",
      href: "/case-studies/ai-2028-automotive-transformation-breakthrough",
      category: "Case Study",
      type: "3000% ROI",
      readTime: "12 min read",
      image: "🚗",
      features: ["95% Cost Reduction", "100% Autonomous Capability", "Quantum Computing", "Real-time Learning"]
    },
    {
      title: "AI 2028 Ultimate Implementation Guide",
      description: "Complete roadmap to AI success in 2028. Comprehensive implementation guide with checklists, templates, and strategies.",
      href: "/resources/ai-2028-ultimate-implementation-master-guide",
      category: "Resource",
      type: "ULTIMATE GUIDE",
      readTime: "25 min read",
      image: "📚",
      features: ["12-Month Roadmap", "Implementation Checklists", "ROI Calculator", "Templates & Tools"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-semibold animate-pulse">
              BREAKTHROUGH
            </span>
            <span className="text-purple-600 font-semibold">AI 2028 Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 Revolutionary AI 2028 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover breakthrough technologies, 3000% ROI case studies, and complete implementation guides 
            for the future of AI transformation in 2028.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ai2028Content.map((content, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl">{content.image}</span>
                    <span className="text-sm font-semibold text-purple-600">{content.category}</span>
                  </div>
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {content.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {content.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                  <Link 
                    href={content.href}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Ready to Transform Your Business with AI 2028?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of organizations already achieving breakthrough results with our proven AI implementation strategies. 
              Start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-semibold"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/webinars" 
                className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-200 font-semibold"
              >
                Attend Webinar
              </Link>
              <Link 
                href="/resources" 
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}