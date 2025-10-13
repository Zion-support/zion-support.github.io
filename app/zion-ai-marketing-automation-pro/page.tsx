import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Target, Brain, Zap, BarChart3, Users, Mail, Star, Play, Download, TrendingUp, MessageSquare, Calendar } from "lucide-react";

export default function ZionAIMarketingAutomationPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Campaign Creation",
      description: "Generate high-converting marketing campaigns using advanced AI that understands your audience and industry"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Audience Segmentation",
      description: "Automatically segment your audience based on behavior, demographics, and engagement patterns"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Personalization",
      description: "Deliver personalized content and offers to each customer in real-time across all channels"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics & Insights",
      description: "Get deep insights into campaign performance with AI-powered analytics and predictive modeling"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Multi-Channel Automation",
      description: "Automate email, SMS, social media, and web push notifications from a single platform"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Scoring & Nurturing",
      description: "Automatically score leads and nurture them through personalized sequences until they're ready to buy"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 contacts",
        "5 email campaigns per month",
        "Basic automation workflows",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 contacts",
        "Unlimited email campaigns",
        "Advanced automation workflows",
        "AI-powered personalization",
        "Priority support",
        "Advanced analytics",
        "Multi-channel campaigns",
        "A/B testing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited contacts",
        "Unlimited campaigns",
        "Full AI suite",
        "Custom integrations",
        "24/7 dedicated support",
        "Advanced reporting",
        "White-label options",
        "API access",
        "Custom workflows"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Marketing Director",
      company: "GrowthCorp",
      content: "Zion AI Marketing Automation Pro increased our conversion rates by 65% and reduced our manual work by 80%. The AI-powered personalization is incredible.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "The automation workflows are so intuitive. We set up complex nurture sequences in minutes that would have taken weeks to build manually.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "VP Marketing",
      company: "ScaleUp Solutions",
      content: "The AI insights have transformed how we approach marketing. We now make data-driven decisions that actually move the needle.",
      rating: 5
    }
  ];

  const stats = [
    { number: "300%", label: "Average ROI Increase" },
    { number: "85%", label: "Time Saved on Campaigns" },
    { number: "2.5x", label: "Higher Conversion Rates" },
    { number: "50K+", label: "Happy Customers" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Marketing Automation Pro - Advanced AI-Powered Marketing Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your marketing with Zion AI Marketing Automation Pro. AI-powered campaigns, smart segmentation, real-time personalization, and multi-channel automation. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="AI marketing automation, marketing AI, campaign automation, lead nurturing, personalization, email marketing, marketing analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full text-purple-400 text-sm font-semibold mb-6">
                <Target className="w-4 h-4 mr-2" />
                AI-Powered Marketing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion AI Marketing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {" "}Automation Pro
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                The most advanced AI-powered marketing automation platform. Create high-converting campaigns, 
                personalize every interaction, and scale your marketing efforts with artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Marketing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, automate, and optimize your marketing campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your marketing needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 hover:bg-white/20 ${
                    plan.popular 
                      ? 'border-purple-400 scale-105' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-300 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Marketers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of marketers who have transformed their campaigns with AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-purple-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the future of AI-powered marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-purple-400">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-purple-400">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-purple-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
