'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mic, Brain, CheckCircle, ArrowRight, Zap, Settings, Globe, Clock, Link as LinkIcon, Workflow } from 'lucide-react';

export default function A IVoice Assistant() {
  const features = [
    {
      icon: <B rain class Name="w-6 h-6t ext-cyan-400" />,
      title: 'Natural Language Understanding',
      description: 'Advanced A I processes complex voice commands and maintains context across conversations'
    },
    {
      icon: <V olume2 class Name="w-6 h-6t ext-purple-400" />,
      title: 'Human-like Voice Synthesis',
      description: 'Generate natural, expressive speech with customizable voices and emotional tones'
    },
    {
      icon: <C lock class Name="w-6 h-6t ext-yellow-400" />,
      title: '24/7 Availability',
      description: 'Always-on voice assistant that can handle tasks, answer questions, and provide support'
    },
    {
      icon: <T arget class Name="w-6 h-6t ext-green-400" />,
      title: 'Multi-platform Integration',
      description: 'Seamlessly integrate with mobile apps, websites, smart devices, and Io T systems'
    }
  ]

  const assistant Features = [
    {
      category: 'Voice Capabilities',
      items: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Emotion Detection', 'Multi-language Support', 'Noise Cancellation']
    },
    {
      category: 'Task Management',
      items: ['Calendar Management', 'Email Handling', 'Reminder Setting', 'Task Creation', 'Meeting Scheduling', 'Note Taking']
    },
    {
      category: 'Integration',
      items: ['Mobile Apps', 'Web Applications', 'Smart Home Devices', 'C RM Systems', 'E RP Integration', 'A PI Access']
    },
    {
      category: 'Customization',
      items: ['Custom Voice Training', 'Personality Settings', 'Command Customization', 'Brand Voice', 'Response Templates', 'Workflow Automation']
    }
  ]

  const pricing Plans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 1,000 interactions/month',
        'Basic voice features',
        'Standard voices',
        'Email support',
        'Mobile app access',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 interactions/month',
        'Advanced voice features',
        'Custom voice training',
        'Priority support',
        'Advanced integrations',
        'Analytics dashboard',
        'A PI access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited interactions',
        'Custom A I training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'S LA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Park',
      company: 'Smart Home Solutions',
      content: 'A I Voice Assistant transformed our customer experience. The natural conversation flow is incredible.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Healthcare Provider',
      content: 'Our patients love the voice assistant for appointment scheduling. It handles complex requests perfectly.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Platform',
      content: 'Voice shopping has increased our sales by 40%. The voice recognition accuracy is outstanding.',
      rating: 5
    }
  ]

  return (
    <L ayout
      title="A I Voice Assistant - Intelligent Voice Solutions | Zion Tech Group"
      description="Transform user interaction with A I-powered voice assistants. Natural language processing, human-like voice synthesis, and seamless integration. Start your free trial today."
      keywords="A I voice assistant, voice A I, speech recognition, voice synthesis, conversational A I, voice automation" />
      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-32pb-20" />
          <d iv class Name="c ontainer mx-autopx-4">
        </d iv>
            <d iv class Name="t ext-center max-w-4 xlmx-auto">
        </d iv>
              <h1 c lass Name="t ext-5 xl md:text-6 xl font-bold text-whitemb-6" />
                A I <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">Voice Assistant</s pan>
              </h1>
              <p c lass Name="t ext-xl text-gray-300 mb-8leading-relaxed">
              Create intelligent voice assistants that understand natural speech, execute commands, 
                and provide hands-free automation for your business and personal needs.

              </p>
              <d iv class Name="f lex flex-col sm:flex-row gap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building
                </L ink>
                <L ink to="/ai-services" class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">View All A I Services
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainer mx-autopx-4">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-bold text-whitemb-6" />
                Powerful <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">Features</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3 xlmx-auto" />
                Everything you need to build, deploy, and manage intelligent voice assistants

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d iv key="{index}" class Name="t ext-centergroup" />
                  <d iv class Name="w-20 h-20 b g-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transformduration-300">
        </d iv>
                    <f eature.icon class Name="w-10 h-10t ext-cyan-400" / />
                  </d iv>
                  <h3 c lass Name="t ext-xl font-bold text-whitemb-4">{feature.title}</h3>
                  <p c lass Name="t ext-gray-300leading-relaxed">{feature.description}</p>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Use Cases Section */}

        <s ection class Name="p y-20 bg-gradient-to-r from-slate-800/30to-slate-900/30" />
          <d iv class Name="c ontainer mx-autopx-4">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-bold text-whitemb-6" />
                Use <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">Cases</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3 xlmx-auto" />
                Discover how our A I voice assistants can transform your business operations

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8">
        </d iv>
              {use Cases.map((use Case, index) => (

                <d iv key="{index}" class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transformhover:scale-105" />
                  <d iv class Name="w-12 h-12 b g-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transformduration-300">
        </d iv>
                    <u se Case.icon class Name="w-6 h-6t ext-cyan-400" / />
                  </d iv>
                  <h3 c lass Name="t ext-lg font-bold text-white mb-3 group-hover:text-cyan-400transition-colors">{use Case.title}
                  </h3>
                  <p c lass Name="t ext-gray-300 text-smleading-relaxed" />
                    {use Case.description}

                  </p>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainer mx-autopx-4">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-bold text-whitemb-6" />
                Simple <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">Pricing</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-3 xlmx-auto" />
                Choose the plan that fits your voice assistant needs

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-3 gap-8 max-w-5 xlmx-auto">
        </d iv>
              <d iv class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xlp-8">
        </d iv>
                <h3 c lass Name="t ext-2 xl font-bold text-whitemb-4">Starter</h3>
                <d iv class Name="t ext-4 xl font-bold text-cyan-400mb-6">
        </d iv>$99<s pan class Name="t ext-lgtext-gray-400">/month</s pan></d iv>
                <u l class Name="s pace-y-3mb-8" />
                  <l i class Name="f lex items-centertext-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" / />
                    Up to 1,000 voice commands/month

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Basic speech recognition

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Email support

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Standard integrations

                  </l i>
                </u l>
                <L ink to="/contact" class Name="w-f ull bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started
                </L ink>
              </d iv>

              <d iv class Name="b g-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/50 rounded-xl p-8relative">
        </d iv>
                <d iv class Name="a bsolute -top-4 left-1/2 transform-translate-x-1/2">
        </d iv>
                  <s pan class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-smfont-semibold">Most Popular
                  </s pan>
                </d iv>
                <h3 c lass Name="t ext-2 xl font-bold text-whitemb-4">Professional</h3>
                <d iv class Name="t ext-4 xl font-bold text-cyan-400mb-6">
        </d iv>$199<s pan class Name="t ext-lgtext-gray-400">/month</s pan></d iv>
                <u l class Name="s pace-y-3mb-8" />
                  <l i class Name="f lex items-centertext-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" / />
                    Up to 10,000 voice commands/month

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Advanced speech recognition

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Priority support

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Custom wake words

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Analytics dashboard

                  </l i>
                </u l>
                <L ink to="/contact" class Name="w-f ull bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started
                </L ink>
              </d iv>

              <d iv class Name="b g-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xlp-8">
        </d iv>
                <h3 c lass Name="t ext-2 xl font-bold text-whitemb-4">Enterprise</h3>
                <d iv class Name="t ext-4 xl font-bold text-cyan-400mb-6">Custom</d iv>
                <u l class Name="s pace-y-3mb-8" />
                  <l i class Name="f lex items-centertext-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" / />
                    Unlimited voice commands

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Custom A I training

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    24/7 dedicated support

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    White-label solution

                  </l i>
                  <l i class Name="f lex items-center text-gray-300" />
                    <C heck Circle class Name="w-5 h-5 t ext-green-400mr-3" />
                    Custom development

                  </l i>
                </u l>
                <L ink to="/contact" class Name="w-f ull border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300block">Contact Sales
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c ontainer mx-autopx-4">
        </d iv>
            <d iv class Name="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12text-center">
        </d iv>
              <h2 c lass Name="t ext-4 xl font-bold text-whitemb-6">Ready to Build Your A I Voice Assistant?
              </h2>
              <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-2 xlmx-auto" />
                Start creating intelligent voice assistants that understand and respond to natural speech.

              </p>
              <d iv class Name="f lex flex-col sm:flex-row gap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building Now
                </L ink>
                <L ink to="/about" class Name="b order border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">Learn More About Us
                </L ink>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>

  );
};

export default A IVoice Assistant Page;
