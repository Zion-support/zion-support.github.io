import React from 'react';
import { ArrowRight, CheckCircle, Star, Mail, Brain, Zap, Shield, TrendingUp, Target, Award, Phone, Globe, Eye, BarChart3, Users } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';
import ResponsiveGrid from '../../components/ResponsiveGrid';

const ZionAIEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Email Analysis",
      description: "Analyze email content, tone, and effectiveness using advanced natural language processing",
      icon: <Brain className="w-8 h-8" />,
      details: [
        "Sentiment analysis",
        "Tone detection",
        "Readability scoring",
        "Engagement prediction"
      ]
    },
    {
      title: "Smart Email Optimization",
      description: "Get AI-powered suggestions to improve your email performance and deliverability",
      icon: <Zap className="w-8 h-8" />,
      details: [
        "Subject line optimization",
        "Content improvement suggestions",
        "Send time optimization",
        "A/B testing recommendations"
      ]
    },
    {
      title: "Advanced Security Scanning",
      description: "Detect phishing attempts, malware, and security threats in your email communications",
      icon: <Shield className="w-8 h-8" />,
      details: [
        "Phishing detection",
        "Malware scanning",
        "Suspicious link analysis",
        "Threat intelligence"
      ]
    }
  ];

  const pricing = [
    {
      name: "Personal",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and freelancers",
      features: [
        "Up to 1,000 emails per month",
        "Basic analysis features",
        "Email support",
        "Standard security scanning",
        "Basic optimization tips",
        "Email templates"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$99",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "Up to 10,000 emails per month",
        "Advanced AI analysis",
        "Priority support",
        "Advanced security features",
        "Team collaboration",
        "Custom templates",
        "API integration",
        "Detailed analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with high email volume",
      features: [
        "Unlimited emails",
        "Full AI suite",
        "24/7 phone support",
        "White-label solution",
        "Custom AI models",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom reporting"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      company: "Marketing Agency",
      role: "Email Marketing Manager",
      content: "The AI email analyzer has improved our open rates by 40% and click-through rates by 60%. The optimization suggestions are incredibly accurate.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Sarah Kim",
      company: "E-commerce Store",
      role: "Customer Success Manager",
      content: "The security scanning has caught several phishing attempts that would have compromised our customer data. It's an essential tool for our business.",
      rating: 5,
      avatar: "SK"
    },
    {
      name: "Michael Rodriguez",
      company: "SaaS Company",
      role: "VP of Marketing",
      content: "The sentiment analysis helps us understand customer feedback better. We've improved our customer satisfaction scores by 35%.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const stats = [
    { label: "Emails Analyzed", value: "50M+", icon: <Mail className="w-6 h-6" /> },
    { label: "Threats Detected", value: "1M+", icon: <Shield className="w-6 h-6" /> },
    { label: "Open Rate Improvement", value: "40%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "User Satisfaction", value: "97%", icon: <Award className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      title: "Improved Email Performance",
      description: "Increase open rates, click-through rates, and conversions with AI-powered optimization",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Enhanced Security",
      description: "Protect your organization from phishing, malware, and other email-based threats",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Better Communication",
      description: "Improve email tone, clarity, and effectiveness with AI-powered suggestions",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Time Savings",
      description: "Automate email analysis and get instant insights to improve your communication",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Email Analyzer - Smart Email Analysis with AI | Zion Tech Group"
        description="Analyze, optimize, and secure your emails with AI-powered insights. Improve email performance, detect threats, and enhance communication effectiveness."
        keywords="AI email analyzer, email analysis, email optimization, email security, phishing detection, email performance, email intelligence"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <Mail className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">AI-Powered Email Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Email Analyzer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your email communication with AI-powered analysis, optimization, and security. 
              Improve performance, detect threats, and enhance your email effectiveness.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <FuturisticButton
                href="#pricing"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="#demo"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                View Demo
              </FuturisticButton>
            </div>

            {/* Stats */}
            <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                    <div className="text-orange-400">{stat.icon}</div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </ResponsiveGrid>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Email Analysis?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Unlock the full potential of your email communication
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful AI capabilities to enhance your email communication
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2 text-left">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Scale your email analysis as your needs grow
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <FuturisticButton
                  href="/contact"
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700' : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white'}`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of users improving their email communication with AI
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Email Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI email analysis. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                View Demo
              </FuturisticButton>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
                <div className="flex items-center justify-center">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </div>
                <div className="flex items-center justify-center">
                  <Globe className="w-4 h-4 mr-2" />
                  ziontechgroup.com
                </div>
              </div>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ZionAIEmailAnalyzerPage;