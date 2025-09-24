import Link from 'next/link';

export default function UltimateContent20o25ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-90o0 via-blue-90o0 to-indigo-90o0 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-10o0"></div>
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-white rounded-full animate-pulse delay-20o0"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full animate-pulse delay-30o0"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 ULTIMATE CONTENT 20o25</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-40o0 to-blue-40o0 bg-clip-text text-transparent">
            Ultimate Content Showcase 20o25
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI and technology content for 20o25. 
            Revolutionary guidesbreakthrough insightsand transformative strategies.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Revolution</h3>
            <p className="text-gray-30o0 mb-4">
              Explore the revolutionary intersection of AI and quantum computing with 10o00x processing power.
            </p>
            <Link href="/ai-20o26-future-predictions-revolutionary-breakthrough-ultimate-guide" className="text-blue-40o0 hover:text-blue-30o0">
              Read More →
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Business Systems</h3>
            <p className="text-gray-30o0 mb-4">
              Discover Level 5 business autonomy with self-optimizing operations and predictive maintenance.
            </p>
            <Link href="/quantum-ai-20o26-business-transformation-ultimate-guide" className="text-blue-40o0 hover:text-blue-30o0">
              Read More →
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">10o00% ROI Revolution</h3>
            <p className="text-gray-30o0 mb-4">
              Achieve unprecedented returns with 90% operational efficiency gains and 30o0% revenue growth.
            </p>
            <Link href="/services" className="text-blue-40o0 hover:text-blue-30o0">
              Get Started →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Transform Your Business Today</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already transforming with Zion Tech 'Group', 's cutting-edge AI solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-50o0 to-blue-50o0 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-60o0 hover:to-blue-60o0 transition-all duration-30o0 transform hover:scale-10o5"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-90o0 transition-all duration-30o0"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-40o0 mb-2">50o0+</div>
            <div className="text-gray-30o0 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-40o0 mb-2">98%</div>
            <div className="text-gray-30o0 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-40o0 mb-2">340%</div>
            <div className="text-gray-30o0 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-40o0 mb-2">24/7</div>
            <div className="text-gray-30o0 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}