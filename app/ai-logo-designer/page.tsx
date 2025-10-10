'use client';
import React from 'react';
import { Palette, Download, CheckCircle, Star, Users, ArrowRight, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AILogoDesignerPage: React.FC = () => {
  const features = [
    'AI-powered logo generation',
    'Unlimited logo variations',
    'High-resolution downloads',
    'Vector format support',
    'Brand color palette',
    'Typography suggestions',
    'Icon library access',
    'Custom logo editing',
    'Brand guidelines generation',
    'Social media templates',
    'Business card designs',
    'Watermark removal'
  ];

  const benefits = [
    'Create logos in minutes',
    'Professional quality guaranteed',
    'Unlimited revisions',
    'Commercial use rights',
    'Brand consistency tools',
    '24/7 design support'
  ];

  const logoStyles = [
    {
      name: 'Modern Minimalist',
      description: 'Clean, simple designs perfect for tech and startup companies',
      examples: ['Geometric shapes', 'Clean typography', 'Monochrome palette'],
      price: 'Free'},
    {
      name: 'Classic Corporate',
      description: 'Professional and trustworthy designs for established businesses',
      examples: ['Serif fonts', 'Traditional colors', 'Formal layout'],
      price: '$19'},
    {
      name: 'Creative Artistic',
      description: 'Unique and creative designs for creative agencies and artists',
      examples: ['Hand-drawn elements', 'Vibrant colors', 'Unique shapes'],
      price: '$29'},
    {
      name: 'Vintage Retro',
      description: 'Nostalgic designs with a modern twist for lifestyle brands',
      examples: ['Retro fonts', 'Warm colors', 'Classic elements'],
      price: '$24'},
    {
      name: 'Playful Fun',
      description: 'Light-hearted and friendly designs for children and entertainment',
      examples: ['Rounded shapes', 'Bright colors', 'Friendly fonts'],
      price: '$19'},
    {
      name: 'Luxury Premium',
      description: 'Elegant and sophisticated designs for high-end brands',
      examples: ['Gold accents', 'Elegant fonts', 'Refined details'],
      price: '$39'}
  ];

  const pricingPlans = [
    {
      name: 'Basic'
      price: '$29',
      period: '/month',
      originalPrice: '$49',
      features: [
        '10 logo downloads',
        'Basic templates',
        'PNG format only',
        'Standard resolution',
        'Email support',
        'Commercial use'
      ],
      popular: false
  },
    {
      name: 'Professional'
      price: '$59',
      period: '/month',
      originalPrice: '$99',
      features: [
        'Unlimited downloads',
        'Premium templates',
        'All formats (PNG, SVG, PDF)',
        'High resolution',
        'Priority support',
        'Brand guidelines',
        'Social media templates',
        'Business card designs'
      ],
      popular: true
  },
    {
      name: 'Enterprise'
      price: '$99',
      period: '/month',
      originalPrice: '$149',
      features: [
        'Everything in Professional',
        'White-label options',
        'API access',
        'Custom templates',
        'Dedicated support',
        'Team collaboration',
        'Advanced editing tools',
        'Brand asset management'
      ],
      popular: false
  }
  ];

  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'Startup Founder',
      content: 'AI Logo Designer Pro created the perfect logo for my startup in just 10 minutes. The AI understood my brand vision and delivered exactly what I needed.',
      rating: 5
  },
    {
      name: 'Maria Santos',
      role: 'Graphic Designer',
      content: 'As a designer, I was skeptical about AI tools, but this one is incredible. It helps me generate initial concepts quickly and then I can refine them.',
      rating: 5
  },
    {
      name: 'James Wilson',
      role: 'Small Business Owner',
      content: 'The brand guidelines feature is amazing. It gave me everything I needed to maintain consistency across all my marketing materials.',
      rating: 5
  }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-20 pb-16 px-4">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <Palette className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Logo Designer Pro<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create stunning, professional logos in minutes with AI-powered design generation. From concept to completion, get the perfect logo for your brand with unlimited variations and commercial rights.</p>
            </div>
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              AI Logo Designer Pro;
            </h1>,
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
              Create stunning, professional logos in minutes with AI-powered design generation. From concept to completion, get the perfect logo for your brand with unlimited variations and commercial rights.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="w-5 h-5" />,
                <span>Free trial available</span>,
              </div>,
              <div className="flex items-center space-x-2 text-blue-400">,
                <Users className="w-5 h-5" />,
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6"></div>
              <Palette className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Logo Designer Pro</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create stunning, professional logos in minutes with AI-powered design generation. From concept to completion, get the perfect logo for your brand with unlimited variations and commercial rights.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"></div>
              <div className="flex items-center space-x-2 text-green-400"></div>
                <CheckCircle className="w-5 h-5" />
                <span>Free trial available</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-400"></div>
                <Users className="w-5 h-5" />
                <span>75,000+ logos created</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400"></div>
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 rating</span>
              </div>
            </div>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="#pricing"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >Start Creating Free</a>
                <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              <a
                href="#demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >Watch Demo</a>
              >
                Start Creating Free;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a;
                href="#demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Watch Demo;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful Logo Design Features<p className="text-xl text-gray-300 max-w-3xl mx-auto">Everything you need to create professional logos that represent your brand perfectly.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">{feature}<p className="text-gray-300 text-sm">{feature === 'AI-powered logo generation' && 'Advanced AI analyzes your brand description and generates unique, professional logo concepts tailored to your industry.'}
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Powerful Logo Design Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional logos that represent your brand perfectly.
            </p>)
          </div>)
)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">),
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover: border-purple-400/40 transition-all duration-300">,
                <div className="flex items-center space-x-3 mb-4">,
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">,
                    <Sparkles className="w-5 h-5 text-white" />,
                  </div>,
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  {feature === 'AI-powered logo generation' && 'Advanced AI analyzes your brand description and generates unique, professional logo concepts tailored to your industry.'}
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful Logo Design Features</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Everything you need to create professional logos that represent your brand perfectly.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"></div>
                <div className="flex items-center space-x-3 mb-4"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center"></div>
                    <Sparkles className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3><p className="text-gray-300 text-sm">{feature === 'AI-powered logo generation' && 'Advanced AI analyzes your brand description and generates unique, professional logo concepts tailored to your industry.'}
                  {feature === 'Unlimited logo variations' && 'Generate unlimited variations of your logo with different colors, fonts, and layouts until you find the perfect match.'}
                  {feature === 'High-resolution downloads' && 'Download your logos in high resolution (up to 4 K) for use in print, web, and any other medium.'}
                  {feature === 'Vector format support' && 'Get your logos in vector format (SVG) for infinite scalability without quality loss.'}
                  {feature === 'Brand color palette' && 'AI suggests complementary color palettes that work perfectly with your logo design.'}
                  {feature === 'Typography suggestions' && 'Get font recommendations that match your logo style and brand personality.'}
                  {feature === 'Icon library access' && 'Access thousands of professional icons and symbols to incorporate into your logo design.'}
                  {feature === 'Custom logo editing' && 'Fine-tune your logo with our advanced editing tools for perfect customization.'}
                  {feature === 'Brand guidelines generation' && 'Automatically generate comprehensive brand guidelines including logo usage, colors, and typography.'}
                  {feature === 'Social media templates' && 'Get pre-made social media templates featuring your logo for consistent branding.'}
                  {feature === 'Business card designs' && 'Create matching business cards and stationery with your new logo design.'}</p>
                  {feature === 'Watermark removal' && 'Remove watermarks from your final logo designs for professional use.'}</p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Styles Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Logo Design Styles<p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose from various design styles or let AI suggest the perfect style for your brand.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{logoStyles.map((style, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300">
                <div className="h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{style.name}<span className="text-purple-400 font-semibold">{style.price}<p className="text-gray-300 text-sm mb-4">{style.description}<ul className="space-y-1">{style.examples.map((example, exampleIndex) => (</ul>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Logo Design Styles;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from various design styles or let AI suggest the perfect style for your brand.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {logoStyles.map((style, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover: border-purple-400/40 transition-all duration-300">,
                <div className="h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">,
                  <Palette className="w-16 h-16 text-white opacity-50" />,
                </div>,
                <div className="flex items-center justify-between mb-2">,
                  <h3 className="text-lg font-semibold text-white">{style.name}</h3>
                  <span className="text-purple-400 font-semibold">{style.price}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{style.description}</p>
                <ul className="space-y-1">
                  {style.examples.map((example, exampleIndex) => (
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Logo Design Styles</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose from various design styles or let AI suggest the perfect style for your brand.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{logoStyles.map((style, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"></div>
                <div className="h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <Palette className="w-16 h-16 text-white opacity-50" />
                </div>
                <div className="flex items-center justify-between mb-2"></div>
                  <h3 className="text-lg font-semibold text-white">{style.name}</h3><span className="text-purple-400 font-semibold">{style.price}</span><p className="text-gray-300 text-sm mb-4">{style.description}</p><ul className="space-y-1">{style.examples.map((example, exampleIndex) => (</ul>
                    <li key={exampleIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      <span>{example}</span>
                    </li>
                  ))}
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">Try This Style</button>
                </button>
              </div>
                </ul>
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover: from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Try This Style;
                </button>,
              </div>))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose AI Logo Designer Pro?<p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the future of logo design with AI-powered creativity and professional results.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Why Choose AI Logo Designer Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of logo design with AI-powered creativity and professional results.,
            </p>,
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose AI Logo Designer Pro?</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the future of logo design with AI-powered creativity and professional results.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3><p className="text-gray-300">{benefit === 'Create logos in minutes' && 'AI-powered generation means you can have a professional logo ready in minutes, not days or weeks.'}
                  {benefit === 'Professional quality guaranteed' && 'Our AI is trained on thousands of professional logos to ensure high-quality, industry-standard designs.'}
                  {benefit === 'Unlimited revisions' && 'Generate as many variations as you need until you find the perfect logo for your brand.'}
                  {benefit === 'Commercial use rights' && 'All logos come with full commercial use rights, so you can use them for any business purpose.'}
                  {benefit === 'Brand consistency tools' && 'Generate brand guidelines and templates to maintain consistency across all your marketing materials.'}</p>
                  {benefit === '24/7 design support' && 'Get help from our design experts whenever you need assistance with your logo creation process.'}</p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Design Plan<p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible pricing plans designed to meet your logo design needs, from personal projects to enterprise branding.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-purple-400/40 ring-2 ring-purple-400/20' : 'border-gray-600/40'}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Design Plan</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible pricing plans designed to meet your logo design needs, from personal projects to enterprise branding.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-purple-400/40 ring-2 ring-purple-400/20' : 'border-gray-600/40'}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Choose Your Design Plan;
            </h2>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">,
              Flexible pricing plans designed to meet your logo design needs, from personal projects to enterprise branding.
            </p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-purple-400/40 ring-2 ring-purple-400/20' : 'border-gray-600/40'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular;
                    </span>
                  </div>
                )}

                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</spa>
                  )}
                <ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</u>
                    <li key={featureIndex} className="flex items-center space-x-3"></l>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircl>
                      <span className="text-gray-300">{feature}</spa>
                    </li>
                  ))}
                <a
                </ul>

                <a;
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover: from-purple-700 hover:to-pink-700'}
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'}
                  }`}
                >Get Started</a>
                >
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Success Stories<p className="text-xl text-gray-300 max-w-3xl mx-auto">See how AI Logo Designer Pro has helped businesses create amazing brand identities.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Success Stories;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Logo Designer Pro has helped businesses create amazing brand identities.
            </p>
          </div>,
,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6">
                <div className="flex items-center space-x-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}<p className="text-gray-400 text-sm">{testimonial.role}</p>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Success Stories</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">See how AI Logo Designer Pro has helped businesses create amazing brand identities.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-800/80 backdrop-blur-sm border border-purple-400/20 rounded-xl p-6"></div>
                <div className="flex items-center space-x-1 mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <p className="font-semibold text-white">{testimonial.name}</p><p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Logo?<p className="text-xl text-purple-100 mb-8">Start designing your perfect logo today with AI Logo Designer Pro.</p>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
            Ready to Create Your Logo?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start designing your perfect logo today with AI Logo Designer Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a;
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Logo?</h2><p className="text-xl text-purple-100 mb-8">Start designing your perfect logo today with AI Logo Designer Pro.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors flex items-center space-x-2"
            ></a>
              <Phone className="w-5 h-5" /></Phon>
              <span>+1 302 464 0950</spa>
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center space-x-2"
            ></a>
              <Mail className="w-5 h-5" /></Mai>
              <<<<span>kleber</span></span>@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-8 text-purple-100">,
            <p className="flex items-center justify-center space-x-2">,
              <MapPin className="w-4 h-4" />,
          <div className="mt-8 text-purple-100"></div>
            <p className="flex items-center justify-center space-x-2"></p>
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            </p>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default AILogoDesignerPage;