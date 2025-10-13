import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Headphones, 
  Bot, 
  Zap, 
  Brain, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Sparkles,
  Target,
  BarChart3,
  Users,
  Clock,
  Shield,
  RefreshCw,
  Download,
  Share2,
  Phone,
  Mail,
  Globe,
  Settings,
  TrendingUp,
  AlertCircle,
  ThumbsUp,
  MessageSquare
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AICustomerSupportPage = () => {
  const supportChannels = [
    {
      name: "Live Chat",
      description: "AI-powered live chat with instant responses and human handoff when needed",
      icon: <MessageCircle className="w-8 h-8" />,
      features: ["Instant Responses", "Context Awareness", "Human Handoff", "Multi-language"],
      benefits: ["24/7 Availability", "Instant Resolution", "Cost Effective", "Scalable"]
    },
    {
      name: "Voice Support",
      description: "AI voice assistants that can handle calls with natural conversation flow",
      icon: <Headphones className="w-8 h-8" />,
      features: ["Natural Speech", "Call Routing", "Sentiment Analysis", "Call Recording"],
      benefits: ["Reduced Wait Times", "Consistent Quality", "Call Analytics", "Integration Ready"]
    },
    {
      name: "Email Support",
      description: "Intelligent email processing with automated responses and ticket routing",
      icon: <Mail className="w-8 h-8" />,
      features: ["Auto Classification", "Smart Routing", "Template Generation", "Sentiment Analysis"],
      benefits: ["Faster Response", "Better Organization", "Quality Assurance", "Analytics"]
    },
    {
      name: "Social Media",
      description: "AI-powered social media monitoring and response across all platforms",
      icon: <Share2 className="w-8 h-8" />,
      features: ["Multi-platform", "Sentiment Tracking", "Auto Responses", "Crisis Management"],
      benefits: ["Brand Protection", "Real-time Monitoring", "Consistent Voice", "Engagement Boost"]
    },
    {
      name: "Self-Service Portal",
      description: "Intelligent knowledge base with AI-powered search and recommendations",
      icon: <Globe className="w-8 h-8" />,
      features: ["Smart Search", "Personalized Content", "Proactive Suggestions", "Feedback Loop"],
      benefits: ["Reduced Tickets", "Instant Help", "User Empowerment", "Continuous Learning"]
    },
    {
      name: "Mobile App Support",
      description: "In-app AI support with contextual help and seamless user experience",
      icon: <Phone className="w-8 h-8" />,
      features: ["Context Aware", "In-app Chat", "Screen Sharing", "Push Notifications"],
      benefits: ["Better UX", "Faster Resolution", "User Retention", "Mobile Optimized"]
    }
  ];

  const features = [
    {
      title: "24/7 Availability",
      description: "Round-the-clock AI support that never sleeps, ensuring customers always get help when they need it",
      icon: <Clock className="w-6 h-6" />,
      stats: "99.9% uptime"
    },
    {
      title: "Instant Response",
      description: "AI-powered responses in milliseconds, eliminating wait times and improving customer satisfaction",
      icon: <Zap className="w-6 h-6" />,
      stats: "< 1 second"
    },
    {
      title: "Multi-language Support",
      description: "Support customers in their preferred language with accurate translations and cultural context",
      icon: <Globe className="w-6 h-6" />,
      stats: "50+ languages"
    },
    {
      title: "Sentiment Analysis",
      description: "Understand customer emotions and escalate issues before they become problems",
      icon: <Brain className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Predictive Support",
      description: "Anticipate customer needs and provide proactive support before issues arise",
      icon: <Target className="w-6 h-6" />,
      stats: "40% fewer issues"
    },
    {
      title: "Seamless Handoff",
      description: "Smooth transition to human agents when AI cannot resolve complex issues",
      icon: <Users className="w-6 h-6" />,
      stats: "Context preserved"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199/month",
      description: "Perfect for small businesses starting with AI support",
      features: [
        "1,000 conversations/month",
        "2 support channels",
        "Basic AI responses",
        "Email support",
        "Standard analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599/month",
      description: "Ideal for growing businesses with multiple support needs",
      features: [
        "10,000 conversations/month",
        "All support channels",
        "Advanced AI responses",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Multi-language support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex support requirements",
      features: [
        "Unlimited conversations",
        "Custom AI training",
        "Dedicated support",
        "White-label options",
        "API access",
        "Advanced reporting",
        "Custom workflows"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "85%", label: "First Contact Resolution", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "4.8/5", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "60%", label: "Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "AI Support Available", icon: <Bot className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "E-commerce Platform",
      role: "Customer Success Manager",
      content: "Our AI customer support has reduced response times by 80% and increased customer satisfaction significantly. It's like having a super-powered support team.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "SaaS Company",
      role: "Head of Support",
      content: "The AI handles 70% of our support tickets automatically, allowing our human agents to focus on complex issues. It's been a game-changer.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Tech Startup",
      role: "Operations Director",
      content: "The sentiment analysis feature helps us identify and resolve issues before they escalate. Our customer retention has improved dramatically.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Customer Support - Zion Tech Group | Intelligent Customer Service Solutions"
        description="Transform your customer support with AI-powered solutions. 24/7 availability, instant responses, and seamless human handoff for exceptional customer experience."
        keywords="AI customer support, automated support, chatbot, customer service AI, support automation, intelligent support"
        canonical="https://ziontechgroup.com/ai-customer-support"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Intelligent Customer Support</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Customer Support
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionize your customer support with AI-powered solutions that provide instant, 
            intelligent responses while maintaining the human touch when needed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Try Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Support Channels Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Multi-Channel AI Support
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Provide exceptional support across all customer touchpoints with our comprehensive AI solutions
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {channel.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {channel.name}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {channel.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {channel.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-xs">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2 text-sm">Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {channel.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities that deliver exceptional customer experiences
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>
                <div className="text-cyan-400 font-bold text-lg">{feature.stats}</div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
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
              Choose the plan that fits your support needs
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
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
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI customer support is transforming businesses
            </p>
          </div>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using AI to deliver exceptional customer experiences. 
            Start providing 24/7 intelligent support today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              Try Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSupportPage;