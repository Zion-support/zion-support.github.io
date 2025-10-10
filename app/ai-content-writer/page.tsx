'use client';
import React from 'react';
import { FileText, PenTool, Target, CheckCircle, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentWriterPage: React.FC = () => {
  const features = [
    'Blog Post Generation',
    'Social Media Content',
    'Product Descriptions',
    'SEO Optimization',
    'Email Campaigns',
    'Ad Copy Creation',
    'Content Planning',
    'Brand Voice Consistency'
  ];

  const benefits = [
    '10x content output',
    'SEO optimized content',
    'Brand voice consistency',
    '80% time savings'
  ];

  const useCases = [
    {
      title: 'Blog Writing',
      description: 'High-quality blog posts that engage readers and rank well in search engines',
      icon: FileText
    },
    {
      title: 'Social Media',
      description: 'Engaging social media content that drives engagement and conversions',
      icon: PenTool
    },
    {
      title: 'Marketing Copy',
      description: 'Compelling marketing copy that converts visitors into customers',
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Content Writer">AI Content Writer<p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">Generate high-quality content with AI-powered writing assistance for blogs, social media, and marketing materials.<div className="text-2xl font-bold text-cyan-400 mb-8">Starting at $79/month</div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{features.map((feature, index) => (</div>
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Benefits<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.split(' ')[0]}<p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Use Cases<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center">
                <useCase.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}<p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Scale Your Content?<p className="text-lg text-gray-300 mb-8">Contact us today to discuss your content requirements and get started with AI-powered writing.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Get Free Trial</a>
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" >Call +1 302 464 0950</Phone>
              </Phone>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIContentWriterPage;