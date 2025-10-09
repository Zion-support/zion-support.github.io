'use client';
import React, { useState, useEffect, Suspense, lazy, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  BarChart, 
  Brain, 
  Cloud, 
  Sparkles,
  Award,
  Target,
  Globe,
  Phone,
  Mail,
  TrendingUp,
  Award as Trophy,
  Users as Team,
  Target as Goal
} from 'lucide-react';

// Lazy load components
const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '100+', label: 'Happy Clients' },
    { icon: <Trophy className="w-8 h-8" />, value: '50+', label: 'Successful Projects' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '300%', label: 'Average ROI' },
    { icon: <Shield className="w-8 h-8" />, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the value we deliver to our clients.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Trust',
      description: 'We maintain the highest security standards and build lasting relationships based on trust and transparency.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from initial consultation to ongoing support.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '👨‍💼'
    },
    {
      name: 'AI Research Team',
      role: 'Machine Learning Engineers',
      description: 'Expert team of PhD-level researchers and engineers.',
      image: '🧠'
    },
    {
      name: 'DevOps Specialists',
      role: 'Infrastructure Experts',
      description: 'Cloud and infrastructure specialists ensuring 99.9% uptime.',
      image: '☁️'
    },
    {
      name: 'Customer Success',
      role: 'Support Team',
      description: 'Dedicated team ensuring your success and satisfaction.',
      image: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
        <Navigation />
      </Suspense>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Pioneering the Future of AI and IT Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Founded in 2020, Zion Tech Group has been at the forefront of artificial intelligence and 
            information technology innovation. We combine cutting-edge AI research with practical business 
            applications to deliver transformative solutions that drive real results.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="text-cyan-400 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To democratize artificial intelligence and advanced technology, making it accessible 
                  and beneficial for businesses of all sizes. We believe that every organization, 
                  regardless of size or industry, should have access to cutting-edge AI solutions 
                  that can transform their operations and drive growth.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our mission is to bridge the gap between complex AI research and practical business 
                  applications, delivering solutions that are not only technologically advanced but 
                  also immediately actionable and profitable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button inline-flex items-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                  <Link
                    to="/contact"
                    className="cyber-button inline-flex items-center"
                    style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get in Touch
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation in Action</h3>
                <p className="text-gray-300">
                  Transforming businesses through the power of artificial intelligence and cutting-edge technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 text-sm font-medium mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-white mb-3">Artificial Intelligence</h3>
                <p className="text-gray-300 text-sm">
                  Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, 
                  and Predictive Analytics using the latest AI frameworks and models.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300 text-sm">
                  AWS, Azure, Google Cloud Platform, Kubernetes, Docker, and advanced 
                  cloud-native architectures for scalable and reliable solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Security & Compliance</h3>
                <p className="text-gray-300 text-sm">
                  Enterprise-grade security, SOC 2 compliance, GDPR compliance, 
                  and advanced cybersecurity measures to protect your data.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing number of businesses that have transformed their operations 
            with our AI and IT solutions. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default AboutPage;