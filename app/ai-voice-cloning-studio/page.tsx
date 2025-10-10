'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    {}
      title: "Real-time Voice Cloning",
      description: "Clone any voice with just 30 seconds of audio sample",
      icon: Mic,
      price: "Included"},
    {}
      title: "Multi-language Support",
      description: "Generate speech in 50+ languages with native accents",
      icon: Globe,
      price: "Included"},
    {}
      title: "Emotion Control",
      description: "Add emotions like happiness, sadness, excitement to your voice",
      icon: Heart,
      price: "Included"},
    {}
      title: "Voice Customization",
      description: "Adjust pitch, speed, tone, and other voice parameters",
      icon: Settings,
      price: "Included"},
    {}
      title: "Batch Processing",
      description: "Process multiple audio files simultaneously",
      icon: FileAudio,
      price: "Pro Feature"},
    {}
      title: "API Integration",
      description: "Integrate voice cloning into your applications",
      icon: Code,
      price: "Enterprise"}
  ];

  const pricingPlans = [
    {
      name: "Starter"
    {}
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for content creators and small businesses",
      features: [,
        "5 voice clones",
        "100 minutes/month",
        "Basic emotions",
        "Standard quality",
        "Email support"
      ],
      popular: false,
    },
    {
      name: "Professional"
    {}
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for agencies and growing businesses",
      features: [,
        "25 voice clones",
        "500 minutes/month",
        "All emotions",
        "High quality",
        "Priority support",
        "API access"
      ],
      popular: true,
    },
    {
      name: "Enterprise"
    {}
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with custom needs",
      features: [,
        "Unlimited voice clones",
        "Unlimited minutes",
        "Custom emotions",
        "Premium quality",
        "24/7 support",
        "Custom integration",
        "SLA guarantee"
      ],
      popular: false,
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  const handleGenerateVoice = async () => {}
    if (!textToSpeak.trim()) return;

    setIsGenerating(true);
    // Simulate voice generation;
    setTimeout(() => {
    // Simulate voice generation
    setTimeout(() => {}
      setGeneratedAudio('generated-audio-url');
      setIsGenerating(false);
    }, 2000);
  };

  const handlePlayAudio = () => {}
    setIsPlaying(!isPlaying);
  };

  return(<div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}>
  return (</div>
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}></div>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
      <div className="relative py-20 overflow-hidden"></div>
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-400/20 rounded-full px-6 py-3 mb-8"></div>
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">AI Voice Cloning Studio Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Professional Voice Synthesis;</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
,
            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">,
              Create realistic voice clones with just 30 seconds of audio. Perfect for content creators;
              businesses, and developers. Support for 50+ languages with emotion control and real-time processing.
            </p>

            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" /></div>
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>,
,
            {/* Stats */}
            <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"></div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400">Languages</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-400">Accuracy</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">30s</div>
                <div className="text-gray-400">Sample Time</div>
              </div>
              <div className="text-center"></div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400">Processing</div>
              </div>
            </div>,
          </div>,
        </div>,
      </div>,
,
      {/* Voice Cloning Interface */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Try Voice Cloning Now;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Try Voice Cloning Now
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI voice cloning with our interactive demo;
            </p>
          </div>
,
          <div className="max-w-6xl mx-auto">,</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">,
              {/* Voice Input Section */}</div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">

          <div className="max-w-6xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
              {/* Voice Input Section */}</div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <Mic className="w-8 h-8 text-purple-400 mr-3" />
                  Voice Input;
                </h3>

                <div className="space-y-6"></div>
                  {/* Text Input */}</div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Text to Convert;
                    </label>
                    <textarea;
                      value={textToSpeak}
                      onChange={(e) => setTextToSpeak(e.target.value)}
                      placeholder="Enter the text you want to convert to speech..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 resize-none",
                      rows={4}
                    />
                  </div>

                  {/* Voice Selection */}
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Voice;
                    </label>
                    <select;
                      value={currentVoice}
                      onChange={(e) => setCurrentVoice(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20",
                    >,
                      {voices.map((voice) => (,
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                    >
                      {voices.map((voice) => (}
                        <option key={voice.id} value={voice.id} className="bg-slate-800">
                          {voice.name} ({voice.gender}, {voice.accent})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Voice Settings */}
                  <div className="grid grid-cols-2 gap-4"></div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Pitch: {voiceSettings.pitch}
                      </label>
                      <input;
                        type="range"
                        min="-10"
                        max="10"
                        value={voiceSettings.pitch}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, pitch: parseInt(e.target.value) }))}</input></<<<input>className</input></input>="w-full"
                      />
                    </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Speed: {voiceSettings.speed}x;
                      </label>
                      <input;
                        type="range"
                        min="0.5"
                        max="2"
                        step="0.1"
                        value={voiceSettings.speed}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}</input></<<<input>className</input></input>="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4"></div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Emotion;
                      </label>
                      <select;
                        value={voiceSettings.emotion}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, emotion: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20",
                      >,
                        {emotions.map((emotion) => (,
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        {emotions.map((emotion) => (}
                          <option key={emotion} value={emotion} className="bg-slate-800 capitalize">
                            {emotion}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Language;
                      </label>
                      <select;
                        value={voiceSettings.language}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, language: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20",
                      >,
                        {languages.map((lang) => (,
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        {languages.map((lang) => (}
                          <option key={lang.code} value={lang.code} className="bg-slate-800">
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <button;
                    onClick={handleGenerateVoice}
                    disabled={!textToSpeak.trim() || isGenerating}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isGenerating ? (}
                      <>
                        <RefreshCw className="w-5 h-5 mr-2 animate-spin inline" />
                        Generating Voice...
                      </>
                    ) : (,
                      <>,
                        <Zap className="w-5 h-5 mr-2 inline" />,
                        Generate Voice;
                      </>)}
                  </button>
                </div>
              </div>

              {/* Audio Output Section */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center"></h3>
                  <Volume2 className="w-8 h-8 text-purple-400 mr-3" />
                  Generated Audio;
                </h3>

                <div className="space-y-6"></div>
                  {/* Audio Player */}</div>
                  <div className="bg-white/5 rounded-lg p-6 text-center"></div>
                    {generatedAudio ? (</div>
                      <div className="space-y-4"></div>
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto"></div>
                    {generatedAudio ? (}
                      <div className="space-y-4"></div>
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto"></div>
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-300">Audio Generated Successfully!</p>
                        <div className="flex justify-center space-x-4"></div>
                          <button;
                        <div className="flex justify-center space-x-4"></div>
                          <button
                            onClick={handlePlayAudio}
                            className="bg-purple-500 hover: bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors",
                          >,
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                          <button className="bg-gray-600 hover: bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4"></div>
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto">,</div>
                          <FileAudio className="w-8 h-8 text-gray-400" />,
                        </div>,
                        <p className="text-gray-400">Generate audio to hear the result</p>,
                      </div>,
                      <div className="space-y-4"></div>
                        <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto"></div>
                          <FileAudio className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-400">Generate audio to hear the result</p>
                      </div>
                    )}
                  </div>

                  {/* Recording Section */}
                  <div className="space-y-4"></div>
                    <h4 className="text-lg font-semibold text-white">Record Your Voice</h4>
                    <p className="text-gray-400 text-sm">
                      Record 30 seconds of your voice to create a custom voice clone;
                    </p>
                    <button;
                      onClick={handleStartRecording}
                      disabled={isRecording}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isRecording ? (}
                        <>
                          <div className="$2" />
                          Recording... (30s)</div>
                        </>
                      ) : (,
                        <>,
                          <Mic className="w-5 h-5 mr-2 inline" />,
                          Start Recording;
                        </>)}
                    </button>
                  </div>

                  {/* Upload Section */}
                  <div className="space-y-4"></div>
                    <h4 className="text-lg font-semibold text-white">Upload Audio File</h4>
                    <p className="text-gray-400 text-sm">
                      Upload an audio file (MP3, WAV, M4A) to create a voice clone;
                    </p>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover: border-purple-400 transition-colors cursor-pointer">,</div>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />,
                      <p className="text-gray-400">Click to upload or drag and drop</p>,
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer"></div>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Click to upload or drag and drop</p>
                      <p className="text-gray-500 text-sm">MP3, WAV, M4A up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Powerful Features;
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover: bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between"></div>
                  <span className="text-purple-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
              Simple Pricing;
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
            {pricingPlans.map((plan, index) => (</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-purple-400/50 ring-2 ring-purple-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-purple-400/50 ring-2 ring-purple-400/30' : 'border-white/10'}`}>
                {plan.popular && (}</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover: from-purple-600 hover:to-pink-700 transform hover:scale-105'}
                    : 'bg-white/10 text-white hover:bg-white/20'}
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors">
                      +1 (302) 464-0950;
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                      kleber@ziontechgroup.com;
                    </a>
                  </div>
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />,
                    <div className="text-gray-300">,</div>
                      <div>364 E Main St STE 1008</div>,
                  <div className="flex items-start"></div>
                    <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                    <div className="text-gray-300"></div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Quick Start</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free 14-day trial</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">No credit card required</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Cancel anytime</span>
                  </div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
