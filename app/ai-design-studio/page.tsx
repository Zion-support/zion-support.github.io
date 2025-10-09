'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Palette, Zap, Users, Shield, Clock, Star, CheckCircle, ArrowRight, Sparkles, Layers, Brush, Image, Video, Code, Smartphone, Globe, BarChart, Target, Rocket } from 'lucide-react';

const AIDesignStudioPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'AI-Powered Design Generation',
      description: 'Create stunning visuals, logos, and graphics with AI assistance in seconds',
      color: 'text-pink-400'
    },
    {
      icon: Brush,
      title: 'Professional Templates',
      description: 'Access thousands of professionally designed templates for all industries',
      color: 'text-purple-400'
    },
    {
      icon: Image,
      title: 'Smart Image Editing',
      description: 'Advanced AI-powered image editing and enhancement tools',
      color: 'text-blue-400'
    },
    {
      icon: Video,
      title: 'Video Creation',
      description: 'Create engaging videos with AI-generated content and animations',
      color: 'text-green-400'
    },
    {
      icon: Code,
      title: 'Code Generation',
      description: 'Generate CSS, HTML, and design code automatically',
      color: 'text-yellow-400'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Automatically optimize designs for all devices and screen sizes',
      color: 'text-indigo-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        '100 AI-generated designs per month',
        'Basic templates library',
        'Standard image editing',
        'Email support',
        '5GB storage'
      ],
      color: 'border-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for freelancers and small teams',
      features: [
        '500 AI-generated designs per month',
        'Premium templates library',
        'Advanced image editing',
        'Video creation tools',
        'Priority support',
        '50GB storage',
        'Team collaboration'
      ],
      color: 'border-pink-500',
      buttonColor: 'bg-pink-500 hover:bg-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large teams and agencies',
      features: [
        'Unlimited AI-generated designs',
        'Full templates library',
        'Advanced video creation',
        'Code generation',
        '24/7 dedicated support',
        'Unlimited storage',
        'Custom branding',
        'API access'
      ],
      color: 'border-purple-500',
      buttonColor: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      company: 'DesignCo',
      content: 'AI Design Studio has revolutionized our creative process. We can now create professional designs 10x faster.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Freelance Designer',
      company: 'Independent',
      content: 'The AI suggestions are incredibly accurate and help me explore creative directions I never would have thought of.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      company: 'TechStart',
      content: 'We\'ve reduced our design costs by 70% while improving quality. The templates are amazing!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Design Studio - Professional Design Tools | Zion Tech Group</title>
        <meta name="description" content="Create stunning visuals, logos, and graphics with AI-powered design tools. Professional templates, smart editing, and automated code generation." />
        <meta name="keywords" content="AI design, graphic design, logo creation, visual content, design automation, creative tools" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-design-studio" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-bg matrix-rain data-stream">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch quantum-float hologram-flicker">
                AI Design Studio
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-advanced cyber-scan-overlay">
                Professional Design Tools Powered by AI
              </p>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
                Create stunning visuals, logos, graphics, and videos with AI assistance. 
                Access thousands of professional templates and automate your design workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Rocket className="w-5 h-5 mr-2 inline" />
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Video className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              Powerful Design Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card-advanced quantum-hologram p-6 hover:scale-105 transition-all duration-300 quantum-float">
                  <feature.icon className={`w-12 h-12 ${feature.color} mb-4 quantum-entanglement`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-advanced">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              Choose Your Plan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card-advanced quantum-hologram p-8 relative ${plan.color} ${plan.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 ${plan.buttonColor}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-advanced hologram-flicker cyber-scan-overlay">
              What Our Users Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card-advanced quantum-hologram p-6 quantum-float">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card-advanced quantum-hologram p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-advanced">
                Ready to Transform Your Design Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of designers and creatives who are already using AI Design Studio 
                to create amazing visuals faster than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-advanced w-full sm:w-auto text-center cyber-pulse"
                >
                  <Mail className="w-5 h-5 mr-2 inline" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIDesignStudioPage;