import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3,
  Brain,
  Cpu,
  Cloud,
  Database,
  Lock,
  TrendingUp,
  Award,
  Target,
  Rocket,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase
} from 'lucide-react';

export const metadata = {
  title: 'Our Team - Zion Tech Group | AI Experts & Technology Leaders',
  description: 'Meet the world-class team of AI experts, engineers, and technology leaders driving innovation at Zion Tech Group.',
  keywords: 'AI team, technology experts, AI engineers, leadership team, Zion Tech Group team',
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            World-class AI experts, engineers, and technology leaders driving innovation and transformation across industries.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders with decades of experience in AI, technology, and enterprise transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">KC</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Kleber Carvalho</h3>
                <p className="text-blue-600 font-medium mb-2">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  Visionary leader with 15+ years in AI and enterprise transformation. 
                  Former Fortune 500 CTO with expertise in quantum computing and autonomous systems.
                </p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  PhD in Computer Science, MIT
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2" />
                  15+ years AI leadership
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  Forbes 30 Under 30
                </div>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">SM</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Sarah Martinez</h3>
                <p className="text-green-600 font-medium mb-2">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  AI research pioneer and quantum computing expert. Led breakthrough projects 
                  at Google DeepMind and OpenAI before joining Zion Tech Group.
                </p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  PhD in Quantum Physics, Stanford
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Former Google DeepMind
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  50+ AI Research Papers
                </div>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-green-600 hover:text-green-700">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-green-600 hover:text-green-700">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-green-600 hover:text-green-700">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">DR</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">David Rodriguez</h3>
                <p className="text-purple-600 font-medium mb-2">Chief AI Officer</p>
                <p className="text-gray-600 text-sm">
                  Enterprise AI strategist with deep expertise in autonomous systems and 
                  machine learning. Former Microsoft AI Research Director.
                </p>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  MS in AI, Carnegie Mellon
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Former Microsoft AI
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  AI Innovation Award 2025
                </div>
              </div>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-purple-600 hover:text-purple-700">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-700">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-700">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Team */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class engineers and AI researchers building the future of enterprise AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">AI Research</h3>
                <p className="text-sm text-gray-600">25+ Researchers</p>
                <p className="text-xs text-gray-500 mt-2">
                  PhD-level researchers in quantum AI, neural networks, and autonomous systems
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">ML Engineering</h3>
                <p className="text-sm text-gray-600">40+ Engineers</p>
                <p className="text-xs text-gray-500 mt-2">
                  Machine learning engineers building scalable AI platforms and systems
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Cloud Infrastructure</h3>
                <p className="text-sm text-gray-600">20+ Engineers</p>
                <p className="text-xs text-gray-500 mt-2">
                  Cloud architects and DevOps experts ensuring scalable, secure AI deployment
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">AI Security</h3>
                <p className="text-sm text-gray-600">15+ Specialists</p>
                <p className="text-xs text-gray-500 mt-2">
                  Cybersecurity experts specializing in AI system protection and governance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovation, collaboration, and excellence drive everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We encourage bold thinking and breakthrough innovations that push the boundaries of what's possible with AI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Excellence</h3>
              <p className="text-gray-600">
                We believe the best solutions come from diverse teams working together toward common goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Success</h3>
              <p className="text-gray-600">
                Our success is measured by the transformative impact we create for our clients and their organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of the AI revolution and work with the world's leading experts in artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/careers" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}