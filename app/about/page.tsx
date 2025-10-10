'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  Zap,
  Shield,
  Globe,
  Users,
  Award,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes. We believe that every organization deserves access to the transformative power of AI.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our mission is to bridge the gap between complex AI technologies and practical business applications, ensuring that our clients can leverage the full potential of artificial intelligence to drive growth and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                    Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Our Story
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">AI Solutions</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with AI and technology, always seeking new ways to solve complex problems.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions and prioritize our clients' success above all else.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and work closely with our clients to achieve their goals together.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, delivering solutions that exceed expectations and drive real results.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
                <p className="text-gray-300">
                  We're committed to making a positive impact on businesses worldwide through accessible and powerful AI solutions.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quality</h3>
                <p className="text-gray-300">
                  We maintain the highest quality standards in all our deliverables, ensuring reliable and robust solutions for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, machine learning, and enterprise technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">KJ</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Kleber J.</h3>
                <p className="text-cyan-400 mb-4">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  Visionary leader with 15+ years in AI and enterprise technology. Passionate about democratizing AI for businesses of all sizes.
                </p>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">AS</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI Solutions Team</h3>
                <p className="text-purple-400 mb-4">Machine Learning Engineers</p>
                <p className="text-gray-300 text-sm">
                  Expert team specializing in natural language processing, computer vision, and advanced machine learning algorithms.
                </p>
              </div>
              
              <div className="bg-slate-700/50 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">IT</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">IT Infrastructure Team</h3>
                <p className="text-green-400 mb-4">DevOps & Cloud Engineers</p>
                <p className="text-gray-300 text-sm">
                  Specialists in cloud architecture, DevOps practices, and scalable infrastructure solutions for enterprise applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;