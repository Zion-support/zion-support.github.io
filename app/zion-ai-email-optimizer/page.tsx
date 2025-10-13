import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mail, 
  Send, 
  BarChart3, 
  Target, 
  Users, 
  Clock, 
  Zap,
  Brain,
  ArrowRight,
  Star,
  Award,
  Shield,
  Globe,
  CheckCircle,
  TrendingUp,
  Eye,
  Edit,
  Share2,
  Settings,
  Database
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';
import LazyImage from '../components/LazyImage';

const ZionAIEmailOptimizerPage = () => {
  const features = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "AI-Powered Subject Lines",
      description: "Generate compelling subject lines that increase open rates by up to 40%"
    },
    {
      icon: <Edit className="w-6 h-6" />,
      title: "Content Optimization",
      description: "AI analyzes and optimizes email content for maximum engagement and conversion"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Audience Segmentation",
      description: "Automatically segment your audience based on behavior, preferences, and engagement"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Send Time Optimization",
      description: "AI determines the optimal send time for each recipient to maximize open rates"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive analytics and insights to track and improve email performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "A/B Testing",
      description: "Automated A/B testing to find the best performing email variations"
    }
  ];

  const benefits = [
    {
      metric: "40%",
      description: "Average increase in open rates",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      metric: "25%",
      description: "Improvement in click-through rates",
      icon: <Target className="w-8 h-8" />
    },
    {
      metric: "60%",
      description: "Reduction in unsubscribe rates",
      icon: <Users className="w-8 h-8" />
    },
    {
      metric: "3x",
      description: "Faster email campaign creation",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 emails/month",
        "Basic AI optimization",
        "Email templates",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing teams",
      features: [
        "Up to 50,000 emails/month",
        "Advanced AI optimization",
        "Custom templates",
        "Advanced analytics",
        "Priority support",
        "5 user accounts",
        "A/B testing",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI models",
        "White-label solution",
        "Advanced segmentation",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations",
        "Advanced reporting"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Email Optimizer - Boost Email Performance with AI</title>
        <meta name="description" content="Transform your email marketing with Zion AI Email Optimizer. AI-powered subject lines, content optimization, send time optimization, and advanced analytics to boost your email performance." />
        <meta name="keywords" content="email optimization, email marketing, AI email, email automation, email analytics, email performance, marketing automation" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-email-optimizer" />
      </Helmet>

      <EnhancedSEO 
        title="Zion AI Email Optimizer - Boost Email Performance with AI"
        description="Transform your email marketing with Zion AI Email Optimizer. AI-powered subject lines, content optimization, send time optimization, and advanced analytics to boost your email performance."
        keywords="email optimization, email marketing, AI email, email automation, email analytics, email performance, marketing automation"
        canonical="https://ziontechgroup.com/zion-ai-email-optimizer"
      />

      <ResponsiveContainer>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <FuturisticText 
              text="Zion AI Email Optimizer"
              className="text-5xl md:text-7xl font-bold mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your email marketing with AI-powered optimization, 
              intelligent targeting, and performance analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/contact', '_blank')}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact of AI-powered email optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {benefit.metric}
                </div>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Email Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to optimize your email campaigns and boost performance
            </p>
          </div>

          <ResponsiveGrid className="gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">1. Connect Your Email</h3>
              <p className="text-gray-300">
                Connect your email platform and import your existing campaigns and contact lists
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">2. AI Optimization</h3>
              <p className="text-gray-300">
                Our AI analyzes your content and automatically optimizes subject lines, timing, and targeting
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">3. Track & Improve</h3>
              <p className="text-gray-300">
                Monitor performance with detailed analytics and continuously improve your campaigns
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email marketing needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
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
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <FuturisticButton 
                  className="w-full py-3"
                  variant={plan.popular ? 'primary' : 'outline'}
                >
                  Start Free Trial
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <FuturisticCard className="p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Boost Your Email Performance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of marketers already using Zion AI Email Optimizer 
              to increase their email open rates, click-through rates, and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton 
                className="px-8 py-4 text-lg"
                onClick={() => window.open('https://ziontechgroup.com/demo', '_blank')}
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton 
                variant="outline"
                className="px-8 py-4 text-lg"
                onClick={() => window.open('tel:+13024640950', '_blank')}
              >
                Call +1 (302) 464-0950
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </section>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAIEmailOptimizerPage;