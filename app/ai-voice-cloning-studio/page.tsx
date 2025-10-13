import React from "react";
import { Link } from "react-router-dom";
import { Mic, Play, Download, Upload, Zap, Shield, Globe, Users, Star, CheckCircle } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";

const AiVoiceCloningStudioPage = () => {
  const features = [
    {
      title: "Realistic Voice Cloning",
      description: "Create perfect voice replicas with just 30 seconds of audio using advanced neural networks",
      icon: <Mic className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Language Support",
      description: "Generate voices in 50+ languages with native pronunciation and accent",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Emotion Control",
      description: "Add emotions like happiness, sadness, excitement, or calmness to your cloned voices",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Generation",
      description: "Generate high-quality voice content in seconds with our optimized processing",
      icon: <Play className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const useCases = [
    {
      title: "Content Creation",
      description: "Create audiobooks, podcasts, and video narrations with consistent voice quality",
      icon: <Play className="w-8 h-8" />,
      price: "From $29/month"
    },
    {
      title: "Accessibility",
      description: "Generate voice for text-to-speech applications and assistive technologies",
      icon: <Users className="w-8 h-8" />,
      price: "From $19/month"
    },
    {
      title: "Marketing",
      description: "Create personalized voice messages and advertisements for your brand",
      icon: <Globe className="w-8 h-8" />,
      price: "From $39/month"
    },
    {
      title: "Entertainment",
      description: "Develop characters for games, animations, and interactive media",
      icon: <Star className="w-8 h-8" />,
      price: "From $49/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$29",
      period: "month",
      description: "Perfect for content creators",
      features: [
        "5 voice clones",
        "10 hours generation/month",
        "Basic emotions",
        "Standard quality",
        "Email support",
        "Commercial license"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Most popular for businesses",
      features: [
        "25 voice clones",
        "100 hours generation/month",
        "All emotions & styles",
        "High quality output",
        "Priority support",
        "API access",
        "Custom voices",
        "Bulk processing"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited voice clones",
        "Unlimited generation",
        "Premium quality",
        "Dedicated support",
        "White-label solution",
        "Custom integrations",
        "SLA guarantees",
        "Training included"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "99.8% Accuracy",
      description: "Industry-leading voice cloning accuracy and naturalness",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Fast Processing",
      description: "Generate voice content 10x faster than traditional methods",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Privacy Protected",
      description: "Advanced security ensures your voice data remains private",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Easy Integration",
      description: "Simple API and SDK for seamless integration into your apps",
      icon: <Upload className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "1M+", label: "Voices Generated", icon: <Mic className="w-6 h-6" /> },
    { number: "99.8%", label: "Accuracy Rate", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "10K+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOOptimizer
        title="AI Voice Cloning Studio - Realistic Voice Generation Platform | Zion Tech Group"
        description="Create perfect voice replicas with our AI voice cloning studio. Generate realistic voices in 50+ languages with emotion control and real-time processing for content creation and accessibility."
        keywords="AI voice cloning, voice generation, text to speech, voice synthesis, voice cloning studio, AI voices, voice content creation"
        canonical="https://ziontechgroup.com/ai-voice-cloning-studio"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Mic className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Voice AI Revolution</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Voice Cloning Studio
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create perfect voice replicas with just 30 seconds of audio. Our advanced AI technology generates 
            realistic voices in 50+ languages with emotion control, perfect for content creation, accessibility, 
            and entertainment applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Mic className="w-5 h-5" />}
            >
              Start Creating
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Listen to Samples
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Voice Cloning Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Cutting-edge AI technology for realistic voice generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
                glowColor="cyan"
              >
                <div className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Voice Cloning Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your projects with AI-generated voices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {useCase.description}
                </p>
                <p className="text-cyan-400 font-medium text-sm">{useCase.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Voice Studio?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-leading technology and features for voice generation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Voice Cloning Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your voice generation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Voices?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of creators, developers, and businesses using our AI voice cloning technology. 
            Start creating realistic voices for your projects today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Mic className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Listen to Samples
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiVoiceCloningStudioPage;