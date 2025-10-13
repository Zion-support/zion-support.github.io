<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function aiVoiceCloningStudio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Voice Cloning Studio - Zion Tech Group</title>
        <meta name="description" content="Ai Voice Cloning Studio solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Voice Cloning Studio</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function AiVoiceCloningStudioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Voice Cloning Studio - Zion Tech Group</title>
        <meta name="description" content="Advanced ai voice cloning studio solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Voice Cloning Studio
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function AivoicecloningstudioPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Voice Cloning Studio</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
=======
import {
=======
import React from 'react';
import { 
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
  Mic, 
  Play, 
  Settings, 
  Users, 
  Zap, 
  CheckCircle, 
=======

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Mic,
  Play,
  Settings,
  Users,
  Zap,
  CheckCircle,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  Brain,
  Volume2,
  FileAudio,
  Globe
} from 'lucide-react';
<<<<<<< HEAD
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
=======
import { Helmet } from 'react-helmet-async';
import { Mic, Play, Settings, Users, Zap, CheckCircle, Brain, Volume2, FileAudio, Globe } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Pause } from 'lucide-react';
import { Download } from 'lucide-react';
import { Upload } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Play } from 'lucide-react';
import { Volume2 } from 'lucide-react';
import { Mic } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

const AIVoiceCloningStudioPage = () => {
  const features = [
    {,
    title: "Real-time Voice Cloning",
        description: "Clone any voice with just 3 seconds of audio sample using advanced neural networks",
        icon: <Mic className="w-8 h-8" />,
        color: "from-purple-500 to-pink-500"
    },
    {,
    title: "Multi-Language Support",
        description: "Support for 50+ languages with native accent preservation",
        icon: <Globe className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500"
    },
    {,
    title: "Emotion Control",
        description: "Add emotions like happiness, sadness, excitement to cloned voices",
        icon: <Brain className="w-8 h-8" />,
        color: "from-green-500 to-emerald-500"
    },
    {,
    title: "High-Quality Output",
        description: "Studio-quality audio output up to 48kHz sample rate",
        icon: <Volume2 className="w-8 h-8" />,
        color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {,
    name: "Starter",
        price: "$29",
        period: "/month",
        description: "Perfect for individuals and small projects",
        features: [
        "100 voice clones per month",
        "5 minutes audio generation",
        "Basic voice emotions",
        "Standard quality (24kHz)",
        "Email support"
      ],
        popular: false
    },
    {,
    name: "Professional",
        price: "$99",
        period: "/month",
        description: "Ideal for content creators and businesses",
        features: [
        "500 voice clones per month",
        "30 minutes audio generation",
        "Advanced voice emotions",
        "High quality (48kHz)",
        "Priority support",
        "API access",
        "Custom voice training"
      ],
        popular: true
    },
    {,
    name: "Enterprise",
        price: "$299",
        period: "/month",
        description: "For large organizations and agencies",
        features: [
        "Unlimited voice clones",
        "Unlimited audio generation",
        "All voice emotions",
        "Studio quality (48kHz)",
        "24/7 dedicated support",
        "Full API access",
        "Custom model training",
        "White-label solution",
        "SLA guarantee"
      ],
        popular: false
    }
  ];

  const useCases = [
    {,
    title: "Content Creation",
        description: "Create voiceovers for videos, podcasts, and audiobooks",
        icon: <FileAudio className="w-6 h-6" />
    },
    {,
    title: "Accessibility",
        description: "Generate speech for visually impaired users",
        icon: <Users className="w-6 h-6" />
    },
    {,
    title: "Gaming",
        description: "Create unique character voices for games",
        icon: <Zap className="w-6 h-6" />
    },
    {,
    title: "Education",
        description: "Generate multilingual educational content",
        icon: <Brain className="w-6 h-6" />
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Voice Cloning Studio - Professional Voice Synthesis | Zion Tech Group"
        description="Create realistic voice clones with our AI Voice Cloning Studio. Professional voice synthesis, multi-language support, and emotion control. Starting at $29/month."
        keywords="AI voice cloning, voice synthesis, text to speech, voice generation, AI voice studio, voice cloning software"
        canonical="https://ziontechgroup.com/ai-voice-cloning-studio"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Mic className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">AI Voice Cloning Studio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              AI Voice Cloning Studio
            </span>
=======

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Page
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Create realistic voice clones with just 3 seconds of audio. Professional voice synthesis 
            with multi-language support, emotion control, and studio-quality output.
          </p>
<<<<<<< HEAD
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Volume2 className="w-5 h-5" />}
            >
              Listen to Samples
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Voice Cloning Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Advanced AI technology that creates incredibly realistic voice clones with professional quality and control.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your voice cloning needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-purple-500/50 shadow-purple-500/20 scale-105'
                    : 'border-white/20 hover:border-purple-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
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
              From content creation to accessibility, our voice cloning technology serves diverse needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Clone Your Voice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start creating realistic voice clones today. No technical expertise required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/pricing"
              variant="outline"
              size="lg"
              icon={<Settings className="w-5 h-5" />}
            >
              View Pricing
            </FuturisticButton>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
=======

        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    </div>
  );
<<<<<<< HEAD
}
=======
};

<<<<<<< HEAD
<<<<<<< HEAD
export default AIVoiceCloningStudioPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
