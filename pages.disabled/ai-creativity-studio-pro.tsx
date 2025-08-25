import React from 'react';
import { Palette, Brush, Music, Camera, Video, Code, Sparkles, Star, ArrowRight, CheckCircle, Brain, Cpu, Database, Network, Zap, TrendingUp, Eye, Layers, Target, Users, Globe } from 'lucide-react';

export default function AICreativityStudioPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
            AI Creativity Studio Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionary AI-powered creative platform that transforms ideas into stunning visual, audio, and digital content. 
            Unleash your creativity with the power of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-200">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Creative Tools Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Creative AI Tools</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive suite of AI-powered creative tools for every type of content creation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visual Art */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Visual Art Generation</h3>
              <p className="text-gray-400">
                Create stunning paintings, illustrations, and digital art with AI-powered tools
              </p>
            </div>

            {/* Music Creation */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Music Composition</h3>
              <p className="text-gray-400">
                Compose original music, generate melodies, and create soundtracks with AI
              </p>
            </div>

            {/* Video Production */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Video Generation</h3>
              <p className="text-gray-400">
                Create videos from text descriptions, animate images, and generate motion graphics
              </p>
            </div>

            {/* Photography */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Photography</h3>
              <p className="text-gray-400">
                Enhance photos, remove backgrounds, and create artistic photo manipulations
              </p>
            </div>

            {/* 3D Modeling */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3D Model Generation</h3>
              <p className="text-gray-400">
                Generate 3D models, textures, and animations from text descriptions
              </p>
            </div>

            {/* Code Generation */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Creative Coding</h3>
              <p className="text-gray-400">
                Generate creative code, interactive art, and generative design systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Studio Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced features that make AI creativity accessible and powerful for professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Style Transfer & Evolution</h3>
              <p className="text-gray-400 mb-6">
                Advanced AI algorithms that learn and evolve artistic styles, creating unique creative outputs
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Style learning and adaptation</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Cross-medium style transfer</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Personalized style development</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Collaborative Creation</h3>
              <p className="text-gray-400 mb-6">
                Multi-user creative environment where AI and humans collaborate on creative projects
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Real-time collaboration</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>AI-human creative partnership</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Version control and history</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Advanced Rendering</h3>
              <p className="text-gray-400 mb-6">
                High-quality rendering engine powered by AI for professional-grade creative outputs
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>4K and 8K resolution support</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Real-time preview rendering</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>GPU acceleration</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Creative Analytics</h3>
              <p className="text-gray-400 mb-6">
                AI-powered analytics that provide insights into creative patterns and optimization
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Creative performance metrics</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Style trend analysis</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Audience engagement insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Creative Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI creativity is transforming industries and enabling new forms of expression
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Digital Art</h3>
              <p className="text-gray-400">
                Create unique digital artwork, illustrations, and concept designs
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Content Creation</h3>
              <p className="text-gray-400">
                Generate marketing materials, social media content, and promotional videos
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Music Production</h3>
              <p className="text-gray-400">
                Compose original music, create soundtracks, and generate audio content
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Photography</h3>
              <p className="text-gray-400">
                Enhance photos, create artistic effects, and generate photo-realistic images
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layers className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">3D Design</h3>
              <p className="text-gray-400">
                Generate 3D models, textures, and animations for games and applications
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Interactive Art</h3>
              <p className="text-gray-400">
                Create interactive installations, generative art, and digital experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Creative Studio Plans</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your creative needs and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Starter</h3>
                <div className="text-4xl font-bold text-pink-400 mb-2">$29</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Basic AI art generation</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>5 projects per month</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Standard resolution</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-200">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Pro</h3>
                <div className="text-4xl font-bold text-pink-400 mb-2">$99</div>
                <div className="text-gray-400">per month</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Advanced AI tools</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>4K resolution</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                Get Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-pink-400 mb-2">Custom</div>
                <div className="text-gray-400">contact us</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Custom AI models</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>White-label solutions</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>8K resolution</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-pink-400" />
                  <span>Dedicated support</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Unleash Your AI Creativity?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators using AI to bring their ideas to life. Start creating today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
              Start Creating Now
            </button>
            <button className="px-8 py-4 border border-pink-500 text-pink-400 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}