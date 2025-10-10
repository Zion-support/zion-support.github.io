'use client';

import React from 'react';
import {
  Brain,
  Shield,
  Target,
  Users,
  Award,
  Globe,
  TrendingUp,
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of business through cutting-edge AI and IT solutions. 
                We transform ideas into intelligent systems that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Our Story
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Meet the Team
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and IT solutions, making cutting-edge technology 
                  accessible to businesses of all sizes. We believe every organization deserves 
                  the power of intelligent automation and data-driven insights.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Innovation First</h3>
                      <p className="text-gray-300">Constantly pushing the boundaries of what's possible</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Security & Trust</h3>
                      <p className="text-gray-300">Enterprise-grade security in everything we build</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">Results-Driven</h3>
                      <p className="text-gray-300">Measurable outcomes that drive business growth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">500+</div>
                      <div className="text-indigo-200">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">99%</div>
                      <div className="text-indigo-200">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">50+</div>
                      <div className="text-indigo-200">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">5+</div>
                      <div className="text-indigo-200">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                machine learning, software development, and business strategy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Kleber Santos</h3>
                <p className="text-indigo-400 mb-3">CEO & Founder</p>
                <p className="text-gray-300">
                  Visionary leader with 15+ years in AI and technology innovation. 
                  Passionate about transforming businesses through intelligent solutions.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sarah Johnson</h3>
                <p className="text-indigo-400 mb-3">CTO</p>
                <p className="text-gray-300">
                  Technical expert specializing in machine learning and cloud architecture. 
                  Leads our engineering teams in building scalable AI solutions.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Michael Chen</h3>
                <p className="text-indigo-400 mb-3">Lead AI Engineer</p>
                <p className="text-gray-300">
                  AI researcher and developer with expertise in deep learning and NLP. 
                  Drives innovation in our AI product development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with AI and technology.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security</h3>
                <p className="text-gray-300">
                  Your data and systems are protected with enterprise-grade security measures.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Results</h3>
                <p className="text-gray-300">
                  We focus on delivering measurable business outcomes and ROI.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Partnership</h3>
                <p className="text-gray-300">
                  We work closely with our clients as strategic technology partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started Today
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;