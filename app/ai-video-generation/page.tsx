'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, ArrowRight, Video } from 'lucide-react';

const AIVideoGenerationPage: React.FC = () => {
  const features = [
    'Generate videos from text descriptions and images',
    'Create professional-quality content in minutes',
    'Multiple video styles and formats supported',
    'Real-time video generation and preview',
    'Advanced scene synthesis and composition',
    'Motion transfer and style adaptation',
    'Automated video editing and transitions',
    'High-resolution output (4K, 8K)',
    'Batch processing for multiple videos',
    'Custom branding and watermarking'
  ];

  const benefits = [
    'Reduce video production costs by 85%',
    'Create professional videos without expertise',
    'Generate unlimited video content',
    'Accelerate content marketing workflows',
    'Scale video production instantly',
    'Create consistent brand content',
    'Reduce time-to-market for campaigns',
    'Enable non-designers to create videos'
  ];

  const videoTypes = [
    { name: 'Marketing Videos', description: 'Promotional and advertising content', icon: '📢' },
    { name: 'Social Media', description: 'Short-form content for platforms', icon: '📱' },
    { name: 'Explainer Videos', description: 'Educational and how-to content', icon: '🎓' },
    { name: 'Product Demos', description: 'Showcase products and features', icon: '🛍️' },
    { name: 'Training Videos', description: 'Educational and instructional content', icon: '📚' },
    { name: 'Event Coverage', description: 'Conference and event highlights', icon: '🎪' },
    { name: 'Testimonials', description: 'Customer success stories', icon: '💬' },
    { name: 'Animations', description: '2D and 3D animated content', icon: '🎨' }
  ];

  const useCases = [
    {
      title: 'Content Marketing',
      description: 'Create engaging video content for marketing campaigns',
      icon: '📈',
      examples: ['Product launches', 'Brand awareness', 'Social media ads', 'Email campaigns']
    },
    {
      title: 'E-Learning',
      description: 'Generate educational videos and training materials',
      icon: '🎓',
      examples: ['Course content', 'Tutorial videos', 'Training modules', 'Knowledge sharing']
    },
    {
      title: 'E-commerce',
      description: 'Create product videos and shopping experiences',
      icon: '🛒',
      examples: ['Product showcases', 'Shopping demos', 'Unboxing videos', 'Comparison videos']
    },
    {
      title: 'Real Estate',
      description: 'Generate property tours and virtual walkthroughs',
      icon: '🏠',
      examples: ['Property tours', 'Virtual staging', 'Neighborhood guides', 'Investment presentations']
    },
    {
      title: 'Healthcare',
      description: 'Create medical education and patient information videos',
      icon: '🏥',
      examples: ['Medical procedures', 'Patient education', 'Training materials', 'Health awareness']
    },
    {
      title: 'Entertainment',
      description: 'Produce creative and entertainment content',
      icon: '🎬',
      examples: ['Short films', 'Music videos', 'Comedy sketches', 'Creative projects']
    }
  ];

  const pricing = [
    {
      name: 'Creator',
      price: '$199/month',
      description: 'Perfect for individual creators',
      features: [
        'Up to 50 videos/month',
        'HD quality output',
        'Basic templates',
        'Email support',
        'MP4 export',
        '5 minutes max length'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Ideal for businesses',
      features: [
        'Up to 200 videos/month',
        '4K quality output',
        'Advanced templates',
        'Priority support',
        'Multiple export formats',
        '15 minutes max length',
        'Custom branding',
        'Batch processing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299/month',
      description: 'For large organizations',
      features: [
        'Unlimited videos',
        '8K quality output',
        'Custom templates',
        'Dedicated support',
        'API access',
        'Unlimited length',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const technologies = [
    'DALL-E Video', 'Runway ML', 'Stable Video Diffusion', 'OpenCV',
    'Neural Video Synthesis', 'Motion Transfer', 'Custom Video Models',
    'Deep Learning', 'Computer Vision', 'Generative AI'
  ];

  const workflow = [
    {
      step: 1,
      title: 'Describe Your Video',
      description: 'Input text description or upload reference images',
      icon: '✍️'
    },
    {
      step: 2,
      title: 'AI Generation',
      description: 'Our AI creates the video with scenes and motion',
      icon: '🤖'
    },
    {
      step: 3,
      title: 'Review & Edit',
      description: 'Preview, edit, and customize your video',
      icon: '👁️'
    },
    {
      step: 4,
      title: 'Export & Share',
      description: 'Download in your preferred format and share',
      icon: '📤'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Video Generation - Zion Tech Group</title>
        <meta name="description" content="Generate professional videos with AI. Create marketing content, explainer videos, and animations from text descriptions. Starting at $199/month." />
        <meta name="keywords" content="AI video, video generation, marketing videos, explainer videos, video content, automated video" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Video className="w-4 h-4 mr-2" />
            Revolutionary Video Technology
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Video Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create professional-quality videos from simple text descriptions. 
            Generate marketing content, explainer videos, and animations in minutes, not days.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">5min</div>
              <div className="text-gray-300">Generation Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">8K</div>
              <div className="text-gray-300">Max Resolution</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Video Generation Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Video AI?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Types */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Video Types We Generate
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {videoTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{type.name}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Simple 4-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Applications & Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Examples:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-500">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Video Generation Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Advanced Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Generate Videos?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start creating professional videos with our AI-powered generation technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVideoGenerationPage;