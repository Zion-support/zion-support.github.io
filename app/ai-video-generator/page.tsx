'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Video, Play, Target, Users, Globe, CheckCircle, Brain } from 'lucide-react';

const AIVideoGenerator: React.FC = memo(() => {,
const AIVideoGenerator: React.FC = memo(() => {}
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {}
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Video,
    {}
      icon: Video,
      title: 'AI-Powered Video Creation',
      description: 'Generate professional videos from text prompts in minutes with advanced AI technology',
      color: 'text-purple-400'},
    {
      icon: Play,
    {}
      icon: Play,
      title: 'Multiple Video Formats',
      description: 'Create videos in 4K, HD, social media formats, and custom dimensions for any platform',
      color: 'text-blue-400'},
    {
      icon: Brain,
    {}
      icon: Brain,
      title: 'Smart Content Generation',
      description: 'AI automatically generates scripts, selects music, and creates engaging visual content',
      color: 'text-green-400'},
    {
      icon: Target,
    {}
      icon: Target,
      title: 'Brand Customization',
      description: 'Maintain consistent branding with custom templates, colors, fonts, and logos',
      color: 'text-orange-400'}
  ],

  const pricingPlans = [
    {
      name: 'Creator'
    {}
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for content creators',
      features: [,
        'Up to 10 videos/month',
        'HD quality (1080 p)',
        'Basic templates',
        'Text-to-video generation',
        'Email support',
        'Commercial license'
      ],
      popular: false},
      popular: false,
    },
    {
      name: 'Professional'
    {}
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for businesses',
      features: [,
        'Up to 50 videos/month',
        '4 K quality available',
        'Premium templates',
        'Voice synthesis',
        'Priority support',
        'Brand customization',
        'API access'
      ],
      popular: true},
      popular: true,
    },
    {
      name: 'Enterprise'
    {}
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [,
        'Unlimited videos',
        'All quality options',
        'Custom templates',
        'White-label solution',
        '24/7 dedicated support',
        'Advanced analytics',
        'Team collaboration'
      ],
      popular: false}
      popular: false,
    }
  ];

  const useCases = [
    {}
      title: 'Marketing Videos',
      description: 'Create compelling product demos and promotional content',
      icon: Target,
      result: '10x faster'},
    {}
      title: 'Social Media Content',
      description: 'Generate engaging videos for Instagram, TikTok, and YouTube',
      icon: Globe,
      result: '95% engagement'},
    {}
      title: 'Training Materials',
      description: 'Produce educational and training videos for your team',
      icon: Users,
      result: '80% retention'},
    {}
      title: 'Explainer Videos',
      description: 'Create clear, concise explainer videos for complex topics',
      icon: Brain,
      result: '3x clarity'}
  ],
const Component = () => {

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
const Component = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>AI Video Generator - Create Professional Videos with AI | Zion Tech Group</title>
        <meta name="description" content="Generate professional videos from text prompts in minutes. AI-powered video creation with 4K quality, custom branding, and multiple formats." />
        <meta name="keywords" content="AI video generator, video creation, text to video, video marketing, content creation" />
        <meta property="og: title" content="AI Video Generator - Create Professional Videos with AI" />
        <meta property="og:description" content="Generate professional videos from text prompts in minutes with our advanced AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-video-generator" />
      <div className="container mx-auto px-4 py-16">{/* Hero Section */}</div>
        </div><section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></section>
            <Video className="w-4 h-4" />
            <span>AI Video Creation</span><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Video Generator</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Create professional videos from text prompts in minutes. Our AI-powered platform generates</p>
            engaging content with custom branding, multiple formats, and 4K quality for any platform.</p>
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-video-generator" />,
      </Helmet>,
,
      <div className="container mx-auto px-4 py-16">,
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Video className="w-4 h-4" />
            <span>AI Video Creation</span>
          </div>

          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            AI Video Generator,
          </h1>)
)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            Create professional videos from text prompts in minutes. Our AI-powered platform generates;),
            engaging content with custom branding, multiple formats, and 4K quality for any platform.
          </p>

          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a,
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950<a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >Start Creating Videos</a>
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950,
            </a>
            <a;
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover: bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Start Creating Videos,
            </a>
          </div>,
        </section>,
,
        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">10x<div className="text-white font-semibold mb-2">Faster Creation<div className="text-gray-400 text-sm">Create videos 10x faster than traditional methods</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></section>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"></div>
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div><div className="text-white font-semibold mb-2">Faster Creation</div><div className="text-gray-400 text-sm">Create videos 10x faster than traditional methods</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
              <div className="text-3xl font-bold text-blue-400 mb-2">4K</div><div className="text-white font-semibold mb-2">Quality</div><div className="text-gray-400 text-sm">Professional 4K video quality available</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">50+<div className="text-white font-semibold mb-2">Templates<div className="text-gray-400 text-sm">Professional templates for every use case</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7<div className="text-white font-semibold mb-2">Available<div className="text-gray-400 text-sm">Create videos anytime, anywhere</div>
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-white font-semibold mb-2">Templates</div>
              <div className="text-gray-400 text-sm">Professional templates for every use case</div>,
            </div>,
            <div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20">,
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>,
              <div className="text-white font-semibold mb-2">Available</div>,
              <div className="text-gray-400 text-sm">Create videos anytime, anywhere</div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"></div>
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div><div className="text-white font-semibold mb-2">Templates</div><div className="text-gray-400 text-sm">Professional templates for every use case</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20"></div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div><div className="text-white font-semibold mb-2">Available</div><div className="text-gray-400 text-sm">Create videos anytime, anywhere</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (}
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-start space-x-4">,
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (}
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-center justify-between mb-4">,
                  <useCase.icon className="w-8 h-8 text-purple-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</section>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3><p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover: border-purple-500/50 transition-all duration-300`}>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular,
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><p className="text-gray-400 mt-2">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    </ul><li key={featureIndex} className="flex items-center space-x-3">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                <a
                </ul>
                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover: from-purple-700 hover:to-blue-700'}
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >Get Started</a>
                >
                  Get Started,
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Amazing Videos?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 1,000+ creators and businesses already using our AI Video Generator to create professional content.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a,
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></section>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950</Phone>
            </Phone>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ></a><MessageSquare className="w-5 h-5 mr-2" >Email Us</MessageSquar>
            </MessageSquare>
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950,
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover: bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us,
            </a>
          </div>
        </section>
      </div>
    </div>
  );
});

AIVideoGenerator.displayName = 'AIVideoGenerator';
,
export default AIVideoGenerator;