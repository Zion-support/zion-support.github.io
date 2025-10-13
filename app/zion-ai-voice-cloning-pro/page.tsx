import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mic, 
  Play, 
  Download, 
  Upload, 
  Settings, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Brain,
  Volume2,
  FileAudio,
  Clock,
  Globe
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiVoiceCloningPro = () => {
  const features = [
    {
      title: "High-Fidelity Voice Cloning",
      description: "Create perfect voice replicas with 99.9% accuracy using advanced neural networks",
      icon: <Mic className="w-8 h-8" />,
      stats: "99.9% accuracy"
    },
    {
      title: "Real-Time Voice Synthesis",
      description: "Generate natural-sounding speech in real-time with ultra-low latency",
      icon: <Play className="w-8 h-8" />,
      stats: "< 100ms latency"
    },
    {
      title: "Multi-Language Support",
      description: "Clone voices in 50+ languages with native pronunciation and accent",
      icon: <Globe className="w-8 h-8" />,
      stats: "50+ languages"
    },
    {
      title: "Emotion Control",
      description: "Control emotional tone, pitch, and speaking style for perfect voice matching",
      icon: <Settings className="w-8 h-8" />,
      stats: "12 emotions"
    },
    {
      title: "Voice Security",
      description: "Advanced anti-spoofing and voice authentication to prevent misuse",
      icon: <Shield className="w-8 h-8" />,
      stats: "Bank-level security"
    },
    {
      title: "API Integration",
      description: "Easy integration with existing applications via RESTful API",
      icon: <Zap className="w-8 h-8" />,
      stats: "99.9% uptime"
    }
  ];

  const useCases = [
    {
      title: "Content Creation",
      description: "Generate voiceovers for videos, podcasts, and audiobooks",
      icon: <FileAudio className="w-6 h-6" />
    },
    {
      title: "Accessibility",
      description: "Help people with speech disabilities communicate naturally",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Entertainment",
      description: "Create character voices for games and interactive media",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Education",
      description: "Personalized learning with custom voice instructions",
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "5 voice clones",
        "10 hours/month generation",
        "Basic emotions",
        "Standard quality",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for content creators and businesses",
      features: [
        "25 voice clones",
        "100 hours/month generation",
        "All emotions",
        "High quality",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations and agencies",
      features: [
        "Unlimited voice clones",
        "Unlimited generation",
        "Premium emotions",
        "Ultra-high quality",
        "24/7 support",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Voice Cloning Pro - Advanced Voice Synthesis & Cloning Platform"
        description="Create perfect voice replicas with 99.9% accuracy. Real-time voice synthesis, multi-language support, and emotion control. Professional voice cloning for content creators, businesses, and developers."
        keywords="voice cloning, voice synthesis, AI voice, text to speech, voice generation, voice replication, audio AI, voice technology"
        canonical="https://ziontechgroup.com/zion-ai-voice-cloning-pro"
      />
      
      <ResponsiveContainer className="py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <Volume2 className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">#1 Voice Cloning Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion AI Voice Cloning Pro
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create perfect voice replicas with 99.9% accuracy. Advanced neural networks power our 
            real-time voice synthesis platform for content creators, businesses, and developers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={Play}
              iconPosition="left"
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={Volume2}
              iconPosition="left"
            >
              Watch Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">&lt;100ms</div>
              <div className="text-gray-300 text-sm">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Voice Cloning Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                glowColor={index % 2 === 0 ? 'purple' : 'cyan'}
                hoverEffect={true}
                className="h-full"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400">
                    {feature.stats}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Perfect for Every Use Case
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500/50 ring-2 ring-purple-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Clone Your Voice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of content creators, businesses, and developers using 
            Zion AI Voice Cloning Pro to create amazing voice content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={Play}
              iconPosition="left"
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ZionAiVoiceCloningPro;