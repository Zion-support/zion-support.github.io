'use client';
import React from 'react';
import { Palette, Zap, Star, Target, BarChart, Shield, ArrowRight, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEO from '../components/EnhancedSEO';

const AILogoDesignerPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'AI Logo Generation',
      description: 'Create stunning logos with AI-powered design generation and customization'
    },
    {
      icon: Target,
      title: 'Brand Consistency',
      description: 'Ensure your logo matches your brand identity and style guidelines'
    },
    {
      icon: Zap,
      title: 'Multiple Formats',
      description: 'Export your logo in various formats including vector files and high-resolution images'
    },
    {
      icon: BarChart,
      title: 'Color Schemes',
      description: 'AI-suggested color palettes that complement your brand and industry'
    },
    {
      icon: Shield,
      title: 'Font Matching',
      description: 'Intelligent font pairing suggestions for typography that enhances your logo'
    },
    {
      icon: Star,
      title: 'Unlimited Revisions',
      description: 'Make unlimited revisions until you get the perfect logo design'
    }
  ];

  const benefits = [
    'Professional logos',
    'Brand consistency',
    'Cost effective',
    'Quick turnaround'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Logo Designer Pro - Professional Logo Creation & Brand Design"
        description="Professional logo creation with AI-powered design and brand consistency. Create stunning logos in minutes."
        keywords={['AI logo designer', 'logo creation', 'brand design', 'logo generation', 'brand consistency', 'professional logos']}
        canonicalUrl="https://ziontechgroup.com/ai-logo-designer"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Logo Designer Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional logo creation with AI-powered design and brand consistency. 
              Create stunning logos in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-lg font-semibold">4.8/5 Rating</span>
              </div>
              <div className="text-gray-300">•</div>
              <div className="text-gray-300">30,000+ users</div>
              <div className="text-gray-300">•</div>
              <div className="text-gray-300">7 days free trial</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional logos and build your brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI Logo Designer Pro?</h2>
              <p className="text-xl text-gray-300">
                Join thousands of businesses who have created stunning logos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-lg text-white">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Pricing</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-cyan-400">$59<span className="text-lg text-gray-300">/month</span></div>
                  <div className="text-gray-400 line-through">$89/month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Unlimited logo designs</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>AI-powered generation</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Vector files included</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Brand guidelines</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>7 days free trial</span>
                  </li>
                </ul>
                <a
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-center py-3 rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 font-medium"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Logo?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and design a professional logo in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-white hover:text-cyan-100 transition-colors text-lg font-medium"
              >
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AILogoDesignerPage;