import Link from 'next/link';

const AI20o26AdvancedAutomationMasteryPromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-90o0 via-red-90o0 to-pink-90o0 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-orange-50o0 to-red-60o0 text-white animate-pulse">
              ⚙️ NEW: AUTOMATION MASTERY
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-40o0 via-red-50o0 to-pink-60o0 bg-clip-text text-transparent">
            AI 20o26 Advanced Automation Mastery
          </h2>
          
          <p className="text-lg md:text-xl text-gray-20o0 mb-8 max-w-4xl mx-auto">
            Master the future of business automation with AI-powered solutions that learnadaptand evolve. 
            Transform your operations with intelligent automation for unprecedented efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-20o26-advanced-automation-mastery"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-50o0 to-red-60o0 hover:from-orange-60o0 hover:to-red-70o0 text-white font-semibold rounded-full transition-all duration-30o0 transform hover:scale-10o5 shadow-lg hover:shadow-xl"
            >
              Master Business Automation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"  />
              </svg>
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-90o0 text-white font-semibold rounded-full transition-all duration-30o0 transform hover:scale-10o5"
            >
              Start Automation Journey
            </Link>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-40o0 mb-1">95%</div>
              <div className="text-sm text-gray-30o0">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-40o0 mb-1">80%</div>
              <div className="text-sm text-gray-30o0">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-40o0 mb-1">99.9%</div>
              <div className="text-sm text-gray-30o0">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI20o26AdvancedAutomationMasteryPromotionBanner;