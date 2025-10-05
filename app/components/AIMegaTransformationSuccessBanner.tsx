import ArrowRight from 'next/link';

export default function AIMegaTransformationSuccessBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
      {/* Success Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30">
            <span className="text-3xl">🏆</span>
            <span className="font-bold text-lg">MEGA TRANSFORMATION SUCCESS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            $50M+ in AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              {' '}Transformation Success
            </span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover how leading enterprises achieved unprecedented success with our AI transformation solutions. 
            Real results, real impact, real transformation stories.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-green-400">💰</span>
              <span>$50M+ Total Savings</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-blue-400">📈</span>
              <span>500% Average ROI</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-purple-400">⚡</span>
              <span>90% Efficiency Gain</span>
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Fortune 500 Success */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🏢</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Fortune 500 Retailer</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-1">$12M</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Zion Tech Group's AI automation transformed our supply chain, reducing costs by 60% 
                and improving delivery times by 40%."
              </p>
              <div className="text-center">
                <div className="text-sm text-gray-400">- Chief Technology Officer</div>
              </div>
            </div>
          </div>

          {/* Healthcare Innovation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🏥</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Healthcare System</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">85%</div>
                <div className="text-sm text-gray-300">Process Efficiency</div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "AI-powered patient care optimization reduced wait times by 70% and improved 
                patient satisfaction scores to 98%."
              </p>
              <div className="text-center">
                <div className="text-sm text-gray-400">- Medical Director</div>
              </div>
            </div>
          </div>

          {/* Financial Services */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🏦</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Global Bank</h3>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">600%</div>
                <div className="text-sm text-gray-300">ROI Achieved</div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Risk assessment automation and fraud detection systems saved us $8M annually 
                while improving accuracy by 95%."
              </p>
              <div className="text-center">
                <div className="text-sm text-gray-400">- Chief Risk Officer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Metrics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Transformation Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">$50M+</div>
              <div className="text-gray-300 mb-2">Total Client Savings</div>
              <div className="text-sm text-gray-400">Across all implementations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">500%</div>
              <div className="text-gray-300 mb-2">Average ROI</div>
              <div className="text-sm text-gray-400">Within 12 months</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
              <div className="text-gray-300 mb-2">Efficiency Improvement</div>
              <div className="text-sm text-gray-400">Process automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-300 mb-2">Client Satisfaction</div>
              <div className="text-sm text-gray-400">Success rate</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <ArrowRight
              href="/case-studies"
              className="bg-white text-teal-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              View All Success Stories
            </ArrowRight>
            <ArrowRight
              href="/services"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300"
            >
              Start Your Transformation
            </ArrowRight>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
            <p className="text-lg font-semibold mb-2">Ready to join these success stories?</p>
            <p className="text-gray-300 text-sm">
              Schedule a free consultation to discover how AI can transform your business. 
              Average ROI: 500% within 12 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}