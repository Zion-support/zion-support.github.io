import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Mic, 
  Volume2, 
  Play, 
  Pause, 
  Download, 
  Upload, 
  Settings, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Globe,
  Shield,
  Brain,
  MessageSquare,
  FileText,
  BarChart3,
  Activity,
  AlertTriangle,
  CheckSquare,
  Share2,
  Bell,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  RefreshCw,
  Save,
  Copy,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Headphones,
  Radio,
  Music,
  Video,
  Camera,
  Mic as Microphone,
  Speaker,
  VolumeX,
  Volume1
} from 'lucide-react';

export default function AIVoiceCloningStudioPro() {
  const features = [
    {
      title: "Voice Synthesis",
      description: "Create natural-sounding voices from just a few seconds of audio samples using advanced neural networks.",
      icon: Mic,
      benefits: ["99% accuracy", "5-second samples", "Real-time generation"]
    },
    {
      title: "Emotion Control",
      description: "Fine-tune voice characteristics including emotion, tone, pace, and speaking style for perfect results.",
      icon: Volume2,
      benefits: ["8 emotions", "Custom tones", "Style adaptation"]
    },
    {
      title: "Multi-language Support",
      description: "Generate voices in over 50 languages with native pronunciation and accent accuracy.",
      icon: Globe,
      benefits: ["50+ languages", "Native accents", "Cultural adaptation"]
    },
    {
      title: "Real-time Processing",
      description: "Generate high-quality voice clones in real-time for live applications and streaming.",
      icon: Zap,
      benefits: ["<100ms latency", "Live streaming", "Interactive apps"]
    },
    {
      title: "Voice Library",
      description: "Access a vast library of pre-trained voices and create custom voice models for your brand.",
      icon: Headphones,
      benefits: ["100+ voices", "Custom models", "Brand voices"]
    },
    {
      title: "API Integration",
      description: "Seamlessly integrate voice cloning into your applications with our comprehensive API.",
      icon: Settings,
      benefits: ["REST API", "SDK support", "Webhooks"]
    }
  ];

  const useCases = [
    {
      title: "Content Creation",
      description: "Create engaging audio content for podcasts, audiobooks, and video narration.",
      icon: Video,
      examples: ["Podcast narration", "Audiobook production", "Video voiceovers"]
    },
    {
      title: "Accessibility",
      description: "Help people with speech impairments communicate using their own voice.",
      icon: Users,
      examples: ["Speech therapy", "Communication aids", "Personal assistants"]
    },
    {
      title: "Entertainment",
      description: "Develop interactive games and entertainment experiences with custom voices.",
      icon: Gamepad2,
      examples: ["Game characters", "Interactive stories", "Virtual assistants"]
    },
    {
      title: "Business Applications",
      description: "Create professional voice content for marketing, training, and customer service.",
      icon: BarChart3,
      examples: ["IVR systems", "Training videos", "Marketing content"]
    }
  ];

  const pricingTiers = [
    {
      name: "Creator",
      price: "$149",
      period: "/month",
      description: "Perfect for content creators and small businesses",
      features: [
        "10 voice models",
        "100 hours/month generation",
        "5 languages",
        "Basic emotion control",
        "Standard quality",
        "Email support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for agencies and growing businesses",
      features: [
        "50 voice models",
        "500 hours/month generation",
        "25 languages",
        "Advanced emotion control",
        "High quality output",
        "Priority support",
        "Advanced API",
        "Custom integrations",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited voice models",
        "Unlimited generation",
        "All languages",
        "Full emotion control",
        "Studio quality",
        "Dedicated support",
        "Custom API",
        "White-label options",
        "Advanced analytics",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Podcast Producer",
      company: "Audio Innovations",
      content: "AI Voice Cloning Studio Pro has revolutionized our podcast production. We can now create consistent, high-quality narration in multiple languages, saving us 60% of our production time.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Garcia",
      role: "Accessibility Specialist",
      company: "Tech for Good",
      content: "This tool has been life-changing for our clients with speech impairments. The ability to create personalized voices for communication devices is incredible.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "David Kim",
      role: "Game Developer",
      company: "Interactive Studios",
      content: "The real-time voice generation is perfect for our interactive games. Players can have unique conversations with AI characters that sound completely natural.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const stats = [
    { number: "10K+", label: "Voice Models Created", icon: Mic },
    { number: "99.2%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "50+", label: "Languages Supported", icon: Globe },
    { number: "<100ms", label: "Generation Speed", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-400/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Creative AI Solution</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text-advanced">
              AI Voice Cloning Studio Pro
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Professional Voice Synthesis and Cloning Platform
            </p>
            
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create natural-sounding voice clones from just a few seconds of audio. 
              Perfect for content creators, accessibility applications, and entertainment projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </Link>
              
              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-xl hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Listen to Samples
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Advanced Voice Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Powered by cutting-edge AI and neural networks for the most realistic voice synthesis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
              Endless Possibilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From content creation to accessibility, discover how voice cloning can transform your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent neon-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options for creators, professionals, and enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${tier.popular ? 'ring-2 ring-purple-400/30' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 text-lg">{tier.period}</span>
                  </div>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent neon-text">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              See how our customers are using AI Voice Cloning Studio Pro to create amazing content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Ready to Create Amazing Voices?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of creators, developers, and businesses using AI Voice Cloning Studio Pro to bring their ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <span className="relative z-10">Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </Link>
              
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-purple-400 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-purple-400 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}