import { ArrowRight, Image, Palette, Zap, BarChart3, CheckCircle, Star, Brain, Download, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIImageGenerator() {
  const features = [
    {
      icon: <Image className="w-6 h-6" />,
      title: "AI Image Generation",
      description: "Create stunning images from text descriptions using advanced AI models and neural networks"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Style Transfer",
      description: "Apply artistic styles to images with AI-powered style transfer and creative filters"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Generation",
      description: "Generate high-quality images in seconds with our optimized AI processing pipeline"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Batch Processing",
      description: "Generate multiple images simultaneously with intelligent batch processing and optimization"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Multiple Formats",
      description: "Export images in various formats including PNG, JPEG, SVG, and vector formats"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Custom Training",
      description: "Train custom AI models on your specific image styles and requirements"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Up to 100 images/month",
        "Basic AI models",
        "Standard resolution",
        "Email support",
        "1 user account",
        "Basic styles"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for businesses",
      features: [
        "Up to 1,000 images/month",
        "Advanced AI models",
        "High resolution",
        "Priority support",
        "Up to 5 user accounts",
        "API access",
        "Custom styles",
        "Batch processing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited images",
        "Premium AI models",
        "Custom training",
        "White-label solution",
        "24/7 dedicated support",
        "Unlimited users",
        "Advanced compliance",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "Marketing Agency",
      role: "Creative Director",
      content: "AI Image Generator has revolutionized our creative process. We can create stunning visuals in minutes instead of hours.",
      rating: 5
    },
    {
      name: "David Kim",
      company: "E-commerce Platform",
      role: "Product Manager",
      content: "The quality of generated images is incredible. Our product photos look professional and consistent.",
      rating: 5
    },
    {
      name: "Sarah Wilson",
      company: "Content Creator",
      role: "Social Media Manager",
      content: "I can create unique, eye-catching images for all my social media posts. It's a game-changer for content creation.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Image Generator - Advanced AI-Powered Image Creation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Create stunning images with our AI Image Generator. Advanced AI models, style transfer, and real-time generation for businesses and creators."
        />
        <meta
          name="keywords"
          content="AI image generation, image creation, AI art, style transfer, image processing, creative AI, visual content, image automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Image className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">AI-Powered Image Creation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI Image Generator
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, professional images with our advanced AI Image Generator. 
              Transform text descriptions into beautiful visuals with style transfer and real-time generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                <div className="text-gray-300">Images Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                <div className="text-gray-300">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Art Styles</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Image Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create stunning, professional images with AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your image generation needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-purple-400 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                      : 'border-white/20 hover:border-purple-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
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
                Trusted by Creators & Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what creators and businesses say about our AI Image Generator
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
              Ready to Create Stunning Images?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators and businesses generating amazing visuals with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
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