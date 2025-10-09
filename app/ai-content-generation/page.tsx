import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Zap, Users, Clock, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content using advanced AI models trained on millions of successful posts'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-Platform Support',
      description: 'Create content optimized for Instagram, Twitter, LinkedIn, Facebook, and more'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Time-Saving Automation',
      description: 'Reduce content creation time by 80% with automated scheduling and posting'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Brand Consistency',
      description: 'Maintain consistent brand voice and style across all content'
    }
  ];

  const benefits = [
    'Increase engagement by 300%',
    'Save 25+ hours per week',
    'Grow followers organically',
    'Improve brand awareness',
    'Reduce content costs by 60%',
    'Scale content production'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      company: 'TechStart Inc',
      content: 'This AI content generation service has revolutionized our social media strategy. We\'ve seen a 400% increase in engagement!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Digital Agency',
      content: 'The quality of AI-generated content is incredible. It\'s indistinguishable from human-written content.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'GlobalBrand',
      content: 'The multi-language support is game-changing. We can now create localized content for all our markets without hiring translators.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Generation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your social media presence with AI-powered content creation. 
            Generate engaging posts, captions, and visual content that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">
              View Pricing
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our AI Content Generation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of businesses already using AI to create better content faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Started Now
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIContentGenerationPage;