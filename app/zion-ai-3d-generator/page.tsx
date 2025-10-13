import React from 'react';
import { Brain, Box, Zap, Palette, Download, Share2, Star, ArrowRight, Target, Users, Clock, CheckCircle, Camera, Image, Video, Layers, RotateCcw, Play } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';

const ZionAI3DGeneratorPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI 3D Generator",
    "description": "Revolutionary AI-powered 3D model generator that creates high-quality 3D assets from text descriptions, images, and sketches in minutes.",
    "url": "https://ziontechgroup.com/zion-ai-3d-generator",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web, Windows, macOS, Linux",
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2156"
    }
  };

  const features = [
    {
      title: "Text-to-3D Generation",
      description: "Create detailed 3D models from simple text descriptions using advanced AI algorithms",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Image-to-3D Conversion",
      description: "Transform 2D images into fully textured 3D models with automatic depth mapping",
      icon: <Image className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Rendering",
      description: "Preview and edit your 3D models with photorealistic real-time rendering",
      icon: <Camera className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multiple Export Formats",
      description: "Export to OBJ, FBX, STL, GLTF, and other industry-standard 3D formats",
      icon: <Download className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI Texture Generation",
      description: "Automatically generate realistic textures and materials for your 3D models",
      icon: <Palette className="w-8 h-8" />,
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "Animation Support",
      description: "Create basic animations and rigging for your 3D models with AI assistance",
      icon: <Play className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$29",
      period: "/month",
      description: "Perfect for individual creators and hobbyists",
      features: [
        "50 3D models per month",
        "Basic text-to-3D generation",
        "Standard resolution exports",
        "Community support",
        "Web access only"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Ideal for designers and small studios",
      features: [
        "200 3D models per month",
        "Advanced AI features",
        "High-resolution exports",
        "Image-to-3D conversion",
        "Priority support",
        "Desktop app access",
        "Commercial license"
      ],
      popular: true
    },
    {
      name: "Studio",
      price: "$149",
      period: "/month",
      description: "For large teams and agencies",
      features: [
        "Unlimited 3D models",
        "All AI features included",
        "4K resolution exports",
        "Team collaboration",
        "API access",
        "Dedicated support",
        "White-label options"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Game Development",
      description: "Create characters, props, and environments for video games",
      icon: <Box className="w-6 h-6" />,
      examples: ["Character models", "Weapon assets", "Environment pieces", "UI elements"]
    },
    {
      title: "Architecture Visualization",
      description: "Generate 3D models for architectural presentations and VR walkthroughs",
      icon: <Box className="w-6 h-6" />,
      examples: ["Building exteriors", "Interior layouts", "Furniture models", "Landscape elements"]
    },
    {
      title: "Product Design",
      description: "Prototype and visualize product concepts before manufacturing",
      icon: <Layers className="w-6 h-6" />,
      examples: ["Product mockups", "Packaging designs", "Concept visualizations", "Marketing assets"]
    },
    {
      title: "3D Printing",
      description: "Create printable 3D models for rapid prototyping and manufacturing",
      icon: <RotateCcw className="w-6 h-6" />,
      examples: ["Prototype parts", "Custom accessories", "Artistic sculptures", "Functional objects"]
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      company: "Pixel Studios",
      role: "3D Artist",
      content: "Zion AI 3D Generator has revolutionized our workflow. What used to take days now takes minutes. The quality is incredible!",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Maria Rodriguez",
      company: "Architectural Design Co.",
      role: "Lead Designer",
      content: "The image-to-3D conversion is mind-blowing. We can now create 3D models from client sketches in real-time during meetings.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "David Kim",
      company: "Indie Game Studio",
      role: "Game Developer",
      content: "As a solo developer, this tool is a game-changer. I can create professional-quality 3D assets without a 3D artist on the team.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const stats = [
    { number: "100,000+", label: "3D Models Generated", icon: <Box className="w-6 h-6" /> },
    { number: "95%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Export Formats", icon: <Download className="w-6 h-6" /> },
    { number: "24/7", label: "AI Processing", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <FuturisticBackgroundEnhanced>
      <EnhancedSEO
        title="Zion AI 3D Generator - Create 3D Models from Text & Images with AI"
        description="Revolutionary AI-powered 3D model generator that creates high-quality 3D assets from text descriptions and images. Perfect for game developers, architects, and designers."
        keywords="AI 3D generator, text to 3D, image to 3D, 3D model creation, AI design tools, 3D asset generation, game development, architectural visualization"
        canonical="https://ziontechgroup.com/zion-ai-3d-generator"
        structuredData={structuredData}
      />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Brain className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered 3D Creation</span>
              </div>
              
              <FuturisticTextEnhanced
                variant="display"
                size="5xl"
                gradient={true}
                animated={true}
                glow={true}
                neon={true}
                className="mb-6"
              >
                Zion AI 3D Generator
              </FuturisticTextEnhanced>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create stunning 3D models from text descriptions and images in minutes, not days. 
                Our advanced AI technology generates high-quality 3D assets for games, architecture, 
                product design, and 3D printing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <FuturisticButtonEnhanced
                  href="#pricing"
                  variant="primary"
                  size="lg"
                  icon={Box}
                  iconPosition="left"
                  glowColor="cyan"
                  neon={true}
                  animated={true}
                >
                  Start Creating
                </FuturisticButtonEnhanced>
                <FuturisticButtonEnhanced
                  href="#demo"
                  variant="outline"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  glowColor="purple"
                  neon={true}
                  animated={true}
                >
                  Watch Demo
                </FuturisticButtonEnhanced>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to create professional-quality 3D models 
                from simple text descriptions or images.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="h-full"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you're a game developer, architect, product designer, or 3D printing enthusiast, 
                our AI 3D Generator adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor="cyan"
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start creating amazing 3D models today. All plans include our core AI features 
                and 30-day money-back guarantee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor={plan.popular ? 'cyan' : 'purple'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className={`relative ${plan.popular ? 'ring-2 ring-cyan-500/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    glowColor={plan.popular ? "cyan" : "purple"}
                    neon={true}
                    animated={true}
                  >
                    Get Started
                  </FuturisticButtonEnhanced>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Creators Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion AI 3D Generator
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCardEnhanced
                  key={index}
                  glowColor="cyan"
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="h-full"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </FuturisticCardEnhanced>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of creators already using AI to bring their ideas to life in 3D. 
              Start your free trial today and experience the future of 3D creation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButtonEnhanced
                href="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                glowColor="cyan"
                neon={true}
                animated={true}
              >
                Start Free Trial
              </FuturisticButtonEnhanced>
              <FuturisticButtonEnhanced
                href="/demo"
                variant="outline"
                size="lg"
                icon={Box}
                iconPosition="left"
                glowColor="purple"
                neon={true}
                animated={true}
              >
                Watch Demo
              </FuturisticButtonEnhanced>
            </div>
          </div>
        </section>
      </main>
    </FuturisticBackgroundEnhanced>
  );
};

export default ZionAI3DGeneratorPage;