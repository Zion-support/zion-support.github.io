import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Zap, CheckCircle, ArrowRight, Star, Clock, Users, Globe } from 'lucide-react';

const AiContentGenerationProPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI-Powered Content Creation",
      description: "Generate high-quality articles, blogs, and marketing copy with advanced AI algorithms"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines with built-in SEO analysis"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Create content in 50+ languages with native-level quality and cultural adaptation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Brand Voice Customization",
      description: "Train AI to match your brand's unique tone, style, and personality"
    }
  ];

  const capabilities = [
    "Blog Articles & Posts",
    "Marketing Copy", 
    "Product Descriptions",
    "Email Campaigns",
    "Social Media Content",
    "Press Releases",
    "Technical Documentation",
    "Creative Writing",
    "Newsletters",
    "Ad Copy",
    "Landing Pages",
    "White Papers"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and bloggers",
      features: [
        "Up to 10,000 words/month",
        "5 content templates",
        "Basic SEO optimization",
        "Email support",
        "Standard AI models",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month", 
      description: "Ideal for growing content teams",
      features: [
        "Up to 50,000 words/month",
        "25 content templates",
        "Advanced SEO optimization",
        "Priority support",
        "Premium AI models",
        "Advanced analytics",
        "Brand voice training",
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
        "Unlimited words",
        "Unlimited templates",
        "Full SEO suite",
        "24/7 dedicated support",
        "Custom AI models",
        "Complete analytics",
        "Custom integrations",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer Pro - Zion Tech Group | Advanced Content Generation</title>
        <meta name="description" content="Revolutionary AI-powered content generation platform with SEO optimization, multi-language support, and brand voice customization for businesses of all sizes." />
        <meta name="keywords" content="ai content writer, content generation, seo optimization, brand voice, content marketing, ai writing" />
        <meta property="og:title" content="AI Content Writer Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered content generation platform" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Writer Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your content strategy with AI-powered writing that understands your brand, 
                optimizes for SEO, and delivers engaging content at scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that understands context, brand voice, and SEO requirements
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Content Types We Generate</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to marketing copy, our AI creates content for every need
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {capability}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your content needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
                <div className="text-gray-300 text-lg">Faster Content Creation</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-lg">Languages Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Content Accuracy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Always Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Content Strategy?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI Content Writer Pro to create engaging, 
                SEO-optimized content at scale. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiContentGenerationProPage;