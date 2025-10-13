import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ChatBubbleLeftRightIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function AiCustomerSupportChatbot() {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP understands customer intent and provides human-like responses in real-time",
      icon: CpuChipIcon
    },
    {
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock AI-powered support",
      icon: ClockIcon
    },
    {
      title: "Multi-Language Support",
      description: "Communicate with customers in 50+ languages with instant translation",
      icon: GlobeAltIcon
    },
    {
      title: "Seamless Handoff",
      description: "Intelligent escalation to human agents when complex issues require personal attention",
      icon: UserGroupIcon
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "1,000 conversations/month",
        "Basic AI responses",
        "Email support",
        "Standard integrations",
        "Basic analytics",
        "1 chatbot"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "5,000 conversations/month",
        "Advanced AI features",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Up to 5 chatbots",
        "Multi-language support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Premium AI features",
        "24/7 dedicated support",
        "Custom development",
        "White-label options",
        "Unlimited chatbots",
        "API access",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      title: "Instant Response",
      description: "Respond to customer queries in milliseconds with 95% accuracy",
      icon: "⚡"
    },
    {
      title: "Context Awareness",
      description: "Maintains conversation context and remembers previous interactions",
      icon: "🧠"
    },
    {
      title: "Sentiment Analysis",
      description: "Detects customer emotions and adjusts responses accordingly",
      icon: "😊"
    },
    {
      title: "Knowledge Base Integration",
      description: "Accesses your knowledge base to provide accurate, up-to-date information",
      icon: "📚"
    },
    {
      title: "Order Tracking",
      description: "Helps customers track orders, check status, and get shipping updates",
      icon: "📦"
    },
    {
      title: "Appointment Booking",
      description: "Schedules appointments, meetings, and consultations automatically",
      icon: "📅"
    }
  ];

  const integrations = [
    { name: "Slack", logo: "💬" },
    { name: "Microsoft Teams", logo: "🔷" },
    { name: "WhatsApp", logo: "📱" },
    { name: "Facebook Messenger", logo: "📘" },
    { name: "Website Chat", logo: "🌐" },
    { name: "Mobile App", logo: "📲" },
    { name: "Email", logo: "📧" },
    { name: "CRM Systems", logo: "👥" }
  ];

  const benefits = [
    {
      title: "Reduce Support Costs by 60%",
      description: "Handle common queries automatically, freeing up human agents for complex issues"
    },
    {
      title: "Increase Customer Satisfaction",
      description: "Provide instant, accurate responses that keep customers happy and engaged"
    },
    {
      title: "Scale Support Operations",
      description: "Handle unlimited conversations simultaneously without additional staff"
    },
    {
      title: "Gather Customer Insights",
      description: "Collect valuable data about customer needs, pain points, and preferences"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Chatbot - Intelligent Customer Service | Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with AI-powered chatbots. 24/7 availability, multi-language support, and 95% accuracy. Starting at $79/month." />
        <meta name="keywords" content="AI chatbot, customer support automation, AI customer service, chatbot platform, virtual assistant, customer support AI" />
        <meta name="canonical" content="https://ziontechgroup.com/ai-customer-support-chatbot" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Support Chatbot
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your customer support with intelligent AI chatbots that provide 
              24/7 assistance, multi-language support, and 95% response accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Watch Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI chatbot combines cutting-edge technology with human-like conversation abilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI chatbot can handle a wide range of customer service tasks with human-like intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 text-center hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect your AI chatbot with the tools and platforms you already use
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 lg:grid-cols-8 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 text-center">
                <div className="text-3xl mb-2">{integration.logo}</div>
                <h3 className="text-white font-semibold">{integration.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Measurable Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the real impact our AI chatbot brings to your customer support operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 text-center">
                <h3 className="text-2xl font-bold text-green-400 mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your customer support needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 ring-2 ring-purple-500/20' 
                  : 'border-slate-600 hover:border-purple-500'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
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
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of businesses already using our AI chatbot to provide exceptional customer service
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}