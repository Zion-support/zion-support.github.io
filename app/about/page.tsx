'use client';
import React, {useState, useEffect } from 'react';
import {Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, Zap, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, TrendingUp, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage: React.FC = () => {const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    {number: '500+', label: 'Projects Completed', icon: Target },
    {number: '300%', label: 'Average ROI', icon: TrendingUp },
    {number: '$50M+', label: 'Client Savings', icon: BarChart },
    {number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    {number: '15+', label: 'Years Experience', icon: Award },
    {number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const values = [
    {icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology, staying ahead of industry trends and delivering cutting-edge solutions.'
    },
    {icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security is at the core of everything we do. We protect your data and systems with bank-level security measures and compliance standards.'
    },
    {icon: Users,
      title: 'Partnership',
      description: 'We believe in building long-term partnerships with our clients, working closely with them to understand their unique needs and deliver tailored solutions.'
    },
    {icon: Globe,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards and delivering results that exceed expectations.'
    }
  ];

  const teamMembers = [
    {name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.webp',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.webp',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/michael-rodriguez.webp',
      bio: 'Full-stack architect specializing in scalable AI systems',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps']
    },
    {name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.webp',
      bio: 'Leading researcher in natural language processing and computer vision',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    }
  ];

  const industries = [
    {name: 'Healthcare', icon: Stethoscope, description: 'AI-powered medical diagnostics and patient care solutions' },
    {name: 'Finance', icon: BarChart, description: 'Advanced fintech solutions and risk management systems' },
    {name: 'Manufacturing', icon: Factory, description: 'Smart manufacturing and industrial automation' },
    {name: 'Education', icon: GraduationCap, description: 'Personalized learning and educational technology' },
    {name: 'Retail', icon: ShoppingBag, description: 'E-commerce optimization and customer experience' },
    {name: 'Transportation', icon: Car, description: 'Autonomous vehicles and smart transportation systems' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" >
      <SEOOptimizer 
        title="About Zion Tech Group - Leading AI & Technology Solutions"
        description="Learn about Zion Tech Group's mission, values, and commitment to delivering cutting-edge AI and technology solutions that transform businesses worldwide."
        keywords="about us, AI company, technology solutions, artificial intelligence, machine learning, enterprise solutions"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center" >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" >
            About
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent" >
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" >
            We are pioneers in artificial intelligence and technology solutions, dedicated to transforming businesses 
            through innovative digital solutions and cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4" >
        <div className="max-w-7xl mx-auto" >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8" >
            {stats.map((stat, index) => (
              <div key={index} className="text-center" >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300" >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2" >{stat.number}</div>
                  <div className="text-sm text-gray-400" >{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4" >
        <div className="max-w-7xl mx-auto" >
          <div className="text-center mb-16" >
            <h2 className="text-4xl font-bold text-white mb-4" >
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" >
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300" >
                <value.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3" >{value.title}</h3>
                <p className="text-gray-300" >{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4" >
        <div className="max-w-7xl mx-auto" >
          <div className="text-center mb-16" >
            <h2 className="text-4xl font-bold text-white mb-4" >
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" >
              Our diverse team of experts brings together decades of experience in AI, 
              technology, and business innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300" >
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center" >
                  <span className="text-2xl font-bold text-white" >{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2" >{member.name}</h3>
                <p className="text-purple-400 mb-3" >{member.role}</p>
                <p className="text-gray-300 text-sm mb-4" >{member.bio}</p>
                <div className="flex flex-wrap gap-2" >
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs" >
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
      <section className="py-20 px-4" >
        <div className="max-w-7xl mx-auto" >
          <div className="text-center mb-16" >
            <h2 className="text-4xl font-bold text-white mb-4" >
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" >
              We provide specialized AI and technology solutions across various industries, 
              helping businesses transform and thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300" >
                <industry.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3" >{industry.name}</h3>
                <p className="text-gray-300" >{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" >
        <div className="max-w-4xl mx-auto text-center" >
          <h2 className="text-4xl font-bold text-white mb-6" >
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8" >
            Let's discuss how our AI and technology solutions can help your business 
            achieve its goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" >
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105" >
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
