import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Megaphone, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  TrendingUp 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AIMarketingAutomation() {
  return (
    <>
      <SEOHead
        title="AI Marketing Automation - Zion Tech Group"
        description="Revolutionary AI-powered marketing automation platform that optimizes campaigns, personalizes content, and maximizes ROI."
        keywords="AI marketing, marketing automation, campaign optimization, personalization, marketing AI"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-800/20 to-red-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 rounded-full px-6 py-3 mb-6">
                <Megaphone className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-medium">AI Marketing Automation</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Intelligent
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent block">
                  Marketing Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered marketing automation platform that optimizes campaigns, 
                personalizes content, and maximizes ROI with unprecedented efficiency.
              </p>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing Features</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Advanced AI capabilities that transform marketing strategies and campaign performance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Target,
                  title: 'Smart Targeting',
                  description: 'AI-powered audience targeting with 95% accuracy',
                },
                {
                  icon: BarChart3,
                  title: 'Campaign Optimization',
                  description: 'Real-time campaign optimization and performance tracking',
                },
                {
                  icon: Brain,
                  title: 'Content Personalization',
                  description: 'Dynamic content personalization based on user behavior',
                },
                {
                  icon: Zap,
                  title: 'Automated Workflows',
                  description: 'Automated marketing workflows and lead nurturing',
                },
                {
                  icon: TrendingUp,
                  title: 'ROI Maximization',
                  description: 'Maximize ROI with intelligent budget allocation and optimization',
                },
                {
                  icon: CheckCircle,
                  title: 'Quality Assurance',
                  description: 'Ensure consistent brand messaging and campaign quality',
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 hover:border-orange-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI Marketing Automation platform and maximize your marketing ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-orange-500 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500/10 transition-all">
                Schedule Demo
              </button>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already revolutionized their marketing with AI automation.
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have already revolutionized their marketing with AI-powered automation. 
            Start your free trial today and see the difference AI can make.
                to="/case-studies"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
              >
                View Success Stories
              </Link>
            </div>
        </div>
      </section>
      </div>
    </>
  );
}
