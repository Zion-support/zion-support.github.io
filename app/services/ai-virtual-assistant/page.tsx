import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  MessageCircle,
  Clock,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Zap,
  Shield,
  BarChart3,
  Headphones,
  Bot,
  Globe,
} from 'lucide-react';

export default function AIVirtualAssistantPage() {
  const features = [
    {
      icon: MessageCircle,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for human-like conversations and understanding.",
      benefits: ["99% accuracy in understanding", "Multi-language support", "Context-aware responses"]
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock customer support and business operations assistance.",
      benefits: ["Instant response time", "No downtime", "Global timezone coverage"]
    },
    {
      icon: Users,
      title: "Multi-Channel Support",
      description: "Seamless integration across chat, email, phone, and social media platforms.",
      benefits: ["Unified customer experience", "Omnichannel consistency", "Easy deployment"]
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time insights and analytics to optimize customer interactions.",
      benefits: ["Response time tracking", "Customer satisfaction metrics", "ROI measurement"]
    }
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Active Assistants" },
    { icon: Clock, value: "90%", label: "Faster Response" },
    { icon: TrendingUp, value: "40%", label: "Conversion Increase" },
    { icon: Star, value: "4.8/5", label: "Customer Rating" },
  ];

  const useCases = [
    {
      title: "E-commerce Support",
      description: "Handled 50,000+ customer inquiries with 95% resolution rate",
      result: "40% increase in customer satisfaction"
    },
    {
      title: "Healthcare Triage",
      description: "Provided initial patient screening and appointment scheduling",
      result: "60% reduction in wait times"
    },
    {
      title: "Financial Services",
      description: "Automated account inquiries and transaction support",
      result: "80% reduction in support tickets"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Virtual Assistant - Zion Tech Group | 24/7 Intelligent Customer Support</title>
        <meta
          name="description"
          content="24/7 intelligent AI virtual assistant for customer support and business operations. Reduce response time by 90%, increase conversions by 40%, save 30+ hours/week."
        />
        <meta
          name="keywords"
          content="AI virtual assistant, chatbot, customer support automation, AI customer service, intelligent assistant"
        />
        <meta property="og:title" content="AI Virtual Assistant - Zion Tech Group" />
        <meta
          property="og:description"
          content="24/7 intelligent customer support and business operations with AI virtual assistant"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services/ai-virtual-assistant" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Virtual Assistant - Zion Tech Group" />
        <meta
          name="twitter:description"
          content="24/7 intelligent customer support with AI virtual assistant"
        />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-virtual-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium mb-8 border border-blue-500/30">
              <Bot className="w-4 h-4 mr-2 animate-pulse" />
              AI-Powered Customer Support - 2025
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                AI Virtual Assistant
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              🤖 24/7 intelligent customer support and business operations. 
              Reduce response time by 90%, increase conversions by 40%, save 30+ hours/week.
            </p>

            {/* Special Offer Banner */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Star className="w-6 h-6 text-green-400 animate-pulse" />
                <span className="text-lg font-bold text-green-400">🚀 STARTING AT JUST $79/MONTH</span>
                <Star className="w-6 h-6 text-green-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                Get 30 Days FREE + Setup & Training Included
              </p>
              <p className="text-blue-100 text-sm mb-4">
                No setup fees • Cancel anytime • 24/7 support included
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Start Free Trial
                </button>
                <button className="border border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-colors">
                  View Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400 group-hover:text-indigo-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Virtual Assistant Features
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Advanced AI technology that understands, learns, and delivers exceptional customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 border border-blue-500/30">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-blue-100">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-blue-900/50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real-World Success Stories
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                See how businesses are transforming customer support with AI Virtual Assistant
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-blue-100 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="text-blue-400 font-bold text-lg">{useCase.result}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Virtual Assistant?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transform your customer support with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <Zap className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Response</h3>
              <p className="text-blue-100">
                Provide instant, accurate responses to customer inquiries 24/7 without human intervention.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <BarChart3 className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Increased Conversions</h3>
              <p className="text-blue-100">
                Boost conversion rates by up to 40% with personalized, intelligent customer interactions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <Shield className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-blue-100">
                Save up to 30+ hours per week while reducing support costs by up to 60%.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="bg-blue-900/50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Easy Integration & Setup
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Get your AI Virtual Assistant up and running in minutes, not weeks
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
                <p className="text-blue-100 text-sm">Integrate with your existing platforms</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Train</h3>
                <p className="text-blue-100 text-sm">Upload your knowledge base and FAQs</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
                <p className="text-blue-100 text-sm">Launch across all your channels</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimize</h3>
                <p className="text-blue-100 text-sm">Monitor performance and improve</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 1000+ businesses already using AI Virtual Assistant to deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Start Your Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Headphones className="w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}