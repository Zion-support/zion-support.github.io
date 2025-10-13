import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  Target, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Brain,
  Shield,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  Heart,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  Award,
  Bell,
  Calendar,
  Settings,
  PieChart,
  Activity,
  Send,
  Inbox,
  Archive,
  Trash2,
  Filter,
  Search,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Email Analysis",
      description: "Analyze email content, sentiment, and effectiveness using advanced natural language processing",
      icon: <Brain className="w-6 h-6" />,
      stats: "99% accuracy"
    },
    {
      title: "Sentiment & Tone Detection",
      description: "Automatically detect email sentiment and tone to improve communication effectiveness",
      icon: <Heart className="w-6 h-6" />,
      stats: "Real-time analysis"
    },
    {
      title: "Spam & Phishing Detection",
      description: "Advanced AI algorithms to detect spam, phishing, and malicious emails automatically",
      icon: <Shield className="w-6 h-6" />,
      stats: "99.9% detection rate"
    },
    {
      title: "Email Performance Analytics",
      description: "Track open rates, response times, and engagement metrics across all email communications",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "40% better performance"
    },
    {
      title: "Smart Categorization",
      description: "Automatically categorize emails by type, priority, and action required",
      icon: <Filter className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Response Suggestions",
      description: "AI-powered suggestions for email responses based on content analysis and context",
      icon: <MessageSquare className="w-6 h-6" />,
      stats: "60% time saved"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 10,000 emails/month",
        "Basic sentiment analysis",
        "Spam detection",
        "Email support",
        "Basic analytics",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 100,000 emails/month",
        "Advanced sentiment analysis",
        "Phishing detection",
        "Priority support",
        "Advanced analytics",
        "1-year data retention",
        "API access",
        "Team collaboration"
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
        "Custom AI models",
        "Advanced security features",
        "24/7 phone support",
        "White-label options",
        "Unlimited data retention",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Adams",
      company: "Marketing Agency",
      role: "Email Marketing Manager",
      content: "Zion AI Email Analyzer has revolutionized our email campaigns. We've improved open rates by 45% and reduced spam complaints by 80% since implementing it.",
      rating: 5,
      avatar: "JA"
    },
    {
      name: "Robert Kim",
      company: "Customer Support",
      role: "Support Manager",
      content: "The sentiment analysis feature is incredibly accurate. We can now identify frustrated customers before they escalate, leading to much better customer satisfaction.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Maria Garcia",
      company: "E-commerce Platform",
      role: "Communications Director",
      content: "The spam detection has been a lifesaver. We've caught several phishing attempts that would have compromised our entire system. Highly recommended!",
      rating: 5,
      avatar: "MG"
    }
  ];

  const analytics = [
    {
      title: "Email Performance",
      description: "Track open rates, click-through rates, and response times",
      icon: <TrendingUp className="w-8 h-8" />,
      metrics: ["Open rates", "Click rates", "Response times", "Engagement scores"]
    },
    {
      title: "Sentiment Analysis",
      description: "Understand the emotional tone of your email communications",
      icon: <Heart className="w-8 h-8" />,
      metrics: ["Positive sentiment", "Negative sentiment", "Neutral tone", "Emotional trends"]
    },
    {
      title: "Security Monitoring",
      description: "Detect and prevent spam, phishing, and malicious emails",
      icon: <Shield className="w-8 h-8" />,
      metrics: ["Spam detection", "Phishing alerts", "Threat levels", "Security scores"]
    },
    {
      title: "Content Optimization",
      description: "Get suggestions to improve email content and effectiveness",
      icon: <Target className="w-8 h-8" />,
      metrics: ["Subject line scores", "Content readability", "Call-to-action effectiveness", "Optimization suggestions"]
    }
  ];

  const benefits = [
    { label: "Email Open Rate", value: "34%", improvement: "+12%" },
    { label: "Response Time", value: "2.3 hours", improvement: "-60%" },
    { label: "Spam Detection", value: "99.9%", improvement: "+15%" },
    { label: "Customer Satisfaction", value: "4.7/5", improvement: "+0.8" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Email Analyzer - Advanced Email Intelligence & Analytics | Zion Tech Group"
        description="Analyze email performance, detect sentiment, and prevent spam with AI. Advanced email intelligence for better communication and security. Start free trial today!"
        keywords="AI email analyzer, email analytics, sentiment analysis, spam detection, email performance, email intelligence, phishing detection, email optimization"
        canonical="https://ziontechgroup.com/zion-ai-email-analyzer"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Mail className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Email Intelligence Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Master Email Communication
            </span>
            <br />
            <span className="text-white">with AI Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Analyze email performance, detect sentiment, prevent spam, and optimize your email communications 
            with advanced AI-powered email intelligence and analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300 text-sm">Higher Open Rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Spam Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">4.8/5</div>
              <div className="text-gray-300 text-sm">User Rating</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Email Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven features to analyze, optimize, and secure your email communications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <div className="text-cyan-400 text-sm font-medium">{feature.stats}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Email Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get deep insights into your email performance and communication effectiveness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analytics.map((analytic, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {analytic.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{analytic.title}</h3>
                <p className="text-gray-300 mb-4">{analytic.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {analytic.metrics.map((metric, idx) => (
                    <li key={idx}>• {metric}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the impact of AI-powered email analysis on communication effectiveness
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <div className="text-gray-300 text-sm mb-1">{benefit.label}</div>
                <div className="text-green-400 text-sm font-medium">{benefit.improvement}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your email intelligence as your communication needs grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
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
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Communication Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are improving their email communications with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master Email Communication?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses who are already using Zion AI Email Analyzer 
            to improve their email communications and security.
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
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIEmailAnalyzerPage;