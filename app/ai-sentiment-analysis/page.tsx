'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Heart, TrendingUp, AlertTriangle, MessageSquare, CheckCircle, ArrowRight, Star, Users, Award, BarChart } from 'lucide-react';

const AISentimentAnalysisPage: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Emotion Detection',
      description: 'Identify emotions like joy, anger, sadness, and fear in text and voice data.'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment Tracking',
      description: 'Monitor sentiment trends over time to understand customer mood and satisfaction.'
    },
    {
      icon: AlertTriangle,
      title: 'Crisis Detection',
      description: 'Automatically detect negative sentiment spikes and potential PR crises.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-language Support',
      description: 'Analyze sentiment in 50+ languages with cultural context understanding.'
    }
  ];

  const applications = [
    {
      title: 'Social Media Monitoring',
      description: 'Track brand sentiment across social platforms and respond to issues quickly.',
      accuracy: '92%',
      icon: '📱'
    },
    {
      title: 'Customer Feedback',
      description: 'Analyze reviews, surveys, and support tickets for actionable insights.',
      accuracy: '95%',
      icon: '⭐'
    },
    {
      title: 'Market Research',
      description: 'Understand public opinion and market sentiment for strategic decisions.',
      accuracy: '90%',
      icon: '📊'
    },
    {
      title: 'Employee Engagement',
      description: 'Monitor internal communications and feedback for HR insights.',
      accuracy: '88%',
      icon: '👥'
    },
    {
      title: 'Content Moderation',
      description: 'Automatically detect toxic content and inappropriate language.',
      accuracy: '96%',
      icon: '🛡️'
    },
    {
      title: 'Financial Analysis',
      description: 'Analyze news and social sentiment for investment and trading decisions.',
      accuracy: '87%',
      icon: '💰'
    }
  ];

  const benefits = [
    'Improve customer satisfaction by 40%',
    'Reduce response time to negative feedback by 70%',
    'Increase brand reputation and trust',
    'Make data-driven decisions based on sentiment',
    'Prevent PR crises with early detection',
    'Scale sentiment monitoring across all channels'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Sentiment Analysis
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Understand customer emotions and opinions with our advanced AI sentiment analysis platform. 
                Turn text and voice data into actionable insights that drive business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Analyzing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Satisfaction Boost</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">70%</div>
                <div className="text-gray-300">Faster Response</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Sentiment Analysis Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI sentiment analysis platform uses natural language processing and machine learning 
                to understand emotions, opinions, and context in text and voice data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Sentiment Analysis Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From social media monitoring to customer feedback analysis, our sentiment analysis 
                solutions help businesses understand and respond to customer emotions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{app.icon}</div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {app.accuracy} accuracy
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Sentiment Analysis?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI sentiment analysis platform delivers accurate insights that help you 
                  understand and respond to customer emotions effectively.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Sentiment Analysis Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Overall Accuracy:</span>
                    <span className="text-green-400 font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Emotion Detection:</span>
                    <span className="text-green-400 font-semibold">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Language Support:</span>
                    <span className="text-green-400 font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Processing Speed:</span>
                    <span className="text-green-400 font-semibold">&lt;100ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Understand Your Customers Better</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start analyzing sentiment and emotions to improve customer satisfaction and business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AISentimentAnalysisPage;