'use client';
import React from 'react';
<<<<<<< HEAD
import { CheckCircle, Star, ArrowRight, FileText, Smartphone, Video, Image, Globe, Users, Zap, Target, Brain, Settings, Activity, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentGenerationPage: React.FC = () => {
  const contentServices = [
    {
=======
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight, FileText, Image, Video, Music, Globe, Zap, Brain, Target, Users, Phone, Mail, MapPin } from 'lucide-react';

<<<<<<< HEAD
const AIContentGenerationPage: React.FC = () => {
  const features = [
=======
const $1: React.FC = () => {
  const contentServices = [,
    {,
>>>>>>> origin/main
      title: 'AI Blog Content Generator Pro',
      description: 'Advanced AI-powered blog content creation with SEO optimization, research integration, and brand voice consistency.',
      icon: FileText,
      price: '$199',
      period: '/month',
      features: [
        'SEO-optimized content generation',
        'Research integration',
        'Brand voice consistency',
        'Multi-language support',
        'Content calendar automation',
        'Performance analytics'
      ],
      benefits: [
        'Create 10x more content',
        'Improve SEO rankings by 150%',
        'Save 40+ hours per week',
        'Increase organic traffic by 200%'
      ],
<<<<<<< HEAD
      popular: false
    },
    {
      title: 'AI Social Media Content Suite',
      description: 'Comprehensive social media content creation with platform-specific optimization, hashtag research, and engagement prediction.',
      icon: Smartphone,
      price: '$149',
      period: '/month',
      features: [
        'Platform-specific optimization',
        'Hashtag research automation',
        'Engagement prediction',
        'Visual content generation',
        'Posting schedule optimization',
        'Viral content analysis'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Grow followers organically',
        'Save 25+ hours per week',
        'Improve brand awareness'
      ],
      popular: true
    },
    {
      title: 'AI Video Content Creator',
      description: 'Professional video content generation with script writing, voice synthesis, and automated editing capabilities.',
      icon: Video,
      price: '$299',
      period: '/month',
      features: [
        'Script generation',
        'Voice synthesis',
        'Automated editing',
        'Multiple formats',
        'Brand integration',
        'Performance tracking'
      ],
      benefits: [
        'Create professional videos',
        'Reduce production costs by 80%',
        'Scale video content',
        'Improve engagement rates'
      ],
      popular: false
    },
    {
      title: 'AI Image & Design Generator',
      description: 'Advanced image and design creation with AI-powered tools for graphics, illustrations, and visual content.',
      icon: Image,
      price: '$99',
      period: '/month',
      features: [
        'Custom image generation',
        'Design templates',
        'Brand consistency',
        'Multiple formats',
        'Batch processing',
        'Commercial license'
      ],
      benefits: [
        'Unlimited image creation',
        'Professional quality designs',
        'Save design costs',
        'Consistent brand visuals'
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'Latest GPT-4, Claude, and custom fine-tuned models for superior content quality',
      color: 'text-purple-400'
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Built-in SEO optimization to improve search rankings and organic traffic',
      color: 'text-blue-400'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Generate content in 50+ languages with cultural context and localization',
      color: 'text-green-400'
    },
    {
      icon: Users,
      title: 'Brand Voice Consistency',
      description: 'Maintain consistent brand voice and tone across all generated content',
      color: 'text-orange-400'
    },
    {
      icon: Zap,
      title: 'Real-Time Generation',
      description: 'Generate high-quality content in seconds with real-time processing',
      color: 'text-cyan-400'
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Create custom content generation workflows tailored to your needs',
      color: 'text-pink-400'
=======
      marketPrice: '$500-1000/month',
      technologies: ['OpenAI GPT-4', 'Claude', 'Custom Fine-tuned Models', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'},
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
    {
      icon: FileText,
      title: 'AI Blog Content Generator',
      description: 'Advanced AI-powered blog content creation with SEO optimization and brand voice consistency.',
      benefits: ['SEO-optimized content', 'Brand voice consistency', 'Multi-language support', 'Content calendar automation']
    },
    {
      icon: Image,
      title: 'Visual Content Creation',
      description: 'Generate stunning images, graphics, and visual content using AI-powered design tools.',
      benefits: ['AI image generation', 'Custom graphics', 'Brand consistency', 'High-quality output']
    },
    {
      icon: Video,
      title: 'Video Content Production',
      description: 'Create engaging video content with AI-powered editing, scripting, and production tools.',
      benefits: ['AI video editing', 'Script generation', 'Auto-captioning', 'Multi-format export']
    },
    {
      icon: Music,
      title: 'Audio Content Generation',
      description: 'Generate podcasts, voiceovers, and audio content with AI-powered voice synthesis.',
      benefits: ['Voice synthesis', 'Podcast generation', 'Audio editing', 'Multi-language support']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Content',
      description: 'Create content optimized for different platforms and channels with AI assistance.',
      benefits: ['Platform optimization', 'Channel-specific content', 'Cross-platform consistency', 'Automated distribution']
    },
    {
      icon: Brain,
      title: 'Content Intelligence',
      description: 'AI-powered content analysis and optimization for better performance and engagement.',
      benefits: ['Performance analysis', 'Engagement prediction', 'Content optimization', 'Trend analysis']
>>>>>>> origin/main
    }
  ];

  const benefits = [
    'Increase content production by 10x',
    'Improve SEO rankings by 150%',
    'Save 40+ hours per week',
<<<<<<< HEAD
    'Reduce content costs by 80%',
    'Scale content across platforms',
    'Maintain brand consistency'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Pro',
      role: 'Marketing Director',
      quote: 'AI content generation increased our blog traffic by 300% while reducing content creation time by 80%.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Social Media Agency',
      role: 'CEO',
      quote: 'The social media suite helped us manage 50+ client accounts efficiently. Engagement rates improved dramatically.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'E-commerce Brand',
      role: 'Content Manager',
      quote: 'Video content creation is now effortless. We produce 10x more videos with better quality and engagement.',
      rating: 5,
      image: '👩‍💻'
=======
    'Increase organic traffic by 200%',
    'Enable consistent brand voice',
    'Automate content workflows',
    'Scale content across channels',
    'Enhance content quality'
  ];

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Generate high-quality blog posts and articles with AI assistance',
      icon: '📝'
    },
    {
      title: 'Social Media',
      description: 'Create engaging social media posts and campaigns across platforms',
      icon: '📱'
    },
    {
      title: 'Marketing Materials',
      description: 'Generate marketing copy, ads, and promotional content',
      icon: '📢'
    },
    {
      title: 'E-commerce Content',
      description: 'Create product descriptions, reviews, and e-commerce content',
      icon: '🛒'
    },
    {
      title: 'Educational Content',
      description: 'Generate educational materials, courses, and training content',
      icon: '📚'
    },
    {
      title: 'Technical Documentation',
      description: 'Create technical documentation and user guides with AI',
      icon: '📋'
>>>>>>> origin/main
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">✍️</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Content Generation
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Create Amazing Content with AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Generate high-quality, SEO-optimized content at scale with our advanced AI-powered 
            content generation tools. Blogs, social media, videos, and more.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">More Content</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">150%</div>
              <div className="text-gray-300">SEO Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">40+</div>
              <div className="text-gray-300">Hours Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Creating
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </section>

        {/* Content Services Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Content Generation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive content creation tools for every platform and format
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                service.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">
                    <service.icon className="text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {service.price}<span className="text-lg text-gray-400">{service.period}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
=======
<<<<<<< HEAD
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Transform your content creation with our AI Content Generation solutions. Automated blog posts, social media content, and marketing materials for better engagement." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, social media content, marketing automation, content AI" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content creation with our AI Content Generation solutions. Automated blog posts, 
              social media content, and marketing materials for better engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Content Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Content Generation solutions combine cutting-edge technology with creative expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">{/* Hero Section */}</div>
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">AI Content Generation</h1><span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span><p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Transform your content strategy with our AI-powered content generation services.</p>
              Create high-quality blog posts, social media content, and marketing copy 10x faster.</p>
  return(<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}</div>
      <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Content Generation;</h1>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">)
                Services;)
              </span>)
            </h1>)
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">),
              Transform your content strategy with our AI-powered content generation services.),
              Create high-quality blog posts, social media content, and marketing copy 10x faster.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
      >
                <span>Call Now: (302) 464-0950</span>
                <ArrowRight className="w-5 h-5" />
              <a
                href="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >Get Free Consultation</a>
              </a>
              <a;
                href="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Get Free Consultation;
              </a>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Services Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Content Services<p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our comprehensive suite of AI-powered content generation services<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{contentServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"></div>
                <div className="flex items-center mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Content Services;
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered content generation services;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
            {contentServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover: shadow-xl transition-shadow">,</div>
                <div className="flex items-center mb-4">,</div>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Content Services</h2><p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose from our comprehensive suite of AI-powered content generation services</p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{contentServices.map((service, index) => (</div>
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"></div>
                <div className="flex items-center mb-4"></div>
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <div></div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3><p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <div className="mb-6"></div>
                  <div className="flex items-center justify-between mb-2"></div>
                    <span className="text-3xl font-bold text-blue-600">{service.price}</span><span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                </div>
                <div className="mb-6"></div>
                <div className="mb-6"></div>
                  <h4 className="font-semibold text-gray-900 mb-3">Features:<ul className="space-y-2">{service.features.map((feature, idx) => (</ul>
                  <h4 className="font-semibold text-gray-900 mb-3">Features: </h4>,
                  <ul className="space-y-2">,
>>>>>>> origin/main
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
=======
                <div className="mb-6"></div>
                <div className="mb-6"></div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:<ul className="space-y-2">{service.benefits.map((benefit, idx) => (</ul>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits: </h4>,
                  <ul className="space-y-2">,
>>>>>>> origin/main
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <ArrowRight className="text-cyan-400 mr-2 w-4 h-4" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI capabilities for superior content generation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className={feature.color} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Content Generation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your content strategy with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations transformed their content strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start generating amazing content with AI today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
=======
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From blogs to social media, our AI Content Generation serves diverse content needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Content Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of content creation with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Join thousands of creators who are already using our AI Content Generation solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
>>>>>>> origin/main
            </div>
          </div>
        </section>
      </main>

      <Footer />
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> origin/main
  );
};

export default AIContentGenerationPage;