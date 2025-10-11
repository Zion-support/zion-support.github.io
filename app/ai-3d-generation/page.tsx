'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      title: '3D Model Generation',
      description: 'Create stunning 3D models with AI assistance'
    },
    {
      title: 'Texture Mapping',
      description: 'Apply realistic textures to your 3D creations'
    },
    {
      title: 'Animation Tools',
      description: 'Bring your models to life with smooth animations'
    },
    {
      title: 'Rendering Engine',
      description: 'High-quality rendering for professional results'
    },
    {
      title: 'Export Options',
      description: 'Multiple export formats for various platforms'
    }
  ];

  const useCases = [
    {
      title: 'Gaming Industry',
      description: 'Create game assets and characters'
    },
    {
      title: 'Architecture',
      description: 'Design and visualize buildings'
    },
    {
      title: 'Product Design',
      description: 'Prototype and showcase products'
    },
    {
      title: 'Entertainment',
      description: 'Create content for movies and shows'
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99/month',
      features: ['Basic 3D generation', 'Standard textures', 'Community support']
    },
    {
      name: 'Professional',
      price: '$299/month',
      features: ['Advanced generation', 'Premium textures', 'Priority support']
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited generation', 'Custom models', 'Dedicated support']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation and design automation solutions" />
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, design automation, 3D assets" />
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <div className="text-purple-400 mb-4">
                      <Icon className="w-8 h-8" />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits?.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your creative workflow across industries
              </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits?.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your creative needs
              </p>
            </div>

      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />

      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>

      <Footer />
    </>
              ))}

      <Footer />
    </>

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
              
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />

      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                      ))}

      <Footer />
    </>
                );
              })}

      <Footer />
    </>

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
              
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>

      <Footer />
    </>
              ))}

      <Footer />
    </>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className=">
    ,>
    d: text-4xl font-bold text-white mb-6">
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your 3D generation needs. Scale up or down as your requirements change.
              </p>
            </div>

      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />

      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>

      <Footer />
    </>
                );
              })}

      <Footer />
    </>

      <Footer />

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing 3D Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to bring their ideas to life in 3D.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Schedule Demo
</button></div></section>
      </main>
    </div>
  );
}  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>


export default AI3DGenerationPage;