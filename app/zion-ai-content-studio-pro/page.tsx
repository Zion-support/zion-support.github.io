import { Link } from "react-router-dom";
import { Sparkles, FileText, PenTool, Search, ArrowRight, Star, Users, Award, Clock, Shield, Globe, Zap } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticBackground from "../components/FuturisticBackground";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const ZionAIContentStudioPro = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Content Studio Pro",
    "description": "AI-powered content creation platform with automated writing, editing, and SEO optimization",
    "url": "https://ziontechgroup.com/zion-ai-content-studio-pro",
    "applicationCategory": "ContentManagementApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "129",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "2100"
    }
  };

  const features = [
    {
      title: "AI Content Generation",
      description: "Generate high-quality articles, blogs, social media posts, and marketing copy using advanced AI",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines with keyword analysis and suggestions",
      icon: <Search className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Multi-Format Support",
      description: "Create content for blogs, social media, emails, ads, and more in one unified platform",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Brand Voice Training",
      description: "Train AI to match your brand's unique voice and tone across all content",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const contentTypes = [
    {
      name: "Blog Articles",
      description: "Long-form content optimized for SEO and engagement",
      icon: <FileText className="w-6 h-6" />,
      price: "From $0.10/word"
    },
    {
      name: "Social Media Posts",
      description: "Engaging posts for all major social platforms",
      icon: <Sparkles className="w-6 h-6" />,
      price: "From $5/post"
    },
    {
      name: "Email Campaigns",
      description: "Professional email templates and sequences",
      icon: <PenTool className="w-6 h-6" />,
      price: "From $15/email"
    },
    {
      name: "Ad Copy",
      description: "High-converting ad copy for Google, Facebook, and more",
      icon: <Zap className="w-6 h-6" />,
      price: "From $25/ad"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$129",
      period: "per month",
      description: "Perfect for small businesses and freelancers",
      features: [
        "50,000 words/month",
        "Basic SEO optimization",
        "5 content templates",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "per month",
      description: "Ideal for marketing teams and agencies",
      features: [
        "150,000 words/month",
        "Advanced SEO optimization",
        "Unlimited templates",
        "Priority support",
        "Team collaboration",
        "Brand voice training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "per month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited words",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Content Marketing Pro",
      role: "Content Director",
      content: "Zion AI Content Studio has transformed our content strategy. We're producing 3x more content with better quality and higher engagement rates.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "Digital Agency Co.",
      role: "Creative Director",
      content: "The SEO optimization features are incredible. Our content ranks higher and drives more organic traffic than ever before.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      company: "E-commerce Solutions",
      role: "Marketing Manager",
      content: "Brand voice training is a game-changer. The AI perfectly captures our brand personality across all content types.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion AI Content Studio Pro - AI-Powered Content Creation & SEO | Zion Tech Group"
        description="Advanced AI content creation platform with automated writing, editing, and SEO optimization. Create engaging content 10x faster. Start from $129/month."
        keywords="AI content creation, content writing, SEO optimization, content marketing, AI writing tools, content automation, brand voice"
        canonical="https://ziontechgroup.com/zion-ai-content-studio-pro"
        author="Zion Tech Group"
        section="AI Services"
        tags={["AI", "Content Creation", "SEO", "Marketing", "Writing"]}
        readingTime={6}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI-Powered Content Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Zion AI Content Studio Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Create engaging, SEO-optimized content 10x faster with AI-powered writing, editing, 
            and optimization across all content types and platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<FileText className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">10x</div>
              <div className="text-gray-300 text-xs md:text-sm">Faster Content Creation</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Search className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-300 text-xs md:text-sm">Better SEO Rankings</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <PenTool className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-xs md:text-sm">Content Templates</div>
            </div>
            <div className="text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">5K+</div>
              <div className="text-gray-300 text-xs md:text-sm">Content Creators</div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Content Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to create, optimize, and manage content at scale with AI assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From blog posts to social media, our AI creates content for every platform and purpose.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {type.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{type.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Content Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your content needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-105' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-300 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Loved by Content Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what content creators and marketers say about Zion AI Content Studio Pro
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of content creators using Zion AI Content Studio Pro to produce 
            engaging, SEO-optimized content at scale. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<FileText className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIContentStudioPro;