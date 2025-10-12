'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Box, 
  Zap, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Shield,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  BarChart3,
  MessageSquare,
  FileText,
  CreditCard,
  Wallet,
  Target,
  Lock,
  Users,
  TrendingUp
} from 'lucide-react';

export default function AI3DGenerationPage() {
  const features = [
    {
      title: 'AI-Powered 3D Modeling',
      description: 'Generate high-quality 3D models from text descriptions, images, or sketches using advanced AI algorithms.',
      icon: <Box className="w-8 h-8 text-cyan-400" />,
      benefits: ['Text-to-3D generation', 'Image-to-3D conversion', 'Sketch-to-3D modeling', 'Automated UV mapping']
    },
    {
      title: 'Real-Time Rendering',
      description: 'Ultra-fast rendering engine with photorealistic lighting, materials, and physics simulation.',
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      benefits: ['Real-time ray tracing', 'PBR materials', 'Dynamic lighting', 'Physics simulation']
    },
    {
      title: 'Animation & Rigging',
      description: 'Automated character rigging and animation generation with AI-powered motion capture.',
      icon: <Camera className="w-8 h-8 text-green-400" />,
      benefits: ['Auto-rigging', 'Motion capture', 'Keyframe animation', 'Facial animation']
    },
    {
      title: 'Multi-Platform Export',
      description: 'Export to all major 3D formats and platforms including Unity, Unreal Engine, and web.',
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      benefits: ['Unity integration', 'Unreal Engine support', 'WebGL export', 'VR/AR ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$149',
      period: '/month',
      description: 'Perfect for individual creators and freelancers',
      features: [
        '100 3D models/month',
        'Basic AI generation',
        'Standard rendering',
        'Web export',
        'Email support',
        '1 user account',
        'Basic templates'
      ],
      popular: false
    },
    {
      name: 'Studio',
      price: '$399',
      period: '/month',
      description: 'Ideal for design studios and agencies',
      features: [
        '500 3D models/month',
        'Advanced AI generation',
        'High-quality rendering',
        'All export formats',
        'Priority support',
        '5 user accounts',
        'Custom templates',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations and game studios',
      features: [
        'Unlimited 3D models',
        'Premium AI models',
        'Ultra-high rendering',
        'Custom integrations',
        'Dedicated support',
        'Unlimited users',
        'White-label options',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'Game Developer',
      content: 'AI 3D Generation has revolutionized our asset creation pipeline. We can now generate 10x more 3D models with incredible quality and detail.',
      rating: 5,
      avatar: 'DC'
    },
    {
      name: 'Lisa Martinez',
      company: 'Architectural Visualization',
      content: 'The text-to-3D generation is mind-blowing. We can now create detailed architectural models from simple descriptions in minutes.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'VR Studio',
      content: 'The real-time rendering and VR export features are perfect for our immersive experiences. The quality is photorealistic.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation Studio - Advanced 3D Modeling & Rendering | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D content creation with automated modeling, real-time rendering, and multi-platform export. Start your free trial today!" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, 3D rendering, text-to-3D, 3D animation, VR content" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI 3D Generation Studio - Advanced 3D Modeling & Rendering" />
        <meta property="og:description" content="Revolutionary AI-powered 3D content creation with automated modeling and real-time rendering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-3d-generation" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-3d-generation.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI 3D Generation Studio",
            "description": "AI-powered 3D content creation with automated modeling and real-time rendering",
            "url": "https://ziontechgroup.com/ai-3d-generation",
            "applicationCategory": "DesignApplication",
            "operatingSystem": "Web, Windows, macOS, Linux",
            "offers": {
              "@type": "Offer",
              "price": "149",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "149",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-8">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI 3D Generation Studio
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary AI-powered 3D content creation with automated modeling, 
                real-time rendering, and seamless multi-platform export capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">10K+</div>
                  <div className="text-gray-300">3D Models Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300">Quality Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50x</div>
                  <div className="text-gray-300">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
                  <div className="text-gray-300">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Advanced 3D Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create stunning 3D content with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Creative Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your 3D creation needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-indigo-500/50 ring-2 ring-indigo-500/20' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700' 
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">What Our Users Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of 3D creators using AI 3D Generation Studio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 italic">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Create Stunning 3D Content?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join 2,000+ 3D creators using AI 3D Generation Studio to create amazing content. 
                  Start your free trial today - no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="#demo" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Watch Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">kleber@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}