import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, Mic, Brain, Target, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIVoiceProcessingPage: React.FC = () => {
  const voiceServices = [
    {
      title: 'Speech Recognition & Transcription',
      description: 'Convert speech to text with high accuracy using advanced AI models for multiple languages and accents.',
      icon: '🎤',
      price: '$1,500/month',
      features: [
        'Real-time Speech-to-Text',
        'Multi-language Support',
        'Accent Recognition',
        'Noise Cancellation',
        'Speaker Identification',
        'API Integration'
      ],
      benefits: [
        'Achieve 95%+ accuracy',
        'Process 100+ hours/day',
        'Support 50+ languages',
        'Reduce transcription costs by 80%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Speech Recognition',
      technologies: ['Deep Learning', 'ASR Models', 'NLP', 'Audio Processing', 'Cloud APIs', 'Real-time Streaming'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Text-to-Speech Synthesis',
      description: 'Generate natural-sounding speech from text with customizable voices and emotional tones.',
      icon: '🔊',
      price: '$1,200/month',
      features: [
        'Natural Voice Generation',
        'Multiple Voice Options',
        'Emotional Tone Control',
        'SSML Support',
        'Real-time Synthesis',
        'Custom Voice Training'
      ],
      benefits: [
        'Create human-like voices',
        'Support 100+ languages',
        'Reduce voice-over costs by 70%',
        'Enable 24/7 voice services'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Speech Synthesis',
      technologies: ['Neural TTS', 'WaveNet', 'Tacotron', 'Voice Cloning', 'Audio Processing', 'Cloud Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Voice Analytics & Insights',
      description: 'Analyze voice data to extract insights, sentiment, and behavioral patterns for business intelligence.',
      icon: '📊',
      price: '$2,000/month',
      features: [
        'Sentiment Analysis',
        'Emotion Detection',
        'Speaker Analytics',
        'Call Quality Metrics',
        'Trend Analysis',
        'Custom Dashboards'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Identify training needs',
        'Optimize call center performance',
        'Reduce customer churn by 30%'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Voice Analytics',
      technologies: ['Machine Learning', 'Sentiment Analysis', 'Audio Analytics', 'Data Visualization', 'Real-time Processing', 'Business Intelligence'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const useCases = [
    {
      title: 'Call Centers',
      description: 'Automated call handling, quality monitoring, and customer insights',
      icon: '📞',
      results: ['90% call automation', '60% cost reduction', '40% satisfaction increase']
    },
    {
      title: 'Healthcare',
      description: 'Medical transcription, patient monitoring, and voice-based diagnostics',
      icon: '🏥',
      results: ['95% transcription accuracy', '70% time savings', '50% error reduction']
    },
    {
      title: 'Education',
      description: 'Language learning, accessibility features, and voice-based learning',
      icon: '🎓',
      results: ['80% learning improvement', '90% accessibility', '60% engagement increase']
    },
    {
      title: 'Entertainment',
      description: 'Voice assistants, interactive content, and personalized experiences',
      icon: '🎮',
      results: ['24/7 availability', 'Personalized content', 'Enhanced user experience']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Processing - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice processing solutions for speech recognition, text-to-speech, and voice analytics. Achieve 95%+ accuracy with real-time processing." />
        <meta name="keywords" content="voice processing, speech recognition, text-to-speech, voice analytics, speech synthesis, AI voice" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-processing" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Voice Processing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform speech into actionable insights with advanced AI voice processing solutions for recognition, synthesis, and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Voice Processing Services</h2>
              <p className="text-xl text-gray-300">Advanced AI-powered voice solutions for modern applications</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {voiceServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-cyan-400">${service.price.replace('$', '').replace('/month', '')}</span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="tel:+13024640950"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Use Cases</h2>
              <p className="text-xl text-gray-300">See how voice processing transforms different industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-cyan-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Hear the Future with AI Voice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your voice data into powerful insights and create engaging voice experiences with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AIVoiceProcessingPage;