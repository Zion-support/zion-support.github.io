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
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      expertise: 'AI Strategy & Leadership',
      image: '/images/team/sarah-johnson.jpg',
      bio: '20+ years in AI and technology leadership, former VP at Google AI.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      expertise: 'Quantum Computing & AI',
      image: '/images/team/michael-chen.jpg',
      bio: 'Leading expert in quantum algorithms and machine learning systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & NLP',
      image: '/images/team/emily-rodriguez.jpg',
      bio: 'PhD in Computer Science, published researcher in AI and robotics.'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      expertise: 'Cloud Infrastructure & DevOps',
      image: '/images/team/david-kim.jpg',
      bio: '15+ years building scalable cloud platforms and distributed systems.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, always seeking the next breakthrough.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable results and ROI.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more efficient, and more connected.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '300%', label: 'Average ROI' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
  ];
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Experts</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI, quantum computing, and IT solutions. Discover how we help businesses achieve 300% ROI." />
        <meta name="keywords" content="about us, AI experts, IT consulting team, quantum computing specialists, technology leadership, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                About
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {' '}Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are a team of passionate technologists, AI researchers, and business strategists 
                dedicated to transforming enterprises through cutting-edge technology solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
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
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded"></div>
                      <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded w-1/2"></div>
                    </div>
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold">AI Dashboard</div>
                      <div className="text-sm text-gray-300">Real-time Analytics</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
</section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                World-class experts in AI, quantum computing, and enterprise technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <User className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-cyan-400 font-medium mb-2">
                      {member.role}
                    </div>
                    <div className="text-sm text-gray-300 mb-3">
                      {member.expertise}
                    </div>
                    <p className="text-sm text-gray-400">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expertise can help transform your business 
                and achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start a Project</span>
                </a>
                <a
                  href="/contact"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact Us</span>
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