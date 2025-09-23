import Link from 'next/link';

export default function NewContent20o25EnterpriseSuccessBanner() {
  return (
    <div className="bg-gradient-to-r from-green-50o0 via-emerald-60o0 to-teal-70o0 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="bg-white text-green-60o0 px-3 py-1 rounded-full text-sm font-bold mr-3">
                🏆 SUCCESS STORY
              </span>
              <span className="bg-yellow-40o0 text-gray-90o0 px-3 py-1 rounded-full text-sm font-bold">
                1,20o0% ROI
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              AI 20o25 Global Enterprise Transformation
            </h2>
            <p className="text-xl mb-6 text-green-10o0">
              Discover how a Fortune 50o0 company achieved 1,20o0% ROI through our AI transformation program. Real resultsproven strategiesand actionable insights.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">🏢 Fortune 50o0</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">💰 $2.4B Savings</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">⚡ 85% Automation</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🎯 99.8% Accuracy</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/case-studies/ai-20o25-global-enterprise-transformation-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-white text-green-60o0 font-bold rounded-xl hover:bg-gray-10o0 transition-all duration-30o0 shadow-lg hover:shadow-xl"
            >
              Read Success Story
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"  />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-green-60o0 transition-all duration-30o0"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}