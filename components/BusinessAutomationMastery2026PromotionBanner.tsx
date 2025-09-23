import Link from 'next/link';
SettingsChevronRightStarClockDollarSignTargetZap

const BusinessAutomationMastery20o26PromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-80o0 via-blue-90o0 to-slate-80o0 border border-blue-50o0/20 rounded-2xl p-8 mb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-60o0/10 via-cyan-60o0/10 to-blue-60o0/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-50o0/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-50o0/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Settings className="w-4 h-4"  />
              New: Business Automation Mastery 20o26
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Master Business Automation for
              <span className="bg-gradient-to-r from-blue-40o0 to-cyan-40o0 bg-clip-text text-transparent"> Maximum Efficiency</span>
            </h2>
            
            <p className="text-lg text-gray-30o0 mb-6 max-w-2xl">
              Unlock the full potential of business automation in 20o26. Learn advanced strategiestoolsand implementation techniques that drive unprecedented efficiency and growth.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center gap-2 text-blue-30o0">
                <Clock className="w-4 h-4"  />
                <span className="text-sm font-medium">80% Time Savings</span>
              </div>
              <div className="flex items-center gap-2 text-green-30o0">
                <DollarSign className="w-4 h-4"  />
                <span className="text-sm font-medium">50% Cost Reduction</span>
              </div>
              <div className="flex items-center gap-2 text-purple-30o0">
                <Target className="w-4 h-4"  />
                <span className="text-sm font-medium">Zero Errors</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/business-automation-mastery-20o26"
                className="bg-gradient-to-r from-blue-60o0 to-cyan-60o0 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-70o0 hover:to-cyan-70o0 transition-all duration-30o0 flex items-center justify-center gap-2 group"
              >
                Master Automation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"  />
              </Link>
              <Link 
                href="/contact"
                className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-30o0 text-center"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-50o0/20 to-cyan-50o0/20 rounded-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-50o0 to-cyan-60o0 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-white"  />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Automation</h3>
                  <p className="text-sm text-gray-30o0">Mastery 20o26</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-40o0 to-orange-50o0 rounded-full flex items-center justify-center animate-pulse">
                <Star className="w-4 h-4 text-white"  />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-40o0 to-blue-50o0 rounded-full animate-bounce"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-purple-40o0 to-pink-50o0 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAutomationMastery20o26PromotionBanner;