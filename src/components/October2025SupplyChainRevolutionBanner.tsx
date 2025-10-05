import React from 'react';
import { Link } from 'react-router-dom';

const October2025SupplyChainRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 py-16 px-6 rounded-3xl shadow-2xl my-12 border-4 border-emerald-400/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Breaking News Badge */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border-2 border-red-400 rounded-full px-6 py-2 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-200 font-bold text-sm uppercase tracking-wider">🔥 Breaking News - October 1, 2025</span>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-white leading-tight">
          <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent animate-gradient">
            Autonomous Supply Chain Revolution
          </span>
        </h2>

        <p className="text-2xl md:text-3xl text-center text-emerald-100 mb-8 font-semibold max-w-5xl mx-auto">
          Fortune 100 Retail Giant Achieves <span className="text-yellow-300">$4.2B Value Creation</span> with 
          AI-Powered Supply Chain Intelligence
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <CurrencyDollarIcon className="w-8 h-8 text-yellow-300" <div className="text-4xl font-extrabold text-yellow-300">$4.2B</div>
            </div>
            <div className="text-emerald-100 text-sm font-medium">Annual Value Creation</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-teal-400/30 hover:border-teal-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <ChartBarIcon className="w-8 h-8 text-green-300" <div className="text-4xl font-extrabold text-green-300">2,847%</div>
            </div>
            <div className="text-teal-100 text-sm font-medium">ROI in 18 Months</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircleIcon className="w-8 h-8 text-cyan-300" <div className="text-4xl font-extrabold text-cyan-300">98.7%</div>
            </div>
            <div className="text-cyan-100 text-sm font-medium">On-Time Delivery Rate</div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <TruckIcon className="w-8 h-8 text-emerald-300" <div className="text-4xl font-extrabold text-emerald-300">87%</div>
            </div>
            <div className="text-emerald-100 text-sm font-medium">Cost Reduction</div>
          </div>
        </div>

        {/* Revolutionary Capabilities */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 mb-10 border-2 border-emerald-400/30">
          <h3 className="text-3xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
            <SparklesIcon className="w-8 h-8 text-yellow-300 animate-pulse" />
            Revolutionary AI-Powered Capabilities
            <SparklesIcon className="w-8 h-8 text-yellow-300 animate-pulse"</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <ChartBarIcon className="w-6 h-6 text-emerald-400" <h4 className="text-xl font-bold text-white">Predictive Intelligence</h4>
              </div>
              <ul className="space-y-2 text-emerald-100">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>94% Forecast Accuracy</strong> across 2.7M SKUs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>23-Day Disruption Warning</strong> for proactive response</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>Real-Time Market Intelligence</strong> beats competitors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <ClockIcon className="w-6 h-6 text-cyan-400" <h4 className="text-xl font-bold text-white">Autonomous Operations</h4>
              </div>
              <ul className="space-y-2 text-cyan-100">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>2.4M Daily Decisions</strong> fully automated</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>89% Warehouse Automation</strong> with 12,400+ robots</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>Self-Optimizing Routes</strong> reducing costs 87%</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <GlobeAltIcon className="w-6 h-6 text-teal-400" <h4 className="text-xl font-bold text-white">Complete Visibility</h4>
              </div>
              <ul className="space-y-2 text-teal-100">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>100% End-to-End Visibility</strong> across supply chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>47,000 IoT Devices</strong> for real-time monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>Blockchain Tracking</strong> complete transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fortune 100 Success Story Spotlight */}
        <div className="bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm rounded-2xl p-8 mb-10 border-2 border-yellow-400/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-500/20 rounded-full p-3">
              <TruckIcon className="w-8 h-8 text-yellow-300"</div>
            <div>
              <div className="text-yellow-300 text-sm font-semibold uppercase tracking-wider">Case Study Spotlight</div>
              <h3 className="text-3xl font-bold text-white">Fortune 100 Retail Transformation</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-xl font-bold text-yellow-200 mb-3">The Challenge</h4>
              <ul className="space-y-2 text-yellow-100">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">❌</span>
                  <span>$7.8B annual supply chain costs (18% of revenue)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">❌</span>
                  <span>73% on-time delivery (industry worst)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">❌</span>
                  <span>27% product waste rate ($4.2B lost)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">❌</span>
                  <span>54% forecast accuracy (constant stock-outs)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-green-200 mb-3">The Results</h4>
              <ul className="space-y-2 text-green-100">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>$4.2B Annual Value Creation</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>98.7% On-Time Delivery</strong> (industry leader)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>2% Waste Rate</strong> (89% reduction)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" <span><strong>94% Forecast Accuracy</strong> (perfect inventory)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="text-yellow-100">
                <span className="font-bold text-2xl text-yellow-300">2,847% ROI</span> achieved in just 18 months with <span className="font-bold">3.2-month payback period</span>
              </div>
              <Link 
                to="/case-studies/ai-2025-oct-fortune-100-retail-supply-chain-transformation-4-2b"
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-yellow-950 px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Read Full Case Study
                <ArrowRightIcon className="w-5 h-5"</Link>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Proven Across Industries</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { industry: 'Retail', value: '$4.2B', roi: '2,847%' },
              { industry: 'Manufacturing', value: '$2.7B', roi: '2,100%' },
              { industry: 'Pharma', value: '$890M', roi: '1,800%' },
              { industry: 'Automotive', value: '$1.4B', roi: '2,400%' },
              { industry: 'Food & Beverage', value: '$670M', roi: '1,600%' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-400/20 hover:border-emerald-400/50 transition-all hover:scale-105">
                <div className="text-emerald-300 font-bold text-lg mb-1">{item.industry}</div>
                <div className="text-white font-extrabold text-xl mb-1">{item.value}</div>
                <div className="text-emerald-200 text-sm">ROI: {item.roi}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/content/blog/ai-2025-oct-autonomous-supply-chain-intelligence-revolution"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <SparklesIcon className="w-6 h-6" />
            Read the Revolutionary Guide
            <ArrowRightIcon className="w-6 h-6"</Link>

          <Link
            to="/case-studies/ai-2025-oct-fortune-100-retail-supply-chain-transformation-4-2b"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <TruckIcon className="w-6 h-6" />
            View $4.2B Case Study
            <ArrowRightIcon className="w-6 h-6"</Link>

          <Link
            to="/content/services/autonomous-supply-chain-intelligence-platform"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            <ChartBarIcon className="w-6 h-6" />
            Explore Platform & Services
            <ArrowRightIcon className="w-6 h-6"</Link>
        </div>

        {/* Free Assessment CTA */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-green-400/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              🎁 FREE 2-Week Supply Chain Assessment (No Obligation)
            </h3>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Identify your <strong className="text-yellow-300">$100M+ opportunity</strong> and get a detailed ROI projection. 
              See how you can achieve similar results with autonomous supply chain intelligence.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact?service=supply-chain-assessment"
                className="inline-flex items-center gap-2 bg-white text-emerald-900 px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-emerald-50"
              >
                Schedule Free Assessment
                <ArrowRightIcon className="w-6 h-6"</Link>
              <div className="text-green-200 text-sm">
                <div className="font-bold text-lg">⚡ Limited Time Offer</div>
                <div>90-day pilot starting at $500K • 30% improvement guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Footer */}
        <div className="mt-8 pt-6 border-t border-emerald-400/30">
          <div className="flex flex-wrap items-center justify-center gap-6 text-emerald-200 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" <span><strong>15+</strong> Fortune 500 Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" <span><strong>$20B+</strong> Total Value Created</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" <span><strong>99.97%</strong> Platform Uptime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" <span> Security Breaches</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" <span><strong>SOC 2 Type II</strong> Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025SupplyChainRevolutionBanner;
