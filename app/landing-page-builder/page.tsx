'use client';
import React from 'react';
import { Layout, Wand2, Palette, Zap, CheckCircle, ArrowRight, Phone, Monitor, Smartphone, Globe } from 'lucide-react';
import Link from 'next/link';

const LandingPageBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Wand2,
      title: 'AI-Powered Design',
      description: 'Generate stunning landing pages with AI assistance in minutes'
    },
    {
      icon: Palette,
      title: 'Drag & Drop Builder',
      description: 'Easy-to-use visual editor with no coding required'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with 99.9% uptime guarantee'
    },
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Perfect on all devices - desktop, tablet, and mobile'
    },
    {
      icon: Globe,
      title: 'SEO Optimized',
      description: 'Built-in SEO tools to rank higher in search results'
    },
    {
      icon: CheckCircle,
      title: 'A/B Testing',
      description: 'Test different versions to maximize conversions'
    }
  ];

  const templates = [
    {
      category: 'SaaS',
      count: '50+ templates',
      description: 'Perfect for software and app launches'
    },
    {
      category: 'E-commerce',
      count: '30+ templates',
      description: 'Optimized for online stores and product sales'
    },
    {
      category: 'Agency',
      count: '25+ templates',
      description: 'Professional designs for service businesses'
    },
    {
      category: 'Startup',
      count: '40+ templates',
      description: 'Modern designs for new businesses'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Landing Page <span className="text-cyan-400">Builder</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create high-converting landing pages in minutes with our AI-powered builder. 
            No coding required - just drag, drop, and launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Layout className="w-5 h-5 mr-2" />
              Start Building
            </Link>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Monitor className="w-5 h-5 mr-2" />
              View Templates
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful <span className="text-cyan-400">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Templates Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Professional <span className="text-cyan-400">Templates</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{template.category}</h3>
                <div className="text-cyan-400 font-bold text-lg mb-2">{template.count}</div>
                <p className="text-gray-300 text-sm">{template.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Landing Page?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses creating high-converting landing pages with our builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Layout className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageBuilderPage;