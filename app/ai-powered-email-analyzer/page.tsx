import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  BarChart3, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Target,
  ArrowRight,
  Sparkles,
  Brain,
  FileText,
  Send,
  Filter,
  AlertTriangle,
  ThumbsUp,
  MessageSquare,
  PieChart
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIPoweredEmailAnalyzerPage = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const features = [
    {
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced machine learning algorithms analyze email tone, sentiment, and emotional context with 95% accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "95% accuracy"
    },
    {
      title: "Real-time Email Monitoring",
      description: "Monitor email campaigns, customer communications, and internal emails in real-time with instant alerts",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      stats: "Real-time"
    },
    {
      title: "Compliance & Security Scanning",
      description: "Automatically detect sensitive information, compliance violations, and security threats in email content",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% detection"
    },
    {
      title: "Performance Analytics",
      description: "Comprehensive analytics dashboard showing email performance, engagement rates, and optimization suggestions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "40% improvement"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 emails analyzed per month",
        "Basic sentiment analysis",
        "Email performance tracking",
        "Standard support",
        "Basic reporting dashboard"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses and teams",
      features: [
        "Up to 10,000 emails analyzed per month",
        "Advanced AI sentiment analysis",
        "Real-time monitoring & alerts",
        "Compliance scanning",
        "Advanced analytics dashboard",
        "Priority support",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited email analysis",
        "Custom AI models",
        "Advanced security features",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 premium support",
        "White-label options"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "Marketing Director",
      content: "The AI Email Analyzer has revolutionized our email marketing. We've seen a 40% improvement in open rates and 60% better engagement.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "Customer Success Co.",
      role: "VP of Operations",
      content: "The compliance scanning feature has saved us countless hours and helped us avoid potential legal issues. Highly recommended!",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Digital Agency Pro",
      role: "Account Manager",
      content: "The real-time monitoring and analytics have given us insights we never had before. Our client satisfaction has increased dramatically.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const handleAnalyzeDemo = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult({
        sentiment: "Positive",
        confidence: 0.87,
        keywords: ["excellent", "amazing", "love", "great"],
        recommendations: [
          "Consider using more emotional language",
          "Add a clear call-to-action",
          "Optimize subject line for better open rates"
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI-Powered Email Analyzer | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered email analysis tool with sentiment analysis, compliance scanning, and performance analytics. Transform your email communications with intelligent insights." />
        <meta name="keywords" content="AI email analyzer, email sentiment analysis, email compliance, email analytics, AI email insights" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-email-analyzer" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Mail className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered Email Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              AI-Powered Email Analyzer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your email communications with advanced AI analysis. Get insights on sentiment, 
            compliance, performance, and optimization opportunities in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              onClick={handleAnalyzeDemo}
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              {isAnalyzing ? "Analyzing..." : "Try Demo Analysis"}
            </FuturisticButton>
            <FuturisticButton
              href="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
          </div>

          {/* Demo Analysis Result */}
          {analysisResult && (
            <FuturisticCard className="max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Analysis Complete!</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <div className="text-green-400 font-semibold">Sentiment</div>
                    <div className="text-white text-lg">{analysisResult.sentiment}</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                    <div className="text-blue-400 font-semibold">Confidence</div>
                    <div className="text-white text-lg">{(analysisResult.confidence * 100).toFixed(0)}%</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                    <div className="text-purple-400 font-semibold">Keywords</div>
                    <div className="text-white text-lg">{analysisResult.keywords.length}</div>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-2">Recommendations:</h4>
                  <ul className="space-y-1">
                    {analysisResult.recommendations.map((rec, index) => (
                      <li key={index} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FuturisticCard>
          )}
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered email analyzer provides comprehensive insights and automation 
              to optimize your email communications and business processes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about the AI Email Analyzer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Email Communications?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our AI Email Analyzer to optimize 
            their email strategies and improve customer engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredEmailAnalyzerPage;