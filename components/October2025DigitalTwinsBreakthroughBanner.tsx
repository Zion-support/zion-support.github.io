import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Zap, Sparkles, ArrowRight, DollarSign, Target, BarChart3 } from 'lucide-react';

export default function October2025DigitalTwinsBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-white font-semibold text-sm">NEW BREAKTHROUGH CONTENT • OCTOBER 2025</span>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            AI-Powered Digital Twins:
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The $850M Success Story
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto">
            Discover how Fortune 100 enterprises are revolutionizing operations with digital twin technology
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">$850M Value</h3>
            </div>
            <p className="text-blue-100">
              Real enterprise transformation delivering unprecedented ROI and operational excellence
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">99.2% Accuracy</h3>
            </div>
            <p className="text-blue-100">
              AI-powered predictive analytics forecasting failures 90 days in advance
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">89% Reduction</h3>
            </div>
            <p className="text-blue-100">
              Dramatic decrease in unplanned downtime across 125,000+ assets
            </p>
          </div>
        </div>

        {/* Featured Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-400" />
              <span className="text-blue-300 font-semibold">FEATURED ARTICLE</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Enterprise Digital Twins Revolution
            </h3>
            <p className="text-blue-100 mb-6 text-lg leading-relaxed">
              Explore the cutting-edge technology transforming business operations in 2025. Learn about AI-powered capabilities, implementation roadmaps, and the $47B impact on Fortune 500 companies.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                'Real-time predictive maintenance',
                'Autonomous process optimization',
                'Enterprise-wide integration strategies',
                'Industry-specific applications',
                '18-month implementation roadmap'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-blue-100">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/blog/ai-2025-october-enterprise-digital-twins-revolution"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
            >
              Read Full Article
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <span className="text-purple-300 font-semibold">SUCCESS STORY</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              $850M Global Energy Transformation
            </h3>
            <p className="text-blue-100 mb-6 text-lg leading-relaxed">
              Fortune 100 energy corporation achieves extraordinary results with enterprise digital twin platform. From crisis to industry leadership in 18 months.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Total Value', value: '$850M' },
                { label: 'ROI', value: '1,808%' },
                { label: 'Uptime Gain', value: '+12.1pts' },
                { label: 'Cost Reduction', value: '61%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-3">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
            <Link
              to="/case-studies/ai-2025-oct-01-global-energy-digital-twin-transformation-850m-success"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors"
            >
              View Case Study
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Join Fortune 500 companies achieving breakthrough results with AI-powered digital twins. 
            Schedule your complimentary assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              <Zap className="w-5 h-5" />
              Schedule Consultation
            </Link>
            <Link
              to="/services/digital-twins"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: '200+', label: 'Enterprise Deployments' },
            { value: '$47B+', label: 'Client Value Created' },
            { value: '99.2%', label: 'Prediction Accuracy' },
            { value: '18mo', label: 'Average ROI Timeline' }
          ].map((stat, idx) => (
            <div key={idx} className="flex-1 min-w-[150px]">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
