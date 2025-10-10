'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Settings, 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Pause, 
  RotateCcw,
  Languages,
  Headphones,
  MessageSquare,
  Phone,
  Video,
  FileText,
  Calendar,
  Mail,
  Search,
  Command,
  Sparkles,
  Bot,
  Cpu,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en-US');
  const [voiceMode, setVoiceMode] = useState('conversational');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP with 99.5% accuracy in understanding context and intent',
      stats: '99.5% accuracy'
    },
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages with real-time translation capabilities',
      stats: '50+ languages'
    },
    {
      icon: Headphones,
      title: 'Custom Voice Training',
      description: 'Train the AI with your voice patterns and speaking style',
      stats: 'Custom voices'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Ultra-low latency voice processing for natural conversations',
      stats: '<100ms latency'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'End-to-end encryption with local processing options',
      stats: 'Bank-level security'
    },
    {
      icon: Globe,
      title: 'Cloud & Edge Computing',
      description: 'Hybrid processing for optimal performance and privacy',
      stats: 'Hybrid processing'
    }
  ];

  const capabilities = [
    {
      category: 'Productivity',
      items: [
        'Schedule meetings and appointments',
        'Send emails and messages',
        'Create and edit documents',
        'Set reminders and alarms',
        'Manage calendar events',
        'Take voice notes'
      ]
    },
    {
      category: 'Communication',
      items: [
        'Make phone calls',
        'Send text messages',
        'Video conference calls',
        'Voice-to-text transcription',
        'Real-time translation',
        'Voice mail management'
      ]
    },
    {
      category: 'Information',
      items: [
        'Answer questions',
        'Provide weather updates',
        'News and updates',
        'Web search results',
        'Calculate and convert',
        'Look up contacts'
      ]
    },
    {
      category: 'Entertainment',
      items: [
        'Play music and podcasts',
        'Tell jokes and stories',
        'Play games',
        'Read audiobooks',
        'Control smart devices',
        'Stream content'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and personal use',
      features: [
        '1 voice profile',
        '5 languages',
        'Basic commands',
        'Cloud processing',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for professionals and small teams',
      features: [
        '3 voice profiles',
        '15 languages',
        'Advanced commands',
        'Custom voice training',
        'Priority support',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and businesses',
      features: [
        'Unlimited voice profiles',
        'All 50+ languages',
        'Custom integrations',
        'On-premise deployment',
        '24/7 support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'The AI Voice Assistant has revolutionized how I manage my daily tasks. The natural conversation flow is incredible.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'We use it for our international team meetings. The real-time translation feature is a game-changer.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      role: 'Executive Assistant',
      company: 'Global Inc',
      content: 'Scheduling and managing my executive\'s calendar has never been easier. The AI understands context perfectly.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">{/* Animated Background *</100ms latency'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'End-to-end encryption with local processing options',
      stats: 'Bank-level security'
    },
    {
      icon: Globe,
      title: 'Cloud & Edge Computing',
      description: 'Hybrid processing for optimal performance and privacy',
      stats: 'Hybrid processing'
    }
  ];

  const capabilities = [
    {
      category: 'Productivity',
      items: [
        'Schedule meetings and appointments',
        'Send emails and messages',
        'Create and edit documents',
        'Set reminders and alarms',
        'Manage calendar events',
        'Take voice notes'
      ]
    },
    {
      category: 'Communication',
      items: [
        'Make phone calls',
        'Send text messages',
        'Video conference calls',
        'Voice-to-text transcription',
        'Real-time translation',
        'Voice mail management'
      ]
    },
    {
      category: 'Information',
      items: [
        'Answer questions',
        'Provide weather updates',
        'News and updates',
        'Web search results',
        'Calculate and convert',
        'Look up contacts'
      ]
    },
    {
      category: 'Entertainment',
      items: [
        'Play music and podcasts',
        'Tell jokes and stories',
        'Play games',
        'Read audiobooks',
        'Control smart devices',
        'Stream content'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and personal use',
      features: [
        '1 voice profile',
        '5 languages',
        'Basic commands',
        'Cloud processing',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for professionals and small teams',
      features: [
        '3 voice profiles',
        '15 languages',
        'Advanced commands',
        'Custom voice training',
        'Priority support',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and businesses',
      features: [
        'Unlimited voice profiles',
        'All 50+ languages',
        'Custom integrations',
        'On-premise deployment',
        '24/7 support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'The AI Voice Assistant has revolutionized how I manage my daily tasks. The natural conversation flow is incredible.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'We use it for our international team meetings. The real-time translation feature is a game-changer.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      role: 'Executive Assistant',
      company: 'Global Inc',
      content: 'Scheduling and managing my executive\'s calendar has never been easier. The AI understands context perfectly.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">/</100ms latency'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'End-to-end encryption with local processing options',
      stats: 'Bank-level security'
    },
    {
      icon: Globe,
      title: 'Cloud & Edge Computing',
      description: 'Hybrid processing for optimal performance and privacy',
      stats: 'Hybrid processing'
    }
  ];

  const capabilities = [
    {
      category: 'Productivity',
      items: [
        'Schedule meetings and appointments',
        'Send emails and messages',
        'Create and edit documents',
        'Set reminders and alarms',
        'Manage calendar events',
        'Take voice notes'
      ]
    },
    {
      category: 'Communication',
      items: [
        'Make phone calls',
        'Send text messages',
        'Video conference calls',
        'Voice-to-text transcription',
        'Real-time translation',
        'Voice mail management'
      ]
    },
    {
      category: 'Information',
      items: [
        'Answer questions',
        'Provide weather updates',
        'News and updates',
        'Web search results',
        'Calculate and convert',
        'Look up contacts'
      ]
    },
    {
      category: 'Entertainment',
      items: [
        'Play music and podcasts',
        'Tell jokes and stories',
        'Play games',
        'Read audiobooks',
        'Control smart devices',
        'Stream content'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and personal use',
      features: [
        '1 voice profile',
        '5 languages',
        'Basic commands',
        'Cloud processing',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for professionals and small teams',
      features: [
        '3 voice profiles',
        '15 languages',
        'Advanced commands',
        'Custom voice training',
        'Priority support',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and businesses',
      features: [
        'Unlimited voice profiles',
        'All 50+ languages',
        'Custom integrations',
        'On-premise deployment',
        '24/7 support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'The AI Voice Assistant has revolutionized how I manage my daily tasks. The natural conversation flow is incredible.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'We use it for our international team meetings. The real-time translation feature is a game-changer.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      role: 'Executive Assistant',
      company: 'Global Inc',
      content: 'Scheduling and managing my executive\'s calendar has never been easier. The AI understands context perfectly.',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">}</div></100ms>
     <//100ms> <//100ms><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
   </div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" /> </div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" /> </div> </div>
               <//div> <//div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} >{/* Floating Particles </div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} >*</div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} >/</div>}<//div><div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}><div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}><div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}><div className="relative z-10">{/* Header </div className="relative z-10">*</div className="relative z-10">/</div>}</div>
       <//div> <//div><div className="container mx-auto px-4 py-16">
         </div className="container mx-auto px-4 py-16"> </div className="container mx-auto px-4 py-16"><div className="text-center mb-16">
           </div className="text-center mb-16"> </div className="text-center mb-16"><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-cyan-400/30">
            </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-cyan-400/30"> </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-cyan-400/30"> </div><Bot className="w-5 h-5 text-cyan-400" />
             </Bot className="w-5 h-5 text-cyan-400" /> </Bot className="w-5 h-5 text-cyan-400" /><span className="text-cyan-400 font-medium">AI Voice Assistant P</span className="text-cyan-400 font-medium">r</span className="text-cyan-400 font-medium">o</span><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Voice Assistant P</h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">r</h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">o</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">Advanced AI-powered voice assistant with natural language processing, 
              multi-language support, and custom voice training. Transform how yo</p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">u</p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"> </p>
              interact with technology through intelligent voice command<//p>s<//p>.</p>

            {/* Interactive Demo */}
           <//p> <//p><div className="max-w-2xl mx-auto mb-12">
             </div className="max-w-2xl mx-auto mb-12"> </div className="max-w-2xl mx-auto mb-12"><div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
               </div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"> </div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"><div className="flex items-center justify-center space-x-4 mb-6">
                 </div className="flex items-center justify-center space-x-4 mb-6"> </div className="flex items-center justify-center space-x-4 mb-6"><div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening ? 'bg-red-500 animate-pulse' : 'bg-cyan-500'
                  }`}>
                    {isListening </div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening ? 'bg-red-500 animate-pulse' : 'bg-cyan-500'
                  }`}>?</div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening ? 'bg-red-500 animate-pulse' : 'bg-cyan-500'
                  }`}> </div><MicOff className="w-8 h-8 text-white" >:</MicOff className="w-8 h-8 text-white" > </MicOff className="w-8 h-8 text-white" ><Mic className="w-8 h-8 text-white" >}</Mic>
                <//Mic> <//Mic> </Mic>
                 <//Mic> <//Mic><div className="text-center">
                  </div className="text-center"> </div className="text-center"> </div><h3 className="text-lg font-semibold mb-2">Try Voice Command</h3 className="text-lg font-semibold mb-2">s</h3 className="text-lg font-semibold mb-2"><p className="text-gray-400 text-sm">Click the microphone to sta</p className="text-gray-400 text-sm">r</p className="text-gray-400 text-sm">t</p>
                <//p> <//p> </div>
              <//div> <//div> </div>
                
               <//div> <//div><div className="space-y-3">
                </div className="space-y-3"> </div className="space-y-3"> </div><button 
                    onClick={() =>setIsListening(!isListening)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                 </button 
                    onClick={() => </button 
                    onClick={() =>></button>
                    {isListening ? 'Stop Listening' : 'Start Listening<//button>'<//button>}</button>
                <//button> <//button> </button>
                  
                 <//button> <//button><div className="flex space-x-2">
                  </div className="flex space-x-2"> </div className="flex space-x-2"> </div><button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors">
                     </button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"> </button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"><Play className="w-4 h-4 mx-auto" />
                  </Play className="w-4 h-4 mx-auto" /> </Play className="w-4 h-4 mx-auto" /> </button>
                   <//button> <//button><button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors">
                     </button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"> </button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"><Pause className="w-4 h-4 mx-auto" />
                  </Pause className="w-4 h-4 mx-auto" /> </Pause className="w-4 h-4 mx-auto" /> </button>
                   <//button> <//button><button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors">
                     </button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"> </button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"><RotateCcw className="w-4 h-4 mx-auto" />
                  </RotateCcw className="w-4 h-4 mx-auto" /> </RotateCcw className="w-4 h-4 mx-auto" /> </button>
                <//button> <//button> </div>
              <//div> <//div> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>

            {/* CTA Buttons */}
           <//div> <//div><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">Start Free Tri</button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">a</button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">l</button>
               <//button> <//button><ArrowRight className="w-5 h-5 ml-2" />
            </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
             <//button> <//button><button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
               </button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"> </button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"><Play className="w-5 h-5 mr-2" >Watch De</Play className="w-5 h-5 mr-2" >m</Play className="w-5 h-5 mr-2" >o</Play>
            <//Play> <//Play> </Play>
          <//Play> <//Play> </div>
        <//div> <//div> </div>

          {/* Features Grid */}
         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">{features.map((feature, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"> </div>(</div>
             <//div> <//div><div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group">
               </div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group"><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                </div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> </div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"> </div><feature.icon className="w-6 h-6 text-white" />
               </feature.icon className="w-6 h-6 text-white" /> </feature.icon className="w-6 h-6 text-white" /><h3 className="text-xl font-semibold mb-2 text-white">{feature.titl</h3 className="text-xl font-semibold mb-2 text-white">e</h3 className="text-xl font-semibold mb-2 text-white">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-3">{feature.description</p className="text-gray-300 mb-3">}</p className="text-gray-300 mb-3"><div className="text-cyan-400 font-semibold text-sm">{feature.sta</div className="text-cyan-400 font-semibold text-sm">t</div className="text-cyan-400 font-semibold text-sm">s</div>}</div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>

          {/* Capabilities */}
         <//div> <//div><div className="mb-20">
          </div className="mb-20"> </div className="mb-20"> </div><h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Powerful Capabilitie</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">s</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{capabilities.map((category, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
               <//div> <//div><div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                </div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"> </div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20"> </div><h3 className="text-xl font-semibold mb-4 text-purple-400">{category.category</h3 className="text-xl font-semibold mb-4 text-purple-400">}</h3 className="text-xl font-semibold mb-4 text-purple-400"><ul className="space-y-2">{category.items.map((item, itemIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                     <//ul> <//ul><li key={itemIndex} className="flex items-center text-gray-300">
                       </li key={itemIndex} className="flex items-center text-gray-300"> </li key={itemIndex} className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                       </CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /><span className="text-sm">{it</span className="text-sm">e</span className="text-sm">m</span>}</span>
                    <//span> <//span> </li>
                    ))}
                <//li> <//li> </ul>
              <//ul> <//ul> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>

          {/* Pricing */}
         <//div> <//div><div className="mb-20">
          </div className="mb-20"> </div className="mb-20"> </div><h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Simple, Transparent Pricin</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">g</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => </div className="grid grid-cols-1 md:grid-cols-3 gap-8">(</div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-gray-600'
                }`}>{plan.popular &</div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-gray-600'
                }`}>&</div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' : 'border-gray-600'
                }`}> </div>(</div>
                   <//div> <//div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                   </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div> </div>
               <//div> <//div><div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popu</div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">l</div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">a</div>r</div>
                  <//div> <//div> </div>
                  )}
                  
                 <//div> <//div><div className="text-center mb-6">
                  </div className="text-center mb-6"> </div className="text-center mb-6"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name</h3 className="text-2xl font-bold text-white mb-2">}</h3 className="text-2xl font-bold text-white mb-2"><p className="text-gray-400 mb-4">{plan.descriptio</p className="text-gray-400 mb-4">n</p className="text-gray-400 mb-4">}</p>
                   <//p> <//p><div className="flex items-baseline justify-center">
                    </div className="flex items-baseline justify-center"> </div className="flex items-baseline justify-center"> </div><span className="text-4xl font-bold text-white">{plan.pric</span className="text-4xl font-bold text-white">e</span className="text-4xl font-bold text-white">}</span><span className="text-gray-400 ml-1">{plan.perio</span className="text-gray-400 ml-1">d</span className="text-gray-400 ml-1">}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) =></ul className="space-y-3 mb-8"> </ul className="space-y-3 mb-8">(</ul>
                     <//ul> <//ul><li key={featureIndex} className="flex items-center text-gray-300">
                       </li key={featureIndex} className="flex items-center text-gray-300"> </li key={featureIndex} className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                       </CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /><span>{featu</span>r</span>e</span>}</span>
                    <//span> <//span> </li>
                    ))}
                 <//li> <//li><button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>{plan.ct</button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>a</button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>}</button>
                <//button> <//button> </button>
              <//button> <//button> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>

          {/* Testimonials */}
         <//div> <//div><div className="mb-20">
          </div className="mb-20"> </div className="mb-20"> </div><h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">What Our Users Sa</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">y</h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) =</div className="grid grid-cols-1 md:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-3 gap-8"> </div>(</div>
               <//div> <//div><div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                 </div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20"> </div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20"><div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) =></div className="flex items-center mb-4"> </div className="flex items-center mb-4">(</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >}</Star key={i} className="w-5 h-5 text-yellow-400 fill-current" ><p className="text-gray-300 mb-4 italic">"{testimonial.content</p className="text-gray-300 mb-4 italic">}</p className="text-gray-300 mb-4 italic">"</p>
                 <//p> <//p><div className="flex items-center">
                 </div className="flex items-center"> </div className="flex items-center"> </div> </div>
               <//div> <//div><div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">{testimonial.avat</div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">a</div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">r</div>}</div>
                   <//div> <//div><div>
                      </div><div className="font-semibold text-white">{testimonial.na</div className="font-semibold text-white">m</div className="font-semibold text-white">e</div>}</div>
               <//div> <//div><div className="text-sm text-gray-400">{testimonial.role}, {testimonial.compa</div className="text-sm text-gray-400">n</div className="text-sm text-gray-400">y</div>}</div>
                <//div> <//div> </div>
              <//div> <//div> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>

          {/* CTA Section */}
         <//div> <//div><div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30">
          </div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30"> </div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30"> </div><h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Voice Experienc</h2 className="text-3xl font-bold mb-4 text-white">e</h2 className="text-3xl font-bold mb-4 text-white">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of users who have revolutionized their productivity with AI Voice Assistant Pr</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">o</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">Start Your Free Tri</button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">a</button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">l</button>
               <//button> <//button><ArrowRight className="w-5 h-5 ml-2" />
            </ArrowRight className="w-5 h-5 ml-2" /> </ArrowRight className="w-5 h-5 ml-2" /> </button>
             <//button> <//button><button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
               </button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"> </button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"><Phone className="w-5 h-5 mr-2" >Contact Sal</Phone className="w-5 h-5 mr-2" >e</Phone className="w-5 h-5 mr-2" >s</Phone>
            <//Phone> <//Phone> </Phone>
          <//Phone> <//Phone> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </div>
  <//div> <//div> </div>
  );
};

export default AIVoiceAssistantPage<//div>;<//div>