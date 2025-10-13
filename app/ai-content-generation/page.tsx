import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Brain, FileText, Image, Video, Music, Zap, CheckCircle, ArrowRight, Star, Clock, Users, DollarSign } from "lucide-react";

const AIContentGenerationPage = () => {
  const features = [
    {
      title: "AI Text Generation",
      description: "Generate high-quality articles, blogs, and marketing copy with advanced AI",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI Image Creation",
      description: "Create stunning visuals and graphics using cutting-edge AI image generation",
      icon: <Image className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI Video Production",
      description: "Generate professional videos with AI-powered editing and effects",
      icon: <Video className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Audio Generation",
      description: "Create voiceovers, music, and sound effects with AI technology",
      icon: <Music className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const contentTypes = [
    "Blog Articles & Posts",
    "Social Media Content",
    "Marketing Copy",
    "Product Descriptions",
    "Email Campaigns",
    "Press Releases",
    "Technical Documentation",
    "Creative Writing",
    "SEO Content",
    "Ad Copy"
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$49",
      period: "/month",
      description: "Perfect for content creators",
      features: [
        "10,000 words/month",
        "50 AI images",
        "5 AI videos",
        "Basic templates",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for marketing teams",
      features: [
        "50,000 words/month",
        "200 AI images",
        "20 AI videos",
        "Premium templates",
        "Priority support",
        "Brand voice training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited words",
        "Unlimited images",
        "Unlimited videos",
        "Custom templates",
        "24/7 dedicated support",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  const stats = [
    { label: "Content Types", value: "50+", icon: <FileText className="w-6 h-6" /> },
    { label: "Languages Supported", value: "25+", icon: <Users className="w-6 h-6" /> },
    { label: "Generation Speed", value: "10x Faster", icon: <Zap className="w-6 h-6" /> },
    { label: "Quality Score", value: "98%", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 quantum-field"></div>
      <div className="absolute inset-0 holographic-grid"></div>
      <div className="absolute inset-0 plasma-effect"></div>
      
      <div className="relative z-10">
        <Helmet>
          <title>AI Content Generation - Zion Tech Group</title>
          <meta
            name="description"
            content="Generate high-quality content with AI-powered text, image, video, and audio creation. Transform your content strategy with cutting-edge AI technology."
          />
          <meta
            name="keywords"
            content="AI content generation, content creation, AI writing, AI images, AI videos, content marketing, automated content"
          />
        </Helmet>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6 border border-purple-500/30">
                ✨ AI-Powered Content Creation
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI Content
              <span className="block text-cyberpunk neon-advanced mt-2">
                Generation Studio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create stunning content at scale with our advanced AI-powered platform. 
              Generate text, images, videos, and audio content that engages your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="btn-quantum text-lg px-12 py-4"
              >
                Start Creating
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                to="/demo"
                className="holographic-card text-purple-400 px-12 py-4 text-lg font-semibold hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Try Demo
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="holographic-card p-6 text-center">
                  <div className="text-purple-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content <span className="text-cyberpunk neon-advanced">Types</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Generate any type of content you need for your business
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {contentTypes.map((type, index) => (
                <div
                  key={index}
                  className="holographic-card hover-quantum p-4 text-center group"
                >
                  <div className="text-purple-400 mb-2">
                    <FileText className="w-6 h-6 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="text-cyberpunk neon-advanced">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to create amazing content with AI
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="holographic-card hover-quantum p-8 text-center group"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto neon-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-cyberpunk neon-advanced">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan for your content needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`holographic-card hover-quantum p-8 relative ${
                    plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-purple-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'btn-quantum'
                        : 'holographic-card text-purple-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="holographic-card p-12 relative overflow-hidden">
              <div className="absolute inset-0 data-stream"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to <span className="text-cyberpunk neon-advanced">Create</span> Amazing Content?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of creators using our AI platform to produce engaging content at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="btn-quantum text-lg px-12 py-4"
                  >
                    Start Creating
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                  <Link
                    to="/demo"
                    className="holographic-card text-purple-400 px-12 py-4 text-lg font-semibold hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    Try Demo
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIContentGenerationPage;