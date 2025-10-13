import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Eye, Zap, Shield, Users, Award, CheckCircle, Star, Play, Headphones, Layers } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticBackground from '../../components/FuturisticBackground';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const AIImageRecognitionProPage = () => {
  const features = [
    {
      title: "Object Detection",
      description: "Advanced object detection and classification with 99.9% accuracy across thousands of object categories",
      icon: <Camera className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Facial Recognition",
      description: "High-accuracy facial recognition with emotion detection, age estimation, and identity verification",
      icon: <Eye className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Text Recognition",
      description: "OCR and text extraction from images with support for multiple languages and handwriting recognition",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Scene Analysis",
      description: "Comprehensive scene understanding with context analysis and environmental recognition",
      icon: <Layers className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    {
      title: "Real-time Processing",
      description: "Process images in real-time with low latency and high throughput",
      features: ["Live video analysis", "Batch processing", "Stream processing", "Edge computing"]
    },
    {
      title: "Custom Models",
      description: "Train custom models for specific use cases and industry requirements",
      features: ["Model training", "Transfer learning", "Fine-tuning", "Custom datasets"]
    },
    {
      title: "API Integration",
      description: "Easy integration with existing applications through RESTful APIs",
      features: ["REST APIs", "SDK support", "Webhook integration", "Cloud deployment"]
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and monitoring for image recognition performance",
      features: ["Usage metrics", "Accuracy tracking", "Performance monitoring", "Cost analysis"]
    }
  ];

  const benefits = [
    {
      title: "Accuracy",
      description: "Achieve 99.9% accuracy in image recognition and classification",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9%"
    },
    {
      title: "Speed",
      description: "Process images 100x faster than traditional methods",
      icon: <Zap className="w-6 h-6" />,
      stat: "100x"
    },
    {
      title: "Cost Savings",
      description: "Reduce manual processing costs by up to 80%",
      icon: <Award className="w-6 h-6" />,
      stat: "80%"
    },
    {
      title: "Scalability",
      description: "Scale to process millions of images per day",
      icon: <Users className="w-6 h-6" />,
      stat: "Millions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Image Recognition Pro | Computer Vision Platform | Zion Tech Group"
        description="Advanced AI image recognition platform with object detection, facial recognition, OCR, and scene analysis. 99.9% accuracy with real-time processing."
        keywords="AI image recognition, computer vision, object detection, facial recognition, OCR, image analysis, machine learning"
        canonical="https://ziontechgroup.com/ai-image-recognition-pro"
        author="Zion Tech Group"
        section="AI Services"
        tags={["AI Image Recognition", "Computer Vision", "Object Detection", "Facial Recognition", "OCR"]}
        readingTime={6}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Camera className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Computer Vision Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Image Recognition Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Advanced AI image recognition platform with object detection, facial recognition, OCR, 
            and scene analysis. Achieve 99.9% accuracy with real-time processing capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Try Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Recognition Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI image recognition platform provides comprehensive computer vision capabilities 
              for any image analysis requirement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive image recognition capabilities designed for enterprise-scale applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI image recognition platform can have on your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Recognize Images?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover how our AI image recognition platform can transform your image analysis capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Recognition
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Try Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIImageRecognitionProPage;