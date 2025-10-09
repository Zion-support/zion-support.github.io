'use client';
import React from 'react';
import { Share2, TrendingUp, Users, BarChart3, Zap, Shield, Clock, CheckCircle, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISocialMediaManager: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Social Media Manager">
            AI Social Media Manager
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Automate Your Social Media with AI-Powered Content Creation
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your social media presence with our AI-powered platform that creates engaging content, 
            optimizes posting times, and analyzes performance. Increase engagement by 300% and save 20 hours per week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </section>

        {/* Platform Support */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Supported Platforms
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="quantum-card p-6 text-center energy-pulse">
              <Instagram className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Instagram</h3>
              <p className="text-gray-300 text-sm">Stories, Posts, Reels, IGTV</p>
            </div>
            <div className="quantum-card p-6 text-center energy-pulse">
              <Twitter className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Twitter</h3>
              <p className="text-gray-300 text-sm">Tweets, Threads, Spaces</p>
            </div>
            <div className="quantum-card p-6 text-center energy-pulse">
              <Facebook className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Facebook</h3>
              <p className="text-gray-300 text-sm">Posts, Stories, Videos</p>
            </div>
            <div className="quantum-card p-6 text-center energy-pulse">
              <Linkedin className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-300 text-sm">Posts, Articles, Videos</p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            AI-Powered Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">✍️</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Content Generation</h3>
              <p className="text-gray-300 mb-4 text-center">
                Generate engaging posts, captions, and hashtags tailored to your brand voice and audience.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Brand voice consistency</li>
                <li>• Trend-based content</li>
                <li>• Multi-language support</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📅</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Scheduling</h3>
              <p className="text-gray-300 mb-4 text-center">
                AI determines optimal posting times based on your audience's activity patterns.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Optimal timing analysis</li>
                <li>• Time zone optimization</li>
                <li>• Content calendar automation</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Advanced Analytics</h3>
              <p className="text-gray-300 mb-4 text-center">
                Get deep insights into your social media performance with AI-powered recommendations.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Engagement prediction</li>
                <li>• Audience insights</li>
                <li>• ROI tracking</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🎨</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Visual Content Creation</h3>
              <p className="text-gray-300 mb-4 text-center">
                AI-generated images, videos, and graphics that match your brand aesthetic.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Custom image generation</li>
                <li>• Video editing automation</li>
                <li>• Brand template library</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Chatbot Integration</h3>
              <p className="text-gray-300 mb-4 text-center">
                AI-powered chatbots that respond to comments and messages 24/7.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Automated responses</li>
                <li>• Sentiment analysis</li>
                <li>• Lead qualification</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🔍</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Trend Monitoring</h3>
              <p className="text-gray-300 mb-4 text-center">
                Stay ahead of trends with AI that monitors hashtags, mentions, and viral content.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time trend detection</li>
                <li>• Competitor analysis</li>
                <li>• Viral content prediction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 social accounts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  50 AI-generated posts/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>

            <div className="quantum-card p-8 energy-pulse border-2 border-cyan-400">
              <div className="text-center mb-4">
                <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$149<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 social accounts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited AI posts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Visual content creation
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Start Free Trial
              </a>
            </div>

            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$399<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited accounts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="quantum-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">300%</h3>
                <p className="text-gray-300">Increase in Engagement</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">20hrs</h3>
                <p className="text-gray-300">Time Saved Per Week</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">85%</h3>
                <p className="text-gray-300">Follower Growth</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-pink-400 mb-2">250%</h3>
                <p className="text-gray-300">ROI Improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Social Media?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="cyber-card p-6">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISocialMediaManager;