
export default function AIVoiceAssistant() {
  const features = [
    {
      icon: <Brain className="w-6 h-6text-cyan-400" />,
      title: 'Natural Language Understanding',
      description: 'Advanced AI processes complex voice commands and maintains context across conversations'
    },
    {
      icon: <Volume2 className="w-6 h-6text-purple-400" />,
      title: 'Human-like Voice Synthesis',
      description: 'Generate natural, expressive speech with customizable voices and emotional tones'
    },
    {
      icon: <Clock className="w-6 h-6text-yellow-400" />,
      title: '24/7 Availability',
      description: 'Always-on voice assistant that can handle tasks, answer questions, and provide support'
    },
    {
      icon: <Target className="w-6 h-6text-green-400" />,
      title: 'Multi-platform Integration',
      description: 'Seamlessly integrate with mobile apps, websites, smart devices, and IoT systems'
    }
  ]

  const assistantFeatures = [
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
      items: ['Mobile Apps', 'Web Applications', 'Smart Home Devices', 'CRM Systems', 'ERP Integration', 'API Access']
    },
    {
      category: 'Customization',
      items: ['Custom Voice Training', 'Personality Settings', 'Command Customization', 'Brand Voice', 'Response Templates', 'Workflow Automation']
    }
  ]

  const pricingPlans = [
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
        'API access'
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
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Park',
      company: 'Smart Home Solutions',
      content: 'AI Voice Assistant transformed our customer experience. The natural conversation flow is incredible.',
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
    <Layout
      title="AI Voice Assistant - Intelligent Voice Solutions | Zion Tech Group"
      description="Transform user interaction with AI-powered voice assistants. Natural language processing, human-like voice synthesis, and seamless integration. Start your free trial today."
      keywords="AI voice assistant, voice AI, speech recognition, voice synthesis, conversational AI, voice automation" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900" />
        {/* Hero Section */}
        <section className="pt-32pb-20" />
          <div className="container mx-autopx-4" />
            <div className="text-center max-w-4 xlmx-auto" />
              <h1 className="text-5 xl md:text-6 xl font-bold text-whitemb-6" />
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Voice Assistant</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8leading-relaxed" />
                Create intelligent voice assistants that understand natural speech, execute commands, 
                and provide hands-free automation for your business and personal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4justify-center" />
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building
                </Link>
                <Link to="/ai-services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl font-bold text-whitemb-6" />
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xlmx-auto" />
                Everything you need to build, deploy, and manage intelligent voice assistants
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8" />
              {features.map((feature, index) => (
                <div key="{index}" className="text-centergroup" />
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transformduration-300" />
                    <feature.icon className="w-10 h-10text-cyan-400" / />
                  </div>
                  <h3 className="text-xl font-bold text-whitemb-4"   />{feature.title}</h3>
                  <p className="text-gray-300leading-relaxed" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30to-slate-900/30" />
          <div className="container mx-autopx-4" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl font-bold text-whitemb-6" />
                Use <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xlmx-auto" />
                Discover how our AI voice assistants can transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4gap-8" />
              {useCases.map((useCase, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transformhover:scale-105" />
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transformduration-300" />
                    <useCase.icon className="w-6 h-6text-cyan-400" / />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400transition-colors"  />{useCase.title}
                  </h3>
                  <p className="text-gray-300 text-smleading-relaxed" />
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4" />
            <div className="text-centermb-16" />
              <h2 className="text-4 xl font-bold text-whitemb-6" />
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xlmx-auto" />
                Choose the plan that fits your voice assistant needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5 xlmx-auto" />
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xlp-8" />
                <h3 className="text-2 xl font-bold text-whitemb-4"   />Starter</h3>
                <div className="text-4 xl font-bold text-cyan-400mb-6" />$99<span className="text-lgtext-gray-400"   />/month</span></div>
                <ul className="space-y-3mb-8" />
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Up to 1,000 voice commands/month
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Basic speech recognition
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Email support
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Standard integrations
                  </li>
                </ul>
                <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started
                </Link>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/50 rounded-xl p-8relative" />
                <div className="absolute -top-4 left-1/2 transform-translate-x-1/2" />
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-smfont-semibold"  />Most Popular
                  </span>
                </div>
                <h3 className="text-2 xl font-bold text-whitemb-4"   />Professional</h3>
                <div className="text-4 xl font-bold text-cyan-400mb-6" />$199<span className="text-lgtext-gray-400"   />/month</span></div>
                <ul className="space-y-3mb-8" />
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Up to 10,000 voice commands/month
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Advanced speech recognition
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Priority support
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Custom wake words
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Analytics dashboard
                  </li>
                </ul>
                <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xlp-8" />
                <h3 className="text-2 xl font-bold text-whitemb-4"   />Enterprise</h3>
                <div className="text-4 xl font-bold text-cyan-400mb-6"   />Custom</div>
                <ul className="space-y-3mb-8" />
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Unlimited voice commands
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Custom AI training
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    White-label solution
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400mr-3" / />
                    Custom development
                  </li>
                </ul>
                <Link to="/contact" className="w-full border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300block">Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4" />
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12text-center" />
              <h2 className="text-4 xl font-bold text-whitemb-6"  />Ready to Build Your AI Voice Assistant?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2 xlmx-auto" />
                Start creating intelligent voice assistants that understand and respond to natural speech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4justify-center" />
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building Now
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;
