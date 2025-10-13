import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  VideoCameraIcon,
  PhotoIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSAIContentStudioPage() {
  const features = [
    {
      title: "AI Video Generation",
      description: "Create professional videos from text prompts with AI-powered video generation technology.",
      icon: VideoCameraIcon,
      features: [
        "Text-to-video generation",
        "Multiple video styles",
        "HD quality output",
        "Custom branding",
        "Voice synthesis",
        "Auto-editing"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$29/month",
      benefits: ["10x faster creation", "Professional quality", "No editing skills needed"],
      useCases: ["Marketing videos", "Social media content", "Training materials"]
    },
    {
      title: "AI Image Creation",
      description: "Generate stunning images, graphics, and artwork using advanced AI image generation models.",
      icon: PhotoIcon,
      features: [
        "Text-to-image generation",
        "Style transfer",
        "Background removal",
        "Image upscaling",
        "Custom art styles",
        "Batch processing"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$19/month",
      benefits: ["Unlimited generations", "High resolution", "Commercial license"],
      useCases: ["Blog graphics", "Social media", "Marketing materials"]
    },
    {
      title: "AI Audio Production",
      description: "Create professional audio content including voiceovers, music, and sound effects using AI.",
      icon: SpeakerWaveIcon,
      features: [
        "Text-to-speech synthesis",
        "Music generation",
        "Sound effect creation",
        "Voice cloning",
        "Audio editing",
        "Multiple languages"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$24/month",
      benefits: ["Natural voices", "Royalty-free", "Custom voices"],
      useCases: ["Podcasts", "Video narration", "Audio ads"]
    },
    {
      title: "AI Writing Assistant",
      description: "Advanced AI writing tools for creating engaging content across all platforms and formats.",
      icon: DocumentTextIcon,
      features: [
        "Blog post generation",
        "Social media content",
        "Email marketing",
        "Product descriptions",
        "SEO optimization",
        "Tone adjustment"
      ],
      color: "from-orange-500 to-red-500",
      price: "$15/month",
      benefits: ["SEO optimized", "Multiple tones", "Plagiarism free"],
      useCases: ["Content marketing", "Social media", "Email campaigns"]
    },
    {
      title: "AI Design Automation",
      description: "Automate design workflows with AI-powered tools for logos, layouts, and visual content.",
      icon: LightBulbIcon,
      features: [
        "Logo generation",
        "Layout automation",
        "Color palette creation",
        "Font matching",
        "Brand consistency",
        "Template generation"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$22/month",
      benefits: ["Brand consistency", "Time saving", "Professional results"],
      useCases: ["Branding", "Web design", "Marketing materials"]
    },
    {
      title: "AI Content Analytics",
      description: "Analyze content performance and optimize for better engagement using AI insights.",
      icon: ChartBarIcon,
      features: [
        "Performance tracking",
        "Engagement analysis",
        "Trend identification",
        "Optimization suggestions",
        "A/B testing",
        "ROI measurement"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "$18/month",
      benefits: ["Data-driven insights", "Performance optimization", "ROI tracking"],
      useCases: ["Content strategy", "Performance optimization", "Marketing ROI"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for individuals and small businesses",
      features: [
        "100 AI-generated videos/month",
        "500 AI-generated images/month",
        "10,000 words AI writing/month",
        "Basic templates",
        "Standard support",
        "Commercial license"
      ],
      color: "from-slate-600 to-slate-700",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "500 AI-generated videos/month",
        "2,000 AI-generated images/month",
        "50,000 words AI writing/month",
        "Premium templates",
        "Priority support",
        "Team collaboration",
        "API access",
        "Custom branding"
      ],
      color: "from-purple-600 to-cyan-600",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with high-volume needs",
      features: [
        "Unlimited AI-generated content",
        "Advanced analytics",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantee",
        "Training sessions",
        "Custom AI models"
      ],
      color: "from-slate-600 to-slate-700",
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Studio - Micro SaaS | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI Content Studio micro SaaS platform for creating videos, images, audio, and written content using artificial intelligence. Start your creative journey today!" />
        <meta name="keywords" content="AI content creation, micro SaaS, video generation, image creation, AI writing, content automation, creative AI tools" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-500 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-indigo-500 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Content Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The Ultimate AI-Powered Content Creation Platform
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Create professional videos, stunning images, engaging audio, and compelling written content 
              using cutting-edge artificial intelligence. No design skills required - just your creativity 
              and our AI-powered tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Creating Now
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Try Free Demo
                <RocketLaunchIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI-Powered Content Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional content with artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{feature.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all block"
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative bg-gradient-to-br ${plan.color} p-8 rounded-xl border-2 ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : 'border-slate-600'
                } transition-all duration-300 hover:transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                    plan.popular
                      ? 'bg-white text-slate-900 hover:bg-gray-100'
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AI Content Studio */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Content Studio?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The most advanced AI content creation platform on the market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">10x Faster Creation</h3>
              <p className="text-gray-300">
                Create professional content in minutes instead of hours with our AI-powered tools.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Commercial License</h3>
              <p className="text-gray-300">
                All generated content comes with full commercial rights for your business use.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Skills Required</h3>
              <p className="text-gray-300">
                Create professional content without any design, writing, or technical skills.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Analytics</h3>
              <p className="text-gray-300">
                Track content performance and optimize for better engagement and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Start your AI-powered content creation journey today
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <GlobeAltIcon className="w-6 h-6 text-purple-400" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}