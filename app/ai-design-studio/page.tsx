'use client';
import React, { useState } from 'react';
import { Palette, Wand2, Image, Layers, Zap, CheckCircle, Star, ArrowRight, Brain, Download, Share2, Target, Clock, Users, Phone } from 'lucide-react';
import Link from 'next/link';

const AIDesignStudio: React.FC = () => {
  const [designPrompt, setDesignPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Design generated successfully!');
    }, 2000);
  };

  const features = [
    {
      icon: Wand2,
      title: "AI-Powered Design",
      description: "Generate stunning designs from simple text prompts using advanced AI"
    },
    {
      icon: Palette,
      title: "Professional Templates",
      description: "Access thousands of professionally designed templates and layouts"
    },
    {
      icon: Image,
      title: "Smart Image Generation",
      description: "Create custom images, illustrations, and graphics with AI"
    },
    {
      icon: Layers,
      title: "Advanced Editing",
      description: "Professional-grade editing tools with layers, effects, and filters"
    },
    {
      icon: Download,
      title: "Export Options",
      description: "Export in multiple formats: PNG, JPG, SVG, PDF, and more"
    },
    {
      icon: Share2,
      title: "Collaboration",
      description: "Share designs with team members and clients for feedback"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 39,
      period: "month",
      description: "Perfect for individuals",
      features: [
        "50 AI generations/month",
        "Basic templates",
        "Standard export formats",
        "Email support",
        "1 user account",
        "Basic editing tools"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 89,
      period: "month",
      description: "Ideal for designers",
      features: [
        "Unlimited AI generations",
        "Premium templates",
        "All export formats",
        "Priority support",
        "3 user accounts",
        "Advanced editing tools",
        "Brand kit",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large teams",
      features: [
        "Everything in Professional",
        "Custom templates",
        "White-label solution",
        "24/7 phone support",
        "Unlimited users",
        "API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const sampleDesigns = [
    { id: 1, title: 'Modern Logo Design', type: 'Logo', prompt: 'Minimalist tech company logo' },
    { id: 2, title: 'Social Media Post', type: 'Social', prompt: 'Instagram post for coffee shop' },
    { id: 3, title: 'Business Card', type: 'Print', prompt: 'Professional business card design' },
    { id: 4, title: 'Website Banner', type: 'Web', prompt: 'Hero banner for SaaS website' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
              <Palette className="w-4 h-4 mr-2" />
              AI-Powered Design Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Design Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning designs in seconds with our AI-powered design studio. 
              From logos to social media posts, bring your creative vision to life effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#demo" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                <Wand2 className="w-5 h-5 mr-2" />
                Try Design Studio
              </Link>
              <Link href="#pricing" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
                <Target className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div id="demo" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Create Your Design</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Design Generator */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
              <h3 className="text-xl font-semibold mb-6 text-pink-400">AI Design Generator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Describe your design</label>
                  <textarea
                    value={designPrompt}
                    onChange={(e) => setDesignPrompt(e.target.value)}
                    className="w-full h-32 bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-pink-400 focus:outline-none"
                    placeholder="e.g., 'Create a modern logo for a tech startup with blue and white colors'"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Design Type</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-pink-400 focus:outline-none">
                      <option value="logo">Logo</option>
                      <option value="social">Social Media</option>
                      <option value="print">Print Design</option>
                      <option value="web">Web Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Style</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white focus:border-pink-400 focus:outline-none">
                      <option value="modern">Modern</option>
                      <option value="minimalist">Minimalist</option>
                      <option value="vintage">Vintage</option>
                      <option value="corporate">Corporate</option>
                    </select>
                  </div>
                </div>
                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !designPrompt}
                  className="w-full cyber-button"
                >
                  {isGenerating ? 'Generating...' : 'Generate Design'}
                </button>
              </div>
            </div>

            {/* Design Gallery */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/20">
              <h3 className="text-xl font-semibold mb-6 text-pink-400">Recent Designs</h3>
              <div className="grid grid-cols-2 gap-4">
                {sampleDesigns.map((design) => (
                  <div key={design.id} className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                    <div className="w-full h-24 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg mb-3 flex items-center justify-center">
                      <Palette className="w-8 h-8 text-pink-400" />
                    </div>
                    <div className="text-sm font-medium text-white">{design.title}</div>
                    <div className="text-xs text-gray-400">{design.type}</div>
                  </div>
                ))}
              </div>
              
              {/* Design Stats */}
              <div className="mt-6 p-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-500/20">
                <h4 className="font-semibold text-white mb-2">Your Design Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-300">Total Designs:</span>
                    <span className="text-pink-400 font-bold ml-2">24</span>
                  </div>
                  <div>
                    <span className="text-gray-300">This Month:</span>
                    <span className="text-pink-400 font-bold ml-2">8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Powerful Design Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create professional designs with AI assistance
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Choose the plan that fits your creative needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${
              plan.popular 
                ? 'border-pink-400 shadow-2xl shadow-pink-500/20' 
                : 'border-gray-600'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                plan.popular
                  ? 'cyber-button'
                  : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-12 text-center border border-pink-500/20">
          <h2 className="text-4xl font-bold mb-4 text-white">Ready to Create Amazing Designs?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of designers who trust our AI studio to bring their ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              <Palette className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <a href="tel:+13024640950" className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDesignStudio;