
export default function AIVoiceAssistant() {
  const features = [
    {
      icon: <Brain className="w-5h-5ml-2" />,
      title: 'Natural Language Understanding',
      description: 'Advanced AI processes complex voice commands and maintains context across conversations'
    },
    {
      icon: <Volume2 className="w-5h-5ml-2" />,
      title: 'Human-like Voice Synthesis',
      description: 'Generate natural, expressive speech with customizable voices and emotional tones'
    },
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: '24/7 Availability',
      description: 'Always-on voice assistant that can handle tasks, answer questions, and provide support'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
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
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h1 className="w-5h-5ml-2" />
                AI <span className="w-5h-5ml-2" />Voice Assistant</span>
              </h1>
              <p className="w-5h-5ml-2">Create intelligent voice assistants that understand natural speech, execute commands, 
                and provide hands-free automation for your business and personal needs.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building
                </Link>
                <Link to="/ai-services" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">View All AI Services
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5ml-2" />
                Powerful <span className="w-5h-5ml-2" />Features</span>
              </h2>
              <p className="w-5h-5ml-2">Everything you need to build, deploy, and manage intelligent voice assistants
              </p>
            </div>

            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {features.map((feature, index) => (
                <div key={index} className="text-centergroup" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <feature.icon className="w-10h-10text-cyan-400"  />
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5ml-2" />
                Use <span className="w-5h-5ml-2" />Cases</span>
              </h2>
              <p className="w-5h-5ml-2">Discover how our AI voice assistants can transform your business operations
              </p>
            </div>

            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transformhover:scale-105" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <useCase.icon className="w-6 h-6tex t-cyan-400"  />
                  </div>
                  <h3 className="w-5h-5ml-2" />{useCase.title}
                  </h3>
                  <p className="w-5h-5ml-2">{useCase.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5ml-2" />
                Simple <span className="w-5h-5ml-2" />Pricing</span>
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your voice assistant needs
              </p>
            </div>

            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <h3 className="w-5h-5ml-2" />Starter</h3>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">$99<span className="w-5h-5ml-2" />/month</span></div>
                <ul className="w-5h-5ml-2" />
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Up to 1,000 voice commands/month
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Basic speech recognition
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Email support
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Standard integrations
                  </li>
                </ul>
                <Link to="/contact" className="w-fullbg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started
                </Link>
              </div>

              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <span className="w-5h-5ml-2" />Most Popular
                  </span>
                </div>
                <h3 className="w-5h-5ml-2" />Professional</h3>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">$199<span className="w-5h-5ml-2" />/month</span></div>
                <ul className="w-5h-5ml-2" />
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Up to 10,000 voice commands/month
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Advanced speech recognition
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Priority support
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Custom wake words
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Analytics dashboard
                  </li>
                </ul>
                <Link to="/contact" className="w-fullbg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300block">Get Started
                </Link>
              </div>

              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <h3 className="w-5h-5ml-2" />Enterprise</h3>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Custom</div>
                <ul className="w-5h-5ml-2" />
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Unlimited voice commands
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Custom AI training
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    24/7 dedicated support
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    White-label solution
                  </li>
                  <li className="w-5h-5ml-2" />
                    <CheckCircle className="w-5h-5ml-2" />
                    Custom development
                  </li>
                </ul>
                <Link to="/contact" className="w-fullborder border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300block">Contact Sales
                </Link>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Build Your AI Voice Assistant?
              </h2>
              <p className="w-5h-5ml-2">Start creating intelligent voice assistants that understand and respond to natural speech.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building Now
                </Link>
                <Link to="/about" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">Learn More About Us
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;
