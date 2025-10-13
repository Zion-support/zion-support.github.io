import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Box, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Brain,
  Target,
  Settings,
  Palette,
  Download,
  Send,
  Calculator,
  Receipt,
  CreditCard,
  Smartphone,
  Mail,
  Calendar,
  Edit3,
  Save,
  Share2,
  Lock,
  MessageSquare,
  Heart,
  ThumbsUp,
  AlertCircle,
  PieChart,
  Activity,
  Camera,
  Video,
  Image,
  Layers,
  Cube,
  RotateCcw,
  Move3D,
  Lightbulb,
  Wand2,
  Sparkles,
  Gamepad2,
  Building,
  Package,
  ShoppingCart,
  BookOpen
} from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <Box className="w-6 h-6" />,
      title: "AI 3D Model Generation",
      description: "Create detailed 3D models from text descriptions, images, or sketches using advanced AI algorithms"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Material & Texture AI",
      description: "Automatically generate realistic materials, textures, and lighting for your 3D models"
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Style Transfer",
      description: "Apply different artistic styles and aesthetics to your 3D models with AI-powered style transfer"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Animation Generation",
      description: "Create smooth animations and motion sequences for your 3D models automatically"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Multi-Resolution Export",
      description: "Export your 3D models in various formats and resolutions for different use cases"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Smart Optimization",
      description: "AI automatically optimizes polygon count and topology for better performance"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$49",
      period: "/month",
      description: "Perfect for individual creators and small projects",
      features: [
        "50 3D models per month",
        "Basic AI generation",
        "Standard textures",
        "Email support",
        "HD quality exports",
        "Basic animation tools",
        "Standard file formats"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for professional designers and studios",
      features: [
        "200 3D models per month",
        "Advanced AI generation",
        "Premium textures & materials",
        "Priority support",
        "4K quality exports",
        "Advanced animation tools",
        "All file formats",
        "API access",
        "Custom style training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large studios and enterprise clients",
      features: [
        "Unlimited 3D models",
        "Full AI suite & custom models",
        "Unlimited textures & materials",
        "24/7 phone support",
        "8K quality exports",
        "Professional animation suite",
        "Custom integrations",
        "White-label solution",
        "Dedicated account manager",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Game Development",
      description: "Create 3D assets, characters, and environments for games",
      icon: <Box className="w-8 h-8" />
    },
    {
      title: "Architecture",
      description: "Generate 3D architectural visualizations and models",
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Product Design",
      description: "Create 3D prototypes and product visualizations",
      icon: <Package className="w-8 h-8" />
    },
    {
      title: "Film & Animation",
      description: "Generate 3D assets for movies, TV shows, and animations",
      icon: <Video className="w-8 h-8" />
    }
  ];

  const industries = [
    {
      title: "Gaming Industry",
      description: "Create characters, environments, and props for video games",
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      title: "Architecture & Real Estate",
      description: "Generate 3D visualizations for buildings and spaces",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "E-commerce",
      description: "Create 3D product models for online stores",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Education & Training",
      description: "Develop 3D educational content and simulations",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Create 3D Models with AI | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Generate stunning 3D models with AI technology. Create characters, environments, and objects from text or images. Starting at $49/month." 
        />
        <meta 
          name="keywords" 
          content="AI 3D generation, 3D modeling, 3D design, AI 3D models, 3D animation, game development, architectural visualization" 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI 3D Generation",
            "description": "AI-powered 3D model generation and design platform",
            "url": "https://ziontechgroup.com/ai-3d-generation",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "49",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "49",
                "priceCurrency": "USD",
                "billingIncrement": "Monthly"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Box className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered 3D Creation</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI 3D Generation
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create stunning 3D models, characters, and environments with AI technology. 
                Transform your ideas into photorealistic 3D assets in minutes, not hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Creating 3D Models
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  View Demo
                  <Box className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
                  <div className="text-gray-300 text-sm">3D Models Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Export Formats</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">AI Processing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to create professional 3D models with AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From gaming to architecture, our AI 3D generation adapts to your industry needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Creative Workflow
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a game developer, architect, or product designer, our AI accelerates your 3D creation process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with our free trial and scale as your 3D creation needs grow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-cyan-500/20' 
                      : 'border-white/20 hover:border-cyan-500/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create Amazing 3D Models?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators using AI 3D Generation to bring their ideas to life. 
                Start your free trial today!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Box className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">AI-Powered</h3>
                  <p className="text-cyan-400 text-sm">Advanced 3D generation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Fast & Efficient</h3>
                  <p className="text-cyan-400 text-sm">Create models in minutes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Professional Quality</h3>
                  <p className="text-cyan-400 text-sm">Industry-standard results</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DGenerationPage;