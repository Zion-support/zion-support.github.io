import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Eye,
  MessageSquare,
  Target,
  PieChart,
  FileText,
  Settings,
  Bell,
  Download,
  Play,
  Pause,
  RefreshCw,
  Heart,
  ThumbsUp,
  AlertTriangle,
  Search,
  PenTool,
  Edit,
  Type,
  Image,
  Video,
  Mic,
  Globe
} from "lucide-react";

export default function AiContentOptimizationPro() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Content Analysis",
      description: "Advanced AI analyzes your content for readability, SEO optimization, engagement potential, and brand consistency across all channels.",
      benefits: ["95% accuracy in content scoring", "Real-time optimization", "Multi-language support"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Intelligent SEO Optimization",
      description: "AI automatically optimizes content for search engines, suggesting keywords, meta descriptions, and content structure improvements.",
      benefits: ["40% better SEO performance", "Keyword optimization", "Content structure analysis"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Smart Content Generation",
      description: "Generate high-quality content variations, headlines, and copy suggestions based on your brand voice and audience preferences.",
      benefits: ["Unlimited content variations", "Brand voice consistency", "Audience targeting"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Audience Engagement Prediction",
      description: "Predict content performance and engagement rates before publishing using machine learning models trained on your audience data.",
      benefits: ["90% engagement prediction accuracy", "Performance forecasting", "Audience insights"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Comprehensive analytics dashboard showing content performance, audience engagement, and optimization recommendations in real-time.",
      benefits: ["Real-time analytics", "Performance tracking", "Optimization insights"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brand Safety & Compliance",
      description: "Ensure content compliance with brand guidelines, industry regulations, and platform policies using AI-powered content moderation.",
      benefits: ["Brand compliance", "Content moderation", "Risk detection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "per month",
      description: "Perfect for content creators and small teams",
      features: [
        "Up to 1,000 content pieces",
        "Basic SEO optimization",
        "Standard analytics",
        "Email support",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for marketing teams and agencies",
      features: [
        "Unlimited content pieces",
        "Advanced AI features",
        "Team collaboration",
        "Priority support",
        "API access",
        "Custom templates"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Advanced security"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Content Marketing Manager",
      company: "Digital Agency Pro",
      content: "AI Content Optimization Pro increased our content engagement by 65% and improved our SEO rankings significantly. The AI suggestions are spot-on.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      company: "TechStart Inc.",
      content: "The audience engagement prediction feature is incredible. We can now optimize content before publishing and see 3x better performance.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Content Director",
      company: "MediaCorp",
      content: "The brand safety features saved us from several potential PR disasters. The AI catches issues we would never have noticed.",
      rating: 5
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "Optimize blog content for SEO, readability, and engagement with AI-powered suggestions.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Social Media",
      description: "Create engaging social media posts with optimal timing, hashtags, and content structure.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Email Marketing",
      description: "Optimize email subject lines, content, and CTAs for maximum open and click rates.",
      icon: <Mail className="w-6 h-6" />
    },
    {
      title: "Video Content",
      description: "Optimize video titles, descriptions, and thumbnails for maximum engagement and discoverability.",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "Product Descriptions",
      description: "Create compelling product descriptions that convert visitors into customers.",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Press Releases",
      description: "Optimize press releases for media pickup and search engine visibility.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const metrics = [
    {
      title: "Engagement Rate",
      improvement: "+65%",
      description: "Average increase in content engagement"
    },
    {
      title: "SEO Performance",
      improvement: "+40%",
      description: "Better search engine rankings"
    },
    {
      title: "Content Creation Speed",
      improvement: "+80%",
      description: "Faster content production"
    },
    {
      title: "Brand Consistency",
      improvement: "+95%",
      description: "Improved brand voice consistency"
    }
  ];

  const useCases = [
    {
      title: "Content Marketing",
      description: "Optimize blog posts, articles, and content for maximum engagement and SEO performance.",
      icon: <Edit className="w-6 h-6" />
    },
    {
      title: "Social Media Management",
      description: "Create and optimize social media content across all platforms for maximum reach and engagement.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "E-commerce",
      description: "Optimize product descriptions, category pages, and marketing copy for better conversions.",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "PR & Communications",
      description: "Optimize press releases, announcements, and corporate communications for maximum impact.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const optimizationExamples = [
    {
      title: "SEO Optimization",
      description: "Automatically optimize meta descriptions, headings, and content structure for better search rankings.",
      improvement: "40% better SEO performance"
    },
    {
      title: "Readability Enhancement",
      description: "Improve content readability with AI-powered suggestions for sentence structure and vocabulary.",
      improvement: "60% better readability scores"
    },
    {
      title: "Engagement Optimization",
      description: "Optimize headlines, CTAs, and content structure for maximum audience engagement.",
      improvement: "65% higher engagement rates"
    },
    {
      title: "Brand Voice Consistency",
      description: "Ensure all content maintains consistent brand voice and messaging across all channels.",
      improvement: "95% brand consistency score"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Helmet>
        <title>AI Content Optimization Pro - Advanced Content Marketing & SEO | Zion Tech Group</title>
        <meta name="description" content="Transform your content marketing with AI-powered optimization. Increase engagement by 65%, improve SEO by 40%, and create better content 80% faster." />
        <meta name="keywords" content="AI content optimization, content marketing, SEO optimization, content analytics, brand voice, content generation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-optimization-pro" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Content Optimization Pro - Advanced Content Marketing & SEO" />
        <meta property="og:description" content="Transform your content marketing with AI-powered optimization. Increase engagement by 65%, improve SEO by 40%, and create better content 80% faster." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-optimization-pro" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Content Optimization Pro - Advanced Content Marketing & SEO" />
        <meta name="twitter:description" content="Transform your content marketing with AI-powered optimization. Increase engagement by 65%, improve SEO by 40%, and create better content 80% faster." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Content Optimization Pro",
            "description": "Advanced content optimization platform with AI-powered SEO and engagement optimization",
            "url": "https://ziontechgroup.com/ai-content-optimization-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "39",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6">
            <PenTool className="w-5 h-5 mr-2 text-orange-400" />
            <span className="text-orange-300 font-medium">AI-Powered Content Optimization</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Content Optimization
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content marketing with AI-powered optimization. Increase engagement by 65%, improve SEO by 40%, 
            and create better content 80% faster with intelligent content analysis and optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-orange-500 text-orange-300 font-semibold rounded-lg hover:bg-orange-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Link>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">{metric.improvement}</div>
                <div className="text-gray-300 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to optimize your content for maximum impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-orange-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Optimize Every Content Type
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI works across all content types to maximize your marketing impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((content, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-orange-400 mb-4 flex justify-center">
                    {content.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Examples Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Optimization Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI optimization delivers measurable improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationExamples.map((example, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                  <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                    {example.improvement}
                  </div>
                </div>
                <p className="text-gray-300">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Marketing Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI content optimization platform adapts to your marketing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-orange-400 mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content marketing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-orange-500 ring-2 ring-orange-500/20' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
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
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600'
                      : 'border border-orange-500 text-orange-300 hover:bg-orange-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Content Marketers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Content Optimization Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
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
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of marketers already using AI Content Optimization Pro to create better content faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-orange-500 text-orange-300 font-semibold rounded-lg hover:bg-orange-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}