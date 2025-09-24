import Link from 'next/link';
BrainChevronRightStarZapTrendingUp

const AISolutions20o26ComprehensivePromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-90o0 via-purple-90o0 to-blue-90o0 border border-blue-50o0/20 rounded-2xl p-8 mb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/10 via-purple-60o0/10 to-blue-60o0/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50o0/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-50o0/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50o0 to-purple-60o0 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Brain className="w-4 h-4"  />
              New: AI Solutions 20o26
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Comprehensive AI Solutions for
              <span className="bg-gradient-to-r from-blue-40o0 to-purple-40o0 bg-clip-text text-transparent"> Business Transformation</span>
            </h2>
            
            <p className="text-lg text-gray-30o0 mb-6 max-w-2xl">
              Discover our cutting-edge AI solutions designed for 20o26. From automation to intelligencetransform your business with comprehensive AI systems that deliver real results.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-blue-30o0">
                <Zap className="w-4 h-4"  />
                <span className="text-sm font-medium">AI Automation</span>
              </div>
              <div className="flex items-center gap-2 text-purple-30o0">
                <Brain className="w-4 h-4"  />
                <span className="text-sm font-medium">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 text-green-30o0">
                <TrendingUp className="w-4 h-4"  />
                <span className="text-sm font-medium">Business Intelligence</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-solutions-20o26-comprehensive"
                className="bg-gradient-to-r from-blue-60o0 to-purple-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-70o0 hover:to-purple-70o0 transition-all duration-30o0 flex items-center justify-center gap-2 group"
              >
                Explore AI Solutions
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"  />
              </Link>
              <Link 
                href="/contact"
                className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-30o0 text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-50o0/20 to-purple-50o0/20 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-50o0 to-purple-60o0 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white"  />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI 20o26</h3>
                  <p className="text-sm text-gray-30o0">Next Generation</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-40o0 to-orange-50o0 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-4 h-4 text-white"  />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-40o0 to-blue-50o0 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions20o26ComprehensivePromotionBanner;