'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Eye, Mic, FileText, Image, Video, Zap, CheckCircle, ArrowRight, Star, Users, Clock, Shield, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Workflow, Wifi, MessageSquare, ShoppingCart, Phone, Mail, MapPin } from 'lucide-react';

const AiMultimodalLlmPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Multimodal LLM Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced multimodal large language models that process text, images, audio, and video. Transform your business with next-generation AI capabilities." />
        <meta name="keywords" content="multimodal AI, LLM, large language models, text processing, image analysis, audio processing, video analysis, AI integration" />
        <meta property="og:title" content="AI Multimodal LLM Solutions | Zion Tech Group" />
        <meta property="og:description" content="Advanced multimodal large language models that process text, images, audio, and video. Transform your business with next-generation AI capabilities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-multimodal-llm" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-multimodal-llm" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Next-Generation AI Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Multimodal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">LLM Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced multimodal large language models that seamlessly process text, images, audio, and video. 
                Transform your business with next-generation AI capabilities that understand context across all media types.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#demo" className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                  <Video className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multimodal AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced multimodal LLM solutions process and understand multiple data types simultaneously, 
                providing unprecedented insights and automation capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Text Processing</h3>
                <p className="text-gray-300 mb-4">
                  Advanced natural language understanding, generation, translation, and analysis with context awareness.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Document analysis & summarization</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Real-time translation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Content generation</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                  <Image className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Image Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Computer vision capabilities for object detection, scene understanding, and image-to-text generation.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Object detection & classification</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Image captioning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Visual question answering</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Audio Processing</h3>
                <p className="text-gray-300 mb-4">
                  Speech recognition, audio analysis, and voice synthesis with emotion detection and language understanding.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Speech-to-text conversion</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Voice synthesis</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Emotion detection</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Video Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Real-time video processing, scene analysis, and content understanding across multiple frames.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Action recognition</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Scene understanding</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Video summarization</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cross-Modal Understanding</h3>
                <p className="text-gray-300 mb-4">
                  Seamless integration of multiple data types for comprehensive analysis and decision-making.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Multimodal search</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Context fusion</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Intelligent reasoning</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-Time Processing</h3>
                <p className="text-gray-300 mb-4">
                  High-performance processing with low latency for real-time applications and streaming data.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Stream processing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Edge computing</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Auto-scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your industry with multimodal AI solutions tailored to your specific needs and challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Healthcare & Medical</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Medical image analysis and diagnosis</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Patient data integration</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Clinical decision support</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Drug discovery assistance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-xl p-8 border border-green-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">E-commerce & Retail</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Visual product search</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Customer behavior analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Personalized recommendations</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Inventory management</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Education & Training</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Interactive learning experiences</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Automated content creation</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Student progress tracking</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Multilingual support</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Manufacturing & Industry</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Quality control automation</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Predictive maintenance</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Safety monitoring</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Process optimization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-xl p-8 border border-indigo-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Fraud detection</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Risk assessment</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Document processing</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Customer service automation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-900/50 to-cyan-900/50 rounded-xl p-8 border border-teal-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Media & Entertainment</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Content moderation</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Video analysis</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Audio processing</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />Content recommendation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your multimodal AI needs. All plans include our core features with scalable options.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <p className="text-gray-300 mb-4">Perfect for small projects</p>
                  <div className="text-4xl font-bold text-white mb-2">$299<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-sm text-gray-400">Up to 10,000 API calls</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Text processing (10K calls)</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Image analysis (5K calls)</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Audio processing (2K calls)</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Basic support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Standard SLA</li>
                </ul>
                <a href="#contact" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center block">
                  Get Started
                </a>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-8 border border-purple-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <p className="text-purple-100 mb-4">Ideal for growing businesses</p>
                  <div className="text-4xl font-bold text-white mb-2">$799<span className="text-lg text-purple-100">/month</span></div>
                  <p className="text-sm text-purple-200">Up to 50,000 API calls</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Text processing (50K calls)</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Image analysis (25K calls)</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Audio processing (10K calls)</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Video analysis (5K calls)</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Priority support</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Advanced SLA</li>
                  <li className="flex items-center text-white"><CheckCircle className="w-5 h-5 text-yellow-400 mr-3" />Custom integrations</li>
                </ul>
                <a href="#contact" className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 text-center block">
                  Get Started
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <p className="text-gray-300 mb-4">For large-scale operations</p>
                  <div className="text-4xl font-bold text-white mb-2">Custom</div>
                  <p className="text-sm text-gray-400">Unlimited API calls</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Unlimited API calls</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />All multimodal features</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Custom model training</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Dedicated support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />SLA guarantee</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />On-premise deployment</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-green-400 mr-3" />Custom integrations</li>
                </ul>
                <a href="#contact" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact our AI experts to discuss your multimodal LLM requirements and get a customized solution.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your company" />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiMultimodalLlmPage;