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
;
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
            >
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
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Get in Touch</span>
                  </a>
                  <a
                    href="/services"
                    className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Settings className="w-5 h-5" />
                    <span>Our Services</span>
                  </a>
                >
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Expert Team</h3>
                      <p className="text-gray-300 text-sm">50+ professionals</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Years Experience</h3>
                      <p className="text-gray-300 text-sm">10+ years</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Target className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Projects Completed</h3>
                      <p className="text-gray-300 text-sm">500+ projects</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-orange-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8 text-orange-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Global Reach</h3>
                      <p className="text-gray-300 text-sm">25+ countries</p>
                    >
                  </div>
                >
              </div>
            >
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape our approach to delivering exceptional solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible, embracing new technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="bg-purple-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions, ensuring transparency, honesty, and accountability in everything we do.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-green-500/50 transition-all duration-300">
                <div className="bg-green-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable results for our clients.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                <div className="bg-orange-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and collaboration, working closely with our clients to understand their unique needs and challenges.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all duration-300">
                <div className="bg-red-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Learning</h3>
                <p className="text-gray-300">
                  We are committed to continuous learning and development, staying ahead of industry trends and emerging technologies.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                <div className="bg-yellow-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Growth</h3>
                <p className="text-gray-300">
                  We are dedicated to fostering growth for our clients, our team, and our community through innovative solutions and strategic partnerships.
                </p>
              >
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Leadership Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, technology, and business innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 text-center">
                <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sarah Johnson</h3>
                <p className="text-cyan-400 mb-4">CEO & Founder</p>
                <p className="text-gray-300 text-sm">
                  Visionary leader with 15+ years in AI and technology, passionate about democratizing advanced solutions.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Cpu className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Michael Chen</h3>
                <p className="text-purple-400 mb-4">CTO</p>
                <p className="text-gray-300 text-sm">
                  Technology architect with expertise in machine learning, cloud infrastructure, and scalable systems.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 text-center">
                <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Emily Rodriguez</h3>
                <p className="text-green-400 mb-4">Head of Strategy</p>
                <p className="text-gray-300 text-sm">
                  Strategic thinker focused on business transformation and digital innovation across industries.
                </p>
              >
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already revolutionized their operations with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Your Journey</span>
                </a>
                <a
                  href="/services"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Settings className="w-5 h-5" />
                  <span>Explore Services</span>
                </a>
              >
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;