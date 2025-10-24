<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function GDataAnalyticsZionTechGroupPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Video Generator - Zion Tech Group</title>
        <meta name="description" content="Ai Video Generator solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Video Generator</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai video generator solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Video, Play, Camera, Edit } from 'lucide-react'
=======
const AIVideoGenerator: React.FC = memo(() => {}
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {}
    setIsLoaded(true);
  }, []);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

const AiVideoGeneratorPage: React.FC = () => {
  const serviceType = 'ai'
  
  const features = [
<<<<<<< HEAD
    {
      icon: Video,
      title: 'AI Video Generation',
      description: 'Create professional videos using advanced AI technology.',
      benefits: ['Text-to-video', 'Auto-editing', 'Scene generation', 'Voice synthesis']
    },
    {
      icon: Camera,
      title: 'Smart Camera Work',
      description: 'Intelligent camera movements and framing for cinematic results.',
      benefits: ['Auto-framing', 'Smooth transitions', 'Dynamic angles', 'Professional quality']
    },
    {
      icon: Edit,
      title: 'Automated Editing',
      description: 'AI-powered video editing with professional-grade results.',
      benefits: ['Auto-cuts', 'Color correction', 'Audio sync', 'Transitions']
    },
    {
      icon: Play,
      title: 'Multi-Format Export',
      description: 'Export videos in various formats for different platforms.',
      benefits: ['HD/4K support', 'Social media formats', 'Custom resolutions', 'Fast rendering']
    },
    {
      icon: Shield,
      title: 'Brand Consistency',
      description: 'Maintain brand consistency across all video content.',
      benefits: ['Brand templates', 'Logo integration', 'Color schemes', 'Style guides']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on video projects.',
      benefits: ['Shared workspaces', 'Version control', 'Comments', 'Approval workflows']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses starting with AI video generation',
      features: [
        'Up to 10 videos per month',
        'HD quality export',
=======
    {}
      icon: Video,
      title: 'AI-Powered Video Creation',
      description: 'Generate professional videos from text prompts in minutes with advanced AI technology',
      color: 'text-purple-400'},
    {}
      icon: Play,
      title: 'Multiple Video Formats',
      description: 'Create videos in 4K, HD, social media formats, and custom dimensions for any platform',
      color: 'text-blue-400'},
    {}
      icon: Brain,
      title: 'Smart Content Generation',
      description: 'AI automatically generates scripts, selects music, and creates engaging visual content',
      color: 'text-green-400'},
    {}
      icon: Target,
      title: 'Brand Customization',
      description: 'Maintain consistent branding with custom templates, colors, fonts, and logos',
      color: 'text-orange-400'}
  ];

  const pricingPlans = [
    {}
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        'Up to 10 videos/month',
        'HD quality (1080 p)',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        'Basic templates',
        'Email support',
        '5GB storage'
      ],
