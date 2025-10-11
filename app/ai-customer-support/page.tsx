import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'
import { MessageSquare, Headphones, Zap, Users, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react'

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context and provide natural, helpful responses to customer inquiries.',
      benefits: ['Natural language processing', 'Context awareness', 'Multi-language support', 'Escalation handling']
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support with instant responses and seamless human handoff when needed.',
      benefits: ['Always available', 'Instant responses', 'Human escalation', 'Multi-channel support']
    },
    {
      icon: Zap,
      title: 'Quick Resolution',
      description: 'Resolve customer issues faster with AI-powered knowledge base and automated troubleshooting.',
      benefits: ['Instant answers', 'Automated troubleshooting', 'Knowledge base search', 'Ticket routing']
    },
    {
      icon: Users,
      title: 'Personalized Experience',
      description: 'Provide personalized support based on customer history, preferences, and behavior patterns.',
      benefits: ['Customer history', 'Personalized responses', 'Preference tracking', 'Proactive support']
    }
  ]

  const supportChannels = [
    {
      channel: 'Live Chat',
      description: 'Real-time chat support with AI assistance and human agents',
      icon: '💬',
      features: ['Instant responses', 'File sharing', 'Screen sharing', 'Chat history']
    },
    {
      channel: 'Email Support',
      description: 'AI-powered email support with intelligent ticket routing and response generation',
      icon: '📧',
      features: ['Smart routing', 'Auto-responses', 'Priority detection', 'Follow-up automation']
    },
    {
      channel: 'Phone Support',
      description: 'Voice support with AI call routing and intelligent call analysis',
      icon: '📞',
      features: ['Call routing', 'Call analysis', 'Transcription', 'Sentiment analysis']
    },
    {
      channel: 'Self-Service',
      description: 'Comprehensive self-service portal with AI-powered search and recommendations',
      icon: '🔍',
      features: ['Knowledge base', 'FAQ search', 'Video tutorials', 'Community forums']
    }
  ]

  const benefits = [
    'Reduce support costs by up to 60%',
    'Increase customer satisfaction by 40%',
    'Resolve 80% of inquiries without human intervention',
    'Provide 24/7 support coverage',
    'Scale support without proportional staff increases',
    'Gain insights from customer interactions'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your customer support with AI-powered solutions. Intelligent chatbots, 24/7 support, and personalized customer experiences." />
        <meta name="keywords" content="AI customer support, chatbots, customer service, support automation, customer experience" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Customer Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with AI-powered solutions. Provide instant, intelligent, 
              and personalized support that delights your customers and scales with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-lg">
                Start Free Trial
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Support Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Multi-Channel Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{channel.channel}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <ul className="space-y-2">
                  {channel.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose AI Customer Support?</h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer-Centric AI</h3>
              <p className="text-gray-300">
                Our AI learns from every customer interaction to provide increasingly personalized and effective support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <p className="text-gray-300">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
              <p className="text-gray-300">Auto-Resolution</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
              <p className="text-gray-300">Satisfaction Increase</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-gray-300">Always Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Start providing exceptional customer support with AI-powered solutions that scale with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 text-lg flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
            <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AICustomerSupportPage