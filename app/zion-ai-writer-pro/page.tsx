import { ArrowRight, PenTool, FileText, Brain, CheckCircle, Star, Zap, Globe, Users, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiWriterPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Content Generation",
      description: "Generate high-quality content using advanced GPT-4 and Claude models with custom prompts"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Multi-Format Support",
      description: "Create blog posts, articles, social media content, emails, and marketing copy in any format"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Brand Voice Training",
      description: "Train AI to write in your unique brand voice and maintain consistency across all content"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines with keyword suggestions and meta descriptions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Generate content in 50+ languages with native-level quality and cultural adaptation"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track content performance with detailed analytics and engagement metrics"
    }
  ];

  const contentTypes = [
    "Blog Posts & Articles",
    "Social Media Content",
    "Email Marketing Campaigns",
    "Product Descriptions",
    "Ad Copy & Headlines",
    "Press Releases",
    "Technical Documentation",
    "Creative Writing",
    "Academic Papers",
    "Website Copy",
    "Sales Letters",
    "Video Scripts"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individual creators",
      features: [
        "10,000 words per month",
        "Basic AI models",
        "5 content templates",
        "Email support",
        "Basic SEO tools",
        "1 brand voice profile"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Most popular for content teams",
      features: [
        "50,000 words per month",
        "Advanced AI models (GPT-4, Claude)",
        "Unlimited content templates",
        "Priority support",
        "Advanced SEO tools",
        "5 brand voice profiles",
        "Team collaboration",
        "Content calendar"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large content teams",
      features: [
        "Unlimited words",
        "All AI models + custom training",
        "White-label interface",
        "24/7 dedicated support",
        "Advanced analytics",
        "Unlimited brand voices",
        "API access",
        "Custom integrations",
        "Content approval workflows"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Content Marketing Agency",
      role: "Content Director",
      content: "Zion AI Writer Pro has revolutionized our content production. We've increased output by 300% while maintaining quality.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      company: "E-commerce Store",
      role: "Marketing Manager",
      content: "The brand voice training is incredible. Our AI-generated content is indistinguishable from our human writers.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      company: "Tech Startup",
      role: "Content Manager",
      content: "The SEO optimization features have improved our search rankings significantly. ROI is through the roof!",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Writer Pro - Advanced AI Content Generation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your content creation with Zion AI Writer Pro - the ultimate AI-powered writing platform. Generate high-quality content, optimize for SEO, and maintain brand consistency."
        />
        <meta
          name="keywords"
          content="AI content generation, content writing, AI writer, content marketing, SEO optimization, brand voice, content automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <PenTool className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">#1 AI Writing Platform 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Zion AI Writer Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content creation with the most advanced AI-powered writing platform. 
              Generate high-quality content, optimize for SEO, and maintain perfect brand consistency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
                <div className="text-gray-300">Words Generated Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">User Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Writing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create exceptional content at scale with AI assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Content Types Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Create Any Type of Content
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to social media content, our AI can handle any writing task.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contentTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{type}</span>
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
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-blue-400 bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-blue-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
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
                Trusted by Content Creators
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what content professionals say about Zion AI Writer Pro
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
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators using Zion AI Writer Pro to produce exceptional content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}