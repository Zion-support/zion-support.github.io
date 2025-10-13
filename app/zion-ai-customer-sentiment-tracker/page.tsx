import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  BarChart3, 
  TrendingUp, 
  Users, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Target,
  Clock,
  MessageSquare,
  Smile
} from 'lucide-react';

const ZionAICustomerSentimentTrackerPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Customer Sentiment Tracker - Real-time Sentiment Analysis</title>
        <meta name="description" content="Track customer sentiment in real-time with Zion AI Customer Sentiment Tracker. Monitor feedback, analyze trends, and improve customer satisfaction with AI-powered insights." />
        <meta name="keywords" content="customer sentiment analysis, sentiment tracking, customer feedback, AI sentiment analysis, customer satisfaction, real-time monitoring" />
        <meta property="og:title" content="Zion AI Customer Sentiment Tracker - Real-time Sentiment Analysis" />
        <meta property="og:description" content="Track customer sentiment in real-time with Zion AI Customer Sentiment Tracker. Monitor feedback, analyze trends, and improve customer satisfaction." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion AI Customer Sentiment Tracker - Real-time Sentiment Analysis" />
        <meta name="twitter:description" content="Track customer sentiment in real-time with Zion AI Customer Sentiment Tracker. Monitor feedback, analyze trends, and improve customer satisfaction." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-8">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">AI-Powered Sentiment Intelligence</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Zion AI Customer
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Sentiment Tracker
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Monitor customer sentiment in real-time with advanced AI analysis. 
                Track feedback trends, identify issues early, and improve customer satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Analysis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Sentiment Analysis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understand your customers better with comprehensive sentiment tracking and analysis tools.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Sentiment Analysis</h3>
                <p className="text-gray-300">
                  Analyze customer feedback, reviews, and social media mentions in real-time with 95% accuracy.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Trend Analysis</h3>
                <p className="text-gray-300">
                  Track sentiment trends over time and identify patterns in customer satisfaction and dissatisfaction.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Multi-Channel Monitoring</h3>
                <p className="text-gray-300">
                  Monitor sentiment across all customer touchpoints including email, social media, reviews, and support tickets.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Predictive Insights</h3>
                <p className="text-gray-300">
                  Get early warnings about potential customer churn and satisfaction issues before they escalate.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Customer Segmentation</h3>
                <p className="text-gray-300">
                  Segment customers by sentiment patterns and create targeted engagement strategies for each group.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Smile className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Emotion Detection</h3>
                <p className="text-gray-300">
                  Detect specific emotions like joy, anger, frustration, and satisfaction in customer communications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Zion AI Customer Sentiment Tracker?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer experience with data-driven sentiment insights and proactive engagement strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Improve Customer Satisfaction</h3>
                      <p className="text-gray-300">
                        Identify and address customer issues before they impact satisfaction scores and retention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Reduce Churn Rate</h3>
                      <p className="text-gray-300">
                        Proactively identify at-risk customers and implement retention strategies based on sentiment data.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Decisions</h3>
                      <p className="text-gray-300">
                        Make informed business decisions with comprehensive sentiment analytics and trend reports.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Competitive Advantage</h3>
                      <p className="text-gray-300">
                        Stay ahead of competitors by understanding customer sentiment trends and market perceptions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-purple-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Track Customer Sentiment?</h3>
                  <p className="text-gray-300 mb-6">
                    Start monitoring customer sentiment today and transform your customer experience.
                  </p>
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Tracking Customer Sentiment Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to understand and improve customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAICustomerSentimentTrackerPage;