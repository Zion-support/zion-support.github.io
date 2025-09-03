import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import { 
  Users, 
  Award, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Heart, 
  Zap,
  Brain,
  Cloud,
  Shield,
  Code,
  Database,
  Lock,
  TrendingUp,
  Clock,
  Star,
  MessageCircle,
  Building,
  Rocket
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new ways to solve complex problems and deliver cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by the success of our clients, building long-term partnerships based on trust and results.'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'We deliver solutions quickly and efficiently, adapting to your changing needs with flexible development processes.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Cloud Architecture',
      experience: '12+ years',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      expertise: 'Cybersecurity',
      experience: '10+ years',
      avatar: 'ER'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development',
      experience: '8+ years',
      avatar: 'DK'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Rocket },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group, a leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get in Touch
            </Link>
            <Link
              href="/careers"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2020, Zion Tech Group emerged from a vision to democratize advanced technology solutions for businesses of all sizes. We believe that cutting-edge AI, cloud infrastructure, and innovative development practices should be accessible to every organization.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our journey began with a small team of passionate technologists who saw the potential to transform how businesses approach digital transformation. Today, we've grown into a comprehensive technology partner serving clients across various industries.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SOC 2 Compliant</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6">
                To empower businesses with innovative technology solutions that drive growth, enhance security, and create sustainable competitive advantages in the digital age.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be the world's most trusted technology partner, known for delivering exceptional results and transforming how businesses operate in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The experts behind our innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.expertise}</p>
                <p className="text-gray-500 text-xs">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let's discuss how our team can help transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a Project
            </Link>
            <Link
              href="/careers"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}