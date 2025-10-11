<<<<<<< HEAD
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import {Helmet}}from 'react-helmet-async';
>>>>>>> origin/main
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const Ai3dGenerationPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const Ai3dGenerationPage: React.FC = () => {
>>>>>>> origin/main
    const features = [
    {
<<<<<<< HEAD
      icon: Cube,
      title: 'Text-to-3D',
      description: 'Generate 3D models from simple text descriptions using advanced AI algorithms.',
      benefits: ['Natural language input', 'High-quality output', 'Multiple formats']
    },
    {
      icon: Zap,
      title: 'Real-time Generation',
      description: 'Create 3D models in seconds with our optimized AI processing pipeline.',
      benefits: ['Fast generation', 'Real-time preview', 'Instant results']
    },
    {
      icon: Eye,
      title: 'High Quality',
      description: 'Generate photorealistic 3D models with detailed textures and materials.',
      benefits: ['4K textures', 'PBR materials', 'Professional quality']
    },
    {
      icon: Palette,
      title: 'Custom Styling',
      description: 'Apply custom styles, colors, and materials to your generated 3D models.',
      benefits: ['Style transfer', 'Color customization', 'Material editing']
    },
    {
      icon: Download,
      title: 'Multiple Formats',
      description: 'Export your 3D models in various formats for different applications.',
      benefits: ['OBJ, FBX, GLTF', 'Game engines', '3D printing']
    },
    {
      icon: Sparkles,
      title: 'AI Enhancement',
      description: 'Automatically enhance and optimize your 3D models using AI technology.',
      benefits: ['Auto-optimization', 'Quality enhancement', 'Smart cleanup']
    }
  ];

  const applications = [
    {
      title: 'Game Development',
      description: 'Create game assets, characters, and environments',
      icon: '🎮'
    },
    {
      title: 'Architecture',
      description: 'Generate building models and architectural visualizations',
      icon: '🏗️'
    },
    {
      title: 'Product Design',
      description: 'Design and prototype products with 3D models',
      icon: '📱'
    },
    {
<<<<<<< HEAD
      title: '3D Printing',
      description: 'Create printable 3D models for manufacturing',
      icon: '🖨️'
    },
    {
      title: 'VR/AR Content',
      description: 'Generate immersive 3D content for virtual and augmented reality',
      icon: '🥽'
    },
    {
      title: 'Marketing & Advertising',
      description: 'Create compelling 3D visuals for marketing campaigns',
      icon: '📢'
},
    {
=======
>>>>>>> origin/main
      title: 'VR/AR',
      description: 'Create immersive experiences and virtual environments',
      icon: '🥽'
    }
  ];

<<<<<<< HEAD
  const benefits = [
    'Reduce 3D content creation time by 90%',
    'Lower production costs by 80%',
    'Create unlimited unique 3D assets',
    'Accelerate game and app development',
    'Enable rapid prototyping',
    'Improve visual quality and consistency',
    'Scale content production instantly',
    'Reduce dependency on 3D artists'
  ];

=======
>>>>>>> origin/main
  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Transform text into stunning 3D models with our AI-powered 3D generation technology. Create game assets, architectural models, and more in seconds." />
=======
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
=======
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'];
=======
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'],
>>>>>>> origin/main
    },
    {
    icon: BarChart,
>>>>>>> origin/main
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
<<<<<<< HEAD
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']},
=======
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
  },
    {
    icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
  },
    {
    icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
  },
>>>>>>> origin/main
  ]
]
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
<<<<<<< HEAD
    'Gain competitive advantage with advanced technology';
  ];
return(<>)
      <Helmet />
        <title>Ai 3d Generation - Zion Tech Group</title>
=======
    'Gain competitive advantage with advanced technology'
  ]
