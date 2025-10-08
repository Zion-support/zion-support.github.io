import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Mail, Target, BarChart3, Users, Clock, Shield, TrendingUp, Smartphone, Globe, Sparkles, Send, Palette, BarChart } from 'lucide-react';

const EmailAIPage: React.FC = () => {
  const features = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "AI-Powered Email Creation",
      description: "Generate compelling subject lines, email content, and CTAs using advanced AI that understands your brand voice."
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Smart Segmentation",
      description: "Automatically segment your audience based on behavior, preferences, and engagement patterns for personalized campaigns."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Advanced Analytics",
      description: "Track open rates, click-through rates, conversions, and revenue with detailed performance insights and recommendations."
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-400" />,
      title: "Drag-and-Drop Builder",
      description: "Create stunning email templates with our intuitive drag-and-drop editor. No coding skills required."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
      title: "A/B Testing",
      description: "Test subject lines, content, send times, and designs to optimize your email performance automatically."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Deliverability Optimization",
      description: "Ensure your emails reach the inbox with our advanced deliverability tools and reputation monitoring."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "5,000 subscribers",
        "Unlimited emails",
        "Basic templates",
        "Email support",
        "Basic analytics",
        "A/B testing (2 variants)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "25,000 subscribers",
        "Unlimited emails",
        "Premium templates",
        "Priority support",
        "Advanced analytics",
        "A/B testing (5 variants)",
        "Automation workflows",
        "Team collaboration (5 users)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations with high volume",
      features: [
        "Unlimited subscribers",
        "Unlimited emails",
        "Custom templates",
        "24/7 phone support",
        "Premium analytics",
        "Advanced A/B testing",
        "Complex automation",
        "Unlimited team members",
        "API access",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const emailTypes = [
    { name: "Newsletter", icon: "📰", description: "Regular updates and news" },
    { name: "Promotional", icon: "🎯", description: "Sales and special offers" },
    { name: "Welcome Series", icon: "👋", description: "Onboarding new subscribers" },
    { name: "Abandoned Cart", icon: "🛒", description: "Recover lost sales" },
    { name: "Transactional", icon: "📧", description: "Order confirmations and receipts" },
    { name: "Re-engagement", icon: "🔄", description: "Win back inactive subscribers" }
  ];

  const testimonials = [
    {
      name: "Rachel Thompson",
      role: "Marketing Director",
      company: "E-commerce Plus",
      content: "Our email open rates increased from 15% to 35% using their AI subject line generator. The ROI has been incredible!",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Founder",
      company: "TechStart Solutions",
      content: "The automation workflows have saved us 20+ hours per week. We can now focus on strategy instead of manual tasks.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Email Marketing Manager",
      company: "Retail Giant",
      content: "The segmentation features are amazing. We've seen a 40% increase in click-through rates by sending more targeted emails.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">📧</span>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 neon-text">
                  AI Email Marketing
                </h1>
                <p className="text-xl text-cyan-400 font-semibold">Send Smarter, Convert Better</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your email marketing with AI-powered content creation, smart segmentation, 
              and advanced automation. Increase open rates, clicks, and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Types Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              All Email Types Covered
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of email campaign with our AI-powered tools
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {emailTypes.map((type, index) => (
              <div key={index} className="cyber-card hologram-card text-center">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="font-semibold text-white mb-2">{type.name}</h3>
                <p className="text-sm text-gray-400">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Powerful Email Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, send, and optimize email campaigns
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our customers see significant improvements in their email marketing performance
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-cyan-400 mb-2">35%</div>
              <div className="text-gray-300">Average Open Rate Increase</div>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-green-400 mb-2">42%</div>
              <div className="text-gray-300">Click-Through Rate Boost</div>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-purple-400 mb-2">28%</div>
              <div className="text-gray-300">Conversion Rate Improvement</div>
            </div>
            <div className="text-center cyber-card">
              <div className="text-4xl font-bold text-orange-400 mb-2">60%</div>
              <div className="text-gray-300">Time Saved on Campaigns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your email marketing needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are transforming their email marketing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="cyber-card hologram-card text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Ready to Revolutionize Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to create better emails that convert. 
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📞 Call (302) 464-0950
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailAIPage;