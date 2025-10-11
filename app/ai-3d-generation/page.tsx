import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Cube, Zap, Shield, Users, Palette, Cpu, Globe, Target, Lightbulb, BarChart3 } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AI3DGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Cube,
      title: "AI-Powered 3D Modeling",
      description: "Generate complex 3D models from simple text descriptions or 2D images",
      benefits: [
        "Automated mesh generation",
        "Texture mapping",
        "Material assignment",
        "UV unwrapping"
      ]
    },
    {
      icon: Zap,
      title: "Real-time Rendering",
      description: "High-quality 3D rendering with advanced lighting and shading",
      benefits: [
        "Ray tracing support",
        "Global illumination",
        "Real-time shadows",
        "PBR materials"
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Built-in validation and optimization for production-ready models",
      benefits: [
        "Topology optimization",
        "LOD generation",
        "Collision detection",
        "Performance metrics"
      ]
    },
    {
      icon: Users,
      title: "Collaborative Workflow",
      description: "Team-based 3D asset creation and management platform",
      benefits: [
        "Version control",
        "Real-time collaboration",
        "Asset sharing",
        "Review system"
      ]
    }
  ];

  const useCases = [
    {
      icon: Palette,
      title: "Game Development",
      description: "Create 3D assets for games with AI assistance"
    },
    {
      icon: Cpu,
      title: "Architecture",
      description: "Generate architectural visualizations and models"
    },
    {
      icon: Globe,
      title: "Virtual Reality",
      description: "Build immersive VR environments and experiences"
    },
    {
      icon: Target,
      title: "Product Design",
      description: "Rapid prototyping and product visualization"
    }
  ];

  const technologies = [
    "Neural Radiance Fields (NeRF)",
    "Generative Adversarial Networks (GANs)",
    "Diffusion Models",
    "3D Convolutional Networks",
    "Point Cloud Processing",
    "Mesh Generation Algorithms"
  ];

  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered 3D model generation and design automation solutions for game development, architecture, and product design." />
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                  Start Creating
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced 3D Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Cutting-edge AI technology for creating stunning 3D content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how AI 3D generation can transform your industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">
                      {useCase.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Powered by the latest breakthroughs in artificial intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Lightbulb className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {tech}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your 3D Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators using AI to generate stunning 3D content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AI3DGenerationPage;