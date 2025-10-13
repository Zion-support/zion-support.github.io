import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Brain, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Target,
  MessageSquare,
  Star,
  Clock,
  Award,
  Globe,
  Shield,
  Smartphone,
  Monitor,
  Mail,
  Bell,
  Settings,
  PieChart,
  Activity,
  Database,
  Send,
  Download,
  Filter,
  Search
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Email Analysis",
      description: "Analyze email content, sentiment, and engagement patterns using advanced natural language processing",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sentiment Tracking",
      description: "Monitor email sentiment in real-time and get alerts for negative or concerning communications",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Engagement Optimization",
      description: "Get AI recommendations to improve email open rates, click-through rates, and response rates",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Spam Detection",
      description: "Advanced AI filters to detect and prevent spam, phishing, and malicious emails",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Email Classification",
      description: "Automatically categorize emails by type, priority, and department for better organization",
      icon: <Filter className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive analytics on email performance, delivery rates, and communication effectiveness",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "1,000 emails/month",
        "Basic sentiment analysis",
        "Email classification",
        "Spam detection",
        "Email support",
        "1 user account"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "10,000 emails/month",
        "Advanced sentiment analysis",
        "Engagement optimization",
        "Priority support",
        "5 user accounts",
        "Custom filters",
        "API access",
        "Advanced analytics"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with high email volume",
      features: [
        "Unlimited emails",
        "Full AI analysis suite",
        "Custom AI models",
        "24/7 dedicated support",
        "Unlimited users",
        "White-label solution",
        "Advanced API access",
        "Custom integrations",
        "SLA guarantee",
        "Data export/import"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const analytics = [
    {
      title: "Open Rate Analysis",
      description: "Track and optimize email open rates with AI-powered insights",
      icon: <Eye className="w-6 h-6" />,
      metric: "35% improvement"
    },
    {
      title: "Sentiment Monitoring",
      description: "Monitor email sentiment across all communications in real-time",
      icon: <MessageSquare className="w-6 h-6" />,
      metric: "Real-time alerts"
    },
    {
      title: "Spam Detection",
      description: "Advanced AI filters to prevent spam and malicious emails",
      icon: <Shield className="w-6 h-6" />,
      metric: "99.9% accuracy"
    },
    {
      title: "Response Time",
      description: "Optimize response times with AI-powered recommendations",
      icon: <Clock className="w-6 h-6" />,
      metric: "50% faster"
    },
    {
      title: "Email Classification",
      description: "Automatically categorize and prioritize emails",
      icon: <Filter className="w-6 h-6" />,
      metric: "95% accuracy"
    },
    {
      title: "Engagement Score",
      description: "Get AI-powered engagement scores for all your emails",
      icon: <Star className="w-6 h-6" />,
      metric: "8.5/10 average"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Marketing Agency",
      role: "Email Marketing Manager",
      content: "Zion AI Email Analyzer helped us improve our email open rates by 35% and reduce spam complaints by 60%. Incredible results!",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Robert Kim",
      company: "Customer Support",
      role: "Support Manager",
      content: "The sentiment analysis feature is a game-changer. We can now identify frustrated customers before they escalate.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Platform",
      role: "Communications Director",
      content: "Email classification saves us hours every day. Our team is much more organized and responsive now.",
      rating: 5,
      avatar: "MG"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Email Analyzer - Advanced Email Analytics & Optimization | Zion Tech Group"
        description="Optimize your email communications with Zion AI Email Analyzer. Analyze sentiment, improve engagement, and prevent spam with AI-powered email intelligence. Start your free trial today!"
        keywords="email analyzer, email analytics, email optimization, sentiment analysis, spam detection, email classification, email performance, email intelligence"
        canonical="https://ziontechgroup.com/zion-ai-email-analyzer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Mail className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Optimize Your Emails
            </span>
            <br />
            <span className="text-white">with AI Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your email communications with AI-powered analysis. Improve engagement, 
            detect sentiment, prevent spam, and optimize performance with advanced email intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Mail className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">35%</div>
              <div className="text-gray-300 text-sm">Higher Open Rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Spam Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">50%</div>
              <div className="text-gray-300 text-sm">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Classification Accuracy</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Email Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to optimize your email communications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
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

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Email Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get actionable insights that improve your email performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analytics.map((analytic, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    {analytic.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{analytic.title}</h3>
                    <div className="text-2xl font-bold text-cyan-400">{analytic.metric}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{analytic.description}</p>
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email analysis needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Email Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our users say about Zion AI Email Analyzer
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
                    <Award key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Emails?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals using AI to improve their email communications and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Eye className="w-5 h-5" />}
              >
                View Demo
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIEmailAnalyzerPage;