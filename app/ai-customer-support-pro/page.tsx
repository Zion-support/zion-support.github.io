import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { MessageCircle, Headphones, Zap, Shield, Clock, Users, CheckCircle, ArrowRight, Star, Phone, Mail } from 'lucide-react';

const AiCustomerSupportProPage: React.FC = () => {
  const features = [
    "24/7 AI-powered customer support",
    "Multi-language support (50+ languages)",
    "Intelligent ticket routing and prioritization",
    "Sentiment analysis and emotion detection",
    "Automated response generation",
    "Integration with CRM systems",
    "Real-time analytics dashboard",
    "Customizable AI personality",
    "Voice and text support",
    "Escalation to human agents when needed"
=======
import { 
  Headphones, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  Play,
  Activity,
  Shield,
  Brain,
  Target,
  Zap,
  TrendingUp,
  Users,
  MessageSquare,
  BarChart3,
  Clock,
  Bot,
  ThumbsUp,
  AlertCircle
} from 'lucide-react';

const AiCustomerSupportProPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand context, provide instant responses, and escalate complex issues to human agents.",
      benefits: ["24/7 availability", "Multi-language support", "Context awareness", "Seamless handoff"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Ticket Routing",
      description: "AI automatically categorizes and routes tickets to the right agent based on expertise and workload.",
      benefits: ["Intelligent categorization", "Priority scoring", "Load balancing", "Expertise matching"]
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Omnichannel Support",
      description: "Unified support across email, chat, phone, social media, and self-service portals.",
      benefits: ["Unified inbox", "Cross-channel history", "Consistent experience", "Channel optimization"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights into support performance, customer satisfaction, and agent productivity.",
      benefits: ["Real-time metrics", "Satisfaction tracking", "Performance analytics", "Predictive insights"]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Knowledge Management",
      description: "AI-powered knowledge base that learns from interactions and provides accurate, up-to-date information.",
      benefits: ["Auto-updating content", "Smart search", "Content optimization", "Version control"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Streamline support processes with automated responses, escalations, and follow-ups.",
      benefits: ["Workflow automation", "Auto-escalation", "Follow-up sequences", "Process optimization"]
    }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
  ];

  const pricingTiers = [
    {
      name: "Starter",
<<<<<<< HEAD
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 conversations/month",
        "Basic AI responses",
        "Email and chat support",
        "Standard analytics",
        "5 team members"
=======
      price: "$39",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 3 agents",
        "Unlimited tickets",
        "Basic chatbot",
        "Email & chat support",
        "Basic analytics",
        "Email support"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
      ],
      popular: false
    },
    {
      name: "Professional",
<<<<<<< HEAD
      price: "$299",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10,000 conversations/month",
        "Advanced AI with learning",
        "Multi-channel support",
        "Advanced analytics",
        "Unlimited team members",
=======
      price: "$99",
      period: "month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10 agents",
        "Unlimited tickets",
        "Advanced AI chatbot",
        "Omnichannel support",
        "Advanced analytics",
        "Priority support",
        "Custom workflows",
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
<<<<<<< HEAD
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Custom AI training",
        "All channels supported",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee"
=======
      price: "$299",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited agents",
        "Unlimited tickets",
        "Full AI suite",
        "Custom integrations",
        "24/7 dedicated support",
        "Advanced security",
        "White-label options",
        "Custom development"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
      ],
      popular: false
    }
  ];

  const benefits = [
    {
<<<<<<< HEAD
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock AI support"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Responses",
      description: "Customers get immediate answers to their questions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Consistent Quality",
      description: "Every interaction maintains the same high standard"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scalable Support",
      description: "Handle unlimited customer inquiries without additional staff"
=======
      name: "Jennifer Adams",
      company: "Tech Solutions Inc.",
      role: "Customer Success Manager",
      content: "AI Customer Support Pro has reduced our response time by 70% and increased customer satisfaction by 40%. The AI chatbot handles 80% of inquiries automatically.",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "E-commerce Plus",
      role: "Support Director",
      content: "The omnichannel support and smart routing have transformed our support operations. We can now handle 3x more tickets with the same team size.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "SaaS Solutions",
      role: "VP of Customer Experience",
      content: "The analytics and insights have given us unprecedented visibility into our support performance. We've identified and resolved bottlenecks we never knew existed.",
      rating: 5
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>AI Customer Support Pro - Zion Tech Group | 24/7 AI-Powered Support</title>
        <meta name="description" content="Revolutionary AI customer support solution with 24/7 availability, multi-language support, and intelligent ticket routing. Starting at $99/month." />
        <meta name="keywords" content="AI customer support, chatbot, customer service automation, 24/7 support, multi-language support" />
        <meta property="og:title" content="AI Customer Support Pro - Zion Tech Group" />
        <meta property="og:description" content="Transform your customer support with AI-powered automation and 24/7 availability." />
=======
        <title>AI Customer Support Pro - Automated Support Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with AI-powered chatbots, smart ticket routing, and omnichannel support. Reduce response time by 70% and increase satisfaction by 40%." />
        <meta name="keywords" content="AI customer support, support automation, chatbots, ticket management, omnichannel support, customer service AI" />
        <meta property="og:title" content="AI Customer Support Pro - Zion Tech Group" />
        <meta property="og:description" content="AI-powered customer support platform with automated chatbots and smart ticket routing" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

<<<<<<< HEAD
        {/* Hero Section */}
        <section className="relative py-20 pt-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                AI-Powered Customer Support
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Customer Support Pro
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your customer service with AI-powered support that never sleeps. 
                Provide instant, intelligent responses to your customers 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Demo
                </a>
=======
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Support Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Customer Support Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your customer support with AI-powered chatbots, smart ticket routing, 
                  and omnichannel support. Reduce response time by 70% and increase satisfaction by 40%.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to provide exceptional customer support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
=======
          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Powerful Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to provide exceptional customer support with AI-powered automation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Support?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your customer experience with intelligent automation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  tier.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
=======
          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Simple Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your support needs. All plans include our core AI features.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What Our Clients Say
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of businesses that have transformed their customer support with our AI platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Customer Support?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your free trial today and see how AI can revolutionize your support operations. 
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </a>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9c39
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Support?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already using AI to provide better customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCustomerSupportProPage;