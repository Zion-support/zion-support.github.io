import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageSquare, 
  Users, 
  Headphones, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Download,
  Play,
  Pause,
  RefreshCw,
  Settings,
  Eye,
  Filter,
  Clock,
  PieChart,
  LineChart,
  Activity,
  AlertTriangle,
  CheckSquare,
  FileText,
  Bot,
  Target,
  Calendar,
  Image,
  Video,
  Link,
  Hashtag,
  AtSign,
  DollarSign,
  Award,
  ThumbsUp,
  MessageCircle,
  HelpCircle,
  Search,
  BookOpen,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const AiCustomerSupportProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand context, provide instant responses, and escalate complex issues to human agents seamlessly.",
      benefits: ["24/7 availability", "Instant responses", "Context understanding", "Smart escalation"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligent Ticket Routing",
      description: "AI automatically categorizes and routes support tickets to the right agent based on expertise, workload, and priority.",
      benefits: ["Smart categorization", "Auto-routing", "Priority detection", "Load balancing"]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Knowledge Base AI",
      description: "AI-powered search that understands natural language queries and provides accurate, contextual answers from your knowledge base.",
      benefits: ["Natural language search", "Contextual answers", "Self-learning", "Multi-language support"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics with AI insights on customer satisfaction, response times, and support team performance.",
      benefits: ["Customer insights", "Performance metrics", "Predictive analytics", "Trend analysis"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sentiment Analysis",
      description: "AI analyzes customer emotions and sentiment in real-time to prioritize urgent issues and improve response strategies.",
      benefits: ["Emotion detection", "Urgency prioritization", "Sentiment tracking", "Proactive support"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automation Suite",
      description: "Automate repetitive tasks, follow-ups, and workflows to improve efficiency and reduce response times.",
      benefits: ["Task automation", "Auto-follow-ups", "Workflow automation", "Efficiency gains"]
    }
  ];

  const channels = [
    { name: "Live Chat", icon: <MessageSquare className="w-8 h-8" />, color: "text-cyan-500" },
    { name: "Email", icon: <Mail className="w-8 h-8" />, color: "text-blue-500" },
    { name: "Phone", icon: <Phone className="w-8 h-8" />, color: "text-green-500" },
    { name: "Social Media", icon: <Globe className="w-8 h-8" />, color: "text-purple-500" },
    { name: "WhatsApp", icon: <MessageCircle className="w-8 h-8" />, color: "text-green-600" },
    { name: "SMS", icon: <MessageSquare className="w-8 h-8" />, color: "text-orange-500" },
    { name: "Video Call", icon: <Video className="w-8 h-8" />, color: "text-red-500" },
    { name: "Help Center", icon: <HelpCircle className="w-8 h-8" />, color: "text-indigo-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses starting their AI support journey",
      features: [
        "Up to 1,000 tickets/month",
        "Basic AI chatbot",
        "Email & chat support",
        "Standard analytics",
        "Email support",
        "5GB storage",
        "Mobile app access",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Ideal for growing companies with advanced support needs",
      features: [
        "Up to 10,000 tickets/month",
        "Advanced AI features",
        "All communication channels",
        "Comprehensive analytics",
        "Priority support",
        "50GB storage",
        "API access",
        "Custom integrations",
        "Sentiment analysis",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited tickets",
        "Full AI suite",
        "Custom development",
        "Advanced analytics",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced security",
        "On-premise deployment",
        "Custom AI training",
        "Training & onboarding"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rachel Thompson",
      company: "E-commerce Solutions",
      role: "Customer Success Manager",
      content: "AI Customer Support Pro has revolutionized our support operations. Response times dropped by 70% and customer satisfaction increased to 95%. The AI chatbot handles 80% of inquiries without human intervention.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "TechStart Inc.",
      role: "Head of Support",
      content: "The intelligent ticket routing and sentiment analysis have been game-changers. We can now prioritize urgent issues and provide personalized support at scale. Our team productivity has increased by 60%.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      company: "SaaS Platform",
      role: "VP of Customer Experience",
      content: "The AI-powered knowledge base and automation features have transformed our support quality. Customers get instant, accurate answers, and our support team can focus on complex issues. ROI was achieved in just 2 months.",
      rating: 5
    }
  ];

  const metrics = [
    { number: "95%", label: "Customer Satisfaction", icon: <ThumbsUp className="w-6 h-6" /> },
    { number: "70%", label: "Faster Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "80%", label: "Issues Resolved by AI", icon: <Bot className="w-6 h-6" /> },
    { number: "24/7", label: "Always Available", icon: <Activity className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: "Salesforce", description: "CRM integration" },
    { name: "Zendesk", description: "Support platform" },
    { name: "Slack", description: "Team communication" },
    { name: "Microsoft Teams", description: "Collaboration" },
    { name: "HubSpot", description: "Marketing automation" },
    { name: "Intercom", description: "Customer messaging" },
    { name: "Freshdesk", description: "Help desk" },
    { name: "Jira", description: "Issue tracking" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Pro - Intelligent Support Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with AI-powered chatbots, intelligent ticket routing, and automated workflows. Improve satisfaction and reduce response times." />
        <meta name="keywords" content="AI customer support, support automation, chatbots, ticket management, customer service AI, support analytics, help desk automation" />
        <meta property="og:title" content="AI Customer Support Pro - Zion Tech Group" />
        <meta property="og:description" content="Intelligent customer support platform with AI-powered automation and analytics" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

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
                  #1 AI Customer Support Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Customer Support Pro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize your customer support with AI-powered automation, intelligent chatbots, 
                  and smart ticket management. Deliver exceptional support experiences at scale.
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
              </div>
            </div>
          </section>

          {/* Channel Support Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    All Support Channels
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Unify all your customer support channels with AI-powered automation and intelligence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {channels.map((channel, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className={`${channel.color} mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                      {channel.icon}
                    </div>
                    <div className="text-white font-semibold text-sm">{channel.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AI-Powered Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to deliver exceptional customer support with intelligent automation.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
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
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Metrics Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Proven Results
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of companies achieving remarkable support improvements with our AI platform.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{metric.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{metric.number}</div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
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
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Seamless Integrations
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with your existing tools and platforms for a unified support experience.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-cyan-400 font-bold text-lg mb-2">{integration.name}</div>
                    <div className="text-gray-300 text-sm">{integration.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Flexible Pricing
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your support volume and team size. All plans include our core AI features.
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
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how companies are transforming their customer support with our AI platform.
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
                  Start your free trial today and experience the power of AI-driven customer support. 
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AiCustomerSupportProPage;