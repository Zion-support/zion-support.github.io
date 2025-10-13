import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock,
  Target,
  Zap,
  Shield,
  Smartphone,
  Globe,
  MessageSquare
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIVoiceAssistantPage = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities that understand context, intent, and complex voice commands with 99% accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Language Support",
      description: "Support for 50+ languages with real-time translation and localized responses",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Voice Training",
      description: "Train the assistant with your specific voice patterns and business terminology for personalized interactions",
      icon: <Mic className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Integration Capabilities",
      description: "Seamlessly integrate with CRM, ERP, and other business systems for comprehensive automation",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Track usage patterns, user satisfaction, and performance metrics with detailed analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Mobile & Web Ready",
      description: "Access your voice assistant from any device with responsive mobile and web interfaces",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 voice interactions per month",
        "Basic NLP capabilities",
        "5 supported languages",
        "Email support",
        "Basic analytics",
        "Mobile app access",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 voice interactions per month",
        "Advanced NLP & AI capabilities",
        "25 supported languages",
        "Custom voice training",
        "Advanced analytics & reporting",
        "Priority support",
        "Up to 10 user accounts",
        "API integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited voice interactions",
        "Custom AI models",
        "50+ supported languages",
        "White-label solution",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "Unlimited users"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increase Productivity",
      description: "Boost team productivity by 45% with hands-free voice automation",
      icon: <TrendingUp className="w-6 h-6" />,
      value: "45%"
    },
    {
      title: "Reduce Response Time",
      description: "Cut customer response time by 70% with instant voice responses",
      icon: <Clock className="w-6 h-6" />,
      value: "70%"
    },
    {
      title: "Improve Accuracy",
      description: "Achieve 99% voice recognition accuracy with advanced AI",
      icon: <Target className="w-6 h-6" />,
      value: "99%"
    },
    {
      title: "Save Costs",
      description: "Reduce operational costs by 35% with automated voice processes",
      icon: <Shield className="w-6 h-6" />,
      value: "35%"
    }
  ];

  const useCases = [
    {
      title: "Customer Service",
      description: "Handle customer inquiries, provide support, and resolve issues through natural voice conversations",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sales Automation",
      description: "Qualify leads, schedule meetings, and follow up with prospects using intelligent voice interactions",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Internal Operations",
      description: "Manage schedules, access information, and automate routine tasks through voice commands",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Entry",
      description: "Convert voice to text, update records, and manage databases with voice-driven automation",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Customer Success Co.",
      role: "VP of Operations",
      content: "The AI voice assistant has transformed our customer service. We've reduced response time by 75% and improved satisfaction scores significantly.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Robert Martinez",
      company: "Tech Solutions Inc.",
      role: "Sales Director",
      content: "The voice assistant helps us qualify leads faster and more accurately. Our conversion rates have improved by 40% since implementation.",
      rating: 5,
      avatar: "RM"
    },
    {
      name: "Sarah Johnson",
      company: "Healthcare Systems",
      role: "Operations Manager",
      content: "The multi-language support is incredible. We can now serve patients in their native languages, improving care quality significantly.",
      rating: 5,
      avatar: "SJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Voice Assistant - Intelligent Voice Automation | Zion Tech Group"
        description="Transform your business with AI-powered voice assistant. Increase productivity by 45%, reduce response time by 70%, and support 50+ languages."
        keywords="AI voice assistant, voice automation, natural language processing, voice recognition, business automation, customer service AI"
        canonical="https://ziontechgroup.com/ai-voice-assistant"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Mic className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Voice Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Voice Assistant
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with intelligent voice automation. Increase productivity by 45%, reduce response time by 70%, 
            and support 50+ languages with our advanced AI voice assistant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Mic className="w-5 h-5" />}
            >
              Try Voice Demo
            </FuturisticButton>
          </div>
          
          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-gray-300 text-xs md:text-sm">{benefit.title}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Voice Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI voice assistant uses cutting-edge natural language processing and machine learning for intelligent voice interactions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our AI voice assistant can transform different aspects of your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4 mx-auto`}>
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your voice automation needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10 scale-105' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about the AI Voice Assistant
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform with Voice AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses already using our AI voice assistant to improve productivity and customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Mic className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIVoiceAssistantPage;