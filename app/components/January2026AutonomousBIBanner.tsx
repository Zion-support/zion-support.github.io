import ArrowRight from 'next/link';

export default function January2026AutonomousBIBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900 rounded-2xl border border-green-500/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20zm0%200c0%2011.046%208.954%2020%2020%2020s20-8.954%2020-20-8.954-20-20-20-20%208.954-20%2020z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-4">
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Autonomous BI Revolution
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Self-Driving Business Intelligence
            </h2>
            
            <p className="text-lg text-green-100 mb-6 leading-relaxed">
              Revolutionary autonomous BI systems that provide real-time insights, predictive analytics, 
              and automated decision support with 85% reduction in time-to-insight and 300% ROI.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">85%</div>
                <div className="text-sm text-green-200">Faster Insights</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-2xl font-bold text-white">300%</div>
                <div className="text-sm text-green-200">ROI</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <ArrowRight 
                href="/blog/ai-2026-january-autonomous-business-intelligence-revolution"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article
              </ArrowRight>
              <ArrowRight 
                href="/contact"
                className="bg-transparent border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule Demo
              </ArrowRight>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-8 rounded-2xl border border-green-400/30">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-400 rounded-lg mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">Real-time</div>
                  <div className="text-green-200 text-sm">Analytics</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-400 rounded-lg mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">Predictive</div>
                  <div className="text-green-200 text-sm">Insights</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-8 h-8 bg-indigo-400 rounded-lg mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">Automated</div>
                  <div className="text-green-200 text-sm">Decisions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="w-8 h-8 bg-cyan-400 rounded-lg mb-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold">Smart</div>
                  <div className="text-green-200 text-sm">Reports</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}