'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Play, BarChart, Zap, CheckCircle, ArrowRight, Brain, Video, TrendingUp, Shield, Clock, Users } from 'lucide-react';

const AiVideoAnalysisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Analysis - Advanced Video Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your video content with AI-powered video analysis. Real-time object detection, sentiment analysis, content moderation, and automated insights." />
        <meta name="keywords" content="AI video analysis, video intelligence, object detection, sentiment analysis, content moderation, video insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI Video Intelligence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Video Analysis
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Unlock the power of video content with advanced AI analysis. Extract insights, detect objects, 
                analyze emotions, and automate content moderation with cutting-edge computer vision technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Demo
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
                Powerful Video Analysis <span className="text-cyan-400">Capabilities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI video analysis platform provides comprehensive insights and automation for all your video content needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Eye,
                  title: 'Real-time Object Detection',
                  description: 'Identify and track objects, people, and activities in real-time with 99.5% accuracy.',
                  features: ['Person Detection', 'Vehicle Tracking', 'Activity Recognition', 'Scene Classification']
                },
                {
                  icon: BarChart,
                  title: 'Sentiment Analysis',
                  description: 'Analyze facial expressions, emotions, and tone to understand audience engagement.',
                  features: ['Emotion Detection', 'Engagement Scoring', 'Mood Analysis', 'Attention Tracking']
                },
                {
                  icon: Shield,
                  title: 'Content Moderation',
                  description: 'Automatically detect inappropriate content, violence, and policy violations.',
                  features: ['NSFW Detection', 'Violence Detection', 'Hate Speech', 'Brand Safety']
                },
                {
                  icon: TrendingUp,
                  title: 'Performance Analytics',
                  description: 'Get detailed insights into video performance, viewer behavior, and engagement metrics.',
                  features: ['View Duration', 'Drop-off Points', 'Engagement Heatmaps', 'A/B Testing']
                },
                {
                  icon: Zap,
                  title: 'Automated Tagging',
                  description: 'Automatically generate tags, captions, and metadata for better content organization.',
                  features: ['Auto-tagging', 'Caption Generation', 'Metadata Extraction', 'Search Optimization']
                },
                {
                  icon: Clock,
                  title: 'Real-time Processing',
                  description: 'Process videos in real-time with low latency and high throughput capabilities.',
                  features: ['Live Streaming', 'Batch Processing', 'Cloud Processing', 'Edge Computing']
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
                Discover how AI video analysis transforms different industries and use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Media & Entertainment',
                  description: 'Content moderation, audience analytics, and automated video editing.',
                  icon: '🎬',
                  benefits: ['Content Safety', 'Audience Insights', 'Automated Editing', 'Copyright Detection']
                },
                {
                  title: 'Security & Surveillance',
                  description: 'Real-time threat detection, behavior analysis, and incident response.',
                  icon: '🔒',
                  benefits: ['Threat Detection', 'Behavior Analysis', 'Alert Systems', 'Evidence Collection']
                },
                {
                  title: 'Retail & E-commerce',
                  description: 'Customer behavior analysis, inventory tracking, and loss prevention.',
                  icon: '🛍️',
                  benefits: ['Customer Analytics', 'Inventory Management', 'Loss Prevention', 'Heat Mapping']
                },
                {
                  title: 'Education & Training',
                  description: 'Student engagement analysis, learning assessment, and content optimization.',
                  icon: '🎓',
                  benefits: ['Engagement Tracking', 'Learning Analytics', 'Content Optimization', 'Assessment Tools']
                },
                {
                  title: 'Healthcare',
                  description: 'Patient monitoring, therapy analysis, and medical imaging insights.',
                  icon: '🏥',
                  benefits: ['Patient Monitoring', 'Therapy Analysis', 'Medical Imaging', 'Health Insights']
                },
                {
                  title: 'Sports & Fitness',
                  description: 'Performance analysis, technique improvement, and injury prevention.',
                  icon: '⚽',
                  benefits: ['Performance Analysis', 'Technique Review', 'Injury Prevention', 'Training Optimization']
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
                Choose the perfect plan for your video analysis needs. Scale up or down as required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: '$299',
                  period: '/month',
                  description: 'Perfect for small businesses and content creators',
                  features: [
                    'Up to 100 hours of video analysis',
                    'Basic object detection',
                    'Standard sentiment analysis',
                    'Email support',
                    'API access included'
                  ],
                  popular: false
                },
                {
                  name: 'Professional',
                  price: '$799',
                  period: '/month',
                  description: 'Ideal for growing businesses and media companies',
                  features: [
                    'Up to 500 hours of video analysis',
                    'Advanced AI models',
                    'Real-time processing',
                    'Content moderation',
                    'Priority support',
                    'Custom integrations'
                  ],
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: 'Custom',
                  period: '',
                  description: 'Tailored solutions for large organizations',
                  features: [
                    'Unlimited video analysis',
                    'Custom AI model training',
                    'On-premise deployment',
                    'Dedicated support team',
                    'SLA guarantees',
                    'White-label options'
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
              Ready to Analyze Your Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start extracting valuable insights from your video content today. 
              Get a free demo and see the power of AI video analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Demo
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

export default AiVideoAnalysisPage;