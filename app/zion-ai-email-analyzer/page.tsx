import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Award,
  Sparkles,
  BarChart3,
  Brain,
  Target,
  TrendingUp,
  Eye,
  MessageSquare,
  Heart,
  AlertTriangle,
  Globe,
  Smartphone,
  Monitor,
  Laptop,
  DollarSign,
  Calendar,
  Phone,
  MapPin,
  Database,
  Shield,
  PieChart,
  Activity,
  Send,
  Inbox,
  Filter,
  Search,
  FileText,
  Download
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Email Analysis",
      description: "Analyze email content, tone, and sentiment using advanced natural language processing",
      icon: <Brain className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Spam Detection & Filtering",
      description: "Automatically detect and filter spam, phishing, and malicious emails with 99.9% accuracy",
      icon: <Shield className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Email Performance Analytics",
      description: "Track open rates, click-through rates, and engagement metrics across all campaigns",
      icon: <BarChart3 className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Smart Categorization",
      description: "Automatically categorize emails by type, priority, and sender with machine learning",
      icon: <Filter className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Response Time Optimization",
      description: "Get AI recommendations for optimal response times and email scheduling",
      icon: <Clock className="w-6 h-6" />,
      price: "Included"
    },
    {
      title: "Compliance Monitoring",
      description: "Ensure email compliance with GDPR, CAN-SPAM, and other regulations automatically",
      icon: <CheckCircle className="w-6 h-6" />,
      price: "Included"
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Up to 10,000 emails/month",
        "Basic analytics",
        "Spam filtering",
        "Email support",
        "Mobile app",
        "Basic templates"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$79",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "Up to 100,000 emails/month",
        "Advanced analytics",
        "AI categorization",
        "Priority support",
        "Team collaboration",
        "Custom templates",
        "API access",
        "Compliance monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with high email volume",
      features: [
        "Unlimited emails",
        "Custom AI models",
        "White-label options",
        "24/7 phone support",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Amanda Foster",
      company: "Marketing Agency Pro",
      role: "Email Marketing Manager",
      content: "Zion AI Email Analyzer has transformed our email campaigns. We've increased open rates by 45% and reduced spam complaints by 90%.",
      rating: 5,
      avatar: "AF"
    },
    {
      name: "James Wilson",
      company: "Tech Startup Inc",
      role: "Founder",
      content: "The AI categorization saves us hours every day. Our team can focus on important emails while the AI handles the rest.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Maria Rodriguez",
      company: "E-commerce Solutions",
      role: "Customer Success Manager",
      content: "The compliance monitoring feature is a lifesaver. We never have to worry about email regulations anymore.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const analytics = [
    {
      title: "Open Rate Analysis",
      description: "Track and optimize email open rates with detailed insights",
      icon: <Eye className="w-8 h-8" />,
      improvement: "45% increase"
    },
    {
      title: "Click-Through Optimization",
      description: "Improve click-through rates with AI-powered recommendations",
      icon: <Target className="w-8 h-8" />,
      improvement: "60% increase"
    },
    {
      title: "Spam Score Reduction",
      description: "Reduce spam scores and improve deliverability",
      icon: <Shield className="w-8 h-8" />,
      improvement: "90% reduction"
    },
    {
      title: "Response Time Optimization",
      description: "Optimize response times for better customer satisfaction",
      icon: <Clock className="w-8 h-8" />,
      improvement: "50% faster"
    }
  ];

  const integrations = [
    {
      name: "Gmail",
      description: "Seamlessly integrate with Gmail and Google Workspace",
      icon: <Mail className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "Outlook",
      description: "Connect with Microsoft Outlook and Office 365",
      icon: <Inbox className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "Salesforce",
      description: "Sync email data with your CRM system",
      icon: <Database className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "HubSpot",
      description: "Integrate with HubSpot marketing automation",
      icon: <Target className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "Slack",
      description: "Get email insights and alerts in Slack",
      icon: <MessageSquare className="w-6 h-6" />,
      status: "Available"
    },
    {
      name: "Zapier",
      description: "Connect with 2000+ apps through Zapier",
      icon: <Zap className="w-6 h-6" />,
      status: "Available"
    }
  ];

  const useCases = [
    {
      title: "Email Marketing",
      description: "Optimize email campaigns for better engagement and conversion",
      icon: <Send className="w-6 h-6" />,
      results: "45% higher open rates"
    },
    {
      title: "Customer Support",
      description: "Improve response times and customer satisfaction",
      icon: <MessageSquare className="w-6 h-6" />,
      results: "50% faster responses"
    },
    {
      title: "Sales Optimization",
      description: "Track and improve sales email performance",
      icon: <TrendingUp className="w-6 h-6" />,
      results: "35% more conversions"
    },
    {
      title: "Compliance Management",
      description: "Ensure email compliance and reduce legal risks",
      icon: <Shield className="w-6 h-6" />,
      results: "100% compliance rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Email Analyzer - Advanced Email Analytics & Optimization | Zion Tech Group"
        description="Analyze and optimize your emails with AI-powered insights. Track performance, detect spam, and improve deliverability. Starting at $29/month. Free trial available."
        keywords="email analyzer, email analytics, email optimization, spam detection, email marketing, deliverability, email compliance, AI email tools"
        canonical="https://ziontechgroup.com/zion-ai-email-analyzer"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Email Analyzer
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your email strategy with AI-powered analytics and optimization. 
            Track performance, detect spam, improve deliverability, and boost engagement rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
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
              <div className="text-3xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-gray-300">Emails Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-gray-300">Higher Open Rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Spam Detection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Responses</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Analytics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Email Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get detailed insights and optimize your email performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analytics.map((analytic, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {analytic.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{analytic.title}</h3>
                <p className="text-gray-300 mb-4">{analytic.description}</p>
                <div className="text-green-400 font-semibold">{analytic.improvement}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to analyze and optimize your email communications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-cyan-400 text-sm">{feature.price}</p>
                  </div>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From marketing to support, optimize every aspect of your email communications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-green-400 font-semibold">{useCase.results}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite email platforms and tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4">
                    {integration.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                    <span className="text-green-400 text-sm font-medium">{integration.status}</span>
                  </div>
                </div>
                <p className="text-gray-300">{integration.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email volume and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
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
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Email Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Email Analyzer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Emails?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals already using AI to improve their email performance and engagement.
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
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIEmailAnalyzerPage;