import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Play, 
  Pause, 
  Download, 
  Upload, 
  Settings, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Users, 
  Zap, 
  Shield, 
  BarChart3,
  Clock,
  Award,
  Sparkles
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIVoiceCloningStudio = () => {
  const features = [
    {
      title: "95% Voice Accuracy",
      description: "Industry-leading voice synthesis with natural intonation and emotion",
      icon: <Mic className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Language Support",
      description: "Support for 50+ languages with native pronunciation",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Processing",
      description: "Generate voice clones in under 30 seconds",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level encryption and GDPR compliance",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for individuals and small projects",
      features: [
        "Up to 5 voice clones",
        "10 hours of audio generation",
        "Basic voice emotions",
        "Standard quality (44.1kHz)",
        "Email support",
        "Commercial license included"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for content creators and businesses",
      features: [
        "Up to 25 voice clones",
        "50 hours of audio generation",
        "Advanced voice emotions",
        "High quality (48kHz)",
        "Priority support",
        "API access",
        "Custom voice training",
        "Bulk processing"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited voice clones",
        "Unlimited audio generation",
        "Premium voice emotions",
        "Studio quality (96kHz)",
        "24/7 dedicated support",
        "Advanced API access",
        "Custom model training",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Content Creation",
      description: "Create engaging podcasts, audiobooks, and video content with consistent voice branding",
      icon: <Play className="w-8 h-8" />,
      examples: ["Podcast production", "Audiobook narration", "Video voiceovers", "Social media content"]
    },
    {
      title: "E-learning",
      description: "Develop interactive training materials with personalized voice instructions",
      icon: <Users className="w-8 h-8" />,
      examples: ["Online courses", "Training modules", "Language learning", "Corporate training"]
    },
    {
      title: "Accessibility",
      description: "Make content accessible with voice synthesis for visually impaired users",
      icon: <Shield className="w-8 h-8" />,
      examples: ["Screen readers", "Audio descriptions", "Assistive technology", "Inclusive design"]
    },
    {
      title: "Customer Service",
      description: "Enhance customer experience with personalized voice interactions",
      icon: <Settings className="w-8 h-8" />,
      examples: ["IVR systems", "Chatbots", "Virtual assistants", "Customer support"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Media Co.",
      role: "Content Director",
      content: "Zion AI Voice Cloning Studio revolutionized our podcast production. We can now create consistent, high-quality content 10x faster than before.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "EduTech Solutions",
      role: "CTO",
      content: "The multi-language support is incredible. We've expanded our courses to 15 different languages without hiring additional voice talent.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Accessibility First",
      role: "Founder",
      content: "This tool has made our content truly accessible. The voice quality is so natural that users can't tell it's AI-generated.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Voice Cloning Studio - Professional Voice Synthesis | Zion Tech Group"
        description="Create realistic voice clones with 95% accuracy. Multi-language support, real-time processing, and enterprise security. Perfect for content creation, e-learning, and accessibility."
        keywords="AI voice cloning, voice synthesis, text to speech, voice generation, content creation, e-learning, accessibility, voice AI"
        canonical="https://ziontechgroup.com/ai-voice-cloning-studio"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">95% Voice Accuracy Guaranteed</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Voice Cloning Studio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create realistic voice clones with industry-leading 95% accuracy. Perfect for content creation, 
            e-learning, accessibility, and customer service applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Voice Synthesis Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI technology that delivers natural, expressive voice synthesis with enterprise-grade security and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include commercial licensing and 24/7 support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
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
                <FuturisticButton
                  href={plan.name === 'Enterprise' ? '/contact' : '#signup'}
                  variant={plan.popular ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From content creation to accessibility, our voice cloning technology adapts to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-cyan-400">
                      • {example}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Voice Cloning Studio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Voice Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators and businesses using AI Voice Cloning Studio to create 
              professional voice content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIVoiceCloningStudio;