
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
<<<<<<< HEAD
  Award, 
  Globe, 
  Rocket, 
  Brain, 
  Shield, 
  Cpu,
  TrendingUp,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Star },
    { label: 'Team Members', value: '50+', icon: Users }
=======
  Rocket, 
  Shield, 
  Brain, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Lightbulb,
  Clock
} from 'lucide-react';

export default function About() {
  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
<<<<<<< HEAD
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
=======
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.',
      color: 'from-purple-500 to-pink-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    },
    {
      icon: Shield,
      title: 'Trust & Security',
<<<<<<< HEAD
      description: 'Your data and business operations are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation journey.'
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'We build solutions that not only solve today\'s problems but prepare you for tomorrow\'s challenges.'
=======
      description: 'Your data and systems are protected with enterprise-grade security and compliance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients and their digital transformation.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations.',
      color: 'from-green-500 to-emerald-500'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
<<<<<<< HEAD
      description: 'Zion Tech Group was established with a vision to democratize AI and emerging technologies.'
    },
    {
      year: '2017',
      title: 'AI Solutions Launch',
      description: 'Launched our first AI-powered business solutions and autonomous systems platform.'
    },
    {
      year: '2019',
      title: 'Quantum Technology',
      description: 'Expanded into quantum computing and quantum-secure solutions for enterprise clients.'
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and served clients across 25+ nations.'
    },
    {
      year: '2023',
      title: 'AI Consciousness Platform',
      description: 'Pioneered the development of AI consciousness evolution and simulation platforms.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the charge in autonomous business operations and next-generation AI systems.'
=======
      description: 'Zion Tech Group established with a vision to democratize AI technology'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business automation platform'
    },
    {
      year: '2022',
      title: 'Enterprise Expansion',
      description: 'Expanded to serve Fortune 500 companies and government agencies'
    },
    {
      year: '2023',
      title: 'Quantum Innovation',
      description: 'Pioneered quantum computing solutions for enterprise applications'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Extended services to international markets and emerging economies'
    },
    {
      year: '2025',
      title: 'AI Revolution',
      description: 'Leading the charge in autonomous AI systems and consciousness evolution'
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
    }
  ];
=======
>>>>>>> origin/main

const AboutPage: React.FC = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through 
              cutting-edge AI, quantum computing, and autonomous systems solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are pioneers in AI technology, quantum computing, and digital transformation, 
            empowering businesses to thrive in the digital age through innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize access to advanced AI and emerging technologies, enabling businesses 
                of all sizes to leverage the power of autonomous systems, quantum computing, and 
                intelligent automation for unprecedented growth and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Democratize AI technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Enable autonomous business operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Drive digital transformation</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To be the global leader in autonomous business technology, pioneering the future 
                of work where AI and humans collaborate seamlessly to create unprecedented value 
                and solve humanity's greatest challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Global AI leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Human-AI collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Solve global challenges</span>
                </div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge AI technology and empower organizations 
                of all sizes to achieve digital transformation through innovative, secure, 
                and scalable solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that every business deserves access to the same powerful AI tools 
                that Fortune 500 companies use, leveling the playing field and driving 
                innovation across industries.
              </p>
              <Link
                to="/mission"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <Target className="w-32 h-32 text-cyan-400" />
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
<<<<<<< HEAD
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
=======
              These principles guide everything we do and shape our culture of innovation and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
=======
      {/* Company History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
<<<<<<< HEAD
              From startup to global technology leader - our story of innovation and growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
=======
              From startup to industry leader, discover the milestones that shaped our company.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-gray-900"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Team Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              cybersecurity, quantum computing, and digital transformation.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-lg"
            >
              <Users className="w-6 h-6" />
              <span>View Our Team</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
<<<<<<< HEAD
            Join hundreds of companies already leveraging our AI and autonomous technology solutions.
=======
            Join hundreds of organizations that trust Zion Tech Group with their digital transformation.
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Our Services
=======
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            </Link>
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zion Tech Group is a leading technology company specializing in innovative solutions 
            for businesses and organizations. We are committed to delivering cutting-edge 
            technology services that drive growth and efficiency.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Pushing the boundaries of what's possible in technology</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Delivering excellence in every project we undertake</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
            <p className="text-gray-600">Building lasting relationships with our clients</p>
>>>>>>> origin/main
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
