import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  PenTool, 
  Image, 
  Video, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Zap,
  Target,
  Lightbulb,
  Settings,
  Download,
  Globe,
  Smartphone,
  Laptop,
  Activity,
  BarChart3,
  FileText,
  Mic,
  Camera
} from "lucide-react";

const AIContentGenerationPro = () => {
  const features = [
    {
      title: "AI Writing Assistant",
      description: "Advanced AI that generates high-quality content for blogs, articles, marketing copy, and more",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Blog posts", "Marketing copy", "Product descriptions", "Email campaigns"]
    },
    {
      title: "Visual Content Creation",
      description: "Generate stunning images, graphics, and visual content using AI-powered design tools",
      icon: <Image className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["AI-generated images", "Logo design", "Social media graphics", "Infographics"]
    },
    {
      title: "Video Production",
      description: "Create professional videos with AI-powered editing, voice synthesis, and automated production",
      icon: <Video className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Video editing", "Voice synthesis", "Auto-captioning", "Background removal"]
    },
    {
      title: "Multi-Language Support",
      description: "Generate content in 50+ languages with native-level quality and cultural adaptation",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["50+ languages", "Cultural adaptation", "SEO optimization", "Localization"]
    }
  ];

  const contentTypes = [
    { name: "Blog Posts", icon: "📝", description: "SEO-optimized articles" },
    { name: "Social Media", icon: "📱", description: "Engaging social content" },
    { name: "Email Marketing", icon: "📧", description: "High-converting emails" },
    { name: "Product Descriptions", icon: "🛍️", description: "Compelling product copy" },
    { name: "Video Scripts", icon: "🎬", description: "Professional video content" },
    { name: "Ad Copy", icon: "📢", description: "High-performing advertisements" },
    { name: "Press Releases", icon: "📰", description: "Professional announcements" },
    { name: "Technical Docs", icon: "📋", description: "Clear documentation" }
  ];

  const pricingPlans = [
    {
      name: "Content Creator",
      price: "$99",
      period: "/month",
      description: "Perfect for individual creators",
      features: [
        "1,000 words/month",
        "Basic AI writing",
        "Standard templates",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Content Pro",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "10,000 words/month",
        "Advanced AI features",
        "Custom templates",
        "Priority support",
        "Advanced analytics",
        "Multi-language support"
      ],
      popular: true
    },
    {
      name: "Content Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited content",
        "Full AI suite",
        "Custom AI training",
        "24/7 dedicated support",
        "White-label options",
        "API access"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Content Manager",
      company: "Digital Marketing Agency",
      content: "Zion's AI Content Generation Pro has revolutionized our content production. We're creating 5x more content with 90% less time and effort.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Marketing Director",
      company: "E-commerce Solutions",
      content: "The quality of AI-generated content is incredible. Our conversion rates increased by 40% after implementing their product descriptions.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CEO",
      company: "StartupXYZ",
      content: "We went from spending 20 hours per week on content creation to just 2 hours. The AI understands our brand voice perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generation Pro - Advanced Content Creation Platform</title>
        <meta
          name="description"
          content="Revolutionary AI-powered content generation platform for creating high-quality text, images, videos, and multi-language content at scale."
        />
        <meta
          name="keywords"
          content="AI content generation, content creation, AI writing, visual content, video production, multi-language content"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">AI-Powered Content Generation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Create Content at
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Lightning Speed
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your content strategy with AI-powered generation for text, images, videos, and more. 
            Create high-quality content 10x faster with our advanced AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Creation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Quality Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">1M+</div>
              <div className="text-gray-300">Content Pieces Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Content Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create any type of content with our advanced AI-powered generation tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((featureItem, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From blog posts to videos, our AI can generate any type of content you need.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {contentTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {type.name}
                </h3>
                <p className="text-xs text-gray-400">{type.description}</p>
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
              Flexible Content Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the content generation plan that fits your production needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Content Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about their experience with AI Content Generation Pro.
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
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
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
            Ready to Revolutionize Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of content creators already using AI Content Generation Pro to create amazing content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentGenerationPro;