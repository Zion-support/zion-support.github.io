'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cube, Palette, Zap, Target, ArrowRight, CheckCircle, Brain, BarChart, TrendingUp, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Ai3dGenerationPage: React.FC = () => {}
  const features = [;
    {}
      icon: Cube
      title: '3D Model Generation'
      description: 'Create stunning 3D models from text descriptions using advanced AI algorithms.'
      benefit,
      s: ['Text-to-3D conversion', 'High-quality models', 'Multiple formats', 'Custom styling']
    },
    {}
      icon: Zap
      title: 'Rapid Prototyping'
      description: 'Generate high-quality 3D prototypes in minutes instead of hours.'
      benefit,
      s: ['Fast iteration cycles', 'Multiple design options', 'Automated optimization', 'Quality validation']
    },
    {}
      icon: Palette;
      title: 'Material & Texture AI'
      description: 'Generate realistic materials and textures automatically for your 3D models.'
      benefit,
      s: ['Procedural textures', 'Realistic materials', 'Custom patterns', 'PBR workflows']
    },
    {}
      icon: Eye
      title: 'Visual Quality'
      description: 'Photorealistic 3D models with advanced lighting and materials.'
      benefit,
      s: ['PBR materials', 'Advanced lighting', 'High-resolution output', 'Professional quality']
    },
    {}
      icon: Target
      title: 'Precision Modeling'
      description: 'Achieve precise 3D models with AI-assisted modeling tools.'
      benefit,
      s: ['Exact measurements', 'Geometric accuracy', 'Professional quality', 'Industry standards']
    },
    {}
      icon: Brain
      title: 'AI-Powered Intelligence'
      description: 'Leverage artificial intelligence for smart 3D content creation.'
      benefit,
      s: ['Smart optimization', 'Automated workflows', 'Intelligent suggestions', 'Quality enhancement']
    }
  ];

  const benefits = [;
    'Reduce 3D modeling time by up to 90%'
    'Generate professional-quality models in minutes'
    'Access to advanced AI algorithms'
    'Seamless integration with existing workflows'
    'Cost-effective 3D content creation'
    'Unlimited creative possibilities'
  ];

  const useCases = [;
    {}
      icon: Brain
      title: 'Game Development'
      descriptio,
      n: 'Create 3D assets for games, characters, and environments.'
    },
    {}
      icon: Target
      title: 'Product Design'
      descriptio,
      n: 'Generate 3D prototypes and visualizations for products.'
    },
    {}
      icon: Eye
      title: 'Architecture'
      descriptio,
      n: 'Create 3D architectural visualizations and models.'
    }
  ];

  return ()
    <>
      <Helmet></Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation and design automation solutions for creative professionals." /></meta>
        <meta name="keywords" content="AI 3D generation, 3D modeling, artificial intelligence, design automation, 3D assets" /></meta>
      <Navigation /></Navigation>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">3D Generation</span>

              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Revolutionary AI-powered 3D model generation and design automation solutions for creative professionals.

              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hove,
      r:text-white transition-all duration-300"></button>
                  View Gallery





        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Powerful 3D Generation Features

              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Advanced AI technology for creating professional 3D content


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => {}
                const Icon = feature.icon;
                return ()
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                    <div className="text-cyan-400 mb-4"></div>
                      <Icon className="h-8 w-8" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, benefitIndex) => ()
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}

                      ))}


                );
              })},
    {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Why Choose AI 3D Generation?

              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Revolutionize your 3D workflow with artificial intelligence


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /></CheckCircle>
                  <span className="text-gray-300 text-lg">{benefit}</span>

              ))},
    {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Use Cases

              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Perfect for a wide range of creative and professional applications


            <div className="grid grid-cols-1 m,
      d:grid-cols-3 gap-8"></div>
              {useCases.map((useCase, index) => {}
                const Icon = useCase.icon;
                return ()
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                      <Icon className="w-8 h-8 text-white" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>

                );
              })},
    {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Create Amazing 3D Content?

            <p className="text-xl text-gray-300 mb-8"></p>
              Start generating professional 3D models with AI today.

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"></button>
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hove,
      r:text-white transition-all duration-300"></button>
                Contact Us





      <Footer /></Footer>
    </>
  );
};

export default Ai3dGenerationPage;