export default function AIVoiceAssistant() {
}
  const f eat ures = [
    {
}
      i con: <B rain c las sNa me="w-6 h-6t e xt-c yan-400" />,
      t itle: 'Natural Language Understanding',
      description: 'Advanced AI processes complex voice commands and maintains context across conversations'
    },
    {
      i con: <V olu me2 c las sNa me="w-6 h-6t e xt-p urple-400" />,
      t itle: 'Human-like Voice Synthesis',
      description: 'Generate natural, expr essive speech with customizable voices and emotional t ones'
    },
    {
      i con: <C lock c las sNa me="w-6 h-6t e xt-y ell ow-400" />,
      t itle: '24/7 Availability',
      description: 'Always-on voice a ssistant that can handle tasks, answer questions, and provide support'
    },
    {
      i con: <T arg et c las sNa me="w-6 h-6t e xt-g reen-400" />,
      t itle: 'Multi-platform Integration',
      description: 'Seamlessly integrate with mobile apps, websites, smart devices, and IoT systems'
    }
  ]
  const a ssistantFeat ures = [
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
      items: ['Custom Voice Training', 'Personality Settings', 'Command Customization', 'B rand Voice', 'Response Templates', 'Workflow Automation']
    }
  ]
  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      f eat ures: [
        'Up to 1,000 interactions/month',
        'Basic voice f eat ures',
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
      f eat ures: [
        'Up to 10,000 interactions/month',
        'Advanced voice f eat ures',
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
      f eat ures: [
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
      content: 'Our patients love the voice a ssistant for appointment scheduling. It handles complex requests perfectly.',
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
      t itle="AI Voice Assistant - Inte lligent Voice Solutions | Zion Tech Group"
      description="Transform user interaction with AI-powered voice a ssistants. Natural language processing, human-like voice synthesis, and seamless integration. Start your free trial today."
      keywords="AI voice a ssistant, voice AI, speech recognition, voice synthesis, conversational AI, voice a utomation" />
      <div c las sNa me="m in-h-scre en bg-grad ient-to-br f rom-s late-900 via-p urple-900to-s late-900">
<<<<<<< HEAD        {/* H ero S ection */}
    <>
        </><s ection c las sNa me="p t-32pb-20" />
          <div c las sNa me="c onta iner mx-a uto px-4"></div>
            <div c las sNa me="t e xt-c enter m ax-w-4 x lmx-a uto"></div>
              <h1 c las sNa me="t e xt-5 xl md:text-6 xl f ont-b old text-w hitem-b-6" />
                AI <s pan c las sNa me="b g-grad ient-to-r f rom-c yan-400 to-p urple-400 bg-clip-texttext-transpare-n-t">Voice Assistant</s pan>              </h1>
              <p c las sNa me="t e xt-xl text-gr-a-y-300 mb-8-l eading-r elaxed">
              Create inte lligent voice a ssistants that understand natural speech, execute commands, 
                and provide hands-free a utomation for your business and personal needs.
    <>
              </p>
              <div c las sNa me="f lex f lex-c ol sm:f lex-row g ap-4j ust ify-c enter">
                <L ink to="/cont act" c las sNa me="b g-grad ient-to-r f rom-c yan-500 to-p urple-500 text-w hit-e px-8 py-4 rounded-lg f ont-semibold text-l-g hover:f rom-c yan-600 hover:to-p urple-600 transition-all duration-300 transformhover:scale-105">Start Building
                </L ink>
                <L ink to="/ai-services" c las sNa me="b order b order-c yan-500 text-c ya-n-400 px-8 py-4 rounded-lg f ont-semibold text-l-g hover:bg-c yan-500/10 transition-all duration-300 transformhover:scale-105">View All AI Services
                </L ink>
              </div>
          </div>
        </s ection>
        {/* Feat ures S ection */}
    <>
        </><s ection c las sNa me="p y-20" />
          <div c las sNa me="c onta iner mx-a uto px-4"></div>
              {f eat ures.map((f eat ure, index) => (
    <>
                </><div key="{index}" c las sNa me="t e xt-c entergroup" /></div>
                  <div c las sNa me="w-20 h-20 b g-grad ient-to-r f rom-c yan-500/20 to-p urple-500/20 rounded-full f lex items-c enter j ust ify-c enter mx-a uto mb-6 group-hover:scale-110 transition-transformduration-300"></div>
              {useCases.map((useCase, index) => (
    <>
                </><div key="{index}" c las sNa me="b g-grad ient-to-br f rom-s late-800/50 to-s late-900/50 backdrop-blur-sm b order b order-gray-700/50 rounded-xl p-6 hover:b order-c yan-400/40 transition-all duration-300 group hover:transformhover:scale-105" /></div>
                  <div c las sNa me="w-12 h-12 b g-grad ient-to-r f rom-c yan-500/20 to-p urple-500/20 rounded-lg f lex items-c enter j ust ify-c enter mb-4 group-hover:scale-110 transition-transformduration-300"></div>
