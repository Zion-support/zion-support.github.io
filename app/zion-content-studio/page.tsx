import { ArrowRight, CheckCircle, Code, Zap, Users, Clock, Star, PenTool, Image, Video, FileText, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionContentStudio() {
  const features = [
    "AI-powered content generation for all formats",
    "Multi-language support (50+ languages)",
    "Brand voice training and consistency",
    "SEO optimization and keyword research",
    "Social media scheduling and automation",
    "Content calendar and planning tools",
    "Plagiarism detection and originality check",
    "Image and video generation with AI",
    "Content performance analytics",
    "Team collaboration and approval workflows"
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$79",
      period: "month",
      description: "Perfect for individual creators",
      features: [
        "Up to 100 content pieces/month",
        "Basic AI content generation",
        "Social media scheduling",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Ideal for content teams",
      features: [
        "Up to 500 content pieces/month",
        "Advanced AI generation",
        "Brand voice training",
        "Priority support",
        "Up to 5 user accounts",
        "Content analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited content pieces",
        "Custom AI models",
        "White-label options",
        "24/7 support",
        "Unlimited users",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "10x Faster Content Creation",
      description: "Generate high-quality content in minutes, not hours, with our advanced AI technology."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using our collaboration tools and approval workflows."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Create content in 50+ languages to reach your global audience effectively."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Brand Consistency",
      description: "Maintain consistent brand voice and style across all your content with AI training."
    }
  ];

  const contentTypes = [
    { name: "Blog Posts", icon: <FileText className="w-6 h-6" />, count: "10,000+" },
    { name: "Social Media", icon: <Users className="w-6 h-6" />, count: "50,000+" },
    { name: "Email Campaigns", icon: <PenTool className="w-6 h-6" />, count: "25,000+" },
    { name: "Product Descriptions", icon: <Code className="w-6 h-6" />, count: "15,000+" },
    { name: "Ad Copy", icon: <Zap className="w-6 h-6" />, count: "8,000+" },
    { name: "Video Scripts", icon: <Video className="w-6 h-6" />, count: "5,000+" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Content Studio - AI-Powered Content Creation Platform</title>
        <meta
          name="description"
          content="Create amazing content with Zion Content Studio - the most advanced AI-powered content creation platform. Generate, optimize, and schedule content across all channels."
        />
        <meta
          name="keywords"
          content="content creation, AI writing, content marketing, social media management, SEO content, brand voice"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Code className="w-12 h-12 text-purple-400 mr-4" />
                  <span className="text-purple-400 font-semibold">Zion Content Studio</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  AI-Powered
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}Content Creation
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Create amazing content at scale with our advanced AI platform. Generate, optimize, 
                  and schedule content across all channels with brand consistency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Content Created</div>
                      <div className="text-white text-2xl font-bold">50K+</div>
                      <div className="text-green-300 text-sm">This month</div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-4">
                      <div className="text-white text-sm font-medium">Time Saved</div>
                      <div className="text-white text-2xl font-bold">85%</div>
                      <div className="text-green-300 text-sm">vs manual</div>
                    </div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Code className="w-16 h-16 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Create Any Type of Content
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to social media, we help you create engaging content across all channels.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {contentTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {type.icon}
                  </div>
                  <div className="text-white font-semibold mb-2">{type.name}</div>
                  <div className="text-gray-400 text-sm">{type.count} created</div>
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
                Powerful Content Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, manage, and optimize your content strategy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Content Studio?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of content creators and marketers who trust us to power their content strategy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple Content Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content needs. All plans include a 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-purple-400 ring-2 ring-purple-400/20' : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
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

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Creating Amazing Content
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to scale their content production.
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
                to="/contact"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: +1 302 464 0950 | ✉️ Email: kleber@ziontechgroup.com</p>
              <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}