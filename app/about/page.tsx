<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react;

import { Helmet } from 'react-helmet-async;

import {
=======
=======
'use client';

>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  Users,
  Target,
  Award,
  Globe,
  Zap,
  Shield,
  Lightbulb,
  Heart,
  ArrowRight,
  Play,
<<<<<<< HEAD
  Download,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
<<<<<<< HEAD
  MapPin
;

const AboutPage: React.FC = () => {
  return (<div>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions<
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation. 
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation 
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section *
        <section className="pt-20 pb-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6>
                About Zion Tech Group
              <
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto>
} from 'lucide-react;

;

const AboutPage: React.FC = () => {              <
            <
          <
        <

        {/* Mission Section *
<section className=py-20 bg-slate-800
          <div className=container mx-auto px-4>
            <div className=grid grid-cols-1 lg:grid-cols-2 gap-12 items-center>
              <div>
                <h2 className=text-4xl font-bold text-white mb-6>Our Mission<
                <p className=text-lg text-gray-300 mb-6>
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                <
                <p className=text-lg text-gray-300 mb-8>
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                <
                <div className="flex flex-col sm: flex-row gap-4>
                <div className="flex flex-col sm:flex-row gap-4>
                  <a
                    href=
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2
                  >
                  >
                    <MessageCircle className="w-5 h-5 
                    <span>Get in Touch<
                  <
                  <a
                    href=
                    className=border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white
                  >
                    <Settings className="w-5 h-5 
                    <span>Our Services<
                  <
                <
              <
              <div className="relative>
                <div className=bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white
                  <div className="space-y-6>
                    <div className="flex items-center space-x-3>
                      <div className="w-3 h-3 bg-red-500 rounded-full><
                      <div className="w-3 h-3 bg-yellow-500 rounded-full><
                      <div className="w-3 h-3 bg-green-500 rounded-full><
                    <
                    <div className="space-y-4>
                      <div className="h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded><
                      <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/4><
                      <div className="h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded w-1/2><
                    <
                    <div className="text-center text-white>
                      <div className="text-2xl font-bold>AI Dashboard<
                      <div className="text-sm text-gray-300>Real-time Analytics<
                    <
                    <MessageCircle className="w-5 h-5 />                    <span>Get in Touch</span>
                  </a>
                  <a
                    href=/services
                    className=border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2
                  >
                    <Settings className=w-5 h-5 />
                    <span>Our Services</span>
                  </a>
                </div>
              </div>
              <div className=relative>
                <div className=bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10>
                  <div className=grid grid-cols-2 gap-6>
                    <div className=text-center>
                      <div className=bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4>
                        <Users className=w-8 h-8 text-cyan-400 />
                      </div>
                      <h3 className=text-white font-semibold mb-2>Expert Team</h3>
                      <p className=text-gray-300 text-sm>50+ professionals</p>
                    </div>
                    <div className=text-center>
                      <div className=bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4>
                        <Award className=w-8 h-8 text-purple-400 />
                      </div>
                      <h3 className=text-white font-semibold mb-2>Years Experience</h3>
                      <p className=text-gray-300 text-sm>10+ years</p>
                    </div>
                    <div className=text-center>
                      <div className=bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4>
                        <Target className=w-8 h-8 text-green-400 />
                      </div>
                      <h3 className=text-white font-semibold mb-2>Projects Completed</h3>
                      <p className=text-gray-300 text-sm>500+ projects</p>
                    </div>
                    <div className=text-center>
                      <div className=bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4>
                        <Globe className=w-8 h-8 text-orange-400 />
                      </div>
                      <h3 className=text-white font-semibold mb-2>Global Reach</h3>
                      <p className=text-gray-300 text-sm>25+ countries</p>
                    </div>
                  </div>
=======
  MapPin;
} from 'lucide-react';

const AboutPage: React.FC = () => {}
=======
  MessageCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, innovation, mission, values" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get in Touch</span>
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
            </div>
          </div>
        </section>

        {/* Mission Section */}
<<<<<<< HEAD
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="text-green-400 w-6 h-6" />
                  <span className="text-white font-semibold">Innovation First</span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
                  <Brain className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
                  <p className="text-gray-200">
                    Our advanced AI technologies are designed to solve complex business challenges 
                    and unlock new opportunities for growth and efficiency.
                  </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                </div>
=======
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To democratize advanced AI and IT solutions, making cutting-edge technology accessible to businesses of all sizes while fostering innovation and sustainable growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Pioneering the future of AI and IT solutions</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">Working together to achieve extraordinary results</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional quality in everything we do</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
                  <
                <
              <
            <
          <
<
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
                These principles guide everything we do and shape our approach to innovation and client success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions and solutions.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We continuously push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners in their success journey.
                </p>
=======
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">We maintain the highest ethical standards in all our interactions and business practices.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We continuously push boundaries and explore new possibilities in technology.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Heart className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
                <p className="text-gray-300">We are passionate about technology and its potential to transform the world.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Teamwork</h3>
                <p className="text-gray-300">We believe in the power of collaboration and diverse perspectives.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Zap className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">We strive for excellence in every project and deliver outstanding results.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">We aim to make a positive impact on businesses and communities worldwide.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Team Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                software development, and business transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Research Team</h3>
                <p className="text-gray-400">Leading AI researchers and engineers</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Engineering Team</h3>
                <p className="text-gray-400">Full-stack developers and system architects</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Business Team</h3>
                <p className="text-gray-400">Strategy and client success specialists</p>
=======
        {/* Stats Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">By the Numbers</h2>
              <p className="text-xl text-gray-300">Our impact in numbers</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
                <div className="text-gray-300">Countries Served</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
<<<<<<< HEAD
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with AI? Let's start a conversation about your goals and how we can help.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
              </div>
=======
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Your Project</span>
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
