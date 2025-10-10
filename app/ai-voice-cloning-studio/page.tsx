import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mic, 
  Play, 
  Pause, 
  Download, 
  Upload, 
  Settings, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Volume2,
  FileAudio,
  Users,
  Clock,
  Shield,
  Award,
  TrendingUp,
  Target,
  Sparkles
} from 'lucide-react';

const AIVoiceCloningStudioPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Neural Voice Synthesis",
      description: "Advanced AI models create natural-sounding voice clones with 99.9% accuracy",
      price: "$29/month"
    },
    {
      icon: Volume2,
      title: "Multi-Language Support",
      description: "Generate voice clones in 50+ languages with native pronunciation",
      price: "$19/month"
    },
    {
      icon: FileAudio,
      title: "High-Quality Audio",
      description: "Studio-grade 48kHz audio output with noise reduction and enhancement",
      price: "$39/month"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share voice models across teams with role-based access control",
      price: "$49/month"
    },
    {
      icon: Clock,
      title: "Real-Time Processing",
      description: "Generate voice clones in under 30 seconds with our optimized infrastructure",
      price: "$59/month"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "End-to-end encryption and GDPR compliance for voice data protection",
      price: "$39/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "5 voice clones per month",
        "10 minutes of audio generation",
        "Basic voice quality",
        "Email support",
        "Standard processing speed"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for content creators and businesses",
      features: [
        "25 voice clones per month",
        "100 minutes of audio generation",
        "High-quality voice synthesis",
        "Priority support",
        "Fast processing (30s)",
        "Multi-language support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited voice clones",
        "Unlimited audio generation",
        "Premium voice quality",
        "24/7 dedicated support",
        "Real-time processing",
        "Custom voice training",
        "White-label solution",
        "Advanced analytics"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Content Creation",
      description: "Create engaging podcasts, audiobooks, and video content with consistent voice branding",
      icon: FileAudio,
      benefits: ["10x faster content production", "Consistent brand voice", "Cost-effective solution"]
    },
    {
      title: "Accessibility",
      description: "Convert text to speech for visually impaired users with natural-sounding voices",
      icon: Users,
      benefits: ["Improved accessibility", "Better user experience", "Compliance with ADA standards"]
    },
    {
      title: "E-Learning",
      description: "Generate educational content with professional narrators in multiple languages",
      icon: Brain,
      benefits: ["Multilingual education", "Scalable content creation", "Professional quality"]
    },
    {
      title: "Customer Service",
      description: "Create personalized voice assistants and automated phone systems",
      icon: Settings,
      benefits: ["24/7 availability", "Consistent experience", "Reduced operational costs"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Voice Cloning Studio - Professional Voice Synthesis | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Create natural-sounding voice clones with our AI Voice Cloning Studio. Professional voice synthesis, multi-language support, and real-time processing. Starting at $29/month." 
        />
        <meta 
          name="keywords" 
          content="AI voice cloning, voice synthesis, text to speech, voice generation, AI voice studio, voice cloning software, TTS, voice AI" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Voice Technology
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Voice Cloning
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Studio Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create natural-sounding voice clones with cutting-edge AI technology. 
              Generate professional voice content in minutes, not hours. Perfect for 
              content creators, businesses, and developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Voice Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">30s</div>
                <div className="text-gray-300">Processing Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10k+</div>
                <div className="text-gray-300">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Features for
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Professional Voice Creation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Voice Cloning Studio offers everything you need to create 
              professional-quality voice content with ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-purple-400 font-bold text-lg">{feature.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your voice cloning needs. 
              All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white transform hover:scale-105'
                    : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Perfect for Every
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Use Case
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From content creation to accessibility, our AI Voice Cloning Studio 
              adapts to your specific needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                    
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Voice Content?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators and businesses who trust our AI Voice Cloning Studio 
            for their voice content needs. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center">
              <Mic className="w-5 h-5 mr-2" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceCloningStudioPage;