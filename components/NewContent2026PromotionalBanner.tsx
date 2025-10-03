import { Link } from 'react-router-dom';

export default function NewContent2026PromotionalBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-bold">🎉 NEW 2026 CONTENT</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              Revolutionary AI Content
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Now Available
              </span>
            </h2>
            
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              Discover breakthrough AI technologies, autonomous systems, and $100M ROI success stories 
              that are transforming industries worldwide
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/blog/ai-2026-autonomous-enterprise-systems"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                🧠 Read Autonomous AI Article
              </Link>
              <Link to="/case-studies/ai-2026-mega-transformation-success-story"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
              >
                💰 View $100M ROI Story
              </Link>
            </div>
          </div>
          
          {/* Right Content - Stats */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-black text-yellow-400 mb-2">90%</div>
                <div className="text-sm text-blue-100">Automation Achieved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-black text-green-400 mb-2">$100M</div>
                <div className="text-sm text-blue-100">ROI Success</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-black text-purple-400 mb-2">300%</div>
                <div className="text-sm text-blue-100">Efficiency Gains</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-black text-pink-400 mb-2">24/7</div>
                <div className="text-sm text-blue-100">AI Operation</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-blue-100 mb-4">
            Don't miss out on the AI 2026 revolution. Transform your business today!
          </p>
          <a
            href="tel:+13024640950"
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-bold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg"
          >
            📞 Call +1 302 464 0950 for Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}