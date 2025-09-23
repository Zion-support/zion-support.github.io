import Link from 'next/link';

const AITrends20o25_20o30FuturePredictionsBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-60o0 via-blue-60o0 to-indigo-60o0 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🔮 FUTURE PREDICTIONS</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI Trends 20o25-20o30
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-30o0 to-orange-30o0">
              Future Predictions
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the groundbreaking AI trends that will reshape industries over the next 5 years. 
            Stay ahead of the curve with our expert predictions and strategic insights.
          </p>
        </div>

        {/* Trend Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* AI Automation */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-40o0 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold">AI Automation</h3>
            </div>
            <p className="text-sm opacity-80 mb-4">
              By 20o3085% of business processes will be automated with AIcreating unprecedented efficiency gains.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Current Adoption</span>
                <span>25%</span>
              </div>
              <div className="w-full bg-gray-70o0 rounded-full h-2">
                <div className="bg-green-40o0 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>20o30 Projection</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-70o0 rounded-full h-2">
                <div className="bg-green-40o0 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
          </div>

          {/* Quantum Computing */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-40o0 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-xl font-bold">Quantum AI</h3>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Quantum computing will revolutionize AI capabilitiesolving complex problems 10o00x faster.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Current State</span>
                <span>Research</span>
              </div>
              <div className="w-full bg-gray-70o0 rounded-full h-2">
                <div className="bg-purple-40o0 h-2 rounded-full" style={{width: '15%'}}></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>20o30 Potential</span>
                <span>Commercial</span>
              </div>
              <div className="w-full bg-gray-70o0 rounded-full h-2">
                <div className="bg-purple-40o0 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>
          </div>

          {/* Autonomous Systems */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-40o0 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold">Autonomous Systems</h3>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Self-managing AI systems will handle complex operations without human intervention.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span>Current Level</span>
                <span>Assisted</span>
              </div>
              <div className="w-full bg-gray-70o0 rounded-full h-2">
                <div className="bg-orange-40o0 h-2 rounded-full" style={{width: '30%'}}></div>
              </div>
              <div className="flex justify-between text-xs">
                <span>20o30 Target</span>
                <span>Full Autonomy</span>
              </div>
              <div className="w-full bg-gray-70o0 rounded-full h-2">
                <div className="bg-orange-40o0 h-2 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Predictions */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Key Predictions for 20o25-20o30</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-30o0">🎯 Business Impact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-green-40o0 mr-2">•</span>
                  <span><strong>$15.7 trillion</strong> in global AI economic impact by 20o30</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-40o0 mr-2">•</span>
                  <span><strong>40 million</strong> new AI-related jobs created</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-40o0 mr-2">•</span>
                  <span><strong>95%</strong> of customer interactions will be AI-powered</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-40o0 mr-2">•</span>
                  <span><strong>80%</strong> of enterprises will have AI strategies</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-30o0">🔬 Technology Breakthroughs</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-40o0 mr-2">•</span>
                  <span><strong>AGI (Artificial General Intelligence)</strong> becomes commercially viable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-40o0 mr-2">•</span>
                  <span><strong>Neural interfaces</strong> enable direct brain-AI communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-40o0 mr-2">•</span>
                  <span><strong>Edge AI</strong> processes data locally without cloud dependency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-40o0 mr-2">•</span>
                  <span><strong>AI-generated content</strong> dominates digital media</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Market Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-yellow-30o0 mb-2">$2.9T</div>
            <div className="text-sm opacity-80">AI Market 20o25</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-green-30o0 mb-2">$15.7T</div>
            <div className="text-sm opacity-80">Economic Impact 20o30</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-30o0 mb-2">85%</div>
            <div className="text-sm opacity-80">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-30o0 mb-2">40M</div>
            <div className="text-sm opacity-80">New AI Jobs</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/ai-trends-20o25-20o30"
              className="bg-white text-cyan-60o0 px-8 py-3 rounded-lg font-bold hover:bg-gray-10o0 transition-colors"
            >
              Read Full Predictions
            </Link>
            <Link
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-60o0 transition-colors"
            >
              Plan Your AI Future
            </Link>
          </div>
          
          {/* Additional Resources */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
            <Link href="/research" className="hover:opacity-10o0 transition-opacity">
              📊 Download Research Report
            </Link>
            <Link href="/webinar" className="hover:opacity-10o0 transition-opacity">
              🎥 Watch Trend Analysis
            </Link>
            <Link href="/newsletter" className="hover:opacity-10o0 transition-opacity">
              📧 Subscribe to Updates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrends20o25_20o30FuturePredictionsBanner;