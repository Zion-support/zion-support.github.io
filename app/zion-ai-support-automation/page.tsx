import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Bot, 
  MessageCircle, 
  Zap, 
  BarChart3, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Headphones,
  Smartphone,
  Globe,
  Shield,
  Settings,
  Download,
  Mail,
  Phone,
  Chat
} from "lucide-react";

const ZionAISupportAutomation = () => {
  const features = [
    {
      title: "Intelligent Chatbots",
      description: "AI-powered chatbots that understand context and provide accurate, personalized responses 24/7",
      icon: <Bot className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Channel Support",
      description: "Seamlessly handle support across email, chat, phone, and social media from one unified platform",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sentiment Analysis",
      description: "Real-time analysis of customer emotions to prioritize urgent issues and improve satisfaction",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Auto-Escalation",
      description: "Smart routing of complex issues to the right human agents based on expertise and workload",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const integrations = [
    { name: "Slack", icon: "💬" },
    { name: "Microsoft Teams", icon: "🔗" },
    { name: "Zendesk", icon: "🎫" },
    { name: "Salesforce", icon: "☁️" },
    { name: "HubSpot", icon: "🎯" },
    { name: "Intercom", icon: "💬" },
    { name: "Freshdesk", icon: "🆕" },
    { name: "Help Scout", icon: "📧" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "1,000 conversations/month",
        "Basic AI chatbot",
        "Email & chat support",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "10,000 conversations/month",
        "Advanced AI with learning",
        "Multi-channel support",
        "Advanced analytics",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Custom AI training",
        "All channels included",
        "Real-time analytics",
        "24/7 dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Customer Success Manager",
      company: "E-commerce Plus",
      content: "Our response time improved by 80% and customer satisfaction increased to 95%. The AI handles 70% of inquiries automatically.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "VP of Operations",
      company: "TechStart Inc.",
      content: "The sentiment analysis feature helps us identify frustrated customers before they churn. It's been a game-changer for retention.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Head of Support",
      company: "Global Services",
      content: "We reduced our support team size by 40% while improving response quality. The AI learns from every interaction.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Support Automation - Intelligent Customer Support Platform</title>
        <meta
          name="description"
          content="Revolutionary AI-powered customer support automation platform with intelligent chatbots, multi-channel support, and sentiment analysis for exceptional customer experiences."
        />
        <meta
          name="keywords"
          content="AI customer support, intelligent chatbots, multi-channel support, sentiment analysis, customer service automation"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Bot className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">AI-Powered Support Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Support Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your customer support with AI-powered chatbots, multi-channel automation, 
            and intelligent sentiment analysis. Reduce response time by 80% while improving satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
              <div className="text-gray-300">Auto-Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage advanced AI technology to provide exceptional customer support experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows for a unified support experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="text-2xl mb-2">{integration.icon}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your support volume and team size. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Support Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about their experience with Zion AI Support Automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using Zion AI Support Automation to deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAISupportAutomation;