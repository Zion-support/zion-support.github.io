import { ArrowRight, Cube, Zap, Target, BarChart3, CheckCircle, Clock, DollarSign, Users, Settings, Globe, FileText, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AI3DGeneration() {
  const features = [
    {
      title: "AI-Powered 3D Modeling",
      description: "Generate high-quality 3D models from text descriptions, images, or sketches using advanced AI algorithms",
      icon: <Cube className="w-6 h-6" />,
      included: true
    },
    {
      title: "Real-time Rendering",
      description: "Real-time 3D rendering with photorealistic materials, lighting, and textures for instant previews",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "Animation Generation",
      description: "Create smooth 3D animations and motion graphics with AI-powered keyframe generation",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Material Library",
      description: "Extensive library of AI-generated materials, textures, and shaders for realistic 3D objects",
      icon: <FileText className="w-6 h-6" />,
      included: true
    },
    {
      title: "Team Collaboration",
      description: "Collaborate on 3D projects with real-time editing, comments, and version control",
      icon: <Users className="w-6 h-6" />,
      included: true
    },
    {
      title: "Export & Integration",
      description: "Export to popular 3D formats and integrate with Blender, Maya, Unity, and other 3D software",
      icon: <Globe className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: 39,
      period: "month",
      description: "Perfect for individual creators",
      features: [
        "Up to 100 3D models/month",
        "Basic materials",
        "Email support",
        "1 user account",
        "Standard export formats",
        "Basic rendering"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for 3D artists and studios",
      features: [
        "Up to 1,000 3D models/month",
        "Premium materials",
        "Priority support",
        "Up to 5 user accounts",
        "All export formats",
        "Advanced rendering",
        "Animation tools",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 249,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited 3D models",
        "Custom materials",
        "Dedicated support",
        "Unlimited users",
        "Custom export formats",
        "White-label solution",
        "Custom integrations",
        "SSO integration"
      ],
      popular: false
    }
  ];

  const generationStats = [
    { number: "10x", label: "Faster 3D Creation", icon: <Cube className="w-6 h-6" /> },
    { number: "95%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Export Formats", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "AI Generation", icon: <Sparkles className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "Game Development Studio",
      role: "3D Artist",
      content: "AI 3D Generation has revolutionized our workflow. We can create 10x more 3D assets in the same time, and the quality is incredible.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Sarah Martinez",
      company: "Architecture Firm",
      role: "Visualization Specialist",
      content: "The AI-powered 3D modeling is amazing. We can quickly generate architectural visualizations from sketches, saving us hours of work.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Kim",
      company: "Product Design Agency",
      role: "Creative Director",
      content: "The material library and real-time rendering features are fantastic. Our clients love seeing photorealistic product renders instantly.",
      rating: 5,
      avatar: "DK"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - AI-Powered 3D Modeling & Animation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Create stunning 3D models with AI 3D Generation - the ultimate AI-powered 3D modeling platform. Generate models from text, images, and sketches with real-time rendering. Starting at $39/month."
        />
        <meta
          name="keywords"
          content="AI 3D generation, 3D modeling, 3D animation, 3D rendering, AI modeling, 3D design, product visualization, architectural rendering"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Cube className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">#1 AI 3D Generation Platform 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 animate-pulse">
                AI 3D Generation
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered 3D generation platform that creates stunning 3D models, animations, and visualizations. 
              Generate from text, images, or sketches with real-time rendering and professional-quality output.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>

            {/* Generation Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {generationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Advanced 3D Generation Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create stunning 3D content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  3D Generation Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your 3D creation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10' 
                      : 'border-white/20 hover:border-purple-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25'
                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by 3D Artists
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI 3D Generation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Cube key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Creating 3D Content
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of 3D artists who use AI 3D Generation to create stunning content. 
              Start your free trial today - no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}