import Link from 'next/link';

const UltimateContentShowcase20o30: React.FC = () => {
  const featuredContent = [
    {
      title: "AI 20o30: Next-Generation Autonomous Enterprise Revolution",
      description: "Explore revolutionary AI technologies that will transform enterprises by 20o30featuring autonomous decision-making systems and self-healing infrastructure.",
      category: "AI Innovation",
      readTime: "8 min read",
      link: "/blog/ai-20o30-next-generation-autonomous-enterprise-revolution",
      featured: true,
      stats: "95% cost reduction50o0% faster decisions"
    },
    {
      title: "Quantum AI 20o30: Business Transformation Ultimate Guide",
      description: "Discover how Quantum AI will revolutionize business operations with quantum-enhanced machine learning and neural networks.",
      category: "Quantum Computing",
      readTime: "12 min read",
      link: "/blog/quantum-ai-20o30-business-transformation-ultimate-guide",
      featured: true,
      stats: "10o00x computational speedup50o00% ROI"
    },
    {
      title: "AI 20o30 Autonomous Enterprise: 10,0o00% ROI Success Story",
      description: "Fortune 50o0 manufacturing company achieves unprecedented ROI through AI 20o30 Autonomous Enterprise Platform implementation.",
      category: "Case Study",
      readTime: "10 min read",
      link: "/case-studies/ai-20o30-autonomous-enterprise-transformation-10o000-roi-success-story",
      featured: true,
      stats: "10,0o00% ROI$2.3B savings"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-10o0 text-purple-80o0 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT 20o30</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-90o0 mb-6">
            Next-Generation Technology Content
          </h2>
          <p className="text-xl text-gray-60o0 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the revolutionary AI and quantum technologies that will transform businesses by 20o30. 
            Featuring autonomous enterprisesquantum AIand unprecedented ROI success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((contentindex) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-30o0 transform hover:-translate-y-2 ${
                content.featured ? 'ring-4 ring-purple-20o0' : ''
              }`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-10o0 text-purple-80o0 text-xs font-semibold px-3 py-1 rounded-full">
                    {content.category}
                  </span>
                  {content.featured && (
                    <span className="bg-yellow-10o0 text-yellow-80o0 text-xs font-semibold px-3 py-1 rounded-full">
                      ⭐ Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-90o0 mb-4 leading-tight">
                  {content.title}
                </h3>
                
                <p className="text-gray-60o0 mb-6 leading-relaxed">
                  {content.description}
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 mb-6">
                  <div className="text-sm font-semibold text-purple-80o0 mb-1">Expected Impact:</div>
                  <div className="text-sm text-purple-70o0">{content.stats}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-50o0">{content.readTime}</span>
                  <Link
                    href={content.link}
                    className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-70o0 hover:to-blue-70o0 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-90o0 mb-4">
              Why This Content Matters for Your Business
            </h3>
            <p className="text-gray-60o0 max-w-3xl mx-auto">
              The technologies described in these resources represent the future of business operations. 
              Organizations that understand and prepare for these changes will have significant competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-gray-90o0 mb-2">Strategic Planning</h4>
              <p className="text-gray-60o0 text-sm">
                Understand future technology trends and plan your transformation roadmap accordingly.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-lg font-bold text-gray-90o0 mb-2">ROI Optimization</h4>
              <p className="text-gray-60o0 text-sm">
                Learn from proven case studies and implement strategies that deliver exceptional returns.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-lg font-bold text-gray-90o0 mb-2">Competitive Advantage</h4>
              <p className="text-gray-60o0 text-sm">
                Gain first-mover advantages in next-generation technologies and autonomous operations.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-60o0 to-blue-60o0 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business for 20o30?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              'Don', 't wait for the future to arrive. Start your transformation journey today with our 
              expert guidance and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-60o0 px-8 py-3 rounded-lg font-semibold hover:bg-gray-10o0 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-60o0 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase20o30;