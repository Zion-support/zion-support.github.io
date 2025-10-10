import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart, TrendingUp, Target, Users, Zap, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';

const AIBusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Real-time data analysis with machine learning algorithms for deeper business insights.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Modeling',
      description: 'Forecast trends and outcomes using sophisticated AI models and historical data.'
    },
    {
      icon: Target,
      title: 'Goal Optimization',
      description: 'AI-powered recommendations to optimize business goals and KPIs automatically.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep understanding of customer behavior patterns and preferences through AI analysis.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant data processing and insights delivery for immediate decision-making.'
    },
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Automated report generation and insight discovery without manual intervention.'
    }
  ];

  const benefits = [
    '300% faster data analysis compared to traditional methods',
    '95% accuracy in predictive forecasting',
    '50% reduction in manual reporting time',
    'Real-time dashboard updates and alerts',
    'Customizable AI models for specific business needs',
    'Integration with existing business systems'
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict sales trends and optimize inventory management with AI-powered forecasting models.',
      impact: '40% improvement in forecast accuracy'
    },
    {
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value using AI clustering.',
      impact: '60% increase in marketing ROI'
    },
    {
      title: 'Risk Assessment',
      description: 'Identify potential risks and opportunities through advanced pattern recognition and analysis.',
      impact: '35% reduction in business risks'
    },
    {
      title: 'Performance Optimization',
      description: 'Continuously optimize business processes and operations using AI-driven recommendations.',
      impact: '25% improvement in operational efficiency'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence | Zion Tech Group - Advanced Analytics & Insights</title>
        <meta name="description" content="Transform your business with AI-powered business intelligence solutions. Advanced analytics, predictive modeling, and real-time insights for data-driven decisions." />
        <meta name="keywords" content="AI business intelligence, advanced analytics, predictive modeling, business insights, data analysis, machine learning, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services/business-intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}</div>
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
                <Brain className="w-4 h-4" />
                <span>AI Business Intelligence</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text">
                Advanced Analytics & </h1>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"> Insights</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business data into actionable insights with our cutting-edge AI business intelligence solutions. 
                Make smarter decisions faster with predictive analytics and real-time intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI business intelligence platform combines advanced machine learning with intuitive analytics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all group"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI BI Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements in your business intelligence capabilities
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (</div>
                  <div key={index} className="flex items-start space-x-3"></div>
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-lg p-8 border border-purple-500/30"></div>
                <h3 className="text-2xl font-bold text-white mb-4">ROI Guarantee</h3>
                <p className="text-gray-300 mb-6">
                  We guarantee a minimum 200% ROI within the first 6 months of implementation, 
                  or we'll refund your investment.
                </p>
                <div className="flex items-center space-x-2 text-cyan-400"></div>
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Real-World Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI business intelligence solutions drive results across industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-8 border border-slate-700/50 hover:border-purple-400/50 transition-all"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="flex items-center space-x-2 text-green-400"></div>
                    <Star className="w-5 h-5" />
                    <span className="font-semibold">{useCase.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-12 border border-purple-500/30"></div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already using our AI business intelligence solutions 
                to make smarter, data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIBusinessIntelligencePage;