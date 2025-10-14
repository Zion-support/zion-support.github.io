import React from "react";
import { Helmet } from "react-helmet-async";
import { Phone, Brain, FileText, Zap, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentWriterPage = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Writing",
      description: "Advanced AI algorithms that understand context and create engaging content",
      color: "text-purple-400"
    },
    {
      icon: FileText,
      title: "Multiple Formats",
      description: "Create blogs, articles, social media posts, and marketing copy",
      color: "text-blue-400"
    },
    {
      icon: Zap,
      title: "Fast Generation",
      description: "Generate high-quality content in minutes, not hours",
      color: "text-yellow-400"
    },
    {
      icon: Target,
      title: "SEO Optimized",
      description: "Content optimized for search engines and user engagement",
      color: "text-green-400"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="AI Content Writer from Zion Tech Group - Create engaging, SEO-optimized content with our advanced AI writing assistant." />
        <meta name="keywords" content="AI content writer, content creation, SEO writing, marketing copy, blog writing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-purple-400 mr-3" />
                <span className="text-purple-400 text-sm font-medium">AI-Powered Content Creation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Content Writer</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your content marketing with our advanced AI writing assistant. 
                Create engaging, SEO-optimized content that drives results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Writing Now
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Content Writer?</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Powerful features designed to make content creation effortless and effective
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-20 px-4">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Content Marketing?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI content writer help you create compelling, SEO-optimized content 
                that engages your audience and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Creating Content
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIContentWriterPage;