'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  Shield, 
  Zap, 
  Brain, 
  BarChart, 
  CheckCircle, 
  Star, 
  Quote, 
  User, 
  Building, 
  GraduationCap, 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Eye, 
  Settings, 
  Sparkles, 
  Cloud, 
  Cpu, 
  Database, 
  Lock, 
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
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Pioneering the future of business through advanced AI and IT solutions
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  To revolutionize how businesses operate by providing cutting-edge AI solutions and IT services that drive innovation, efficiency, and growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-gray-300">We stay at the forefront of technology to deliver cutting-edge solutions.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                  <p className="text-gray-300">We are committed to delivering the highest quality solutions and services.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Partnership</h3>
                  <p className="text-gray-300">We work closely with our clients to achieve their business goals.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-16 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Shield className="w-10 h-10 text-green-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Integrity</h3>
                  <p className="text-gray-300 text-sm">Honest and transparent in all our dealings</p>
                </div>
                <div className="text-center">
                  <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Agility</h3>
                  <p className="text-gray-300 text-sm">Quick to adapt and respond to change</p>
                </div>
                <div className="text-center">
                  <Globe className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Global Impact</h3>
                  <p className="text-gray-300 text-sm">Making a positive difference worldwide</p>
                </div>
                <div className="text-center">
                  <Award className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                  <p className="text-gray-300 text-sm">Striving for the highest standards</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get in Touch
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Our Services
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;