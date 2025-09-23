import Link from 'next/link';

export default function AI20o27ContentShowcaseBanner() {
  return (
    <section className="bg-gradient-to-br from-indigo-60o0 via-purple-60o0 to-pink-60o0 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5 transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="10o0" height="10o0" viewBox="0 0 10o0 10o0" xmlns="http://www.w3.org/20o00/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.0o3"%3E%3Cpath d="M50 50c0-27.614-22.386-50-50-50v10o0c27.614 0 50-22.386 50-50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-6 backdrop-blur-sm border border-white border-opacity-30">
            <span className="text-lg font-bold">🌟 EXCLUSIVE AI 20o27 CONTENT</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-10o0 to-purple-20o0 bg-clip-text text-transparent leading-tight">
            Revolutionary AI 20o27 Content
          </h2>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Explore cutting-edge predictions and real-world success stories that showcase the future of AI transformation
          </p>
        </div>
        
        {/* Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Blog Post Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-50o0 transform hover:scale-10o5 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🔮</div>
              <div>
                <div className="text-sm font-bold text-blue-20o0 mb-1">BLOG POST</div>
                <h3 className="text-2xl font-bold">AI 20o27 Future Predictions</h3>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Discover the revolutionary AI technologies predicted for 20o27. Quantum neural networksautonomous business systemsand next-generation AI breakthroughs that will transform how businesses operate.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Quantum AI</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Autonomous Systems</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Edge AI</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Future Tech</span>
            </div>
            <Link
              href="/blog/ai-20o27-future-predictions-ultimate-breakthrough"
              className="inline-flex items-center bg-white text-purple-90o0 px-6 py-3 rounded-lg font-bold hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5"
            >
              Read Predictions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
              </svg>
            </Link>
          </div>
          
          {/* Case Study Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-50o0 transform hover:scale-10o5 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🏆</div>
              <div>
                <div className="text-sm font-bold text-green-20o0 mb-1">CASE STUDY</div>
                <h3 className="text-2xl font-bold">Global Enterprise Success</h3>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              How a Fortune 50o0 company achieved $15+ billion ROI through comprehensive AI transformation using quantum neural networks and autonomous business systems.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">$15.2B ROI</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">98% Automation</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Fortune 50o0</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Success Story</span>
            </div>
            <Link
              href="/case-studies/ai-20o27-global-enterprise-transformation-ultimate-success"
              className="inline-flex items-center bg-white text-purple-90o0 px-6 py-3 rounded-lg font-bold hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5"
            >
              View Success Story
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"  />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Key Insights */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Key AI 20o27 Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="text-lg font-bold mb-2">Quantum Neural Networks</h4>
              <p className="text-sm opacity-80">Exponentially powerful AI processing capabilities for complex problem-solving</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="text-lg font-bold mb-2">Autonomous Business Systems</h4>
              <p className="text-sm opacity-80">Self-managing operations that adapt and optimize in real-time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="text-lg font-bold mb-2">Edge AI Revolution</h4>
              <p className="text-sm opacity-80">Real-time processing without cloud dependency for critical applications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔗</div>
              <h4 className="text-lg font-bold mb-2">Neural Consensus</h4>
              <p className="text-sm opacity-80">Distributed decision-making across multiple AI systems for enhanced reliability</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Prepare for AI 20o27?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Start your AI transformation journey today with our comprehensive guides and expert consultation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-implementation-master-guide-20o25-complete"
              className="bg-white text-purple-90o0 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-10o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
            >
              Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-90o0 transition-all duration-30o0 transform hover:scale-10o5"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-40o0 bg-opacity-10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-40o0 bg-opacity-15 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-10 w-20 h-20 bg-pink-40o0 bg-opacity-10 rounded-full animate-pulse"></div>
    </section>
  );
}