'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  Award, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Globe,
  Zap,
  Heart,
  TrendingUp,
  BarChart,
  Code,
  Database,
  Settings
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and technology solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique challenges and deliver tailored solutions.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and security in everything we do.'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We create solutions that make a real difference in our clients\' businesses and communities.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      description: 'AI and Machine Learning expert with 15+ years of experience in enterprise technology solutions.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Cloud architecture specialist with expertise in scalable infrastructure and DevOps practices.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Leading AI researcher with PhD in Computer Science and multiple published papers.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity expert with certifications in ethical hacking and compliance frameworks.',
      image: '/api/placeholder/300/300'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'AI Innovation Award 2024',
      description: 'Recognized for breakthrough AI solutions in enterprise automation'
    },
    {
      icon: Star,
      title: 'Top 10 AI Companies',
      description: 'Featured in TechCrunch\'s list of most innovative AI companies'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Serving clients across 25+ countries with localized solutions'
    },
    {
      icon: TrendingUp,
      title: '300% Growth',
      description: 'Consistent year-over-year growth in revenue and client base'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading AI and IT solutions company with 10+ years of experience helping businesses transform through technology." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, company history" />
        <meta property="og:title" content="About Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions with a mission to transform businesses through technology" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a leading AI and IT solutions company dedicated to transforming businesses through 
              cutting-edge technology, innovation, and exceptional service delivery.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <Target className="w-12 h-12 text-cyan-400 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, reliable, and 
                  transformative for organizations of all sizes.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To be the global leader in AI and IT solutions, creating a world where technology 
                  seamlessly integrates with business operations to unlock unprecedented potential and 
                  drive sustainable growth.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <achievement.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can transform your business. 
                Get in touch with our experts for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
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
