import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Target, 
  BarChart3, 
  Users, 
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  DollarSign,
  Send,
  TrendingUp,
  Palette,
  Smartphone,
  Monitor,
  Globe,
  MessageSquare,
  PieChart,
  Filter,
  Phone,
  ShoppingCart,
  RefreshCw
} from 'lucide-react';

const AiEmailMarketingProPage: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI-Powered Segmentation",
      description: "Automatically segment your audience based on behavior, preferences, and engagement patterns"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Smart Template Designer",
      description: "AI-generated email templates that adapt to your brand and optimize for conversions"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights with predictive analytics and ROI tracking"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Workflows",
      description: "Create complex email sequences that trigger based on user actions and behaviors"
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Optimal Send Times",
      description: "AI determines the best time to send emails for maximum open and click rates"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Content Optimization",
      description: "A/B testing and AI-powered content suggestions for better performance"
    }
  ];

  const emailTypes = [
    { name: "Newsletter", icon: <Mail className="w-5 h-5" />, color: "text-blue-500" },
    { name: "Promotional", icon: <TrendingUp className="w-5 h-5" />, color: "text-green-500" },
    { name: "Transactional", icon: <MessageSquare className="w-5 h-5" />, color: "text-purple-500" },
    { name: "Welcome Series", icon: <Users className="w-5 h-5" />, color: "text-cyan-500" },
    { name: "Abandoned Cart", icon: <ShoppingCart className="w-5 h-5" />, color: "text-orange-500" },
    { name: "Re-engagement", icon: <RefreshCw className="w-5 h-5" />, color: "text-pink-500" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 subscribers",
        "10,000 emails per month",
        "Basic templates",
        "Email analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 subscribers",
        "Unlimited emails",
        "Advanced templates",
        "AI segmentation",
        "Automated workflows",
        "A/B testing",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited subscribers",
        "Unlimited emails",
        "Custom templates",
        "Advanced AI features",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "2M+", label: "Emails Sent", icon: <Send className="w-6 h-6" /> },
    { number: "45%", label: "Average Open Rate", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "12%", label: "Average Click Rate", icon: <Target className="w-6 h-6" /> },
    { number: "99.9%", label: "Deliverability Rate", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing Pro - Zion Tech Group | Intelligent Email Automation</title>
        <meta name="description" content="Revolutionary AI-powered email marketing platform. Automate campaigns, optimize content, and boost engagement with intelligent segmentation and analytics." />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, email analytics, email segmentation, email templates" />
        <meta property="og:title" content="AI Email Marketing Pro - Zion Tech Group" />
        <meta property="og:description" content="Transform your email marketing with AI-powered automation and optimization." />
        <meta property="og:type" content="website" />
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
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-6xl mx-auto">
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Mail className="w-4 h-4 mr-2" />
                  AI-Powered Email Marketing
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Email Marketing
                  </span>
                  <br />
                  <span className="text-white">Pro</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your email marketing with AI-powered automation, intelligent 
                  segmentation, and advanced analytics. Boost engagement and drive conversions 
                  with personalized, data-driven campaigns.
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
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-cyan-400">{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Advanced Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Powerful AI capabilities that revolutionize your email marketing strategy
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
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Email Types */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Email Campaign Types</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Create and automate various types of email campaigns
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {emailTypes.map((type, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className={`w-12 h-12 mx-auto mb-4 ${type.color} group-hover:scale-110 transition-transform duration-300`}>
                      {type.icon}
                    </div>
                    <h3 className="text-white font-semibold">{type.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your email marketing needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Email Marketing?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using our AI-powered email marketing platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
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
        </main>
      </div>
    </>
  );
};

export default AiEmailMarketingProPage;