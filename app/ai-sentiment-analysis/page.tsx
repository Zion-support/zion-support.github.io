'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, BarChart, Zap, CheckCircle, ArrowRight, Brain, TrendingUp, Shield, Clock, Users, MessageCircle, Target } from 'lucide-react';

const AiSentimentAnalysisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Sentiment Analysis - Emotion Detection & Analysis | Zion Tech Group</title>
        <meta name="description" content="Analyze emotions and sentiment in text, voice, and video with AI. Real-time emotion detection, customer sentiment tracking, and social media monitoring." />
        <meta name="keywords" content="AI sentiment analysis, emotion detection, text analysis, customer sentiment, social media monitoring, emotion AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Emotion AI Technology
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Sentiment Analysis
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Understand emotions and sentiment across text, voice, and video content. 
                Get real-time insights into customer feelings, brand perception, and audience engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Analysis
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#features" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Emotion <span className="text-cyan-400">Detection</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI sentiment analysis platform provides comprehensive emotion detection and sentiment tracking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: 'Multi-Modal Analysis',
                  description: 'Analyze emotions from text, voice, facial expressions, and video content.',
                  features: ['Text Sentiment', 'Voice Emotion', 'Facial Analysis', 'Video Sentiment']
                },
                {
                  icon: BarChart,
                  title: 'Real-time Insights',
                  description: 'Get instant sentiment analysis with live dashboards and alerts.',
                  features: ['Live Monitoring', 'Real-time Alerts', 'Trend Analysis', 'Custom Dashboards']
                },
                {
                  icon: Target,
                  title: 'Precise Emotion Detection',
                  description: 'Identify 20+ emotions including joy, anger, fear, surprise, and sadness.',
                  features: ['20+ Emotions', 'Confidence Scores', 'Context Awareness', 'Cultural Sensitivity']
                },
                {
                  icon: TrendingUp,
                  title: 'Trend Analysis',
                  description: 'Track sentiment trends over time and identify patterns in customer behavior.',
                  features: ['Historical Analysis', 'Trend Detection', 'Pattern Recognition', 'Predictive Insights']
                },
                {
                  icon: Shield,
                  title: 'Privacy Compliant',
                  description: 'Enterprise-grade security with GDPR and CCPA compliance built-in.',
                  features: ['Data Encryption', 'Privacy Controls', 'Compliance Ready', 'Secure Processing']
                },
                {
                  icon: Clock,
                  title: '24/7 Monitoring',
                  description: 'Continuous sentiment monitoring with automated reporting and alerts.',
                  features: ['Always On', 'Automated Reports', 'Smart Alerts', 'Custom Schedules']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-cyan-400">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how sentiment analysis transforms customer experience and business intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Customer Service',
                  description: 'Monitor customer satisfaction and identify issues in real-time.',
                  icon: '📞',
                  benefits: ['Satisfaction Tracking', 'Issue Detection', 'Agent Performance', 'Quality Assurance']
                },
                {
                  title: 'Social Media',
                  description: 'Track brand sentiment and engagement across social platforms.',
                  icon: '📱',
                  benefits: ['Brand Monitoring', 'Crisis Detection', 'Influencer Analysis', 'Campaign Tracking']
                },
                {
                  title: 'Market Research',
                  description: 'Understand customer preferences and market trends through sentiment analysis.',
                  icon: '📊',
                  benefits: ['Customer Insights', 'Product Feedback', 'Market Trends', 'Competitor Analysis']
                },
                {
                  title: 'Healthcare',
                  description: 'Monitor patient satisfaction and emotional well-being in healthcare settings.',
                  icon: '🏥',
                  benefits: ['Patient Satisfaction', 'Treatment Feedback', 'Staff Performance', 'Quality Care']
                },
                {
                  title: 'Education',
                  description: 'Analyze student engagement and learning satisfaction in educational content.',
                  icon: '🎓',
                  benefits: ['Student Engagement', 'Learning Analytics', 'Content Effectiveness', 'Teacher Feedback']
                },
                {
                  title: 'Finance',
                  description: 'Monitor market sentiment and customer satisfaction in financial services.',
                  icon: '💰',
                  benefits: ['Market Sentiment', 'Customer Satisfaction', 'Risk Assessment', 'Compliance Monitoring']
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your sentiment analysis needs. Scale as you grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$199',
                  period: '/month',
                  description: 'Perfect for small businesses and startups',
                  features: [
                    'Up to 10,000 analyses/month',
                    'Basic sentiment detection',
                    'Text analysis only',
                    'Email support',
                    'Standard accuracy'
                  ],
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '$599',
                  period: '/month',
                  description: 'Ideal for growing businesses and agencies',
                  features: [
                    'Up to 100,000 analyses/month',
                    'Multi-modal analysis',
                    'Real-time monitoring',
                    'Priority support',
                    'Custom dashboards'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  period: '',
                  description: 'Tailored solutions for large organizations',
                  features: [
                    'Unlimited analyses',
                    'Advanced AI models',
                    'Custom integrations',
                    'Dedicated support',
                    'SLA guarantees'
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Understanding Emotions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Unlock the power of emotion AI. Get insights into customer feelings, 
              brand perception, and audience engagement with our sentiment analysis platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Analysis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSentimentAnalysisPage;