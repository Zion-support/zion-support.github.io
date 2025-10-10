'use client';
import React from 'react';
import { Globe, Palette, Zap, BarChart, Smartphone, Shield, Star, ArrowRight, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEO from '../components/EnhancedSEO';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'AI Design Generation',
      description: 'Create stunning websites with AI-powered design suggestions and templates'
    },
    {
      icon: Palette,
      title: 'Smart Templates',
      description: 'Professional templates that adapt to your brand and content automatically'
    },
    {
      icon: Zap,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools to ensure your website ranks high in search results'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Automatically optimized for all devices and screen sizes'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to track your website performance'
    },
    {
      icon: Shield,
      title: 'SSL Certificates',
      description: 'Free SSL certificates and security features to protect your site'
    }
  ];

  const benefits = [
    'Professional websites',
    'SEO optimized',
    'Mobile responsive',
    'Fast loading'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Website Builder Pro - Create Professional Websites in Minutes"
        description="Intelligent website builder with AI-powered design, content generation, and SEO optimization. Launch your site in minutes."
        keywords={['AI website builder', 'website creation', 'AI design', 'SEO optimization', 'mobile responsive', 'professional websites']}
        canonicalUrl="https://ziontechgroup.com/ai-website-builder"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Website Builder Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Intelligent website builder with AI-powered design, content generation, and SEO optimization. 
              Launch your site in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-lg font-semibold">4.9/5 Rating</span>
              </div>
              <div className="text-gray-300">•</div>
              <div className="text-gray-300">50,000+ users</div>
              <div className="text-gray-300">•</div>
              <div className="text-gray-300">14 days free trial</div>
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
              Everything you need to create professional websites without coding
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
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI Website Builder Pro?</h2>
              <p className="text-xl text-gray-300">
                Join thousands of businesses who have created stunning websites
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
                  <div className="text-4xl font-bold text-cyan-400">$89<span className="text-lg text-gray-300">/month</span></div>
                  <div className="text-gray-400 line-through">$129/month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Unlimited websites</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>AI design generation</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Custom domains</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>14 days free trial</span>
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
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and create a professional website in minutes.
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

export default AIWebsiteBuilderPage;