<<<<<<< HEAD
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced video needs',
      features: [
        'Up to 50 videos per month',
        '4K quality export',
=======
      popular: false;
    },
    {
      name: 'Professional'
    {}
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for businesses',
      features: [
        'Up to 50 videos/month',
        '4 K quality available',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        'Premium templates',
        'Priority support',
        '50GB storage',
        'Custom branding'
      ],
<<<<<<< HEAD
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete AI video solution for large organizations',
=======
      popular: true;
    },
    {
      name: 'Enterprise'
    {}
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      features: [
        'Unlimited videos',
        '8K quality export',
        'Custom templates',
        'Dedicated support',
        'Unlimited storage',
        'White-label options'
      ],
<<<<<<< HEAD
      popular: false
    }
  ]

  const stats = [
    { label: 'Videos Generated', value: '100,000+', icon: Video },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Time Saved', value: '90%', icon: Clock },
    { label: 'Cost Reduction', value: '70%', icon: TrendingUp }
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Video Generator | Zion Tech Group</title>
        <meta name="description" content="Professional AI video generator solutions for modern businesses. Create videos with AI technology." />
        <meta name="keywords" content="AI video generator, video creation, AI technology, video automation, content creation" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Video Generator
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Video Generator
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create professional videos effortlessly with our AI-powered video generator. 
              Transform your ideas into stunning visual content in minutes, not hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
=======
      popular: false;
    }
  ];

  const useCases = [
    {}
      title: 'Marketing Videos',
      description: 'Create compelling product demos and promotional content',
      icon: Target;
      result: '10x faster'},
    {}
      title: 'Social Media Content',
      description: 'Generate engaging videos for Instagram, TikTok, and YouTube',
      icon: Globe;
      result: '95% engagement'},
    {}
      title: 'Training Materials',
      description: 'Produce educational and training videos for your team',
      icon: Users;
      result: '80% retention'},
    {}
      title: 'Explainer Videos',
      description: 'Create clear, concise explainer videos for complex topics',
      icon: Brain;
      result: '3x clarity'}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>AI Video Generator - Create Professional Videos with AI | Zion Tech Group</title>
        <meta name="description" content="Generate professional videos from text prompts in minutes. AI-powered video creation with 4K quality, custom branding, and multiple formats." />
        <meta name="keywords" content="AI video generator, video creation, text to video, video marketing, content creation" />
        <meta property="og: title" content="AI Video Generator - Create Professional Videos with AI" />
        <meta property="og:description" content="Generate professional videos from text prompts in minutes with our advanced AI technology." />
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-video-generator" />,
      </Helmet>,
,
      <div className="container mx-auto px-4 py-16">,
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Video className="w-4 h-4" />
            <span>AI Video Creation</span>
          </div>

          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
            AI Video Generator;
          </h1>)
)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            Create professional videos from text prompts in minutes. Our AI-powered platform generates;),
            engaging content with custom branding, multiple formats, and 4K quality for any platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            ></a>
              Start Creating Videos;
            </a>
          </div>,
        </section>,
,
        {/* Key Benefits */}
        <section className="mb-16"></section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></section>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"></div>
              <div className="text-3xl font-bold text-purple-400 mb-2">10x</div><div className="text-white font-semibold mb-2">Faster Creation</div><div className="text-gray-400 text-sm">Create videos 10x faster than traditional methods</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
              <div className="text-3xl font-bold text-blue-400 mb-2">4K</div><div className="text-white font-semibold mb-2">Quality</div><div className="text-gray-400 text-sm">Professional 4K video quality available</div>
            </div>
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
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-start space-x-4">,
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
                  </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
<<<<<<< HEAD
              </Link>
            </div>
=======
              </button>
            </div></div></div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful AI Video Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI video generator comes equipped with cutting-edge features designed to 
                create professional-quality videos with minimal effort.
              </p>
<<<<<<< HEAD
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
=======
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
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
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your video generation needs. 
                All plans include our core AI features with no setup fees.
              </p>
<<<<<<< HEAD
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700 hover:border-cyan-400/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
=======
        {/* Use Cases */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {useCases.map((useCase, index) => (}
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
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
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}></div>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></div>
                      Most Popular;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
<<<<<<< HEAD
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
=======
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                </div>
              ))}
            </div>
=======
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center space-x-3"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                ></a>
                  Get Started;
                </a>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
<<<<<<< HEAD
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Videos with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI video generator to 
              create professional content that engages and converts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Creating Videos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
=======
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
=======
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30"></section>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Amazing Videos?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 1,000+ creators and businesses already using our AI Video Generator to create professional content.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      ></a>
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us;
            </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>
      </main>
      
      <Footer />
<<<<<<< HEAD
    </>
  )
}
=======
    </React.Fragment>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

export default AiVideoGeneratorPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function AivideogeneratorPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Video Generator - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Ai Video Generator</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai video generator services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React  from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AivideogeneratorPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Ai Video Generator - Zion Tech Group</title>
        <meta name="description" content="Professional ai video generator services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Video Generator</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai video generator services coming soon.</p>
          
<<<<<<< HEAD
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
=======
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
