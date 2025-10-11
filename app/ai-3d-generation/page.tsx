'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Cube, Zap, Eye, Palette, ArrowRight, CheckCircle, Target, BarChart, Brain, Shield} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AI3DGenerationPage: React.FC = () => {const features = [
    {
      ico, n: Cube,
      title: 'AI-Powered 3D Modeling',
      description: 'Generate high-quality 3D models from text descriptions or 2D images using advanced AI algorithms.',
      benefits: ['Text-to-3D conversion', 'Image-to-3D generation', 'Automated modeling', 'High-quality output']} ,
    {icon: Zap,
      title: 'Real-Time Generation',
      description: 'Create 3D content in real-time with lightning-fast processing and instant preview capabilities.',
      benefits: ['Instant generation', 'Real-time preview', 'Fast iteration', 'Live editing']} ,
    {icon: Eye,
      title: 'Advanced Rendering',
      description: 'Professional-grade rendering with realistic lighting, materials, and textures.',
      benefits: ['Photorealistic output', 'Advanced lighting', 'Material simulation', 'High-resolution rendering']} ,
    {icon: Palette,
      title: 'Creative Tools',
      description: 'Comprehensive suite of tools for customizing and enhancing your 3D creations.',
      benefits: ['Material editor', 'Texture mapping', 'Color customization', 'Style transfer']} ,
    {icon: Brain,
      title: 'Intelligent Optimization',
      description: 'AI-driven optimization for performance, quality, and resource efficiency.',
      benefits: ['Auto-optimization', 'Performance tuning', 'Quality enhancement', 'Resource management']} ,
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Secure cloud-based processing with enterprise-grade security and compliance.',
      benefits: ['Data encryption', 'Secure processing', 'Compliance ready', 'Access controls']} ]
  const useCases = [
    {title: 'Game Development',
      description: 'Rapidly generate 3D assets, characters, and environments for games.',
      icon: Target,
      benefits: ['Character creation', 'Environment design', 'Asset generation', 'Animation ready']} ,
    {title: 'Architecture & Design',
      description: 'Create detailed 3D models for architectural visualization and design.',
      icon: BarChart,
      benefits: ['Building visualization', 'Interior design', 'Urban planning', 'Client presentations']} ,
    {title: 'E-commerce',
      description: 'Generate product visualizations and 3D models for online stores.',
      icon: CheckCircle,
      benefits: ['Product visualization', '360° views', 'AR integration', 'Marketing assets']} ,
    {title: 'Education & Training',
      description: 'Create interactive 3D content for educational and training purposes.',
      icon: Brain,
      benefits: ['Educational models', 'Training simulations', 'Interactive content', 'VR integration']} ]
  const pricingTiers = [
    {name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        '100 3D generations/month',
        'Basic AI models',
        'Standard resolution',
        'Email support',
        'Basic templates'
      ],
      popular: false} ,
    {name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '500 3D generations/month',
        'Advanced AI models',
        'High resolution output',
        'Priority support',
        'Custom templates',
        'API access'
      ],
      popular: true} ,
    {name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited generations',
        'Premium AI models',
        '4K+ resolution',
        'Dedicated support',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false} ]
  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation and design automation solutions" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, design automation, 3D assets" />
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered 3D model generation and rendering solutions for creative professionals" />
        <meta name="keywords" content="AI, 3D generation, 3D modeling, computer graphics, AI art, 3D rendering" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionary AI-powered 3D model generation and design automation solutions
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"
                  Start Creating
                  <ArrowRight className="w-5 h-5 ml-2"
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Gallery
                </button>
              </div>
      
      <Footer />
    </>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Features Section */}
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4"
                  <h3 className="text-xl font-semibold text-white mb-3"
                  <p className="text-gray-300 mb-4"
                  <ul className="space-y-2"
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2"
                        {benefit}
                      </li>
                    )
    </>
  )
                  </ul>
              ))}
            </div>

        <section className="py-20 bg-gray-100"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"
            <div className="text-center mb-16"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"
                Discover how AI 3D generation can transform your industry
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g:grid-cols-4 gap-8"
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="text-center"
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
                      <Icon className="w-8 h-8 text-white"
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4"
                    <p className="text-gray-300"
                  </div>
      
      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
      
      <Footer />
    </>
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI technology for creating professional 3D content
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
      
      <Footer />
    </>
                )
              })}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

            </div>
      
      <Footer />
    </>
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover how AI 3D generation can transform your industry
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
      
      <Footer />
    </>
                )
              })}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your 3D workflow with intelligent automation
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
      
      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>
                </div>
      
      <Footer />
    </>
              ))}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300">
                Powerful tools for creating professional 3D content
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
      
      <Footer />
    </>
                );
              })}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI 3D Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Revolutionize your 3D workflow with artificial intelligence
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
      
      <Footer />
    </>
              ))}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8"
          <div className="max-w-7xl mx-auto"
            <div className="text-center mb-16"
              <h2 className="
    ,
    d: text-4xl font-bold text-white mb-6"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"
                Choose the perfect plan for your 3D generation needs. Scale up or down as your requirements change.
              </p>
            </div>
      
      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
      
      <Footer />
    </>
                );
              })}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8"
          <div className="max-w-4xl mx-auto text-center"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"
              Ready to Create Amazing 3D Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8"
              Start generating professional 3D models with our AI-powered platform. No technical expertise required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
      <Footer />
    </>
  );
};

export default Ai3dGenerationPage
      </div>
      
      <Footer />
    </>
    </>
  )
      </div>
      
      <Footer />
    </>
    </>
  )
      </div>
      
      <Footer />
    </>
    </>
  )
      </div>
      
      <Footer />
    </>
    </>
  );
