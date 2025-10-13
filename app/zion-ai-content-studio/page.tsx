import { ArrowRight, PenTool, Brain, Zap, Target, CheckCircle, Star, FileText, Image, Video, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiContentStudio() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Content Generation",
      description: "Create high-quality content in seconds with advanced AI that understands your brand voice and tone"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines with AI-powered keyword research and optimization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-Format Creation",
      description: "Generate blogs, social media posts, emails, ads, and more from a single content brief"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Visual Content AI",
      description: "Create stunning images, infographics, and visual content with AI-powered design tools"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Script Generation",
      description: "Generate engaging video scripts, storyboards, and content for social media and marketing"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Create content in 50+ languages with native-level quality and cultural adaptation"
    }
  ];

  const contentTypes = [
    "Blog Posts & Articles",
    "Social Media Content",
    "Email Marketing Campaigns",
    "Product Descriptions",
    "Ad Copy & Headlines",
    "Press Releases",
    "White Papers & E-books",
    "Video Scripts",
    "Podcast Show Notes",
    "Landing Page Copy",
    "Email Sequences",
    "Social Media Captions"
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$19",
      period: "/month",
      description: "Perfect for individual creators",
      features: [
        "50 AI-generated pieces/month",
        "Basic templates",
        "Standard image generation",
        "Email support",
        "1 brand voice profile",
        "Basic SEO optimization"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Most popular for content teams",
      features: [
        "200 AI-generated pieces/month",
        "Advanced templates",
        "Premium image generation",
        "Priority support",
        "5 brand voice profiles",
        "Advanced SEO tools",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large content teams",
      features: [
        "Unlimited AI generation",
        "Custom templates",
        "Video script generation",
        "24/7 phone support",
        "Unlimited brand voices",
        "White-label solution",
        "API access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Content Marketing Agency",
      role: "Content Director",
      content: "Zion AI Content Studio has revolutionized our content creation process. We're producing 3x more content with higher quality and better engagement rates.",
      rating: 5
    },
    {
      name: "David Park",
      company: "E-commerce Brand",
      role: "Marketing Manager",
      content: "The AI understands our brand voice perfectly. It's like having a team of expert writers available 24/7. Our content ROI has increased by 80%.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "SaaS Startup",
      role: "Head of Marketing",
      content: "This tool is a game-changer for content marketing. The SEO optimization features alone have doubled our organic traffic in 3 months.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Content Studio - AI-Powered Content Creation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Create high-quality content at scale with Zion AI Content Studio - the ultimate AI-powered content creation platform. Generate blogs, social media, emails, and more with advanced AI."
        />
        <meta
          name="keywords"
          content="AI content creation, content marketing, AI writing, content generation, SEO content, social media content, content automation, AI copywriting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-6">
              <PenTool className="w-4 h-4 text-pink-400 mr-2" />
              <span className="text-pink-400 text-sm font-medium">AI-Powered Content Creation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Zion AI Content Studio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create high-quality content at scale with the world's most advanced AI content creation platform. 
              Generate blogs, social media posts, emails, and more with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">10M+</div>
                <div className="text-gray-300">Pieces Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Content Quality Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Languages Supported</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Content Creation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and scale your content marketing efforts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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

        {/* Content Types List */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Create Any Type of Content
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to social media content, our AI can create everything you need.
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
                Flexible Content Creation Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that matches your content needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-pink-400 bg-gradient-to-br from-pink-500/10 to-purple-500/10'
                      : 'border-white/20 hover:border-pink-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-900'
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
                See what content creators say about Zion AI Content Studio
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
              Ready to Scale Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of content creators using Zion AI Content Studio to produce better content faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-slate-900 transition-all duration-300"
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