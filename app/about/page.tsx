'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, Zap, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, TrendingUp, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: BarChart },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.webp',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.webp',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/michael-rodriguez.webp',
      bio: 'Full-stack architect specializing in scalable cloud solutions',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.webp',
      bio: 'Leading researcher in neural networks and deep learning applications',
      expertise: ['Deep Learning', 'Neural Networks', 'AI Ethics']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and technology solutions.'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'We build secure, reliable solutions that our clients can depend on for their critical operations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their success is our success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver exceptional quality in everything we do, from code to customer service.'
    }
  ];

  const industries = [
    { icon: Building, name: 'Enterprise', description: 'Large-scale AI solutions for Fortune 500 companies' },
    { icon: Factory, name: 'Manufacturing', description: 'Smart factory automation and predictive maintenance' },
    { icon: Car, name: 'Automotive', description: 'Autonomous vehicles and smart transportation systems' },
    { icon: Plane, name: 'Aerospace', description: 'Advanced AI for flight operations and safety systems' },
    { icon: Ship, name: 'Maritime', description: 'Smart shipping and port management solutions' },
    { icon: Train, name: 'Railway', description: 'Intelligent rail systems and predictive maintenance' },
    { icon: Home, name: 'Smart Cities', description: 'Urban AI solutions for sustainable living' },
    { icon: Heart, name: 'Healthcare', description: 'AI-powered medical diagnostics and treatment' },
    { icon: Stethoscope, name: 'Medical', description: 'Advanced healthcare AI and telemedicine' },
    { icon: GraduationCap, name: 'Education', description: 'Personalized learning and educational AI' },
    { icon: Briefcase, name: 'Finance', description: 'AI-driven financial services and risk management' },
    { icon: Wrench, name: 'Construction', description: 'Smart construction and project management' },
    { icon: Hammer, name: 'Mining', description: 'Automated mining operations and safety systems' },
    { icon: Paintbrush, name: 'Creative', description: 'AI-powered creative tools and content generation' },
    { icon: Scissors, name: 'Fashion', description: 'Smart fashion design and supply chain optimization' },
    { icon: BookOpen, name: 'Publishing', description: 'AI content creation and publishing automation' },
    { icon: Calculator, name: 'Accounting', description: 'Automated accounting and financial analysis' },
    { icon: Calendar, name: 'Events', description: 'Smart event management and planning' },
    { icon: Clock3, name: 'Logistics', description: 'Intelligent supply chain and logistics optimization' },
    { icon: Compass, name: 'Navigation', description: 'Advanced navigation and mapping solutions' }
  ];

  const technologies = [
    { name: 'Machine Learning', icon: Brain, description: 'Advanced ML algorithms and neural networks' },
    { name: 'Deep Learning', icon: Cpu, description: 'Deep neural networks for complex problem solving' },
    { name: 'Natural Language Processing', icon: MessageSquare, description: 'AI-powered language understanding and generation' },
    { name: 'Computer Vision', icon: Eye, description: 'Image recognition and visual intelligence' },
    { name: 'Robotics', icon: Settings, description: 'Intelligent automation and robotic systems' },
    { name: 'Quantum Computing', icon: Zap, description: 'Next-generation quantum algorithms' },
    { name: 'Cloud Computing', icon: Cloud, description: 'Scalable cloud infrastructure and services' },
    { name: 'Edge Computing', icon: Smartphone, description: 'Distributed computing at the edge' },
    { name: 'Blockchain', icon: Lock, description: 'Secure, decentralized AI applications' },
    { name: 'IoT', icon: Globe, description: 'Internet of Things and connected devices' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="About Zion Tech Group - Leading AI & IT Solutions Company"
        description="Learn about Zion Tech Group's mission, team, and expertise in AI, machine learning, and enterprise IT solutions. Discover our innovative approach to technology."
        keywords="about zion tech, AI company, machine learning experts, enterprise solutions, technology team"
        canonicalUrl="https://ziontechgroup.com/about"
      />
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Pioneering the future of AI and technology solutions, we empower businesses to transform their operations through cutting-edge innovation.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                    isLoaded ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To democratize AI and advanced technology, making it accessible and beneficial for businesses of all sizes. 
                We believe that every organization should have the power to leverage cutting-edge technology to solve complex problems, 
                drive innovation, and create sustainable competitive advantages.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                  <p className="text-gray-300">We continuously push the boundaries of what's possible with AI and technology.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Client Success</h3>
                  <p className="text-gray-300">Your success is our success. We're committed to delivering measurable results.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Ethical AI</h3>
                  <p className="text-gray-300">We develop AI solutions that are fair, transparent, and beneficial to society.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, technology, and business innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">{member.name}</h3>
                  <p className="text-cyan-400 text-center mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm text-center mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full mr-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions span across multiple industries, delivering transformative results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <industry.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Master</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest and most advanced technologies to build cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <tech.icon className="w-10 h-10 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">{tech.name}</h3>
                  <p className="text-gray-300 text-sm text-center">{tech.description}</p>
                </div>
              ))}
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and technology solutions can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Schedule Consultation
                  <Phone className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
