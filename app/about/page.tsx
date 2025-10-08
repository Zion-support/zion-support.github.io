import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Award, Globe, Cpu, Brain, Target, Heart, Phone, Mail, MapPin, ExternalLink, ChevronRight, Award as AwardIcon, Users as UsersIcon, Globe as GlobeIcon, Zap as ZapIcon } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: '🏢' },
    { number: '$2.5B+', label: 'Cost Savings Delivered', icon: '💰' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
    { number: '150K+', label: 'Active Users', icon: '👥' },
    { number: '24/7', label: 'Support Available', icon: '🎧' },
    { number: '50+', label: 'Expert Team Members', icon: '🧠' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'We build long-term relationships with our clients, understanding their unique needs and growing with their business.'
    },
    {
      icon: '🔒',
      title: 'Security & Trust',
      description: 'Bank-level security and compliance are at the core of everything we do, ensuring your data and systems are always protected.'
    },
    {
      icon: '📈',
      title: 'Proven Results',
      description: 'Our solutions deliver measurable ROI, with clients seeing an average 300% return on investment within 6 months.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Quantum Computing',
      experience: '15+ years',
      image: '👨‍💼',
      description: 'Visionary leader with expertise in AI strategy, quantum computing, and enterprise transformation.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Machine Learning & Cloud Architecture',
      experience: '12+ years',
      image: '👩‍💻',
      description: 'Technical architect specializing in scalable AI systems and cloud infrastructure design.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Deep Learning & NLP',
      experience: '10+ years',
      image: '👨‍🔬',
      description: 'AI research lead with expertise in deep learning, natural language processing, and computer vision.'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Cybersecurity',
      expertise: 'Cybersecurity & Compliance',
      experience: '14+ years',
      image: '👩‍🔒',
      description: 'Cybersecurity expert ensuring enterprise-grade security across all our solutions.'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions in enterprise automation',
      organization: 'TechCrunch Disrupt'
    },
    {
      year: '2023',
      title: 'Best AI Company',
      description: 'Awarded for outstanding AI implementation and client success',
      organization: 'AI Business Awards'
    },
    {
      year: '2023',
      title: 'Cybersecurity Excellence',
      description: 'Recognized for zero-security-breach track record',
      organization: 'Security Industry Association'
    },
    {
      year: '2022',
      title: 'Fastest Growing Tech Company',
      description: '300% growth in revenue and client base',
      organization: 'Inc. 5000'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-intense">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Pioneering the Future of AI and Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Founded in 2020, Zion Tech Group has emerged as a leading provider of AI-powered solutions, 
              quantum computing, and autonomous systems. We transform businesses through cutting-edge technology, 
              delivering unprecedented growth and efficiency.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our Impact in Numbers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card hologram-card text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Zion Tech Group was founded with a simple yet ambitious vision: to democratize access to 
                cutting-edge AI and technology solutions. What started as a small team of passionate 
                technologists has grown into a global leader in AI implementation and digital transformation.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our journey began when our founder, Dr. Kleber Santos, recognized the immense potential 
                of AI to transform businesses but saw a gap in accessible, enterprise-grade solutions. 
                Today, we've helped over 500 enterprises harness the power of AI, delivering over $2.5 billion 
                in cost savings and efficiency gains.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Based in Middletown, Delaware, we serve clients globally, from startups to Fortune 500 companies, 
                helping them navigate the complex landscape of modern technology and emerge as industry leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/services"
                  className="cyber-button"
                >
                  Explore Our Services
                </a>
                <a
                  href="/contact"
                  className="cyber-button"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Get in Touch
                </a>
              </div>
            </div>
            
            <div className="cyber-card hologram-card">
              <div className="text-6xl mb-6 text-center">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Our Mission</h3>
              <p className="text-gray-300 text-center leading-relaxed">
                To empower businesses with transformative AI and technology solutions that drive innovation, 
                efficiency, and sustainable growth in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="cyber-card hologram-card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Meet Our Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="cyber-card hologram-card text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-gray-400 mb-2">{member.expertise}</div>
                <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Awards & Recognition
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="cyber-card hologram-card">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl font-bold text-cyan-400">{achievement.year}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300 mb-2">{achievement.description}</p>
                    <div className="text-sm text-cyan-400">{achievement.organization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Focus Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our Technology Focus
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4">Artificial Intelligence</h3>
              <p className="text-gray-300 leading-relaxed">
                Machine learning, deep learning, natural language processing, and computer vision solutions 
                that transform how businesses operate and make decisions.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 leading-relaxed">
                Next-generation quantum computing capabilities for complex problem solving, optimization, 
                and breakthrough computational power.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-4">Autonomous Systems</h3>
              <p className="text-gray-300 leading-relaxed">
                Self-managing and self-optimizing systems that operate independently, making intelligent 
                decisions and adapting to changing conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their operations with our AI and technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;