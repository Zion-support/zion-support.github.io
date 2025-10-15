'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CubeIcon, 
  EyeIcon, 
  CogIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const AI3DModelGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: CubeIcon,
      title: 'Text-to-3D Generation',
      description: 'Generate high-quality 3D models from text descriptions with 96.8% accuracy using advanced AI algorithms.',
      benefit: 'Create models 10x faster'
    },
    {
      icon: EyeIcon,
      title: 'Image-to-3D Conversion',
      description: 'Convert 2D images into detailed 3D models with automatic depth mapping and texture generation.',
      benefit: 'Transform any image to 3D'
    },
    {
      icon: CogIcon,
      title: 'Automated Optimization',
      description: 'AI-powered model optimization for different use cases including gaming, AR/VR, and 3D printing.',
      benefit: 'Optimize for any platform'
    },
    {
      icon: SparklesIcon,
      title: 'Style Transfer',
      description: 'Apply artistic styles and materials to 3D models with realistic lighting and texture mapping.',
      benefit: 'Create unique visual styles'
    },
    {
      icon: ChartBarIcon,
      title: 'Quality Analysis',
      description: 'Automated quality assessment and improvement suggestions for 3D models and meshes.',
      benefit: 'Ensure professional quality'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Format Export',
      description: 'Export 3D models in 20+ formats including OBJ, FBX, STL, GLTF, and industry-standard formats.',
      benefit: 'Compatible with all platforms'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators and hobbyists',
      features: [
        'Up to 100 3D models/month',
        'Basic text-to-3D generation',
        'Image-to-3D conversion',
        'Email support',
        'Standard quality models',
        'Basic optimization',
        '10 export formats'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for 3D artists and small studios',
      features: [
        'Up to 500 3D models/month',
        'Advanced text-to-3D generation',
        'High-quality image-to-3D',
        'Priority support',
        'Premium quality models',
        'Advanced optimization',
        'All export formats',
        'Style transfer tools',
        'Quality analysis',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large studios and enterprises',
      features: [
        'Unlimited 3D models',
        'Enterprise-grade generation',
        'Custom model training',
        '24/7 dedicated support',
        'Ultra-high quality models',
        'Custom optimization',
        'White-label options',
        'Advanced analytics',
        'Custom training & onboarding',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: '3D Artist, Game Studio',
      content: 'Zion AI 3D Model Generator has revolutionized our workflow. We can create assets 10x faster without compromising quality.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Architect, Design Firm',
      content: 'The text-to-3D feature is incredible for architectural visualization. Clients can see their ideas come to life instantly.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Product Designer, Tech Company',
      content: 'Image-to-3D conversion has streamlined our product development process. The quality is consistently excellent.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI 3D Model Generator - Zion Tech Group"
        description="Revolutionary AI-powered 3D model generation platform with text-to-3D, image-to-3D conversion, and automated optimization. Create models 10x faster with 96.8% accuracy."
        keywords="AI 3D model generator, text-to-3D, image-to-3D conversion, 3D modeling AI, 3D asset creation, 3D printing, AR VR models, game assets"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
                <CubeIcon className="w-4 h-4 mr-2" />
                AI-Powered 3D Creation
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI 3D Model Generator
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create stunning 3D models from text descriptions or images with AI-powered generation and optimization. 
                Build models 10x faster with 96.8% accuracy and professional quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">96.8%</div>
                  <div className="text-gray-300">Generation Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">10x</div>
                  <div className="text-gray-300">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                  <div className="text-gray-300">Export Formats</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3D AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered 3D creation tools designed to bring your ideas to life with unprecedented speed and quality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-purple-400 font-semibold">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Creative <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your 3D creation needs. All plans include our core AI generation features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                    : 'border-slate-700 hover:border-purple-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3D Creators</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what 3D artists and creators are saying about our AI 3D Model Generator.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-purple-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Create Amazing 3D Models?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of 3D creators who trust Zion AI 3D Model Generator for faster, better 3D creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI3DModelGeneratorPage;