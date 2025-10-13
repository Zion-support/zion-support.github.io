import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Box, 
  BarChart3, 
  Camera, 
  Palette, 
  Target, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Brain,
  Globe,
  Award,
  Sparkles,
  FileText,
  AlertTriangle,
  Layers,
  Image,
  Video
} from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered 3D Model Generation',
      description: 'Generate high-quality 3D models from text descriptions or 2D images using advanced AI',
      icon: <Box className="w-6 h-6" />,
      benefits: ['Text-to-3D conversion', 'Image-to-3D generation', 'Real-time rendering']
    },
    {
      title: 'Intelligent Texture Mapping',
      description: 'AI automatically applies realistic textures and materials to 3D models',
      icon: <Palette className="w-6 h-6" />,
      benefits: ['Automatic UV mapping', 'Material suggestion', 'PBR texture generation']
    },
    {
      title: 'Animation Generation',
      description: 'AI creates smooth animations and motion sequences for 3D models',
      icon: <Video className="w-6 h-6" />,
      benefits: ['Keyframe generation', 'Motion capture', 'Physics simulation']
    },
    {
      title: '3D Scene Composition',
      description: 'AI intelligently arranges and lights 3D scenes for optimal visual appeal',
      icon: <Camera className="w-6 h-6" />,
      benefits: ['Automatic lighting', 'Scene optimization', 'Camera positioning']
    },
    {
      title: 'Real-time Rendering',
      description: 'High-performance real-time rendering with AI-optimized quality',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Ray tracing', 'Global illumination', 'Post-processing effects']
    },
    {
      title: '3D Asset Library',
      description: 'Access to thousands of AI-generated 3D models and assets',
      icon: <Layers className="w-6 h-6" />,
      benefits: ['Extensive model library', 'Custom asset generation', 'Asset optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        '100 3D models/month',
        'Basic AI generation',
        'Standard textures',
        'Email support',
        'HD rendering',
        '5 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for creative teams',
      features: [
        '500 3D models/month',
        'Advanced AI features',
        'Premium textures',
        'Priority support',
        '4K rendering',
        'Unlimited users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited models',
        'Custom AI training',
        'White-label options',
        'Dedicated support',
        '8K rendering',
        'Custom integrations',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'Game Studio',
      role: '3D Artist',
      content: 'Zion AI 3D Generation reduced our asset creation time by 70%. The quality is incredible.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Maria Rodriguez',
      company: 'Architecture Firm',
      role: 'Visualization Specialist',
      content: 'The AI-generated 3D models are so realistic, clients can\'t tell the difference from photos.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'James Wilson',
      company: 'Marketing Agency',
      role: 'Creative Director',
      content: 'Finally, a 3D tool that actually understands what we want. The AI is incredibly intuitive.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const stats = [
    { number: '2,000+', label: '3D Artists', icon: <Box className="w-6 h-6" /> },
    { number: '70%', label: 'Faster Asset Creation', icon: <Clock className="w-6 h-6" /> },
    { number: '95%', label: 'Model Quality Score', icon: <Target className="w-6 h-6" /> },
    { number: '24/7', label: 'AI-Powered Generation', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - AI-Powered 3D Model Creation | Zion Tech Group</title>
        <meta name="description" content="Transform your 3D workflow with AI 3D Generation. Create high-quality 3D models from text or images, generate animations, and access AI-powered 3D assets. Start your free trial today!" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, 3D animation, text-to-3D, image-to-3D, 3D assets, 3D rendering, computer graphics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-3d-generation" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Box className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI 3D Generation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {' '}Revolution
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most advanced AI-powered 3D generation platform that creates stunning 3D models, 
              animations, and scenes from simple text descriptions or images. 
              Transform your creative workflow with cutting-edge artificial intelligence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-indigo-400 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-400/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered 3D Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology automates complex 3D creation processes and provides 
                tools that help you create stunning 3D content faster than ever before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creative Pricing for Every Artist
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your creative needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-indigo-500/50 ring-2 ring-indigo-500/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25'
                        : 'border border-white/20 text-white hover:bg-white/10'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by 3D Artists Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what our customers say about AI 3D Generation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Revolutionize Your 3D Workflow?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of 3D artists already using AI 3D Generation 
                to create stunning content faster. Start your free 14-day trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DGenerationPage;