import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  Headphones, 
  Volume2, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Activity,
  BarChart3,
  Clock,
  Shield,
  Star,
  Award,
  Brain,
  TrendingUp,
  Users,
  Settings,
  Monitor,
  Play,
  Pause,
  Download,
  Upload
} from 'lucide-react';

export default function AIVoiceCloningStudio() {
  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Neural Voice Synthesis",
      description: "Advanced neural networks create ultra-realistic voice clones with 99.2% accuracy"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "Generate voice clones in 50+ languages with native pronunciation and accent"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Emotion & Tone Control",
      description: "Precise control over emotional expression, tone, and speaking style"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Real-time Voice Conversion",
      description: "Convert speech in real-time with minimal latency for live applications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Quality Audio Output",
      description: "Studio-quality audio generation up to 48kHz/24-bit for professional use"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Voice Style Transfer",
      description: "Transfer speaking style and characteristics between different voices"
    }
  ];

  const pricingPlans = [
    {
      name: "Voice Creator",
      price: "$199",
      period: "/month",
      description: "Perfect for content creators and small businesses",
      features: [
        "Up to 5 voice clones",
        "10 hours of audio generation",
        "Standard quality (44.1kHz)",
        "Email support",
        "Basic API access"
      ],
      popular: false
    },
    {
      name: "Voice Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for agencies and media companies",
      features: [
        "Up to 25 voice clones",
        "50 hours of audio generation",
        "High quality (48kHz/24-bit)",
        "Priority support",
        "Advanced API access",
        "Custom voice training"
      ],
      popular: true
    },
    {
      name: "Voice Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations and broadcasters",
      features: [
        "Unlimited voice clones",
        "Unlimited audio generation",
        "Studio quality (96kHz/32-bit)",
        "Dedicated support team",
        "On-premise deployment",
        "Full customization"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "99.2%",
      description: "Voice Accuracy",
      icon: <Target className="w-8 h-8" />
    },
    {
      metric: "50+",
      description: "Languages Supported",
      icon: <Globe className="w-8 h-8" />
    },
    {
      metric: "5min",
      description: "Training Time",
      icon: <Clock className="w-8 h-8" />
    },
    {
      metric: "24/7",
      description: "Voice Generation",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Voice Cloning Studio - Zion Tech Group</title>
        <meta name="description" content="Professional AI voice cloning platform with 99.2% accuracy. Create realistic voice clones in 50+ languages with emotion control and real-time conversion." />
        <meta name="keywords" content="voice cloning, AI voice synthesis, neural voice, voice generation, text-to-speech, voice AI" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Mic className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-purple-300 font-medium">AI Voice Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Voice Cloning Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create ultra-realistic voice clones with 99.2% accuracy in just 5 minutes. Professional-grade voice synthesis for content creation, accessibility, and entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Creating Voices
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Listen to Samples
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.metric}</div>
                <div className="text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Voice AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness cutting-edge neural voice synthesis technology to create professional-quality voice clones for any application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Voice Creation Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect voice cloning solution for your creative needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : 'border-slate-700/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
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
                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border border-slate-600 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  Start Creating
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Voices?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators, businesses, and developers using AI voice cloning to bring their projects to life with professional-quality voices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Voice Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                Listen to Voice Samples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
