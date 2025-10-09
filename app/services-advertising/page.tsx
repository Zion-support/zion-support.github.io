'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, TrendingUp, Users, Award, Shield, Zap, Brain, Cloud, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesAdvertising: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Our Services & Solutions">
            Our Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Comprehensive AI, IT, and Micro SAAS Solutions for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our cutting-edge technology solutions. From AI-powered automation to enterprise IT services, 
            we deliver results that drive growth, efficiency, and innovation. Trusted by 500+ companies worldwide.
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
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Service Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quantum-card p-8 text-center energy-pulse">
              <Brain className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence solutions including machine learning, natural language processing, 
                computer vision, and predictive analytics.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Machine Learning Models</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Natural Language Processing</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Computer Vision</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Predictive Analytics</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-2xl font-bold text-purple-400 mb-2">Starting at $1,500/month</div>
                <a href="/ai-services" className="text-purple-400 hover:text-purple-300 font-medium">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="quantum-card p-8 text-center energy-pulse">
              <Cloud className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive IT infrastructure, cloud services, cybersecurity, and digital transformation solutions 
                for enterprise organizations.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Cloud Migration & Setup</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Cybersecurity Solutions</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>DevOps Automation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>IT Infrastructure Design</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-2xl font-bold text-blue-400 mb-2">Starting at $2,500/month</div>
                <a href="/it-services" className="text-blue-400 hover:text-blue-300 font-medium">
                  Learn More →
                </a>
              </div>
            </div>

            <div className="quantum-card p-8 text-center energy-pulse">
              <Code className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Micro SAAS Solutions</h3>
              <p className="text-gray-300 mb-6">
                Ready-to-use AI-powered applications and tools that solve specific business problems with 
                intelligent automation and insights.
              </p>
              <div className="space-y-2 text-left">
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>AI Project Management</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Social Media Automation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Email Marketing AI</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Customer Support Bots</span>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-2xl font-bold text-green-400 mb-2">Starting at $49/month</div>
                <a href="/micro-saas" className="text-green-400 hover:text-green-300 font-medium">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Micro SAAS Services */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Featured Micro SAAS Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <div className="text-4xl mb-4 text-center">📋</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Project Manager Pro</h3>
              <p className="text-gray-300 mb-4 text-center">
                Intelligent project management with AI automation, risk prediction, and resource optimization.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">$99-$299/month</div>
                <div className="text-sm text-gray-400">Up to 100 team members</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI risk prediction with 95% accuracy
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Smart resource optimization
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Predictive analytics dashboard
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Automated workflow creation
                </li>
              </ul>
              <a href="/ai-project-manager" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card p-6">
              <div className="text-4xl mb-4 text-center">📱</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Social Media Manager</h3>
              <p className="text-gray-300 mb-4 text-center">
                Automated social media management with AI content creation, scheduling, and analytics.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-pink-400 mb-2">$49-$399/month</div>
                <div className="text-sm text-gray-400">Up to 10 social accounts</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI content generation
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Optimal posting times
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Multi-platform support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced analytics
                </li>
              </ul>
              <a href="/ai-social-media-manager" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card p-6">
              <div className="text-4xl mb-4 text-center">📧</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Email Marketing Pro</h3>
              <p className="text-gray-300 mb-4 text-center">
                AI-powered email campaigns with personalization, automation, and predictive analytics.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-purple-400 mb-2">$79-$499/month</div>
                <div className="text-sm text-gray-400">Up to 25,000 subscribers</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI personalization
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Smart segmentation
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Optimal send times
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  A/B testing automation
                </li>
              </ul>
              <a href="/ai-email-marketing" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card p-6">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Customer Support Bot</h3>
              <p className="text-gray-300 mb-4 text-center">
                24/7 intelligent customer support with natural language processing and smart routing.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-400 mb-2">$99-$799/month</div>
                <div className="text-sm text-gray-400">Up to 10,000 conversations</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Natural language processing
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Intelligent routing
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Multi-channel support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Sentiment analysis
                </li>
              </ul>
              <a href="/ai-customer-support-chatbot" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card p-6">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Data Analytics Dashboard</h3>
              <p className="text-gray-300 mb-4 text-center">
                Transform data into actionable insights with AI-powered analytics and predictive modeling.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-blue-400 mb-2">$199-$1,299/month</div>
                <div className="text-sm text-gray-400">Up to 20 data sources</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Predictive analytics
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Real-time dashboards
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI-powered insights
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Data integration
                </li>
              </ul>
              <a href="/ai-data-analytics-dashboard" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card p-6">
              <div className="text-4xl mb-4 text-center">💻</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI-Powered CRM</h3>
              <p className="text-gray-300 mb-4 text-center">
                Intelligent customer relationship management with AI insights and automated workflows.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-orange-400 mb-2">$149/month</div>
                <div className="text-sm text-gray-400">Up to 25 team members</div>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  AI lead scoring
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Automated follow-ups
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Predictive analytics
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Smart recommendations
                </li>
              </ul>
              <a href="/ai-crm" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="quantum-card p-6 text-center energy-pulse">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
              <p className="text-gray-300 text-sm">
                500+ successful projects delivered with 98% client satisfaction rate
              </p>
            </div>

            <div className="quantum-card p-6 text-center energy-pulse">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security with SOC 2 Type II certification and GDPR compliance
              </p>
            </div>

            <div className="quantum-card p-6 text-center energy-pulse">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Fast Implementation</h3>
              <p className="text-gray-300 text-sm">
                Rapid deployment with 50% faster implementation than industry average
              </p>
            </div>

            <div className="quantum-card p-6 text-center energy-pulse">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">
                Round-the-clock support with dedicated account managers and technical experts
              </p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="quantum-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Our Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="cyber-card p-6">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">500+</h3>
                <p className="text-gray-300">Projects Delivered</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-3xl font-bold text-green-400 mb-2">98%</h3>
                <p className="text-gray-300">Client Satisfaction</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-3xl font-bold text-purple-400 mb-2">300%</h3>
                <p className="text-gray-300">Average ROI</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-3xl font-bold text-pink-400 mb-2">24/7</h3>
                <p className="text-gray-300">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with our experts to discuss your project requirements and discover how our solutions 
            can drive your business forward.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-2">+1 (302) 464-0950</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Response within 2 hours</p>
            </div>
            <div className="cyber-card p-6">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesAdvertising;