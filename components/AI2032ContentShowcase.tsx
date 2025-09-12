import React from 'react';
import Link from 'next/link';

export default function AI2032ContentShowcase() {
  const contentItems = [
    {
      title: "AI 2032 Future Predictions: Revolutionary Breakthroughs",
      description: "Discover the most advanced AI predictions for 2032, including quantum AI breakthroughs, neural interfaces, and revolutionary technologies.",
      href: "/ai-2032-future-predictions-breakthrough",
      category: "Predictions",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-purple-600",
      icon: "🔮"
    },
    {
      title: "AI 2032 Quantum Breakthrough: 25,000% ROI Case Study",
      description: "How we transformed a Fortune 500 company's operations using cutting-edge AI 2032 quantum technologies, delivering unprecedented returns.",
      href: "/case-studies/ai-2032-quantum-breakthrough-25000-roi",
      category: "Case Study",
      badge: "25,000% ROI",
      badgeColor: "bg-green-600",
      icon: "🏆"
    },
    {
      title: "AI 2032 Ultimate Implementation Master Guide",
      description: "The complete master guide to implementing AI 2032 technologies in your organization. Learn quantum AI, neural interfaces, and automation strategies.",
      href: "/resources/ai-2032-ultimate-implementation-master-guide",
      category: "Master Guide",
      badge: "ESSENTIAL",
      badgeColor: "bg-blue-600",
      icon: "📚"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
            🚀 AI 2032 BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI 2032
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Content Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2032 breakthrough content, 
            featuring predictions, case studies, and implementation guides that will 
            transform your understanding of future technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {item.category}
                    </span>
                  </div>
                  <span className={`${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <Link 
                  href={item.href}
                  className="inline-block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Explore Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI 2032?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join thousands of companies already implementing AI 2032 technologies 
            and achieving breakthrough results. Get your personalized implementation strategy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Get Consultation
            </Link>
            <Link 
              href="/ai-services-2025"
              className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors"
            >
              View AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}