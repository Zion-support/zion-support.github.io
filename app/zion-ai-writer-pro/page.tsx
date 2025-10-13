import { ArrowRight, PenTool, Brain, Zap, CheckCircle, Star, FileText, Users, Globe, Shield } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAIWriterPro() {
  const features = [
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Generate high-quality articles, blogs, marketing copy, and technical documentation in seconds"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Writing Assistant",
      description: "AI-powered writing suggestions, grammar correction, and style optimization for professional content"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Write and translate content in 50+ languages with native-level accuracy and cultural context"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Templates",
      description: "500+ professionally designed templates for blogs, emails, social media, and business documents"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools with version control, comments, and approval workflows"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Built-in SEO analysis and optimization suggestions to improve search engine rankings"
    }
  ];

  const pricingPlans = [
    {
      name: "Writer Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individual writers and bloggers",
      features: [
        "Up to 50,000 words/month",
        "Basic AI writing assistant",
        "10 content templates",
        "Email support",
        "Basic SEO analysis",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Writer Professional",
      price: "$49",
      period: "/month",
      description: "Most popular for content teams",
      features: [
        "Up to 200,000 words/month",
        "Advanced AI writing assistant",
        "All 500+ content templates",
        "Priority support",
        "Advanced SEO optimization",
        "Up to 5 user accounts",
        "Team collaboration tools",
        "Content calendar integration"
      ],
      popular: true
    },
    {
      name: "Writer Enterprise",
      price: "$99",
      period: "/month",
      description: "For large content teams and agencies",
      features: [
        "Unlimited words/month",
        "Premium AI writing assistant",
        "Custom content templates",
        "24/7 dedicated support",
        "Advanced analytics & reporting",
        "Unlimited user accounts",
        "White-label solution",
        "API access & integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Blog Writing",
      description: "Create engaging blog posts with AI assistance, SEO optimization, and audience targeting",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Marketing Copy",
      description: "Generate compelling ad copy, email campaigns, and social media content that converts",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Technical Documentation",
      description: "Create comprehensive technical docs, user manuals, and API documentation",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Content Strategy",
      description: "Plan and execute content strategies with AI-powered insights and recommendations",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Content Marketing Agency",
      role: "Content Director",
      content: "Zion AI Writer Pro increased our content production by 300% while maintaining quality. It's a game-changer for our agency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Tech Startup",
      role: "Marketing Manager",
      content: "The AI writing assistant is incredible. It understands our brand voice and creates content that resonates with our audience.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Store",
      role: "Content Creator",
      content: "I've saved 20 hours per week on content creation. The SEO optimization features have improved our search rankings significantly.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Writer Pro - AI Content Generation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Transform your content creation with Zion AI Writer Pro. AI-powered writing assistant, content generation, and SEO optimization for modern content teams."
        />
        <meta
          name="keywords"
          content="AI writing, content generation, writing assistant, content marketing, SEO writing, blog writing, content creation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
              <PenTool className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">#1 AI Writing Platform</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Zion AI Writer Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The ultimate AI-powered writing platform for content creators, marketers, and businesses. 
              Generate high-quality content, optimize for SEO, and scale your content production like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Writing with AI
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Writing Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                <div className="text-gray-300">Words Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">Content Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
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
                Everything you need to create, optimize, and scale your content production with AI assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Writing Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI writing can transform your content strategy and boost productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
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
                      ? 'border-purple-400 bg-gradient-to-br from-purple-500/10 to-cyan-500/10'
                      : 'border-white/20 hover:border-purple-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-purple-500 to-cyan-600 text-white hover:from-purple-600 hover:to-cyan-700'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
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
                See what content creators and marketers say about Zion AI Writer Pro
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
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators using AI to write better, faster, and more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Writing with AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Writing Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}