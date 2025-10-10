'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  Target, 
  Award, 
  Globe, 
  CheckCircle, 
  Star, 
  Quote, 
  User, 
  Building, 
  GraduationCap, 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Your data and systems are protected with enterprise-grade security measures and best practices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring solutions that truly meet their needs.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/api/placeholder/150/150',
      bio: 'Technical expert specializing in AI architecture and system design.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '/api/placeholder/150/150',
      bio: 'Creative director focused on user experience and interface design.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: '/api/placeholder/150/150',
      bio: 'Full-stack developer with expertise in modern web technologies.'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Awarded "Best AI Solutions Provider" by TechWorld 2023'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 25+ countries worldwide'
    },
    {
      icon: BarChart,
      title: 'Proven Results',
      description: 'Average 40% efficiency improvement for our clients'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: '100% of projects delivered on time and within budget'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering cutting-edge AI and IT solutions that drive business success." />
        <meta name="keywords" content="about us, company, team, mission, values, AI solutions, IT services" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about our mission, values, and team dedicated to AI and IT innovation." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a forward-thinking technology company dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, powerful, and transformative.
                </p>
                <div className="flex items-center text-purple-400">
                  <Quote className="w-6 h-6 mr-2" />
                  <span className="text-lg font-medium">"Innovation is our passion, excellence is our standard."</span>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-300 text-lg mb-6">
                  To be the global leader in AI and IT solutions, recognized for our innovation, reliability, and commitment to client success. We envision a future where technology seamlessly integrates with business operations.
                </p>
                <div className="flex items-center text-purple-400">
                  <Star className="w-6 h-6 mr-2" />
                  <span className="text-lg font-medium">"Building tomorrow's technology today."</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <value.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <achievement.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                  <p className="text-gray-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;