import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Palette, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Shield, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Code,
  Lock,
  Eye,
  Heart,
  Rocket,
  Globe,
  Lightbulb,
  Image,
  Video,
  Music,
  PenTool
} from 'lucide-react';

export default function AIAutonomousCreativeDirector() {
  const features = [
    {
      icon: Brain,
      title: "AI Creative Intelligence",
      description: "Advanced AI algorithms that understand creative concepts and generate innovative ideas"
    },
    {
      icon: Palette,
      title: "Multi-Media Creation",
      description: "Generate content across all media types: images, videos, audio, and text"
    },
    {
      icon: Zap,
      title: "Instant Content Generation",
      description: "Create high-quality creative content in seconds, not hours"
    },
    {
      icon: Target,
      title: "Brand Consistency",
      description: "Maintain consistent brand voice and visual identity across all content"
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
      description: "Seamless integration with human creative teams and feedback loops"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track content performance and optimize creative strategies"
    }
  ];

  const benefits = [
    "24/7 creative content generation",
    "Reduced production costs",
    "Faster time to market",
    "Consistent brand messaging",
    "Scalable creative operations",
    "Data-driven creative decisions"
  ];

  const useCases = [
    {
      title: "Marketing Campaigns",
      description: "Automated creation of marketing materials, ads, and promotional content"
    },
    {
      title: "Social Media Content",
      description: "Daily social media posts, stories, and engaging content generation"
    },
    {
      title: "Brand Identity",
      description: "Consistent visual identity and brand messaging across all platforms"
    },
    {
      title: "Content Marketing",
      description: "Blog posts, articles, and educational content creation"
    }
  ];

  const mediaTypes = [
    {
      title: "Visual Content",
      icon: Image,
      description: "Images, graphics, and visual designs"
    },
    {
      title: "Video Content",
      icon: Video,
      description: "Video clips, animations, and motion graphics"
    },
    {
      title: "Audio Content",
      icon: Music,
      description: "Podcasts, music, and sound effects"
    },
    {
      title: "Written Content",
      icon: PenTool,
      description: "Copy, scripts, and written materials"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Brain className="w-20 h-20 text-cyan-400" />
              <Palette className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Autonomous Creative Director
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your creative process with an AI that never sleeps. Generate stunning content, 
              maintain brand consistency, and scale your creative operations 24/7.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Watch Demo
              <Eye className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Creative AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI capabilities that transform how you create and manage creative content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Multi-Media Content Creation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Generate content across all media types with consistent quality and brand voice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaTypes.map((mediaType, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-400 transition-all duration-300"
              >
                <mediaType.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{mediaType.title}</h3>
                <p className="text-gray-300">{mediaType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Why Choose AI Creative Director?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your creative process with intelligent automation and AI-powered insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {benefits.slice(3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Perfect For Every Creative Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startups to enterprises, our AI scales with your creative requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Creative Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of creative content generation with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}