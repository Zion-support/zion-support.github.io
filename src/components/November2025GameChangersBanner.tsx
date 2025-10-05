import { Link } from "react-router-dom";

const November2025GameChangersBanner = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 border-y border-purple-500/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-6 py-3 mb-6">

              <span className="text-yellow-300 font-bold text-lg tracking-wide">
                🚨 BREAKING: NOVEMBER 2025 GAME-CHANGERS JUST RELEASED! 🚨
              </span>

            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-4 leading-tight">
              3 Revolutionary Breakthroughs Transforming Enterprises in November 2025
            </h2>
            
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              <strong className="text-white">$3.6B+ Combined Value Created</strong> • 95% Automation Rates • 
              12.7x Conversion Improvements • Quantum-Safe Security for $2.7T in Assets
            </p>
          </div>

          {/* Three Featured Articles */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Article 1: Autonomous Enterprise */}
            <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-blue-500/20 p-3 rounded-xl group-hover:bg-blue-500/30 transition-colors">

                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                    🏢 Enterprise Automation
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-tight">
                    Autonomous Enterprise Revolution
                  </h3>
                </div>
              </div>
              
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                Self-managing organizations achieving <strong className="text-white">95% automation</strong> with 
                Fortune 500 companies generating <strong className="text-yellow-300">$500M+ annual value</strong> through 
                zero-touch operations.
              </p>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>95% automation rate</strong> across operations</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>$500M+ value</strong> per enterprise annually</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>99.97% accuracy</strong> in AI-driven processes</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>87% cost reduction</strong> through automation</span>
                </div>
              </div>
              
              <Link
                to="/blog/ai-2025-november-autonomous-enterprise-revolution"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold group/link transition-colors"
              >
                <span>Read Full Guide</span>

              </Link>
            </div>

            {/* Article 2: Neural Marketplace */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-purple-500/20 p-3 rounded-xl group-hover:bg-purple-500/30 transition-colors">

                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                    🛍️ AI-Powered Commerce
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-tight">
                    Neural Marketplace Revolution
                  </h3>
                </div>
              </div>
              
              <p className="text-purple-200 text-sm leading-relaxed mb-4">
                AI-powered commerce platforms achieving <strong className="text-white">99.8% conversion optimization</strong> with 
                leading retailers generating <strong className="text-yellow-300">$890M+ annual revenue growth</strong> through 
                hyper-personalization.
              </p>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>12.7x conversion rate</strong> improvement</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>99.8% personalization</strong> accuracy</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>$890M+ revenue</strong> growth annually</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>47% revenue optimization</strong> via dynamic pricing</span>
                </div>
              </div>
              
              <Link
                to="/blog/ai-2025-november-neural-marketplace-revolution"
                className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold group/link transition-colors"
              >
                <span>Discover Neural Commerce</span>

              </Link>
            </div>

            {/* Article 3: Quantum Security */}
            <div className="bg-gradient-to-br from-red-900/50 to-orange-900/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-red-500/20 p-3 rounded-xl group-hover:bg-red-500/30 transition-colors">

                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                    🔒 Quantum Security
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors leading-tight">
                    Post-Quantum Cryptography
                  </h3>
                </div>
              </div>
              
              <p className="text-red-200 text-sm leading-relaxed mb-4">
                Quantum-resistant security protecting <strong className="text-white">$2.7T in enterprise assets</strong> with 
                leading organizations achieving <strong className="text-yellow-300">99.999% threat prevention</strong> and 
                zero quantum vulnerabilities.
              </p>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>$2.7T assets</strong> quantum-protected</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>99.999% threat</strong> prevention rate</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>Zero quantum</strong> vulnerabilities</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span><strong>$5.6B value</strong> protected per enterprise</span>
                </div>
              </div>
              
              <Link
                to="/blog/ai-2025-november-quantum-security-revolution"
                className="inline-flex items-center gap-2 text-red-300 hover:text-white font-semibold group/link transition-colors"
              >
                <span>Secure Your Future</span>

              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
            >

              <span>Explore All November 2025 Breakthroughs</span>

            </Link>
            
            <p className="mt-6 text-blue-300 text-sm">
              💡 <strong className="text-white">Join 50,000+ enterprises</strong> already implementing these game-changing innovations. 
              <Link to="/contact" className="text-yellow-300 hover:text-yellow-200 underline ml-1">
                Schedule your consultation today →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default November2025GameChangersBanner;
