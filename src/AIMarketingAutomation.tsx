import React from 'react';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  ArrowRight,
  Users,
  Globe
} from 'lucide-react';

const AIMarketingAutomation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI Marketing Automation</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Intelligent{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                Marketing Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your marketing strategy with AI-powered automation that delivers 
              personalized experiences and maximizes campaign effectiveness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Marketing Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Advanced AI tools for modern marketing automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Audience Targeting',
                description: 'AI-powered audience segmentation and targeting for maximum campaign relevance'
              },
              {
                icon: TrendingUp,
                title: 'Campaign Optimization',
                description: 'Real-time campaign optimization based on performance data and user behavior'
              },
              {
                icon: BarChart3,
                title: 'Analytics & Insights',
                description: 'Comprehensive analytics and insights to measure and improve marketing ROI'
              },
              {
                icon: Zap,
                title: 'Automated Workflows',
                description: 'Intelligent automation of marketing workflows and customer journey management'
              },
              {
                icon: Users,
                title: 'Personalization',
                description: 'Dynamic content personalization based on user preferences and behavior'
              },
              {
                icon: Globe,
                title: 'Multi-Channel',
                description: 'Unified marketing across email, social media, web, and mobile channels'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
                <feature.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Marketing Applications</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive marketing solutions for every business need
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Email Marketing',
                description: 'AI-powered email campaigns with personalized content and optimal send times.'
              },
              {
                title: 'Social Media',
                description: 'Automated social media management and content optimization across platforms.'
              },
              {
                title: 'Content Marketing',
                description: 'Intelligent content creation and distribution strategies for maximum engagement.'
              },
              {
                title: 'Lead Generation',
                description: 'Automated lead scoring and nurturing processes for improved conversion rates.'
              }
            ].map((application, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">{application.title}</h3>
                <p className="text-gray-300 leading-relaxed">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Revolutionize Your Marketing Strategy
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI Marketing Automation platform and transform your marketing efforts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMarketingAutomation;