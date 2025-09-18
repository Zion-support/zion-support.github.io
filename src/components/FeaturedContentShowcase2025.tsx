import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const FeaturedContentShowcase2025 = () => {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Ultimate Breakthrough Announcement",
      description: "The most revolutionary AI breakthrough in history - delivering 2,500-5,000% ROI with 99.9% accuracy and 10,000x faster processing capabilities.",
      category: "Breakthrough",
      type: "Blog Post",
      url: "/blog/ai-2025-ultimate-breakthrough-announcement",
      image: "🚀",
      badge: "BREAKTHROUGH",
      badgeColor: "from-red-500 to-pink-500",
      metrics: {
        roi: "5,000%",
        accuracy: "99.9%",
        speed: "10,000x"
      }
    },
      id: 2,
      title: "Global Transformation: 10,000% ROI Success Story",
      description: "Documenting the most successful AI transformation ever recorded - a 10,000% ROI achievement that revolutionized an entire industry.",
      category: "Case Study",
      type: "Success Story",
      url: "/case-studies/ai-2025-global-transformation-breakthrough-10000-roi",
      image: "🏆",
      badge: "10,000% ROI",
      badgeColor: "from-green-500 to-teal-500",
        roi: "10,000%",
        revenue: "+200%",
        efficiency: "95%"
      id: 3,
      title: "AI 2025 Ultimate Implementation Master Guide",
      description: "Complete roadmap to achieving 5,000% ROI with revolutionary AI technology. Your definitive resource for AI transformation success.",
      category: "Resource",
      type: "Master Guide",
      url: "/resources/ai-2025-ultimate-implementation-master-guide",
      image: "📚",
      badge: "MASTER GUIDE",
      badgeColor: "from-blue-500 to-purple-500",
        phases: "4",
        duration: "52 weeks",
        roi: "5,000%"
      id: 4,
      title: "Quantum-Neural Hybrid Systems 2025",
      description: "Revolutionary quantum-neural architecture that combines quantum computing with advanced neural networks for unprecedented performance.",
      category: "Technology",
      type: "Technical Guide",
      url: "/blog/quantum-neural-hybrid-systems-2025",
      image: "⚛️",
      badge: "QUANTUM",
      badgeColor: "from-purple-500 to-indigo-500",
        processing: "Quantum",
        innovation: "Revolutionary"
      id: 5,
      title: "Autonomous Business Operations 2025",
      description: "Complete automation of business operations with AI systems that manageoptimizeand evolve without human intervention.",
      category: "Automation",
      type: "Implementation",
      url: "/blog/ai-2025-autonomous-business-operations",
      image: "🤖",
      badge: "AUTONOMOUS",
      badgeColor: "from-orange-500 to-red-500",
        automation: "95%",
        efficiency: "95%",
        cost: "-60%"
      id: 6,
      title: "AI 2025 ROI Calculator & Assessment Tool",
      description: "Calculate your potential ROI with AI 2025 Ultimate Breakthrough technology. Get personalized projections and implementation recommendations.",
      category: "Tool",
      type: "Calculator",
      url: "/tools/ai-2025-roi-calculator",
      image: "🧮",
      badge: "CALCULATOR",
      badgeColor: "from-yellow-500 to-orange-500",
        accuracy: "99%",
        speed: "Instant",
        personalized: "Yes"
    }
  ];
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🔥 FEATURED CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Changes Everything</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most groundbreaking AI insightscase studiesand implementation guides that are transforming industries worldwide.
          </p>
        </div>
        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((content) => (
            <div key={content.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-200">
              {/* Badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${content.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                {content.badge}
              </div>
              
              {/* Content Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                {content.image}
              {/* Content Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500 font-medium">{content.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{content.type}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(content.metrics).map(([keyvalue]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                {/* CTA Button */}
                <a 
                  href={content.url}
                  className={`block w-full bg-gradient-to-r ${content.badgeColor} hover:shadow-lg text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105`}
                >
                  Explore {content.type}
                </a>
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI 2025?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join the revolution and achieve 5,000% ROI with our breakthrough AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
                href="/tools/ai-2025-roi-calculator"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                Calculate Your ROI
      </div>
    </section>
  );
};
export default FeaturedContentShowcase2025;
