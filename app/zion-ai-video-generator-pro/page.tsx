import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Play, 
  Video, 
  Camera, 
  Mic, 
  Edit3, 
  Download, 
  Share2, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Sparkles,
  BarChart3,
  Users,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Settings,
  Shield,
  Cloud,
  Brain,
  Target,
  Calendar,
  FileText,
  Database,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Award,
  Rocket,
  TrendingUp,
  Heart,
  Receipt,
  Package,
  Code,
  Bot,
  Wifi
} from "lucide-react";

export default function ZionAIVideoGeneratorPro() {
  const features = [
    "AI-Powered Video Script Generation",
    "Multi-Language Voice Synthesis (50+ languages)",
    "Professional Video Templates (1000+ templates)",
    "Auto Video Editing & Optimization",
    "Brand Voice & Style Consistency",
    "Social Media Format Optimization",
    "Real-time Collaboration Tools",
    "Advanced Analytics & Performance Tracking",
    "Custom Animation & Effects",
    "One-Click Publishing to All Platforms",
    "A/B Testing for Video Content",
    "Automated Subtitles & Captions"
  ];

  const benefits = [
    "90% reduction in video production time",
    "300% increase in video content output",
    "Professional quality at fraction of cost",
    "Complete video marketing automation"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$79",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "10 videos per month",
        "Basic templates (100+)",
        "Standard voice synthesis",
        "HD video quality",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "50 videos per month",
        "Premium templates (500+)",
        "Advanced voice synthesis",
        "4K video quality",
        "Advanced analytics",
        "Priority support",
        "Brand customization",
        "Team collaboration (5 users)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations and video agencies",
      features: [
        "Unlimited videos",
        "All templates (1000+)",
        "Premium voice synthesis",
        "8K video quality",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom brand integration",
        "Unlimited team collaboration",
        "API access",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Video Generator Pro has revolutionized our video production. We can now create professional videos 10x faster with consistent quality.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      company: "E-commerce Brand",
      role: "Marketing Manager",
      content: "The AI-powered script generation and voice synthesis are incredible. Our video engagement has increased by 250% since using this platform.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      company: "Content Creator",
      role: "YouTuber",
      content: "This tool has completely transformed my content creation process. I can now produce high-quality videos consistently without a large team.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator Pro - AI-Powered Video Creation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Create professional videos with AI-powered script generation, voice synthesis, and automated editing. Transform your content creation with Zion AI Video Generator Pro."
        />
        <meta
          name="keywords"
          content="AI video generator, video creation, automated video editing, voice synthesis, video marketing, content creation, video templates, social media videos"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-video-generator-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI Video Generator 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Video Generator Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                Create professional videos with AI-powered script generation, voice synthesis, and automated editing. 
                Transform your content creation process and scale your video marketing like never before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">90%</div>
                <div className="text-gray-300 text-xs md:text-sm">Faster Production</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-gray-300 text-xs md:text-sm">Templates</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-xs md:text-sm">Languages</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">4K</div>
                <div className="text-gray-300 text-xs md:text-sm">Quality</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Powerful AI Video Creation Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI-powered automation and human-level quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <Video className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your video creation needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
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
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Content Creators Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about Zion AI Video Generator Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Video Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of content creators and businesses using Zion AI Video Generator Pro 
              to create professional videos at scale. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}