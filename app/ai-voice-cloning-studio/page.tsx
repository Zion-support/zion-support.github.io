import React from 'react';
import { 
  Mic, 
  Play, 
  Settings, 
  Users, 
  Zap, 
  CheckCircle, 
  Brain,
  Volume2,
  FileAudio,
  Globe
} from 'lucide-react';
<<<<<<< HEAD
import React from 'react';
import {   Mic, 
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Mic, Play, Settings, Users, Zap, CheckCircle, Brain, Volume2, FileAudio, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Pause } from 'lucide-react';
import { Download } from 'lucide-react';
import { Upload } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Play } from 'lucide-react';
import { Volume2 } from 'lucide-react';
import { Mic } from 'lucide-react';
  Play, 
  Settings, 
  Users, 
  Zap, 
  CheckCircle, 
  Brain,
  Volume2,
  FileAudio,
  Globe
} from 'lucide-react';
const AIVoiceCloningStudioPage = () => {
  return null;
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
=======

interface VoiceCloningStudioProps {}
  className?: string;
}

export default function VoiceCloningStudio({ className = '' }: VoiceCloningStudioProps) {}
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVoice, setCurrentVoice] = useState('default');
  const [textToSpeak, setTextToSpeak] = useState('');
  const [voiceSettings, setVoiceSettings] = useState({)}
    pitch: 0,
    speed: 1,
    emotion: 'neutral',
    language: 'en-US'
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);</string></<<<string>const</string></<<string>voices</string> = [
    { id: 'default', name: 'Default Voice', gender: 'Neutral', accent: 'American' },
    { id: 'male1', name: 'Professional Male', gender: 'Male', accent: 'British' },
    { id: 'female1', name: 'Warm Female', gender: 'Female', accent: 'Australian' },
    { id: 'male2', name: 'Deep Male', gender: 'Male', accent: 'American' },
    { id: 'female2', name: 'Energetic Female', gender: 'Female', accent: 'Canadian' },
    { id: 'neutral', name: 'Neutral AI', gender: 'Neutral', accent: 'International' }
  ];

  const emotions = [
    'neutral', 'happy', 'sad', 'angry', 'excited', 'calm', 'confident', 'friendly'
  ];

  const languages = [
    { code: 'en-US', name: 'English (US)' },
    { code: 'en-GB', name: 'English (UK)' },
    { code: 'es-ES', name: 'Spanish' },
    { code: 'fr-FR', name: 'French' },
    { code: 'de-DE', name: 'German' },
    { code: 'it-IT', name: 'Italian' },
    { code: 'pt-BR', name: 'Portuguese' },
    { code: 'ja-JP', name: 'Japanese' },
    { code: 'ko-KR', name: 'Korean' },
    { code: 'zh-CN', name: 'Chinese' }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

const AiVoiceCloningStudioPage: React.FC = () => {
  const features = [
<<<<<<< HEAD
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
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Ai Voice Cloning Studio - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai voice cloning studio solution for modern businesses." />
        <meta name="keywords" content="AI ai voice cloning studio, artificial intelligence, ai voice cloning studio, AI solutions, intelligent automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Voice Cloning Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai voice cloning studio solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
=======
    {}
      title: "Real-time Voice Cloning",
      description: "Clone any voice with just 30 seconds of audio sample",
      icon: Mic;
      price: "Included"},
    {}
      title: "Multi-language Support",
      description: "Generate speech in 50+ languages with native accents",
      icon: Globe;
      price: "Included"},
    {}
      title: "Emotion Control",
      description: "Add emotions like happiness, sadness, excitement to your voice",
      icon: Heart;
      price: "Included"},
    {}
      title: "Voice Customization",
      description: "Adjust pitch, speed, tone, and other voice parameters",
      icon: Settings;
      price: "Included"},
    {}
      title: "Batch Processing",
      description: "Process multiple audio files simultaneously",
      icon: FileAudio;
      price: "Pro Feature"},
    {}
      title: "API Integration",
      description: "Integrate voice cloning into your applications",
      icon: Code;
      price: "Enterprise"}
  ];

  const pricingPlans = [
    {}
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for content creators and small businesses",
      features: [
        "5 voice clones",
        "100 minutes/month",
        "Basic emotions",
        "Standard quality",
        "Email support"
      ],
      popular: false;
    },
    {}
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for agencies and growing businesses",
      features: [
        "25 voice clones",
        "500 minutes/month",
        "All emotions",
        "High quality",
        "Priority support",
        "API access"
      ],
      popular: true;
    },
    {}
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited voice clones",
        "Unlimited minutes",
        "Custom emotions",
        "Premium quality",
        "24/7 support",
        "Custom integration",
        "SLA guarantee"
      ],
      popular: false;
    }
  ];

  const handleStartRecording = () => {}
    setIsRecording(true);
    // Simulate recording process
    setTimeout(() => {}
      setIsRecording(false);
    }, 3000);
  };

  const handleGenerateVoice = async () => {}
    if (!textToSpeak.trim()) return;

    setIsGenerating(true);
    // Simulate voice generation
    setTimeout(() => {}
      setGeneratedAudio('generated-audio-url');
      setIsGenerating(false);
    }, 2000);
  };

  const handlePlayAudio = () => {}
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${className}`}></div>
      <Helmet></Helmet>
        <title>AI Voice Cloning Studio Pro - Professional Voice Synthesis | Zion Tech Group</title>
        <meta name="description" content="Create realistic voice clones with AI Voice Cloning Studio Pro. Professional voice synthesis, emotion control, and multi-language support for content creators and businesses." />
        <meta name="keywords" content="voice cloning, AI voice synthesis, voice generation, text to speech, voice customization, content creation" />)
        <link rel="canonical" href="https: //ziontechgroup.com/ai-voice-cloning-studio" />)
      </Helmet>)
),
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http: //www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center bg-purple-500/10 border border-purple-400/20 rounded-full px-6 py-3 mb-8"></div>
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">AI Voice Cloning Studio Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text"></h1>
              Professional Voice Synthesis;
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"></p>
              Clone Any Voice with AI Precision;
            </p>
,
            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">,
              Create realistic voice clones with just 30 seconds of audio. Perfect for content creators;
              businesses, and developers. Support for 50+ languages with emotion control and real-time processing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"></div>
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"></button>
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="$2" />
              </button>

              <button className="group inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"></button>
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>,
,
            {/* Stats */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Try Voice Cloning Now
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Experience the power of AI voice cloning with our interactive demo;
            </p>
          </div>

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
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Select Voice;
                    </label>
                    <select;
                      value={currentVoice}
                      onChange={(e) => setCurrentVoice(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                    >
                      {voices.map((voice) => (}
                        <option key={voice.id} value={voice.id} className="bg-slate-800"></option>
                          {voice.name} ({voice.gender}, {voice.accent})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Voice Settings */}
                  <div className="grid grid-cols-2 gap-4"></div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2"></label>
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
                      <label className="block text-sm font-medium text-gray-300 mb-2"></label>
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
                      <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                        Emotion;
                      </label>
                      <select;
                        value={voiceSettings.emotion}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, emotion: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        {emotions.map((emotion) => (}
                          <option key={emotion} value={emotion} className="bg-slate-800 capitalize"></option>
                            {emotion}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div></div>
                      <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                        Language;
                      </label>
                      <select;
                        value={voiceSettings.language}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, language: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                      >
                        {languages.map((lang) => (}
                          <option key={lang.code} value={lang.code} className="bg-slate-800"></option>
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
                  ></button>
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
                    {generatedAudio ? (}
                      <div className="space-y-4"></div>
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto"></div>
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-300">Audio Generated Successfully!</p>
                        <div className="flex justify-center space-x-4"></div>
                          <button
                            onClick={handlePlayAudio}
                            className="bg-purple-500 hover: bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors",
                          >,
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                          <button className="bg-gray-600 hover: bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"></button>
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ) : (
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
                    <p className="text-gray-400 text-sm"></p>
                      Record 30 seconds of your voice to create a custom voice clone;
                    </p>
                    <button;
                      onClick={handleStartRecording}
                      disabled={isRecording}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    ></button>
                      {isRecording ? (}
                        <>
                          <div className="$2" />
                          Recording... (30s)
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
                    <p className="text-gray-400 text-sm"></p>
                      Upload an audio file (MP3, WAV, M4A) to create a voice clone;
                    </p>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-purple-400 transition-colors cursor-pointer"></div>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Click to upload or drag and drop</p>
                      <p className="text-gray-500 text-sm">MP3, WAV, M4A up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Everything you need to create professional voice content;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-800"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto"></p>
              Choose the plan that fits your needs. All plans include our core voice cloning features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-purple-400/50 ring-2 ring-purple-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-purple-400/50 ring-2 ring-purple-400/30' : 'border-white/10'}`}></div>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-sm font-bold px-4 py-2 rounded-full"></span>
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

                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center"></li>
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}></button>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto"></p>
              Contact our team to discuss your voice cloning needs and get a custom quote.
            </p>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4"></div>
                  <div className="flex items-center"></div>
                    <Phone className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-purple-400 transition-colors"></a>
                      +1 (302) 464-0950;
                    </a>
                  </div>
                  <div className="flex items-center"></div>
                    <Mail className="w-5 h-5 text-purple-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-purple-400 transition-colors"></a>
                      kleber@ziontechgroup.com;
                    </a>
                  </div>
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
                <button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-4 px-6 rounded-lg hover: from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"></button>
                  Start Free Trial;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

  return null;
};

export default function AiVoiceCloningStudioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Voice Cloning Studio - Zion Tech Group</title>
        <meta name="description" content="Ai Voice Cloning Studio solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Voice Cloning Studio</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai voice cloning studio solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}