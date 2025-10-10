import React from 'react';
import { Helmet } from 'react-helmet-async';
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
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span>Get in Touch</span>
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors"
                  >
                    <Settings className="w-5 h-5 mr-2" />
                    <span>Our Services</span>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">50+</h3>
                  <p className="text-gray-300">Expert Team Members</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">100+</h3>
                  <p className="text-gray-300">Successful Projects</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">25+</h3>
                  <p className="text-gray-300">Countries Served</p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <Star className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">4.9/5</h3>
                  <p className="text-gray-300">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our culture of excellence and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-8 text-center">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with AI and technology, 
                  always seeking new ways to solve complex problems.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-8 text-center">
                <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions and 
                  deliver on our promises with transparency and honesty.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-8 text-center">
                <Target className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for perfection in every project, ensuring our solutions 
                  exceed expectations and deliver measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-lg"
                >
                  <Settings className="w-5 h-5 mr-2" />
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;