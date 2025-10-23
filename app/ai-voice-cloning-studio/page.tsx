'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Cloning Studio Pro - Professional Voice Synthesis | Zion Tech Group</title>
        <meta name="description" content="Create realistic voice clones with AI Voice Cloning Studio Pro. Professional voice synthesis, emotion control, and multi-language support for content creators and businesses." />
        <meta name="keywords" content="AI, artificial intelligence, Page, AI solutions, intelligent automation" />
      </Helmet>
{/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-400/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">AI Voice Cloning Studio Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">Professional Voice Synthesis</h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Clone Any Voice with AI Precision</p>

            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">Create realistic voice clones with just 30 seconds of audio. Perfect for content creators,</p>
              businesses, and developers. Support for 50+ languages with emotion control and real-time processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Voice Cloning Interface */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Try Voice Cloning Now</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of AI voice cloning with our interactive demo</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">{/* Voice Input Section */}</div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Mic className="w-8 h-8 text-purple-400 mr-3" />
                  Voice Input
                </h3>

                <div className="space-y-6">{/* Text Input */}</div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Text to Convert
                    </label>
                    <textarea
                      value={textToSpeak}
                      onChange={(e) => setTextToSpeak(e.target.value)}
                      placeholder="Enter the text you want to convert to speech..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 resize-none"
                      rows={4}
                    />
                  </div>

                  {/* Voice Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Voice
                    </label>
                    <select
                      value={currentVoice}
                      onChange={(e) => setCurrentVoice(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                    >
                      {voices.map((voice) => (
                        <option key={voice.id} value={voice.id} className="bg-slate-800">
                          {voice.name} ({voice.gender}, {voice.accent})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Voice Settings */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Pitch: {voiceSettings.pitch}
                      </label>
                      <input
                        type="range"
                        min="-10"
                        max="10"
                        value={voiceSettings.pitch}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, pitch: parseInt(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Speed: {voiceSettings.speed}x
                      </label>
                      <input
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={voiceSettings.speed}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Emotion
                      </label>
                      <select
                        value={voiceSettings.emotion}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, emotion: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        {emotions.map((emotion) => (
                          <option key={emotion} value={emotion} className="bg-slate-800 capitalize">
                            {emotion}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Language
                      </label>
                      <select
                        value={voiceSettings.language}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, language: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.code} className="bg-slate-800">
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <button
                    onClick={handleGenerateVoice}
                    disabled={!textToSpeak.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >{isGenerating ? (</button>
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                        Generating Voice...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2 inline" />
                        Generate Voice
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Audio Output Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Volume2 className="w-8 h-8 text-purple-400 mr-3" />
                  Generated Audio
                </h3>

                <div className="space-y-6">{/* Audio Player */}</div>
                  <div className="bg-white/5 rounded-lg p-6 text-center">{generatedAudio ? (</div>
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-300">Audio Generated Successfully!</p>
                        <div className="flex justify-center space-x-4">
                          <button
                            onClick={handlePlayAudio}
                            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors"
                          >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto">
                          <FileAudio className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-400">Generate audio to hear the result</p>
                      </div>
                    )}
                  </div>

                  {/* Recording Section */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Record Your Voice</h4>
                    <p className="text-gray-400 text-sm">Record 30 seconds of your voice to create a custom voice clone</p>
                    <button
                      onClick={handleStartRecording}
                      disabled={isRecording}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >{isRecording ? (</button>
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline"></div>
                          Recording... (30s)
                        </>
                      ) : (
                        <>
                          <Mic className="w-5 h-5 mr-2 inline" />
                          Start Recording
                        </>
                      )}
                    </button>
                  </div>

                  {/* Upload Section */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Upload Audio File</h4>
                    <p className="text-gray-400 text-sm">Upload an audio file (MP3, WAV, M4A) to create a voice clone</p>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Click to upload or drag and drop</p>
                      <p className="text-gray-500 text-sm">MP3, WAV, M4A up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Everything you need to create professional voice content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Simple Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the plan that fits your needs. All plans include our core voice cloning features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-purple-400/50 ring-2 ring-purple-400/30' : 'border-white/10'}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">Most Popular</span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>{plan.popular ? 'Get Started' : 'Choose Plan'}</button>button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Contact our team to discuss your voice cloning needs and get a custom quote.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors">+1 (302) 464-0950</a>a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">kleber@ziontechgroup.com</a>a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                    <div className="text-gray-300">
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Start</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free 14-day trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">No credit card required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Cancel anytime</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">Start Free Trial</button>button>
              </div>
            </div>
          </div>
        </section>
      
      <Footer />
    </>
  );
}