return (
    <>
  </>
      <Helmet>
        </Helmet><title>Ai 3d Generation - Zion Tech Group</title>
>>>>>>> origin/main
        <meta name="description" content="Advanced AI-powered 3D generation solution for modern businesses" />
        <meta name="keywords" content="AI, 3D generation, artificial intelligence, business solutions" />
>>>>>>> origin/main
      </Helmet>
      <Navigation />
<<<<<<< HEAD
      {/* Hero Section */}
=======
<<<<<<< HEAD
{/* Hero Section */}
=======
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI 3D
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Generation
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into stunning 3D models with our advanced AI technology. 
            Generate high-quality 3D assets from simple text descriptions in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Try AI 3D Generator
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful 3D Generation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Our AI-powered 3D generation technology combines cutting-edge machine learning 
              with intuitive design tools to create professional-quality 3D models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                View Gallery
              </button>
            </div>
=======
              Our AI-powered 3D generation technology brings your ideas to life with unprecedented speed and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
>>>>>>> origin/main
          </div>
        </div>
      </section>

      {/* Applications Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
=======
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
>>>>>>> origin/main
            <h2 className="text-4xl font-bold text-white mb-4">
              Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From game development to architecture, our AI 3D generation technology 
              has applications across multiple industries.
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/main
            {applications.map((app, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{app.title}</h3>
                <p className="text-gray-300">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI 3D Generation?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Traditional 3D modeling is time-consuming and expensive. Our AI technology revolutionizes 
                the process, making 3D content creation accessible to everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Generate 3D Models with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating stunning 3D models from text descriptions today. 
            No 3D modeling experience required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Generating
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
=======
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing 3D Models?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start generating professional 3D models with our AI-powered technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

=======
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">{/* Hero Section */</div>} <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6">,</h1>
              AI 3D Generation;
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Advanced AI-powered 3D generation solution for modern businesses;</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover: from-teal-600 hover:to-blue-700 transition-all duration-300">,</button>
                Get Started;
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover: bg-white/10 transition-all duration-300">,</button>
                View Demo;
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
=======
        </div><section className="relative py-20 px-4 overflow-hidden">
          </section></section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
>>>>>>> origin/main
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI 3D Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" /></p>
              Advanced AI-powered 3D generation solution for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300" /></button>
                View Demo
>>>>>>> origin/main
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
=======
<<<<<<< HEAD
        {/* Features Section */} <section className="py-20 px-4">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features;</h2>
              </h2>
              <p className="text-xl text-gray-300">Advanced AI technology that drives results;</p>
=======
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Ai 3d Generation
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai 3d generation solution for modern businesses.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo
        {/* Features Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Advanced AI technology that drives results
>>>>>>> origin/main
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">,</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">,</div>
                    <feature.icon className="w-8 h-8 text-white" />
=======
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  </div><div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    </div><feature.icon className="w-8 h-8 text-white" />
>>>>>>> origin/main
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
<<<<<<< HEAD
                        <li key={idx}className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit} </li>
=======
                        </ul><li key={idx} className="flex items-center text-gray-300">
                          </li><CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {benefit}
                        </li>
>>>>>>> origin/main
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
=======
<<<<<<< HEAD
        {/* Benefits Section */} <section className="py-20 px-4">
>>>>>>> origin/main
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              </h2>
              <p className="text-xl text-gray-300">Proven results that drive business growth and efficiency;</p>
=======
        {/* Benefits Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">
        <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4" /></h2>
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300" /></p>
                Proven results that drive business growth and efficiency
>>>>>>> origin/main
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
              {benefits.map((benefit, index) => (
<<<<<<< HEAD
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">,</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">,</div>
                    <CheckCircle className="w-8 h-8 text-white" />
=======
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  </div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    </div><CheckCircle className="w-8 h-8 text-white" />
>>>>>>> origin/main
                  </div>
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
                </div>
              ))}
            </div>
          ))
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
=======
<<<<<<< HEAD
        {/* CTA Section */} <section className="py-20 px-4">
>>>>>>> origin/main
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              </h2>
              <p className="text-xl text-gray-300 mb-8">Contact our experts to discuss your requirements and get started today;</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover: from-teal-600 hover:to-blue-700 transition-all duration-300">,</button>
                  Contact Us;
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover: bg-white/10 transition-all duration-300">,</button>
                  Learn More;
=======
        {/* CTA Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              </div><h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8" /></p>
                Contact our experts to discuss your requirements and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div><button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300" /></button>
                  Learn More
>>>>>>> origin/main
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
<<<<<<< HEAD
>>>>>>> origin/main
      <Footer />

>>>>>>> origin/main
  );
};

<<<<<<< HEAD
export default AI3DGenerationPage;
=======
export default Ai3dGenerationPage;
=======
      <Footer /></Footer>
    </>
  )
}
export default Ai3dGenerationPage
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Contact Us
                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More
      <Footer />
  )
}
export default Ai3dGenerationPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></button></button></button></button></p></p></p></p></p></p></h1></h2></h2></h2></h3></ul></li></section></section></section></section>
>>>>>>> origin/main
>>>>>>> origin/main
