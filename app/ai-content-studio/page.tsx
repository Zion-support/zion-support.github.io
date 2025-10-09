import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Users, BarChart, Zap, Shield, Palette, Camera, Video, FileText } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    'AI-powered content writing and editing',
    'Automatic image generation and optimization',
    'Video creation and editing with AI',
    'Social media content automation',
    'SEO-optimized content generation',
    'Brand voice consistency across all content',
    'Multi-language content creation',
    'Content calendar and scheduling'
  ];

  const benefits = [
    'Create 10x more content in half the time',
    'Reduce content creation costs by 70%',
    'Improve content engagement by 150%',
    'Maintain consistent brand voice across all channels',
    'Generate content in 25+ languages',
    'Automate social media posting and scheduling'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Complete AI-powered content creation suite with writing, image generation, video editing, and social media automation. Starting at $299/month." />
        <meta name="keywords" content="ai content creation, content studio, ai writing, image generation, video editing, social media automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Studio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create stunning content at scale with our comprehensive AI-powered content creation suite.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Creation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$299</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-gray-300">Languages</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Complete Content Creation Suite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Create Any Type of Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blog Posts</h3>
              <p className="text-gray-600">SEO-optimized articles, how-to guides, and thought leadership content</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Palette className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Graphics</h3>
              <p className="text-gray-600">Social media images, infographics, and marketing materials</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Video className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Videos</h3>
              <p className="text-gray-600">Short-form content, tutorials, and promotional videos</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <Camera className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Images</h3>
              <p className="text-gray-600">Stock photos, custom illustrations, and product images</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transform Your Content Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creator</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />100 content pieces/month</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Basic AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />5 social media accounts</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Email support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">$599<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />500 content pieces/month</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Advanced AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Unlimited social accounts</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Priority support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-600 mb-6">$1,299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Unlimited content</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />All AI features</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Team collaboration</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />24/7 phone support</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start creating professional content at scale with our AI-powered content studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentStudioPage;