import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Video, 
  Sparkles, 
  Zap, 
  Shield, 
  Users, 
  Clock, 
  DollarSign, 
  ArrowRight,
  CheckCircle,
  Star,
  Mic,
  Image,
  Scissors,
  Upload,
  Download,
  Settings,
  BarChart3
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ZionAIVideoGeneratorPage: React.FC = () => {
  const features = [
    {
      title: "AI Script Generation",
      description: "Generate engaging video scripts using advanced AI technology",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Auto Voiceover",
      description: "Convert text to natural-sounding voice with multiple voice options",
      icon: <Mic className="w-6 h-6" />
    },
    {
      title: "Smart Video Editing",
      description: "AI-powered video editing with automatic cuts and transitions",
      icon: <Scissors className="w-6 h-6" />
    },
    {
      title: "Template Library",
      description: "Access hundreds of professional video templates for any industry",
      icon: <Image className="w-6 h-6" />
    },
    {
      title: "HD Export",
      description: "Export videos in 4K resolution with professional quality",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard",
      description: "Track video performance and engagement metrics",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for content creators and small businesses",
      features: [
        "10 videos per month",
        "HD quality export",
        "Basic templates",
        "Standard voiceover",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for agencies and growing businesses",
      features: [
        "50 videos per month",
        "4K quality export",
        "Premium templates",
        "AI voiceover",
        "Priority support",
        "Custom branding",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited videos",
        "8K quality export",
        "All templates",
        "Custom voice training",
        "24/7 dedicated support",
        "White-label options",
        "API access",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Marketing Videos",
      description: "Create compelling marketing videos for social media and campaigns",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Training Content",
      description: "Develop educational and training videos for your team",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Product Demos",
      description: "Showcase your products with professional demonstration videos",
      icon: <Play className="w-8 h-8" />
    },
    {
      title: "Social Media",
      description: "Generate engaging content for all social media platforms",
      icon: <Video className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group"
        description="Transform your content creation with Zion AI Video Generator. Create professional videos in minutes using AI-powered script generation, voiceover, and editing tools."
        keywords="AI video generator, video creation, AI video editing, automated video production, video marketing, content creation"
        canonical="https://ziontechgroup.com/zion-ai-video-generator"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Video className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Zion AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Video Generator</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional videos in minutes with our AI-powered video generation platform. 
              From script writing to final export, automate your entire video production process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to create professional videos with AI assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Perfect for any type of video content creation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-400">
                    {useCase.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pricing Plans</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your video creation needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-gray-700/50'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-gray-300 mb-8">
              Start your free trial today and experience the power of AI video generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAIVideoGeneratorPage;