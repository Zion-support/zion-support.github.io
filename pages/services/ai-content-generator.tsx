import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Brain, Cloud, Shield, Zap, Database, Cpu, Lock, Heart, TrendingUp, Target, BarChart3, PenTool, Eye, Server, Smartphone, Network, Clock, Sparkles, Phone, Mail, MapPin, FileText, Building2, Car, Share2 } from 'lucide-react';

<<<<<<< HEAD
const AIContentGenerator: NextPage = () => {
  const features = [
    {
      title: 'Multi-Language Support', description: 'Generate content in over 50 languages with native-level quality',
      icon: <Globe className="w-6 h-6" />
    }, {
      title: 'SEO Optimization',
      description: 'AI-powered SEO optimization for better search rankings', icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Brand Voice Consistency', description: 'Maintain consistent brand voice across all content',
      icon: <Shield className="w-6 h-6" />
    }, {
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time', icon: <Users className="w-6 h-6" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter', price: '$99',
      period: '/month', description: 'Perfect for small businesses and individuals',
      features: [
        '10, 000 words per month',
        '5 languages supported', 'Basic SEO optimization',
        'Email support', 'Standard templates'
      ], popular: false
    },
    {
      name: 'Professional', price: '$199',
      period: '/month', description: 'Ideal for growing businesses and content teams',
      features: [
        '50, 000 words per month',
        '25 languages supported', 'Advanced SEO optimization',
        'Priority support', 'Custom templates',
        'Team collaboration (up to 5 users)', 'API access'
      ], popular: true
    },
    {
      name: 'Enterprise', price: 'Custom',
      period: '', description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited words', 'All languages supported',
        'Custom AI models', 'Dedicated support',
        'White-label solution', 'Unlimited team members',
        'Advanced analytics', 'Custom integrations'
      ], popular: false
    }
  ];

  return (
    <MainLayout
      title="AI Content Generator - Zion Tech Group"
      description="Transform your content creation with our AI-powered content generator. Create high-quality, SEO-optimized content in minutes."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            AI Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Generator</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Transform your content creation process with our advanced AI-powered platform. 
            Generate high-quality, SEO-optimized content in minutes, not hours.
          </p>
          
          <div className="flex flex-col sm: flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Start Free Trial
            </Link>
            <Link href="#demo" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
=======
export default function AIContentGenerator() {
  return (
    <>
      <Head>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Create high-quality content 10x faster with our AI-powered platform. Generate blogs, social media posts, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> main
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-blue-600" />
              </div>
<<<<<<< HEAD
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs.
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white p-8 rounded-lg shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover: bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
=======
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                AI Content Generator
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Create high-quality content 10x faster with our AI-powered platform. Generate blogs, social media posts, marketing copy, and more with advanced natural language processing.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  Start Free Trial
                </Link>
                <Link href="#pricing" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  View Pricing
>>>>>>> main
                </Link>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI Content Generator to create better content faster.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover: bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </MainLayout>
=======
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful AI Content Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI content generator uses advanced machine learning to create engaging, high-quality content for any industry or use case.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <PenTool className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Blog Post Generation</h3>
                <p className="text-gray-600 mb-4">
                  Create comprehensive blog posts with proper structure, SEO optimization, and engaging content that ranks well in search engines.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• SEO-optimized content</li>
                  <li>• Multiple writing styles</li>
                  <li>• Keyword integration</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Share2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Social Media Content</h3>
                <p className="text-gray-600 mb-4">
                  Generate engaging social media posts for all platforms with hashtags, emojis, and platform-specific formatting.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Platform-specific formatting</li>
                  <li>• Trending hashtags</li>
                  <li>• Engagement optimization</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Marketing Copy</h3>
                <p className="text-gray-600 mb-4">
                  Create compelling marketing copy for ads, emails, landing pages, and product descriptions that convert.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Conversion-focused copy</li>
                  <li>• A/B testing variants</li>
                  <li>• Brand voice consistency</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Technical Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Generate clear, comprehensive technical documentation, user guides, and API documentation.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Code examples</li>
                  <li>• Step-by-step guides</li>
                  <li>• API documentation</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Campaigns</h3>
                <p className="text-gray-600 mb-4">
                  Create personalized email campaigns with subject lines, body content, and call-to-action optimization.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Personalization</li>
                  <li>• Subject line optimization</li>
                  <li>• A/B testing</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Content Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Track content performance with detailed analytics and insights to improve your content strategy.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Performance metrics</li>
                  <li>• Engagement tracking</li>
                  <li>• ROI analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$29<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>10,000 words/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>5 content templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Start Free Trial
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-blue-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$79<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>50,000 words/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Team collaboration</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Start Free Trial
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited words</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom templates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>API access</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Content Creation?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Join thousands of content creators and marketers who are already using our AI to create better content faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                Start Free Trial
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                View All Services
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <span className="text-white">+1 302 464 0950</span> or email <span className="text-white">kleber@ziontechgroup.com</span></p>
            </div>
          </div>
        </section>
      </main>
    </>
>>>>>>> main
  );
}